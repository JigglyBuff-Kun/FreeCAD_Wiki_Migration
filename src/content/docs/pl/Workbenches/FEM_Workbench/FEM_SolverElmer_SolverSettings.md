---
title: MES Konfiguracja solvera Elmer
---

Ta strona opisuje ustawienia dla [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl").

# Ogólne

Elmer jest solverem do zagadnień sprzężonych. Możesz więc używać wielu głównych równań do przeprowadzania analiz. Poszczególne równania są wymienione na stronie przedstawiającej [Solver Elmer](/FEM_SolverElmer/pl#Równania "FEM SolverElmer/pl").

Dostępne są ustawienia solvera wspólne dla wszystkich równań. Zostały opisane tutaj. Ustawienia dostępne tylko dla danego równania są opisane na stronie tego równania.

Elmer oferuje [typy analiz](#Typy) _steady-state_ _(stan ustalony)_ i _transient_ _(stan nieustalony)_ oraz dwa główne systemy rozwiązywania, [liniowy](#Układ_liniowy) i [nieliniowy](#Układ_nieliniowy). Układ nieliniowy jest używany do ![](/images/FEM_EquationFlow.svg) [równania przepływu](/FEM_EquationFlow/pl "FEM EquationFlow/pl") i ![](/images/FEM_EquationHeat.svg) [równania ciepła](/FEM_EquationHeat/pl "FEM EquationHeat/pl").

# Edycja ustawień

Ustawienia solvera można znaleźć w [edytorze właściwości](/Property_editor/pl "Property editor/pl") po kliknięciu na równaniu w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Możesz je tam edytować bezpośrednio, jak każdą inną właściwość.

## Solver

### Układ współrzędnych

Domyślny układ współrzędnych to _Cartesian 3D_ _(kartezjański 3D)_. Niektóre równania nie mogą korzystać ze wszystkich układów współrzędnych. Jest to opisane na stronach Wiki odpowiednich równań.

### Przyrosty czasowe _(analizy stanu nieustalonego)_

**Uwaga**: FreeCAD 0.20.x ma już następujące ustawienia, ale zapisywane są wyniki tylko dla ostatniej chwili czasowej. Od FreeCAD 0.21 wyniki są zapisywane dla różnych chwil czasowych.

Dla analiz stanu nieustalonego należy zdefiniować przyrosty czasowe. Jest to robione przy pomocy następujących ustawień:

- DANE**BDFOrder**: Rząd metody _BDF_ ([Backward Differentiation Formula](https://en.wikipedia.org/wiki/Backward_differentiation_formula)). Zalecane jest używanie domyślnej wartości _2_.
- DANE**Output Intervals**: Szereg interwałów. Wyniki będą zapisywane zgodnie z tymi interwałami. Przykładowo, jeśli wyniki mają być zapisywane co trzeci krok czasowy, należy ustawić _3_. Szereg odpowiada właściwości DANE**Timestep Intervals**.  
  **Uwaga:** Pierwszy wynik będzie zawsze dla pierwszego kroku czasowego. Aby np. uzyskać wyniki po 25 % całkowitego czasu i jeśli ostatni wynik ma być dla końcowego czasu, należy ustawić DANE**Output Intervals** na _5_ a DANE**Timestep Intervals** na _21_. [dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")
- DANE**Timestep Intervals**: Szereg interwałów czasowych (liczba kroków czasowych). Solver będzie przeliczał jeden interwał po drugim. Przykładowo, jeśli solver ma przeliczyć pierwsze 10 sekund w krokach po 0.1 sekund a następnie 50 sekund w krokach po 1 sekundzie i się zatrzymać to należy ustawić interwały czasowe [100, 50] i interwały rozmiaru kroków [0.1, 1.0].
- DANE**Timestep Sizes**: Szereg rozmiarów kroków czasowych. Jednostką czasu jest sekunda. Szereg odpowiada właściwości DANE**Timestep Intervals**.

**Uwagi:**

- Aby osiągnąć żądany całkowity czas analizy nieustalonej, ustaw odpowiednią liczbę i rozmiar kroków czasowych. Przykładowo, aby zasymulować 50 sekund procesu w krokach po 10 sekund, potrzeba 5 takich kroków czasowych. Zatem ustaw Timestep Intervals na [5] a Timestep Sizes na [10].
- Chociaż używane są pojęcia "chwile czasowe" i "sekundy", chwile czasowe są właściwie postępami solvera jeśli analiza nie jest zależna od czasu.

Aby zobaczyć jak wizualizować wyniki, sprawdź stronę [Elmer wizualizacja](/FEM_SolverElmer/pl#Wizualizacja "FEM SolverElmer/pl").

### Typ

- DANE**Simulation type**: Czy analiza jest _Steady state_ _(stan ustalony)_, _Transient_ _(stan nieustalony)_ czy po prostu _Scanning_ _(skanowanie)_. Stan nieustalony oznacza, że liczona jest ewolucja układu w czasie. Zobacz sekcję [Przyrosty czasowe](<#Przyrosty_czasowe_''(analizy_stanu_nieustalonego)''>) aby sprawdzić wymagane ustawienia.
- DANE**Steady State Max Iterations**: Maksymalna liczba iteracji solvera stanu ustalonego.
- DANE**Steady State Min Iterations**: Minimalna liczba iteracji solvera stanu ustalonego.

## Równanie

### Podstawa

Wszystkie równania mają te właściwości:

- DANE**Label**: Nazwa równania w widoku drzewa.
- DANE**Priority**: Liczba określająca priorytet tego równania w stosunku do innych równań w analizie. Równanie z najwyższą liczbą będzie rozwiązywane jako pierwsze. Jeśli dwa równania mają tą samą liczbę, to której jest pierwsze w widoku drzewa będzie rozwiązywane najpierw.
- DANE**Stabilize**: Jeśli ta właściwość jest ustawiona na `Prawda` to solver będzie korzystał ze stabilizowanej metody elementów skończonych podczas rozwiązywania równania ciepła z członem konwekcyjnym. Jeśli ta właściwość jest ustawiona na `Fałsz`, zamiast tego będzie używana stabilizacja Residual Free Bubble _(RFB)_. Jeśli dominuje konwekcja, stabilizacja jest konieczna do rozwiązania równania.

### Układ liniowy

Ten układ ma następujące właściwości:

- DANE**BiCGstabl Degree**: Rząd wielomianu dla iteracyjnej metody solvera _BiCGStabl_ . Ma to efekt tylko jeśli właściwość DANE**Linear Solver Type** jest ustawiona na _Iterative_ a właściwość DANE**Linear Iterative Method** jest ustawiona na _BiCGStabl_. Na początek zalecane jest użycie domyślnej wartości `2`.
- DANE**Idrs Parameter**: Parametr dla iteracyjnej metody solvera _Idrs_ . Ma to efekt tylko jeśli właściwość DANE**Linear Solver Type** jest ustawiona na _Iterative_ a właściwość DANE**Linear Iterative Method** jest ustawiona na _Idrs_. Na początek zalecane jest użycie domyślnej wartości `2`. Ustawienie wartości `3` może zwiększyć trochę szybkość obliczeń. Dla analiz przepływu metoda _Idrs_ jest do 30 % szybsza niż domyślna metoda _BiCGStab_.
- DANE**Linear Direct Method**: Metoda używana do rozwiązywania bezpośredniego. Ma to efekt tylko jeśli właściwość DANE**Linear Solver Type** jest ustawiona na _Direct_.  
  Możliwe metody to _Banded_, _MUMPS_ i _Umpfpack_. Zauważ, że _MUMPS_ zwykle wymaga instalacji przed użyciem.  
  **Uwaga**: przy używaniu więcej niż jednego rdzenia procesora dla solvera ([dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")) można używać tylko _MUMPS_. [MUMPS](https://mumps-solver.org/) musi być zainstalowane ręcznie dla solvera Elmer. Dostępne jest do pobrania tylko po wysłaniu prośby mailem.
- DANE**Linear Iterations**: Maksymalna liczba iteracji dla solvera iteracyjnego. Ma to efekt tylko jeśli właściwość DANE**Linear Solver Type** jest ustawiona na _Iterative_.
- DANE**Linear Iterative Method**: Metoda używana do rozwiązywania iteracyjnego. Ma to efekt tylko jeśli właściwość DANE**Linear Solver Type** jest ustawiona na _Iterative_.
- DANE**Linear Preconditioning**: Metoda używana do prekondycjonowania. Więcej informacji na ten temat można znaleźć w prezentacji [Linear Solvers of Elmer in serial & parallel](http://www.nic.funet.fi/index/elmer/slides/ElmerLinearSolvers.pdf) _(strona 8)_.
- DANE**Linear Solver Type**: Czy rozwiązywanie jest _Direct_ _(bezpośrednie)_ czy _Iterative_ _(iteracyjne)_.
- DANE**Linear System Solver Disabled**: Wyłącza solvera liniowy. Należy tego używać tylko w szczegółnych przypadkach.  
  Można tego użyć do tymczasowego wyłączenia równania, ponieważ nie jest ono wtedy rozwiązywane. Są jednak przypadki gdy solver zamiast tego trafia na nieskończoną pętlę
- DANE**Linear Tolerance**: Tolerancja do zatrzymania solvera. Jeśli błąd jest mniejszy niż tolerancja, praca solvera zostanie zakończona. W innym wypadku, przeprowadzona zostanie pełna liczba iteracji określona przez właściwość DANE**Linear Iterations**.  
  W dzienniku pracy solvera Elmer można zobaczyć jak błąd jest minimalizowany podczas działania solvera. _(Zobacz w dzienniku na końcu każdej iteracji solvera wartość za_ Relative Change*)*. Jeśli nie spada to poniżej konkretnej wartości, ale osiąga wartość powyżej aktualnej tolerancji, która jest dla Ciebie akceptowalna, możesz zwiększyć tolerancję.

### Układ nieliniowy

Ten układ jest iteracyjny i ma następujące właściwości:

- DANE**Nonlinear Iterations**: Maksymalna liczba iteracji.
- DANE**Nonlinear Newton After Iterations**: Solver nieliniowy zaczyna obliczenia z niezawodnym algorytmem*Picard*. Po kilku iteracjach algorytm jest zmieniany na _Newton_, który zbiega się szybciej, ale jest mniej niezawodny jeśli wyniki chwilowo się rozbiegają _(mogą występować oscylacje)_. Ta właściwość ustawia liczbę iteracji, po których nastąpi zmiana algorytmu z _Picard_ na _Newton_.  
  **Uwaga**: zmiana jest dokonywana po tym gdy jedna z tych właściwości zostanie osiągnięta pierwsza: DANE**Nonlinear Newton After Iterations** lub DANE**Nonlinear Newton After Tolerance**.
- DANE**Nonlinear Newton After Tolerance**: Analogicznie jak DANE**Nonlinear Newton After Iterations**, ale tutaj ustawiana jest tolerancja. Jest to norma nieliniowego residuum. Jeśli to zostanie osiągnięte, nastąpi zmiana algorytmu z _Picard_ na _Newton_.
- DANE**Nonlinear Tolerance**: Tolerancja do zatrzymania solvera. Jeśli błąd jest mniejszy niż tolerancja, praca solvera zostanie zakończona. W innym wypadku, przeprowadzona będzie pełna liczba iteracji określonych przez właściwość DANE**Nonlinear Iterations**.  
  W dzienniku pracy solvera Elmer można zobaczyć jak błąd jest minimalizowany podczas pracy solvera. Jeśli nie schodzi on poniżej określonej wartości, która jest akceptowalna, ale jest powyżej aktualnej tolerancji, możesz zwiększyć tolerancję.
- DANE**Relaxation Factor**: To jest najważniejsze ustawienie w przypadku gdy solver się nie zbiega:

#### Współczynnik relaksacji

Jeśli wyniki iteracji solvera oscylują numerycznie, wtedy nie mogą się zbiec do finalnej, stabilnej wartości. Aby tego uniknąć, obliczona zmienna

T

i
{\displaystyle T\_{i}}
![{\displaystyle T_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8dd1c50cb9436474f83624c3f679ccf3eebbfef) i-tej iteracji nie jest brana jako wejście do następnej iteracji, ale wykorzystywana jest wartość

T

i

′
{\displaystyle T\_{i}^{'}}
![{\displaystyle T_{i}^{'}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8df70ff6321edd5e35750c91abf1413a6be754aa), która jest "tłumiona" z wynikiem poprzedniej iteracji. Współczynnik relaksacji

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) jest więc definiowany jako:

T

i

# ′

λ

T

i

-

(

1
−
λ
)

T

i
−
1
{\displaystyle \quad T\_{i}^{'}=\lambda T\_{i}+\left(1-\lambda \right)T\_{i-1}}
![{\displaystyle \quad T_{i}^{'}=\lambda T_{i}+\left(1-\lambda \right)T_{i-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a6df8cefb42eccc6951e125e0f0a3d9533f423d4)

Zatem przy domyślnej wartości 1.0 nie jest używane tłumienie. Im mniejsza wartość

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a), tym większe tłumienie i dłuższy czas osiąganie zbieżności. Więc jeśli solver się nie zbiega, zacznij zmieniać współczynnik relaksacji do 0.9, następnie do 0.8 itd. Wartości poniżej 0.3 są nietypowe i jeśli ich potrzebujesz, powinieneś przyjrzeć się bliżej podstawom matematycznym Twojej analizy.  
Dla przypadków gdzie uzyskujesz prawidłową zbieżność, możesz ustawić

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) powyżej 1.0 aby przyspieszyć osiąganie zbieżności.

### Stan ustalony

Ta część ustawień ma tylko jedną właściwość:

- DANE**Steady State Tolerance**: Określona tolerancja stanu ustalonego lub układu sprzężonego. Solvery wszystkich równań muszą spełnić własne tolerancje dla zmiennej

  ω

  2
  {\displaystyle \omega ^{2}}
  ![{\displaystyle \omega ^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9fc60ab391d9835017f0778767fb25a54402d20f), którą liczą zanim cały układ zostanie uznany za zbieżny. Kryterium tolerancji to:

‖

u

i
−

u

i
−
1
‖
<
ϵ

‖

u

i
‖
{\displaystyle \quad \left\Vert u\_{i}-u\_{i-1}\right\Vert <\epsilon \left\Vert u\_{i}\right\Vert }
![{\displaystyle \quad \left\Vert u_{i}-u_{i-1}\right\Vert <\epsilon \left\Vert u_{i}\right\Vert }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b96bf158a62a8f60b731a1e7b6bc210bea39bd43)

podczas gdy

ϵ
{\displaystyle \epsilon }
![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) jest tolerancją stanu ustalonego a

u

i
{\displaystyle u\_{i}}
![{\displaystyle u_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14f13cb025ff2e136dcbd2fc81ddf965b728e3d7) jest obliczaną zmienną w i-tej iteracji.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer_SolverSettings/pl&oldid=1556409>"
