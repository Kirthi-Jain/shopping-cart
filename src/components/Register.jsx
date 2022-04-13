import { Formik, Field, Form, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

export default () => {
  return (
    <>
      <NavLink to="/" className="btn">
        Home
      </NavLink>
      <Formik
        initialValues={{
          name: "",
          date: "1965-01-01",
          email: "",
          address: "",
          photoURL: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(/^[A-Za-z]{3,15}[ ][A-Za-z]{3,15}$/, "Invalid Format")
            .required(),
          date: Yup.date().min("1965-01-01").max("2005-01-01").required(),
          email: Yup.string().email("Invalid email address").required(),
          address: Yup.string().min(10).max(200),
          photoURL: Yup.string().matches(
            /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/,
            "Invalid URL"
          ),
        })}
        onSubmit={async values => {
          const res = await fetch("http://localhost:7000/register", {
              method: "POST",
              // headers: {
              //   "Content-Type": "application/json",
              // },
              body: JSON.stringify(values),
            }),
            { status, json } = res;
          alert(await json());
          if (status == 201) {
            document.location.href = "/"; // Need to apply Soft Page Load @@@1
          }
        }}
      >
        <Form className="container form-label">
          <h1 className="mb-4">Add Employee details</h1>

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

          <input type="submit" className="btn btn-secondary" />
        </Form>
      </Formik>
    </>
  );
};
