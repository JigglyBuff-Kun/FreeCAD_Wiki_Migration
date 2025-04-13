---
title: MES Wiązanie tie
---

|                                                                                     |
| ----------------------------------------------------------------------------------- |
| MES: Wiązanie tie                                                                   |
| Lokalizacja w menu                                                                  |
| Model → Warunki brzegowe i obciążenia mechaniczne → Wiązanie tie                    |
| Środowisko pracy                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                         |
| Domyślny skrót                                                                      |
| _brak_                                                                              |
| Wprowadzono w wersji                                                                |
| 0.19                                                                                |
| Zobacz także                                                                        |
| [MES Obciążenie ciśnieniem](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl") |
|                                                                                     |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Definiuje wiązanie tie łączące dwie wybrane powierzchnie w taki sposób, że (w przeciwieństwie do tego jak działa kontakt) nie mogą się rozdzielić ani ślizgać po sobie podczas analizy. Są więc trwale połączone.

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Może być również używany do definiowania symetrii cyklicznej.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintTie.svg) Wiązanie tie.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia mechaniczne → ![](/images/FEM_ConstraintTie.svg) Wiązanie tie** z menu.
2. Wciśnij przycisk Dodaj w panelu zadań a następnie kliknij na ścianie, którą chcesz dodać do definicji wiązania tie. Dokładnie dwie powierzchnie muszą być dodane, jedna po drugiej. Pierwsza wybrana ściana będzie ścianą podrzędną, podczas gdy druga będzie ścianą nadrzędną.
3. Opcjonalnie, zdefiniuj _Tolerancję_ - wiązanie Tie zostanie zastosowane tylko do węzłów powierzchni podrzędnej oddzielonych od powierzchni nadrzędnej odległością nie większą niż określona tutaj.
4. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie zaznacz pole _Włącz dopasowanie_, aby umożliwić automatyczne przesuwanie węzłów powierzchni slave, aby leżały na powierzchni master, jeśli biorą udział w działaniu wiązania _(tj. spełniają kryterium tolerancji)_.

![](/images/FEM_tie_constraint_example_no_adjust.png)

Dwie połówki belki połączone wiązaniem tie ze zmienioną tolerancją uwzględniającą przerwę.

![](/images/FEM_tie_constraint_example_adjust.png)

Ten sam przykład co wyżej z włączonym dociąganiem - węzły są przesuwane aby zamknąć przerwę.

## Symetria cykliczna

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Wiązanie tie może być również wykorzystane do definiowania symetrii cyklicznej. Pozwala to na analizowanie modeli wykazujących obrotową periodyczność _(powtarzalne segmenty kołowe wokół osi symetrii)_ przy pomocy pojedynczego reprezentatywnego sektora. Może to być szczególnie przydatne do symulacji wirników, wałów, turbin, łopatek wentylatorów, kół zamachowych i podobnych komponentów, często z użyciem [obciążenia siłą odśrodkową](/FEM_ConstraintCentrif/pl "FEM ConstraintCentrif/pl") _(obciążenie musi również wykazywać tę formę symetrii)_ .Symetrię cykliczną można zdefiniować wskazując dwie ściany w miejscach przecięcia przy definiowaniu wiązania tie i ustawiając następujące właściwości:

- DANE**Cyclic Symmetry**: ustawienie na `Prawda` aktywuje symetrię cykliczną.
- DANE**Sectors**: całkowita liczba sektorów, równa kątowi 360° podzielonemu przez kąt reprezentatywnego sektora _(np. 8 dla sektora 45° lub 6 dla sektora 60°)_.
- DANE**Connected Sectors**: liczba sektorów wyświetlanych w wynikach, ustaw ją na taką samą wartość jak właściwość DANE**Sectors** jeśli chcesz zwizualizować całe 360° modelu.
- DANE**Symmetry Axis** - oś symetrii cyklicznej - domyślnie globalna oś Z, można ją przesunąć stosując transformację Umiejscowienia na wersorze Z _(podobnie do tego, co można zrobić z [liniami w środowisku pracy Część](/Part_Line/pl "Part Line/pl") - aby zrozumieć jak przesunąć oś symetrii, pomocna może być zmiana Umiejscowienia takiej linii środowiska pracy Część, która i tak zwykle jest potrzebna do definicji obciążenia siłą odśrodkową)_.

Jednym istotnym ograniczeniem tej funkcji jest to, że nie można nakładać warunków brzegowych na węzły powierzchni slave symetrii cyklicznej _(powierzchni slave w definicji wiązania tie)_, ponieważ spowodowałoby to przewiązanie modelu. Więc w niektórych przypadkach może być konieczne usunięcie węzłów leżących na krawędzi między ścianą z warunkiem brzegowym a ścianą slave symetrii cyklicznej z definicji warunku brzegowego. Niestety FreeCAD nie pozwala operować na zbiorach węzłów i nie można odznaczać pojedynczych węzłów, więc należałoby skorzystać z obejść takich jak dodanie wąskiej [wydzielonej powierzchni](/FEM_Geometry_Preparation_and_Meshing/pl#Partycjonowanie_geometrii "FEM Geometry Preparation and Meshing/pl") jako przejścia między ścianą slave a ścianą z warunkiem brzegowym.

## Uwagi

- Tak jak [kontakt](/FEM_ConstraintContact/pl "FEM ConstraintContact/pl"), to wiązanie wymaga przynajmniej niewielkiej przerwy między częściami. W innym wypadku siatka będzie ciągła i nie będzie potrzeby stosowania wiązania tie.
- To narzędzie korzysta ze [słowa kluczowego \*TIE w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node251.html).
- [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Symetria cykliczna korzysta dodatkowo ze [słowa kluczowego \*CYCLIC SYMMETRY MODEL w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node183.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTie/pl&oldid=1549576>"
