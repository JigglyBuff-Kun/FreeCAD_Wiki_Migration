---
title: Reinforcement Stückliste
---
|  |
| --- |
| Reinforcement Stückliste |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug Reinforcement Stückliste ermöglicht dem Anwender eine Stückliste von Bewehrungsstäben zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Arch_Rebar_BOM_example.png)

Stückliste von Bewehrungsstäben

## Anwendung

1. Select ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") and Rebar2 objects you want to include in the Bill Of Material. Or select ![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure") objects to include ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") objects hosted by those into Bill Of Material. If nothing is selected, then Bill Of Material will be generated for all ![](/images/Arch_Rebar.svg) [Arch Rebar](/Arch_Rebar "Arch Rebar") and Rebar2 objects present in the model.

2. Then select ![](/images/Reinforcement_BillOfMaterial.svg) [Rebar Bill Of Material](/Reinforcement_BillOfMaterial "Reinforcement BillOfMaterial") from the rebar tools.

3. Eine Dialog-Box wird sich öffnen, wie unten gezeigt.

:   ![](/images/BOMDialog_General.png)
:   Dialog-Box des Arch-Bewehrung-Stücklisten-Werkzeugs

4. Ändere Daten nach deinen Erfordernissen.

5. To edit ![](/images/Reinforcement_BillOfMaterial.svg) [Rebar Bill Of Material](/Reinforcement_BillOfMaterial "Reinforcement BillOfMaterial") SVG configurations, click on Edit SVG Configurations. A dialog box will pop-out as shown below.

:   ![](/images/BOMDialog_SVG.png)
:   Dialog Box for the Arch Rebar BOM SVG configuration editing

6. Modify ![](/images/Reinforcement_BillOfMaterial.svg) [Rebar Bill Of Material](/Reinforcement_BillOfMaterial "Reinforcement BillOfMaterial") SVG configurations and then click on OK to apply changes.

7. Click OK or Apply to generate Bill Of Material for rebars.

8. Click Cancel to exit the dialog box.

## Eigenschaften

**General:**

* Daten**Column Headers**: A dictionary with column\_data as key and tuple (column\_display\_header, column\_sequence) as value.
* Daten**Column Units**: A dictionary with keys: "Diameter", "RebarLength", "RebarsTotalLength" and their corresponding units as value.
* Daten**Diameter Weight Map**: A dictionary with the diameter as key and corresponding weight as value.
* Daten**Rebar Length Type**: Rebar Length Type specifies the type of rebar length used for BOM calculations i.e. "RealLength" or "LengthWithSharpEdges".
* Daten**Rebar Objects**: A list of ArchRebar and/or rebar2 and/or structures (to select ArchRebar in that structure) objects.

**SVG:**

* Daten**Font Family**: Font Family of text in BOM SVG.
* Daten**Font Filename**: Font filename corresponding to font-family required in console mode.
* Daten**Font Size**: Font size in mm.
* Daten**Column Width**: Width of each column in the BOM SVG table.
* Daten**Row Height**: Height of each row in the BOM SVG table.
* Daten**Left Offset**: Left offset of BOM SVG table.
* Daten**Top Offset**: Top offset of BOM SVG table.
* Daten**Minimum Right Offset**: Minimum right offset of BOM SVG table.
* Daten**Minimum Bottom Offset**: Minimum bottom offset of the BOM SVG table.
* Daten**Maximum Width**: Maximum width of the BOM SVG table.
* Daten**Maximum Height**: Maximum height of the BOM SVG table.
* Daten**Template File**: Template SVG file for BOM SVG.
* Daten**Output File**: BOM SVG Output file.

## Skripten

