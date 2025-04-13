---
title: FEM Elementsatz erstellen
---
|  |
| --- |
| FEM Elemente löschen |
| Menüeintrag |
| Netz → Elemente löschen |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Blendet die durch ein Polygon ausgewählten Elemente des FEM-Netzes oder des Ergebnisnetzes aus und ermöglicht es, die ausgewählten Teile des Netzes aus der Ansicht zu entfernen und die Elemente innerhalb des Netzes zu sehen.

## Anwendung

1. Wählen Sie ein FEM-Netz (von Netgen/Gmsh erstellt oder importiert) oder das Ergebnisnetz im Baum.
2. Wählen Sie die Option **Netz → ![](/images/FEM_CreateElementsSet.svg) Elemente löschen** aus dem Menü.
3. Geben Sie optional den Namen des Werkzeugobjekts ein, das im Baum erstellt werden soll.
4. Drücken Sie die Schaltfläche Polygon und klicken Sie auf einige beliebige Stellen in der 3D-Ansicht, um das Auswahlpolygon zu definieren.
5. Klicken Sie mit der rechten Maustaste und wählen Sie *Innen* oder *Außen* (um zu wählen, ob die Elemente innerhalb des Auswahlpolygons gelöscht werden sollen oder die außerhalb) oder *Abbrechen*, wenn Sie das polygonale Auswahlwerkzeug beenden wollen.
6. Die ausgewählten Elemente werden aus dem Netz ausgeblendet, während die Anzahl der ausgeblendeten und beibehaltenen Elemente in der Berichtsansicht angezeigt wird.
7. Klicken Sie auf die Schaltfläche OK. Sie werden neue Objekte in der Baumstruktur sehen - eines mit dem angegebenen Namen (standardmäßig *ElementSet*) und eines mit dem Namen *NewFemMesh* oder *NewResultMesh*, je nach Eingabe. Im Falle des Ergebnisnetzes wird auch eine Kopie des ursprünglichen Netzes mit dem Namen *StartResultMesh* erstellt. Das *ElementSet*-Objekt kann verwendet werden, um wieder auf das Werkzeug zuzugreifen.
8. Um die neuen Objekte aus dem Baum zu entfernen und nur das ursprüngliche Netz zu behalten, doppelklicken Sie auf das *ElementSet*-Objekt und drücken Sie die Schaltfläche Wiederherstellen. Das ursprüngliche Netz wird nicht automatisch wieder sichtbar gemacht.

## Hinweise

* Um nach der ersten Verwendung des Werkzeugs weitere Elemente aus demselben FEM-Netz auszublenden, müssen Sie das neue (geänderte) Netz manuell auswählen. Dies ist bei den Ergebnisnetzen nicht der Fall.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CreateElementsSet/de&oldid=1464614>"