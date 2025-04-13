---
title: Part Fuziune/Union
---
|  |
| --- |
| Part Union |
| poziția meniului |
| Part → Boolean → Union |
| Ateliere |
| [Part](/Part_Workbench/ro "Part Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Part Cut](/Part_Cut/ro "Part Cut/ro"), [Part Common](/Part_Common/ro "Part Common/ro") |
|  |

## Descriere

Unites (fuses) selected Part objects into one. This operation is fully parametric and the components can be modified and the result recomputed.

**Note:** This command is an automated form of the ![](/images/Part_Boolean.svg) [Boolean operation](/Part_Boolean "Part Boolean").

## Cum se folosește

1. Selectați două forme
2. Apăsați butonul ![](/images/Part_Fuse.png) **Part Union**.

1. Select two or more shapes
2. There are several ways to invoke the command:
   * Press the ![](/images/Part_Fuse.svg) Part Fuse button in the **Part tools** toolbar
   * Use the **Part → Boolean → Union** entry in the Part menu

## Intrări suportate

Elementele de intrare trebuie să fie forme OpenCascade. Exemple: chestii realizate cu Atelierele: Part, PartDesign, Sketcher. Nu este vorba despre plase (cu excepția cazului în care acestea au fost convertite în forme) - pentru ochiurile de plasă, există unelte specifice Booleene în Atelierul de lucru MeshDesign.

* Solid + Solid: the result is a solid that occupies all the volume covered by the inputs

* Shell + Shell, Shell + Face, Face + Face: the result is a shell. Where faces intersect, they are split. Shells can be non-manifold. After fusion, faces can be united by [Refining](/Part_RefineShape "Part RefineShape") the result.

* Wire + Wire, Edge + Wire, Edge + Edge: the result is a wire. Edges are split where they intersect.

Compounds are supported; however, it is assumed that shapes packed into a compound do not touch or intersect. If they actually do, Fusion will likely fail, or produce an incorrect result.

## Options

## Opțiuni

Elementele pot fi adăugate și scoase din fuziune/uniune, tragându-le în sau în afara funcției de siguranțe din arborele cu mouse-ul. Este necesară o recalculare manuală (apăsați tasta F5 sau faceți clic pe pictograma recompute) pentru a vedea rezultatele.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Fuse/ro&oldid=1466675>"