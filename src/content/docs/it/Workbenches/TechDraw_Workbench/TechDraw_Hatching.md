---
title: TechDraw Tratteggio
---

## Descrizione

TechDraw include due strumenti per il tratteggio:

- ![](/images/TechDraw_Hatch.svg) [TechDraw Tratteggio da modello](/TechDraw_Hatch/it "TechDraw Hatch/it") (basato su tasselli SVG o immagini bitmap)
- ![](/images/TechDraw_GeometricHatch.svg) [TechDraw Tratteggio geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it") (basato su linee).

## Tratteggio basato su immagine

![](/images/TechDraw_Hatch.svg) [TechDraw Tratteggio](/TechDraw_Hatch/it "TechDraw Hatch/it") utilizza immagini affiancate [SVG](/SVG/it "SVG/it") o bitmap ([disponibile dalla versione 0.21](/Release_notes_0.21/it "Release notes 0.21/it")) per coprire la faccia selezionata. L'origine della griglia di piastrellatura corrisponderà al centro geometrico della faccia.

Di solito le tessere SVG sono delle immagini di **64x64** pixel. Tutti i file di pattern forniti con FreeCAD sono disponibili su [GitHub](https://github.com/FreeCAD/FreeCAD/tree/master/src/Mod/TechDraw/Patterns).

I modelli basati su bitmap vengono visualizzati con una risoluzione fissa di 10 px/mm rispetto alla pagina.

I modelli di tratteggio predefiniti possono essere specificati nelle [Preferenze](/TechDraw_Preferences/it "TechDraw Preferences/it").

### Modelli SVG disponibili

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

## Tratteggio geometrico

Il ![](/images/TechDraw_GeometricHatch.svg) [Tratteggio geometrico](/TechDraw_GeometricHatch/it "TechDraw GeometricHatch/it") genera un modello di linee basato su una specifica letta da un file. Questo file è generalmente compatibile con il formato PAT di AutoDesk® ampiamente utilizzato. Una piccola selezione di modelli è inclusa nel file FCPAT.pat:

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

Se si dispone dell'autorizzazione alla scrittura è possibile aggiungere i propri schemi in FCPAT.pat, oppure è possibile creare il proprio file \*.pat e indicarlo nelle [Preferenze](/TechDraw_Preferences/it "TechDraw Preferences/it").

### Percorso del file PAT

Il file `FCPAT.pat` può essere trovato nel seguente percorso:

- **Windows**: `C:\Program Files\FreeCAD\data\Mod\TechDraw\PAT\`
- **Mac**: `/Applications/FreeCAD.app/Contents/Mod/TechDraw/PAT/`
- **Linux**: `/usr/share/freecad/Mod/TechDraw/PAT/`
  - _freecad-daily PPA_: `/usr/share/freecad-daily/Mod/TechDraw/PAT/`

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Hatching/it&oldid=1537846>"
