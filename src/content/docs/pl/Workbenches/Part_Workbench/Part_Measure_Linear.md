---
title: Część Pomiary liniowe
---
:::caution
To polecenie jest przestarzałe. Nie jest dostępne wwersja 1.0 i powyżej.Zamiast niego użyj narzędziaPomiary.
:::

|  |
| --- |
| Część: Pomiar liniowy |
| Lokalizacja w menu |
| Pomiary → Pomiar liniowy |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Pomiar odległości](/Std_MeasureDistance/pl "Std MeasureDistance/pl"), [Wymiarowanie](/Draft_Dimension/pl "Draft Dimension/pl") |
|  |

## Opis

To polecenie mierzy odległość między dwoma wybranymi elementami topologicznymi *(wierzchołek, krawędź, ściana)* i wyświetla pomiary w oknie [widoku 3D](/3D_view/pl "3D view/pl"). Wyświetlana jest najmniejsza odległość między dwoma elementami i pomiary delta *(odległości równoległe do globalnych osi X, Y, Z)*.

Wygląd pomiarów można zmienić w [ustawieniach](/PartDesign_Preferences/pl#Pomiary "PartDesign Preferences/pl").

![](/images/MeasureLinear3D1.png)
![](/images/MeasureLinearDelta1.PNG)

## Użycie

1. Wybierz dowolną kombinację dwóch elementów: wierzchołków, krawędzi, ścian.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Part_Measure_Linear.svg) **Pomiar liniowy**.
   * Wybierz z menu opcję **Pomiary → ![](/images/Part_Measure_Linear.svg) Pomiar liniowy**.
3. Alternatywnie polecenie można uruchomić bez wcześniejszego wyboru. Otworzy się wówczas okno dialogowe wyboru w [Panelu zadań](/Task_panel/pl "Task panel/pl"). Widżet sterowania zawiera również przyciski do resetowania wyboru, przełączania wyświetlania pomiarów w oknie [widoku 3D](/3D_view/pl "3D view/pl") i usuwania wszystkich pomiarów.
4. Pomiary są automatycznie usuwane podczas zamykania dokumentu.

## Uwagi

* Nie można używać narzędzi przyciągania środowiska pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") z tym poleceniem.
* Aby dodać wymiary do rysunków, użyj narzędzi wymiarowych środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").
* Aby uzyskać bardziej wszechstronne narzędzia pomiarowe, zainstaluj środowisko pracy ![](/images/Manipulator_workbench_icon.svg) [Manipulator](/Manipulator_Workbench/pl "Manipulator Workbench/pl") *(środowisko [zewnętrzne](/External_workbenches/pl "External workbenches/pl"))*.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Measure_Linear/pl&oldid=1462628>"