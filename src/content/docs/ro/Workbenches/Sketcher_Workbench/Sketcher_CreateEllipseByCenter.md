---
title: Sketcher  Elipsă definită prin centru
---
|  |
| --- |
| Sketcher Create Ellipse by center |
| Menu location |
| Sketch → Sketcher geometries → Create ellipse by center |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.15 |
| See also |
| [Sketcher Ellipse by 3 Points](/Sketcher_CreateEllipseBy3Points "Sketcher CreateEllipseBy3Points"), [Sketcher Circle](/Sketcher_CreateCircle "Sketcher CreateCircle"), [Sketcher Arc of Ellipse](/Sketcher_CreateArcOfEllipse "Sketcher CreateArcOfEllipse") |
|  |

## Descriere

Acest instrument desenează o elipsă prin alegerea a 3 puncte: centrul, sfârșitul semiaxei majore, semiaxa minoră.
Când porniți instrumentul, indicatorul mouse-ului se modifică într-o cruce albă cu o pictogramă ca o elipsă roșie. Pe lângă acestea, coordonatele sunt afișate în timp real.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Ellipse (white) with internal geometry (dark yellow)

## Utilizare

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Pos-OVP = Positional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences"). [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")  
Dim-OVP = Dimensional On-View-Parameters. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

* Apelați comanda făcând clic pe butonul unei bare de instrumente, selectând elementul de meniu sau utilizând comanda rapidă de la tastatură (trebuie să fie atribuită mai întâi în [Interface Customization](/Interface_Customization "Interface Customization")).
* Primul clic în vizualizarea 3D stabilește centrul de elipsă. Al doilea clic stabilește prima rază/semiaxă și orientarea elipsei. Al treilea clic stabilește cealaltă rază (distanța de la linia definită de primele două clicuri este a doua rază).
* După al treilea clic, elipsa este creată, împreună cu un set de geometrie de construcție aliniată la ea (diametrul major, diametrul minor, două focare). Geometria construcției poate fi ștearăs manual dacă nu mai este necesară și este recreată mai târziu. A se vedea [Sketcher Show Hide Internal Geometry](/Sketcher_RestoreInternalAlignmentGeometry "Sketcher RestoreInternalAlignmentGeometry").
* Apăsând ESC sau făcând click pe butonul din dreapta al mouse-lui se părăsește această funcție.

## Notes

## Particularități

* Axele majore și minore ale elipsei sunt stricte și nu pot fi schimbate prin redimensionarea elipselor. Aceasta este o consecință a parametrizării rezolvitorului utilizat (centrul (x, y), focus1 (x, y) și lungimea razei minore (b)) și același comportament strict ca al OpenCascade. Elipsa trebuie rotită pentru a se schimba axele.
* Elipsa poate funcționa ca un cerc atunci când semiaxele sale majoră și minoră sunt șterse, iar unul dintre focare este constrâns să coincidă cu centrul. Dar constrângerea razei nu va funcționa pe un astfel de cerc.
* Deplasarea/Mișcarea elipsei prinsă de margine are același rezulta cu mișcarea elipsei având selectat centrul.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/ro&oldid=1402378>"