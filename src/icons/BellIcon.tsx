import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BellIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7Zm-2 0v-7a6 6 0 1 0-12 0v7h12Zm-9 4h6v2H9v-2Z"
    />
  </Svg>
);
export default BellIcon;
