---
title: MES Warunek brzegowy prędkości przepływu
---

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| MES: Warunek brzegowy prędkości przepływu                                                                              |
| Lokalizacja w menu                                                                                                     |
| Model → Warunki brzegowe dla płynu → Warunek brzegowy prędkości przepływu                                              |
| Środowisko pracy                                                                                                       |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                            |
| Domyślny skrót                                                                                                         |
| _brak_                                                                                                                 |
| Wprowadzono w wersji                                                                                                   |
| -                                                                                                                      |
| Zobacz także                                                                                                           |
| [Warunek początkowy prędkości przepływu](/FEM_ConstraintInitialFlowVelocity/pl "FEM ConstraintInitialFlowVelocity/pl") |
|                                                                                                                        |

| Solvery |
| ------- |
| Elmer   |

## Opis

Definiuje prędkość przepływu jako warunek brzegowy dla krawędzi w 2D lub powierzchni w 3D.

![](/images/FEM_FlowVelocity_dialog.png)

Panel zadań warunku brzegowego prędkości przepływu

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintFlowVelocity.svg) Warunek brzegowy prędkości przepływu.
   - Wybierz opcję **Model → Warunki brzegowe dla płynu → ![](/images/FEM_ConstraintFlowVelocity.svg) Warunek brzegowy prędkości przepływu** z menu.
2. Wciśnij przycisk Dodaj.
3. Wybierz docelowe krawędzie lub ściany.
4. Odznacz _nieokreślony_ żeby aktywować wymagane pola do edycji.
5. Wprowadź wartości prędkości lub ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) równanie.

## Równania

[introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")

Jest możliwe definiowanie prędkości poprzez określenie profilu prędkości równaniem. W takim przypadku solver ustawia prędkości w różnych miejscach zgodnie z profilem.

Przykładowo, aby zdefiniować profil prędkości

v

x
(
y
)
=
6

(

y
−
1
)

(

2
−
y
)
{\displaystyle \quad v\_{x}(y)=6\left(y-1\right)\left(2-y\right)}
![{\displaystyle \quad v_{x}(y)=6\left(y-1\right)\left(2-y\right)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2fe4cb7c84745bf581b03f0a56f6fa9d98b26efa)

dla

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) (zakładając, że np. rura ma ścianę na y = 1 m i y = 2 m)

wprowadź to w polu _wzór_:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

Ten kod ma następującą składnięː

- przedrostek _Variable_ wskazuje, że prędkość nie jest stałą, lecz zmienną
- zmienna do obliczenia prędkości to*Coordinate 2*, co oznacza współrzędną y
- wartości prędkości są zwracane jako _Real_ (rzeczywiste liczby zmiennoprzecinkowe)
- _MATC_ to przedrostek dla solvera Elmer oznaczający, że kod jest równaniem
- _tx_ jest zawsze nazwą zmiennej w równaniach _MATC_, mimo że _tx_ w naszym przypadku to tak naprawdę _y_

Zakres

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) dla _y_ jest ustawiony, ponieważ _MATC_ określa tylko zakres _tx_, w którym wynik jest dodatni. To zachowanie jest dość specyficzne, ale ma tę zaletę, że nie trzeba określać zakresu ręcznie.

Jest również możliwe używanie więcej niż jednej zmiennej. P̪rzykład można znaleźć w postaci definicji obrotów dla [warunku brzegowego przemieszczenia](/FEM_ConstraintDisplacement#Rotations/pl "FEM ConstraintDisplacement").

## Uwagi

- Każdy komponent wektora, który powinien być wynikiem solvera, musi być ustawiony na _nieokreślony_.
- Jeśli docelowa powierzchnia lub krawędź nie jest zrównana z osiami kartezjańskiego układu współrzędnych, istnieje możliwość ustawienia opcji **Normalny do brzegu**.

  : Jeśli opcja **Normalny do brzegu** jest zaznaczona, wektor normalny do wybranej krawędzi lub powierzchni jest X i będzie zorientowany na zewnątrz domeny siatki.
  : Przykładowo, jeśli przepływ powietrza o prędkości 20 mm/s powinien być zadany na wlocie to z opcją **Normalny do brzegu** trzeba wprowadzić wartość -20 mm/s w polu _Prędkość x_.

- Dla ściany z warunkiem braku poślizgu, ustaw wszystkie komponenty prędkości na 0.
- Dla warunku symetrii, ustaw przepływ na (0, nieokreślony, nieokreślony) jeśli zaznaczona jest opcja **Normalny do brzegu**.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/pl&oldid=1569009>"
