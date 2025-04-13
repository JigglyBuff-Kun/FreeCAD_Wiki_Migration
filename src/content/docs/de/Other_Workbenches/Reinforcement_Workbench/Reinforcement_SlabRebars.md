---
title: Reinforcement Plattenbewehrung
---
|  |
| --- |
| Reinforcement Plattenbewehrung |
| Menüeintrag |
| 3D/BIM → Bewehrungswerkzeuge → Slab Reinforcement |
| Arbeitsbereich |
| [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug Reinforcement Plattenbewehrung ermöglicht dem Anwender Bewehrungsstäbe innerhalb eines [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekts Platte zu erstellen.

Dieses Werkzeug ist Teil des Arbeitsbereichs [Reinforcement](/Reinforcement_Workbench/de "Reinforcement Workbench/de"); dieser ist ein [externer Arbeitsbereich](/External_workbenches/de "External workbenches/de"), der mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden kann.

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Beispiel einer Plattenbewehrung in einem [Arch Struktur](/Arch_Structure/de "Arch Structure/de")-Objekt Platte

![](/images/Right_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Seitenansicht des Beispiels der Plattenbewehrung

![](/images/Front_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Vorderansicht des Beispiels der Plattenbewehrung

## Anwendung

1. Wähle eine beliebige Fläche eines zuvor erstellten Slab-![](/images/Arch_Structure.svg) [Arch Structure](/Arch_Structure "Arch Structure")-Objekts aus, wie im Bild unten gezeigt.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Ausgewählte Fläche für Plattenbogenstruktur

2. Wähle dann ![](/images/Reinforcement_SlabRebars.svg) [Slab Reinforcement](/Reinforcement_SlabRebars "Reinforcement SlabRebars") aus den Bewehrungswerkzeugen.

3. Eine Dialog-Box wird sich öffnen, wie unten gezeigt.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Dialogfeld für die Plattenbewehrung

4. Wähle die gewünschte Abdeckungsart des Armierungsgewebes (oben oder unten).

5. Wähle den gewünschten Bewehrungstyp und andere Eingabedaten für Bewehrungsstäbe in paralleler Richtung der ausgewählten Fläche, wie in der Abbildung unten gezeigt.

:   ![](/images/Bent_Shape_rebars_in_parallel_with_distribution_rebars_inputs_for_Slab_Reinforcement.png)
:   Dialogfeld für die Plattenbewehrung der Bewehrungsstäbe in paralleler Richtung zur ausgewählten Fläche

6. Klicke nun auf Weiter oder wähle „Querstäbe“ in der Listenansicht aus.

7. Wähle nun die gewünschten Daten als Eingabedaten für Rabars in Querrichtung der ausgewählten Fläche aus, wie im Bild unten gezeigt.

:   ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
:   Dialogfeld für die Plattenbewehrung der Bewehrungsstäbe in Querrichtung der ausgewählten Fläche

8. Klicke auf OK oder Übernehmen oder Fertig, um die Plattenbewehrung zu erzeugen.

9. Klicke Abbrechen, um die Dialog-Box zu verlassen.

## Eigenschaften

**Eigenschaften für Bewehrungsstäbe in paralleler Richtung zur ausgewählten Fläche:**

* Daten**Mesh Cover Along**: Stellt die Ausrichtung des Bewehrungsnetzes entlang der Ober- oder Unterseite der Struktur dar. Kann zwei Werte haben: „Top“ und „Bottom“.
* Daten**Rebar Type**: Bewehrungstyp für parallele Bewehrungsstäbe zur Plattenbewehrung. Kann vier Werte haben: „StraightRebar“, „LShapeRebar“, „UShapeRebar“, „BentShapeRebar“.
* Daten**Front Cover**: Der Abstand zwischen parallelen Bewehrungsstäben und ausgewählter Fläche.
* Daten**Left Cover**: Der Abstand zwischen dem linken Ende der parallelen Bewehrung und der linken Fläche der Struktur.
* Daten**Right Cover**: Der Abstand zwischen dem rechten Ende der parallelen Bewehrung und der rechten Fläche der Struktur.
* Daten**Bottom Cover**: Der Abstand zwischen parallelen Bewehrungsstäben von der Unterseite der Struktur.
* Daten**Obere Abdeckung**: Der Abstand zwischen parallelen Bewehrungsstäben von der Oberseite der Struktur.
* Daten**Hintere Abdeckung**: Hintere Abdeckung für die Plattenbewehrung paralleler Bewehrungsstäbe.
* Daten**Ankerlänge**: Stellt die Armlänge von gebogenen parallelen Bewehrungsstäben dar, wenn der parallele Bewehrungsstabtyp BentShapeRebar ist.
* Daten**Biegewinkel**: Stellt den Winkel für gebogene parallele Bewehrungsstäbe dar, wenn der parallele Bewehrungsstabtyp BentShapeRebar ist.
* Daten**Rundung**: Ein Rundungswert, der auf die Ecken der Stäbe angewendet wird, ausgedrückt als Multiplikation mit dem Durchmesser paralleler Bewehrungsstäbe.
* Daten**Durchmesser**: Durchmesser paralleler Bewehrungsstäbe
* Daten**Menge**: Enthält die Anzahl paralleler Bewehrungsstäbe.
* Daten**Abstand**: Enthält den Abstand zwischen parallelen Bewehrungsstäben.

**Eigenschaften von Bewehrungsstäben für gebogene Bewehrungsstäbe in paralleler Richtung zur ausgewählten Fläche:**

* Daten**Amount**: Enthält die Anzahl der Verteilungsstäbe für gebogene Bewehrungsstäbe in paralleler Richtung.
* Daten**Spacing**: Enthält den Abstand zwischen Verteilungsstäben für gebogene Bewehrungsstäbe in paralleler Richtung. Bewehrungsstäbe in paralleler Richtung zur ausgewählten Fläche:

**Eigenschaften für Bewehrungsstäbe quer zur ausgewählten Fläche:**

'\* Daten**Rebar Type**: Bewehrungstyp für Querbewehrungsstäbe zur Plattenbewehrung. Kann vier Werte haben: 'StraightRebar', 'LShapeRebar', 'UShapeRebar', 'BentShapeRebar'.

* Daten**Front Cover**: Der Abstand zwischen Querbewehrungsstäben und ausgewählter Fläche.
* Daten**Left Cover**: Der Abstand zwischen dem linken Ende des Querbewehrungsstabs und der linken Fläche der Struktur.
* Daten**Right Cover**: Der Abstand zwischen dem rechten Ende des Querbewehrungsstabs und der rechten Fläche der Struktur.
* Daten**Bottom Cover**: Der Abstand zwischen Querbewehrungsstäben von der Unterseite der Struktur.
* Daten**Top Cover**: Der Abstand zwischen Querbewehrungsstäben von der Oberseite der Struktur.
* Daten**Rear Cover**: Hintere Abdeckung für Plattenbewehrung von Querbewehrungsstäben.
* Daten**Ankerlänge**: Stellt die Armlänge gebogener Querbewehrungsstäbe dar, wenn der Querbewehrungstyp „BentShapeRebar“ ist.
* Daten**Biegewinkel**: Stellt den Winkel gebogener Querbewehrungsstäbe dar, wenn der Querbewehrungstyp „BentShapeRebar“ ist.
* Daten**Rundung**: Ein Rundungswert, der auf die Ecken der Stäbe angewendet wird, ausgedrückt in multipliziert mit dem Durchmesser der Querbewehrungsstäbe.
* Daten**Durchmesser**: Durchmesser der Querbewehrungsstäbe
* Daten**Menge**: Enthält die Anzahl der Querbewehrungsstäbe.
* Daten**Abstand**: Enthält den Abstand zwischen den Querbewehrungsstäben.

**Eigenschaften von Verteilungsstäben für gebogene Formstäbe quer zur ausgewählten Fläche:**

* Daten**Amount**: Enthält die Anzahl der Verteilungsstäbe für gebogene Bewehrungsstäbe in Querrichtung.
* Daten**Spacing**: Enthält den Abstand zwischen den Verteilungsstäben für gebogene Bewehrungsstäbe in Querrichtung.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de"),[Reinforcement-API](/Reinforcement_API/de "Reinforcement API/de") und [FreeCAD Grundlagen Skripten](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

* Das Werkzeug „Reinforcement SlabRebars“ kann über die [Python](/Python/de "Python/de")-Konsole mithilfe der folgenden Funktion verwendet werden:

### Plattenbewehrung erstellen

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along = "Bottom",
    structure = None,
    facename = None,
)

```

* Erstellt ein `SlabReinforcementGroup`-Objekt aus der angegebenen `structure`, bei der es sich um eine Platten-[Bogenstruktur](/Arch_Structure/de "Arch Structure/de") handelt, und `facename`, bei der es sich um eine Fläche dieser Struktur handelt.
  + Wenn weder `structure` noch `facename` angegeben sind, wird die vom Benutzer ausgewählte Fläche als Eingabe verwendet.

**Eigenschaften für Bewehrungsstäbe in paralleler Richtung zur ausgewählten Fläche:**

* Daten**parallel\_rebar\_type**: Bewehrungstyp für parallele Bewehrungsstäbe zur Plattenbewehrung. Kann vier Werte haben: „StraightRebar“, „LShapeRebar“, „UShapeRebar“, „BentShapeRebar“.
* Daten**parallel\_front\_cover**: Der Abstand zwischen parallelen Bewehrungsstäben und ausgewählter Fläche.
* Daten**parallel\_rear\_cover**: Hintere Abdeckung für Plattenbewehrung aus parallelen Bewehrungsstäben.
* Daten**parallel\_left\_cover**: Der Abstand zwischen dem linken Ende des parallelen Bewehrungsstabs und der linken Fläche der Struktur.
* Daten**parallel\_right\_cover**: Der Abstand zwischen dem rechten Ende des parallelen Bewehrungsstabs und der rechten Fläche der Struktur.
* Daten**parallel\_top\_cover**: Der Abstand zwischen parallelen Bewehrungsstäben von der Oberseite der Struktur.
* Daten**parallel\_bottom\_cover**: Der Abstand zwischen parallelen Bewehrungsstäben von der Unterseite der Struktur.
* Daten**parallel\_diameter**: Durchmesser paralleler Bewehrungsstäbe.
* Daten**parallel\_amount\_spacing\_check**: Wenn auf True gesetzt, wird der Wert von parallel\_amount\_spacing\_value als Anzahl der Bewehrungsstäbe verwendet, andernfalls wird der Wert von parallel\_amount\_spacing\_value als Abstand zwischen parallelen Bewehrungsstäben verwendet.
* Daten**parallel\_amount\_spacing\_value**: Enthält die Anzahl der Bewehrungsstäbe oder den Abstand zwischen parallelen Bewehrungsstäben basierend auf dem Wert von amount\_spacing\_check.
* Daten**parallel\_rounding**: Ein Rundungswert, der auf die Ecken der Stäbe angewendet wird, ausgedrückt in multipliziert mit dem parallel\_diameter.
* Daten**parallel\_bent\_bar\_length**: Stellt die Armlänge von parallel gebogenen Bewehrungsstäben dar, wenn parallel\_rebar\_type BentShapeRebar ist.
* Daten**parallel\_bent\_bar\_angle**: Stellt den Winkel für parallel gebogene Bewehrungsstäbe dar, wenn parallel\_rebar\_type BentShapeRebar ist.
* Daten**parallel\_l\_shape\_hook\_orintation**: Stellt die Ausrichtung des Hakens paralleler L-förmiger Bewehrungsstäbe dar, wenn parallel\_rebar\_type LShapeRebar ist. Kann drei Werte haben: „Links“, „Rechts“, „Alternativ“.
* Daten**parallel\_distribution\_rebars\_check**: Wenn True, werden Verteilungsstäbe für parallel gebogene Bewehrungsstäbe hinzugefügt. Standard ist False.
* Daten**parallel\_distribution\_rebars\_diameter**: Durchmesser der Verteilungsstäbe für parallel gebogene Bewehrungsstäbe.
* Daten**parallel\_distribution\_rebars\_amount\_spacing\_check**: Wenn auf True gesetzt, wird der Wert von parallel\_distribution\_rebars\_amount\_spacing\_value als Anzahl der Bewehrungsstäbe verwendet, andernfalls wird der Wert von parallel\_distribution\_rebars\_amount\_spacing\_value als Abstand in parallel\_distribution\_rebars verwendet. Standard ist True.
* Daten**parallel\_distribution\_rebars\_amount\_spacing\_value**: Enthält die Anzahl oder den Abstand zwischen den Verteilungsstäben für eine Seite parallel gebogener Bewehrungsstäbe basierend auf dem Wert von parallel\_distribution\_rebars\_check. Standard ist 2.

**Eigenschaften für Bewehrungsstäbe quer zur ausgewählten Fläche:**

* Daten**cross\_rebar\_type**: Bewehrungstyp für Querbewehrungsstäbe zur Plattenbewehrung. Kann vier Werte haben: „StraightRebar“, „LShapeRebar“, „UShapeRebar“, „BentShapeRebar“.
* Daten**cross\_front\_cover**: Der Abstand zwischen Querbewehrungsstab und cross\_face (Fläche senkrecht zur ausgewählten Fläche).
* Daten**cross\_rear\_cover**: Hintere Abdeckung für Plattenbewehrung von Querbewehrungsstäben.
* Daten**cross\_left\_cover**: Der Abstand zwischen dem linken Ende des Querbewehrungsstabs und der linken Fläche der Struktur.
* Daten**cross\_right\_cover**: Der Abstand zwischen dem rechten Ende des Bewehrungsstabs und der rechten Fläche der Struktur relativ zu cross\_face.
* Daten**cross\_top\_cover**: Der Abstand zwischen den Querstäben von der Oberseite der Struktur.
* Daten**cross\_bottom\_cover**: Der Abstand zwischen den Querstäben von der Unterseite der Struktur.
* Daten**cross\_diameter**: Durchmesser der Querstäbe.
* Daten**cross\_amount\_spacing\_check**: Wenn auf True gesetzt, wird der Wert von cross\_amount\_spacing\_value als Anzahl der Bewehrungsstäbe verwendet, andernfalls wird der Wert von cross\_amount\_spacing\_value als Abstand zwischen den Bewehrungsstäben verwendet.
* Daten**cross\_amount\_spacing\_value**: Enthält die Anzahl der Bewehrungsstäbe oder den Abstand zwischen den Bewehrungsstäben basierend auf dem Wert von cross\_amount\_spacing\_check.
* Daten**cross\_rounding**: Ein Rundungswert, der auf die Ecken der Stäbe angewendet wird, ausgedrückt als multipliziert mit dem cross\_diameter.
* Daten**cross\_bent\_bar\_length**: Stellt die Armlänge von gebogenem Querbewehrungsstahl dar, wenn cross\_rebar\_type BentShapeRebar ist.
* Daten**cross\_bent\_bar\_angle**: Stellt den Winkel für gebogenen Querbewehrungsstahl dar, wenn cross\_rebar\_type BentShapeRebar ist.
* Daten**cross\_l\_shape\_hook\_orintation**: Stellt die Ausrichtung des Hakens von L-förmigem Querbewehrungsstahl dar, wenn cross\_rebar\_type LShapeRebar ist. Kann drei Werte haben: „Links“, „Rechts“, „Alternativ“
* Daten**cross\_distribution\_rebars\_check**: Wenn True, werden Verteilungsstäbe für kreuzgebogene Bewehrungsstäbe hinzugefügt. Standard ist False.
* Daten**cross\_distribution\_rebars\_diameter**: Durchmesser für Verteilungsstäbe für kreuzgebogene Bewehrungsstäbe.
* Daten**cross\_distribution\_rebars\_amount\_spacing\_check**: Wenn auf True gesetzt, wird der Wert von cross\_distribution\_rebars\_amount\_spacing\_value als Anzahl der Bewehrungsstäbe verwendet, andernfalls wird der Wert von cross\_distribution\_rebars\_amount\_spacing\_value als Abstand in cross\_distribution\_rebars verwendet. Standard ist True.
* Daten**cross\_distribution\_rebars\_amount\_spacing\_value**: Enthält die Anzahl oder den Abstand zwischen den Verteilungsbewehrungsstäben für eine Seite der kreuzgebogenen Bewehrungsstäbe basierend auf dem Wert von cross\_distribution\_rebars\_check. Standard ist 2.

**Gemeinsame Eigenschaften für parallele und Querbewehrungsstäbe:**

* Daten**mesh\_cover\_along**: Kann zwei Werte haben: „Top“ und „Bottom“. Stellt die Ausrichtung des Bewehrungsgeflechts entlang der Ober- oder Unterseite der Struktur dar.
* Daten**structure**: Bogenstrukturobjekt. Standard ist Keine
* ​​Daten**facename**: ausgewählte Seite der Struktur. Standard ist Keine

### Ausgabe der Plattenbewehrung

Die Eigenschaften der Plattenbewehrung kannst du mit der folgenden Funktion ändern:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
slabReinforcementGroup = editSlabReinforcement(
    slabReinforcementGroup,
    parallel_rebar_type,
    parallel_front_cover,
    parallel_rear_cover,
    parallel_left_cover,
    parallel_right_cover,
    parallel_top_cover,
    parallel_bottom_cover,
    parallel_diameter,
    parallel_amount_spacing_check,
    parallel_amount_spacing_value,
    cross_rebar_type,
    cross_front_cover,
    cross_rear_cover,
    cross_left_cover,
    cross_right_cover,
    cross_top_cover,
    cross_bottom_cover,
    cross_diameter,
    cross_amount_spacing_check,
    cross_amount_spacing_value,
    cross_rounding = 2,
    cross_bent_bar_length = 50,
    cross_bent_bar_angle = 135,
    cross_l_shape_hook_orintation = "Alternate",
    cross_distribution_rebars_check = False,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 2,
    parallel_rounding = 2,
    parallel_bent_bar_length = 50,
    parallel_bent_bar_angle = 135,
    parallel_l_shape_hook_orintation = "Alternate",
    parallel_distribution_rebars_check = False,
    parallel_distribution_rebars_diameter = 8,
    parallel_distribution_rebars_amount_spacing_check = True,
    parallel_distribution_rebars_amount_spacing_value = 2,
    mesh_cover_along: str = "Bottom",
    structure = None,
    facename = None,
)

```

* `slabReinforcementGroup` ist ein zuvor erstelltes `Slab Reinforcement`-Gruppenobjekt.
* Die anderen Parameter sind dieselben, die von der Funktion `makeSlabReinforcement()` benötigt werden.

### Beispiele für Plattenbewehrung

* [Plattenspannung in zwei Richtungen](/Example_Slab_Spanning_in_Two_Directions/de "Example Slab Spanning in Two Directions/de")

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

* [Plattenspannung in eine Richtung](/Example_Slab_Spanning_in_One_Direction/de "Example Slab Spanning in One Direction/de")

![](/images/Slab_spanning_in_one_Direction.png)

* [Platte mit geradem Bewehrungsnetz](/Example_Slab_Having_Mesh_Of_Straight_Rebars/de "Example Slab Having Mesh Of Straight Rebars/de")

![](/images/Slab_having_straight_rebars_in_both_direction.png)

* [Platte mit U-förmigem Bewehrungsnetz](/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/de "Example Slab Having UShape Rebars Reinforcement Mesh/de")

![](/images/U-shape_rebars_isometric_view.png)

* [Platte mit L-förmigem Bewehrungsnetz](/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh/de "Example Slab Having LShape Rebars Reinforcement Mesh/de")

![](/images/L-Shape_Rebars_isometric_view.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_SlabRebars/de&oldid=1525214>"