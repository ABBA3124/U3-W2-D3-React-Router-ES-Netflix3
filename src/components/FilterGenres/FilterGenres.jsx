import "./FilterGenres.css"
import React from "react"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function FilterGenres() {
  return (
    <div className="d-flex justify-content-between align-items-center ms-2 me-5">
      <div className="d-flex align-items-center">
        <div>
          <h1 className="text-white fs-2">Tv Shows</h1>
        </div>
        <div className="ms-3">
          <DropdownButton title="Genres" id="bg-nested-dropdown" variant="btn btn-black text-white border border-white" menuVariant="dark">
            <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
            <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
            <Dropdown.Item eventKey="3">Triller</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="d-flex">
        <div className="fs-4">
          <i className="bi bi-grid icons text-white"></i>
        </div>
        <div className="ms-3 fs-4">
          <i className="bi bi-grid-3x3 icons text-white"></i>
        </div>
      </div>
    </div>
  )
}

export default FilterGenres
