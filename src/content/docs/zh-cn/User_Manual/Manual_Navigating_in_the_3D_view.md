---
title: 手册：在 3D 视图中导航
---

### 话说 3D 空间

如果这是您第一次接触 3D 应用程序，您首先需要了解一些概念。如果不是，您可以安全地跳过本节。

FreeCAD 的 3D 空间是一个 [欧几里德空间](https://en.wikipedia.org/wiki/Euclidean_space)。它具有一个原点和三个轴：X、Y 和 Z。如果您从上方观察场景，按照惯例，X 轴指向右侧，Y 轴指向后方，Z 轴指向上方。在 FreeCAD 视图的右下角，您始终可以看到您观察场景的位置：

三个轴相交的点是原点。它是所有坐标值为零的点。对于任意给定的轴，向一个方向移动将增加坐标值，向相反方向移动将减小坐标值。在 3D 空间中存在的每个对象的每个点都可以通过其 (x, y, z) 坐标来确定位置。例如，具有坐标 (2, 3, 1) 的点将位于 X 轴上 +2 个单位，Y 轴上 +3 个单位，Z 轴上 +1 个单位：

![](/images/3dspace_coordinates.jpg)

### FreeCAD 3D 视图

#### 鼠标导航

在 FreeCAD 的 3D 视图中进行导航可以使用鼠标、Space Navigator 设备、键盘、触摸板或它们的组合。FreeCAD 实现了几种导航模式，决定了如何执行三种基本的视图操作（平移、旋转和缩放），以及如何在屏幕上进行对象选择。导航模式可以从首选项界面访问，或直接通过在 3D 视图的任意位置右键单击来访问：

![](/images/FreeCAD_022_NavigationMethod.png)

每个模式将不同的鼠标按钮、鼠标+键盘组合或鼠标手势分配给这四种操作。下表显示了主要可用的模式：

| 模式           | 平移                                                                                                                                                           | 旋转                                                                                                                                                                         | 缩放                                                                                                                                                                | 选择                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| OpenInventor   | [点击鼠标中键](/File:Pan-mouse.svg "点击鼠标中键")                                                                                                             | [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                                                                                                                        | [滚动鼠标中键](/File:Zoom-mouse.svg "滚动鼠标中键")                                                                                                                 | 按住 Ctrl + 拖动 [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")       |
| CAD **(默认)** | [点击鼠标中键](/File:Pan-mouse.svg "点击鼠标中键") 或 [点击鼠标右键 + 按住 CTRL 键](/File:Pan-mouse-CTRL.svg "点击鼠标右键 + 按住 CTRL 键")                    | [按住鼠标中键然后按下左键](/File:Rotate-mouse.svg "按住鼠标中键然后按下左键") 或 [点击鼠标右键 + 按住 SHIFT 键](/File:Rotate-mouse-SHIFT.svg "点击鼠标右键 + 按住 SHIFT 键") | [滚动鼠标中键](/File:Zoom-mouse.svg "滚动鼠标中键") 或 [点击鼠标右键 + 按住 CTRL + SHIFT 键](/File:Zoom-mouse-CTRL-SHIFT.svg "点击鼠标右键 + 按住 CTRL + SHIFT 键") | [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                        |
| Blender        | 按住 Shift + 拖动 [点击鼠标中键](/File:Pan-mouse.svg "点击鼠标中键") 或拖动 [点击鼠标左键 + 右键并拖动](/File:Mouse_LMB%2BRMB.svg "点击鼠标左键 + 右键并拖动") | [点击鼠标中键](/File:Pan-mouse.svg "点击鼠标中键")                                                                                                                           | [滚动鼠标中键](/File:Zoom-mouse.svg "滚动鼠标中键")                                                                                                                 | [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                        |
| 触摸板         | 按住 Shift + 拖动 [触摸板（鼠标）指针](/File:Touchpad.png "触摸板（鼠标）指针")                                                                                | Alt + [触摸板（鼠标）指针](/File:Touchpad.png "触摸板（鼠标）指针")                                                                                                          | PgUp / PgDn                                                                                                                                                         | [点击触摸板（鼠标）左键](/File:Select-touchpad.png "点击触摸板（鼠标）左键") |
| 手势           | 拖动 [点击鼠标右键](/File:Pan-mouse-Ctrl.svg "点击鼠标右键")                                                                                                   | 拖动 [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                                                                                                                   | [滚动鼠标中键](/File:Zoom-mouse.svg "滚动鼠标中键")                                                                                                                 | [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                        |
| OpenCascade    | [点击鼠标中键](/File:Pan-mouse.svg "点击鼠标中键")                                                                                                             | [按住鼠标中键然后按下右键](/File:Rotate-mouse-MMB%2BRMB.svg "按住鼠标中键然后按下右键")                                                                                      | [滚动鼠标中键](/File:Zoom-mouse.svg "滚动鼠标中键")                                                                                                                 | [点击鼠标左键](/File:Select-mouse.svg "点击鼠标左键")                        |

It's worth noting that when a user hovers over the navigation styles menu located at the bottom right of the screen, a tooltip will appear. This tooltip provides a brief description of the highlighted navigation style, offering immediate guidance on its use.

![](/images/FreeCAD_022_NavigationHover.png)

#### 键盘导航

另外，一些键盘控制在任何导航模式下始终可用：

- Ctrl + ![](/images/Ascii_043.svg) 和 Ctrl + ![](/images/Ascii_022.svg) 分别用于放大和缩小视图。
- 箭头键 ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg) 用于左右和上下平移视图。
- Shift + ![](/images/Ascii_017.svg) 和 Shift + ![](/images/Ascii_016.svg) 用于将视图旋转 90 度。
- 数字键 ![](/images/Ascii_048.svg)![](/images/Ascii_049.svg)![](/images/Ascii_050.svg)![](/images/Ascii_051.svg)![](/images/Ascii_052.svg)![](/images/Ascii_053.svg)![](/images/Ascii_054.svg) 分别对应七个标准视图：![](/images/Std_ViewIsometric.svg) [等轴视图](/Std_ViewIsometric "Std ViewIsometric"), ![](/images/Std_ViewFront.svg) [前视图](/Std_ViewFront "Std ViewFront"), ![](/images/Std_ViewTop.svg) [顶视图](/Std_ViewTop "Std ViewTop"), ![](/images/Std_ViewRight.svg) [右视图](/Std_ViewRight "Std ViewRight"), ![](/images/Std_ViewRear.svg) [后视图](/Std_ViewRear "Std ViewRear"), ![](/images/Std_ViewBottom.svg) [底视图](/Std_ViewBottom "Std ViewBottom") 和 ![](/images/Std_ViewLeft.svg) [左视图](/Std_ViewLeft "Std ViewLeft")。
- VO 将视图设置为![](/images/View-isometric.svg) [正交视图](/Std_OrthographicCamera "Std OrthographicCamera")。
- 而 VP 将视图设置为![](/images/View-perspective.svg) [透视视图](/Std_PerspectiveCamera "Std PerspectiveCamera")。
- Ctrl 允许你选择多个对象或元素。

这些控制项也可以通过[视图菜单](/Std_View_Menu "Std View Menu")和一些通过视图工具栏访问。

#### Using the Navigation Cube

#### 使用导航聚焦区

在默认设置中，3D 视图的右上角有一个[导航聚焦区](/Navigation_Cube "Navigation Cube")。
可以使用它以固定的角度旋转显示的对象，
将显示重置为几种标准视图之一，
以及更改显示模式。

![](/images/FreeCAD_022_Cube.png)

单击一个面将切换到该面的视图；
单击一个角将切换到以该角朝向您的视图。

导航集群的右下方有一个较小的迷你立方体，点击它会弹出一个下拉菜单，允许您切换视图模式。

### 选择对象

在 3D 视图中，可以通过使用相应的鼠标按钮（根据上面描述的导航模式）来选择对象。单击将选择对象及其子组件（边、面、顶点）之一。双击将选择对象及其所有子组件。您可以通过按住 CTRL 键来选择多个子组件，甚至可以从不同对象中选择不同的子组件。在 3D 视图的空白部分上点击选择按钮将取消选择所有内容。

一个名为“选择视图”的面板，可以在“视图”菜单中找到，也可以打开，它会显示当前选择的内容：

![](/images/Selection_view.jpg)

您还可以使用选择视图通过搜索特定对象来进行选择。

**延伸阅读**

- [FreeCAD 导航模式](/Mouse_navigation "Mouse navigation")
- [导航立方体](/Navigation_Cube "Navigation Cube")

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Navigating_in_the_3D_view/zh-cn&oldid=1528456>"
