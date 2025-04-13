---
title: Poradnik dla Środowiska pracy Raytracing
---
## Środowisko pracy Raytracing

:::caution
ŚrodowiskoRaytracingzostało zastąpione przez noweśrodowisko Render, które ma je zastąpić. Środowisko pracy Render może być zainstalowane poprzezMenadżer dodatków. Informacja tutaj jest podana, ponieważ domyślnie FreeCAD jest nadal dostarczany(od wersji 0.19-24276)ze środowiskiem Raytracing, i ponieważ nowy moduł powinien w zasadzie działać w ten sam sposób.
:::

|  |
| --- |
| Ćwiczenie |
| Temat |
| Raytracing |
| Poziom trudności |
| Początkujący |
| Czas wykonania |
| 10 minut + czas renderowania |
| Autorzy |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Wersja FreeCAD |
| 0.16 lub nowszy |
| Pliki z przykładami |
|  |
| Zobacz również |
| *-* |
|  |

## Wprowadzenie

Ten poradnik ma na celu zapoznanie czytelnika z podstawowym przepływem pracy w środowisku Raytracing, jak również z większością narzędzi, które są dostępne do tworzenia wyrenderowanego obrazu. **Uwaga**, środowisko Raytracing jest stopniowo zastępowane nowszym [środowisku Render](https://github.com/FreeCAD/FreeCAD-render), dostępnym poprzez [Menedżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl").

![](/images/Raytracing_tutorial_result.png)

## Wymagania

* FreeCAD w wersji 0.16 lub wyższej.
* [POV-Ray](http://www.povray.org/) i/lub [LuxRender](https://luxcorerender.org/) jest zainstalowany w systemie.
* W przypadku POV-Ray, nie wystarczy mieć tylko binarny plik wykonywalny na miejscu, ale również **wymagana** jest instalacja **wspierających plików**. W Ubuntu, są one dostarczane przez pakiet z flagą Recommends [povray-includes](https://packages.ubuntu.com/search?keywords=povray-includes). Potencjalne problemy były również widziane z instalacjami Linuksa wymagającymi lokalnych plików konfiguracyjnych do ręcznego utworzenia w folderze domowym użytkownika, jak omówiono [na forum](https://forum.freecadweb.org/viewtopic.php?f=3&t=27548&start=10#p224576).
* W przypadku POV-Ray, zalecana jest instalacja [makrodefinicji psicofil's](https://github.com/psicofil/Macros_FreeCAD).
* Czytelnik posiada podstawową wiedzę do korzystania z środowisk pracy Część i Projekt Części.

## Sposób postępowania

### Modelowanie

W tym przykładzie jako obiekt badania używany jest sześcian, ale zamiast niego mogą być używane modele utworzone w Środowiskach pracy [Part](/Part_Workbench/pl "Part Workbench/pl") lub [PartDesign](/PartDesign_Workbench/pl "PartDesign Workbench/pl").

1. Utwórz nowy dokument.
2. Aktywuj środowisko pracy Projekt Części.
3. Utwórz sześcian. Możesz dowolnie zmieniać jego właściwości.

Teraz mamy model, z którym możemy pracować.

### Przygotowanie do renderingu

1. Przełącz się do środowiska Raytracing.
2. Przełączyć widok na **Perspektywę**. Przejdź do menu **Widok** i wybierz **Perspektywa**.
3. Ustaw lokalizację dla renderera. Przejdź do menu **Edycja → Preferencje**. Kliknij na **Raytracing** i ustaw lokalizację na plik wykonywalny.
4. Ustaw rozmiar renderowanego obrazu. Przejdź do menu **Edycja → Preferencje**. Kliknij na **Raytracing** i ustaw żądany rozmiar obrazu.

#### POV-Ray

1. Wybierz ![](/images/Raytrace_New.svg) [Nowy projekt PovRay](/Raytracing_New/pl "Raytracing New/pl"). Z menu głównego wybierz **RadiosityNormal**.

#### LuxRender

1. Wybierz ![](/images/Raytrace_Lux.svg) [Nowy projekt LuxRender](/Raytracing_Lux/pl "Raytracing Lux/pl"). Z rozwijanego menu wybierz **LuxClassic**.

### Ustawianie pozycji ujęcia widoku

1. Ustaw [widok 3D](/3D_view/pl "3D view/pl") w żądanym miejscu i odległości od modelu. W tym przypadku używamy **widoku aksonometrycznego**.
2. Wybierz **Folder projektu** w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Wybierz ![](/images/Raytrace_ResetCamera.svg) [Resetuj ujęcie widoku](/Raytracing_ResetCamera/pl "Raytracing ResetCamera/pl").

### Importowanie modelu

1. Wybierz model do renderowania.
2. Wybierz opcję ![](/images/Raytrace_NewPartSegment.svg) [Wstaw część](/Raytracing_InsertPart/pl "Raytracing InsertPart/pl")

### Uruchomienie Renderowania

1. Wybierz funkcję ![](/images/Raytrace_Render.svg) [Renderowanie](/Raytracing_Render/pl "Raytracing Render/pl").
2. Ustaw ścieżkę przechowywania obrazu.
3. Poczekaj na zakończenie renderowania. Może to chwilę potrwać.

## Przeglądanie wyników

FreeCAD natychmiast otworzy obraz po zakończeniu renderowania.

Dzięki temu ćwiczeniu poznaliśmy podstawowy przepływ pracy dla środowiska pracy [Raytracing](/Raytracing_Workbench/pl "Raytracing Workbench/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Raytracing_tutorial/pl&oldid=1251579>"