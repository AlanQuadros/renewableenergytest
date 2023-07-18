import styled from 'styled-components/native';
import {Colors} from '../../resources';

type FilterItemPressProps = {
  selected: boolean;
};

export const FilterItemPress = styled.TouchableOpacity<FilterItemPressProps>`
  background-color: ${({selected}) =>
    selected ? Colors.lightPurple : Colors.white};
  width: 35px;
  height: 35px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;
