---
title: FEM StartbedingungTemperatur
---
|  |
| --- |
| FEM StartbedingungTemperatur |
| Menüeintrag |
| Modell → Thermische Randbedingungen und Belastungen → Startbedingung Temperatur |
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

Legt eine Starttemperatur für eine thermo-mechanische Analyse fest.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintInitialTemperature.svg) [Startbedingung Temperatur](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature") drücken.
   * Den Menüeintrag **Modell → Thermische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintInitialTemperature.svg) Startbedingung Temperatur** auswählen.
2. Den Startwert der Temperatur für die Analyse eingeben.

## Einschränkungen

Dieses Werkzeug ordnet die Starttemperatur allen Knoten im FEA-Modell zu - es ist nicht möglich einzelne Bereiche auszuwählen.

## Hinweise

* Dieses Werkzeug verwendet die [\*INITIAL CONDITIONS-Karte](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node215.html) in CalculiX.
* Die Anfangstemperatur muss für alle thermomechanischen Analysen, die mit CalculiX durchgeführt werden, definiert werden, auch für die stationären Analysen.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialTemperature/de&oldid=1533383>"