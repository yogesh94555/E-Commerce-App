import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          Yogesh &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-dark" style={{ textDecoration: "none" }}>
            yogesh94555@gmail.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
