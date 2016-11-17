import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Job Swap!</h2>
        </div>
        <p className="App-intro">
          Welcome to the Swiss Bank Job Swap App!
        </p>
        <p>{giveMeADate()}</p>
      </div>
    );
  }
}

/*
<p>
  Job Summary : {summary}
</p>
<p>
  Current Location : {location}
</p>
*/

function giveMeADate() {
  return new Date().toDateString();
}

function apiRequest() {
  var url = "people/~:(summary,location,skills)?format=json";
  //IN.API.Raw(url).method("GET").body().result(apiResponse);

  ///*
  var location = {name:"TEST CITY!"};
  var data = {location,summary:"TEST SUMMARY!"};
  apiResponse(data);
  //*/
}

var location;
var summary;

function apiResponse(data) {
  console.log("API RESPONSE : " + data);
  location = data.location.name;
  summary = data.summary;
  console.log("location : " + location);
  console.log("job summary : " + summary);
}

apiRequest();

export default App;
