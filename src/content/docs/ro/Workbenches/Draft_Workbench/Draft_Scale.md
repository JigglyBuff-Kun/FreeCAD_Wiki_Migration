---
title: Draft Scale
---
|  |
| --- |
| Draft Scale |
| poziția meniului |
| Draft → Scale |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| S C |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Clone](/Draft_Clone/ro "Draft Clone/ro") |
|  |

## Descriere

Acest instrument mărește/micșorează la scară obiectele selectate în jurul unui punct de bază. Dacă nu este selectat niciun obiect, veți fi invitat să selectați unul.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Scale_example.png)

Scaling an object around a base point

## Cum se folosește

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Selectați obiectele pe care doriți să le modificați
2. Apăsați butonul ![](/images/Draft_Scale.png) [Draft Scale](/Draft_Scale "Draft Scale") sau apăsați  S apoi tasta C
3. Faceți clic pe un prim punct al vizualizării 3D sau introduceți un coordinate pentru a defini punctul de bază al scalei
4. Se deschide un alt dialog cu opțiunile de scalare. Completați diferitele opțiuni și apăsați pe  OK pentru a accepta

## Opţiuni

### First task panel

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* To manually enter the coordinates for the base point enter the X, Y and Z component, and press Enter after each. Or you can press the ![](/images/Draft_AddPoint.svg) Enter point button when you have the desired values. It is advisable to move the pointer out of the [3D view](/3D_view "3D view") before entering coordinates.
* Press G or click the **Global** checkbox to toggle global mode. If global mode is on, coordinates are relative to the global coordinate system, else they are relative to the [working plane](/Draft_SelectPlane "Draft SelectPlane") coordinate system.
* Press S to switch [Draft snapping](/Draft_Snap "Draft Snap") on or off.
* Press the Close button to abort the command.

### Second task panel

* Pentru a introduce manual coordonatele punctului de bază, pur și simplu introduceți numerele, apoi apăsați  ENTER între fiecare componentă X, Y și Z.
* Completați valoarea de scalare X, Y și Z pentru a defini scalarea.
* Verificarea opțiunii "Scalare uniformă" va bloca X, Y și Z la aceeași valoare
* Opțiunea "Relativ la planul de lucru" va lua în considerare valorile de scalare X, Y și Z de-a lungul curentului [Working Plane](/Draft_SelectPlane "Draft SelectPlane"). În caz contrar, se utilizează indicațiile globale X, Y și Z.
* Rezultatul operației de scalare poate fi:
  + A [Draft Clone](/Draft_Clone "Draft Clone") a obiectelor originale, care nu modifică obiectele originale, dar vă permit să modificați manual factorul de scalare mai târziu (funcționează pentru toate tipurile de obiecte)
  + Obiectele originale au modificat dimensiunea lor (vor funcționa numai cu obiecte proiectate sau cu forme neparametrice)
  + Se produce o copie scalată a obiectelor de bază (va funcționa pentru toate tipurile de obiecte, dar numai copii ale obiectelor Draft vor fi parametrice)

## Notes

* The command can also scale [Image Planes](/Image_CreateImagePlane "Image CreateImagePlane"), but not in clone mode.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Scrip-Programare

Instrumentul Scale poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând următoarele funcții:

```
scaled_list = scale(objectslist, scale=Vector(1,1,1), center=Vector(0,0,0), copy=False)

```

* Scalarea obiectelor conținute în alte obiecte (care poate fi o listă de obiecte sau un obiect) a factorilor scalei date definite de vectorul dat (în direcțiile X, Y și Z) în jurul centrului dat.
* Dacă moștenirea este adevărată, se utilizează modul direct (vechi), în caz contrar se face o copiere parametrică.
* Dacă copia este Adevărată, obiectele reale nu sunt mutate, dar sunt create copii.
* Obiectele (sau copiile lor) sunt returnate.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

pts = [App.Vector(0, 0, 0), App.Vector(500, 500, 0), App.Vector(600, 0, 0)]
wire1 = Draft.make_wire(pts, closed=True)
doc.recompute()

scale1 = App.Vector(2.3, 0.75, 0)
wire2 = Draft.scale(wire1, scale1, copy=True)
doc.recompute()

scale2 = App.Vector(-2, -1.5, 0)
wires = Draft.scale([wire1, wire2], scale2, copy=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Scale/ro&oldid=1513523>"