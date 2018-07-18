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

class Education extends Component {
    render() {
      return (
        <div className="pageContainer"> 
        <h2> EDUCATION </h2>
        <div className="outsideTimeline">
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2002"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
            >
            <h4 className="vertical-timeline-element-title">NIIT</h4>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
                Application Development
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1999 - 2002"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
            >
            <h4 className="vertical-timeline-element-title">Master of Computer Application</h4>
            <h4 className="vertical-timeline-element-subtitle">Masters</h4>
            <p>
                Commputer Science
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1996 - 1999"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
            >
            <h4 className="vertical-timeline-element-title">Bachelor of Commerce</h4>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
                Commerce , Accountancy
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
            />
        </VerticalTimeline>
  </div>
  </div>
      );
    }
  }
  
  export default Education;