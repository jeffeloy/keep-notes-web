import api from "../../services/api";

async function loadTasks() {
  const headers = { Accept: "application/json" };

  return await api
    .get("/tasks", { headers: headers })
    .then((response) => response.data);
}

export default loadTasks;
