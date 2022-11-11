import React, {Component} from "react";
import DataTable from "./DataTable";

class App extends Component {
    state = {
        students: [
            {
                id: 1,
                firstName: 'Bamse',
                lastName: 'Långhals',
                age: '56',
                birthdate: '1966-02-01',
                country: 'Greenland',
                city: 'Sisimiut',
            }, {
                id: 2,
                firstName: 'Lilleskutt',
                lastName: 'Kortfot',
                age: '79',
                birthdate: '1943-04-21',
                country: 'Greenland',
                city: 'Ilulissat',
            }, {
                id: 3,
                firstName: 'Skalman',
                lastName: 'Sovstund',
                age: '102',
                birthdate: '1920-10-30',
                country: 'Greenland',
                city: 'Qaqortoq',
            }
        ]
    }
    render() {
        const {students} = this.state
        return(
            <div className="container">
                <DataTable studentData={students} />
            </div>
        )
    }
}
export default App