import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MySection from './Components/MySection';
import AboutSection from './Components/AboutSection';
import Separator from './Components/Separator';
import KnowledgesSection from './Components/KnowledgesSection';
import FooterArea from './Components/FooterArea';
import Testing from './Components/Testing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CommentsAbout from './Components/CommentsAbout';
import apis from './api'

class App extends Component {




  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path="/" component={Me} />
          <Route exact path="/about" component={About} />
          <Route exact path="/knowledges" component={Knowledges} />
          <Route exact path="/test" component={Testing} />

        </Router>

        <FooterArea text={"No Copyright ©" + new Date().getFullYear() + " No rights reserved"} />
      </div>
    );
  }



}

let Me = () => {
  const [defaultData, setdefaultData] = useState([
    "I dont't like you at all...",
    "You too tall and this makes me feel uncomfortable myself near you..",
    "You are beautiful! Your mom."
  ]);

  const [copleatList, setCompleatList] = useState([
  ]);

  let newItem = React.createRef();

  function removeBlock(_id, i) {
    console.log("index " + i + " will die soon!")
    //let arr = [...defaultData];
    let arr = [...copleatList];
    arr.splice(i, 1);
    //setdefaultData(arr);
    setCompleatList(arr)
    apis.deleteComment(_id)
  }

  async function addNew(e) {
    console.log("A new one is coming!!");
    e.preventDefault();
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //let newArray = [...defaultData, newItem.value]
    //let newArray = [...copleatList, newItem.value]
    //setCompleatList(newArray)
    //console.log("New data: ", newArray);
    const payload = { body: newItem.value, time: date }
    await apis.createComment(payload)
    getListCurrent()
    document.getElementById('SubmitForm').reset();
  }



  function update(e, _id, i) {
    e.preventDefault();
    console.log("Updating..");
    //TODO: change code below to ref
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const newValue = e.target.querySelector('input').value;
    let arr = [...copleatList];
    arr[i] = {_id:_id, body: newValue, time: date };
    console.log(newValue);
    apis.updateComment(_id, {body: newValue, time: date })
    console.log({body: newValue, time: date });
    setCompleatList(arr);
  }

  async function getListCurrent() {
    const response = await apis.getComments()
    setCompleatList(response.data.data.map((x) => x))
    console.log("Data is: ", response.data.data)
  }

  useEffect(async () => {
    const response = await apis.getComments()
    setCompleatList(response.data.data.map((x) => x))
  }, []
  )
console.log(copleatList)

  return (
    <div className="RoutingPath">
      <MySection />
      <AboutSection />
      <Separator text="Some Beautiful Separator. Looking nice, but I dunno what to put here :(" />
      <KnowledgesSection />

      <div>
        <div>
          <center><h1>Please share what are you think about me!</h1></center>
        </div>
        <center>
          <form id="SubmitForm" onSubmit={(e) => { addNew(e) }}>
            <input type="text" ref={(input) => { newItem = input }} placeholder="Write here!" />
            <button type="submit">New Comment</button>
          </form>
        </center>
      </div>
      {
        /*
        defaultData.map((textt, i) => {
          return (
            <CommentsAbout text={textt} index={i} removeBlock={() => removeBlock(i)} update={(e, value) => update(e, i, value)} />
          );
        })
        */
        copleatList.map(({_id, body }, i) => {
          return (
            <CommentsAbout text={body} index={_id} removeBlock={() => removeBlock(_id, i)} update={(e, value) => update(e, _id, i, value)} />
          );
        })
      }
      <div className="moreinfo">
        <b><p>Total Number of records: {copleatList.length}</p></b>
      </div>
    </div>
  )
}



function About() {
  return (
    <h1>About Area</h1>
  );
}

function Knowledges() {
  return (
    <h1>Knowledge Area</h1>
  );
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 
*/

export default App;
