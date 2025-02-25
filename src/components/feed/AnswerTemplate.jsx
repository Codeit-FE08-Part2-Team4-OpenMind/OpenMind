import { styled } from 'styled-components';
import getElapsedPeriod from '../../utils/getElapsedPeriod';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';
import { useParams } from 'react-router-dom';
import useSubjectQuery from '../../hooks/useSubjectQuery';

/**
 * 답변자의 프로필과 질문 시점으로부터 지난 기간을 보여주고, 답변 내용을 담을 템플릿
 * @param props
 * @param {Node} props.children 자식 노드
 * @param {string} props.answerCreatedAt 답변 생성 시기
 */
function AnswerTemplate({ children, answerCreatedAt }) {
  const { id: subjectId } = useParams(); // useParams 이용해서 subjectId 가져오기
  const {
    data: { imageSource, name },
  } = useSubjectQuery(subjectId);
  const elapsedPeriod = answerCreatedAt ? getElapsedPeriod(answerCreatedAt) : ''; // 아직 답변이 없는 경우

  return (
    <StyledAnswerContainer>
      <StyledProfileImage src={imageSource} alt={'프로필 이미지'} />
      <StyledAnswerArea>
        <div>
          <span className={'actor-font'}>{name}</span>
          <span>{elapsedPeriod}</span>
        </div>
        {children}
      </StyledAnswerArea>
    </StyledAnswerContainer>
  );
}

export default AnswerTemplate;

const StyledAnswerContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  @media ${MEDIA_QUERY_SIZES.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const StyledAnswerArea = styled.section`
  width: 100%;

  & div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-bottom: 4px;

    & span:first-child {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
    }
    & span:nth-child(2) {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      color: var(--gray40);
    }
  }
`;
