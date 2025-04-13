---
title: Część Udoskonal kształt
---
|  |
| --- |
| Część: Udoskonal kształt |
| Lokalizacja w menu |
| Część → Utwórz kopię → Udoskonal kształt |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Part_RefineShape.svg) **Udoskonal kształt** tworzy parametryczne kopie o ulepszonym kształcie z wybranych obiektów. Usuwa niepotrzebne krawędzie z płaskich i cylindrycznych ścian.

![](/images/PartRefineShape_it.png)

Oryginał z 11 ścianami *(po lewej)* i udoskonalona kopia z 7 ścianami *(po prawej)*.

## Użycie

1. Wybierz jeden lub więcej obiektów.
2. Wybierz opcję w menu **Część → Utwórz kopię → ![](/images/Part_RefineShape.svg) Udoskonal kształt**.
3. Dla każdego obiektu tworzona jest wyczyszczona, parametryczna kopia.
4. Oryginalne obiekty zostają ukryte.

## Uwagi

* Polecenie to może być używane jako ostatni etap prac nad modelowaniem w celu oczyszczenia kształtów w tradycyjnym przepływie pracy [konstrukcyjnej geometrii bryły](/Constructive_solid_geometry/pl "Constructive solid geometry/pl").
* Polecenie to może pomóc w oczyszczeniu modelu przed zastosowaniem innej cechy, takiej jak np. [zaokrąglenie](/Part_Fillet/pl "Part Fillet/pl").
* To czyszczenie może powstrzymać drukarki 3D od drukowania niechcianych krawędzi, gdy model bryłowy zostanie wyeksportowany do formatu siatki.
* Polecenie to może być również użyte po przekonwertowaniu siatki na kształt *(narzędziem [Kształt z siatki](/Part_ShapeFromMesh/pl "Part ShapeFromMesh/pl"))*.
* Domyślnie polecenie to tworzy parametryczne *(połączone)* kopie. Istnieje parametr [dostrajania parametrów](/Fine-tuning/pl "Fine-tuning/pl") pozwalający zmienić ten tryb na kopie nieparametryczne. Więcej informacji na temat parametrycznego / nieparametrycznego zachowania kopii można znaleźć w tym poście na forum [[1]](https://forum.freecad.org/viewtopic.php?t=42993).
* Niektóre interesujące informacje o tym, co dzieje się z umiejscowieniem i jak uzyskać dostęp za pośrednictwem środowiska Python, można znaleźć w tym [temacie na forum](https://forum.freecad.org/viewtopic.php?t=77568#p675456).

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Część: Udoskonal kształt wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Refine

* DANE**Source** (`Link`): określa przyłączony kształt źródłowy.

## Tworzenie skryptów

Polecenie środowiska Python służące do dopracowania kształtu jest następujące:

```
shape.removeSplitter()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RefineShape/pl&oldid=1466874>"