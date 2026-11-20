// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Augarten', 'Paris', 'Jakominiplatz', 'Wohnzimmer', 'Kino'];
const votes = [12, 9, 5, 4, 3];

datasets: [
 {label: 'Students', data: [12, 9, 5, 4, 3]},
 {label: 'Teachers', data: [8, 6, 7, 3, 2]}
]

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'bar',              // try: 'line', 'pie', 'doughnut'
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