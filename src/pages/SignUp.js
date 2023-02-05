import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/button/Button";
import {
  FormGroup,
  Heading,
  Label,
  LogoDark,
  Term,
} from "../components/commom";
import FooterAuth from "../components/footer/FooterAuth";
import Input from "../components/input/Input";
import { auth } from "../config/firebase";
import { setUser } from "../store/slices/auth";
import { ValidateEmail } from "../utils/handleValidate";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    clientName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [error, setError] = useState({
    clientName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleReset = () => {
    setPayload({
      clientName: "",
      email: "",
      password: "",
      cPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (payload.clientName === "") {
      setError((prev) => ({ ...prev, clientName: "Not empty" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, clientName: "" }));
    }
    if (!ValidateEmail(payload.email)) {
      setError((prev) => ({ ...prev, email: "Email is not valid" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
    if (payload.password === "") {
      setError((prev) => ({ ...prev, password: "Not empty" }));
      isValid = false;
    } else {
      if (payload.password.length > 0 && payload.password.length <= 4) {
        setError((prev) => ({ ...prev, password: "Too short" }));
        isValid = false;
      } else {
        setError((prev) => ({ ...prev, password: "" }));
      }
    }
    if (payload.password.length > 0 && payload.password !== payload.cPassword) {
      setError((prev) => ({ ...prev, cPassword: "Not match" }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, cPassword: "" }));
    }

    if (isValid) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: payload.clientName,
            photoURL:
              "https://images.unsplash.com/photo-1675369512729-655c6e7ec6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          });

          const user = userCredential.user;
          dispatch(
            setUser({
              _id: user.uid,
              clientName: user.displayName,
              avatar: user.photoURL,
            })
          );
          toast.success("Register success");
          handleReset();
          navigate("/");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            setError((prev) => ({ ...prev, email: "Email is exist" }));
          }
          console.log(errorMessage);
          // ..
        });
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-screen bg-white rounded-lg">
        <div className="w-[360px] mx-auto mb-7">
          <form className="w-full mb-7" onSubmit={handleSubmit}>
            <LogoDark />
            <div className="px-4 py-5 mx-auto border ">
              <Heading>Create account</Heading>
              <FormGroup>
                <Label htmlFor={"usn-sign-up"}>Your name</Label>
                <Input
                  payload={payload}
                  setError={setError}
                  setPayload={setPayload}
                  error={error.clientName}
                  name="clientName"
                  id="usn-sign-up"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor={"psw-sign-in"}>Mobile phone or email</Label>
                <Input
                  payload={payload}
                  setError={setError}
                  error={error.email}
                  setPayload={setPayload}
                  name="email"
                  id="psw-sign-in"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor={"psw-sign-in"}>Password</Label>
                <Input
                  type="password"
                  payload={payload}
                  setError={setError}
                  error={error.password}
                  setPayload={setPayload}
                  name="password"
                  id="psw-sign-in"
                />
              </FormGroup>
              <FormGroup className={"mb-4"}>
                <Label htmlFor={"re-psw-sign-up"}>Re-enter password</Label>
                <Input
                  type="password"
                  payload={payload}
                  setError={setError}
                  error={error.cPassword}
                  setPayload={setPayload}
                  name="cPassword"
                  id="re-psw-sign-up"
                />
              </FormGroup>

              <FormGroup className={"mb-8 "}>
                <Button type="submit" className="" onSubmit={handleSubmit}>
                  Verify email
                </Button>
              </FormGroup>
              <FormGroup>
                <Term />
              </FormGroup>
              <div className="text-sm font-normal box-sign-in">
                <p className="group">
                  Already have an account?
                  <Link
                    to="/sign-in"
                    className="text-blue-500 group-hover:text-orangeBtn hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
                <p className="">
                  Buying for work?{" "}
                  <span className="text-blue-500 hover:text-orangeBtn hover:underline">
                    Create a free business account
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
        <FooterAuth />
      </div>
    </>
  );
};

export default SignUp;
