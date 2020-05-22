import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

// Material
import {
  Toolbar,
  Typography,
  Container,
  IconButton,
  Paper,
  Grid,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// Pages
import Calculate from "./pages/Calculate";
import About from "./pages/About";
import Convert from "./pages/Convert";

/**
 * App with tools for weight conversion and calculation
 */
class App extends Component {
  state = {
    anchorE1: null,
    elevation: 2,
    title: null,
  };

  // OnHover of the Paper element
  onHover = () => {
    this.setState({ elevation: 6 });
  };

  // OnBlur of the Paper element
  onBlur = () => {
    this.setState({ elevation: 2 });
  };

  // Open the menu
  openMenu = (event) => {
    this.setState({ anchorE1: event.currentTarget });
  };

  // Close the menu
  closeMenu = () => {
    this.setState({ anchorE1: null });
  };

  // Called by ComponentDidMount on Route content
  onPageLoad = (path) => {
    if (path === "/") {
      this.setState({ title: "One-Rep Max Projection" });
    } else if (path === "/convert") {
      this.setState({ title: "Convert Measurement" });
    } else if (path === "/about") {
      this.setState({ title: "About This App" });
    }
  };

  render() {
    return (
      <div className="App">
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <Paper
                style={{
                  backgroundColor: "rgba(255, 255, 255,0.95)",
                  padding: 8,
                  paddingTop: 0,
                }}
                square={false}
                className="Paper"
                variant="elevation"
                elevation={this.state.elevation}
                onMouseOver={this.onHover}
                onMouseOut={this.onBlur}
              >
                <Router>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <Toolbar style={{ padding: 0 }}>
                      <IconButton
                        aria-label="menu"
                        onClick={this.openMenu}
                        style={{ marginRight: 8 }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography
                        variant="h6"
                        style={{
                          flexGrow: 1,
                        }}
                      >
                        {this.state.title}
                      </Typography>
                    </Toolbar>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorE1}
                      keepMounted
                      open={Boolean(this.state.anchorE1)}
                      onClose={this.closeMenu}
                    >
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "initial" }}
                      >
                        <MenuItem>Max</MenuItem>
                      </Link>
                      <Link
                        to="/convert"
                        style={{ textDecoration: "none", color: "initial" }}
                      >
                        <MenuItem>Convert Measurement</MenuItem>
                      </Link>
                      <Link
                        to="/about"
                        style={{ textDecoration: "none", color: "initial" }}
                      >
                        <MenuItem>About</MenuItem>
                      </Link>
                    </Menu>
                  </div>
                  <Switch>
                    <Route exact path="/">
                      <Calculate
                        onPageLoad={this.onPageLoad}
                        closeMenu={this.closeMenu}
                        path="/"
                      />
                    </Route>
                    <Route path="/convert">
                      <Convert
                        onPageLoad={this.onPageLoad}
                        closeMenu={this.closeMenu}
                        path="/convert"
                      />
                    </Route>
                    <Route path="/about">
                      <About
                        onPageLoad={this.onPageLoad}
                        closeMenu={this.closeMenu}
                        path="/about"
                      />
                    </Route>
                  </Switch>
                </Router>
              </Paper>
            </Grid>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default App;
