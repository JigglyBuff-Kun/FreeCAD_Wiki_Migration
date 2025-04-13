---
title: Draft Plan de travail
---
|  |
| --- |
| Draft Plan de travail |
| Emplacement du menu |
| Utilitaires → Sélectionner un plan |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| Draft : W P |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Objet Proxy pour plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") |
|  |

## Description

La commande ![](/images/Draft_SelectPlane.svg) **Draft Plan de travail** définit le plan de travail en cours sous Draft. C'est le plan dans la [vue 3D](/3D_view/fr "3D view/fr") où les nouveaux objets de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") sont créés. Un nouveau plan de travail peut être basé sur l'une des nombreuses [présélections](#Utilisation_avec_des_présélections) ou sur une sélection. La sélection peut être créée avant ([présélection](#Utilisation_avec_présélection)) ou après ([post-sélection](#Utilisation_avec_post-sélection)) le lancement de la commande.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : pour chaque vue 3D, un plan de travail distinct est enregistré.

Le bouton ![](/images/Draft_tray_button_plane.png) dans [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") change en fonction du plan de travail courant. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si le plan de travail n'est pas réglé sur **Automatique**, un astérisque (**\***) est ajouté à l'étiquette du bouton si l'origine du plan de travail ne correspond pas à l'origine globale.

![](/images/WorkingPlane_example.png)

Formes créées sur différents plans de travail

## Utilisation avec présélection

1. Faites l'une des choses suivantes :
   * Sélectionnez un seul objet. Les objets suivants sont pris en charge :
     + [Draft Proxy pour plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") : la Vue**View Data** (position de la caméra) et la Vue**Visibility Map** (la visibilité enregistrée des objets) du proxy plan de travail sont également restaurées.
     + [Arch Axes](/Arch_Axis/fr "Arch Axis/fr") ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"))
     + [Arch Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr") ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"))
     + [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr").
     + [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr").
     + Les objets [Std Parts](/Std_Part/fr "Std Part/fr") : pour éviter de sélectionner des sous-éléments, il est conseillé de les sélectionner dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
     + Les objets non solides constitués d'une seule face plane ou d'une seule arête courbe, ou ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")) qui ont trois sommets ou plus.
     + Les objets solides ou objets sans forme ayant une propriété Données**Placement**. ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"))
   * Sélectionnez un ou plusieurs sous-éléments. Vous pouvez sélectionner :
     + Une face plane.
     + Une arête incurvée.
     + Trois sommets.
     + Une arête et un sommet, ou deux arêtes. Les sommets combinés doivent définir un plan. ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"))
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_tray_button_plane.png) de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr").
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Utilitaires → ![](/images/Draft_SelectPlane.svg) Sélectionner un plan** du menu ou dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
   * Draft : utilisez le raccourci clavier : W puis P.
3. Le plan de travail et le bouton de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") sont mis à jour.

## Utilisation avec post-sélection

1. Il y a plusieurs façons de lancer la commande :
2. Le panneau de tâches **Configuration du plan de travail** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Effectuez l'une des opérations suivantes :
   * Sélectionnez un seul objet. Voir le [paragraphe précédent](#Utilisation_avec_présélection) pour les objets pris en charge.
   * Sélectionner un ou plusieurs sous-éléments. Voir le [paragraphe précédent](#Utilisation_avec_présélection).
4. Cliquez n'importe où dans la [vue 3D](/3D_view/fr "3D view/fr") pour confirmer la sélection et terminer la commande.
5. Le plan de travail et le bouton de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") sont mis à jour.

## Utilisation avec des présélections

1. Il y a plusieurs façons de lancer la commande :
2. Le panneau de tâches **Configuration du plan de travail** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Appuyez sur l'un des boutons pour terminer la commande.
4. Le plan de travail et le bouton de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") sont mis à jour.

## Options

* Appuyez sur le bouton ![](/images/View-top.svg) Haut (XY) pour aligner le plan de travail avec le plan XY du système de coordonnées global.
* Appuyez sur le bouton ![](/images/View-front.svg) Face (XZ) pour aligner le plan de travail sur le plan XZ du système de coordonnées global.
* Appuyez sur le bouton ![](/images/View-right.svg) Côté (YZ) pour aligner le plan de travail sur le plan YZ du système de coordonnées global.
* Appuyez sur le bouton ![](/images/View-isometric.svg) Aligner selon la vue pour aligner le plan de travail sur la [vue 3D](/3D_view/fr "3D view/fr") en cours. Si la case **Centrer le plan dans la vue** n'est pas cochée, l'origine du plan de travail correspondra à l'origine du système de coordonnées global, sinon elle correspondra au centre de la [vue 3D](/3D_view/fr "3D view/fr") en cours.
* Appuyez sur le bouton ![](/images/View-axonometric.svg) Automatique pour régler le plan de travail en **Automatique**. Un plan de travail réglé sur **Automatique** s'alignera automatiquement sur la [vue 3D](/3D_view/fr "3D view/fr") en cours chaque fois qu'une commande de Draft ou de [BIM](/BIM_Workbench/fr "BIM Workbench/fr") nécessitant l'entrée de points est lancée. Cela équivaut à appuyer sur le bouton ![](/images/View-isometric.svg) Aligner selon la vue avant d'utiliser la commande. De plus, le plan de travail s'alignera sur les faces planes qui ont été sélectionnées avant de lancer la commande, ou lorsque des points sur des faces planes sont sélectionnés pendant la commande.
* **Décalage** définit la distance perpendiculaire entre le plan calculé et le plan de travail réel en cours.
* Cochez la case **Centrer le plan dans la vue** pour placer l'origine du plan de travail au centre de la [vue 3D](/3D_view/fr "3D view/fr") en cours. Cette option peut être utile en combinaison avec le bouton ![](/images/View-isometric.svg) Aligner selon la vue.
* Sélectionnez un sommet dans la [vue 3D](/3D_view/fr "3D view/fr") et appuyez sur le bouton ![](/images/Draft_Move.svg) Déplacer le plan de travail pour déplacer le plan de travail afin que son origine corresponde à la position du sommet sélectionné.
* Le bouton **Couleur de la grille** permet de changer rapidement la couleur de la grille. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* **Espacement de la grille** définit la distance entre les lignes de la grille.
* La valeur de **Ligne principale tous les** détermine l'endroit où les lignes principales de la grille sont dessinées. Les lignes de grille principales sont légèrement plus épaisses que les lignes de grille secondaires. Par exemple, si l'espacement de la grille est de `0.5 m` et qu'une ligne principale est tracée toutes les `10 carrés`, une telle ligne sera tracée tous les `5 m`.
* La valeur de **Taille de la grille** détermine le nombre de carrés de la grille dans les directions X et Y de la grille.
* **Rayon d'aimantation** est la distance maximale à laquelle [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") détecte les intersections des lignes de la grille.
* Appuyez sur le bouton ![](/images/View-fullscreen.svg) Centrer la vue pour aligner la [vue 3D](/3D_view/fr "3D view/fr") sur le plan de travail en cours.
* Appuyez sur le bouton ![](/images/Sel-back.svg) Précédent pour réinitialiser le plan de travail à sa position précédente.
* Appuyez sur le bouton Suivant ![](/images/Sel-forward.svg) pour réinitialiser le plan de travail à sa position suivante. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Appuyez sur Échap ou sur le bouton Fermer pour abandonner la commande.

## Remarques

* Il peut être utile d'aligner la [vue 3D](/3D_view/fr "3D view/fr") avec le plan de travail Draft sélectionné. Par exemple, après avoir changé le plan de travail en vue de face, vous pouvez vouloir passer à la [vue de face](/Std_ViewFront/fr "Std ViewFront/fr") également.
* La grille peut être basculée avec la commande [Draft Visibilité de la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr").
* En double-cliquant sur [Draft Proxy pour plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), vous pouvez rapidement passer d'un plan de travail à un autre.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Les paramètres de la grille dans le panneau des tâches ainsi que plusieurs autres paramètres de la grille sont disponibles en tant que préférences : **Édition → Préférences... → Draft → Grille et aimantation**.
* Le rayon d'aimantation peut également être modifié à la volée (voir [Draft Aimantation](/Draft_Snap/fr#Pr.C3.A9f.C3.A9rences "Draft Snap/fr")) ou en modifiant : **Outils → Éditer les paramètres... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") :

Le module WorkingPlane propose deux classes pour créer des objets plan de travail : la classe `PlaneBase` et la classe `PlaneGui`. La seconde classe hérite de la première. Les objets de la classe `PlaneGui` interagissent avec l'interface graphique (le bouton de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr")), la [vue 3D](/3D_view/fr "3D view/fr") et la [grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr"). Les objets `PlaneBase` ne le sont pas.

Utilisez la méthode `get_working_plane()` du module WorkingPlane pour obtenir une instance de la classe `PlaneGui` liée à la vue 3D en cours. La méthode renvoie le plan de travail existant lié à la vue ou crée un nouveau plan de travail si nécessaire.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

La classe `PlaneBase` peut être utilisée pour créer des plans de travail indépendants de l'interface graphique :

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/fr&oldid=1513964>"