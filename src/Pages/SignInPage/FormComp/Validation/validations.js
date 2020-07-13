import * as Yup from 'yup';
const validationSchema = Yup.object({
    email:Yup.string().email().required('Email Required'),
    password:Yup.string().min(5).required('Password cant be Empty')
})
export default validationSchema;