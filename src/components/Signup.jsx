import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase/setup";

import { addDoc, collection, getFirestore } from "firebase/firestore";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");

  const db = getFirestore();
  const saveDataToFireStore = async () => {
    const docref = await addDoc(collection(db, "contacts"), {
      contact_no: phone,
    });
    alert("Contact Store in database");
  };

  const sendOTP = async () => {
    try {
      console.log("sendotp called");
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const conformation = await signInWithPhoneNumber(auth, phone, recaptcha);
      console.log(conformation);
      setUser(conformation);
    } catch (err) {
      console.log(err);
    }
  };

  const varifyOTP = async () => {
    try {
      console.log("varify otp called");
      var data = await user.confirm(otp);
      console.log(data);
      saveDataToFireStore();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              for="phonenumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phonenumber
            </label>
            <div className="mt-2 mb-2">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone("+" + phone)}
              />
            </div>
          </div>
          <div>
            <button
              type=""
              onClick={sendOTP}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send OTP
            </button>
          </div>
          <div id="recaptcha" className="mt-2 mb-2"></div>
          <div className="mb-2">
            <div className="flex items-center justify-between">
              <label
                for="otp"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                OTP
              </label>
            </div>
            <div className="mt-2">
              <input
                id="otp"
                type="text"
                onChange={(e) => setOtp(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={varifyOTP}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
