---
title: Atelier TechDraw
---

![](/images/Workbench_TechDraw.svg)

Icône de l'atelier TechDraw

## Introduction

L'![](/images/Workbench_TechDraw.svg) atelier TechDraw est utilisé pour produire des dessins techniques de base à partir de modèles 3D créés avec un autre atelier, tels que [Part](/Part_Workbench/fr "Part Workbench/fr"), [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou [BIM](/BIM_Workbench/fr "BIM Workbench/fr"), ou importés à partir d'autres applications. Chaque dessin est une page pouvant contenir diverses vues d'objets pouvant être dessinés, telles que Part::Features, PartDesign::Bodies, App::Part groups et des groupes Object Document. Les dessins résultants peuvent être utilisés pour des éléments tels que la documentation, les instructions de fabrication, les contrats, les permis, etc.

Des dimensions, des sections, des zones hachurées, des annotations et des symboles [SVG](/SVG/fr "SVG/fr") peuvent être ajoutés à la page, qui peuvent ensuite être exportés vers différents formats tels que [DXF](/DXF/fr "DXF/fr"), [SVG](/SVG/fr "SVG/fr") et [PDF](/PDF/fr "PDF/fr").

Si votre objectif principal est la production de dessins 2D complexes et de fichiers [DXF](/DXF/fr "DXF/fr") et que vous n'avez pas besoin de modélisation 3D, FreeCAD n'est peut-être pas le bon choix pour vous. Vous pouvez envisager d'utiliser un logiciel dédié au dessin technique, tel que [LibreCAD](https://fr.wikipedia.org/wiki/LibreCAD) ou [QCad](https://fr.wikipedia.org/wiki/QCad).

![](/images/TechDraw_Workbench_Example.png)

