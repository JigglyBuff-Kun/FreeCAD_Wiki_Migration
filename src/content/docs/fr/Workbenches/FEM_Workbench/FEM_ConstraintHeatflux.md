---
title: FEM Charge de flux de chaleur
---
|  |
| --- |
| FEM Charge de flux de chaleur |
| Emplacement du menu |
| Modèle → Conditions limites et charges thermiques → Charge de flux de chaleur |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Définit une charge de flux de chaleur sur une surface. Les types de flux de chaleur suivants sont pris en charge :

* charge de flux de chaleur de surface régulière 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d)
* charge de flux de chaleur convectif sur une surface à une température 

  T
  {\displaystyle T}
  ![{\displaystyle T}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec7200acd984a1d3a3d7dc455e262fbe54f7f6e0) avec un coefficient film 

  h
  {\displaystyle h}
  ![{\displaystyle h}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b26be3e694314bc90c3215047e4a2010c6ee184a) et avec une température ambiante (puits/ambiant) 

  T

  0
  {\displaystyle T\_{0}}
  ![{\displaystyle T_{0}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/55b9e7d7b96196b5a6a26f4349caa3ac82fd67e3). Le flux de chaleur convectif 

  q
  {\displaystyle q}
  ![{\displaystyle q}](https://wikimedia.org/api/rest_v1/media/math/render/svg/06809d64fa7c817ffc7e323f85997f783dbdf71d) satisfera : 

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
* [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : flux de chaleur par rayonnement sur une surface. Il satisfait : 

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
  ![{\displaystyle q=\epsilon \sigma (T^{4}-T_{0}^{4})}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9a02c63f7487161bc96756ca72fff9f2b1dada79) où 

  ϵ
  {\displaystyle \epsilon }
  ![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) est l'émissivité de la surface et 

  σ
  {\displaystyle \sigma }
  ![{\displaystyle \sigma }](https://wikimedia.org/api/rest_v1/media/math/render/svg/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) est la constante de Stefan-Boltzmann.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintHeatflux.svg) Charge de flux de chaleur.
   * Sélectionnez l'option **Modèle → Conditions limites et charges thermiques → ![](/images/FEM_ConstraintHeatflux.svg) Charge de flux de chaleur** du menu.
2. Cliquez sur le bouton Ajouter. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez la ou les faces sur lesquelles la charge de flux thermique doit être appliquée. Si vous le souhaitez, cliquez sur le bouton Supprimer pour supprimer les faces sélectionnées de la liste de sélection.
3. Choisissez le type de flux thermique et spécifiez ses paramètres :
   * *DFlux* : flux de chaleur général, entrez le *flux de chaleur de surface* en Watts par surface (W/m^2).
   * *Convection* (par défaut) : flux de chaleur convectif, entrez le *coefficient film* et la *température ambiante* souhaités.
   * *Radiation* : flux de chaleur par radiation, entrez l'*émissivité* de la surface et la *température ambiante*. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Remarques

* La charge de flux de chaleur utilise les jeux de paramètres de CalculiX suivants en fonction du mode sélectionné :
  + [\*FILM](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node203.html) pour *Convection*
  + [\*RADIATE](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node234.html) pour *Rayonnement*, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
  + [\*DFLUX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html) pour *DFlux*

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintHeatflux/fr&oldid=1568237>"