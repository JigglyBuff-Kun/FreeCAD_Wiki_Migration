---
title: Atelier Defeaturing
---

![](/images/Defeaturing_workbench_icon.svg)

Icône de l'atelier Defeaturing

## Introduction

L'![](/images/Defeaturing_workbench_icon.svg) Atelier Defeaturing est un atelier externe destiné à l'édition de modèles STEP, permettant de supprimer des fonctionnalités sélectionnées sur le modèle. C'est un [atelier externe](/External_workbenches/fr "External workbenches/fr") et ne fait pas partie de l'installation standard de FreeCAD.

## Fonctions

- Il comprend un ensemble d'outils pour modifier une forme ou un modèle STEP en supprimant de(s) trou(s), de(s) face(s), en simplifiant le modèle, en modifiant la tolérance, en appliquant des opérations booléennes floues, etc.
- Il y a aussi des outils pour créer des formes plus solides, à partir d'arête(s), de face(s) ou de coque(s).
- Il est également possible d'utiliser la modélisation directe du modèle, lorsque l'historique des opérations n'est pas disponible. (C'est le cas pour les modèles 3D STEP).
- Il est utile dans des situations pour supprimer rapidement les détails propriétaires du modèle avant de le partager. Voir [Suppression de fonctions](/Defeaturing/fr "Defeaturing/fr")

Remarque : davantage d'outils avancés de Defeaturing pourront être utilisés si [OCC7.3](/OpenCASCADE/fr "OpenCASCADE/fr") est disponible.

## Installation

### Installation automatique (recommandé)

