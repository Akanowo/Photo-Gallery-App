// Declarations
const { Router } = require('express');
const { Photo } = require('../models/photo.model');

const router = Router();

const routes = () => {

  // Get API home route
  router.route('/')
    .get((req, res) => {
      res.send('You have reached the api endpoint');
    });

  // Get all images route 
  router.route('/all-images')
    .get(async (req, res) => { // async function to handle promises
      try { // try and catch to handle errors
        // Fetch images from mongoDB
        const images = await Photo.find();
        // return success response and images
        return res.status(200).json({
          status: 'success',
          message: 'Image fetched successfully',
          images
        });
      } catch (error) { // catch errors
        // Send error and error response
        return res.status(422).json({
          status: 'failed',
          error
        });
      }
    });

  // Upload image route
  router.route('/upload-image')
    .post(async (req, res) => {
      // Get image url from request body
      const { imageUrl } = req.body;
      // Validate if url exists
      if(!imageUrl) {
        // Send error message
        return res.status(400).json({
          status: 'failed',
          error: 'Image url not found',
          tip: 'Send the image url using \'imageUrl: url\' as the post format'
        });
      }

      try {
        // Create and store new Image in mongoDB
        const newImage = await Photo.create({imageUrl});
        // Send success response and image data
        return res.status(200).json({
          status: 'success',
          post: 'Image saved successfully',
          image: newImage
        });
      } catch (error) {
        // Catch and send errors if any
        return res.status(422).json({
          status: 'failed',
          error
        });
      }
    });

  return router; //return image router
};

// Export routes
module.exports = routes;