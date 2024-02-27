import React from 'react';

const CyanCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800">
    <defs>
      <radialGradient id="cyanCircular-grad" r="50%" cx="50%" cy="50%">
        <stop offset="15%" stopColor="#005455" stopOpacity="0.5" />
        <stop offset="75%" stopColor="hsl(180, 69%, 30%)" stopOpacity="1" />
        <stop offset="100%" stopColor="#88e3e2" stopOpacity="1" />
      </radialGradient>
    </defs>
    <g fill="url(#cyanCircular-grad)">
        <circle r="581" cx="640" cy="400" opacity="0.24"></circle><circle r="539.5" cx="640" cy="400" opacity="0.44"></circle><circle r="498" cx="640" cy="400" opacity="0.30"></circle><circle r="456.5" cx="640" cy="400" opacity="0.60"></circle><circle r="415" cx="640" cy="400" opacity="0.36"></circle><circle r="373.5" cx="640" cy="400" opacity="0.26"></circle><circle r="332" cx="640" cy="400" opacity="0.14"></circle><circle r="290.5" cx="640" cy="400" opacity="0.65"></circle><circle r="249" cx="640" cy="400" opacity="0.62"></circle><circle r="207.5" cx="640" cy="400" opacity="0.97"></circle><circle r="166" cx="640" cy="400" opacity="0.90"></circle><circle r="124.5" cx="640" cy="400" opacity="0.97"></circle><circle r="83" cx="640" cy="400" opacity="0.48"></circle>
    </g>
  </svg>
);

export default CyanCircle;
