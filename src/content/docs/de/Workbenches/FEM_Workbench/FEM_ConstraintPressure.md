---
title: FEM RandbedingungDruck
---
|  |
| --- |
| FEM RandbedingungDruck |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Belastungen → Druckbelastung |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM RandbedingungKraft](/FEM_ConstraintForce/de "FEM ConstraintForce/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

Wendet eine Drucklast (Flächenpressung) auf eine Fläche an.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintPressure.svg) Druckbelastung drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintPressure.svg) Druckbelastung** auswählen.
2. Die Schaltfläche Hinzufügen drücken und Flächen in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Wahlweise die Schaltfläche Entfernen drücken und die Flächen anklicken, die aus der Auswahl entfernt werden sollen.
3. Die Druckbelastung in MPa im entsprechenden Fenster eingeben.
4. Falls erforderlich, die Checkbox Richtung umkehren aktivieren, um die Wirkrichtung umzukehren.

![](/images/FEM_Pressure_example.PNG)

Pressure load applied to a cylinder

## Hinweise

* Die Verteilung des Drucks auf eine Fläche ist immer gleichmäßig und immer rechtwinklig zur Fläche.

* 0.21 und davor: Eine Druckbelastung kann auf Hüllen (shells) angewendet werden, aber nur wenn [Gmsh](/FEM_MeshGmshFromShape/de "FEM MeshGmshFromShape/de") zum Vernetzen verwendet wird und group meshing auf true gesetzt ist. Es ist dauerhaft als true codiert, so dass der Benutzer sich nicht darum kümmern muss. Aber aufgrund eines Fehlers kann Druckbelastung ein erneutes Vernetzen erfordern, um auf Hüllen zu funktionieren.
* Diese Funktion verwendet die [\*DLOAD-Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintPressure/de&oldid=1543423>"