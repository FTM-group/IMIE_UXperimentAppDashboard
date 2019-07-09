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
                labels: ['Production', 'Consommation', 'Autoconsommation'],
                datasets: [
                    {
                        label: 'Production',
                        data: [1000, 2000],
                        backgroundColor: [
                            "rgba(240, 247, 15, 0.6)" // zone

                        ]
                    },
                    {
                        label: 'Consommation',
                        data: [1000, 2000],
                        backgroundColor: [
                            "rgba(240, 247, 15, 0.6)" // zone

                        ]
                    },
                    {
                        label: 'AutoConsommation',
                        data: [1000, 2000],
                        backgroundColor: [
                            "rgba(240, 247, 15, 0.6)" // zone

                        ]
                    },
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
