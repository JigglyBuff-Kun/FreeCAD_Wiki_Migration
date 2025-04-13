---
title: Tutoriel de construction navale S60
---
|  |
| --- |
| Tutoriel |
| Thème |
| Atelier Ship |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
|  |
| Auteurs |
|  |
| Version de FreeCAD |
|  |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Introduction

Dans ce tutoriel, nous allons travailler avec un bateau de la série 60, de l'Université de l'Iowa. Le tutoriel a pour but de montrer comment travailler avec un bateau monocoque symétrique, cependant les bateaux multicoques ou non symétriques peuvent être réalisés avec la même procédure.

En savoir plus sur l'![](/images/Workbench_Ship.svg) [atelier Ship](/Ship_Workbench/fr "Ship Workbench/fr").

## Charger la forme de base

### Contexte

L'![](/images/Workbench_Ship.svg) [atelier Ship](/Ship_Workbench/fr "Ship Workbench/fr") travaille sur des **entités bateau**, qui doivent être créées à partir d'une géométrie fournie. La géométrie doit être un solide (ou un ensemble de solides), les critères suivants doivent être pris en compte :

* Toute la géométrie de la coque doit être fournie (y compris les corps symétriques).
* La géométrie tribord doit être incluse dans le domaine négatif *y*.
* Le point d'origine (0,0,0) est l'intersection de la *section médiane* (point médian entre les perpendiculaires arrière et avant) et de la *ligne de base*.

![Illustration des pré-requis pour la forme de base](/images/FreeCAD-Ship-SignCriteria.jpg)

Illustration des pré-requis pour la forme de base

Illustration des pré-requis pour la forme de base

### Chargement de la géométrie de la série 60

Afin d'aider les nouveaux utilisateurs, l'atelier Ship comprend un chargeur d'exemples de géométries, parmi lesquels vous pouvez choisir :

* Série 60 de l'Université d'Iowa
* Wigley Canonical Ship
* Série 60 Catamaran
* Wigley Catamaran

![Icône de chargement des exemples de formes de bateaux.](/images/Ship_Load.svg)

Icône de chargement des exemples de formes de bateaux.

Icône de chargement d'exemples de géométrie de bateaux

En exécutant le menu (Ship design/Load an example ship geometry) une boîte de dialogue apparaît. Sélectionnez **Series 60 from Iowa University** et appuyez sur *OK*. L'outil charge un nouveau document avec la forme **s60\_IowaUniversity**.

:::caution
Attention, avant de modifier quoi que ce soit !Vous travaillez maintenant avec le fichier d'exemple original.Pour préserver l'exemple original non modifié,vous devez d'abord l'enregistrer comme un nouveau fichier avant de modifier quoi que ce soit.
:::

## Créer un objet navire

Pour créer un *objet navire* sélectionnez la forme de base et exécutez l'outil de création de navire (Ship design/Create a new ship).

![Outil de création de bateaux.](/images/Ship_Logo.svg)

Outil de création de bateaux.

Icône de l'outil de création de bateau

La boîte de dialogue de la tâche de création d'un bateau et certaines annotations dans la [Vue 3D](/3D_view/fr "3D view/fr") s'affichent. Ces annotations disparaîtront lorsque vous fermerez l'outil de création de bateau, ne vous inquiétez donc pas.

