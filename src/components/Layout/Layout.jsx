import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from '../Footer/Footer'

function Layout() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main>
        <Outlet context={{ search }} />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
