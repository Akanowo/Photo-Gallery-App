import React from "react";

import { connect } from "react-redux";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

import { uploadPhoto } from "../redux/actions";

const Header = () => {
  // eslint-disable-next-line no-undef
  var myCropWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dkn0vfgbg",
      uploadPreset: "photo-gallery",
      maxFileSize: 2097152,
    },
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      if (result.info.secure_url) {
        axios
          .post("/api/upload-image", {
            imageUrl: result.info.secure_url,
          })
          .then((response) => {
            console.log(response.data.post);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return (
    <header className='main-header'>
      <div id='brand'>photo gallery</div>
      <div>
        <input type='file' id='file' name='' accept='image/.jpeg,.jpg,.png' />
        <label
          htmlFor='file'
          onClick={(e) => {
            e.preventDefault();
            myCropWidget.open();
          }}
        >
          <FaUpload />
          &nbsp;&nbsp;&nbsp;Upload
        </label>
      </div>
    </header>
  );
};

export default connect(null, { uploadPhoto })(Header);
