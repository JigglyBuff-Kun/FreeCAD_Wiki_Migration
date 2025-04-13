---
title: Poradnik Przykład płyty o rozpiętości w jednym kierunku
---

|                                                |
| ---------------------------------------------- |
| Ćwiczenie                                      |
| Temat                                          |
| Przykład płyty o rozpiętości w jednym kierunku |
| Poziom trudności                               |
| Średnio zaawansowany                           |
| Czas wykonania                                 |
| dowolny                                        |
| Autorzy                                        |
| Shiv Charan                                    |
| Wersja FreeCAD                                 |
| 0.20                                           |
| Pliki z przykładami                            |
| nie dołączono                                  |
| Zobacz również                                 |
| _-_                                            |
|                                                |

## Opis

Narzędzie ![](/images/Reinforcement_SlabRebars.svg) [Zbrojenie płyt](/Reinforcement_SlabRebars/pl "Reinforcement SlabRebars/pl") pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

To narzędzie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

W tym przykładzie utworzymy zbrojenie płyty dla płyty rozpiętej w jednym kierunku, jak pokazano na poniższym rysunku.

![](/images/Slab_spanning_in_one_Direction.png)

Przykład zbrojenia płyty o rozpiętości w jednym kierunku w [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

![](/images/Right_view_of_Slab_spanning_in_one_direction.png)

Widok z prawej strony podanego przykładu zbrojenia płyty.

![](/images/Front_view_of_slab_spanning_in_one_direction.png)

Widok z przodu podanego przykładu zbrojenia płyty.

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty, jak pokazano na poniższym obrazku.

: ![](/images/Selected_face_for_Slab_Arch_Structure.png)
: Wybrana ściana dla konstrukcji płyty.

2. Następnie wybierz ![](/images/Reinforcement_SlabRebars.svg) **Zbrojenie płyty** z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

: ![](/images/Slab_Reinforcement_input_dialog_box.png)
: Okno dialogowe dla zbrojenia płyty.

4. Wybierz żądany typ pokrycia siatki zbrojeniowej _(Góra lub Dół)_ W przykładzie wybrano Dół.

5. Wybierz typ pręta zbrojeniowego Pręt prosty i inne dane wejściowe dla prętów zbrojeniowych w kierunku równoległym do wybranej powierzchni, jak pokazano na poniższym rysunku.

: ![](/images/Straight_Rebars_in_parallel_for_Slab_Spanning_in_One_Direction.png)
: Okno dialogowe dla zbrojenia płyty, zbrojenie w kierunku równoległym do wybranej ściany.

6. Teraz kliknij przycisk Dalej lub wybierz Pręty zbrojeniowe w widoku listy.

7. Teraz wybierz typ pręta zbrojeniowego Pręt zbrojeniowy odgięty i inne żądane dane jako dane wejściowe dla prętów zbrojeniowych w kierunku poprzecznym wybranej powierzchni, jak pokazano na poniższym obrazku.

: ![](/images/Bent_Shape_rebars_in_cross_direction_with_distribution_rebars.png)
: Okno dialogowe zbrojenia płyty prętami zbrojeniowymi w kierunku poprzecznym wybranej ściany.

8. Kliknij OK lub Zastosuj lub Zakończ, aby wygenerować zbrojenie płyty.

9. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości używane dla płyt o rozpiętości w jednym kierunku

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

- DANE**Pokrycie siatki wzdłuż**: Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji. Może mieć dwie wartości "Góra" i "Dół".
- DANE**Typ pręta**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**Otulina przednia**: Odległość między równoległym prętem zbrojeniowym, a wybraną powierzchnią czołową.
- DANE**Otulina lewa**: Odległość między lewym końcem równoległego pręta zbrojeniowego, a lewą ścianą konstrukcji.
- DANE**Otulina prawa**: Odległość między prawym końcem równoległego pręta zbrojeniowego, a prawą ścianą konstrukcji.
- DANE**Otulina dolna**: Odległość między równoległymi prętami zbrojeniowymi od dolnej ściany konstrukcji.
- DANE**Otulina górna**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**Otulina tylna**: Tylna osłona dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
- DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
- DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
- DANE**Odstęp**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

- DANE**Typ pręta**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**Otulina przednia**: Odległość między równoległym prętem zbrojeniowym, a wybraną powierzchnią czołową.
- DANE**Otulina lewa**: Odległość między lewym końcem równoległego pręta zbrojeniowego, a lewą ścianą konstrukcji.
- DANE**Otulina prawa**: Odległość między prawym końcem równoległego pręta zbrojeniowego, a prawą ścianą konstrukcji.
- DANE**Otulina dolna**: Odległość między równoległymi prętami zbrojeniowymi od dolnej ściany konstrukcji.
- DANE**Otulina górna**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**Otulina tylna**: Tylna osłona dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
- DANE**Długość kotwy**: Reprezentuje długość ramienia poprzecznego pręta zbrojeniowego o wygiętym kształcie, gdy typ poprzecznego pręta zbrojeniowego to Pręt zbrojeniowy odgięty.
- DANE**Kąt wygięcia**: Reprezentuje kąt dla wygiętego kształtu poprzecznego pręta zbrojeniowego, gdy typ poprzecznego pręta zbrojeniowego to Pręt zbrojeniowy odgięty.
- DANE**Zaokrąglenie**: Wartość zaokrąglenia, która ma być zastosowana do końców prętów, wyrażona w krotności średnicy poprzecznych prętów zbrojeniowych.
- DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
- DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
- DANE**Odstęp**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

**Właściwości prętów zbrojeniowych rozdzielczych dla prętów zbrojeniowych giętych w kierunku poprzecznym do wybranej powierzchni:**

- DANE**Ilość**: Zawiera liczbę prętów zbrojeniowych dystrybucyjnych dla prętów zbrojeniowych o kształcie giętym w kierunku poprzecznym.
- DANE**Rozstaw**: Zawiera odstępy między prętami zbrojeniowymi rozdzielczymi dla prętów zbrojeniowych odgiętych w kierunku poprzecznym.

## Tworzenie skryptów

_Zobacz również:_ [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie płyt** może być używane z konsoli środowiska [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie zbrojenia płyty o rozpiętości w jednym kierunku

Aby utworzyć zbrojenie płyty obejmujące jeden kierunek, jak pokazano na powyższych rysunkach, można użyć funkcji `makeSlabReinforcement` w następujący sposób:

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="StraightRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_diameter=8,
    parallel_amount_spacing_check=False,
    parallel_amount_spacing_value=50,
    cross_rebar_type="BentShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=29,
    cross_bottom_cover=20,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=10,
    cross_rounding=2,
    cross_bent_bar_length=150,
    cross_bent_bar_angle=135,
    cross_distribution_rebars_check = True,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 4,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- Tworzy obiekt `SlabReinforcementGroup` dla rozpiętości płyty z prostym zbrojeniem prętami zbrojeniowymi z podanego obiektu `structure`, który jest [konstrukcją](/Arch_Structure/pl "Arch Structure/pl"), oraz `facename`, który jest ścianą tej konstrukcji.
  - Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.

**Właściwości używane dla płyty rozpiętej w jednym kierunku na potrzeby skryptów.**

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

- DANE**parallel_rebar_type**: Typ pręta zbrojeniowego dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**parallel_front_cover**: Odległość między równoległym prętem zbrojeniowym a wybraną powierzchnią.
- DANE**parallel_rear_cover**: Tylna otulina dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
- DANE**parallel_left_cover**: Odległość między lewym końcem równoległego pręta zbrojeniowego a lewą ścianą konstrukcji.
- DANE**parallel_right_cover**: Odległość między prawym końcem równoległego pręta zbrojeniowego a prawą ścianą konstrukcji.
- DANE**parallel_top_cover**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**parallel_bottom_cover**: Odległość między równoległymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
- DANE**parallel_diameter**: Średnica równoległych prętów zbrojeniowych.
- DANE**parallel_amount_spacing_check**: Jeśli jest ustawiona na `Prawda`, wartość parallel_amount_spacing_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość parallel_amount_spacing_value jest używana jako odstęp w równoległych prętach zbrojeniowych.
- DANE**parallel_amount_spacing_value**: Zawiera liczbę prętów zbrojeniowych lub odstęp między równoległymi prętami zbrojeniowymi w oparciu o wartość amount_spacing_check.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

- DANE**cross_rebar_type**: Typ pręta zbrojeniowego dla poprzecznych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**cross_front_cover**: Odległość między poprzecznym prętem zbrojeniowym a cross_face _(powierzchnia prostopadła do wybranej powierzchni)_.
- DANE**cross_rear_cover**: Tylna otulina dla zbrojenia poprzecznego prętów zbrojeniowych płyty.
- DANE**cross_left_cover**: Odległość między lewym końcem poprzecznego pręta zbrojeniowego a lewą ścianą konstrukcji.
- DANE**cross_right_cover**: Odległość między prawym końcem pręta zbrojeniowego a prawą powierzchnią konstrukcji względem cross_face.
- DANE**cross_top_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**cross_bottom_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
- DANE**cross_diameter**: Średnica poprzecznych prętów zbrojeniowych.
- DANE**cross_amount_spacing_check**: Jeśli jest ustawiona na `Prawda`, wartość cross_amount_spacing_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość cross_amount_spacing_value jest używana jako odstęp w prętach zbrojeniowych.
- DANE**cross_amount_spacing_value**: Zawiera liczbę prętów zbrojeniowych lub odstęp między prętami zbrojeniowymi w oparciu o wartość cross_amount_spacing_check.
- DANE**cross_rounding**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w krotności cross_diameter.
- DANE**cross_bent_bar_length**: Reprezentuje długość ramienia wygiętego pręta zbrojeniowego, gdy cross_rebar_type to Przęt zbrojeniowy odgięty.
- DANE**cross_bent_bar_angle**: Reprezentuje kąt dla wygiętego pręta zbrojeniowego, gdy cross_rebar_type to Pręt zbrojeniowy odgięty.
- DANE**cross_distribution_rebars_check**:

Jeśli opcja ma wartość `Prawda`, dodaje pręty rozdzielcze dla prętów wygiętych krzyżowo. Domyślna wartość to `Fałsz`.

- DANE**cross_distribution_rebars_diameter**: Średnica prętów zbrojeniowych dla prętów zbrojeniowych wygiętych krzyżowo.
- DANE**cross_distribution_rebars_amount_spacing_check**: Jeśli wartość jest ustawiona na `Prawda`, wówczas wartość cross_distribution_rebars_amount_spacing_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość cross_distribution_rebars_amount_spacing_value jest używana jako odstęp w cross_distribution_rebars. Wartość domyślna to `Prawda`.
- DANE**cross_distribution_rebars_amount_spacing_value**: Zawiera liczbę lub odstęp między prętami zbrojeniowymi dla jednej strony prętów zbrojeniowych o kształcie wygiętym krzyżowo w oparciu o wartość cross_distribution_rebars_check. Wartość domyślna to 2.

**Wspólne właściwości prętów równoległych i krzyżowych:**

- `mesh_cover_along`: Może mieć dwie wartości " Góra", "Dół". Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji.
- `structure`: Obiekt konstrukcji Architektury. Domyślnie przyjmuje wartość Brak.
- `facename`: wybrana ściana konstrukcji. Domyślnie przyjmuje wartość Brak.

### Edycja zbrojenia płyty o rozpiętości w jednym kierunku

Właściwości zbrojenia płyty dla płyty rozpiętej w jednym kierunku można zmienić za pomocą funkcji `editSlabReinforcement` w następujący sposób:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="StraightRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=10,
    cross_rebar_type="BentShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=15,
    cross_rounding=2,
    cross_bent_bar_length=150,
    cross_bent_bar_angle=135,
    cross_distribution_rebars_check = True,
    cross_distribution_rebars_diameter = 8,
    cross_distribution_rebars_amount_spacing_check = True,
    cross_distribution_rebars_amount_spacing_value = 4,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- `slabReinforcementGroup` jest wcześniej utworzonym obiektem grupy `Slab Reinforcement`.
- Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieFourRebars()`.

możesz zmienić dowolną właściwość, aby edytować zbrojenie płyty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Spanning_in_One_Direction/pl&oldid=1488134>"
