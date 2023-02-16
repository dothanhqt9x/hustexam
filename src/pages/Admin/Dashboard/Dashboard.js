import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from '../../../redux/apiRequest';
import './Dashboard.css';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, 
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard(){
    const dispatch = useDispatch();
    const data = useSelector(state => state.dashboard.dashboard.quantityOfScore.quantityOfScore);
    useEffect(()=> {
        getDashboard(dispatch);
    },[])
    const dataTable = {
        labels: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5','7', '7.5', '8', '8.5', '9', '9.5', '10'],
        datasets: [
          {
            label: 'Thống kê điểm kiểm tra quy chế đào tạo đại học sinh viên đại học BKHN',
            backgroundColor: 'rgb(31, 119, 180)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: data
          }
        ]
      };
      const options = {
         plugins: {
          datalabels: {
            display: true,
            color: "black",
            formatter: Math.round,
            anchor: "end",
            offset: -20,
            align: "start"
          }
        },
        title: {
          display: true,
          text: 'Biểu đồ doanh thu' 
        },
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }
        //   ]
        // }
      };
    return (
        <div style={{marginBottom: '40px'}}>
            <Bar
                data={dataTable}
                options={options}
                plugins={[ChartDataLabels]}
            />
        </div>
    )
}

export default Dashboard;