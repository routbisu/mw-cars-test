'use strict'

const app = require('express')()
const path = require('path')
const sharp = require('sharp')
const images = require('./src/images.json')

// const randomInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

app.get('/images', ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images
  return res.status(200).json(i)
})

app.get(/^\/(car-images|avatars)\//, async (req, res) => {
  try {
    // Resize images based on the param: size (used for both width and height)
    const resizeOptions = isNaN(Number(req.query.size))
      ? null
      : {
          width: Number(req.query.size),
          height: Number(req.query.size),
          fit: 'cover',
        }
    const imagePath = path.join(__dirname, `public/${req._parsedUrl.pathname}.jpg`)
    const resizedImage = await sharp(imagePath).resize(resizeOptions).toBuffer()
    res.contentType('image/jpeg')
    res.status(200).end(resizedImage, 'binary')
  } catch (error) {
    res.status(400)
  }
})

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n')
})
