---
title: FEM Paramètres du solveur Elmer
---
Cette page décrit les paramètres possibles pour le [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr").

# Général

Elmer est un solveur multiphysique. Par conséquent, vous pouvez utiliser plusieurs équations principales pour résoudre des problèmes. Les différentes équations sont listées [ici](/FEM_SolverElmer/fr#A_propos_des_.C3.A9quations "FEM SolverElmer/fr").

Il existe des paramètres du solveur, disponibles pour toutes les équations. Ils sont décrits ici. Les paramètres disponibles uniquement pour une équation particulière sont décrits dans les pages de l'équation correspondante.

Elmer offre les [types de résolution](#Type) *régime stationnaire* et *transient* et deux principaux systèmes de résolution, [système linéaire](#Syst.C3.A8me_lin.C3.A9aire) et [système non linéaire](#Syst.C3.A8me_non_lin.C3.A9aire). Le système non linéaire est utilisé pour les ![](/images/FEM_EquationFlow.svg) [Équations d'écoulement](/FEM_EquationFlow/fr "FEM EquationFlow/fr") et les ![](/images/FEM_EquationHeat.svg) [Équations de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr").

# Modification des paramètres

Les paramètres du solveur se trouvent dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") après avoir cliqué sur une équation dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Vous pouvez les modifier directement à cet endroit comme n'importe quelle autre propriété.

## Le solveur

### Système de coordonnées

Le système de coordonnées par défaut est *Cartésien 3D*. Pour certaines équations, tous les systèmes de coordonnées ne peuvent pas être utilisés. Ceci est indiqué sur les pages Wiki des équations correspondantes.

### Pas de temps (analyses transitoires)

**Remarque** : FreeCAD 0.20.x fournit déjà les paramètres suivants mais seul le résultat de la dernière étape est affiché. A partir de FreeCAD 0.21, vous obtiendrez un résultat pour les différents temps.

Pour les analyses transitoires, les pas de temps doivent être définis. Ceci est fait par les paramètres suivants :

* Données**BDFOrder** : ordre pour la méthode *BDF* ([Backward Differentiation Formula](https://en.wikipedia.org/wiki/Backward_differentiation_formula)). Il est recommandé d'utiliser la valeur par défaut de *2*.
* Données**Output Intervals** : tableau d'intervalles. Un fichier de résultats du solveur sera produit à chaque intervalle de temps. Par exemple, si un fichier de résultat doit être produit tous les trois pas de temps, définissez-le à *3*. Le tableau correspond à Données**Timestep Intervals**.  
  **Remarque :** le premier résultat dans chaque cas sera créé pour le premier pas de temps. Pour obtenir par exemple des résultats après 25 % du temps total et si le dernier résultat doit être le temps final, définissez Données**Output Intervals** à *5* et Données**Timestep Intervals** à *21*. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
* Données**Timestep Intervals** : tableau d'intervalles de temps(nombre de pas de temps). Le solveur effectuera un intervalle de temps après l'autre. Par exemple, si le solveur doit calculer les 10 premières secondes par pas de 0.1 seconde, puis 50 secondes par pas de 1 seconde et enfin s'arrêter, vous devez définir les intervalles de pas de temps [100, 50] et les intervalles de taille de pas de temps [0.1, 1.0].
* Données**Timestep Sizes** : tableau de tailles de pas de temps. L'unité de temps est la seconde. Le tableau correspond à Données**Timestep Intervals**.

**Remarque :**

* Pour obtenir la durée totale souhaitée d'une analyse transitoire, définissez le nombre et la taille appropriés des pas de temps. Par exemple, pour simuler 50 secondes d'un processus par pas de 10 secondes, vous avez besoin de 5 pas de temps. Réglez donc les intervalles de pas de temps sur [5] et les tailles de pas de temps sur [10].
* Bien que les termes « temps » et « secondes » soient utilisés, les temps sont en fait des progressions du solveur si l'analyse n'est pas dépendante du temps.

Pour plus d'information sur comment visualiser les résultats, voir l'info [Visualisation d'Elmer](/FEM_SolverElmer/fr#Visualisation "FEM SolverElmer/fr").

### Type

* Données**Simulation type** : si la simulation est *Steady state*, *Transient* ou simplement *Scanning*. Transitoire signifie que l'évolution sur la durée du solveur est calculée. Voir la section [Pas de temps (analyses transitoires)](#Pas_de_temps_(analyses_transitoires)) pour les paramètres nécessaires.
* Données**Steady State Max Iterations** : nombre maximum d'exécutions du solveur en régime stationnaire.
* Données**Steady State Min Iterations** : nombre minimum d'exécutions du solveur en régime stationnaire.

## Équation

### Base

Toutes les équations ont ces propriétés :

* Données**Label** : nom de l'équation dans l'arborescence.
* Données**Priority** : nombre déterminant la priorité de cette équation par rapport aux autres équations de l'analyse. L'équation ayant le numéro le plus élevé dans l'analyse sera résolue en premier. Si deux équations ont le même numéro de priorité, celle qui est la première dans l'arborescence sera résolue en premier.
* Données**Stabilize** : si défini à *true*, le solveur utilisera la méthode des éléments finis stabilisés lors de la résolution de l'équation de la chaleur avec un terme de convection. S'il est défini sur *false*, la stabilisation par Residual Free Bubble (RFB) est utilisée à la place. Si la convection domine, la stabilisation doit être utilisée afin de résoudre l'équation avec succès.

### Système linéaire

Ce système a les propriétés suivantes :

* Données**BiCGstabl Degree** : degré polynomial pour la méthode de résolution itérative *BiCGStabl*. Ceci n'a d'effet que si Données**Linear Solver Type** est *Iterative* et Données**Linear Iterative Method** est *BiCGStabl*. Il est recommandé de commencer par la valeur par défaut de 2.
* Données**Idrs Parameter** : paramètre pour la méthode du solveur itératif *Idrs*. Ceci n'a un effet que si Données**Linear Solver Type** est *Iterative* et Données**Linear Iterative Method** est *Idrs*. Il est recommandé de commencer avec la valeur par défaut de 2. Le réglage du paramètre à 3 peut augmenter un peu la vitesse de résolution. Pour les analyses de flux, la méthode *Idrs* est jusqu'à 30 % plus rapide que la méthode par défaut *BiCGStab*.
* Données**Linear Direct Method** : méthode utilisée pour la résolution directe. Ceci n'a un effet que si Données**Linear Solver Type** est *Direct*.  
  Les méthodes possibles sont *Banded*, *MUMPS* et *Umpfpack*. Notez que *MUMPS* doit généralement être installé avant que vous puissiez l'utiliser.  
  Remarque : lorsque vous utilisez plus d'un noyau CPU pour le solveur ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")), seul *MUMPS* peut être utilisé. [MUMPS](https://mumps-solver.org/) doit être installé manuellement sur Elmer. Il n'est disponible en téléchargement que sur demande par courrier électronique.
* Données**Linear Iterations** : nombre maximal d'itérations pour une exécution itérative du solveur. Ceci n'a un effet que si Données**Linear Solver Type** est *Iterative*.
* Données**Linear Iterative Method** : méthode utilisée pour la résolution itérative. Ceci n'a d'effet que si Données**Linear Solver Type** est *Iterative*.
* Données**Linear Preconditioning** : méthode utilisée pour le préconditionnement. Pour plus d'informations sur le préconditionnement, voir [cette présentation (en)](http://www.nic.funet.fi/index/elmer/slides/ElmerLinearSolvers.pdf) (page 8) d'Elmer.
* Données**Linear Solver Type** : si la résolution est faite *Direct* ou *Iterative*.
* Données**Linear System Solver Disabled** : désactive le solveur linéaire. N'utilisez cette option que dans des cas particuliers.  
  Elle peut être utilisée pour désactiver temporairement une équation puisque sa résolution n'est alors pas effectuée. Il existe cependant des cas où le solveur est envoyé dans une boucle infinie.
* Données**Linear Tolerance** : la tolérance pour que le solveur s'arrête. Si l'erreur est inférieure à la tolérance, l'exécution du solveur est terminée. Sinon, le nombre total d'itérations linéaires Données**Linear Iterations** sera exécuté.  
  Dans le log du solveur Elmer, vous voyez comment l'erreur est minimisée pendant l'exécution du solveur. (Regardez dans le log, à la fin de chaque itération du solveur, la valeur derrière *Relative Change*). Si elle ne descend pas en dessous d'une certaine valeur mais atteint une valeur supérieure à la tolérance actuelle qui est acceptable pour vous, vous pouvez augmenter la tolérance.

### Système non linéaire

Ce système est itératif et possède les propriétés suivantes :

* Données**Nonlinear Iterations** : nombre maximal d'itérations.

* Données**Nonlinear Newton After Iterations** : le solveur non linéaire démarre avec l'algorithme robuste *Picard*. Après quelques itérations, l'algorithme est remplacé par l'algorithme *Newton* qui converge plus rapidement mais est moins robuste si les résultats divergent temporairement (des oscillations peuvent se produire). Ce paramètre définit le nombre d'itérations après lesquelles le passage de l'algorithme *Picard* à l'algorithme *Newton* est effectué.  
  **Remarque** : le passage se fait selon ce qui est atteint en premier, Données**Nonlinear Newton After Iterations** ou Données**Nonlinear Newton After Tolerance**.
* Données**Nonlinear Newton After Tolerance** : identique à Données**Nonlinear Newton After Iterations** mais une tolérance est définie. La tolérance est la norme du résidu non linéaire. Si elle est atteinte, le passage de l'algorithme *Picard* à l'algorithme *Newton* est effectué.
* Données**Nonlinear Newton After Tolerance** : la tolérance pour l'arrêt du solveur. Si l'erreur est inférieure à la tolérance, l'exécution du solveur est terminée. Sinon, le nombre total d'itérations Données**Nonlinear Iterations** sera exécuté.  
  Dans la réponse d'Elmer, vous voyez comment l'erreur est minimisée pendant l'exécution du solveur. Si elle ne descend pas en dessous d'une certaine valeur acceptable mais supérieure à la tolérance actuelle, vous pouvez augmenter la tolérance.
* Données**Relaxation Factor** : c'est LE paramètre le plus important dans le cas où le solveur ne converge pas :

#### Facteur de relaxation

Si les résultats des itérations du solveur oscillent numériquement, les résultats du solveur ne peuvent pas converger vers une valeur finale et stable. Pour éviter cela, la variable calculée 

T

i
{\displaystyle T\_{i}}
![{\displaystyle T_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/a8dd1c50cb9436474f83624c3f679ccf3eebbfef) de la i-ième itération/exécution du solveur n'est pas prise comme entrée pour l'itération suivante, mais 

T

i

′
{\displaystyle T\_{i}^{'}}
![{\displaystyle T_{i}^{'}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/8df70ff6321edd5e35750c91abf1413a6be754aa), une valeur qui est "amortie" avec le résultat de l'itération précédente. Le facteur de relaxation 

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) est donc défini comme suit

T

i

′
=
λ

T

i
+

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

Ainsi, pour la valeur par défaut de 1,0, aucun amortissement n'est utilisé. Plus 

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) est petit, plus l'amortissement est important et plus le temps de convergence est long. Par conséquent, si le solveur ne converge pas, commencez à modifier le facteur de relaxation à 0,9, puis à 0,8 et ainsi de suite. Les valeurs inférieures à 0,3 sont inhabituelles et si vous en avez besoin, vous devriez examiner de plus près les mathématiques de votre analyse.  
Pour les cas, où vous obtenez une convergence correcte, vous pouvez définir 

λ
{\displaystyle \lambda }
![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) au-dessus de 1,0 pour accélérer la convergence.

### Régime stationnaire

Cette partie des paramètres n'a qu'une seule propriété :

* Données**Steady State Tolerance** : la tolérance spécifique de convergence du régime stationnaire ou du système couplé. Tous les solveurs d'équations doivent respecter leurs propres tolérances pour la variable 

  ω

  2
  {\displaystyle \omega ^{2}}
  ![{\displaystyle \omega ^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/9fc60ab391d9835017f0778767fb25a54402d20f) qu'ils calculent, avant que l'ensemble du système soit considéré comme convergé. Le critère de tolérance est :

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

alors que 

ϵ
{\displaystyle \epsilon }
![{\displaystyle \epsilon }](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3837cad72483d97bcdde49c85d3b7b859fb3fd2) est la tolérance en régime stationnaire et 

u

i
{\displaystyle u\_{i}}
![{\displaystyle u_{i}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/14f13cb025ff2e136dcbd2fc81ddf965b728e3d7) est la variable calculée dans la i-ième itération/exécution du résolveur.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverElmer_SolverSettings/fr&oldid=1556584>"