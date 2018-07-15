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

class AboutMe extends Component {
    render() {
      return (
        <div className="AboutMe"> 
        <Grid>
              I have more than 16 years of experience in the software industry, working on a wide range of technologies and being involved in all aspects of software design and development. 

              Technical expertise:
              React.js, Node.js, ReactNative, Angular.js, AWS, PostgreSQL, Oracle, MySQL 
              C#, ASP.NET Frameworks, Azure, SharePoint 2013 , Win RT (Universal) Mobile Platform , SQL Server , SQL Server Reporting Services 
              </Grid>
          </div>

    );
}
}

export default AboutMe;