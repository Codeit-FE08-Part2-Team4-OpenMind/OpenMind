import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import HeroImgUrl from '../assets/images/HeroImage.png';
import profileImg from '../assets/images/profile.png';
import MessagesIconUrl from '../assets/images/ic_Messages.svg';
import noQuestionImg from '../assets/images/no-question.png';
import LogoImgUrl from '../assets/images/logo.svg';

import QuestionCardList from '../components/feed/questionFeed/QuestionCardList';
import { StyledFeedCardListContainer } from '../styles/feed/feedCardListStyles';
import { StyledQuestionCountArea } from '../styles/feed/questionCountStyles';
import { StyledHeroImg } from '../styles/feed/heroImgStyles';
import { StyledMessagesImg } from '../styles/feed/messagesImgStyles';
import { StyledNoQuestionImg } from '../styles/feed/noQuestionImgStyles';
import Button from '../components/@shared/Button';
import ResponsiveText from '../components/feed/questionFeed/ResponsiveText';
import ModalComponent from '../components/feed/questionFeed/ModalComponent';
import { StyledLogoImg } from '../styles/feed/logoImgStyles';
import { StyledHeader } from '../styles/feed/headerStyles';
import ProfileArea from '../components/sns/ProfileArea';

const StyledQuestionFeedPageContainer = styled.div`
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

const questionButtonStyle = {
  fontSize: '20px',
  boxShadow: 'var(--shadow2pt)',
  position: 'fixed',
  right: '24px',
  bottom: '24px',

  '@media screen and (min-width: 375px) and (max-width: 767px)': {
    fontSize: '16px',
    width: '123px',
    height: '54px',
  },
};

function QuestionFeed() {
  // 세션 스토리지에서 반환된 값 역직렬화
  const profileDataString = sessionStorage.getItem('profile');
  const profileData = profileDataString ? JSON.parse(profileDataString) : null;

  // 구조 분해 할당
  const { id, name, imageSource, questionCount } = profileData || {
    // 기본값
    id: 7478,
    name: '아초는고양이',
    imageSource: profileImg,
    questionCount: 25,
  };

  const { id: subjectId } = useParams(); // useParams 이용해서 subjectId 가져오기
  //모달 열고, 닫는 부분 수정
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (questionCount !== 0) {
    return (
      <StyledQuestionFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* ProfileArea, QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
        <StyledHeader>
          <StyledLogoImg src={LogoImgUrl} />
          <ProfileArea subject={profileData} />
        </StyledHeader>
        <QuestionCardList subjectId={id} questionCount={questionCount} />
        <Button
          onClick={handleOpenModal}
          shape={'pill'}
          $btnColor={'deep'}
          style={questionButtonStyle}
          width={'208px'}
          height={'54px'}>
          <ResponsiveText />
        </Button>
        <ModalComponent
          profileImg={imageSource}
          subjectId={subjectId}
          name={name}
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          questionCount={questionCount}
        />
      </StyledQuestionFeedPageContainer>
    );
  } else {
    // 질문이 없는 경우 조건부 렌더링
    return (
      <StyledQuestionFeedPageContainer>
        <StyledHeroImgWrapper>
          <StyledHeroImg src={HeroImgUrl} alt="히어로 이미지" />
        </StyledHeroImgWrapper>
        {/* ProfileArea, QuestionCardList 컴포넌트에 데이터를 props로 전달 */}
        <StyledHeader>
          <StyledLogoImg src={LogoImgUrl} />
          <ProfileArea subject={profileData} />
        </StyledHeader>
        <StyledFeedCardListContainer>
          <StyledQuestionCountArea>
            <StyledMessagesImg src={MessagesIconUrl} alt="말풍선 아이콘" />
            아직 질문이 없습니다
          </StyledQuestionCountArea>
          <StyledNoQuestionImg src={noQuestionImg} alt="빈 박스 이미지" />
          <Button
            onClick={handleOpenModal}
            shape={'pill'}
            $btnColor={'deep'}
            style={questionButtonStyle}
            width={'208px'}
            height={'54px'}>
            <ResponsiveText />
          </Button>
          <ModalComponent
            profileImg={imageSource}
            subjectId={subjectId}
            name={name}
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            questionCount={questionCount}
          />
        </StyledFeedCardListContainer>
      </StyledQuestionFeedPageContainer>
    );
  }
}

export default QuestionFeed;
