---
title: "胸圍計算"
description: "胸圍計算"
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

**計算會在你的電腦上完成，不會向伺服器回傳任何資料**

1. 請準備一條量身軟尺，面向鏡子，要能看到胸部
1. 請站直、放輕鬆，將軟尺貼合乳房下緣 <span style="text-decoration:underline; text-decoration-thickness: 2px;">⊙⊙</span>，水平方向繞身體量測一圈： <input type="text" id="val1"/> cm
1. 請呼氣：<input type="text" id="val2"/> cm
1. 請站直、放輕鬆，將軟尺經乳頭 <span style="text-decoration:line-through; text-decoration-thickness: 2px;">⊙⊙</span> 繞身體量測一圈：<input type="text" id="val3"/> cm
1. 請俯身 45 度：<input type="text" id="val4"/> cm
1. 請鞠躬 90 度：<input type="text" id="val5"/> cm

國際通用胸罩尺碼計算方法：

- 下胸圍 + 11 cm + n × 2 cm = 胸圍

- 罩杯 n =（胸圍 − 下胸圍 − 11） / 2

數字 n 代表罩杯 (A=1、B=2、C=3依此類推)。例如，胸圍和下胸圍差為15 cm (n=2)表示B罩杯。

中國尺碼計算方法:

- 下胸圍 + 11cm + n × 2cm = 胸圍

- 罩杯 n = (胸圍 - 下胸圍 - 5) / 2.5

數字 n 代表罩杯 (A=1、B=2、C=3依此類推)。例如，胸圍和下胸圍差為10 cm (n=2)表示B罩杯。

<button onclick="cup()" type="submit">計算</button>

<p id="result">國際通用罩杯: </p>
<p id="resultcn">國內罩杯: </p>

<script type="text/javascript">
  function cup() {
    //Initial
    window.document.getElementById("result").innerHTML = "國際通用罩杯: ";
    window.document.getElementById("resultcn").innerHTML = "國內罩杯: ";
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
    //Judgement
    if (isNaN(cup)) {
      window.document.getElementById("result").innerHTML = "輸入有誤，再檢查一下吧";
      cup = false;
    } else if (cup<=0){
      window.document.getElementById("result").innerHTML += "小妹妹妳還不需要穿內衣唷";
      cup = false;
    } else if (cup<1){
      cup = "AA，購買少女內衣";
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
      window.document.getElementById("result").innerHTML += "妳胸大妳說了算（罩杯超出 MtF.wiki 預設）";
      cup = false;
    }
    if (isNaN(cupcn)) {
      window.document.getElementById("resultcn").innerHTML = "輸入有誤，再檢查一下吧";
      cupcn = false;
    } else if (cupcn <= 5) {
      window.document.getElementById("resultcn").innerHTML += "小妹妹妳還不需要穿內衣唷";
      cupcn = false;
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
      window.document.getElementById("resultcn").innerHTML += "妳胸大妳說了算（罩杯超出 MtF.wiki 預設）";
      cupcn = false;
    }
    if (isNaN(under)) {
      window.document.getElementById("result").innerHTML = "輸入有誤，再檢查一下吧";
      window.document.getElementById("resultcn").innerHTML = "輸入有誤, 再檢查一下吧";
      return;
    } else{
      under = Math.ceil(under/5)*5;
    }
    window.document.getElementById("result").innerHTML += cup ? (under + cup) : "";
    window.document.getElementById("resultcn").innerHTML += cupcn ? (under + cupcn) : "";
    return;
  }
</script>
