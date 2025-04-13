---
title: Sketcher WinkelFestlegen
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Sketcher WinkelFestlegen                                                                                   |
| Menüeintrag                                                                                                |
| Skizze → Sketcher-Randbedingungen → Winkel festlegen                                                       |
| Arbeitsbereich                                                                                             |
| [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")                                                 |
| Standardtastenkürzel                                                                                       |
| K A                                                                                                        |
| Eingeführt in Version                                                                                      |
| -                                                                                                          |
| Siehe auch                                                                                                 |
| [Sketcher RechtwinkligFestlegen](/Sketcher_ConstrainPerpendicular/de "Sketcher ConstrainPerpendicular/de") |
|                                                                                                            |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Sketcher_ConstrainAngle.svg) Sketcher WinkelFestlegen legt den Winkel zwischen zwei Kanten fest (Linien werden als unendlich angesehen (Geraden) und offene Kurven werden auch entsprechend virtuell erweitert), den Winkel einer Linie zur horizontalen Achse der Skizze oder den überstrichenen Winkel eines Kreisbogens.

## Anwendung

Siehe auch: [Zeichnungshilfen](/Sketcher_Workbench/de#Zeichnungshilfen "Sketcher Workbench/de").

### [Fortsetzen-Modus](/Sketcher_Workbench/de#Fortsetzen-Modi "Sketcher Workbench/de")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If the **Dimensioning constraints** [preference](/Sketcher_Preferences#General "Sketcher Preferences") is set to `Single tool` (default): press the down arrow to the right of the ![](/src/assets/images/Sketcher_Dimension.svg)![](/src/assets/images/Toolbar_flyout_arrow.svg) button and select the **![](/src/assets/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the dropdown.
   - If this preference has a different value (and in 0.21 and below): press the ![](/src/assets/images/Sketcher_ConstrainAngle.svg) [Constrain angle](/Sketcher_ConstrainAngle "Sketcher ConstrainAngle") button.
   - Select the **Sketch → Sketcher constraints → ![](/src/assets/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the menu.
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Dimension → ![](/src/assets/images/Sketcher_ConstrainAngle.svg) Constrain angle** option from the context menu.
   - Use the keyboard shortcut: K then A.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   - Select two lines.
   - Select a point and two edges (in that order).
   - Select an edge, a point and an edge (idem).
5. If a [driving dimensional constraint](/Sketcher_ToggleDrivingConstraint "Sketcher ToggleDrivingConstraint") is created, depending on the [preferences](/Sketcher_Preferences#Display "Sketcher Preferences"), a dialog opens to [edit its value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench"). A negative value will reverse the angle direction.
6. An Angle constraint is added. If a point and two edges have been selected, up to two [Point to object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).
7. Optionally keep creating constraints.
8. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   - Select a single line.
   - Select a single circular arc.
   - Select two lines.
   - Select a point and two edges (in any order).
2. Invoke the tool as explained above.
3. Optionally [edit the constraint value](/Sketcher_Workbench#Edit_constraints "Sketcher Workbench").
4. An Angle constraint is added. If a point and two edges have been selected, up to two [Point on object constraints](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") can also be added. See [Examples](#Between_two_edges_at_point).

## Beispiele

### Einzelne Linie

![](/src/assets/images/Sketcher_ConsraintAngle_mode1.png)

Der Winkel wird zwischen der Linie und der positiven X-Achse der Skizze festgelegt.

### Einzelner Kreisbogen

![](/src/assets/images/Sketcher_ConsraintAngle_mode2.png)

Der überstrichene Winkel des Kreisbogens wird festgelegt.

### Zwischen zwei Linien

![](/src/assets/images/Sketcher_ConsraintAngle_mode3.png)

Der Winkel zwischen zwei Linien wird festgelegt. Es ist nicht erforderlich, dass sich die Linien schneiden.

### Zwischen zwei Kanten am Knotenpunkt

![](/src/assets/images/Sketcher_ConsraintAngle_mode4.png)

The angle between the two edges at a given point is fixed. The point can be any point, e.g. the center of a circle, the endpoint of an edge, or the origin, it can belong to either or both edges, and it can also be a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint"). If required [Point on object constraint(s)](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") are added to ensure the point lies on both (extended) edges. These additional constraints are called [helper constraints](/Sketcher_helper_constraint "Sketcher helper constraint").

## Skripten

Die Randbedingung WinkelFestlegen kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus wie folgt erstellt werden:

```
# line slope angle
Sketch.addConstraint(Sketcher.Constraint('Angle',iline,angle))

# angular span of arc
Sketch.addConstraint(Sketcher.Constraint('Angle',iarc,angle))

# angle between lines
Sketch.addConstraint(Sketcher.Constraint('Angle',iline1,pointpos1,iline2,pointpos2,angle))

# angle-via-point (no helper constraints are added automatically when from python)
Sketch.addConstraint(Sketcher.Constraint('AngleViaPoint',icurve1,icurve2,geoidpoint,pointpos,angle))

```

wobei:

: _ `Sketch` ein Skizzenobjekt ist
_ `iline, iline1, iline2` sind ganze Zahlen, die die Zeilen durch ihre Ordnungszahlen in `Sketch` angeben.
_ `pointpos1, pointpos2` sollte 1 für den Startpunkt und 2 für den Endpunkt sein. Die Wahl der Endpunkte ermöglicht die Einstellung des internen (oder externen) Winkels, und sie beeinflusst die Art und Weise, wie die Randbedingung auf dem Bildschirm dargestellt wird.
_ `geoidpoint` und `pointpos` in `AngleViaPoint` sind die Indizes, die den Schnittpunkt angeben. \* `angle` ist der Winkelwert im Bogenmaß. Der Winkel wird zwischen Tangentenvektoren im Gegenuhrzeigersinn gezählt. Tangentenvektoren zeigen für die Linien von Anfang bis Ende (oder umgekehrt, wenn der Endpunkt im Modus Winkel zwischen Linien angegeben wird) und für Kreise, Bögen und Ellipsen entlang der Richtung entgegen dem Uhrzeigersinn. Die Größe wird auch als Winkel akzeptiert (z.B. `App.Units.Quantity('45 deg'))`

Die Seite [Sketcher Skripten](/Sketcher_scripting/de "Sketcher scripting/de") erklärt die Werte, die für `iline`, `iline1`, `iline2`, `pointpos1`, `pointpos2`, `geoidpoint` und `pointpos` verwendet werden können und enthält weitere Beispiele, wie man Randbedingungen mit Python-Skripten erstellt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainAngle/de&oldid=1417427>"
