---
title: MES Płaszczyzna
---

|                                                    |
| -------------------------------------------------- |
| MES: Płaszczyzna                                   |
| Lokalizacja w menu                                 |
| Wyniki → Funkcje filtrów → Płaszczyzna             |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Narzędzie ![](/images/FEM_PostCreateFunctionPlane.svg) **Płaszczyzna** określa sposób geometrycznego cięcia siatki. Jest wykorzystywane przez narzędzia ![](/images/FEM_PostFilterCutFunction.svg) [Filtr cięcia funkcją](/FEM_PostFilterCutFunction/pl "FEM PostFilterCutFunction/pl") oraz ![](/images/FEM_PostFilterClipRegion.svg) [Filtr przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").

## Użycie

### Utwórz funkcję płaszczyzny

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostCreateFunctionPlane.svg) Płaszczyzna.
   - Wybierz opcję **Wyniki → Funkcje filtrów → ![](/images/FEM_PostCreateFunctionPlane.svg) Płaszczyzna** z menu.
2. [Panel zadań](/Task_panel/pl "Task panel/pl") zostanie otwarty.
3. Opcjonalnie, ustaw wartości dla początku i kierunku płaszczyzny przekroju.
4. Wciśnij przycisk OK aby zakończyć.

### Edytuj funkcję płaszczyzny

Jeśli obiekt Plane w [widoku 3D](/3D_view/pl "3D view/pl") jest ukryty, zaznacz obiekt ![](/images/FEM_PostCreateFunctionPlane.svg) Plane w [widoku drzewa](/Tree_view/pl "Tree view/pl") i wciśnij klawisz Spacja aby uczynić go widocznym, jak w tym przykładzie:

![](/images/FEM_Plane-Cut-Function-Example.png)

#### Przesuń płaszczyznę

- Kliknij i przeciągnij duży biały prostopadłościan aby przesunąć płaszczyznę wzdłuż jej wektora normalnego. Ustaw kursor myszki na manipulator _(bez klikania)_ i naciśnij Ctrl, aby zmienić orientację tego manipulatora osi.
- Kliknij i przeciągnij białą siatkę .

#### Obróć i pochyl płaszczyznę

- Kliknij i przeciągnij linię, która łączy małe kostki z dużym białym prostopadłościanem aby obracać i pochylać płaszczyznę wokół jej początku.

#### Przeskaluj płaszczyznę

- Kliknij i przeciągnij jedną z 6 małych kostek aby przeskalować płaszczyznę. Jednak, ponieważ obiekt jest nieskończoną płaszczyzną, jego rozmiar nie ma znaczenia.

## Uwagi

- Istniejące funkcje mogą być użyte do różnych filtrów a nawet do różnych ![](/images/FEM_PostPipelineFromResult.svg) [obiektów prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Jest jednak zalecane używanie osobnego zestawu funkcji dla każdego obiektu prezentacji graficznej wyników aby mieć pod kontrolą obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionPlane/pl&oldid=1569521>"