*See also:* [Arch API](/Arch_API "Arch API"), [Reinforcement API](/Reinforcement_API "Reinforcement API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Reinforcement BillOfMaterial tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

### Create Bill Of Material Spreadsheet

```
bom_spreadsheet = makeBillOfMaterial(
    column_headers=None,
    column_units=None,
    dia_weight_map=None,
    rebar_length_type=None,
    rebar_objects=None,
    obj_name="RebarBillOfMaterial",
)

```

* Creates a `RebarBillOfMaterial` spreadsheet object for given `rebar_objects`.
  + If `rebar_objects` list is empty, then `RebarBillOfMaterial` spreadsheet will be created for all rebars in a model.
* `column_headers` is a dictionary with keys: "Host", "Mark", "RebarsCount", "Diameter", "RebarLength", "RebarsTotalLength" and values are tuple of column\_header and their sequence number.

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

* `column_units` is a dictionary with keys: "Diameter", "RebarLength", "RebarsTotalLength" and their corresponding units as value.

```
   Example: {
                "Diameter": "mm",
                "RebarLength": "m",
                "RebarsTotalLength": "m",
            }

```

* `dia_weight_map` is a dictionary with diameter as key and corresponding weight as value.

```
   Syntax: {
                6: FreeCAD.Units.Quantity("0.222 kg/m"),
                8: FreeCAD.Units.Quantity("0.395 kg/m"),
                10: FreeCAD.Units.Quantity("0.617 kg/m"),
                12: FreeCAD.Units.Quantity("0.888 kg/m"),
                ...,
            }

```

* `rebar_length_type` specifies the type of rebar length used for BOM calculations; it can be "RealLength" or "LengthWithSharpEdges".
* `rebar_objects` is a list of ArchRebar and/or rebar2 and/or structures (to select ArchRebar in that structure) objects.

#### Example

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import TwoTiesSixRebars
from BillOfMaterial import BillOfMaterial_Spreadsheet

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure1 = Arch.makeStructure(Rect, height=1600)
Structure1.ViewObject.Transparency = 80
Structure2 = Arch.makeStructure(Rect, height=1600)
Structure2.ViewObject.Transparency = 80
Structure2.Placement = FreeCAD.Placement(FreeCAD.Vector(1000, 0, 0), FreeCAD.Rotation(FreeCAD.Vector(0, 0, 1), 0))
FreeCAD.ActiveDocument.recompute()

# Create Straight Rebars
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
    structure=Structure1,
    facename="Face6",
)

# Create LShaped Rebars with hook along x-axis
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
    structure=Structure2,
    facename="Face6",
)

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

# To create Bill Of Material Spreadsheet for all rebars in a model
BillOfMaterial_Spreadsheet.makeBillOfMaterial(
    column_headers=COLUMN_HEADERS,
    column_units=COLUMN_UNITS,
    dia_weight_map=DIA_WEIGHT_MAP,
    rebar_length_type="RealLength",
)

# To create Bill Of Material Spreadsheet for rebars in Structure1
BillOfMaterial_Spreadsheet.makeBillOfMaterial(
    column_headers=COLUMN_HEADERS,
    column_units=COLUMN_UNITS,
    dia_weight_map=DIA_WEIGHT_MAP,
    rebar_length_type="LengthWithSharpEdges",
    rebar_objects=[Structure1],
)

```

### Create Bill Of Material SVG

```
makeBillOfMaterialSVG(
    column_headers: Optional[Dict[str, Tuple[str, int]]] = None,
    column_units: Optional[Dict[str, str]] = None,
    dia_weight_map: Optional[Dict[float, FreeCAD.Units.Quantity]] = None,
    rebar_length_type: Optional[
        Literal["RealLength", "LengthWithSharpEdges"]
    ] = None,
    font_family: Optional[str] = None,
    font_filename: Optional[str] = None,
    font_size: Optional[float] = None,
    column_width: Optional[float] = None,
    row_height: Optional[float] = None,
    bom_left_offset: Optional[float] = None,
    bom_top_offset: Optional[float] = None,
    bom_min_right_offset: Optional[float] = None,
    bom_min_bottom_offset: Optional[float] = None,
    bom_table_svg_max_width: Optional[float] = None,
    bom_table_svg_max_height: Optional[float] = None,
    template_file: Optional[str] = None,
    output_file: Optional[str] = None,
    rebar_objects: Optional[List] = None,
    reinforcement_group_by: Optional[Literal["Mark", "Host"]] = None,
    return_svg_only: bool = False,
) -> BOMContent

```

* Creates and return a RebarBillOfMaterial\_SVG `BOMContent` object for given `rebar_objects`.
  + If `rebar_objects` list is empty, then `BOMContent` object will be created for all rebars in a model.
* `column_headers` is a dictionary with keys: "Host", "Mark", "RebarsCount", "Diameter", "RebarLength", "RebarsTotalLength" and values are tuple of column\_header and their sequence number.

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

* `column_units` is a dictionary with keys: "Diameter", "RebarLength", "RebarsTotalLength" and their corresponding units as value.

```
   Example: {
                "Diameter": "mm",
                "RebarLength": "m",
                "RebarsTotalLength": "m",
            }

```

* `dia_weight_map` is a dictionary with diameter as key and corresponding weight as value.

```
   Syntax: {
                6: FreeCAD.Units.Quantity("0.222 kg/m"),
                8: FreeCAD.Units.Quantity("0.395 kg/m"),
                10: FreeCAD.Units.Quantity("0.617 kg/m"),
                12: FreeCAD.Units.Quantity("0.888 kg/m"),
                ...,
            }

