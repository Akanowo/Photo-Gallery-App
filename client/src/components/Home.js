import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchPhotos } from "../redux/actions";

class Home extends Component {
  renderPhotos() {
    const { photos } = this.props;
    return photos.map((image) => {
      return (
        <div className='masonry-brick' key={image._id}>
          <img src={image.imageUrl} alt={image.imageUrl} />
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
