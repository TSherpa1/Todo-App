import {
  CircleBG,
  CircleSVG,
  CircleProgress,
  ProgressNumber,
} from './ProgressCircle.styles';

const ProgressCircle = ({ percent, circleWidth, color }) => {
  const radius = 27;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percent) / 100;
  return (
    <>
      <CircleSVG
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <CircleBG
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="6px"
          r={radius}
          className="circle-bg"
        />
        <CircleProgress
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="6px"
          r={radius}
          className="circle-progress"
          color={color}
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
      </CircleSVG>
      <ProgressNumber>{percent}%</ProgressNumber>
    </>
  );
};

export default ProgressCircle;
