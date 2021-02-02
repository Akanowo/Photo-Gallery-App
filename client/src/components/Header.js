import React from "react";

import { connect } from "react-redux";
import { FaUpload } from "react-icons/fa";
import axios from "axios";

import { uploadPhoto } from "../redux/actions";
import Swal from 'sweetalert2';

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
            Swal.fire({
              toast: true,
              text: 'Image Uploaded successfully'
            }).then((result) => {
              if(result.isConfirmed) {
                window.location.reload();
              }
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              toast: true,
              text: 'Image Uploaded successfully'
            }).then((result) => {
              if(result.isConfirmed) {
                window.location.reload();
              }
            });
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
