---
title: Reinforcement LBewehrung
---
|  |
| --- |
| Reinforcement LBewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → L-förmige Bewehrung |
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

Das Werkzeug [Reinforcement LBewehrung](/Reinforcement_LShapeRebar "Reinforcement LShapeRebar") ermöglicht dem Anwender, einen Satz von L-förmigen Bewehrungsstäben in einem [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Arch_Rebar_LShape_example.png)

Vier Sätze von L-förmigen Bewehrungsstäben in einem [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt

## Anwendung

1. Eine beliebige Fläche eines vorher erstellten ![](/images/Arch_Structure.svg) [Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.
2. Dann ![](/images/Reinforcement_LShapeRebar.svg) L-förmiger Bewehrungsstab aus den Armierungswerkzeugen auswählen.
3. Ein [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wird auf der linken Seite des Bildschirm angezeigt wie im folgenden Bild dargestellt.
4. Die gewünschte Ausrichtung auswählen.
5. Die Werte für 'Betondeckung links', 'Betondeckung rechts', 'Betondeckung oben', 'Betondeckung unten', 'Betondeckung vorne', 'Bent Angle' (Biegungswinkel), 'Bent Factor', 'Rundung' und 'Durchmesser' des Bewehrungsstabes eingeben.
6. Verteilungsmodus auswählen, entweder `'Anzahl'` oder `'Abstand'` (Abstand).
7. Falls 'Abstand' ausgewählt wurde, kann auch ein [Benutzerdefinierter Abstand](/Reinforcement_Custom_Spacing/de "Reinforcement Custom Spacing/de") ausgewählt werden.
8. Markierte Seite auswählen wird zum Überprüfen oder Ändern der Fläche zur Verteilung der Bewehrungsstäbe eingesetzt.
9. OK oder Anwenden anklicken, um die Bewehrungsstäbe zu erstellen.
10. Abbrechen anklicken, um den Aufgaben-Bereich zu verlassen.

![](/images/LShapeDialog.png)

Aufgaben-Bereich für das Werkzeug

## Eigenschaften

* Daten**Orientation**: Legt die Ausrichtung der Bewehrungsstäbe fest ("Bottom Right", "Bottom Left", "Top Right" und "Top Left").
* Daten**Front Cover**: Der Abstand zwischen Bewehrungsstab und gewählter Fläche.
* Daten**Right Cover**: Der Abstand zwischen dem rechten Ende des Bewehrungsstabs bis zur rechten Fläche der Struktur.
* Daten**Left Cover**: Der Abstand zwischen dem linken Ende des Bewehrungsstabs bis zur linken Fläche der Struktur.
* Daten**Bottom Cover**: Der Abstand zwischen Bewehrungsstab bis zur unteren Fläche der Struktur.
* Daten**Top Cover**: Der Abstand zwischen dem Bewehrungsstab bis zur oberen Fläche der Struktur.
* Daten**Rounding**: A rounding value to be applied to the corners of the bars, expressed in times the diameter.
* Daten**Amount**: Die Anzahl der Bewehrungsstäbe.
* Daten**Spacing**: Der Abstand zwischen den Achsen der Bewehrungsstäbe.

## Skripten

*Siehe auch:* [Arch-API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement LBewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeLShapeRebar(f_cover, b_cover, l_cover, r_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom Left",
                        structure=None, facename=None):

```

* Erstellt ein `Rebar`-Objekt aus der gegebenen `structure`, die eine [Arch Struktur](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Falls weder `structure` noch `facename` gegeben sind, wird die vom Benutzer gewählte Fläche als Eingabe genommen.
* `f_cover`, `b_cover`, `l_cover`, `r_cover`, und `t_cover` sind innere Abstände von den Bewehrungsstabelementen zu den Flächen der Struktur. Dies sind entsprechend die vorderen, unteren, linken, rechten und oberen Abstände.
* `diameter` ist der Durchmesser der Verstärkungsstäbe innerhalb der Struktur.
* `rounding` ist der Parameter, der den Biegeradius der Verstärkungsstäbe angibt.
* `amount_spacing_check` Falls `True` werden so viele Bewehrungsstäbe erstellt, wie unter `amount_spacing_value` angegeben; falls `False` werden die Bewehrungsstäbe im Abstand von `amount_spacing_value` erstellt.
* `amount_spacing_value` gibt die Anzahl von Bewehrungsstäben an oder den Abstandswert, abhängig von `amount_spacing_check`.
* `orientation` gibt die Ausrichtung der Bewehrung an; möglich sind `"Bottom Right"` (unten rechts), `"Top Rechts"` (oben rechts), `"Bottom Left"` (unten links) oder `"Bottom Right"` (unten rechts).

### Beispiel

```
import FreeCAD, Arch, LShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = LShapeRebar.makeLShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom Left", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = LShapeRebar.makeLShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom Left", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Bearbeiten der Bewehrung

Die Eigenschaften des Bewehrungsstabes lassen sich mit der folgenden Funktion verändern:

```
editLShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` ist ein vorher erzeugtes `LShapeRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeLShapeRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

```
import LShapeRebar

LShapeRebar.editLShapeRebar(Rebar, 50, 50, 20, 20,
                            12, 50, 6, True, 5, "Top Right")

LShapeRebar.editLShapeRebar(Rebar2, 50, 50, 20, 20,
                            12, 70, 6, True, 5, "Top Right")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_LShapeRebar/de&oldid=1438049>"