import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as Yup from "yup";

export default () => {
  const { _id } = useParams(), //@@2
    [getUserData, setUserData] = useState(),
    getdata = async () => {
      const res = await fetch(`http://localhost:7000/getdata/${_id}`, {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }),
      {json, status} = res;
      if (status == 422) {
        alert(await json());
      } else if (status == 201) {
        setUserData(await json());
      }
    };
  useEffect(() => {
    getdata();
  }, []);
  if (getUserData) {
    const { name, date, email, address, photoURL } = getUserData;
    return (
      <>
        <NavLink to="/" className="btn">
          Home
        </NavLink>
        <Formik
          initialValues={{
            name,
            date,
            email,
            address,
            photoURL,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .matches(/^[A-Za-z]{3,15}[ ][A-Za-z]{3,15}$/, "Invalid Format")
              .required(),
            date: Yup.date().min("1965-01-01").max("2005-01-01").required(),
            email: Yup.string().email("Invalid email address").required(),
            address: Yup.string().min(10).max(200).nullable(),
            photoURL: Yup.string()
              .matches(/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/, "Invalid URL")
              .nullable(),
          })}
          onSubmit={async values => {
            const res = await fetch(`http://localhost:7000/update/${_id}`, {
              method: "PUT",
              // headers: {
              //   "Content-Type": "application/json",
              // }
              body: JSON.stringify(values),
            }), 
            {json, status} = res;
            if(status == 201 || status == 422)
            alert(await json());
             if (status == 201) {
              window.location.href = "/"; //@@@
            }
          }}
        >
            <Form className="container form-label">
              <h1 className="mb-2">Edit Employee details</h1>
              <br />
              <label htmlFor="name">Name (First Name Last Name)</label>
              <br />
              <Field name="name" type="text" />
              <br />
              <ErrorMessage name="name" />
              <br />

              <label htmlFor="date">DOB</label>
              <br />
              <Field name="date" type="date" />
              <br />
              <ErrorMessage name="date" />
              <br />

              <label htmlFor="email">Email Address</label>
              <br />
              <Field name="email" type="email" />
              <br />
              <ErrorMessage name="email" />
              <br />

              <label htmlFor="address">Address</label>
              <br />
              <Field name="address" as="textarea" />
              <br />
              <ErrorMessage name="address" />
              <br />

              <label htmlFor="photoURL">PhotoURL</label>
              <br />
              <Field name="photoURL" type="text" />
              <br />
              <ErrorMessage name="photoURL" />
              <br />

              <input
                type="submit"
                className="btn btn-secondary"
              />
            </Form>
        </Formik>
      </>
    );
  } else {
    return <></>;
  }
};



