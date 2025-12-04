// script.js
const images = [
  "images/6 (1).jpg",
  "images/6 (2).jpg",
  "images/6 (3).jpg",
  "images/6 (4).jpg",
  "images/6 (5).jpg",
  "images/6 (6).jpg",
  "images/6 (7).jpg",
  "images/6 (8).jpg",
  "images/6 (9).jpg",
  "images/6 (10).jpg",
  "images/6 (11).jpg",
  "images/6 (12).jpg",
  "images/6 (13).jpg",
  "images/6 (14).jpg",
  "images/6 (15).jpg",
  "images/6 (17).jpg",
  "images/6 (18).jpg",
  "images/6 (19).jpg",
  "images/6 (20).jpg",
  "images/6 (21).jpg",
  "images/6 (22).jpg",
  "images/6 (23).jpg",
  "images/6 (24).jpg",
  "images/6 (25).jpg",
  "images/6 (26).jpg",
  "images/6 (27).jpg",
  "images/6 (28).jpg",
  "images/6 (29).jpg",
  "images/6 (30).jpg",
  "images/6 (31).jpg",
  "images/6 (32).jpg",
  "images/6 (33).jpg",
  "images/6 (34).jpg",
  "images/6 (35).jpg",
  "images/6 (36).jpg",
  "images/6 (37).jpg",
  "images/6 (38).jpg",
  "images/6 (39).jpg",
  "images/6 (40).jpg",
  "images/6 (41).jpg",
  "images/6 (42).jpg",
  "images/6 (43).jpg",
  "images/6 (44).jpg",
  "images/6 (45).jpg",
  "images/6 (46).jpg",
  "images/6 (47).jpg",
  "images/6 (48).jpg",
  "images/6 (49).jpg",
  "images/6 (50).jpg",
  "images/6 (51).jpg",
  "images/6 (52).jpg",
  "images/6 (53).jpg",
  "images/6 (54).jpg",
  "images/6 (55).jpg",
  "images/6 (56).jpg",
  "images/6 (57).jpg",
  "images/6 (58).jpg",
  "images/6 (59).jpg",
  "images/6 (60).jpg",
  "images/6 (61).jpg",
  "images/6 (62).jpg",
  "images/6 (63).jpg",
  "images/6 (64).jpg",
  "images/6 (65).jpg",
  "images/6 (66).jpg",
  "images/6 (67).jpg",
  "images/6 (68).jpg",
  "images/6 (69).jpg",
  "images/6 (70).jpg",
  "images/6 (71).jpg",
  "images/6 (72).jpg",
  "images/6 (73).jpg"
];

const imgEl = document.getElementById("questionImage");
const btn = document.getElementById("randomButton");
const prevBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");
const statusEl = document.getElementById("status");

let currentIndex = -1;

function setStatus(text){
  if(statusEl) statusEl.textContent = text || "";
}

function safeUrl(path){
  return encodeURI(path);
}

function loadImageAt(index){
  if(!images || images.length === 0){
    setStatus("No images found.");
    return;
  }
  index = ((index % images.length) + images.length) % images.length;
  const url = safeUrl(images[index]);

  setStatus("Loading image...");
  const tmp = new Image();
  tmp.onload = function(){
    imgEl.src = url;
    currentIndex = index;
    setStatus("");
    console.log("Loaded:", url);
  };
  tmp.onerror = function(ev){
    console.error("Failed to load:", url, ev);
    setStatus("Failed to load image. Check console.");
  };
  tmp.src = url;
}

function showRandom(){ loadImageAt(Math.floor(Math.random() * images.length)); }
function showPrev(){ currentIndex === -1 ? loadImageAt(0) : loadImageAt(currentIndex-1); }
function showNext(){ currentIndex === -1 ? loadImageAt(0) : loadImageAt(currentIndex+1); }

btn.addEventListener("click", showRandom);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowLeft") showPrev();
  if(e.key === "ArrowRight") showNext();
  if(e.key === " "){ e.preventDefault(); showRandom(); }
});

setStatus("Click RANDOM QUESTION to load an image.");
imgEl.alt = "Question card image - click RANDOM QUESTION.";
