---
title: Těleso vlečením profilu
---

|                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Solid Sweep                                                                                                                                                                                                                                |
| Popis                                                                                                                                                                                                                                      |
| Vytváří těleso vlečením profilu po trajektorii. Version macro : 1.0 Date last modification : 2011-12-03 FreeCAD version : All Download : [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png) Autor: Normandc |
| Autor                                                                                                                                                                                                                                      |
| [Normandc](/User:Normandc "User:Normandc")                                                                                                                                                                                                 |
| Download                                                                                                                                                                                                                                   |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/6/6d/Macro_Solid_Sweep.png)                                                                                                                                                          |
| Odkazy                                                                                                                                                                                                                                     |
| [Makro recepty                                                                                                                                                                                                                             | ](/Macros_recipes/cs "Macros recipes/cs") [Jak nainstalovat makra](/How_to_install_macros/cs "How to install macros/cs") [Jak přizpůsobit panely nástrojů](/Customize_Toolbars/cs "Customize Toolbars/cs") |
| Verze                                                                                                                                                                                                                                      |
| 1.0                                                                                                                                                                                                                                        |
| Datum poslední úpravy                                                                                                                                                                                                                      |
| 2011-12-03                                                                                                                                                                                                                                 |
| Verze FreeCAD                                                                                                                                                                                                                              |
| All                                                                                                                                                                                                                                        |
| Výchozí zástupce                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                     |
| Viz též                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                            |

## Description

Toto makro vytváří těleso vlečením 2D profilu po trajektorii předem vybrané ve 3D pohledu. 2D prvek může být vytvořen pomocí standardních nástrojů FreeCADu.

Musí být podotknuto, že výsledné těleso **nebude** parametrické. Jestliže se rozhodnete změnit profil nebo trajektorii, musíte spustit makro znovu.

![Několik příkladů vlečení, všechny s použitím stejné obloukové sekce, ale s jinou trajektorií.](/images/Solid_sweep.png)

## Použití

- Vytvořte dva 2D prvky, jeden pro profil, druhý pro trajektorii, některého z typů v seznamu níže.
- Nejdříve vyberte buď ve stromu projektu nebo ve 3D pohledu trajektorii a potom profil. Pořadí je důležité!
- Otevřete Správce maker, vyberte makro a klikněte na "Spusť".
- Ve stromu projektu bude vytvořen objekt **Sweep**.

## Podporované 2D prvky

- Dráty

* ![](/images/Sketcher_NewSketch.png) [Náčrty](/Sketcher_Workbench "Sketcher Workbench")
* ![](/images/Draft_BSpline.png) [Kreslení B-křivek](/Draft_BSpline "Draft BSpline")

- 2D základní geomterické prvky z _Parametric → ![](/images/Part_CreatePrimitives.png) [Tvorba základních geometrických prvků](/Part_CreatePrimitives "Part CreatePrimitives") ..._ menu (kružnice,spirála)

## Tipy

- Profil musí být uzavřený, jinak výsledkem nebude těleso.
- Profil nemusí ležet na trajektorii, ale doporučuje se aby byl normální (kolmý) k trajektorii.
- Trajektorie může být uzavřená nebo otevřená (kružnice, přímka nebo obloukový segment), ale všechny prvky by měly být tangenciální (navazovat po tangentě), jinak nebude výsledek zaručený. Například trajektorie s přímými rohy, jako je obdélník, nevytvoří těleso.
- Jestliže se těleso kroutí, upravte makro změnou hodnoty _isFrenet_ na 0 (nulu) a zkuste ještě jednou.
- Nastavením hodnoty _makeSolid_ na 0 (nulu) bude makro vytvářet sérii povrchů s otevřenými konci.

## Skript

ToolBar Icon ![](/images/Macro_Solid_Sweep.png)

**Macro_Solid_Sweep.FCMacro**

```
import Part, FreeCAD, math, PartGui, FreeCADGui
from FreeCAD import Base

# get the selected objects, with first selection for the trajectory and second for the section
s = FreeCADGui.Selection.getSelection()
try:
     shape1=s[0].Shape
     shape2=s[1].Shape
except:
     print "Wrong selection"

traj = Part.Wire([shape1])
section = Part.Wire([shape2])

# create Part objec in the current document
myObject=App.ActiveDocument.addObject("Part::Feature","Sweep")

# variable makeSolid = 1 to create solid, 0 to create surfaces
makeSolid = True #1
isFrenet = True #1

# create a 3D shape and assigh it to the current document
Sweep = Part.Wire(traj).makePipeShell([section],makeSolid,isFrenet)
myObject.Shape = Sweep
```

## Poděkování

Díky [Wmayer](/User:Wmayer "User:Wmayer") za jeho pomoc při psaní tohoto skriptu.

Dva příklady použití makra lze nalézt na [this forum topic](http://forum.freecadweb.org/viewtopic.php?f=8&t=1222&start=50#p11120), spolu s odkazem na stažení do souboru FCStd. Použitím spirály jako trajektorie může být toto makro použito pro vytvoření závitu šroubu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Solid_Sweep/cs&oldid=692531>"
