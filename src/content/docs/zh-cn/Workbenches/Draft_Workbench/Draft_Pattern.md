---
title: 底图图案
---
## Description

所有的闭合的底图对象，如[矩形](/Draft_Rectangle "Draft Rectangle")、[圆形](/Draft_Circle "Draft Circle")、[椭圆形](/Draft_Ellipse "Draft Ellipse")、[连线](/Draft_Wire "Draft Wire")或[多边形](/Draft_Polygon "Draft Polygon"), 当它们绘制出的是闭合图形并处于"Flat Lines"显示模式时，便可以通过设置"Pattern（图案）"属性，令指定的图案取代表面颜色填充图形。

![](/images/DraftPatternSample.png)

An ellipse and a polygon with an SVG pattern

## Usage

## 如何使用

1. 选中对象
2. 在Combo View → Data中: 将Make Face项设置为 true，从而确保存在可填充图案的对象面
3. 在Combo View → View → Pattern中: 指定一种待填充的图案
4. 在Combo View → View → Pattern Size中: 指定填充图案的大小

## Available patterns

* ![aluminium](/images/Aluminium.svg)

  aluminium
* ![brick01](/images/Brick01.svg)

  brick01
* ![concrete](/images/Concrete.svg)

  concrete
* ![cross](/images/Cross.svg)

  cross
* ![cuprous](/images/Cuprous.svg)

  cuprous
* ![diagonal1](/images/Diagonal1.svg)

  diagonal1
* ![diagonal2](/images/Diagonal2.svg)

  diagonal2
* ![earth](/images/Earth.svg)

  earth
* ![general_steel](/images/General_steel.svg)

  general\_steel
* ![glass](/images/Glass.svg)

  glass
* ![hatch45L](/images/Hatch45L.svg)

  hatch45L
* ![hatch45R](/images/Hatch45R.svg)

  hatch45R
* ![hbone](/images/Hbone.svg)

  hbone
* ![line](/images/Line.svg)

  line
* ![plastic](/images/Plastic.svg)

  plastic
* ![plus](/images/Plus.svg)

  plus
* ![simple](/images/Simple.svg)

  simple
* ![solid](/images/Solid.svg)

  solid
* ![square](/images/Square.svg)

  square
* ![steel](/images/Steel.svg)

  steel
* ![titanium](/images/Titanium.svg)

  titanium
* ![wood](/images/Wood.svg)

  wood
* ![woodgrain](/images/Woodgrain.svg)

  woodgrain
* ![zinc](/images/Zinc.svg)

  zinc

## Notes

* SVG patterns are stored in .SVG files. It is possible to use your own custom patterns. See [Preferences](#Preferences).
* The patterns themselves are not saved in the FreeCAD document. Objects whose 视图**Pattern** cannot be found are displayed with a solid face color instead.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the 视图**Pattern Size** used for new objects: **Edit → Preferences... → Draft → Visual → SVG pattern size**.
* To specify a directory with addition SVG patterns: **Edit → Preferences... → Draft → Visual → Additional SVG pattern location**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/zh-cn&oldid=1338375>"