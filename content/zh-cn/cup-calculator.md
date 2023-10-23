---
title: "罩杯计算器"
description: "罩杯计算器"
---

<style>
  input {
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    /*transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/
    padding: 1px;
    height: 1.8em;
    width: 50px;
  }
  input:focus {
    color: #495057;
    outline: 0;
    border-image: url(/images/shadow-i.png) 30 30 stretch;
    border-image-width: 3px;
    border-image-outset: 0px;
  }
</style>

**运算都在您的本地完成，不收集任何数据**

1. 请准备一根软尺并面对镜子，看得到胸部
1. 请直立，放松，用软尺贴合乳房下缘<span style="text-decoration:underline; text-decoration-thickness: 2px;">⊙⊙</span>，水平绕身体一量圈： <input type="text" id="val1"/> cm
1. 请呼气：<input type="text" id="val2"/> cm
1. 请直立，放松，用软尺经过乳头<span style="text-decoration:line-through; text-decoration-thickness: 2px;">⊙⊙</span>，绕身体一量圈：<input type="text" id="val3"/> cm
1. 请俯身 45 度：<input type="text" id="val4"/> cm
1. 请鞠躬 90 度：<input type="text" id="val5"/> cm

国际通用罩杯计算方法：

- 下胸围 + 11 cm + n × 2 cm = 胸围

- 罩杯 n =（胸围 − 下胸围 − 11） / 2

数字 n 代表罩杯 (A=1、B=2、C=3依此类推)。例如，胸围和下胸围差为15 cm (n=2)表示B罩杯。

国内罩杯计算方法:

- 下胸围 + 11cm + n × 2cm = 胸围

- 罩杯 n = (胸围 - 下胸围 - 5) / 2.5

数字 n 代表罩杯 (A=1、B=2、C=3依此类推)。例如，胸围和下胸围差为10 cm (n=2)表示B罩杯。

<button onclick="cup()" type="submit">提交</button>

<p id="result">国际通用罩杯: </p>
<p id="resultcn">中国尺码: </p>

<script type="text/javascript">
  function cup() {
    //Initial
    window.document.getElementById("result").innerHTML = "国际通用罩杯: ";
    window.document.getElementById("resultcn").innerHTML = "国内罩杯: ";
    //Calculate
    var val1 = Number(window.document.getElementById("val1").value) || NaN;
    var val2 = Number(window.document.getElementById("val2").value) || NaN;
    var val3 = Number(window.document.getElementById("val3").value) || NaN;
    var val4 = Number(window.document.getElementById("val4").value) || NaN;
    var val5 = Number(window.document.getElementById("val5").value) || NaN;
    var under = (val1 + val2 )/2;
    var upper = (val3 + val4 + val5)/3;
    var cup = ( upper - under - 11 ) / 2;
    var cupcn = upper - under;
    var valid = true;
    //Judgement
    if (isNaN(cup)) {
      window.document.getElementById("result").innerHTML = "数值错误，再检查检查吧";
      valid = false;
    } else if (cup<=0){
      window.document.getElementById("result").innerHTML += "小妹妹你还不需要穿内衣哦";
      valid = false;
    } else if (cup<1){
      cup = "AA，买少女小背心去吧";
    } else if (cup<=2){
      cup = "A";
    } else if (cup<3){
      cup = "B";
    } else if (cup<4){
      cup = "C";
    } else if (cup<5){
      cup = "D";
    } else if (cup<6){
      cup = "E";
    }else{
      window.document.getElementById("result").innerHTML += "你胸大你说了算（罩杯超出 MtF.wiki 预设）";
      valid = false;
    }
    if (isNaN(cupcn)) {
      window.document.getElementById("resultcn").innerHTML = "数值错误，再检查检查吧";
      valid = false;
    } else if (cupcn <= 5) {
      window.document.getElementById("resultcn").innerHTML += "小妹妹你还不需要穿内衣哦";
      valid = false;
    } else if (cupcn <= 7.5) {
      cupcn = "AA，买少女小背心去吧";
    } else if (cupcn <= 10) {
      cupcn = "A";
    } else if (cupcn <= 12.5) {
      cupcn = "B";
    } else if (cupcn <= 15) {
      cupcn = "C";
    } else if (cupcn <= 17.5) {
      cupcn = "D";
    } else if (cupcn <= 20) {
      cupcn = "E";
    } else {
      window.document.getElementById("resultcn").innerHTML += "你胸大你说了算（罩杯超出 MtF.wiki 预设）";
      valid = false;
    }
    if (!valid)
      return;
    if (isNaN(under)) {
      window.document.getElementById("result").innerHTML = "数值错误，再检查检查吧";
      window.document.getElementById("resultcn").innerHTML = "数值错误，再检查检查吧";
      return;
    } else{
      under = Math.ceil(under/5)*5;
    }
    window.document.getElementById("result").innerHTML += under + cup;
    window.document.getElementById("resultcn").innerHTML += under + cupcn;
    return;
  }
</script>
