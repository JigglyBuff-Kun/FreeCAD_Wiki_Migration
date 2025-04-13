---
title: MES Filtr cięcia funkcją
---

|                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MES: Filtr cięcia funkcją                                                                                                                                                                                                            |
| Lokalizacja w menu                                                                                                                                                                                                                   |
| Wyniki → Filtr cięcia funkcją                                                                                                                                                                                                        |
| Środowisko pracy                                                                                                                                                                                                                     |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                                          |
| Domyślny skrót                                                                                                                                                                                                                       |
| _brak_                                                                                                                                                                                                                               |
| Wprowadzono w wersji                                                                                                                                                                                                                 |
| -                                                                                                                                                                                                                                    |
| Zobacz także                                                                                                                                                                                                                         |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Funkcje filtrów MES](/FEM_PostCreateFunctions/pl "FEM PostCreateFunctions/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                                                                                      |

## Opis

Wyświetla wyniki na sferze lub płaszczyźnie przecinającej model.

![](/images/FEM_Function-Cut-Filter-Example.png)

Filtr cięcia funkcją ze sferą jako funkcją cięcia.  
Oryginalny obiekt prezentacji graficznej wyników jest półprzezroczysty.

## Użycie

1. Zaznacz wcześniej utworzony [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterCutFunction.svg) Filtr cięcia funkcją.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterCutFunction.svg) Filtr cięcia funkcją** z menu.
3. Dostosuj **Opcje wyświetlania wyników** jak dla [obiektu prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Może być konieczne ukrycie obiektu prezentacji graficznej wyników żeby zobaczyć efekt filtra cięcia funkcją w podglądzie.
4. Skorzystaj z jednego z poniższych podejśćː
   - Jeśli [funkcja filtra](/FEM_PostCreateFunctions/pl "FEM PostCreateFunctions/pl") nie jest jeszcze zdefiniowana, wciśnij przycisk ![](/images/List-add.svg) Utwórz i wybierz **![](/images/FEM_PostCreateFunctionPlane.svg) Płaszczyzna** lub **![](/images/FEM_PostCreateFunctionSphere.svg) Sfera**
   - Wybierz istniejącą funkcję filtra z listy. Jeśli to konieczne, dostosuj parametry cięcia aby upewnić się, że model jest przecinany. Pamiętaj, że zmienione parametry cięcia wpłyną również na parametry używanej funkcji filtra.
5. Wyniki zostaną wyświetlone na powierzchni funkcji filtra.
6. Wciśnij przycisk OK aby zakończyć polecenie.

**Uwaga**: **Pole** może być ustawione tylko jeśli funkcja filtra istnieje i została zastosowana przy pomocy ![](/images/FEM_PostApplyChanges.svg) [Zastosuj zmiany](/FEM_PostApplyChanges/pl "FEM PostApplyChanges/pl"). Alternatywnie, możesz ponownie otworzyć okno dialogowe filtra.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterCutFunction/pl&oldid=1569556>"
