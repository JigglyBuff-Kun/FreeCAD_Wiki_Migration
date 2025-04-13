---
title: MES Wykres linearyzacji naprężeń
---

|                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Wykres linearyzacji naprężeń                                                                                                                                                                                                               |
| Lokalizacja w menu                                                                                                                                                                                                                              |
| Wyniki → Wykres linearyzacji naprężeń                                                                                                                                                                                                           |
| Środowisko pracy                                                                                                                                                                                                                                |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                                                                     |
| Domyślny skrót                                                                                                                                                                                                                                  |
| _brak_                                                                                                                                                                                                                                          |
| Wprowadzono w wersji                                                                                                                                                                                                                            |
| -                                                                                                                                                                                                                                               |
| Zobacz także                                                                                                                                                                                                                                    |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Filtr przycięcia linią](/FEM_PostFilterDataAlongLine/pl "FEM PostFilterDataAlongLine/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                                                                                                 |

## Opis

Tworzy wykres linearyzacji naprężeń.

Więcej informacji na temat linearyzacji naprężeń można uzyskać na stronie opisującej [linearyzację naprężeń](https://www.graspengineering.com/what-is-stress-linearization/).

![](/images/FEM_Stress-Linearization-Plot-Example.png)

Wykres linearyzacji naprężeń.

## Użycie

1. Zaznacz wcześniej utworzony [filtr przycięcia linią](/FEM_PostFilterDataAlongLine/pl "FEM PostFilterDataAlongLine/pl") z wykreśloną jedną z następujących wielkości naprężenia:
   - Mises,
   - Tresca,
   - Major principal _(maksymalne naprężenie główne)_,
   - Intermediate principal _(pośrednie naprężenie główne)_,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie xx komponentu,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie xy komponentu,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie xz komponentu,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie yy komponentu,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie yz komponentu,
   - [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Naprężenie zz komponentu.
   - Minor principal (minimalne naprężenie główne).
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostFilterLinearizedStresses.svg) Wykres linearyzacji naprężeń.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostFilterLinearizedStresses.svg) Wykres linearyzacji naprężeń** z menu.
3. Wykres XY ze zlinearyzowanymi wartościami naprężeń _(membranowe, membranowe+gnące i całkowite)_ wzdłuż linii zostanie utworzony w osobnym oknie.

Wielkość naprężenia wykreślona w filtrze przycięcia linią zostanie użyta do obliczenia naprężeń zlinearyzowanych.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterLinearizedStresses/pl&oldid=1569552>"
