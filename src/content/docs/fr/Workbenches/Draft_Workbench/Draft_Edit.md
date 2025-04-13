---
title: Draft Éditer
---
|  |
| --- |
| Draft Éditer |
| Emplacement du menu |
| Modification → Éditer |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr") |
| Raccourci par défaut |
| D E |
| Introduit dans la version |
| - |
| Voir aussi |
| [Std Mode édition](/Std_Edit/fr "Std Edit/fr") |
|  |

## Description

La commande ![](/images/Draft_Edit.svg) **Draft Éditer** place les objets sélectionnés en mode d'édition. Dans ce mode, les propriétés des objets peuvent être modifiées graphiquement. En général, les nœuds peuvent être déplacés et, dans certains cas, les options du menu contextuel peuvent être sélectionnées. La commande peut gérer la plupart des objets Draft, mais aussi certains autres objets. Voir [Objets pris en charge](#Objets_pris_en_charge). Les objets Draft pris en charge peuvent aussi être mis en mode Draft Éditer avec la commande [Std Mode édition](/Std_Edit/fr "Std Edit/fr").

![](/images/Draft_Edit_example.png)

4 objets en mode Draft Éditer : une Draft Polyligne (rouge), un Draft Arc (noir), une Draft B-spline (vert) et une Draft Courbe de Bézier (magenta).

## Utilisation

Voir aussi : [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr") et [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr").

1. Sélectionnez un ou plusieurs objets. Notez que bien que plusieurs objets puissent être en mode Draft Édition, les objets ne peuvent être édités qu'un par un.
2. Il existe plusieurs façons de lancer la commande :
   * Si vous n'avez pas encore sélectionné d'objet : double-cliquez sur un objet dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Cela ne fonctionne que pour les objets Draft pris en charge.
   * Appuyez sur le bouton ![](/images/Draft_Edit.svg) Éditer.
   * Sélectionnez l'option **Modification → ![](/images/Draft_Edit.svg) Éditer** dans le menu.
   * Utilisez le raccourci clavier : D puis E.
   * Pour un seul objet : sélectionnez l'option **Edit** dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr"). Cela ne fonctionne que pour les objets Draft pris en charge. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
3. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Les objets sélectionnés sont marqués par des nœuds temporaires et le [panneau principal des tâches](#Panneau_principal_des_t.C3.A2ches) s'ouvre. Voir [Options](#Options) pour plus d'informations.
5. En option, utiliser un menu contextuel de nœud ou de bord. Ces menus contextuels ne sont disponibles que pour certains objets Draft. Voir [Objets pris en charge](#Objets_pris_en_charge) pour plus d'informations.
   * Effectuez l'une des opérations suivantes :
     + Sur tous les systèmes d'exploitation : maintenez la touche E enfoncée et cliquez sur le nœud ou le bord. Pour utiliser E, vous devrez peut-être cliquer une fois dans la [vue 3D](/3D_view/fr "3D view/fr") pour vous assurer qu'elle a pris en compte le sujet en question.
     + Sous Windows : maintenez la touche Alt enfoncée et cliquez sur le nœud ou l'arête.
     + Sous Linux : maintenez enfoncé Shift+Alt, Ctrl+Alt ou Alt et cliquez sur le nœud ou l'arête.
     + Sous macOS : maintenez la touche Option enfoncée et cliquez sur le nœud ou l'arête.
   * Sélectionnez une option dans le menu contextuel.
   * Si l'option sélectionnée nécessite la saisie d'un point :
     + Le [panneau des tâches des nœuds](#Modifier_les_n.C5.93uds_par_le_panneau_des_t.C3.A2ches) s'ouvre. Voir [Options](#Options) pour plus d'informations.
     + Choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez les coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
6. Déplacez un nœud de manière facultative :
   * Cliquez sur le nœud dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Le [panneau des tâches du nœud](#Modifier_les_n.C5.93uds_par_le_panneau_des_t.C3.A2ches) s'ouvre. Voir [Options](#Options) pour plus d'informations.
   * Choisissez un point dans la [vue 3D](/3D_view/fr "3D view/fr") ou rentrez les coordonnées et appuyez sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point.
   * Le résultat dépend de l'objet et du nœud sélectionné.
7. Appuyez sur Échap ou sur le bouton Fermer (le bouton en haut du panneau des tâches, sans l'image) pour terminer la commande.

## Options

Les raccourcis clavier à caractère unique disponibles dans le panneau des tâches peuvent être modifiés. Voir [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr"). Les raccourcis mentionnés ici sont les raccourcis par défaut.

### Panneau principal des tâches

* Appuyez sur Échap ou sur le bouton Fermer pour terminer la commande.

### Modifier les nœuds par le panneau des tâches

* Pour saisir manuellement des coordonnées, entrez les valeurs X, Y et Z et appuyez sur Entrée après chacune. Vous pouvez aussi appuyer sur le bouton ![](/images/Draft_AddPoint.svg) Entrer un point lorsque vous avez les valeurs souhaitées. Il est conseillé de déplacer le pointeur hors de la [vue 3D](/3D_view/fr "3D view/fr") avant de saisir les coordonnées.
* Pour utiliser des coordonnées polaires, entrez une valeur pour **Longueur** et une valeur pour **Angle**, et appuyez sur Entrée après chacune d'elles.
* Cochez la case **Angle** pour contraindre le pointeur à l'angle spécifié.
* Appuyez sur R ou cliquez sur la case à cocher **Relatif** pour activer le mode relatif. Si le mode relatif est activé, les coordonnées du point sélectionné sont relatives au point d'origine, sinon elles sont relatives à l'origine du système de coordonnées. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
* Appuyez sur G ou cliquez sur la case **Global** pour basculer en mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").
* Appuyez sur S pour activer ou désactiver [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr").

## Objets pris en charge

### [Draft Ligne](/Draft_Line/fr "Draft Line/fr") et [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr")

* Si le nœud de début ou de fin d'une polyligne ouverte est déplacé de manière à coïncider, la polyligne est fermée.
* Menu contextuel du noeud : `Supprimer un point`. Il doit rester au moins deux points.
* Menu contextuel de l'arête : `Ajouter un point`, `Ouvrir une polyligne`/`Fermer une polyligne` ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et `Inverser une polyligne`.

### [Draft Arc](/Draft_Arc/fr "Draft Arc/fr") et [Draft Arc par 3 points](/Draft_Arc_3Points/fr "Draft Arc 3Points/fr")

* Menu contextuel du nœud central : `Déplacer l'arc`.
* Menu contextuel du nœud de départ : `Définir le premier angle`.
* Menu contextuel du nœud final : `Définir le dernier angle`.
* Menu contextuel du nœud central : `Définir le rayon`.
* Menu contextuel du bord : `Inverser l'arc`.

### [Draft Cercle](/Draft_Circle/fr "Draft Circle/fr")

* Aucun menu contextuel pour cet objet.

### [Draft Ellipse](/Draft_Ellipse/fr "Draft Ellipse/fr")

* Aucun menu contextuel pour cet objet.

### [Draft Rectangle](/Draft_Rectangle/fr "Draft Rectangle/fr")

* Aucun menu contextuel pour cet objet.

### [Draft Polygone](/Draft_Polygon/fr "Draft Polygon/fr")

* Aucun menu contextuel pour cet objet.

### [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr")

* Si le nœud de début ou de fin d'une spline ouverte est déplacé de façon à ce qu'ils coïncident, la spline est fermée.
* Menu contextuel du nœud : `Supprimer un point`. Pour une spline ouverte, il doit rester au moins deux points. Pour une spline fermée, le nombre minimum de points est de trois.
* Menu contextuel de l'arête : `Ajouter un point`, `Ouvrir une polyligne`/`Fermer une polyligne` ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et `Inverser une spline` ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).

### [Draft Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr") et [Draft Courbe de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr")

* Si le nœud de début ou de fin d'une courbe ouverte est déplacé de façon à ce qu'ils coïncident, la courbe est fermée.
* Menu contextuel du nœud : `Supprimer un point`, `Rendre aigu`, `Rendre tangent` et `Rendre symétrique`.
* Menu contextuel de l'arête : `Ajouter un point`, `Ouvrir une polyligne`/`Fermer une polyligne` ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")) et `Inverser la courbe` ([introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")).

### [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr")

* Les dimensions angulaires ne peuvent pas être éditées.
* Les nœuds de début et de fin des dimensions paramétriques ne peuvent pas être déplacés.
* Pas de menu contextuel pour cet objet.

### [Arch Mur](/Arch_Wall/fr "Arch Wall/fr")

* Un seul noeud permettant de contrôler la hauteur du mur est affiché au-dessus de la Données**Placement** du mur.
* Pas de menu contextuel pour cet objet.

### [Arch Structure](/Arch_Structure/fr "Arch Structure/fr")

* Aucun menu contextuel pour cet objet.

### [Arch Fenêtre](/Arch_Window/fr "Arch Window/fr")

* Aucun menu contextuel pour cet objet.

### [Arch Espace](/Arch_Space/fr "Arch Space/fr")

* Aucun menu contextuel pour cet objet.

### [Arch Découpe de panneaux](/Arch_Panel_Cut/fr "Arch Panel Cut/fr")

* Aucun menu contextuel pour cet objet.

### [Arch Panneau de feuille](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr")

* Aucun menu contextuel pour cet objet.

### [Part Cube](/Part_Box/fr "Part Box/fr")

* Aucun menu contextuel pour cet objet.

### [Part Cylindre](/Part_Cylinder/fr "Part Cylinder/fr")

* Aucun menu contextuel pour cet objet.

### [Part Sphère](/Part_Sphere/fr "Part Sphere/fr")

* Aucun menu contextuel pour cet objet.

### [Part Cône](/Part_Cone/fr "Part Cone/fr")

* Aucun menu contextuel pour cet objet.

### [Part Ligne](/Part_Line/fr "Part Line/fr")

* Aucun menu contextuel pour cet objet.

### [Sketcher Esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr")

* Seules les esquisses qui contiennent une seule ligne non contrainte peuvent être éditées.
* Pas de menus contextuels pour cet objet.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* La couleur des nœuds temporaires est la même que celle des symboles d'aimantation. Cette couleur peut être modifiée dans les préférences : **Édition → Préférences... → Draft → Grille et aimantation → Couleur des symboles d'aimantation**. Notez que cette couleur n'est pas utilisée pour les nœuds temporaires affichés pour les [Draft Courbes de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr"). Ces noeuds utilisent la Vue**Couleur de ligne** de la courbe à la place.
* La taille des nœuds dépend de : **Édition → Préférences... → Affichage → Vue 3D → Taille des marqueurs**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Il n'existe pas de méthode Python pour les objets Draft Edition. Pour émuler les résultats de la commande, les propriétés géométriques des objets doivent être modifiées.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Edit/fr&oldid=1513954>"