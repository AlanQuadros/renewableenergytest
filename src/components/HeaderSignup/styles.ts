import styled from 'styled-components/native';
import {Colors} from '../../resources';

export const HeaderLine = styled.View`
  height: 5px;
  width: 50px;
  border-radius: 200px;
  background-color: ${Colors.lightGrey};
  margin: 0 3px;
`;

export const HeaderLineContainer = styled.View`
  flex-direction: row;
`;
