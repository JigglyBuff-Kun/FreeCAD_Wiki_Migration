---
title: Draft Punkt
---

|                                                                                                |
| ---------------------------------------------------------------------------------------------- |
| Draft Punkt                                                                                    |
| Menüeintrag                                                                                    |
| Zeichnen → Punkt 2D-Entwurf → Punkt                                                            |
| Arbeitsbereich                                                                                 |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel                                                                           |
| _Keiner_                                                                                       |
| Eingeführt in Version                                                                          |
| 0.7                                                                                            |
| Siehe auch                                                                                     |
| _Keiner_                                                                                       |
|                                                                                                |

## Beschreibung

Der Befehl ![](/images/Draft_Point.svg) **Draft Punkt** erstellt einen einfachen Punkt.
Draft-Punkte können nützlich sein als Referenz für die Positionierung von Linien, Polylinien oder anderen Objekten.

![](/images/Draft_point_example.jpg)

## Anwendung

Siehe auch: [Draft-Ablage](/Draft_Tray/de "Draft Tray/de"), [Draft-Einrasten](/Draft_Snap/de "Draft Snap/de") und [Draft-Beschränken](/Draft_Constrain/de "Draft Constrain/de").

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
2. Die Schaltfläche ![](/images/Draft_Point.svg) Punkt drücken.
   - [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Zeichnen → ![](/images/Draft_Point.svg) Punkt** auswählen.
   - [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **2D-Entwurf → ![](/images/Draft_Point.svg) Punkt** auswählen.
   - Der Aufgaben-Bereich **Punkt** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen oder die Koordinaten eingeben und die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben drücken.

## Optionen

Die im Aufgaben-Bereich vorhandenen Einzelzeichen-Tastaturkürzel können geändert werden. Siehe [Draft-Einstellungen](/Draft_Preferences/de "Draft Preferences/de"). Die hier genannten Tastaturkürzel sind die voreingestellten Tastaturkürzel (für Version 1.0).

- Zum manuellen Eingeben von Koordinaten, werden die X-, Y- und Z-Komponenten jeweils mit abschließendem Enter eingegeben. Oder man drückt die Schaltfläche ![](/images/Draft_AddPoint.svg) Punkt eingeben, sobald alle gewünschten Werte eingegeben sind. Es ist ratsam, den Mauszeiger aus der [3D-Ansicht](/3D_view/de "3D view/de") heraus zu bewegen, bevor Koordinaten eingegeben werden.
- G drücken oder die Checkbox **Global** aktivieren, um den Global-Modus umzuschalten. Ist der Global-Modus aktiviert, beziehen sich Koordinaten auf das globale Koordinatensystem, andernfalls beziehen sie sich auf das Koordinatensystem der [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de").
- N drücken oder die Checkbox **Fortsetzen** aktivieren, um den Fortsetzen-Modus umzuschalten. Ist der Fortsetzen-Modus aktiviert, wird der Befehl nach dem Beenden erneut gestartet und ermöglicht so mit dem Erstellen von Punkten fortzufahren.
- S drücken, um [Draft Einrasten](/Draft_Snap/de "Draft Snap/de") ein- bzw. auszuschalten.
- Esc oder die Schaltfläche Schließen drücken, um den Befehl abzubrechen.

## Hinweise

- ![](/images/Draft_Snap_Endpoint.svg) [Draft EinrastenAufEndpunkt](/Draft_Snap_Endpoint "Draft Snap Endpoint") wird verwendet, um an Draft-Punkten einzurasten.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft-Punkt-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Draft

- Daten-Eigenschaft**X** (`Abstand`): gibt die X Koordinate des Punktes an.
- Daten-Eigenschaft**Y** (`Abstand`): gibt die Y Koordinate des Punktes an.
- Daten-Eigenschaft**Z** (`Abstand`): gibt die Z Koordinate des Punktes an.

### Ansicht

Draft

- Ansicht-Eigenschaft**Pattern** (`Enumeration`): nicht verwendet.
- Ansicht-Eigenschaft**Pattern Size** (`Float`): nicht verwendet.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Um einen Draft-Punkt zu erstellen, wird die Methode `make_point` ([eingeführt in 0.19](/Release_notes_0.19/de "Release notes 0.19/de")) des Draft-Moduls verwendet. Diese Methode ersetzt die veraltete Methode `makePoint`.

```
point = make_point(X=0, Y=0, Z=0, color=None, name="Point", point_size=5)
point = make_point(point, Y=0, Z=0, color=None, name="Point", point_size=5)

```

- Erstellt ein `Punkt`-Objekt an den angegebenen `X`-, `Y`- und `Z`-Koordinaten mit Einheiten in mm. Falls keine Koordinaten angegeben werden, wird der Punkt bei (0,0,0) angelegt.
  - Falls `X` ein durch einen `FreeCAD.Vector` definierter `Punkt` ist, wird dieser verwendet.
- `color` ist ein Tupel `(R, G, B)`, das die Farbe des Punktes in der RGB-Farbskala angibt; jeder Wert des Tupels sollte im Bereich von `0` bis `1` liegen.
- `name` ist der Name des Objekts.
- `point_size` ist die Größe des Objekt in Pixeln, falls die grafische Benutzeroberfläche geladen ist

Beispiel:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

point1 = Draft.make_point(1600, 1400, 0)

p2 = App.Vector(-3200, 1800, 0)
point2 = Draft.make_point(p2, color=(0.5, 0.3, 0.6), point_size=10)

doc.recompute()

```

Beispiel:

Dieser Code erzeugt `N` zufällige Punkte innerhalb eines Quadrats der Seitenlänge `2L`. Er macht eine Schleife, die `N` Punkte erzeugt, die überall von `-L` bis `+L` auf X und Y erscheinen können. Er wählt auch eine zufällige Farbe und Größe für jeden Punkt. Ändere `N`, um die Anzahl der Punkte zu ändern, und ändere `L`, um den von den Punkten abgedeckten Bereich zu ändern.

```
import random
import FreeCAD as App
import Draft

doc = App.newDocument()

L = 1000
centered = App.Placement(App.Vector(-L, -L, 0), App.Rotation())
rectangle = Draft.make_rectangle(2*L, 2*L, placement=centered)

N = 10
for i in range(N):
    x = 2*L*random.random() - L
    y = 2*L*random.random() - L
    z = 0
    r = random.random()
    g = random.random()
    b = random.random()
    size = 15*random.random() + 5
    Draft.make_point(x, y, z, color=(r, g, b), point_size=size)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Point/de&oldid=1513900>"
