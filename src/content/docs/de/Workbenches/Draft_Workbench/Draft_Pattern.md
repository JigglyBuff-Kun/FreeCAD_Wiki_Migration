---
title: Draft Muster
---
## Beschreibung

[Draft](/Draft_Workbench/de "Draft Workbench/de")-Objekte mit einer Daten-Eigenschaft**Make Face** können ein SVG-Schraffurmuster anstelle einer einfarbigen Fläche anzeigen.

![](/images/DraftPatternSample.png)

Eine Ellipse und ein Vieleck mit einem SVG-Schraffurmuster

## Anwendung

1. Sicherstellen, dass die Objekte geschlossen sowie eben sind und sich nicht selbst schneiden.
2. Um einen [Draft-Linienzug](/Draft_Wire/de "Draft Wire/de"), einen [Draft-B-Spline](/Draft_BSpline/de "Draft BSpline/de"), eine [Draft-KubischeBézierkurve](/Draft_CubicBezCurve/de "Draft CubicBezCurve/de") oder eine [Draft-Bézierkurve](/Draft_BezCurve/de "Draft BezCurve/de") zu schließen, wird deren Daten-Eigenschaft**Closed** auf `true` gesetzt.
3. Um einen [Draft-Kreis](/Draft_Circle/de "Draft Circle/de") oder eine [Draft-Ellipse](/Draft_Ellipse/de "Draft Ellipse/de") zu schließen, werden ihre Daten-Eigenschaft**First Angle** und ihre Daten-Eigenschaft**Last Angle** auf denselben Wert gesetzt.
4. Die Objekte auswählen.
5. Auf den Reiter **Ansicht** des [Eigenschateneditors](/Property_editor/de "Property editor/de") wechseln.
6. Die Ansicht-Eigenschaft**Display Mode** muss auf `Flat Lines` gesetzt sein.
7. Ein Schraffurmuster der Ansicht-Eigenschaft**Pattern** auswählen.
8. Wahlweise die Ansicht-Eigenschaft**Pattern Size** (Größe des Schrafurmusters) ändern. Man beachte, dass ein höherer Wert zu einem dichteren Muster führt.
9. Das Schrafurmuster wird nicht angezeigt, wenn die Objekte ausgewählt sind. Die Auswahl der Objekte aufheben, um das Ergebnis zu überprüfen.
10. Wahlweise die Objekte erneut auswählen, um die Mustereigenschaften zu ändern.

## Verfügbare Muster

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

## Hinweise

* SVG-Schraffurmuster werden in .SVG-Dateien gespeichert. Es ist möglich, eigene Muster zu verwenden. Siehe [Einstellungen](#Einstellungen).
* Die Muster selbst werden nicht im FreeCAD-Dokument gespeichert. Objekte, deren Ansicht-Eigenschaft**Pattern** nicht gefunden wird, werden stattdessen mit einer einfarbigen Fläche dargestellt.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* um die Ansicht-Eigenschaft**Pattern Size**, die für neue Objekte verwendet wird, zu ändern: **Bearbeiten → Einstellungen... → Draft → Ansicht → SVG-Mustergröße**.
* Um ein Verzeichnis mit zusätzlichen SVG-Mustern anzugeben: **Bearbeiten → Einstellungen... → Draft → Ansicht → Ablageort alternativer SVG-Muster**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/de&oldid=1500917>"