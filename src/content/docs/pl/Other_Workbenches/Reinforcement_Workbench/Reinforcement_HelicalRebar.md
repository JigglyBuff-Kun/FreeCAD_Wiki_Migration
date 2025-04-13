---
title: Zbrojenie Pręty zbrojeniowe spiralne
---
|  |
| --- |
| Zbrojenie: Pręty zbrojeniowe spiralne |
| Lokalizacja w menu |
| 3D / BIM → Narzędzia zbrojenia → Pręty zbrojeniowe spiralne |
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

Narzędzie **Pręty zbrojeniowe spiralne** pozwala użytkownikowi na utworzenie zestawu spiralnych prętów zbrojeniowych, wewnątrz obiektu [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").

To polecenie jest częścią [zewnętrznego środowiska pracy](/External_workbenches/pl "External workbenches/pl") [Zbrojenie](/Reinforcement_Workbench/pl "Reinforcement Workbench/pl"), które można zainstalować za pomocą ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") poprzez menu **Przybory → Menadżera dodatków → Zbrojenie**.

:   ![](/images/Arch_Rebar_Helical_example.png)

Jeden ciągły spiralny pręt zbrojeniowy wewnątrz [konstrukcji](/Arch_Structure/pl "Arch Structure/pl")

## Użycie

1. Wybierz dowolną ścianę wcześniej utworzonego obiektu ![](/images/Arch_Structure.svg) [konstrukcji](/Arch_Structure/pl "Arch Structure/pl").
2. Następnie wybierz ![](/images/Reinforcement_HelicalRebar.svg) **Pręty zbrojeniowe spiralne** z narzędzi zbrojenia.
3. Po lewej stronie ekranu pojawi się [panel zadań](/Task_panel/pl "Task panel/pl"), jak pokazano poniżej.
4. Wybierz żądaną orientację.
5. Wypełnij dane wejściowe, takie jak "Lewa otulina", "Prawa otulina", "Górna otulina", "Dolna otulina", "Przednia otulina", "Kąt wygięcia", "Współczynnik wygięcia", "Zaokrąglenie" i "Średnica" pręta zbrojeniowego.
6. Wybierz tryb dystrybucji "Ilość" lub "Rozstaw".
   * Jeśli wybrano "Rozstaw", użytkownik może również wybrać [Rozstaw niestandardowy](/Reinforcement_Custom_Spacing/pl "Reinforcement Custom Spacing/pl").
7. Wybierz zaznaczoną ścianę służy do weryfikacji lub zmiany powierzchni dla rozmieszczenia prętów zbrojeniowych.
8. Kliknij OK lub Zastosuj, aby wygenerować pręty zbrojeniowe.
9. Kliknij przycisk Anuluj, aby opuścić panel zadań.

![](/images/HelicalRebarDialog.png)

Panel zadań dla narzędzia.

## Właściwości

* DANE**Otulina boczna**: Odległość między prętem zbrojeniowym a zakrzywioną powierzchnią.
* DANE**Otulina górna**: Odległość między prętami zbrojeniowymi od górnej ściany konstrukcji.
* DANE**Otulina dolna**: Odległość między prętami zbrojeniowymi od dolnej powierzchni konstrukcji.
* DANE**Skok**: Skok spirali to wysokość jednego pełnego obrotu spirali, mierzona równolegle do osi spirali.
* DANE**Średnica**: Średnica pręta zbrojeniowego.

## Tworzenie skryptów

*Zobacz również:* [Skrypty Architektury](/Arch_API/pl "Arch API/pl"), [Skrypty Zbrojenia](/Reinforcement_API/pl "Reinforcement API/pl") oraz [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Pręty zbrojeniowe spiralne** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następującej funkcji:

```
Rebar = makeHelicalRebar(s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* Tworzy obiekt `Rebar` z podanego `structure`, który jest [konstrukcja architektury](/Arch_Structure/pl "Arch Structure/pl") i `facename`, który jest ścianą tej konstrukcji.
  + Jeśli nie podano `structure` ani `facename`, jako dane wejściowe zostanie przyjęta ściana wybrana przez użytkownika.
* `s_cover`, `b_cover` i `t_cover` są wewnętrznymi odległościami przesunięcia pręta zbrojeniowego względem powierzchni konstrukcji. Są to odpowiednio przesunięcia boczne, dolne i górne.
* `diameter` to średnica spirali zbrojenia wewnątrz konstrukcji.
* `pitch` to parametr określający, jak blisko lub daleko od siebie znajdują się poszczególne pętle spirali.

### Przykład

```
import FreeCAD, Draft, Arch, HelicalRebar

Circle = Draft.makeCircle(radius=250)
Structure = Arch.makeStructure(Circle)
Structure.ViewObject.Transparency = 80
FreeCAD.ActiveDocument.recompute()

Rebar = HelicalRebar.makeHelicalRebar(10, 50, 8, 50, 50, structure, "Face2")

```

### Edycja zbrojenia

Właściwości pręta zbrojeniowego można zmienić za pomocą poniższej funkcji:

```
editHelicalRebar(Rebar, s_cover, b_cover, diameter, t_cover, pitch, structure=None, facename=None)

```

* `Rebar` jest wcześniej utworzonym obiektem `HelicalRebar`.
* Pozostałe parametry są takie same jak wymagane przez funkcję `makeHelicalRebar()`.
* `structure` i `facename` mogą zostać pominięte, aby pręt zbrojeniowy pozostał w oryginalnej konstrukcji.

```
import HelicalRebar

HelicalRebar.editHelicalRebar(Rebar, 20, 100, 20, 20, 100)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Reinforcement_HelicalRebar/pl&oldid=1435811>"