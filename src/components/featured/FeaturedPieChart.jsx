import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

// temporary
const data = [
    { name: 'bug', value: 50, color: '#080705' },
    { name: 'fail', value: 30, color: '#800000' },
    { name: 'ignored', value: 10, color: '#004980' },
    { name: 'pass', value: 600, color: '#008000' },
];
// const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28'];

class FeaturedPieChart extends PureComponent {

    render() {
        return (
            <PieChart width={200} height={200} >
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>
        );
    }
}

export default FeaturedPieChart;
