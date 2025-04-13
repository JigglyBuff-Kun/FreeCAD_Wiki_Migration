---
title: Atelier Cables
---

![](/images/Cables_workbench_icon.svg)

Icône de l'atelier externe Cables

## Introduction

L'![](/images/Cables_workbench_icon.svg) atelier Cables est un ensemble d'outils pour la modélisation des installations électriques dans les projets de conception architecturale. Il est conçu pour aider à faire passer des câbles à l'intérieur de bâtiments ou d'autres objets et pour construire des modèles de câbles avec la possibilité de faire des connexions à fil unique. Il s'agit d'un [atelier externe](/External_workbenches/fr "External workbenches/fr").

Cet ensemble d'outils peut être utilisé pour créer des boîtes électriques ou d'autres éléments électriques prêts à l'emploi (la liste des éléments sera, nous l'espérons, élargie à l'avenir). Ces éléments peuvent être connectés avec des câbles entièrement paramétrables de différents profils, nombres de fils et épaisseurs. Il existe quelques profils de câbles prédéfinis, mais il est également possible de créer ses propres profils non standard à l'aide d'un simple fichier csv.

Les modèles construits avec cet atelier permettent de repositionner facilement les éléments sans rompre les connexions. Les câbles peuvent adapter leur forme à de nouvelles positions. Toutefois, cette fonctionnalité n'est pas encore parfaite.

L'atelier se veut compatible avec l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") mais il peut être utilisé à d'autres fins que la conception architecturale. Il est prévu à l'avenir de rendre l'atelier plus adapté à la modélisation des connexions de circuits imprimés (toute aide à la création, par exemple, d'un ensemble de connecteurs prêts à l'emploi est la bienvenue).

![](/images/Cables_Example3.png)

