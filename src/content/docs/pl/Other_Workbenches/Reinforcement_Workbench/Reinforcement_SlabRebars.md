---
title: Zbrojenie Zbrojenie płyt stropowych
---
|  |
| --- |
| BIM: Zbrojenie płyty |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Zbrojenie płyty |
| Środowisko pracy |
| [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Zbrojenie płyty** pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Przykład zbrojenia wewnątrz [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

![](/images/Right_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Widok z prawej strony podanego przykładu zbrojenia płyty.

![](/images/Front_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

Widok z przodu podanego przykładu zbrojenia płyty.

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty, jak pokazano na poniższym obrazku.

:   ![](/images/Selected_face_for_Slab_Arch_Structure.png)
:   Wybrana ściana dla konstrukcji płyty.

2. Następnie wybierz ![](/images/Reinforcement_SlabRebars.svg) **Zbrojenie płyty** z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

:   ![](/images/Slab_Reinforcement_input_dialog_box.png)
:   Okno dialogowe dla zbrojenia płyty.

4. Wybierz żądany typ otuliny siatki zbrojeniowej *(górna lub dolna)*.

5. Wybierz żądany typ prętów oraz inne dane wejściowe dla prętów w kierunku równoległym do wybranej ściany w siatce zbrojenia płyty, jak pokazano na poniższym rysunku.

:   ![](/images/Bent_Shape_rebars_in_parallel_with_distribution_rebars_inputs_for_Slab_Reinforcement.png)
:   Okno dialogowe dla zbrojenia płyty, zbrojenie w kierunku równoległym do wybranej ściany.

6. Teraz kliknij Dalej lub wybierz zbrojenie poprzeczne w widoku listy.

7. Teraz wybierz żądane dane wejściowe dla prętów w kierunku poprzecznym wybranej powierzchni, jak pokazano na poniższym obrazku.

:   ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
:   Okno dialogowe zbrojenia płyty prętami zbrojeniowymi w kierunku poprzecznym wybranej ściany.

11. Kliknij OK lub Zastosuj lub Zakończ, aby wygenerować zbrojenie płyty.

9. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

* DANE**Otulina siatki wzdłuż**: Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji. Może mieć dwie wartości "Top" i "Bottom".
* DANE**Typ pręta**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "StraightRebar", "LShapeRebar", "UShapeRebar", "BentShapeRebar".
* DANE**Otulina przednia**: Odległość między równoległym prętem zbrojeniowym a wybraną powierzchnią czołową.
* DANE**Otulina lewa**: Odległość między lewym końcem równoległego pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**Otulina prawa**: Odległość między prawym końcem równoległego pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między równoległymi prętami zbrojeniowymi od dolnej ściany konstrukcji.
* DANE**Otulina górna**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Otulina tylna**: Tylna otulina dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
* DANE**Długość kotwy**: Reprezentuje długość ramienia równoległego pręta zbrojeniowego o wygiętym kształcie, gdy typ równoległego pręta zbrojeniowego to BentShapeRebar.
* DANE**Kąt wygięcia**: Reprezentuje kąt równoległego pręta zbrojeniowego o wygiętym kształcie, gdy typ równoległego pręta zbrojeniowego to BentShapeRebar.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
* DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
* DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
* DANE**Rozstaw**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

**Właściwości prętów zbrojeniowych rozdzielczych dla prętów zbrojeniowych giętych w kierunku równoległym do wybranej powierzchni:**

* DANE**Ilość**: Zawiera liczbę prętów zbrojeniowych dystrybucyjnych dla prętów zbrojeniowych o kształcie giętym w kierunku równoległym.
* DANE**Rozstaw**: Zawiera odstępy między prętami zbrojeniowymi rozdzielczymi dla prętów zbrojeniowych odgiętych w kierunku równoległym.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

* DANE**Typ pręta**: Typ pręta zbrojeniowego dla poprzecznych prętów zbrojeniowych do zbrojenia płyt. Parametr może mieć cztery wartości: "Pręt prosty", "Pręt w kształcie L", "Pręt w kształcie U", "Odgięty pręt zbrojeniowy".
* DANE**Otulina przednia**: Odległość między poprzecznym prętem zbrojeniowym a wybraną powierzchnią czołową.
* DANE**Otulina lewa**: Odległość między lewym końcem poprzecznego pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**Otulina prawa**: Odległość między prawym końcem poprzecznego pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między poprzecznymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Otulina górna**: Odległość między poprzecznymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Otulina tylna**: Tylna osłona zbrojenia poprzecznego płyty.
* DANE**Długość kotwy**: Reprezentuje długość ramienia pręta zbrojeniowego poprzecznego o wygiętym kształcie, gdy typ pręta zbrojeniowego poprzecznego to pręt zbrojeniowy odgięty.
* DANE**Kąt wygięcia**: Reprezentuje kąt wygięcia pręta zbrojeniowego, gdy typ pręta zbrojeniowego to pręt zbrojeniowy odgięty.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów, wyrażona w krotności średnicy prętów zbrojeniowych.
* DANE**Średnica**: Średnica poprzecznych prętów zbrojeniowych
* DANE**Amount**: Zawiera liczbę poprzecznych prętów zbrojeniowych.
* DANE**Spacing**: Zawiera odstępy między poprzecznymi prętami zbrojeniowymi.

**Właściwości prętów zbrojeniowych rozdzielczych dla prętów zbrojeniowych giętych w kierunku poprzecznym do wybranej powierzchni:**

* DANE**Ilość**: Zawiera liczbę prętów zbrojeniowych dystrybucyjnych dla prętów zbrojeniowych o kształcie giętym w kierunku poprzecznym.
* DANE**Rozstaw**: Zawiera odstępy między prętami zbrojeniowymi rozdzielczymi dla prętów zbrojeniowych odgiętych w kierunku poprzecznym.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie płyty** może być używane z konsoli środowiska [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie zbrojenia płyty

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

* Tworzy obiekt `SlabReinforcementGroup` z podanej `struktury`, która jest płytą [konstrukcyjną architektury](/Arch_Structure/pl "Arch Structure/pl") i `nazwy ściany`, która jest ścianą tej konstrukcji.
  + Jeśli nie podano ani jako parametr `struktury` ani `nazwy ściany`, program przyjmie jako dane wejściowe ścianę wybraną przez użytkownika.

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

* DANE**parallel\_rebar\_type**: Typ pręta zbrojeniowego dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręt prosty", "Pręt w kształcie L", "Pręt w kształcie U", "Pręt wygięty".
* DANE**parallel\_front\_cover**: Odległość między równoległym prętem zbrojeniowym a wybraną powierzchnią.
* DANE**parallel\_rear\_cover**: Tylna otulina dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
* DANE**parallel\_left\_cover**: Odległość między lewym końcem równoległego pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**parallel\_right\_cover**: Odległość między prawym końcem równoległego pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**parallel\_top\_cover**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**parallel\_bottom\_cover**: Odległość między równoległymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**parallel\_diameter**: Średnica równoległych prętów zbrojeniowych.
* DANE**parallel\_amount\_spacing\_check**: Jeśli jest ustawiona na True, wartość parallel\_amount\_spacing\_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parallel\_amount\_spacing\_value jest używana jako odstęp w równoległych prętach zbrojeniowych.
* DANE**parallel\_amount\_spacing\_value**: Zawiera liczbę prętów zbrojeniowych lub odstęp między równoległymi prętami zbrojeniowymi w oparciu o wartość amount\_spacing\_check.
* DANE**parallel\_bent\_bar\_length**: Reprezentuje długość ramienia równoległego pręta zbrojeniowego o wygiętym kształcie, gdy parallel\_rebar\_type to BentShapeRebar
* DANE**parallel\_bent\_bar\_angle**: Reprezentuje kąt dla równoległego pręta zbrojeniowego o wygiętym kształcie, gdy parallel\_rebar\_type to BentShapeRebar.
* DANE**parallel\_l\_shape\_hook\_orintation**: Reprezentuje orintację haka równoległego pręta zbrojeniowego w kształcie litery L, jeśli parallel\_rebar\_type to LShapeRebar. Może mieć trzy wartości "Lewy", "Prawy", "Alternatywny".
* DANE**parallel\_distribution\_rebars\_check**: Jeśli ma wartość `Prawda`, dodaje pręty rozdzielcze dla prętów równoległych. Wartość domyślna to `Fałsz`.
* DANE**parallel\_distribution\_rebars\_diameter**: Średnica prętów rozdzielczych dla prętów równoległych.
* DANE**parallel\_distribution\_rebars\_amount\_spacing\_check**: Jeśli wartość jest ustawiona na `Prawda`, wówczas wartość parallel\_distribution\_rebars\_amount\_spacing\_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parallel\_distribution\_rebars\_amount\_spacing\_value jest używana jako odstęp w parallel\_distribution\_rebars. Wartość domyślna to `Prawda`.
* DANE**parallel\_distribution\_rebars\_amount\_spacing\_value**: Zawiera liczbę lub odstęp między prętami zbrojeniowymi dla jednej strony równoległych prętów zbrojeniowych o wygiętym kształcie w oparciu o wartość parallel\_distribution\_rebars\_check. Wartość domyślna to 2.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

* DANE**cross\_rebar\_type**: Typ pręta zbrojeniowego dla poprzecznych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręt prosty", "Pręt w kształcie L", "Pręt w kształcie U", "Pręt wygięty".
* DANE**cross\_front\_cover**: Odległość między poprzecznym prętem zbrojeniowym a cross\_face *(powierzchnia prostopadła do wybranej powierzchni)*.
* DANE**cross\_rear\_cover**: Tylna otulina dla zbrojenia poprzecznego prętów zbrojeniowych płyty.
* DANE**cross\_left\_cover**: Odległość między lewym końcem poprzecznego pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**cross\_right\_cover**: Odległość między prawym końcem pręta zbrojeniowego a prawą powierzchnią konstrukcji względem cross\_face.
* DANE**cross\_top\_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**cross\_bottom\_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**cross\_diameter**: Średnica poprzecznych prętów zbrojeniowych.
* DANE**cross\_amount\_spacing\_check**: Jeśli wartość jest ustawiona na True, wówczas parametr cross\_amount\_spacing\_value jest używany jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parametru cross\_amount\_spacing\_value jest używana jako odstęp między prętami zbrojeniowymi.
* DANE**cross\_amount\_spacing\_value**: Zawiera liczbę prętów zbrojeniowych lub odstęp między prętami zbrojeniowymi w oparciu o wartość cross\_amount\_spacing\_check.
* DANE**cross\_rounding**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w wielokrotności cross\_diameter.
* DANE**cross\_bent\_bar\_length**: Reprezentuje długość ramienia poprzecznego pręta zbrojeniowego o wygiętym kształcie, gdy cross\_rebar\_type to BentShapeRebar
* DANE**cross\_bent\_bar\_angle**: Reprezentuje kąt dla wygiętego kształtu poprzecznego pręta zbrojeniowego, gdy cross\_rebar\_type to BentShapeRebar.
* DANE**cross\_l\_shape\_hook\_orintation**: Reprezentuje orintację haka poprzecznego pręta zbrojeniowego w kształcie L, jeśli cross\_rebar\_type to LShapeRebar. Może mieć trzy wartości "Lewy", "Prawy", "Alternatywnie".
* DANE**cross\_distribution\_rebars\_check**: Jeśli ma wartość `Prawda`, dodaje pręty rozkładu dla prętów wygiętych krzyżowo. Domyślnie `Fałsz`.
* DANE**cross\_distribution\_rebars\_diameter**: Średnica prętów zbrojeniowych dla prętów zbrojeniowych wygiętych krzyżowo.
* DANE**cross\_distribution\_rebars\_amount\_spacing\_check**: Jeśli jest ustawiona na `Prawda`, wartość cross\_distribution\_rebars\_amount\_spacing\_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość cross\_distribution\_rebars\_amount\_spacing\_value jest używana jako odstęp w cross\_distribution\_rebars. Wartość domyślna to `Prawda`.
* DANE**cross\_distribution\_rebars\_amount\_spacing\_value**: Zawiera liczbę lub odstęp między prętami zbrojeniowymi dla jednej strony prętów zbrojeniowych o kształcie wygiętym krzyżowo w oparciu o wartość cross\_distribution\_rebars\_check. Wartość domyślna to 2.

**Wspólne właściwości prętów równoległych i krzyżowych:**

* `mesh_cover_along`: Może mieć dwie wartości " Góra", "Dół". Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji.
* `structure`: Obiekt konstrukcji Architektury. Domyślnie przyjmuje wartość Brak.
* `facename`: wybrana ściana konstrukcji. Domyślnie przyjmuje wartość Brak.

### Edycja zbrojenia płyty

Właściwości zbrojenia płyty można zmienić za pomocą następującej funkcji:

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

* `footngReinforcementGroup` to wcześniej utworzony obiekt grupy `Slab Reinforcement`.
* Pozostałe parametry są takie same, jak wymagane przez funkcję `makeSlabReinforcement()`.

### Przykłady zbrojenia płyt

* [Przykład płyty o rozpiętości w dwóch kierunkach](/Example_Slab_Spanning_in_Two_Directions/pl "Example Slab Spanning in Two Directions/pl")

![](/images/Isometric_view_of_Bent_Shape_rebars_in_parallel_and_cross_direction_with_distribution_rebars.png)

* [Przykład płyty o rozpiętości w jednym kierunku](/Example_Slab_Spanning_in_One_Direction/pl "Example Slab Spanning in One Direction/pl")

![](/images/Slab_spanning_in_one_Direction.png)

* [Przykład płyty z siatką prostych prętów zbrojeniowych](/Example_Slab_Having_Mesh_Of_Straight_Rebars/pl "Example Slab Having Mesh Of Straight Rebars/pl")

![](/images/Slab_having_straight_rebars_in_both_direction.png)

* [Przykładowa płyta z prętami zbrojeniowymi w kształcie U, Siatka zbrojeniowa](/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/pl "Example Slab Having UShape Rebars Reinforcement Mesh/pl")

![](/images/U-shape_rebars_isometric_view.png)

* [Przykładowa płyta z prętami zbrojeniowymi w kształcie litery L, Siatka zbrojeniowa](/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh/pl "Example Slab Having LShape Rebars Reinforcement Mesh/pl")

![](/images/L-Shape_Rebars_isometric_view.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_SlabRebars/pl&oldid=1441020>"