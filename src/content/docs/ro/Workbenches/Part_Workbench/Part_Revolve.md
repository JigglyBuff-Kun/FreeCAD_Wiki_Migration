---
title: Part Revolve/Revoluție
---
|  |
| --- |
| Part Revolve |
| poziția meniului |
| Part → Revolve |
| Ateliere |
| [Part](/Part_Workbench/ro "Part Workbench/ro"), Complete |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Description

Se rotește obiectul selectat în jurul unei axe date. Următoarele tipuri de forme
sunt permise și conduc la formele de ieșire listate ([See Notes for exceptions](#Notes)):

| Input shape | Output shape |
| --- | --- |
| Vertex | Edge |
| Edge | Face |
| Wire | Shell |
| Face | Solid |
| Shell | Compound solid (Compsolid) |

Solidele sau solidele compuse nu sunt permise ca forme de intrare. Compuși normali
nu sunt permise în acest moment. Viitoarele versiuni vor verifica forma actuală
tip de obiecte compuse.

![](/images/Dialog-revolve.png)

Argumentul Unghi specifică cât de departe trebuie să se rotească obiectul.
coordonatele direcționează originea axei de rotație, în raport cu originea
a sistemului de coordonate.

If you select a user defined axis, the numbers define the direction of the
revolving axis with respect to the coordinate system: If the Z coordinate is
0 and the Y and X coordinate are non-zero, then the axis will lie in the
X-Y-plane. Its angle is such that its tangent is the ratio of the given
X and Y coordinates.

## Notes

### Note

* Dacă versiunea dvs. de FreeCAD are o casetă de selectare pentru dialogul Solid în dialogul Revolve, puteți face Solids din filamente și muchii închise.
* Dacă Revolve este efectuată utilizând o axă care intersectează fața pentru a se roti și doriți să creați un solid, rezultatul poate fi nevalid. Acest lucru se poate întâmpla din diferite motive, auto-intersecție, direcție etc.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/ro&oldid=1206670>"