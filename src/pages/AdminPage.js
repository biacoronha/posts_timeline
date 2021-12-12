import { Table, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import ActionCard from "../components/ActionCard";
import Header from '../components/Header';

export default function AdminPage() {
    const [employeesArray, setEmployeesArray] = useState('');
    const [isNew, setIsNew] = useState(null);

    function createEmployee(employee) {
        console.log('create')
        employeesArray.push(employee)
        setEmployeesArray(employeesArray)
        localStorage.setItem('employees', JSON.stringify(employeesArray))
    }

    function editEmployee(employee) {
        let indexOfEmployee = employeesArray.findIndex(x => x.id === employee.id)
        employeesArray[indexOfEmployee] = employee
        setEmployeesArray(employeesArray)
        localStorage.setItem('employees', JSON.stringify(employeesArray))        
    }

    function removeEmployee(employee) {
        let indexOfEmployee = employeesArray.findIndex(x => x.id === employee.id)
        employeesArray.splice(indexOfEmployee, 1);
        setEmployeesArray(employeesArray)
        localStorage.setItem('employees', JSON.stringify(employeesArray))        
    }

    function getEmployees() {
        const storedArray = localStorage.getItem('employees')
        console.log(storedArray)
        console.log(JSON.parse(storedArray))
        return JSON.parse(storedArray);
    }

    useEffect(() => {
        const employees = getEmployees()
        setEmployeesArray(employees)
        console.log(employees)
        console.log(employeesArray)
    }, [employeesArray])

    const openCreate = () => {
        setIsNew(true)
    }

    const openEdit = () => {
        setIsNew(false)
    }


    return (
        <div>
        {/* <Header/> */}
        {(isNew !== null && isNew === true) ?  
        <ActionCard action={createEmployee} isNew={true}/>: ''}

        <Button onClick={openCreate}>Create</Button>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.HeaderCell>Role</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {(employeesArray && employeesArray.length > 0) ?
                employeesArray.map((data) => {                
                    return (
                    <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.username}</Table.Cell>
                        <Table.Cell>{data.phone}</Table.Cell>
                        <Table.Cell>{data.role}</Table.Cell>
                        <Table.Cell>{data.name}</Table.Cell>
                        <Table.Cell> 
                            <Button onClick={openEdit}>Update</Button>
                        </Table.Cell>
                        <Table.Cell> 
                            <Button onClick={removeEmployee}>Delete</Button>
                        </Table.Cell>
                        {(isNew !== null && isNew === false) ?
                            <ActionCard action={editEmployee} isNew={false} employee={data}/>
                        : <></>}
                    </Table.Row>
                )}):console.log('aaaa' . employeesArray)}
            </Table.Body>
        </Table>
    </div>
    );
}
