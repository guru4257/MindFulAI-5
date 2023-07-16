import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../home.css";
import { getCounts } from "../Services/getRequest";

const Home = () => {


    const[counts,setCounts] = useState({
        inventors:0,
        mentors:0,
        problemSolver:0,
        Total :0
    })
    
    useEffect(()=>{

         getCounts().then((res)=>{
            if(res.data.Success){
                setCounts({
                    inventors:res.data.inventors,
                    mentors:res.data.mentors,
                    problemSolver:res.data.problemSolver,
                    Total:res.data.Total
                })
            }
         })
    },[])
    const[inventorsCount,setInventorsCount] = useState(0);
    const[mentorsCount,setMentorsCount] = useState(0);
    const[problemSolverCount,setProblemSolverCount] = useState(0);
    const[totalCount,setTotalCount] = useState(0);


    useEffect(()=>{
  
        setTimeout(()=>{
          if(inventorsCount<counts.inventors)
          setInventorsCount(inventorsCount+1)
        },1000)
      },[inventorsCount,counts])
    
      useEffect(()=>{
        setTimeout(()=>{
          if(mentorsCount<counts.mentors)
          setMentorsCount(mentorsCount+1)
        },1000)
      },[mentorsCount,counts])
    
      useEffect(()=>{
        setTimeout(()=>{
          if(problemSolverCount<counts.problemSolver)
          setProblemSolverCount(problemSolverCount+1)
        },1000)
      },[problemSolverCount,counts])
    
      useEffect(()=>{
        setTimeout(()=>{
          if(totalCount<counts.Total)
          setTotalCount(totalCount+1)
        },1000)
      },[totalCount,counts])
  return (
     <>
      <Container fluid>
         <Row as={Container} style={{backgroundColor:"#47D2CC",marginTop:"4%",borderBottomRightRadius:"50px"}} fluid>
           {/* <div className="giffContainer">
                <img src="homeGif3.gif" className="giffImg" alt="GIFF"></img>
            <div className="top-right">
              <h4 style={{ color: "" }}>
                <strong>World Class Education</strong>
              </h4>
            </div>
        <div className="centered">
            <div style={{ marginTop: "4%" }}>
              <h1
                style={{
                  color: "#3796DF",
                  fontSize: "43px",
                  fontFamily: "inherit",
                  fontWeight: "800",
                  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <strong>
                  Welcome to ________ Make Use of it
                </strong>
              </h1>
            </div>

                </div>
                <div className="bottom-right"><h4
                style={{
                  color: "#3796DF",
                  fontSize: "43px",
                  fontFamily: "inherit",
                  fontWeight: "800",
                  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <strong>
                Stay Connected
                </strong>
              </h4></div>
            </div>
            */}
            
            
            
          <Col style={{marginLeft:"4%",marginTop:"4%"}} sm={5}>
            <div style={{borderBottomRightRadius:"50px"}}>
            <div>
              <h4 style={{ color: "white" }}>
                <strong>World Class Connection</strong>
              </h4>
            </div>
            <div style={{ marginTop: "4%" }}>
              <h1
                style={{
                  color: "white",
                  fontSize: "43px",
                  fontFamily: "inherit",
                  fontWeight: "800",
                  textShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <strong>
                  World’s Top Corporate Minds on<br></br> Idea's Inventory{" "}
                </strong>
              </h1>
            </div>
            </div>
          </Col>
          <Col sm={6} style={{textAlign:"left"}}>
            <img src="connect.gif" alt="giff"></img>
          </Col>
        </Row>
    </Container>
        <Container fluid>
          <Row>
            <section id="counter" className="sec-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 ">
                    <div className="count">
                      {" "}
                      <span className="fa fa-smile-o"></span>
                      <p className="number">{mentorsCount}+</p>
                      <h4>Mentors</h4>{" "}
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="count">
                      {" "}
                      <span className="fa fa-smile-o"></span>
                      <p className="number">{inventorsCount}+</p>
                      <h4>Investors</h4>{" "}
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="count">
                      {" "}
                      <span className="fa fa-smile-o"></span>
                      <p className="number">{problemSolverCount}+</p>
                      <h4>Problem Solvers</h4>{" "}
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="count">
                      {" "}
                      <span className="fa fa-smile-o"></span>
                      <p className="number">{totalCount}+</p>
                      <h4>Total</h4>{" "}
                    </div>
                  </div>
                </div>
                <Row style={{ marginTop: "2%" }}>
                  <p className="number">OUR USERS</p>
                </Row>
              </div>
            </section>
          </Row>
        </Container>
        <Container  style={{marginTop:"3%"}}fluid>
        <div className="row1-container">
    <div className="box box-down cyan">
      <h2>Investors</h2>
      <p>Monitors activity to identify project roadblocks</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
    </div>

    <div className="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/> */}
    </div>

    <div className="box box-down blue">
      <h2>Mentors</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/> */}
    </div>
  </div>
  <div className="row2-container">
    <div className="box orange">
      <h2>Solution Providers</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/> */}
    </div>
  </div>
        </Container>
      </>
  );
};

export default Home;
