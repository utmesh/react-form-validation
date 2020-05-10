import React from 'react';
import Card from './Card'
import './Styles/App.css';


const heading = "Learn to code by watching others"
const bodyInfo = "See how experinced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
const info1 = "Try it free 7 days than $20/mo. thereafter"


function App() {
  return (
    <div>
      <Card header={heading} body={bodyInfo} info={info1} />
    </div>
  );
}

export default App;
