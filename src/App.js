import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = {
  root: {
    width: 500,
  },
};

class App extends Component {

  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <header className="App-header">
        <h1>Sangamithra Kal</h1>
       </header>
       <div className="App-footer"> 
        <BottomNavigation value={value} onChange={this.handleChange} >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="About Me" value="person" icon={<PersonIcon />} />
        <BottomNavigationAction label="Skills" value="settings" icon={<SettingsIcon />} />
      </BottomNavigation>
      </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);