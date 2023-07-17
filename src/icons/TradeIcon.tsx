import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Colors} from '../resources';

interface TradeIconProps extends SvgProps {
  focused: boolean;
}

const TradeIcon = ({focused, ...props}: TradeIconProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill={focused ? Colors.purple : Colors.black}
      d="m16.55 12 4.95 4.95-4.95 4.95-1.414-1.414 2.536-2.537L4.5 17.95v-2h13.172l-2.536-2.536L16.55 12ZM8.45 2l1.414 1.414L7.328 5.95H20.5v2H7.328l2.536 2.536L8.45 11.9 3.5 6.95 8.45 2Z"
    />
  </Svg>
);
export default TradeIcon;
