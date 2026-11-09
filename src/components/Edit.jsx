import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    let index = Employees.map(function(e) {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Employees[index];
        a.name = name;
        a.age = age;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setId(localStorage.getItem('id'));
    }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Ingresar Nombre" value={name} required onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Ingresar Edad" value={age} required onChange={(e) => setAge(e.target.value)} />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Actualizar</Button>
            </Form>
        </div>
    )
}

export default Edit;
