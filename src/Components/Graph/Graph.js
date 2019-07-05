import React from 'react';

import Chart from "chart.js";

export default function Graph() {

    var canvas = document.getElementById("barChart");
    var ctx = canvas.getContext('2d');

    var data = {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        datasets: [
            {
                label: "My Second dataset",
                fillColor: "rgba(0,191,255,0.5)",
                strokeColor: "rgba(0,191,255,0.8)",
                highlightFill: "rgba(100,149,237,0.75)",
                highlightStroke: "rgba(100,149,237,1)",
                data: [60, 50, 40, 30, 20, 10, 20],
                borderColor: 'grey',
                borderWidth: 1,        
            }
        ]
    };

    var options = {
        legend: {
            display: true,
        },
        tooltips: {
            enabled: false,
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: {
                    beginAtZero:true
                },        
            }],
            yAxes: [{
                display: true,
                    ticks: {
                        beginAtZero:true
                    },        
            }]
        },      
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '26',
                borderColor: 'tomato',
                borderWidth: 1
            }],
            drawTime: "afterDraw" // (default)
        }
    };

    // Chart declaration:
    var multiLineChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
    
    return (
        <div class="container">
            <br />
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <canvas id="barChart"></canvas>
                </div>
                <div class="col-md-1"></div>
            </div>
        </div>
    );
}
