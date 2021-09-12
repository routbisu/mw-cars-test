# UI Test

This is a UI test to display a set of vehicle images in the best possible way.

## Set up

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`.

## Modifications done

- Added a npm package in the node server called: `sharp` that is used to process images.
- Sharp allows you to resize and add filters on images.
- The endpoint has been tweaked to allow passing the required resize value and filter type (effect) via query params.
- To speed up the server, I removed the setTimeout in the express api call, so now you get responses almost instantaneously.
- By resizing images, the browser performs a lot faster in rendering the images and hence there is huge improvement in the load time of the files.
