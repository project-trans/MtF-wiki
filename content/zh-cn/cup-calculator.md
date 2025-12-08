---
title: "罩杯计算器"
description: "罩杯计算器"
hidden-timeliness: true
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

<!-- markdownlint-disable-next-line no-emphasis-as-heading -->
**运算都在您的本地完成，不收集任何数据**

1. 请准备一根软尺并面对镜子，看得到胸部
1. 请直立，放松，用软尺贴合乳房下缘<span style="text-decoration:underline; text-decoration-thickness: 2px;">⊙⊙</span>，水平绕身体一量圈： <input type="text" id="val1"/> cm
1. 请呼气：<input type="text" id="val2"/> cm
1. 请直立，放松，用软尺经过乳头<span style="text-decoration:line-through; text-decoration-thickness: 2px;">⊙⊙</span>，绕身体一量圈：<input type="text" id="val3"/> cm
1. 请俯身 45 度：<input type="text" id="val4"/> cm
1. 请鞠躬 90 度：<input type="text" id="val5"/> cm

<button onclick="cup()" type="submit">提交</button>

<p id="result"></p>

<script type="text/javascript">
  function cup() {
    var val1 = Number(window.document.getElementById("val1").value) || NaN;
    var val2 = Number(window.document.getElementById("val2").value) || NaN;
    var val3 = Number(window.document.getElementById("val3").value) || NaN;
    var val4 = Number(window.document.getElementById("val4").value) || NaN;
    var val5 = Number(window.document.getElementById("val5").value) || NaN;
    var xia = (val1 + val2 )/2;
    var cup = (val3 + val4 + val5)/3 - xia;

    if (isNaN(cup)) {
      window.document.getElementById("result").innerHTML = "数值错误，再检查检查吧";
      return;
    } else if (cup<5){
      window.document.getElementById("result").innerHTML = "小妹妹你还不需要穿内衣哦";
      return;
    } else if (cup<=7.5){
      cup = "AA，买少女小背心去吧";
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
      window.document.getElementById("result").innerHTML = "你胸大你说了算（罩杯超出 MtF.wiki 预设）";
      return;
    }
    if (isNaN(xia)) {
      window.document.getElementById("result").innerHTML = "数值错误，再检查检查吧";
      return;
    } else{
      xia = Math.ceil(xia/5)*5;
    }
      window.document.getElementById("result").innerHTML = xia + cup;
    return;
  }
</script>
