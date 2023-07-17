import styled from 'styled-components/native';

type RowProps = {
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-evenly'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
};

const Row = styled.View<RowProps>`
  flex-direction: row;
  align-items: ${({alignItems}) => alignItems || 'center'};
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
`;

export default Row;