Exemple de boîtes murales et de câbles  
Version animée [ici](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")

![](/images/Cables_Example1.png)

Exemple de câble plat à trois conducteurs :  
Forme de câble multimatériau et son fil de base, son profil et ses fils secondaires.

## Installation

Cet atelier peut être installé à partir du ![](/images/Std_AddonMgr.svg) [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"). Pour une installation manuelle, voir [Installer des ateliers supplémentaires](/Installing_more_workbenches/fr "Installing more workbenches/fr").

## Outils

Les outils de câblage sont divisés en plusieurs groupes en fonction de leur objectif.

### Outils de manutention des fils électriques

- ![](/images/Cables_WireFlex.svg) [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") : crée un nouvel objet WireFlex tendu entre deux ou plusieurs sommets|objets sélectionnés.

- ![](/images/Cables_AddVertex.svg) [Ajouter un sommet](/Cables_AddVertex/fr "Cables AddVertex/fr") : crée un sommet supplémentaire sur une arête WireFlex sélectionnée.

- ![](/images/Cables_DelVertex.svg) [Supprimer un sommet](/Cables_DelVertex/fr "Cables DelVertex/fr") : supprime un sommet d'un objet WireFlex sélectionné.

- ![](/images/Cables_AttachVertex.svg) [Attacher un sommet](/Cables_AttachVertex/fr "Cables AttachVertex/fr") : attache le sommet d'un WireFlex sélectionné à un sommet/objet externe.

- ![](/images/Cables_RemoveVertexAttachment.svg) [Supprimer la connexion d'un sommet](/Cables_RemoveVertexAttachment/fr "Cables RemoveVertexAttachment/fr") : supprime la connexion d'un sommet d'un WireFlex sélectionnée d'un sommet/objet externe.

### Outils pour la fabrication de câbles et d'autres éléments prêts à l'emploi

- ![](/images/Cables_Profile.svg) [Profil](/Cables_Profile/fr "Cables Profile/fr") : ajoute un nouveau profil de câble au document en cours.

- ![](/images/Cables_Cable.svg) [Câble](/Cables_Cable/fr "Cables Cable/fr") : ajoute un nouveau câble en fonction de la polyligne et du profil sélectionnés.

- ![](/images/Cables_CableBox.svg) [Boîte](/Cables_CableBox/fr "Cables CableBox/fr") : ajoute une boîte paramétrique pour des câbles.

- ![](/images/Cables_CableConnector.svg) [Connecteur](/Cables_CableConnector/fr "Cables CableConnector/fr") : ajoute un connecteur de câble paramétrique.

- ![](/images/Cables_CableLightPoint.svg) [Source lumineuse](/Cables_CableLightPoint/fr "Cables CableLightPoint/fr") : ajoute un point lumineux paramétrique pour câble.

- ![](/images/Cables_Material.svg) [Matériau](/Cables_Material/fr "Cables Material/fr") : ajoute un ensemble de multimatériaux par défaut au document.

### Outils d'assistance

- ![](/images/Cables_SupportPoint.svg) [Point](/Cables_SupportPoint/fr "Cables SupportPoint/fr") : ajoute un point.

- ![](/images/Cables_SupportLine.svg) [Ligne](/Cables_SupportLine/fr "Cables SupportLine/fr") : ajoute une ligne.

### Outils externes

- ![](/images/Draft_ToggleGrid.svg) [Basculer la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") : modifie la visibilité de la grille.

## Remarques

Cet atelier est actuellement en phase alpha. Vous pouvez vous attendre à quelques bogues qui peuvent rendre votre modèle cassé. Certaines propriétés des modèles peuvent changer dans le futur et casser les modèles créés avec la version en cours. Les pages du wiki relatives à cet atelier peuvent également être modifiées de manière significative à l'avenir. Tous les commentaires et les nouvelles idées sont les bienvenus. Veuillez envoyer vos commentaires et rapports par les canaux spécifiés dans [Références](#Références).

## Description du flux de travail typique=

1. Créez des extrémités de câbles, par exemple : [Boîtes](/Cables_CableBox/fr "Cables CableBox/fr") ou [Source lumineuse](/Cables_CableLightPoint/fr "Cables CableLightPoint/fr") et les disposer dans un espace 3D.
2. Créez des polylignes de base reliant les extrémités créées avec [WireFlex](/Cables_WireFlex/fr "Cables WireFlex/fr") et les disposer dans un espace 3D à l'aide de [lignes](/Cables_SupportLine/fr "Cables SupportLine/fr") ou [points](/Cables_SupportPoint/fr "Cables SupportPoint/fr").
3. Créez des [profils de câbles](/Cables_Profile/fr "Cables Profile/fr") adapté au projet.
4. Créez des [câbles](/Cables_Cable/fr "Cables Cable/fr") sur la base des câbles de base et des profils existants.
5. Colorez les câbles avec les [matériaux](/Cables_Material/fr "Cables Material/fr") prédéfinis ou personnalisés.
6. Enfin (et facultativement), connectez les câbles sélectionnés par des [connecteurs](/Cables_CableConnector/fr "Cables CableConnector/fr").

## Tutoriels et exemples

Exemples de documents FreeCAD avec câbles :

- [Exemples](https://github.com/sargo-devel/Cables/tree/master/examples) livrés avec le code source

Exemples par des images animées :

- [Exemple de flux de travail simple](/Cables_Example1_Simple_workflow "Cables Example1 Simple workflow")
- [Exemples de déplacement de WireFlex](/Cables_Example2_WireFlex "Cables Example2 WireFlex")
- [Exemple d'utilisation d'une boîte de câbles](/Cables_Example3_CableBox "Cables Example3 CableBox")
- [Exemple d'utilisation d'un connecteur de câble](/Cables_Example4_CableConnector "Cables Example4 CableConnector")

## Références

- Code source sur GitHub : <https://github.com/sargo-devel/Cables>
- Forum FreeCAD : <https://forum.freecad.org/viewtopic.php?t=94090>
- Signaler les bogues [ici](https://github.com/sargo-devel/Cables/issues)

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Workbench/fr&oldid=1554910>"