## Aimantation

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'atelier TechDraw dispose d'une fonction d'aimantation. Elle peut être utilisée pour aligner automatiquement les vues, les vues de section et les cotes lorsqu'on les positionne en les faisant glisser avec la souris. Avec l'option **Aimanter les vues à l'alignement** activée (par défaut) dans les [préférences](/TechDraw_Preferences/fr#Aimantation "TechDraw Preferences/fr"), les vues s'aligneront avec d'autres vues lorsqu'elles sont suffisamment proches (paramètre **Coefficient d'aimantation des vues**). Les cotes sont également alignées sur d'autres cotes parallèles et le texte de la cote peut être aligné sur le milieu de la ligne de cote. L'aimantation peut être temporairement désactivé en maintenant la touche Alt enfoncée.

## Outils

### Pages

- ![](/images/TechDraw_PageDefault.svg) [Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr") : ajoute une nouvelle page en utilisant le [modèle](/TechDraw_Templates/fr "TechDraw Templates/fr") par défaut.

- ![](/images/TechDraw_PageTemplate.svg) [Page selon un modèle](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr") : ajoute une nouvelle page en utilisant un [modèle](/TechDraw_Templates/fr "TechDraw Templates/fr") sélectionné.

- ![](/images/TechDraw_FillTemplateFields.svg) [Mettre à jour les champs du modèle](/TechDraw_FillTemplateFields/fr "TechDraw FillTemplateFields/fr") : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_RedrawPage.svg) [Rafraîchir](/TechDraw_RedrawPage/fr "TechDraw RedrawPage/fr") : force la mise à jour de la page.

- ![](/images/TechDraw_PrintAll.svg) [Tout imprimer](/TechDraw_PrintAll/fr "TechDraw PrintAll/fr") : imprime toutes les pages d'un document. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_ExportPageSVG.svg) [Sauvegarder au format SVG](/TechDraw_ExportPageSVG/fr "TechDraw ExportPageSVG/fr") : enregistre la page en cours sous forme de fichier [SVG](/SVG/fr "SVG/fr").

- ![](/images/TechDraw_ExportPageDXF.svg) [Sauvegarder au format DXF](/TechDraw_ExportPageDXF/fr "TechDraw ExportPageDXF/fr") : enregistre la page en cours sous forme de fichier [DXF](/DXF/fr "DXF/fr").

### Vues

#### Vues de TechDraw

- ![](/images/TechDraw_View.svg) [Vue](/TechDraw_View/fr "TechDraw View/fr") : ajoute une représentation d'un ou plusieurs objets. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : permet de créer une vue unique, un [groupe de projection](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr"), une [vue de l'atelier Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr"), une [vue de l'atelier Arch](/TechDraw_ArchView "TechDraw ArchView"), un [symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr") ou une [vue d'une image](/TechDraw_Image/fr "TechDraw Image/fr").

- ![](/images/TechDraw_BrokenView.svg) [Vue interrompue](/TechDraw_BrokenView/fr "TechDraw BrokenView/fr") : ajoute une vue interrompue d'un ou plusieurs objets. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_SectionView.svg) [Vue en coupe](/TechDraw_SectionView/fr "TechDraw SectionView/fr") : insère une vue en coupe à partir d'une vue existante.

- ![](/images/TechDraw_ComplexSection.svg) [Vue en coupe complexe](/TechDraw_ComplexSection/fr "TechDraw ComplexSection/fr") : insère une vue en coupe d'une vue existante en fonction d'un profil. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_DetailView.svg) [Vue détaillée](/TechDraw_DetailView/fr "TechDraw DetailView/fr") : ajoute une vue détaillée d'une partie d'une vue existante.

- ![](/images/TechDraw_ProjectionGroup.svg) [Groupe de projections](/TechDraw_ProjectionGroup/fr "TechDraw ProjectionGroup/fr") : ouvre une boîte de dialogue pour créer plusieurs vues d'un objet depuis différentes directions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [Vue](/TechDraw_View/fr "TechDraw View/fr") peut être utilisé à la place.

- ![](/images/TechDraw_ClipGroup.svg) [Fenêtre de rognage](/TechDraw_ClipGroup/fr "TechDraw ClipGroup/fr") : insère une fenêtre de rognage.

- ![](/images/TechDraw_Symbol.svg) [Symbole](/TechDraw_Symbol/fr "TechDraw Symbol/fr") : insère un symbole [SVG](/SVG/fr "SVG/fr") dans une page. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [Vue](/TechDraw_View/fr "TechDraw View/fr") peut être utilisé à la place.

- ![](/images/TechDraw_Image.svg) [Image](/TechDraw_Image/fr "TechDraw Image/fr") : insère une image [bitmap](/Bitmap/fr "Bitmap/fr") PNG ou JPG dans une page. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [Vue](/TechDraw_View/fr "TechDraw View/fr") peut être utilisé à la place.

- ![](/images/TechDraw_ShareView.svg) [Copier une vue](/TechDraw_ShareView/fr "TechDraw ShareView/fr") : partage une vue entre plusieurs pages.

- ![](/images/TechDraw_ToggleFrame.svg) [Bascule des cadres](/TechDraw_ToggleFrame/fr "TechDraw ToggleFrame/fr") : bascule l'affichage des cadres et des étiquettes entourant une vue.

- ![](/images/TechDraw_ProjectShape.svg) [Projection de forme](/TechDraw_ProjectShape/fr "TechDraw ProjectShape/fr") : crée des projections de formes dans la [vue 3D](/3D_view/fr "3D view/fr").

#### Vues d'autres ateliers

- ![](/images/TechDraw_ActiveView.svg) [Vue active](/TechDraw_ActiveView/fr "TechDraw ActiveView/fr") : insère une vue de la vue 3D active.

- ![](/images/TechDraw_DraftView.svg) [Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") : ajoute une vue d'un objet [Draft](/Draft_Workbench/fr "Draft Workbench/fr").

- ![](/images/TechDraw_ArchView.svg) [Vue d'un objet BIM](/TechDraw_ArchView/fr "TechDraw ArchView/fr") : ajoute une vue d'un objet [Arch Plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") de l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [Vue](/TechDraw_View/fr "TechDraw View/fr") peut être utilisé à la place.

- ![](/images/TechDraw_SpreadsheetView.svg) [Vue d'un objet Spreadsheet](/TechDraw_SpreadsheetView/fr "TechDraw SpreadsheetView/fr") : insère une vue d'une feuille de calcul de l'[atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : l'outil [Vue](/TechDraw_View/fr "TechDraw View/fr") peut être utilisé à la place.

### Empilement

Il s'agit d'outils permettant de modifier l'ordre d'empilement qui contrôle la profondeur apparente des vues sur une page.

- ![](/images/TechDraw_StackTop.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajuster l’ordre d’empilage des vues :

- ![](/images/TechDraw_StackTop.svg) [Empiler en haut](/TechDraw_StackTop/fr "TechDraw StackTop/fr") : déplace les vues au sommet de l'ordre d'empilement. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_StackBottom.svg) [Empiler en bas](/TechDraw_StackBottom "TechDraw StackBottom") : déplace les vues au bas de l'ordre d'empilement. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_StackUp.svg) [Empiler vers le haut](/TechDraw_StackUp/fr "TechDraw StackUp/fr") : déplace les vues d'un niveau supérieur dans l'ordre d'empilement. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_StackDown.svg) [Empiler vers le bas](/TechDraw_StackDown/fr "TechDraw StackDown/fr") : déplace les vues vers le bas d'un niveau dans l'ordre d'empilement. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Cotes

- ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Insérer une cote :

- ![](/images/TechDraw_Dimension.svg) [Cote](/TechDraw_Dimension/fr "TechDraw Dimension/fr") : ajoute une cote contextuelle. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_LengthDimension.svg) [Cote de longueur](/TechDraw_LengthDimension/fr "TechDraw LengthDimension/fr") : ajoute une cote de longueur.

- ![](/images/TechDraw_HorizontalDimension.svg) [Cote horizontale](/TechDraw_HorizontalDimension/fr "TechDraw HorizontalDimension/fr") : ajoute une cote de longueur horizontale.

- ![](/images/TechDraw_VerticalDimension.svg) [Cote verticale](/TechDraw_VerticalDimension/fr "TechDraw VerticalDimension/fr") : ajoute une cote de longueur verticale.

- ![](/images/TechDraw_RadiusDimension.svg) [Cote de rayon](/TechDraw_RadiusDimension/fr "TechDraw RadiusDimension/fr") : ajoute une cote de rayon à un cercle ou un arc de cercle.

- ![](/images/TechDraw_DiameterDimension.svg) [Cote de diamètre](/TechDraw_DiameterDimension/fr "TechDraw DiameterDimension/fr") : ajoute une cote de diamètre à un cercle ou à un arc de cercle.

- ![](/images/TechDraw_AngleDimension.svg) [Cote angulaire](/TechDraw_AngleDimension/fr "TechDraw AngleDimension/fr") : ajoute une cote angulaire entre deux arêtes droites.

- ![](/images/TechDraw_3PtAngleDimension.svg) [Cote angulaire par 3 points](/TechDraw_3PtAngleDimension/fr "TechDraw 3PtAngleDimension/fr") : ajoute une cote d'angle à partir de trois sommets.

- ![](/images/TechDraw_AreaDimension.svg) [Cote de surface](/TechDraw_AreaDimension/fr "TechDraw AreaDimension/fr") : ajoute une cote de surface à une face. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_ExtensionCreateLengthArc.svg) [Longueur d'arc](/TechDraw_ExtensionCreateLengthArc/fr "TechDraw ExtensionCreateLengthArc/fr") : crée une cote de longueur d'arc.

- ![](/images/TechDraw_HorizontalExtentDimension.svg) [Cote étendue horizontale](/TechDraw_HorizontalExtentDimension/fr "TechDraw HorizontalExtentDimension/fr") : ajoute une cote étendue horizontale.

- ![](/images/TechDraw_VerticalExtentDimension.svg) [Cote étendue verticale](/TechDraw_VerticalExtentDimension/fr "TechDraw VerticalExtentDimension/fr") : ajoute une cote étendue verticale.

- ![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) [Cotes horizontales](/TechDraw_ExtensionCreateHorizChainDimension/fr "TechDraw ExtensionCreateHorizChainDimension/fr") : crée une séquence horizontale de cotes.

- ![](/images/TechDraw_ExtensionCreateVertChainDimension.svg) [Cotes verticales](/TechDraw_ExtensionCreateVertChainDimension/fr "TechDraw ExtensionCreateVertChainDimension/fr") : crée une séquence verticale de cotes.

- ![](/images/TechDraw_ExtensionCreateObliqueChainDimension.svg) [Cotes inclinées](/TechDraw_ExtensionCreateObliqueChainDimension/fr "TechDraw ExtensionCreateObliqueChainDimension/fr") : crée une séquence de cotes inclinées alignées.

- ![](/images/TechDraw_ExtensionCreateHorizCoordDimension.svg) [Cotes parallèles horizontales](/TechDraw_ExtensionCreateHorizCoordDimension/fr "TechDraw ExtensionCreateHorizCoordDimension/fr") : crée des cotes horizontales uniformément espacées à partir de la même ligne de base.

- ![](/images/TechDraw_ExtensionCreateVertCoordDimension.svg) [Cotes parallèles verticales](/TechDraw_ExtensionCreateVertCoordDimension/fr "TechDraw ExtensionCreateVertCoordDimension/fr") : crée des cotes verticales uniformément espacées à partir de la même ligne de base.

- ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) [Cotes parallèles inclinées](/TechDraw_ExtensionCreateObliqueCoordDimension/fr "TechDraw ExtensionCreateObliqueCoordDimension/fr") : crée des cotes inclinées uniformément espacées à partir de la même ligne de base.

- ![](/images/TechDraw_ExtensionCreateHorizChamferDimension.svg) [Cote horizontale chanfrein](/TechDraw_ExtensionCreateHorizChamferDimension/fr "TechDraw ExtensionCreateHorizChamferDimension/fr") : crée une cote horizontale et une cote d'angle pour un chanfrein.

- ![](/images/TechDraw_ExtensionCreateVertChamferDimension.svg) [Cote verticale chanfrein](/TechDraw_ExtensionCreateVertChamferDimension/fr "TechDraw ExtensionCreateVertChamferDimension/fr") : crée une cote verticale et une cote d'angle pour un chanfrein.

- ![](/images/TechDraw_Balloon.svg) [Infobulle](/TechDraw_Balloon/fr "TechDraw Balloon/fr") : ajoute une "infobulle" dans la page.

- ![](/images/TechDraw_AxoLengthDimension.svg) [Cote axonométrique](/TechDraw_AxoLengthDimension/fr "TechDraw AxoLengthDimension/fr") : ajoute une cote axonométrique. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_LandmarkDimension.svg) [Cote à partir des points du repère - EXPÉRIMENTAL](/TechDraw_LandmarkDimension/fr "TechDraw LandmarkDimension/fr") : ajoute une cote linéaire à partir des points du repère.

- ![](/images/TechDraw_DimensionRepair.svg) [Réparation des cotes](/TechDraw_DimensionRepair/fr "TechDraw DimensionRepair/fr") : permet d'ajuster les références géométriques 2D ou 3D d'une cote. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_LinkDimension.svg) [Lier une cote](/TechDraw_LinkDimension/fr "TechDraw LinkDimension/fr") : lie une cote existante à la géométrie 3D (obsolète).

