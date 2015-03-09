options = {
  src: "img/new-cloud.png", // path to image, the default is a base64 (you can see the actual string in sources)
  maxWidth: 300, // max image's width
  maxHeight: 200, // max image's height
  minClouds: 1, // minimum amount of clouds
  maxClouds: 10, // maximum amount of clouds
  skyHeight: null, // height of the container element
  wind: true // animate clouds, default is false
};

$('body').jQlouds(options);