import React from "react";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

function ListTasks(props) {
  return (
    <Card elevation={2}>
      <List style={{ padding: 0 }}>
        {props.tasks.map((task) => {
          return (
            <ListItem
              dense
              button
              key={task.id}
              onClick={() => {
                props.endTask(task);
              }}
            >
              <ListItemIcon>
                <Checkbox
                  style={{ color: "#616161" }}
                  size="small"
                  edge="start"
                  checked={() => onclick(task.finished)}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={task.description} />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}

export default ListTasks;
