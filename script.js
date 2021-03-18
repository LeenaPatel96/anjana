// script for paricals background

var options = { "particles": { "number": { "value": 1000, "density": { "enable": true, "value_area": 552.4033491425909 } }, "color": { "value": "#0570a4" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 70, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 2, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.5782952832645452, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false };
particlesJS("particle", options);



// script for product detalis img carousel and discription 

/* user defined variables */
var timeOnSlide = 3,
  // the time each image will remain static on the screen, measured in seconds
  timeBetweenSlides = 1,
  // the time taken to transition between images, measured in seconds

  // test if the browser supports animation, and if it needs a vendor prefix to do so
  animationstring = 'animation',
  animation = false,
  keyframeprefix = '',
  domPrefixes = 'Webkit Moz O Khtml'.split(' '),
  // array of possible vendor prefixes
  pfx = '',
  slidy = document.getElementById("slidy");
if (slidy?.style.animationName !== undefined) { animation = true; }
// browser supports keyframe animation w/o prefixes

if (animation === false) {
  for (var i = 0; i < domPrefixes.length; i++) {
    if (slidy?.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
      pfx = domPrefixes[i];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}

if (animation === false) {
  // animate in JavaScript fallback
} else {
  var images = slidy.getElementsByTagName("img"),
    firstImg = images[0],
    // get the first image inside the "slidy" element.
    imgWrap = firstImg.cloneNode(false);  // copy it.
  slidy.appendChild(imgWrap); // add the clone to the end of the images
  var imgCount = images.length, // count the number of images in the slide, including the new cloned element
    totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
    slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
    moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
    basePercentage = 100 / imgCount, // work out how wide each image should be in the slidy, as a percentage.
    position = 0, // set the initial position of the slidy element
    css = document.createElement("style"); // start marking a new style sheet
  css.type = "text/css";
  css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
  css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
  css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
  for (i = 0; i < (imgCount - 1); i++) { // 
    position += slideRatio; // make the keyframe the position of the image
    css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n";
    position += moveRatio; // make the postion for the _next_ slide
    css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n";
  }
  css.innerHTML += "}\n";
  css.innerHTML += "#slidy { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slidy infinite; }\n"; // call on the completed keyframe animation sequence
  document.body.appendChild(css); // add the new stylesheet to the end of the document
}

// script for animation on scroll

AOS.init({
  duration: 1000
});