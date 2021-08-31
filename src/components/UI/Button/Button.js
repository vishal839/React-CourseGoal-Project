import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// 1) Button is a child to CourseInput.
// 2) If we write {props.children} in Button, the content present in CourseInput will be rendered in Button.

export default Button;