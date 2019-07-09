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
                labels: ['Production', 'Consommation', 'Autoconsommation'],
                datasets: [
                    {
                        label: 'Prodcution',
                        data: [1000, 2000],
                        backgroundColor: [
                            "rgba(240, 247, 15, 0.2)" // zone

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
                <div class="row justify-content-md-center">
                    <div class="col">
                        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                    </div>
                    {/* <div class="col">
                        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />
                    </div> */}
                </div>
            </div>
        </div>

    );
    
}
}
export default Graph;
