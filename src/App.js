import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

import Layout from "./components/Layout";
import ListTasks from "./components/ListTasks";

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
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const headers = { Accept: "application/json" };

      const response = await api.get("/tasks", { headers: headers });

      setTasks(response.data);
    }
    loadTasks();
  }, []);

  async function createNewTask(event) {
    const ENTER_KEY_CODE = 13;

    if (event.keycode === ENTER_KEY_CODE) {
      const headers = { Accept: "application/json" };
      const data = { task: { description: newTask, finished: false } };

      if (newTask === "") {
        return;
      }
      const response = await api.post("/tasks", data, { headers: headers });

      setNewTask("");

      setTasks([...tasks, response.data]);
    }
  }

  async function handleTaskCompletion(taskSelected) {
    const headers = { Accept: "application/json" };
    const data = { taskSelected: { finished: !taskSelected.finished } };

    await api.put(`/tasks/${taskSelected.id}`, data, { headers: headers });

    setTasks([...tasks.filter((task) => task.id !== taskSelected.id)]);
  }

  return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="row" justify="center">
          <Grid item xs={12} sm={6}>
            <Card elevation={2}>
              <CardContent style={{ padding: "10px 20px" }}>
                <InputBase
                  fullWidth
                  placeholder="Criar uma tarefa..."
                  style={{ fontWeight: 500 }}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyUp={createNewTask}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={3} xl={2}>
            <ListTasks tasks={tasks} endTask={handleTaskCompletion} />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
