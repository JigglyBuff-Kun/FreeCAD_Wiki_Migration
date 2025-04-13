---
title: Arch Rebar
---

|                                                          |
| -------------------------------------------------------- |
| Arch Rebar                                               |
| poziția meniului                                         |
| Arch → Rebar                                             |
| Ateliere                                                 |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")           |
| scurtătură                                               |
| R B                                                      |
| Prezentat în versiune                                    |
| -                                                        |
| A se vedea, de asemenea,                                 |
| [Arch Structure](/Arch_Structure/ro "Arch Structure/ro") |
|                                                          |

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                          |
| -------------------------------------------------------- |
| Arch Rebar                                               |
| poziția meniului                                         |
| Arch → Rebar                                             |
| Ateliere                                                 |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")           |
| scurtătură                                               |
| R B                                                      |
| Prezentat în versiune                                    |
| -                                                        |
| A se vedea, de asemenea,                                 |
| [Arch Structure](/Arch_Structure/ro "Arch Structure/ro") |
|                                                          |

## Descriere

Instrumentul Rebar vă permite să plasați barele de armătură [[1]](http://en.wikipedia.org/wiki/Rebar) în interiorul obiectelor [Arch Structure](/Arch_Structure "Arch Structure"). Obiectele bare de armătură sunt bazate pe profilele 2D, cum ar fi [sketches](/Sketcher_Workbench "Sketcher Workbench") sau [draft objects](/Draft_Workbench "Draft Workbench"), care trebuie să fie desenate pe o față a unui obiect de structură. Puteți apoi să reglați configurația armăturilor, cum ar fi numărul și diametrul barelor sau distanța de decalaj dintre cele două capete ale elementului structural.

Rebar objects are based on 2D profiles such as [Draft objects](/Draft_Workbench "Draft Workbench") and [Sketches](/Sketcher_Workbench "Sketcher Workbench"), that must be drawn on a face of the structural object. After creation you can adjust the properties of the rebar, including the number and diameter of the bars, and the offset distance between them and the faces of the structural element.

![](/images/Arch_Rebar_example.jpg)

Imaginea de mai sus prezintă un obiect structural, în care sunt desenate două schițe, care definesc două diagrame de bare. Aceste două schițe sunt apoi transformate în obiecte de armătură.

## Cum se folosește

1. Creați un elemente de [structure](/Arch_Structure "Arch Structure")
2. Switch to the [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
3. Select one face of the structural element
4. Press the ![](/images/Sketcher_NewSketch.png) [New Sketch](/Sketcher_NewSketch "Sketcher NewSketch") button to start a new sketch on the selected face
5. Draw the diagram of your bar
6. Press the ![](/images/Sketcher_LeaveSketch.png) [Leave Sketch](/Sketcher_LeaveSketch "Sketcher LeaveSketch") button to finish
7. Switch back to the [Arch Workbench](/Arch_Workbench "Arch Workbench")
8. Select the sketch you just drew
9. Press the ![](/images/Arch_Rebar.png) [Arch Rebar](/Arch_Rebar "Arch Rebar") button, or press R then B keys
10. Reglați proprietățile dorite (armăturae dvs. ar putea să nu apară imediat dacă unele dintre proprietăți creează o situație imposibilă, cum ar fi diametrul barei fiind 0 sau distanțele dispuse mai mari decât lungimea elementului structural)

Although normally a rebar is used inside an Arch Structure, since FreeCAD 0.19 the rebar can be created outside of any host object. To host a rebar inside an object, you just need to set its Date**Host**.

## Opţiuni

- Barele partajează proprietățile și comportamentele comune ale tuturor [Arch Components](/Arch_Component "Arch Component")
- The rounding value is expressed in times the diameter. If your bar has a diameter of 5mm, a rounding value of 3 will create rounding at angles with a radius of 15mm.
- Default values for new rebars can be set in the Arch preferences settings.
- If a direction vector is not specified, the direction and distance along which the bars will spread is calculated automatically from the host structural object, by taking the normal direction of the base sketch, and taking its intersection with the structural object. If you specify a direction vector, the length of that vector will also be taken into account.
- Valoarea distanței este calculată din cantitatea curentă de bare și reprezintă distanța dintre axele fiecărei bare. Prin urmare, trebuie să scădeți diametrul barei pentru a obține dimensiunea spațiului liber dintre bare.

## Proprietăți

An Arch Rebar object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

- Date**Amount**: Cantitatea de bare.
- Date**Diameter**: The diameter of the bars.
- Date**Direction**: The direction (and length) along which the bars must spread. If the value is (0,0,0), the direction is calculated automatically from the host structural object.
- Date**Offset Start**: The offset distance between the border of the structural object and the first bar.
- Date**Offset End**: The offset distance between the border of the structural object and the last bar.
- Date**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
- Date**Spacing**: Distanța dintre axele fiecărei bare.

## Scrip-Programare

_See also:_ [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Instrumentul Rebar poate fi folosit în [macros](/Macros "Macros") și din consola python utilizând următoarea funcție:

```
Rebar = makeRebar(baseobj=None, sketch=None, diameter=None, amount=1, offset=None, name="Rebar")

```

- Adăugă un obiect Bar armare la obiectul structural dat, utilizând schița dată ca profil.
- Dacă nu este indicat niciun diametru, valoare sau valoare de compensare, se aplică valorile implicite din setările preferințelor Arch.
- Returnează noul obiect Rebar.

Exempluː

```
import FreeCAD, Arch, Part

Structure = Arch.makeStructure(None, length=1000, width=1000, height=3000)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

p1 = FreeCAD.Vector(-400, 400, 0)
p2 = FreeCAD.Vector(400, 400, 0)
Sketch = FreeCAD.ActiveDocument.addObject('Sketcher::SketchObject', 'Sketch')
Sketch.MapMode = "FlatFace"
Sketch.Support = [(Structure, "Face6")]
Sketch.addGeometry(Part.LineSegment(p1, p2))
FreeCAD.ActiveDocument.recompute()

Rebar = Arch.makeRebar(Structure, Sketch, diameter=80, amount=7, offset=50)
Rebar.OffsetStart = 100
Rebar.OffsetEnd = 100
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Rebar/ro&oldid=1539728>"
