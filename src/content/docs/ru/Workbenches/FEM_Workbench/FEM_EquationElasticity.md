---
title: FEM EquationElasticity/ru
---

|                                                    |
| -------------------------------------------------- |
| Уравнение гибкости                                 |
| Расположение в меню                                |
| Solve → Уравнение гибкости                         |
| Верстаки                                           |
| [FEM](/FEM_Workbench/ru "FEM Workbench/ru")        |
| Быстрые клавиши                                    |
| _Нет_                                              |
| Представлено в версии                              |
| -                                                  |
| См. также                                          |
| [FEM tutorial](/FEM_tutorial/ru "FEM tutorial/ru") |
|                                                    |

## Описание

This equation describes the mechanical properties of solid bodies.

For info about the math of the equation, see the [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Linear Elasticity_.

## Usage

1. Add an ![](/images/FEM_SolverElmer.svg) [Elmer solver](/FEM_SolverElmer#Equations "FEM SolverElmer").
2. Select it in the [Tree view](/Tree_view "Tree view").
3. There are several ways to invoke the command:
   - Press the ![](/images/FEM_EquationElasticity.svg) [Elasticity equation](/FEM_EquationElasticity "FEM EquationElasticity") button.
   - Select the **Solve → Mechanical equations → Elasticity equation** option from the menu.
4. Change the [equation's solver settings](#Solver_Settings) or the [general solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings") if necessary.

**Note**: For analyses of nonlinear elasticity you must use the ![](/images/FEM_EquationDeformation.svg) [Deformation equation](/FEM_EquationDeformation "FEM EquationDeformation") ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")). The Elasticity equation is only for linear elasticity.

**Note**: If you use more than one CPU core for the solver ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")), you cannot use the default solver settings. However, using just one CPU and the default solver settings is in many cases faster than using several CPUs because the elasticity solver is only fast when Данные**Linear Solver Type** is set to _Direct_ (the default, described [here](/FEM_SolverElmer_SolverSettings#Linear_System "FEM SolverElmer SolverSettings")). For multi-CPU solving one can only use the Данные**Linear Direct Method** _MUMPS_. However, MUMPS is not freely available as a direct download.

## Solver Settings

For the general solver settings, see the [Elmer solver settings](/FEM_SolverElmer_SolverSettings "FEM SolverElmer SolverSettings").

The elasticity equation provides these special settings:

- Данные**Calculate Pangle**: If the principal angles should be calculated.
- Данные**Calculate Principal**: If all stresses should be calculated.
- Данные**Calculate Strains**: If strains will be calculated. This will also calculate the stresses, even if Данные**Calculate Principal** or Данные**Calculate Stresses** is `false`.
- Данные**Calculate Stresses**: If stresses should be calculated. Compared to Данные**Calculate Principal** the Tresca yield criterion and the principal stress will not be calculated.
- Данные**Constant Bulk System**: See the Elmer manual for more info.
- Данные**Displace Mesh**: If mesh can be deformed. This is by default `true` and must be set to `false` for eigenfrequency analyses.
- Данные**Fix Displacement**: If displacements or forces are set. thereby Данные**Model Lumping** is automatically used.
- Данные**Geometric Stiffness**: Considers the geometric stiffness of the body.
- Данные**Incompressible**: Computation of incompressible material in connection with viscoelastic Maxwell material and a custom Данные**Variable**.
- Данные**Maxwell Material**: Compute the viscoelastic material model.
- Данные**Model Lumping**: Uses [model lumping](https://en.wikipedia.org/wiki/Lumped-element_model).
- Данные**Model Lumping Filename**: File to save the results from the model lumping.
- Данные**Stability Analysis**: If `true` Данные**Eigen Analysis** becomes a stability analysis (buckling analysis). Otherwise a modal analysis is performed.
- Данные**Update Transient System**: See the Elmer manual for more info.
- Данные**Variable**: The variable for the elasticity equation. Only change this if Данные**Incompressible** is set to `true` in accordance to the Elmer manual.

Eigenvalues:

- Данные**Eigen Analysis**: If an eigen analysis should be performed (calculation of eigenmodes and eigenfrequencies).
- Данные**Eigen System Complex**: Should be `true` if the eigen system is complex. it must be `false` for a damped eigen value analyses.
- Данные**Eigen System Compute Residuals**: Computes residuals of the eigen value system.
- Данные**Eigen System Damped**: Set a damped eigen analysis. Can only be used if Данные**[Linear Solver Type](/FEM_SolverElmer_SolverSettings#Linear_System "FEM SolverElmer SolverSettings")** is _Iterative_.
- Данные**Eigen System Select**: Selection of which eigenvalues are computed. Note that the selection of \*Largest\*\* cause an infinite run for recent Elmer solver (as of August 2022).
- Данные**Eigen System Tolerance**: Convergence tolerance for iterative eigensystem solve. The default is 100 times the Данные**[Linear Tolerance](/FEM_SolverElmer_SolverSettings#Linear_System "FEM SolverElmer SolverSettings")**.
- Данные**Eigen System Values**: The number of the highest eigenmode that should be calculated.

Equation:

- Данные**Plane Stress**: Computes solution according to the plane stress situation. Applies only for 2D geometry.

## Analysis Feature Information

The elasticity equation takes the following analysis features into account if they are set:

- ![](/images/FEM_ConstraintFixed.svg) [Fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed")
- ![](/images/FEM_ConstraintDisplacement.svg) [Displacement boundary condition](/FEM_ConstraintDisplacement "FEM ConstraintDisplacement")
- ![](/images/FEM_ConstraintForce.svg) [Force load](/FEM_ConstraintForce "FEM ConstraintForce")
- ![](/images/FEM_ConstraintInitialTemperature.svg) [Initial temperature condition](/FEM_ConstraintInitialTemperature "FEM ConstraintInitialTemperature")
- ![](/images/FEM_ConstraintPressure.svg) [Pressure load](/FEM_ConstraintPressure "FEM ConstraintPressure")
- ![](/images/FEM_ConstraintSelfWeight.svg) [Gravity load](/FEM_ConstraintSelfWeight "FEM ConstraintSelfWeight")
- ![](/images/FEM_ConstraintSpring.svg) [Spring](/FEM_ConstraintSpring "FEM ConstraintSpring")

### Note

- Except for calculations in 2D, for all the above analysis features it is important that they act on a face. Features in 3D set to lines or vertices are not recognized by the Elmer solver.

## Eigenmode Analysis

To perform an eigenmode analysis (calculation if the eigenmodes and eigenfrequencies), you need to

1. Set Данные**Eigen Analysis** to `true`
2. Set Данные**Displace Mesh** to `false`
3. Set Данные**Eigen System Values** to the highest number of eigenmodes you are interested in. The smaller this number the shorter the solver runtime since higher modes can be omitted from computation.
4. Add a [fixed boundary condition](/FEM_ConstraintFixed "FEM ConstraintFixed") and set at least one face of the body as fixed.
5. Run the solver.

It is highly recommended to use Данные**Linear Solver Type** set to _Direct_ (the default) because this is much faster and the results are more accurate.

## Buckling Analysis

To perform a buckling analysis, you need to do the same as for an [Eigenmode Analysis](#Eigenmode_Analysis), and additionally:

- Set Данные**Stability Analysis** to `true`

## Results

The available results depend on the [solver settings](#Solver_Settings). If none of the Данные**Calculate \*** settings was set to `true`, only the displacement is calculated. Otherwise also the corresponding results will be available. If Данные**Eigen Analysis** was set to `true` all results will be available for every calculated eigenmode.

If Данные**Eigen Analysis** was set to `true`, the eigenfrequencies are output at the end of the solver log in the solver dialog and also in the document **SolverElmerOutput** that will be created in the tree view after the solver has finished.

**Note:** The eigenmode displacement

d
→
{\displaystyle {\vec {d}}}
![{\displaystyle {\vec {d}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3e1eb48ef8121a782f64c8453fa6f80a9ca26e2e) vector has an arbitrary value since the result is

d
→
=
c
⋅

u
→
{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}
![{\displaystyle \quad {\vec {d}}=c\cdot {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1be0746f478e825c4e54a17871405caccf6b694)

whereas

u
→
{\displaystyle {\vec {u}}}
![{\displaystyle {\vec {u}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/89c41e9cf70c5e5b56e2128a136985a75f90ba43) is the eigenvector and

c
{\displaystyle c}
![{\displaystyle c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/86a67b81c2de995bd608d5b2df50cd8cd7d92455) is a complex number.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElasticity/ru&oldid=1569069>"
