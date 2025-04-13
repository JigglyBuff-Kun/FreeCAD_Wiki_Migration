---
title: MES Materiał dla płynu
---

|                                                    |
| -------------------------------------------------- |
| MES: Materiał dla płynu                            |
| Lokalizacja w menu                                 |
| Model → Materiały → Materiał dla płynu             |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Tworzy materiał dla płynu.

![](/images/FEMMaterialFluidProperties.png)

Okno dialogowe materiału MES.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_MaterialFluid.svg) **Materiał dla płynu**.
   - Wybierz opcję **Model → Materiały → ![](/images/FEM_MaterialFluid.svg) Materiał dla płynu‏‎** z menu.
2. Zostanie otwarte okno dialogowe materiału MES.
3. Wybierz materiał płynu z listy rozwijanej. Do analiz CFD _(Computational Fluid Dynamics)_ najczęściej wykorzystywane są materiały **Air** i **Water**. Opcjonalnie wciśnij przycisk Uruchom edytor aby skorzystać z [edytora materiałów](/Material_Edit/pl "Material Edit/pl").
4. Opcjonalnie, zaznacz pole Użyj tego panelu zadań aby zmodyfikować właściwości materiału, takie jak gęstość, lepkość kinematyczna, przewodność cieplna itp.
5. Jeśli definiujesz materiał płynu dla całego modelu, nie wybieraj żadnych obiektów geometrycznych _(zostaw pustą listę odniesień)_. Materiał płynu zostanie automatycznie przypisany do całego modelu. W innym wypadku, przypisz materiały płynu do wybranych części ręcznie, poprzez wybieranie ich do poszczególnych definicji materiału, ale nie zostawiaj żadnej części modelu bez definicji materiału płynu.
6. Wciśnij przycisk Zamknij aby zamknąć okno dialogowe.

## Uwagi

1. Aby edytować istniejący obiekt MaterialFluid: dwukrotnie kliknij na nim w [widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialFluid/pl&oldid=1571191>"
