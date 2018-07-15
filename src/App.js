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
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import ToysIcon from '@material-ui/icons/Toys';
import Experience from './Experience';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AboutMe from './AboutMe';
import Skills from './Skills';
 
const styles = {
  root: {
    backgroundColor:'#80DEEA',
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollToAboutMe() {
    scroller.scrollTo('AboutMe', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToSkills() {
    scroller.scrollTo('Skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

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
       <Element name="AboutMe">
       <AboutMe/>
       </Element>
       <Element name="Skills">
       <Skills/>
       </Element>
       <Experience/>
       <div className="App-footer"> 
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} >
        <BottomNavigationAction label="Home" onClick={this.scrollToTop} value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="About Me" onClick={() => this.scrollToAboutMe()}  value="person" icon={<PersonIcon />} />
        <BottomNavigationAction label="Skills" onClick={() => this.scrollToSkills()} value="settings" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Experience" value="work" icon={<WorkIcon />} />
        <BottomNavigationAction label="Education" onClick={this.scrollToBottom} value="school" icon={<SchoolIcon />} />
        <BottomNavigationAction label="Hobbies" value="toys" icon={<ToysIcon />} />
      </BottomNavigation>
      </div>
      </div>
    );
  }
}
export default withStyles(styles)(App);