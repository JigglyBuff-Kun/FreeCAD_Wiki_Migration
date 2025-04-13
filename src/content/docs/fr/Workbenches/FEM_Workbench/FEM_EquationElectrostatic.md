---
title: FEM Équation électrostatique
---

|                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FEM Equation électrostatique                                                                                                                                                                                                  |
| Emplacement du menu                                                                                                                                                                                                           |
| Résolution → Équations électromagnétiques → Équation électrostastique                                                                                                                                                         |
| Ateliers                                                                                                                                                                                                                      |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                                                                                                                                                   |
| Raccourci par défaut                                                                                                                                                                                                          |
| _Aucun_                                                                                                                                                                                                                       |
| Introduit dans la version                                                                                                                                                                                                     |
| 0.19                                                                                                                                                                                                                          |
| Voir aussi                                                                                                                                                                                                                    |
| [FEM Équation de force électrique](/FEM_EquationElectricforce/fr "FEM EquationElectricforce/fr"), [FEM Exemple calcul capacité de deux sphères](/FEM_Example_Capacitance_Two_Balls/fr "FEM Example Capacitance Two Balls/fr") |
|                                                                                                                                                                                                                               |

## Description

Cette équation permet d'effectuer des analyses électrostatiques en utilisant le [Théorème de Gauss](<https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Gauss_(%C3%A9lectromagn%C3%A9tisme)>).

Pour plus d'informations sur les mathématiques de l'équation, voir [Elmer models manual](http://www.elmerfem.org/blog/documentation/), section _Electrostatics_.

## Utilisation

1. Ajoutez un ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr").
2. Sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
3. Il y a plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/FEM_EquationDeformation.svg) [Équation de déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr").
   - Sélectionnez l'option **Résolution → Équations électromagnétiques → Équation électrostastique** du menu.
4. Modifiez les [paramètres du solveur de l'équation](#Param.C3.A8tres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation électrostatique fournit ces paramètres spéciaux :

- Données**Calculate Capacitance Matrix** : calcule la matrice de capacité. La matrice contient les charges ponctuelles des nœuds de la maille.
- Données**Calculate Electric Energy** : calcule l'[énergie potentielle électrostatique](https://fr.wikipedia.org/wiki/%C3%89nergie_potentielle_%C3%A9lectrostatique).
- Données**Calculate Electric Field** : calcule le [champ électrique](https://fr.wikipedia.org/wiki/Champ_%C3%A9lectrique).
- Données**Calculate Electric Flux** : calcule le [flux électrique](https://fr.wikipedia.org/wiki/Flux_%C3%A9lectrique).
- Données**Calculate Surface Charge** : calcule la [charge de surface (en)](https://en.wikipedia.org/wiki/Surface_charge).
- Données**Capacitance Matrix Filename** : fichier dans lequel la matrice de capacité est sauvegardée. Il n'est utilisé que si Données**Calculate Capacitance Matrix** est réglé à _true_.
- Données**Constant Weights** : si la pondération constante des résultats est utilisée.
- Données**Potential Difference** : différence de potentiel en Volt pour laquelle la capacité est calculée. Elle n'est utilisée que si Données**Calculate Capacitance Matrix** est réglé à*false*. Par conséquent, ce paramètre spécifie en fait la tension entre les électrodes d'un simple condensateur. Notez que la tension donnée doit être cohérente avec les potentiels définis dans les conditions aux limites.

## Informations sur les caractéristiques d'analyse

L'équation électrostatique prend en compte les caractéristiques d'analyse suivantes si elles sont définies :

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr")
- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Densité de charge électrique](/FEM_ElectricChargeDensity/fr "FEM ElectricChargeDensity/fr")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constante de permittivité du vide](/FEM_ConstantVacuumPermittivity/fr "FEM ConstantVacuumPermittivity/fr")

### Remarque

Sauf pour les calculs en 2D, pour les ![](/images/FEM_ConstraintElectrostaticPotential.svg) [potentiels électrostatiques](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr"), il est important qu'il agissent sur une face ou un corps. Les conditions limites en 3D définies sur des lignes ou des sommets ne sont pas reconnues par le solveur Elmer.

## Résultats

Les résultats disponibles dépendent des [paramètres du solver](#Param.C3.A8tres_du_solveur). Si aucun des paramètres de Données**Calculate \*** n'a été défini sur _true_, seuls la densité de force électrique et le potentiel électrique sont calculés. Sinon, les résultats correspondants seront également disponibles.

Les résultats possibles sont :

- Densité d'énergie électrique en

  J

  /

  m

  3
  {\displaystyle {\rm {J/m^{3}}}}
  ![{\displaystyle {\rm {J/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7ed87a7c7bc9e1ccd3164a9adcc722d5330e2bd4)

- Champ électrique en

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a)

- Flux électrique en

  A
  ⋅
  s

  /

  m

  2
  {\displaystyle {\rm {A\cdot s/m^{2}}}}
  ![{\displaystyle {\rm {A\cdot s/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0498caa2492aa6dc4af5dcccd7c95a43c3e1a3cc)

- Densité de force électrique en

  N

  /

  m

  2
  {\displaystyle {\rm {N/m^{2}}}}
  ![{\displaystyle {\rm {N/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a90004e7cf2472e320272d782c911ff786f8be02)

- Potentiel en

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

- Charges potentielles en

  C
  {\displaystyle {\rm {C}}}
  ![{\displaystyle {\rm {C}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f18a828c02c22bd8096604e61ed72fb32b171e4c)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationElectrostatic/fr&oldid=1570398>"
