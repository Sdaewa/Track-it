import React from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactComponent as Background } from "../../img/background.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(20),
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <header>
        <Navbar />
      </header>
      <Container class="background">
        {/* <Background /> */}
        <div className={classes.root}>
          <Container
            component="main"
            className={classes.main}
            style={{ background: "grey" }}
            maxWidth="md">
            <Grid container spacing={0} justifyContent="center">
              <Grid item>
                <main>{props.children}</main>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
