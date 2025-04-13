---
title: Architektura Zbrojenie słupów
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
| [Zbrojenie słupa dwa ściągi sześć prętów zbrojeniowych](/Reinforcement_ColumnRebars_TwoTiesSixRebars/pl "Reinforcement ColumnRebars TwoTiesSixRebars/pl"), [Zbrojenie okrągłych słupów](/Reinforcement_ColumnRebars_Circular/pl "Reinforcement ColumnRebars Circular/pl") |
|  |

## Opis

Narzędzie **Zbrojenie słupa** pozwala użytkownikowi na tworzenie prętów zbrojeniowych wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") Stopy.

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

Dostępne są trzy przykłady użycia:

* [Prostokątna kolumna z pojedynczym ściągiem *(patrz poniżej)*](#Użycie)
* [Zbrojenie słupa dwa ściągi sześć prętów zbrojeniowych](/Reinforcement_ColumnRebars_TwoTiesSixRebars/pl "Reinforcement ColumnRebars TwoTiesSixRebars/pl")
* [Zbrojenie okrągłych słupów](/Reinforcement_ColumnRebars_Circular/pl "Reinforcement ColumnRebars Circular/pl")

![](/images/Arch_Rebar_ColumnReinforcement_example.png)

Pojedyncze wzmocnienie wewnątrz [słupa](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji architektury](/Arch_Structure/pl "Arch Structure/pl").

2. Następnie wybierz ![](/images/Reinforcement_ColumnRebars.svg) Zbrojenie słupów z narzędzi prętów zbrojeniowych.

3. Na ekranie pojawi się okno dialogowe, jak pokazano poniżej.

:   ![](/images/ColumnReinforcementDialog_Ties.png)
:   Okno dialogowe dla narzędzia Zbrojenie słupów.

4. Wybierz żądany typ zbrojenia słupa.

5. Podaj dane wejściowe dla danych związanych z więzami.

6. Kliknij Dalej, a okno dialogowe zostanie zaktualizowane w sposób pokazany poniżej.

:   ![](/images/ColumnReinforcementDialog_MainRebars.png)
:   Okno dialogowe dla danych głównych prętów zbrojeniowych.

7. Wybierz żądany typ prętów zbrojeniowych i dane wypełnienia dla głównych prętów zbrojeniowych.

8. Kliknij Dalej, a okno dialogowe zostanie zaktualizowane w sposób pokazany poniżej.

:   ![](/images/ColumnReinforcementDialog_XDirRebars.png)
:   Okno dialogowe dla danych XDirection prętów zbrojeniowych.

9. Wybierz żądany typ pręta zbrojeniowego i dane wypełnienia dla prętów zbrojeniowych w kierunku X.

10. Kliknij Dalej, a okno dialogowe zostanie zaktualizowane w sposób pokazany poniżej.

:   ![](/images/ColumnReinforcementDialog_YDirRebars.png)
:   Okno dialogowe dla danych YDirection prętów zbrojeniowych.

9. Wybierz żądany typ pręta zbrojeniowego i dane wypełnienia dla prętów zbrojeniowych w kierunku Y.

12. Kliknij OK lub Zastosuj, aby wygenerować zbrojenie słupa.

13. Kliknij Anuluj, aby zamknąć okno dialogowe.

## Właściwości

**Strzemiona:**

* DANE**Otulina lewa**: Odległość między lewym końcem opaski a lewą ścianą konstrukcji.
* DANE**Otulina prawa**: Odległość między prawym końcem opaski a prawą ścianą konstrukcji.
* DANE**Otulina górna**: Odległość między krawatem a górną ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między krawatem a dolną ścianą konstrukcji.
* DANE**Odsunięcie**: Odległość między opaską a górną/dolną ścianą konstrukcji.
* DANE**Średnica**: Średnica opaski.
* DANE**Kąt wygięcia**: Kąt wygięcia określa kąt na końcach cięgna.
* DANE**Współczynnik rozciągnięcia**: Współczynnik rozciągnięcia określa długość końca opaski, wyrażoną jako wielokrotność średnicy.
* DANE**Ilość**: Liczba strzemion.
* DANE**Rozstaw**: Odległość między osiami każdego strzemiona.

**Główne pręty zbrojeniowe:** Pręty zbrojeniowe obecne w narożnikach strzemiona.

* DANE**Typ pręta**: Typ głównych prętów zbrojeniowych.
* DANE**Orientacja haka**: Orientacja haków w kształcie litery LS.
* DANE**Wydłużenie haka wzdłuż**: Kierunek przedłużenia haka.
* DANE**Przedłużenie haka**: Długość haka prętów zbrojeniowych w kształcie "L".
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów zbrojeniowych w kształcie "L", wyrażona w krotności średnicy.
* DANE**Odsunięcie górne**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Odsunięcie dolne**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Średnica**: Średnica głównych prętów zbrojeniowych.

**Pręty zbrojeniowe pomocnicze w kierunku X:** Pręty zbrojeniowe wzdłuż kierunku X z wyjątkiem głównych prętów zbrojeniowych.

* DANE**Typ pręta**: Typ głównych prętów zbrojeniowych w kierunku X.
* DANE**Orientacja haka**: Orientacja haków w kształcie "L".
* DANE**Wydłużenie haka wzdłuż**: Kierunek przedłużenia haka.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów zbrojeniowych w kształcie "L", wyrażona w krotności średnicy.
* DANE**Odsunięcie górne**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Odsunięcie dolne**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Ilość#Średnica**: Ilość # Średnica zestawu prętów zbrojeniowych w kierunku X.

**Pręty zbrojeniowe pomocnicze w kierunku Y:** Pręty zbrojeniowe wzdłuż kierunku Y z wyjątkiem głównych prętów zbrojeniowych.

* DANE**Typ pręta**: Typ głównych prętów zbrojeniowych w kierunku X.
* DANE**Orientacja haka**: Orientacja haków w kształcie "L".
* DANE**Wydłużenie haka wzdłuż**: Kierunek przedłużenia haka.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów zbrojeniowych w kształcie "L", wyrażona w krotności średnicy.
* DANE**Odsunięcie górne**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Odsunięcie dolne**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Ilość#Średnica**: Ilość # Średnica zestawu prętów zbrojeniowych w kierunku Y.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Zbrojenie słupów** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

### Tworzenie pojedynczego strzemiona dla czterech prętów zbrojeniowych

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

* Tworzy obiekt `RebarGroup` z podanego `structure`, który jest [konstrukcją architektury](/Arch_Structure "Arch Structure") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` i `offset_of_tie` są wewnętrznymi odległościami przesunięcia dla elementów wiązania względem powierzchni konstrukcji. Są to odpowiednio lewy, prawy, górny, dolny i przedni/tylny offset.
* `bent_angle` definiuje kąt wierzchołka pętli zbrojenia.
* `extension_factor` definiuje długość końcówki pętli wzmacniającej, wyrażoną jako wielokrotność średnicy.
* `dia_of_tie` jest średnicą cięgna.
* `number_spacing_check` jeśli ma wartość `number_spacing_value` utworzy tyle strzemion ile podano w `number_spacing_value`, Jeśli ma wartość `number_spacing_value` utworzy strzemiona oddalone od siebie o wartość liczbową `number_spacing_value`.
* `number_spacing_value` określa liczbę strzemion lub wartość odstępu między nimi, w zależności od wartości parametru `number_spacing_check`.
* `dia_of_rebars` to średnica głównych prętów zbrojeniowych.
* `t_offset_of_rebars` i `b_offset_of_rebars` to wewnętrzne odległości odsunięcia głównych prętów zbrojeniowych odpowiednio względem górnej i dolnej powierzchni konstrukcji.
* `rebar_type` to typ głównych prętów zbrojeniowych; może to być `"StraightRebar"` lub `"LShapeRebar"`.
* `hook_orientation` określa orientację haka o kształcie L. Może mieć wartość `"Góra wewnątrz"` lub `"Pręt w kształcie L"`: `"Góra wewnątrz"`, `"Góra na zewnątrz"`, `"Dół wewnątrz"`, `"Dół na zewnątrz"`, `"Góra po prawej"`, `"Góra po lewej"`, `"Dół po prawej"` lub `"Dół po lewej"`.
* `hook_extend_along` określa kierunek przedłużenia haka. Może mieć wartość `"x-axis"` lub `"y-axis"`.
* `l_rebar_rounding` to parametr określający promień gięcia głównych prętów zbrojeniowych w kształcie litery L, wyrażony jako wielokrotność średnicy.
* `hook_extension` to długość haka prętów zbrojeniowych w kształcie "L".

#### Przykład

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

### Tworzenie pojedynczego strzemiona dla wielu prętów zbrojeniowych

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

* Tworzy obiekt `RebarGroup` z podanego `structure`, który jest [konstrukcją architektury](/Arch_Structure "Arch Structure") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `l_cover_of_tie`, `r_cover_of_tie`, `t_cover_of_tie`, `b_cover_of_tie` i `offset_of_tie` są wewnętrznymi odległościami przesunięcia dla elementów wiązania względem powierzchni struktury. Są to odpowiednio lewy, prawy, górny, dolny i przedni/tylny offset.
* `bent_angle` definiuje kąt wierzchołka pętli zbrojenia.
* `extension_factor` definiuje długość końcówki pętli wzmacniającej, wyrażoną jako wielokrotność średnicy.
* `dia_of_tie` jest średnicą cięgna.
* `number_spacing_check` jeśli ma wartość `number_spacing_value` utworzy tyle cięgien ile podano w \* `number_spacing_value` określa liczbę strzemion lub wartość odstępu między nimi, w zależności od wartości parametru `number_spacing_check`.
* `dia_of_main_rebars` to średnica głównych prętów zbrojeniowych.
* `main_rebars_t_offset` i `main_rebars_b_offset` to wewnętrzne odległości odsunięcia dla głównych prętów zbrojeniowych w odniesieniu odpowiednio do górnej i dolnej powierzchni konstrukcji.
* `main_rebars_type` to typ głównych prętów zbrojeniowych; może to być `"StraightRebar"` lub `"LShapeRebar"`.
* `main_hook_orientation` określa orientację głównego haka o kształcie L. Może mieć wartość `"Top Inside"` lub `"LShapeRebar"`: `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` lub `"Bottom Left"`.
* `main_hook_extend_along` określa kierunek przedłużenia haka głównego. Może przyjąć wartość `"x-axis"` lub `"y-axis"`.
* `l_main_rebar_rounding` to parametr określający promień gięcia głównych prętów zbrojeniowych w kształcie L, wyrażony jako wielokrotność średnicy.
* `main_hook_extension` to długość haka głównych prętów zbrojeniowych typu L.
* `sec_rebars_t_offset` i `sec_rebars_b_offset` to odpowiednio krotki (xdir\_rebars\_t\_offset, ydir\_rebars\_t\_offset) i (xdir\_rebars\_b\_offset, ydir\_rebars\_b\_offset), które definiują wewnętrzne odległości odsunięcia dla drugorzędnych prętów zbrojeniowych w kierunku x i y w odniesieniu odpowiednio do górnej i dolnej powierzchni konstrukcji.
* `sec_rebars_number_diameter` to krotka (xdir\_rebars\_number\_diameter, ydir\_rebars\_number\_diameter), która definiuje odpowiednio zestaw wartości liczbowych średnic drugorzędnych prętów zbrojeniowych w kierunku x i y.
* `sec_rebars_type` to krotka (xdir\_rebars\_type, ydir\_rebars\_type), która określa typ drugorzędnych prętów zbrojeniowych odpowiednio w kierunku x i y; może mieć `"StraightRebar"` lub `"LShapeRebar"` jako typ pręta zbrojeniowego.
* `sec_hook_orientation` to krotka (xdir\_hook\_orientation, ydir\_hook\_orientation), która określa orientację drugorzędnego haka L w kierunku x i y; może przyjąć wartość `"Top Inside"`, `"Top Outside"`, `"Bottom Inside"`, `"Bottom Outside"`, `"Top Right"`, `"Top Left"`, `"Bottom Right"` lub `"Bottom Left"` jako hook\_orientation.
* `l_sec_rebar_rounding` to krotka (l\_xdir\_rebar\_rounding, l\_ydir\_rebar\_rounding), która określa promień gięcia drugorzędnych prętów zbrojeniowych typu L w kierunku x i y, wyrażony jako wielokrotność średnicy odpowiednio prętów zbrojeniowych typu L w kierunku x i y.
* `sec_hook_extension` to krotka (xdir\_hook\_extension, ydir\_hook\_extension), która określa długość haka drugorzędnych prętów zbrojeniowych typu L w kierunku x i y.

#### Przykład

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

### Edycja pojedynczego strzemiona z czterema prętami zbrojeniowymi

Właściwości strzemion i prętów zbrojeniowych można zmienić za pomocą poniższej funkcji:

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

* `Rebar` jest wcześniej utworzonym obiektem `ColumnReinforcement`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieFourRebars()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

#### Przykład

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

### Edycja pojedynczego strzemiona dla wielu prętów zbrojeniowych

Właściwości strzemion i prętów zbrojeniowych można zmienić za pomocą poniższej funkcji:

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

* `rebar_group` jest wcześniej utworzonym obiektem `ColumnReinforcement`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeSingleTieMultipleRebars()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

#### Przykład

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_ColumnRebars/pl&oldid=1435788>"