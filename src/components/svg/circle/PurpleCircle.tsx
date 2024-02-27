import React from 'react';

type CircleProps = {
    className?: string;
    // other props
  };


const PurpleCircle: React.FC<CircleProps> = ({ className }) =>  (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800">
    <defs>
      <radialGradient id="purpleCircular-grad" r="50%" cx="50%" cy="50%">
        <stop offset="15%" stopColor="#810077" stopOpacity="0.5" />
        <stop offset="75%" stopColor="hsl(305, 77%, 40%)" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff8bff" stopOpacity="1" />
      </radialGradient>
    </defs>
    <g fill="url(#purpleCircular-grad)">
        <circle r="581" cx="640" cy="400" opacity="0.35"></circle>
        <circle r="539.5" cx="640" cy="400" opacity="0.10"></circle>
        <circle r="498" cx="640" cy="400" opacity="0.31"></circle>
        <circle r="456.5" cx="640" cy="400" opacity="0.35"></circle>
        <circle r="415" cx="640" cy="400" opacity="0.63"></circle>
        <circle r="373.5" cx="640" cy="400" opacity="0.24"></circle>
        <circle r="332" cx="640" cy="400" opacity="0.74"></circle>
        <circle r="290.5" cx="640" cy="400" opacity="0.08"></circle>
        <circle r="249" cx="640" cy="400" opacity="0.21"></circle>
        <circle r="207.5" cx="640" cy="400" opacity="0.89"></circle>
        <circle r="166" cx="640" cy="400" opacity="0.25"></circle>
        <circle r="124.5" cx="640" cy="400" opacity="0.99"></circle>
        <circle r="83" cx="640" cy="400" opacity="0.35"></circle>
    </g>
  </svg>
);

export default PurpleCircle;
