---
title: Arch AxisSystem
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch AxisSystem                                                                                                                             |
| poziția meniului                                                                                                                            |
| Arch → Axis System                                                                                                                          |
| Ateliere                                                                                                                                    |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                                                                              |
| scurtătură                                                                                                                                  |
| _Nici unul_                                                                                                                                 |
| Prezentat în versiune                                                                                                                       |
| -                                                                                                                                           |
| A se vedea, de asemenea,                                                                                                                    |
| [Arch Axis](/Arch_Axis/ro "Arch Axis/ro"), [Grid](/index.php?title=Arch_Grid/ro&action=edit&redlink=1 "Arch Grid/ro (page does not exist)") |
|                                                                                                                                             |

## Descriere

Instrumentul Axis System vă permite să combinați 2 sau 3 obiecte [Arch Axis](/Arch_Axis "Arch Axis"). Funcția principală a acestui instrument este de a calcula punctele de intersecție dintre diferitele axe incluse în acest sistem. Obiectele atelierului Arch pot folosi acest sistem pentru a duplica/multiplica forma lor la diferite punctele de intersecție.

This is useful to define the intersection points between the different axes. Arch objects can then use this system to duplicate their shape on the different intersection points.

![](/images/Arch_AxisSystem_example.jpg)

_Imaginea de mai jos arată trei obiecte [Arch Axis](/Arch_Axis "Arch Axis") combinate într-un Axis System. Un obiect coloană utilizează acest sistem ca pe propria **Axis** , pentru a avea propria formă duplicată la fiecare punct de intersecție._

## Cum se folosește

1. Opțional, selectați opbeictele [Arch Axis](/Arch_Axis "Arch Axis") pe are doriți să le introduceți în acest sistem
2. Apăsați butonul ![](/images/Arch_AxisSystem.png) [Arch AxisSystem](/Arch_AxisSystem "Arch AxisSystem")
3. Faceți clic drapta pe noul obiect axes system creat în arborele de vederă și add/edit obeictele [Arch Axis](/Arch_Axis "Arch Axis") incluse în sistem
4. Selectați orice [Arch Axis](/Arch_Axis "Arch Axis") și apăsați butonul Add sau or Delete pentru a-l adăuga sau a-l șterge to/from acest sistem
5. Definiți proprietățile **Axis** pentru orice obiect Arch pentru a-l point pe acest sistem, pentru a avea forma duplicată la punctul de intersecție al sistemului acesta

## Opţiuni

- Același obiect [Arch Axis](/Arch_Axis "Arch Axis") poate face parte din mai multe siteme
- Orice obiect shape-based poate fi utilizat ca proprietate**Axis** a obiectelor Arch. În acest caz, obiectul formă va fi duplicat de-a lungul vortexurilor obiectului Axă

## Scripting

## Script

Instrumentul Axis System poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând umătoarea funcție:

```
AxisSystem = makeAxisSystem(axes, name="Axis System")

```

Face un Axis System bazat pe lista dată de [Arch Axis](/Arch_Axis "Arch Axis")

Exempluː

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

AxisSystem = Arch.makeAxisSystem([Axes, Axes2])

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = AxisSystem
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_AxisSystem/ro&oldid=1432783>"
