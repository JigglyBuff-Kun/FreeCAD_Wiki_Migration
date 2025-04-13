---
title: FEM RandbedingungEigengewicht
---
|  |
| --- |
| FEM RandbedingungEigengewicht |
| Menüeintrag |
| Modell → Mechanische Randbedingungen und Lasten → Schwerkraft-Last |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM-Anleitung](/FEM_tutorial/de "FEM tutorial/de") |
|  |

| Gleichungslöser |
| --- |
| CalculiX, Elmer |

## Beschreibung

RandbedingungEigengewicht legt fest, dass die Erdbeschleunigung in der voreingestellten Richtung auf das gesamte Modell wirkt.

0.21 und davor: Die Beschleunigung hat einen unveränderlichen Wert von 9.81 m/s^2.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintSelfWeight.svg) Schwerkraft-Last drücken.
   * Den Menüeintrag **Modell → Mechanische Randbedingungen und Lasten → ![](/images/FEM_ConstraintSelfWeight.svg) Schwerkraft-Last** auswählen.
2. Ein **ConstraintSelfWeight**-Objekt wird erstellt.
3. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Wahlweise kann seine Daten-Eigenschaft**Gravity Acceleration** geändert werden.
4. Wahlweise seine Daten-Eigenschaft**Gravity Direction** anpassen.

## Skripten

Neues Objekt:

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

Ein Objekt zum Analysis genannten Analyse-Container hinzufügen:

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

Beispiel:

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Löser CalculiX

### Einschränkungen

* 0.21 und davor: Zum Ändern der Erdbeschleunigung muss die .inp-Datei bearbeitet werden.
* Eigengewicht wird auf die Menge der Elemente Eall angewendet, die das gesamte Modell enthält.

### Die CalculiX-input-Datei bearbeiten

Die Beschleunigungskonstante kann nach Erstellung der CalculiX-input-Datei manuell geändert werden.

Beispielzeilen in der .inp-Datei:

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

wobei 9810 der Wert der Erdbeschleunigung in [mm/s^2] ist und 0,0,-1 den Richtungsvektor beschreibt. Der Wert kann als Vielfaches der (standardisierten) Erdbeschleunigung eingegeben werden um eine Belastung von z.B. 4g zu simulieren.

## Löser Z88

* Zurzeit nicht im Löser Z88 implementiert.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/de&oldid=1532700>"