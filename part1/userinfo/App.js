const App = () => {
  const Course = {
    name: "Haft stack application development",
    parts: [
      "Fundamentals of React",
      "Using props to pass data",
      "State of component",
    ],
    exercises: [10, 7, 14],
  };
  console.log(Course);
  return (
    <div>
      <Header course={Course} />
      <Main_Content parts={Course.parts} exercises={Course.exercises} />
      <Total exercises={Course.exercises} />
    </div>
  );
};
// Generates Header for App
function Header(props) {
  return <h1>{props.course.name}</h1>;
}
// Displays the name and number of exercises
function Part_Content(props) {
  return (
    <p>
      {props.parts} {props.exercises}
    </p>
  );
}
function Main_Content(props) {
  return (
    <div>
      <Part_Content parts={props.parts[0]} exercises={props.exercises[0]} />
      <Part_Content parts={props.parts[1]} exercises={props.exercises[1]} />
      <Part_Content parts={props.parts[2]} exercises={props.exercises[2]} />
    </div>
  );
}
// Calculates total number of exercises
function Total(props) {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
}
export default App;
