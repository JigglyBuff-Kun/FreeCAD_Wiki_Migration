---
title: FEM RandbedingungFestsetzen
---
|  |
| --- |
| FEM RandbedingungFestsetzen |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Belastungen → Randbedingung Festsetzen |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM RandbedingungKontakt](/FEM_ConstraintContact/de "FEM ConstraintContact/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Erstellt eine FEM-Randbedingung zum Festsetzen einer geometrischen Einheit, die alle vorhandenen Freiheitsgrade (DOFs, degrees of freedom) der Knoten sperrt, die der ausgewählten geometrischen Einheit zugrunde liegen (6 Freiheitsgrade für Balken- und Schalenelemente, 3 für Festkörper-Elemente).

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintFixed.svg) Randbedingung Festsetzen drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintFixed.svg) Randbedingung Festsetzen** auswählen.
2. Die Schaltfläche Hinzufügen drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") das Objekt auswählen, dem die Randbedingung zugeordnet werden soll; dies kann ein Knoten, eine Kante oder eine Fläche sein (aber alle Objekte müssen von derselben Art sein). Zum Entfernen die Schaltfläche Entfernen drücken und die Objekte anklicken, die aus der Auswahl entfernt werden sollen.

## Begrenzungen

Objektarten können innerhalb derselben Randbedingung nicht gemischt werden. Für jede Objektart sollte eine eigene Randbedingung Festsetzen verwendet werden.

## Hinweise

* Diese Funktion verwendet die [\*BOUNDARY-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFixed/de&oldid=1544966>"