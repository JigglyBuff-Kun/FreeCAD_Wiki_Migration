---
title: FEM Équation magnétodynamique
---

|                                                                                                        |
| ------------------------------------------------------------------------------------------------------ |
| FEM Équation magnétodynamique                                                                          |
| Emplacement du menu                                                                                    |
| Résolution → Équations électromagnétiques → Équation magnétodynamique                                  |
| Ateliers                                                                                               |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr")                                                            |
| Raccourci par défaut                                                                                   |
| _Aucun_                                                                                                |
| Introduit dans la version                                                                              |
| 0.21                                                                                                   |
| Voir aussi                                                                                             |
| [FEM Équation magnétodynamique 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") |
|                                                                                                        |

## Description

Cette équation effectue des analyses en utilisant les [équations de Maxwell](https://fr.wikipedia.org/wiki/%C3%89quations_de_Maxwell).

Pour plus d'informations sur les mathématiques de l'équation, voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_.

S'il est possible de calculer en 2D, des mathématiques plus simples peuvent être utilisées, ce qui permet des temps de résolution plus rapides. Pour le 2D, FreeCAD prend donc en charge l'[équation magnétodynamique 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") d'Elmer.

## Utilisation

1. Après avoir ajouté un solveur Elmer comme décrit [ici](/FEM_SolverElmer/fr#Équations "FEM SolverElmer/fr"), sélectionnez-le dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Utilisez maintenant le bouton de la barre d'outils ![](/images/FEM_EquationMagnetodynamic.svg) ou le menu **Résolution → Équations électromagnétiques → Équation magnétodynamique**.
3. Modifiez les [paramètres du solveur de l'équation](#Paramètres_du_solveur) ou les [paramètres généraux du solveur](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr") si nécessaire.
4. Il est recommandé de définir dans les [paramètres du solveur de systèmes linéaires](/FEM_SolverElmer_SolverSettings/fr#Système_linéaire "FEM SolverElmer SolverSettings/fr"), Données**Linear Iterative Method** à **BiCGStabl**, Données**BiCGstabl Degree** à **4** et Données**Linear Preconditioning** à **None**. Cela garantit que l'équation peut être résolue dans la plupart des cas. Si c'est le cas, ces paramètres peuvent être modifiés si nécessaire.

## Paramètres du solveur

Pour les paramètres généraux du solveur, voir les [paramètres du solveur Elmer](/FEM_SolverElmer_SolverSettings/fr "FEM SolverElmer SolverSettings/fr").

L'équation magnétodynamique fournit ces paramètres spéciaux :

### Système linéaire

- Données**Linear System Refactorize** : refactorise la matrice du système.

### Magnétodynamique

- Données**Angular Frequency** : fréquence d'actionnement harmonique. Elle n'est utilisée que si Données**Is Harmonic** est réglé à _true_.
- Données**Automated Source Projection BCs** : voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ pour plus d'informations.
- Données**FixInput Current Density** : assure l'absence de divergence de la densité de courant.
- Données**Is Harmonic** : si la force motrice est actionnée de manière harmonique (courant alternatif). Si elle est définie à _true_, Données**Angular Frequency** doit avoir une valeur > 0.
- Données**Lagrange Gauge Penalization Coefficient** : voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ pour plus d'informations.
- Données**Quadratic Approximation** : permet une approximation de second ordre du courant d'entraînement.  
  Remarque : l'ordre par défaut des [maillages de Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") dans FreeCAD est de 2ème ordre. Lorsque vous utilisez des maillages de 2ème ordre, il est obligatoire de mettre cette option à _true_. Sinon vous obtiendrez cette erreur : _ERROR:: GetEdgeBasis: Can't handle but linear elements, sorry._.  
  Cependant, pour la plupart des applications, un maillage d'ordre 1 est suffisant. Une exception est le cas où un filtre Isocontour doit être appliqué pour visualiser les résultats. Dans ce cas, il est recommandé d'utiliser un maillage d'ordre 2 et donc de définir Données**Quadratic Approximation** à _true_.
- Données**Static Conductivity** : voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ pour plus d'informations.
- Données**Use Lagrange Gauge** : voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ pour plus d'informations.
- Données**Use Piola Transform** : doit être _true_ si les fonctions de base pour l'interpolation des éléments arête sont sélectionnés pour être des membres de la famille optimale des éléments de bord ou si une approximation de second ordre est utilisée.
- Données**Use Tree Gauge** : voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Computation of Magnetic Fields in 3D_ pour plus d'informations. Sera ignoré si Données**Use Piola Transform** est à _true_.

### Résultats

- Données**Calculate Current Density** : calcule la [densité de courant](https://fr.wikipedia.org/wiki/Densit%C3%A9_de_courant).
- Données**Calculate Electric Field** : calcule le [champ vectoriel électrique](https://fr.wikipedia.org/wiki/Champ_%C3%A9lectrique).
- Données**Calculate Elemental Fields** : calcule les champs électromagnétiques pour chaque élément du maillage. Ceci est utile pour voir les discontinuités dans les mailles.  
  **Remarque** : pour le moment FreeCAD ne peut pas afficher ces résultats correctement. C'est pourquoi il n'est pour l'instant d'aucune utilité pratique.
- Données**Calculate Harmonic Loss** : calcule la perte de puissance harmonique linéaire et quadratique. Voir le [Manuel des modèles d'Elmer (en)](http://www.elmerfem.org/blog/documentation/), section _Loss Estimation Using the Fourier Series_ pour plus de détails.
- Données**Calculate Joule Heating** : calcule l'[effet Joule](https://fr.wikipedia.org/wiki/Effet_Joule).
- Données**Calculate Magnetic Strength** : calcule l'[intensité du champ magnétique](https://fr.wikipedia.org/wiki/Champ_magn%C3%A9tique).
- Données**Calculate Maxwell Stress** : calcule le champ du [tenseur de contrainte de Maxwell](https://fr.wikipedia.org/wiki/Tenseur_des_contraintes_de_Maxwell).
- Données**Calculate Nodal Fields** : calcule les champs pour chaque noeud du maillage. La valeur par défaut est _true_. Si aucune autre Données**Calculate \*** n'est définie à _true_, il calcule uniquement la densité de flux magnétique.
- Données**Calculate Nodal Forces** : calcule les forces pour chaque nœud du maillage. Les résultats peuvent être utilisés pour une analyse mécanique ultérieure.
- Données**Calculate Nodal Heating** : calcule le champ scalaire de la chaleur par effet Joule pour chaque noeud de la maille.

## Informations sur les caractéristiques d'analyse

L'équation magnétodynamique prend en compte les caractéristiques d'analyse suivantes si elles sont définies :

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr")
- ![](/images/FEM_ConstraintCurrentDensity.svg) [Densité de courant](/FEM_ConstraintCurrentDensity/fr "FEM ConstraintCurrentDensity/fr")
- ![](/images/FEM_ConstraintMagnetization.svg) [Magnétisation](/FEM_ConstraintMagnetization/fr "FEM ConstraintMagnetization/fr")
- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constante de permittivité du vide](/FEM_ConstantVacuumPermittivity/fr "FEM ConstantVacuumPermittivity/fr")

## Résultats

Les résultats disponibles dépendent des [paramètres du solveur](#Paramètres_du_solveur). Si aucun des paramètres Données**Calculate \*** n'a été réglé à _true_, seul le potentiel électrique (appelé **av** dans les résultats) est calculé. Sinon, les résultats correspondants seront également disponibles.

Les résultats possibles sont :

- Densité de courant en

  A

  /

  m

  2
  {\displaystyle {\rm {A/m^{2}}}}
  ![{\displaystyle {\rm {A/m^{2}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/43867b3d6808de93dfdf66697429ca88013a2368)

- Valeurs du vecteur champ électrique en

  V

  /
  m
  {\displaystyle {\rm {V/m}}}
  ![{\displaystyle {\rm {V/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4fcd8f7093f303ba6608e014c763a4df6837819a).

- Puissance harmonique perdue en

  W
  {\displaystyle {\rm {W}}}
  ![{\displaystyle {\rm {W}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/348101b89aedeceb2ebc93991ada7c21040495b7).

- Densité du flux magnétique en

  T
  {\displaystyle {\rm {T}}}
  ![{\displaystyle {\rm {T}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/36c6ae2607b1fee1a67ea90ada529384f2d435ca).

- Valeurs du tenseur des contraintes de Maxwell en

  A
  s

  /

  m

  3
  {\displaystyle {\rm {As/m^{3}}}}
  ![{\displaystyle {\rm {As/m^{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c4023218c46a9838fef5aecb785149f5d42b53a).

- Intensité du champ magnétique en

  A

  /
  m
  {\displaystyle {\rm {A/m}}}
  ![{\displaystyle {\rm {A/m}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a9bff2cfdd6baeb5d1214e018cb8a560247eb46).

- Force nodale en

  N
  {\displaystyle {\rm {N}}}
  ![{\displaystyle {\rm {N}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8a5ac694020ec28aa0bbf32e3cee832638c38cb9)

- Effet Joule en

  J
  {\displaystyle {\rm {J}}}
  ![{\displaystyle {\rm {J}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/77a638267bd97d1b235d2c7eabef24adfcf44530)

- Potentiel en

  V
  {\displaystyle {\rm {V}}}
  ![{\displaystyle {\rm {V}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/de56ca37a64ca666d4f60a961bafffb588cfe87f)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_EquationMagnetodynamic/fr&oldid=1569112>"
