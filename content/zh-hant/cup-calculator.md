---
title: "罩杯計算機"
description: "罩杯計算機"
---

<style>
  input {
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    /*transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/
    padding: 1px;
    height: 1.5em;
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
**運算都會在本地完成，不會回傳任何資料**

1. 請準備一根軟尺並面對鏡子，看得到胸部
1. 請直立，放鬆，用軟尺貼合乳房下緣<span style="text-decoration:underline; text-decoration-thickness: 2px;">⊙⊙</span>，水平繞身體量測一圈： <input type="text" id="val1"/> cm
1. 請呼氣：<input type="text" id="val2"/> cm
1. 請直立，放鬆，用軟尺經過乳頭<span style="text-decoration:line-through; text-decoration-thickness: 2px;">⊙⊙</span>，繞身體量測一圈：<input type="text" id="val3"/> cm
1. 請俯身 45 度：<input type="text" id="val4"/> cm
1. 請鞠躬 90 度：<input type="text" id="val5"/> cm

<button onclick="cup()" type="submit">提交</button>

<p id="result"></p>

<script type="text/javascript">
  function cup() {
    var val1 = Number(window.document.getElementById("val1").value);
    var val2 = Number(window.document.getElementById("val2").value);
    var val3 = Number(window.document.getElementById("val3").value);
    var val4 = Number(window.document.getElementById("val4").value);
    var val5 = Number(window.document.getElementById("val5").value);
    var xia = (val1 + val2 )/2;
    var cup = (val3 + val4 + val5)/3 - xia;

    if (isNaN(cup)) {
      window.document.getElementById("result").innerHTML = "數值錯誤，再檢查一下吧";
      return;
    } else if (cup<5){
      window.document.getElementById("result").innerHTML = "小妹妹妳還不需要穿內衣唷";
      return;
    } else if (cup<=7.5){
      cup = "AA，購買少女內衣";
    } else if (cup<=10){
      cup = "A";
    } else if (cup<=12.5){
      cup = "B";
    } else if (cup<=15){
      cup = "C";
    } else if (cup<=17.5){
      cup = "D";
    } else if (cup<=20){
      cup = "E";
    }else{
      window.document.getElementById("result").innerHTML = "妳胸大妳說了算（罩杯超出 MtF wiki 預設）";
      return;
    }
    if (isNaN(xia)) {
      window.document.getElementById("result").innerHTML = "數值錯誤，再檢查一下吧";
      return;
    } else{
      xia = Math.ceil(xia/5)*5;
    }
      window.document.getElementById("result").innerHTML = xia + cup;
    return;
  }
</script>
