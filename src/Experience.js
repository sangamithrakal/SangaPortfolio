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

class Experience extends Component {
    render() {
      return (
        <div className="pageContainer"> 
        <div className="outsideTimeline">
        <VerticalTimeline className="timelineStyle">
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: 'red' }}
            icon={<WorkIcon />}
            >
            <p><span className="badge"><Crown /> ASP.Net</span>
            <span className="badge"><StarIcon /> SQL Server</span>
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
            <p><span className="badge"><Crown /> ASP.Net</span>
            <span className="badge"><StarIcon /> SQL Server</span>
            <span className="badge"><StarIcon /> SSIS, SSRS</span></p>
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
            <p><span className="badge"><Crown /> ASP.Net</span>
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
            <p><span className="badge"><Crown /> ASP.Net</span>
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
  
  export default Experience;