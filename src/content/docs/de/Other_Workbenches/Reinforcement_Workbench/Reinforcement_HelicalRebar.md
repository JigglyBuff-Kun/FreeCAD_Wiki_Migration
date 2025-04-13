---
title: Reinforcement Wendelbewehrung
---
|  |
| --- |
| Reinforcement Wendelbewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Wendelbewehrung |
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

Das Werkzeug [Reinforcement Wendelbewehrung](/Reinforcement_HelicalRebar "Reinforcement HelicalRebar") erlaubt dem Anwender, einen fortlaufenden spiralförmigen Bewehrungsstab in einem [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

:   ![](/images/Arch_Rebar_Helical_example.png)

Ein fortlaufender spiralförmiger Bewehrungsstab in einer [Struktur](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Eine beliebige Fläche eines vorher erstellten ![](/images/Arch_Structure.svg) [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.
2. Dann ![](/images/Reinforcement_HelicalRebar.svg) Wendelbewehrung aus den Armierungswerkzeugen auswählen.
3. Ein [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wird auf der linken Seite des Bildschirm angezeigt wie im folgenden Bild dargestellt.
4. Die gewünschte Ausrichtung auswählen.
5. Die Werte für 'Left Cover' (linke Fläche), 'Right Cover' (rechte), 'Top Cover' (obere), 'Bottom Cover' (untere), 'Front Cover' (vordere), 'Anchor length' (Ankerlänge), 'Bent Angle' (Biegungswinkel), 'Bent Factor', 'Rounding' und 'Diameter' (Durchmesser) des Bewehrungsstabes eingeben.
6. Die Art der Verteilung auswählen, entweder `'Amount'` (Menge) oder `'Spacing'` (Abstand).
7. Falls 'Spacing' gewählt wurde, kann auch [benutzerdefinierter Abstand](/Reinforcement_Custom_Spacing/de "Reinforcement Custom Spacing/de") gewählt werden.
8. Pick selected face wird verwendet, um die Fläche für die Verteilung der Bewehrungsstäbe zu bestätigen oder zu ändern.
9. Schaltfläche OK oder Anwenden drücken, um die Bewehrungsstäbe zu erstellen.
10. Schaltfläche Abbrechen drücken, um den Aufgaben-Bereich zu verlassen.

![](/images/HelicalRebarDialog.png)

Aufgaben-Bereich für das Werkzeug

## Eigenschaften

* Daten-Eigenschaft**Side Cover**: Der Abstand zwischen dem Bewehrungsstab und der gekrümmten Fläche.
* Daten-Eigenschaft**Top Cover**: Der Abstand zwischen dem Bewehrungsstab und der oberen Fläche der Struktur.
* Daten-Eigenschaft**Bottom Cover**: Der Abstand zwischen dem Bewehrungsstab und der unteren Fläche der Struktur.
* Daten-Eigenschaft**Pitch**: Die Höhe einer vollständigen Helixumdrehung, gemessen parallel zu den Achsen der Helix.
* Daten-Eigenschaft**Diameter**: Durchmesser des Bewehrungsstabs.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement Wendelbewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* Erstellt ein `Rebar`-Objekt aus der gegebenen `structure`, die eine [Arch Struktur](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Falls weder `structure` noch `facename` gegeben sind, wird die vom Benutzer gewählte Fläche als Eingabe genommen.
* `s_cover`, `b_cover` und `t_cover` sind innere Abstände von den Bewehrungsstabelementen zu den Flächen der Struktur. Dies sind entsprechend die seitlichen, unteren und oberen Abstände.
* `diameter` ist der Durchmesser der Verstärkungsstäbe innerhalb der Struktur.
* `pitch` ist der Parameter, der festlegt, wie groß der Abstand der Windungen von einander ist.

### Beispiel

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Bearbeiten der Bewehrung

Die Eigenschaften des Bewehrungsstabes lassen sich mit der folgenden Funktion verändern

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* `Rebar` ist ein vorher erzeugtes `HelicalRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeHelicalRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/de&oldid=1438047>"