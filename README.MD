
## 一个简单的在线文档

> 本作品仅出于兴趣和爱好，对于协同等场景的正确性不做保证



### 数据结构设计思路

> 以下仅列出了 Doc、Paragraph、Span 等元素的核心结构, 详细结构请阅读代码。
>
> 最终应用于 Text & Drawing 的样式会逐级从 Doc 继承。

~~~typescript
/**
 * Doc 文档结构
 * @Param Settings - Doc 设置
 * @Param Styles   - Doc 样式
 * @Param Content  - Doc 内容
 */
interface Doc {
	Settings: object,
  Styles: object,
  Content: Array<Paragraph | Table>
}

/**
 * Paragraph 段落
 * @Param Styles   - Paragraph 样式
 * @Param Content  - Paragraph 样式内容
 */
interface Paragraph {
	Styles: object,
  Content: Array<Span | Link>
}

/**
 * Span 文本&图形&文本框的挂载单位
 * @Param Styles   - Span 样式
 * @Param Content  - Span 内容
 */
interface Span {
  Styles: object,
  Content: Array<Text | Drawing>
}
~~~



### 开发指北

* 命名规范
  * Class 统一添加 C 前缀。 (eg.  CDoc、CParagraph、CSpan、CLink、CTable)
  * Class & 函数 & 变量采用驼峰写法。
  * 接口命名统一添加 I 前缀。(eg.  IColor)
* Class 开发规范
  * 为所有函数标注返回类型。
  * 为属性和函数标注访问权限，仅在必要条件下声明为 public。
  * 每个 Class 应该只提供原子级别的功能。
* 其他规范
  * 不使用 export default
  * 函数穿参使用 SpreadParams 方式。(eg.  fn(name, age, sex, address))
