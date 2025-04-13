---
title: Reinforcement Bewehrungsbügel
---
|  |
| --- |
| Reinforcement Bewehrungsbügel |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Bewehrungsbügel |
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

Das Werkzeug Reinforcement Bewehrungsbügel erlaubt dem Anwender, einen Satz von Bewehrungsbügeln in einem [Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Arch_Rebar_Stirrup_example.png)

Ein Satz von Bewehrungsbügeln in einem [Struktur](/Arch_Structure/de "Arch Structure/de")

-Objekt

## Anwendung

1. Eine beliebige Fläche eines vorher erstellten ![](/images/Arch_Structure.svg) [Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.
2. Dann ![](/images/Reinforcement_StirrupRebar.svg) Bewehrungsbügel aus den Bewehrungswerkzeugen auswählen.
3. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") wird auf der linken Seite des Bildschirm angezeigt, wie im folgenden Bild dargestellt.
4. Die gewünschte Ausrichtung auswählen.
5. Die Werte wie 'Left Cover' (linke Fläche), 'Right Cover' (rechte), 'Top Cover' (obere), 'Bottom Cover' (untere), 'Front Cover' (vordere), 'Anchor length' (Ankerlänge), 'Bent Angle' (Biegungswinkel), 'Bent Factor', 'Rounding' und 'Diameter' (Durchmesser) des Bewehrungsstabes eingeben.
6. Den Verteilungsmodus auswählen, entweder `'Amount'` (Menge) oder `'Spacing'` (Abstand).
7. Falls 'Spacing' ausgewählt wurde, kann auch [Benutzerdefinierter Abstand](/Reinforcement_Custom_Spacing/de "Reinforcement Custom Spacing/de") ausgewählt werden.
8. Pick selected face wird verwendet, um die Fläche für die Verteilung der Bewehrungsstäbe zu bestätigen oder zu ändern.
9. Schaltfläche OK oder Anwenden drücken, um die Bewehrungsstäbe zu erstellen.
10. Schaltfläche Abbrechen drücken, um den Aufgaben-Bereich zu verlassen.

![](/images/StirrupDialog.png)

Aufgaben-Bereich für das Werkzeug

## Eigenschaften

* Daten-Eigenschaft**Front Cover**: Der Abstand zwischen Bewehrungsstab und ausgewählter Fläche.
* Daten-Eigenschaft**Right Cover**: Der Abstand zwischen dem rechten Ende des Bewehrungsstabs und der rechten Fläche der Struktur.
* Daten-Eigenschaft**Left Cover**: Der Abstand zwischen dem linken Ende des Bewehrungsstabs und der linken Fläche der Struktur.
* Daten-Eigenschaft**Bottom Cover**: Der Abstand zwischen dem Bewehrungsstab und der unteren Fläche der Struktur.
* Daten-Eigenschaft**Top Cover**: Der Abstand zwischen dem Bewehrungsstab und der oberen Fläche der Struktur.
* Daten-Eigenschaft**Bent Angle**: Definiert den Winkel zwischen den Enden eines Bügels.
* Daten-Eigenschaft**Bent Factor**: Definiert die Länge des Bügelendes.
* Daten-Eigenschaft**Amount**: Die Anzahl von Bewehrungsstäben.
* Daten-Eigenschaft**Spacing**: Der Abstand zwischen den Achsen jedes Bewehrungsstabs.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement Bewehrungsbügel kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

* Erstellt ein `Rebar`-Objekt aus der angegebenen `structure`, die ein [Bauelement](/Arch_Structure/de "Arch Structure/de") ist und `facename`, das eine Fläche dieser Struktur ist.
  + Falls weder `structure` noch `facename` angegeben werden, wird die vom Benutzer ausgewählte Fläche als Eingabe verwendet.
* `l_cover`, `r_cover`, `t_cover`, `b_cover` und `f_cover` sind innere Abstände zwischen den Bewehrungsstab-Elementen bezogen auf die Flächen der Struktur. Es sind die linken, rechten, oberen, unteren und vorderen Abstände.
* `diameter` ist der Durchmesser der Verstärkungsstäbe innerhalb der Stuktur.
* `rounding` ist der Parameter, der den Biegeradius der Verstärkungsstäbe bei einer Windung.
* `bentLength` und `bentAngle` definieren Länge und Winkel der Spitze der Verstärkungswindung.
* `amount_spacing_check`, falls `True` werden soviele Windungen erzeugt wie durch `amount_spacing_value` angegeben; falls `False` werden Windungen im Abstand des numerischen Werts von `amount_spacing_value` erzeugt.
* `amount_spacing_value` gibt die Anzahl der Verstärkungswindungen an oder den Wert des Abstand zwischen ihnen, abhängig von `amount_spacing_check`.

### Beispiel

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Bearbeiten der Bewehrung

Die Eigenschaften des Bewehrungsstabes lassen sich mit der folgenden Funktion verändern:

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

* `Rebar` ist ein vorher erzeugtes `StirrupRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeStirrup()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/de&oldid=1438053>"