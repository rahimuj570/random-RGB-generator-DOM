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

//===========Query Selector==========
query = (idClass) => {
  return document.querySelector(idClass);
};
