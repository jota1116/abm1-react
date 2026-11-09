import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
    }

    const handleDelete = (id) => {
        let index = Employees.map(function(e) {
            return e.id;
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ? Employees.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>
                                            <Link to={`/edit`}>
                                                <Button onClick={() => handleEdit(item.id, item.name, item.age)}>Editar</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            : <tr><td colSpan="3">No hay datos disponibles</td></tr>
                        }
                    </tbody>
                </Table>
                <br />
                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Crear</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;
