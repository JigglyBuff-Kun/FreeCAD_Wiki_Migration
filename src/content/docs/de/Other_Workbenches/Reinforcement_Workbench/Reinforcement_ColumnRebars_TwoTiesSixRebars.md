---
title: Reinforcement Stützenbewehrung ZweiBügelSechsStäbe
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
| [Reinforcement Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de"), [Reinforcement Stützenbewehrung Ringförmig](/Reinforcement_ColumnRebars_Circular/de "Reinforcement ColumnRebars Circular/de") |
|  |

## Beschreibung

Das Werkzeug [Reinforcement Stützenbewehrung](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de") ermöglicht dem Anwender, Bewehrungsstäbe innerhalb einer Stütze ([Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt) zu erzeugen. Diese Seite zeigt ein weiteres Anwendungsbeispiel für dieses Werkzeug.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

Drei Anwendungsbeispiele stehen zur Verfügung:

* [Rechteckige Stütze mit einzelnem Bügel](/Reinforcement_ColumnRebars/de "Reinforcement ColumnRebars/de")
* [Rechteckige Stütze mit zwei Bügeln und sechs Stäben (siehe unten)](#Anwendung)
* [Runde Stütze](/Reinforcement_ColumnRebars_Circular/de "Reinforcement ColumnRebars Circular/de")

![](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

Stützenbewehrung mit zwei Bügeln und sechs Stäben (Bewehrungskorb) innerhalb einer [Stütze](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Select any face of a previously created ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") object.

2. Then select ![](/images/Reinforcement_ColumnRebars.svg) [Column Reinforcement](/Reinforcement_ColumnRebars "Reinforcement ColumnRebars") from the rebar tools.

3. A dialog box will pop-out on screen as shown below.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Dialog Box for the Arch Rebar ColumnReinforcement tool

4. Select the TwoTiesSixRebars type of column reinforcement from drop down menu on right side.

:   ![](/images/TwoTiesColumnReinforcementDialog_Ties.png)
:   Dialog Box for the TwoTiesSixRebars ColumnReinforcement

5. Give inputs for data related to ties.

6. Click Next and the dialog box will be updated as shown below.

:   ![](/images/TwoTiesColumnReinforcementDialog_MainRebars.png)
:   Dialog Box for Main Rebars data

7. Select desired rebar type and fill data for main rebars.

8. Click OK or Apply to generate column reinforcement.

9. Click Cancel to exit the dialog box.

## Properties

**Ties:**

* Daten**Left Cover**: The distance between the left end of the tie to the left face of the structure.
* Daten**Right Cover**: The distance between the right end of the tie to right face of the structure.
* Daten**Top Cover**: The distance between tie from the top face of the structure.
* Daten**Bottom Cover**: The distance between tie from the bottom face of the structure.
* Daten**Offset**: The distance between tie from the top/bottom face of the structure.
* Daten**Diameter**: Diameter of the tie.
* Daten**Bent Angle**: Bent angle defines the angle at the ends of a tie.
* Daten**Extension Factor**: Extension Factor defines length of end of tie, expressed in times the diameter.
* Daten**Number**: The number of ties.
* Daten**Spacing**: The distance between the axes of each tie.
* Daten**Ties Sequence**: The sequence of ties from top to bottom with respect to front view.

**Main Rebars:** Rebars present at corners of tie

* Daten**Rebar Type**: Type of main rebars.
* Daten**Hook Orientation**: Orientation of LShaped hooks.
* Daten**Hook Extend Along**: Direction for hook extension.
* Daten**Hook Extension**: Length of hook of LShape rebars.
* Daten**Rounding**: A rounding value to be applied to the corners of the LShape rebars, expressed in times the diameter.
* Daten**Top Offset**: The distance between rebar from the top face of the structure.
* Daten**Bottom Offset**: The distance between rebar from the bottom face of the structure.
* Daten**Diameter**: Diameter of the main rebars.

## Skripten

*Siehe auch:* [Architektur API](/Arch_API/de "Arch API/de"), [Bewehrung API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement Stützenbewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

### Stützenbewehrung mit zwei Bügeln und sechs Stäben erstellen

```
RebarGroup = makeTwoTiesSixRebars(
    l_cover_of_ties,
    r_cover_of_ties,
    t_cover_of_ties,
    b_cover_of_ties,
    offset_of_ties,
    bent_angle_of_ties,
    extension_factor_of_ties,
    dia_of_ties,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=None,
    facename=None,
)

```

* Creates a `RebarGroup` object from the given `structure`, which is an [Arch Structure](/Arch_Structure "Arch Structure"), and `facename`, which is a face of that structure.
  + If no `structure` nor `facename` are given, it will take the user selected face as input.
* `l_cover_of_ties`, `r_cover_of_ties`, `t_cover_of_ties`, `b_cover_of_ties` and `offset_of_ties` are inner offset distances for the tie elements with respect to the faces of the structure. They are respectively the left, right, top, bottom and front/rear offsets.
* `bent_angle_of_ties` define the angle of the tip of the reinforcement loop of tie elements.
* `extension_factor_of_ties` define the length of the tip of the reinforcement loop of tie elements, expressed in times the diameter of tie elements.
* `dia_of_ties` is the diameter of the tie elements.
* `number_spacing_check` if it is `True` it will create as many two ties sets as given by `number_spacing_value`; if it is `False` it will create two ties sets separated by the numerical value of `number_spacing_value`.
* `number_spacing_value` specifies the number of two ties sets, or the value of the separation between the sets, depending on `number_spacing_check`.
* `dia_of_main_rebars` is the diameter of the main rebars.
* `t_offset_of_rebars` and `b_offset_of_rebars` are inner offset distances for the main rebars with respect to the top and bottom faces of the structure, respectively.
* `main_rebars_type` is the type of the main rebars; it can be `"StraightRebar"` or `"LShapeRebar"`.
* `hook_orientation` specifies the orientation of LShaped hook; it can be: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` or `"Bottom Left"`.
* `hook_extend_along` specifies direction for hook extension; it can be `"x-axis"` or `"y-axis"`.
* `l_rebar_rounding` is the parameter that determines the bending radius of the LShaped main rebars, expressed as times the diameter.
* `hook_extension` is the length of hook of LShaped rebars.
* `ties_sequence` is the sequence of ties from top to bottom with respect to front view; it can be `("Tie1", "Tie2")` or `("Tie2", "Tie1")`.

#### Beispiel

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import TwoTiesSixRebars

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

# For Straight Rebars
RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=40,
    b_offset_of_rebars=40,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=Structure,
    facename="Face6",
)

# For LShaped Rebars with hook along x-axis
RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie1", "Tie2"),
    structure=Structure,
    facename="Face6",
)

# For LShaped Rebars with hook along y-axis and tie sequence ("Tie2", "Tie1")

RebarGroup = TwoTiesSixRebars.makeTwoTiesSixRebars(
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="y-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie2", "Tie1"),
    structure=Structure,
    facename="Face6",
)

```

### Stützenbewehrung mit zwei Bügeln und sechs Stäben bearbeiten

Die Eigenschaften von Bewehrungsbügeln und Bewehrungsstäben lassen sich mit der folgenden Funktion anpassen:

```
rebar_group = editTwoTiesSixRebars(
    rebar_group,
    l_cover_of_ties,
    r_cover_of_ties,
    t_cover_of_ties,
    b_cover_of_ties,
    offset_of_ties,
    bent_angle_of_ties,
    extension_factor_of_ties,
    dia_of_ties,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    main_rebars_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    ties_sequence=("Tie1", "Tie2"),
    structure=None,
    facename=None,
)

```

* `rebar_group` is a previously created `ColumnReinforcement` group object.
* The other parameters are the same as required by the `makeSingleTieFourRebars()` function.
* `structure` and `facename` may be omitted so that the rebar stays in the original structure.

#### Beispiel

```
from ColumnReinforcement import TwoTiesSixRebars

rebar_group = TwoTiesSixRebars.editTwoTiesSixRebars(
    rebar_group,                                
    l_cover_of_ties=40,        
    r_cover_of_ties=40,
    t_cover_of_ties=40,
    b_cover_of_ties=40,
    offset_of_ties=100,
    bent_angle_of_ties=135,
    extension_factor_of_ties=2,
    dia_of_ties=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    main_rebars_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    ties_sequence=("Tie2", "Tie1"),
    structure=None,
    facename=None,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_TwoTiesSixRebars/de&oldid=1437987>"