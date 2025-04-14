---
title: TechDraw Schraffieren
---

## Beschreibung

Der Arbeitsbereich Techdraw verfügt über zwei Schraffierwerkzeuge:

- ![](/images/TechDraw_Hatch.svg) [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") (basiert auf gekachelten SVG- oder Bitmap-Bildern)
- ![](/images/TechDraw_GeometricHatch.svg) [TechDraw GeometrischeSchraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de") (linienbasiert)

## Bildbasierte Schraffur

![](/images/TechDraw_Hatch.svg) [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") verwendet gekachelte [SVG](/SVG/de "SVG/de")- oder ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) Bitmap-Bilder, um die ausgewählte Fläche zu schraffieren. Der Ursprung des Kachelrasters liegt auf dem Mittelpunkt der Fläche

[SVG](/SVG/de "SVG/de")-Kacheln sind typischerweise Bilder (mit einer Größe) von **64x64** Pixeln. Alle Schraffurdateien, die mit FreeCAD ausgeliefert werden, sind verfügbar unter [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/Draft/Resources/patterns).

Bitmap-basierte Muster werden mit einer unveränderlichen Auflösung von 10 px/mm relativ zum Zeichnungsblatt dargestellt.

Die Standard-Schraffurmusterdatei kann in den [TechDraw Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") festgelegt werden.

### Verfügbare SVG-Muster

- ![aluminium](/images/Aluminium.svg)

  aluminium

- ![brick01](/images/Brick01.svg)

  brick01

- ![concrete](/images/Concrete.svg)

  concrete

- ![cross](/images/Cross.svg)

  cross

- ![cuprous](/images/Cuprous.svg)

  cuprous

- ![diagonal1](/images/Diagonal1.svg)

  diagonal1

- ![diagonal2](/images/Diagonal2.svg)

  diagonal2

- ![earth](/images/Earth.svg)

  earth

- ![general_steel](/images/General_steel.svg)

  general_steel

- ![glass](/images/Glass.svg)

  glass

- ![hatch45L](/images/Hatch45L.svg)

  hatch45L

- ![hatch45R](/images/Hatch45R.svg)

  hatch45R

- ![hbone](/images/Hbone.svg)

  hbone

- ![line](/images/Line.svg)

  line

- ![plastic](/images/Plastic.svg)

  plastic

- ![plus](/images/Plus.svg)

  plus

- ![simple](/images/Simple.svg)

  simple

- ![solid](/images/Solid.svg)

  solid

- ![square](/images/Square.svg)

  square

- ![steel](/images/Steel.svg)

  steel

- ![titanium](/images/Titanium.svg)

  titanium

- ![wood](/images/Wood.svg)

  wood

- ![woodgrain](/images/Woodgrain.svg)

  woodgrain

- ![zinc](/images/Zinc.svg)

  zinc

## Geometrische Schraffur

![](/images/TechDraw_GeometricHatch.svg) [TechDraw Geometrische Schraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de") bildet ein Muster von Linien basierend auf einer aus einer Datei gelesenen Spezifikation. Diese Datei ist im Allgemeinen kompatibel mit dem weit verbreiteten AutoDesk® PAT-Format. Eine kleine Auswahl von Mustern ist in der Datei FCPAT.pat enthalten:

```
; standard PAT patterns

*Diamond, 45 diagonals L & R, Solid, 1.0 mm separation
45,0,0,0,1.0
-45,0,0,0,1.0
*Diamond2, 45 diagonals L & R, Solid, 2.0 mm separation
45,0,0,0,2.0
-45,0,0,0,2.0
*Diamond4, 45 diagonals L & R, Solid, 4.0 mm separation
45,0,0,0,4.0
-45,0,0,0,4.0
*Diagonal4, 45 diagonal R, Solid, 4.0 mm separation
45,0,0,0,4.0
*Diagonal5, 45 diagonal L, Solid, 4.0 mm separation
-45,0,0,0,4.0
*Square, square grid, Solid, 5.0 mm separation
90,1,1,0,5.0
0,0,0,1,5.0
*Horizontal5, horizontal lines, Solid 5.0 separation
0,0,0,0,5.0
*Vertical5, vertical lines, Solid, 5.0 separation
90,0,0,0,5.0

```

Es können eigenen Muster hinzugefügt werden, wenn man Schreibberechtigung für FCPAT.pat hat, oder man kann eigene \*.pat Datei erstellen und in [TechDraw Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") darauf verweisen.

### PAT-Dateipfad

Die Datei `FCPAT.pat` befindet sich im folgenden Verzeichnis:

- **Windows**: `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`
- **Mac**: `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Linux**: `/usr/share/freecad/Mod/TechDraw/PAT/`
  - _freecad-daily PPA_: `/usr/share/freecad-daily/Mod/TechDraw/PAT/`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/de&oldid=1258374>"
