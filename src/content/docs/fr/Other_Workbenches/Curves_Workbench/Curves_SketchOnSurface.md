---
title: Curves Esquisse sur une surface
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Curves Esquisse sur une surface |
| Emplacement du menu |
| Surfaces → Sketch on Surface |
| Ateliers |
| [Curves](/Curves_Workbench/fr "Curves Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cet outil applique une esquisse sur une face courbe arbitraire, comme une étiquette sur une bouteille. L'esquisse doit être réellement attachée à une face (voir Sketch.Support). Le mode `Map` de l'esquisse n'a aucun effet sur le résultat.

![](/images/Curves_SketchOnSurface_demo.png)

Ci-dessus : l'objet `Sketch_On_Surface` appliqué à la face du cylindre (à gauche) et l'esquisse source en mode édition (à droite)

## Utilisation

1. Passez à l'atelier ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/fr "Curves Workbench/fr") (l'installation par le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") est nécessaire, si ce n'est pas déjà fait)
2. Il existe 2 méthodes pour utiliser l'outil SketchOnSurface :

   Vous avez déjà une esquisse que vous voulez appliquer sur une face

   1. Attachez l'esquisse à la face cible :
      * Dans la fenêtre de dialogue d'ancrage, sélectionnez la face.
      * Réglez le mode sur Deactivated tout en laissant la face comme première référence.
      * Fermez la fenêtre de dialogue d'attachement
      * Définissez Placement.z=0
   2. Editez l'esquisse et ajoutez un rectangle de construction (bleu) autour des géométries. Ce rectangle sera les limites paramétriques de la face.
   3. Quittez le mode d'édition.
   4. Sélectionnez l'esquisse.
   5. Activez SketchOnSurface soit :
      * En appuyant sur le bouton ![](/images/Curves_SketchOnSurface.svg).
      * En utilisant la commande **Surfaces → Sketch on Surface**.

   Vous n'avez pas encore d'esquisse à plaquer

   1. Sélectionnez la face cible dans la [vue 3D](/3D_view/fr "3D view/fr").
   2. Activez SketchOnSurface soit par :
      * En appuyant sur le bouton ![](/images/Curves_SketchOnSurface.svg).
      * En utilisant la commande **Surfaces → Sketch on Surface**.
   3. Un objet Sketch\_On\_Surface apparaît dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
   4. Développez cet objet pour faire apparaître l'esquisse Mapped\_Sketch dessous.
   5. Modifiez l'esquisse et ajoutez des géométries à l'intérieur des limites de construction bleues.
   6. Un objet SketchOnSurface sera créé sur la surface de votre objet à partir de cette esquisse.

## Options

* Fill Extrusion : lorsque la valeur Thickness n'est pas nulle, cela générera des faces lissées (les faces bleues dans la capture d'écran ci-dessus).
* Fill Faces : cela remplira toutes les figures géométriques fermées en faces (les faces rouges dans la capture d'écran ci-dessus).
* Offset : cela enfoncera les formes appliquées ci-dessus dans la face cible. Ne mettez pas un décalage plus grand que l'épaisseur, cela ferait disparaître la face à l'intérieur.
* Thickness : si elle n'est pas nulle, cela donnera de l'épaisseur aux surfaces crées ci-dessus.

## Remarques

On suppose que toute la géométrie de l'esquisse est incluse dans le cadre de construction bleu. Cela inclut toute autre géométrie de construction, ainsi que la géométrie interne visible des courbes complexes (Bézier, ellipse). Si ce n'est pas le cas, la boîte de délimitation de l'esquisse sera plus grande que le cadre de construction et le mappage final sera réduit en conséquence. Si nécessaire, [cachez la géométrie interne](/Sketcher_RestoreInternalAlignmentGeometry/fr "Sketcher RestoreInternalAlignmentGeometry/fr") qui n'est pas entièrement à l'intérieur du cadre de construction.

## Propriétés

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SketchOnSurface/fr&oldid=1564671>"