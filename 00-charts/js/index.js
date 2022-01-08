window.onload = workOnDom;

function workOnDom() {

    const LINE_WIDTH = 4;

    var xAxisValues = ["[160, 165)", "[165,170)", "[170, 175)",
        "[175, 180)", "[180, 185)", "[185, 190)",
        "[190, 195)", "195, 200)"];

    var shortHeight = {
        x: xAxisValues,
        y: [0.8, 0.4, 0.4, 0, 0, 0, 0, 0],
        mode: 'lines',
        name: 'низкий',
        line: {
            width: LINE_WIDTH
        }
    };

    var mediumHeight = {
        x: xAxisValues,
        y: [0.2, 0.6, 0.6, 0.6, 0.6, 0.4, 0, 0],
        mode: 'lines',
        name: 'средний',
        line: {
            width: LINE_WIDTH
        }
    };

    var tallHeight = {
        x: xAxisValues,
        y: [0., 0, 0, 0.4, 0.4, 0.6, 1, 1],
        mode: 'lines',
        name: 'высокий',
        line: {
            width: LINE_WIDTH
        }
    };

    var data = [shortHeight, mediumHeight, tallHeight];

    var layout = {
        title: 'Графики функций принадлежности нечетких множеств',
        titlefont: {
            size: 22
        },
        xaxis: {
            title: 'Рост',
            titlefont: {
                size: 16
            },
            zeroline: true,
            tickfont: {
                size: 16
              }
        },
        yaxis: {
            title: 'Степень принадлежности',
            titlefont: {
                size: 16
            },
            showline: true,
            tickfont: {
                size: 16
              }
        },
        legend: {
            y: 0.8,
            traceorder: 'reversed',
            font: { size: 18 },
            yref: 'paper'
        }
    };

    var config = {responsive: true};

    Plotly.newPlot('heightFuzzySetOne', data, layout, config);

}