---
title: Zbrojenie Pręty zbrojeniowe odgięte
---
|  |
| --- |
| Zbrojenie: Pręty zbrojeniowe wygięte |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Pręty zbrojeniowe wygięte |
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

Narzędzie **Pręty zbrojeniowe odgięte** pozwala użytkownikowi na utworzenie zestawu prętów zbrojeniowych odgiętych, wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

![](/images/Arch_Rebar_BentShape_example.png)

Dwa zestawy odgiętych prętów zbrojeniowych wewnątrz [konstrukcji](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl") obiektu.
2. Następnie wybierz ![](/images/Reinforcement_BentShapeRebar.svg) **Pręty zbrojeniowe odgięte** z narzędzi prętów zbrojeniowych.
3. Po lewej stronie ekranu pojawi się [panel zadań](/Task_panel/pl "Task panel/pl"), jak pokazano poniżej.
4. Wybierz żądaną orientację.
5. Wypełnij dane wejściowe, takie jak "Lewa otulina", "Prawa otulina", "Górna otulina", "Dolna otulina", "Przednia otulina", "Kąt wygięcia", "Współczynnik wygięcia", "Zaokrąglenie" i "Średnica" pręta zbrojeniowego.
6. Wybierz tryb dystrybucji "Ilość" lub "Rozstaw".
   * Jeśli wybrano "Rozstaw", użytkownik może również wybrać [Rozstaw niestandardowy](/Reinforcement_Custom_Spacing/pl "Reinforcement Custom Spacing/pl").
7. Wybierz zaznaczoną ścianę służy do weryfikacji lub zmiany powierzchni dla rozmieszczenia prętów zbrojeniowych.
8. Kliknij OK lub Zastosuj, aby wygenerować pręty zbrojeniowe.
9. Kliknij przycisk Anuluj, aby opuścić panel zadań.

![](/images/BentShapeDialog.png)

Panel zadań dla narzędzia.

## Właściwości

Otulina\* DANE**Orientacja**: Decyduje o orientacji pręta zbrojeniowego *(jak dół, góra, prawo i lewo)*.

* DANE**Otulina przednia**: Odległość między prętem zbrojeniowym a wybraną powierzchnią czołową.
* DANE**Otulina prawa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**Otulina lewa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji: \* DANE**Zaokrąglenie**: Odległość między lewym końcem pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między prętami zbrojeniowymi a dolną ścianą konstrukcji.
* DANE**Otulina górna**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Zaokrąglenie**: Wartość zaokrąglenia stosowana do narożników prętów, wyrażona jako wielokrotność średnicy.
* DANE**Ilość**: Ilość prętów zbrojeniowych.
* DANE**Rozstaw**: Odległość między osiami każdego pręta.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Pręty zbrojeniowe odgięte** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Rebar = makeBentShapeRebar(f_cover, b_cover, l_cover, r_cover,
                           diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation="Bottom",
                           structure=None, facename=None)

```

* Tworzy obiekt `Rebar` z podanego `structure`, który jest [konstrukcją architektury](/Arch_Structure/pl "Arch Structure/pl") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `f_cover`, `b_cover`, `l_cover`, `r_cover` i `t_cover` są wewnętrznymi odległościami przesunięcia dla elementów zbrojenia względem powierzchni konstrukcji. Są to odpowiednio przednie, dolne, lewe, prawe i górne przesunięcia.
* `diameter` to średnica prętów zbrojeniowych wewnątrz konstrukcji.
* `rounding` to parametr określający promień gięcia środkowych prętów zbrojenia.
* `bentLength` i `bentAngle` definiują długość końcówki prętów zbrojeniowych i kąt zgięcia od prętów środkowych.
* `amount_spacing_check` jeśli ma wartość `True` utworzy tyle prętów zbrojeniowych ile podano w `amount_spacing_value`; jeśli ma wartość `False` utworzy pręty zbrojeniowe oddzielone wartością liczbową `amount_spacing_value`.
* `amount_spacing_value` określa liczbę prętów zbrojenia lub wartość odstępu między nimi, w zależności od `amount_spacing_check`.
* `orientation` określa orientację pręta zbrojeniowego; może to być `"Dół"`, `"Góra"`, `"Lewa"` lub `"Prawa"`.

### Przykład

```
import FreeCAD, Arch, BentShapeRebar

Structure = Arch.makeStructure(length=1000, width=1000, height=100)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = BentShapeRebar.makeBentShapeRebar(50, 20, 20, 20,
                                          8, 40, 100, 135, 2, True, 4, "Bottom", Structure, "Face4")
Rebar.ViewObject.ShapeColor = (0.9, 0.0, 0.0)

Rebar2 = BentShapeRebar.makeBentShapeRebar(50, 40, 20, 20,
                                           8, 20, 100, 135, 2, True, 4, "Bottom", Structure, "Face6")
Rebar2.ViewObject.ShapeColor = (0.0, 0.0, 0.9)

```

### Edycja zbrojenia

Właściwości pręta zbrojeniowego można zmienić za pomocą poniższej funkcji:

```
editBentShapeRebar(Rebar, f_cover, b_cover, l_cover, r_cover,
                   diameter, t_cover, bentLength, bentAngle, rounding, amount_spacing_check, amount_spacing_value, orientation,
                   structure=None, facename=None)

```

* `Rebar` jest wcześniej utworzonym obiektem `BentShapeRebar`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeUShapeRebar()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

```
import BentShapeRebar

BentShapeRebar.editBentShapeRebar(Rebar, 50, 20, 20, 20,
                                  12, 20, 100, 155, 2, True, 6, "Top")

BentShapeRebar.editBentShapeRebar(Rebar2, 50, 35, 20, 20,
                                  12, 35, 100, 155, 2, True, 6, "Top")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_BentShapeRebar/pl&oldid=1435786>"