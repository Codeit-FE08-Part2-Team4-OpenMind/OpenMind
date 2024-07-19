import { useState } from 'react';

/**
 * Boolean 형태의 state를 toggle하는데 사용하는 custom hook 입니다.
 * @param {boolean} initialValue : 초기값 (false, true)
 * @returns [state, toggleState] : state와 state를 toggle하는 함수를 반환합니다.
 */
function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(prevState => !prevState);

  return [state, toggleState];
}

export default useToggle;
