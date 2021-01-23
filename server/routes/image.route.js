const { Router } = require('express');
const { Photo } = require('../models/photo.model');

const router = Router();

const routes = () => {

  router.route('/')
    .get((req, res) => {
      res.send('You have reached the api endpoint');
    });

  router.route('/all-images')
    .get(async (req, res) => {
      try {
        const images = await Photo.find();
        return res.status(200).json({
          status: 'success',
          message: 'Image fetched successfully',
          images
        });
      } catch (error) {
        return res.status(422).json({
          status: 'failed',
          error
        });
      }
    });

  router.route('/upload-image')
    .post(async (req, res) => {
      const { imageUrl } = req.body;
      if(!imageUrl) {
        return res.status(400).json({
          status: 'failed',
          error: 'Image url not found',
          tip: 'Send the image url using \'imageUrl: url\' as the post format'
        });
      }

      try {
        const newImage = await Photo.create({imageUrl});
        return res.status(200).json({
          status: 'success',
          post: 'Image saved successfully',
          image: newImage
        });
      } catch (error) {
        return res.status(422).json({
          status: 'failed',
          error
        });
      }
    });

  return router;
};

module.exports = routes;