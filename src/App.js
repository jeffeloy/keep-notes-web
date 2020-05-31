import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Layout from "./components/Layout";
import ListTasks from "./components/ListTasks";
import LoadTasks from "./components/LoadTasks";
import CreateTasks from "./components/CreateTasks";

import api from "./services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    background:
      "linear-gradient(180deg, rgba(212,217,230,1) 0%, rgba(226,227,235,1) 50%, rgba(250,248,251,1) 100%);",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  function updateListTask() {
    LoadTasks().then((listTasks) => setTasks(listTasks));
  }

  useEffect(() => {
    updateListTask();
  }, []);

  function handleTaskCompletion(task) {
    const headers = { Accept: "application/json" };
    const data = { finished: !task.finished };

    api
      .put(`/tasks/${task.id}`, data, { headers: headers })
      .then(() => updateListTask());
  }
  function handleTaskDelete(id) {
    const headers = { Accept: "application/json" };
    api
      .delete(`/tasks/${id}`, { headers: headers })
      .then(() => updateListTask());
  }

  return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={6}>
            <CreateTasks updateListTask={updateListTask} />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={3} xl={2}>
            <ListTasks
              tasks={tasks}
              endTask={handleTaskCompletion}
              deleteTask={handleTaskDelete}
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
