import {postSignUp} from '../../../../services/signUpservices';

const onSubmitForm = async(values, submitprop) => {
        try{
            await postSignUp(values);
            window.location = "/user/Mike";
        }catch(err){
            submitprop.setSubmitting(false);
            submitprop.setFieldError("email", err.response.data.message);
        }
  };
  export default onSubmitForm;