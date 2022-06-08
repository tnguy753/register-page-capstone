import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignIn = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .matches(/^[A-Za-z]+$/i, "Must be characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must contain at least one uppercase letter, one special character and one number"
      )
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // your form submit function which will invoke after successful validation
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-field">
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <input className="btn" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
