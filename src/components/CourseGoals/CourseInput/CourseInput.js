import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
      setEnteredValue(event.target.value); 
  };

  const formSubmitHandler = event => {
    event.preventDefault(); 
    props.onAddGoal(enteredValue);
    setEnteredValue(event.target.reset());
  }; 
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  // setEnteredValue(event.target.reset()) resets the form after submitting.


  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" required onChange={goalInputChangeHandler} />
      </div>
      <Button  type="submit">Add Goal</Button>
    </form>
  );
}; 
// 1) In input if we put "required", then the form won't allow to submit without adding any goal.
// 2) Here if we change input, then onChange event will be triggered and the function "goalInputChangeHandler" will be executed with setting the enteredValue by targetting the target value.

export default CourseInput;