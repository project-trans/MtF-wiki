---
title: 贡献者指南
---

贡献方式：

1. 会 GitHub 操作，直接 <abbr title="Pull Request">PR</abbr> 或 通过 [![GitHub issues][badge-github]](https://github.com/mtf-wiki/MtF-Wiki/issues/new/choose) （该方法的过程将是公开的，请注意处理隐私数据，如果不会处理隐私数据，请通过邮件方式贡献内容）
1. 发送邮件到 <hi@mtf.wiki>
1. 在 [TransLand](https://chat.transland.lgbt) 发布主题
<!-- 1. 不会 GitHub 操作，[GitHub 注册并贡献教程 - limelight](https://limelight.moe/t/topic/9639)（Limelight 正在改革中，暂停用户注册） -->

[badge-github]: https://img.shields.io/github/issues/mtf-wiki/MtF-Wiki?style=flat-square

{{< notice info "友情提醒" >}}
绝对不要做出任何道德绑架的行为！！！
{{< /notice >}}

## HRT/诊断证明 {#proof}

### 撰稿要素

1. 医生姓名
1. 所在医院
1. 出诊时刻
1. 挂号方法
1. 问诊细节
1. 注意事项

### 撰稿原则

1. 您对于医生的印象/属性 tag（如：「一次过」、「可与家长沟通」 等）可能不会第一时间更新在医生页面上，我们需要进行多方求证（来自不同来源/时期的报告）。
1. 对于需要标注 「跨性别友好」 的医生，我们需要进行多方求证（来自不同来源/时期的报告）。
1. 在编写内容时请遵循 **「未常态化、无普遍性则不提及」** 的原则，尽量不要在贡献内容中提及不具有时效性（长期有效）或存在特殊情况的内容，尽量确保严谨性，但此类情况可以在贡献时注释。
1. 问诊细节原则上需要清晰、明确的表述，如果对方愿意开具比较详细的病历请务必要求开具相关病历。并且可随医生信息一同上传其开具的病历（图片）以供参考。
1. 由于科室不同，开具诊断证明的医生没有权利开具 HRT 处方，开具 HRT 处方的医生没有权利开具诊断证明，这是基本常识。望贡献者在撰写医生介绍的时候切记。
1. 假如某位医生信息被编入 wiki 后表示自己不愿意被公开信息，我们将遵从其主观意愿将有关词条删除并列入过时名单。

## SRS {#srs}

## 报告新的 SRS 医生

1. 医生姓名
1. 所在医院
1. 如何预约
1. 手术前置要求
1. 手术技术（医生描述，第三方介绍，发表论文）
1. 有无实例（如医生提供近期案例，朋友、自己接受手术）

### 手术评价、术后效果

见：[手术评价方法]({{< ref "srs-compraise" >}})

## 关于附加资源

### 图片处理

如果图片为对纸质材料的拍摄，请使用 Microsoft Lens (fbk Office Lens) 进行处理以便于提供更好的阅读体验，当然，如果有条件的话建议提供扫描件。
照片中的 [Exif](https://zh.wikipedia.org/wiki/Exif) 信息可能包含设备型号、拍摄时间和地理位置等信息。建议您在上传前[移除敏感信息](https://commons.wikimedia.org/wiki/Commons:Exif#Editing_Exif_fields)。
如果您不会相关的后处理，可以将该图片提交至 <hi@mtf.wiki> 由我们脱敏后进行上传。

[Microsoft Lens (Android)](https://coolapk.com/apk/com.microsoft.office.officelens)
[Microsoft Lens (iOS)](https://apps.apple.com/app/id975925059)
[Microsoft Lens (Windows)](https://www.microsoft.com/en-us/p/office-lens/9wzdncrfj3t8)

### 附件目录

根据规范，不同种类附件都有存放目录，建议将附件存放至规范的目录下。

- 图片类附件建议建议存放至 [`/static/images/`][images] 目录下，在正文中使用 `/images/+路径` 的方式引用；
- PDF 等文档类附件建议存放至 [`/static/documents/`][documents] 目录下，在正文中使用 `/documents/+路径` 的方式引用；

[images]: https://github.com/mtf-wiki/MtF-Wiki/tree/master/static/images/
[documents]: https://github.com/mtf-wiki/MtF-Wiki/tree/master/static/documents/

### 表格

表格类说明建议使用内嵌 [CSV](https://zh.wikipedia.org/wiki/CSV) 格式

````
```csv
表头1,表头2,表头3
内容,内容,内容
```
````
