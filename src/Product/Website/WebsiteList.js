import React from "react";
import { Link } from "react-router-dom";
const WebsiteList = ({ articles }) => (
  <div className="row uk-animation-toggle uk-animation-slide-bottom">
    <Link to="/webapp" className="btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        className="bi bi-arrow-left-circle"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
        />
      </svg>{" "}
      Back
    </Link>
    <div className="p-3 p-md-5 col-12 col-md-12 text-center">
      <h1>
        <strong>Website Design</strong>
      </h1>
      <hr className="uk-divider-icon" />
      <p>Layanan pembuatan website terbaru</p>
    </div>
    <div className="container">
      <div className="row">
        {articles.map((article, key) => (
          <Link
            key={key}
            to={`/pembuatanwebsite/${article.name}`}
            className="border border-white btn btn-outline-dark col-6 col-md-4 text-center rounded"
          >
            <img
              key={article.img}
              className="img-fluid"
              alt="pembuatan website"
              src={article.img}
            />
            <p>
              <strong>
                <small>{article.name}</small>
              </strong>
            </p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default WebsiteList;
