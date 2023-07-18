import styled from 'styled-components/native';
import {Colors} from '../../resources';

type BreakDownItemPressProps = {
  isSelected: boolean;
};

export const BreakDownItemPress = styled.TouchableOpacity<BreakDownItemPressProps>`
  border-bottom-width: ${({isSelected}) => (isSelected ? '2px' : 0)};
  border-color: ${Colors.purple};
  margin-right: 10px;
  padding-bottom: 5px;
`;

export const BreakdownCardPress = styled.Pressable`
  width: 220px;
  height: 280px;
  margin-right: 10px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${Colors.mediumGrey};
`;

export const BreakdownInnerContainer = styled.View`
  padding: 15px;
`;

export const BackgroundImage = styled.Image`
  width: 220px;
  height: 106px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 18.4px;
`;
