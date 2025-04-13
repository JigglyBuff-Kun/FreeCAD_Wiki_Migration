---
title: MES Lokalny układ współrzędnych
---

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| MES: Lokalny układ współrzędnych                                                                  |
| Lokalizacja w menu                                                                                |
| Model → Cechy geometryczne analizy → Lokalny układ współrzędnych                                  |
| Środowisko pracy                                                                                  |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                       |
| Domyślny skrót                                                                                    |
| _brak_                                                                                            |
| Wprowadzono w wersji                                                                              |
| -                                                                                                 |
| Zobacz także                                                                                      |
| [Wiązanie MPC typu płaszczyzna](/FEM_ConstraintPlaneRotation/pl "FEM ConstraintPlaneRotation/pl") |
|                                                                                                   |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Przekształca układ współrzędnych powierzchni na układ współrzędnych użytkownika — prostokątny lub cylindryczny. Ten układ współrzędnych wpływa na definicje warunków brzegowych i obciążeń. Przykładowo, możesz z niego skorzystać by zablokować przemieszczenia w kierunku normalnym do pochylonej powierzchni lub zdefiniować warunki brzegowe w kierunkach promieniowym i stycznym dla ścian cylindrycznych. Wybierz tylko odpowiednią składową w [warunku brzegowym przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl").

## Użycie

1. Najpierw zdefiniuj [warunek brzegowy przemieszczenia](/FEM_ConstraintDisplacement/pl "FEM ConstraintDisplacement/pl") lub [obciążenie siłą](/FEM_ConstraintForce/pl "FEM ConstraintForce/pl") dla powierzchni.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Naciśnij przycisk ![](/images/FEM_ConstraintTransform.svg) **Lokalny układ współrzędnych**.
   - Wybierz opcję z menu **Model → Cechy geometryczne analizy → ![](/images/FEM_ConstraintTransform.svg) Lokalny układ współrzędnych**.
3. Wybierz przekształcenie prostokątne lub cylindryczne. Pierwsza opcja może być zastosowana do każdej powierzchni, druga jest dostępna tylko dla powierzchni cylindrycznych.
4. Wybierz powierzchnię, do której wcześniej zastosowano warunek brzegowy przemieszczenia lub obciążenie siłą. Naciśnij przycisk Dodaj.
5. W przypadku transformacji prostokątnej, należy określić obrót wokół każdej z trzech osi. Strzałki wyświetlane na ścianie wskazują nowe kierunku (X - czerwona, Y - zielona, Z - niebieska).

![](/images/FEM_transform_rect_displ.PNG)

Prostokątny lokalny układ współrzędnych zdefiniowany dla pochylonej ściany. Długie cienkie strzałki wskazują globalny układ współrzędnych zaś krótkie grubie strzałki oznaczają lokalny układ. Najpierw zdefiniowany został warunek brzegowy przemieszczenia z utwierdzonym przemieszczeniem w kierunku Z (niebieska oś - prostopadła do ściany w lokalnym układzie współrzędnych). Warunek ten jest ukryty na rysunku. Ta transformacja pozwala zasymulować podporę przesuwną umożliwiając części przesuwanie wzdłuż wskazanej ściany.

![](/images/FEM_transform_cyl_displ.PNG)

Transformacja cylindryczna dla ściany cylindrycznej. Globalny kierunek X (czerwona oś) zawsze staje się lokalnym kierunkiem promieniowym. Utwierdzenie go za pomocą warunku brzegowe przemieszczenia zapobiega promieniowemu rozszerzaniu się, ale nie obrotowi wokół otworu. To wymagałoby utwierdzenia kierunku stycznego (Y w osiach globalnych). Trzeci kierunek (globalny Z) to kierunek osiowy.

![](/images/FEM_transform_cyl_force.PNG)

Transformacja cylindryczna dla ściany cylindrycznej. Siła (fioletowe strzałki) przyłożona w globalnym kierunku Y staje się siłą działającą w kierunku stycznym, czyli momentem. Wał podlega skręcaniu.

## Ograniczenia

- Transformacja cylindryczna może być stosowana tylko do powierzchni cylindrycznych.

## Uwagi

- To narzędzie może być stosowane do symulacji skręcania, ale tylko w przypadku prętów walcowych lub części zawierających takie pręty w celu przenoszenia momentu obrotowego.
- To narzędzie wykorzystuje [słowo kluczowe \*TRANSFORM w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node253.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTransform/pl&oldid=1542185>"
