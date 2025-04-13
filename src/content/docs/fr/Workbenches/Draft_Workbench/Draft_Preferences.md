---
title: Draft Préférences
---
## Introduction

Les préférences de l'![](/images/Workbench_Draft.svg) [atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") se trouvent dans les [réglages des préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Dans le menu, sélectionnez **Édition → Préférences...** puis **![](/images/Workbench_Draft.svg) Draft**. Ce groupe n'est disponible que si l'atelier Draft a été chargé dans la session FreeCAD en cours.

Il y a cinq pages : [Général](#Général), [Interface](#Interface), [Grille et aimantation](#Grille_et_aimantation), [Paramètres graphiques](#Paramètres_graphiques) et [Textes et dimensions](#Textes_et_dimensions).

Certaines préférences avancées ne peuvent être modifiées que dans l'[éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"). Voir [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr").

Cette page a été mise à jour pour la version 1.0.

Dans version 0.21 et précédentes, certaines préférences peuvent apparaître sur une page différente, et dans certains cas, FreeCAD doit être redémarré après avoir changé une préférence.

## Général

![](/images/Preferences_Draft_Page_General.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Niveau de précision interne**. | Le nombre de décimales utilisées dans les opérations de coordonnées internes (par exemple 3 = 0.001). Les valeurs comprises entre 6 et 8 sont généralement considérées comme le meilleur compromis. |
| **Plan de travail par défaut** | Le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") par défaut pour les nouvelles vues. Les options sont les suivantes :  * **Automatique** : si **Automatique** est sélectionné, le plan de travail s'alignera automatiquement sur la vue courante chaque fois qu'une commande est lancée. En outre, il s'alignera sur les faces planes présélectionnées, ou lorsque des points sur les faces planes sont choisis pendant les commandes. * **XY (dessus)** * **XZ (face)** * **YZ (côté)** |
| **Afficher l'orientation du plan de travail** | Si cette option est cochée, un widget indiquant l'orientation en cours du plan de travail apparaît lors de la sélection des points. |
| **Inclure les groupes dans la liste des calques** | Si cette option est cochée, la liste déroulante des calques comprend également les groupes. Les objets peuvent alors être automatiquement ajoutés aux groupes. Voir [Draft Grouper automatiquement](/Draft_AutoGroup/fr "Draft AutoGroup/fr"). |
| **Afficher les instructions dans la vue rapport** | Si cette option est cochée, les instructions sont affichées dans la [vue rapport](/Report_view/fr "Report view/fr") lors de l'utilisation des commandes de Draft. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Mettre l'accent sur la longueur plutôt que la coordonnée X** | Si cette option est cochée, la saisie de la longueur, au lieu de la coordonnée X, sera la priorité. Cela permet d'indiquer une direction et de saisir ensuite une distance. |
| **Sélectionner les objets de base après la copie** | Si cette option est cochée, les objets de base, au lieu des copies créées, sont sélectionnés après la copie. |
| **Créer des primitives de Part si possible** | Si cette option est cochée, les commandes Draft créeront des [primitives de Part](/Part_Primitives/fr "Part Primitives/fr") au lieu d'objets Draft. Notez que ceci n'est pas entièrement pris en compte et que de nombreux objets ne seront pas éditables avec les commandes de modification de Draft. |
| **Garder les couleurs des faces lors de désagrégations/agrégations** | Si cette option est cochée, [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") et [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") conserveront les couleurs des faces. Uniquement pour les options splitFaces et makeShell. |
| **Garder les noms des faces lors de désagrégations/agrégations** | Si cette option est cochée, [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") et [Draft Agréger](/Draft_Upgrade/fr "Draft Upgrade/fr") conserveront les noms des faces. Uniquement pour les options splitFaces et makeShell. |
| **Délai de la souris** | C'est le délai en secondes pendant lequel la souris est inactive après avoir saisi un nombre dans l'un des champs de saisie du panneau des tâches de Draft. Pendant ce délai, le déplacement de la souris ne modifie pas la valeur saisie. Réglez cette valeur à 0 pour désactiver le délai. |
| **Nombre maximum d'objets modifiables** | Le nombre maximum d'objets que [Draft Éditer](/Draft_Edit/fr "Draft Edit/fr") est autorisé à traiter en même temps. |
| **Modifier le rayon des noeuds de sélection** | Le rayon des noeuds de sélection. |
| **Préfixe des étiquettes des clones** | Le préfixe par défaut ajouté à l'étiquette des nouveaux [clones](/Draft_Clone/fr "Draft Clone/fr"). |
| **Étiquette du groupe de construction** | L'étiquette par défaut pour le [groupe de géométrie de construction](/Draft_ToggleConstructionMode/fr "Draft ToggleConstructionMode/fr"). |
| **Couleur de la géométrie de construction**. | La couleur par défaut des objets Draft en mode construction. |

## Interface

![](/images/Preferences_Draft_Page_Interface.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Raccourcis des commandes** | Ces raccourcis ne fonctionnent que lorsqu'une commande de [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou de [BIM](/BIM_Workbench/fr "BIM Workbench/fr") est active. Notez que toutes les commandes ne supportent pas tous les raccourcis. |
| **Relatif** | Raccourci pour activer le mode relatif. Si le mode relatif est activé, les coordonnées sont relatives au dernier point, si disponible, sinon elles sont relatives à l'origine du système de coordonnées. |
| **Global** | Raccourci pour activer le mode global. Si le mode global est activé, les coordonnées sont relatives au système de coordonnées global, sinon elles sont relatives au système de coordonnées du [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr"). |
| **Longueur** | Raccourci pour changer le focus du champ de saisie de la coordonnée X au champ de saisie de la longueur et vice versa. |
| **Remplir** | Raccourci pour activer le mode de remplissage. Si le mode remplissage est activé, Données**Make Face** de l'objet créé aura la valeur `true`. |
| **Sélectionner les arêtes**. | Raccourci pour appuyer sur le bouton Sélectionner l'arête. Voir [Draft Dimension](/Draft_Dimension/fr "Draft Dimension/fr"). |
| **Mode sous-élément** | Raccourci pour activer le mode sous-élément. Si le mode sous-élément est activé, la commande utilisera les sous-éléments sélectionnés au lieu des objets entiers. |
| **Copier** | Raccourci pour activer le mode de copie. Si le mode copie est activé, la commande créera des copies modifiées au lieu de modifier les objets originaux. |
| **Annuler** | Raccourci pour appuyer sur le bouton Annuler. |
| **Effacer** | Raccourci pour appuyer sur le bouton Effacer. |
| **Fermer** | Raccourci pour appuyer sur le bouton Fermer. |
| **Sortir** | Raccourci pour appuyer sur le bouton Terminer. |
| **Continuer** | Raccourci pour activer le mode continu. Si le mode continu est activé, les commandes redémarreront après avoir été terminées. |
| **Changer d'aimantation** | Raccourci permettant de modifier la priorité d'aimantation d'un objet qui est masqué par d'autres éléments géométriques. Voir [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"). |
| **Ajouter un point d'aimantation** | Raccourci pour insérer un "point d'arrêt" à l'emplacement du curseur en cours. Voir [Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"). |
| **Définir le plan de travail** | Raccourci pour appuyer sur le bouton Définir le plan de travail. |
| **Aimantation** | Raccourci pour activer l'[Draft Aimantation](/Draft_Snap/fr "Draft Snap/fr"). |
| **Augmenter le rayon** | Raccourci pour augmenter la distance maximale à laquelle [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") détecte les intersections des lignes de la grille. Voir [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr"). |
| **Diminuer le rayon** | Raccourci pour diminuer la distance maximale à laquelle [Draft Aimantation Grille](/Draft_Snap_Grid/fr "Draft Snap Grid/fr") détecte les intersections des lignes de la grille. |
| **Contraindre en X** | Raccourci pour contraindre le mouvement du curseur à l'axe X. Voir [Draft Contrainte](/Draft_Constrain/fr "Draft Constrain/fr"). |
| **Contraindre en Y** | Raccourci pour contraindre le mouvement du curseur à l'axe Y. |
| **Contraindre en Z** | Raccourci pour contraindre le mouvement du curseur à l'axe Z. |
| **Afficher la barre d'outils d'aimantation de Draft uniquement pendant les commandes** | Si cette option est cochée, la barre d'outils d'aimantation de Draft ne sera visible que pendant les commandes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Afficher le widget d'aimantation dans l'atelier Draft** | Si cette option est cochée, le [widget d'aimantation](/Draft_snap_widget/fr "Draft snap widget/fr") est affiché dans la barre d'état de Draft. |
| **Afficher le widget d'échelle d'annotation dans l'atelier Draft** | Si cette option est cochée, le [widget d'échelle d'annotation](/Draft_annotation_scale_widget/fr "Draft annotation scale widget/fr") est affiché dans la barre d'état de Draft. |

## Grille et aimantation

![](/images/Preferences_Draft_Page_Grid_and_snapping.png)

Notez que plusieurs préférences de grille peuvent également être modifiées avec la commande [Draft Plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Toujours afficher la grille** | Si cette option est cochée, la grille sera toujours visible dans les nouvelles vues. Utilisez [Draft Basculer la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") pour changer cela pour la vue active. |
| **Afficher la grille pendant les commandes** | Si cette option est cochée, la grille sera visible pendant les commandes dans les nouvelles vues. Utilisez [Draft Basculer la grille](/Draft_ToggleGrid/fr "Draft ToggleGrid/fr") pour changer cela pour la vue active. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Afficher la bordure de la grille**. | Si cette option est cochée, une bordure supplémentaire est affichée autour de la grille, indiquant la taille du carré principal dans le coin inférieur gauche. |
| **Afficher la silhouette humaine** | Si cette option est cochée, le contour d'une silhouette humaine est affiché dans le coin inférieur gauche de la grille. Cette option n'est active que si **Afficher la bordure de la grille** est activée. |
| **Utiliser des axes colorés** | Si cette option est cochée, les deux axes principaux de la grille seront colorés en rouge, vert ou bleu s'ils correspondent à l'axe X, Y ou Z du système de coordonnées global. |
| **Lignes principales toutes les** | Le nombre de carrés entre les lignes principales de la grille. Les lignes de grille principales sont plus épaisses que les lignes de grille secondaires. |
| **Espacement de la grille** | La distance entre les lignes de la grille. |
| **Taille de la grille** | Le nombre de carrés dans les directions X et Y de la grille. |
| **Transparence de la grille** | La transparence globale de la grille. |
| **Couleur de la grille** | La couleur de la grille. |
| **Style des symboles d'aimantation** | Le style pour les [symboles d'aimantation](/Draft_Snap/fr "Draft Snap/fr"). Les options sont :  * **Style classique de Draft**. * **Style fait maison**. |
| **Couleur des symboles d'aimantation** | La couleur des [symboles d'aimantation](/Draft_Snap/fr "Draft Snap/fr"), [dimensions d'aimantation](/Draft_Snap_Dimensions/fr "Draft Snap Dimensions/fr") et l'[édition des noeuds](/Draft_Edit/fr "Draft Edit/fr"). |
| **Toujours aimanté** | Si cette option est cochée, l'[aimantation](/Draft_Snap/fr "Draft Snap/fr") est activée sans qu'il soit nécessaire d'appuyer sur la **touche pour l'aimantation**. |
| **Touche pour l'aimantation** | La touche de l'[aimantation](/Draft_Snap/fr "Draft Snap/fr"). |
| **Touche pour les contraintes** | La touche pour les [contraintes](/Draft_Constrain/fr "Draft Constrain/fr"). |
| **Touche pour Alt** | La touche qui modifie la fonction Alt. La fonction de cette touche dépend de la commande. |

## Paramètres graphiques

![](/images/Preferences_Draft_Page_Visual.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Taille des motifs SVG** | La taille par défaut des motifs SVG. Une valeur plus élevée donne un motif plus dense. |
| **Emplacement des motifs SVG supplémentaires** | Un répertoire supplémentaire contenant des fichiers SVG personnalisés contenant des définitions de motifs à ajouter aux motifs standard. |
| **Définition des lignes avec tirets** | Une définition de style de ligne SVG utilisée par la commande [TechDraw Vue Draft](/TechDraw_DraftView/fr "TechDraw DraftView/fr"). |
| **Définition des lignes en point-tirets** | Idem. |
| **Définition des lignes en pointillés** | Idem. |

## Textes et dimensions

![](/images/Preferences_Draft_Page_Texts_and_dimensions.png)

Ces préférences sont les valeurs par défaut utilisées lors de la création de nouveaux objets. Leur modification n'affecte pas les objets existants.

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Nom ou famille de la police** | La police par défaut pour les textes, les dimensions et les étiquettes. Il peut s'agir d'un nom de police tel que `Arial`, d'un style tel que `sans`, `serif` ou `mono`, d'une famille telle que `Arial,Helvetica,sans` ou d'un nom avec un style tel que `Arial:Bold`. |
| **Taille de la police** | La hauteur par défaut des textes, des textes de dimensions et des textes d'étiquettes. |
| **Espace interlignes** | L'espacement des lignes par défaut pour les textes et les étiquettes sur plusieurs lignes (par rapport à la taille de la police). |
| **Facteur d'échelle** | Facteur d'échelle d'annotation par défaut. C'est l'inverse de l'échelle définie dans le [Draft widget d'échelle d'annotation du projet](/Draft_annotation_scale_widget/fr "Draft annotation scale widget/fr"). Si l'échelle est `1:100`, le multiplicateur est `100`. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Couleur des textes** | La couleur par défaut des textes, des textes des dimensions et des textes des étiquettes. |
| **Afficher les lignes des dimensions** | Si cette option est cochée, les lignes des dimensions sont affichées par défaut. |
| **Largeur des lignes** | La largeur des lignes par défaut. |
| **Type des flèches** | Le symbole par défaut affiché aux extrémités des lignes des dimensions. Les options sont :  * **Point** * **Cercle** * **Flèche** * **Oblique** * **Oblique 2** |
| **Taille des flèches** | La taille des flèches par défaut. |
| **Couleur des lignes et des flèches** | La couleur par défaut des lignes et des flèches. |
| **Afficher l'unité** | Si cette option est cochée, un symbole des unités est ajouté par défaut aux textes des dimensions. |
| **Unité de remplacement** | L'unité de remplacement par défaut pour les dimensions. Entrez une unité telle que `m` ou `cm`, laissez vide pour utiliser l'unité en cours définie dans FreeCAD. |
| **Nombre de décimales** | Le nombre de décimales par défaut pour les textes des dimensions. |
| **Séparateur pour les pieds (unité)** | Chaîne de caractères facultative insérée entre les valeurs en pieds et en pouces dans les dimensions. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Dépassement de la ligne des dimensions** | La distance par défaut de la ligne des dimensions est prolongée au-delà des lignes d'extension. |
| **Longueur des lignes d'extension** | La longueur par défaut des lignes d'extension. Utilisez `0` pour des lignes d'extension complètes. Une valeur négative définit l'écart entre les extrémités des lignes d'extension et les points mesurés. Une valeur positive définit la longueur maximale des lignes d'extension. Utilisé uniquement pour les [dimensions linéaires](/Draft_Dimension/fr#Vue "Draft Dimension/fr"). |
| **Dépassement de la ligne d'extension** | La longueur par défaut des lignes d'extension dépassant les lignes des dimensions. |
| **Espacement du texte** | L'espace par défaut entre les lignes des dimensions et les textes des dimensions. |
| **Fichier de la police par défaut des formes de texte** | Le fichier de police par défaut pour la commande [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr"). Pour les utilisateurs de Windows, lire le paragraphe [Sélection des fichiers de police sous Windows](/Draft_ShapeString/fr#Sélection_des_fichiers_de_police_sous_Windows "Draft ShapeString/fr") sur cette page. |

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Preferences/fr&oldid=1547831>"