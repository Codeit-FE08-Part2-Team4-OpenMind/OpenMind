import styled from 'styled-components';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const StyledPageNavigatorArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px auto 0;

  @media ${MEDIA_QUERY_SIZES.mobile} {
    margin: 60px auto 0;
  }
`;

const StyledNavBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme, $isCurrentPage }) => ($isCurrentPage ? theme.brown40 : theme.gray40)};
  font-size: 20px;
  font-weight: 400;

  width: 40px;
  height: 40px;

  cursor: pointer;
`;

function NavArrowBtn({ children, onNavBtnClick, isVisible }) {
  return (
    <StyledNavBtn className={'actor-font'} onClick={onNavBtnClick}>
      {isVisible && children}
    </StyledNavBtn>
  );
}

function NavNumBtn({ children, isCurrentPage, onNavBtnClick }) {
  return (
    <StyledNavBtn className={'actor-font'} $isCurrentPage={isCurrentPage} onClick={onNavBtnClick}>
      {children}
    </StyledNavBtn>
  );
}

/**
 * @param {number} currentPage 현재 페이지 상태
 * @param {array} pageNumList 페이지 번호를 담은 리스트 값
 * @param {function} onNavBtnClick 버튼 클릭시 동작을 담은 함수
 * @param {string} arrowBtnVisible 왼쪽, 오른쪽 화살표 보이기 안보이기 옵션 (both: 둘 다 보임, left: 왼쪽 보임, right: 오른쪽 보임, none: 둘다 안보임)
 */
function PageNavigator({ currentPage, pageNumList, onNavBtnClick, arrowBtnVisible }) {
  const { isLeftArrowVisible, isRightArrowVisible } = arrowBtnVisible;
  return (
    <StyledPageNavigatorArea>
      <NavArrowBtn onNavBtnClick={onNavBtnClick} isVisible={isLeftArrowVisible}>
        &lt;
      </NavArrowBtn>
      {pageNumList.map(pageNum => (
        <NavNumBtn key={pageNum} onNavBtnClick={onNavBtnClick} isCurrentPage={pageNum === currentPage}>
          {pageNum}
        </NavNumBtn>
      ))}
      <NavArrowBtn onNavBtnClick={onNavBtnClick} isVisible={isRightArrowVisible}>
        &gt;
      </NavArrowBtn>
    </StyledPageNavigatorArea>
  );
}

export default PageNavigator;
