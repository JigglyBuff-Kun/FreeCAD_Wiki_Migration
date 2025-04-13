---
title: 开发者中心
---

![](/images/Crystal_Clear_app_tutorials.png)

---

如果你对开发 FreeCAD 软件有兴趣，想贡献于这个项目的开发，这里正有你该了解的内容。

这些页面还处于开发的早起阶段。如果你找不到想看的信息，如果你在别处看到了有用的信息，而我们没有链接在这里，那么请在[论坛](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff)里留下你的评论。会有人仔细看，认真处理它们的（或者，大胆如你，为什么不直接编辑这个页面呢？）。

## 开发者文档

开发者文档由以下部分构成：

### 编译 FreeCAD

- [Github 代码库](https://github.com/FreeCAD/FreeCAD). 如果你是 git 新手, 请阅读[Source code management](/Source_code_management "Source code management")
- [用 Docker 编译](/Compile_on_Docker "Compile on Docker")
- [在 Windows 上编译](/Compile_on_Windows "Compile on Windows")
- [在 Linux 上编译](/Compile_on_Linux "Compile on Linux")
- [在 Mac OS X 上编译](/Compile_on_MacOS "Compile on MacOS")
- 关于 FreeCAD 的[许可协议细节](/License/zh-cn "License/zh-cn")
- [第三方程序库](/Third_Party_Libraries "Third Party Libraries")
- [第三方工具库](/Third_Party_Tools "Third Party Tools")
- [起始和配置](/Start_up_and_Configuration "Start up and Configuration")
- [源文档](/Source_documentation/zh-cn "Source documentation/zh-cn")
- 当你有问题或你认为发现了一个 bug 的时候，请使用 [bug tracker](/Tracker "Tracker") 。

### 打包

[打包](/Packaging "Packaging") 包括取得编译好的 FreeCAD 的二进制文件和 Python 源文件和将他们分发到使用的系统中

- [Linux 打包](/Linux_packaging "Linux packaging")
  - [Debian 开发版](/Debian_development "Debian development")
  - [Debian 不稳定版](/Debian_Unstable "Debian Unstable")
  - [Git 构建包](/Git_buildpackage "Git buildpackage")
- [Windows 打包](/Windows_packaging "Windows packaging")
- [MacOS 打包](/MacOS_packaging "MacOS packaging")

### 制作支持工具

- [FreeCAD 构建工具](/index.php?title=FreeCAD_Build_Tool/zh-cn&action=edit&redlink=1 "FreeCAD Build Tool/zh-cn (page does not exist)")
  - [添加应用模块](/Module_Creation/zh-cn "Module Creation/zh-cn")给 FreeCAD
- [调试](/Debugging/zh-cn "Debugging/zh-cn")FreeCAD
- [测试](/Testing/zh-cn "Testing/zh-cn")FreeCAD
- [编译（加速）](</index.php?title=Compiling_(Speeding_up)/zh-cn&action=edit&redlink=1> "Compiling (Speeding up)/zh-cn (page does not exist)")FreeCAD
- [持续集成](/index.php?title=Continuous_Integration/zh-cn&action=edit&redlink=1 "Continuous Integration/zh-cn (page does not exist)")

### 修改 FreeCAD

- 理解[FreeCAD 的源代码](/The_FreeCAD_source_code "The FreeCAD source code")
- 向 FreeCAD 或工作台添加[功能](/Gui_Command "Gui Command")
- [品牌化](/Branding/zh-cn "Branding/zh-cn")或者说*如何让 FreeCAD 看起来很特别*
- 我们为 FreeCAD 做的[艺术工作](/index.php?title=Artwork/zh-cn&action=edit&redlink=1 "Artwork/zh-cn (page does not exist)")，你可以自由重用
- [艺术工作指南](/index.php?title=Artwork_Guidelines/zh-cn&action=edit&redlink=1 "Artwork Guidelines/zh-cn (page does not exist)")列出了图标设计的标准
- [翻译 FreeCAD](/index.php?title=Localisation/zh-cn&action=edit&redlink=1 "Localisation/zh-cn (page does not exist)")
- [附加 Python 模块](/index.php?title=Extra_python_modules/zh-cn&action=edit&redlink=1 "Extra python modules/zh-cn (page does not exist)")，如何在 FreeCAD 里扩展 Python 功能
- [谷歌代码之夏](/index.php?title=Google_Summer_of_Code/zh-cn&action=edit&redlink=1 "Google Summer of Code/zh-cn (page does not exist)")，参与谷歌的学生支持计划

- [Translating an external workbench](/Translating_an_external_workbench "Translating an external workbench")

### 模块开发者指南

[FreeCAD 模块开发指南](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide)：这是一本在 Github 上写作的电子书。如要贡献，请 fork 然后发送 pull request。

章节：

- 总体情况和软件架构
- 源代码结构
- Base 和 App 模块
- Gui 模块
- Python 包封
- 模块设计
- FEM 模块源代码分析（混合了 C++和 Python）
- CFD 模块的开发（纯 Python）
- 模块测试和纠错
- 通过 git 贡献代码

这个 git 仓库的最新 pdf 预览版，可以在[pdf 文件夹](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf)下载到。

### 内部结构

### OpenCascade 文档

OpenCascade 是一个用于三维曲面和实体建模、CAD 数据交换和可视化的软件开发平台，主要采用 c++库的形式出现。

- [Roman Lygin 的教程](http://opencascade.wikidot.com/romansarticles)
- [完整的在线文档](https://dev.opencascade.org/doc/overview/html/index.html)
- [参考手册](https://dev.opencascade.org/doc/refman/html/index.html)
- [OpenCascade 维基百科](http://opencascade.wikidot.com)

#### 文件格式

[File Format FCStd](/File_Format_FCStd "File Format FCStd"). The files created with FreeCAD are `.zip` files that include the [BREP](https://en.wikipedia.org/wiki/Boundary_representation) geometry, as well as XML data that describes the document.

#### Sketcher 求解器

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (forum thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) in the FreeCAD source code; important files are [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) and [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

The sketcher solver isn't perfect, as there are some issues with numerical precision when using large values, see [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

The development of a new solver architecture could improve the way the solver is used both in the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), and for assembly of 3D bodies. See [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## 路线图

FreeCAD 虽然在特定领域已经可用了，但是在跨入主流 CAD 的路途上，它才走了万里长征第一步。要登上与商业软件一争高下的平台，我们还有很多工作要做。

[FreeCAD 1.0 开发周期](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## 社区

- [IRC channel](ircs://irc.libera.chat:6697/freecad) ,和 [gitter channel](https://gitter.im/FreeCAD/FreeCAD)同步
- [开发论坛](https://forum.freecad.org/viewforum.php?f=6)

- [开发路线图](/index.php?title=Development_roadmap/zh-cn&action=edit&redlink=1 "Development roadmap/zh-cn (page does not exist)")

## 信用

[贡献者](/Contributors/zh-cn "Contributors/zh-cn")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/zh-cn&oldid=1392976>"
