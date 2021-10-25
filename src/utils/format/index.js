import {parse} from '@babel/core';

export const formatRupiah = (number = ' ', notRp) => {
  if (number === undefined) {
    return '0';
  }
  let tempNum = String(number).split('').reverse();
  let rupiah = '';

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 === 0 && i !== tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  rupiah = notRp ? `${tempNum.reverse().join('')}` : `Rp ${tempNum.reverse().join('')}`;
  return rupiah;
};

export const bulan = (number) => {
  switch (parseInt(number)) {
    case 1:
      return 'Januari';
      break;
    case 2:
      return 'Februari';
      break;
    case 3:
      return 'Maret';
      break;
    case 4:
      return 'April';
      break;
    case 5:
      return 'Mei';
      break;
    case 6:
      return 'Juni';
      break;
    case 7:
      return 'Juli';
      break;
    case 8:
      return 'Agustus';
      break;
    case 9:
      return 'September';
      break;
    case 10:
      return 'Oktober';
      break;
    case 11:
      return 'November';
      break;
    case 12:
      return 'Desember';
      break;
    default:
      break;
  }
};
