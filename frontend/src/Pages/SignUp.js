import React from "react";
import { useState, useEffect } from "react";
import whoosh from "../assets/whoosh.mp3";
import {Link} from "react-router-dom";


const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [audio] = useState(new Audio(whoosh));
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  // const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const playEffects = (e) => {
      if (play) {
        audio.play();
        audio.volume = 0.2;
      }
    };
    playEffects();
  }, [play]);

  const onChecked = (e) => {
    var passwordInp = document.getElementById("passwordInp");
    // e.preventDefault();
    if (e.target.checked) {
      passwordInp.setAttribute("type", "text");
    } else {
      passwordInp.setAttribute("type", "password");
    }
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    SetPassword(e.target.value);
  };
  const handleClick = (e) => {
    setPlay(true);
    if (play) {
      audio.play();
    }
  };
  const onSubmission = (e) => {
    // setting data current hooks value to react-redux-arrays
    // setStatus(true);                onDataSent = setStatus(true)
  };

  return (
    <div className="SignUp">
      <form id="signUpForm">
        <center>
          <h3 className="colorWhite text-xl text-gray-100">SIGNUP</h3>
        </center>
        <input
          type="text"
          placeholder="userName"
          className="inpElem"
          onChange={handleUserName}
          required
        />

        <input
          type="email"
          placeholder="email"
          className="inpElem"
          onChange={handleEmail}
          required
        />
        <div className="passwordInpCont">
          <input
            type="password"
            placeholder="password"
            className="inpElem passwordInp"
            id="passwordInp"
            onChange={handlePassword}
            required
          />
          <label htmlFor="showPassword" className="showPassword">
            <input
              type="checkbox"
              name="showPassword"
              className="showPasswordInp"
              onChange={onChecked}
            />
          </label>
        </div>
        <div className="submitInpCont">
          <input
            type="submit"
            className="my-1 submitInp bg-gray-500 text-gray-900 cursor-pointer hover:bg-green-600 hover:text-white"
            value="signUp"
            onClick={handleClick}
            onSubmit={onSubmission}
          />
        </div>
          <div className="w-9/12 text-sm text-start my-4">
              <Link to="/Login" className="underline decoration-solid">
                     Already Have An Account ?
              </Link>
          </div>
      </form>
      {/* <div id="animationCont"></div> */}
      <div className="textBg">
        SIGNUP
      </div>

    </div>
  );
};

export default SignUp;
