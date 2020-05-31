import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputBase from "@material-ui/core/InputBase";
import api from "../../services/api";

function CreateTasks({ updateListTask }) {
  const [newTask, setNewTask] = useState("");

  function createNewTask(event) {
    const ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
      const headers = { Accept: "application/json" };
      const data = { description: newTask, finished: false };

      if (newTask === " ") {
        return;
      }
      api
        .post("/tasks", data, { headers: headers })
        .then(() => updateListTask());

      setNewTask("");
    }
  }

  return (
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
  );
}

export default CreateTasks;
