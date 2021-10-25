import React from 'react';
import './app.css';

import PieChart from './PieChart';
import BarChart from './BarChart';
import AddNewPerson from './AddNewPerson';

export default function App() {
    const [keyComponent, setKeyComponent] = React.useState(1);

    const onReRenderComponent = () => setKeyComponent((key) => key + 1);

    return (
        <div className='container'>
            <PieChart key={keyComponent} />
            <BarChart key={keyComponent + 1} />
            <AddNewPerson onReRenderComponent={onReRenderComponent} />
        </div>
    );
}
