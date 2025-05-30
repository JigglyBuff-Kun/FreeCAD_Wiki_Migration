---
title: Reinforcement BarBendingSchedule
---

|                                                                     |
| ------------------------------------------------------------------- |
| Reinforcement BarBendingSchedule                                    |
| Menu location                                                       |
| _None_                                                              |
| Workbenches                                                         |
| [Reinforcement](/Reinforcement_Workbench "Reinforcement Workbench") |
| Default shortcut                                                    |
| _None_                                                              |
| Introduced in version                                               |
| 0.19                                                                |
| See also                                                            |
| _None_                                                              |
|                                                                     |

## Description

The [Reinforcement BarBendingSchedule](/Reinforcement_BarBendingSchedule "Reinforcement BarBendingSchedule") tool allows the user to create the bar bending schedule of reinforcing bars.

This tool is part of the [Reinforcement Workbench](/Reinforcement_Workbench "Reinforcement Workbench"), an [external workbench](/External_workbenches "External workbenches") that can be installed with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

![](/images/Reinforcement_Bar_Bending_Schedule_example.svg)

Bar Bending Schedule of reinforcing bars

## Usage

1. Select ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") and Rebar2 objects you want to include in Bar Bending Schedule. Or select ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") objects to include ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") and Rebar2 objects hosted by those into Bar Bending Schedule. If nothing is selected, then Bar Bending Schedule will be generated for all ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") and Rebar2 objects present in the model.

2. Then select ![](/images/Reinforcement_BarBendingSchedule.svg) [Bar Bending Schedule](/Reinforcement_BarBendingSchedule "Reinforcement BarBendingSchedule") from the rebar tools.

3. A dialog box will pop-out on the screen as shown below.

: ![](/images/Reinforcement_Bar_Bending_Schedule_Dialog.png)
: Dialog Box for the Reinforcement Bar Bending Schedule tool

4. Modify data to suit your requirements.

5. Click OK or Apply to generate Bar Bending Schedule for rebars.

6. Click Cancel to exit the dialog box.

## Properties

**General:**

- Data**Reinforcement Group By**: Reinforcement Group By specifies how reinforcement objects should be grouped in Bar Bending Schedule i.e. "Host" or "Mark".
- Data**Rebar Length Type**: Rebar Length Type specifies the type of rebar length used for BOM calculations i.e. "RealLength" or "LengthWithSharpEdges".
- Data**Column Headers**: A dictionary with column_data as key and tuple (column_display_header, column_sequence) as value.
- Data**Column Units**: A dictionary with keys: "Diameter", "RebarLength", "RebarsTotalLength" and their corresponding units as value.
- Data**Font Family**: Font Family of text in Bar Bending Schedule SVG.
- Data**Font Size**: Font size in mm.
- Data**Column Width**: Width of each column in Bar Bending Schedule SVG.
- Data**Row Height**: Height of each row in Bar Bending Schedule SVG.
- Data**SVG Output File**: The output file to write generated rebar shape cut list SVG.

**Rebar Shape column data:** The data related to the Rebar Shape column in Bar Bending Schedule

- Data**Column Header**: The column header for the rebar shape column.
- Data**Stirrup Extended Edge Offset**: The offset of extended end edges of the stirrup, so that end edges of the stirrup with a 90-degree bent angle do not overlap with stirrup edges.
- Data**Rebars Stroke Width**: The stroke-width of rebars in the rebar shape column.
- Data**Rebars Color Style**: The color style of rebars.

**Rebar Shape Column Dimension Data:** The data related to rebar shape dimensions in the Rebar Shape column

- Data**Include Dimensions**: If True, then each rebar edge dimensions and bent angle dimensions will be included in the rebar shape cut list.
- Data**Include Units in Dimension Label**: If it is True, then rebar edge length units will be shown in dimension label.
- Data**Rebar Edge Dimension Units**: The units to be used for rebar edge length dimensions.
- Data**Rebar Edge Dimension Precision**: The number of decimals that should be shown for rebar edge length as a dimension label.
- Data**Dimension Font Family**: The font-family of dimension text.
- Data**Dimension Font Size**: The font-size of dimension text.
- Data**Bent Angle Dimension Exclude List**: The list of bent angles to not include their dimensions.
- Data**Helical Rebar Dimension Label Format**: The format of the helical rebar dimension label. e.g. "%L,r=%R,pitch=%P" where %L -> Length of helical rebar, %R -> Helix radius of helical rebar, %P -> Helix pitch of helical rebar.

## Scripting

