import React from "react";
import Header from "./components/Header";
import GroupList from "./components/GroupList";

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4">Groups</h2>
        <GroupList />
      </div>
    </div>
  );
}

export default App;
