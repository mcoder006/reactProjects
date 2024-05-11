//  import { background, Show } from '@chakra-ui/react';
import Chart from 'react-apexcharts'

 const option: any = {
   labels: ["Enpense", "Income"],
   colors: ["#FD5E53", "#21BF73"],
   chart: {
     width: "50px",
   },
   states: {
     hover: {
       filter: {
         type: "none",
       },
     },
   },
   legend: {
     show: false,
   },
   dataLabels: {
     enabled: false,
   },
   hover: { mode: null },
   plotOptions: {
     donut: {
       expandOnClick: false,
       donut: {
         labels: {
           show: false,
         },
       },
     },
   },
   fill: {
     colors: ["#FD5E53", "#21BF73"],
   },
   tooltip: {
    enabled: true,
    theme: "dark",
    style: {
        fontSize: '12px',
        fontFamily: '"Roboto", "Helvetica Neue", "Arial", sans-serif',
        backgroundColor: "#FD5E53",
    }
   }
 };

 interface ChartProps {
    income: number;
    expense: number;
 }

const ChartSummary = ( { income = 100, expense = 100 } : ChartProps) => {
  return (
    <Chart
    options={option}
    series={[income, expense]}
    type='pie'
    width={'100%'}
    height={'100%'}
    />
  )
}

export default ChartSummary