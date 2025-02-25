/* eslint-disable no-console */
import styled from 'styled-components';

import HeroImgUrl from '../assets/images/HeroImage.png';
import profileImg from '../assets/images/profile.png';
import LogoImgUrl from '../assets/images/logo.svg';
import MessagesIconUrl from '../assets/images/ic_Messages.svg';
import noQuestionImg from '../assets/images/no-question.png';

import AnswerCardList from '../components/feed/answerFeed/AnswerCardList';
import { StyledAnswerFeedArea } from '../styles/feed/answerFeedStyles';
import { StyledHeroImg } from '../styles/feed/heroImgStyles';
import Button from '../components/@shared/Button';
import deleteSubject from '../apis/deleteSubject';
import { StyledHeader } from '../styles/feed/headerStyles';
import { StyledLogoImg } from '../styles/feed/logoImgStyles';
import ProfileArea from '../components/sns/ProfileArea';
import { Link, useParams } from 'react-router-dom';
import useSubjectQuery from '../hooks/useSubjectQuery';
import { StyledAnswerCardListContainer } from '../styles/feed/answerCardListStyles';
import { StyledQuestionCountArea } from '../styles/feed/questionCountStyles';
import { StyledMessagesImg } from '../styles/feed/messagesImgStyles';
import { StyledNoQuestionImg } from '../styles/feed/noQuestionImgStyles';

const StyledAnswerFeedPageContainer = styled.div`
  margin: 0px auto;
  width: 1200px;

  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: auto;
  }
`;

const StyledHeroImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const deleteButtonStyle = {
  fontSize: '14px',
  boxShadow: 'var(--shadow2pt)',

  '@media screen and (min-width: 375px) and (max-width: 767px)': {
    fontSize: '10px',
    width: '70px',
    height: '25px',
    padding: '6px 12px',
  },
};

function AnswerFeed() {
  const { id: subjectId } = useParams(); // useParams 이용해서 subjectId 가져오기
  const { data: profileData } = useSubjectQuery(subjectId);

  // 구조 분해 할당
  const { id, questionCount } = profileData || {
    // 기본값
    id: 7478,
    name: '아초는고양이',
    imageSource: profileImg,
    questionCount: 25,
  };

  const handleDeleteButtonClick = async subjectId => {
    try {
      const statusCode = await deleteSubject({ subjectId });
      if (statusCode === 204) {
        // 성공적으로 삭제됨
        console.log('Subject deleted successfully');
        // 해당 페이지의 ID가 로컬 스토리지의 userInfo와 같다면 삭제하기
        const userInfoString = window.localStorage.getItem('userInfo');
        const userInfo = JSON.parse(userInfoString);
        if (userInfo.id === subjectId) {
          window.localStorage.removeItem('userInfo');
        }
      } else {
        // 삭제 실패 혹은 에러 발생
        console.error('Failed to delete subject');
        // 필요한 오류 처리 작업 수행 가능
      }
    } catch (error) {
      console.error('Failed to delete subject:', error);
      // 필요한 오류 처리 작업 수행 가능
    } finally {
      location.reload(); // 삭제 이후에 메인 페이지 유저 정보 리로드 (새로고침)
    }
  };

  if (questionCount !== 0) {
    return (
      <StyledAnswerFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* ProfileArea, AnswerCardList 컴포넌트에 데이터를 props로 전달 */}
        <StyledHeader>
          <Link to={'/'}>
            <StyledLogoImg src={LogoImgUrl} />
          </Link>
          <ProfileArea subject={profileData} />
        </StyledHeader>
        <StyledAnswerFeedArea>
          <Button
            onClick={() => handleDeleteButtonClick(id)}
            pagePath={'/'}
            shape={'pill'}
            $btnColor={'deep'}
            style={deleteButtonStyle}
            width={'100px'}
            height={'35px'}>
            삭제하기
          </Button>
          <AnswerCardList subjectId={id} questionCount={questionCount} />
        </StyledAnswerFeedArea>
      </StyledAnswerFeedPageContainer>
    );
  } else {
    return (
      <StyledAnswerFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* ProfileArea, AnswerCardList 컴포넌트에 데이터를 props로 전달 */}
        <StyledHeader>
          <Link to={'/'}>
            <StyledLogoImg src={LogoImgUrl} />
          </Link>
          <ProfileArea subject={profileData} />
        </StyledHeader>
        <StyledAnswerFeedArea>
          <Button
            onClick={() => handleDeleteButtonClick(id)}
            pagePath={'/'}
            shape={'pill'}
            $btnColor={'deep'}
            style={deleteButtonStyle}
            width={'100px'}
            height={'35px'}>
            삭제하기
          </Button>
          <StyledAnswerCardListContainer>
            <StyledQuestionCountArea>
              <StyledMessagesImg src={MessagesIconUrl} alt="말풍선 아이콘" />
              아직 질문이 없습니다
            </StyledQuestionCountArea>
            <StyledNoQuestionImg src={noQuestionImg} alt="빈 박스 이미지" />
          </StyledAnswerCardListContainer>
        </StyledAnswerFeedArea>
      </StyledAnswerFeedPageContainer>
    );
  }
}

export default AnswerFeed;
