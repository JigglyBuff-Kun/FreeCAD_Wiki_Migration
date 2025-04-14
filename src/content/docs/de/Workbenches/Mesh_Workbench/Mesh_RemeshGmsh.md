---
title: Mesh NeuVernetzenGmsh
---

|                                                                        |
| ---------------------------------------------------------------------- |
| Mesh NeuVernetzenGmsh                                                  |
| Menüeintrag                                                            |
| Netze → Aufbereitung...                                                |
| Arbeitsbereich                                                         |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                         |
| Standardtastenkürzel                                                   |
| _Keiner_                                                               |
| Eingeführt in Version                                                  |
| 0.19                                                                   |
| Siehe auch                                                             |
| [Mesh NetzAusPartForm](/Mesh_FromPartShape/de "Mesh FromPartShape/de") |
|                                                                        |

## Beschreibung

Der Befehl **Mesh NeuVernetzenGmsh** vernetzt ein Netzobjekt erneut unter Verwendung des Vernetzers [Gmsh](https://gmsh.info/). Das neue Netz kann feiner oder gröber sein.

## Anwendung

1. Ein einzelnes Netzobjekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Mesh_RemeshGmsh.svg) Aufbereitung... drücken.
   - Den Menüeintrag **Netze → ![](/images/Mesh_RemeshGmsh.svg) Aufbereitung...** auswählen.
3. Der Aufgaben-Bereich **Neuvernetzung durch Gmsh** wird geöffnet.
4. Die erforderlichen Einstellungen festlegen. Siehe die [Gmsh-Vernetzer-Einstellungen](/Mesh_FromPartShape/de#Netzgenerator_Gmsh "Mesh FromPartShape/de") des Befehls [Mesh NetzAusPartForm](/Mesh_FromPartShape "Mesh FromPartShape").
5. Die Schaltfläche Anwenden drücken, um das Netzobjekt neu zu vernetzen.
6. Wahlweise eine oder Mehrere Einstellungen anpassen und erneut die Schaltfläche Anwenden drücken, bis das Netz gefällt.
7. Die Schaltfläche Schließen drücken, um den Aufgaben-Bereich zu schließen und den Befehl zu beenden.

## Hinweise

- In einigen Fällen erzeugt dieser Befehl Netze mit umgekehrten Normalen. Der Befehl [Mesh NormalenUmkehren](/Mesh_FlipNormals/de "Mesh FlipNormals/de") kann verwendet werden, um dies zu korrigieren.

## Eigenschaften

Siehe: [Mesh Formelement](/Mesh_Feature/de "Mesh Feature/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemeshGmsh/de&oldid=1350523>"
