---
title: FEM ConstraintHeatflux
---
|  |
| --- |
| FEM ConstraintHeatflux |
| Расположение в меню |
| Model → Thermal Constraints → Constraint heatflux |
| Верстаки |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru") |
| Быстрые клавиши |
| *Нет* |
| Представлено в версии |
| - |
| См. также |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|  |

## Description

Defines a heat flux load on a surface. The following heat flux types are supported:

* regular surface heat flux load 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d)
* convective heat flux load on a surface at a temperature 

  T
  {\displaystyle T}
  ![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) with a film coefficient 

  h
  {\displaystyle h}
  ![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) and with the environment (sink/ambient) temperature 

  T

  0
  {\displaystyle T\_{0}}
  ![{\displaystyle T_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55b9e7d7b96196b5a6a26f4349caa3ac82fd67e3). The convective heat flux 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d) will satisfy: 

  q
  =
  h
  (
  T
  −

  T

  0
  )
  {\displaystyle q=h(T-T\_{0})}
  ![{\displaystyle q=h(T-T_{0})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb7d1148b9907d518b7735374dd0288599290aa4).
* [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): radiation heat flux on a surface. It satisfies: 

  q
  =
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
  ![{\displaystyle q=\epsilon \sigma (T^{4}-T_{0}^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9a02c63f7487161bc96756ca72fff9f2b1dada79) where 

  ϵ
  {\displaystyle \epsilon }
  ![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) is the surface emissivity and 

  σ
  {\displaystyle \sigma }
  ![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) is the Stefan-Boltzmann constant.

## Usage

1. There are several ways to invoke the command:
   * Press the ![](/images/FEM_ConstraintHeatflux.svg) [Heat flux load](/FEM_ConstraintHeatflux "FEM ConstraintHeatflux") button.
   * Select the **Model → Thermal boundary conditions and loads → ![](/images/FEM_ConstraintHeatflux.svg) Heat flux load** option from the menu.
2. Click the Add button. In the [3D view](/3D_view "3D view") select the face(s) on which the heat flux load should be applied. Optionally, click the Remove button to remove the selected faces from the selection list.
3. Choose the heat flux type and specify its parameters:
   * *DFlux* - general heat flux, enter the *Surface Heat Flux* in Watts per surface area (W/m^2)
   * *Convection* (default) - convective heat flux, enter the desired *Film Coefficient* and *Ambient Temperature*
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): *Radiation* - radiation heat flux, enter the surface *Emissivity* and *Ambient Temperature*

## Notes

* The heat flux load uses the following CalculiX cards depending on the selected mode:
  + [\*FILM](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html) for *Convection*
  + [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): [\*RADIATE](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node234.html) for *Radiation*
  + [\*DFLUX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html) for *DFlux*

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/ru&oldid=1568131>"