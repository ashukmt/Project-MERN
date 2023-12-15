import Yup from 'yup';
export const ValidationSchema= Yup.object({
    name:Yup.string().min(2).max(20).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Please enter your password")
})