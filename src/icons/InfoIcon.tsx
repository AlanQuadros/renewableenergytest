import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const InfoIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#A0A0A0"
        d="M7 12.834A5.833 5.833 0 1 1 7 1.167a5.833 5.833 0 0 1 0 11.667Zm0-1.167a4.667 4.667 0 1 0 0-9.334 4.667 4.667 0 0 0 0 9.334Zm-.583-7.583h1.166V5.25H6.416V4.084Zm0 2.333h1.166v3.5H6.416v-3.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default InfoIcon;
