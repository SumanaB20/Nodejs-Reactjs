import React, { Component } from 'react';
import './App.css';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    }
  }

  componentWillMount() {
    fetch(`/user`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data,
          isLoading: false,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  ListUser(data) {
    return (
      <List key={data.id} class='root'>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={data.avatar_url} />
          </ListItemAvatar>
          <ListItemText
            primary={data.login}
            secondary={
              <React.Fragment>
                <Typography component="span" color="textPrimary">
                  {'Repos - ' + data.repos_url}
                </Typography>
                {'Followers - ' + data.followers_url}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }

  navbar() {
    return (
      <header class='toolbar'>
        <nav class='toolbar_navigation'>
          <div> </div>
          <div class='toolbar_logo' ><a href='/'>
            <img class='logoimg' alt="logo" src={require('./assets/applogo.png')} />
          </a> </div>
          <div class='spacer' />
          <div class='toolbar_navigation-items'>
            <ul>
              <li> <a href='/'> Menu </a></li>
              <li> <a href='/'> Setting </a></li>
              <li> <a href='/'> Feedback </a></li>
              <li> <a href='/'> SignIn </a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }

  render() {
    //alert(JSON.stringify(this.state.users))
    if (this.state.isLoading) {
      return (
        <div class='loader'>
          <Dots />
        </div>
      )
    }
    else {
      return (
        <div className="App listContainer">
          {this.navbar()}
          {this.state.users !== undefined && this.state.users !== null ?
            <div class='list'>
              <h1> Github users </h1>
              {this.state.users.map(users => this.ListUser(users))}
            </div> : null
          }
        </div>
      );
    }
  }
}

export default App;
