import styled from 'styled-components/native';
import {Colors} from '../../resources';

type CustomButtonContainerProps = {
  flex?: number;
  bgColor?: string;
  borderColor?: string;
};

export const CustomButtonContainer = styled.TouchableOpacity<CustomButtonContainerProps>`
  background-color: ${({bgColor}) => bgColor || Colors.purple};
  border-width: ${({borderColor}) => (borderColor ? '1px' : 0)};
  border-color: ${({borderColor}) => borderColor || Colors.purple};
  border-radius: 4px;
  padding: 20px;
  flex: ${({flex}) => flex || 'none'};
`;
