---
title: Architektura Prostor
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Space |
| Umístění Menu |
| Architecture → Space |
| Pracovní stoly |
| [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| S P |
| Představen ve verzi |
| 0.14 |
| Viz také |
| [Arch Wall/cs](/Arch_Wall/cs "Arch Wall/cs"), [Arch Structure/cs](/Arch_Structure/cs "Arch Structure/cs") |
|  |

## Description

## Popis

Nástroj Prostor umožňuje definovat prázdný objem, který je buď založen na tělese nebo definován svými hranicemi nebo mixem obou postupů. Je-li založen výhradně na tělese, je objem počítán od ohraničujícího boxu ze všech daných hranic a odečtem prostoru za každou hranicí. Objekt Prostor vždy definuje objem tělesa. Podlahová plocha objektu Prostor, počítaná z průsečíku vodorovné roviny ve středu objemu prostoru, také může být zobrazen, nastavením zobrazovacího módu objektu prostoru na "detailní".

![](/images/Arch_Space_example.jpg)

*Na obrázku výše je objekt prostoru vytvořen z existujícího tělesa, potom jsou přidány dvě plochy zdi jako hranice a mód zobrazení je nasatven na "detailní", aby zobrazoval podlahovou plochu.*

## Použití

* Vyberte existující těleso nebo plochy na hraničním objektu
* Stiskněte tlačítko ![](/images/Arch_Space.png) Prostor nebo klávesy S a P

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

1. Navigate to the Property View and locate the Údaje**Boundaries** property under the "Space" group.
2. On the right hand side of the Údaje**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

## Omezení

* The boundaries properties is currently not editable via GUI.
* See the [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275).

## Vlastnosti

* Údaje**Základ**: Základový objekt, pokud existuje (musí to být těleso)
* Údaje**Hranice**: Seznam volitelných prvků hranic

* Pohled**Text**: The text to show. Use $area, $label, $floor, $walls, $ceiling to insert the respective data
* Pohled**FontName**: The name of the font
* Pohled**TextColor**: The color of the text
* Pohled**FontSize**: The size of the text
* Pohled**FirstLine**: The size of the first line of text (multiplies the font size. 1 = same size, 2 = double size, etc..)
* Pohled**LineSpacing**: The space between the lines of text
* Pohled**TextPosition**: The position of the text. Leave (0,0,0) for automatic position
* Pohled**TextAlign**: The justification of the text
* Pohled**Decimals**: The number of decimals to use for calculated texts
* Pohled**ShowUnit**: Show the unit suffix or not

## Options

* To create zones that group several spaces, use an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") and set its IFC type to "Spatial Zone".
* The Space object has the same display modes as other Arch and Part objects, with one more, called **Footprint**, that displays only the bottom face of the space.

## Scripting

## Skriptování

Nástroj Prostor může být použit ve skriptech Pythonu a v [makrech](/Macros/cs "Macros/cs") použitím následující funkce:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Vytvoří objekt prostoru ze zadaných objektů.
* Objekty mohou být jeden dokument objektu, v tomto případě se objekt stane základovým objektem prostoru nebo seznam vvybraných objektů jako návratová hodnota funkce FreeCADGui.Selection.getSelectionEx(), nebo seznam dvojic (objekt, jméno subobjektu).
* Vrací nově vytvořený objekt prostoru.

Příklad:

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

After a space object is created, selected faces can be added to it with the following code:

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

Boundaries can also be removed, again by selecting the indicated faces:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/cs&oldid=1559098>"