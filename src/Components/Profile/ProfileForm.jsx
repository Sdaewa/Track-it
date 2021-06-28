import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef();
  const newEmailInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const newEmail = newEmailInputRef.current.value;
    const newPassword = newPasswordInputRef.current.value;
    // add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyApmvDVJGzewx1YWLjDxIcucnowgCIrcPE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          email: newEmail,
          password: newPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        history.replace("/");
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = "Could not complete request";
          throw new Error(errorMessage);
        });
      }
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-email">New Email</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newEmailInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
