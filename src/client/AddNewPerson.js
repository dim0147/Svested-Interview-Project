import React from 'react';

export default function AddNewPerson({onReRenderComponent}) {
    const ipName = React.useRef();
    const ipAge = React.useRef();
    const [gender, setGender] = React.useState('F');

    const onAdd = async () => {
        const name = ipName.current?.value;
        const age = ipAge.current?.value;
        if (!name || !age) return alert('Name or age not valid!');

        const data = { name, age, gender };

        //async/await:  More readable code flow 
        const res = await fetch('http://localhost:8080/chart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        onReRenderComponent();
    };

    return (
        <div>
            <input ref={ipName} placeholder='name' type='text' />
            <input ref={ipAge} placeholder='age' type='number' min={1} />
            <select defaultValue='F' onChange={(e) => setGender(e.target.value)} name='gender'>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
            </select>
            <button onClick={onAdd}>Add</button>
        </div>
    );
}
