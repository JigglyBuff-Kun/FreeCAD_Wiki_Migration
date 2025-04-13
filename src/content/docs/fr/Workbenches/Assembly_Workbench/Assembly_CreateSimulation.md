---
title: Assembly Simulation
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly Simulation |
| Emplacement du menu |
| Assemblage → Créer une simulation |
| Ateliers |
| [Assembly](/Assembly_Workbench/fr "Assembly Workbench/fr") |
| Raccourci par défaut |
| S |
| Introduit dans la version |
| 1.1 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/Assembly_CreateSimulation.svg) Assembly Simulation crée une simulation de l'assemblage en cours.

## Utilisation

1. Assurez-vous qu'un assemblage est actif.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/Assembly_CreateSimulation.svg) Créer une simulation.
   * Sélectionnez l'option **Assemblage → ![](/images/Assembly_CreateSimulation.svg) Créer une simulation** du menu.
   * Utilisez le raccourci clavier : S.
3. Si aucun objet Simulations ne préexiste : un conteneur Simulations est ajouté à l'assemblage actif.
4. Un objet Simulation est ajouté au conteneur Simulations.
5. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Créer une simulation** s'ouvre.
6. Ajouter un objet de mouvement :
   * Appuyez sur le bouton vert plus pour ouvrir une fenêtre de dialogue.
   * Sélectionnez une liaison dans la liste.
   * Si nécessaire, sélectionnez un type de mouvement.
   * Vous pouvez éditer la formule.
   * Appuyez sur le bouton OK pour fermer la fenêtre de dialogue.
   * Un nouveau mouvement est ajouté à la liste.
   * Vous pouvez répéter l'action pour créer un autre mouvement.
7. Vous pouvez ajuster les paramètres de simulation.
8. Cliquez sur le bouton Générer.
9. Une section **Lecteur de l'animation** est ajoutée au panneau des tâches.
   * Utilisez les widgets du lecteur pour animer l'assemblage.
10. Cliquez sur le bouton OK pour arrêter l'outil et fermer le panneau des tâches.

### Panneau des tâches

Lorsque le [panneau des tâches](/Task_panel/fr "Task panel/fr") **Créer une simulation** est ouvert pour la première fois, la liste **Mouvements** est vide et le **Lecteur d'animation** est caché.

Double-cliquez sur un objet Simulation existant dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pour ouvrir de nouveau le panneau des tâches et modifier les paramètres.

![](/images/Assembly_CreateSimulation-Task.png)

* **Mouvements** : liste le contenu de la propriété **Group**, c'est-à-dire les objets Motion dans le conteneur Simulations.
  + Bouton ![](/images/List-add.svg) : ouvre une fenêtre de dialogue (sans nom) pour ajouter un objet Motion à la propriété **Group** et met à jour la liste.
  + Bouton ![](/images/Edit-delete.svg) : supprime un objet Motion de la propriété **Group** et met à jour la liste.
* **Paramètres de la simulation** : définit les propriétés de l'objet Simulation.
  + **Début** : définit la propriété **a Time Start**.
  + **Fin** : définit la propriété **b Time End**.
  + **Pas** : définit la propriété **c Time Step Output**.
  + **Tolérance** : définit la propriété **f Global Error Tolerance**.
* Bouton Générer : calcule les mouvements listés et ajoute la section **Lecteur d'animation** au panneau des tâches.
* **Lecteur d'animation** : contrôle les positions des éléments assemblés en fonction de l'image en cours.
  + Curseur **Image** : définit l'image en cours, ne définit aucune propriété.
  + **Nombre d'images par seconde** : définit la propriété **j Frames Per Second**, c'est à dire la vitesse de l'animation.
  + Boutons du lecteur : ils contrôlent la façon de changer l'image en cours, de gauche à droite :

    :   Précédent, Reculer, Arrêter, Avancer, Suivant.

### Fenêtre de dialogue du mouvement

Cette fenêtre de dialogue crée un objet Motion qui agit comme un actionneur pour un seul degré de liberté (DOF = degree of freedom) d'une certaine articulation et définit ses propriétés.

![](/images/Assembly_CreateSimulation-Motion.png)

Le texte d'aide supplémentaire apparaît si le bouton Aide est pressé.  
(Ne vous préoccupez pas de l'apparence du bouton OK, il est actif et utilisable)

* **Liaison** : affiche une liste de toutes les liaisons de l'assemblage actif pour définir la propriété **Joint**.
* **Type de mouvement** : affiche une liste des degrés de liberté disponibles dans la liaison sélectionnée pour définir la propriété **Motion Type**.

  :   (Par exemple, nous pouvons choisir entre `Angular` et `Linear` pour une liaison cylindrique).
* **Formule** : définit la propriété **Formula**.
* Aide/Masquer l'aide : permettent d'activer ou de désactiver la visibilité du texte d'aide concernant les formules.

## Remarques

* Le nombre d'images est la différence entre la valeur **Début** et la valeur **Fin** divisée par la valeur **Pas** (toutes les données sont en seconde, ce qui donne un nombre entier sans unité). Les valeurs par défaut sont les suivantes : (1.0 s - 0.0 s) / 0.01 s = 100
* Pour obtenir une révolution complète d'un mouvement angulaire, nous pouvons faire l'une ou l'autre des choses suivantes :
  + Saisir `2 * pi * temps` dans le champ Formule et définir une durée (Fin - Début) d'une seconde sous Paramètres de la simulation du panneau des tâches.
  + Saisir `1 * temps` dans le champ Formule et définir une durée (Fin - Début) de (2 \* pi =) 6.283 secondes sous Paramètres de la simulation du panneau des tâches.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

### Simulations

Un conteneur **Simulations** est un objet `Assembly::SimulationGroup` dérivé d'un objet [App DocumentObjectGroup](/App_DocumentObjectGroup/fr "App DocumentObjectGroup/fr") et héritant de toutes ses propriétés. Il n'a pas de propriétés supplémentaires.

### Simulation

Un objet **Simulation** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Group** (`LinkList`) : objets Motion de l'objet.
* Données (Hidden)**\_ Group Touched** (`Bool`) :

Simulation

* Données**a Time Start** (`Time`) : par défaut `0.0 s`. Début de la simulation.
* Données**b Time End** (`Time`) : par défaut `4.0 s`. Fin de simulation.
* Données**c Time Step Output** (`Time`) : par défaut `0.01 s`. Pas du temps de la simulation.
* Données**f Global Error Tolerance** (`Float`) : par défaut `1e-06`. Tolérance d'erreur globale de l'intégration.
* Données**j Frames par seconde** (`Integer`) : par défaut `30`. Nombre d'images par seconde.

### Vue

Space

* Vue**Decimals** (`Integer`) : par défaut `9`. Nombre de décimales à utiliser pour les textes calculés.

### Mouvement

Un objet **Motion** est dérivé d'un [App FeaturePython](/App_FeaturePython/fr "App FeaturePython/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Motion

* Données**Formula** (`String`) : formule du mouvement. Par exemple `1.0*time`.
* Données**Joint** (`XLinkSubHidden`) : liaison déplacée par le mouvement.
* Données**Motion Type** (`Enumeration`) : type de mouvement. Les options sont les suivantes : `Angular` et `Linear`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateSimulation/fr&oldid=1559573>"