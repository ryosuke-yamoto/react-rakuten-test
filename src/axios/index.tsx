import axios from 'axios';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_APE_CONFIG: ApiConfig = {
  baseURL: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
  timeout: 7000,
};

const axiosInstance = axios.create(DEFAULT_APE_CONFIG);

const result = escape('+itemPrice');

export const getRakuten = () => {
  axiosInstance
    .get('', {
      params: {
        applicationId: '1087097032807635362',
        genreId: '551177',
        sort: result,
      },
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
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
