import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

interface HomeIconProps extends SvgProps {
  focused: boolean;
}

const HomeIcon = ({focused, ...props}: HomeIconProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={focused ? Colors.purple : Colors.black}
      d="M21.5 19.733a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9.223a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79v10.51Zm-10-7v6h2v-6h-2Z"
    />
  </Svg>
);
export default HomeIcon;
