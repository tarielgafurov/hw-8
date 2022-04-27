import Comment from './Comment/Comments';
import './App.css';

function App() {
  const comment = [
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/62/62',
      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    },
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    },
  ];
  
  return (
    <div className="App">
  {comment.map((element,i)=>{
    element.id = i + 1
    return(
      <Comment  author={element.author} text={element.text} date={element.date} key={element.id} />
    )
  })}
    </div>
  );
}

export default App;
