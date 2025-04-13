---
title: Zbrojenie Zbrojenie okrągłych słupów
---
|  |
| --- |
| Zbrojenie: Zbrojenie kolumn |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Zbrojenie kolumn |
| Środowisko pracy |
| [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Zbrojenie słupów](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl"), [Zbrojenie słupa dwa ściągi sześć prętów zbrojeniowych](/Reinforcement_ColumnRebars_TwoTiesSixRebars/pl "Reinforcement ColumnRebars TwoTiesSixRebars/pl") |
|  |

## Opis

Narzędzie **Zbrojenie okrągłych słupów** pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl"). Ta strona pokazuje dodatkowy przykład użycia tego narzędzia.

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

Dostępne są trzy przykłady użycia:

* [Prostokątna kolumna z pojedynczym ściągiem](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl")
* [Zbrojenie słupa dwa ściągi sześć prętów zbrojeniowych](/Reinforcement_ColumnRebars_TwoTiesSixRebars/pl "Reinforcement ColumnRebars TwoTiesSixRebars/pl")
* [Zbrojenie okrągłych słupów *(zobacz poniżej)*](#Użycie)

![](/images/Arch_Rebar_Circular_ColumnReinforcement_example.png)

Okrągłe wzmocnienie wewnątrz [słupa](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz górną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") architektury.

2. Następnie wybierz ![](/images/Reinforcement_ColumnRebars.svg) [Zbrojenie słupów](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl") z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Okno dialogowe dla narzędzia Zbrojenie okrągłych słupów.

4. Wciśnij przycisk "Słup okrągły" w oknie dialogowym Zbrojenie słupa.

:   ![](/images/CircularColumnReinforcementDialog.png)
:   Okno dialogowe dla zbrojenia okrągłych słupów

5. Wprowadź dane dotyczące zbrojenia dla okrągłego słupa.

8. Kliknij OK lub Zastosuj, aby wygenerować zbrojenie słupa okrągłego.

7. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości

**Spiralne pręty zbrojeniowe:**

* DANE**Otulina boczna**: Odległość między prętem zbrojeniowym a zakrzywioną powierzchnią.
* DANE**Otulina górna**: Odległość między prętami zbrojeniowymi od górnej ściany konstrukcji.
* DANE**Otulina dolna**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Skok**: Skok spirali to wysokość jednego pełnego obrotu spirali, mierzona równolegle do osi spirali.
* DANE**Średnica**: Średnica pręta zbrojeniowego.

**Zbrojenie główne:**

* DANE**Odsunięcie górne**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Odsunięcie dolne**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Średnica**: Średnica głównych prętów zbrojeniowych.
* DANE**Ilość**: Liczba głównych prętów zbrojeniowych.
* DANE**Kąt**: Odległość kątowa między strzemionami.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie kolumn** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie zbrojenia słupa okrągłego

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

* Tworzy obiekt `RebarGroup` z podanej `structure`, która jest [konstrukcją architektury](/Arch_Structure/pl "Arch Structure/pl"), oraz `facename`, który jest powierzchnią tej struktury.
  + Jeśli nie podano `structure` ani `facename`, zostanie użyta wybrana przez użytkownika powierzchnia.
* `s_cover`, `helical_rebar_t_offset` i `helical_rebar_b_offset` to wewnętrzne odległości dla zbrojenia spiralnego względem powierzchni struktury. Są to odpowiednio odległości boczna, górna i dolna.
* `pitch` to parametr określający, jak blisko lub daleko od siebie znajdują się poszczególne pętle spiralne.
* `dia_of_helical_rebar` to średnica zbrojenia spiralnego wewnątrz struktury.
* `main_rebars_t_offset` i `main_rebars_b_offset` to wewnętrzne odległości dla głównych zbrojeń względem górnej i dolnej powierzchni struktury, odpowiednio.
* `dia_of_main_rebars` to średnica głównych zbrojeń.
* `number_angle_check` jeśli jest `True`, utworzy tyle głównych zbrojeń, ile podano w `number_angle_value`; jeśli `False`, utworzy główne zbrojenia pod kątem `number_spacing_value`, określonym w stopniach.
* `number_angle_value` określa liczbę głównych zbrojeń lub wartość kąta między głównymi zbrojeniami, w zależności od `number_angle_check`.

#### Przykład

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

### Edycja okrągłego zbrojenia kolumny

Właściwości prętów spiralnych i głównych można zmienić za pomocą poniższej funkcji:

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

* `Rebar` jest wcześniej utworzonym obiektem `ColumnReinforcement`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieFourRebars()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

#### Przykład

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_Circular/pl&oldid=1484532>"