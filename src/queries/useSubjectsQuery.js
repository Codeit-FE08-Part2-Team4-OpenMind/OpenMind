import { useSuspenseQuery } from '@tanstack/react-query';
import getSubjects from '../apis/getSubjects';
import { SUBJECTS_QUERY_KEY } from '../constants/queryKeys';

const DEFAULT_SUBJECTS_LIMIT = 8;
const DEFAULT_SUBJECTS_OFFSET = 0;
const DEFAULT_SUBJECTS_SORT = 'name';

/**
 * axios로 생성한 get요청을 react-query로 만든 함수
 * @param {number} limit 한번에 가져올 데이터의 양
 * @param {number} offset 이전에 가져온 데이터의 양 (해당 값 다음 데이터부터 가져옴)
 * @param {string} sort 정렬순서 이름순('name'), 최신순('time')
 * @returns response의 body값을 그대로 전달
 */
const useSubjectsQuery = (
  limit = DEFAULT_SUBJECTS_LIMIT,
  offset = DEFAULT_SUBJECTS_OFFSET,
  sort = DEFAULT_SUBJECTS_SORT
) => {
  return useSuspenseQuery({
    queryKey: [SUBJECTS_QUERY_KEY, limit, offset, sort],
    queryFn: () => getSubjects({ limit, offset, sort }),
  });
};

export default useSubjectsQuery;
