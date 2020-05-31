import React from "react";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

function ListTasks(props) {
  return (
    <Card elevation={2}>
      <List style={{ padding: 0 }}>
        {props.tasks.map((task) => {
          return (
            <ListItem dense button key={task.id}>
              <ListItemIcon>
                <Checkbox
                  style={{ color: "#616161" }}
                  size="small"
                  edge="start"
                  onClick={() => {
                    props.endTask(task);
                  }}
                  checked={task.finished}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={task.description} />
              <DeleteIcon
                style={{ color: "#E02041", fontSize: "large" }}
                onClick={() => {
                  props.deleteTask(task.id);
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}

export default ListTasks;
