// document.querySelectorAll("*").forEach(function (element) {
//   element.style.border = "1px solid red";
// });

// =========HIDE SHOW BUTTON RESUME SCRIPT=============
// iFrames & buttons const
const cvBtn = document.getElementById("cvBtn");
const ctBtn = document.getElementById("ctBtn");
const rlBtn = document.getElementById("rlBtn");
const cvIframe = document.getElementById("cvIframe");
const ctIframe = document.getElementById("ctIframe");
const rlIframe = document.getElementById("rlIframe");

// Default Hiding ELements
function hideAllIframes() {
  cvIframe.classList.add("hidden");
  ctIframe.classList.add("hidden");
  rlIframe.classList.add("hidden");
}

window.onload = function () {
  hideAllIframes();
  cvIframe.classList.remove("hidden");
};

// CV button
cvBtn.addEventListener("click", function () {
  hideAllIframes();
  cvIframe.classList.remove("hidden");
});

// Certificates button
ctBtn.addEventListener("click", function () {
  hideAllIframes();
  ctIframe.classList.remove("hidden");
});

// Recommendation Letters button
rlBtn.addEventListener("click", function () {
  hideAllIframes();
  rlIframe.classList.remove("hidden");
});
// =================================================
