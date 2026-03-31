---
title: 贡献者指南
---

## 贡献方式 {#method}

1. 会 GitHub 操作，直接 <abbr title="Pull Request">PR</abbr> 或 通过 {{< shields/github-issue "project-trans/mtf-wiki" >}}（该方法的过程将是公开的，请注意处理隐私数据，例如 [Exif 信息]({{< ref "#image" >}})和[电邮地址](https://docs.github.com/en/account-and-profile/concepts/email-addresses#commit-email-addresses)，如果不会处理隐私数据，请通过邮件方式贡献内容）
1. 发送邮件到 <mtfwiki@project-trans.org>
1. 直接在每个页面下方的意见反馈中投递

## 基本原则 {#basic-principle}

1. 绝对不要做出任何 {{< wiki 道德绑架 >}} 的行为
1. 为了保证内容的 {{< wiki 客观性 >}}，因此不受理虚构内容
1. 不应存在显著的 {{< wiki 谬误 >}}，亦可对照 {{< wiki 谬误列表 >}} 进行检查
1. 不应存在明显的 {{< wiki 认知偏差 >}}，亦可对照 {{< wiki 认知偏差列表 >}} 进行检查
1. 使用 [性别包容性语言][inclusive-language] 描述避免触发读者的 性别焦虑
1. 对于“缺乏真实案例报告”的内容，应当创建 [issue][new-issue] 后并记录至 [未确认列表]({{< ref "unconfirmed" >}})

[new-issue]: https://github.com/project-trans/MtF-wiki/issues/new/choose
[inclusive-language]: https://www.un.org/zh/gender-inclusive-language/guidelines.shtml

## HRT/诊断证明 {#proof}

### 投稿前注意

1. 医生对开证有清晰的条件，医生本人知晓开证是在干什么。医生了解诊断证明乃手术条件之一，知晓开证可能会被家长闹事。
1. 医生本人愿意接诊更多跨性别。
1. 明确只有能开诊断证明的精神科才有收录的必要。
1. 对于 HRT 医生，医生知晓自己在给跨性别者提供激素治疗，而不是顺手开药（点菜）。

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
1. 在编写内容时请尽量不要包含强时效性（可能短期内过期）或存在特殊情况的内容，比如周更的出诊时间表，这种情况可以给出获取最新信息的方式。\
如果你觉得自己提及了一些强时效性的内容，且是必要的，可以在上标中标注时间（如：我可以吞下玻璃而不伤身体<sup>2023-03-31</sup>）。
1. 问诊细节原则上需要清晰、明确的表述，如果对方愿意开具比较详细的病历请务必要求开具相关病历。并且可随医生信息一同上传其开具的病历（图片）以供参考。
1. 由于科室不同，开具诊断证明的医生没有权利开具 HRT 处方，开具 HRT 处方的医生没有权利开具诊断证明，这是基本常识。望贡献者在撰写医生介绍的时候切记。
1. 假如某位医生信息被编入 wiki 后表示自己不愿意被公开信息，我们将遵从其主观意愿将有关条目删除并列入 [已过时列表]({{< ref "outdated" >}})。

## 报告新的 SRS 医生 {#srs}

1. 医生姓名
1. 所在医院
1. 如何预约
1. 手术前置要求
1. 手术技术（医生描述，第三方介绍，发表论文）
1. 有无实例（如医生提供近期案例，朋友、自己接受手术）

### 手术评价、术后效果

见：[手术评价方法]({{< ref "srs-compraise" >}})

## 关于附加资源

### 图片处理 {#image}

如果图片为对纸质材料的拍摄，请使用 Microsoft Lens (fbk Office Lens) 进行处理以便于提供更好的阅读体验，当然，如果有条件的话建议提供扫描件。
照片中的 {{< wiki Exif >}} 信息可能包含设备型号、拍摄时间和地理位置等信息。建议您在上传前[移除敏感信息](https://commons.wikimedia.org/wiki/Commons:Exif#Editing_Exif_fields)。
如果您不会相关的后处理，可以将该图片提交至 <mtfwiki@project-trans.org> 由我们脱敏后进行上传。

[Microsoft Lens (Android)](https://coolapk.com/apk/com.microsoft.office.officelens)
[Microsoft Lens (iOS)](https://apps.apple.com/app/id975925059)
[Microsoft Lens (Windows)](https://www.microsoft.com/en-us/p/office-lens/9wzdncrfj3t8)

### 附件目录

根据规范，不同种类附件都有存放目录，建议将附件存放至规范的目录下。

- 图片类附件建议建议存放至 [`/static/images/`][images] 目录下，在正文中使用 `/images/+路径` 的方式引用；
- PDF 等文档类附件建议存放至 [`/static/documents/`][documents] 目录下，在正文中使用 `/documents/+路径` 的方式引用；

[images]: https://github.com/project-trans/MtF-wiki/tree/master/static/images/
[documents]: https://github.com/project-trans/MtF-wiki/tree/master/static/documents/

### 表格

表格类说明建议使用内嵌 {{< wiki CSV >}} 格式

<!-- markdownlint-disable-next-line -->
````
```csv
表头1,表头2,表头3
内容,内容,内容
```
````
