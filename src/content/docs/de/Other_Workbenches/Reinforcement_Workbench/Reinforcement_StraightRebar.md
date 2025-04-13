---
title: Reinforcement GeradlinigeBewehrung
---
|  |
| --- |
| Reinforcement GeradlinigeBewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Geradlinige Bewehrung |
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

Das Werkzeug Reinforcement GeradlinigeBewehrung ermöglicht dem Anwender, einen Satz von geraden Bewehrungsstäben in einem [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Arch_Rebar_Straight_example.png)

Zwei Sätze gerader Bewehrungsstäbe in einer [Arch Struktur](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Eine beliebige Fläche eines vorher erstellten ![](/images/Arch_Structure.svg) [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts.
2. Dann ![](/images/Reinforcement_StraightRebar.svg) Geradlinige Bewehrung aus den Armierungswerkzeugen auswählen.
3. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wird auf der linken Seite des Bildschirm angezeigt, wie im folgenden Bild dargestellt.
4. Die gewünschte Ausrichtung auswählen.
5. Die Werte für 'Betondeckung vorne', 'Betondeckung rechts', 'Betondeckung links', 'Betondeckung unten' und 'Durchmesser' des Bewehrungsstabes eingeben.
6. Den Verteilungsmodus auswählen, entweder `'Anzahl'` oder `'Abstand'`.
7. Falls 'Abstand' ausgewählt wurde, kann auch [Benutzerdefinierter Abstand](/Reinforcement_Custom_Spacing/de "Reinforcement Custom Spacing/de") ausgewählt werden.
8. Markierte Seite auswählen wird verwendet, um die Fläche für die Verteilung der Bewehrungsstäbe zu bestätigen oder zu ändern.
9. Schaltfläche OK oder Anwenden drücken, um die Bewehrungsstäbe zu erstellen.
10. Schaltfläche Abbrechen drücken, um den Aufgaben-Bereich zu verlassen.

![](/images/StraightRebarDialog.png)

Aufgaben-Bereich für das Werkzeug

## Eigenschaften

* Daten**Orientation**: Legt die Ausrichtung der Bewehrungsstäbe fest ("Bottom Right", "Bottom Left", "Top Right" und "Top Left").
* Daten**Front Cover**: Der Abstand zwischen Bewehrungsstab und gewählter Fläche.
* Daten**Right Cover**: Der Abstand zwischen dem rechten Ende des Bewehrungsstabs bis zur rechten Fläche der Struktur.
* Daten**Left Cover**: Der Abstand zwischen dem linken Ende des Bewehrungsstabs bis zur linken Fläche der Struktur.
* Daten**Cover along**: Diese Eigenschaft erlaubt dem Anwender die Auswahl zwischen "Top Cover" und "Bottom Cover" (Ober- bzw. Unterseite).
* Daten**Bottom Cover**: Der Abstand zwischen Bewehrungsstab bis zur unteren Fläche der Struktur.
* Daten**Top Cover**: Der Abstand zwischen dem Bewehrungsstab bis zur oberen Fläche der Struktur.
* Daten**Amount**: Die Anzahl der Bewehrungsstäbe.
* Daten**Spacing**: Der Abstand zwischen den Achsen der Bewehrungsstäbe.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement GeradlinigeBewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeStraightRebar(f_cover, coverAlong, rt_cover, lb_cover,
                          diameter, amount_spacing_check, amount_spacing_value, orientation="Horizontal",
                          structure=None, facename=None)

```

* Erstellt ein `Rebar`-Objekt aus der gegebenen `structure`, die eine [Arch Struktur](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Falls weder `structure` noch `facename` gegeben sind, wird die vom Benutzer gewählte Fläche als Eingabe genommen.
* `f_cover`, `coverAlong`, `rt_cover` und `lb_cover` sind innere Abstände von den Bewehrungsstabelementen zu den Flächen der Struktur.
  + `f_cover` ist der Abstand zur Frontfläche.
  + `coverAlong` ist ein Tupel `(position, value)`, das den Abstand in einer Position (oben, unten, links, rechts) abhängig von der `orientation` angibt.
  + `rt_cover` ist der Abstand entweder der oberen oder der rechten Fläche, abhängig vom Wert von `coverAlong` und `orientation`.
  + `lb_cover` ist der Abstand entweder der unteren oder der linken Fläche, abhängig vom Wert von `coverAlong` und `orientation`.
* `diameter` ist der Durchmesser der Verstärkungsstäbe innerhalb der Struktur.
* `amount_spacing_check` Falls `True` werden so viele Bewehrungsstäbe erstellt, wie unter `amount_spacing_value` angegeben; falls `False` werden die Bewehrungsstäbe im Abstand von `amount_spacing_value` erstellt.
* `amount_spacing_value` gibt die Anzahl von Bewehrungsstäben an oder den Abstandswert, abhängig von `amount_spacing_check`.
* `orientation` gibt die Ausrichtung der Bewehrung an; möglich sind `"Horizontal"` oder `"Vertical"`.

Abhängig von der Ausrichtung des Bewehrungsstabs kann die Funktion durch entsprechendes Setzen von `coverAlong` auf zwei allgemeine Weisen aufgerufen werden.

### Der Bewehrungsstab ist horizontal

```
Rebar = makeStraightRebar(f_cover, ("Top Side", value), right_cover, left_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Bottom Side", value), right_cover, left_cover, ...)

```

* `coverAlong` ist ein Tupel mit einem `"Top Side"` (Oberseiten)- oder einem `"Bottom Side"` (Unterseiten)-Abstandswert `value`.
* In diesem Fall bezieht sich `rt_cover` auf den `right_cover` (rechts Seite)-Abstand und `lb_cover` auf den `left_cover` (linke Seite)-Abstand.

### Der Bewehrungsstab ist vertikal

```
Rebar = makeStraightRebar(f_cover, ("Left Side", value), top_cover, bottom_cover, ...)
Rebar = makeStraightRebar(f_cover, ("Right Side", value), top_cover, bottom_cover, ...)

```

* `coverAlong` ist ein Tupel mit einem `"Left Side"` (linke Seite)- oder einem `"Right Side"` (rechte Seite)-Abstandswert `value`.
* In diesem Fall bezieht sich `rt_cover` auf den `top_cover` (Oberseite)-Abstand und `lb_cover` auf den `bottom_cover` (Unterseite)-Abstand.

### Beispiel horizontal

```
import Arch, Draft, StraightRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = StraightRebar.makeStraightRebar(50, ("Bottom Side", 20), 100, 100,
                                        12, True, 5, "Horizontal", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = StraightRebar.makeStraightRebar(50, ("Bottom Side", 50), 100, 100,
                                         12, True, 5, "Horizontal", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Beispiel vertikal

```
import Arch, Draft, StraightRebar

Structure2 = Arch.makeStructure(length=1000, width=1000, height=400)
Structure2.ViewObject.Transparency = 80
Draft.move(Structure2, FreeCAD.Vector(1500, 0, 0))
FreeCAD.ActiveDocument.recompute()

Rebar3 = StraightRebar.makeStraightRebar(50, ("Left Side", 20), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face4")
Rebar3.ViewObject.ShapeColor = (0.9, 0.5, 0.0)

Rebar4 = StraightRebar.makeStraightRebar(50, ("Left Side", 50), 100, 100,
                                         12, True, 5, "Vertical", Structure2, "Face6")
Rebar4.ViewObject.ShapeColor = (0.0, 0.5, 0.5)

```

### Bearbeiten der Bewehrung

Die Eigenschaften des Bewehrungsstabes lassen sich mit der folgenden Funktion verändern:

```
editStraightRebar(Rebar, f_cover, coverAlong, rt_cover, lb_cover,
                  diameter, amount_spacing_check, amount_spacing_value, orientation,
                  structure=None, facename=None)

```

* `Rebar` ist ein vorher erzeugtes `StraightRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeStraightRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

Beispiel:

```
import StraightRebar

StraightRebar.editStraightRebar(Rebar, 50, ("Top Side", 20), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar2, 50, ("Top Side", 50), 100, 100,
                                24, True, 7, "Horizontal")

StraightRebar.editStraightRebar(Rebar3, 50, ("Right Side", 20), 100, 100,
                                24, True, 7, "Vertical")

StraightRebar.editStraightRebar(Rebar4, 50, ("Right Side", 50), 100, 100,
                                24, True, 7, "Vertical")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StraightRebar/de&oldid=1438065>"