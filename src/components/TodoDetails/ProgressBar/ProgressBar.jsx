import { Bar, BarFill, Percent, Header } from './ProgressBar.styles';

const ProgressBar = ({ color, percentage }) => {
  return (
    <div className="container">
      <Header>Task Completed</Header>
      <Percent className="progress-percentage" color={color}>
        {percentage}%
      </Percent>
      <Bar className="bar">
        <BarFill
          className="progress-bar-fill"
          percentage={percentage}
          color={color}
        ></BarFill>
      </Bar>
    </div>
  );
};

export default ProgressBar;
