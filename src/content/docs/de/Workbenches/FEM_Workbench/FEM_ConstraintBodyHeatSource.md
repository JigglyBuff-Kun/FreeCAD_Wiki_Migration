---
title: FEM RandbedingungKörperwärmequelle
---
|  |
| --- |
| FEM RandbedingungKörperwärmequelle |
| Menüeintrag |
| Modell → Thermische Randbedingungen und Lasten → Körperwärmequelle |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

Legt eine intern erzeugte Körperwärme fest, angegeben in W/kg.

1.0 und neuer: Kann die Wärmequelle auch in W festlegen.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintBodyHeatSource.svg) **Körperwärmequelle** drücken
   * Den Menüeintrag **Modell → Thermische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintBodyHeatSource.svg) Körperwärmequelle** auswählen.
2. 0.21 und neuer: Die Schaltfläche Hinzufügen drücken. Für eine 3D-Analyse einen Festkörper (body) des Modells auswählen, für eine 2D-Analyse eine Fläche auswählen.
3. Den Wert eingeben:
   * 0.20 und davor: Da das Werkzeug keinen Aufgaben-Dialog besitzt, wird der [Eigenschafteneditor](/Property_editor "Property editor") verwendet, um die Daten-Eigenschaft**Heat Source** anzupassen.
   * [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de"): Die Körperwärme in W/kg eingeben.
   * 1.0 und neuer: Modus auswählen:
     + *Dissipation Rate* - die Wärmeverlustleistung in W/kg eingeben.
     + *Total Power* - die Gesamtleistung in W eingeben.

## Einschränkungen

* 0.20 und davor: Die Körperwärmequelle wird auf das gesamte Modell angewendet, also alle Körper der Zusammenstellung. Es ist nicht möglich einen einzelnen Körper auszuwählen.
* 0.21 und davor: Diese Funktion arbeitet nur mit dem Gleichungslöser Elmer zusammen.

## Hinweise

* Für weitere Informationen siehe [dieses Thema im Forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539) und folgende Posts. [Dieses Thema](https://forum.freecadweb.org/viewtopic.php?f=18&t=28926) kann auch nützlich sein.
* Elmer-Beispiele können auch unter [Elmer-GUI-Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf) gefunden werden.
* 1.0 und neuer: Diese Funktion verwendet die [\*DFLUX Karte in CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html).
* 1.0 und neuer: Da CalculiX die Eingabe des Körperwärmestroms in W/mm^3 erwartet, während Elmer sie in W/kg benötigt, erfolgt die Umwandlung des angegebenen Wertes (in W oder W/kg) intern im jeweiligen Gleichungslöser unter Verwendung desVolumes des ausgewählten Festkörpers und der Dichte des ihm zugeordneten Materials, wenn erforderlich.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintBodyHeatSource/de&oldid=1570702>"