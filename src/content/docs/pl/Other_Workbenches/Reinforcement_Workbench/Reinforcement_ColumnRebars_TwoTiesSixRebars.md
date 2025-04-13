---
title: Zbrojenie Zbrojenie słupa dwa ściągi sześć prętów zbrojeniowych
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
| [Zbrojenie słupów](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl"), [Zbrojenie kolumn](/Reinforcement_ColumnRebars_Circular/pl "Reinforcement ColumnRebars Circular/pl") |
|  |

## Opis

Narzędzie **Zbrojenie słupów** pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl"). Ta strona pokazuje dodatkowy przykład użycia tego narzędzia.

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

Dostępne są trzy przykłady użycia:

* [Prostokątny słup z pojedynczym wiązaniem](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl")
* [Dwa wiązania, sześć prętów zbrojeniowych, słup prostokątny *(patrz poniżej)*](#Użycie)
* [Kolumna](/Reinforcement_ColumnRebars_Circular/pl "Reinforcement ColumnRebars Circular/pl")

![](/images/Arch_Rebar_ColumnReinforcement_TwoTies_example.png)

Dwa strzemiona wzmacniające sześć prętów zbrojeniowych wewnątrz [konstrukcji](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji architektury](/Arch_Structure/pl "Arch Structure/pl").

2. Następnie wybierz ![](/images/Reinforcement_ColumnRebars.svg) [Zbrojenie słupów](/Reinforcement_ColumnRebars/pl "Reinforcement ColumnRebars/pl") z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Okno dialogowe dla narzędzia Zbrojenie słupów.

4. Z rozwijanego menu po prawej stronie wybierz typ zbrojenia słupa Dwa strzemiona Sześć prętów zbrojeniowych.

:   ![](/images/TwoTiesColumnReinforcementDialog_Ties.png)
:   Okno dialogowe dla zbrojenia słupa z dwoma strzemionami i sześcioma prętami zbrojeniowymi.

5. Podaj dane wejściowe dla danych związanych z więzami.

6. Kliknij Dalej, a okno dialogowe zostanie zaktualizowane w sposób pokazany poniżej.

:   ![](/images/TwoTiesColumnReinforcementDialog_MainRebars.png)
:   Okno dialogowe dla danych głównych prętów zbrojeniowych.

7. Wybierz żądany typ prętów zbrojeniowych i dane wypełnienia dla głównych prętów zbrojeniowych.

8. Kliknij OK lub Zastosuj, aby wygenerować zbrojenie kolumny.

9. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości

**Strzemiona:**

* DANE**Otulina lewa**: Odległość między lewym końcem opaski a lewą ścianą konstrukcji.
* DANE**Otulina prawa**: Odległość między prawym końcem opaski a prawą ścianą konstrukcji.
* DANE**Otulina górna**: Odległość między krawatem a górną ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między krawatem a dolną ścianą konstrukcji.
* DANE**Odsunięcie**: Odległość między opaską a górną/dolną ścianą konstrukcji.
* DANE**Średnica**: Średnica strzemiona.
* DANE**Kąt wygięcia**: Kąt wygięcia określa kąt na końcach strzemiona.
* DANE**Współczynnik rozciągnięcia**: Współczynnik rozciągnięcia określa długość końca opaski, wyrażoną jako wielokrotność średnicy.
* DANE**Ilość**: Liczba strzemion.
* DANE**Rozstaw**: Odległość między osiami każdego strzemiona.
* DANE**Kolejność strzemion**

**: Kolejność strzemion od góry do dołu w odniesieniu do widoku z przodu.**

**Główne pręty zbrojeniowe:** Pręty zbrojeniowe obecne w narożnikach strzemiona.

* DANE**Typ pręta**: Typ głównych prętów zbrojeniowych w kierunku X.
* DANE**Orientacja haka**: Orientacja haków w kształcie "L".
* DANE**Wydłużenie haka wzdłuż**: Kierunek przedłużenia haka.
* DANE**Wydłużenie haka**: Długość haka prętów zbrojeniowych typu "L".
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów zbrojeniowych typu "L", wyrażona w krotności średnicy.
* DANE**Odsunięcie górne**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Odsunięcie dolne**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Średnica**: Średnica głównych prętów zbrojeniowych.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie kolumn** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie Dwóch strzemion Sześciu prętów zbrojeniowych

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

* Tworzy obiekt `RebarGroup` z podanego `structure`, który jest [konstrukcją](/Arch_Structure "Arch Structure") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `l_cover_of_ties`, `r_cover_of_ties`, `t_cover_of_ties`, `b_cover_of_ties` i `offset_of_ties` są wewnętrznymi odległościami odsunięcia elementów wiązania względem powierzchni konstrukcji. Są to odpowiednio lewe, prawe, górne, dolne i przednie/tylne odsunięcia.
* `bent_angle_of_ties` definiuje kąt wierzchołka pętli zbrojenia elementów wiążących.
* `extension_factor_of_ties` definiuje długość końcówki pętli wzmacniającej elementów wiążących, wyrażoną jako wielokrotność średnicy elementów wiążących.
* `dia_of_ties` jest średnicą elementów wiążących.
* `number_spacing_check`, jeśli ma wartość `number_spacing_value`, utworzy tyle zestawów strzemion, ile podano w `number_spacing_value`; jeśli ma wartość `number_spacing_value`, utworzy dwa zestawy strzemion oddzielone wartością liczbową `number_spacing_value`.
* `number_spacing_value` określa liczbę dwóch zestawów strzemion lub wartość odstępu między zestawami, w zależności od wartości parametru `number_spacing_check`.
* `dia_of_main_rebars` to średnica głównych prętów zbrojeniowych.
* `t_offset_of_rebars` i `b_offset_of_rebars` to wewnętrzne odsunięcia głównych prętów zbrojeniowych odpowiednio względem górnej i dolnej powierzchni konstrukcji.
* `main_rebars_type` to typ głównych prętów zbrojeniowych; może przyjmować wartość `"StraightRebar"` lub `"LShapeRebar"`.
* `hook_orientation` określa orientację haka o kształcie L. Może mieć wartość `"Top Inside"` lub `"LShapeRebar"`: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` lub `"Bottom Left"`.
* `hook_extend_along` określa kierunek przedłużenia haka. Może przyjmować wartość `"x-axis"` lub `"y-axis"`.
* `l_rebar_rounding` to parametr określający promień gięcia głównych prętów zbrojeniowych w kształcie "L", wyrażony jako wielokrotność średnicy.
* `hook_extension` to długość haka prętów zbrojeniowych w kształcie "L".
* `ties_sequence` to kolejność strzemion od góry do dołu w odniesieniu do widoku z przodu; może to być `("Tie1", "Tie2")` lub `("Tie2", "Tie1")`.

#### Przykład

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

### Edycja Dwóch strzemion Sześciu prętów zbrojeniowych

Właściwości strzemion i prętów zbrojeniowych można zmienić za pomocą poniższej funkcji:

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

* `Rebar` jest wcześniej utworzonym obiektem `ColumnReinforcement`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieFourRebars()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

#### Przykład

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars_TwoTiesSixRebars/pl&oldid=1440371>"