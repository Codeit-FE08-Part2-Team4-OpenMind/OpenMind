import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const StyledSkeletonCardContainer = styled.li`
  width: 100%;
  height: 187px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.gray40};
  padding: 20px;
  background-color: ${({ theme }) => theme.gray10};
  &:hover {
    cursor: pointer;
  }
  @media ${MEDIA_QUERY_SIZES.mobile} {
    height: 168px;
    padding: 16px;
  }
`;

function SkeletonCard({ isMobile }) {
  const pfpStyle = {
    width: isMobile ? '48px' : '60px',
    height: isMobile ? '48px' : '60px',
  };

  const userNameStyle = {
    marginTop: '12px',
    width: '100%',
    height: isMobile ? '24px' : '25px',
  };

  const questionAreaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: isMobile ? '30px' : '28px',
    height: isMobile ? '24px' : '25px',
  };

  return (
    <StyledSkeletonCardContainer>
      <Skeleton circle style={pfpStyle} />
      <Skeleton style={userNameStyle} />
      <Skeleton style={questionAreaStyle} />
    </StyledSkeletonCardContainer>
  );
}

export default SkeletonCard;
