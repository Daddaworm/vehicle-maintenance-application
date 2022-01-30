import React from 'react'

const CreateMaintenanceRecord = ({selectedVehicleId}) => {

    const [state, setState] = React.useState({vehicle_id: selectedVehicleId})

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('routines', config)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={onChange}
                    className="create_maintenance_record" 
                    type="text"
                    name="routine"
                    placeholder="Add a maintenance record">
                </input>
                <button value="Add Maintenance Record">Add Record</button>
            </form>
        </div>
    )
}

export default CreateMaintenanceRecord


