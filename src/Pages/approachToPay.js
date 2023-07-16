import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { approachInvestor, getProblemNames } from "../Services/postRequest";

const ApproachToPay = ()=>{
     const location = useLocation();
     const navigate = useNavigate();
     const{investorName,intrestedDomain,estimationAmount} = location.state;
     const username = sessionStorage.getItem('username')
    const[details,setDetails] = useState({

        domain : intrestedDomain,
        investorName : investorName,
        estimationAmount:estimationAmount,
        solutionProvider : username,
        problemName :''
    })
    
    const[problemNames,setProblemNames] = useState(['SECE','SNS']);
    useEffect(()=>{
        
        const data1 = {
            username : sessionStorage.getItem('username'),
        }
        getProblemNames(data1).then((res)=>{

            if(res.data.Success){

                setProblemNames(res.data.Data);
            }
        })
    },[])

    const OnHandleChange = (event)=>{

        const{name,value} = event.target;

        setDetails({...details,[name]:value});
    }

    const onHandleSubmit = (event)=>{
        
        event.preventDefault();
        console.log(details);

        approachInvestor(details).then((res)=>{

            if(res.data.Success){
                window.alert(res.data.Message);
                navigate('/explore');
            }
            else{
                window.alert(res.data.Message);
            }
        }).catch((err)=>{
            window.alert(err.response.data.Message);
        })
    }
      return(
        <Container>
        <Row style={{marginTop:"4%"}}>
        <Col>
          <Card bg="light">
            <Form style={{ marginTop: "3%" }} onSubmit={onHandleSubmit}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} style={{ textAlign: "center" }}>
                  <strong>Project Name</strong>
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    as="select"
                    value={details.problemName}
                    aria-label="Default select example"
                    name="problemName"
                    onChange={OnHandleChange}
                  >
                    <option>Your Projects</option>
                    {problemNames.map((name)=>{
                        return(
                            <option value={name}>{name}</option>
                        )
                    })}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col style={{marginLeft:"60%"}}>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "1%" }}
                    size="sm"
                  >
                    Approach Investors
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>);
}

export default ApproachToPay;