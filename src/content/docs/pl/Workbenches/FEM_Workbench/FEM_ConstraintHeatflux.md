---
title: MES Obciążenie strumieniem ciepła
---

|                                                                                 |
| ------------------------------------------------------------------------------- |
| MES: Obciążenie strumieniem ciepła                                              |
| Lokalizacja w menu                                                              |
| Model → Warunki brzegowe i obciążenia termiczne → Obciążenie strumieniem ciepła |
| Środowisko pracy                                                                |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                     |
| Domyślny skrót                                                                  |
| _brak_                                                                          |
| Wprowadzono w wersji                                                            |
| -                                                                               |
| Zobacz także                                                                    |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                              |
|                                                                                 |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Definiuje obciążenie strumieniem ciepła na powierzchni. Wspierane są następujące typy strumieni:

- zwykły strumień ciepła na powierzchni

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d)

- konwekcyjny strumień ciepła na powierzchni o temperaturze

  T
  {\displaystyle T}
  ![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) ze współczynnikiem przejmowania ciepła

  h
  {\displaystyle h}
  ![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) i z temperaturą otoczenia

  T

  0
  {\displaystyle T\_{0}}
  ![{\displaystyle T_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55b9e7d7b96196b5a6a26f4349caa3ac82fd67e3). Konwekcyjny strumień ciepła _q_ będzie spełniał zależność:

  # q

  h
  (
  T
  −

  T

  0
  )
  {\displaystyle q=h(T-T\_{0})}
  ![{\displaystyle q=h(T-T_{0})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb7d1148b9907d518b7735374dd0288599290aa4).

- [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): radiacyjny strumień ciepła na powierzchni. Spełnia zależność:

  # q

  ϵ
  σ
  (

  T

  4
  −

  T

  0

  4
  )
  {\displaystyle q=\epsilon \sigma (T^{4}-T\_{0}^{4})}
  ![{\displaystyle q=\epsilon \sigma (T^{4}-T_{0}^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9a02c63f7487161bc96756ca72fff9f2b1dada79) gdzie

  ϵ
  {\displaystyle \epsilon }
  ![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) jest emisyjnością powierzchni a

  σ
  {\displaystyle \sigma }
  ![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) jest stałą Stefana-Boltzmanna.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintHeatflux.svg) Obciążenie strumieniem ciepła.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia termiczne → ![](/images/FEM_ConstraintHeatflux.svg) Obciążenie strumieniem ciepła** z menu.
2. Wciśnij przycisk Dodaj. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz powierzchnie, do których to obciążenie ma być przypisane. Opcjonalnie, wciśnij przycisk Usuń aby usunąć wybrane powierzchnie z listy wskazań.
3. Wybierz typ strumienia ciepła i wprowadź jego dane:
   - _Strumień ciepła na powierzchni_ - ogólny strumień ciepła, wprowadź _Strumień ciepła na powierzchni_ w Watach na jednostkę powierzchni (W/m^2)
   - _Konwekcja_ (domyślny) - konwekcyjny strumień ciepła, wprowadź odpowiedni _Współczynnik przejmowania ciepła_ i _Temperaturę otoczenia_
   - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): _Radiacja_ - strumień ciepła od promieniowania, wprowadź _Emisyjność_ powierzchni i _Temperaturę otoczenia_

## Uwagi

- Obciążenie strumieniem ciepła korzysta z następujących słów kluczowych CalculiX w zależności od wybranego trybu:
  - [\*FILM](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html) dla _Konwekcji_
  - [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): [\*RADIATE](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node234.html) dla _Radiacji_
  - [\*DFLUX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html) dla _Strumienia ciepła na powierzchni_

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/pl&oldid=1568342>"
