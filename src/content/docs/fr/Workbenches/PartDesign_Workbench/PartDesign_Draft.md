---
title: PartDesign Dépouille
---
|  |
| --- |
| PartDesign Dépouille |
| Emplacement du menu |
| PartDesign → Appliquer une fonction d'habillage → Dépouille |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/PartDesign_Draft.svg) **PartDesign Dépouille** crée des dépouilles angulaires sur les faces sélectionnées d'un objet. Il ajoute un objet **Draft** au document avec sa représentation correspondante dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

|  |  |
| --- | --- |
| Sélectionnez une ou plusieurs faces de l'objet avant de lancer l'outil. Ici, 2 faces ont été sélectionnées.    Montre les paramètres de dépouille dans le panneau de tâches.    2 faces ont été ajoutées, et une dépouille de 10 degrés a été appliquée. Le plan inférieur est resté identique, tandis que la dépouille a réduit le plan supérieur    Le plan neutre a été déplacé vers le haut. Maintenant, le plan supérieur est resté identique, tandis que la dépouille a agrandi le plan inférieur.    La direction de la dépouille est réglée sur le bord inférieur droit, ce qui fait que la dépouille est tirée vers la gauche.    Cocher la case Inverser la direction a permis d'appliquer une dépouille vers l'intérieur plutôt que vers l'extérieur. |  |

## Utilisation

### Ajouter une dépouille

1. Vous pouvez accessoirement [activer](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") le corps auquel appliquer la dépouille.
2. Sélectionnez une ou plusieurs faces du corps.
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_Draft.svg) Dépouille.
   * Sélectionnez l'option **PartDesign → Appliquer une fonction d'habillage → ![](/images/PartDesign_Draft.svg) Dépouille** dans le menu.
4. S'il n'y a pas de corps actif, et qu'il y a deux corps ou plus dans le document, le dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il n'y a qu'un seul corps, il sera activé automatiquement.
5. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la dépouille**. Voir [Options](#Options) pour plus d'informations.
6. Appuyez sur le bouton OK pour terminer.

:   *Souvenez-vous* :

    * Puisqu'il doit y avoir au moins une face pour la fonction, la dernière face restant dans la liste ne peut pas être retirée.

### Modifier une dépouille

1. Faites l'une des choses suivantes :
   * Double-cliquez sur l'objet Draft dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet Draft dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Modifier Dépouille** dans le menu contextuel.
2. Le [Panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de la dépouille** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Appuyez sur le bouton OK pour terminer.

## Options

* **Ajouter une face** : ajoute des faces à la sélection en appuyant sur le bouton Ajouter une face et en sélectionnant d'autres faces.
* **Supprimer une face** : moyen de supprimer des faces de la sélection :
  + Sélectionnez une ou plusieurs faces dans la liste et appuyez sur la touche Suppr ou cliquez avec le bouton droit de la souris sur la liste et sélectionnez **Enlever** dans le menu contextuel.
  + Appuyez sur le bouton Supprimer une face. Toutes les faces précédemment sélectionnées sont surlignées en violet. Sélectionnez chaque visage à supprimer.
* **Angle de dépouille** : angle de dépouille en entrant une valeur ou en cliquant sur les flèches haut/bas.
* **Plan neutre** : définit le plan neutre en appuyant sur le bouton Plan neutre et en sélectionnant le plan qui doit rester identique.
* **Direction** : définit la direction de la dépouille en appuyant sur le bouton Direction, puis sélectionnez une arête. La direction de la dépouille n'est effective que si le plan neutre a été défini. Les résultats peuvent être imprévisibles.
* **Inverser la direction de la dépouille** : inverse la direction de la dépouille en cochant la case **Inverser la direction de la dépouille**. Cela fera basculer la dépouille entre des angles positifs et négatifs.

## Remarques

* L'outil Dépouille ne fonctionne que sur les faces qui ne sont pas connectées tangentiellement à d'autres faces. Une erreur courante consiste à essayer d'appliquer une dépouille à une face à laquelle un congé a déjà été appliqué. Pour résoudre ce problème, retirez le congé, appliquez la dépouille si nécessaire, puis réappliquez le congé.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part Dépouille est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Angle** (`Angle`) : ne peut pas être négatif. Valeur par défaut : `1.5 °`.
* Données**Reversed** (`Bool`) : valeur par défaut : `false`.
* Données**Base** (`LinkSub`) : sous-lien vers la liste des arêtes et des faces sélectionnées de l'élément parent.
* Données**Support Transform** (`Bool`) : inclut la forme additive/soustractive de base lorsqu'elle est utilisée dans les caractéristiques de motif. S'il est désactivé, seule la partie habillée de la forme est utilisée pour le modelage. Valeur par défaut : `false`.
* Données (hidden)**Add Sub Shape** (`PartShape`).
* Données (hidden)**Base Feature** (`Link`) : lien vers l'élément parent.
* Données (hidden)**\_ Body** (`LinkHidden`) : lien vers le corps du parent.

Draft

* Données**Plan neutre** (`LinkSub`) : sous-lien vers la liste de l'élément parent contenant le plan neutre.
* Données**Direction de l'attraction** (`LinkSub`)

Part Design

* Données**Refine** (`Bool`) : affiner la forme (nettoie les arêtes redondantes) après l'ajout/soustraction. La valeur par défaut est déterminée par la préférence **Affiner automatiquement le modèle après une opération sur une esquisse**. Voir [PartDesign Préférences](/PartDesign_Preferences/fr#G.C3.A9n.C3.A9ral "PartDesign Preferences/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/fr&oldid=1514594>"