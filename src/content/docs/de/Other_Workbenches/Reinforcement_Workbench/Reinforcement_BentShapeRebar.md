---
title: Reinforcement AbgesetzteBewehrung
---
|  |
| --- |
| Reinforcement AbgesetzteBewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → AbgesetzteBewehrung |
| Arbeitsbereich |
| [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug [Reinforcement AbgesetzteBewehrung](/Reinforcement_BentShapeRebar "Reinforcement BentShapeRebar") erlaubt dem Anwender, einen Satz von abgesetzten Bewehrungsstäben innerhalb eines Balkenobjekts ([Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt) zu erzeugen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Arch_Rebar_BentShape_example.png)

Zwei Sätze von abgewinkelten Bewehrungsstäben in einer [Struktur](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Eine beliebige Fläche eines vorher erstellten ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.
2. Dann ![](/images/Reinforcement_BentShapeRebar.svg) Abgesetzte Bewehrung aus der Rebar-Symbolleiste auswählen.
3. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wird auf der linken Seite des Bildschirm angezeigt, wie im folgenden Bild dargestellt.
4. Die gewünschte Ausrichtung auswählen.
5. Werte wie 'Left Cover' (linke Fläche), 'Right Cover' (rechte), 'Top Cover' (obere), 'Bottom Cover' (untere), 'Front Cover' (vordere), 'Anchor length' (Ankerlänge), 'Bent Angle' (Biegungswinkel), 'Bent Factor', 'Rounding' und 'Diameter' (Durchmesser) des Bewehrungsstabes eingeben.
6. Den Verteilungsmodus auswählen, entweder `'Amount'` (Menge) oder `'Spacing'` (Abstand).
7. Falls 'Spacing' gewählt wurde, kann auch [Benutzerdefinierter Abstand](/Reinforcement_Custom_Spacing/de "Reinforcement Custom Spacing/de") gewählt werden.
8. Pick selected face wird verwendet, um die Fläche für die Verteilung der Bewehrungsstäbe zu bestätigen oder zu ändern.
9. Schaltfläche OK oder Anwenden drücken, um die Bewehrungsstäbe zu erstellen.
10. Schaltfläche Abbrechen drücken, um den Aufgaben-Bereich zu verlassen.

![](/images/BentShapeDialog.png)

Aufgaben-Bereich für das Werkzeug

## Eigenschaften

* Daten-Eigenschaft**Orientation**: Legt die Ausrichtung des Bewehrungsstabs fest (wie unten, oben, recht und links).
* Daten-Eigenschaft**Front Cover**: Der Abstand zwischen Bewehrungsstab und ausgewählter Fläche.
* Daten-Eigenschaft**Left Cover**: Der Abstand zwischen dem linken Ende des Bewehrungsstabs und der linken Fläche der Struktur.
* Daten-Eigenschaft**Right Cover**: Der Abstand zwischen dem rechten Ende des Bewehrungsstabs und der rechten Fläche der Struktur.
* Daten-Eigenschaft**Bottom Cover**: Der Abstand zwischen dem Bewehrungsstab und der unteren Fläche der Struktur.
* Daten-Eigenschaft**Top Cover**: Der Abstand zwischen dem Bewehrungsstab und der oberen Fläche der Struktur.
* Daten-Eigenschaft**Anchor Length**: Die "Armlänge" des abgewinkelten Bewehrungsstabs.
* Daten-Eigenschaft**Bent Angle**: Definiert den Winkel zwischen den Enden eines Bügels.
* Daten-Eigenschaft**Amount**: Die Anzahl von Bewehrungsstäben.
* Daten-Eigenschaft**Spacing**: Der Abstand zwischen den Achsen jedes Bewehrungsstabs.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement AbgesetzteBewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeBentShapeRebar(f_cover, b_cover, l_cover, r_cover,
                           diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                           structure=None, facename=None)

```

* Erstellt ein `Rebar`-Objekt aus der gegebenen `structure`, die eine [Arch Struktur](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Falls weder `structure` noch `facename` gegeben sind, wird die vom Benutzer gewählte Fläche als Eingabe genommen.
* `f_cover`, `b_cover`, `l_cover`, `r_cover`, und `t_cover` sind innere Abstände von den Bewehrungsstabelementen zu den Flächen der Struktur. Dies sind entsprechend die vorderen, unteren, linken, rechten und oberen Abstände.
* `diameter` ist der Durchmesser der Verstärkungsstäbe innerhalb der Struktur.
* `rounding` ist der Parameter, der den Biegeradius der center Verstärkungsstäbe angibt.
* `bentLength` und `bentAngle` definieren die Länge der Spitze der Verstärkungsstäbe und den Biegewinkel der center Stäbe.
* `amount_spacing_check` Falls `True` werden so viele Bewehrungsstäbe erstellt, wie unter `amount_spacing_value` angegeben; falls `False` werden die Bewehrungsstäbe im Abstand von `amount_spacing_value` erstellt.
* `amount_spacing_value` gibt die Anzahl von Bewehrungsstäben an oder den Abstandswert, abhängig von `amount_spacing_check`.
* `orientation` gibt die Ausrichtung der Bewehrung an; möglich sind `"Bottom"` (unten), `"Top"` (oben), `"Left"` (links) oder `"Right"` (rechts) sein.

### Beispiel

```
import FreeCAD, Arch, BentShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=100)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = BentShapeRebar.makeBentShapeRebar(50, 20, 20, 20,
                                          8, 40, 100, 135, 2, True, 4, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = BentShapeRebar.makeBentShapeRebar(50, 40, 20, 20,
                                           8, 20, 100, 135, 2, True, 4, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Anpassung des Bewehrungsstabs

Die Eigenschaften des Bewehrungsstabes lassen sich mit der folgenden Funktion verändern:

```
editBentShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                   diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation,
                   structure=None, facename=None)

```

* `Rebar` ist ein vorher erzeugtes `BentShapeRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeBentShapeRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

```
import BentShapeRebar

BentShapeRebar.editBentShapeRebar(Rebar, 50, 20, 20, 20,
                                  12, 20, 100, 155, 2, True, 6, "Top")

BentShapeRebar.editBentShapeRebar(Rebar2, 50, 35, 20, 20,
                                  12, 35, 100, 155, 2, True, 6, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BentShapeRebar/de&oldid=1438057>"