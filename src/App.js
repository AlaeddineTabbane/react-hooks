
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [text1, setText1] = useState({name:'ala'})
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'text 1',
      done: false
    },
    {
      id: 2,
      text: 'text 2',
      done: false
    },
  ])

  const deleteTask = (id) => {
    let list = [...tasks]
    list = list.filter(task => task.id !== id)
    // this.setState({ tasks: list })
    setTasks(list)
  }

  const addTask = () => {
    if (text){
      let list = [...tasks]
      const lastTask = list[list.length - 1]
      const newId = lastTask.id + 1
      list.push({
        id: newId,
        text,
        done: false
      })
      // this.setState({ tasks: list, text:'' })
      setTasks(list)
      setText('')
    }
  }

  useEffect(() => {
    console.log('mount');
    setText1(oldText => {
      return {...oldText, name:'sami'}
    })
    const oldText = text1
    setText({...oldText,name:'newText'})

    return () => {
      console.log('unmount');
    };
  },[text])
  return (
    <div className="App">
      <form>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button type='button' onClick={addTask}>Add task</button>
      </form>
      {
        tasks.map((item, index) => {
          return (
            <p key={index}>({item.id}) {item.text} <span onClick={() => deleteTask(item.id)}>X</span></p>
          )
        })
      }
    </div>
  );
}

export default App;
