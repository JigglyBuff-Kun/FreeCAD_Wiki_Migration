---
title: TechDraw Hachures
---

## Description

L'atelier TechDraw dispose de deux outils de hachurage :

- ![](/images/TechDraw_Hatch.svg) [TechDraw Hachures par motif](/TechDraw_Hatch/fr "TechDraw Hatch/fr") (sur la base d'images en mosaïque SVG ou bitmap)
- ![](/images/TechDraw_GeometricHatch.svg) [TechDraw Hachures géométriques](/TechDraw_GeometricHatch/fr "TechDraw GeometricHatch/fr") (sur la base de lignes)

## Hachure basée sur une image

![](/images/TechDraw_Hatch.svg) [TechDraw Hachures par motif](/TechDraw_Hatch/fr "TechDraw Hatch/fr") utilise des tuiles au format [SVG](/SVG/fr "SVG/fr") ou bitmap ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) pour couvrir la face sélectionnée. L'origine de la grille de tuiles correspondra au centre géométrique de la face.

Les tuiles [SVG](/SVG/fr "SVG/fr") sont typiquement des images de **64x64** pixels. Tous les fichiers de modèles fournis avec FreeCAD sont disponibles sur [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

Les motifs basés sur des images bitmap sont affichés avec une résolution fixe de 10 px/mm par rapport à la page.

Le fichier de motif de hachures par défaut peut être spécifié dans les [TechDraw Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr").

### Motifs SVG disponibles

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

### Hachures géométriques

![](/images/TechDraw_GeometricHatch.svg) [TechDraw Hachures géométriques](/TechDraw_GeometricHatch/fr "TechDraw GeometricHatch/fr") forme un motif de lignes basé sur une spécification lue dans un fichier. Ce fichier est généralement compatible avec le format AutoDesk® PAT, largement utilisé. Une petite sélection de motifs est incluse dans le fichier FCPAT.pat :

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

Vous pouvez ajouter vos propres modèles si vous avez l'autorisation d'écriture sur FCPAT.pat, ou vous pouvez créer votre propre fichier \*.pat et le pointer dans [TechDraw Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr").

### Chemin du fichier PAT

Le fichier `FCPAT.pat` peut être trouvé à l'emplacement suivant :

- **Windows** : `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`
- **Mac** : `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Linux** : `/usr/share/freecad/Mod/TechDraw/PAT/`
  - *freecad-daily PPA* : `/usr/share/freecad-daily/Mod/TechDraw/PAT/`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/fr&oldid=1258996>"
