import React from 'react';


type ColorCircleProps = {
  className?: string;
  colorName?: string | null;
};

const PresetColorCircle: React.FC<ColorCircleProps> = ({ className, colorName = "yellow" }) => {
  let gradientId = "";
  let gradient;

  switch (colorName) {
    case 'yellow':
      gradientId = "yellowCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#c9803e" stopOpacity="0.5"></stop>
          <stop offset="75%" stopColor="hsl(28, 100%, 71%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#ffffcc" stopOpacity="1"></stop>
        </radialGradient>
      );
      break;
    case 'red':
      gradientId = "redCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#7c0000" stopOpacity="0.5" />
          <stop offset="75%" stopColor="hsl(10, 75%, 40%)" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff956f" stopOpacity="1" />
        </radialGradient>
      );
      break;
    case 'purple':
      gradientId = "purpleCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#810077" stopOpacity="0.5" />
          <stop offset="75%" stopColor="hsl(305, 77%, 40%)" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff8bff" stopOpacity="1" />
        </radialGradient>
      );
      break;
    case 'green':
      gradientId = "green-circular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#005300" stopOpacity="0.9"></stop>
          <stop offset="75%" stopColor="hsl(105, 69%, 30%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#97e476" stopOpacity="1"></stop>
        </radialGradient>
      );
      break;
    case 'blue':
      gradientId = "blueCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#000080" stopOpacity="0.5"></stop>
          <stop offset="75%" stopColor="hsl(240, 100%, 30%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#8cb3ff" stopOpacity="1"></stop>
        </radialGradient>
      );
      break;
    case 'orange':
      gradientId = "orangeCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#804000" stopOpacity="0.5"></stop>
          <stop offset="75%" stopColor="hsl(30, 100%, 40%)" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#ffcc99" stopOpacity="1"></stop>
        </radialGradient>
      );
      break;
    case 'cyan':
      gradientId = "cyanCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#005455" stopOpacity="0.5" />
          <stop offset="75%" stopColor="hsl(180, 69%, 30%)" stopOpacity="1" />
          <stop offset="100%" stopColor="#88e3e2" stopOpacity="1" />
        </radialGradient>
      );
      break;
    case 'magenta':
      gradientId = "magentaCircular-grad";
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          <stop offset="15%" stopColor="#80004d" stopOpacity="0.5" />
          <stop offset="75%" stopColor="hsl(300, 77%, 40%)" stopOpacity="1" />
          <stop offset="100%" stopColor="#ff8be6" stopOpacity="1" />
        </radialGradient>
      );
      break;
    

    // Add other cases
    default:
      gradientId = "yellowCircular-grad"; // Default case
      gradient = (
        <radialGradient id={gradientId} r="50%" cx="50%" cy="50%">
          {/* Default gradient stops */}
        </radialGradient>
      );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" className={className}>
      <defs>
        {gradient}
      </defs>
      <g fill={`url(#${gradientId})`}>
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
};


export default PresetColorCircle;

