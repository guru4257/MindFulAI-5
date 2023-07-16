import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { searchSolvers } from "../Services/postRequest";

const SearchProblemSolution = () => {
  const [details, setDetails] = useState({
    domain: "",
    expectedAmount: "",
  });
 const[investor,setInvestor] = useState([]);
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };
 
  const[solver,setSolver] = useState([]);
  const onHandleSubmit = (event) => {
    event.preventDefault();

    console.log(details);
    searchSolvers(details).then((res)=>{

        if(res.data.Success){
            setSolver(res.data.Data);
        }else{

            window.alert(res.data.Message);
        }
    }).catch((err)=>{

        window.alert(err.response.data.Message);
    })
  };
  return (
    <>
    <Container>
      <Row style={{marginTop:"4%"}}>
        <Col>
          <Card bg="light">
            <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} style={{ textAlign: "center" }}>
                  <strong>Domain</strong>
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    as="select"
                    value={details.domain}
                    aria-label="Default select example"
                    name="domain"
                    onChange={OnHandleChange}
                  >
                    <option>Domains</option>
                    <option value="Healthcare">Health Care</option>
                    <option value="WebDevelopment">Web Development</option>
                    <option value="MobileAppDevelopment">
                      Mobile App Development
                    </option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} style={{ textAlign: "center" }}>
                  <strong>Problem Estimated Cost</strong>
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="number"
                    value={details.expectedAmount}
                    name="expectedAmount"
                    onChange={OnHandleChange}
                    placeholder="Enter The Estimated Cost of Your Idea"
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col style={{marginLeft:"60%"}}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "1%" }}
                  >
                    Get Idea's
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
          <h3 style={{marginTop:"2%",}}>Solution Providers - {solver.length}</h3>
          <Row style={{marginTop:"2%",height:"600px"}}  className="overflow-scroll" > 
            {solver.map((sol)=>{
              return(
                <Col xs={8} md={3}>
                   <div
                     className="dashboardCard bg-c-blue order-card scroll"
                   >
                     <div className="card-block">
                       <h7 className="m-b-20"><strong>{sol.solutionProvider}</strong></h7><br></br><br></br>
                       <h6 className="text-right">
                         <span>Domain - {sol.problemDomain}</span>
                       </h6><br></br>
                       <h6 className="text-right">
                         <span>Problem - {sol.problemProblem}</span>
                       </h6><br></br>
                       <h6 className="text-right">
                         <span>Estimation - {sol.problemEstimatedCost}</span>
                       </h6><br></br>
                       {sessionStorage.getItem('userType')==='Investor' ? (
                             <Button variant="success" size="sm">Ready to Pay</Button>
                       ):(
                        <Button variant="success" size="sm">To Connect</Button>
                       )}
                     </div>
                   </div>
                 </Col>
              );
            })}
           
          </Row>
          </Container>
     </>
  );
};

export default SearchProblemSolution;
