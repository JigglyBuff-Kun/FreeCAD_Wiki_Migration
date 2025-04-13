---
title: Notes de version 1.1
---
:::caution
FreeCAD 1.1 est en cours de développement, il n'y a pas encore de date de sortie prévue.
:::

Des fonctions sont manquantes? Faites en part dans le fil du forum [Release notes for v1.1](https://forum.freecad.org/viewtopic.php?f=10&t=92080).

Voir [Contribuer à FreeCAD](/Help_FreeCAD/fr "Help FreeCAD/fr") pour savoir comment contribuer à FreeCAD.

Toutes les images de cette page doivent utiliser le suffixe \_relnotes\_1.1

**FreeCAD 1.1** a été publié le **JJ MM AA**, téléchargez la depuis la page [Téléchargement](/Download/fr "Download/fr"). Cette page liste toutes les nouvelles fonctions et les changements.

Les notes de versions plus anciennes de FreeCAD sont disponibles dans la [liste des notes de versions](/Feature_list/fr#Notes_de_versions "Feature list/fr").

L'endroit pour une image évocatrice sélectionnée par les administrateurs sur le [forum des modèles des utilisateurs](https://forum.freecad.org/viewforum.php?f=24).

## Général

## Interface utilisateur

|  |  |
| --- | --- |
|  | L'éclairage par trois points a été ajouté pour améliorer le rendu des modèles 3D. [Pull request #19397](https://github.com/FreeCAD/FreeCAD/pull/19397) |

### Autres améliorations de l'interface utilisateur

* Un raccourci par défaut pour les [Préférences](/Std_DlgPreferences/fr "Std DlgPreferences/fr") a été ajouté. [Pull request #15536](https://github.com/FreeCAD/FreeCAD/pull/15536)
* La page des préférences de la zone de notification a été améliorée. [Pull request #15207](https://github.com/FreeCAD/FreeCAD/pull/15207)
* Les fonctions de sauvegarde automatique et de sélection additive ont été ajoutées à l'outil [Mesurer](/Std_Measure/fr "Std Measure/fr"). [Pull request #17717](https://github.com/FreeCAD/FreeCAD/pull/17717)
* Un paramètre de [réglage fin](/Fine-tuning/fr "Fine-tuning/fr") *Activer/désactiver la transparence* a été ajouté pour permettre aux utilisateurs de modifier le niveau de transparence par défaut activé par l'outil [Bascule de la transparence](/Std_ToggleTransparency/fr "Std ToggleTransparency/fr"). [Pull request #18986](https://github.com/FreeCAD/FreeCAD/pull/18986)
* Une propriété de vue *Show Plane* a été ajoutée pour afficher le plan sur lequel l'objet 2D est basé. [Pull request #18910](https://github.com/FreeCAD/FreeCAD/pull/18910)
* Il est maintenant possible de changer la couleur des axes du système de coordonnées en utilisant les nouvelles préférences sous *Édition → Préférences... → Affichage → Vue 3D*. [Pull request #16995](https://github.com/FreeCAD/FreeCAD/pull/16995)
* Une propriété de vue *Show Placement* a été ajoutée pour afficher le placement en tant que système de coordonnées à l'origine d'un objet 2D. [Pull request #19671](https://github.com/FreeCAD/FreeCAD/pull/19671)
* Le [style de navigation](/Mouse_navigation/fr "Mouse navigation/fr") SolidWorks a été ajouté. [Pull request #19568](https://github.com/FreeCAD/FreeCAD/pull/19568)

## Noyau et API

### Noyau

|  |  |
| --- | --- |
|  | Les [outils de base de référence](/Std_Base/fr#Part_Datums "Std Base/fr") ont été implémentés pour créer des systèmes de coordonnées, des plans de référence, des lignes de référence et des points de référence qui peuvent être attachés et utilisés dans Assembly. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332) |

|  |  |
| --- | --- |
| Cliquez sur l'image si l'animation ne démarre pas. | L'outil [Transformer](/Std_TransformManip/fr "Std TransformManip/fr") a été remanié et permet désormais d'effectuer des saisies précises en plus du déplacement dans la vue 3D. Il est possible d'aligner le manipulateur de manière interactive sur n'importe quel élément du document et de transformer l'objet dans le système de coordonnées local (U, V, W) du manipulateur ou dans le système de coordonnées global du document. Le manipulateur peut être aligné sur l'origine de l'objet comme auparavant, ainsi que sur le centre d'inertie de l'objet. Une nouvelle fonction permet de déplacer l'objet (à l'emplacement du manipulateur) vers un emplacement cible dans le document et d'en inverser l'orientation. Voir toutes les [nouvelles options](/Std_TransformManip/fr#Options "Std TransformManip/fr"). [Pull request #17564](https://github.com/FreeCAD/FreeCAD/pull/17564) |

### API

#### Suppression d'API Python

#### API en Python modifiées

#### Nouvelles API en Python

## Start

* La page de démarrage peut désormais afficher le contenu de dossiers supplémentaires spécifiés par l'utilisateur. Leurs chemins d'accès doivent être séparés par deux points-virgules (`;;`). [Pull request #19473](https://github.com/FreeCAD/FreeCAD/pull/19473), [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918) et [Pull request #19948](https://github.com/FreeCAD/FreeCAD/pull/19948).
* La section Exemples sur la page de démarrage peut être cachée avec un paramètre dans les préférences. [Pull request #19376](https://github.com/FreeCAD/FreeCAD/pull/19376) et [Pull request #19918](https://github.com/FreeCAD/FreeCAD/pull/19918).

## Gestionnaire des extensions

* L'outil de mise à jour des dépendances de Python fonctionne maintenant correctement si FreeCAD est installé en tant que paquetage snap ou en tant qu'AppImage. [Pull request #19384](https://github.com/FreeCAD/FreeCAD/pull/19384), [Pull request #19766](https://github.com/FreeCAD/FreeCAD/pull/19766) et [Pull request #19814](https://github.com/FreeCAD/FreeCAD/pull/19814).
* Le chemin d'accàs pour l'installation des modules Python dans l'outil de mise à jour des dépendances est maintenant affiché comme un chemin absolu pour une meilleure lisibilité. Il est également affiché correctement en fonction de la méthode d'installation de FreeCAD. [Pull request #19828](https://github.com/FreeCAD/FreeCAD/pull/19828) et [Pull request #19816](https://github.com/FreeCAD/FreeCAD/pull/19816).

## Atelier Assembly

* L'outil [Nouvelle pièce](/Assembly_InsertNewPart/fr "Assembly InsertNewPart/fr") a été ajouté, ce qui permet d'ajouter facilement de nouvelles pièces à l'assemblage. [Pull request #17922](https://github.com/FreeCAD/FreeCAD/pull/17922)
* L'outil [Simulation](/Assembly_CreateSimulation/fr "Assembly CreateSimulation/fr") a été ajouté, ce qui permet d'ajouter des mouvements aux liaisons et de créer des animations. [Pull request #16414](https://github.com/FreeCAD/FreeCAD/pull/16414)

### Autres améliorations d'Assembly

* Les nouvelles données de base peuvent être utilisées pour attacher des liaisons afin d'assembler des pièces multiples. [Pull request #18332](https://github.com/FreeCAD/FreeCAD/pull/18332)

## Atelier BIM

### Autres améliorations de BIM

* Le panneau [Gérer les vues BIM](/BIM_Views/fr "BIM Views/fr") a été remanié et comporte désormais une section pour toutes les vues 2D. [Pull request #15836](https://github.com/FreeCAD/FreeCAD/pull/15836)
* La prise en charge de NativeIFC pour les objets 2D a été ajouté à BIM, permettant d'incorporer des objets 2D (lignes, textes, dimensions) dans des fichiers IFC, ainsi que d'ouvrir de tels fichiers à partir d'autres applications BIM. [Pull request #16629](https://github.com/FreeCAD/FreeCAD/pull/16629)
* La fenêtre de dialogue de [Nomenclature](/Arch_Schedule/fr "Arch Schedule/fr") prend désormais en charge les tableaux simples (c'est-à-dire non imbriqués). Cela permet aux tableaux réguliers et de liens (développés ou non) d'être traités pour d'autres calculs dans le rapport de la nomenclature BIM Schedule. [Pull request #19219](https://github.com/FreeCAD/FreeCAD/pull/19219)

## Atelier CAM

### Autres améliorations de CAM

* Les opérations de taraudage G84/G74 ont été ajoutées. [Pull request #8069](https://github.com/FreeCAD/FreeCAD/pull/8069)
* La prise en charge multi-passe a été ajoutée pour les opérations de profilage. [Pull request #17326](https://github.com/FreeCAD/FreeCAD/pull/17326)

## Atelier Draft

* La prise en charge des chemins d'accèes relatifs des polices a été ajoutée à [Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr"). [Pull request #17819](https://github.com/FreeCAD/FreeCAD/pull/17819)
* La gestion des liens dans [TechDraw Vue d'un objet Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr") a été corrigée. [Pull request #18175](https://github.com/FreeCAD/FreeCAD/pull/18175) et [Pull request #19296](https://github.com/FreeCAD/FreeCAD/pull/19296)
* Le mode d'extrusion de la commande [Ajuster ou prolonger](/Draft_Trimex/fr "Draft Trimex/fr") a été rendu *conscient des liens*. Il peut maintenant gérer des faces appartenant à des liens et des objets dans des conteneurs liés. Et le point qui définit l'extrusion peut être coplanaire avec la face. [Pull request #18314](https://github.com/FreeCAD/FreeCAD/pull/18314) et [Pull request #18320](https://github.com/FreeCAD/FreeCAD/pull/18320)
* Les commandes [Déplacer](/Draft_Move/fr "Draft Move/fr"), [Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") et [Échelle](/Draft_Scale/fr "Draft Scale/fr") ont également été rendues sensibles aux liens. [Pull request #18795](https://github.com/FreeCAD/FreeCAD/pull/18795)
* Si une [surface liée](/Draft_Facebinder/fr "Draft Facebinder/fr") basée sur des faces connectées est extrudée, une tentative est faite pour fermer ses coins. La propriété *Sew* de l'objet doit être réglée sur true pour cela. Notez que le code peut échouer pour les formes complexes. [Pull request #18901](https://github.com/FreeCAD/FreeCAD/pull/18901)
* La commande [Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr") a été améliorée avec plusieurs nouvelles propriétés. Il est maintenant possible d'inverser le réseau, de spécifier une unité d'espacement fixe et d'utiliser des motifs d'espacement. [Pull request #19017](https://github.com/FreeCAD/FreeCAD/pull/19017)
* Les objets dans les [calques](/Draft_Layer/fr "Draft Layer/fr") peuvent maintenant avoir des priorités. [Pull request #19207](https://github.com/FreeCAD/FreeCAD/pull/19207)
* La commande [Draft Ajouter au calque](/Draft_AddToLayer/fr "Draft AddToLayer/fr") a été ajoutée. Elle permet de placer rapidement les objets dans le bon calque. [Pull request #19427](https://github.com/FreeCAD/FreeCAD/pull/19427)
* Le code de TechDraw sur lequel repose [Draft Hachures](/Draft_Hatch/fr "Draft Hatch/fr") a été révisé pour gérer également les lignes pointillées dans les motifs des hachures. [Pull request #19458](https://github.com/FreeCAD/FreeCAD/pull/19458)
* Les commandes [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") et [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") ont été mises à jour. Les [réseaux](/Draft_Workbench/fr#Draft_ArrayTools "Draft Workbench/fr") peuvent être déclassés (*explosés*). Les nouveaux objets sont placés dans le même conteneur ([Group](/Std_Group/fr "Std Group/fr"), [Part](/Std_Part/fr "Std Part/fr")) que les objets d'origine et reçoivent également les propriétés visuelles des objets d'origine. [Pull request #19487](https://github.com/FreeCAD/FreeCAD/pull/19487) et [Pull request #19685](https://github.com/FreeCAD/FreeCAD/pull/19685)

### Autres améliorations de Draft

* La commande [Congé](/Draft_Fillet/fr "Draft Fillet/fr") fonctionne désormais sur les arêtes sélectionnées, au lieu de la première arête des objets sélectionnés. [Pull request #17945](https://github.com/FreeCAD/FreeCAD/pull/17945) et [Pull request #18150](https://github.com/FreeCAD/FreeCAD/pull/18150)
* Les commandes [Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr") et [Ajouter au groupe](/Draft_AddToGroup/fr "Draft AddToGroup/fr") ont été améliorées. Les menus des deux commandes sont triés par ordre alphabétique. Dans le menu de la commande [Groupement automatique](/Draft_AutoGroup/fr "Draft AutoGroup/fr"), les calques sont séparés des groupes, et l'option *Nouveau calque* demande un nom et active le calque. Les actions des deux commandes ont été rendues annulables. [Pull request #18172](https://github.com/FreeCAD/FreeCAD/pull/18172) et [Pull request #19312](https://github.com/FreeCAD/FreeCAD/pull/19312)
* La position du champ *Multiplicateur d'échelle* dans l'interface utilisateur a été améliorée (commandes [Définir le style](/Draft_SetStyle/fr "Draft SetStyle/fr"), [Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr") et les [Préférences](/Draft_Preferences/fr "Draft Preferences/fr")). [Pull request #18299](https://github.com/FreeCAD/FreeCAD/pull/18299)
* La commande [Draft <=> Esquisse](/Draft_Draft2Sketch/fr "Draft Draft2Sketch/fr") applique désormais également des contraintes de coïncidence entre des arêtes provenant d'objets sources différents. [Pull request #18805](https://github.com/FreeCAD/FreeCAD/pull/18805)
* Les modes rayon, chanfrein et suppression de la commande [Congé](/Draft_Fillet/fr "Draft Fillet/fr") sont stockés. [Pull request #19067](https://github.com/FreeCAD/FreeCAD/pull/19067)
* Une option d'édition a été ajoutée pour les [clones](/Draft_Clone/fr "Draft Clone/fr"). Après avoir double-cliqué sur ces derniers dans la [vue en arborescence](/Tree_view/fr "Tree view/fr"), leur échelle peut être modifiée par un panneau de tâches. [Pull request #19477](https://github.com/FreeCAD/FreeCAD/pull/19477)
* Pour plus de clarté, la case à cocher « Remplir » dans le panneau des tâches de [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr"), par exemple, a été renommée « Créer une face ». [Pull request #19738](https://github.com/FreeCAD/FreeCAD/pull/19738)
* Les textes des dimensions nouvellement créées sont désormais orientés automatiquement par rapport au plan de travail en cours. Un paramètre de [réglage fin](/Fine-tuning/fr#Atelier_Draft "Fine-tuning/fr") est disponible pour désactiver ce comportement. [Pull request #20072](https://github.com/FreeCAD/FreeCAD/pull/20072)
* [Aimantation Au plus proche](/Draft_Snap_Near/fr "Draft Snap Near/fr") n'a plus la priorité sur les autres aimantations. Les aimantations aux objets, tels que [Aimantation Milieu](/Draft_Snap_Midpoint/fr "Draft Snap Midpoint/fr") et [Aimantation Extrémité](/Draft_Snap_Endpoint/fr "Draft Snap Endpoint/fr"), à l'intérieur de la *plage d'aimantation* du curseur sont maintenant détectées. [Pull request #20118](https://github.com/FreeCAD/FreeCAD/pull/20118)

## Atelier FEM

|  |  |
| --- | --- |
|  | Un menu contextuel a été ajouté pour permettre la sélection d'un solide approprié si la face sélectionnée du CompSolid appartient à deux solides. Il est ainsi plus facile de sélectionner des solides intérieurs, par exemple pour leur appliquer des matériaux. [Pull request #18812](https://github.com/FreeCAD/FreeCAD/pull/18812) |

|  |  |
| --- | --- |
|  | La propriété *ZRefine* a été ajoutée à [Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr"), ce qui permet de créer des maillages extrudés simples à dominante hexagonale lorsque la propriété *Quad Dominated* est activée. Cependant, cela ne fonctionne que pour les éléments de premier ordre, sauf si les éléments générés sont tous des hexaèdres. [Pull request #19524](https://github.com/FreeCAD/FreeCAD/pull/19524) |

|  |  |
| --- | --- |
| Si l'animation ne démarre pas, cliquez sur l'image. | Les [FEM résultats](/FEM_ResultShow/fr "FEM ResultShow/fr") prennent désormais en charge les animations. [Pull request #18496](https://github.com/FreeCAD/FreeCAD/pull/18496) |

|  |  |
| --- | --- |
|  | La prise en charge du [solveur de conduction de courant statique](/FEM_EquationStaticCurrent/fr "FEM EquationStaticCurrent/fr") d'Elmer a été ajoutée. L'effet Joule peut également être calculé à l'aide de ce solveur. [Pull request #19835](https://github.com/FreeCAD/FreeCAD/pull/19835) |

|  |  |
| --- | --- |
|  | The [Results pipeline](/FEM_PostPipelineFromResult "FEM PostPipelineFromResult") can now store results from multiple frames. [Pull request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610) |

### Autres améliorations de FEM

* La verbosité des logs peut maintenant être définie pour Gmsh dans les [préférences](/FEM_Preferences/fr#Gmsh "FEM Preferences/fr"). [Pull request #17699](https://github.com/FreeCAD/FreeCAD/pull/17699)
* La propriété Données**Second Order Linear** et la prise en charge du [maillage plus fin localement](/FEM_MeshRegion/fr "FEM MeshRegion/fr"), jusque là disponibles uniquement pour Gmsh, sont maintenant également disponibles pour la nouvelle implémentation de [Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr"). [Pull request #17170](https://github.com/FreeCAD/FreeCAD/pull/17170)
* Les types de sections de poutres-caissons et elliptiques ont été ajoutés à la commande [Coupe transversale d'un élément 1D](/FEM_ElementGeometry1D/fr "FEM ElementGeometry1D/fr"). [Pull request #15843](https://github.com/FreeCAD/FreeCAD/pull/15843)
* L'outil [Purger les résultats](/FEM_ResultsPurge/fr "FEM ResultsPurge/fr") supprime désormais tous les objets résultat et pas seulement ceux natifs de CalculiX. [Pull request #18328](https://github.com/FreeCAD/FreeCAD/pull/18328)
* La [contrainte de liaison](/FEM_ConstraintTie/fr "FEM ConstraintTie/fr") peut maintenant être appliquée également aux faces de coques. [Pull request #18325](https://github.com/FreeCAD/FreeCAD/pull/18325)
* Le format de sortie (binaire ou ASCII) et la sauvegarde des ID de géométrie peuvent maintenant être définis pour Elmer, de même dans les [préférences](/FEM_Preferences/fr#Elmer "FEM Preferences/fr"). [Pull request #17972](https://github.com/FreeCAD/FreeCAD/pull/17972)
* Une option de lissage a été ajoutée au [filtre par contours](/FEM_PostFilterContours/fr "FEM PostFilterContours/fr"). [Pull request #18088](https://github.com/FreeCAD/FreeCAD/pull/18088)
* Le paramètre *BucklingAccuracy* a été ajouté au [solveur CalculiX](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr"). Il peut être nécessaire de capturer la première valeur propre dans certaines analyses de flambage linéaire. [Pull request #18790](https://github.com/FreeCAD/FreeCAD/pull/18790)
* Maintenant tous les objets FEM pour lesquels la suppression a un sens peuvent être supprimés. Auparavant, seules les contraintes pouvaient être supprimées. [Pull request #18636](https://github.com/FreeCAD/FreeCAD/pull/18636)
* Les forces de contact sont désormais enregistrées dans le fichier ccx\_dat\_file lors des analyses CalculiX. [Pull request #18840](https://github.com/FreeCAD/FreeCAD/pull/18840)
* L'outil [Matériau renforcé](/FEM_MaterialReinforced/fr "FEM MaterialReinforced/fr") utilise désormais le [nouvel éditeur de matériaux](/Material_Edit/fr "Material Edit/fr"). [Pull request #18893](https://github.com/FreeCAD/FreeCAD/pull/18893)
* La [condition limite de potentiel électrostatique](/FEM_ConstraintElectrostaticPotential/fr "FEM ConstraintElectrostaticPotential/fr") a été étendue pour prendre en charge également la condition limite de type Neumann et prescrire le flux électrique/la densité de charge de surface. Elle a maintenant un symbole aussi. [Pull request #18514](https://github.com/FreeCAD/FreeCAD/pull/18514) et [Pull request #19011](https://github.com/FreeCAD/FreeCAD/pull/19011)
* La température de référence de l'expansion thermique peut maintenant être définie pour un [matériau solide](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr") dans les analyses thermomécaniques avec CalculiX. [Pull request #19285](https://github.com/FreeCAD/FreeCAD/pull/19285)
* La fonction Python *Fem.frdToVTK* a été ajoutée pour permettre la conversion des fichiers de résultats frd de CalculiX au format VTK utilisé par ParaView. [Pull request #19426](https://github.com/FreeCAD/FreeCAD/pull/19426)
* La [condition limite de densité de courant](/FEM_ConstraintCurrentDensity/fr "FEM ConstraintCurrentDensity/fr") a été améliorée. Elle a maintenant deux modes (*Personnalisé* et *Normal*) et un symbole pour le mode *Normal*. [Pull request #19930](https://github.com/FreeCAD/FreeCAD/pull/19930)
* Deux nouveaux [exemples FEM](/FEM_Examples/fr "FEM Examples/fr") ont été ajoutés : un pour la nouvelle [équation de courant statique](/FEM_EquationStaticCurrent/fr "FEM EquationStaticCurrent/fr") (effet Joule) et un pour la [contrainte du corps rigide](/FEM_ConstraintRigidBody "FEM ConstraintRigidBody"). [Pull request #20007](https://github.com/FreeCAD/FreeCAD/pull/20007) et [Pull request #20011](https://github.com/FreeCAD/FreeCAD/pull/20011)
* Le panneau de tâches de [Charge de flux de chaleur](/FEM_ConstraintHeatflux/fr "FEM ConstraintHeatflux/fr") a été amélioré : les boutons radio pour choisir le type de flux de chaleur ont été remplacés par une boîte combo. [Pull request #20059](https://github.com/FreeCAD/FreeCAD/pull/20059)
* Le panneau de tâches de [Magnétisation](/FEM_ConstraintMagnetization "FEM ConstraintMagnetization") a été amélioré. [Pull request #20055](https://github.com/FreeCAD/FreeCAD/pull/20055)
* Le mode de sélection a été ajouté au sélecteur de référence géométrique dans les panneaux de tâches des équations d'Elmer. [Pull request #20053](https://github.com/FreeCAD/FreeCAD/pull/20053)
* La charge de l'outil [Densité de charge électrique](/FEM_ElectricChargeDensity/fr "FEM ElectricChargeDensity/fr") a été ajoutée pour être utilisée avec l'[équation électrostatique](/FEM_EquationElectrostatic/fr "FEM EquationElectrostatic/fr") d'Elmer. [Pull request #20494](https://github.com/FreeCAD/FreeCAD/pull/20494)
* Le pipeline ed [résultats](/FEM_PostPipelineFromResult/fr "FEM PostPipelineFromResult/fr") peut maintenant stocker les résultats de plusieurs images. [Pull request #19610](https://github.com/FreeCAD/FreeCAD/pull/19610)

## Atelier Material

### Autres améliorations de Material

* Le [polycarbonate](https://fr.wikipedia.org/wiki/Polycarbonate) avec des propriétés physiques a été ajouté à la base de données des matériaux. [Pull request #19432](https://github.com/FreeCAD/FreeCAD/pull/19432)

## Atelier Mesh

### Autres améliorations de Mesh

## Atelier OpenSCAD

### Autres améliorations de OpenSCAD

## Atelier Part

### Autres améliorations de Part

* L'outil [Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") a maintenant des entrées de résultats pour les formes valides, montre les objets ignorés et génère des rapports dans la [vue rapport](/Report_view/fr "Report view/fr").

## Atelier PartDesign

|  |  |
| --- | --- |
| Cliquez sur l'image si l'animation ne démarre pas. | Le panneau des tâches de l'outil [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr") a été remanié. Les éléments qui ne sont pas pertinents sont désormais masqués, ne laissant que ceux qui sont utiles pour la configuration actuelle, même s'ils sont en lecture seule. Le panneau est basé sur un diagramme qui fournit un contexte direct, et ses éléments ont été placés près de leur zone d'effet. [Pull request #19052](https://github.com/FreeCAD/FreeCAD/pull/19052) et [Pull request #19167](https://github.com/FreeCAD/FreeCAD/pull/19167) |

|  |  |
| --- | --- |
| Cliquez sur l'image si l'animation ne démarre pas. | Ajout de la prise en charge de la conicité du modèle et de plus de profils de filetage à l'outil [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr") :  * [British Standard Whitworth](https://fr.wikipedia.org/wiki/British_Standard_Whitworth) * [British Standard Fine](https://en.wikipedia.org/wiki/British_Standard_Fine) * [Raccord BSP](https://fr.wikipedia.org/wiki/Raccord_BSP) * [National pipe thread](https://fr.wikipedia.org/wiki/National_pipe_thread)   [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744) |

### Autres améliorations de PartDesign

* La fonction d'origine dans un corps de PartDesign utilise les nouveaux points de référence centraux. L'apparence a été modifiée et les plans s'agrandissent lors de la création d'une nouvelle esquisse. L'orientation étant erronée dans les anciennes versions de FreeCAD, les fichiers créés avec ces versions doivent être convertis à l'ouverture. Cela peut casser les fichiers qui font référence aux datums, et les fichiers convertis ou créés avec version 1.1 et suivantes seront cassés dans version 1.0 et précédentes. [Pull request #18126](https://github.com/FreeCAD/FreeCAD/pull/18126)
* La commande [Basculer le figeage](/Std_ToggleFreeze/fr "Std ToggleFreeze/fr") est désormais disponible dans PartDesign. [Pull request #18373](https://github.com/FreeCAD/FreeCAD/pull/18373)
* Les performances des filetages modélisés à partir de l'outil [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr") ont été améliorées. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)
* L'angle initial pour les filets coniques de l'outil [Perçage](/PartDesign_Hole/fr "PartDesign Hole/fr") est désormais automatiquement défini sur la valeur des normes ISO 7-1 et ASME B1.20.1. [Pull request #15744](https://github.com/FreeCAD/FreeCAD/pull/15744)

## Atelier Points

### Autres améliorations de Points

## Atelier Sketcher

|  |  |
| --- | --- |
| Cliquez sur l'image si l'animation ne démarre pas. | L'outil [Projection](/Sketcher_Projection/fr "Sketcher Projection/fr") a été ajouté, ce qui permet de créer une géométrie [géométrie externe](/Sketcher_External/fr "Sketcher External/fr") de définition et de basculer entre les modes de définition et de construction pour la géométrie externe. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
|  | L'outil [Intersection](/Sketcher_Intersection/fr "Sketcher Intersection/fr") a été ajouté, ce qui permet de créer une [géométrie externe](/Sketcher_External/fr "Sketcher External/fr") basée sur la géométrie de référence sélectionnée et l'intersection du plan de l'esquisse. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

|  |  |
| --- | --- |
| Cliquez sur l'image si l'animation ne démarre pas. | Les [géométries externes](/Sketcher_External "Sketcher External") (projection et intersection) peuvent désormais être créées en sélectionnant une face. [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736) |

### Autres améliorations de Sketcher

* Il est maintenant possible d'utiliser directement une géométrie externe comme entrée pour des outils comme le décalage ou la transformation (réseau), pour les deux géométries externes construction et définition [Pull request #17615](https://github.com/FreeCAD/FreeCAD/pull/17615).
* La géométrie externe (projetée ou intersectée) est maintenant par défaut une géométrie réelle (définissant) (qui n'a pas besoin d'être tracée comme dans la version 1.0 et les versions antérieures). Elle peut être transformée en géométrie de construction comme n'importe quelle autre géométrie [Pull request #17736](https://github.com/FreeCAD/FreeCAD/pull/17736).
* Les axes de Sketcher sont désormais affichés avec une longueur infinie. [Pull request #17312](https://github.com/FreeCAD/FreeCAD/pull/17312)
* Les esquisses sont désormais classées par ordre alphabétique dans la boîte de dialogue de [Ancrer une esquisse](/Sketcher_MapSketch/fr "Sketcher MapSketch/fr"). [Pull request #16518](https://github.com/FreeCAD/FreeCAD/pull/16518)
* Le déplacement de groupe a été ajouté, ce qui permet de déplacer toutes les entités géométriques sélectionnées. [Pull request #18273](https://github.com/FreeCAD/FreeCAD/pull/18273)
* Il y a une nouvelle préférence qui, si elle est cochée, rend la création de géométrie externe indépendante du mode de construction actuel. Elle est toujours créée en tant que géométrie de référence dans ce cas. [Pull request #18697](https://github.com/FreeCAD/FreeCAD/pull/18697)
* Une préférence a été ajoutée pour permettre le regroupement optionnel des outils [Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr") et [Polyligne](/Sketcher_CreatePolyline "Sketcher CreatePolyline"). [Pull request #20165](https://github.com/FreeCAD/FreeCAD/pull/20165)

## Atelier Spreadsheet

### Autres améliorations de Spreadsheet

* Des raccourcis par défaut pour [Texte en gras](/Spreadsheet_StyleBold/fr "Spreadsheet StyleBold/fr"), [Texte en italique](/Spreadsheet_StyleItalic/fr "Spreadsheet StyleItalic/fr") et [Texte en souligné](/Spreadsheet_StyleUnderline/fr "Spreadsheet StyleUnderline/fr") ont été ajoutés. [Pull request #15556](https://github.com/FreeCAD/FreeCAD/pull/15556)
* Double-cliquer sur le séparateur dans l'en-tête redimensionne maintenant la colonne en fonction du contenu. [Pull request #16296](https://github.com/FreeCAD/FreeCAD/pull/16296)
* Le zoom a été ajouté à la feuille de calcul. [Pull request #16130](https://github.com/FreeCAD/FreeCAD/pull/16130)

## Atelier Surface

### Autres améliorations de Surface

## Atelier TechDraw

### Autres améliorations de TechDraw

* L'outil [Cote de surface](/TechDraw_AreaDimension/fr "TechDraw AreaDimension/fr") prend désormais correctement en compte les trous dans les faces. [Pull request #17740](https://github.com/FreeCAD/FreeCAD/pull/17740)
* La validation des formes est maintenant disponible et peut être activée dans les [préférences](/TechDraw_Preferences/fr#Avancé "TechDraw Preferences/fr"). [Pull request #18282](https://github.com/FreeCAD/FreeCAD/pull/18282)
* La mise à l'échelle des symboles SVG a été corrigée. [Pull request #18757](https://github.com/FreeCAD/FreeCAD/pull/18757)
* Un nouveau spécificateur de format *r* a été ajouté. Il arrondit la valeur de la dimension au pas spécifié en décimal avant *r*. Par exemple, *%0.5r* (ou juste *%.5r*) arrondit à 0.5. [Pull request #19393](https://github.com/FreeCAD/FreeCAD/pull/19393)

## Importer et exporter

* L'alignement des esquisses dans l'exportation SVG et l'ancienne exportation DXF ont été corrigés. [Pull request #19765](https://github.com/FreeCAD/FreeCAD/pull/19765)

## Compilation

## Limitations connues

## Autres ressources

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_1.1/fr&oldid=1569382>"