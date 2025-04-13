---
title: 图像模块
---

:::caution
TheImage Workbenchis no longer included after version 0.20.Its functionality has been integrated inStd Base. SeeStd ImportandStd ViewLoadImage.
:::
![](/images/Workbench_Image.svg)

Image workbench icon

## 简介

[图像工作台](/Image_Workbench "Image Workbench")用于管理不同类型的[位图](/Bitmap "Bitmap")图像，用户可借此在 FreeCAD 中打开这些图像。

## 工具

- ![](/images/Image-import.svg) [Open](/Image_Open "Image Open"): 在新的视口中打开图像。
- ![](/images/Image-import-to-plane.svg) [Import to plane](/Image_CreateImagePlane "Image CreateImagePlane"): 将图像导入至 3D 视图中的平面内。
- ![](/images/Image-scale.svg) [Scaling](/Image_Scaling "Image Scaling"): 对导入至平面内的图像进行缩放处理。

## 特性

- 与[草图](/Sketcher_Workbench "Sketcher Workbench")相似，我们可将导入的图像附于 XY，XZ 或 YZ 主平面之一，并为之调整正、负偏移值。
- 导入图像的比例关系为 1 像素:1 毫米。
- 建议导入具有合理分辨率的图像。

## Workflow

## 工作流程

图形工作台的一个主要用途就是借助[底图](/Draft_Workbench "Draft Workbench")或[草图](/Sketcher_Workbench "Sketcher Workbench")工具对目标图像进行描边，即为了基于目标图像的轮廓来生成对应实体。

若要进行描边处理，最好是令图像距工作平面有个较小的负偏移量，例如-0.1 mm。这就意味着图像将稍稍偏于绘制 2D 几何图形平面的后侧，继而就不会把 2D 底图/草图绘制在图像上了。

可在导入图像时设置其偏移量，或者在后面的处理流程中通过修改其属性来实现这一点。

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_Workbench/zh-cn&oldid=1295071>"
