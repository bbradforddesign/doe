import React, { Component } from "react";
import "./App.css";
import firebase, { auth, provider } from "./firebase.js";
import Form from "./components/Form";
import Header from "./components/Header";
import NotAuth from "./components/NotAuth";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
      user: null,
      amount: 0,
      category: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // main logic. could be replaced by Redux?

  // callback to set state in parent
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // callback to set state in parent
  handleSubmit(e) {
    // don't refresh page on submit
    e.preventDefault();
    // 'pointer' to items in Firebase
    const itemsRef = firebase.database().ref("items");
    // bundle submitted item's data
    const item = {
      title: this.state.currentItem,
      user: this.state.user.email,
      amount: parseFloat(this.state.amount).toFixed(2),
      category: this.state.category,
    };

    // sends copy of item to Firebase
    itemsRef.push(item);
    // clears inputs for next submit
    this.setState({
      currentItem: "",
      username: "",
      amount: 0,
      category: "",
    });

    console.log(this.state.income);
  }
  // sign out in Firebase, then sign out in React
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null,
      });
    });
  }
  // open popup with built in Firebase auth
  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user,
      });
    });
  }
  // if sign in/out occurs, update current user
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
    const itemsRef = firebase.database().ref("items");
    // snapshot provides view of total items in database
    // automatically updates when database changes
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
          amount: items[item].amount,
          category: items[item].category,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Container maxWidth="md">
          <Paper
            style={{ height: "100%", marginTop: "2vh", minWidth: "200px" }}
          >
            <Box>
              <Header
                user={this.state.user}
                login={this.login}
                logout={this.logout}
              />
            </Box>
            <Box>
              {this.state.user ? (
                <Form
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  user={this.state.user}
                  currentItem={this.state.currentItem}
                  amount={this.state.amount}
                  category={this.state.category}
                  items={this.state.items}
                />
              ) : (
                <NotAuth />
              )}
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }
}
export default App;
