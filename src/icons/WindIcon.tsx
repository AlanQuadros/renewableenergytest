import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const WindIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#4A88D0"
      d="M9.969 2C8.86 2 8 2.904 8 4h1c0-.615.365-1 .969-1C10.563 3 11 3.438 11 4.031c0 .594-.416.969-1.031.969H2v1h7.969C11.065 6 12 5.148 12 4.031A2.037 2.037 0 0 0 9.969 2ZM2 7.5v1h9.75c.695 0 1.25.555 1.25 1.25S12.445 11 11.75 11c-.371 0-.66-.12-.875-.344-.215-.224-.375-.578-.375-1.156h-1c0 .771.236 1.404.656 1.844.42.44.998.656 1.594.656A2.258 2.258 0 0 0 14 9.75a2.258 2.258 0 0 0-2.25-2.25H2ZM2 10v1h3.969C6.574 11 7 11.406 7 12c0 .604-.396 1-1 1s-1-.396-1-1H4c0 1.107.893 2 2 2s2-.893 2-2c0-1.117-.924-2-2.031-2H2Z"
    />
  </Svg>
);
export default WindIcon;
