import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
}

const ArrowRight = ({
  color = '#171212',
  size = 24,
  width,
  height,
  ...props
}: IconProps) => {
  const w = width ?? size;
  const h = height ?? size;

  return (
    <Svg width={w} height={h} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="m17.78 8.53-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H.75a.75.75 0 0 1 0-1.5h14.69L9.97 1.78A.75.75 0 0 1 11.03.72l6.75 6.75a.75.75 0 0 1 0 1.06Z"
      />
    </Svg>
  );
};

export default ArrowRight;
