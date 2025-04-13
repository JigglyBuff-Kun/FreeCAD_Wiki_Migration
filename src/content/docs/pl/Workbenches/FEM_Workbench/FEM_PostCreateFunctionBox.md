---
title: MES Prostopadłościan
---

|                                                    |
| -------------------------------------------------- |
| MES: Prostopadłościan                              |
| Lokalizacja w menu                                 |
| Wyniki → Funkcje filtrów → Prostopadłościan        |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| 0.21                                               |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Narzędzie ![](/images/FEM_PostCreateFunctionBox.svg) **Prostopadłościan** określa sposób geometrycznego cięcia siatki. Jest wykorzystywane przez narzędzia ![](/images/FEM_PostFilterCutFunction.svg) [Filtr cięcia funkcją](/FEM_PostFilterCutFunction/pl "FEM PostFilterCutFunction/pl") oraz ![](/images/FEM_PostFilterClipRegion.svg) [Filtr przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").

## Użycie

### Utwórz funkcję prostopadłościanu

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostCreateFunctionBox.svg) Prostopadłościan.
   - Wybierz opcję **Wyniki → Funkcje filtrów → ![](/images/FEM_PostCreateFunctionBox.svg) Prostopadłościan** z menu.
2. [Panel zadań](/Task_panel/pl "Task panel/pl") zostanie otwarty.
3. Opcjonalnie, ustaw wartości dla środka i rozmiaru prostopadłościanu przekroju.
4. Wciśnij przycisk OK aby zakończyć.

### Edytuj funkcję prostopadłościanu

Jeśli obiekt Box w [widoku drzewa](/Tree_view/pl "Tree view/pl") jest ukryty, zaznacz obiekt ![](/images/FEM_PostCreateFunctionBox.svg) Box w [widoku 3D](/3D_view/pl "3D view/pl") i wciśnij klawisz Spacja aby uczynić go widocznym, jak w tym przykładzie:

![](/images/FEM_Box-Cut-Function-Example.png)

#### Przesuń prostopadłościan

- Kliknij i przeciągnij ścianę prostopadłościanu. Prostopadłościan jest definiowany przez niebieskie krawędzie.

#### Obróć i pochyl prostopadłościan

- Kliknij i przeciągnij jedną z 3 linii, które przechodzą przez prostopadłościan aby go obrócić i pochylić wokół jego środka.

#### Przeskaluj prostopadłościan

- Kliknij i przeciągnij jedną z 8 małych kostek w narożnikach prostopadłościanu aby go przeskalować.

#### Przekształć prostopadłościan

- Kliknij i przeciągnij jedną z 6 małych kostek wokół środka prostopadłościanu aby zmienić jego kształt.

## Uwagi

- Istniejące funkcje mogą być użyte do różnych filtrów a nawet do różnych ![](/images/FEM_PostPipelineFromResult.svg) [obiektów prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Jest jednak zalecane używanie osobnego zestawu funkcji dla każdego obiektu prezentacji graficznej wyników aby mieć pod kontrolą obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionBox/pl&oldid=1569505>"
