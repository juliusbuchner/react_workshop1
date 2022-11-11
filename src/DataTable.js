import React, {useEffect} from "react";
import { useState } from "react";

const DataTable = () => {
    
    const [studentList, setStudentList] = useState([]);
    
    useEffect(() => {
        initStudentList();
    }, [])

    const initStudentList = () => {
        const students = [];

        students.push({ id: 1, firstName: 'Bamse', lastName: 'Långhals', age: '56',
            birthdate: '1966-02-01', country: 'Greenland', city: 'Sisimiut', })
        students.push({ id: 2, firstName: 'Lilleskutt', lastName: 'Kortfot', age: '79',
            birthdate: '1943-04-21', country: 'Greenland', city: 'Ilulissat', })
        students.push({ id: 3, firstName: 'Skalman', lastName: 'Sovstund', age: '102',
            birthdate: '1920-10-30', country: 'Greenland', city: 'Qaqortoq', })

        setStudentList(students);
    }

    return (
        <table>
            <TableHeader />
            <TableRow studentList={studentList}/>
        </table>
    )
}

const TableHeader = () => {
    return(
        <tr>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
        </tr>
    )
}

const TableAction = (props) => {
    <button onClick={props.showDetails} >Details</button>
}

const TableRow = (props) => {
    const showDetails = () =>{}
    return (
        props.studentList.map(student =>
            <tbody>
                <tr key={student.id} >
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <TableAction studentId={student.id} showDetails={showDetails}/>
                </tr>
            </tbody>
        )
    )
}

export default DataTable