import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Context = ({ quote, votes }) => {
  return (
    <div>
      <p>{quote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votesList, setVote] = useState(Array(7).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const randomNumGenerator = () => Math.floor(Math.random() * 6);
  const randomQuoteGenerator = () => setSelected(randomNumGenerator());
  const castVote = () => {
    const copyList = [...votesList];
    ++copyList[selected];
    setVote(copyList);
    console.log(copyList);
    if (votesList[selected] >= votesList[mostVoted]) {
      setMostVoted(selected);
    }
    console.log(mostVoted, " is the most voted.");
  };

  return (
    <div>
      <Header title="Anecdote of the day" />
      <Context quote={anecdotes[selected]} votes={votesList[selected]} />
      <Button onClick={randomQuoteGenerator} text="next anecdote" />
      <Button onClick={castVote} text="vote" />
      <Header title="Anecdote with most votes" />
      <Context quote={anecdotes[mostVoted]} votes={votesList[mostVoted]} />
    </div>
  );
};

export default App;

