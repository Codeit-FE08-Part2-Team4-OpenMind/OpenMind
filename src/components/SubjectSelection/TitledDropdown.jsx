import styled from 'styled-components';
import SubjectSortDropdown from './SubjectSortDropdown';

const StyledTitledDropdownArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 46px auto 30px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
  }
`;

const Title = styled.h1`
  color: var(--gray60);
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`;

function TitledDropdown({ sortBy, onSortChoice }) {
  return (
    <StyledTitledDropdownArea>
      <Title>누구에게 질문할까요?</Title>
      <SubjectSortDropdown sortBy={sortBy} onSortChoice={onSortChoice} />
    </StyledTitledDropdownArea>
  );
}

export default TitledDropdown;
