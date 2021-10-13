import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginPage = () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
                    MercaTodo Login
                </h1>
                <Row className="mt-5">
                    <Col
                        lg={5}
                        md={6}
                        sm={12}
                        className="p-5 m-auto shadow-sm rounded-lg"
                    >
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el usuario"
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginPage;
