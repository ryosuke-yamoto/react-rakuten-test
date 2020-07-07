import axios, { AxiosResponse } from 'axios';
import { Goods } from '../services/Models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_APE_CONFIG: ApiConfig = {
  baseURL: 'https://app.rakuten.co.jp/services/api/IchibaItem/',
  timeout: 7000,
};

const axiosInstance = axios.create(DEFAULT_APE_CONFIG);

export const getRakutenAPI = async (genreId: string) => {
  const sort = escape('+reviewCount');
  try {
    const response = await axiosInstance.get('Search/20170706', {
      params: {
        applicationId: '1087097032807635362',
        genreId,
        sort,
        hits: 10,
      },
    });
    console.log(response.data.Items);
    return response.data.Items;
  } catch (error) {
    console.error(error);
  }
};
export const getSearchedRakutenAPI = async (keyword: string) => {
  const sort = escape('+reviewCount');
  try {
    const response = await axiosInstance.get('Search/20170706', {
      params: {
        applicationId: '1087097032807635362',
        keyword,
        sort,
        hits: 5,
      },
    });
    return response.data.Items;
  } catch (error) {
    console.error(error);
  }
};
export const getRankingRakutenAPI = async (
  // genreId: string,
  age: string = '10'
) => {
  try {
    const response = await axiosInstance.get('Ranking/20170628?', {
      params: {
        applicationId: '1087097032807635362',
        // genreId,
        age,
        // sex: 0,
        // period: 'realtime',
        hits: 5,
      },
    });
    return response.data.Items.slice(0, 5);
  } catch (error) {
    console.error(error);
  }
};
