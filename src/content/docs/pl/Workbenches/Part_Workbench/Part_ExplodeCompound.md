---
title: Część Rozbij kształt złożony
---
|  |
| --- |
| Część: Rozbij kształt złożony |
| Lokalizacja w menu |
| Część → Złożenie → Rozbij kształt złożony |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [Utwórz kształt złożony](/Part_Compound/pl "Part Compound/pl"), [Rozbij kształt](/Draft_Downgrade/pl "Draft Downgrade/pl") |
|  |

## Opis

Narzędzie ![](/images/Part_ExplodeCompound.svg) **Rozbij kształt złożony** dzieli zespół kształtów, tak aby każdy zawarty kształt (podrzzędny) był dostępny jako oddzielny obiekt w drzewie modelu. Kształty potomne są automatycznie umieszczane w [Grupie](/Std_Group/pl "Std Group/pl"), jeśli jest ich więcej niż jeden.

Jest to funkcja półparametryczna: kształty obiektów podrzędnych będą aktualizowane wraz ze zmianą zespołu źródłowego, ale jeśli liczba obiektów podrzędnych w zespole ulegnie zmianie, w rozbiciu będzie brakować niektórych kształtów lub nadmiarowe obiekty będą w stanie błędu.

Rozmieszczenie wyodrębnionych kształtów jest zgodne z rozmieszczeniem oryginałów oraz właściwością *Umiejscowienie* każdego elementu podrzędnego.

Narzędzie rozbija również kształty niezłożone na ich składniki niższego poziomu: Złożenia na bryły, bryły na powłoki, powłoki na ściany, ściany na polilinie, polilinie na krawędzie, krawędzie na wierzchołki.

## Użycie

1. Wybierz jeden kształt złożony.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Part_ExplodeCompound.svg) Rozbij kształt złożony.
   * Wybierz opcję **Część → Złożenie → Rozbij kształt złożony** z menu.

## Zastosowanie

* Poprawianie pozycji kształtów utworzonych przez ![](/images/Draft_OrthoArray.svg) [Szyk ortogonalny](/Draft_OrthoArray/pl "Draft OrthoArray/pl").
* Uzyskanie podzielonych kawałków z wyniku operacji ![](/images/Part_Slice.svg) [Krojenia](/Part_Slice/pl "Part Slice/pl") i ![](/images/Part_Cut.svg) [Wycięcia](/Part_Cut/pl "Part Cut/pl").
* Uzyskiwanie indywidualnych konturów z wielokonturowych szkiców i ścian.
* Uzyskiwanie samej bryły z bryły w złożeniu, do użytku w środowisku pracy ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ExplodeCompound/pl&oldid=1497006>"