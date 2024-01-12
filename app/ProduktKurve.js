"use client";
import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';

function ProduktKurve() {
  return (
    <div className="m-5">
      <h1 className="mb-5 font-bold">Produktionsmöglichkeitenkurve</h1>
      <LineChart
      xAxis={[{ data: [0, 280, 600, 700, 950] }]}
      series={[
        {
          data: [3000, 2900, 2200, 2000, 200],
        },
      ]}
      width={500}
      height={300}
    />
    </div>
  );
}

export default ProduktKurve;
