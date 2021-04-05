import React, { useState } from "react";
import {
  Navbar,
  Table,
  Nav,
  Toast,
  Image,
  ToastHeader,
  ToastBody,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import logoReact from "../staticResources/react.png";
import logoReactBootstrap from "../staticResources/logo_react-bootstrap.png";
import logoGolang from "../staticResources/logo_golang.png";
import picSGM from "../staticResources/picture_small_gm.jpg";
import logoLinkedin from "../staticResources/logo_linkedin_93x21_v2.png";
import "../css/MainStyle.css";
import "../css/About.css";
import "../css/LinkedInButton.css";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="mainBackgroundColor" variant="dark" expand="lg">
        <Navbar.Brand href="/">EarthQuake Map</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ fontWeight: 500 }} href="/">
              Go back to Map
            </Nav.Link>
            <Nav.Link
              style={{ fontWeight: 500 }}
              href="https://earthquake.usgs.gov"
            >
              Data Provider
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{ marginLeft: "25px", marginTop: "35px", marginBottom: "35px" }}
      >
        <h1 style={{ fontWeight: "200", fontSize: "28px" }}>
          Information about the EarthQuake Map
        </h1>
        <div
          className="mainBackgroundColor split-bar"
          style={{ borderRadius: "5px", height: "7px" }}
        ></div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "18px",
            marginTop: "25px",
            marginRight: "25px",
            marginBottom: "40px",
          }}
        >
          The main functionality of this map is to show earthquakes. The map
          shows earthquakes that have magnitude more than 2.5. The list is a 20
          of latest earthquakes that happend. The markers on map has circles.
          The color and radius of circle changes depends on magnitude. On the
          left side you should se more information about earthquakes or by
          clicking on the Marker on the map.
        </div>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              marginRight: "25px",
            }}
          >
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{ minWidth: "250px", maxWidth: "350px" }}
            >
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Magnitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ background: "#ff0d00" }} />
                  <td>more than 9</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff1a00" }} />
                  <td>8.5 to 9</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff2600" }} />
                  <td>8 to 8.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff3300" }} />
                  <td>7.5 to 8</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff4000" }} />
                  <td>7 to 7.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff4c00" }} />
                  <td>6.5 to 7</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff5900" }} />
                  <td>6 to 6.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff6600" }} />
                  <td>5.5 to 6</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff7300" }} />
                  <td>5 to 5.5</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div
            style={{
              display: "inline-block",
              marginRight: "25px",
            }}
          >
            <Table
              striped
              bordered
              hover
              size="sm"
              style={{ minWidth: "250px", maxWidth: "350px" }}
            >
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Magnitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ background: "#ff8000" }} />
                  <td>4.5 to 5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ff8c00" }} />
                  <td>4 to 4.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffa600" }} />
                  <td>3.5 to 4</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffb200" }} />
                  <td>3 to 3.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffbf00" }} />
                  <td>2.5 to 3</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffcc00" }} />
                  <td>2 to 2.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffd900" }} />
                  <td>1.5 to 2</td>
                </tr>
                <tr>
                  <td style={{ background: "#ffe600" }} />
                  <td>1 to 1.5</td>
                </tr>
                <tr>
                  <td style={{ background: "#fff200" }} />
                  <td>0 to 1</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <h1 style={{ fontWeight: "200", fontSize: "28px" }}>
          Services and Technologies
        </h1>
        <div
          className="mainBackgroundColor split-bar"
          style={{ borderRadius: "5px", height: "7px" }}
        ></div>
        <div
          style={{
            fontWeight: "400",
            fontSize: "18px",
            marginTop: "25px",
            marginRight: "25px",
            marginBottom: "25px",
          }}
        >
          This website was made usning{" "}
          <span style={{ fontWeight: 600 }}>React</span>{" "}
          <img
            src={logoReact}
            alt="LogoReact"
            style={{ width: "30px", height: "30px" }}
          />
          . Most of styling is made from scratch, but its also using{" "}
          <span style={{ fontWeight: 600 }}>ReactBootstrap</span>{" "}
          <img
            src={logoReactBootstrap}
            alt="logoReactBootstrap"
            style={{ width: "30px", height: "30px" }}
          />{" "}
          for styling some parts. <br /> All backend was build using{" "}
          <span style={{ fontWeight: 600, color: "orange" }}>AWS</span>{" "}
          services. The data stored on{" "}
          <span style={{ fontWeight: 600, color: "#245ba9" }}>DynamoDB</span> .
          All functionality has been handled by{" "}
          <span style={{ fontWeight: 600, color: "orange" }}>AWS Lambdas</span>{" "}
          .
          <br />
          Lambdas have been developed with{" "}
          <span style={{ fontWeight: 600, color: "#69d7e2" }}>Golang</span>
          <img
            src={logoGolang}
            alt="logoGolang"
            style={{ width: "30px", height: "40px" }}
          />
          <div style={{ height: "20px" }} />
          Data source provider is <span style={{ fontWeight: 600 }}>
            USGS
          </span>{" "}
          (scinece for a changing world)
          <br />
          This source provides latest information about the earthquakes. It also
          has other data to provide. <br />
          You can take a look by navigating to link below.
        </div>
        <a href="https://earthquake.usgs.gov/" style={{ fontWeight: 700 }}>
          Visit https://earthquake.usgs.gov!
        </a>
      </div>

      <div
        className="p-3 my-2 rounded mainBackgroundColor"
        style={{ margin: "5px", textAlign: "center" }}
      >
        <div
          style={{
            display: "inline-block",
            width: "250px",
            marginRight: "25px",
            marginBottom: "20px",
          }}
        >
          <Toast>
            <ToastHeader closeButton={false}>About Website</ToastHeader>
            <ToastBody>
              This website is not a commercial product.
              <br />
              <div style={{ height: "37px" }} />
              It's have been made to provied information for free.
            </ToastBody>
          </Toast>
        </div>
        <div
          style={{
            display: "inline-block",
            width: "250px",
            marginRight: "25px",
            marginBottom: "20px",
          }}
        >
          <Toast>
            <ToastHeader closeButton={false}>Developer Information</ToastHeader>
            <ToastBody>
              My name is Gurgen Meliksetyants
              <br />
              I am a Full Stack Devoper.
              <div style={{ height: "37px" }} />
              Main Programming languages:
              <br /> C#, JavaScript, Golang, APEX.
            </ToastBody>
          </Toast>
        </div>
        {/* <div
          style={{
            marginTop: "2px",
            marginRight: "25px",
            display: "inline-block",
            backgroundColor: "white",
            verticalAlign: "top",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="small"
            data-locale="en_US"
            data-type="horizontal"
            data-theme="light"
            data-vanity="gurgen-meliksetyants-00aa71167"
          >
            <a
              className="LI-simple-link"
              href="https://www.linkedin.com/in/gurgen-meliksetyants-00aa71167?trk=profile-badge"
            >
              Gurgen Meliksetyants
            </a>
          </div>
        </div> */}
        <div
          style={{
            width: "250px",
            height: "175px",
            marginTop: "2px",
            marginRight: "25px",
            display: "inline-block",
            backgroundColor: "white",
            verticalAlign: "top",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <Image
                style={{
                  width: "70px",
                  height: "70px",
                  marginLeft: "15px",
                  marginTop: "25px",
                }}
                src={picSGM}
                roundedCircle
              />
            </div>
            <div style={{ marginTop: "20px", marginLeft: "20px" }}>
              <h5 style={{ color: "#434649" }}>
                Gurgen
                <br />
                Meliksetyants
              </h5>
              <div
                style={{
                  display: "block",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "normal",
                }}
              >
                Software Engineer at Retirement Insider
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a
              className="li-button"
              href="https://www.linkedin.com/in/gurgen-meliksetyants-00aa71167"
            >
              View profile
            </a>
            <img style={{ marginLeft: "30px" }} src={logoLinkedin} />
          </div>
        </div>
        {/* <div  class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="gurgen-meliksetyants-00aa71167"><a class="LI-simple-link" href='https://www.linkedin.com/in/gurgen-meliksetyants-00aa71167?trk=profile-badge'>Gurgen Meliksetyants</a></div> */}
      </div>
    </div>
  );
}
