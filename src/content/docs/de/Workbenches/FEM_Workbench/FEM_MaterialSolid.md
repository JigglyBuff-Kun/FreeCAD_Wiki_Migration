---
title: FEM MaterialFeststoff
---
|  |
| --- |
| FEM MaterialFeststoff |
| Menüeintrag |
| Modell → Materiallien → Material für Feststoffe |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| M S |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| Alle |

## Beschreibung

Erstellt ein Material für Festkörper.

![](/images/FEMMaterialSolidProperties.png)

Der Aufgabenbereich FEM-Material

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_MaterialSolid.svg) Material für Festkörper drücken.
   * Den Menüeintrag **Modell → Materialien → ![](/images/FEM_MaterialSolid.svg) Material für Festkörper** auswählen.
2. Das Aufgaben-Fenster FEM-Material wird geöffnet.
3. Ein Material in der Ausklappliste auswählen. Für eine mechanische Analyse ist **CalculiX-Steel** eine passende Auswahl. Wahlweise die Schaltfläche Editor aufrufen drücken, um auf den [Materialeditor](/Material_Edit/de "Material Edit/de") zuzugreifen.
4. Wahlweise die Checkbox Diesen Aufgabenbereich benutzen aktivieren, um Materialeigenschaften, wie Dichte, Elastizitätsmodul, Poissonzahl, usw. anzupassen.
5. Soll der Werkstoff dem gesamten Objekt zugeordnet werden, dürfen keine geometrischen Elemente ausgewählt werden (die Referenzliste bleibt leer). Das Material wird dem gesamten Modell zugeordnet. Andernfalls weist man ausgewählten Bereichen manuell das Material zu, indem für jeden eingesetzten Werkstoff einige davon auswählt werden; es sollte am Ende aber kein Teil des Modells ohne zugewiesenes Material bleiben.
6. Aut die Schaltfläche OK klicken, um das Aufgaben-Fenster zu schließen.

## Hinweise

* Um ein vorhandenes MaterialSolid-Objekt zu bearbeiten, wird es in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt angeklickt.
* Der mechanische Werkstoff verwendet die [\*MATERIAL-Karte in CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node216.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialSolid/de&oldid=1571282>"