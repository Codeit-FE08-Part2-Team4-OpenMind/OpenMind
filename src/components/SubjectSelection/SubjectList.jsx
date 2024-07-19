import styled from 'styled-components';
import SubjectListGrid from './SubjectListGrid';
import { Suspense } from 'react';

const SubjectListArea = styled.section`
  margin: 0 auto 40px;
  width: 940px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin: 0 32px 40px;
    width: auto;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    margin: 0 24px 60px;
    width: auto;
  }
`;

function SubjectList({ sortBy }) {
  return (
    <SubjectListArea>
      <Suspense fallback={<div>Loading...</div>}>
        <SubjectListGrid sortBy={sortBy} />
      </Suspense>
    </SubjectListArea>
  );
}

export default SubjectList;