_See also:_ [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement BarBendingSchedule tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

### Create Bar Bending Schedule

```
getBarBendingSchedule(
    rebar_objects: Optional[List] = None,
    column_headers: Optional[Dict[str, Tuple[str, int]]] = None,
    column_units: Optional[Dict[str, str]] = None,
    dia_weight_map: Optional[Dict[float, FreeCAD.Units.Quantity]] = None,
    rebar_length_type: Optional[
        Literal["RealLength", "LengthWithSharpEdges"]
    ] = None,
    reinforcement_group_by: Optional[Literal["Mark", "Host"]] = None,
    font_family: Optional[str] = None,
    font_size: float = 5,
    column_width: float = 60,
    row_height: float = 30,
    rebar_shape_column_header: str = "Rebar Shape (mm)",
    rebar_shape_view_directions: Union[
        Union[FreeCAD.Vector, WorkingPlane.Plane],
        List[Union[FreeCAD.Vector, WorkingPlane.Plane]],
    ] = FreeCAD.Vector(0, 0, 0),
    rebar_shape_stirrup_extended_edge_offset: float = 2,
    rebar_shape_color_style: str = "shape color",
    rebar_shape_stroke_width: float = 0.35,
    rebar_shape_include_dimensions: bool = True,
    rebar_shape_dimension_font_size: float = 3,
    rebar_shape_edge_dimension_units: str = "mm",
    rebar_shape_edge_dimension_precision: int = 0,
    include_edge_dimension_units_in_dimension_label: bool = False,
    rebar_shape_bent_angle_dimension_exclude_list: Union[
        List[float], Tuple[float, ...]
    ] = (45, 90, 180),
    helical_rebar_dimension_label_format: str = "%L,r=%R,pitch=%P",
    output_file: Optional[str] = None,
) -> xml.ElementTree.Element

```

- Generates and returns a bar bending schedule SVG element for given `rebar_objects`.
- `rebar_objects` is a list of <ArchRebar.\_Rebar> or <rebar2.BaseRebar> objects, to generate their bar bending schedule. If not provided, then all ArchRebars and rebar2.BaseRebar objects with unique Mark from ActiveDocument will be selected.
- `column_headers` is a dictionary with keys: "Host", "Mark", "RebarsCount", "Diameter", "RebarLength", "RebarsTotalLength" and values are tuple of column_header and their sequence number.

```
   Example: {
                "Host": ("Member", 1),
                "Mark": ("Mark", 2),
                "RebarsCount": ("No. of Rebars", 3),
                "Diameter": ("Diameter in mm", 4),
                "RebarLength": ("Length in m/piece", 5),
                "RebarsTotalLength": ("Total Length in m", 6),
            }
            set column sequence number to 0 to hide column.

```

- `column_units` is a dictionary with keys: "Diameter", "RebarLength", "RebarsTotalLength" and their corresponding units as value.

```
   Example: {
                "Diameter": "mm",
                "RebarLength": "m",
                "RebarsTotalLength": "m",
            }

```

- `dia_weight_map` is a dictionary with diameter as key and corresponding weight as value.

```
   Syntax: {
                6: FreeCAD.Units.Quantity("0.222 kg/m"),
                8: FreeCAD.Units.Quantity("0.395 kg/m"),
                10: FreeCAD.Units.Quantity("0.617 kg/m"),
                12: FreeCAD.Units.Quantity("0.888 kg/m"),
                ...,
            }

```

- `rebar_length_type` specifies the type of rebar length used for bar bending schedule calculations; it can be "RealLength" or "LengthWithSharpEdges".
- `reinforcement_group_by` specifies how reinforcement objects should be grouped; it can be "Mark" or "Host".
- `font_family` specifies the font family of data text.
- `font_size` specifies the font size of the data text.
- `column_width` specifies the width of each column in the bar bending schedule SVG.
- `row_height` specifies the height of each row in the bar bending schedule SVG.
- `rebar_shape_column_header` specifies the column header for the rebar shape column.
- `rebar_shape_view_directions` is a list of viewpoint directions for each rebar shape. It can be either of type `FreeCAD.Vector` or `WorkingPlane.Plane` OR their list. Keep it `FreeCAD.Vector(0, 0, 0)` to automatically choose view_directions.
- `rebar_shape_stirrup_extended_edge_offset` specifies the offset of extended end edges of the stirrup, so that end edges of the stirrup with a 90-degree bent angle do not overlap with stirrup edges.
- `rebar_shape_color_style` specifies the color style of rebars. It can be "shape color" or "color_name or hex_value_of_color". "shape color" means to select the color of rebar shape.
- `rebar_shape_stroke_width` specifies the stroke-width of rebars in rebar shape SVG.
- `rebar_shape_include_dimensions` specifies if each rebar edge dimensions and bent angle dimensions are to be included in rebar shape SVG.
- `rebar_shape_dimension_font_size` specifies the font-size of dimension text in rebar shape SVG.
- `rebar_shape_edge_dimension_units` specifies the units to be used for rebar edge length dimensions in rebar shape SVG.
- `rebar_shape_edge_dimension_precision` specifies the number of decimals that should be shown for rebar length as dimension label in rebar shape SVG. Set it to None to use user preferred unit precision from FreeCAD unit preferences.
- `include_edge_dimension_units_in_dimension_label` specifies if rebars edge length units are to be shown in dimension label in rebar shape SVG.
- `rebar_shape_bent_angle_dimension_exclude_list` specifies the list of bent angles to not include their dimensions in rebar shape SVG.
- `helical_rebar_dimension_label_format` specifies the format of the helical rebar dimension label in rebar shape SVG. E.g. "%L,r=%R,pitch=%P" where:

```
   %L -> Length of helical rebar
   %R -> Helix radius of helical rebar
   %P -> Helix pitch of helical rebar

```

- `output_file` specifies the output file to write generated bar bending schedule SVG.

#### Example

```
from pathlib import Path

import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTie
from BarBendingSchedule import BBSfunc

Rect1 = Draft.makeRectangle(400, 400)
Structure1 = Arch.makeStructure(Rect1, height=1600)
Structure1.ViewObject.Transparency = 80
Rect2 = Draft.makeRectangle(500, 500)
Structure2 = Arch.makeStructure(Rect2, height=1600)
Structure2.ViewObject.Transparency = 80
Structure2.Placement = FreeCAD.Placement(FreeCAD.Vector(1000, 0, 0), FreeCAD.Rotation(FreeCAD.Vector(0, 0, 1), 0))
FreeCAD.ActiveDocument.recompute()

# Create Straight Rebars
rebar_group = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=8,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=40,
    b_offset_of_rebars=40,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=Structure1,
    facename="Face6",
).rebar_group

# Assign Mark to straight rebars
for straight_rebar in rebar_group.RebarGroups[1].MainRebars:
    straight_rebar.Mark = "main_sb"

# Create LShaped Rebars with hook along x-axis
rebar_group = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=90,
    extension_factor=8,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="x-axis",
    l_rebar_rounding=2,
    hook_extension=100,
    structure=Structure2,
    facename="Face6",
).rebar_group

# Assign Mark to lshape rebars
for lshape_rebar in rebar_group.RebarGroups[1].MainRebars:
    lshape_rebar.Mark = "main_lb"

FreeCAD.ActiveDocument.recompute()

COLUMN_UNITS = {
    "Diameter": "mm",
    "RebarLength": "m",
    "RebarsTotalLength": "m",
}

COLUMN_HEADERS = {
    "Host": ("Member", 1),
    "Mark": ("Mark", 2),
    "RebarsCount": ("No. of Rebars", 3),
    "Diameter": ("Diameter in " + COLUMN_UNITS["Diameter"], 4),
    "RebarLength": ("Length in " + COLUMN_UNITS["RebarLength"] + "/piece", 5),
    "RebarsTotalLength": ("Total Length in " + COLUMN_UNITS["RebarsTotalLength"], 6),
}

DIA_WEIGHT_MAP = {
    6: FreeCAD.Units.Quantity("0.222 kg/m"),
    8: FreeCAD.Units.Quantity("0.395 kg/m"),
    10: FreeCAD.Units.Quantity("0.617 kg/m"),
    12: FreeCAD.Units.Quantity("0.888 kg/m"),
    14: FreeCAD.Units.Quantity("1.206 kg/m"),
    16: FreeCAD.Units.Quantity("1.578 kg/m"),
    18: FreeCAD.Units.Quantity("2.000 kg/m"),
    20: FreeCAD.Units.Quantity("2.466 kg/m"),
    22: FreeCAD.Units.Quantity("2.980 kg/m"),
    25: FreeCAD.Units.Quantity("3.854 kg/m"),
    28: FreeCAD.Units.Quantity("4.830 kg/m"),
    32: FreeCAD.Units.Quantity("6.313 kg/m"),
    36: FreeCAD.Units.Quantity("7.990 kg/m"),
    40: FreeCAD.Units.Quantity("9.864 kg/m"),
    45: FreeCAD.Units.Quantity("12.490 kg/m"),
    50: FreeCAD.Units.Quantity("15.410 kg/m"),
}

output_file = str(Path.home() / "BarBendingSchedule.svg")

# Create Bar Bending Schedule for all rebars in model
BBSfunc.getBarBendingSchedule(
    rebar_objects=None,
    column_headers=COLUMN_HEADERS,
    column_units=COLUMN_UNITS,
    dia_weight_map=DIA_WEIGHT_MAP,
    rebar_length_type="LengthWithSharpEdges",
    reinforcement_group_by="Host",
    font_family="DejaVu Sans",
    font_size=5,
    column_width=60,
    row_height=30,
    rebar_shape_column_header="Rebar Shape (" "mm)",
    rebar_shape_view_directions=FreeCAD.Vector(0, 0, 0),
    rebar_shape_stirrup_extended_edge_offset=2,
    rebar_shape_color_style="shape color",
    rebar_shape_stroke_width=0.35,
    rebar_shape_include_dimensions=True,
    rebar_shape_dimension_font_size=3,
    rebar_shape_edge_dimension_units="mm",
    rebar_shape_edge_dimension_precision=0,
    include_edge_dimension_units_in_dimension_label=False,
    rebar_shape_bent_angle_dimension_exclude_list=(45, 90, 180),
    helical_rebar_dimension_label_format="%L,r=%R,pitch=%P",
    output_file=output_file,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BarBendingSchedule/en&oldid=1372892>"
