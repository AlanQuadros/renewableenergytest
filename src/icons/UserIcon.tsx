import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const UserIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#000"
      d="M4 22a8 8 0 0 1 16 0h-2a6 6 0 1 0-12 0H4Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
    />
  </Svg>
);
export default UserIcon;
