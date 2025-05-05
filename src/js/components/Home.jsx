import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Lista de Tareas</h1>
          <div className="card shadow">
            <div className="card-body">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Añadir tarea..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <ul className="list-group">
                {tasks.length === 0 ? (
                  <li className="list-group-item text-muted">
                    No hay tareas, añadir tareas
                  </li>
                ) : (
                  tasks.map((task, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {task}
                      <span
                        className="text-danger d-none delete-icon"
                        onClick={() => removeTask(index)}
                        role="button"
                        title="Eliminar tarea"
                      >
                        🗑️
                      </span>
                    </li>
                  ))
                )}
              </ul>
              {tasks.length > 0 && (
                <small className="text-muted mt-2 d-block">
                  {tasks.length} tarea(s) pendiente(s)
                </small>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .list-group-item:hover .delete-icon {
            display: inline !important;
          }
        `}
      </style>
    </div>
  );
};

export default Home;