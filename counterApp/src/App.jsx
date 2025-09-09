import React, { useState } from "react";
import "./App.css";
import DynamicLayout from "./components/layouts/DynamicLayout";
import StaticLayout from "./components/layouts/StaticLayout";
import NavigationBottom from "./components/ui/NavigationBottom";

function App() {
  const [currentPage, setCurrentPage] = useState("static");

  return (
    <>
      {currentPage === "static" && <StaticLayout />}
      {currentPage === "dynamic" && <DynamicLayout />}
      <NavigationBottom onChangeLink={setCurrentPage} />
    </>
  );
}

export default App;
