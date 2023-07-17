import styled from 'styled-components/native';
import {Colors, Fonts} from '../../resources';

type CustomTextProps = {
  size?: number;
  color?: string;
  textAlign?: string;
  textDecoration?: string;
  bold?: boolean;
  light?: boolean;
  medium?: boolean;
  thin?: boolean;
  extraBold?: boolean;
  semiBold?: boolean;
  extraLight?: boolean;
};

const CustomText = styled.Text<CustomTextProps>`
  font-family: ${props => {
    if (props.bold) {
      return Fonts.primaryBold;
    } else if (props.light) {
      return Fonts.primaryLight;
    } else if (props.medium) {
      return Fonts.primaryMedium;
    } else if (props.thin) {
      return Fonts.primaryThin;
    } else if (props.extraBold) {
      return Fonts.primaryExtraBold;
    } else if (props.semiBold) {
      return Fonts.primarySemiBold;
    } else if (props.extraLight) {
      return Fonts.primaryExtraLight;
    }

    return Fonts.primaryRegular;
  }};
  font-size: ${({size}) => size || 14}px;
  color: ${({color}) => color || Colors.black};
  text-align: ${({textAlign}) => textAlign || 'left'};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
  text-decoration-color: ${({color}) => color || Colors.black};
`;

export default CustomText;
