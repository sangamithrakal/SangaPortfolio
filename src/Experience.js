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
import { Grid } from '../node_modules/@material-ui/core';

class Experience extends Component {
    render() {
      return (
        <Grid className="pageContainer"> 
        <Grid className="outsideTimeline">
        <h2> EXPERIENCE</h2>
        <VerticalTimeline className="timelineStyle">
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red' }}
            icon={<WorkIcon />}
            >
            <p><span className="badge"><Crown /> .Net</span>
            <span className="badge"><StarIcon /> SharePoint</span></p>
            <h3 className="vertical-timeline-element-title">SpurTree Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <p>
               Technical Project Manager
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2011"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red' }}
            icon={<WorkIcon />}
            >
            <p><span className="badge"><Crown /> .Net</span>
            <span className="badge"><StarIcon /> SQL Server</span>
            <span className="badge"><StarIcon /> SSRS</span></p>
            <h3 className="vertical-timeline-element-title">Ciber GSC</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <p>
                Senior Software Consultant
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <p><span className="badge"><Crown /> .Net</span>
            <span className="badge"><StarIcon /> SQL Server</span>
            <span className="badge"><StarIcon /> Java</span></p>
            <h3 className="vertical-timeline-element-title">Mphasis</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai</h4>
            <p>
                Senior Software Engineer
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2003 - 2007"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <p><span className="badge"><Crown /> .Net</span>
            <span className="badge"><StarIcon /> SQL Server</span>
            <span className="badge"><StarIcon /> Java</span></p>
            <h3 className="vertical-timeline-element-title">Photon Infotech</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai</h4>
            <p>
                Software Engineer
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2002 - 2003"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <h4 className="vertical-timeline-element-title">Junior Processing Officer</h4>
            <h3 className="vertical-timeline-element-subtitle">Citicorp Financial Services (E-serve)</h3>
            <p>
                Retail Banking
            </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
  </Grid>
  </Grid>
      );
    }
  }
  
  export default Experience;