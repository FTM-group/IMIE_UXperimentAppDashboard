import React from 'react';
import Chart from '../Charts/Chart';
import Chart2 from '../Charts/Chart2';

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
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }


    render() {
        return (
            <div className="container">
                <div className="App">
                    <div className="App-header">
                        {/* <h2>Hello World !</h2> */}
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                        </div>
                        <div className="col">
                            <Chart2 chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}
export default Graph;
