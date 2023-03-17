import React from "react";
import Filter from "./components/Filter";
import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import SideIcons from "./components/SideIcons";
import Table from "./components/Table";

function App() {
  return (
    <div class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
      <SideIcons />
      <div class="flex-grow overflow-hidden h-full flex flex-col">
        <Navbar />
        <div class="flex-grow flex overflow-x-hidden">
          <SearchBar />
          <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
            <MainHeader />
            <div class="sm:p-7 p-4">
              <Filter />

              <Table />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
