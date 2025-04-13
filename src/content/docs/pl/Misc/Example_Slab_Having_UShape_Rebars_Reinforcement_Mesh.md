---
title: Poradnik Przykładowa płyta z prętami zbrojeniowymi w kształcie U, Siatka zbrojeniowa
---

|                                                                      |
| -------------------------------------------------------------------- |
| Ćwiczenie                                                            |
| Temat                                                                |
| Przykładowa płyta z siatką prętów zbrojeniowych w kształcie litery U |
| Poziom trudności                                                     |
| Średnio zaawansowany                                                 |
| Czas wykonania                                                       |
| dowolny                                                              |
| Autorzy                                                              |
| Shiv Charan                                                          |
| Wersja FreeCAD                                                       |
| 0.20                                                                 |
| Pliki z przykładami                                                  |
| nie dołączono                                                        |
| Zobacz również                                                       |
| _-_                                                                  |
|                                                                      |

## Opis

Narzędzie ![](/images/Reinforcement_SlabRebars.svg) [Zbrojenie płyt](/Reinforcement_SlabRebars/pl "Reinforcement SlabRebars/pl") pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

To narzędzie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

W tym przykładzie utworzymy zbrojenie płyty z prętami zbrojeniowymi w kształcie litery U dla obu kierunków, jak pokazano na poniższym rysunku.

![](/images/U-shape_rebars_isometric_view.png)

