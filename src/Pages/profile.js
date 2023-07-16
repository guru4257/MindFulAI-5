import React from "react";
import "../profile.css";

const Profile = () => {
  return (
    <>
      <div className="body">
        <div className="cardPro">
          <div className="img-bx">
            <img src="user.png" alt="img" />
          </div>
          <div className="content">
            <div className="detail">
              <h2>
                {sessionStorage.getItem("username")}
                <br />
                <span>{sessionStorage.getItem("userType")}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <Container style={{ marginTop: "4%" }}>
        <Row>
            <Col xs={8} md={3}>
              <div
                className="dashboardCard bg-c-green order-card"
                onClick={() => navigate("/addPlacedStudents")}
              >
                <div className="card-block">
                  <h6 className="m-b-20">My Details</h6>
                  <h2 className="text-right">
                    <i className="fa fa-cart-plus f-left"></i>
                  </h2>
                </div>
              </div>
            </Col>
          <Col xs={8} md={3}>
            <div
              className="dashboardCard bg-c-yellow order-card"
              onClick={() => navigate("/showStudents")}
            >
              <div className="card-block">
                <h6 className="m-b-20">STUDENTS</h6>
                <h2 className="text-right">
                  <i className="fa fa-cart-plus f-left"></i>
                  <span>{count.studentCount}</span>
                </h2>
              </div>
            </div>
          </Col>
          {isAdmin() && (
            <Col xs={8} md={3}>
              <div
                className="dashboardCard bg-c-green order-card"
                onClick={() => navigate("/showFaculties")}
              >
                <div className="card-block">
                  <h6 className="m-b-20">FACULTY</h6>
                  <h2 className="text-right">
                    <i className="fa fa-cart-plus f-left"></i>
                    <span>{count.facultyCount}</span>
                  </h2>
                </div>
              </div>
            </Col>
          )}

          <Col xs={8} md={3}>
            <div
              className="dashboardCard bg-c-pink order-card"
              onClick={() => navigate("/showPipelinedCompanies")}
            >
              <div className="card-block">
                <h6 className="m-b-20">PIPELINED COMPANIES</h6>
                <h2 className="text-right">
                  <i className="fa fa-cart-plus f-left"></i>
                  <span>{count.piplinedCompaniesCount}</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col xs={8} md={3}>
            <div
              className="dashboardCard bg-c-yellow order-card"
              onClick={() => navigate("/showCompletedCompanies")}
            >
              <div className="card-block">
                <h6 className="m-b-20">COMPLETED COMPANIES</h6>
                <h2 className="text-right">
                  <i className="fa fa-cart-plus f-left"></i>
                  <span>{count.completedCompaniesCount}</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Profile;
