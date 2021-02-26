import React, { useState, useEffect } from 'react';
import { Container, AppBar,Toolbar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import { get } from '../actions/action.js'; 
import useStyles from '../styles';
import memories from '../images/memories.png';

const Ins = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(get());
  }, [currentId, dispatch]);

  return (
    <Container >
      <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">GunplaINS</Typography>       
      </Toolbar>
      </AppBar>
      <Grow in>
        <Container maxWidth = "100%">
          <Grid container justify="space-between" alignItems="stretch" spacing={2}>
            <Grid item xs={6} sm={8} >
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Ins;