import React from 'react';
import Chart2 from '../Charts/Chart2';

import './Graph.css';

class Graph2 extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Ajax calls here
        this.setState({
            chartData: {
                labels: [ '','' ], // label des hover
                datasets: [
                    {
                        label: 'Autoconsommation',
                        data: [225, 1000],
                        backgroundColor: [
                            "rgba(43, 220, 240, 1)", // couleur de la zone
                            "rgba(255, 255, 255, 1)" 
                        ],
                        hoverBackgroundColor: [ "rgba(43, 220, 240, 1)", "#fff" ], 
                        // hoverBorderColor: ["white"]
                        hoverBorderWidth: 0 // taille de la bordure au survole
                    },
                    {
                        label: 'Consommation',
                        data: [692, 812],
                        backgroundColor: [
                            "rgba(219, 75, 29, 1)",// zone
                            "rgba(240, 200, 15, 1)" 
                            
                        ]
                    },
                    
                ]
            }
        });
    }


    render(){
        return (
            <div className="container">
                <div className="App">
                    <div className="App-header">
                        {/* <h2>Hello World !</h2> */}
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <Chart2 chartData={this.state.chartData} location="SunShare" legendPosition="bottom" />
                        </div>
                    </div>
                </div>
            </div>

        );
        
    }
}
export default Graph2;
