import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

class Chart extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                //{ Technology: "Bootstrap", Projects: 95 },
                //{ Technology: "React", Projects: 90 },
            ],
        };
    }
    render() {
        const green = "rgba(46, 204, 113,0.9)";
        return (
            <>
                <Container
                    className="border-bottom"
                    style={{ marginTop: "8rem" }}
                >
                    <Row>
                        <Col
                            lg={6}
                            md={12}
                            sm={12}
                            style={{ width: "100%", height: "330px" }}
                        >
                            <ResponsiveContainer>
                                <BarChart
                                    width={100}
                                    height={300}
                                    data={this.state.data}
                                >
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={green}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Chart;
