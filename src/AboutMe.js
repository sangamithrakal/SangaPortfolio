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
import { SocialIcon } from 'react-social-icons';

const styles = theme => ({
    root: {
        flexGrow: 1,
 
        textAlign: 'center',
      },

    bigAvatar: {
        width: 300,
        height: 300,
      },
   container: {
        padding: theme.spacing.unit * 3,
      },
 });

class AboutMe extends Component {
    render() {
        const { classes } = this.props;
        console.log(classes);
      return (
        <Grid  className="pageContainer"> 
        <Grid container className={classes.container} alignItems='center'>
        <Grid item lg= {6} xs= {12} >
            <Grid >
              I have more than 16 years of experience in the software industry, working on a wide range of technologies and being involved in all aspects of software design and development. 
              <br/>
              <br/>
              <br/>
              Technical expertise:
              React.js, Node.js, ReactNative, Angular.js, AWS, PostgreSQL, Oracle, MySQL 
              C#, ASP.NET Frameworks, Azure, SharePoint 2013 , Win RT (Universal) Mobile Platform , SQL Server , SQL Server Reporting Services 
            </Grid>
            
        </Grid>

        <Grid  container  alignItems ='center' lg= {6} xs={12} md={6}> 
          <Grid justify='center' container className={classes.container} >
            <Avatar
                src={Sangi}
                className={classNames(classes.avatar, classes.bigAvatar)}
            />
          </Grid>
          <Grid  justify='center' container className={classes.container} >
            <Grid item xs={6} sm={3} md={6}>
                  <SocialIcon  style={{  width:50 ,padding: 10 , marginRight: '10px'}} color="#ff5a01" url="mailto:sangamithra.t@gmail.com"/>

                  <SocialIcon style={{ width:50 , padding: 10, marginRight: '10px' }}  url="https://www.facebook.com/sangamithra.kal" />
        
                  <SocialIcon  style={{  width:50 ,padding: 10 }} url="https://www.linkedin.com/in/sangamithra-t-96187311/"/>
                  
            </Grid>
          </Grid>
        </Grid>
        </Grid>
    </Grid>
    );
}
}

export default withStyles(styles)(AboutMe);