// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Augarten', 'Paris', 'Jakominiplatz', 'Wohnzimmer', 'Kino'];
const votes = [12, 9, 5, 4, 3];

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'pie',              // try: 'line', 'pie', 'doughnut'
  data: {
    labels: places,         // labels on the x-axis
    datasets: [{
      label: 'Number of votes',
      data: votes              // values (same order as labels!)
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});