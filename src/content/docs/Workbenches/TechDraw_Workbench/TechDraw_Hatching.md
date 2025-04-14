---
title: TechDraw Hatching
---

## Description

The TechDraw workbench includes two hatching tools:

- ![](/images/TechDraw_Hatch.svg) [TechDraw Hatch](/TechDraw_Hatch "TechDraw Hatch") (based on tiled SVG or bitmap images)
- ![](/images/TechDraw_GeometricHatch.svg) [TechDraw GeometricHatch](/TechDraw_GeometricHatch "TechDraw GeometricHatch") (line based)

## Image based hatch

![](/images/TechDraw_Hatch.svg) [TechDraw Hatch](/TechDraw_Hatch "TechDraw Hatch") uses tiled [SVG](/SVG "SVG") or bitmap ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) images to cover the selected Face. The origin of the tiling grid will match the geometric center of the face.

[SVG](/SVG "SVG") tiles are typically **64x64** pixel images. All pattern files that come with FreeCAD are available on [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

Bitmap based patterns are displayed with a fixed resolution of 10 px/mm relative to the page.

The default hatch pattern file can be specified in the [TechDraw Preferences](/TechDraw_Preferences "TechDraw Preferences").

### Available SVG patterns

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

## Geometric hatch

![](/images/TechDraw_GeometricHatch.svg) [TechDraw GeometricHatch](/TechDraw_GeometricHatch "TechDraw GeometricHatch") forms a pattern of lines based on a specification read from a file. This file is generally compatible with the widely used AutoDesk® PAT format. A small selection of patterns is included in the FCPAT.pat file:

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

You can add your own patterns if you have write permission to FCPAT.pat, or you can create your own \*.pat file and point to it in [TechDraw Preferences](/TechDraw_Preferences "TechDraw Preferences").

### PAT File Path

The `FCPAT.pat` file can be found in the following location.

- **Windows**: `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`
- **Mac**: `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Linux**: `/usr/share/freecad/Mod/TechDraw/PAT/`
  - _freecad-daily PPA_: `/usr/share/freecad-daily/Mod/TechDraw/PAT/`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/en&oldid=1257881>"
