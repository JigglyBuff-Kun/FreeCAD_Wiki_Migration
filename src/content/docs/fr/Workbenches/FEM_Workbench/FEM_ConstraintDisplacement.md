---
title: FEM Condition limite de déplacement
---
|  |
| --- |
| FEM Condition limite de déplacement |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Condition limite de déplacement |
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

Crée une condition limite FEM pour un déplacement donné d'un objet sélectionné pour les degrés de liberté spécifiés.

![](/images/FEM_Displacement_dialog.PNG)

Panneau des tâches de la condition limite de déplacement FEM

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintDisplacement.svg) Condition limite de déplacement.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintDisplacement.svg) Condition limite de déplacement** du menu.
2. Appuyez sur le bouton Ajouter.
3. Dans la [vue 3D](/3D_view/fr "3D view/fr"), sélectionnez l'objet auquel la condition de limite doit être appliquée, qui peut être un sommet, une arête ou une face (mais tous les objets sélectionnés doivent être du même type). Pour supprimer des objets de la liste, appuyez sur le bouton Supprimer et cliquez dessus.
4. Cochez les cases à côté des degrés de liberté que vous souhaitez utiliser. Par défaut, ils sont fixés à zéro (fixe) mais n'importe quelle valeur ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : ou une formule pour Elmer) peut être spécifiée. Les rotations n'ont de sens que pour les éléments poutre et coque.

## Formules

[introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Général

Pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr"), il est possible de définir le déplacement sous la forme d'une formule. Dans ce cas, le solveur définit le déplacement en fonction de la variable de la formule rentrée.

Prenons par exemple le cas où nous voulons effectuer une [analyse transitoire](/FEM_SolverElmer_SolverSettings/fr#Pas_de_temps_(analyses_transitoires) "FEM SolverElmer SolverSettings/fr"). Pour chaque pas de temps, le déplacement 

d
{\displaystyle d}
![{\displaystyle d}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab) doit être augmenté de 6 mm :

d
(
t
)
=
0.006
⋅
t
{\displaystyle \quad d(t)=0.006\cdot t}
![{\displaystyle \quad d(t)=0.006\cdot t}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7bcc928138e413f95a9a6672978e22268e4f2ba1)

entrez ce qui suit dans le champ *Formula* :  
 `Variable "time"; Real MATC "0.006*tx"`

Ce code a la syntaxe suivante :

* le préfixe *Variable* spécifie que le déplacement n'est pas une constante mais une variable
* la variable est l'heure en cours
* les valeurs de déplacement sont renvoyées sous forme de valeurs *Real* (virgule flottante)
* *MATC* est un préfixe pour le solveur Elmer indiquant que le code suivant est une formule
* *tx* est toujours le nom de la variable dans les formules *MATC*, peu importe que *tx* dans notre cas soit en fait *t*

### Rotations

Elmer n'utilise que les champs **Displacement \*** de la condition limite. Pour définir les rotations, nous avons besoin d'une formule.

Si, par exemple, une face doit être pivotée en fonction de cette condition :

d

x
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
x
−
sin
⁡
(
ϕ
)
y

d

y
(
t
)
=

(

cos
⁡
(
ϕ
)
−
1
)
y
+
sin
⁡
(
ϕ
)
x
{\displaystyle \quad {\begin{aligned}d\_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d\_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}
![{\displaystyle \quad {\begin{aligned}d_{x}(t)=&\left(\cos(\phi )-1\right)x-\sin(\phi )y\\d_{y}(t)=&\left(\cos(\phi )-1\right)y+\sin(\phi )x\end{aligned}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a56fb2507459d63a0a5373a81fa64998c216e359)

Il faut alors entrer pour **Déplacement en X**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(1)-sin(tx(0)*pi)*tx(2)`

et pour **Déplacement en Y**  
 `Variable "time, Coordinate"
Real MATC "(cos(tx(0)*pi)-1.0)*tx(2)+sin(tx(0)*pi)*tx(1)`

Ce code a la syntaxe suivante :

* nous avons 4 variables, le temps et toutes les coordonnées possibles (x, y z)
* *tx* est un vecteur, *tx(0)* se réfère à la première variable, le temps, tandis que *tx(1)* est la première coordonnée *x*
* *pi* désigne 

  π
  {\displaystyle \pi }
  ![{\displaystyle \pi }](https://wikimedia.org/api/rest_v1/media/math/render/svg/9be4ba0bb8df3af72e90a0535fabcc17431e540a) et a été ajouté pour qu'après 

  t
  =
  1

  s
  {\displaystyle t=1{\rm {\,s}}}
  ![{\displaystyle t=1{\rm {\,s}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/af783ab669111b914a4a9d4b74e448bfbbb27b9c) une rotation de 180° soit effectuée

## Remarques

Pour le ![](/images/FEM_SolverCalculixCxxtools.svg) [solveur CalculiX](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") :

* Cet outil utilise le [jeu de paramètres \*BOUNDARY](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
* Fixer un degré de liberté est expliqué à l'adresse <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node164.html>.
* Imposer un déplacement pour un degré de liberté est expliqué à l'adresse <http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node165.html>.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintDisplacement/fr&oldid=1569621>"