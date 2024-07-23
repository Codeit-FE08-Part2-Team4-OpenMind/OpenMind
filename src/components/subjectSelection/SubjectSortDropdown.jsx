import styled from 'styled-components';
import DropdownBox from '../@shared/DropdownBox';
import useToggle from '../../hooks/useToggle';
import arrowDownImgUrl from '../../assets/images/Arrow-down.svg';

const StyledDropdownToggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;

  border: 1px solid ${({ theme, $isDropdownVisible }) => ($isDropdownVisible ? theme.gray60 : theme.gray40)};
  border-radius: 8px;
  width: 79px;
  height: 34px;

  color: ${({ theme, $isDropdownVisible }) => ($isDropdownVisible ? theme.gray60 : theme.gray40)};
  background-color: ${({ theme }) => theme.gray10};
  font-size: 14px;
  font-weight: 500;

  & img {
    width: 14px;
    height: 14px;
    filter: ${({ theme, $isDropdownVisible }) => ($isDropdownVisible ? theme.gray60Filter : '')};
    transform: ${({ $isDropdownVisible }) => ($isDropdownVisible ? 'rotate(180deg)' : '')};
  }

  cursor: pointer;
`;

const ITEM_LIST = [
  { title: '이름순', value: 'name', url: null },
  { title: '최신순', value: 'time', url: null },
];

function SubjectSortDropdown({ sortBy, onSortChoice }) {
  const [isVisible, toggleIsVisible] = useToggle(false);

  const handleTogglerClick = () => {
    toggleIsVisible();
  };

  const currentItemTitle = ITEM_LIST.find(item => item.value === sortBy).title;

  return (
    <StyledDropdownToggler onClick={handleTogglerClick} $isDropdownVisible={isVisible}>
      {currentItemTitle}
      <img src={arrowDownImgUrl} alt="드롭다운화살표" />
      <DropdownBox
        isDropdownVisible={isVisible}
        minWidth={80}
        topPosition={4}
        leftPosition={-2}
        itemList={ITEM_LIST}
        onItemClick={onSortChoice}
      />
    </StyledDropdownToggler>
  );
}

export default SubjectSortDropdown;
