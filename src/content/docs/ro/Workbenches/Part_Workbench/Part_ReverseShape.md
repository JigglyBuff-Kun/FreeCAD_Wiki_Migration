---
title: Part ReverseShapes
---
|  |
| --- |
| Part ReverseShape‏‎ |
| Menu location |
| Part → Reverse Shapes |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Introducere

Flips the normals of all faces of the selected object.

The ![](/images/Part_ReverseShape.svg) **Part ReverseShape** command creates parametric copies with reversed face normals from selected objects.

## Utilizare

1. Selectați forma.
2. Selectați  Part → Reverse shapes din meniul principal.
3. O formă inversată este creată ca un nou obiect separat.

1. Select one or more objects.
2. Select the **Part → ![](/images/Part_ReverseShape.svg) Reverse shapes** option from the menu.
3. For each selected object a reversed shape is created.

## Note

Prin executarea acestei comenzi, FreeCAD inversează(cu susul în jos) normalele tuturor fețetelor formei / solidului.
  
Puteți verifica prin :

1. ascundeți toate celelalte obiecte, cu excepția formei/solidului inversat(ă)
2. selectați forma/solidul inversat(ă)
3. schimbați tab-ul "iluminarea" în "Vizualizare" din "Două laturi" în "O singură parte"
4. forma/solidul va deveni negru → vă uitați la partea din spate a fațetelor

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be used as source objects. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* To see the effect of the command change the Vizualizare**Lighting** property of the reversed shape to `On side` and if required change **Edit → Preferences... → Display → 3D View → Rendering → Backlight color**.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Part ReverseShape object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional property:

### Data

Reverse

* Date**Source** (`Link`): specifies the linked source shape.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ReverseShape/ro&oldid=1466410>"