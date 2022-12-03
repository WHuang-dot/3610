const ctx = document.getElementById('myChart').getContext('2d');


let fullyVaccinated
let atLeastOneDose
let data = getData().then(response =>{
    data = response
    console.log(data[data.length-1])
    atLeastOneDose = data[data.length-1].of_students_w_at_least_one
    console.log(atLeastOneDose)
    fullyVaccinated = data[data.length-1].of_students_fully_vaccinated
}).then(() =>{
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["At least One Dose", "Fully vaccinated"],
            datasets: [
            {
                label: "Number of students",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: [atLeastOneDose,fullyVaccinated]
            }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'NYC Student Covid Vaccinations (4/1/22) Name: Wong Chi Kung Huang Liu'
                }
            },
            responsive: true
        }
    });
    
    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'bar',
        data: {
            labels: ["At least One Dose", "Fully vaccinated"],
            datasets: [
            {
                label: "Number of students",
                backgroundColor: ["#3e95cd", "#8e5ea2"],
                data: [atLeastOneDose,fullyVaccinated]
            }
            ]
        },
        options: {
            indexAxis: 'y',
            legend: { display: false },
            plugins: {
                title: {
                    display: true,
                    text: 'NYC Student Covid Vaccinations (4/1/22)  Name: Wong Chi Kung Huang Liu'
                }
            },
        }
    });
})
