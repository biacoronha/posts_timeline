import React from 'react'
import { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react'
import Employee from "../models/Employee";
import AdminPage from '../pages/AdminPage';

export default function ActionCard(props) {
    console.log(props)
    const { action, isNew, employee } = props
    const [id, setId] = useState(isNew ? '' : employee.id);
    const [username, setUsername] = useState(isNew ? '' : employee.username);
    const [phone, setPhone] = useState(isNew ? '' : employee.phone);
    const [role, setRole] = useState(isNew ? '' : employee.role);
    const [name, setName] = useState(isNew ? '' : employee.name);
    const [open, setOpen] = useState(true)
    const dimmer = undefined
    console.log(open)


    const mountEmployee = () => {
        const employee = new Employee(id, username, phone, role, name)
        console.log(employee)
        //validate employee
        action(employee)
        setOpen(false)
    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            open={open}
            dimmer={dimmer}
        >
            <Modal.Header>{isNew ? 'New User' : 'Edit User'}</Modal.Header>
            <Modal.Content>
                <Form className="create-form">
                    <Form.Field>
                        <label>ID</label>
                        <input placeholder='ID' onChange={(e) => setId(e.target.value)} required={true} disabled={!isNew} />
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} required={true} />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone</label>
                        <input placeholder='Phone' onChange={(e) => setPhone(e.target.value)} required={true} />
                    </Form.Field>
                    <Form.Field>
                        <label>Role</label>
                        <input placeholder='Role' onChange={(e) => setRole(e.target.value)} required={true} />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' onChange={(e) => setName(e.target.value)} required={true} />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Submit"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={mountEmployee}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}