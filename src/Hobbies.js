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
import Cake from './CakeIcon';
import Paw from './Paw';
import Books from './Books';
import Writing from './Writing';
import Home from './Home';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200,
      padding: theme.spacing.unit * 2,
      elevation : 24,
      background: '#CE93D8',
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });
class Hobbies extends Component {
    render() {
        const { classes } = this.props;
      return (
        <div className="pageContainer" style={{ padding: 100 , textAlign:'center' ,verticalAlign:'middle' }}> 
          <div style={{ padding: 40 , color: 'red' }}> <h2> INTERESTS </h2></div>    
        <Grid container className={classes.root} spacing={16}>
           <Grid item xs={12}>
           <Grid container justify="center" spacing={8}>
               <Grid item>
                   <Paper className={classes.paper}>
                     <Cake style={{fontSize: 80}}/>
                     <div style={{ padding: 40 }}> Vegan baking and cooking </div>
                   </Paper>
               </Grid>
               <Grid item>
                   <Paper className={classes.paper}>
                   <Paw style={{fontSize: 80}}/>
                   <div style={{ padding: 40 }}> Animal Rescue and Rehabilitation </div>
                   </Paper>
               </Grid>
               <Grid  item>
                   <Paper className={classes.paper}>
                   <Books style={{fontSize: 80}}/>
                   <div style={{ padding: 40 }}> Reading </div>
                   </Paper>
               </Grid>
               <Grid item>
                   <Paper className={classes.paper}>
                   <Writing style={{fontSize: 80}}/>
                   <div style={{ padding: 40 }}>  Writing  </div>
                   </Paper>
               </Grid>
               <Grid item>
                   <Paper className={classes.paper}>
                   <Home style={{fontSize: 80}}/>
                   <div style={{ padding: 40 }}>  Gardening and home improvements </div>
                   </Paper>
               </Grid>
           </Grid>
           </Grid>
   </Grid>
   
     </div>

    );
}
}

export default withStyles(styles)(Hobbies);