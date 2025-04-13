---
title: Arch Calepinage
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Calepinage |
| Emplacement du menu |
| Utilitaires → Outils pour les panneaux → Calepiner |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr"), [Arch Feuille de panneaux](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr") |
|  |

## Description

L'outil **Arch Calepinage** permet de sélectionner une forme plane pour en faire un conteneur, et une série d'autres formes planes à disposer à l'intérieur de l'espace défini par la forme du conteneur. Ceci est généralement nécessaire pour les opérations sur machines CNC, où vous voulez découper une série de pièces dans un panneau de base, et devez organiser ces pièces de la manière la plus compacte possible pour qu'elles occupent moins d'espace sur le panneau.

L'algorithme qui gère l'outil Calepinage est en constante évolution et n'est actuellement pas entièrement optimisé. À l'avenir, la performance de cet outil devrait devenir bien meilleure.

![](/images/Arch_Nest_example.jpg)

*L'image ci-dessus montre une série de formes avant et après l'opération de calepinage.*

## Utilisation

1. Sélectionnez l'option **Utilitaires → Outils pour les panneaux → ![](/images/Arch_Nest.svg) Calepiner** du menu.
2. Sélectionnez un objet pour devenir le conteneur. Cet objet doit être plat et pour l'instant rectangulaire.
3. Cliquez sur le bouton Choisir la sélection pour utiliser cet objet comme conteneur.
4. Sélectionnez une série d'autres objets plats que vous souhaitez placer à l'intérieur du conteneur. Ces objets doivent tous être plats et dans le même plan que le conteneur.
5. Ajustez les options souhaitées.
6. Démarrez le processus de calcul.
7. À la fin du calcul, cliquez sur le bouton Aperçu pour créer un aperçu temporaire du résultat.
8. Si vous souhaitez appliquer le résultat (déplacez et faites pivoter les formes réelles), cliquez sur OK.

![](/images/Arch_Nest_panel.jpg)

Panneau de tâches pour l'outil Calepinage

## Remarques

* Tous les objets doivent avoir une face.
* Pour le moment, l'outil ne fonctionnera qu'avec des objets plats ayant tous la même orientation.
* Pour le moment, le conteneur doit être rectangulaire.
* Pour le moment, la marge/l'espace entre les pièces n'est pas encore implémenté.
* Le calcul peut prendre beaucoup de temps avec de nombreux objets. Cela sera optimisé dans le futur.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Nest/fr&oldid=1437468>"