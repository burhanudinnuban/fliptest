import React from 'react';
import {View, Text, Image} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ICArrowDown, ICArrowRightSecondary} from '../../assets/icons';
import {Gap} from '../../components/atom';
import {hp, pages, texts, wp} from '../../configs/styles';
import {colors} from '../../constants';
import {bulan, formatRupiah} from '../../utils';
import {IMGCopy} from '../../assets/images';

const DetailTransaction = ({navigation, route}) => {
  const {detailList} = route.params;

  function copyToCipboard() {
    Clipboard.setString(detailList.id);
  }
  return (
    <View style={pages.flexPrimary}>
      <View style={[pages.hpwp(hp(10), wp(100)), pages.alignCenter, pages.backgoundColor(colors.white), pages.row]}>
        <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>IDTRANSAKSI:#{detailList.id}</Text>
        <Gap wp={2} />
        <TouchableOpacity onPress={() => copyToCipboard()}>
          <Image source={IMGCopy} width={wp(5)} height={wp(5)} />
        </TouchableOpacity>
      </View>
      <View style={[pages.hpwp(2, wp(100)), pages.backgoundColor(colors.silver)]} />
      <View
        style={[
          pages.hpwp(hp(10), wp(100)),
          pages.justifyCenter,
          pages.backgoundColor(colors.white),
          pages.rowCenterBetween,
        ]}>
        <Text style={[texts.secondaryBold, pages.margin(20)]}>DETAIL TRANSAKSI</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[pages.margin(10), texts.orangeMedium]}>Tutup</Text>
        </TouchableOpacity>
      </View>
      <View style={[pages.hpwp(2, wp(100)), pages.backgoundColor(colors.silver)]} />
      <View
        style={[
          pages.hpwp(hp(33), wp(100)),
          pages.justifyCenter,
          pages.backgoundColor(colors.white),
          pages.rowCenterBetween,
        ]}>
        <View style={pages.hpwp(null, wp(45))}>
          <View style={[pages.row, pages.marginLeft(20)]}>
            <Text style={[texts.secondaryBoldMedium]}>
              {detailList.sender_bank.length < 5
                ? detailList.sender_bank.toUpperCase()
                : detailList.sender_bank.charAt(0).toUpperCase() + detailList.sender_bank.slice(1, 15)}
            </Text>
            <Gap wp={4} />
            <ICArrowRightSecondary width={wp(5)} height={wp(5)} />
            <Gap wp={4} />
            <Text style={[texts.secondaryBoldMedium]}>
              {detailList.beneficiary_bank.length < 5
                ? detailList.beneficiary_bank.toUpperCase()
                : detailList.beneficiary_bank.charAt(0).toUpperCase() + detailList.beneficiary_bank.slice(1, 15)}
            </Text>
          </View>

          <Gap hp={hp(3)} />
          <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>DETAIL TRANSAKSI</Text>
          <Gap hp={4} />
          <Text style={[texts.secondary, pages.marginLeft(20)]}>- {detailList.beneficiary_name}</Text>
          <Gap hp={hp(3)} />
          <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>BERITA TRANSFER</Text>
          <Gap hp={4} />
          <Text style={[texts.secondary, pages.marginLeft(20)]}>{detailList.remark}</Text>
          <Gap hp={hp(3)} />
          <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>WAKTU DIBUAT</Text>
          <Gap hp={4} />
          <Text style={[texts.capitalize, texts.secondary, pages.marginLeft(20)]}>
            {detailList.completed_at.slice(8, 10)} {bulan(detailList.completed_at.slice(5, 7))}{' '}
            {detailList.completed_at.slice(0, 4)}
          </Text>
        </View>
        <View style={pages.hpwp(null, wp(45))}>
          <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>NOMINAL</Text>
          <Gap hp={4} />
          <Text style={[texts.secondary, pages.marginLeft(20)]}>{formatRupiah(detailList.amount)}</Text>
          <Gap hp={hp(3)} />
          <Text style={[texts.secondaryBold, pages.marginLeft(20)]}>KODE UNIK</Text>
          <Gap hp={4} />
          <Text style={[texts.secondary, pages.marginLeft(20)]}>{detailList.unique_code}</Text>
          <Gap hp={hp(2)} />
        </View>
      </View>
    </View>
  );
};

export default DetailTransaction;
