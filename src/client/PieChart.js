import React from 'react';
import Chart from 'react-google-charts';

export default function PieChart() {
    const [listGender, setListGender] = React.useState([]);

    // Parse response from server
    const maleRatio = listGender.find((e) => e.gender === 'M');
    const femaleRatio = listGender.find((e) => e.gender === 'F');
    const haveBothMaleAndFemale =
        maleRatio !== undefined && femaleRatio !== undefined;

    // Get total (female + male)
    const totalPerson = haveBothMaleAndFemale
        ? maleRatio.total + femaleRatio.total
        : 0;

    // Calculate percent depend on totalPerson
    const calculatePercent = (value) => Math.floor((value / totalPerson) * 100);

    // Get male, female ratio
    const maleRatioChart = haveBothMaleAndFemale
        ? calculatePercent(maleRatio.total)
        : 0;
    const femaleRatioChart = haveBothMaleAndFemale
        ? calculatePercent(femaleRatio.total)
        : 0;

    React.useEffect(() => {
        (async () => {
            //async/await Here fetch doesn't go to catch method, using then to shape the response to return the date from the server
            const res = await fetch('http://localhost:8080/pie').then((res) =>
                res.status === 200 ? res.json() : []
            );
            setListGender(res);
        })();
    }, []);

    return (
        <Chart
            width={'500px'}
            height={'300px'}
            chartType='PieChart'
            loader={<div>Loading Chart</div>}
            data={[
                ['Gender', 'Ratio'],
                ['Male', maleRatioChart],
                ['Female', femaleRatioChart],
            ]}
            options={{
                title: 'Gender Ratio',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
}
