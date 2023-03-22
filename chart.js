
  
  const col_bar = document.getElementById('myChart-bar');

  var ctx = document.getElementById('myChart-polarArea').getContext('2d');
	var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Cristiano Ronado', 'Josef Bican', 'Lionel Messi', 'Romario ', 'Pele', 'Ferenc Puskas',
        'Gerd Muller', 'Ferenc Deak','Uwe Seeler', 'Tulio Maravilha'],
        datasets: [{
            
            data: [815, 805, 780, 772, 767, 746, 735, 576, 575, 575 ],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(244, 100, 36, 1)',
                'rgba(200, 136, 257, 1)',
                'rgba(236, 20, 124, 1)',
                'rgba(280, 250, 56, 1)',
            ],
        }]
    },
    options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'hidden',
      },
      title: {
        display: true,
        text: 'Top 10 players with the most goals'
      }
    }
  },
});

  new Chart(col_bar, {
    type: 'doughnut',
    data: {
      labels: [
    'Real Madrid',
    'AC Milan',
    'Bayern Munich',
    'Liverpool',
    'Barcelona',
    'Ajax',
    'Manchester United',
    'Inter Milan',
    'Juventus',
    'Benfica',
    'Nottingham Forest',
    'Porto',
    'Chelsea'
  ],
      datasets: [{
    label: 'UCL champions',
    data: [14, 7, 6, 6, 5, 4, 3, 3, 2, 2, 2, 2, 2],
    backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(244, 100, 36)',
                'rgba(200, 136, 257)',
                'rgba(236, 20, 124)',
                'rgba(280, 250, 56)',
    ],
    hoverOffset: 4
  }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
      title: {
        display: true,
        text: 'ULC champions'
      }
    }  
  }
  });
