// import React, {useState, useEffect} from 'react'
// import Axios from 'axios'
// import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

// export default function RowComponents({title}) {

//     const [datalist, setDatalist] = useState([])
//     const [countrylist, setCountrylist] = useState(["india"])

//     const fetchDetails = async () => {
//         const {data} = await Axios.get(`https://covid19.mathdro.id/api/countries/${title}`)
//         const {adata} = await Axios.get("https://covid19.mathdro.id/api/")
//         console.log("country",data);
//         console.log("world",adata);
   

//     setDatalist([{...data},{...adata}])
//     }

//     useEffect( () => 
//     {
//         fetchDetails();
//     }, []);

//    // const result = ((details.confirmed?.value)+(details.recovered?.value)+(details.deaths?.value));
//     console.log("Datalist",datalist)

//     return (
//         <div>
//             <Container>
//                 {
//                     datalist.map((details)=>
//                     <Row>
//                     <Col className='mt-4 p-2'>
//                          {/*Nested Card */}
//                         <Card>
//                             <CardBody>
//                                 <CardTitle>{title}</CardTitle>

//                                 <Row>
//                                     {/* Card for Active cases */}
//                                     <Col>
//                                         <Card className="text-center" outline color="info">
//                                             <CardTitle>Active</CardTitle>
//                                             <CardText>{details.confirmed?.value}</CardText>
//                                         </Card>
//                                     </Col>

//                                     {/* Card for Recovered cases */}
//                                     <Col>
//                                         <Card className="text-center" outline color="success">
//                                             <CardTitle>Recovered</CardTitle>
//                                             <CardText>{details.recovered?.value}</CardText>
//                                         </Card>
//                                     </Col>

//                                     {/* Card for Deceased cases */}
//                                     <Col>
//                                         <Card className="text-center" outline color="danger">
//                                             <CardTitle>Deceased</CardTitle>
//                                             <CardText>{details.deaths?.value}</CardText>
//                                         </Card>
//                                     </Col>

//                                     {/* Card for Total cases */}
//                                     <Col>
//                                         <Card className="text-center" outline color="secondary">
//                                             <CardTitle>Total</CardTitle>
//                                             <CardText></CardText>
//                                         </Card>
//                                     </Col>

//                                 </Row>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//                      )
//                 }
//             </Container>
//         </div>
//     )
// }
