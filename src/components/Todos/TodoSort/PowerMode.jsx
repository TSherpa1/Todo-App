import { useContext } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { PowerModeBtn, PowerModeSVG } from './TodoSort.styles';

const PowerMode = () => {
  const { powerModeSort } = useContext(TodoContext);
  return (
    <PowerModeBtn onClick={powerModeSort}>
      <PowerModeSVG
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
        />
      </PowerModeSVG>
    </PowerModeBtn>
  );
};

export default PowerMode;
