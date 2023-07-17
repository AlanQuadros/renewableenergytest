import styled from 'styled-components/native';
import {Colors} from '../../../resources';

export const HeaderHomeContainer = styled.View`
  padding: 50px 20px 10px 20px;
  background-color: ${Colors.white};
  border-bottom-width: 1px;
  border-color: ${Colors.lightGrey};
`;

export const UserCircle = styled.TouchableOpacity`
  background-color: ${Colors.lightGrey};
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const EarnRewardsPress = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.lightPurple};
  border-radius: 4px;
  padding: 10px;
`;
