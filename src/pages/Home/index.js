import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ICArrowDown, ICArrowRightSecondary, ICSearchSecondary} from '../../assets/icons';
import {Gap, TextInputCostum} from '../../components/atom';
import {didTransaction} from '../../configs/redux/action';
import {pages, texts, wp} from '../../configs/styles';
import {colors, radioProps} from '../../constants';
import {bulan, formatRupiah} from '../../utils';
import Modal from 'react-native-modal';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);
  const loading = transaction.dataTransactionLoading;
  const dataTransactionSuccess = transaction.dataTransactionSuccess;
  const [listTransaction, setlistTransaction] = useState(dataTransactionSuccess);
  const [modalFilter, setmodalFilter] = useState(false);
  const [filterindex, setfilterindex] = useState(0);

  console.log(transaction);

  useEffect(() => {
    dispatch(didTransaction());
  }, []);

  function filterTransaction(keyword) {
    let filteredData = dataTransactionSuccess.filter(
      (item, index) =>
        item.sender_bank.toLowerCase().includes(keyword.toLowerCase()) ||
        item.beneficiary_name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.beneficiary_bank.toLowerCase().includes(keyword.toLowerCase()) ||
        item.amount.toString().toLowerCase().includes(keyword.toLowerCase()),
    );
    setlistTransaction(filteredData);
  }

  function filterModal(keyword) {
    let filteredData = [];
    if (keyword === 1) {
      filteredData = listTransaction.sort((a, b) => a.beneficiary_name.localeCompare(b.beneficiary_name));
    } else if (keyword === 2) {
      filteredData = listTransaction.sort((a, b) => b.beneficiary_name.localeCompare(a.beneficiary_name));
    } else if (keyword === 3) {
      filteredData = listTransaction.sort((a, b) => new Date(a.completed_at) - new Date(b.completed_at));
    } else if (keyword === 4) {
      filteredData = listTransaction.sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at));
    } else {
      filteredData = dataTransactionSuccess;
    }
    setlistTransaction(filteredData);
    setfilterindex(keyword);
    setmodalFilter(false);
  }

  return (
    <View style={pages.flexPrimary}>
      <Modal isVisible={modalFilter}>
        <View style={pages.center}>
          <View style={pages.roundedBg(null, 50, 10, 10, colors.white)}>
            <RadioForm animation={true}>
              {radioProps.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={radioProps[filterindex].key === i}
                    onPress={() => filterModal(obj.key)}
                    borderWidth={1}
                    buttonInnerColor={colors.secondary}
                    buttonOuterColor={radioProps[filterindex].key === i ? colors.secondary : colors.primary}
                    buttonSize={20}
                    buttonOuterSize={40}
                    buttonStyle={{}}
                    buttonWrapStyle={pages.margin(10)}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={() => filterModal(obj.key)}
                    labelStyle={{fontSize: 20, color: colors.darkGray}}
                    labelWrapStyle={{}}
                  />
                </RadioButton>
              ))}
            </RadioForm>
          </View>
        </View>
      </Modal>
      {loading && <ActivityIndicator animating={loading} size={'large'} />}
      <Gap hp={8} />
      <View style={pages.rowCenter}>
        <TextInputCostum
          placeholder={'Cari nama, bank, atau nominal'}
          iconLeft={<ICSearchSecondary width={wp(5)} height={wp(5)} />}
          iconRight={
            <TouchableOpacity style={[pages.rowCenter, pages.hpwp(null, wp(25))]} onPress={() => setmodalFilter(true)}>
              <Text numberOfLines={1} style={[texts.orangeBold]}>
                {radioProps[filterindex].label}
              </Text>
              <Gap wp={2} />
              <ICArrowDown width={wp(4)} height={wp(4)} />
            </TouchableOpacity>
          }
          onChangeText={filterTransaction}
        />
      </View>
      <Gap hp={8} />
      {listTransaction.length !== 0 ? (
        <FlatList
          data={listTransaction}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={pages.rowCenter}
              onPress={() => navigation.navigate('DetailTransaction', {detailList: item})}>
              <View
                style={[
                  pages.hpwp(120, wp(3)),
                  pages.backgoundColor(item.status === 'SUCCESS' ? colors.primary : colors.secondary),
                  pages.margin(null, null, 8),
                  pages.borderRadius(null, 10),
                ]}
              />
              <View
                style={[
                  pages.hpwp(120, wp(92)),
                  pages.backgoundColor(colors.white),
                  pages.margin(null, null, 8),
                  pages.justifyCenter,
                  pages.borderRadius(null, null, 10),
                ]}>
                <View style={[pages.row, pages.marginLeft(10)]}>
                  <Text style={[texts.secondaryBoldMedium]}>
                    {item.sender_bank.length < 5
                      ? item.sender_bank.toUpperCase()
                      : item.sender_bank.charAt(0).toUpperCase() + item.sender_bank.slice(1, 15)}
                  </Text>
                  <Gap wp={4} />
                  <ICArrowRightSecondary width={wp(5)} height={wp(5)} />
                  <Gap wp={4} />
                  <Text style={[texts.secondaryBoldMedium]}>
                    {item.beneficiary_bank.length < 5
                      ? item.beneficiary_bank.toUpperCase()
                      : item.beneficiary_bank.charAt(0).toUpperCase() + item.beneficiary_bank.slice(1, 15)}
                  </Text>
                </View>
                <View style={pages.rowCenterBetween}>
                  <Text style={[texts.capitalize, texts.secondary, pages.marginLeft(10), pages.flex]}>
                    - {item.beneficiary_name}
                  </Text>
                  <View style={[pages.flex, pages.right]}>
                    {item.status !== 'SUCCESS' ? (
                      <View style={pages.roundedBg(colors.secondary, 8, 10, 10)}>
                        <Text style={texts.secondaryBold}>Pengecakan</Text>
                      </View>
                    ) : (
                      <View
                        style={[
                          pages.backgoundColor(colors.green),
                          pages.margin(8),
                          pages.padding10,
                          pages.borderRadius(10),
                        ]}>
                        <Text style={texts.whiteBold}>Berhasil</Text>
                      </View>
                    )}
                  </View>
                </View>
                <View style={[pages.row, pages.alignCenter, pages.marginLeft(10)]}>
                  <Text style={[texts.capitalize, texts.secondary]}>{formatRupiah(item.amount)}</Text>
                  <Gap wp={4} />

                  <View style={[pages.roundedBg(null, null, null, 100, colors.darkGray, wp(2), wp(2))]}></View>
                  <Gap wp={4} />

                  <Text style={[texts.capitalize, texts.secondary]}>
                    {item.completed_at.slice(8, 10)} {bulan(item.completed_at.slice(5, 7))}{' '}
                    {item.completed_at.slice(0, 4)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={pages.center}>
          <Text style={texts.secondaryBold}>No Transaction found</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
