import React, { useState } from 'react';
import './Join.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Label, Button, Input, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="App">
            <Form className="form-signin">
                <h3>Real Time chat app</h3>
                <h4 className="mb-4 font-weight-normal">Join to Chat!</h4>
                <Input required autoFocus type="text" className="form-control top" placeholder="Name" onChange={(event) => setName(event.target.value)} />
                <Input required type="text" placeholder="Room" className="form-control bottom" onChange={(event) => setRoom(event.target.value)} />
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}><button
                    role="button" className="btn btn-primary btn-block btn-lg" >Join</button></Link>

            </Form>
        </div>
    )
};
export default Join;