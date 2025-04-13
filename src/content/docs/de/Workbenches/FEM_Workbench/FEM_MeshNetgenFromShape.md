---
title: FEM NetzNetgenAusForm
---
|  |
| --- |
| FEM NetzNetgenAusForm |
| Menüeintrag |
| Netz → FEM mesh from shape by Netgen |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Mystran, Z88 |

## Beschreibung

Für eine Finite-Elemente-Analyse muss die Geometrie in ein [FEM-Netz](/FEM_Mesh/de "FEM Mesh/de") diskretisiert werden. Dieser Befehl verwendet [Netgen](https://www.ngsolve.org/) (das auf dem System installiert sein muss), um das Netz zu erstellen. Netgen-Netze werden von [Elmer](/FEM_SolverElmer/de "FEM SolverElmer/de") nicht unterstützt.

Je nach Betriebssystem und Installationspaket kann Netgen mit FreeCAD gebündelt sein oder nicht. Für weitere Informationen siehe [FEM Installation](/FEM_Install/de#Netgen "FEM Install/de").

## Anwendung

1. Die zu analysierende Form auswählen. Bei einem Volumen muss es sich um ein Solid oder Compsolid handeln. Ein Compsolid ist erforderlich, wenn das Teil aus mehreren Materialien besteht. (ein Compsolid kann mit dem Befehl [Part BooleanFragments](/Part_BooleanFragments/de "Part BooleanFragments/de") erstellt werden).
2. Das Werkzeug durch eine der folgenden Möglichkeiten aktivieren:
   * Die Schaltfläche ![](/images/FEM_MeshNetgenFromShape.svg) FEM Netz aus Form - Netgen drücken.
   * Den Menüeintrag **Mesh → ![](/images/FEM_MeshGmshFromShape.svg) FEM-Netz aus Form - Netgen** auswählen.
3. Wahlweise minimale und maximale Elementgröße einstellen (Die vorgegebene Einstellung erstellt oft zu grobe Netze) sowie die Ordnung des Elements anpassen (die Checkbox *Zweite Ordnung* aktivieren).
4. Wahlweise die *Feinheit* aus einer der vorgegebenen Möglichkeiten auswählen oder *Benutzerdefiniert* auswählen, um die Parameter von Hand einzugeben.
5. Die Schaltfläche Anwenden drücken, um das Netz zu erstellen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Wahlweise die Schaltfläche Abbrechen drücken, um das Vernetzen abzubrechen, wenn die neue Netgen-Implementation eingesetzt wird.
6. Die Schaltfläche OK drücken, um das Netz zu erstellen und den Dialog zu schließen. Oder die Schaltfläche Abbrechen drücken, um die Änderungen oder das Erstellen des Netzobjekts abzubrechen.

## Eigenschaften

* Daten**Max. Größe**: Maximale Größe des Elements in mm.
* Daten**Min. Größe**: [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Mindestgröße des Elements in mm.
* Daten**Zweite Ordnung**: Elemente zweiter Ordnung enthalten mehr Knoten pro Element. Normalerweise reicht es aus, ein gröberes Netz zu verwenden, um die gleiche Lösungsgenauigkeit wie mit Elementen erster Ordnung zu erhalten,
  + true (Standard); Elemente zweiter Ordnung,
  + false; Elemente erster Ordnung.
* Daten**Feinheit**: Bietet vordefinierte Stufen der Netzdichte.
* Daten**Wachstumsrate**: Legt fest, wie stark sich benachbarte Elemente in der Größe unterscheiden können.
* Daten**Number of Segmente per Edge**: Legt die minimale Anzahl von Netzsegmenten pro Kante fest.
* Daten**Number of Segments per Radius**: Definiert die minimale Anzahl von Mesh-Segmenten pro Radius.
* Daten**Optimieren**:
  + true (Standard): Wendet einen Optimierungsalgorithmus an, um die Netzqualität zu verbessern
  + false

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshNetgenFromShape/de&oldid=1531679>"