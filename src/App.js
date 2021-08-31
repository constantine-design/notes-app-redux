import './App.css';
import React from "react";
import Add from "./components/Add.js";
import List from "./components/List.js";
import Filters from "./components/Filters.js";

export default function App() {
  return (
    <section className="todoapp">
      <Add />
      <section className="main" style={{display: 'block'}} >
        <List />
      </section>
      <Filters />
    </section>
  );
}
