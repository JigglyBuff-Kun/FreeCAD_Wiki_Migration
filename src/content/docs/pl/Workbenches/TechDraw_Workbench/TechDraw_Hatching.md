---
title: Rysunek Techniczny Kreskowanie
---

## Opis

Środowisko pracy TechDraw zawiera dwa narzędzia do kreskowania:

- ![](/images/TechDraw_Hatch.svg) [Kreskowanie powierzchni za pomocą pliku obrazu](/TechDraw_Hatch/pl "TechDraw Hatch/pl") _(na podstawie kafelków SVG lub obrazów bitmapowych)_.
- ![](/images/TechDraw_GeometricHatch.svg) [Zastosuj na powierzchni kreskowanie geometryczne](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl") _(na podstawie linii)_.

## Kreskowanie oparte na obrazie

![](/images/TechDraw_Hatch.svg) [Kreskowanie powierzchni za pomocą pliku obrazu](/TechDraw_Hatch/pl "TechDraw Hatch/pl") używa kafelków [SVG](/SVG/pl "SVG/pl") lub obrazów bitmapowych ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")) do pokrycia wybranej powierzchni. Początek siatki kafelków będzie odpowiadał geometrycznemu środkowi powierzchni.

Kafelki [SVG](/SVG/pl "SVG/pl") są zazwyczaj obrazami **64x64** pikseli. Wszystkie pliki wzorów dostarczane z FreeCAD są dostępne na stronie [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

Wzory oparte na mapach bitowych są wyświetlane ze stałą rozdzielczością 10 px/mm względem strony.

Domyślny plik wzoru kreskowania można określić w [Ustawieniach](/TechDraw_Preferences/pl "TechDraw Preferences/pl").

### Dostępne wzory SVG

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

## Kreskowanie geometryczne

Narzędzie ![](/images/TechDraw_GeometricHatch.svg) [Zastosuj na powierzchni kreskowanie geometryczne](/TechDraw_GeometricHatch/pl "TechDraw GeometricHatch/pl") tworzy wzór linii na podstawie specyfikacji odczytanej z pliku. Plik ten jest ogólnie kompatybilny z szeroko stosowanym formatem AutoDesk® PAT. Niewielki wybór wzorów jest zawarty w pliku FCPAT.pat:

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

Możesz dodać własne wzorce, jeśli masz uprawnienia do zapisu do FCPAT.pat lub możesz utworzyć własny plik \*.pat i wskazać go w [ustawieniach](/TechDraw_Preferences/pl "TechDraw Preferences/pl").

### Ścieżka do pliku PAT

Plik `FCPAT.pat` można znaleźć w następującej lokalizacji.

- **Linux**: `/usr/share/freecad/Mod/TechDraw/PAT/`
  - _freecad-daily PPA_: `/usr/share/freecad-daily/Mod/TechDraw/PAT/`
- **Mac**: `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Windows**: `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/pl&oldid=1291727>"