Przykład zbrojenia płyty prętami zbrojeniowymi w kształcie litery U w [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty.

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") płyty, jak pokazano na poniższym obrazku.

: ![](/images/Selected_face_for_Slab_Arch_Structure.png)
: Wybrana ściana dla konstrukcji płyty.

2. Następnie wybierz ![](/images/Reinforcement_SlabRebars.svg) **Zbrojenie płyty** z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

: ![](/images/Slab_Reinforcement_input_dialog_box.png)
: Okno dialogowe dla zbrojenia płyty.

4. Wybierz żądany typ pokrycia siatki zbrojeniowej _(Góra lub Dół)_ W przykładzie wybrano Dół.

5. Wybierz typ pręta zbrojeniowego w kształcie U i inne dane wejściowe dla prętów zbrojeniowych w kierunku równoległym do wybranej powierzchni, jak pokazano na poniższym rysunku.

: ![](/images/U-shape_parallel_rebars_inputs.png)
: Okno dialogowe dla zbrojenia płyty, zbrojenie w kierunku równoległym do wybranej ściany.

6. Teraz kliknij przycisk Dalej lub wybierz Pręty zbrojeniowe w widoku listy.

7. Teraz wybierz typ pręta zbrojeniowego w kształcie U i inne żądane dane jako dane wejściowe dla prętów zbrojeniowych w kierunku poprzecznym wybranej powierzchni, jak pokazano na poniższym rysunku.

: ![](/images/U-Shape_rebars_in_cross_direction_inputs.png)
: Okno dialogowe zbrojenia płyty prętami zbrojeniowymi w kierunku poprzecznym wybranej ściany.

11. Kliknij OK lub Zastosuj lub Zakończ, aby wygenerować zbrojenie płyty.

12. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości stosowane do zbrojenia płyt prętami zbrojeniowymi w kształcie U

**Właściwości prętów zbrojeniowych w kierunku równoległym do wybranej ściany:**.

- DANE**Pokrycie siatki wzdłuż**: Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji. Może mieć dwie wartości "Góra" i "Dół".
- DANE**Typ pręta**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**Otulina przednia**: Odległość między równoległym prętem zbrojeniowym a wybraną powierzchnią czołową.
- DANE**Otulina lewa**: Odległość między lewym końcem równoległego pręta zbrojeniowego a lewą ścianą konstrukcji.
- DANE**Otulina prawa**: Odległość między prawym końcem równoległego pręta zbrojeniowego a prawą ścianą konstrukcji.
- DANE**Otulina dolna**: Odległość między równoległymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
- DANE**Otulina górna**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**Otulina tylna**: Tylna osłona dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
- DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
- DANE**Zaokrąglenie**: Wartość zaokrąglenia, która zostanie zastosowana do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
- DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
- DANE**Odstęp**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

- DANE**Typ pręta**: Typ prętów zbrojeniowych dla równoległych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**Otulina przednia**: Odległość między równoległym prętem zbrojeniowym a wybraną powierzchnią czołową.
- DANE**Otulina lewa**: Odległość między lewym końcem równoległego pręta zbrojeniowego a lewą ścianą konstrukcji.
- DANE**Otulina prawa**: Odległość między prawym końcem równoległego pręta zbrojeniowego a prawą ścianą konstrukcji.
- DANE**Otulina dolna**: Odległość między równoległymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
- DANE**Otulina górna**: Odległość między równoległymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**Otulina tylna**: Tylna osłona dla zbrojenia płyty równoległymi prętami zbrojeniowymi.
- DANE**Średnica**: Średnica równoległych prętów zbrojeniowych.
- DANE**Zaokrąglenie**: Wartość zaokrąglenia, która zostanie zastosowana do narożników prętów, wyrażona w krotności średnicy równoległych prętów zbrojeniowych.
- DANE**Ilość**: Zawiera liczbę równoległych prętów zbrojeniowych.
- DANE**Odstęp**: Zawiera odstępy między równoległymi prętami zbrojeniowymi.

## Tworzenie skryptów

_Zobacz również:_ [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie płyt** może być używane z konsoli środowiska [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie zbrojenia płyty prętami zbrojeniowymi w kształcie litery U

Aby utworzyć zbrojenie płyty w kształcie litery U, jak pokazano na powyższych rysunkach, można użyć funkcji `makeSlabReinforcement` w następujący sposób:

```
from SlabReinforcement.SlabReinforcement import makeSlabReinforcement
SlabReinforcementGroup = makeSlabReinforcement(
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=12,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=12,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- Tworzy obiekt `SlabReinforcementGroup` dla zbrojenia płyty z prętami zbrojeniowymi w kształcie litery U dla podanego obiektu `structure`, który jest [konstrukcją](/Arch_Structure/pl "Arch Structure/pl") płyty i obiektrm `facename`, który jest powierzchnią tej konstrukcji.
  - Jeśli nie podano `structure` ani `facename`, jako dane wejściowe przyjmowana jest ściana wybrana przez użytkownika.

**Właściwości stosowane do zbrojenia płyt z prętami zbrojeniowymi w kształcie litery U do zbrojenia za pomocą skryptów**

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
- DANE**parallel_rounding**: Wartość zaokrąglenia, która zostanie zastosowana do narożników prętów, wyrażona w wielokrotności parallel_diameter.

**Właściwości prętów zbrojeniowych w kierunku poprzecznym do wybranej ściany:**

- DANE**cross_rebar_type**: Typ pręta zbrojeniowego dla poprzecznych prętów zbrojeniowych do zbrojenia płyt. Może mieć cztery wartości "Pręty zbrojeniowe proste", "Pręty zbrojeniowe typu L", "Pręty zbrojeniowe typu U", "Pręty zbrojeniowe odgięte".
- DANE**cross_front_cover**: Odległość między poprzecznym prętem zbrojeniowym a cross_face (powierzchnia prostopadła do wybranej powierzchni).
- DANE**cross_rear_cover**: Tylna otulina dla zbrojenia poprzecznego prętów zbrojeniowych płyty.
- DANE**cross_left_cover**: Odległość między lewym końcem poprzecznego pręta zbrojeniowego a lewą ścianą konstrukcji.
- DANE**cross_right_cover**: Odległość między prawym końcem pręta zbrojeniowego a prawą powierzchnią konstrukcji względem cross_face.
- DANE**cross_top_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od górnej powierzchni konstrukcji.
- DANE**cross_bottom_cover**: Odległość między poprzecznymi prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
- DANE**cross_diameter**: Średnica poprzecznych prętów zbrojeniowych.
- DANE**cross_amount_spacing_check**: Jeśli jest ustawiona na `Prawda`, wartość cross_amount_spacing_value jest używana jako liczba prętów zbrojeniowych, w przeciwnym razie wartość cross_amount_spacing_value jest używana jako odstęp w prętach zbrojeniowych.
- DANE**cross_amount_spacing_value**: Zawiera liczbę prętów zbrojeniowych lub odstęp między prętami zbrojeniowymi w oparciu o wartość cross_amount_spacing_check.
- DANE**cross_rounding**: Wartość zaokrąglenia, która ma być zastosowana do narożników prętów, wyrażona w krotności cross_diameter.

**Wspólne właściwości prętów równoległych i krzyżowych:**

- `mesh_cover_along`: Może mieć dwie wartości " Góra", "Dół". Reprezentuje wyrównanie siatki zbrojeniowej wzdłuż górnej lub dolnej powierzchni konstrukcji.
- `structure`: Obiekt konstrukcji Architektury. Domyślnie przyjmuje wartość Brak.
- `facename`: wybrana ściana konstrukcji. Domyślnie przyjmuje wartość Brak.

### Edycja zbrojenia płyty z prętami zbrojeniowymi w kształcie litery U

Właściwości zbrojenia płyty z prętami zbrojeniowymi w kształcie litery u można zmienić za pomocą funkcji `editSlabReinforcement` w następujący sposób:

```
from SlabReinforcement.SlabReinforcement import editSlabReinforcement
SlabReinforcementGroup = editSlabReinforcement(
    SlabReinforcementGroup,
    parallel_rebar_type="UShapeRebar",
    parallel_front_cover=20,
    parallel_rear_cover=20,
    parallel_left_cover=10,
    parallel_right_cover=10,
    parallel_top_cover=30,
    parallel_bottom_cover=20,
    parallel_rounding=2,
    parallel_diameter=8,
    parallel_amount_spacing_check=True,
    parallel_amount_spacing_value=15,
    cross_rebar_type="UShapeRebar",
    cross_front_cover=20,
    cross_rear_cover=20,
    cross_left_cover=10,
    cross_right_cover=10,
    cross_top_cover=20,
    cross_bottom_cover=20,
    cross_rounding=2,
    cross_diameter=8,
    cross_amount_spacing_check=True,
    cross_amount_spacing_value=15,
    mesh_cover_along = "Bottom",
    structure=App.getDocument("slab").getObject("Beam"),
    facename='Face4',
)

```

- `slabReinforcementGroup` jest wcześniej utworzonym obiektem grupy `Slab Reinforcement`.
- Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieFourRebars()`.

możesz zmienić dowolną właściwość, aby edytować zbrojenie płyty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh/pl&oldid=1485577>"
