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

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 400,
      width: 400,
      padding: theme.spacing.unit * 2,
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
             
             <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                <Grid container justify="center" spacing={16}>
                    {[0, 1, 2].map(value => (
                    <Grid key={value} item>
                        <Paper className={classes.paper} />
                    </Grid>
                    ))}
                </Grid>
                </Grid>
        </Grid>
        
          </div>

    );
}
}

export default withStyles(styles)(Skills);