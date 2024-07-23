/* eslint-disable no-console */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axiosSetup';

export function useInfiniteQueryWithScroll(subjectId) {
  // 관찰하는 객체를 ref로 설정
  const [observerRef, inView] = useInView();
  // useInfiniteQuery 훅을 사용하여 무한 스크롤 데이터를 관리
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: [subjectId],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        // subjectId가 없으면 빈 데이터를 반환하여 오류 방지
        if (!subjectId) {
          return { pages: [] };
        }
        const { data: responseData } = await axiosInstance.get(`/subjects/${subjectId}/questions/`, {
          params: {
            limit: 5,
            offset: pageParam * 5, // 페이지 번호에 따라 오프셋 계산
          },
        });
        return responseData;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    },
    // 마지막 페이지의 실제 데이터 수를 기반으로 계산
    // lastPage.results.length: 현재 페이지의 데이터 수
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length; // 현재 페이지 번호
      const nextPageHasData = lastPage.results.length > 0; // 다음 페이지에 데이터가 있는지 여부

      return nextPageHasData ? currentPage : undefined;
    },
  });

  // 스크롤 시에 observerRef가 노출되면 다음 페이지를 불러오는 함수 실행
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return {
    data,
    observerRef,
    hasNextPage,
    isLoading,
    isError,
  };
}
