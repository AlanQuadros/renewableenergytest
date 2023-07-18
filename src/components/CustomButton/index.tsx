import React from 'react';
import {CustomButtonContainer} from './styles';
import {CustomText} from '../index';
import {Colors} from '../../resources';
import {TouchableOpacityProps} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  flex?: number;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
}

function CustomButton({
  label,
  flex,
  borderColor,
  bgColor,
  textColor,
  ...props
}: CustomButtonProps) {
  return (
    <CustomButtonContainer
      flex={flex}
      borderColor={borderColor}
      bgColor={bgColor}
      {...props}>
      <CustomText
        semiBold
        size={16}
        color={textColor || Colors.white}
        textAlign={'center'}>
        {label}
      </CustomText>
    </CustomButtonContainer>
  );
}

export default CustomButton;
