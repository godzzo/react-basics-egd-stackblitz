import React, { useState } from "react";
import "./style.css";

import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import UserLogin from "./components/UserLogin";
import BaseLayout from "./components/BaseLayout";


export default function App() {
  const [page, setPage] = useState('home');

  const changePage = (pageName) => {
    console.log('changePage');

    setPage(pageName);
  };

  console.log('changePage', changePage);

  const base = (
    <div>
      <h1>Hello StackBlitz! {page}</h1>
      <p>Start editing to see some magic happen :)</p>
      {
        Object.keys(pages).map(key => {
          return <button onClick={() => changePage(key)}>{key}</button>
        })
      }
      { 
        pages[page]() 
      }
    </div>
  );

  return base;
}

const pages = {
  home() {
    return (
      <React.Fragment>
        <Clock />
        <Toggle />
        <UserLogin />
      </React.Fragment>
    );
  },

  baseLayout() {
    return (
      <BaseLayout>
        <BaseLayout.Header>
          <h1>Here might be a page title</h1>
        </BaseLayout.Header>

        <BaseLayout.Body>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </BaseLayout.Body>

        <BaseLayout.Footer>
          <p>Place some contact info here.</p>
        </BaseLayout.Footer>
      </BaseLayout>
      );
  }
};
