import { createContext, useContext, useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useReducer } from 'react'


const moods = {
  happy: '😀',
  sad: '😭',
}
const MoodContext = createContext(moods)

// you define your own reducer function
function reducerFunc(state, action) {
  switch (action.type) {
    case 'inc':
      return state+1;
    case 'dec':
      return state-1;
    default:
      throw new Error();
  }
}

function App() {
  // the bread and butter
  // will re render on changes to anything defined by useState
  const [count, setCount] = useState(0)
  
  // runs every time the componenet renders
  useEffect( () => {
    console.log('hi mom')
 
    // destructor ?
    return () => console.log('bye mom')
  }, [])
  // [] = dependency to eliminate infinite loops
  
  // mutable value reference, does not trigger re-render
  // ... which is only kindof-useful...
  const count2 = useRef(0)
  // usually used to grab native HTML elements from JSX
  // and perform native browser/api actions
  // i.e. click() 
  const myBtn = useRef(null)

  const clickBtn = () => myBtn.current.click()


  // Don't use Redux, useReducer
  const [state, dispatch] = useReducer(reducerFunc, 0) // initstate

  return (
    <MoodContext.Provider value={moods.sad}>
      <div className="App">
        <button onClick={() => setCount(count+1)}>
          {count}
        </button>
        <MoodEmoji />
        <button onClick={() => count2.current++}>
          {count2.current}
        </button>
        <button onClick={clickBtn}>
          manip button below me!👱‍♂️👇
        </button>
        <button ref={myBtn} onClick={() => console.log('clicked!')}>
          just a button
        </button>
        <hr />
        <button onClick={() => dispatch({type: 'inc'})}> useReducer + </button>
        <button onClick={() => dispatch({type: 'dec'})}> useReducer - </button>
        <p> {state} </p>
        
      </div>
    </MoodContext.Provider>
  )
}

function MoodEmoji() {
  const mood = useContext(MoodContext) // "global" state/value

  return <p>{mood}</p>
}


export default App
 