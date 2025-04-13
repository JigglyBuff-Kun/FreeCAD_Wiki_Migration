---
title: Zbrojenie Pręty zbrojeniowe typu U
---
|  |
| --- |
| BIM: Pręty zbrojeniowe typu U |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Pręty zbrojeniowe typu U |
| Środowisko pracy |
| [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie **Pręty zbrojeniowe typu U** pozwala użytkownikowi na utworzenie zestawu prętów zbrojeniowych w kształcie U, wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

![](/images/Arch_Rebar_UShape_example.png)

Dwa zestawy prętów zbrojeniowych w kształcie U, wewnątrz [konstrukcji](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").
2. Następnie wybierz ![](/images/Reinforcement_UShapeRebar.svg) **Pręty zbrojeniowe typu U** z narzędzi zbrojenia.
3. Po lewej stronie ekranu pojawi się [panel zadań](/Task_panel/pl "Task panel/pl"), jak pokazano poniżej.
4. Wybierz żądaną orientację.
5. Wypełnij dane wejściowe, takie jak "Lewa otulina", "Prawa otulina", "Górna otulina", "Dolna otulina", "Przednia otulina", "Kąt wygięcia", "Współczynnik wygięcia", "Zaokrąglenie" i "Średnica" pręta zbrojeniowego.
6. Wybierz tryb dystrybucji "Ilość" lub "Odstępy".
   * Jeśli wybrano "Rozstaw", użytkownik może również wybrać [niestandardowy odstęp](/Reinforcement_Custom_Spacing/pl "Reinforcement Custom Spacing/pl").
7. Wybierz zaznaczoną ścianę służy do weryfikacji lub zmiany powierzchni dla rozmieszczenia prętów zbrojeniowych.
8. Kliknij OK lub Zastosuj, aby wygenerować pręty zbrojeniowe.
9. Kliknij przycisk Anuluj, aby opuścić panel zadań.

![](/images/UShapeDialog.png)

Panel zadań dla narzędzia.

## Właściwości

* DANE**Orientacja**: Decyduje o orientacji pręta zbrojeniowego (jak dół, góra, prawo i lewo).
* DANE**Otulina przednia**: Odległość między prętem zbrojeniowym a wybraną powierzchnią czołową.
* DANE**Otulina prawa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**Otulina lewa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji: Odległość między lewym końcem pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między prętami zbrojeniowymi a dolną ścianą konstrukcji.
* DANE**Otulina górna**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów, wyrażona jako wielokrotność średnicy.
* DANE**Ilość**: Ilość prętów zbrojeniowych.
* DANE**Odstęp**: Odległość między osiami każdego pręta.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Pręty zbrojeniowe typu U** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Rebar = makeUShapeRebar(f_cover, b_cover, r_cover, l_cover,
                        diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                        structure=None, facename=None)

```

* Tworzy obiekt `Rebar` z podanej `structure`, która jest [konstrukcją architektury](/Arch_Structure/pl "Arch Structure/pl") i `facename`, która jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ścina wybrana przez użytkownika.
* `f_cover`, `b_cover`, `r_cover`, `l_cover` i `t_cover` są wewnętrznymi odległościami przesunięcia dla elementów zbrojenia względem powierzchni konstrukcji. Są to odpowiednio przednie, dolne, prawe, lewe i górne przesunięcia.
* `diameter` to średnica prętów zbrojeniowych wewnątrz konstrukcji.
* `rounding` to parametr określający promień gięcia prętów zbrojeniowych.
* `amount_spacing_check` jeśli ma wartość `True`, utworzy tyle prętów zbrojeniowych, ile podano w `amount_spacing_value`. Jeśli ma wartość `False`, utworzy pręty zbrojeniowe oddzielone wartością liczbową `amount_spacing_value`.
* `amount_spacing_value` określa liczbę prętów zbrojenia lub wartość odstępu między nimi, w zależności od `amount_spacing_check`.
* `orientation` określa orientację pręta zbrojeniowego. Może przyjmować wartości `"Dół"`, `"Góra"`, `"Prawa"` lub `"Lewa"`.

### Przykład

```
import FreeCAD, Arch, UShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=400)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = UShapeRebar.makeUShapeRebar(50, 20, 20, 20,
                                    8, 50, 4, True, 6, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = UShapeRebar.makeUShapeRebar(50, 50, 20, 20,
                                     8, 50, 4, True, 6, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edycja zbrojenia

Właściwości pręta zbrojeniowego można zmienić za pomocą poniższej funkcji:

```
editUShapeRebar(Rebar, f_cover, b_cover, r_cover, l_cover,
                diameter, t_cover, rounding, amount_spacing_check, amount_spacing_value, orientation,
                structure=None, facename=None)

```

* `Rebar` jest wcześniej utworzonym obiektem `StraightRebar`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

```
import UShapeRebar

UShapeRebar.editUShapeRebar(Rebar, 50, 50, 20, 20,
                            16, 20, 5, True, 5, "Top")

UShapeRebar.editUShapeRebar(Rebar2, 70, 50, 20, 20,
                            16, 70, 5, True, 5, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_UShapeRebar/pl&oldid=1435825>"