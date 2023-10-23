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

1. 请准备一根软尺并面对镜子，看得到胸部。请脱去衣物。
1. 请直立，放松，用软尺贴合乳房下缘<span style="text-decoration:underline; text-decoration-thickness: 2px;">⊙⊙</span>，水平绕身体一量圈，保持水平、完全不要拉紧： <input type="text" id="und-loose"/> cm
1. 请继续保持水平，稍微拉紧到舒适（内衣应有）的程度： <input type="text" id="und-snug"/> cm
1. 请呼气、彻底拉紧：<input type="text" id="und-tight"/> cm
1. 请直立，放松，用软尺经过乳头<span style="text-decoration:line-through; text-decoration-thickness: 2px;">⊙⊙</span>，绕身体一量圈：<input type="text" id="up-up"/> cm
1. 请鞠躬 90 度：<input type="text" id="up-lean"/> cm
1. 请躺倒 90 度：<input type="text" id="up-down"/> cm

<button onclick="cup()" type="submit">提交</button>

<ul id="results">
<li>有效胸围、调整围差：<span id="diff"></span></li>
<li>欧式 2 cm 罩杯：<span id="eu"></span></li>
<li>中式 2.5 cm 罩杯：<span id="cn"></span></li>
</ul>

* * *

罩杯计算方法：

- 取“舒适”下胸围作为下胸围，四舍五入到最近的可用尺码。
  - 欧盟使用 5 cm 单位，并且减去 10 cm。例如 82 cm 会被转换为 70 cm。
  - 中国奶糖派使用 5 cm 单位，但似乎不减去 10 cm。所以 82 cm 会转换为 80 cm。
- “彻底拉紧”不用于实际计算，只用于建议“舒适”程度输入：
  - 较宽的下胸围意味着更多的弹性材料，允许使用更小的“舒适”值。一般来说小于 80 cm 者可能需要增加舒适值（向上入），大于 90 cm 者可能需要降低舒适值（向下舍）。
  - 如果“彻底拉紧”下胸围和“舒适”的差别小于 5 cm，考虑增加“舒适”值
  - 如果“彻底拉紧”下胸围和“舒适”的差别大于 10 cm，考虑降低“舒适”值
- 取 (站 + 鞠 &times; 2 + 卧 &times; 2) / 5 加权平均为胸围（AMAB 加权法）
- 胸围减去“不拉紧”下胸围，为初始围差
- 围差加入调整值，(“不拉紧” - 胸围) / 2
- 围差四舍五入到最近的可用尺码。围差到罩杯的字母转换取决于地区：
  - 欧盟使用的围差间隔为 2 cm，即围差 ≥ 2 cm 为 A、≥ 4 cm 为 B，以此类推。
  - 中国、美国使用的围差间隔为 2.5 cm，即围差 ≥ 2.5 cm 为 A、≥ 5 cm 为 B，以此类推。
  - 较大围差者会遇到[不规律的尺寸标号（DD、DDD等）](https://en.wikipedia.org/w/index.php?title=Bra_size&oldid=1181336261#The_meaning_of_cup_sizes_varies)，此计算器不做处理。

你的罩杯字母是不是有点大？这太正常了！
* 罩杯应该描述的就是围差，不是体积。也许你的奶子应该坐在杯里，现在的衣服只是把它们压到腋下去了。脱去衣物就是为了避免现有胸罩的干扰！
* 和[正确大小](https://www.reddit.com/r/ABraThatFits/wiki/beginners_guide/#wiki_believe_your_size)比较一下，是不是差不多？
* 网络上有将 11 cm 或四英寸围差挪进下胸围的做法，但这种做法会导致杯过小，见[White & Scurr 2012](https://sci-hub.se/https://www.tandfonline.com/doi/abs/10.1080/00140139.2011.647096)。Kohl、奶糖派等成熟厂商的计算器已抛弃该算法。

算法来源：
* r/ABraThatFits [通用算法](https://www.reddit.com/r/ABraThatFits/wiki/manual_sizing_guide/)、[MTF 指南](https://www.reddit.com/r/ABraThatFits/wiki/mtfguide/)。
* r/ABraThatFits 有[在线计算器](https://www.abrathatfits.org/calculator.php)，但是非开源、需要向后端提交数据，请慎用。此计算器的输出已用于参考。“EU”输出为 5 cm 底围间隔、2.5 cm 围差间隔，有 10 cm 调整。
* [奶糖派尺码助手](https://sizehelp.naitangpai.com/h5pc/pc.html)，非开源、需要向后端提交数据，请慎用。输出为 5 cm 底围间隔、约 2.5 cm 围差间隔，无 10 cm 调整。

<script type="text/javascript">
function stringify_cup(n) {
  var cup_to_letter = ["AA，买少女小背心去吧", "A", "B", "C", "D", "E", "F", "G"];
  if (isNaN(n))
    return "数值错误，再检查检查吧";
  if (n < 0)
    return "小妹妹你还不需要穿内衣哦";
  if (n > cup_to_letter.length)
    return "你胸大你说了算（罩杯超出 MtF.wiki 预设）";
  return cup_to_letter[n];
}
function cup() {
  var $id = window.document.getElementById.bind(window.document);
  
  // Calculate
  var und_l = Number($id("und-loose").value) || NaN;
  var und_s = Number($id("und-snug").value) || NaN; 
  var und_t = Number($id("und-tight").value) || NaN;
  var up_u = Number($id("up-up").value) || NaN;
  var up_l = Number($id("up-lean").value) || NaN;
  var up_d = Number($id("up-down").value) || NaN;

  // EU, CN use 5 cm bands 
  var under = Math.round(und_s / 5) * 5;
  var upper = (up_u * 2 + up_l + up_d * 2) / 5;
  var diff = upper - und_l + (und_l - under) / 2;

  var cup_eu = Math.floor(diff / 2);
  var cup_cn = Math.floor(diff / 2.5);

  $id("diff").innerText = under + ", " + diff.toFixed(2);
  if (isNaN(diff)) {
    $id("diff").innerText = "数值错误，再检查检查吧";
  }

  // EU performs -10 adjustment, see https://www.reddit.com/r/ABraThatFits/wiki/sizing_systems/
  // CN Candy Pie does not do the same
  $id("eu").innerText = '' + (under - 10) + stringify_cup(cup_eu);
  $id("cn").innerText = '' + (under) + stringify_cup(cup_cn);
}

</script>
