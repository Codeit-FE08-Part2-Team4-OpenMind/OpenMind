/* eslint-disable no-console */
import React from 'react';

import { StyledFeedCardListContainer } from '../../../styles/feed/feedCardListStyles';
import { StyledQuestionCountArea } from '../../../styles/feed/questionCountStyles';
import { StyledMessagesImg } from '../../../styles/feed/messagesImgStyles';

import MessagesIconUrl from '../../../assets/images/ic_Messages.svg';
import QuestionCard from './QuestionCard';
import { useInfiniteQueryWithScroll } from '../../../hooks/useInfiniteQueryWithScroll';
import Spinner from '../../../styles/feed/spinnerStyles';

function QuestionCardList({ questionCount, subjectId }) {
  const { data, observerRef, hasNextPage, isLoading, isError } = useInfiniteQueryWithScroll(subjectId);
  console.log('data : ', data);

  // 데이터가 로딩 중이거나 오류가 발생하면 해당 상태를 처리
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  // data가 없는 경우 예외처리
  if (!data || !data.pages) {
    return null;
  }

  return (
    <StyledFeedCardListContainer>
      <StyledQuestionCountArea>
        <StyledMessagesImg src={MessagesIconUrl} />
        {questionCount}개의 질문이 있습니다
      </StyledQuestionCountArea>
      {data.pages.map(page =>
        page.results.map(question => (
          <QuestionCard
            key={question.id}
            questionId={question.id}
            questionContent={question.content}
            likeCount={question.like}
            dislikeCount={question.dislike}
            questionCreateAt={question.createdAt}
            answer={question.answer}
            isHasAnswer={!!question.answer}
            subjectId={subjectId}
          />
        ))
      )}
      {hasNextPage && (
        <div ref={observerRef}>
          <Spinner />
        </div>
      )}
    </StyledFeedCardListContainer>
  );
}

export default QuestionCardList;
