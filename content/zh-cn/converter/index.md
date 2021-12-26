---
title: 激素换算器
---

<link rel="stylesheet" href="main.css">

<form class="converter">
  <div class="original">
    <span>原数据：</span>
    <input type="text" name="val1" />
    <select name="in1">
      <option value="1">pg</option>
      <option value="1000">ng</option>
      <option value="1000000">ug</option>
      <option value="mol">pmol</option>
      <option value="mol1000">nmol</option>
    </select>
    <span>/</span>
    <select name="in2">
      <option value="1">mL</option>
      <option value="100">dL</option>
      <option value="1000">L</option>
    </select>
    <select name="in3" hidden>
      <option value="272.38">雌二醇</option>
      <option value="288.43">睾酮</option>
      <option value="23000">泌乳素</option>
      <option value="314.46">孕酮</option>
    </select>
  </div>
  <div class="converted">
    <span>转换为：</span>
    <input name="result" disabled />
    <select name="out1">
      <option value="1">pg</option>
      <option value="1000">ng</option>
      <option value="1000000">ug</option>
      <option value="mol">pmol</option>
      <option value="mol1000">nmol</option>
    </select>
    <span>/</span>
    <select name="out2">
      <option value="1">mL</option>
      <option value="100">dL</option>
      <option value="1000">L</option>
    </select>
    <select name="out3" hidden>
      <option value="272.38">雌二醇</option>
      <option value="288.43">睾酮</option>
      <option value="23000">泌乳素</option>
      <option value="314.46">孕酮</option>
    </select>
  </div>
</form>

<script src="main.js"></script>
