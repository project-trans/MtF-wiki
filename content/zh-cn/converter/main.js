var form = document.querySelector("form.converter");

function changed() {
  var $in3 = form.elements.in3;
  var $out1 = form.elements.out1;
  var $out2 = form.elements.out2;
  var $val1 = form.elements.val1;
  var $result = form.elements.result;
  var val = Number.parseInt($val1.value, 10);
  var in1 = form.elements.in1.value;
  var in2 = Number.parseInt(form.elements.in2.value, 10);
  var in3 = Number.parseInt($in3.value, 10);
  var out1 = $out1.value;
  var out2 = Number.parseInt($out2.value);
  $in3.hidden = false;
  switch (in1) {
    case "mol":
      in3.hidden = true;
      val *= in3;
      break;
    case "mol1000":
      in3.hidden = true;
      val *= 1000 * in3;
      break;
    default:
      val *= Number.parseInt(in1, 10);
  }
  switch (out1) {
    case "mol":
      in3.hidden = true;
      val /= in3;
      break;
    case "mol1000":
      in3.hidden = true;
      val = (val * 0.001) / in3;
      break;
    default:
      val /= Number.parseInt(out1, 10);
  }
  val = (val * out2) / in2;
  if (Number.isNaN(val)) {
    $result.value = "数值错误"; //输出
  } else {
    $result.value = val; //输出
  }
  return;
}

form.elements.val1.addEventListener("keyup", changed);

["in1", "in2", "in3", "out1", "out2"].forEach(function (name) {
  form.elements[name].addEventListener("input", changed);
});
