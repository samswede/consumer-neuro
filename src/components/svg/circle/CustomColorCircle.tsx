import React from 'react';

type ColorStop = {
  offset: string;
  color: string;
  opacity: string;
};

type ColorCircleProps = {
  className?: string;
  colorStops: ColorStop[];
};

const CustomColorCircle: React.FC<ColorCircleProps> = ({ className, colorStops }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" className={className}>
    <defs>
      <radialGradient id="customCircular-grad" r="50%" cx="50%" cy="50%">
        {colorStops.map((stop, index) => (
          <stop key={index} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity} />
        ))}
      </radialGradient>
    </defs>
    <g fill="url(#customCircular-grad)">
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

export default CustomColorCircle;