### Hachures

- ![](/images/TechDraw_Hatch.svg) [Hachures par motif](/TechDraw_Hatch/fr "TechDraw Hatch/fr") : hachure une face en utilisant un fichier image.

- ![](/images/TechDraw_GeometricHatch.svg) [Applique un motif de hachure](/TechDraw_GeometricHatch/fr "TechDraw GeometricHatch/fr") : applique un motif de hachure à une face en utilisant une spécification Autodesk PAT.

### Annotations

- ![](/images/TechDraw_Annotation.svg) [Annotation](/TechDraw_Annotation/fr "TechDraw Annotation/fr") : ajoute un bloc de texte pour servir d'annotation.

- ![](/images/TechDraw_LeaderLine.svg) [Ligne de repère](/TechDraw_LeaderLine/fr "TechDraw LeaderLine/fr") : ajoute une ligne de repère à une vue.

- ![](/images/TechDraw_RichTextAnnotation.svg) [Annotation texte enrichi](/TechDraw_RichTextAnnotation/fr "TechDraw RichTextAnnotation/fr") : ajoute un bloc d’annotation en texte enrichi à une ligne de repère ou à une vue.

- ![](/images/TechDraw_CosmeticVertex.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des sommets cosmétiques :

- ![](/images/TechDraw_CosmeticVertex.svg) [Point cosmétique](/TechDraw_CosmeticVertex/fr "TechDraw CosmeticVertex/fr") : ajoute un sommet qui ne fait pas partie de la géométrie principale.

- ![](/images/TechDraw_Midpoints.svg) [Points médians](/TechDraw_Midpoints/fr "TechDraw Midpoints/fr") : ajoute des points cosmétiques aux points médians d'une ou de plusieurs arêtes sélectionnées.

- ![](/images/TechDraw_Quadrants.svg) [Quadrant](/TechDraw_Quadrants/fr "TechDraw Quadrants/fr") : ajoute des points cosmétiques tous les quarts de points d'un ou de plusieurs bords sélectionnés (circulaires).

- ![](/images/TechDraw_FaceCenterLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des lignes centrales :

- ![](/images/TechDraw_FaceCenterLine.svg) [Ligne centrale à une face](/TechDraw_FaceCenterLine/fr "TechDraw FaceCenterLine/fr") : ajoute une ligne centrale aux face(s) sélectionnée(s).

- ![](/images/TechDraw_2LineCenterLine.svg) [Ligne centrale entre 2 lignes](/TechDraw_2LineCenterLine/fr "TechDraw 2LineCenterLine/fr") : ajoute une ligne centrale entre 2 arêtes.

- ![](/images/TechDraw_2PointCenterLine.svg) [Ligne centrale entre 2 points](/TechDraw_2PointCenterLine/fr "TechDraw 2PointCenterLine/fr") : ajoute une ligne centrale entre 2 points.

- ![](/images/TechDraw-line2points.svg) [Ligne cosmétique par 2 points](/TechDraw_2PointCosmeticLine/fr "TechDraw 2PointCosmeticLine/fr") : ajoute une ligne cosmétique reliant 2 points.

- ![](/images/TechDraw_CosmeticCircle.svg) [Cercle cosmétique](/TechDraw_CosmeticCircle/fr "TechDraw CosmeticCircle/fr") : ajoute un cercle cosmétique. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_DecorateLine.svg) [Apparence des lignes](/TechDraw_DecorateLine/fr "TechDraw DecorateLine/fr") : modifie l'apparence des lignes.

- ![](/images/TechDraw_ShowAll.svg) [Montrer tout](/TechDraw_ShowAll/fr "TechDraw ShowAll/fr") : affiche/masque les lignes/arêtes invisibles dans une vue.

- ![](/images/TechDraw_WeldSymbol.svg) [Soudure](/TechDraw_WeldSymbol/fr "TechDraw WeldSymbol/fr") : ajoute des spécifications de soudage à une ligne de repère existante.

- ![](/images/TechDraw_SurfaceFinishSymbols.svg) [Symbole de finition de surface](/TechDraw_SurfaceFinishSymbols/fr "TechDraw SurfaceFinishSymbols/fr") : ajoute un symbole de finition de surface à une page. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/TechDraw_HoleShaftFit.svg) [Tolérance de trou/d'arbre](/TechDraw_HoleShaftFit/fr "TechDraw HoleShaftFit/fr") : ajoute les tolérances de trous ou d'arbres selon la norme ISO 286 à une cote. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Extensions

#### Attributs et modifications

- ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [Choix des attributs](/TechDraw_ExtensionSelectLineAttributes/fr "TechDraw ExtensionSelectLineAttributes/fr") : sélectionne les attributs (style, largeur et couleur) des nouvelles lignes cosmétiques et des lignes centrales, et spécifie l'espacement en cascade et la distance delta.

- ![](/images/TechDraw_ExtensionChangeLineAttributes.svg) [Modification des attributs](/TechDraw_ExtensionChangeLineAttributes/fr "TechDraw ExtensionChangeLineAttributes/fr") : modifie les attributs (style, largeur et couleur) des lignes cosmétiques et des lignes centrales.

- ![](/images/TechDraw_ExtensionExtendLine.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Modifier la longueur des lignes cosmétiques ou des lignes centrales :

- ![](/images/TechDraw_ExtensionExtendLine.svg) [Prolonger](/TechDraw_ExtensionExtendLine/fr "TechDraw ExtensionExtendLine/fr") : prolonge une ligne cosmétique ou une ligne centrale aux deux extrémités.

- ![](/images/TechDraw_ExtensionShortenLine.svg) [Raccourcir](/TechDraw_ExtensionShortenLine/fr "TechDraw ExtensionShortenLine/fr") : raccourcit une ligne cosmétique ou une ligne centrale aux deux extrémités.

- ![](/images/TechDraw_ExtensionLockUnlockView.svg) [Verrouiller/déverrouiller](/TechDraw_ExtensionLockUnlockView/fr "TechDraw ExtensionLockUnlockView/fr") : verrouille/déverrouille la position d'une vue.

- ![](/images/TechDraw_ExtensionPositionSectionView.svg) [Positionner une vue en coupe](/TechDraw_ExtensionPositionSectionView/fr "TechDraw ExtensionPositionSectionView/fr") : aligne orthogonalement une vue en coupe avec sa vue source.

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Aligner des cotes :

- ![](/images/TechDraw_ExtensionPosHorizChainDimension.svg) [Aligner horizontalement](/TechDraw_ExtensionPosHorizChainDimension/fr "TechDraw ExtensionPosHorizChainDimension/fr") : aligne des cotes horizontales pour créer une chaîne de cotes.

- ![](/images/TechDraw_ExtensionPosVertChainDimension.svg) [Aligner verticalement](/TechDraw_ExtensionPosVertChainDimension/fr "TechDraw ExtensionPosVertChainDimension/fr") : aligne des cotes verticales pour créer une chaîne de cotes.

- ![](/images/TechDraw_ExtensionPosObliqueChainDimension.svg) [Aligner obliquement](/TechDraw_ExtensionPosObliqueChainDimension/fr "TechDraw ExtensionPosObliqueChainDimension/fr") : aligne des cotes inclinées pour créer une chaîne de cotes.

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Espacements réguliers :

- ![](/images/TechDraw_ExtensionCascadeHorizDimension.svg) [Cascade horizontale](/TechDraw_ExtensionCascadeHorizDimension/fr "TechDraw ExtensionCascadeHorizDimension/fr") : espace régulièrement des cotes horizontales.

- ![](/images/TechDraw_ExtensionCascadeVertDimension.svg) [Cascade verticale](/TechDraw_ExtensionCascadeVertDimension/fr "TechDraw ExtensionCascadeVertDimension/fr") : espace régulièrement des cotes verticales.

- ![](/images/TechDraw_ExtensionCascadeObliqueDimension.svg) [Cascade inclinée](/TechDraw_ExtensionCascadeObliqueDimension/fr "TechDraw ExtensionCascadeObliqueDimension/fr") : espace régulièrement des cotes inclinées.

- ![](/images/TechDraw_ExtensionAreaAnnotation.svg) [Surface](/TechDraw_ExtensionAreaAnnotation/fr "TechDraw ExtensionAreaAnnotation/fr") : calcule la surface des faces sélectionnées et insère une annotation de surface.

- ![](/images/TechDraw_ExtensionArcLengthAnnotation.svg) [Longueur d'arc d'arêtes](/TechDraw_ExtensionArcLengthAnnotation/fr "TechDraw ExtensionArcLengthAnnotation/fr") : calcule la longueur d'arc d'arêtes sélectionnées et insère une annotation de longueur d'arc. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_ExtensionCustomizeFormat.svg) [Personnaliser l'infobulle](/TechDraw_ExtensionCustomizeFormat/fr "TechDraw ExtensionCustomizeFormat/fr") : personnalise le formatage du texte d'une infobulle ou du texte d'une cote. Des [symboles GD&T](https://en.wikipedia.org/wiki/Geometric_dimensioning_and_tolerancing) et d'autres caractères spéciaux peuvent être ajoutés.

#### Lignes centrales, filetage et taraudage

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des axes de centrage :

- ![](/images/TechDraw_ExtensionCircleCenterLines.svg) [Axes de centrage](/TechDraw_ExtensionCircleCenterLines/fr "TechDraw ExtensionCircleCenterLines/fr") : ajoute des lignes de centre aux cercles et aux arcs.

- ![](/images/TechDraw_ExtensionHoleCircle.svg) [Axes de centrage de trous/vis](/TechDraw_ExtensionHoleCircle/fr "TechDraw ExtensionHoleCircle/fr") : dessine les lignes centrales des cercles de trous/vis.

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des filetages/taraudages cosmétiques :

- ![](/images/TechDraw_ExtensionThreadHoleSide.svg) [Corps de taraudage](/TechDraw_ExtensionThreadHoleSide/fr "TechDraw ExtensionThreadHoleSide/fr") : ajoute un symbole pour le taraudage à la vue latérale d'un trou.

- ![](/images/TechDraw_ExtensionThreadHoleBottom.svg) [Taraudage](/TechDraw_ExtensionThreadHoleBottom/fr "TechDraw ExtensionThreadHoleBottom/fr") : ajoute des taraudages symboliques à la vue supérieure ou inférieure des trous.

- ![](/images/TechDraw_ExtensionThreadBoltSide.svg) [Corps de filetage](/TechDraw_ExtensionThreadBoltSide/fr "TechDraw ExtensionThreadBoltSide/fr") : ajoute un symbole pour le filetage à la vue latérale des boulons/vis/tiges.

- ![](/images/TechDraw_ExtensionThreadBoltBottom.svg) [Filetage](/TechDraw_ExtensionThreadBoltBottom/fr "TechDraw ExtensionThreadBoltBottom/fr") : ajoute des filetages symboliques à la vue supérieure ou inférieure des boulons/vis/tiges.

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajoute des sommets :

- ![](/images/TechDraw_ExtensionVertexAtIntersection.svg) [Intersection de lignes](/TechDraw_ExtensionVertexAtIntersection/fr "TechDraw ExtensionVertexAtIntersection/fr") : crée des sommets cosmétiques à l'intersection des lignes sélectionnées.

- ![](/images/TechDraw_CommandAddOffsetVertex.svg) [Ajoute un sommet décalé](/TechDraw_CommandAddOffsetVertex/fr "TechDraw CommandAddOffsetVertex/fr") : ajoute un sommet cosmétique à un décalage spécifié par rapport à un sommet sélectionné. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des cercles ou des arcs cosmétiques :

- ![](/images/TechDraw_ExtensionDrawCosmCircle.svg) [Cercle](/TechDraw_ExtensionDrawCosmCircle/fr "TechDraw ExtensionDrawCosmCircle/fr") : dessine un cercle cosmétique en utilisant deux points.

- ![](/images/TechDraw_ExtensionDrawCosmArc.svg) [Arc](/TechDraw_ExtensionDrawCosmArc/fr "TechDraw ExtensionDrawCosmArc/fr") : ajoute un arc cosmétique dans le sens inverse des aiguilles d'une montre à partir de trois sommets.

- ![](/images/TechDraw_ExtensionDrawCosmCircle3Points.svg) [Cercle par 3 points](/TechDraw_ExtensionDrawCosmCircle3Points/fr "TechDraw ExtensionDrawCosmCircle3Points/fr") : ajoute un cercle cosmétique basé sur trois sommets.

- ![](/images/TechDraw_ExtensionLineParallel.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Ajouter des lignes cosmétiques parallèles ou perpendiculaires :

- ![](/images/TechDraw_ExtensionLineParallel.svg) [Ligne parallèle](/TechDraw_ExtensionLineParallel/fr "TechDraw ExtensionLineParallel/fr") : dessine une ligne cosmétique parallèle à une autre ligne passant par un sommet.

- ![](/images/TechDraw_ExtensionLinePerpendicular.svg) [Ligne perpendiculaire](/TechDraw_ExtensionLinePerpendicular/fr "TechDraw ExtensionLinePerpendicular/fr") : dessine une ligne cosmétique perpendiculaire à une autre ligne passant par un sommet.

#### Cotes

Plusieurs des outils de cotation des extensions sont répertoriés dans la section [Cotes](#Cotes) ci-dessus.

- ![](/images/TechDraw_ExtensionInsertDiameter.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Insérer un préfixe :

- ![](/images/TechDraw_ExtensionInsertDiameter.svg) [Diamètre](/TechDraw_ExtensionInsertDiameter/fr "TechDraw ExtensionInsertDiameter/fr") : insère un symbole "⌀" pour un diamètre au début du texte de la cote.

- ![](/images/TechDraw_ExtensionInsertSquare.svg) [Section tube](/TechDraw_ExtensionInsertSquare/fr "TechDraw ExtensionInsertSquare/fr") : insère un symbole "□" pour une section de tube carré au début du texte de la cote.

- ![](/images/TechDraw_ExtensionInsertRepetition.svg) [Symbole de répétition](/TechDraw_ExtensionInsertRepetition/fr "TechDraw ExtensionInsertRepetition/fr") : insère un symbole de répétition au début du texte de la cote. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/TechDraw_ExtensionRemovePrefixChar.svg) [Supprimer les symboles](/TechDraw_ExtensionRemovePrefixChar/fr "TechDraw ExtensionRemovePrefixChar/fr") : supprime tous les symboles devant le texte de la cote.

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Modifier les décimales :

- ![](/images/TechDraw_ExtensionIncreaseDecimal.svg) [Plus de décimales](/TechDraw_ExtensionIncreaseDecimal/fr "TechDraw ExtensionIncreaseDecimal/fr") : augmente le nombre de décimales du texte de la cote.

- ![](/images/TechDraw_ExtensionDecreaseDecimal.svg) [Moins de décimales](/TechDraw_ExtensionDecreaseDecimal/fr "TechDraw ExtensionDecreaseDecimal/fr") : diminue le nombre de décimales du texte de la cote.

### Divers

- ![](/images/TechDraw_CosmeticEraser.svg) [Gomme](/TechDraw_CosmeticEraser/fr "TechDraw CosmeticEraser/fr") : supprime les objets cosmétiques d'une page.

### Outils obsolètes

- ![](/images/TechDraw_ClipGroupAdd.svg) [Ajout vue à une fenêtre de rognage](/TechDraw_ClipGroupAdd/fr "TechDraw ClipGroupAdd/fr") : ajoute une vue existante à une fenêtre de rognage. Non disponible dans version 1.0 et suivantes.

- ![](/images/TechDraw_ClipGroupRemove.svg) [Suppression vue d'une fenêtre de rognage](/TechDraw_ClipGroupRemove/fr "TechDraw ClipGroupRemove/fr") : supprime une vue d'une fenêtre de rognage. Non disponible dans version 1.0 et suivantes.

- ![](/images/TechDraw_MoveView.svg) [Déplacer une vue](/TechDraw_MoveView/fr "TechDraw MoveView/fr") : déplace une vue et ses dépendants vers une page différente. Non disponible dans version 1.0 et suivantes.

## Fonctions supplémentaires

- [Groupes de lignes](/TechDraw_LineGroup/fr "TechDraw LineGroup/fr") : pour contrôler l'apparence de divers types de lignes.
- [Modèles](/TechDraw_Templates/fr "TechDraw Templates/fr") : modèles par défaut définis pour les pages de dessin.
- [Hachures](/TechDraw_Hatching/fr "TechDraw Hatching/fr") : explication des différentes techniques de hachurage.
- [Dimensionnement géométrique et tolérancement](/TechDraw_Geometric_dimensioning_and_tolerancing/fr "TechDraw Geometric dimensioning and tolerancing/fr") : explication sur la façon de réaliser le dimensionnement géométrique et le tolérancement.

## Préférences

- ![](/images/Preferences-techdraw.svg) [Préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr") : préférences pour les valeurs par défaut de la page de dessin, telles que l'angle de projection, les couleurs, la taille du texte et les styles de trait.

## Script

Les outils de TechDraw peuvent être utilisés dans des [macros](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr"). Pour plus d'informations, voir :

- [Autogenerated API documentation](https://freecad.github.io/SourceDoc/)
- [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr")
- [Champs de texte éditables](/TechDraw_PageDefault/fr#Champs_de_texte_.C3.A9ditables "TechDraw PageDefault/fr")

## Limitations

- Ne pas couper, copier et coller des objets TechDraw dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") car cela ne fonctionne généralement pas bien.
- Ne pas faire glisser les objets TechDraw dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") avec la souris.

## Tutoriels

- [Tutoriel TechDraw de base](/Basic_TechDraw_Tutorial/fr "Basic TechDraw Tutorial/fr") : introduction à la création de dessins avec l'atelier TechDraw.
- [Comment créer un modèle](/TechDraw_TemplateHowTo/fr "TechDraw TemplateHowTo/fr") : instructions pour créer un nouveau modèle de page dans Inkscape à utiliser avec l'atelier TechDraw.
- [TechDraw Création de modèles](/TechDraw_TemplateGenerator/fr "TechDraw TemplateGenerator/fr") : instructions pour créer une macro pour générer un modèle de base.

: Quelques lignes de code ajoutées permettent d'obtenir un outil comme la [Macro TemplateHelper](/Macro_TemplateHelper/fr "Macro TemplateHelper/fr").

- [Mesure des angles sur les axes des trous](/Measurement_Of_Angles_On_Holes/fr "Measurement Of Angles On Holes/fr") : instructions pour ajouter des lignes de centre et des représentations angulaires ultérieures sur les trous.
- [Comment](/TechDraw_HowTo_Page "TechDraw HowTo Page") : instructions pour différents paramètres tels que les marques centrales etc...
- [Tutoriel TechDraw Cercle Imaginaire](/TechDraw_Pitch_Circle_Tutorial/fr "TechDraw Pitch Circle Tutorial/fr") : instructions pour ajouter un cercle imaginaire à une vue.

Tutoriels video par sliptonic

- Atelier TechDraw [Part 1 (Basics)](https://www.youtube.com/watch?v=7LbOmSGW9F0), [Part 2 (Dimensions)](https://www.youtube.com/watch?v=z3w84RfvqaE), [Part 3 (Multivues)](https://www.youtube.com/watch?v=uNjXg-m38aI)
- Atelier TechDraw [Part 4 (Sections et Details)](https://www.youtube.com/watch?v=3zSdeFV6I5o), [Part 5 (Création de feuilles de dessin)](https://www.youtube.com/watch?v=kcmdJ7xa7gg)

## Développement

Voulez-vous en savoir plus sur l'avenir de l'atelier TechDraw ? Visitez [la page TechDraw Roadmap (en)](/TechDraw_Roadmap "TechDraw Roadmap") pour en savoir plus.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Workbench/fr&oldid=1549385>"
