import {postSignIn} from '../../../../services/signInservice';

const onSubmitForm = async(values, submitprops) => {
    try{
    await postSignIn(values)
    window.location = "/user/Mike";
    }   
   catch(err) {
     submitprops.setSubmitting(false);
     submitprops.setFieldError("password", err.response.data.message);
   };
};
export default onSubmitForm;