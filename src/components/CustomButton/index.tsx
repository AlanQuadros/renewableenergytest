import React from 'react';
import {CustomButtonContainer} from './styles';
import {CustomText} from '../index';
import {Colors} from '../../resources';
import {TouchableOpacityProps} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
}

function CustomButton({label, ...props}: CustomButtonProps) {
  return (
    <CustomButtonContainer {...props}>
      <CustomText semiBold size={16} color={Colors.white} textAlign={'center'}>
        {label}
      </CustomText>
    </CustomButtonContainer>
  );
}

export default CustomButton;
