import * as Yup from 'yup';
import {t} from '../../resources';

const loginValidationSchema = Yup.object({
  email: Yup.string().email(t('invalidEmailAddress')).required(t('required')),
  password: Yup.string().min(8, t('minimunPassword')).required(t('required')),
});

export default loginValidationSchema;
