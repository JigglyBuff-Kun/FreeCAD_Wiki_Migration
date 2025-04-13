---
title: Sketcher Préférences
---
## Introduction

Les préférences pour l'![](/images/Workbench_Sketcher.svg) [atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") se trouvent dans [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Dans le menu, sélectionnez **Édition → Préférences...** puis **![](/images/Workbench_Sketcher.svg) Sketcher**. Ce groupe n'est disponible que si l'atelier Sketcher a été chargé dans la session FreeCAD en cours.

Il existe quatre pages : [Général](#Général), [Grille](#Grille), [Affichage](#Affichage) et [Apparence](#Apparence).

Certaines préférences avancées ne peuvent être modifiées que dans l'[éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"). Voir [Réglage fin](/Fine-tuning/fr#Atelier_Sketcher "Fine-tuning/fr").

Cette page a été mise à jour pour la version 1.0.

Dans version 0.21 et précédentes, la page [Apparence](#Apparence) est intitulée "Couleurs".

## Général

![](/images/Preferences_Sketcher_Page_General.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Afficher la section "Contrôle avancé du solveur"** | Si cette option est cochée, le [fenêtre de dialogue de Sketcher](/Sketcher_Dialog/fr "Sketcher Dialog/fr") affichera la section *Contrôle avancé du solveur* pour ajuster les paramètres du solveur. |
| **Améliorer la résolution pendant les déplacements effectués par glissement** | Si cette option est cochée, un algorithme de résolution spécial sera utilisé lors du déplacement des éléments de l'esquisse. Cela permet d'éviter que l'esquisse ne se retourne pendant le glissement. Il s'agit d'une amélioration dans la plupart des cas, mais pour les esquisses complexes, cette option peut augmenter le temps de résolution de l'esquisse. |
| **Supprimer automatiquement les redondances** | Si cette option est cochée, les nouvelles contraintes qui sont redondantes sont automatiquement supprimées. |
| **Échap permet de quitter l'esquisse en édition** | Si cette option est cochée, la touche Échap permet de sortir du mode d'édition d'esquisse. L'option de désactivation peut être utile pour les utilisateurs qui ont l'habitude d'appuyer sur Échap dans le cadre de leur flux de travail dans d'autres solutions de CAO, mais qui ne souhaitent pas nécessairement quitter une esquisse. |
| **Désactiver l'ombrage en mode édition** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette option est cochée, la vue ombrée est désactivée lors de l'entrée en mode d'édition des esquisses. |
| **Notifier les substitutions automatiques de contraintes** | Si cette option est cochée, vous serez informé par une fenêtre de dialogue des substitutions de contraintes. Par exemple, si les extrémités de deux arcs sont connectées avec la [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") et que vous reconnectez les arcs à l'aide de la [contrainte de tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr"), la contrainte de coïncidence sera remplacée par la contrainte de tangente. Vous aurez une fenêtre de dialogue contextuelle vous en informant. |
| **Unifier la contrainte de coïncidence et la contrainte de coïncidence de point sur objet** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette option est cochée, l'[outil de contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") et l'[outil de contrainte point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr") sont unifiés en un [seul outil](/Sketcher_ConstrainCoincidentUnified/fr "Sketcher ConstrainCoincidentUnified/fr"). *Après avoir modifié cette préférence, vous devez redémarrer FreeCAD.* |
| **Outil automatique de contrainte horizontale/verticale** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Si cette option est cochée, l'[outil automatique de contrainte horizontale/verticale](/Sketcher_ConstrainHorVer/fr "Sketcher ConstrainHorVer/fr") est ajouté à la barre d'outils (il est toujours disponible dans le menu et par son raccourci), et les outils de [contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr") et de [contrainte verticale](/Sketcher_ConstrainVertical "Sketcher ConstrainVertical") sont regroupés en dessous dans une liste déroulante. *Après avoir modifié cette préférence, vous devez redémarrer FreeCAD.* |
| **Toujours ajouter une géométrie externe comme référence** [introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr") | Si cette option est cochée, les [géométries externes](/Sketcher_External/fr "Sketcher External/fr") sont toujours ajoutées comme géométries de référence, quel que soit le [mode de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") en cours. |
| **Barre d'outils des contraintes des dimensions** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Spécifie les outils de contraintes de dimension pour la barre d'outils (tous les outils dimensionnels sont toujours disponibles dans le menu et par l'intermédiaire de leurs raccourcis). Les options sont les suivantes  * **Outil unique** : un [outil de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr") combiné pour toutes les contraintes de dimension. Les outils séparés sont regroupés en dessous dans une liste déroulante. * **Outils séparés** : uniquement les outils séparés. * **Les deux** : à la fois l'[outil de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr") combiné et les outils séparés.   *Après avoir modifié cette préférence, vous devez redémarrer FreeCAD.* |
| **Mode pour les diamètres/rayons de l'outil de dimension** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Cette option permet de spécifier la manière dont l'[outil de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr") combiné gère les cercles et les arcs. Les options sont les suivantes :  * **Automatique** : applique d'abord une dimension de rayon aux arcs et une dimension de diamètre aux cercles. Avant de choisir le point qui positionnera la dimension, il est possible de changer avec la touche M. * **Diamètre** : applique toujours en premier une dimension de diamètre. Idem. * **Rayon** : applique toujours en premier une dimension de rayon. Idem. |
| **Mode de visibilité des paramètres dans la vue** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Spécifie le mode de visibilité des paramètres dans les vues. Les options sont les suivantes  * **Rien** : les paramètres dans la vue sont complètement désactivés. * **Dimensions seulement** : seuls les paramètres dans la vue des dimensions sont activés. Ce sont les plus utiles. Par exemple, le rayon d'un cercle. * **Position et dimensions** : les paramètres dans la vue des positions et des dimensions sont activés. Les paramètres de positions correspondent à la position du curseur, par exemple pour le centre d'un cercle. |

## Grille

![](/images/Preferences_Sketcher_Page_Grid.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Grille** | Si cette option est cochée, une grille s'affiche lorsque le croquis est en mode édition. Utilisé pour les nouveaux esquisses. Elle est stockée dans la propriété Vue**Show Grid** des esquisses. |
| **Espacement automatique de la grille** | Si cette option est cochée, l'espacement de la grille est automatiquement adapté en fonction des dimensions de la vue. Elle est stockée dans la propriété Vue**Show Grid** des esquisses. |
| **Espacement de la grille** | La distance entre deux lignes de la grille. Utilisée comme valeur de base si **Espacement automatique de la grille** est activé. Elle est stockée dans la propriété Vue**Show Grid** des esquisses. |
| **Seuil du nombre de pixels** | Le seuil d'espacement de la grille en pixels. Utilisé uniquement si **Espacement automatique de la grille** est activé. Si l'espacement à l'écran est inférieur à cette valeur, l'espacement physique de la grille est multiplié par la valeur de **Ligne principale de la grille tous les**. Si l'espacement à l'écran est supérieur à la valeur seuil multipliée par la valeur de **chaque**, l'espacement de la grille physique est divisé par la valeur de **chaque**. Si la valeur de **chaque** est fixée à 1, 10 est utilisé à la place dans ces calculs. |
| **Lignes secondaires de la grille** | Pour les lignes secondaires de la grille, vous pouvez spécifier :  * **Motif des lignes** * **Largeur des lignes** * **Couleur des lignes** |
| **Lignes principales de la grille** | Pour les lignes principales de la grille, vous pouvez spécifier :  * **Ligne principale de la grille tous les** : nombre de carrés entre les lignes de la grille principale. Définissez 1 pour désactiver les lignes de la grille principale. * **Motif des lignes** * **Largeur des lignes** * **Couleur des lignes** |

## Affichage

![](/images/Preferences_Sketcher_Page_Display.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Taille de la police** | La taille de la police utilisée pour les étiquettes et les contraintes dans l'esquisse. |
| **Échelle de la vue** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | La vue 3D est mise à l'échelle en fonction de ce facteur. |
| **Segments par géométrie** | Les courbes sont approximées par des segments de polygone pour la visualisation. Cette valeur définit le nombre de segments. La limite inférieure est de 50 segments. Des valeurs plus élevées affinent la visualisation mais peuvent entraîner des temps de calcul plus longs, en particulier pour les [B-splines](/Sketcher_CreateBSpline/fr "Sketcher CreateBSpline/fr"). |
| **Demander la valeur après la création d'une contrainte de dimension** | Si cette option est cochée, une fenêtre de dialogue s'ouvrira pour saisir une valeur pour les nouvelles contraintes de dimension. |
| **Créer des géométries en mode continu** | Si cette option est cochée, les outils de création de géométrie resteront actifs après la création d'un élément. Vous pouvez quitter un outil à tout moment en cliquant avec le bouton droit de la souris dans l'esquisse. |
| **Créer des contraintes en mode continu** | Si cette option est cochée, les outils de création de contraintes resteront actifs après la création d'une contrainte. Vous pouvez quitter un outil à tout moment en cliquant avec le bouton droit de la souris dans l'esquisse. |
| **Masquer les unités de longueur de base pour les systèmes d'unités pris en charge** | Si cette option est cochée, l'unité de longueur du [système d'unités](/Preferences_Editor/fr#Unit.C3.A9s "Preferences Editor/fr") sélectionné est utilisée mais n'est pas affichée dans les contraintes de l'esquisse. Uniquement pour les systèmes d'unités pris en charge. |
| **Afficher les coordonnées à côté du curseur lors de l'édition** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette option est cochée, les coordonnées du curseur sont affichées à côté du curseur lors de l'édition d'une esquisse. |
| **Utiliser les décimales du système pour les coordonnées du curseur** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette option est cochée, les coordonnées du curseur utiliseront les décimales du système au lieu de la forme abrégée. |
| **Afficher le nom des contraintes de dimension avec le format** [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | Si cette option est cochée, les noms des contraintes de dimension (si elles sont disponibles) sont affichés en utilisant le format donné :  * **%N** : nom du paramètre. * **%V** : valeur de la dimension. |
| **Masquer tous les objets qui dépendent de l'esquisse** | Si cette option est cochée, tous les objets qui dépendent de l'esquisse seront masqués à l'ouverture de l'esquisse. Notez que cela peut n'avoir aucun effet si les options **Afficher les objets utilisés pour la géométrie externe** et/ou **Afficher les objets auxquels l'esquisse est attachée** sont sélectionnées. |
| **Afficher les objets utilisés pour la géométrie externe** | Si cette option est cochée, les objets cachés utilisés pour la géométrie externe seront affichés à l'ouverture de l'esquisse. |
| **Afficher les objets auxquels l'esquisse est attachée** | Si cette option est cochée, les objets cachés auxquels l'esquisse est attachée seront affichés lorsque l'esquisse est ouverte. |
| **Restaurer la position de la caméra après l'édition** | Si cette case est cochée, la position de la caméra est ramenée à l'endroit où elle se trouvait avant l'ouverture de l'esquisse. |
| **Forcer la caméra orthographique lors du passage en mode édition** | Si cette option est cochée, le mode de la caméra sera forcé en mode orthographique à l'ouverture de l'esquisse. Le mode de la caméra sera rétabli lorsque vous quitterez le mode édition. Cette préférence n'est disponible que si **Restaurer la position de la caméra après l'édition** est activée. |
| **Ouvrir l'esquisse en mode "Vue en coupe"** | Si cette option est cochée, l'esquisse s'ouvrira en mode "Vue en coupe". |
| **Appliquer aux esquisses existantes** | Si vous appuyez sur ce bouton, les paramètres de **Automatisation de la visibilité** seront également appliqués aux esquisses existantes. Sinon, ils ne seront utilisés que pour les nouvelles esquisses. |

## Apparence

![](/images/Preferences_Sketcher_Page_Appearance.png)

Sauf indication contraire, ces préférences ne sont utilisées que lorsqu'une esquisse est en mode édition.

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Création de lignes** | La couleur utilisée pour les éléments de l'esquisse pendant leur création. |
| **Texte des coordonnées** | La couleur utilisée pour les coordonnées affichées lors de la création d'éléments d'une esquisse. |
| **Réticule du curseur** | La couleur utilisée pour le réticule du curseur affiché lors de la création d'éléments d'une esquisse. |
| **Géométries** [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") | Les couleurs utilisées pour la géométrie normale contrainte et non contrainte. Le motif et la largeur des lignes peuvent également être spécifiés. |
| **Géométries de construction** | Les couleurs utilisées pour les [géométries de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") contraintes et non contraintes. [introduit dans la version 0.22](/Release_notes_0.22/fr "Release notes 0.22/fr") : le motif et la largeur des lignes peuvent également être spécifiés. |
| **Géométries internes d'alignement** | Les couleurs utilisées pour les arêtes d'alignement internes contraintes et non contraintes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : le motif et la largeur des lignes peuvent également être spécifiés. |
| **Géométries externes** | La couleur utilisée pour les [géométries externes](/Sketcher_External/fr "Sketcher External/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : le motif et la largeur des lignes peuvent également être spécifiés. |
| **Esquisses entièrement contraintes** | La couleur utilisée pour une esquisse entièrement contrainte. |
| **Esquisses non valides** | La couleur utilisée pour une esquisse non valide. |
| **Contraintes pilotantes** | La couleur utilisée pour les [contraintes géométriques pilotantes](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). |
| **Contraintes pilotantes de dimension** | La couleur utilisée pour les [contraintes pilotantes de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr"). |
| **Contraintes pilotées** | La couleur utilisée pour les [contraintes pilotées de dimension](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). |
| **Contraintes dépendant d'une expression** | La couleur utilisée pour les contraintes de dimension dépendant d'une [expression](/Expressions/fr "Expressions/fr"). |
| **Contraintes désactivées** | La couleur utilisée pour les [contraintes désactivées](/Sketcher_ToggleActiveConstraint/fr "Sketcher ToggleActiveConstraint/fr"). |
| **Couleurs en dehors de l'esquisse : Sommets** | La couleur utilisée pour les [sommets](/Glossary/fr#Vertex "Glossary/fr") (points) hors mode édition. |
| **Couleurs en dehors de l'esquisse : Arêtes** | La couleur utilisée pour les [arêtes](/Glossary/fr#Edge "Glossary/fr") hors mode édition. |

Les couleurs des sélections lorsqu'une esquisse est en mode édition sont contrôlées par les paramètres globaux **Activer la surbrillance de la sélection** et **Activer la mise en évidence de la sélection**, voir les [réglages des préférences](/Preferences_Editor/fr#Sélection "Preferences Editor/fr").

La taille des sommets en mode édition est contrôlée par le [paramètre](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr") **Taille des marqueurs**.

## Remarque

Une autre préférence a une influence sur les esquisses. Si la préférence **Objets transparents** de l'onglet [Affichage → Vue 3D](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr") est réglée à `Passe pour les faces cachées`, les pointes de flèche à l'une des extrémités des dimensions de l'esquisse sont masquées sur certains systèmes. En vue arrière, la valeur de la cote peut également être cachée. Les versions 0.19 à 0.21 (à l'exception de la branche Link) sont concernées. Dans les versions 0.19 et 0.20, l'effet ne se produit que si la **Afficher la grille** est désactivée dans la section [Contrôles d'édition](/Sketcher_Dialog/fr#Modifier_les_contrôles "Sketcher Dialog/fr") du [panneau des tâches](/Task_panel/fr "Task panel/fr"), comme illustré ci-dessous.

Voir ce [fil du forum](https://forum.freecad.org/viewtopic.php?t=70975&start=10).

![](/images/Sketcher-Preferences-Note-Arrowhead-01.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-02.png)

Vue de face, grille activée et grille désactivée

![](/images/Sketcher-Preferences-Note-Arrowhead-03.png) ![](/images/Sketcher-Preferences-Note-Arrowhead-04.png)

Vue arrière, grille activée et grille désactivée cachant les pointes  
de flèches à l'extrémité opposée ainsi que la valeur de la dimension

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Preferences/fr&oldid=1540438>"