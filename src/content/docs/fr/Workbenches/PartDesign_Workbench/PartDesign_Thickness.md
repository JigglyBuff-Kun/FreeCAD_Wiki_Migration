---
title: PartDesign Évidement
---
|  |
| --- |
| PartDesign Évidement |
| Emplacement du menu |
| PartDesign → Appliquer une fonction d'habillage → Évidement |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Part Évider](/Part_Thickness/fr "Part Thickness/fr") |
|  |

## Description

L'outil ![](/images/PartDesign_Thickness.svg) **PartDesign Évidement** transforme un corps solide en un objet creux avec au moins une face ouverte, en donnant à chacune de ses faces restantes une épaisseur uniforme. Il ajoute un objet **Thickness** au document avec sa représentation correspondante dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").

![](/images/PartDesign_Thickness_example.svg)

Solide de base (A) → Solide avec la face sélectionnée à ouvrir (B) → Objet creux résultant (C)

## Utilisation

### Créer un évidement

1. [Activez](/PartDesign_Body/fr#Statut_actif "PartDesign Body/fr") le corps auquel appliquer l'évidement.
2. Sélectionnez une ou plusieurs faces du corps.
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/PartDesign_Thickness.svg) Évidement.
   * Sélectionnez l'option **PartDesign → Appliquer une fonction d'habillage → ![](/images/PartDesign_Thickness.svg) Évidement** du menu.
4. S'il n'y a pas de corps actif, et qu'il y a deux corps ou plus dans le document, la fenêtre de dialogue **Corps actif requis** s'ouvrira et vous invitera à en activer un. S'il n'y a qu'un seul corps, il sera activé automatiquement.
5. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de l'évidement** s'ouvre. Voir [Options](#Options) pour plus d'informations.
6. Appuyez sur le bouton OK pour terminer.

:   *Souvenez-vous* :

    * Puisqu'il doit y avoir au moins une face pour la fonction, la dernière face restante dans la liste ne peut pas être retirée.

### Modifier un évidement

1. Effectuez l'une des opérations suivantes :
   * Double-cliquez sur l'objet Thickness dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   * Cliquez avec le bouton droit de la souris sur l'objet Thickness dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") et sélectionnez **Modifier l'évidement** dans le menu contextuel.
2. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") des **Paramètres de l'évidement** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Appuyez sur le bouton OK pour terminer.

## Options

* **Ajouter une face** : ajoutez des faces à la sélection en appuyant sur le bouton Ajouter une face et en sélectionnant d'autres faces.
* **Supprimer la face** : choisissez un moyen de supprimer des faces de la sélection :
  + Sélectionnez une ou plusieurs faces dans la liste et appuyez sur la touche Suppr ou cliquez droit sur la liste et sélectionnez **Enlever** dans le menu contextuel.
  + Appuyez sur le bouton Supprimer la face. Toutes les faces précédemment sélectionnées sont surlignées en violet. Sélectionnez chaque visage à supprimer.
* Cliquez sur **Épaisseur** : définissez l'épaisseur de la paroi soit en éditant la valeur, soit en cliquant sur les flèches haut/bas.
* **Mode** :
  + **Objet creux** : sélectionnez cette option pour obtenir un élément comme un vase, sans dessus mais avec le fond.. Seule cette option peut être sélectionnée.
  + **Tube** : non implémenté. Voir [ce sujet du forum](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
  + **Recto-verso** : non implémenté. Voir [ce sujet du forum](https://forum.freecadweb.org/viewtopic.php?p=484495#p484495).
* **Type de raccordement** :
  + **Arc** : lorsque des faces non tangentielles sont décalées, les nouvelles faces qui ne se croisent pas sont jointes par un congé dont le rayon est égal à l'épaisseur définie.
  + **Intersection** : lorsque des faces non tangentielles sont décalées, les nouvelles faces qui ne se croisent pas sont prolongées pour se rencontrer à leur intersection virtuelle.
* **Intersection** : lorsque cette option est cochée, les auto-intersections dans certains modèles sont évitées. Cette option n'est pas recommandée car elle repose sur une [méthode incomplète d'OpenCASCADE](https://dev.opencascade.org/doc/refman/html/class_b_rep_offset_a_p_i___make_thick_solid.html#af78f35025a31e2ce8bd96c82fb33a981).
* **Générer l'épaisseur vers l'intérieur** : lorsque cette case est cochée, les faces sont décalées vers l'intérieur.

## Remarques

* Si l'évidement va vers l'intérieur, la valeur doit être inférieure à la plus petite hauteur du corps.
* L'outil peut échouer avec des formes complexes. Les outils [PartDesign Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr") ou [PartDesign Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr") peuvent mieux fonctionner pour créer des formes complexes.
* Erreurs connues :
  + BRep\_API : commande non effectuée.
  + BRep\_Tool : aucun paramètre sur l'arête.
  + Echec silencieux.

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet PartDesign Thickness est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Base

* Données**Base** (`LinkSub`) : sous-lien vers la liste des arêtes et des faces sélectionnées de l'élément parent.
* Données**Support Transform** (`Bool`) : inclut la forme additive/soustractive de base lorsqu'elle est utilisée dans les caractéristiques de motif. S'il est désactivé, seule la partie habillée de la forme est utilisée pour le modelage. Valeur par défaut : `false`.
* Données (hidden)**Add Sub Shape** (`PartShape`)
* Données (hidden)**Base Feature** (`Link`) : lien vers l'élément parent.
* Données (hidden)**\_ Body** (`LinkHidden`) : lien vers le corps du parent.

Part Design

* Données**Refine** (`Bool`) : affiner la forme (nettoyer les arêtes redondantes) après l'ajout/soustraction. La valeur par défaut est déterminée par la préférence **Affiner automatiquement le modèle après une opération d'esquisse**. Voir [PartDesign Préférences](/PartDesign_Preferences/fr#G.C3.A9n.C3.A9ral "PartDesign Preferences/fr").

Thickness

* Données**Value** (`Length`) : valeur de l'épaisseur. Valeur par défaut : `1 mm`.
* Données**Mode** (`Enumeration`) : mode. `Skin` (par défaut), `Pipe` ou `Recto verso`. Seule `Skin` est implémentée.
* Données**Join** (`Enumeration`) : type de raccordement. `Arc` (par défaut) ou `Intersection`.
* Données**Reversed** (`Bool`) : générer l'épaisseur vers l'intérieur du solide. Valeur par défaut : `false`.
* Données**Intersection** (`Bool`) : activer la gestion de l'intersection. Valeur par défaut : `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/fr&oldid=1508691>"