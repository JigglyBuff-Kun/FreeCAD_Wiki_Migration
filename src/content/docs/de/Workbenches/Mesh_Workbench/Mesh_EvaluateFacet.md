---
title: Mesh FacetteAuswerten
---

|                                                |
| ---------------------------------------------- |
| Mesh FacetteAuswerten                          |
| Menüeintrag                                    |
| Netze → Analysieren → Dreiecksinformation      |
| Arbeitsbereich                                 |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

Der Befehl **Mesh FacetteAuswerten** zeigt Informationen über Flächen von Netzobjekten an.

```
Mesh: Ellipsoid Facet 3631: Points: <1817, 1818, 1866>, Neighbours: <3534, 3632, 3630>
Triangle: <[1.964574, 0.047063, 0.748046], [1.937166, 0.062461, 0.992797], [1.964574, -0.047063, 0.748046]>

```

Beispiel der Informationen, die im Ausgabefenster angezeigt werden

## Anwendung

1. Es ist ratsam das [Ausgabefenster](/Report_view/de "Report view/de") zu aktivieren. Der Befehl gibt dort detaillierte Informationen aus.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Mesh_EvaluateFacet.svg) Dreiecksinformation drücken.
   - Den Menüeintrag **Netze → Analysieren → ![](/src/assets/images/Mesh_EvaluateFacet.svg) Dreicksinformation** auswählen.
3. Der Mauszeiger wandelt sich in ein Pipetten-Symbol.
4. Eine Fläche eines Netzobjekts auswählen.
5. Ihr Index wird in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt.
6. Weitere Informationen werden im Ausgabefenster ausgegeben:
   - Der interne Name des Netzobjekts.
   - Der Index der ausgewählten Fläche.
   - Die Indizes der drei Eckpunkte der Fläche.
   - Die Indizes der Flächen, die eine gemeinsame Kante mit der ausgewählten Fläche besitzen.
   - Die Koordinaten der Eckpunkte.
7. Wahlweise weitere Flächen auswählen.
8. Die Option **Info-Modus verlassen** aus dem Kontextmenü der 3D-Ansicht auswählen, um den Befehl abzuschließen.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_EvaluateFacet/de&oldid=1350634>"
