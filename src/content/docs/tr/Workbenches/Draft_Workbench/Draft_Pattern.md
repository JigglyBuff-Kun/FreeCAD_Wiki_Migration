---
title: Taslak Desen
---
## Description

## Açıklama

[Dikdörtgen](/Draft_Rectangle/tr "Draft Rectangle/tr"), [Çember](/Draft_Circle/tr "Draft Circle/tr"), [Elips](/Draft_Ellipse "Draft Ellipse"), [Tel](/Draft_Wire/tr "Draft Wire/tr") veya [Çokgen](/Draft_Polygon/tr "Draft Polygon/tr") gibi tüm kapatılabilir Taslak nesneleri, kapalı ve "Düz Çizgiler" görüntüleme moduna ayarlandığında, "Desen" özelliklerini ayarlayarak yüz rengi yerine bir tarama deseni görüntüleyebilir.

![](/images/DraftPatternSample.png)

![](/images/DraftPatternSample.png)

## Usage

## Nasıl kullanılır

1. Nesneyi seçin
2. Combo View'da → Veri: nesnenin deseni ayarlamak için yüze sahip olduğundan emin olmak için Yüzü true olarak ayarla
3. Combo View'da → Görünüm → Desen: Bir tarama deseni belirtin
4. Combo View → Görünüm → Desen Boyutu ile doldurun: kapak deseninin boyutunu belirtin

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
* The patterns themselves are not saved in the FreeCAD document. Objects whose Görünüm**Pattern** cannot be found are displayed with a solid face color instead.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the Görünüm**Pattern Size** used for new objects: **Edit → Preferences... → Draft → Visual → SVG pattern size**.
* To specify a directory with addition SVG patterns: **Edit → Preferences... → Draft → Visual → Additional SVG pattern location**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/tr&oldid=1338369>"