---
title: Reinforcement Stützenbewehrung Ringförmig
---
|  |
| --- |
| Reinforcement Stützenbewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Stützenbewehrung |
| Arbeitsbereich |
| [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| [Reinforcement Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de"), [Reinforcement Säulenbewehrung ZweiBügelSechsStäbe](/Reinforcement_ColumnRebars_TwoTiesSixRebars/de "Reinforcement ColumnRebars TwoTiesSixRebars/de") |
|  |

## Beschreibung

Das Werkzeug [Reinforcement Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de") ermöglicht dem Anwender, Bewehrungsstäbe innerhalb einer Stütze ([Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt) zu erzeugen. Diese Seite zeigt ein weiteres Anwendungsbeispiel für dieses Werkzeug.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

Drei Anwendungsbeispiele stehen zur Verfügung:

* [Rechteckige Stütze mit einzelnem Bügel](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de")
* [Rechteckige Stütze mit zwei Bügeln und sechs Stäben](/Reinforcement_ColumnRebars_TwoTiesSixRebars/de "Reinforcement ColumnRebars TwoTiesSixRebars/de")
* [Runde Stütze (siehe unten)](#Anwendung)

![](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

Ringförmige Säulenbewehrung innerhalb einer [Stütze](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Die Deckelfläche eines zuvor erstellten ![](/images/Arch_Structure.svg) [Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.

2. Dann ![](/images/Reinforcement_ColumnRebars.svg) [Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de") in den Armierungswerkzeugen auswählen.

3. Eine Dialog-Box wird sich öffnen, wie unten gezeigt.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Dialog-Box für das Werkzeug Arch Armierung Stützenbewehrung

4. Den Schaltknopf Circular Column im Dialog Column Reinforcement auswählen.

:   ![](/images/CircularColumnReinforcementDialog.png)
:   Dialog-Box für Ringförmige Stützenbewehrung

5. Give inputs for data related to circular column reinforcement.

6. Click OK or Apply to generate circular column reinforcement.

7. Abbrechen anklicken, um die Dialog-Box zu verlassen.

## Eigenschaften

**Wendelbewehrungen:**

* Daten-Eigenschaft**Side Cover**: Der Abstand zwischen dem Bewehrungsstab und der gekrümmten Fläche.
* Daten-Eigenschaft**Top Cover**: Der Abstand zwischen dem Bewehrungsstab und der Deckelfläche der Struktur.
* Daten-Eigenschaft**Bottom Cover**: Der Abstand zwischen dem Bewehrungsstab und der Bodenfläche der Struktur.
* Daten-Eigenschaft**Pitch**: Die Steigung (pitch) ist Höhe einer vollständigen Windung der Wendel, gemessen parallel zu der Achse der Wendel.
* Daten-Eigenschaft**Diameter**: Durchmesser der Bewehrung.

**Hauptbewehrungsstäbe:**

* Daten-Eigenschaft**Top Offset**: Der Abstand der Bewehrungsstäbe zur Deckelfläche der Struktur.
* Daten-Eigenschaft**Bottom Offset**: Der Abstand der Bewehrungsstäbe zur Bodenfläche der Struktur.
* Daten-Eigenschaft**Diameter**: Durchmesser der Hauptbewehrungsstäbe.
* Daten-Eigenschaft**Number**: Die Anzahl der Hauptbewehrungsstäbe.
* Daten-Eigenschaft**Angle**: Der Winkelabstand zwischen den Windungen (kegelförmiger Wendeln).

## Skripten

*Siehe auch:* [Architektur API](/Arch_API/de "Arch API/de"), [Bewehrung API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement Ringförmige Stützenbewehrung kann in [Makros](/Macros/de "Macros/de") und aus der [Python](/Python/de "Python/de")-Konsole mit der folgenden Funktion verwendet werden:

### Ringförmige Stützenbewehrung erstellen

```
RebarGroup = CircularColumn.makeReinforcement(
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

* Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `s_cover`, `helical_rebar_t_offset`, and `helical_rebar_b_offset` are inner offset distances for the helical rebar with respect to the faces of the structure. They are respectively the side, top and bottom offsets.
* `pitch` is the parameter that determines how close or far apart each helical loop is to each other.
* `dia_of_helical_rebar` is the diameter of the helical rebar inside the structure.
* `main_rebars_t_offset` and `main_rebars_b_offset` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
* `dia_of_main_rebars` is the diameter of the main rebars.
* `number_angle_check` if it is `True` it will create as many main rebars as given by `number_angle_value`; if it is `False` it will create main rebars at an angle of `number_spacing_value`, specified in degrees.
* `number_angle_value` specifies the number of main rebars, or the value of the angle between the main rebars, depending on `number_angle_check`.

#### Beispiel

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import CircularColumn

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = CircularColumn.makeReinforcement(
    s_cover=20,
    helical_rebar_t_offset=40,
    helical_rebar_b_offset=40,
    pitch=50,
    dia_of_helical_rebar=8,
    main_rebars_t_offset=20,
    main_rebars_b_offset=20,
    dia_of_main_rebars=16,
    number_angle_check=True,
    number_angle_value=6,
    structure=Structure,
    facename="Face3",
).rebar_group

```

### Ringförmige Stützenbewehrung bearbeiten

Die Eigenschaften der Wendelbewehrung und der Hauptbewehrungsstäbe lassen sich mit der folgenden Funktion anpassen:

```
rebar_group = editReinforcement(
    rebar_group,
    s_cover,
    helical_rebar_t_offset,
    helical_rebar_b_offset,
    pitch,
    dia_of_helical_rebar,
    main_rebars_t_offset,
    main_rebars_b_offset,
    dia_of_main_rebars,
    number_angle_check,
    number_angle_value,
    structure=None,
    facename=None,
)

```

* `rebar_group` is a previously created `ColumnReinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

#### Beispiel

```
from ColumnReinforcement import CircularColumn

rebar_group = CircularColumn.editReinforcement(
    rebar_group,
    s_cover=30,
    helical_rebar_t_offset=30,
    helical_rebar_b_offset=30,
    pitch=60,
    dia_of_helical_rebar=10,
    main_rebars_t_offset=-30,
    main_rebars_b_offset=-30,
    dia_of_main_rebars=18,
    number_angle_check=False,
    number_angle_value=45,
    structure=Structure,
    facename="Face3",
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_Circular/de&oldid=1437983>"