---
title: MES Funkcja zapisu wyników z przekroju
---

|                                                                         |
| ----------------------------------------------------------------------- |
| MES: Funkcja zapisu wyników z przekroju                                 |
| Lokalizacja w menu                                                      |
| Model → Cechy geometryczne analizy → Funkcja zapisu wyników z przekroju |
| Środowisko pracy                                                        |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                             |
| Domyślny skrót                                                          |
| _brak_                                                                  |
| Wprowadzono w wersji                                                    |
| 0.19                                                                    |
| Zobacz także                                                            |
| _brak_                                                                  |
|                                                                         |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Zapisuje wstępnie zdefiniowane zmienne wyjściowe z modelu _(siły i momenty)_ do pliku danych.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Może też zapisać strumień ciepła i naprężenia od siły oporu (te ostatnie wymagają wsparcia dla analiz przepływowych 3D w CalculiX, które nie zostały jeszcze zaimplementowane).

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Naciśnij przycisk ![](/images/FEM_ConstraintSectionPrint.svg) **Funkcja zapisu wyników z przekroju** .
   - Wybierz opcję z menu **Model → Cechy geometryczne analizy → ![](/images/FEM_ConstraintSectionPrint.svg) Funkcja zapisu wyników z przekroju**.
2. Wciśnij przycisk Dodaj i wybierz jedną powierzchnię, dla której będą zapisywane dane wyjściowe.
3. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Z listy _Zmienna_, wybierz zmienną, którą chcesz zapisać: _Section Force_ (siły przekrojowe), _Heat Flux_ (strumień ciepła) lub _Drag Stress_ (naprężenia od siły oporu, aktualnie niewspierane).

## Uwagi

- To narzędzie wykorzystuje słowo kluczowe \*SECTION PRINT w CalculiX.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSectionPrint/pl&oldid=1542173>"
