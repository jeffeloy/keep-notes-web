import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import Layout from "./components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    background: "#f0efeb",
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
  const [tasks, setTasks] = React.useState([]);

  const taskTest = [
    {
      description: "Estudar React",
      finalizada: false,
      description: "Estudar Node.js",
      finalizada: false,
      description: "Estudar AdonisJs",
      finalizada: false,
    },
  ];

  setTasks(taskTest);

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
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 20 }}>
          <Grid item xs={12} sm={3} xl={2}>
            <Card elevation={2}>
              <List style={{ padding: 0 }}>
                {tasks.map((task) => {
                  return (
                    <ListItem dense button>
                      <ListItemIcon>
                        <Checkbox
                          style={{ color: "#616161" }}
                          size="small"
                          edge="start"
                          checked={true}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText primary={task} />
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
