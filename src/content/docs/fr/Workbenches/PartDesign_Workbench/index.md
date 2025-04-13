---
title: Atelier PartDesign
---

![](/images/Workbench_PartDesign.svg)

Icône de l'Atelier PartDesign

## Introduction

L'![](/images/Workbench_PartDesign.svg) **atelier PartDesign** fournit des outils pour la modélisation de composants solides. Il est principalement axé sur la création de composants mécaniques qui peuvent être fabriqués et assemblés en un produit fini. Néanmoins, les solides créés peuvent en général être utilisés à d'autres fins, tels que la [modélisation BIM](/BIM_Workbench/fr "BIM Workbench/fr"), l'[analyse par éléments finis](/FEM_Workbench/fr "FEM Workbench/fr") ou l'[usinage et l'impression 3D](/CAM_Workbench/fr "CAM Workbench/fr").

L'atelier PartDesign utilise une méthodologie basée sur les fonctions. Un composant est représenté par le conteneur d'un objet Corps (Body en anglais). Le corps définit un système de coordonnées local et contient les fonctions cumulatives qui définissent le composant. La plupart des fonctions sont basées sur des esquisses paramétriques et sont soit additives, soit soustractives. Par exemple, l'outil [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") ajoute l'esquisse extrudée au solide en cours de développement, tandis que l'outil [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") soustrait l'esquisse extrudée. Chaque fonction est cumulative et s'appuie sur le résultat des fonctions précédentes. Il est également possible d'utiliser des primitives ([Cylindre](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr"), [Sphère](/PartDesign_AdditiveSphere/fr "PartDesign AdditiveSphere/fr"), etc.) ainsi que des solides créés en dehors du corps comme des fonctions.

Voir la page [Édition de fonctions](/Feature_editing/fr "Feature editing/fr") pour une explication plus complète de ce processus, puis voir [PartDesign Tutoriel pour créer une pièce simple](/Creating_a_simple_part_with_PartDesign "Creating a simple part with PartDesign") pour commencer à créer des solides.

L'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") fournit une méthodologie alternative à la [géométrie de construction de solides](/Constructive_solid_geometry/fr "Constructive solid geometry/fr") (CSG en anglais) pour la construction de formes. Pour une discussion détaillée sur l'atelier Part par rapport à l'atelier PartDesign, voir [Part et PartDesign](/Part_and_PartDesign/fr "Part and PartDesign/fr").

![](/images/PartDesign_Workbench_Example.jpg)

## Outils

Les outils de PartDesign se situent dans le menu **PartDesign** qui apparaît lorsque l'atelier PartDesign est chargé.

### Outils d'assistance de PartDesign

- ![](/images/PartDesign_Body.svg) [Corps](/PartDesign_Body/fr "PartDesign Body/fr") : crée un objet [Body](/Body/fr "Body/fr") dans le document actif et le rend actif.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer une esquisse :

: \- ![](/images/PartDesign_NewSketch.svg) [Esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") : crée une nouvelle esquisse sur un plan ou une face sélectionnée. Si rien n'est sélectionné, l'utilisateur est invité à sélectionner un plan dans le panneau Tâches. L'interface bascule ensuite vers l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") en mode d'édition d'esquisse.

: \- ![](/images/Sketcher_MapSketch.svg) [Ancrer une esquisse](/Sketcher_MapSketch/fr "Sketcher MapSketch/fr") : ancre une esquisse à la géométrie sélectionnée dans le corps actif.

: \- ![](/images/Sketcher_EditSketch.svg) [Modifier une esquisse](/Sketcher_EditSketch/fr "Sketcher EditSketch/fr") : ouvre l'esquisse sélectionnée pour la modifier.

- ![](/images/Sketcher_ValidateSketch.svg) [Valider une esquisse](/Sketcher_ValidateSketch/fr "Sketcher ValidateSketch/fr") : vérifie la tolérance de différents points et les ajuste.

- ![](/images/Part_CheckGeometry.svg) [Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") : vérifie la géométrie des objets sélectionnés pour en détecter les erreurs.

- ![](/images/PartDesign_ShapeBinder.svg) [Forme liée](/PartDesign_ShapeBinder/fr "PartDesign ShapeBinder/fr") : crée une forme liée référençant la géométrie d'un seul objet parent.

- ![](/images/PartDesign_SubShapeBinder.svg) [Sous forme liée](/PartDesign_SubShapeBinder/fr "PartDesign SubShapeBinder/fr") : crée une forme liée référençant la géométrie d'un ou plusieurs objets parents.

- ![](/images/PartDesign_Clone.svg) [Clone](/PartDesign_Clone/fr "PartDesign Clone/fr") : crée un clone dans le corps actif.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer une référence (version 1.0 et précédentes) :

: \- ![](/images/PartDesign_Plane.svg) [Plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr") : crée un plan de référence dans le corps actif. (version 1.0 et précédentes)

: \- ![](/images/PartDesign_Line.svg) [Ligne de référence](/PartDesign_Line/fr "PartDesign Line/fr") : crée une ligne de référence dans le corps actif. (version 1.0 et précédentes)

: \- ![](/images/PartDesign_Point.svg) [Point de référence](/PartDesign_Point/fr "PartDesign Point/fr") : crée un point de référence dans le corps actif. (version 1.0 et précédentes)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Système de coordonnées local](/PartDesign_CoordinateSystem/fr "PartDesign CoordinateSystem/fr") : crée un système de coordonnées local attaché à la géométrie de référence dans le corps actif. (version 1.0 et précédentes)

: [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") : ces outils ont été remplacés par de nouveaux [outils de référence](/Std_Base/fr#Part_Datums "Std Base/fr").

### Outils de modélisation de PartDesign

#### Outils additifs

Ces outils permettent de créer des fonctions de base ou d'ajouter de la matière à un corps solide existant.

- ![](/images/PartDesign_Pad.svg) [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") : extrude un objet solide à partir de l'esquisse sélectionnée.

- ![](/images/PartDesign_Revolution.svg) [Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr") : crée un solide par révolution d'une esquisse autour d'un axe. L'esquisse doit former un profil fermé.

- ![](/images/PartDesign_AdditiveLoft.svg) [Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr") : crée un solide en réalisant une transition entre au moins deux esquisses.

- ![](/images/PartDesign_AdditivePipe.svg) [Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr") : crée un solide en balayant une ou plusieurs esquisse(s) le long d'un chemin ouvert ou fermé.

- ![](/images/PartDesign_AdditiveHelix.svg) [Hélice additive](/PartDesign_AdditiveHelix/fr "PartDesign AdditiveHelix/fr") : crée un solide en balayant une esquisse le long d'une hélice.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer une primitive additive :

: \- ![](/images/PartDesign_AdditiveBox.svg) [Cube additif](/PartDesign_AdditiveBox/fr "PartDesign AdditiveBox/fr") : crée un cube additif.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Cylindre additif](/PartDesign_AdditiveCylinder/fr "PartDesign AdditiveCylinder/fr") : crée un cylindre additif.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Sphère additive](/PartDesign_AdditiveSphere/fr "PartDesign AdditiveSphere/fr") : crée une sphère additive.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Cône additif](/PartDesign_AdditiveCone/fr "PartDesign AdditiveCone/fr") : crée un cône additif.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Ellipsoïde additif](/PartDesign_AdditiveEllipsoid/fr "PartDesign AdditiveEllipsoid/fr") : crée un ellipsoïde additif.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Tore additif](/PartDesign_AdditiveTorus/fr "PartDesign AdditiveTorus/fr") : crée un tore additif.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Prisme additif](/PartDesign_AdditivePrism/fr "PartDesign AdditivePrism/fr") : crée un prisme additif.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Pyramide tronquée additive](/PartDesign_AdditiveWedge/fr "PartDesign AdditiveWedge/fr") : crée une pyramide tronquée additive.

#### Outils soustractifs

Ces outils permettent d'enlever de la matière à un corps solide existant.

- ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") : crée une cavité à partir de l'esquisse sélectionnée.

- ![](/images/PartDesign_Hole.svg) [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr") : crée une fonction perçage à partir de l'esquisse sélectionnée. L'esquisse doit contenir un ou plusieurs cercles.

- ![](/images/PartDesign_Groove.svg) [Rainure](/PartDesign_Groove/fr "PartDesign Groove/fr") : crée une rainure par révolution d'une esquisse sur un axe.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Lissage soustractif](/PartDesign_SubtractiveLoft/fr "PartDesign SubtractiveLoft/fr") : crée un solide en réalisant une transition entre au moins deux esquisses puis la soustrait du corps actif.

- ![](/images/PartDesign_SubtractivePipe.svg) [Balayage soustractif](/PartDesign_SubtractivePipe/fr "PartDesign SubtractivePipe/fr") : crée un solide en balayant une ou plusieurs esquisse(s) le long d'un chemin ouvert ou fermé puis le soustrait du corps actif.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Hélice soustractive](/PartDesign_SubtractiveHelix/fr "PartDesign SubtractiveHelix/fr") : crée une forme solide en balayant une esquisse le long d'une hélice et en la soustrayant du corps actif.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Créer une primitive soustractive :

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Cube soustractif](/PartDesign_SubtractiveBox/fr "PartDesign SubtractiveBox/fr") : crée un cube soustractif.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Cylindre soustractif](/PartDesign_SubtractiveCylinder/fr "PartDesign SubtractiveCylinder/fr") : crée un cylindre soustractif.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Sphère soustractive](/PartDesign_SubtractiveSphere/fr "PartDesign SubtractiveSphere/fr") : crée une sphère soustractive.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Cône soustractif](/PartDesign_SubtractiveCone/fr "PartDesign SubtractiveCone/fr") : crée un cône soustractif.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Ellipsoïde soustractif](/PartDesign_SubtractiveEllipsoid/fr "PartDesign SubtractiveEllipsoid/fr") : crée un ellipsoïde soustractif.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Tore soustractif](/PartDesign_SubtractiveTorus/fr "PartDesign SubtractiveTorus/fr") : crée un tore soustractif.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Prisme soustractif](/PartDesign_SubtractivePrism/fr "PartDesign SubtractivePrism/fr") : crée un prisme soustractif.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Pyramide tronquée soustractive](/PartDesign_SubtractiveWedge/fr "PartDesign SubtractiveWedge/fr") : crée une pyramide tronquée soustractive.

