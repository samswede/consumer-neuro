import React from 'react';

type CircleProps = {
    className?: string;
    // other props
  };

const YellowCircle: React.FC<CircleProps> = ({ className }) =>  {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 800">
      <defs>
        <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#c9803e" stopOpacity="0.5"></stop>
          <stop offset="75%" stopColor="hsl(28, 100%, 71%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#ffffcc" stopOpacity="1"></stop>
        </radialGradient>
      </defs>
      <g fill="url(#cccircular-grad)">
        <circle r="581" cx="640" cy="400" opacity="0.31"></circle>
        <circle r="539.5" cx="640" cy="400" opacity="0.62"></circle>
        <circle r="498" cx="640" cy="400" opacity="0.85"></circle>
        <circle r="456.5" cx="640" cy="400" opacity="0.07"></circle>
        <circle r="415" cx="640" cy="400" opacity="0.95"></circle>
        <circle r="373.5" cx="640" cy="400" opacity="0.58"></circle>
        <circle r="332" cx="640" cy="400" opacity="0.82"></circle>
        <circle r="290.5" cx="640" cy="400" opacity="0.49"></circle>
        <circle r="249" cx="640" cy="400" opacity="0.52"></circle>
        <circle r="207.5" cx="640" cy="400" opacity="0.25"></circle>
        <circle r="166" cx="640" cy="400" opacity="0.38"></circle>
        <circle r="124.5" cx="640" cy="400" opacity="0.71"></circle>
        <circle r="83" cx="640" cy="400" opacity="0.15"></circle>
      </g>
    </svg>
  );
};

export default YellowCircle;
