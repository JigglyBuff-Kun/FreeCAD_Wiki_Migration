---
title: FEM Vitesse d'écoulement comme condition limite
---
|  |
| --- |
| FEM Vitesse d'écoulement comme condition limite |
| Emplacement du menu |
| Modèle → Conditions limites de fluide → Vitesse d'écoulement comme condition limite |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Vitesse initiale d'écoulement](/FEM_ConstraintInitialFlowVelocity/fr "FEM ConstraintInitialFlowVelocity/fr") |
|  |

| Solveurs |
| --- |
| Elmer |

## Description

Applique une vitesse d'écoulement comme condition limite à un bord en 2D ou à une face en 3D.

![](/images/FEM_FlowVelocity_dialog.png)

Panneau des tâches de la vitesse d'écoulement comme condition limite FEM

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintFlowVelocity.svg) Vitesse d'écoulement comme condition limite.
   * Sélectionnez l'option **Modèle → Conditions limites de fluide → ![](/images/FEM_ConstraintFlowVelocity.svg) Vitesse d'écoulement comme condition limite** du menu.
2. Appuyez sur le bouton Ajouter.
3. Sélectionnez les arêtes ou les faces cibles.
4. Décochez *non spécifié* pour activer les champs nécessaires à l'édition.
5. Définissez les valeurs de vitesse ou ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) spécifier une formule.

## Formules

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

Il est possible de définir une vitesse en spécifiant le profil de vitesse par une formule. Dans ce cas, le solveur définit les vitesses aux différentes positions en fonction du profil.

Pour spécifier par exemple le profil de la vitesse

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

avec 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) (en supposant que, par exemple, la paroi d'un tuyau se trouve à y = 1 m et à y = 2 m)

entrez ceci dans le champ *Formula*:  
 `Variable Coordinate 2; Real MATC "6*(tx-1)*(2-tx)"`

Ce code a la syntaxe suivante :

* le préfixe *Variable* spécifie que la vitesse n'est pas une constante mais une variable
* la variable pour calculer la vitesse est *Coordinate 2*, c'est à dire y
* les valeurs de vitesse sont retournées sous forme de *Real* (valeur à virgule flottante)
* *MATC* est le préfixe du solveur Elmer que le code suivant est une formule
* *tx* est toujours le nom de la variable dans les formules *MATC*, peu importe que *tx* dans notre cas soit en fait *y*

Le fait que *y* ne soit compris que dans l'intervalle 

y
∈
[
1
;
2
]
{\displaystyle y\in [1;2]}
![{\displaystyle y\in [1;2]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fdf17abdf0ea2dcb14dbb559479595d59a7d6c4) est dû au fait que *MATC* n'évalue que l'intervalle *tx* où le résultat est positif. Ce comportement est un peu spécial mais présente l'avantage de ne pas avoir à spécifier l'intervalle manuellement.

Il est également possible d'utiliser plus d'une variable. Voir par exemple la définition des rotations dans la [condition limite de déplacement](/FEM_ConstraintDisplacement/fr#Rotations "FEM ConstraintDisplacement/fr").

## Remarques

* Toute composante vectorielle qui devrait être le résultat du solveur doit être définie comme *Non spécifié*.
* Si la face ou l'arête cible n'est pas alignée sur le système de coordonnées cartésiennes principal, il est possible de définir l'option **Normal à la limite**.

  :   Si l'option **Normal à la limite** est cochée, le vecteur normal à l'arête ou à la face sélectionnée est X et il sera orienté à l'opposé du domaine du maillage.
  :   Par exemple, si un flux d'air de 20 mm/s doit entrer dans le domaine, alors avec **Normal à la limite** il faut entrer -20 mm/s dans le champ **Vitesse x**.

* Pour une paroi avec une condition d'adhérence, définir toutes les composantes de la vitesse à 0.
* Pour une condition de symétrie, définir l'écoulement à (0, Non spécifié, Non spécifié) si **Normal à la limite** est coché.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintFlowVelocity/fr&oldid=1569616>"