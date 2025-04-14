---
title: Mesh KomponenteVonHandEntfernen
---

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mesh KomponenteVonHandEntfernen‏‎                                                                                                                 |
| Menüeintrag                                                                                                                                       |
| Netze → Komponente von Hand entfernen...                                                                                                          |
| Arbeitsbereich                                                                                                                                    |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                                                                                                    |
| Standardtastenkürzel                                                                                                                              |
| _Keiner_                                                                                                                                          |
| Eingeführt in Version                                                                                                                             |
| -                                                                                                                                                 |
| Siehe auch                                                                                                                                        |
| [Mesh KomponentenEntfernen‏‎](/Mesh_RemoveComponents/de "Mesh RemoveComponents/de"), [Arch NetzAufteilen](/Arch_SplitMesh/de "Arch SplitMesh/de") |
|                                                                                                                                                   |

## Beschreibung

Der Befehl "Mesh KomponentenVonHandEntfernen" entfernt Komponenten aus Netzobjekten.

## Anwendung

1. Als eine Komponente wird eine komplette Gruppe von verbundenen Flächen bezeichnet. Normalerweise besteht ein Netzobjekt aus einer einzigen Komponente. Nach der Anwendung des Befehls [Mesh Zusammenführen](/Mesh_Merge/de "Mesh Merge/de") kann aber ein Netzobjekt mehrere Komponenten enthalten.
2. Der Befehl verwendet die Farbe Rot, um ausgwählte Komponenten zu markieren. Damit diese korrekt dargestellt werden:
   - Die Ansicht-Eigenschaft**Display Mode** (Anzeigemodus) des Netzobjekts sollte Flächen darstellen. Wenn nötig, den Befehl [Std Darstellungsart](/Std_DrawStyle/de "Std DrawStyle/de") anwenden, um diese Eigenschaft anzupassen.
   - Die Ansicht-Eigenschaft**Shape Color** (Formfarbe) des Netzobjekts sollte nicht Rot sein.
3. Den Menüeintrag **Netze → ![](/images/Mesh_RemoveCompByHand.svg) Komponente von Hand entfernen...** auswählen.
4. Der Mauszeiger wandelt sich in ein Hand-Symbol.
5. Die Komponenten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, die gelöscht werden sollen.
6. Wahlweise die Menüoption **Auswahl aufheben** im Kontextmenü der 3D-Ansicht auswählen, um alle Komponenten abzuwählen.
7. Die Menüoption **Selektierte Dreiecke löschen** im Kontextmenü der 3D-Ansicht auswählen, um die ausgewählten Komponenten zu löschen.
8. Die Menüoption **Entfernen-Modus verlassen** im Kontextmenü der 3D-Ansicht auswählen, um den Befehl fertigzustellen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_RemoveCompByHand/de&oldid=1299638>"
