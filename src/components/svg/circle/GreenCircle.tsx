import React from 'react';

type CircleProps = {
  className?: string;
  // other props
};

const GreenCircle: React.FC<CircleProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 800">
      <defs>
        <radialGradient id="green-circular-grad" r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#005300" stopOpacity="0.5"></stop>
          <stop offset="75%" stopColor="hsl(105, 69%, 30%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#97e476" stopOpacity="1"></stop>
        </radialGradient>
      </defs>
      <g fill="url(#green-circular-grad)">
        <circle r="581" cx="640" cy="400" opacity="0.92"></circle>
        <circle r="539.5" cx="640" cy="400" opacity="0.96"></circle>
        <circle r="498" cx="640" cy="400" opacity="0.36"></circle>
        <circle r="456.5" cx="640" cy="400" opacity="0.30"></circle>
        <circle r="415" cx="640" cy="400" opacity="0.40"></circle>
        <circle r="373.5" cx="640" cy="400" opacity="0.45"></circle>
        <circle r="332" cx="640" cy="400" opacity="0.26"></circle>
        <circle r="290.5" cx="640" cy="400" opacity="0.45"></circle>
        <circle r="249" cx="640" cy="400" opacity="0.26"></circle>
        <circle r="207.5" cx="640" cy="400" opacity="0.93"></circle>
        <circle r="166" cx="640" cy="400" opacity="0.48"></circle>
        <circle r="124.5" cx="640" cy="400" opacity="0.27"></circle>
        <circle r="83" cx="640" cy="400" opacity="0.89"></circle>
      </g>
    </svg>
  );
};

export default GreenCircle;
