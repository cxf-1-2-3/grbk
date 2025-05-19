---
autoPrev: 激活window
---
# Cursor
### 快捷键

| 快捷键                                           | 描述           |
| ------------------------------------------------ | -------------- |
| **ctrl+shift+J**                                 | 打开配置页面   |
| **ctrl+shift+P—>输入Cursor Settings**            | 打开配置页面   |
| **ctrl+shift+P—>输入Configure Display Language** | 配置中文       |
| **ctrl+i**                                       | 调用Composer   |
| **ctrl+l**                                       | 调用Chat对话框 |

### Cursor Settings配置

* General
  * Account
    * **Manage** 点击之后可以看到Cursor使用次数
    * **Log out**  退出登录
  * **Privacy mode:** 是否启动隐式模式 //（Enabled启动、Disabled关闭）
* Features
  * **Codebase Indexing：** 可以在chat用于**分析项目**、**对应代码在文件的位置**
    * **Resync Index：**重新构建(创建新的文件需要重新构建)
    * **lgnore files:** 配置文件(忽略不需要)
  * Docs
    * **add new doc：** 配置需要关联的外链地址

### 大模型介绍

* **简单任务：** 使用Cursor-small或4o-mini
* **复杂问题：** 使用GPT-4或Claude
* **创造性任务：**推荐使用Claude
* **代码优化:** 推荐使用GPT-4

### .cursorignore文件

* **介绍:** .cursorignore 文件的主要作用是告诉 Cursor 编辑器哪些文件和目录应该被忽略，不进行 AI 分析和索引。这类似于 .gitignore 的工作方式。

* **重要性：**

  * 1. 性能优化 - 通过忽略不需要 AI 处理的文件(如 node_modules、build 目录等)，可以显著提高 Cursor 的运行效率和响应速度
  * 2. 资源节省 - 避免对大型二进制文件、依赖包等进行不必要的分析，节省计算资源
  * 3. 隐私保护 - 可以排除包含敏感信息的文件，避免这些内容被 AI 模型处理
  * 4. 降低干扰 - 确保 AI 只关注真正需要分析的代码文件，提供更精准的建议

* **配置例子**

  ```javascript
  node_modules/
  dist/
  *.log
  .env
  build/
  ```

### .cursorrules文件

* **介绍：**是放在**项目根目录**下的一个文件，你可以在里面**指定ai如何生成代码**。比如设置命名风格（驼峰or下划线）、缩进风格（2空格or4空格）、使用什么语言（JS or TS）等等。

* 配置

  ```
  # 网站开发项目规范配置
  每一次会话请求结束后进行会话总结，无论生成新文件还是修改已有文件都需要做总结，
  并将总结内容Append写入到Readme文件中(说明文件中的内容是累积增加的)。
  总结内容应包括:
   - 会话的主要目的
   - 完成的主要任务
   - 关键决策和解决方案
   - 使用的技术栈
   - 修改了哪些文件
  
  # 项目结构
  
  
  # 项目文件命名规范
  
  # 项目文件结构
  
  # 项目文件内容规范
  
  # 项目文件注释规范
  
  # 项目文件编码规范  
  ```

  

### Chat中@介绍

* **@Flies：**关联文件
* **@Folders：**关联文件夹
* **@Code：**关联代码片段
* **@Docs：**关联外部文档放到文档内容里
  * 在使用之前需要在Cursor Settings配置Docs
* **@Git：** 关联Git某个版本、分支
* **@Linter Errors：** 关联错误
* **@web + 外部地址：** 关联外部地址
* **@web：** 直接搜索问题会直接在网络中查

