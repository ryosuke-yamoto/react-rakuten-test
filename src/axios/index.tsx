import axios, { AxiosResponse } from 'axios';
import { Goods } from '../services/Models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_APE_CONFIG: ApiConfig = {
  baseURL: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
  timeout: 7000,
};

const axiosInstance = axios.create(DEFAULT_APE_CONFIG);

export const getRakutenAPI = async (genreId: string) => {
  const sort = escape('+reviewCount');
  try {
    const response = await axiosInstance.get('', {
      params: {
        applicationId: '1087097032807635362',
        genreId,
        sort,
        hits: 5,
      },
    });
    console.log(response.data.Items);
    return response.data.Items;
  } catch (error) {
    console.error(error);
  }
  // const sort = escape('+reviewCount');
  // const result = axiosInstance
  //   .get('', {
  //     params: {
  //       applicationId: '1087097032807635362',
  //       genreId,
  //       sort,
  //     },
  //   })
  //   .then(function (response) {
  //     // console.log(response.data.Items);
  //     return response.data.Items;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // return result;
};
// export const getRakuten = () => {
//   axios
//     .get(
//       'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1087097032807635362&genreId=551177&sort=%2BitemPrice'
//     )
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//     });
// };
