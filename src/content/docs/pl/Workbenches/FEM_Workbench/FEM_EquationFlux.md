---
title: MES Równanie strumienia
---

|                                             |
| ------------------------------------------- |
| MES: Równanie strumienia                    |
| Lokalizacja w menu                          |
| Rozwiąż → Równanie strumienia               |
| Środowisko pracy                            |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl") |
| Domyślny skrót                              |
| _brak_                                      |
| Wprowadzono w wersji                        |
| 0.17                                        |
| Zobacz także                                |
| _brak_                                      |
|                                             |

## Opis

To równanie jest używane do wyznaczenia strumieni pochodzących głównie z równań typu Poissona. Obejmuje to ![](/images/FEM_EquationHeat.svg) [równanie ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl") oraz ![](/images/FEM_EquationElectrostatic.svg) [równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](https://www.elmerfem.org/blog/documentation/), w sekcji **Flux Computation** _(obliczenia strumieni)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl").
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationFlux.svg) Równanie strumienia.
   - Wybierz opcję **Rozwiąż → Równanie strumienia** z menu.
4. Aby uwzględnić odpowiednie warunki brzegowe, wykonaj jedną z poniższych czynności:
   - Wywołaj polecenie ![](/images/FEM_EquationHeat.svg) [Równanie ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl")
   - Wywołaj polecenie ![](/images/FEM_EquationElectrostatic.svg) [Równanie elektrostatyczne](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").
5. W przypadku używania równania elektrostatycznego, zmień właściwość DANE**Flux Coefficient** na _None_ a właściwość DANE**Flux Variable** na _Potential_.
6. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie strumienia posiada następujące specjalne ustawienia:

- DANE**Average Within Materials**: Jeśli `Prawda`, ciągłość jest wymuszana w obrębie tego samego materiału w nieciągłej dyskretyzacji Galerkina przy pomocy członów funkcji kary nieciągłego sformułowania Galerkina.
- DANE**Calculate Flux**: Wyznacza wektor strumienia.
- DANE**Calculate Flux Abs**: Wyznacza wartość bezwzględną wektora strumienia. Wymaga właściwości DANE**Calculate Flux** ustawionej na `Prawda`.
- DANE**Calculate Flux Magnitude**: Wyznacza wartość pola wektorowego. Wymaga właściwości DANE**Calculate Flux** ustawionej na `Prawda`.  
  Jest to właściwie to samo co DANE**Calculate Flux Abs**, ale to wymaga mniej pamięci, ponieważ rozwiązuje równanie macierzowe tylko raz. Wadą jest to, że wartości ujemną mogą zostać wprowadzone.
- DANE**Calculate Grad**: Wyznacza gradient strumienia.
- DANE**Calculate Grad Abs**: Wyznacza bezwzględny gradient strumienia. Wymaga właściwości DANE**Calculate Grad** ustawionej na `Prawda`.
- DANE**Calculate Grad Magnitude**: Wyznacza wartość pola wektorowego. Wymaga właściwości DANE**Calculate Grad** ustawionej na `Prawda`.  
  Jest to właściwie to samo co DANE**Calculate Grad Abs**, ale to wymaga mniej pamięci, ponieważ rozwiązuje równanie macierzowe tylko raz. Wadą jest to, że wartości ujemną mogą zostać wprowadzone.
- DANE**Discontinuous Galerkin**: Dla nieciągłych pól standardowa aproksymacja Galerkina wprowadza ciągłość, która może być niefizyczna. Rozwiązaniem jest ustawienie tej właściwości na `Prawda`. Wtedy wynik może być nieciągły i może nawet być zwizualizowany jako taki.
- DANE**Enforce Positive Magnitude**: Jeśli `Prawda`, ujemne wartości obliczonego pola wielkości są ustawiane na zero.
- DANE**Flux Coefficient**: Nazwa współczynnika proporcjonalności do obliczenia strumienia.
- DANE**Flux Variable**: Nazwa zmiennej potencjalnej używanej do obliczenia gradientu.

## Informacje o cechach analizy

Równanie strumienia nie ma własnych warunków brzegowych. Korzysta z warunków brzegowych ![](/images/FEM_EquationHeat.svg) [równania ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl") i ![](/images/FEM_EquationElectrostatic.svg) [równania elektrostatycznego](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl").

## Wyniki

Dostępne wyniki zależą od [ustawień solvera](#Ustawienia_solvera). Jeśli żadna z właściwości DANE**Calculate \*** nie została ustawiona na `Prawda` to obliczone zostaną tylko przemieszczenia. W przeciwnym wypadku dostępne będą też odpowiednie dodatkowe wyniki.

Wynikowy strumień jest albo strumieniem ciepła w

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (myląco nazwanym "strumieniem temperatury") lub strumieniem potencjalnym w

W

/

m

2
{\displaystyle {\rm {W/m^{2}}}}
![{\displaystyle {\rm {W/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6840d235c91399b9bd42d984a7c61a4c68931051) (

A
⋅
V

/

m

2
{\displaystyle {\rm {A\cdot V/m^{2}}}}
![{\displaystyle {\rm {A\cdot V/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e2ec7f7c1ba96543ef2144a3b989a0e9fe7dc933)).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationFlux/pl&oldid=1569598>"
