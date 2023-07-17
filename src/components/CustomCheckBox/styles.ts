import styled from 'styled-components/native';
import {Colors} from '../../resources';

type BoxContainerProps = {
  checked: boolean;
};

export const BoxContainer = styled.View<BoxContainerProps>`
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-color: ${({checked}) => (checked ? Colors.black : Colors.mediumGrey)};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
