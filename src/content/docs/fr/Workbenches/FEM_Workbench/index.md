---
title: Atelier FEM
---

![](/images/Workbench_FEM.svg)

Icône de l'atelier FEM

## Introduction

L'atelier FEM offre un flux de travail d'[analyse par éléments finis](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_%C3%A9l%C3%A9ments_finis) pour FreeCAD. Cela signifie que tous les outils permettant d'effectuer une analyse sont réunis dans une seule interface utilisateur graphique.

![](/images/FemWorkbench.jpg)

## Déroulement des tâches

Les étapes pour effectuer une analyse d’éléments finis sont les suivantes :

1. Prétraitement : configuration du problème d'analyse.
   1. Modélisation de la géométrie : création de la géométrie avec FreeCAD, ou importation depuis une autre application.
   2. Créer une analyse.
      1. Ajout de contraintes de simulation telles que des charges et des supports fixes au modèle géométrique.
      2. Ajout de matériaux aux parties du modèle géométrique.
      3. Créer un maillage d'éléments finis pour le modèle géométrique, ou l'importer d'une autre application.
2. Résolution : exécution d'un solveur externe à partir de FreeCAD.
3. Post-traitement : visualiser les résultats de l'analyse depuis FreeCAD, ou exporter les résultats pour qu'ils puissent être post-traités avec une autre application.

L'atelier FEM peut être utilisé sur Windows, MacOSX et Linux. Étant donné que l'atelier utilise des solveurs externes, la quantité d’installation manuelle dépend du système d’exploitation utilisé. Voir [FEM Installation des composants requis](/FEM_Install/fr "FEM Install/fr") pour des instructions sur la configuration des outils externes.

![](/images/FEM_Workbench_workflow.svg)

Déroulement des tâches de l'atelier FEM : l'atelier fait appel à deux programmes externes pour effectuer le maillage d'un objet solide et la solution proprement dite du problème des éléments finis.

## Menu : Modèle

