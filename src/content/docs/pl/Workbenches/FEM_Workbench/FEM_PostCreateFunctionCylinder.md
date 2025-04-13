---
title: MES Walec
---

|                                                    |
| -------------------------------------------------- |
| MES: Walec                                         |
| Lokalizacja w menu                                 |
| Wyniki → Funkcje filtrów → Walec                   |
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

Narzędzie ![](/images/FEM_PostCreateFunctionCylinder.svg) **Walec** określa sposób geometrycznego cięcia siatki. Jest wykorzystywane przez narzędzia ![](/images/FEM_PostFilterCutFunction.svg) [Filtr cięcia funkcją](/FEM_PostFilterCutFunction/pl "FEM PostFilterCutFunction/pl") oraz ![](/images/FEM_PostFilterClipRegion.svg) [Filtr przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").

## Użycie

### Utwórz funkcję walca

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostCreateFunctionCylinder.svg) Walec.
   - Wybierz opcję **Wyniki → Funkcje filtrów → ![](/images/FEM_PostCreateFunctionCylinder.svg) Walec** z menu.
2. [Panel zadań](/Task_panel/pl "Task panel/pl") zostanie otwarty.
3. Opcjonalnie, ustaw wartości dla środka i promienia walca przekroju.
4. Wciśnij przycisk OK aby zakończyć.

### Edytuj funkcję walca

Jeśli obiekt Cylinder w [widoku drzewa](/Tree_view/pl "Tree view/pl") jest ukryty, zaznacz obiekt ![](/images/FEM_PostCreateFunctionCylinder.svg) Cylinder w [widoku 3D](/3D_view/pl "3D view/pl") i wciśnij klawisz Spacja aby uczynić go widocznym, jak w tym przykładzie:

![](/images/FEM_Cylinder-Cut-Function-Example.png)

#### Przesuń walec

- Kliknij i przeciągnij duży biały prostopadłościan aby przesunąć walec wzdłuż jego wektora normalnego.
- Kliknij i przeciągnij białą siatkę.

#### Obróć i pochyl walec

- Kliknij i przeciągnij linię, która łączy małe kostki z dużym białym prostopadłościanem aby obracać i pochylać walec wokół jego początku.

#### Przeskaluj walec

- Kliknij i przeciągnij jedną z 6 małych kostek aby przeskalować walec.

## Uwagi

- Istniejące funkcje mogą być użyte do różnych filtrów a nawet do różnych ![](/images/FEM_PostPipelineFromResult.svg) [obiektów prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Jest jednak zalecane używanie osobnego zestawu funkcji dla każdego obiektu prezentacji graficznej wyników aby mieć pod kontrolą obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionCylinder/pl&oldid=1569525>"
