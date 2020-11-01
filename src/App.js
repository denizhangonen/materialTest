import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import { Button, Container, Grid, Paper, Input } from '@material-ui/core';
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import { purple, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[300],
    },
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    marginBottom: 10,
  },
});

function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <header className="App-header">
            <Grid container spacing={spacing}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
            </Grid>

            <h1>Hello there</h1>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Input onChange={(e) => setSpacing(e.target.value)} />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
