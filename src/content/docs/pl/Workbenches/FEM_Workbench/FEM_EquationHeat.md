---
title: MES Równanie ciepła
---

|                                                    |
| -------------------------------------------------- |
| MES: Równanie ciepła                               |
| Lokalizacja w menu                                 |
| Rozwiąż → Równanie ciepła                          |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| 0.17                                               |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

To równanie opisuje przepływ ciepła w ciałach sztywnych i płynach.

Informacje o teorii stojącej za tym równaniem można znaleźć w dokumencie [Elmer models manual](https://www.elmerfem.org/blog/documentation/), w sekcji **Heat Equation** _(równanie ciepła)_.

## Użycie

1. Dodaj ![](/images/FEM_SolverElmer.svg) [solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl")
2. Wybierz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_EquationHeat.svg) Równanie ciepła.
   - Wybierz opcję **Rozwiąż → Równanie ciepła** z menu.
4. Zmień [ustawienia solvera dla równania](#Ustawienia_solvera) lub [ogólne ustawienia solvera](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl") jeśli to konieczne.

## Ustawienia solvera

Dla ogólnych ustawień solvera zobacz [konfigurację solvera Elmer](/FEM_SolverElmer_SolverSettings/pl "FEM SolverElmer SolverSettings/pl").

Równanie ciepła posiada następujące specjalne ustawienia:

- DANE**Bubbles**: Istnieje również sformułowanie residual-free-bubbles stabilizowanej metody elementów skończonych. Jest bardziej dokładne i nie uwzględnia żadnych członów ad hoc. Jednak może być bardziej kosztowne obliczeniowo. Jeśli zarówno DANE**Bubbles**, jak i DANE**[Stabilize](/FEM_SolverElmer_SolverSettings/pl#Baza "FEM SolverElmer SolverSettings/pl")** są ustawione na `Fałsz` to stabilizacja nie jest używana i wyniki mogą łatwo być pozbawione sensu.  
  **Uwaga**: Jeśli podczas _first solver iteration_ pojawi się ten błąd:  
   ERROR:: IterSolve: Numerical Error: System diverged over maximum tolerance.  
   to metoda DANE**Bubbles** zawiodła. W takim wypadku należy ustawić DANE**[Stabilize](/FEM_SolverElmer_SolverSettings/pl#Baza "FEM SolverElmer SolverSettings/pl")** na `Prawda`.

Równanie:

- DANE**Convection**: Typ konwekcji do użycia w równaniu ciepła.  
  **Uwaga**: Jeśli nie jest to ustawione na _None_ to DANE**[Stabilize](/FEM_SolverElmer_SolverSettings/pl#Baza "FEM SolverElmer SolverSettings/pl")** musi być ustawione na `Prawda`, inaczej człon konwekcyjny nie będzie uwzględniany w równaniu ciepła.
- DANE**Phase Change Model**: Model używany do przemiany fazowej (lód w wodę itd.). Model _Spatial 1_ korzysta z metody apparent-heat-capacity, _Spatial 2_ i _Temporal_ są metodami effective-heat-capacity.  
  Więcej informacji o tych modelach można uzyskać w [tym artykule](https://blog.rwth-aachen.de/gfd/files/2017/07/BT_2013_Schueller_elmer_icemole.pdf) (sekcja 2.5.2.2) (w języku niemieckim). Artykuł pokazuje też, że _Spatial 1_ ma problemy numeryczne dla większych gradientów temperatur i że _Spatial 2_ było preferowane do przemiany lodu w wodę.

## Informacje o cechach analizy

Równanie ciepła uwzględnia następujące cechy analizy jeśli są zdefiniowane:

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Objętościowe źródło ciepła](/FEM_ConstraintBodyHeatSource/pl "FEM ConstraintBodyHeatSource/pl")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Warunek początkowy temperatury](/FEM_ConstraintInitialTemperature/pl "FEM ConstraintInitialTemperature/pl")
- ![](/images/FEM_ConstraintTemperature.svg) [Warunek brzegowy temperatury](/FEM_ConstraintTemperature/pl "FEM ConstraintTemperature/pl")

### Uwaga

- Oprócz analiz 2D, dla wszystkich cech analizy istotne jest żeby były zdefiniowane dla ścian lub brył. Cechy w 3D przypisane do linii i wierzchołków nie są rozpoznawane przez solver Elmer.

## Wynik

Wynikiem jest temperatura w Kelvinach.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationHeat/pl&oldid=1569480>"
