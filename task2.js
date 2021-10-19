const b1 = document.querySelector("#buttno1");

b1.addEventListener("click", function () {
  console.log("click");
  const h1 = document.querySelector("#h_1");
  h1.style.fontSize = "500%";

});

const b2 = document.querySelector("#buttno2");
b2.addEventListener("click", function () {
  const p1 = document.querySelector("p");
  const p2 = document.querySelector("#p2");
  p1.style.fontFamily = "Impact,Charcoal,sans-serif";
  p2.style.fontFamily = "Impact,Charcoal,sans-serif";
});

const b3 = document.querySelector("#buttno3");
b3.addEventListener("click", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = "gray";
  p2.style.backgroundColor = "gray";
});

const b4 = document.querySelector("#buttno4");
b4.addEventListener("click", function () {
  const img = document.querySelector("#img1");
  img.style.display = "none";
});


const b5 = document.querySelector("#buttno5");
b5.addEventListener("click", function () {
  const img = document.querySelector("#img2");
  const src1 =
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png";
  const src2 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png";

  if (img.src === src1) img.src = src2;
  else img.src = src1;
});

const img1 = document.querySelector("#img2");
img1.addEventListener("mousemove", function () {
  const img = document.querySelector("#img2");
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png";
});

const img2 = document.querySelector("#img2");
img2.addEventListener("mouseleave", function () {
  const img = document.querySelector("#img2");
  img.src =
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png";
});


const al1 = document.querySelector("#img1");
al1.addEventListener("contextmenu", function () {
  alert("You can't ues  Right Click on img ");
});

const al2 = document.querySelector("#img2");
al2.addEventListener("contextmenu", function () {
  alert("You can't ues  Right Click on img");
});

const enteredData = () => {
    alert("data entered ");
  };
  const input = document.getElementById("text1");
  input.addEventListener("input", enteredData);




window.addEventListener("load", (event) => {
  alert("page loaded");
});



const p1 = document.querySelector("#p1");
p1.addEventListener("mousemove", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = "red";
  p2.style.backgroundColor = "red";
});

const p2 = document.querySelector("#p2");
p2.addEventListener("mouseleave", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = "White";
  p2.style.backgroundColor = "White";
});