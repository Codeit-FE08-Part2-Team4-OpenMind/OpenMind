import styled from 'styled-components';
import { MEDIA_QUERY_SIZES } from '../../constants/mediaQuerySizes';

const StyledSubjectGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 187px);
  gap: 20px;

  @media ${MEDIA_QUERY_SIZES.subjectGridBreakpoint} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${MEDIA_QUERY_SIZES.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 187px);
  }
`;

export default StyledSubjectGrid;
