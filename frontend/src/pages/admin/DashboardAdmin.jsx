import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   ArcElement,
   Legend,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { useAdminStatistics } from '../../api/useAdmin';
import { Widget } from './components/Widget';
import { Table } from './components/Table';
import { TableOrdersData } from './components/TableOrdersData';
import { areaChart, chartOptions, doughnutChart } from '../../utils/chartConfig';

export const DashboardAdmin = () => {
   ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, ArcElement, Legend);
   const ordersHeaders = ['', 'image', 'username', 'product', 'amount', 'price', 'order id', 'date', 'status'];
   const statistics = useAdminStatistics();

   // sum of monthly incomes
   const totalMonthlyIncomes = statistics?.data?.monthlyOrders.reduce(
      (acc, order) => acc + +(order?.price * order?.amount),
      0
   );

   // charts functions
   const areaChartData = areaChart(statistics);
   const doughnutChartData = doughnutChart(totalMonthlyIncomes);

   return (
      <>
         <article className='flex flex-col gap-4 p-4'>
            <div className='flex gap-4'>
               <Widget
                  header='Orders'
                  overall={statistics?.data?.totalOrders}
                  data={statistics?.data?.monthlyOrders.length}
               />
               <Widget header='Users' overall={statistics?.data?.totalUsers} data={statistics?.data?.monthlyUsers} />
               <Widget
                  header='Incomes'
                  overall={statistics?.data?.totalIncomes + '$'}
                  data={totalMonthlyIncomes + '$'}
               />
            </div>
            <div className='flex justify-between gap-4 w-[900px] my-6'>
               <div className='w-[500px] h-56 flex flex-col'>
                  <p className='font-semibold text-lg mb-4'>Monthly incomes statistics:</p>
                  <Line data={areaChartData} options={chartOptions} />
               </div>
               <div className=' h-56 '>
                  <p className='font-semibold text-lg mb-4'>Monthly transactions statistics:</p>
                  <Doughnut data={doughnutChartData} />
               </div>
            </div>
            {statistics?.data?.monthlyOrders.length ? (
               <>
                  <p className='font-semibold text-lg py-4'>Recent transactions:</p>
                  <Table headers={ordersHeaders}>
                     <TableOrdersData fetchQuery={statistics?.data?.monthlyOrders.slice(0, 5)} />
                  </Table>
               </>
            ) : (
               <p>No orders data for this month available</p>
            )}
         </article>
      </>
   );
};
