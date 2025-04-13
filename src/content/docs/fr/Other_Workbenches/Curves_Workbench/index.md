---
title: Atelier Curves
---

:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

## Introduction

![](/images/Curves_workbench_icon.svg)

Icône de l'atelier externe Curves

L'atelier Curves est un [atelier externe](/External_workbenches/fr "External workbenches/fr") basé sur Python avec une collection d'outils pour les courbes et les surfaces NURBS. Cet atelier est développé avec FreeCAD Master et OCC 7.4.

Remarque : certains outils peuvent ne pas fonctionner avec les versions antérieures.

## Installation

Télécharger l'atelier Curves via le ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Sélectionnez l'option **Outils → Gestionnaire des extensions** du menu.

## Références

- Developpeur : @Chris_G
- Github : <https://github.com/tomate44/CurvesWB>
- Discussion : <https://forum.freecad.org/viewtopic.php?f=8&t=22675>
- Tutoriel sur YouTube utilisant l'atelier Curves : <https://www.youtube.com/watch?v=ZVdbvxmJ3Mo>
- Tutoriel sur Dailymotion, bidon de lessive, démonstration avec l'atelier Curves : <https://www.dailymotion.com/video/x6bo9a6>

## Outils

Avec la dernière mise à jour, l'ordre des outils a été adapté aux options du menu de la version 0.6.59 et certains outils manquants ont été ajoutés.

### Outils de courbes

- ![](/images/Curves_Line.svg) [Ligne](/Curves_Line/fr "Curves Line/fr") : crée une ligne paramétrique entre deux sommets.

- ![](/images/Curves_EditableSpline.svg) [B-spline](/Curves_EditableSpline/fr "Curves EditableSpline/fr") : crée une courbe B-spline à main levée.

