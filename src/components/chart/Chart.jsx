import './chart.scss';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {

    const data = [
        {
            name: 'Jan 1',
            pass: 423,
            bugs: 24,
            failed: 24,
            ignored: 24,
        },
        {
            name: 'Jan 2',
            pass: 424,
            bugs: 13,
            failed: 22,
            ignored: 24,
        },
        {
            name: 'Jan 3',
            pass: 467,
            bugs: 98,
            failed: 22,
            ignored: 24,
        },
        {
            name: 'Jan 4',
            pass: 520,
            bugs: 39,
            failed: 20,
            ignored: 24,
        },
        {
            name: 'Jan 5',
            pass: 506,
            bugs: 48,
            failed: 21,
            ignored: 24,
        },
        {
            name: 'Jan 6',
            pass: 487,
            bugs: 38,
            failed: 25,
            ignored: 24,
        },
        {
            name: 'Jan 7',
            pass: 506,
            bugs: 43,
            failed: 21,
            ignored: 24,
        },
    ];

    return (
        <div className='chart'>
            <ResponsiveContainer width="100%" aspect={2 / 1} >
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pass" stackId="1" stroke="rgb(0, 128, 0)" fill="rgb(0, 128, 0)" />
                    <Area type="monotone" dataKey="bugs" stackId="1" stroke="rgb(255, 0, 0)" fill="rgb(255, 0, 0)" />
                    <Area type="monotone" dataKey="failed" stackId="1" stroke="rgb(119, 7, 55)" fill="rgb(119, 7, 55)" />
                    <Area type="monotone" dataKey="ignored" stackId="1" stroke="rgb(253, 218, 13)" fill="rgb(253, 218, 13)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;