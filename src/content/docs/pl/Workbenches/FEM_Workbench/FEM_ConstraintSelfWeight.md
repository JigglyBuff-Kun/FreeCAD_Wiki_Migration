---
title: MES Obciążenie grawitacją
---

|                                                                           |
| ------------------------------------------------------------------------- |
| MES: Obciążenie grawitacją                                                |
| Lokalizacja w menu                                                        |
| Model → Warunki brzegowe i obciążenia mechaniczne → Obciążenie grawitacją |
| Środowisko pracy                                                          |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                               |
| Domyślny skrót                                                            |
| _brak_                                                                    |
| Wprowadzono w wersji                                                      |
| -                                                                         |
| Zobacz także                                                              |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                        |
|                                                                           |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Definiuje przyspieszenie grawitacyjne działające na cały model w wybranym kierunku.

wersja 0.21 i poniżej: Przyspieszenie to ma ustaloną wartość 9,81 m/s².

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintSelfWeight.svg) Obciążenie grawitacją button.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintSelfWeight.svg) Obciążenie grawitacją** z menu.
2. Utworzony zostanie obiekt **ConstraintSelfWeight**.
3. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, zmień jego właściwość DANE**Gravity Acceleration** (wartość przyspieszenia).
4. Opcjonalnie, zmień jego właściwość DANE**Gravity Direction** (kierunek działania).

## Skrypty

Nowy obiekt:

```
import ObjectsFem
ObjectsFem.makeConstraintSelfWeight(name)

```

Dodaj obiekt do analizy o nazwie Analysis:

```
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [(object)]

```

Przykładː

```
import ObjectsFem
selfweight_obj = ObjectsFem.makeConstraintSelfWeight("MySelfWeightObject")
App.ActiveDocument.Analysis.Member = App.ActiveDocument.Analysis.Member + [selfweight_obj]

```

## Solver CalculiX

### Ograniczenia

- wersja 0.21 i poniżej: Aby zmienić wartość przyspieszenia grawitacyjnego, musisz edytować plik .inp.
- Obciążenie grawitacją jest nakładane na zbiór elementów Eall, w którego skład wchodzą wszystkie elementy siatki modelu.

### Edycja pliku .inp CalculiXa

Wartość przyspieszenia można ręcznie zmienić po wygenerowaniu pliku .inp.

Przykład linii w pliku .inpː

```
*DLOAD
Eall,GRAV,9810,0.0,0.0,-1.0

```

gdzie 9810 to wartość przyspieszenia grawitacyjnego w [mm/s^2], zaś 0,0,-1 to wektor kierunku. Wartość można ustawić jako wielokrotność standardowego przyspieszenia grawitacyjnego, aby symulować obciążenie np. 4 g.

## Solver Z88

- To obciążenie nie jest obecnie zaimplementowane w solverze Z88.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSelfWeight/pl&oldid=1533106>"
