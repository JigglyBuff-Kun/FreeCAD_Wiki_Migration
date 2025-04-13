---
title: Kreslení vzoru
---
## Description

## Popis

Všechny objekty Kreslení, které mohou být uzavřené, jako je [obdélník](/Draft_Rectangle/cs "Draft Rectangle/cs"), [kružnice](/Draft_Circle/cs "Draft Circle/cs"), [elipsa](/Draft_Ellipse/cs "Draft Ellipse/cs"), [drát](/Draft_Wire/cs "Draft Wire/cs") nebo [mnohoúhelník](/Draft_Polygon/cs "Draft Polygon/cs"), jsou-li uzavřeny a je nastaven zobrazovací mód na "Flat Lines", mohou zobrazovat šrafovací vzor, místo barevné plochy, pomocí nastavení vlastnosti "Vzor".

![](/images/DraftPatternSample.png)

![](/images/DraftPatternSample.png)

## Usage

## Použití

1. Vyberte objekt
2. V rozbalovacím pohledu → Data: nastavte Vytvořit pochu na true abyste zajistili, že objekt bude mít plochy, kde bude vzor
3. V rozbalovacím pohledu → Pohled → Vzor: specifikujte šrafovací vzor pro vyplnění drátů
4. V rozbalovacím pohledu → Pohled → Velikost vzoru: specifikujte rozměr šrafovacího vzoru

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
* The patterns themselves are not saved in the FreeCAD document. Objects whose Pohled**Pattern** cannot be found are displayed with a solid face color instead.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To change the Pohled**Pattern Size** used for new objects: **Edit → Preferences... → Draft → Visual → SVG pattern size**.
* To specify a directory with addition SVG patterns: **Edit → Preferences... → Draft → Visual → Additional SVG pattern location**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/cs&oldid=1338377>"