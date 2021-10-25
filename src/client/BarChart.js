import React from 'react';
import Chart from 'react-google-charts';

export default function PieChart() {
    const [groups, setGroups] = React.useState([]);

    const getGroupEntityByName = (name) => groups.find((e) => e.name === name);

    const youngs = getGroupEntityByName('young')
        ? getGroupEntityByName('young').total
        : 0;
    const adults = getGroupEntityByName('adult')
        ? getGroupEntityByName('adult').total
        : 0;
    const seniors = getGroupEntityByName('seniors')
        ? getGroupEntityByName('seniors').total
        : 0;

    React.useEffect(() => {
        (async () => {
            //async/await Here fetch doesn't go to catch method, using then to shape the response to return the date from the server
            const res = await fetch('http://localhost:8080/bar').then((res) =>
                res.status === 200 ? res.json() : []
            );
            setGroups(res);
        })();
    }, []);

    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType='BarChart'
            loader={<div>Loading Chart</div>}
            data={[
                ['Group', 'Total'],
                ['Young (0-35)', youngs],
                ['Adult (36-50)', adults],
                ['Senior (>=51)', seniors],
            ]}
            options={{
                title: 'Group Age',
                chartArea: { width: '50%' },
                hAxis: {
                    title: 'Group',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Age',
                },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
        />
    );
}
