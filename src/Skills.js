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
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CodeIcon from '@material-ui/icons/Code';
import DBIcon from 'react-icons/lib/go/database';
import SystemIcon from '@material-ui/icons/LaptopWindows';
import ShareIcon from '@material-ui/icons/Share';
import MobileIcon from 'react-icons/lib/go/device-mobile'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 300,
      width: 200,
      padding: theme.spacing.unit * 2,
      background: '#E3F2FD',
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

class Skills extends Component {
    render() {
        const { classes } = this.props;
        return (
        <div className="pageContainer" style={{ padding: 30 , textAlign:'center' ,verticalAlign:'middle' }}> 
             <div style={{ padding: 40 }}> <h2>SKILLS </h2></div>
             <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                <Grid container justify="center" spacing={8}>
                    <Grid item>
                        <Paper className={classes.paper}>
                        <div style={{ padding: 40 }}>
                           <CodeIcon color="error" style={{ fontSize: 30 }}/>
                           </div>
                           <div>React.js </div>
                           <div>Node.js</div>
                           <div>C#</div>
                           <div> JavaScript</div>
                           <div> XAML </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                    <Paper className={classes.paper}>
                        <div style={{ padding: 40 }}>
                           <DBIcon color="error" style={{ fontSize: 30 }}/>
                           </div>
                           <div>SQL Server</div>
                           <div>MySQL</div>
                           <div>PostgreSQL</div>
                           <div>Oracle</div>
                        </Paper>
                    </Grid>
                    <Grid  item>
                    <Paper className={classes.paper}>
                        <div style={{ padding: 40 }}>
                           <SystemIcon color="error" style={{ fontSize: 30 }}/>
                           </div>
                           <div>Windows</div>
                           <div>UNIX</div>
                       </Paper>
                    </Grid>
                    <Grid item>
                    <Paper className={classes.paper}>
                        <div style={{ padding: 40 }}>
                           <ShareIcon color="error" style={{ fontSize: 30 }}/>
                           </div>
                           <div>SharePoint 2010</div>
                           <div>SharePoint 2013</div>
                        </Paper>
                    </Grid>
                    <Grid item>
                    <Paper className={classes.paper}>
                        <div style={{ padding: 40 }}>
                           <MobileIcon color="error" style={{ fontSize: 30 }}/>
                           </div>
                           <div>React Native</div>
                           <div>Xamarin</div>
                           <div>Win RT (Universal)</div>
                        </Paper>
                    </Grid>
                </Grid>
                </Grid>
        </Grid>
        
          </div>

    );
}
}

export default withStyles(styles)(Skills);