#### Booléen

- ![](/images/PartDesign_Boolean.svg) [Opération booléenne](/PartDesign_Boolean/fr "PartDesign Boolean/fr") : importe un ou plusieurs corps ou PartDesign clones dans le corps actif et applique une opération booléenne.

### Outils de finition

Ces outils appliquent un traitement aux arêtes ou faces.

- ![](/images/PartDesign_Fillet.svg) [Congé](/PartDesign_Fillet/fr "PartDesign Fillet/fr") : applique un arrondi/congé sur les arêtes sélectionnées du corps actif.

- ![](/images/PartDesign_Chamfer.svg) [Chanfrein](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr") : applique un chanfrein sur les arêtes sélectionnées du corps actif.

- ![](/images/PartDesign_Draft.svg) [Dépouille](/PartDesign_Draft/fr "PartDesign Draft/fr") : applique un angle de dépouille aux faces sélectionnées du corps actif.

- ![](/images/PartDesign_Thickness.svg) [Évidement](/PartDesign_Thickness/fr "PartDesign Thickness/fr") : crée une évidement épais à partir du corps actif et ouvre la face sélectionnée.

### Outils de transformation

Il s'agit d'outils permettant de transformer des fonctions existantes.

- ![](/images/PartDesign_Mirrored.svg) [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") : symmétrise une ou plusieurs fonctions.

- ![](/images/PartDesign_LinearPattern.svg) [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr") : crée une fonction de répétition linéaire d'une ou plusieurs fonctions.

- ![](/images/PartDesign_PolarPattern.svg) [Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr") : crée une fonction de répétition circulaire à partir d'une ou plusieurs fonctions.

- ![](/images/PartDesign_MultiTransform.svg) [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr") : crée une combinaison de n'importe quelle des autres transformations ci-dessus, ainsi que la transformation [Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr").
  - ![](/images/PartDesign_Scaled.svg) [Mise à l'échelle](/PartDesign_Scaled/fr "PartDesign Scaled/fr") : met à l'échelle un ou plusieurs éléments. Ceci n'est pas disponible en tant qu'outil de transformation séparé.

#### Extras

Des fonctions supplémentaires se trouvent dans le menu PartDesign :

- ![](/images/PartDesign_Sprocket.svg) [Pignon](/PartDesign_Sprocket/fr "PartDesign Sprocket/fr") : crée un profil de pignon qui peut être extrudé.

- ![](/images/PartDesign_InvoluteGear.svg) [Engrenage à développante](/PartDesign_InvoluteGear/fr "PartDesign InvoluteGear/fr") : crée un profil d'engrenage à développante qui peut être extrudé.

- ![](/images/WizardShaft.svg) [Conception d'arbre](/PartDesign_WizardShaft/fr "PartDesign WizardShaft/fr") : génère un arbre à partir d'un tableau de valeurs et permet d'analyser les forces et les moments. L'arbre est construit à partir de la révolution d'une esquisse qui peut être modifiée.

### Éléments du menu contextuel

- [Désactiver](/index.php?title=PartDesign_Suppressed/fr&action=edit&redlink=1 "PartDesign Suppressed/fr (page does not exist)") : case à cocher pour désactiver une fonction particulière sans la supprimer. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/PartDesign_MoveTip.svg) [Désigner comme fonction résultante](/PartDesign_MoveTip/fr "PartDesign MoveTip/fr") : redéfinit la fonction résultante qui est la fonction exposée à l'extérieur du Corps.

- ![](/images/PartDesign_MoveFeature.svg) [Déplacer vers un autre corps](/PartDesign_MoveFeature/fr "PartDesign MoveFeature/fr") : déplace l'esquisse, la géométrie de référence ou la fonction sélectionnée vers un autre Corps.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Déplacer après une autre fonction](/PartDesign_MoveFeatureInTree/fr "PartDesign MoveFeatureInTree/fr") : permet de réorganiser l'arborescence du corps en déplaçant l'esquisse, la géométrie de référence ou l'entité sélectionnée vers une autre position dans la liste des entités.

#### Éléments partagés avec l'atelier Part

- ![](/images/Std_SetAppearance.svg) [Std Apparence](/Std_SetAppearance/fr "Std SetAppearance/fr") : détermine l'apparence de la pièce entière (transparence des couleurs etc...).

- ![](/images/Part_FaceColors.svg) [Couleur par face](/Part_ColorPerFace/fr "Part ColorPerFace/fr") : attribue des couleurs aux faces des pièces.

## Outils obsolètes

- ![](/images/PartDesign_Migrate.svg) [Migrer](/PartDesign_Migrate/fr "PartDesign Migrate/fr") : migre les fichiers des versions de FreeCAD inférieures à 0.17 vers la version 0.17. Cet outil n'est pas disponible dans la version 1.0 et suivantes.

## Préférences

- ![](/images/Preferences-part_design.svg) [Préférences...](/PartDesign_Preferences/fr "PartDesign Preferences/fr") : préférences disponibles pour les outils PartDesign.
- [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr") : quelques paramètres supplémentaires pour affiner le comportement de PartDesign.

## Tutoriels

- [Comment utiliser FreeCAD](http://help-freecad-jpg87.fr/00fr/index.php), un site web décrivant le flux de travail de la conception mécanique.
- [PartDesign Tutoriel pour créer une pièce simple](/Creating_a_simple_part_with_PartDesign/fr "Creating a simple part with PartDesign/fr")
- [PartDesign Tutoriel d'introduction V0.19](/Basic_Part_Design_Tutorial_019/fr "Basic Part Design Tutorial 019/fr")
- [PartDesign Tutoriel pour la conception d'un support de roulement (I)](/PartDesign_Bearingholder_Tutorial_I/fr "PartDesign Bearingholder Tutorial I/fr") (nécessite une mise à jour)
- [PartDesign Tutoriel pour la conception d'un support de roulement (II)](/PartDesign_Bearingholder_Tutorial_II/fr "PartDesign Bearingholder Tutorial II/fr") (nécessite une mise à jour)

## Exemples

Pour avoir une idée de ce qui peut être réalisé avec les outils de PartDesign, jetez un coup d'œil aux [PartDesign Exemples](/PartDesign_Examples/fr "PartDesign Examples/fr") :

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/fr&oldid=1571313>"
