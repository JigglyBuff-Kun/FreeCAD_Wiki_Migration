---
title: Arch Panel Cut
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch Panel Cut                                                                                                                                                                                                                                                                            |
| poziția meniului                                                                                                                                                                                                                                                                          |
| Arch → Panel Tools → Panel Cut                                                                                                                                                                                                                                                            |
| Ateliere                                                                                                                                                                                                                                                                                  |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                                                                                                                                                                            |
| scurtătură                                                                                                                                                                                                                                                                                |
| P C                                                                                                                                                                                                                                                                                       |
| Prezentat în versiune                                                                                                                                                                                                                                                                     |
| -                                                                                                                                                                                                                                                                                         |
| A se vedea, de asemenea,                                                                                                                                                                                                                                                                  |
| [Arch Panel/ro](/Arch_Panel/ro "Arch Panel/ro"), [Arch Panel Sheet/ro](/index.php?title=Arch_Panel_Sheet/ro&action=edit&redlink=1 "Arch Panel Sheet/ro (page does not exist)"), [Arch Nest/ro](/Arch_Nest/ro "Arch Nest/ro"), [Path Workbench/ro](/Path_Workbench/ro "Path Workbench/ro") |
|                                                                                                                                                                                                                                                                                           |

## Descriere

Acest instrument creează, în documentul 3D, o vizualizare plană 2D a unui panou [Arch Panel](/Arch_Panel "Arch Panel"), care va fi inclus într-o [Arch Panel Sheet](/Arch_Panel_Sheet "Arch Panel Sheet") sau exportată direct în [DXF](/Draft_DXF "Draft DXF"). Obiectele Panel Cut sunt, de asemenea, acceptate de [Path Workbench](/Path_Workbench "Path Workbench").

![](/images/Arch_Wikihouse_02.jpg)

## Cum se folosește

1. Selecta'i unul sau mai multe obiecte [Arch Panel](/Arch_Panel "Arch Panel") objects
2. Apăsați butonul ![](/images/Arch_Panel_Cut.png) [Arch Panel Cut](/Arch_Panel_Cut "Arch Panel Cut"), sau apăsați tastele în ordine P apoi C
3. Modificați propreitățile dorite

## Opţiuni

- În cazul în care panoul nu este plat (de exemplu, ondulat), relieful nu va apărea în panoul tăiat. Acest instrument este util în special pentru panourile plate
- The panel cut can display a tag. This tag can be a custom line of text or can automatically show the Tag, Label or Description of its linked Panel.
- To be useful for CNC machining, the tag should be written using a sticky font, where letters are simple polylines that are easy for the machine to follow. Upon creation, the Panel Cut object will automatically use the font specified in Edit → Preferences → Draft → Texts and Dimensions → ShapeString Font
- Double-clicking on the panel cut in the tree view after it is created allows you to enter edit mode and modify the position of the tag
- Atunci când aveți nevoie să structurați diferite tăieturi de panouri împreună, panourile de tăiere pot afișa o marjă, care este utilă pentru a vă asigura că un spațiu este întotdeauna prezent între o tăietură și alta

## Proprietăți

### Data

- Date**Source**: Obiectul [Arch Panel](/Arch_Panel "Arch Panel") afișat de Cut sa
- Date**Tag Text**: The text to display. Can be %tag%, %label% or %description% to display the panel tag or label
- Date**Tag Size**: The size of the tag text
- Date**Tag Position**: The position of the tag text. Keep (0,0,0) for automatic center position
- Date**Tag Rotation**: The rotation of the tag text
- Date**Font File**: The font of the tag text
- Vizualizare**Margin**: A margin that can be displayed outside the panel cut shape
- Vizualizare**Show Margin**: Turns the display of the margin on/off
- Date**Make Face**: Dacă este True, panelul este o Part Face, altfel este o Part Wire

### View

- Vizualizare**Margin**: A margin that can be displayed outside the panel cut shape
- Vizualizare**Show Margin**: Turns the display of the margin on/off

## Scripting

## Scrip-Programare

Instrumentul Panel poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând următoarele funcții:

```
View = makePanelCut(panel, name="PanelView")

```

- Creates a `View` object (2D projection) from the existing `panel`.

Exempluː

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutoriale

- [Wikihouse porting tutorial](/Wikihouse_porting_tutorial "Wikihouse porting tutorial")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/ro&oldid=1433138>"
