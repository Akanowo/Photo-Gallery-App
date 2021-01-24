import axios from "axios";
import {
  FETCH_PHOTOS,
  FETCH_ERROR,
  UPLOAD_PHOTO,
  UPLOAD_ERROR,
} from "../../utils/constants";

export const fetchPhotos = () => (dispatch) => {
  axios
    .get(`/api/all-images`)
    .then((response) => {
      dispatch({ type: FETCH_PHOTOS, payload: response.data.images });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ERROR, payload: null });
    });
};

export const uploadPhoto = (url) => (dispatch) => {
  axios
    .post("/api/upload-image", {
      imageUrl: url,
    })
    .then((response) =>
      dispatch({
        type: UPLOAD_PHOTO,
        payload: response.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPLOAD_ERROR,
        payload: err.response.data,
      })
    );
};
