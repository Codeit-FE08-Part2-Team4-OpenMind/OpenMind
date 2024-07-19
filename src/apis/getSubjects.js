import { axiosInstance } from './axiosSetup';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

/**
 * subject 목록을 GET 요청 전송해서 body값을 return하는 함수
 * @param {number} limit 총 가져올 데이터의 양
 * @param {number} offset 이전에 가져온 데이터의 양 (해당 값 다음 데이터부터 가져옴)
 * @param {number} sort 정렬 방식 이름순('name'), 최신순('time')
 * @returns response의 body값을 그대로 전달
 */
const getSubjects = async ({ limit, offset, sort }) => {
  const query = `${SUBJECTS_QUERY_KEY}/?limit=${limit}&offset=${offset}&sort=${sort}`;

  try {
    const response = await axiosInstance.get(query);

    // 기존의 경우 status가 200~299이면 response.ok가 날라왔는데
    // 이번 response에는 ok값이 안날라옴 (undefined)
    // if (response.ok) {
    //   console.log(response.status);
    // }
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
    return { count: 0, next: null, previous: null, results: [] };
  }
};

export default getSubjects;
