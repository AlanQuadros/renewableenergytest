import React, {useState} from 'react';
import {
  Container,
  CustomButton,
  CustomInput,
  CustomText,
  Separator,
  CustomCheckBox,
  DefaultScroll,
  DefaultPress,
} from '../../components';
import {Colors, t} from '../../resources';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Ionicons';
import signupValidationSchema from './signupValidationSchema';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../../routes/MainStack';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

type SignupScreenProp = StackNavigationProp<MainStackParamList, 'Signup'>;

type SignupFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
};

function Signup() {
  const [showPassword, togglePassword] = useState(false);

  const navigation = useNavigation<SignupScreenProp>();

  const initialValues: SignupFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  };

  function signup(values: SignupFormValues) {
    Snackbar.show({
      text: t('registrationSuccess'),
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: Colors.lightGreen,
    });
    navigation.goBack();
  }

  function backToLogin() {
    navigation.goBack();
  }

  return (
    <DefaultScroll>
      <Container>
        <CustomText semiBold size={18} textAlign={'center'}>
          {t('createYourAccount')}
        </CustomText>
        <Separator y={20} />
        <Formik
          initialValues={initialValues}
          onSubmit={signup}
          validationSchema={signupValidationSchema}>
          {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
            <>
              <CustomInput
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                label={t('firstName')}
                placeholder={t('firstName')}
                errorMessage={errors.firstName}
              />
              <Separator y={20} />
              <CustomInput
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                label={t('lastName')}
                placeholder={t('lastName')}
                errorMessage={errors.lastName}
              />
              <Separator y={20} />
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
              <Separator y={20} />
              <CustomCheckBox
                checked={values.terms}
                toggleCheck={() => setFieldValue('terms', !values.terms)}
                customLabel={
                  <CustomText size={12} color={Colors.grey}>
                    {t('termsText')}
                    <CustomText size={12}>{t('termsOfService')}</CustomText>
                    {t('and')}
                    <CustomText size={12}>{t('privacyPolicy')}</CustomText>
                  </CustomText>
                }
              />
              {!values.terms && (
                <>
                  <Separator y={10} />
                  <CustomText
                    size={12}
                    color={Colors.lightRed}
                    textAlign={'right'}>
                    {errors.terms}
                  </CustomText>
                </>
              )}
              <Separator y={25} />
              <CustomButton
                label={t('createAccount')}
                onPress={() => handleSubmit()}
              />
            </>
          )}
        </Formik>
        <Separator y={15} />
        <DefaultPress onPress={backToLogin}>
          <CustomText size={12} color={Colors.grey} textAlign={'center'}>
            {t('alreadyHaveAnAccount')}
            <CustomText size={12}>{t('loginHere')}</CustomText>
          </CustomText>
        </DefaultPress>
      </Container>
    </DefaultScroll>
  );
}

export default Signup;
