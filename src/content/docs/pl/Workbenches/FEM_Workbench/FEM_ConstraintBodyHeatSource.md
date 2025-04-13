---
title: MES Objętościowe źródło ciepła
---

|                                                                              |
| ---------------------------------------------------------------------------- |
| MES: Objętościowe źródło ciepła                                              |
| Lokalizacja w menu                                                           |
| Model → Warunki brzegowe i obciążenia termiczne → Objętościowe źródło ciepła |
| Środowisko pracy                                                             |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                  |
| Domyślny skrót                                                               |
| _brak_                                                                       |
| Wprowadzono w wersji                                                         |
| 0.19                                                                         |
| Zobacz także                                                                 |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                           |
|                                                                              |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Definiuje wewnętrznie wytworzone ciepło ciała podane w W/kg.

wersja 1.0 i powyżej: Można również definiować źródło ciepła w W.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintBodyHeatSource.svg) **Objętościowe źródło ciepła**.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia termiczne → ![](/images/FEM_ConstraintBodyHeatSource.svg) Objętościowe źródło ciepła** z menu.
2. wersja 0.21 i powyżej: Wciśnij przycisk Dodaj. Do analizy 3D wybierz 'Bryłę' (body), a do analizy 2D wybierz 'Powierzchnię'.
3. Wprowadź wartość:
   - wersja 0.20 i poniżej: Ponieważ to narzędzie nie ma panelu zadań, użyj [edytora właściwości](/Property_editor/pl "Property editor/pl") i ustaw odpowiednio właściwość DANE**Heat Source**.
   - [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl"): Wprowadź wartość źródła ciepła w W/kg.
   - wersja 1.0 i powyżej: Wybierz tryb:
     - _Szybkość dyssypacji_ - wprowadź szybkość dyssypacji w W/kg .
     - _Moc całkowita_ - wprowadź moc całkowitą w W.

## Ograniczenia

- wersja 0.20 i poniżej: Objętościowe źródło ciepła jest przykładane na cały model. Nie można wskazać pojedynczych brył.
- wersja 0.21 i poniżej: Ta funkcja działa tylko z solverem Elmer.

## Uwagi

- Więcej informacji można znaleźć w [tym wątku forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539) i kolejnych postach. [Ten wątek na forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=28926) może być również przydatny.
- Przykłady z Elmera można również znaleźć w poradniku [Elmer GUI Tutorials](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf).
- 1.0 and above: Ta funkcja wykorzystuje kartę [\*DFLUX w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html).
- 1.0 and above: Ponieważ CalculiX oczekuje danych wejściowych strumienia ciepła ciała w W/mm^3, podczas gdy dla Elmera jest to W/kg, w razie potrzeby konwersja określonej wartości _(w W lub W/kg)_ jest wykonywana wewnętrznie dla każdego solwera, przy użyciu objętości wybranej bryły i gęstości przypisanego do niej materiału.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintBodyHeatSource/pl&oldid=1569034>"
