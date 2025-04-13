---
title: Reinforcement Stützenbewehrung
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
| [Reinforcement Stützenbewehrung ZweiBügelSechsStäbe](/Reinforcement_ColumnRebars_TwoTiesSixRebars "Reinforcement ColumnRebars TwoTiesSixRebars"), [Reinforcement Stützenbewehrung Ringförmig](/Reinforcement_ColumnRebars_Circular "Reinforcement ColumnRebars Circular") |
|  |

## Beschreibung

Das Werkzeug Reinforcement Stützenbewehrung ermöglicht dem Anwender, Bewehrungsstäbe innerhalb einer Stütze ([Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt) zu erstellen.

Dieser Befehl ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"), ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

Drei Anwendungsbeispiele stehen zur Verfügung:

* [Rechteckige Stütze mit einzelnem Bügel (siehe unten)](#Anwendung)
* [Rechteckige Stütze mit zwei Bügeln und sechs Stäben](/Reinforcement_ColumnRebars_TwoTiesSixRebars/de "Reinforcement ColumnRebars TwoTiesSixRebars/de")
* [Runde Stütze](/Reinforcement_ColumnRebars_Circular/de "Reinforcement ColumnRebars Circular/de")

![](/images/Arch_Rebar_ColumnReinforcement_example.png)

Einzelbügel-Bewehrung innerhalb einer [Stütze](/Arch_Structure/de "Arch Structure/de")

## Anwendung

1. Die Deckelfläche eines zuvor erstellten ![](/images/Arch_Structure.svg) [Arch-Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts auswählen.

2. Dann ![](/images/Reinforcement_ColumnRebars.svg) Stützenbewehrung in den Armierungswerkzeugen auswählen.

3. Eine Dialog-Box wird sich öffnen, wie unten gezeigt.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Dialog-Box für das Werkzeug Arch Armierung Stützenbewehrung

4. Wähle die gewünschte Art der Stützenbewehrung aus.

5. Gib Eingaben für Daten zu Bindungen ein.

6. Klicke auf Weiter und das Dialogfeld wird wie unten gezeigt aktualisiert.

:   ![](/images/ColumnReinforcementDialog_MainRebars.png)
:   Dialog-Box für Daten für Hauptbewehrungsstäbe

7. Wähle den gewünschten Bewehrungstyp und fülle die Daten für die Hauptbewehrungsstäbe aus.

8. Klicke auf Weiter und das Dialogfeld wird wie unten gezeigt aktualisiert.

:   ![](/images/ColumnReinforcementDialog_XDirRebars.png)
:   Dialog-Box für Daten für Hauptbewehrungsstäbe

9. Wähle den gewünschten Bewehrungstyp und fülle die Daten für die Hauptbewehrungsstäbe aus.

10. Klicke auf Weiter und das Dialogfeld wird wie unten gezeigt aktualisiert.

:   ![](/images/ColumnReinforcementDialog_YDirRebars.png)
:   Dialog-Box für Daten für Hauptbewehrungsstäbe

11. Wähle den gewünschten Bewehrungstyp und fülle die Daten für die Hauptbewehrungsstäbe aus.

12. Klicke auf OK oder Übernehmen, um die Stützenbewehrung zu erzeugen.

13. Abbrechen anklicken, um die Dialog-Box zu verlassen.

## Eigenschaften

**Bindungen:**

* Daten**Linke Überdeckung**: Der Abstand zwischen dem linken Ende der Verbindung und der linken Seite der Struktur.
* Daten**Rechte Überdeckung**: Der Abstand zwischen dem rechten Ende der Verbindung und der rechten Seite der Struktur.
* Daten**Obere Überdeckung**: Der Abstand zwischen der Verbindung und der oberen Seite der Struktur.
* Daten**Untere Überdeckung**: Der Abstand zwischen der Verbindung und der unteren Seite der Struktur.
* Daten**Versatz**: Der Abstand zwischen der Verbindung und der oberen/unteren Seite der Struktur.
* Daten**Durchmesser**: Durchmesser der Verbindung.
* Daten**Biegewinkel**: Der gebogene Winkel definiert den Winkel an den Enden einer Verbindung.
* Daten**Verlängerungsfaktor**: Der Verlängerungsfaktor definiert die Länge des Endes der Verbindung, ausgedrückt als multipliziert mit dem Durchmesser.
* Daten**Anzahl**: Die Anzahl der Verbindungen.
* Daten**Spacing**: Der Abstand zwischen den Achsen jeder Schwelle.

**Hauptbewehrungsstäbe:** Bewehrungsstäbe an den Ecken der Schwelle

* Daten**Bewehrungstyp**: Typ der Hauptbewehrungsstäbe.
* Daten**Hakenausrichtung**: Ausrichtung der L-förmigen Haken.
* Daten**Hakenverlängerung entlang**: Richtung der Hakenverlängerung.
* Daten**Hakenverlängerung**: Länge des Hakens der L-förmigen Bewehrungsstäbe.
* Daten**Rundung**: Ein Rundungswert, der auf die Ecken der L-förmigen Bewehrungsstäbe angewendet wird, ausgedrückt als multipliziert mit dem Durchmesser.
* Daten**Oberer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Oberseite der Struktur.
* Daten**Unterer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Unterseite der Struktur.
* Daten**Durchmesser**: Durchmesser der Hauptbewehrungsstäbe.

**XDir Sekundärbewehrungsstäbe:** Bewehrungsstäbe entlang der x-Richtung außer Hauptbewehrungsstäben

* Daten**Bewehrungstyp**: Typ der Bewehrungsstäbe in x-Richtung.
* Daten**Hakenausrichtung**: Ausrichtung der L-förmigen Haken.
* Daten**Hakenverlängerung**: Länge des Hakens der L-förmigen Bewehrungsstäbe.
* Daten**Rundung**: Ein Rundungswert, der auf die Ecken der L-förmigen Bewehrungsstäbe angewendet wird, ausgedrückt als multipliziert mit dem Durchmesser.
* Daten**Oberer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Oberseite der Struktur.
* Daten**Unterer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Unterseite der Struktur.
* Daten**Anzahl#Durchmesser**: Anzahl#Durchmessersatz der Bewehrungsstäbe in x-Richtung.

**YDir Secondary Rebars:** Bewehrungen entlang der Y-Richtung, außer Hauptbewehrungen

* Daten**Bewehrungstyp**: Typ der Bewehrungsstäbe in Y-Richtung.
* Daten**Hakenausrichtung**: Ausrichtung der L-förmigen Haken.
* Daten**Hakenverlängerung**: Länge des Hakens der L-förmigen Bewehrungsstäbe.
* Daten**Rundung**: Ein Rundungswert, der auf die Ecken der L-förmigen Bewehrungsstäbe angewendet wird, ausgedrückt als multipliziert mit dem Durchmesser.
* Daten**Oberer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Oberseite der Struktur.
* Daten**Unterer Versatz**: Der Abstand zwischen den Bewehrungsstäben von der Unterseite der Struktur.
* Daten**Anzahl#Durchmesser**: Anzahl#Durchmessersatz der Bewehrungsstäbe in Y-Richtung.

## Skripten

*Siehe auch:* [Architektur API](/Arch_API/de "Arch API/de"), [Bewehrung API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Reinforcement Stützenbewehrung kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

### Einzel Binder mit vier Stäben erstellen

```
RebarGroup = makeSingleTieFourRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
).rebar_group

```

* Erstellt ein `RebarGroup`-Objekt aus der angegebenen `structure`, die eine [Arch Structure](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Wenn weder `structure` noch `facename` angegeben sind, wird die vom Benutzer ausgewählte Fläche als Eingabe verwendet.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` und `offset_of_tie` sind innere Versatzabstände für die Verbindungselemente in Bezug auf die Flächen der Struktur. Sie sind jeweils die linken, rechten, oberen, unteren und vorderen/hinteren Versätze.
* `bent_angle` definiert den Winkel der Spitze der Bewehrungsschleife.
* `extension_factor` definiert die Länge der Spitze der Bewehrungsschleife, ausgedrückt als multipliziert mit dem Durchmesser.
* `dia_of_tie` ist der Durchmesser der Verbindungen.
* `number_spacing_check`, wenn `True`, werden so viele Verbindungen erstellt, wie durch `number_spacing_value` angegeben; wenn `False`, werden Verbindungen erstellt, die durch den numerischen Wert von `number_spacing_value` getrennt sind.
* `number_spacing_value` gibt die Anzahl der Verbindungen oder den Wert des Abstands zwischen ihnen an, abhängig von `number_spacing_check`.
* `dia_of_rebars` ist der Durchmesser der Hauptbewehrungsstäbe.
* `t_offset_of_rebars` und `b_offset_of_rebars` sind innere Versatzabstände für die Hauptbewehrungsstäbe in Bezug auf die Ober- bzw. Unterseite der Struktur.
* `rebar_type` ist der Typ der Hauptbewehrungsstäbe; kann `"StraightRebar"` oder `"LShapeRebar"` sein.
* `hook_orientation` gibt die Ausrichtung des LShaped-Hakens an; kann sein: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` oder `"Bottom Left"`.
* `hook_extend_along` gibt die Richtung für die Hakenverlängerung an; kann `"x-axis"` oder `"y-axis"` sein.
* `l_rebar_rounding` ist der Parameter, der den Biegeradius der L-förmigen Hauptbewehrungsstäbe bestimmt, ausgedrückt als multipliziert mit dem Durchmesser.
* `hook_extension` ist die Hakenlänge der L-förmigen Bewehrungsstäbe.

#### Beispiel

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTie

# It doesn't work if the structure is not based on a face.
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

# For Straight Rebars

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
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
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along x-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
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
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

# For LShaped Rebars with hook along y-axis

RebarGroup = SingleTie.makeSingleTieFourRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_rebars=16,
    t_offset_of_rebars=-40,
    b_offset_of_rebars=-40,
    rebar_type="LShapeRebar",
    hook_orientation="Top Outside",
    hook_extend_along="y-axis",
    l_rebar_rounding=2,
    hook_extension=40,
    structure=Structure,
    facename="Face6",
).rebar_group

```

### Einzelne Bindung mit mehreren Bewehrungsstäben erstellen

```
RebarGroup = makeSingleTieMultipleRebars(
    l_cover_of_tie,
    r_cover_of_tie,
    t_cover_of_tie,           
    b_cover_of_tie,                      
    offset_of_tie,                       
    bent_angle,                          
    extension_factor,
    dia_of_tie,     
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

* Erstellt ein `RebarGroup`-Objekt aus der angegebenen `structure`, die eine [Arch Structure](/Arch_Structure/de "Arch Structure/de") ist, und `facename`, die eine Fläche dieser Struktur ist.
  + Wenn weder `structure` noch `facename` angegeben sind, wird die vom Benutzer ausgewählte Fläche als Eingabe verwendet.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` und `offset_of_tie` sind innere Versatzabstände für die Verbindungselemente in Bezug auf die Flächen der Struktur. Sie sind jeweils die linken, rechten, oberen, unteren und vorderen/hinteren Versätze.
* `bent_angle` definiert den Winkel der Spitze der Bewehrungsschleife.
* `extension_factor` definiert die Länge der Spitze der Bewehrungsschleife, ausgedrückt als multipliziert mit dem Durchmesser.
* `dia_of_tie` ist der Durchmesser der Verbindungen.
* `number_spacing_check`, wenn es `True` ist, werden so viele Verbindungen erstellt, wie durch `number_spacing_value` angegeben; wenn es `False` ist, werden Verbindungen erstellt, die durch den numerischen Wert von `number_spacing_value` getrennt sind.
* `number_spacing_value` gibt die Anzahl der Verbindungen oder den Wert des Abstands zwischen ihnen an, abhängig von `number_spacing_check`.
* `dia_of_main_rebars` ist der Durchmesser der Hauptbewehrungsstäbe.
* `main_rebars_t_offset` und `main_rebars_b_offset` sind innere Versatzabstände für die Hauptbewehrungsstäbe in Bezug auf die Ober- bzw. Unterseite der Struktur.
* `main_rebars_type` ist der Typ der Hauptbewehrungsstäbe; es kann `"StraightRebar"` oder `"LShapeRebar"` sein.
* `main_hook_orientation` gibt die Ausrichtung des Haupt-LShape-Hakens an; es kann sein: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` oder `"Bottom Left"`.
* `main_hook_extend_along` gibt die Richtung für die Haupthakenverlängerung an; es kann sein `"x-axis"` oder `"y-axis"`.
* `l_main_rebar_rounding` ist der Parameter, der den Biegeradius der L-förmigen Hauptbewehrungsstäbe bestimmt, ausgedrückt als multipliziert mit dem Durchmesser.
* `main_hook_extension` ist die Hakenlänge der L-förmigen Hauptbewehrungsstäbe.
* `sec_rebars_t_offset` und `sec_rebars_b_offset` sind Tupel (xdir\_rebars\_t\_offset, ydir\_rebars\_t\_offset) bzw. (xdir\_rebars\_b\_offset, ydir\_rebars\_b\_offset), die die inneren Versatzabstände für die sekundären Bewehrungsstäbe in x- und y-Richtung in Bezug auf die Ober- bzw. Unterseite der Struktur definieren.
* `sec_rebars_number_diameter` ist ein Tupel (xdir\_rebars\_number\_diameter, ydir\_rebars\_number\_diameter), das den Nummern-Durchmesser-Satz der sekundären Bewehrungsstäbe in x- und y-Richtung definiert.
* `sec_rebars_type` ist ein Tupel (xdir\_rebars\_type, ydir\_rebars\_type), das den Typ der sekundären Bewehrungsstäbe in x- und y-Richtung definiert; es kann `"StraightRebar"` oder `"LShapeRebar"` als Bewehrungstyp haben.
* `sec_hook_orientation` ist ein Tupel (xdir\_hook\_orientation, ydir\_hook\_orientation), das die Ausrichtung des sekundären LShaped-Hakens in x- und y-Richtung definiert; Es kann `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` oder `"Bottom Left"` als Hakenausrichtung haben.
* `l_sec_rebar_rounding` ist ein Tupel (l\_xdir\_rebar\_rounding, l\_ydir\_rebar\_rounding), das den Biegeradius der L-förmigen sekundären L-förmigen Bewehrungsstäbe in x- und y-Richtung bestimmt, ausgedrückt als multipliziert mit dem Durchmesser der L-förmigen Bewehrungsstäbe in x- bzw. y-Richtung.
* `sec_hook_extension` ist ein Tupel (xdir\_hook\_extension, ydir\_hook\_extension), das die Hakenlänge von sekundären L-förmigen Bewehrungsstäben in x- und y-Richtung definiert.

#### Beispiel

```
import FreeCAD, Draft, Arch
from ColumnReinforcement import SingleTieMultipleRebars

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

RebarGroup = SingleTieMultipleRebars.makeSingleTieMultipleRebars(
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("LShapeRebar", "LShapeRebar"),
    sec_hook_orientation=("Top Outside", "Top Outside"),
    l_sec_rebar_rounding=(2, 2),
    sec_hook_extension=(40, 40),
    structure=Structure,
    facename="Face6",
)

```

### Ausgabe von Einzelbindern mit vier Bewehrungsstäben

Die Eigenschaften von Bewehrungsbügeln und Bewehrungsstäben lassen sich mit der folgenden Funktion anpassen:

```
rebar_group = editSingleTieFourRebars(
    rebar_group,
    l_cover_of_tie,
    r_cover_of_tie,    
    t_cover_of_tie,           
    b_cover_of_tie,
    offset_of_tie,
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_rebars,
    t_offset_of_rebars,
    b_offset_of_rebars,
    rebar_type="StraightRebar",
    hook_orientation="Top Inside",
    hook_extend_along="x-axis",
    l_rebar_rounding=None,
    hook_extension=None,
    structure=None,
    facename=None,
)

```

* `Rebar` ist ein vorher erzeugtes `HelicalRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeHelicalRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

#### Beispiel

```
from ColumnReinforcement import SingleTie

rebar_group = SingleTie.editSingleTieFourRebars(
    rebar_group,                                
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
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
    hook_extension=40,
    structure=None,
    facename=None,
)

```

### Ausgabe von Einzelbindern mit Mehrfachbewehrung

Die Eigenschaften von Bewehrungsbügeln und Bewehrungsstäben lassen sich mit der folgenden Funktion anpassen:

```
rebar_group = editSingleTieMultipleRebars(
    rebar_group,
    l_cover_of_tie,      
    r_cover_of_tie,       
    t_cover_of_tie,                       
    b_cover_of_tie,                       
    offset_of_tie,                        
    bent_angle,
    extension_factor,
    dia_of_tie,
    number_spacing_check,
    number_spacing_value,
    dia_of_main_rebars,
    main_rebars_t_offset,
    main_rebars_b_offset,
    main_rebars_type="StraightRebar",
    main_hook_orientation="Top Inside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=None,
    main_hook_extension=None,
    sec_rebars_t_offset=None,
    sec_rebars_b_offset=None,
    sec_rebars_number_diameter=None,
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=("Top Inside", "Top Inside"),
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

* `Rebar` ist ein vorher erzeugtes `HelicalRebar`-Objekt.
* Die anderen Parameter sind die gleichen wie die für die `makeHelicalRebar()`-Funktion erforderlichen.
* `structure` und `facename` können weggelassen werden, so dass die Bewehrung in der ursprünglichen Struktur bleibt.

#### Beispiel

```
from ColumnReinforcement import SingleTieMultipleRebars

rebar_group = SingleTieMultipleRebars.editSingleTieMultipleRebars(
    rebar_group,                                
    l_cover_of_tie=40,        
    r_cover_of_tie=40,
    t_cover_of_tie=40,
    b_cover_of_tie=40,
    offset_of_tie=100,
    bent_angle=135,
    extension_factor=2,
    dia_of_tie=8,
    number_spacing_check=True,
    number_spacing_value=10,
    dia_of_main_rebars=16,
    main_rebars_t_offset=-40,
    main_rebars_b_offset=-40,
    main_rebars_type="LShapeRebar",
    main_hook_orientation="Top Outside",
    main_hook_extend_along="x-axis",
    l_main_rebar_rounding=2,
    main_hook_extension=40,
    sec_rebars_t_offset=(-40, -40),
    sec_rebars_b_offset=(-40, -40),
    sec_rebars_number_diameter=("2#20mm+1#16mm+2#20mm", "1#20mm+1#16mm+1#20mm"),
    sec_rebars_type=("StraightRebar", "StraightRebar"),
    sec_hook_orientation=None,
    l_sec_rebar_rounding=None,
    sec_hook_extension=None,
    structure=None,
    facename=None,
)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars/de&oldid=1524986>"