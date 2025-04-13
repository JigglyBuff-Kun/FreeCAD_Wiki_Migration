---
title: Sketcher Bemaßen
---

|                                                            |
| ---------------------------------------------------------- |
| Sketcher Bemaßen                                           |
| Menüeintrag                                                |
| Skizze → Sketcher-Randbedingungen → Bemaßen                |
| Arbeitsbereich                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") |
| Standardtastenkürzel                                       |
| D                                                          |
| Eingeführt in Version                                      |
| 1.0                                                        |
| Siehe auch                                                 |
| _Keiner_                                                   |
|                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_Dimension.svg) Sketcher Bemaßen ist das kontextabhängige Werkzeug zum Erstellen von Randbedingungen des Arbeitsbereichs Sketcher. Basierend auf der aktuellen Auswahl stellt es passende maßliche Randbedingungen zur Verfügung aber auch geometrische Randbedingungen.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

1. Wähle optional ein oder mehrere Elemente (Kanten oder Punkte) aus. [B-Spline](/Sketcher_Workbench#Sketcher_CompCreateBSpline/de "Sketcher Workbench")-Kanten werden derzeit nicht unterstützt.
2. Es gibt mehrere Möglichkeiten, das Tool aufzurufen:
   - Wenn die Einstellung **Dimensioning constraints** [Einstellung](/Sketcher_Preferences#General/de "Sketcher Preferences") auf `Both` oder `Single tool` (Standard) eingestellt ist: Drücke die Schaltfläche ![](/src/assets/images/Sketcher_Dimension.svg) Dimension.
   - Wähle im Menü die Option **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_Dimension.svg) Dimension**.
   - Klicke mit der rechten Maustaste in die [3D-Ansicht](/3D_view/de "3D view/de") und wähle im Kontextmenü die Option **Dimension → ![](/src/assets/images/Sketcher_Dimension.svg) Dimension**.
   - Wenn eine Auswahl vorhanden ist: Klicke mit der rechten Maustaste in die 3D-Ansicht und wähle im Kontextmenü die Option **![](/src/assets/images/Sketcher_Dimension.svg) Dimension**.
   - Verwende die Tastenkombination: D.
3. Der Cursor verwandelt sich in ein Kreuz mit dem Werkzeugsymbol.
4. Wenn du noch kein Element ausgewählt hast: Wähle eines aus.
5. Abhängig von den ausgewählten Elementen wird eine Einschränkung vorgeschlagen.
6. Wähle optional ein weiteres Element aus.
7. Hebe die Auswahl eines Elements optional auf, indem du erneut darauf klickst.
8. Die vorgeschlagene Einschränkung wird nach jeder Auswahländerung aktualisiert.
9. Drücke optional ein- oder mehrmals die Taste M, um durch andere verfügbare Einschränkungen zu blättern, falls vorhanden.
10. Wenn eine geometrische Einschränkung vorgeschlagen wird, können sich ausgewählte Elemente ändern und eine Vorschau des Ergebnisses anzeigen.
11. Führe einen der folgenden Schritte aus:
    - Klicke zur Bestätigung in einen leeren Bereich in der [3D-Ansicht](/3D_view/de "3D view/de"):
      1. Wenn eine Dimensionsbeschränkung erstellt wird, bestimmt der angeklickte Punkt ihre Position. Bei einer linearen Dimension bestimmt der angeklickte Punkt auch ihren Typ: ![](/src/assets/images/Sketcher_ConstrainDistanceX.svg) [Horizontaler Abstand](/Sketcher_ConstrainDistanceX/de "Sketcher ConstrainDistanceX/de"), ![](/src/assets/images/Sketcher_ConstrainDistanceY.svg) [Vertikaler Abstand](/Sketcher_ConstrainDistanceY/de "Sketcher ConstrainDistanceY/de") oder ![](/src/assets/images/Sketcher_ConstrainDistance.svg) [Abstand](/Sketcher_ConstrainDistance/de "Sketcher ConstrainDistance/de").
      2. Wenn eine [FestlegendeRandbedingungUmschalten](/Sketcher_ToggleDrivingConstraint/de "Sketcher ToggleDrivingConstraint/de") erstellt wird, öffnet sich, abhängig von den [Einstellungen](/Sketcher_Preferences#Display/de "Sketcher Preferences"), ein Dialog, um [ihren Wert zu bearbeiten](/Sketcher_Workbench#Edit_constraints/de "Sketcher Workbench").
      3. Eine Beschränkung wird hinzugefügt.
      4. Dieses Tool läuft immer im Fortsetzungsmodus: Optional kannst du mit der Erstellung von Beschränkungen fortfahren.
    - Zum Beenden rechtsklicken oder Esc drücken oder ein anderes Geometrie- oder Beschränkungserstellungstool starten.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Dimension/de&oldid=1525414>"
