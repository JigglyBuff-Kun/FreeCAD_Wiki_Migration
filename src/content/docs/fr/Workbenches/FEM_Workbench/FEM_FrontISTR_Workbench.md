---
title: FEM Atelier FrontISTR
---

![](/images/FrontISTR.svg)

Icône de l'atelier FEM FrontISTR

## Introduction

L'atelier ![](/images/FrontISTR.svg) FEM FrontISTR est une extension de FreeCAD qui permet d'utiliser FrontISTR, un programme FEM parallèle à grande échelle open source pour l'analyse structurelle non linéaire.

![](/images/FEM_FrontISTR_bikeframe_screenshot.png)

### Déroulement des tâches

1. Configurer un modèle d'analyse avec l'atelier FEM (de la même manière que CalculiX).
2. Passer à l'atelier **FrontISTR** et créer un objet solveur FrontISTR en cliquant sur le bouton de la barre d'outils ![](/images/FEM_SolverCalculixCxxtools.svg).
3. Double-cliquer sur l'objet solveur dans l'arborescence du document et définir le répertoire de travail.
4. Cliquer sur le bouton **Write input file**.
5. Cliquer sur le bouton **Run FrontISTR**.
6. Vérifier les résultats FISTR_Results pour le post-traitement.

## Fonctions

- Analyse statique, vérification des éléments
- Analyse géométrique linéaire et non linéaire
- Eléments : tétraèdre du 1er/2ème ordre
- Charges : mécaniques concentrées et réparties, gravité
- Limites : points fixes ou déplacement
- Contrôle des étapes : incrémentation et réduction automatiques du temps.
- Solveur d'équations linéaires
  - itératif
    - préconditionneur : AMG, SSOR, Diagonal, ILU(k)(k=0,1,2)
    - méthode : CG, BiCGSTAB, GMRES, GPBiCG
  - direct : MUMPS
- Format du fichier de sortie : AVS, VTK (ParaView est requis)

### Fonctions prévues à l'avenir

- Analyse : transfert thermique, dynamique, fréquence propre
- Matériaux (mécanique) : élastoplastique, hyperélastique, fluage, viscoélastique
- Contact
- MPC(TIE)
- Eléments : prisme, hexa, poutre, coque, treillis, etc.

### Limitations

- FISTR_Results ne contient que les résultats pour les surfaces. Si vous avez besoin des résultats pour l'intérieur, changez le format de fichier de sortie en VTK et visualisez les résultats avec ParaView.
- L'atelier FEM FrontISTR ne supporte pas encore les analyses thermiques. FISTR lui-même peut effectuer des analyses thermiques et ce support est prévu dans un futur proche.
- Les analyses mécaniques avec différents matériaux dans le modèle ne sont pas encore possibles.

### Résultats de comparaison

Voir <https://github.com/FrontISTR/FEM_FrontISTR/tree/master/sample/benchmarks>.

## Installation

### Gestionnaire des extensions

FEM_FrontISTR peut facilement être installé via le ![](/images/AddonManager.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") à partir du menu **Outils → Gestionnaire des extensions**.
FEM_FrontISTR est en cours de développement actif et reçoit de nouvelles fonctionnalités fréquemment. Vous devez donc le mettre à jour régulièrement en utilisant le menu **Outils → Gestionnaire des extensions**.
Le code de FEM_FrontISTR est hébergé et développé sur [GitHub](https://github.com/FrontISTR/FEM_FrontISTR).

### Manuellement

Voir [Comment installer des ateliers supplémentaires](/How_to_install_additional_workbenches/fr "How to install additional workbenches/fr").

### Prérequis

- FreeCAD v0.19 ou plus récent
- [ParaView](https://www.paraview.org/) (optionnel)

### Installation du solveur FrontISTR

Les binaires de FrontISTR seront automatiquement téléchargés et installés lors de la première exécution. Si le téléchargement ne se fait pas, veuillez suivre les étapes ci-dessous pour installer le solveur.

#### Windows

1. Télécharger [le dernier zip FrontISTR](https://www.frontistr.com/download/link.php?https://frontistr-commons.gitlab.io/FrontISTR/release/x86_64-w64-mingw32-msmpi/FrontISTR-latest.zip)
2. Créer le répertoire FEM_FrontISTR/bin
3. Extraire FrontISTR-latest.zip et mettre tous les fichiers dans le répertoire FEM_FrontISTR/bin.

#### Linux

En préparation.

#### Mac

En préparation.

## Outils

- ![](/images/FEM_SolverCalculixCxxtools.svg) **Solver FrontISTR Standard** : crée un nouveau solveur FrontISTR pour cette analyse.

## Références

- Auteur : kinagaki rigarashi
- Code source : [Github.com](https://github.com/FrontISTR/FEM_FrontISTR)
- Forum FreeCAD : [58019](https://forum.freecadweb.org/viewtopic.php?t=58019)
- Tutoriels : <https://frontistr-commons.gitlab.io/FEM_FrontISTR/en/>
- Documentation du solveur FrontISTR : <https://manual.frontistr.com/en/>
- Rapporter les bogues : Veuillez signaler les bogues à [Github.com](https://github.com/FrontISTR/FEM_FrontISTR).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_FrontISTR_Workbench/fr&oldid=1356556>"
