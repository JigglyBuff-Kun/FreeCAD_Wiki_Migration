---
title: Sketcher Creare Arc de Elipsă
---
|  |
| --- |
| Sketcher arc de elipsă |
| poziția meniului |
| Sketch → Geometria schitei → Creaţi un arc de elipsă |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.15 |
| A se vedea, de asemenea, |
| [Sketcher elipsă cu centru](/Sketcher_CreateEllipseByCenter/ro "Sketcher CreateEllipseByCenter/ro"), [Sketcher Arc cu centru](/Sketcher_CompCreateArc/ro "Sketcher CompCreateArc/ro") |
|  |

## Descriere

Acest instrument desenează un arc de elipsă prin alegerea a patru puncte: centrul, sfârșitul semiaxei majore, punctul de început și punctul final.
Când porniți instrumentul, indicatorul mouse-ului se modifică într-o cruce albă cu o pictogramă arc de elipsă roșie. Pe lângă acestea, coordonatele sunt afișate în timp real.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Arc of ellipse (white) with internal geometry (dark yellow)

## Utilizare

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Apăsați butonul ![](/images/Sketcher_CreateArcOfEllipse.png) **arc of ellipse**.
* Primul clic în vizualizarea 3D stabilește centrul de elipsă. Al doilea clic definește prima semiaxă și orientarea elipsei. Al treilea clic stabilește cealaltă semiaxă și începutul arcului. Cel de-al patrulea clic stabilește sfârșitul arcului.
* După al patrulea clic, arcul de elipsă este creat, împreună cu un ansamblu de geometrie a construcției (cu linii albastre) aliniate la el (semiaxă major, semiaxă minor, două focare). Geometria construcției poate fi ștearsă dacă este necesar și este recreată mai târziu. Vezi [Afișează/Ascunde geometria internă](/Sketcher_RestoreInternalAlignmentGeometry/ro "Sketcher RestoreInternalAlignmentGeometry/ro").
* Apăsați ESC sau click dreapta pe butonul mouse-ului pentru abandonarea funcțiie.

## Notes

## Particularități

* Axele majore și minore ale elipsei subiadiacente sunt stricte și nu pot fi schimbate prin redimensionare. Elipsa de bază trebuie rotită pentru a schimba axele.
* Spre deosebire de elipsă care poate fi constrânsă să devină un cerc, arcul de elipsă nu poate fi transformat într-un arc de cerc.
* Mutarea arcului de elipsă facând click pe margine este aceeași cu deplasarea centrului elipsei.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/ro&oldid=1413721>"