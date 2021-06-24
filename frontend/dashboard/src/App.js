import React from 'react';
import Header from "./utilities/header";
import Menu from "./utilities/menu";

function BSTDashboard() {

  return (
  <div >
      <Header title="Product title" subtitle="Add short description" />
      <Menu/>
    {/* Key metrics */}
    <div className="flex flex-col md:flex-row justify-evenly items-center py-12">
        <div className="has-tooltip">
            <span className="tooltip rounded shadow-lg p-1 bg-gray-50 text-blue-400 -mt-8">
                Add extra information here!
            </span>
            <div className="flex-column justify-center pb-3 md:py-0">
                <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
                <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
            </div>
        </div>

        <div className="flex-column justify-center py-3 md:py-0">
            <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
            <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
        </div>

        <div className="flex-column justify-center py-3 md:py-0">
            <p className="lining-nums text-center text-6xl text-medium text-gray-900">1</p>
            <p className="text-3xl text-center text-light text-gray-600">Metric name</p>
        </div>

    </div>

</div>
  );
}

export default BSTDashboard;
