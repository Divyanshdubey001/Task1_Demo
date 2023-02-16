// // import styled from "styled-components";
// // import {useFormik} from "formik";

// // const MainContainer = styled.div`
// // margin-top: 5px;
// // padding: 10px;
// // border: 1px solid #000;
// // background-image: url("../");
// // background-image: linear-gradient(to top, #233142, #455d7a, #f95959, #e3e3e3 );
// // `;

// // const Heading = styled.h1`
// // margin: auto 0px;
// // padding: 10px;
// // color: black;
// // `;

// // const BoxData = styled.div`
// // margin: auto 200px;
// // padding: 20px;
// // border: 2px solid black;
// // border-radius: 3px;
// // `;

// // const StyledForm = styled.form`
// // padding: 10px;
// // border-radius: 5px;
// // cursor: pointer;
// // display: inline-block;
// // `;

// // const StyledLabel = styled.label`
// // margin: 5px;
// // padding-top:5px;
// // display: block;
// // width: 150px;
// // `;

// // const StyledButton = styled.button`
// // padding: 5px;
// // display:block-inline;
// // background
// // `;

// // const SignUpForm = () =>{

// //     const formik = () =>({
// //         initialValue: {
// //             firstName: " ",
// //             lastName: " ",
// //             email: " ",
// //         },

// //         validate,

// //         onSubmit: values =>{
// //             alert(JSON.strify(values, 2, null));
// //         }
// //     });
// // }

// // function Home() {
// //     return(
// //   <>
// //     <MainContainer>
// //       <Heading>Home Page</Heading>
// //       <BoxData>
// //         <StyledForm>
// //             <StyledLabel for = "name">Name</StyledLabel>
// //             <input type = "text" placeholder="Enter Your Name"></input>
// //             <br></br>
// //             <StyledLabel for = "password">Password</StyledLabel>
// //             <input type = "password" placeholder="Enter password"></input>
// //             <br></br>
// //             <StyledLabel for = "password"> Confirm Password</StyledLabel>
// //             <input type = "password" placeholder="Confirm password"></input>
// //         </StyledForm>
// //         <StyledButton type="submit">Submit</StyledButton>
// //       </BoxData>
// //     </MainContainer>
// //   </>
// //     )
// // };

// // export default Home;

// import React from "react";
// import { useFormik } from "formik";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

// const SignupForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;

import styled from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { useFormik } from "formik";
import SignupSchema from "../Styles/schemas/SignupSchema";

const Wrapper = styled.section`
  .container: {
    position: absolute;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition-duration: 0.3s;
    background: #fff;
  }

  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
    p {
      font-size: 28px;
      font-weight: 600px;
    }
  }

  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .input-label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
    padding: 1rem 3rem;
  }

  .input-button {
    padding: 1rem 3rem;
    outline: none;
    text-transform: uppercase;
    border: 0px;
    color: #fff;
    border-radius: 60px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }

  .form-error {
    color: #b22b27;
    font-size: 14px;
  }

  .input-block {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
    padding: 2.35rem;
  }

  .input-button:hover {
    background: coral;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }

  /* .modal-right {
    display: flex
    width: 50%;
    height: 50%;
    font-size: 0;
    transition: 0.3s;
    overflow: auto;
  } */
`;

const SignUpForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      // validateOnChange: true,

      onSubmit: (values, action) => {
        console.log("Values entered by onSubmit", values);

        action.resetForm();
      },
    });

  // console.log("error", errors);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <div className="modal-title">
                  <p>Registration Form</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      id="name"
                      values={values.name}
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      id="email"
                      values={values.email}
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="Password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      id="password"
                      values={values.password}
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="Confirm Password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      autoComplete="off"
                      id="confirm_password"
                      values={values.confirm_password}
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <button className="input-button" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="Signin">Sign In Now</a>
                </p>
              </div>
              {/* <div className="modal-right">
              <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUpForm;
