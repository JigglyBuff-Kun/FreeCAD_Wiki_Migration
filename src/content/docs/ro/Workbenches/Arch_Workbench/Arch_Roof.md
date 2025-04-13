---
title: Arch Acoperiș
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Arch Roof                                                                               |
| poziția meniului                                                                        |
| Arch → Roof                                                                             |
| Ateliere                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                          |
| scurtătură                                                                              |
| R F                                                                                     |
| Prezentat în versiune                                                                   |
| -                                                                                       |
| A se vedea, de asemenea,                                                                |
| [Arch Structure](/Arch_Structure "Arch Structure"), [Arch Wall](/Arch_Wall "Arch Wall") |
|                                                                                         |

## Descriere

Instrumentul Acoperiș vă permite să creați un acoperiș înclinat de la o linie selctată. Obiectul de acoperiș creat este parametric, menținându-și relația cu obiectul de bază. Rețineți că acest instrument este în curs de dezvoltare și ar putea să nu reușească cu forme foarte complexe. Principiul este acela că fiecare margine este văzută alocând un profil de acoperiș (panta, lățimea, lungimea, grosimea ...).

**Note:** This tool is still in development, and might fail with very complex shapes.

![](/images/RoofExample.png)

![](/images/RoofExample.png)

## Cum se folosește

1. Create a wire with following the counterclockwise direction and select it.
   - ![](/images/CounterclockwiseWire.png)
2. Press the ![](/images/Arch_Roof.png) [Arch Roof](/Arch_Roof "Arch Roof") button, or press R then F keys
3. The default roof object could have a strange shape, it's because the tool have not all the needed informations.
4. After creating the default roof, double click on the object in the tree view to access and edit all the properties. Angle must be between 0 and 90.
   - ![](/images/RoofTable.png)
5. Each line correspond to a roof pane. So you can set properties you want for each roof pane.
6. To help you, you can set Angle or Run to 0 and defined a Relative Id, this make automatic calculs to find the data relative to the relative Id.
7. It work like this :
   1. If Angle = 0 and Run = 0 then profile is identical to the relative profile.
   2. If Angle = 0 then angle is calculated so that the height is the same one as the relative profile.
   3. If Run = 0 then Run is calculated so that the height is the same one as the relative profile.
8. At the end, set an angle to 90° to make a gable.
   - ![](/images/RoofProfil.png)
9. **Also you can check this video** : <https://www.youtube.com/watch?v=4Urwru71dVk>

## Usage (solid base)

If your roof has a complex shape (e.g. contains pitched windows or other non-standard features) you can create a custom solid object using various other FreeCAD workbenches ([Part](/Part_Workbench "Part Workbench"), [Sketcher](/Sketcher_Workbench "Sketcher Workbench") etc.). And then use this solid as the Date**Base** object of your roof:

1. Select the solid base object.
2. Press the ![](/images/Arch_Roof.svg) [Arch Roof](/Arch_Roof "Arch Roof") button, or press R then F keys.

## Subtracting a roof

Roofs have an automatically generated subtraction volume ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0") for roofs with a solid base). When a roof is [removed](/Arch_Remove "Arch Remove") from the walls of a building, both the roof itself as well as everything above it is subtracted from the walls.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): It is possible to override the automatic subtraction volume by setting the Date**Subvolume** property of the roof to a custom solid object.

![](/images/Arch_Roof_Subtract_Default.png) ![](/images/Arch_Roof_Subtract_Subvolume.png) ![](/images/Arch_Roof_Subvolume_Example.png)

Solid-based roof before (1st image) and after (2nd image) [removing](/Arch_Remove "Arch Remove") it from walls.  
The 3rd image shows the generated subtraction volume.

## Proprietăți

An Arch Roof object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Roof

- Date**Angles**: Valorea unghiurilor apei/versantului acoperișului (un unghi pentru fiecare margine filamentului).
- Date**Runs**: Proiecția orizontală a lungimii apei/versantului acoperișului (o apă/versant pentru fiecare margine a filamentului inițial).
- Date**IdRel**: Relația/raportul Id între unghiul și panta acoperișului
- Date**Thickness**: List of thickness of the roof pane. (a thickness for each edge in the wire).
- Date**Overhang**: Proiecția orizontală a streașinei fiecărei ape/versat al acoperișului (o sreașină pentru fiecare margine a filamentului original).
- Date**Face**: Indexul fațetei obiectului de bază de utilizat #Nu este deocamdaă utilizat

## Scripting

## Scrip-Programare

Instrumentul Acoperiș poate fi folosit în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
Roof = makeRoof(baseobj=None, facenr=0, angles=[45.,], run=[], idrel=[0,], thickness=[50.,], overhang=[100.,], name="Roof")

```

: Face un acoperiș pe baza unui filament închis. Puteți furniza o listă de unghiuri, run, idrel, grosime, consola pentru fiecare margine a firului pentru a defini forma acoperișului. Valoarea implicită pentru unghi este de 45 și lista este completată automat pentru a se potrivi cu numărul de muchii din fir.

Exempluː

```
import FreeCAD as App
import Arch, Draft

doc = App.newDocument()

rect = Draft.makeRectangle(3000, 4000)
doc.recompute()

roof = Arch.makeRoof(rect, angles=[30.,])

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(0, 2000, 0)

wire = Draft.make_wire([p1, p2, p3], closed=True)
doc.recompute()

roof1 = Arch.makeRoof(wire)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Roof/ro&oldid=1539735>"
