---
title: Zbrojenie Strzemiona zbrojeniowe
---
|  |
| --- |
| Zbrojenie: Strzemiona |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Strzemiona |
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

Narzędzie **Strzemiona zbrojeniowe** pozwala użytkownikowi na utworzenie zestaw strzemion wzmacniających wewnątrz obiektu [konstrukcyjnego](/Arch_Structure/pl "Arch Structure/pl").

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

![](/images/Arch_Rebar_Stirrup_example.png)

Jeden zestaw strzemion wzmacniających wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").
2. Następnie wybierz ![](/images/Reinforcement_StirrupRebar.svg) Strzemiona z narzędzi zbrojenia.
3. Po lewej stronie ekranu pojawi się [Panel zadań](/Task_panel/pl "Task panel/pl"), jak pokazano poniżej.
4. Wybierz żądaną orientację.
5. Wypełnij dane wejściowe, takie jak "Lewa otulina", "Prawa otulina", "Górna otulina", "Dolna otulina", "Przednia otulina", "Kąt wygięcia", "Współczynnik wygięcia", "Zaokrąglenie" i "Średnica" pręta zbrojeniowego.
6. Wybierz tryb dystrybucji "Ilość" lub "Rozstaw".
   * Jeśli wybrano "Rozstaw", użytkownik może również wybrać [rozstaw niestandardowy](/Reinforcement_Custom_Spacing/pl "Reinforcement Custom Spacing/pl").
7. Wybierz zaznaczoną ścianę służy do weryfikacji lub zmiany powierzchni dla rozmieszczenia prętów zbrojeniowych.
8. Kliknij OK lub Zastosuj, aby wygenerować pręty zbrojeniowe.
9. Kliknij przycisk Anuluj, aby opuścić panel zadań.

![](/images/StirrupDialog.png)

Panel zadań dla narzędzia.

## Właściwości

* DANE**Otulina przednia**: Odległość między prętem zbrojeniowym a wybraną powierzchnią.
* DANE**Otulina prawa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji.
* DANE**Otulina lewa**: Odległość między prawym końcem pręta zbrojeniowego a prawą ścianą konstrukcji: Odległość między lewym końcem pręta zbrojeniowego a lewą ścianą konstrukcji.
* DANE**Otulina dolna**: Odległość między prętami zbrojeniowymi a dolną ścianą konstrukcji.
* DANE**Otulina górna**: Odległość między prętami zbrojeniowymi od górnej powierzchni konstrukcji.
* DANE**Kąt wygięcia**: Kąt wygięcia określa kąt na końcach strzemion.
* DANE**Współczynnik wygięcia**: Współczynnik wygięcia określa długość końca strzemienia.
* DANE**Ilość**: Ilość prętów zbrojeniowych.
* DANE**Rozstaw**: Odległość między osiami każdego pręta.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Strzemiona** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Rebar = makeStirrup(l_cover, r_cover, t_cover, b_cover, f_cover,
                    bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
                    structure=None, facename=None)

```

* Tworzy obiekt `Rebar` z podanego `structure`, który jest [Arch Structure](/Arch_Structure "Arch Structure") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `l_cover`, `r_cover`, `t_cover`, `b_cover` i `f_cover` są wewnętrznymi odległościami przesunięcia dla elementów zbrojenia względem powierzchni konstrukcji. Są to odpowiednio lewy, prawy, górny, dolny i przedni offset.
* `diameter` to średnica prętów zbrojeniowych wewnątrz konstrukcji.
* `rounding` to parametr określający promień gięcia prętów zbrojeniowych podczas tworzenia pętli.
* `bentLength` i `bentAngle` definiują długość i kąt końcówki pętli zbrojenia.
* `amount_spacing_check` jeśli ma wartość `True` utworzy tyle pętli zbrojenia ile podano w `amount_spacing_value`; jeśli ma wartość `False` utworzy pętle zbrojenia oddzielone wartością liczbową `amount_spacing_value`.
* `amount_spacing_value` określa liczbę pętli zbrojenia lub wartość odstępu między nimi, w zależności od parametru `amount_spacing_check`.

### Przykład

```
import Draft, Arch, Stirrup

# It doesn't work if the structure is not based on a face
# Structure = Arch.makeStructure(length=1000, width=400, height=400)

Rect = Draft.makeRectangle(400, 400)
Structure = Arch.makeStructure(Rect, height=1600)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = Stirrup.makeStirrup(20, 20, 20, 20, 20,
                            115, 4, 8, 2, True, 10, Structure, "Face6")

```

### Edycja zbrojenia

Właściwości pręta zbrojeniowego można zmienić za pomocą poniższej funkcji:

```
editStirrup(Rebar, l_cover, r_cover, t_cover, b_cover, f_cover,
            bentAngle, bentFactor, diameter, rounding, amount_spacing_check, amount_spacing_value,
            structure=None, facename=None)

```

* `Rebar` jest wcześniej utworzonym obiektem `StraightRebar`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeStirrup()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej strukturze.

```
import Stirrup

Stirrup.editStirrup(Rebar, 20, 20, 20, 20, 50,
                    100, 4, 14, 8, True, 8)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_StirrupRebar/pl&oldid=1435817>"