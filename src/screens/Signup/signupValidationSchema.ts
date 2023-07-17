import * as Yup from 'yup';
import {t} from '../../resources';

const signupValidationSchema = Yup.object({
  firstName: Yup.string().required(t('required')),
  lastName: Yup.string().required(t('required')),
  email: Yup.string().email(t('invalidEmailAddress')).required(t('required')),
  password: Yup.string().min(8, t('minimunPassword')).required(t('required')),
  terms: Yup.boolean().required(t('errorTerms')).oneOf([true], t('errorTerms')),
});

export default signupValidationSchema;
