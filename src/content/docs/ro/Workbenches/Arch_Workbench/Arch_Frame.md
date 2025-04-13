---
title: Arch Cadru/Frame
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                         |
| --------------------------------------------------------------------------------------- |
| Arch Frame                                                                              |
| poziția meniului                                                                        |
| Arch → Frame                                                                            |
| Ateliere                                                                                |
| [Arch](/Arch_Workbench "Arch Workbench")                                                |
| scurtătură                                                                              |
| F R                                                                                     |
| Prezentat în versiune                                                                   |
| -                                                                                       |
| A se vedea, de asemenea,                                                                |
| [Arch Wall](/Arch_Wall "Arch Wall"), [Arch Structure](/Arch_Structure "Arch Structure") |
|                                                                                         |

## Descriere

Instrumentul de cadru/dulgherie este utilizat pentru a construi toate tipurile de obiecte de tâmplărie pe baza unui profil și a unei căi. Profilul este extrudat de-a lungul liniilor căii care poate consta din orice obiect 2D, de exemplu dintr-un [sketch](/Sketcher_Workbench/it "Sketcher Workbench/it") sau dintr-un [draft object](/Draft_Workbench "Draft Workbench"). Este deosebit de util pentru crearea de balustrade sau ziduri de tamplarie. Obiectele de dulgherie pot fi transformate cu ușurință în obiecte [wall](/Arch_Wall "Arch Wall") sau

```
structure ..

```

![](/images/Arch_Frame_example.jpg)

_În imaginea de mai sus, un [line](/Draft_Line "Draft Line") a fost transformat într-un [array](/Draft_Array "Draft Array") și un obiect cadru a fost făcut utilizând matricele ca aspect și un [circleca](/Draft_Circle "Draft Circle") profil._

## Cum se folosește

1. Creați un aspect al unui obiect și profilul unui un obiect, de exemplu cu [Draft Workbench](/Draft_Workbench "Draft Workbench") sau [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench")
2. Selectați primul obiect în aspect, apoi țineți apăsată tasta CTRL și selectați obiectul care urmează a fi profilat
3. Apăsați butonul ![](/images/Arch_Frame.png) [Arch Frame](/Arch_Frame "Arch Frame"), sau apăsați tastele în ordine F apoi R

## Opţiuni

- Articolele de tâmplărie/Frames partajează proprietățile și comportamentele comune ale tuturor componentelor [Arc Components](/Arch_Component "Arch Component")
- Prin setarea proprietății Offset, obiectul de dulgherie poate fi poziționat la distanța dorită de obiectul urmărit.
- Profilul va fi copiat la baza fiecărei margini a obiectului de aspect, apoi extrudat de-a lungul acestuia. Puteți controla modul în care profilul este plasat la baza fiecărei margini cu proprietățile Align and Rotation.

## Proprietăți

An Arch Frame object shares the common properties and behaviors of all [Arch Components](/Arch_Component "Arch Component").

### Data

Component

- Date**Base** (`Link`): The layout this frame is based on.

For the other properties in the group see [Arch Component](/Arch_Component#Properties "Arch Component").

Frame

- Date**Base**: The layout this frame is based on.
- Date**Profile**: The profile this frame is based on.
- Date**Align**: Specifies if the profile must be rotated to have its normal axis aligned with each edge.
- Date**Offset**: An optional distance between the layout object and the frame object.
- Date**Rotation**: The rotation of the profile around its extrusion axis.

## Scripting

## Scrip-Programare

Instrumentul Frame poate fi utilizat în [macros](/Macros "Macros") și de la consola python utilizând următoarele funcții:

```
Frame = makeFrame(baseobj, profile)

```

- Creează un obiect cadru dintr-o schiță de bază (sau orice alt obiect care conține fire) și un obiect profil (un obiect extrudabil 2D care conține fețe sau fire închise)
- Returnează noul obiect cadru sau Niciunul dacă operația a eșuat.

Exempluː

```
import Draft, Arch

Line = Draft.makeLine(FreeCAD.Vector(0, 0, 0), FreeCAD.Vector(0, 0, 2000))
baseobj = Draft.makeArray(Line, FreeCAD.Vector(1000, 0, 0), FreeCAD.Vector(0, 1, 0), 6, 1)

profile = Draft.makeCircle(200)
Frame = Arch.makeFrame(baseobj, profile)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Frame/ro&oldid=1539675>"
