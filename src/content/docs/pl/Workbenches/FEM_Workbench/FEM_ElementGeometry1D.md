---
title: MES Przekrój poprzeczny belki
---

|                                                        |
| ------------------------------------------------------ |
| MES: Przekrój poprzeczny belki                         |
| Lokalizacja w menu                                     |
| Model → Geometria elementu → Przekrój poprzeczny belki |
| Środowisko pracy                                       |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")            |
| Domyślny skrót                                         |
| C B                                                    |
| Wprowadzono w wersji                                   |
| -                                                      |
| Zobacz także                                           |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")     |
|                                                        |

| Solvery                |
| ---------------------- |
| CalculiX, Mystran, Z88 |

## Opis

**ElementGeometry1D** jest używane do definiowania przekrojów poprzecznych elementów belkowych. Obecnie dostępne są następujące typy przekrojówː prostokątny, kołowy, rurowy.

wersja 1.1 i powyżej: Dostępny jest również przekrój skrzynkowy i eliptyczny.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ElementGeometry1D.svg) Przekrój poprzeczny belki.
   - Wybierz opcję **Model → Geometria elementu → ![](/images/FEM_ElementGeometry1D.svg) Przekrój poprzeczny belki** z menu.
2. Wybierz typ przekroju i podaj wymagane wymiary:
   - Prostokątny: szerokość i wysokość,
   - Kołowy: średnica,
   - Rurowy: średnica zewnętrzna i grubość,
   - wersja 1.1 i powyżej: Eliptyczny: długość osi 1i długość osi 2,
   - wersja 1.1 i powyżej: Skrzynkowy: wysokość, szerokość, grubości T1 - T4.
3. Opcjonalnie, wciśnij przycisk Dodaj w panelu zadań i wybierz krawędź, do której chcesz przypisać przekrój. Jeśli żadna krawędź nie została wybrana, wszystkie pozostałe krawędzie _(bez przypisanych innych obiektów **Przekrój poprzeczny belki**)_ będą automatycznie użyte.

![](/images/FEM_Beam_sections.PNG)

Typy przekrojów belek, lokalne osie używane przez CalculiX i wymiary wprowadzane w środowisku pracy MES

## Właściwości

- DANE**Section Type**: określa typ przekroju belkowego (_Rectangular_ (prostokątny), _Circular_ (kołowy), _Pipe_ (rurowy), wersja 1.1 i powyżej: _Elliptical_ (eliptyczny) i _Box_ (skrzynkowy))
- wersja 1.1 i powyżej: DANE**Box Height**: height of box section, used if DANE**Section Type** is _Box_
- wersja 1.1 i powyżej: DANE**Box T1**: grubość T1 przekroju skrzynkowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Box_
- wersja 1.1 i powyżej: DANE**Box T2**: grubość T2 przekroju skrzynkowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Box_
- wersja 1.1 i powyżej: DANE**Box T3**: grubość T3 przekroju skrzynkowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Box_
- wersja 1.1 i powyżej: DANE**Box T4**: grubość T4 przekroju skrzynkowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Box_
- wersja 1.1 i powyżej: DANE**Box Width**: szerokość przekroju skrzynkowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Box_
- DANE**Circ Diameter**: średnica przekroju kołowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Circular_
- wersja 1.1 i powyżej: DANE**Axis 1 Length**: długość osi 1 przekroju eliptycznego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Elliptical_
- wersja 1.1 i powyżej: DANE**Axis 2 Length**: długość osi 2 przekroju eliptycznego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Elliptical_
- DANE**Pipe Diameter**: średnica zewnętrzna przekroju rurowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Pipe_
- DANE**Pipe Thickness**: grubość przekroju rurowego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Pipe_
- DANE**Rect Height**: wysokość przekroju prostokątnego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Rectangular_
- DANE**Rect Width**: szerokość przekroju prostokątnego, używana jeśli właściwość DANE**Section Type** jest ustawiona na _Rectangular_

## Ograniczenia

- wersja 1.0 i poniżej: Inne typy przekrojów dostępnych w CalculiX (eliptyczny, skrzynkowy i ogólny) nie są obecnie wspierane. Można z nich skorzystać ręcznie edytując plik .inp.
- wersja 1.1 i powyżej: Przekrój ogólny nie jest obecnie wspierany. Można z niego skorzystać ręcznie edytując plik .inp.

## Uwagi

- Do wyświetlania wyników z solvera CalculiX na siatce zwizualizowanej dla danego przekroju, należy ustawić właściwość `Beam Shell Result Output 3D` w [solverze CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") na wartość `Prawda`.
- Niektóre przekroje wymagają użycia konkretnych typów elementów:
  - przekrój kołowy - elementy drugiego rzędu
  - przekrój rurowy - elementy drugiego rzędu ze zredukowanym całkowaniem ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): zredukowane całkowanie jest domyślnie włączone dla elementów belkowych i można je przełączać przy pomoc właściwości _Beam Reduced Integration_ w [ustawieniach solvera CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"))
  - wersja 1.1 i powyżej: przekrój eliptyczny - elementy drugiego rzędu
  - wersja 1.1 i powyżej: przekrój skrzynkowy - elementy drugiego rzędu ze zredukowanym całkowaniem (zobacz wyjaśnienie powyżej)
- To narzędzie korzysta ze [słowa kluczowego \*BEAM SECTION w CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html). Kierunek lokalnej osi 1 jest automatycznie określany przez FreeCAD i zapisywany jako wektor kierunku w drugiej linii danych tego słowa kluczowego.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementGeometry1D/pl&oldid=1530747>"
