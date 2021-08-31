import './App.css';
import React from "react";
import AppHeader from "./components/AppHeader.js";
import AppTodosList from "./components/AppTodosList.js";
import AppFooter from "./components/AppFooter.js";

export default function App() {
  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main" style={{display: 'block'}} >
        <AppTodosList />
      </section>
      <AppFooter />
    </section>
  );
}
