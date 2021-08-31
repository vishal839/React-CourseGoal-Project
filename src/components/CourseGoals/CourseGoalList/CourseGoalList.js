import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
// 1) The map() method creates a new array from the results of calling a function for every element.
// 2) Here onDelete is an event with props.onDeleteItem function. When events are involved basically the component communication flow is from child to parent, as the parent for CourseGoalList is App.js

export default CourseGoalList; // this component is exported to App component