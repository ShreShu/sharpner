import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const collageNameRef = useRef();
  const ageRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredname = nameInputRef.current.value;
    const enteredUserAge = ageRef.current.value;
    const enteredCollage = collageNameRef.current.value;

    if (
      enteredname.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredname, enteredUserAge, enteredCollage);
    nameInputRef.current.value = "";
    ageRef.current.value = "";
    collageNameRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} ref={ageRef} />
          <label htmlFor="collage">Collage</label>
          <input
            id="collage"
            type="text"
            value={enteredCollage}
            ref={collageNameRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
