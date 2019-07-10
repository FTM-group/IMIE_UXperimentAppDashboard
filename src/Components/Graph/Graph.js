import React from 'react';
import Chart from '../Charts/Chart';

import './Graph.css';

class Graph extends React.Component {
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
                labels: ['6h', '9h', '12h', '15h', '18h', '21h', '0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h', '0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h', '0h', '3h'],
                datasets: [
                    {
                        label: 'Production',
                        data: [147, 1210, 1792, 1869, 1258, 222, 0, 0, 147, 1210, 1792, 1869, 1258, 222, 0, 0, 147, 1210, 1792, 1869, 1258, 222, 0, 0],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Consommation',
                        data: [-1121, -31, -154, -1075, -4, -291, -434, -354, -1121, -31, -154, -1075, -4, -291, -434, -354, -1121, -31, -154, -1075, -4, -291, -434, -354],
                        backgroundColor: [
                            'rgba(245, 221, 66, 0.4)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }
        });
    }


    render(){
        return (
            <div class="container">
                <div className="App">
                    <div className="App-header">
                        {/* <h2>Hello World !</h2> */}
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <Chart chartData={this.state.chartData} location="SunShare" legendPosition="bottom" />
                        </div>
                        {/* <div className="col">
                            <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                        </div> */}
                    </div>
                </div>
            </div>

        );
        
    }
}
export default Graph;
