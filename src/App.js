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
import Education from './Education';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import AboutMe from './AboutMe';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Grid from '@material-ui/core/Grid';

const styles = {
  footer: {
    backgroundColor:'#EDE7F6',
    color : 'white',
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
  scrollToExperience() {
    scroller.scrollTo('Experience', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToEducation() {
    scroller.scrollTo('Education', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToHobbies() {
    scroller.scrollTo('Hobbies', {
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
      <Grid className="App">
        <Grid>
        <header className="App-header">
        <h1>SANGAMITHRA KAL</h1>
        </header>
        </Grid>

       <Grid>
       <Element name="AboutMe">
       <AboutMe/>
       </Element>
       </Grid>

       <Grid>
       <Element name="Skills">
       <Skills/>
       </Element>
       </Grid>

      <Grid>
       <Element name="Experience">
       <Experience/>
       </Element>
       </Grid>

       {/* <Element name="Education">
       <Education/>
       </Element> */}
       
       <Grid>
       <Element name="Hobbies">
       <Hobbies/>
       </Element>
       </Grid>

       <Grid className="App-footer"> 
        <BottomNavigation value={value} onChange={this.handleChange} className={classes.footer} >
        <BottomNavigationAction label="About Me" onClick={() => this.scrollToTop()}  value="person" icon={<PersonIcon />} />
        <BottomNavigationAction label="Skills" onClick={() => this.scrollToSkills()} value="settings" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Experience"onClick={() => this.scrollToExperience()}  value="work" icon={<WorkIcon />} />
        {/* <BottomNavigationAction label="Education" onClick={() => this.scrollToEducation()} value="school" icon={<SchoolIcon />} />  */}
        <BottomNavigationAction label="Hobbies"  onClick={this.scrollToHobbies} value="toys" icon={<ToysIcon />} />
      </BottomNavigation>
      </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(App);