---
title: FEM Afficher les résultats
---
|  |
| --- |
| FEM Afficher les résultats |
| Emplacement du menu |
| Résultats → Afficher les résultats |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| R S |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"), [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

## Description

La commande **Afficher les résultats** ouvre la boîte de dialogue pour un objet résultat FEM. Un objet Result est automatiquement créé lorsqu'une analyse FEM a été effectuée en utilisant le solveur [Calculix](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") ou [Z88](/FEM_SolverZ88/fr "FEM SolverZ88/fr").

Un objet Résultat contient le maillage résultant et permet de visualiser les résultats. Il est conçu et donc limité aux résultats thermomécaniques. Sauf pour le [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr"), il peut être utilisé comme alternative à un [pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr"). Un pipeline de résultats peut être utilisé pour visualiser n'importe quel type de résultats (électriques, etc.).

Les unités utilisées pour l'objet Result sont celles du [système d'unités](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr") alors que pour un pipeline de résultats les unités sont [SI](https://fr.wikipedia.org/wiki/Syst%C3%A8me_international_d%27unit%C3%A9s).

La visualisation des résultats n'est active que lorsque la fenêtre de dialogue est ouverte. Cependant, les paramètres de la fenêtre de dialogue sont stockés dans le fichier du modèle FreeCAD.

## Utilisation

Pour afficher la fenêtre de dialogue des résultats :

* sélectionnez l'objet résultat dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"),
* puis appuyez sur le bouton de la barre d'outils ![](/images/FEM_ResultShow.svg) **Afficher les résultats**
* ou utilisez le menu **Résultats → ![](/images/FEM_ResultShow.svg) Afficher le résultat** (raccourci R puis S).
* vous pouvez également double-cliquer sur l'objet résultat dans l'arborescence.

Lorsque la fenêtre de dialogue est ouverte, le maillage résultant s'affiche automatiquement.

![](/images/FEM_Result-Object-Dialog.png)

La fenêtre de dialogue à gauche offre les fonctions suivantes :

* Sélection d'un type de résultat, le minimum et le maximum seront affichés dans la fenêtre de dialogue. Le maillage résultant sera coloré en fonction.

* Le bouton **Histogramme** permet d'obtenir un histogramme indiquant la quantité de nœuds du maillage ayant un certain résultat. Le tracé de l'histogramme peut être modifié par les boutons de sa barre d'outils. Il est également possible de sauvegarder l'histogramme en tant qu'image en utilisant le bouton de sauvegarde de sa barre d'outils.

* L'option **Afficher** permet d'activer le curseur et de visualiser la déformation du maillage résultant. La valeur du curseur est un facteur par lequel le résultat *Magnitude de déplacement* est multiplié.  
  Remarque : le curseur n'affecte que la magnitude de déplacement, pas ses composantes X, Y et Z. Vous pouvez définir le **Facteur** directement et modifier **Déformation max** pour ajuster la plage de la déformation.

* [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : cliquez sur le bouton **Démarrer l'animation** pour animer les résultats avec le facteur d'échelle de déformation défini. Cliquez sur **Arrêter l'animation** ou fermez le panneau des tâches pour arrêter l'animation. Vous pouvez définir le **Nombre de pas par cycle** (combien d'états/de pas de déformation jusqu'au facteur défini sont affichés dans chaque boucle), le **Nombre de cycles** (combien de boucles l'animation fait) et la **Fréquence d'images** (la vitesse de l'animation, nombre de pas par seconde).

* Le bouton **Calculer** permet d'effectuer des calculs sur les résultats. Entrez dans la zone de texte située sous le bouton une équation de votre choix. L'équation prédéfinie est *P1-P3*. Cela signifie que le résultat *Contrainte principale min.* est soustrait du résultat *Contrainte principale max.*. Les variables pour les résultats possibles sont expliquées dans la case *Equations définies par l'utilisateur*.  
  Après avoir saisi une équation, appuyez sur le bouton et le résultat sera affiché dans les champs affichant le minimum et le maximum. Le maillage du résultat sera coloré en conséquence.  
  **Remarque** : les résultats des calculs sont toujours en MPa, mm ou T, quel que soit le [système d'unités](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr") que vous utilisez.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultShow/fr&oldid=1569208>"