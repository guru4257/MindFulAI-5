import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import "../App.css"
import { useNavigate } from "react-router-dom";
import { getDetail } from "../Services/getRequest";

const Explore = ()=>{
    
    const[solver,setSolver] = useState([{
    solutionProvider: "GURU",
    problemDomain: "WEB APP",
    problemEstimatedCost: "150000",
    problemDuration: "1",
    problemProblem: "Note: If you set two values, the first one is for the top border, and the second one for the right border. If the second value is omitted, it is copied from the first. If either length is zero, the corner is square, not rounded.",
    employeeRequirment: "4",
    completedPercentage: "",
    status: "",
    Investor: "",
    Mentor: "",
    }]);
  
    const navigate = useNavigate();
    const[investors,setInvestors] = useState([{
        investorName:"sanjai",
        intrestedDomain:"Web Application",
        estimationAmount:'100000'

    }]);

    const[mentor,setMentor] = useState([{
        mentorName:"Prakash",
        mentorDomain:"AIML",
        mentorExperiance:"19"
    }]);
   
    useEffect(()=>{

        getDetail().then((res)=>{
            if(res.data.Success){

                setInvestors(res.data.Investors);
                setMentor(res.data.Mentors);
                setSolver(res.data.ProblemSolvers);
            }
            else{
                window.alert(res.data.Message);
            }
        }).catch((err)=>{
            window.alert(err.response.data.Message);
        })
    },[])


    return(
        <>
        <Container className="scroll">
          <h3 style={{marginTop:"2%",}}>Investors - {investors.length}</h3>
          <Button variant="outline-primary" size="sm" onClick={()=>navigate('/searchInvestor')} style={{marginLeft:"85%"}}>SEARCH</Button>
          <Row style={{marginTop:"2%",height:"300px"}}  className="overflow-scroll" >
            
            {investors.map((investor)=>{
              return(
                   <Col xs={8} md={3}>
                   <div
                     className="dashboardCard bg-c-yellow order-card"
                   >
                     <div className="card-block">
                       <h7 className="m-b-20"><strong>{investor.investorName}</strong></h7><br></br><br></br>
                       <h6 className="text-right">
                         <span>Domain - {investor.intrestedDomain}</span>
                       </h6><br></br>
                       <h6 className="text-right">
                         <spn>Offers - {investor.estimationAmount}</spn>
                       </h6><br></br>
                       <Button variant="primary" onClick={()=>{navigate('/approachToPay',{state:{investorName:investor.investorName,intrestedDomain:investor.intrestedDomain,estimationAmount:investor.estimationAmount}})}} size="sm">Approach for Pay</Button>
                     </div>
                   </div>
                 </Col>
              );
            })}
           
          </Row>
          </Container>
          <Container className="scroll">
          <h3 style={{marginTop:"2%",}}>Solution Providers - {solver.length}</h3>
          <Button variant="outline-primary" size="sm" onClick={()=>navigate('/searchProblemSolutions')} style={{marginLeft:"85%"}}>SEARCH</Button>
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
          <Container className="scroll">
          <h3 style={{marginTop:"2%",}}>Mentors - {mentor.length}</h3>
          <Button variant="outline-primary" onClick={()=>navigate('/serachMentors')} size="sm" style={{marginLeft:"85%"}}>SEARCH</Button>
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
}

export default Explore;