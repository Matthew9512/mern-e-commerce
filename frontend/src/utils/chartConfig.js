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
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
         },
         // dummy random outcomes data
         {
            label: 'outcomes $',
            data: Object.values(sumByDate).map((sum) => sum / Math.ceil(Math.random() * 8) + 1),
            backgroundColor: 'rgba(175,62,72,0.2)',
            borderColor: 'rgba(175,62,72,1)',
         },
      ],
   };

   return areaChartData;
};

export const doughnutChart = (totalMonthlyIncomes) => {
   // dummy random outcomes data
   const doughnutChartData = {
      labels: ['outcomes:', 'incomes:'],
      datasets: [
         {
            cutout: '80%',
            data: [totalMonthlyIncomes / Math.ceil(Math.random() * 8) + 1, totalMonthlyIncomes || 1e-10],
            backgroundColor: ['rgba(175,62,72,0.2)', 'rgba(0,176,148,0.2)'],
            borderColor: ['rgba(175,62,72,1)', 'rgba(0,176,148,1)'],
            borderWidth: 1,
         },
      ],
   };

   return doughnutChartData;
};

export const chartOptions = {
   fill: true,
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
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
