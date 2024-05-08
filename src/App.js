import logo from './logo.svg';
import './App.css';
import { Sidebar } from "./container/Sidebar";
import { MessagesList } from "./container/MessagesList";
import { AddMessage } from "./container/AddMessage";
import { Component } from 'react';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
