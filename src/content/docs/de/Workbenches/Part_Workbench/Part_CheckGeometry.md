---
title: Part GeometriePrüfen
---
|  |
| --- |
| Part GeometriePrüfen |
| Menüeintrag |
| Formteil → Geometrie überprüfen |
| Arbeitsbereich |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Part_CheckGeometry.svg) [Part GeometriePrüfen](/Part_CheckGeometry "Part CheckGeometry") führt eine Überprüfung durch und meldet, ob die Geometrie ein gültiger Volumenkörper ist.

## Anwendung

1. Ein Teil auswählen (dabei darauf achten, das gesamte Teil auszuwählen und nicht nur eine Fläche, um zu prüfen, ob es ein gültiger Volumenkörper ist)
2. Das Werkzeug aufrufen, durch eine der folgenden Möglichkeiten:
   * Die Schaltfläche ![](/images/Part_CheckGeometry.svg) Geometrie überprüfen anklicken, die sich in der Werkzeugleiste des Arbeitsbereichs Part befindet.
   * Den Meinüeintrag **Formteil → ![](/images/Part_CheckGeometry.svg) Geometrie überprüfen** im Hauptmenü auswählen.

Ergebnisse werden im [Aufgabenbereich](/Task_panel/de "Task panel/de") aufgeführt. Wenn die Prüfung einen Fehler anzeigt: Im Reportfenster eine bestimmte Fehlernachricht anklicken und das entsprechende geometrische Objekt (Kante, Fläche usw.) wird in der [3D-Ansicht](/3D_view/de "3D view/de") hervorgehoben.

## Optionen

### Skip settings page

If ticked, subsequent invocations of the tool skip showing the **Settings** task panel.

### BOP-Check ausführen

Wenn aktiviert, wird eine zusätzliche eine Prüfung der booleschen Operationen durchgeführt (BOP check).

### Log errors

Wenn aktiviert, werden alle gefundenen Fehler auch im [Ausgabefenster](/Report_view/de "Report view/de") gelistet.

## Form-Inhalt

In addition to detecting potential geometry errors, this tool shows a range of properties regarding the selected object:

* Checked object
* Shape type
* Number of geometric entities: vertices, edges, wires, faces, shells, solids, compsolids, compounds, total shapes
* Geometric and mass properties:
  + Area
  + Volume
  + Mass
  + Length
  + Center of mass
  + Orientation
  + Symmetry axis
  + Symmetry point
  + Moments
  + First axis of inertia
  + Second axis of inertia
  + Third axis of inertia
  + Radius of gyration
  + Global placement

## Hinweise

* [App-Link](/App_Link/de "App Link/de")-Objekte verknüpft mit passenden Objektarten und [App-Part](/App_Part/de "App Part/de")-Container, die passende sichtbare Objekte enthalten, können auch mit diesem Werkzeug überprüft werden. Für [App-Link](/App_Link/de "App Link/de")-Objekte wird die Form des verknüpften Objekts geprüft. Für [App-Part](/App_Part/de "App Part/de")-Container werden die enthaltenen sichtbaren Objekte als Verbund geprüft. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* FreeCAD hat keine Möglichkeiten Geometrien automatisch zu reparieren. Wenn Fehler entdeckt werden, müssen die erforderlichen Schritte, um das Modell zu erstellen, untersucht und von Hand korrigiert werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/de&oldid=1471639>"