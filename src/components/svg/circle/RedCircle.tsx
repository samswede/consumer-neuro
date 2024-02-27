import React from 'react';


type CircleProps = {
    className?: string;
    // other props
  };

const RedCircle: React.FC<CircleProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800">
    <defs>
      <radialGradient id="redCircular-grad" r="50%" cx="50%" cy="50%">
        <stop offset="15%" stopColor="#7c0000" stopOpacity="0.5" />
        <stop offset="75%" stopColor="hsl(10, 75%, 40%)" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff956f" stopOpacity="1" />
      </radialGradient>
    </defs>
    <g fill="url(#redCircular-grad)">
        <circle r="581" cx="640" cy="400" opacity="0.71"></circle>
        <circle r="539.5" cx="640" cy="400" opacity="0.38"></circle>
        <circle r="498" cx="640" cy="400" opacity="0.39"></circle>
        <circle r="456.5" cx="640" cy="400" opacity="0.44"></circle>
        <circle r="415" cx="640" cy="400" opacity="0.10"></circle>
        <circle r="373.5" cx="640" cy="400" opacity="0.28"></circle>
        <circle r="332" cx="640" cy="400" opacity="0.58"></circle>
        <circle r="290.5" cx="640" cy="400" opacity="0.32"></circle>
        <circle r="249" cx="640" cy="400" opacity="0.29"></circle>
        <circle r="207.5" cx="640" cy="400" opacity="0.16"></circle>
        <circle r="166" cx="640" cy="400" opacity="0.75"></circle>
        <circle r="124.5" cx="640" cy="400" opacity="0.59"></circle>
        <circle r="83" cx="640" cy="400" opacity="0.61"></circle>
    </g>
  </svg>
);

export default RedCircle;