- ![](/images/FEM_Analysis.svg) [Conteneur d'analyse](/FEM_Analysis/fr "FEM Analysis/fr") : crée un nouveau conteneur pour une analyse mécanique.

### Matériaux

- ![](/images/FEM_MaterialSolid.svg) [Matériau pour solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr") : permet de sélectionner un matériau solide de la base de données.

- ![](/images/FEM_MaterialFluid.svg) [Matériau pour fluide](/FEM_MaterialFluid/fr "FEM MaterialFluid/fr") : permet de sélectionner un matériau fluide dans la base de données.

- ![](/images/FEM_MaterialMechanicalNonlinear.svg) [Matériau mécanique non linéaire](/FEM_MaterialMechanicalNonlinear/fr "FEM MaterialMechanicalNonlinear/fr") : permet d'ajouter un modèle de matériau mécanique non linéaire.

- ![](/images/FEM_MaterialReinforced.svg) [Matériau renforcé](/FEM_MaterialReinforced/fr "FEM MaterialReinforced/fr") : permet de sélectionner dans la base de données des matériaux renforcés composés d'une matrice et d'un renfort.

- ![](/images/FEM_MaterialEditor.svg) [Éditeur de matériaux](/FEM_MaterialEditor/fr "FEM MaterialEditor/fr") : permet d'ouvrir l'éditeur de matériaux pour éditer des matériaux.

### Géométrie de l'élément

- ![](/images/FEM_ElementGeometry1D.svg) [Coupe transversale d'un élément 1D](/FEM_ElementGeometry1D/fr "FEM ElementGeometry1D/fr") : utilisé pour définir les sections transversales d'éléments de type poutre.

- ![](/images/FEM_ElementRotation1D.svg) [Rotation d'un élément 1D](/FEM_ElementRotation1D/fr "FEM ElementRotation1D/fr") : utilisé pour faire pivoter les coupes transversales d'éléments de type poutre.

- ![](/images/FEM_ElementGeometry2D.svg) [Épaisseur d'un élément 2D](/FEM_ElementGeometry2D/fr "FEM ElementGeometry2D/fr") : utilisé pour définir l'épaisseur d'un élément de type coque.

- ![](/images/FEM_ElementFluid1D.svg) [Section fluide 1D](/FEM_ElementFluid1D/fr "FEM ElementFluid1D/fr") : utilisé pour créer un élément de section fluide pour les réseaux pneumatiques et hydrauliques.

### Conditions limites électromagnétiques

- ![](/images/FEM_ConstraintElectrostaticPotential.svg) [Potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr") : utilisé pour définir les conditions limites de potentiel électrostatique.

- ![](/images/FEM_ConstraintCurrentDensity.svg) [Densité de courant](/FEM_ConstraintCurrentDensity/fr "FEM ConstraintCurrentDensity/fr") : utilisé pour définir les conditions limites de densité de courant. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_ConstraintMagnetization.svg) [Magnétisation](/FEM_ConstraintMagnetization/fr "FEM ConstraintMagnetization/fr") : utilisé pour définir les conditions limites de magnétisation. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_ConstraintElectricChargeDensity.svg) [Densité de charge électrique](/FEM_ElectricChargeDensity/fr "FEM ElectricChargeDensity/fr") : utilisé pour définir la densité de charge électrique. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

### Conditions limites des fluides

- ![](/images/FEM_ConstraintInitialFlowVelocity.svg) [Vitesse initiale d'écoulement](/FEM_ConstraintInitialFlowVelocity/fr "FEM ConstraintInitialFlowVelocity/fr") : utilisé pour définir une vitesse d'écoulement initiale pour un corps (volume).

- ![](/images/FEM_ConstraintInitialPressure.svg) [Pression initiale](/FEM_ConstraintInitialPressure/fr "FEM ConstraintInitialPressure/fr") : utilisé pour définir une pression initiale pour un corps (volume). [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_ConstraintFlowVelocity.svg) [Vitesse d'écoulement comme condition limite](/FEM_ConstraintFlowVelocity/fr "FEM ConstraintFlowVelocity/fr") : utilisé pour définir une vitesse d'écoulement comme condition aux limites sur une arête (2D) ou une face (3D).

### Fonctions d'analyse géométrique

- ![](/images/FEM_ConstraintPlaneRotation.svg) [Contrainte multi-points selon un plan](/FEM_ConstraintPlaneRotation/fr "FEM ConstraintPlaneRotation/fr") : utilisé pour définir une contrainte pour que les nœuds d'une surface plane restent dans le même plan.

- ![](/images/FEM_ConstraintSectionPrint.svg) [Affichage des variables de sortie](/FEM_ConstraintSectionPrint/fr "FEM ConstraintSectionPrint/fr") : affiche les variables de sortie prédéfinies du modèle (forces et moments) dans un fichier de données.

- ![](/images/FEM_ConstraintTransform.svg) [Système de coordonnées locales](/FEM_ConstraintTransform/fr "FEM ConstraintTransform/fr") : utilisé pour définir un système de coordonnées local pour une face.

### Conditions limites et charges mécaniques

- ![](/images/FEM_ConstraintFixed.svg) [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr") : utilisé pour définir une condition limite fixe sur un point, une arête ou une/des face(s).

- ![](/images/FEM_ConstraintRigidBody.svg) [Contrainte de corps rigide](/FEM_ConstraintRigidBody/fr "FEM ConstraintRigidBody/fr") : utilisé pour appliquer la contrainte de corps rigide de CalculiX. Elle contraint le mouvement des nœuds d'une entité géométrique sélectionnée au mouvement d'un point de référence positionné par l'utilisateur. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/FEM_ConstraintDisplacement.svg) [Condition limite de déplacement](/FEM_ConstraintDisplacement/fr "FEM ConstraintDisplacement/fr") : utilisé pour définir une condition limite de déplacement sur un point, une arête ou une/des face(s).

- ![](/images/FEM_ConstraintContact.svg) [Contrainte de contact](/FEM_ConstraintContact/fr "FEM ConstraintContact/fr") : utilisé pour définir une contrainte de contact entre deux faces.

- ![](/images/FEM_ConstraintTie.svg) [Contrainte de liaison](/FEM_ConstraintTie/fr "FEM ConstraintTie/fr") : utilisé pour définir une contrainte de liaison ("contact lié") entre deux faces ou, [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"), la symétrie cyclique.

- ![](/images/FEM_ConstraintSpring.svg) [Ressort](/FEM_ConstraintSpring/fr "FEM ConstraintSpring/fr") : utilisé pour définir un ressort. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

- ![](/images/FEM_ConstraintForce.svg) [Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr") : utilisé pour définir une force en [N] appliquée uniformément à la face sélectionnée dans la direction définie.

- ![](/images/FEM_ConstraintPressure.svg) [Charge de pression](/FEM_ConstraintPressure/fr "FEM ConstraintPressure/fr") : utilisé pour définir une charge de pression.

- ![](/images/FEM_ConstraintCentrif.svg) [Charge centrifuge](/FEM_ConstraintCentrif/fr "FEM ConstraintCentrif/fr") : utilisé pour définir une charge de corps d'une force centrifuge. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

- ![](/images/FEM_ConstraintSelfWeight.svg) [Charge de gravité](/FEM_ConstraintSelfWeight/fr "FEM ConstraintSelfWeight/fr") : permet de définir une accélération gravitationnelle agissant sur un modèle.

### Conditions limites et charges thermiques

- ![](/images/FEM_ConstraintInitialTemperature.svg) [Température initiale](/FEM_ConstraintInitialTemperature/fr "FEM ConstraintInitialTemperature/fr") : permet de définir la température initiale d'un corps.

- ![](/images/FEM_ConstraintHeatflux.svg) [Charge de flux de chaleur](/FEM_ConstraintHeatflux/fr "FEM ConstraintHeatflux/fr") : utilisé pour définir une charge de flux de chaleur sur une/des face(s).

- ![](/images/FEM_ConstraintTemperature.svg) [Condition limite de température](/FEM_ConstraintTemperature/fr "FEM ConstraintTemperature/fr") : utilisé pour définir une condition limite de température sur un point, une arête ou une/des face(s).

- ![](/images/FEM_ConstraintBodyHeatSource.svg) [Source de chaleur du corps](/FEM_ConstraintBodyHeatSource/fr "FEM ConstraintBodyHeatSource/fr") : utilisé pour définir une source de chaleur interne d'un objet.

### Écraser des constantes

- ![](/images/FEM_ConstantVacuumPermittivity.svg) [Constante de permittivité du vide](/FEM_ConstantVacuumPermittivity/fr "FEM ConstantVacuumPermittivity/fr") : permet de remplacer la [permittivité du vide](https://fr.wikipedia.org/wiki/Permittivit%C3%A9_du_vide) par une valeur personnalisée.

## Menu : Maillage

- ![](/images/FEM_MeshNetgenFromShape.svg) [Mailler avec Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") : génère un maillage d'éléments finis pour un modèle en utilisant Netgen.

- ![](/images/FEM_MeshGmshFromShape.svg) [Mailler avec Gmsh](/FEM_MeshGmshFromShape/fr "FEM MeshGmshFromShape/fr") : génère un maillage d'éléments finis pour un modèle en utilisant Gmsh.

- ![](/images/FEM_MeshBoundaryLayer.svg) [Couche limite de maillage](/FEM_MeshBoundaryLayer/fr "FEM MeshBoundaryLayer/fr") : crée des maillages anisotropes pour des calculs précis près des frontières.

- ![](/images/FEM_MeshRegion.svg) [Mailler plus finement](/FEM_MeshRegion/fr "FEM MeshRegion/fr") : crée une ou plusieurs zones localisées à mailler, ce qui optimise considérablement le temps d'analyse.

- ![](/images/FEM_MeshGroup.svg) [Collecter un maillage](/FEM_MeshGroup/fr "FEM MeshGroup/fr") : regroupe et étiquette les éléments d'un maillage (sommet, arête, surface) ensemble, ce qui est utile pour exporter le maillage vers des solveurs externes.

- ![](/images/FEM_CreateElementsSet.svg) [Effacer des éléments](/FEM_CreateElementsSet/fr "FEM CreateElementsSet/fr") : masque les éléments sélectionnés par un polygone du maillage. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/FEM_FemMesh2Mesh.svg) [Maillage FEM en maillage surfacique](/FEM_FemMesh2Mesh/fr "FEM FemMesh2Mesh/fr") : convertit des surfaces d'éléments 3D ou des éléments 2D entiers d'un maillage sélectionné FEM en maillage surfacique.

## Menu : Résolution

- ![](/images/FEM_SolverCalculixCxxtools.svg) [Solveur CalculiX standard](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") : crée un nouveau solveur pour cette analyse.

- ![](/images/FEM_SolverElmer.svg) [Solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") : crée le contrôleur de solveur pour Elmer.

- ![](/images/FEM_SolverMystran.svg) [Solveur Mystran](/FEM_SolverMystran/fr "FEM SolverMystran/fr") : crée le contrôleur de solveur pour le solveur MYSTRAN. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

- ![](/images/FEM_SolverZ88.svg) [Solveur Z88](/FEM_SolverZ88/fr "FEM SolverZ88/fr") : crée le contrôleur de solveur pour Z88.

### Équations mécaniques

- ![](/images/FEM_EquationElasticity.svg) [Équation d'élasticité](/FEM_EquationElasticity/fr "FEM EquationElasticity/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour effectuer des analyses linéaires mécaniques.

- ![](/images/FEM_EquationDeformation.svg) [Équation de déformation](/FEM_EquationDeformation/fr "FEM EquationDeformation/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") permettant de réaliser des analyses mécaniques non linéaires (déformations). [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

### Équations électromagnétiques

- ![](/images/FEM_EquationElectrostatic.svg) [Équation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour effectuer des analyses électrostatiques.

- ![](/images/FEM_EquationElectricforce.svg) [Équation force électrique](/FEM_EquationElectricforce/fr "FEM EquationElectricforce/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour calculer la force électrique sur les surfaces.

- ![](/images/FEM_EquationMagnetodynamic.svg) [Équation magnétodynamique](/FEM_EquationMagnetodynamic/fr "FEM EquationMagnetodynamic/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour calculer la magnétodynamique. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_EquationMagnetodynamic2D.svg) [Équation magnétodynamique 2D](/FEM_EquationMagnetodynamic2D/fr "FEM EquationMagnetodynamic2D/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour calculer la magnétodynamique en 2D. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_EquationStaticCurrent.svg) [Équation courant statique](/FEM_EquationStaticCurrent/fr "FEM EquationStaticCurrent/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour calculer la conduction du courant statique. [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

- ![](/images/FEM_EquationFlow.svg) [Équation d'écoulement](/FEM_EquationFlow/fr "FEM EquationFlow/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour effectuer des analyses d'écoulement.

- ![](/images/FEM_EquationFlux.svg) [Équation de flux](/FEM_EquationFlux/fr "FEM EquationFlux/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour effectuer des analyses de flux.

- ![](/images/FEM_EquationHeat.svg) [Équation de chaleur](/FEM_EquationHeat/fr "FEM EquationHeat/fr") : équation pour le ![](/images/FEM_SolverElmer.svg) [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") pour effectuer des analyses de transfert de chaleur.

- ![](/images/FEM_SolverControl.svg) [Contrôle du solveur](/FEM_SolverControl/fr "FEM SolverControl/fr") : ouvre le menu pour ajuster et lancer le solveur sélectionné.

- ![](/images/FEM_SolverRun.svg) [Résolution](/FEM_SolverRun/fr "FEM SolverRun/fr") : lance le solveur sélectionné de l'analyse active.

## Menu : Résultats

- ![](/images/FEM_ResultsPurge.svg) [Purger les résultats](/FEM_ResultsPurge/fr "FEM ResultsPurge/fr") : supprime les résultats de l'analyse active.

- ![](/images/FEM_ResultShow.svg) [Afficher les résultats](/FEM_ResultShow/fr "FEM ResultShow/fr") : utilisé pour afficher le résultat d'une analyse. Cette boîte de dialogue n'est pas disponible pour le [solveur Elmer](/FEM_SolverElmer/fr "FEM SolverElmer/fr") car ce solveur visualise en utilisant uniquement l'objet [Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr").

- ![](/images/FEM_PostApplyChanges.svg) [Appliquer les modifications au pipeline](/FEM_PostApplyChanges/fr "FEM PostApplyChanges/fr") : active l'application immédiate des modifications apportées aux pipelines et aux filtres.

- ![](/images/FEM_PostPipelineFromResult.svg) [Pipeline de résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") : permet d'ajouter une nouvelle représentation graphique des résultats d'analyse FEM (échelle de couleurs et plus d'options d'affichage).

- ![](/images/FEM_PostFilterWarp.svg) [Filtre des déformations](/FEM_PostFilterWarp/fr "FEM PostFilterWarp/fr") : utilisé pour visualiser la forme déformée à l'échelle du modèle.

- ![](/images/FEM_PostFilterClipScalar.svg) [Filtre d'écrêtage scalaire](/FEM_PostFilterClipScalar/fr "FEM PostFilterClipScalar/fr") : utilisé pour écrêter un champ avec une valeur scalaire spécifiée.

- ![](/images/FEM_PostFilterCutFunction.svg) [Filtre de découpe selon une fonction](/FEM_PostFilterCutFunction/fr "FEM PostFilterCutFunction/fr") : permet d'afficher les résultats sur une sphère ou un plan traversant le modèle.

- ![](/images/FEM_PostFilterClipRegion.svg) [Filtre d'écrêtage selon une région](/FEM_PostFilterClipRegion/fr "FEM PostFilterClipRegion/fr") : utilisé pour écrêter un champ avec une sphère ou un plan traversant le modèle.

- ![](/images/FEM_PostFilterContours.svg) [Filtre par contours](/FEM_PostFilterContours/fr "FEM PostFilterContours/fr") : permet d'afficher des iso-lignes (pour des analyses en 2D) ou des iso-contours. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_PostFilterDataAlongLine.svg) [Filtre d'écrêtage selon une ligne](/FEM_PostFilterDataAlongLine/fr "FEM PostFilterDataAlongLine/fr") : utilisé pour tracer les valeurs d'un champ le long d'une ligne spécifiée.

- ![](/images/FEM_PostFilterLinearizedStresses.svg) [Graphique de linéarisation des critères](/FEM_PostFilterLinearizedStresses/fr "FEM PostFilterLinearizedStresses/fr") : crée un graphique de linéarisation des critères.

- ![](/images/FEM_PostFilterDataAtPoint.svg) [Données au point](/FEM_PostFilterDataAtPoint/fr "FEM PostFilterDataAtPoint/fr") : permet d'afficher la valeur d'un champ sélectionné à un point donné.

### Fonctions de filtrage

- ![](/images/FEM_PostCreateFunctionPlane.svg) [Plan](/FEM_PostCreateFunctionPlane/fr "FEM PostCreateFunctionPlane/fr") : coupe le maillage résultant selon un plan.

- ![](/images/FEM_PostCreateFunctionSphere.svg) [Sphère](/FEM_PostCreateFunctionSphere/fr "FEM PostCreateFunctionSphere/fr") : coupe le maillage résultant selon une sphère.

- ![](/images/FEM_PostCreateFunctionCylinder.svg) [Cylindre](/FEM_PostCreateFunctionCylinder/fr "FEM PostCreateFunctionCylinder/fr") : coupe le maillage résultant selon un cylindre. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

- ![](/images/FEM_PostCreateFunctionBox.svg) [Boîte](/FEM_PostCreateFunctionBox/fr "FEM PostCreateFunctionBox/fr") : coupe le maillage résultant selon une boîte. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## Menu : Utilitaires

- ![](/images/FEM_ClippingPlaneAdd.svg) [Plan de coupe](/FEM_ClippingPlaneAdd/fr "FEM ClippingPlaneAdd/fr") : ajoute un plan de découpe pour l'ensemble de la vue du modèle.

- ![](/images/FEM_ClippingPlaneRemoveAll.svg) [Supprimer les plans de coupe](/FEM_ClippingPlaneRemoveAll/fr "FEM ClippingPlaneRemoveAll/fr") : supprime tous les [plans de coupe](/FEM_ClippingPlaneAdd/fr "FEM ClippingPlaneAdd/fr") existants.

- ![](/images/FEM_Examples.svg) [Exemples](/FEM_Examples/fr "FEM Examples/fr") : ouvre l'interface graphique pour accéder aux exemples de FEM.

## Menu contextuel

- ![](/images/FEM_MeshClear.svg) [Effacer le maillage FEM](/FEM_MeshClear/fr "FEM MeshClear/fr") : supprime le fichier de maillage du fichier FreeCAD. Utile pour alléger un fichier FreeCAD.

- ![](/images/FEM_MeshDisplayInfo.svg) [Informations du maillage FEM](/FEM_MeshDisplayInfo/fr "FEM MeshDisplayInfo/fr") : affiche les statistiques de base du maillage existant, le nombre de nœuds et d'éléments de chaque type.

## Outils obsolètes

- ![](/images/FEM_ConstraintFluidBoundary.svg) [Condition de limite du fluide](/FEM_ConstraintFluidBoundary/fr "FEM ConstraintFluidBoundary/fr") : utilisé pour définir une condition limite de fluide. N'avait pas de solveur. Non disponible dans version 1.0 et suivantes.

- ![](/images/FEM_ConstraintBearing.svg) [Contrainte de roulement](/FEM_ConstraintBearing/fr "FEM ConstraintBearing/fr") : utilisé pour définir une contrainte de roulement. N'avait pas de solveur. Non disponible dans version 1.0 et suivantes.

- ![](/images/FEM_ConstraintGear.svg) [Contrainte d'engrenage](/FEM_ConstraintGear/fr "FEM ConstraintGear/fr") : utilisé pour définir une contrainte d'engrenage. N'avait pas de solveur. Non disponible dans version 1.0 et suivantes.

- ![](/images/FEM_ConstraintPulley.svg) [Contrainte de poulie](/FEM_ConstraintPulley/fr "FEM ConstraintPulley/fr") : utilisé pour définir une contrainte de poulie. N'avait pas de solveur. Non disponible dans version 1.0 et suivantes.

- ![](/images/FEM_SolverCalculiX.svg) [Solveur CalculiX (nouveau modèle)](/FEM_SolverCalculiX/fr "FEM SolverCalculiX/fr") : identique au modèle original ![](/images/FEM_SolverCalculixCxxtools.svg) [Solveur CalculiX standard](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") avec des vérifications supplémentaires. L'outil était inachevé. Non disponible dans version 1.0 et suivantes.

- ![](/images/FEM_CreateNodesSet.svg) [Ensemble de nœuds](/FEM_CreateNodesSet/fr "FEM CreateNodesSet/fr") : crée/définit un ensemble de nœuds à partir d'un maillage FEM. L'outil était inachevé et ne pouvait pas être utilisé. Non disponible dans version 1.0 et suivantes.

## Préférences

- ![](/images/Std_DlgPreferences.svg) [Préférences...](/FEM_Preferences/fr "FEM Preferences/fr") : préférences disponibles dans les outils FEM.

## Informations

Les pages suivantes décrivent différents sujets de l'atelier FEM.

[FEM Installation des composants requis](/FEM_Install/fr "FEM Install/fr") : une description détaillée de la configuration des programmes externes utilisés dans l'atelier.

[FEM Préparation de la géométrie et maillage](/FEM_Geometry_Preparation_and_Meshing/fr "FEM Geometry Preparation and Meshing/fr") : conseils concernant la préparation de la géométrie pour une analyse aux éléments finis et le maillage.

[FEM Maillage](/FEM_Mesh/fr "FEM Mesh/fr") : détails sur les maillages dans l'atelier FEM.

[FEM Solveur](/FEM_Solver/fr "FEM Solver/fr") : informations supplémentaires sur les différents solveurs disponibles dans l’atelier et sur ceux qui pourraient être utilisés à l’avenir.

[FEM CalculiX](/FEM_CalculiX/fr "FEM CalculiX/fr") : plus d’informations sur CalculiX, le solveur par défaut utilisé dans l'atelier pour l'analyse des structures.

[FEM Béton](/FEM_Concrete/fr "FEM Concrete/fr") : informations intéressantes sur le thème de la simulation des structures en béton.

## Tutoriels

Tutoriel 1 : [FEM CalculiX Cantilever 3D](/FEM_CalculiX_Cantilever_3D/fr "FEM CalculiX Cantilever 3D/fr") ; analyse de base sur une poutre.

Tutoriel 2 : [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") ; analyse de la tension dans une structure.

Tutoriel 3 : [FEM Tutoriel Python](/FEM_Tutorial_Python/fr "FEM Tutorial Python/fr") ; exemple de configuration en porte-à-faux entièrement fait par scripts Python, y compris le maillage.

Tutoriel 4 : [FEM Cisaillement d'un bloc composite](/FEM_Shear_of_a_Composite_Block/fr "FEM Shear of a Composite Block/fr") ; voir la déformation d'un bloc composé de deux matériaux.

Tutoriel 5 : [Analyse FEM transitoire](/Transient_FEM_analysis/fr "Transient FEM analysis/fr")

Tutoriel 6 : [Post-traitement des résultats FEM avec Paraview](/Post-Processing_of_FEM_Results_with_Paraview/fr "Post-Processing of FEM Results with Paraview/fr")

Tutoriel 7 : [Exemple calcul capacité de deux sphères](/FEM_Example_Capacitance_Two_Balls/fr "FEM Example Capacitance Two Balls/fr") ; Tutoriel 6 Interface graphique d'Elmer "Exemple calcul capacité de deux sphères" utilisant des exemples FEM.

Tutoriels d'analyse thermomécanique couplée par [openSIM](https://opensimsa.github.io/training.html)

Tutoriel vidéo 1 : [Vidéo FEM pour les débutants](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (avec lien sur YouTube)

Tutoriel vidéo 2 : [Vidéo FEM pour les débutants](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (avec lien sur YouTube)

Nombreux tutoriels vidéo : [anisim Logiciels d'ingénierie à code source ouvert](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (en allemand)

## Extension de l'atelier FEM

L'atelier FEM est en constante évolution. Un des objectifs du projet est de trouver des moyens d’interagir facilement avec divers solveurs FEM, afin que l’utilisateur final puisse rationaliser le processus de création, de maillage, de simulation et d’optimisation d’un problème de conception technique, le tout avec FreeCAD.

Les informations suivantes sont destinées aux utilisateurs expérimentés et aux développeurs qui souhaitent étendre l'atelier FEM de différentes manières. Une connaissance des langages C ++ et Python est préconisée. Une certaine connaissance du système "document objet" utilisé dans FreeCAD est également nécessaire. Ces informations sont disponibles dans la [Documentation pour utilisateurs expérimentés](/Power_users_hub/fr "Power users hub/fr") et la [Documentation pour développeurs](/Developer_hub/fr "Developer hub/fr"). Veuillez noter que FreeCAD étant toujours en cours de développement, certains articles peuvent être anciens et donc obsolètes. Les informations les plus récentes sont traitées dans les [forums FreeCAD](https://forum.freecadweb.org/index.php), dans la section Développement. Pour les discussions sur l'atelier FEM, les conseils ou l’aide pour l’extension de l’atelier reférez vous dans le [sous forum FEM](https://forum.freecadweb.org/viewforum.php?f=18).

Les articles suivants expliquent comment étendre l'atelier, par exemple en ajoutant de nouveaux types de conditions aux limites (contraintes) ou équations.

- [Extension module FEM](/Extend_FEM_Module/fr "Extend FEM Module/fr")
- [Embarquer les développeurs FEM](/Onboarding_FEM_Devs/fr "Onboarding FEM Devs/fr") tente d'orienter les nouveaux développeurs sur la façon de contribuer à l'atelier FEM.
- [Tutoriel FEM Ajouter une équation](/Add_FEM_Equation_Tutorial/fr "Add FEM Equation Tutorial/fr")
- [Tutoriel FEM Ajouter une contrainte](/Add_FEM_Constraint_Tutorial/fr "Add FEM Constraint Tutorial/fr")

Un guide du développeur a été rédigé pour aider les utilisateurs expérimentés à comprendre les bases complexes du code de FreeCAD et les interactions entre les éléments centraux et les ateliers individuels. Le livre est hébergé sur github afin que plusieurs utilisateurs puissent y contribuer et le mettre à jour.

- [Aperçu préliminaire du ebook : Guide du développeur de modules pour FreeCAD](https://forum.freecadweb.org/viewtopic.php?t=17581) (Discussion sur le forum).
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) (dépôt github)

## Extension de la documentation de l'atelier FEM

- Plus d'informations concernant l'extension ou l'absence de documentation FEM peuvent être trouvées dans le forum : [documentation FEM manquante sur le Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Workbench/fr&oldid=1568217>"
