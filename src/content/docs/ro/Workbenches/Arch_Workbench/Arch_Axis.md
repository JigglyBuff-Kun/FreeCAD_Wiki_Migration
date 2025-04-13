---
title: Arch Axis
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Arch Axis                                                                               |
| poziția meniului                                                                        |
| Arch → Axis                                                                             |
| Ateliere                                                                                |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro")                                          |
| scurtătură                                                                              |
| A X                                                                                     |
| Prezentat în versiune                                                                   |
| -                                                                                       |
| A se vedea, de asemenea,                                                                |
| [Axis System](/Arch_AxisSystem/ro "Arch AxisSystem/ro"), [Grid](/Arch_Grid "Arch Grid") |
|                                                                                         |

## Descriere

Instrumentul Axis vă permite să plasați o serie de axe în documentul curent. Distanța și unghiul dintre axe sunt personalizabile, precum și stilul de numerotare. Axa servește în principal ca trimiteri la obiecte de tip ancoră (snap), dar poate fi folosită și împreună cu [Axes Systems](/Arch_AxisSystem "Arch AxisSystem"), și poate fi conectat de alte obiecte Arch pentru a crea rețele parametrice, de exemplu grinzi sau coloane [Grids](/Arch_Grid "Arch Grid") can also be used in places of axes.

![](/images/Arch_Axis_example.jpg)

"Imaginea de mai jos arată două obiecte diferite poziționate perpendicular una pe cealaltă"

## Cum se folosește

1. apăsați tasta ![](/images/Arch_Axis.png) [Arch Axis](/Arch_Axis "Arch Axis"), sau A then X keys
2. [Move](/Draft_Move "Draft Move")/[rotate](/Draft_Rotate "Draft Rotate") axele sistemului în poziția dorită
3. Intrați în modul de editare făcând dublu clic pe sistemul de axe din vizualizarea arborescentă pentru a regla setările sale, cum ar fi numărul de axe, distanțele și unghiurile dintre axe.

## Opţiuni

- Fiecare axă din serie are distanța și unghiul propriu față de axa anterioară. Aceasta permite realizarea unor sisteme foarte complexe, cum ar fi sistemele non-ortogonale, sistemele polar sau orice alt sistem neuniform
- Dublu clic pe axă în arborele vederilor permite editarea distanțelor, unghiurilor și etichetei fiecărei axe
- Lungimile axelor, dimensiunea bulelor și stilurile de numerotare sunt personalizabile direct prin proprietățile sistemului de axe
- Fiecare axă poate afișa, de asemenea, o etichetă, editabilă și prin dialogul panoului de activități

## Proprietăți

- Date**Length**: Lungimea axelor
- Vizualizare**Bubble Size**: Mărimea bulei axei
- Vizualizare**Numeration style**: cum sunt numerotate axele: 1,2,3, A,B,C, etc...
- Vizualizare**Bubble Position**: Unde este plasată bula pe axă: La început, la capăt, ambele sau niciuna.
- Vizualizare**Font Name**: Fontul folosit pentru a desena numprul bulei și/sau etichetei
- Vizualizare**Font Size**: Mărimea etichetei text (Textul bulei este controlat de mărimea bulei)
- Vizualizare**Show Labels**: Activează/dezactivează afișarea textului etichetei

## Use as section mark

By setting the **Bubble Position** property to **Arrow left/right** or **Bar left/right**, the axis will display a filled arrow or bar instead of the bubble, so it can be used as a section mark. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Scripting

## Script

Instrumentul Axis poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând umătoarea funcție:

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

: makes an axes series bazat pe numărul dat de axe și de intervalul dintre ele

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

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/ro&oldid=1447116>"
