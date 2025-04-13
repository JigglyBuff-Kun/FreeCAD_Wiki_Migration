---
title: Sketcher Einrasten
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher Einrasten                                         |
| Menüeintrag                                                |
| _Keiner_                                                   |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| _Keiner_                                                   |
| Eingeführt in Version                                      |
| 0.21                                                       |
| Siehe auch                                                 |
| [Sketcher Raster](/Sketcher_Grid/de "Sketcher Grid/de")    |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_Snap.svg) Sketcher Einrasten schaltet den Einrastmodus für alle Skizzen ein bzw. aus. Einzelne Einstellungen können im zugehörigen Menü angepasst werden.

Einrasten funktioniert nur während Geometrie erstellt wird. Man beachte, dass das Einrasten nur eine Zeichenhilfe ist; es legt keine zusätzlichen Randbedingungen fest.

## Anwendung

1. Die Schaltfläche ![](/src/assets/images/Sketcher_Snap.svg) Einrasten umschalten drücken, um Einrasten ein- oder auszuschalten.
2. Wahlweise rechts auf den Pfeil nach unten klicken, um das Menü zu öffnen. Die Einstellungen in diesem Menü können nur geändert werden, wenn das Einrasten eingeschaltet ist:  
   ![](/src/assets/images/Sketcher_Snap_Menu.png)
   - Ist die Checkbox **Auf Raster einrasten** aktiviert, wird der Mauszeiger auf Rasterlinien und deren Kreuzungspunkten einrasten. Das Einrasten erfolgt, wenn der Abstand zwischen Mauszeiger und einer Rasterlinie 20% der Rasterweite entspricht oder geringer ist. Einrasten funktioniert auch, wenn das Raster ausgeblendet ist.
   - Ist die Checkbox **Auf Objekte einrasten** aktiviert, wird der Mauszeiger auf Kanten von Geometrien und auf Mittelpunkten von Linien und Bögen einrasten.
   - Der Wert für **Einrastwinkel** bestimmt den Winkel für das Einrasten auf Winkeln. Eirasten erfolgt auf den Vielfachen dieses Winkels, ausgehend von der positiven X-Achse der Skizze. Für dieses Einrasten muss die Ctrl-Taste gedrückt gehalten werden. Einrasten auf Winkeln funktioniert nur, wenn bestimmte Geometrien erstellt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Snap/de&oldid=1394722>"
