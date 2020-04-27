import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import firebase, { auth, provider } from "./firebase.js";
import Form from "./components/Form";
import Header from "./components/Header";
import NotAuth from "./components/NotAuth";
import Monthly from "./components/Monthly";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NavMenu from "./components/NavMenu";
import About from "./components/About";

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
    // to fetch month/year
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
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
      created: month + "/" + year,
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
          created: items[item].created,
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
        <Container maxWidth="lg">
          <Header
            user={this.state.user}
            login={this.login}
            logout={this.logout}
          />
          <Box>
            {this.state.user ? (
              <HashRouter>
                <NavMenu />
                <Route
                  exact
                  path="/graph"
                  render={(props) => (
                    <Monthly
                      {...props}
                      items={this.state.items}
                      user={this.state.user}
                    />
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Form
                      {...props}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      user={this.state.user}
                      currentItem={this.state.currentItem}
                      amount={this.state.amount}
                      category={this.state.category}
                      items={this.state.items}
                    />
                  )}
                />
                <Route exact path="/about" component={About} />
              </HashRouter>
            ) : (
              <NotAuth />
            )}
          </Box>
        </Container>
      </div>
    );
  }
}
export default App;
