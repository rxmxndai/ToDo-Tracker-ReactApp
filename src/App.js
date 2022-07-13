import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import ViewTask from "./components/ViewTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [newTaskForm, setNewTaskForm] = useState(false);

  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const listFromServer = await fetchList();
      setList(listFromServer);
    };
    getList();
  }, []);

  // fhetch list ofh task todo
  const fetchList = async () => {
    const res = await fetch("http://localhost:8000/list");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/list/${id}`);
    const data = await res.json();
    return data;
  };

  // Add new task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:8000/list`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setList([...list, data]);
  };

  // Delete to-dos
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/list/${id}`, {
      method: "DELETE",
    });

    setList(list.filter((each) => each.id !== id));
  };

  // Unhighlight to-dos
  const makeActive = async (id) => {
    const task = await fetchTask(id);
    const updatedTask = { ...task, reminder: !task.reminder };

    const res = await fetch(`http://localhost:8000/list/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setList(
      list.map((each) =>
        each.id === id ? { ...each, reminder: data.reminder } : each
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="To-Do App"
          form={newTaskForm}
          onAdd={() => {
            setNewTaskForm(!newTaskForm);
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {newTaskForm && <NewTask addTask={addTask} />}

                {list.length > 0 ? (
                  <ViewTask
                    list={list}
                    onDelete={deleteTask}
                    onToogle={makeActive}
                  />
                ) : (
                  "Nothing To-Do"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
