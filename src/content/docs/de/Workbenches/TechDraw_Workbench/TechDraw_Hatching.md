---
title: TechDraw Schraffieren
---

## Beschreibung

Der Arbeitsbereich Techdraw verfügt über zwei Schraffierwerkzeuge:

- ![](/src/assets/images/TechDraw_Hatch.svg) [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") (basiert auf gekachelten SVG- oder Bitmap-Bildern)
- ![](/src/assets/images/TechDraw_GeometricHatch.svg) [TechDraw GeometrischeSchraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de") (linienbasiert)

## Bildbasierte Schraffur

![](/src/assets/images/TechDraw_Hatch.svg) [TechDraw Schraffur](/TechDraw_Hatch/de "TechDraw Hatch/de") verwendet gekachelte [SVG](/SVG/de "SVG/de")- oder ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) Bitmap-Bilder, um die ausgewählte Fläche zu schraffieren. Der Ursprung des Kachelrasters liegt auf dem Mittelpunkt der Fläche

[SVG](/SVG/de "SVG/de")-Kacheln sind typischerweise Bilder (mit einer Größe) von **64x64** Pixeln. Alle Schraffurdateien, die mit FreeCAD ausgeliefert werden, sind verfügbar unter [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/Draft/Resources/patterns).

Bitmap-basierte Muster werden mit einer unveränderlichen Auflösung von 10 px/mm relativ zum Zeichnungsblatt dargestellt.

Die Standard-Schraffurmusterdatei kann in den [TechDraw Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") festgelegt werden.

### Verfügbare SVG-Muster

- ![aluminium](/src/assets/images/Aluminium.svg)

  aluminium

- ![brick01](/src/assets/images/Brick01.svg)

  brick01

- ![concrete](/src/assets/images/Concrete.svg)

  concrete

- ![cross](/src/assets/images/Cross.svg)

  cross

- ![cuprous](/src/assets/images/Cuprous.svg)

  cuprous

- ![diagonal1](/src/assets/images/Diagonal1.svg)

  diagonal1

- ![diagonal2](/src/assets/images/Diagonal2.svg)

  diagonal2

- ![earth](/src/assets/images/Earth.svg)

  earth

- ![general_steel](/src/assets/images/General_steel.svg)

  general_steel

- ![glass](/src/assets/images/Glass.svg)

  glass

- ![hatch45L](/src/assets/images/Hatch45L.svg)

  hatch45L

- ![hatch45R](/src/assets/images/Hatch45R.svg)

  hatch45R

- ![hbone](/src/assets/images/Hbone.svg)

  hbone

- ![line](/src/assets/images/Line.svg)

  line

- ![plastic](/src/assets/images/Plastic.svg)

  plastic

- ![plus](/src/assets/images/Plus.svg)

  plus

- ![simple](/src/assets/images/Simple.svg)

  simple

- ![solid](/src/assets/images/Solid.svg)

  solid

- ![square](/src/assets/images/Square.svg)

  square

- ![steel](/src/assets/images/Steel.svg)

  steel

- ![titanium](/src/assets/images/Titanium.svg)

  titanium

- ![wood](/src/assets/images/Wood.svg)

  wood

- ![woodgrain](/src/assets/images/Woodgrain.svg)

  woodgrain

- ![zinc](/src/assets/images/Zinc.svg)

  zinc

## Geometrische Schraffur

![](/src/assets/images/TechDraw_GeometricHatch.svg) [TechDraw Geometrische Schraffur](/TechDraw_GeometricHatch/de "TechDraw GeometricHatch/de") bildet ein Muster von Linien basierend auf einer aus einer Datei gelesenen Spezifikation. Diese Datei ist im Allgemeinen kompatibel mit dem weit verbreiteten AutoDesk® PAT-Format. Eine kleine Auswahl von Mustern ist in der Datei FCPAT.pat enthalten:

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
