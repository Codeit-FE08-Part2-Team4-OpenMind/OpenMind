import styled from 'styled-components';
import SubjectSortDropdown from './SubjectSortDropdown';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const StyledTitledDropdownArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 46px auto 30px;

  @media ${MEDIA_QUERY_SIZES.mobile} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
  }
`;

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.gray60};
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;

  @media ${MEDIA_QUERY_SIZES.mobile} {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

function TitledDropdown({ sortBy, onSortChoice }) {
  return (
    <StyledTitledDropdownArea>
      <StyledTitle>누구에게 질문할까요?</StyledTitle>
      <SubjectSortDropdown sortBy={sortBy} onSortChoice={onSortChoice} />
    </StyledTitledDropdownArea>
  );
}

export default TitledDropdown;
