import React from "react";
import "../Home/Home.css";

const Home = () => {
  return (
    <>
      <div className="gradient">
        <div className="text-center border-bottom ">
          <p
            className="pt-5 text-warning"
            style={{
              fontWeight: "lighter",
              fontSize: "30px",
            }}
          >
            WELCOME TO E-COMMERCE
          </p>
        </div>

        <div className="text-center pb-5">
          <p
            className="pb-5 mt-5"
            style={{ fontSize: "30px", fontWeight: "lighter", color: "white" }}
          >
            Get beautiful emails and landing pages in just a few clicks
          </p>
          <p className="fw-lighter" style={{ color: "white" }}>
            Our templates include all the elements you need to easily launch a
            professional‑looking campaign in no time.
          </p>
          <button className="btn btn-dark">Sign Up Now</button>
        </div>

        <div className="text-center font-weight-light ">
          <div>
            <p
              className="font-weight-light "
              style={{ marginTop: "100px", color: "white" }}
            >
              E-commerce (electronic commerce) is the buying and selling of
              goods and services, or the transmitting of funds or data, over an
              electronic network, primarily the internet.
              <br /> These business transactions occur either as
              business-to-business (B2B), business-to-consumer (B2C),
              consumer-to-consumer or consumer-to-business.
            </p>
          </div>
          <div className="text-center mt-5 ">
            <img
              src="./Images/Pngtree.png"
              alt="Pngtree"
              style={{ width: "40%" }}
            />
          </div>
        </div>

        <div className="font-weight-light text-center mt-5 pb-5 ">
          <p className="text-warning" style={{ fontSize: "30px" }}>
            More than 100 designs for every moment and message
          </p>
          <p style={{ color: "white" }}>
            Whether you’re selling stuff or just saying hi, our landing page
            <br /> and email templates help you get the job done.
          </p>
        </div>

        <div className="e-commerce-details font-weight-light mt-5 ">
          <ul>
            <li>
              <h3 className="text-info fw-lighter">B2B</h3>
              <h4 className="fw-lighter text-light">Business to Business</h4>
              <p className="fw-lighter text-warning">
                Business sell products or service to businesses, such as through
                an online directory or product website.
              </p>
            </li>
            <li>
              <h3 className="text-info fw-lighter">B2C</h3>
              <h4 className="fw-lighter text-light">Business to Consumer</h4>
              <p className="fw-lighter text-warning">
                Businesses sell products or service to non business customers,
                such as in an online reatils store.
              </p>
            </li>
            <li>
              <h3 className="text-info fw-lighter">C2C</h3>
              <h4 className="fw-lighter text-light">Consumer to Consumer</h4>
              <p className="fw-lighter text-warning">
                Business sell products or service to consumer, such as on ebay
                and Craigsislist.
              </p>
            </li>
            <li>
              <h3 className="text-info fw-lighter">C2B</h3>
              <h4 className="fw-lighter text-light">Consumer to Business</h4>
              <p className="fw-lighter text-warning">
                Consumers sell products or service to businesses. for example,
                google, AdSense and influencer marketing services enable
                bloggers and other web content providers to sell advertising
                space to businesses.
              </p>
            </li>
            <li>
              <h3 className="text-info fw-lighter">B2A</h3>
              <h4 className="fw-lighter text-light">
                Business to Administration
              </h4>
              <p className="fw-lighter text-warning">
                Business conduct transactions with public administration or
                government bodies. such as an ammunation manufacturer selling to
                U.S. Army.
              </p>
            </li>
            <li>
              <h3 className="text-info fw-lighter">C2A</h3>
              <h4 className="fw-lighter text-light">
                Consumer to Administration
              </h4>
              <p className="fw-lighter text-warning">
                Consumers conduct transactions with public administration or
                government bodies. Such, as Filling taxes.
              </p>
            </li>
          </ul>
        </div>

        <div className="text-center" style={{ marginTop: "100px" }}>
          <p className="fs-1 text-warning">Ready to get started?</p>
          <p className="fw-lighter text-light">
            Sign up for a paid plan to access 100+
            <br /> templates, build your own, or purchase a<br /> premium design
            from the Mailchimp
            <br /> Marketplace.
          </p>
          <button className="btn btn-dark">Sign Up</button>
        </div>

        <div className="max text-center mt-5 ">
          <p className="text-warning" style={{ fontSize: "30px" }}>
            Progress-bar
          </p>
        </div>
        <div className="mb-5 mt-5 d-xl-flex p-2">
          <div className="progress mt-2 w-75 ">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated  bg-danger"
              role="progressbar"
              aria-label="Animated striped example Danger"
              aria-valuenow="10"
              aria-valuemin="10"
              aria-valuemax="100"
              style={{ width: "10%" }}
            ></div>
          </div>
          <div className="progress mt-2 w-75">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              aria-label="Animated striped example Warning"
              aria-valuenow="25"
              aria-valuemin="25"
              aria-valuemax="100"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="progress mt-2 w-75">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              aria-label="Animated striped example Info"
              aria-valuenow="50"
              aria-valuemin="50"
              aria-valuemax="100"
              style={{ width: "50%" }}
            ></div>
          </div>
          <div className="progress mt-2 w-75">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-label="Animated striped example Success"
              aria-valuenow="75"
              aria-valuemin="75"
              aria-valuemax="100"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="progress mt-2 w-75">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated "
              role="progressbar"
              aria-label="Animated striped example Default"
              aria-valuenow="100"
              aria-valuemin="100"
              aria-valuemax="100"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
