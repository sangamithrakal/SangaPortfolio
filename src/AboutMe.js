import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from 'react-icons/lib/fa/beer'
import Crown from './CrownIcon'
import StarIcon from 'react-icons/lib/fa/star'
import SchoolIcon from 'react-icons/lib/fa/anchor'
import './custom.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Sangi from './sangi.jpg'
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const styles = theme => ({
    root: {
        flexGrow: 1,
 
        textAlign: 'center',
      },
    container: {
      padding: theme.spacing.unit * 3,
      textAlign: 'center',
      
    },
    bigAvatar: {
        width: 300,
        height: 300,
      },
  });

class AboutMe extends Component {
    render() {
        const { classes } = this.props;
        console.log(classes);
      return (
        <div  className="pageContainer"> 
        <Grid container  >
        <Grid item lg= {6} xs= {12}>
            <div style={{ padding: 80 , textAlign:'center' ,verticalAlign:'middle' }}>
              I have more than 16 years of experience in the software industry, working on a wide range of technologies and being involved in all aspects of software design and development. 
              <br/>
              <br/>
              <br/>
              Technical expertise:
              React.js, Node.js, ReactNative, Angular.js, AWS, PostgreSQL, Oracle, MySQL 
              C#, ASP.NET Frameworks, Azure, SharePoint 2013 , Win RT (Universal) Mobile Platform , SQL Server , SQL Server Reporting Services 
            </div>
        </Grid>
        <Grid item lg= {6} xs={12} > 
           <div style={{ padding: 60 , textAlign:'center' ,verticalAlign:'middle' }}>
            <Avatar
                src={Sangi}
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
             </div>
        </Grid>
        </Grid>
          </div>
    );
}
}

export default withStyles(styles)(AboutMe);