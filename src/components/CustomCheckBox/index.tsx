import React from 'react';
import {BoxContainer} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DefaultPress} from '../index';
import Row from '../Row';

type CustomCheckBoxProps = {
  checked: boolean;
  toggleCheck: () => void;
  customLabel?: React.JSX.Element;
};

function CustomCheckBox({
  checked,
  toggleCheck,
  customLabel,
}: CustomCheckBoxProps) {
  return (
    <DefaultPress onPress={toggleCheck}>
      <Row justifyContent={'flex-start'} alignItems={'flex-start'}>
        <BoxContainer checked={checked}>
          {checked && <Icon name={'check'} size={14} />}
        </BoxContainer>
        {customLabel && <>{customLabel}</>}
      </Row>
    </DefaultPress>
  );
}

export default CustomCheckBox;
