import * as Yup from 'yup';
const validationSchema = Yup.object({
    name:Yup.string().trim().min(4).required('Required'),
    email:Yup.string().trim().email().required('Email cant be empty'),
    password:Yup.string().trim().min(4).required('Password cant be empty')
})
export default validationSchema;