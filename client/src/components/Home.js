import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchPhotos } from "../redux/actions";

import Swal from 'sweetalert2';

class Home extends Component {

  showImageModal(src) {
    return Swal.fire({
      imageUrl: src,
      imageWidth: '100%',
      imageHeight: '100%',
      showConfirmButton: false,
      padding: '0px',
    });
  }


  renderPhotos() {
    const { photos } = this.props;
    return photos.map((image) => {
      return (
        <div className='masonry-brick' key={image._id}>
          <img src={image.imageUrl} alt={image.imageUrl} onClick={(e) => this.showImageModal(e.target.getAttribute('src'))} />
        </div>
      );
    });
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return <main className='masonry-container'>{this.renderPhotos()}</main>;
  }
}

const mapStateToProps = (state) => {
  console.log("From map state to props: ", state.photos);
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps, { fetchPhotos })(Home);
