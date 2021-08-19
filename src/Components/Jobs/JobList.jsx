import React from "react";
import {
  Typography,
  // CssBaseline,
  Grid,
  Container,
  IconButton,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Job from "./Job";
import Card from "../UI/Card";
// import useStyles from "./stylesJobList";

const JobList = (props) => {
  const jobs = props.jobs;
  // const classes = useStyles();

  return (
    <Card>
      {/* <CssBaseline /> */}
      <div>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            color="textPrimary">
            Job Applications
          </Typography>
        </Container>
      </div>
      <div>
        <Grid container spacing={0} justifyContent="center">
          <Grid item>
            <IconButton
              style={{ margin: "16px", padding: "24px" }}
              href="/new-job">
              <AddCircleIcon color="primary" fontSize="medium" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      {/* <Container className={classes.cardGrid} maxWidth="md"> */}
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            role={job.role}
            techStack={job.techStack}
            appliedDate={job.appliedDate}
            onDelete={props.onDelete}
          />
        ))}
      </Grid>
      {/* </Container> */}
    </Card>
  );
};

export default JobList;
