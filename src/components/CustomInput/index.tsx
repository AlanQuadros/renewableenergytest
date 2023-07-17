import React from 'react';
import {Input, InputView} from './styles';
import {CustomText, Separator} from '../index';
import {Colors} from '../../resources';
import {TextInputProps} from 'react-native';

interface CustomInputProps extends TextInputProps {
  label: string;
  errorMessage?: string;
  suffix?: React.JSX.Element;
}

const CustomInput = ({
  label,
  errorMessage,
  suffix,
  ...props
}: CustomInputProps) => {
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
      {errorMessage && (
        <>
          <Separator y={5} />
          <CustomText size={12} color={Colors.lightRed} textAlign={'right'}>
            {errorMessage}
          </CustomText>
        </>
      )}
    </>
  );
};

export default CustomInput;
