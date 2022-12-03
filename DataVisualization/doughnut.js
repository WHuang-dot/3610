const ctx = document.getElementById('myChart').getContext('2d');


let data = getData().then(response =>{
    data = response
    console.log(data)
})
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
        {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
        }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'TEST'
            }
        },
        responsive: true
    }
});

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'bar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
        {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
        }
        ]
    },
    options: {
        indexAxis: 'y',
        legend: { display: false },
        title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
        }
    }
});
