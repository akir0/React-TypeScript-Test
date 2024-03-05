import { useEffect, useState } from "react";
import "./App.css";

import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/users">Users </Link>
        <Link to="/todos">ToDos</Link>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
