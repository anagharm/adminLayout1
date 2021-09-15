import React , { useState , useEffect} from 'react'
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik'
import  * as Yup from 'yup'
import FormikControl from '../../hoc/formikComponents/FormikControl.js'
import '../GeneralCss.css'

function RegisterUser() {
    const backDate = () => {
        var todayDate = new Date();
        var year_18 = todayDate.getFullYear() - 18;
        return new Date(todayDate.getDate() + "-" + todayDate.getMonth() + "-" + year_18)
    }
    const history = useHistory();

    const initialValues = {
        firstName           : "",
        lastName            : "",
        emailId             : "",
        mobNum              : "",
        dob                 : "",
        gender              : "",
        picUrl              : "",
    }

    const genderOptions = [
        { key: 'Select', value: '' },
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },
        { key: 'Other', value: 'other' },
    ]

    const validationSchema = Yup.object({
        firstName       : Yup.string().required('Required!!'),
        lastName        : Yup.string().required('Required!!'),
        emailId         : Yup.string().email('Invalid Email Format').required('Required!!'),
        mobNum          : Yup.string(),
        dob             : Yup.date().default(function () { return new Date();}),
        gender          : Yup.string(),
        // picUrl          : "",
    })
    
    const onSubmit = values => {
        console.log('Form data ',values)
        // mutation.mutate(values)
    }

    return (
        <Formik
                initialValues       = {initialValues}
                validationSchema    = {validationSchema}
                onSubmit            = {onSubmit}
        >
                {
                    formik =>   <Form>
                                    <div className="formOuterDiv">
                                        <div className="form2RowDiv">
                                            <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder="First Name" />
                                            <FormikControl control='input' type='text' label='Last Name' name='lastName' placeholder="Last Name" />
                                        </div>

                                        <div className="form1RowDiv">
                                            <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder="First Name" />
                                        </div>

                                        <div className="form2RowDiv">
                                            <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder="First Name" />
                                            <FormikControl control='input' type='text' label='Last Name' name='lastName' placeholder="Last Name" />
                                        </div>

                                        <div className="form1RowDiv">
                                            <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder="First Name" />
                                        </div>
                                        
                                        <div className="submitButtonDiv">
                                            <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Submit</button>
                                        </div>
                                    </div>
                                </Form>
                }
        </Formik>
    )
}

export default RegisterUser