import React from 'react';
import {Input, InputView} from './styles';
import {CustomText, Separator} from '../index';
import {Colors} from '../../resources';
import {TextInputProps} from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  suffix?: React.JSX.Element;
}

const CustomInput = ({label, suffix, ...props}: CustomInputProps) => {
  return (
    <>
      <CustomText medium color={Colors.grey} size={11}>
        {label}
      </CustomText>
      <Separator y={5} />
      <InputView>
        <Input selectionColor={Colors.purple} {...props} />
        {suffix}
      </InputView>
    </>
  );
};

export default CustomInput;
