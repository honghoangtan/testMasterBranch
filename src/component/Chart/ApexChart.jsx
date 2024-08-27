import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ darkMode }) => {
  console.log('dark: ', darkMode)
  const [chartData] = useState({
    series: [{
      name: 'XYZ MOTORS',
      data: [
        { x: '2024-08-01', y: 1000000 },
  { x: '2024-08-02', y: 1500000 },
  { x: '2024-08-03', y: 1800000 },
  { x: '2024-08-04', y: 2200000 },
  { x: '2024-08-05', y: 1700000 },
  { x: '2024-08-06', y: 2500000 },
  { x: '2024-08-07', y: 2000000 },
  { x: '2024-08-08', y: 3000000 },
  { x: '2024-08-09', y: 2700000 },
  { x: '2024-08-10', y: 3200000 },
  { x: '2024-08-11', y: 3500000 },
  { x: '2024-08-12', y: 3300000 },
  { x: '2024-08-13', y: 3600000 },
  { x: '2024-08-14', y: 3400000 },
  { x: '2024-08-15', y: 3700000 }
      ]
    }],
    options: {
      chart: {
        type: 'area',
        background: darkMode ? '#333' : '#fff',
        foreColor: darkMode ? '#f0f0f0' : '#333',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      theme: {
        mode: darkMode ? 'dark' : 'light'
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
          style: {
            colors: darkMode ? '#f0f0f0' : '#333',
          },
        },
        title: {
          text: 'Price',
          style: {
            color: darkMode ? '#f0f0f0' : '#333',
          },
        },
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: darkMode ? '#f0f0f0' : '#333',
          },
        },
      },
      tooltip: {
        theme: darkMode ? 'dark' : 'light',
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart className='dark:text-white' options={chartData.options} series={chartData.series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