```

* `rebar_length_type` specifies the type of rebar length used for the bill of material calculations; it can be "RealLength" or "LengthWithSharpEdges".
* `font_family` specifies the font family of data text.
* `font_filename` specifies font filename or full path of the font file corresponding to font\_family. This is required if you are working in pure console mode, without any GUI.
* `font_size` specifies the font size of the data text.
* `column_width` specifies the width of each column in the bill of material table SVG.
* `row_height` specifies the height of each row in the bill of material table SVG.
* `bom_left_offset` specifies the left offset of the bill of material SVG on `template_file`.
* `bom_top_offset` specifies the top offset of the bill of material SVG on `template_file`.
* `bom_min_right_offset` specifies the minimum right offset of the bill of material SVG on `template_file`.
* `bom_min_bottom_offset` specifies the minimum bottom offset of the bill of material SVG on `template_file`
* `bom_table_svg_max_width` specifies the maximum width of the bill of material table in SVG.
* `bom_table_svg_max_height` specifies the maximum height of the bill of material table in SVG.
* `template_file` specifies the template file used to place the generated bill of material table on it. It must be a valid TechDraw template file as [here](/Svg_Namespace "Svg Namespace").
* `output_file` specifies the output file to write generated bill of material SVG.
* `rebar_objects` is a list of ArchRebar and/or rebar2 and/or structures (to select ArchRebar in that structure) objects.
* `reinforcement_group_by` specifies how reinforcement objects should be grouped; it can be "Mark" or "Host".
* `return_svg_only` specifies if the `BOMContent` object is to be created or not. If `return_svg_only` is True, then neither `BOMContent` object is created nor SVG is written to `output_file`. And it returns the SVG element.

#### Example

```
from pathlib import Path
import FreeCAD, Draft, Arch
from ColumnReinforcement import TwoTiesSixRebars
from BillOfMaterial import BillOfMaterial_SVG

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure1 = Arch.makeStructure(Rect, height=1600)
Structure1.ViewObject.Transparency = 80
Structure2 = Arch.makeStructure(Rect, height=1600)
Structure2.ViewObject.Transparency = 80
Structure2.Placement = FreeCAD.Placement(FreeCAD.Vector(1000, 0, 0), FreeCAD.Rotation(FreeCAD.Vector(0, 0, 1), 0))
FreeCAD.ActiveDocument.recompute()

# Create Straight Rebars
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
    structure=Structure1,
    facename="Face6",
)

# Create LShaped Rebars with hook along x-axis
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
    structure=Structure2,
    facename="Face6",
)

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

# To create Bill Of Material SVG for all rebars in a model
BillOfMaterial_SVG.makeBillOfMaterialSVG(
    column_headers=COLUMN_HEADERS,
    column_units=COLUMN_UNITS,
    dia_weight_map=DIA_WEIGHT_MAP,
    rebar_length_type="RealLength",
    font_family = "DejaVu Sans",
    font_filename = "DejaVuSans.ttf",
    font_size = 3,
    column_width = 30,
    row_height = 10,
    bom_left_offset = 6,
    bom_top_offset = 40,
    bom_min_right_offset = 6,
    bom_min_bottom_offset = 6,
    bom_table_svg_max_width = 0,
    bom_table_svg_max_height = 0,
    template_file = str(Path(BillOfMaterial_SVG.__file__).parent.absolute() / "BOMTemplate.svg"),
    output_file = None,
    reinforcement_group_by = "Host",
)

# To create Bill Of Material SVG for rebars in Structure1
BillOfMaterial_SVG.makeBillOfMaterialSVG(
    column_headers = COLUMN_HEADERS,
    column_units = COLUMN_UNITS,
    dia_weight_map = DIA_WEIGHT_MAP,
    rebar_length_type = "LengthWithSharpEdges",
    font_family = "DejaVu Sans",
    font_filename = "DejaVuSans.ttf",
    font_size = 3,
    column_width = 30,
    row_height = 10,
    bom_left_offset = 6,
    bom_top_offset = 40,
    bom_min_right_offset = 6,
    bom_min_bottom_offset = 6,
    bom_table_svg_max_width = 0,
    bom_table_svg_max_height = 0,
    template_file = str(Path(BillOfMaterial_SVG.__file__).parent.absolute() / "BOMTemplate.svg"),
    rebar_objects=[Structure1],
    reinforcement_group_by = "Host",
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BillOfMaterial/de&oldid=1441115>"