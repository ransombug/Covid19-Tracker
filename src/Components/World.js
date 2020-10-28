import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../App.css'
export default function World( {title} ) 
{
    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
        const {data} = await Axios.get("https://covid19.mathdro.id/api/")
        console.log(data);

       const details = data;
   //  console.log("Details : ",details);

      setDetails(details);
     }
    useEffect( () => {
        fetchDetails();
    }, []);

    const result = ((details.confirmed?.value)+(details.recovered?.value)+(details.deaths?.value));

   return (
        <div>
            <Container >
                <Row>
                    <Col className='mt-4 p-2'>
                        {/*Nested Card */}
                        <Card >
                            <CardBody>
                                <CardTitle>{title}</CardTitle>

                                <Row>
                                    {/* Card for Active cases */}
                                    <Col>
                                        <Card  id="cardbody" className="text-black text-center mb-4" outline color="info">
                                            <CardTitle>Active</CardTitle>
                                            <CardText>{details.confirmed?.value}</CardText>
                                        </Card>
                                    </Col>

                                    {/* Card for Recovered cases */}
                                    <Col>
                                        <Card id="cardbody" className="text-black text-center" outline color="success">
                                            <CardTitle>Recovered</CardTitle>
                                            <CardText>{details.recovered?.value}</CardText>
                                        </Card>
                                    </Col>

                                    {/* Card for Deceased cases */}
                                    <Col>
                                        <Card id="cardbody" className="text-black text-center" outline color="danger">
                                            <CardTitle>Deceased</CardTitle>
                                            <CardText>{details.deaths?.value}</CardText>
                                        </Card>
                                    </Col>

                                    {/* Card for Total cases */}
                                    <Col>
                                        <Card id="cardbody" className="text-black text-center" outline color="secondary">
                                            <CardTitle>Total</CardTitle>
                                            <CardText>{result}</CardText>
                                        </Card>
                                    </Col>

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    

}
