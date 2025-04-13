---
title: MES Kontrola pracy solvera
---

|                                                        |
| ------------------------------------------------------ |
| MES: Kontrola pracy solvera                            |
| Lokalizacja w menu                                     |
| Rozwiąż → Kontrola pracy solvera                       |
| Środowisko pracy                                       |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")            |
| Domyślny skrót                                         |
| S T                                                    |
| Wprowadzono w wersji                                   |
| -                                                      |
| Zobacz także                                           |
| [Uruchom solver](/FEM_SolverRun/pl "FEM SolverRun/pl") |
|                                                        |

## Opis

Polecenie to służy do sterowania solverem MES _(zapis pliku wejściowego, jego edycja, uruchomienie solvera)_.

## Użycie

1. Wybierz obiekt Solvera w [Widoku drzewa](/Tree_view/pl "Tree view/pl"), np. solver CalcuilX ![](/images/FEM_SolverCalculixCxxtools.svg) **SolverCcxTools**.
2. Istnieje kilka sposobów na wywołanie polecenia:
   - Naciśnij przycisk ![](/images/FEM_SolverControl.svg) [Kontrola pracy solvera](/FEM_SolverControl "FEM SolverControl").
   - Wybierz z menu opcję **Rozwiąż → ![](/images/FEM_SolverControl.svg) Kontrola pracy solvera**.
   - Użyj skrótu klawiaturowego: S a następnie T.
3. Opcjonalnie, edytuj katalog roboczy.
4. Opcjonalnie, wybierz typ analizy.
5. Kliknij Write .inp file, aby zapisać plik wejściowy.
6. Opcjonalnie, kliknij Edit .inp file.
   - Plik wejściowy zostanie otwarty, więc możesz go edytować i zapisać przez Ctrl+S.
7. Kliknij Uruchom CalculiX, aby uruchomić solver.
   - Rozwiązanie może zająć sporo czasu dla dużych modeli.

## Uwagi

- Domyślny katalog roboczy można zmienić w **Edycja → Preferencje ... → MES**.
- Ustawienia dla innych solverów mogą się różnić.
- Uproszczona wersja polecenia to ![](/images/FEM_SolverRun.svg) [Uruchom solver](/FEM_SolverRun/pl "FEM SolverRun/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverControl/pl&oldid=1542323>"
