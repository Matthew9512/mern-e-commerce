export const sumPriceByDate = (statistics) => {
   // Create an object to store the sums for each date
   const sumByDate = {};

   // Loop through the data and calculate the sums
   statistics?.data?.monthlyOrders.forEach((order) => {
      const createdAt = order.createdAt.split('T')[0].slice(5);
      const price = parseFloat(order?.price);
      const amount = parseFloat(order?.amount);

      if (!sumByDate[createdAt]) sumByDate[createdAt] = 0;

      sumByDate[createdAt] += price * amount;
   });

   return sumByDate;
};

export const areaChart = (statistics) => {
   const sumByDate = sumPriceByDate(statistics);
   const areaChartData = {
      labels: Object.keys(sumByDate).reverse(),
      datasets: [
         {
            label: 'incomes $',
            data: Object.values(sumByDate).reverse(),
            backgroundColor: 'rgba(77, 212, 89,0.2)',
            borderColor: 'rgba(77, 212, 89,1)',
         },
         // dummy random outcomes data
         {
            label: 'outcomes $',
            data: Object.values(sumByDate).map((sum) => (sum / Math.ceil(Math.random() * 8) + 1).toFixed(0)),
            backgroundColor: 'rgba(0, 10, 89,0.2)',
            borderColor: 'rgba(0, 10, 89,1)',
         },
      ],
   };

   return areaChartData;
};

export const doughnutChart = (totalMonthlyIncomes) => {
   // dummy random outcomes data
   const doughnutChartData = {
      labels: ['outcomes $:', 'incomes $:'],
      datasets: [
         {
            cutout: '80%',
            data: [(totalMonthlyIncomes / Math.ceil(Math.random() * 8) + 1).toFixed(0), totalMonthlyIncomes || 1e-10],
            backgroundColor: ['rgba(0, 10, 89,0.2)', 'rgba(7, 212, 89,0.2)'],
            borderColor: ['rgba(0, 10, 89,1)', 'rgba(7, 212, 89,1)'],
            spacing: 6,
         },
      ],
   };
   // rgb(30, 233, 233)
   return doughnutChartData;
};

export const chartOptions = {
   fill: true,
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
      legend: {
         display: false,
      },
      tooltip: {
         displayColors: false,
      },
   },
   elements: {
      line: {
         tension: 0.5,
      },
   },
   scales: {
      x: {
         grid: {
            display: false,
         },
      },

      y: {
         grid: {
            display: false,
         },
      },
   },
};