Les données les plus pertinentes concernant le bateau doivent être introduites (l'![](/images/Workbench_Ship.svg) atelier Ship utilise un système d'introduction progressive des données, ainsi les opérations de base peuvent être effectuées en ne connaissant que les données de base du bateau, plus d'informations sont nécessaires lorsque les opérations deviennent plus complexes).

### Données du navire

Les principales dimensions doivent être saisies ici:

* Longueur: [Longueur entre perpendiculaires](http://fr.wikipedia.org/wiki/Longueur_entre_perpendiculaires), 25.5 m pour ce navire.
* Largeur : [Maître bau](http://fr.wikipedia.org/wiki/Ma%C3%AEtre-bau), 3.389 m pour ce navire.
* Tirant d'eau: 1.0 m pour ce navire.

![Annotations sur la vue de côté](/images/FreeCAD-Ship-S60ShipCreationFront.png)

Annotations sur la vue de côté

Annotations de longueur.

Couramment, la longueur entre perpendiculaires dépend du tirant d'eau. Si vous ne connaissez pas la longueur du navire vous pouvez saisir le tirant d'eau et ajuster la longueur.

![Annotations vue de face](/images/FreeCAD-Ship-S60ShipCreationSide.png)

Annotations vue de face

Annotations largeur .

Le même procédé vaut pour ajuster la largeur. Notez que la valeur demandée est la largeur totale même si l'annotation sur la vue 3D n'est portée que sur la moitié tribord.

Lorsque vous appuyez sur le bouton Accept, une nouvelle instance de bateau est créée, appelée **Ship** dans le dialogue **Tags & Attributes**. Nous n'avons plus besoin de la géométrie, vous pouvez donc la masquer.

![Ship instance icon](/images/FreeCAD-Ship-ShipInstance.png)

Ship instance icon

Icône exemple de Navire.

À partir d'ici, vous devez avoir sélectionné **Ship** avant d'exécuter l'un des outils de l'atelier Ship.

## Lignes de dessin

L'atelier Ship fournit un outil qui facilite l'obtention d'un plan de lignes à partir du dessin des lignes de bateau.

![Outil de dessin des contours.](/images/Ship_OutlineDraw.svg)

Outil de dessin des contours.

Icône de l'outil de dessin des lignes

Le dessin des lignes est un ensemble de lignes à partir de coupes de section dans les 3 axes, qui afficheront éventuellement la géométrie de la coque dans un plan de lignes. Nous devons fournir les lignes pour les 3 vues suivantes:

* Plan du corps (à l'aide des coupes transversales)
* Plan transparent (en utilisant les coupes longitudinales)
* Plan à mi-largeur (en utilisant les coupes des lignes de Flottaison)

### Coupes transversales

Habituellement, il faut effectuer 21 sections transversales équidistantes entre perpendiculaires. Pour le faire, FreeCAD fournit un outil automatique pour le faire, il suffit de sélectionner le type de sections  **Transversales** , aller à la zone **Créer automatiquement** et définir le nombres de sections **21** , puis appuyez sur Create sections

![Outline draw transversal sections preview.](/images/S60OutlineTransversal.png)

Outline draw transversal sections preview.

Aperçu des sections transversales du schéma

Le tableau des sections est rempli et l'aperçu des sections appelé *OutlineDraw* est affiché. Habituellement, d'autres sections sont ajoutées à la proue et à la poupe, où des courbures plus complexes sont enregistrées, pour ce faire :

1. Allez à la fin du tableau et *double-cliquez* sur un élément vide afin de le modifier.
2. Appuyez sur intro pour confirmer.
3. Ajoutez les sections suivantes :

:   :   X22 = -12.1125 m
    :   X23 = 12.1125 m

Selon la complexité de la géométrie de la coque, l'aperçu des sections peut prendre un certain temps. Pour supprimer une section, il suffit de la remplir avec un texte vide et appuyez sur Entrée.

### Coupes longitudinales

Deux coupes longitudinales doivent être ajoutées, alors sélectionnez le type de sections **Longitudinal**, allez dans la zone **Auto create** et définissez le nombres de sections **2**, puis appuyez sur Create sections. Le tableau des sections est rempli et l'aperçu des sections est mis à jour.

### Lignes de flottaison

6 lignes de flottaison entre la ligne de base et le traçage de conception doivent être ajoutées, sélectionnez alors le type de sections **Waterlines**, accédez à la zone **Auto create** et définissez **5** (Z = 0 m ne sera pas considéré, ajoutez-le manuellement si vous en avez besoin), puis appuyez sur Create sections. Le tableau des sections est rempli et l'aperçu des sections est mis à jour.

Plusieurs lignes d'eau supplémentaires doivent être ajoutées:

* Z <sous> 6 </ sub> = 1,2 m
* Z <sous> 7 </ sub> = 1,4 m
* Z <sous> 8 </ sub> = 1,6 m
* Z <sous> 9 </ sub> = 1,8 m
* Z <sous> 10 </ sub> = 2,0 m

### Effectuer le tracé

Sélectionnez l'échelle **1:100** et appuyez sur Accept pour laisser l'outil générer les sections 3D dans un nouvel objet.

![Resultant sections.](/images/FreeCAD-Ship-S60Outline3DSections.png)

Resultant sections.

Sections résultantes

Pour tracer ces sections, vous pouvez utiliser l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") :

![Plan de traçage des contours.](/images/FreeCAD-Ship-S60OutlinePlot.png)

Plan de traçage des contours.

 Traçage des contours.

## Courbe des zones transversales

Un paramètre hydrodynamique typique de conception de bateau est la courbe des zones transversales, qui récupère certains indicateurs sur le comportement de la coque (résistance au remorquage, sécheresse, ...). L'atelier Ship fournit un outil simple pour effectuer une courbe de zones transversales.

![areas curve tool icon.](/images/FreeCAD-Ship-AreaCurveIco.png)

areas curve tool icon.

 Icône de l'outil de courbe des zones transversales.

Lorsque l'outil est exécuté, un dialogue de tâche s'affiche et un aperçu de la surface libre est créé dans la [Vue 3D](/3D_view/fr "3D view/fr") (l'aperçu de la surface libre sera supprimé lorsque l'outil sera terminé, ne vous inquiétez donc pas pour cela). Dans le dialogue de tâche, les données d'entrée et de sortie sont présentes.

### Données d'entrée

Le tirant d'eau et l'assiette (angle de rotation du *bord y* de la coque, positif si le tirant d'eau arrière peut augmenter) doivent être fournis. Plusieurs courbes de surface peuvent être réalisées, en fonction des situations de chargement du bateau, mais deux courbes types doivent être réalisées :

* Courbe de surface transversale de conception : Sans angle d'assiette et en utilisant le tirant d'eau de conception, 1,0 m dans ce cas.
* Courbe des surfaces transversales du tirant d'eau maximal : Sans angle d'assiette et avec le tirant d'eau maximal autorisé, 2,0 m dans ce cas.

### Données de sortie

Certaines données pertinentes sont affichées en temps réel:

* **L**: Longueur entre les perpendiculaires, valeur définie lors de la création de l'exemple du navire.
* **B**: Largeur sélectionné lors de la création du navire.
* **T**: projection actuelle au centre du navire.
* **Trim**: angle de réglage.
* **TAP**: après dessin perpendiculaire.
* **TFP**: avant dessin perpendiculaire.
* **Displacement**: déplacement de navire (eau salée considérée, diviser par 1,025 afin de connaître le volume déplacé).
* **XCB**: coordonnée du point central de la flottabilité X (par rapport à la section du centre).

Lorsque le bouton Accept est pressé, un tracé est effectué (selon la complexité de la géométrie, cela peut prendre un certain temps, vous pouvez voir la progression sur le terminal, et arrêter le travail en appuyant sur Ctrl+C). Lorsque la tâche est terminée, FreeCAD génère un tracé (voir la documentation de l'[atelier Plot](/Plot_Workbench/fr "Plot Workbench/fr")) et une feuille de calcul (voir la documentation de l'[atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr")).

![Design draft transversal areas curve.](/images/FreeCAD-Ship-s60Areas.png)

Design draft transversal areas curve.

Conception du dessin des zones de courbes transversales. 

Vous pouvez exécuter le dessin maximum des courbes des zones transversales afin de voir les différences (par exemple, vous remarquez que la courbe des zones passe a travers des longueurs perpendiculaires maintenant).

## Hydrostatique

Le calcul hydrostatiques est une étape critique de la conception du navire car il faut connaître les principaux paramètres de stabilité de la coque . Les hydrostatiques de l'universitaire de l'Iowa.sont des données obligatoires afin que les certificats de sociétés de classification soient expédiés et reliés aux données de condition de chargement (poids et position de gravité) qui fournissent des données essentielles sur la stabilité du navire. FreeCAD-Ship fournit un outil pour obtenir les principales courbes hydrostatiques (les courbes GZ sont étudiées dans un autre outil).

![Hydrostatics tool icon.](/images/FreeCAD-Ship-HydrostaticsIco.png)

Hydrostatics tool icon.

 icône de l'outil Hydrostatiques.  

Lorsque l'outil est exécuté, une boîte de dialogue de tâche s'affiche. Habituellement, les courbes hydrostatiques sont présentées pour chaque angle de coupe, dans ce tutoriel, seul l'angle de coupe verticale sera considéré (0º), avec un intervalle autour de chaque dessin de condition de chargement. Étant donné que nous ne savons pas quelles conditions de chargement nous pouvons obtenir, nous considérerons presque le contingent de possibilités (Habituellement, pour obtenir autant de résolution que possible, les architectes navals font correspondre l'intervalle à des projets réalisables).

Nous établissons donc les données suivantes:

* **Trim** = 0 deg
* **Minimum Draft** = 0.1 m
* **Maximum Draft** = 2.0 m
* **Nombre de points** = 39. Beaucoup de points ou des géométries vraiment complexes impliquent de longs temps de calcul, dans ce cas, environ 1 minute sera être utilisée.

Lorsque vous appuyez sur le bouton **Accept**, des tracés sont réalisés (voir la documentation de l'[atelier Plot](/Plot_Workbench/fr "Plot Workbench/fr")) et une feuille de calcul est générée (voir la documentation de l'[atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr")).

![Hydrostatics curves.](/images/FreeCAD-Ship-HydrostaticsCurves.png)

Hydrostatics curves.

Courbes Hydrostatiques. 

## Continuer à apprendre

Le [Tutoriel Construction navale S60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/fr "FreeCAD-Ship s60 tutorial (II)/fr") est le deuxième chapitre de la série 60 du bateau universitaire de l'Iowa.

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD-Ship_s60_tutorial/fr&oldid=1471491>"