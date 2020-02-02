import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useQuery,useMutation  } from '@apollo/react-hooks';
import {getAuthorsQuery,addBookMutation} from '../schema/schema';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    genre: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    authorId: Yup.string().required('Required'),
});

const AddBook = () => {
       const  { loading, error, data } =useQuery(getAuthorsQuery);
       const [addBook, { resData }] = useMutation(addBookMutation);
       console.log(data,"data","error",error);
     const displayAuthors=()=>{
         if(loading) return (<div>Loading Data .........</div>);
         if (error) return `Error! ${error.message}`;
            return data.authors.map(author=>{
                return (
                    <option key={ author.id } value={author.id}>{ author.name }</option> 
                );
            })

     }
    return (
        <div>
            <h1>Add Book</h1>
            <Formik
                initialValues={{
                    name: '',
                    genre: '',
                    authorId: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                    addBook({variables:values});
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field type="text" name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <Field type="text" name="genre" />
                        {errors.genre && touched.genre ? (
                            <div>{errors.genre}</div>
                        ) : null}
                        <Field component="select" name="authorId"  >
                            {displayAuthors()}
                        </Field>
                        {errors.authorId && touched.authorId ? <div>{errors.authorId}</div> : null}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default AddBook;