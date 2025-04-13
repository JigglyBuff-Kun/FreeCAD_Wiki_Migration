---
title: Std AnsichtAuswahlEinpassen
---

|                                                                     |
| ------------------------------------------------------------------- |
| Std AnsichtAuswahlEinpassen                                         |
| Menüeintrag                                                         |
| Ansicht → Standardansichten → Auswahl einpassen                     |
| Arbeitsbereich                                                      |
| Alle                                                                |
| Standardtastenkürzel                                                |
| VS                                                                  |
| Eingeführt in Version                                               |
| -                                                                   |
| Siehe auch                                                          |
| [Std AnsichtAllesEinpassen](/Std_ViewFitAll/de "Std ViewFitAll/de") |
|                                                                     |

## Beschreibung

Der Befehl **Std AnsichtAuswahlEinpassen** zoomt und schwenkt die Kamera, so dass alle ausgewählten Objekte in die aktive [3D-Ansicht](/3D_view/de "3D view/de") passen. Dieser Befehl ist nützlich, falls sich Objekte außerhalb (der Ränder) der aktuellen 3D-Ansicht befinden oder sich nicht problemlos per [3D-Navigation](/Mouse_navigation/de "Mouse navigation/de") finden lassen.

## Anwendung

1. Ein oder mehrere Objekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Std_ViewFitSelection.svg) Auswahl einpassen drücken.
   - Den Menüeintrag **Ansicht → Standardansichten → ![](/src/assets/images/Std_ViewFitSelection.png) Auswahl einpassen** auswählen.
   - Die Menüoption **![](/src/assets/images/Std_ViewFitSelection.svg) Auswahl einpassen** im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Die Menüoption **![](/src/assets/images/Std_ViewFitSelection.svg) Auswahl einpassen** im Miniwürfel-Menü des [Navigationswürfels](/Navigation_Cube/de "Navigation Cube/de") auswählen.
   - Das Tastaturkürzel V, dann S.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Die Methode `SendMsgToActiveView` des FreeCADGui-Objekts kann verwendet werden, um die aktive Ansicht so zu skalieren, dass die Auswahl hinein passt.

```
import FreeCADGui

FreeCADGui.SendMsgToActiveView("ViewSelection")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ViewFitSelection/de&oldid=1500140>"
