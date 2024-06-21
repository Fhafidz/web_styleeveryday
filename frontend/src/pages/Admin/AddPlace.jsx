import React from "react";
import { Link } from "react-router-dom";
import "../../css/addproduct.css";
import Navbar3_Components from "../../components/Navbar3_Components";
import SidebarAdmin_Components from "../../components/SidebarAdmin_Components";

const AddPlace = () => {
  return (
    <div className="container">
      <Navbar3_Components />

      <div className="add-product">
        <div className="side">
          <SidebarAdmin_Components />
        </div>
        <div className="content">
          <h1>Add New Place</h1>
          <form>
            <label>
              Place Title
              <input type="text" name="name" />
            </label>
            <label>
              Category
              <input type="text" name="category" />
            </label>
            <label>
              Place Description
              <input type="text" name="description" />
            </label>
            <label>
              Upload Image
              <input type="file" name="image" />
            </label>
            <div className="button-group">
              <button type="submit">Save</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
