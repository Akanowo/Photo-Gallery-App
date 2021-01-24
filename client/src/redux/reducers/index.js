import { FETCH_PHOTOS, UPLOAD_PHOTO } from "../../utils/constants";

const initialState = {
  photos: [],
};

const photoGalleryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === FETCH_PHOTOS) {
    return { ...state, photos: payload };
  } else if (type === UPLOAD_PHOTO) {
    return { ...state, photos: [...state.photos, payload] };
  } else {
    return state;
  }
};

export default photoGalleryReducer;
