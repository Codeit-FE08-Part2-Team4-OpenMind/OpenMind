import styled from 'styled-components';
import { StyledAnswerText, StyledFeedCardContainer } from '../../../styles/feed/feedCardStyles';
import AnswerStatus from '../AnswerStatus';
import MoreButton from './MoreButton';
import QuestionTitle from '../QuestionTitle';
import AnswerTemplate from '../AnswerTemplate';
import Reaction from '../Reaction';
import { useState } from 'react';
import AnswerForm from './AnswerForm';
import useCreateAnswerMutation from '../../../queries/useCreateAnswerMutation';
import useUpdateAnswerMutation from '../../../queries/useUpdateAnswerMutation';
import { LIMIT_DISLIKE_COUNT } from '../../../constants/feedCard';

/**
 * 답변 피드 페이지에서의 답변 카드
 * @param props
 * @param {string} props.questionId 질문 id
 * @param {string} props.questionContent 질문 내용
 * @param {integer} props.likeCount 좋아요 수
 * @param {integer} props.dislikeCount 싫어요 수
 * @param {string} props.questionCreatedAt 질문 생성 시간
 * @param {object || null} props.answer 답변 객체
 */
function AnswerCard({
  // TODO: 상위 컴포넌트에서 데이터를 넣어줄 수 있게 되면 테스트용 기본값 삭제 예정
  questionId,
  questionContent = '좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?',
  likeCount = 0,
  dislikeCount = 0,
  questionCreateAt = '',
  answer,
}) {
  const isHasAnswer = !!answer;
  const [currentAnswer, setCurrentAnswer] = useState(isHasAnswer ? answer.content : '');
  const [answerCreatedAt, setAnswerCreatedAt] = useState(isHasAnswer ? answer.createdAt : '');
  const [isEditing, setIsEditing] = useState(false);
  // LIMIT_DISLIKE_COUNT보다 싫어요가 많거나, 답변 객체가 존재하고 isRejected가 명시적으로 true인 경우 외에는 false
  // 질문에 싫어요 개수가 많으면, 자동으로 답변을 달 수 없도록 조치
  const [isRejected, setIsRejected] = useState(
    dislikeCount >= LIMIT_DISLIKE_COUNT || (isHasAnswer && answer.isRejected)
  );

  const { mutate: createAnswerMutate } = useCreateAnswerMutation();
  const { mutate: updateAnswerMutate } = useUpdateAnswerMutation();

  const handleEditButtonClick = () => {
    if (isRejected) {
      alert('이미 거절한 답변입니다.');
    } else if (!currentAnswer) {
      alert('아직 생성된 답변이 없습니다.');
    } else {
      setIsEditing(true);
    }
  };

  const handleRejectButtonClick = () => {
    if (isRejected) {
      alert('이미 거절한 답변입니다.');
    } else {
      // isRejected가 false 인 경우에만 실행하면 됨
      const isOkay = confirm('답변 거절 후에는 철회 할 수 없습니다.\n답변을 거절하시겠습니까?');
      if (isOkay) {
        setIsRejected(true);
        updateAnswerMutate({ answerId: answer.id, isRejected: true });
      }
    }
  };

  const handleCreateFormSubmit = (event, inputText) => {
    event.preventDefault();
    setCurrentAnswer(inputText);
    createAnswerMutate(
      { questionId: questionId, content: inputText },
      {
        onSuccess: data => data && setAnswerCreatedAt(data.createdAt),
      }
    );
  };

  const handleEditFormSubmit = (event, inputText) => {
    event.preventDefault();

    setCurrentAnswer(inputText);
    setIsEditing(false);
    updateAnswerMutate({ answerId: answer.id, content: inputText });
  };

  const renderAnswerContent = () => {
    if (isRejected) {
      // 답변 거절의 경우
      return <StyledAnswerText $isRejected>답변 거절</StyledAnswerText>;
    }

    if (isEditing) {
      // 답변 거절은 아니지만, 수정 하기 버튼을 누른 경우
      return <AnswerForm currentAnswer={currentAnswer} buttonText="수정 완료" onSubmitForm={handleEditFormSubmit} />;
    }

    if (!currentAnswer) {
      // 답변 거절도 아니고, 수정중도 아니지만, 받아온 답변이 빈값인 경우
      return <AnswerForm currentAnswer={currentAnswer} buttonText="답변 완료" onSubmitForm={handleCreateFormSubmit} />;
    }

    // 답변 거절도 아니고, 수정중도 아니고, 받아온 답변이 빈값도 아닌 경우
    return <StyledAnswerText>{currentAnswer}</StyledAnswerText>;
  };

  return (
    <StyledFeedCardContainer>
      <StyledAnswerCardUpperArea>
        <AnswerStatus isComplete={isHasAnswer || isRejected} />
        <MoreButton onEditButtonClick={handleEditButtonClick} onRejectButtonClick={handleRejectButtonClick} />
      </StyledAnswerCardUpperArea>
      <QuestionTitle question={questionContent} questionCreateAt={questionCreateAt} />
      <AnswerTemplate answerCreatedAt={answerCreatedAt}>{renderAnswerContent()}</AnswerTemplate>
      <Reaction likeCount={likeCount} dislikeCount={dislikeCount} questionId={questionId} />
    </StyledFeedCardContainer>
  );
}

export default AnswerCard;

const StyledAnswerCardUpperArea = styled.section`
  display: flex;
  justify-content: space-between;
`;
