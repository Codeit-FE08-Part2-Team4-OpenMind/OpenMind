import SkeletonCard from './SubjectCardSkeleton';
import StyledSubjectGrid from './StyledSubjectGrid';
import { GRID_BREAKPOINT, NUM_OF_SUBJECTS } from '../../constants/subjectGrid';
import useWindowSize from '../../hooks/useWindowSize';

function SubjectListGridSkeleton() {
  const windowSize = useWindowSize();

  const limit = windowSize.width > GRID_BREAKPOINT.tablet ? NUM_OF_SUBJECTS.pc : NUM_OF_SUBJECTS.other;
  const cardNumbers = Array.from({ length: limit }, (value, i) => i + 1);

  const isMobile = windowSize.width <= GRID_BREAKPOINT.mobile;

  return (
    <StyledSubjectGrid>
      {cardNumbers.map(num => (
        <SkeletonCard key={num} isMobile={isMobile} />
      ))}
    </StyledSubjectGrid>
  );
}

export default SubjectListGridSkeleton;
