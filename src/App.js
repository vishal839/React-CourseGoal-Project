import React, {useState} from "react";
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList'; //imports CourseGoalList Component
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput"; //imports CourseInput Component
import './App.css'; //imports CSS Styles

const App = () => {

    const [courseGoals, setCourseGoals] = useState(''); 
    // 1) state allows you to create components that are dynamic and creative.
    // 2) Here useState is a Hook that allows you to have state variables in functional components.
    // 3) "useState" returns an array, where the first element - courseGoals is the state variable and seccond element is a function to update  the value of the first variable.
    // 4) const App = () => { 
            // const courseGoalstate = useState('');
            // const courseGoals = courseGoalstate[0]; // contains ''
            // const setCourseGoals = courseGoalstate[1]; // it's a function
    // 5) usually we use "Array destructuring" to simplfy the code as => const [courseGoals, setCourseGoals] = useState('');

    // const [courseGoals, setCourseGoals] = useState([
    //     {text: 'Do all exercises!', id: 'g1'},
    //     {text: 'Finish the course!', id: 'g2'}
    // ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };
    // 1) This function is used to add the goals in the UI.
    // 2) unshift() is used to add new items to the beginning of the array and returns the new lenghth.
    // 3) [...prevGoals] is a spread operator, sometimes we want to assign some items to a single variable, and we can do it by using "spread operator".
    // 4) Everytime if a new goal is added, by using unshift() the new goal sits on the old goal using spread operator and unshift function.
    // 5) updatedGoals takes text which consists of "enteredText" parameter and it is sent to "CourseInput" component by using props definition.


    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(
                goal => goal.id !== goalId
            );
            //console.log(goalId);
            return updatedGoals;
        });
    }; 
    // 1) this function is used to delete the existing goals by clicking on each course individually.

    let content = (
        <p style = {{textAlign: 'center'}}>No Goals found. Maybe add one?</p>
    ); // If in UI there is no Course then above message will be displayed.

    if(courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals}
             onDeleteItem={deleteItemHandler} />
        );
    } 
    // 1) If courseGoals length is greater than zero, then CourseGoalList component will be rendered in the content.
    // 2) Here items and onDeleteItem are passing to its child component "CourseGoalList" from "App" component which is a parent component.

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">{content}</section>
        </div>
    ); 
    // 1) return statement renders two sections, one is CourseInput component and the other is content to be displayed.
}

export default App; // App component is exported to index.js
