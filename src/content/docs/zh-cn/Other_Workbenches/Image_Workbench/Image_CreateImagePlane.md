---
title: 创建图像平面工具
---
|  |
| --- |
| Image CreateImagePlane |
| Menu location |
| *None* |
| Workbenches |
| [Image](/Image_Workbench "Image Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Image Open](/Image_Open "Image Open"), [Image Scaling](/Image_Scaling "Image Scaling") |
|  |

## 描述

利用[创建图像平面](/Image_CreateImagePlane "Image CreateImagePlane")工具可导入[位图](/Bitmap "Bitmap")图像，并将它置于XY、YZ或XZ平面之中。

## 如何使用

1. 按下![](/images/Image_CreateImagePlane.svg) [Image Plane](/Image_CreateImagePlane "Image CreateImagePlane")按钮。
2. 从系统中选择希望导入的图像。
3. 选择放置图像的平面，指定偏移值，再点击OK。

生成的ImagePlane（图像平面）对象所采用的比例是1像素:1毫米；为了令图像显示效果更佳，应当令其具有足够的分辨率。

在导入图像时，为了令图像稍处于工作平面之后，您应当为之添加`-0.1 mm`的偏移量；这将令采用[底图](/Draft_Workbench "Draft Workbench")或[草图](/Sketcher_Workbench "Sketcher Workbench")工具对图像进行的描边工作（在其上侧进行描绘）进行得更为顺利。

如果在导入图片伊始没有添加偏移量，其位置仍可通过[属性编辑器](/Property_editor "Property editor")进行调整。

## 属性

Base

Base

* 数据**Position**: 指定图像平面的基准点（base point）坐标。
* 数据**Angle**: 指定图像平面的旋转角度。
* 数据**Axis**: 指定旋转轴。

Image Plane

Image Plane

* 数据**XSize**: 指定图像平面的宽度。
* 数据**YSize**: 指定图像平面的高度。
* 数据**Image Plane**: 指定用于此图像平面的对应图像。

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/zh-cn&oldid=1077187>"