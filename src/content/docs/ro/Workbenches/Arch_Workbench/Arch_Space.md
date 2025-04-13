---
title: Arch Space/Spațiu
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Arch Space                                                                              |
| Menu location                                                                           |
| Arch → Space                                                                            |
| Workbenches                                                                             |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                          |
| Default shortcut                                                                        |
| S P                                                                                     |
| Introduced in version                                                                   |
| 0.14                                                                                    |
| See also                                                                                |
| [Arch Wall](/Arch_Wall "Arch Wall"), [Arch Structure](/Arch_Structure "Arch Structure") |
|                                                                                         |

## Description

## Descriere

Instrumentul Spațiu vă permite să definiți un volum gol, fie bazându-l pe o formă solidă, fie prin definirea limitelor sale sau printr-un amestec de ambele. Dacă se bazează numai pe limite, volumul se calculează pornind de la caseta delimitată a tuturor limitelor date și scăzând spațiile din spatele fiecărei limite. Obiectul spațial definește întotdeauna un volum solid. Suprafața podelei unui obiect spațial, calculată prin intersecția unui plan orizontal cu centrul de masă al volumului spațiului, poate fi de asemenea afișată, prin setarea modului de afișare a obiectului spațial la "detaliat".

![](/images/Arch_Space_example.jpg)

_În imaginea de mai sus, un obiect spațial este creat dintr-un obiect solid existent, apoi două fețe de perete sunt adăugate ca granițe, iar modul de afișare este setat la "detaliat" pentru a afișa suprafața podelei._

## Cum se folosește

1. Selectați un obiect solid existent sau se confruntă cu obiecte de frontieră
2. Apăsați butonul ![](/images/Arch_Space.png) [Arch Space](/Arch_Space "Arch Space"), sau apăsați tastele S, P

Once a space has been created, you can also add or remove boundaries to/from it using the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons in the toolbar. Alternatively, you can also do this in the Tasks panel or in the [Property editor](/Property_editor "Property editor").

As an example, to add a boundary, given a space that intersects a wall:

1. Select the wall face that intersects the space. That will be the new boundary.
2. Keeping the Ctrl key pressed, select the space.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the toolbar.
4. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

The same example: add a boundary, given a space that intersects a wall. This time we're using the Tasks panel:

1. Double-click the space object in the Tree View. This will activate its Tasks panel.
2. Select the wall face that intersects the space. That will be the new boundary.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the Tasks panel. The name of the wall face will be displayed in the "Space boundaries" section there.
4. Press the OK button in the Tasks panel.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

Yet another alternative: add a boundary, given a space that intersects a wall. This time we're using the Property editor:

1. Navigate to the Property View and locate the Date**Boundaries** property under the "Space" group.
2. On the right hand side of the Date**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

## Limite

- Este disponibil doar pentru versiunile mai recente decât FreeCAD version 0.14
- Proprietățile Limitelor sunt ne-editabile via Gui, deocamdată
- A se vedea [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275)

## Proprietăți

- Date**Base**: Baza obiectului, dacă există una(Trebuie să fie un solid)
- Date**Boundaries**: O listă a elementelor opționale de limită

- Vizualizare**Text**: The text to show. Use $area, $label, $floor, $walls, $ceiling to insert the respective data
- Vizualizare**FontName**: The name of the font
- Vizualizare**TextColor**: The color of the text
- Vizualizare**FontSize**: The size of the text
- Vizualizare**FirstLine**: The size of the first line of text (multiplies the font size. 1 = same size, 2 = double size, etc..)
- Vizualizare**LineSpacing**: The space between the lines of text
- Vizualizare**TextPosition**: The position of the text. Leave (0,0,0) for automatic position
- Vizualizare**TextAlign**: The justification of the text
- Vizualizare**Decimals**: The number of decimals to use for calculated texts
- Vizualizare**ShowUnit**: Show the unit suffix or not

## Options

- To create zones that group several spaces, use an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") and set its IFC type to "Spatial Zone".
- The Space object has the same display modes as other Arch and Part objects, with one more, called **Footprint**, that displays only the bottom face of the space.

## Scripting

## Scrip-Programare

Instrumentul Space poate fi folosit în scripturile python și [macros](/Macros "Macros") utilizând următoarea funcție:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

- Creează un obiect Spațiu din obiectele date.
- Obiectele pot fi un obiect tip document, caz în care devine forma de bază a obiectului Spațiu sau o listă de obiecte selecate și returnate de comanda FreeCADGui.Selection.getSelectionEx () sau o listă de tuple (obiect, subobiectnume).
- Returnează un obiect Sapțiu nou creat.

Exempluː

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

După crearea unui obiect spațial, fațetele selectate pot fi adăugate la acesta cu următoarea funcție:

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

De asemenea, limitele pot fi eliminate cu:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/ro&oldid=1559094>"
