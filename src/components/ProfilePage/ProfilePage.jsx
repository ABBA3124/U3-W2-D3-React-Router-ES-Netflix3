import React from "react"
import "./ProfilePage.css"
import ImageProfile from "../Navbar/img/kids_icon.png"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function ProfilePage() {
  return (
    <div className="container container2">
      <h1 className="text-white">Edit Profile</h1>
      <hr />
      <div className="d-flex">
        <div>
          <div className="position-relative">
            <img src={ImageProfile} alt="logo kids" height="110" width="110" className="me-2" />
            <a href="1cambio immagine">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="currentColor"
                className="bi bi-pencil-fill border border-black bg-dark text-light position-absolute bottom-0 start-0 rounded-5 p-1 m-1"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-white p-2 stile">Strive Student</p>
          <p className="grigiotesto my-1">Language:</p>
          <div className="dropdown">
            <DropdownButton
              title="English"
              id="bg-nested-dropdown"
              variant="btn btn-black text-white border border-white"
              menuVariant="dark"
            >
              <Dropdown.Item eventKey="1">Italiano</Dropdown.Item>
              <Dropdown.Item eventKey="2">Francese</Dropdown.Item>
              <Dropdown.Item eventKey="3">Olandese</Dropdown.Item>
            </DropdownButton>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="11">
                  Italiano
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="1">
                  Germany
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="1">
                  usa
                </a>
              </li>
            </ul>
          </div>
          <hr className="montalbano" />
          <p className="grigiotesto my-1">Maturity Settings:</p>
          <p className="text-white p-2 stile2">ALL MATURITY RATINGS</p>
          <p className="grigiotesto">Show titles off all maturity ratings dor this profile.</p>
          <button className="grigiotestobottone border border-secondary bg-transparent p-2 w-25 mb-3 hover">
            EDIT
          </button>
          <hr className="montalbano" />
          <p className="grigiotesto my-1">Autoplay controls:</p>
          <div className="form-check d-flex align-items-center">
            <input
              className="customCheckBox form-check-input me-2 rounded-0 bg-black"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="grigiotesto form-check-label" for="defaultCheck1">
              Autoplay next episode in a series on all devices.
            </label>
          </div>
          <div className="form-check d-flex align-items-center">
            <input
              className="customCheckBox form-check-input me-2 rounded-0 bg-black"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="grigiotesto form-check-label" for="defaultCheck1">
              Autoplay previews while browsing on all devices.
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between">
        <button className="me-3 border p-1 fs-5 w-25 hover2">SAVE</button>
        <button className="me-3 grigiotestobottone border border-secondary bg-transparent p-1 fs-5 w-50 hover">
          CANCEL
        </button>
        <button className="me-3 grigiotestobottone border border-secondary bg-transparent p-1 fs-5 w-100 hover">
          DELETE PROFILE
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
