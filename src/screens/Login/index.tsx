import React, {useState} from 'react';
import {
  Container,
  CustomText,
  CustomInput,
  Separator,
  CustomButton,
  DefaultPress,
} from '../../components';
import {Colors, t} from '../../resources';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import loginValidationSchema from './loginValidationSchema';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../../routes/MainStack';

type LoginScreenProp = StackNavigationProp<MainStackParamList, 'Login'>;

type LoginFormValues = {
  email: string;
  password: string;
};

function Login() {
  const [showPassword, togglePassword] = useState(false);
  const initialValues: LoginFormValues = {email: '', password: ''};

  const navigation = useNavigation<LoginScreenProp>();

  function login(values: LoginFormValues) {
    console.warn(values);
  }

  function signup() {
    navigation.navigate('Signup');
  }

  return (
    <Container>
      <CustomText semiBold size={18} textAlign={'center'}>
        {t('login')}
      </CustomText>
      <Separator y={25} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => login(values)}
        validationSchema={loginValidationSchema}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <CustomInput
              onChangeText={handleChange('email')}
              value={values.email}
              label={t('email')}
              placeholder={t('emailPlaceholder')}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              errorMessage={errors.email}
            />
            <Separator y={20} />
            <CustomInput
              onChangeText={handleChange('password')}
              value={values.password}
              label={t('password')}
              placeholder={t('passwordPlaceholder')}
              autoCapitalize={'none'}
              secureTextEntry={!showPassword}
              errorMessage={errors.password}
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
            <CustomButton label={t('login')} onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
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
