import React, { useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { searchMentors } from "../Services/postRequest";
import { useNavigate } from "react-router-dom";

const SearchMentor = () => {
  const [details, setDetails] = useState({
    domain: "",
    experiance: "",
  });
 const[mentor,setMentor] = useState([]);
  const OnHandleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const navigate = useNavigate();
  const onHandleSubmit = (event) => {
    event.preventDefault();

    console.log(details);
    searchMentors(details).then((res)=>{

        if(res.data.Success){
            setMentor(res.data.Data);
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
                  <strong>Experiance</strong>
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    type="number"
                    value={details.experiance}
                    name="experiance"
                    onChange={OnHandleChange}
                    placeholder="Enter The Experiance for Your Mentor"
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
                    Get Mentors
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container >
          <h3 style={{marginTop:"2%",}}>Mentors - {mentor.length}</h3>
          <Row style={{marginTop:"2%",height:"300px"}}  className="overflow-scroll" >
            
            {mentor.map((ment)=>{
              return(
                   <Col xs={8} md={3}>
                   <div
                     className="dashboardCard bg-c-yellow order-card"
                   >
                     <div className="card-block">
                       <h7 className="m-b-20"><strong>{ment.mentorName}</strong></h7><br></br><br></br>
                       <h6 className="text-right">
                         <span>Domain - {ment.mentorDomain}</span>
                       </h6><br></br>
                       <h6 className="text-right">
                         <span>Experiance - {ment.mentorExperiance}</span>
                       </h6><br></br>
                       <Button variant="primary" onClick={()=>{navigate('/approachToMentor',{state:{mentorName:ment.mentorName,mentorDomain:ment.mentorDomain,mentorExperiance:ment.mentorExperiance}})}} size="sm">Make Mentor</Button>
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

export default SearchMentor;
