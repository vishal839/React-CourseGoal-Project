import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {

    const deleteHandler = () => {
        props.onDelete(props.id);
        //console.log(props.id);
    }

    return (
        <li className="goal-item" onClick=
        {deleteHandler}>
            {props.children}
        </li>
    );
};
// 1) CourseGoalItem is a child to CourseGoalList.
// 2) If we write {props.children} in CourseGoalItem, the content present in CourseGoalList will be rendered in CourseGoalItem.
// 3) props.onDelete() is receiving inputs from its parent component CourseGoalList.js, the flow of communication from parent to child is downwards as "props" is involved.
// 4) Here onClick is an event, when we press a button the function isnide onClick is triggered and the coursegoal is deleted in the UI.
// 5) Here props.id is getting from CourseGoalList.js

export default CourseGoalItem; //It is exported to CourseGoalList.