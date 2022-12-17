import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

// temporary
const data = [
    { name: 'Bugs', value: 50, color: 'rgb(255, 0, 0, 0.8)' },
    { name: 'Fail', value: 30, color: 'rgb(119, 7, 55, 0.8)' },
    { name: 'Ignored', value: 10, color: 'rgb(253, 218, 13, 0.8)' },
    { name: 'Pass', value: 600, color: 'rgb(0, 128, 0, 0.8)' },
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
