---
title: MES Filtr wizualizacji deformacji
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Filtr wizualizacji deformacji                                                                                                                  |
| Lokalizacja w menu                                                                                                                                  |
| Wyniki → Filtr wizualizacji deformacji                                                                                                              |
| Środowisko pracy                                                                                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                         |
| Domyślny skrót                                                                                                                                      |
| _brak_                                                                                                                                              |
| Wprowadzono w wersji                                                                                                                                |
| -                                                                                                                                                   |
| Zobacz także                                                                                                                                        |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                     |

## Opis

Wyświetla zdeformowany kształt modelu używając podanego współczynnika skali. Zatem filtr wizualizacji deformacji ma wpływ tylko na wektory wyników, które deformują siatkę.

Rezultat będzie taki sam jak w przypadku suwaka _Przemieszczenie_ w oknie dialogowym [obiektu wyników](/FEM_ResultShow/pl "FEM ResultShow/pl") z tą różnicą, że przemieszczenie dla filtra wizualizacji deformacji jest w metrach. Przykładowo, jeśli używasz [układu jednostek](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl"), w którym jednostką długości jest mm i ustawisz współczynnik deformacji 100 w oknie dialogowym [obiektu wyników](/FEM_ResultShow/pl "FEM ResultShow/pl"), musisz ustawić współczynnik 100.000 dla filtra wizualizacji deformacji żeby uzyskać ten sam efekt.

![](/images/FEM_Warp-Filter-Example.gif)

Filtr wizualizacji deformacji w przypadku belki wspornikowej.

## Użycie

1. Zaznacz wcześniej utworzony [obiekt prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterWarp.svg) Filtr wizualizacji deformacji.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterWarp.svg) Filtr wizualizacji deformacji** z menu.
3. Dostosuj **Opcje wyświetlania wyników** tak jak dla [obiektu prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Ukryj obiekt prezentacji graficznej wyników żeby zobaczyć efekty filtra wizualizacji deformacji.
4. Podaj **Współczynnik deformacji geometrii** bezpośrednio lub użyj suwaka żeby go ustawić. Pola **Min. deformacja geometrii** i **Max. deformacja geometrii** pozwalają Ci dostosować zakres suwaka.
5. Wciśnij przycisk OK aby zakończyć polecenie.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterWarp/pl&oldid=1569548>"
