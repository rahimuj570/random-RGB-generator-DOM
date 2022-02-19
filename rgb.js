// ===========RGB Generate Handler=========
document.querySelector("#copy-btn-suc").style.display = "none";
document.getElementById("generate-btn").addEventListener("click", function () {
  const red = rgbGenerate();
  const green = rgbGenerate();
  const blue = rgbGenerate();
  const rgbCode = `rgb(${red},${green},${blue})`;
  query("body").style.background = rgbCode;
  query("#rgb-field").value = rgbCode;
});

// ==========RGB Generator=========
function rgbGenerate(color) {
  const randomNum = Math.random() * 255;
  const float2Int = Math.round(randomNum);
  return float2Int + "";
}

// ==========RGB Copy Handler=========
document.getElementById("copy-btn").addEventListener("click", function () {
  const copyTxt = query("#rgb-field").value;
  /*   -----Way No.1-------- */
  query("#rgb-field").focus();
  query("#rgb-field").select();
  document.execCommand("copy");
  query("#copy-btn").style.display = "none";
  query("#copy-btn-suc").style.display = "block";
  setTimeout(copyHide, 3000);

  /*   -----Way No.2-------- */
  //   navigator.clipboard.writeText(copyTxt);
});

//===========Query Selector==========
query = (idClass) => {
  return document.querySelector(idClass);
};

// ========Copy Button Change Function======
function copyHide() {
  query("#copy-btn").style.display = "block";
  query("#copy-btn-suc").style.display = "none";
}
if (location.reload) {
  query("#rgb-field").value = "";
}
