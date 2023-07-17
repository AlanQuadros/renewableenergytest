import React, {useState} from 'react';
import {Container} from '../../components/Container';
import {
  CustomText,
  CustomInput,
  Separator,
  CustomButton,
  DefaultPress,
} from '../../components';
import {Colors, t} from '../../resources';
import Icon from 'react-native-vector-icons/Ionicons';

function Login() {
  const [showPassword, togglePassword] = useState(false);

  function login() {
    console.warn('login');
  }

  function signup() {
    console.warn('signup');
  }

  return (
    <Container>
      <CustomText semiBold size={18} textAlign={'center'}>
        {t('login')}
      </CustomText>
      <Separator y={25} />
      <CustomInput
        label={t('email')}
        placeholder={t('emailPlaceholder')}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
      />
      <Separator y={20} />
      <CustomInput
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        autoCapitalize={'none'}
        secureTextEntry={!showPassword}
        suffix={
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={Colors.grey}
            onPress={() => togglePassword(!showPassword)}
          />
        }
      />
      <Separator y={35} />
      <CustomButton label={'Login'} onPress={login} />
      <Separator y={15} />
      <DefaultPress onPress={signup}>
        <CustomText color={Colors.grey} size={12} textAlign={'center'}>
          {`${t('dontHaveAnAccount')} `}
          <CustomText
            color={Colors.grey}
            size={12}
            textAlign={'center'}
            textDecoration={'underline'}>
            {t('signup')}
          </CustomText>
          {` ${t('here')}`}
        </CustomText>
      </DefaultPress>
    </Container>
  );
}

export default Login;
