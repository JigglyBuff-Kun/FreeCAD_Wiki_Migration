---
title: FEM CalculiX
---
## Introduction

Cette page rassemble des informations sur le solveur d'éléments finis [CalculiX](http://www.calculix.de/), le solveur par défaut de l'![](/images/Workbench_FEM.svg) [atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") pour l'analyse structurelle et thermo-mécanique. Selon le système d'exploitation que vous utilisez, vous devrez installer CalculiX avant de lancer votre première simulation. Veuillez voir [Installation des composants requis pour l’atelier FEM](/FEM_Install/fr "FEM Install/fr").

Le solveur est capable de faire des calculs linéaires et non linéaires pour des problèmes statiques, dynamiques et thermiques. Le solveur opère sur un fichier d'entrée de type Abaqus (`.inp`), ce qui signifie qu'il peut être utilisé avec différents pré-processeurs prenant en charge ce format. Le programme inclut son propre pré-processeur graphique qui, toutefois, n’est pas utilisé par FreeCAD, mais uniquement par le solveur lui-même.

CalculiX est conçu pour fonctionner sur les plates-formes Unix telles que les ordinateurs Linux et Irix mais également sur MS-Windows. CalculiX a été développé par des ingénieurs de MTU Aero Engines, Munich, Allemagne, pour les aider à concevoir des machines telles que des turbines à jet. Le logiciel est actuellement disponible au public selon les termes de la GPL version 2.

## Intégration à FreeCAD

L'interaction entre l'[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr") et CalculiX s'effectue par l'écriture et la lecture de fichiers texte. La séquence des opérations est la suivante :

1. Un fichier d'entrée CalculiX est créé avec les détails nécessaires à l'exécution de la simulation.
2. Le solveur CalculiX est démarré avec ce fichier d'entrée.
3. La sortie du solveur est enregistrée.
4. Les fichiers de sortie du solveur sont lus, s’ils sont disponibles.

L'outil [FEM Réglage du solveur](/FEM_SolverControl/fr "FEM SolverControl/fr") gère l'ensemble du processus. L'interaction de l'utilisateur dans le processus est possible.

## Interface de prétraitement

Le fichier d'entrée utilisé par CalculiX peut être préparé et édité avant le démarrage du solveur. Les unités utilisées dans le fichier d'entrée sont indépendantes des unités définies dans FreeCAD. Elles seront toujours en millimètres (mm) et en Newton (N).

*(À faire : vérifiez ceci. Que se passe-t-il quand un maillage est en inch et utilisé dans FreeCAD ? Comme la densité a été introduite, nous avons des kg et des s et non plus des N ?!)*

L'interface CalculiX prend en charge les objets suivants :

### Éléments finis

* Tet4 et Tet10
* S3 et S6
* B31 et B32
* et ceux décrits dans [FEM Maillage avec Calculix](/FEM_Mesh_CalculiX/fr "FEM Mesh CalculiX/fr")

### Analyses

* Analyse statique linéaire et non linéaire
* Analyse de fréquence
* Analyse du flambage linéaire
* Analyse thermique-structurelle couplée

### Matériaux

* Matériaux isotropes à élasticité linéaire (uniformité dans toutes les directions)
* Plasticité avec durcissement isotrope

## Interface de post-traitement

L'atelier FEM charge les résultats de CalculiX dans l'[objet résultat](/FEM_ResultShow/fr "FEM ResultShow/fr") qui contiendra :

* Déplacements
* Contraintes
* Déformations
* Déformation plastique équivalente (PEEQ), si un matériau non linéaire a été utilisé.
* Température, pour l'analyse thermomécanique.

FreeCAD lit les résultats du fichier \*.frd que CalculiX a crée. Si ces résultats contiennent plusieurs pas de temps, chaque pas de temps est importé dans FreeCAD comme un nouvel objet résultat. Le même comportement s'applique à l'analyse fréquentielle ou de flambage avec de multiples valeurs propres.

Les forces de réaction se trouvent dans *ccx\_dat\_file*, qui contient les composantes de force de réaction (fx, fy, fz) pour chaque condition limite fixe et pour chaque condition limite de déplacement, ce qui limite les degrés de liberté de translation.

## En relation

* [FEM Maillage avec Calculix](/FEM_Mesh_CalculiX/fr "FEM Mesh CalculiX/fr")
* [Préférences de CalculiX](/FEM_Preferences/fr#CalculiX "FEM Preferences/fr") dans le menu des préférences de l'atelier FEM.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX/fr&oldid=1479474>"