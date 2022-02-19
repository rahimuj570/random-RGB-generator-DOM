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

// ==========RGB Copy=========
document.getElementById("copy-btn").addEventListener("click", function () {
  const copyTxt = query("#rgb-field").value;
  /*   -----Way No.1-------- */
  query("#rgb-field").focus();
  query("#rgb-field").select();
  document.execCommand("copy");

  /*   -----Way No.2-------- */
  //   navigator.clipboard.writeText(copyTxt);
});

//===========Query Selector==========
query = (idClass) => {
  return document.querySelector(idClass);
};