- ![](/images/Curves_MixedCurve.svg) [Courbe d'intersection en 3D](/Curves_MixedCurve/fr "Curves MixedCurve/fr") : crée une courbe en 3D à l'intersection de deux courbes projetées.

- ![](/images/Curves_ExtendCurve.svg) [Étendre une courbe](/Curves_ExtendCurve/fr "Curves ExtendCurve/fr") : prolonge l'arête sélectionnée.

- ![](/images/Curves_JoinCurve.svg) [Relier des courbes](/Curves_JoinCurve/fr "Curves JoinCurve/fr") : relie des arêtes sélectionnées en courbes B-spline.

- ![](/images/Curves_SplitCurve.svg) [Diviser une courbe](/Curves_SplitCurve/fr "Curves SplitCurve/fr") : divise l'arête sélectionnée.

- ![](/images/Curves_Discretize.svg) [Discrétiser](/Curves_Discretize/fr "Curves Discretize/fr") : discrétise une arête ou une polyligne.

- ![](/images/Curves_Approximate.svg) [Approximer](/index.php?title=Curves_Approximate/fr&action=edit&redlink=1 "Curves Approximate/fr (page does not exist)") : approxime les points en courbe ou surface NURBS.

- ![](/images/Curves_Interpolate.svg) [Interpoler](/Curves_Interpolate/fr "Curves Interpolate/fr") : interpole des points avec une courbe B-spline.

- ![](/images/Curves_ParametricBlendCurve.svg) [Courbe de transition](/Curves_ParametricBlendCurve/fr "Curves ParametricBlendCurve/fr") : crée une courbe de transition entre deux arêtes.

- ![](/images/Curves_ParametricComb.svg) [Peigne paramétrique](/Curves_ParametricComb/fr "Curves ParametricComb/fr") : crée un peigne paramétrique à partir d'arêtes sélectionnées.

- ![](/images/Curves_CurveOnSurface.svg) [Courbe sur surface](/Curves_CurveOnSurface/fr "Curves CurveOnSurface/fr") : projette une courbe sur une surface.

### Outils de surface

- ![](/images/Curves_ZebraTool.svg) [Outil Zebra](/Curves_ZebraTool/fr "Curves ZebraTool/fr") : texture Zebra pour l'inspection des surfaces.

- ![](/images/Curves_TrimFace.svg) [Ajuster une face](/Curves_TrimFace/fr "Curves TrimFace/fr") : ajuste une face avec une courbe projetée.

- ![](/images/Curves_IsoCurve.svg) [Courbes iso](/Curves_IsoCurve/fr "Curves IsoCurve/fr") : applique un réseau orienté UV sur une surface sélectionnée.

- ![](/images/Curves_SketchOnSurface.svg) [Esquisse sur une surface](/Curves_SketchOnSurface/fr "Curves SketchOnSurface/fr") : applique une esquisse sur une surface.

- ![](/images/Curves_Sweep2Rails.svg) [Deux courbes par balayage](/Curves_Sweep2Rails/fr "Curves Sweep2Rails/fr"):

- ![](/images/Curves_ProfileSupport.svg) [Plan de support](/Curves_ProfileSupport/fr "Curves ProfileSupport/fr") : crée un plan de support pour des esquisses.

- ![](/images/Curves_PipeshellProfile.svg) [Profils d'enveloppe d'un tube](/Curves_PipeshellProfile/fr "Curves PipeshellProfile/fr") : crée des profils à partir de l'enveloppe d'un tube.

- ![](/images/Curves_Pipeshell.svg) [Enveloppe de tube](/Curves_Pipeshell/fr "Curves Pipeshell/fr") : crée un un balayage pour former une enveloppe de tube.

- ![](/images/Curves_GordonSurface.svg) [Surface de Gordon](/Curves_GordonSurface/fr "Curves GordonSurface/fr") : crée une surface qui enveloppe un réseau de courbes.

- ![](/images/Curves_SegmentSurface.svg) [Segmenter une surface](/Curves_SegmentSurface/fr "Curves SegmentSurface/fr") : segmente une surface en isocourbes.

- ![](/images/Curves_CompressionSpring.svg) [Ressort de compression](/Curves_CompressionSpring/fr "Curves CompressionSpring/fr") : crée un ressort de compression.

- ![](/images/Curves_ReflectLines.svg) [Ligne de réflexion](/Curves_ReflectLines/fr "Curves ReflectLines/fr") : crée les lignes de réflexion sur une forme, en fonction de la direction de la vue.

- ![](/images/Curves_MultiLoft.svg) [Multi lissage](/Curves_MultiLoft/fr "Curves MultiLoft/fr") : crée un lissage de profil composés de plusieurs faces en parallèle

- ![](/images/Curves_BlendSurf2.svg) [Surface de transition](/Curves_BlendSurf2/fr "Curves BlendSurf2/fr") : crée une surface entre deux arêtes avec une certaine continuité avec leurs faces d'appui.

- ![](/images/Curves_BlendSolid.svg) [Solide de transition](/Curves_BlendSolid/fr "Curves BlendSolid/fr") : crée un solide entre deux arêtes avec une certaine continuité avec leurs formes de support.

- ![](/images/Curves_FlattenFace.svg) [Développé d'une face](/Curves_FlattenFace/fr "Curves FlattenFace/fr"): crée une face plane développée à partir de faces coniques ou cylindriques.

- ![](/images/Curves_RotationSweep.svg) [Balayage](/index.php?title=Curves_RotationSweep/fr&action=edit&redlink=1 "Curves RotationSweep/fr (page does not exist)") : balaie des profils selon une trajectoire ou un point.

- ![](/images/Curves_ZebraTool.svg) [???](/index.php?title=Curves_SurfaceAnalysis/fr&action=edit&redlink=1 "Curves SurfaceAnalysis/fr (page does not exist)") : <- Wrong Icon and name! - (Curves SurfaceAnalysis) Creates visual analysis maps on selected shapes.

- ![](/images/Curves_DraftAnalysis.svg) [Analyse de dépouilles](/Curves_DraftAnalysis/fr "Curves DraftAnalysis/fr") : crée une superposition colorée sur un objet pour visualiser les angles de dépouille.

- ![](/images/Curves_TruncateExtend.svg) [Tronquer ou étendre](/Curves_TruncateExtend/fr "Curves TruncateExtend/fr") : coupe une forme et la tronque ou l'étend d'une distance donnée.

- ![](/images/Curves_WaterlineCurves.svg) [Courbes de niveau](/Curves_WaterlineCurves/fr "Curves WaterlineCurves/fr") : crée des courbes de niveau sur les faces sélectionnées.

### Outils divers

- ![](/images/Curves_GeomInfo.svg) [Information des géométries](/index.php?title=Curves_GeomInfo/fr&action=edit&redlink=1 "Curves GeomInfo/fr (page does not exist)") : active/désactive l'affichage des informations des formes sélectionnées.

- ![](/images/Curves_ExtractSubshape.svg) [Copie simple](/index.php?title=Curves_ExtractSubshape/fr&action=edit&redlink=1 "Curves ExtractSubshape/fr (page does not exist)") : crée des copies non paramétriques des sous-formes sélectionnées.

- ![](/images/Curves_ParametricSolid.svg) [Solide paramétrique](/Curves_ParametricSolid/fr "Curves ParametricSolid/fr") : crée un solide paramétrique à partir des faces sélectionnées.

- ![](/images/Curves_PasteSVG.svg) [Coller une image SVG](/Curves_PasteSVG/fr "Curves PasteSVG/fr") : colle le contenu SVG du presse-papiers.

- ![](/images/Curves_ToConsole.svg) [Vers la console](/Curves_ToConsole/fr "Curves ToConsole/fr") : déplace les objets vers la console.

- ![](/images/Curves_AdjacentFaces.svg) [Faces adjacentes](/index.php?title=Curves_AdjacentFaces/fr&action=edit&redlink=1 "Curves AdjacentFaces/fr (page does not exist)") : Sélectionne les faces adjacentes de la sous-forme sélectionnée.

- ![](/images/Curves_BSplineToConsole.svg) [Script Python](/index.php?title=Curves_BSplineToConsole/fr&action=edit&redlink=1 "Curves BSplineToConsole/fr (page does not exist)") : crée un script en Python pour construire les géométries B-spline ou Bézier sélectionnées.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Workbench/fr&oldid=1566424>"
