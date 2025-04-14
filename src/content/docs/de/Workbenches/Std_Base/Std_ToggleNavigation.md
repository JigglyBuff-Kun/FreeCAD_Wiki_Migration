---
title: Std NavigationEditieren
---

|                                     |
| ----------------------------------- |
| Std NavigationEditieren             |
| Menüeintrag                         |
| Ansicht → Navigations/Editier-Modus |
| Arbeitsbereich                      |
| Alle                                |
| Standardtastenkürzel                |
| Esc                                 |
| Eingeführt in Version               |
| -                                   |
| Siehe auch                          |
| _Keiner_                            |
|                                     |

## Beschreibung

Der Befehl **Std NavigationEditieren** ist für bestimmte Untersuchungstätigkeiten und bestimmte interaktive Netzbearbeitungen gedacht. Diese Tätigkeiten sind rechchenintensiv und erfordern einen Editiermodus der Navigationmöglichkeiten weitestgehend deaktiviert. Mit diesem Befehl ist es möglich, zeitweilig vom Editiermodus zum Navigationsmodus umzuschalten und nach Änderung der [3D-Ansicht](/3D_view/de "3D view/de") wieder zurück zum Editiermodus.

Nicht mit dem Befehl [Std Bearbeiten](/Std_Edit/de "Std Edit/de") verwechseln.

## Anwendung

_Ein Beispiel zur Anwendung des Befehls:_

1. Zum Arbeitsbereich ![](/images/Workbench_Mesh.svg) [Mesh](/Mesh_Workbench/de "Mesh Workbench/de") wechseln.
2. Die Schaltfläche ![](/images/Mesh_BuildRegularSolid.svg) [Regelgeometrie...](/Mesh_BuildRegularSolid/de "Mesh BuildRegularSolid/de") Drücken.
3. Das Dialogfenster **Regelgeometrie** wird geöffnet.
4. **Ellipsoid** aus der Liste auswählen.
5. Die Schaltfläche Erstellen drücken.
6. Die Schaltfläche Schließen drücken, um das Dialogfenster zu schließen.
7. Das Netz-Objekt auswählen.
8. Die Schaltfläche ![](/images/Mesh_PolyCut.svg) [Netz Schneiden](/Mesh_PolyCut/de "Mesh PolyCut/de") drücken.
9. Punkte in der 3D-Ansicht auswählen, um ein Vieleck (Polygon) zu erstellen, das eine Hälfte des Netzes überlappt.
10. Nach einem Klick mit der rechten Maustaste **Innen** im Kontextmenü auswählen.
11. Das Ergebnis ist ein offenes Netz mit einem Rand.
12. Das Netz sollte noch immer ausgewählt sein.
13. Die Schaltfläche ![](/images/Mesh_AddFacet.svg) [Dreieck hinzufügen](/Mesh_AddFacet/de "Mesh AddFacet/de") drücken, um den Befehl [Mesh FacetteHinzufügen](/Mesh_AddFacet/de "Mesh AddFacet/de") zu starten.
14. Schwebt der Mauszeiger über einem Randpunkt, wird eine gelbe Markierung angezeigt, die mit einem Klick der linken Mausteste ausgewählt wird.
15. Wahlweise zwei weitere Punkte auswählen und ein Dreieck zum Netz hinzufügen.
16. Jetzt befindet man sich im Edit-Modus und es ist unmöglich die 3D-Ansicht zu drehen oder zu verschieben, während das Zoomen immer noch funktioniert.
17. Den Befehl **Std NavigationEditieren** aufrufen, um in den Navigations-Modus zu wechseln:
    - Den Menüeintrag **Ansicht → ![](/images/Std_ToggleNavigation.svg) Navigations-/Editier-Modus** auswählen.
    - Oder das Tastaturkürzel: Esc.
18. Jetzt kann die 3D-Ansicht gedreht und verschoben werden, aber es können keine Punkte zum Hinzufügen von Dreiecken ausgewählt werden.
19. Den Befehl **Std NavigationEditieren** aufrufen, um in den Editier-Modus zurück zu wechseln:
    - Den Menüeintrag **Ansicht → ![](/images/Std_ToggleNavigation.svg) Navigations-/Editier-Modus** auswählen.
    - Oder das Tastaturkürzel: Esc.
20. Jetzt können wieder Punkte ausgewählt und Dreiecke hizugefügt werden.
21. Nach einem Klick mit der rechten Maustaste **Fertig** im Kontextmenü auswählen, um den Befehl [Mesh FacetteHinzufügen](/Mesh_AddFacet/de "Mesh AddFacet/de") zu beenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleNavigation/de&oldid=1458455>"
