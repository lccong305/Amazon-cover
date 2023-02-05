import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/button/Button";
import FormGroup from "../components/commom/FormGroup";
import Heading from "../components/commom/Heading";
import Label from "../components/commom/Label";
import LogoDark from "../components/commom/LogoDark";
import Term from "../components/commom/Term";
import FooterAuth from "../components/footer/FooterAuth";
import Input from "../components/input/Input";
import { auth } from "../config/firebase";
import { setUser } from "../store/slices/auth";
import { ValidateEmail } from "../utils/handleValidate";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!ValidateEmail(payload.email)) {
      setError((prev) => ({ ...prev, email: "Email is not valid" }));
      isValid = false;
    }
    if (payload.password === "") {
      setError((prev) => ({ ...prev, password: "Not empty" }));
      isValid = false;
    } else {
      if (payload.password.length > 0 && payload.password.length <= 4) {
        setError((prev) => ({ ...prev, password: "Too short" }));
        isValid = false;
      }
    }
    if (isValid) {
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("user ", user);
          dispatch(
            setUser({
              _id: user.uid,
              // token: user.stsTokenManager,
              clientName: user.displayName,
              avatar: user.photoURL,
            })
          );
          toast.success("Login success");
          navigate("/");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode.includes("auth/wrong-password")) {
            setError((prev) => ({ ...prev, password: "Wrong passowrd" }));
          }
        });
      console.log(payload);
    }
  };
  return (
    <div className="flex flex-col w-full h-screen bg-white rounded-lg">
      <div className="w-[360px] mx-auto mb-7">
        <form className="w-full mb-7" onSubmit={handleSubmit}>
          <LogoDark />
          <div className="px-6 py-5 mx-auto border ">
            <Heading>Sign in</Heading>
            <FormGroup>
              <Label htmlFor={"usn-sign-in"}>
                Email or mobile phone number
              </Label>
              <Input
                setPayload={setPayload}
                setError={setError}
                error={error.email}
                name="email"
                id="usn-sign-in"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"psw-sign-in"}>Password</Label>
              <Input
                type={"password"}
                setPayload={setPayload}
                setError={setError}
                error={error.password}
                name="password"
                id="psw-sign-in"
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit" onSubmit={handleSubmit}>
                Continue
              </Button>
            </FormGroup>
            <FormGroup className={"mb-0"}>
              <Term />
              <Link to="#" className="text-sm font-medium text-blue-500">
                Need held?
              </Link>
            </FormGroup>
          </div>
        </form>
        <div className="w-full mb-3 line">
          <span className="px-2 text-sm font-normal text-gray-600 bg-white">
            New to Amazon?
          </span>
        </div>
        <Button
          href="/sign-up"
          className="w-full bg-[#EFF0F3] hover:bg-gray-200 rounded"
        >
          Create your Amazon account
        </Button>
      </div>
      <FooterAuth />
    </div>
  );
};

export default SignIn;
