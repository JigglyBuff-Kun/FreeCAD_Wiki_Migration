---
title: Std Wymiarowanie odległości
---
:::caution
To polecenie jest przestarzałe. Nie jest dostępne wwersja 1.0 i powyżej.Zamiast niego użyj narzędziaPomiary.
:::

|  |
| --- |
| Std: Wymiarowanie odległości |
| Lokalizacja w menu |
| Przybory → Wymiarowanie odległości |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Pomiary](/Std_Measure/pl "Std Measure/pl"),[Wymiarowanie liniowe](/Part_Measure_Linear/pl "Part Measure Linear/pl"), [Wymiarowanie](/Draft_Dimension/pl "Draft Dimension/pl") |
|  |

## Opis

Polecenie **Wymiarowanie odległości** tworzy obiekt odległość, który mierzy i wyświetla dystans między dwoma punktami.

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Std_MeasureDistance.svg) Wymiarowanie odległości.
   * Wybierz z menu opcję **Przybory → ![](/images/Std_MeasureDistance.svg) Zmierz odległość**.
2. Wybierz pierwszy punkt pomiarowy w dowolnym miejscu obiektu w oknie [widoku 3D](/3D_view/pl "3D view/pl").
3. Wybierz drugi punkt pomiarowy w dowolnym miejscu na obiekcie w oknie widoku 3D.
4. Kolejność wyboru punktów może mieć wpływ na położenie linii wymiarowej.
5. Opcjonalnie odwróć położenie linii wymiarowej poprzez zmianę właściwości WIDOK**Odbicie lustrzane** obiektu odległość.

## Uwagi

* Nie można używać narzędzi przyciągania środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") z tym poleceniem.
* Aby dodać wymiary do rysunków, użyj narzędzi wymiarowych środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").
* Aby uzyskać bardziej wszechstronne narzędzia pomiarowe, zainstaluj środowisko pracy ![](/images/Manipulator_workbench_icon.svg) [Manipulator](/Manipulator_Workbench/pl "Manipulator Workbench/pl") *(środowisko [zewnętrzne](/External_workbenches/pl "External workbenches/pl"))*.

## Właściwości

### Dane

Podstawa

* DANE**Etykieta**: domyślnie etykieta zawiera zmierzoną odległość, ale ta odległość nie jest aktualizowana, gdy P1 lub P2 zostaną później przestawione.

Pomiar

* DANE**P1**: pierwszy punkt wymiaru.
* DANE**P2**: drugi punkt wymiaru.
* DANE**Odległość**: *(tylko do odczytu)* zmierzona odległość pomiędzy P1 i P2.

### Widok

Podstawa

* WIDOK**Współczynnik odległości**: współczynnik ten, pomnożony przez zmierzoną odległość, określa przesunięcie linii wymiarowej.
* WIDOK**Rozmiar czcionki**: wysokość liter *(wysokość linii w pikselach)*.
* WIDOK**Odbicie lustrzane**: jeśli ustawimy wartość `PRAWDA`, to pozycja linii wymiarowej względem P1 i P2 zostanie odwrócona.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/pl&oldid=1462624>"