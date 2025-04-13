---
title: FEM RandbedingungZentrif
---
|  |
| --- |
| FEM RandbedingungZentrif |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Lasten → Zentrifugale Last |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.20 |
| Siehe auch |
| *Keiner* |
|  |

| Gleichungslöser |
| --- |
| CalculiX |

## Beschreibung

Legt eine Zentrifugalkraft-Last auf den Körper fest.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintCentrif.svg) Zentrifugale Last drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintCentrif.svg) Zentrifugale Last** auswählen.
2. Die Drehfrequenz in Hz eingeben.
3. Die Schaltfläche Hinzufügen im Fenster **Geometriereferen-Auswahl für Solid** drücken und einen Festkörper auswählen, dem die Last in der [3D-Ansicht](/3D_view/de "3D view/de") zugeordnet werden soll.
4. Die Schaltfläche Hinzufügen im Fenster **Geometriereferen-Auswahl für Edge** klicken und eine Kante auswählen, um die die Drehung in der [3D-Ansicht](/3D_view "3D view") erfolgen soll.

## Hinweise

* Diese Funktion verwendet die [\* DLOAD-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCentrif/de&oldid=1531683>"