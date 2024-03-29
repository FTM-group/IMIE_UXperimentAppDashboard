import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right',
        location: 'City',
    }

    render() {
        return (
            <div className="chart2">

                <Doughnut
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Conso & Prod & AutoConso de ' + this.props.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

            </div>
        )
    }
}

export default Chart2;