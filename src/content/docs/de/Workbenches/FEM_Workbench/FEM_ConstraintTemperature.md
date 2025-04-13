---
title: FEM RandbedingungTemperatur
---
|  |
| --- |
| FEM RandbedingungTemperatur |
| Menüeintrag |
| Modell → Thermische Randbedingungen und Belastungen→ Randbedingung Temperatur |
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
| CalculiX, Elmer |

## Beschreibung

Legt eine Randbedingung Temperatur fest oder wahlweise eine konzentrierte Wärmestrombelastung.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_ConstraintTemperature.svg) Randbedingung Temperatur drücken.
   * Den Menüeintrag **Modell → Thermische Randbedingungen und Belastungen → ![](/images/FEM_ConstraintTemperature.svg) Randbedingung Temperatur** auswählen.
2. Die Schaltfläche Hinzufügen Drücken.
3. In der [3D-Ansicht](/3D_view/de "3D view/de") die Objekte auswählen, auf die die Randbedingung angewendet werden soll; diese können Knoten (Ecken), Kanten oder Flächen sein. Wahlweise die Schaltfläche Remove drücken und auf die Objekte klicken, die aus der Auswahl entfernt werden solllen.
4. Die Art der Randbedingung auswählen und deren Parameter angeben:
   * *Temperature* (Standardauswahl) - Randbedingung Temperatur, den Wert für *Temperature* in K eingeben.
   * *CFlux* - concentrated heat flux load, den Wert für *Concentrated heat flux* in mW eingeben - dieser Wert wird durch die Anzahl der Knoten des zugrundeliegenden Elements geteilt, um den Gesamtfluss einer gegebenen Größe dieses Elements zu erhalten.

## Hinweise

* Die Randbedingung Temperatur verwendet die [\*BOUNDARY-Karte](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html) in CalculiX.
* Die Option **CFlux** verwendet die [\*CFLUX-Karte](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node168.html) in CalculiX.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTemperature/de&oldid=1533397>"