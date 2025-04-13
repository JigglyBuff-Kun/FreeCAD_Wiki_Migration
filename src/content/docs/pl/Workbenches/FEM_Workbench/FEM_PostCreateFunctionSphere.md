---
title: MES Sfera
---

|                                                    |
| -------------------------------------------------- |
| MES: Sfera                                         |
| Lokalizacja w menu                                 |
| Wyniki → Funkcje filtrów → Sfera                   |
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

Narzędzie ![](/images/FEM_PostCreateFunctionSphere.svg) **Sfera** określa sposób geometrycznego cięcia siatki. Jest ono wykorzystywane przez narzędzia ![](/images/FEM_PostFilterCutFunction.svg) [Filtr cięcia funkcją](/FEM_PostFilterCutFunction/pl "FEM PostFilterCutFunction/pl") oraz ![](/images/FEM_PostFilterClipRegion.svg) [Filtr przycięcia obszaru](/FEM_PostFilterClipRegion/pl "FEM PostFilterClipRegion/pl").

## Użycie

### Utwórz funkcję sfery

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostCreateFunctionSphere.svg) Sfera.
   - Wybierz opcję **Wyniki → Funkcje filtrów → ![](/images/FEM_PostCreateFunctionSphere.svg) Sfera** z menu.
2. [Panel zadań](/Task_panel/pl "Task panel/pl") zostanie otwarty.
3. Opcjonalnie, ustaw wartości dla początku i promienia sfery przekroju.
4. Wciśnij przycisk OK aby zakończyć.

### Edytuj funkcję sfery

Jeśli obiekt Sphere w [widoku drzewa](/Tree_view/pl "Tree view/pl") jest ukryty, zaznacz obiekt ![](/images/FEM_PostCreateFunctionSphere.svg) Sphere w oknie [widoku 3D](/3D_view/pl "3D view/pl") i wciśnij klawisz Spacja aby uczynić go widocznym, jak w tym przykładzie:

![](/images/FEM_Sphere-Cut-Function-Example.png)

#### Przesuń sferę

- Kliknij i przeciągnij sferyczną siatkę aby przesunąć sferę.

#### Przeskaluj sferę

- Kliknij i przeciągnij jedną z 8 małych kostek aby przeskalować sferę.

## Uwagi

- Istniejące funkcje mogą być użyte do różnych filtrów a nawet do różnych ![](/images/FEM_PostPipelineFromResult.svg) [obiektów prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Jest jednak zalecane używanie osobnego zestawu funkcji dla każdego obiektu prezentacji graficznej wyników aby mieć pod kontrolą obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostCreateFunctionSphere/pl&oldid=1569528>"
