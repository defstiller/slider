import {useState, useEffect, useRef} from "react"
import Review from "./Review"
import data from "./data"
import './App.css';

function App() {
  const [index, setIndex] = useState(3)
  let dataLength = data.length
  const [currentReview, setReview] = useState(data[dataLength - index])
  useEffect(() => {
    if(index > dataLength) {
      setIndex(1)
    } else if (index <= 0) {
      setIndex(dataLength)
    }else {
      setReview(data[dataLength - index])
    }
  }, [index])
  return ( <>
  <div className="App">
      <h1>Reviews</h1>
      <main>
        <Review key={currentReview.id} {...currentReview}/>
      </main>
      <button onClick={() => setIndex(index + 1)}>Previous</button>
      <button onClick={() => setIndex(index - 1)}>Next</button>
    </div>
  </>);
}

export default App;