Utiliser le ![](/images/AddonManager.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr") disponible à partir de la v0.17 + via **Outils → Gestionnaire des extensions**. Cherchez l'icône ![](/images/Defeaturing_workbench_icon.svg) de l'atelier Defeaturing. Le gestionnaire des extensions informe également l'utilisateur lorsqu'une nouvelle version de cette extension est disponible.

### Manuellement

Voir [Comment installer un atelier supplémentaire](/How_to_install_additional_workbenches/fr "How to install additional workbenches/fr")

### Versions supportées

- FreeCAD v0.15 4671
- FreeCAD v0.16 >= 6712
- FreeCAD v0.17 >= 13522
- FreeCAD v0.18+

## Références

- Auteur : Github : [@easyw](https://github.com/easyw) | FreeCAD Forums: [[1]](https://forum.freecadweb.org/viewtopic.php?f=9&t=29506)
- Code source sur Github : <https://github.com/easyw/Defeaturing_WB>
- Fil du forum <https://forum.freecadweb.org/viewtopic.php?t=29506>

## Outils

![Fenêtre de dialogue Defeaturing](/images/Defeaturing_WB.png)

Fenêtre de dialogue Defeaturing

![](/images/Defeaturing_Tools.svg) Les outils de Defeaturing sont dans une autre fenêtre.

- ![](/images/DefeatWB_Tools_rmv_hole.png) [Remove Holes](/index.php?title=DefeatWB_Tools_rmv_hole.png&action=edit&redlink=1 "DefeatWB Tools rmv hole.png (page does not exist)") : enlève un trou d'une face
- ![](/images/DefeatWB_Tools_rmv_listed_Faces.png) [Remove listed Faces](/index.php?title=DefeatWB_Tools_rmv_listed_Faces&action=edit&redlink=1 "DefeatWB Tools rmv listed Faces (page does not exist)") : enlève les faces d'une liste.
- ![](/images/DefeatWB_Tools_add_Faces_listed_Edges.png) [Add Faces from 'in List' Edges](/index.php?title=DefeatWB_Tools_add_Faces_listed_Edges&action=edit&redlink=1 "DefeatWB Tools add Faces listed Edges (page does not exist)") : ajoute des faces dans une liste de polylignes.
- ![](/images/DefeatWB_Tools_select_Faces_Param_Defeat.png) [Select Faces to be Parametric defeatured](/index.php?title=DefeatWB_Tools_select_Faces_Param_Defeat&action=edit&redlink=1 "DefeatWB Tools select Faces Param Defeat (page does not exist)") : sélection de faces pour être défaite paramétriquement.
- ![](/images/DefeatWB_Tools_create_copy_listed_edges.png) [Create a copy of the 'in List' Edges](/index.php?title=DefeatWB_Tools_create_copy_listed_edges&action=edit&redlink=1 "DefeatWB Tools create copy listed edges (page does not exist)")  : crée une copie d'une liste de polylignes.

- ![](/images/DefeatWB_Tools_copy_Faces_listed_faces.png) [copy Faces from 'in List' Faces](/index.php?title=DefeatWB_Tools_copy_Faces_listed_faces&action=edit&redlink=1 "DefeatWB Tools copy Faces listed faces (page does not exist)")  : copie des faces à partir d'une liste de faces.
- ![](/images/DefeatWB_Tools_offset_face.png) [offset face](/index.php?title=DefeatWB_Tools_offset_face&action=edit&redlink=1 "DefeatWB Tools offset face (page does not exist)") : déplace une face.
- ![](/images/DefeatWB_Tools_offset_edge.png) [offset edge](/index.php?title=DefeatWB_Tools_offset_edge&action=edit&redlink=1 "DefeatWB Tools offset edge (page does not exist)") : déplace un polyligne.

- ![](/images/DefeatWB_Tools_make_solid_listed_faces.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_make_solid_listed_faces&action=edit&redlink=1 "DefeatWB Tools make solid listed faces (page does not exist)") : crée un solide avec une liste de faces.
- ![](/images/DefeatWB_Tools_make_solid_faces_selected_objects.png) [Make Solid from the Faces of the selected Objects](/index.php?title=DefeatWB_Tools_make_solid_faces_selected_objects&action=edit&redlink=1 "DefeatWB Tools make solid faces selected objects (page does not exist)") : crée un solide avec des faces des objets sélectionnés.
- ![](/images/DefeatWB_Tools_select_one_object_2_make_solid_step_proc.png) [Make Solid from in List Faces](/index.php?title=DefeatWB_Tools_select_one_object_2_make_solid_step_proc&action=edit&redlink=1 "DefeatWB Tools select one object 2 make solid step proc (page does not exist)") : sélectionne un objet solide pour tenter de créer un objet STEP destiné à être importé/exporté.
- ![](/images/DefeatWB_Tools_Connect.png) [Connect](/index.php?title=DefeatWB_Tools_Connect&action=edit&redlink=1 "DefeatWB Tools Connect (page does not exist)") : connexion.
- ![](/images/DefeatWB_Tools_clean_face_rmv_holes.png) [clean Face(s) removing holes and merging Outwire](/index.php?title=DefeatWB_Tools_clean_face_rmv_holes&action=edit&redlink=1 "DefeatWB Tools clean face rmv holes (page does not exist)") : nettoie une face(s) efface les trous et fusionne les polylignes.

- ![](/images/DefeatWB_Tools_show_listed_edges.png) [show 'in List‘ Edge(s)](/index.php?title=DefeatWB_Tools_show_listed_edges&action=edit&redlink=1 "DefeatWB Tools show listed edges (page does not exist)") : affiche une liste de polylignes.
- ![](/images/DefeatWB_Tools_show_listed_faces.png) [show 'in List‘ Face(s)](/index.php?title=DefeatWB_Tools_show_listed_faces&action=edit&redlink=1 "DefeatWB Tools show listed faces (page does not exist)") : affiche une liste de face(s).
- ![](/images/DefeatWB_Tools_refine.png) [refine](/index.php?title=DefeatWB_Tools_refine&action=edit&redlink=1 "DefeatWB Tools refine (page does not exist)") : affine.
- ![](/images/DefeatWB_Tools_simple_copy.png) [simple copy](/index.php?title=DefeatWB_Tools_simple_copy&action=edit&redlink=1 "DefeatWB Tools simple copy (page does not exist)") : simple copie
- ![](/images/DefeatWB_Tools_parametric_refine.png) [parametric Refine](/index.php?title=DefeatWB_Tools_parametric_refine&action=edit&redlink=1 "DefeatWB Tools parametric refine (page does not exist)") : affinage paramétrique.

- ![](/images/DefeatWB_Tools_geometry_check.png) [geometry check](/index.php?title=DefeatWB_Tools_geometry_check&action=edit&redlink=1 "DefeatWB Tools geometry check (page does not exist)") : valide la géométrie.
- ![](/images/DefeatWB_Tools_get_Tolerance_value.png) [get Tolerance value](/index.php?title=DefeatWB_Tools_get_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools get Tolerance value (page does not exist)") : cherche une valeur de tolérance.
- ![](/images/DefeatWB_Tools_set_Tolerance_value.png) [set Tolerance value](/index.php?title=DefeatWB_Tools_set_Tolerance_value&action=edit&redlink=1 "DefeatWB Tools set Tolerance value (page does not exist)") : rentre une valeur de tolérance.

- ![](/images/DefeatWB_Tools_make_edges_selected_vertexes.png) [make Edge from selected Vertexes](/index.php?title=DefeatWB_Tools_make_edges_selected_vertexes&action=edit&redlink=1 "DefeatWB Tools make edges selected vertexes (page does not exist)") : crée une arête avec les sommets sélectionnés.
- ![](/images/DefeatWB_Tools_reset_placement.png) [reset Placement](/index.php?title=DefeatWB_Tools_reset_placement&action=edit&redlink=1 "DefeatWB Tools reset placement (page does not exist)"): réinitialise le placement
- ![](/images/DefeatWB_Tools_show_hide_typeId_shape.png) [show/hide TypeId of the Shape](/index.php?title=DefeatWB_Tools_show_hide_typeId_shape&action=edit&redlink=1 "DefeatWB Tools show hide typeId shape (page does not exist)") : affiche/cache les type Id de la forme.
- ![](/images/DefeatWB_Tools_help.png) [help](/index.php?title=DefeatWB_Tools_help&action=edit&redlink=1 "DefeatWB Tools help (page does not exist)"): aide

- ![](/images/DefeatWB_Tools_Fuzzy_Cut.png) [Fuzzy Cut](/index.php?title=DefeatWB_Tools_Fuzzy_Cut&action=edit&redlink=1 "DefeatWB Tools Fuzzy Cut (page does not exist)") : coupe approximative
- ![](/images/DefeatWB_Tools_Fuzzy_Union.png) [Fuzzy Union](/index.php?title=DefeatWB_Tools_Fuzzy_Union&action=edit&redlink=1 "DefeatWB Tools Fuzzy Union (page does not exist)") : union approximative
- ![](/images/DefeatWB_Tools_Fuzzy_Common.png) [Fuzzy Common](/index.php?title=DefeatWB_Tools_Fuzzy_Common&action=edit&redlink=1 "DefeatWB Tools Fuzzy Common (page does not exist)") : intersection approximative

## Tutoriels vidéo

### Déconstruction

Fonction enlèvement utilisant le nouvel outil OCC7.3

[![](/images/Defeaturing-WB-%40Work_v3.png](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-holes.mp4)

Atelier Defeaturing : fonctions suppression (trous)

[![](/images/Defeaturing-WB-%40Work_v1.png)](https://youtu.be/yrTtWFakAyE)

YouTube : outils Defeaturing : simplification du modèle

[![](/images/Defeaturing-WB-%40Work_v2.png)](https://youtu.be/vgQwGI6Fk6Q)

YouTube : outils Defeaturing : sélection de plusieurs faces pour être défaites

[![](/images/Defeaturing-WB-%40Work_v4.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/removing-fillet-chamfer.mp4)

Atelier Defeaturing : supprimer chanfrein filet

[![](/images/Defeaturing-WB-%40Work_v5.png)](https://peertube.mastodon.host/videos/watch/c6bc5abd-2eb7-48c7-af67-c4d8e6783872)

Atelier Defeaturing : vue d'ensemble des fonctions (en langue allemande)

[![](/images//Defeaturing-WB-%40Work_v6.png)](https://raw.githubusercontent.com/easyw/FreeCAD-tutorials/master/testing-files/parametric-defeaturing.mp4)

Atelier Defeaturing : déconstruction paramétrique

### Réparation

- Coudre une forme
- Supprimer ou simplifier les faces
- Retirer les trous ou les poches
- Lire ou modifier la tolérance
- Faire des opérations booléennes approximatives

## Ateliers externes

Les ateliers FreeCAD sont faciles à programmer en [Python](/Python/fr "Python/fr"), de ce fait, beaucoup de personnes développent des ateliers supplémentaires en dehors des développeurs principaux de FreeCAD.

La page des [ateliers externes](/External_workbenches/fr "External workbenches/fr") contient des informations et des tutoriels sur certains d’entre eux et le projet [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons) vise à les rassembler et à les rendre facilement installables depuis FreeCAD.

De nouveaux ateliers sont en développement, tenez vous au courant!

Retrieved from "<http://wiki.freecad.org/index.php?title=Defeaturing_Workbench/fr&oldid=1510912>"
