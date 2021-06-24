import React from 'react';
import Header from "./utilities/header";
import Menu from "./utilities/menu";
import Metric from "./technicals/key-metric";

function BSTDashboard() {

  return (
  <div >

      <Header title="Product title" subtitle="Add short description" />
      <Menu/>
      <Metric />

</div>
  );
}

export default BSTDashboard;
