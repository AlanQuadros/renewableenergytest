import styled from 'styled-components/native';
import {Colors, Fonts} from '../../resources';

export const InputView = styled.View`
  padding: 15px 10px;
  border-radius: 4px;
  background-color: ${Colors.lightGrey};
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  font-family: ${Fonts.primaryRegular};
`;
