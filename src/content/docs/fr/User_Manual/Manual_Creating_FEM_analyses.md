---
title: Création d'analyses FEM
---

[Méthode des éléments finis](https://fr.wikipedia.org/wiki/M%C3%A9thode_des_%C3%A9l%C3%A9ments_finis) (FEM en anglais) est une technique de calcul puissante utilisée pour résoudre des problèmes complexes en ingénierie, en physique et en mathématiques appliquées. Elle consiste à décomposer un objet ou une structure vaste et complexe en parties plus petites et plus simples, appelées éléments finis. Ces éléments sont analysés individuellement et leur comportement est combiné pour prédire comment l'ensemble de la structure réagira aux influences extérieures, telles que les forces, la chaleur ou les vibrations.

FEM est largement utilisée dans des domaines tels que l'ingénierie structurelle, la conception mécanique, l'aérodynamique et l'électromagnétisme pour simuler la façon dont les objets se déforment sous la contrainte, comment la chaleur circule à travers les matériaux et comment les champs électromagnétiques interagissent avec différents objets. En fournissant des informations détaillées sur ces interactions, FEM permet aux ingénieurs et aux concepteurs d'optimiser leurs produits en termes de performance, de sécurité et d'efficacité sans avoir recours à des prototypes physiques.

L'obtention de telles simulations dans FreeCAD se fait à l'aide de l'atelier ![](/images/Workbench_FEM.svg) [FEM](/FEM_Workbench/fr "FEM Workbench/fr"), qui est spécifiquement conçu pour effectuer des analyses par éléments finis (FEA). Il fournit un ensemble complet d'outils pour la préparation du modèle, l'attribution des propriétés des matériaux, le maillage et l'exécution des simulations. L'atelier FEM est polyvalent et prend en charge un large éventail de simulations telles que les analyses structurelles, thermiques et dynamiques, avec des solveurs tels que [CalculiX](https://www.calculix.de/) et d'autres disponibles.

Cet atelier permet l'intégration d'autres ateliers de FreeCAD, ce qui permet une préparation et une analyse transparentes des modèles. Il fournit également de puissants outils de post-traitement pour visualiser et interpréter les résultats de la simulation, tels que les contraintes, les déformations et les distributions thermiques. Le flux de travail suit les étapes suivantes :

- **Préparation de la géométrie** : le modèle doit être simplifié ou optimisé pour l'analyse FEM. Il s'agit souvent de supprimer les détails ou les fonctions inutiles qui ne contribuent pas à la simulation, mais qui pourraient la rendre coûteuse en termes de calcul. Vous pouvez utiliser des outils d'autres ateliers, comme ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") ou ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr"), pour préparer votre géométrie 3D. La page [FEM Préparation de la géométrie et maillage](/FEM_Geometry_Preparation_and_Meshing/fr "FEM Geometry Preparation and Meshing/fr") décrit comment préparer correctement la géométrie pour son utilisation dans l'atelier FEM.

- **Attribution des propriétés aux matériaux** : les définitions des matériaux sont essentielles pour des simulations précises. Des propriétés telles que le module d'Young, le coefficient de Poisson et la densité sont attribuées pour les simulations structurelles, ou la conductivité thermique et la capacité thermique spécifique pour l'analyse thermique. Les matériaux peuvent être sélectionnés dans la bibliothèque de matériaux de FreeCAD ou personnalisés selon les besoins.

- **Maillage** : le maillage divise la géométrie en éléments finis, ce qui permet au solveur d'analyser l'objet. La qualité du maillage est cruciale, car des mailles plus fines permettent d'obtenir des simulations plus précises, mais nécessitent une plus grande puissance de calcul. Des outils sont disponibles pour affiner le maillage localement, en se concentrant sur les zones où les contraintes ou les déformations devraient être plus importantes. Consultez les [bases du maillages](/FEM_Geometry_Preparation_and_Meshing/fr#Les_bases_du_maillage "FEM Geometry Preparation and Meshing/fr") pour plus d'informations.

- **Application de charges et de contraintes** : dans cette étape, des conditions physiques telles que des forces, des pressions, des moments ou des charges thermiques sont appliquées au modèle. Des conditions limites sont également définies, telles que des points de fixation, des contraintes de symétrie ou des restrictions de mouvement, en fonction du scénario simulé.

- **Exécution du solveur** : une fois la configuration terminée, le solveur calcule la réponse du modèle aux conditions appliquées. Les solveurs comme CalculiX calculent les déplacements, les contraintes et d'autres quantités, en fonction du type d'analyse effectué. Le processus peut prendre plus ou moins de temps en fonction de la densité du maillage et de la complexité du modèle.

- **Post-traitement** : après la simulation, les résultats sont visualisés à l'aide d'outils dans l'atelier FEM. Les champs de contrainte, de déformation et de déplacement sont représentés sous forme de cartes de couleur et des tracés de déformation peuvent être générés. Ces visualisations permettent une analyse approfondie des performances du modèle, en mettant en évidence les zones de forte contrainte ou de déformation.

![](/images/FreeCAD_FEMBeam.png)

### Préparation de FreeCAD

Dans cette section, nous démontrerons la procédure générale d'analyse FEM à l'aide d'un exemple simple. Bien que le sujet des éléments finis soit vaste, nous nous concentrerons sur une géométrie simple : une poutre en porte-à-faux. Notre objectif est de déterminer le déplacement vertical maximal de cette poutre sous l'effet d'une charge appliquée, et nous comparerons les résultats numériques à la solution analytique. En mécanique numérique, la vérification des résultats numériques par rapport aux données expérimentales ou aux solutions analytiques est essentielle pour garantir la précision et la fiabilité de la simulation. En outre, nous utiliserons des packages qui sont déjà inclus dans l'installation de FreeCAD, de sorte qu'aucune installation supplémentaire ne sera nécessaire pour cette analyse.

### Préparation de la géométrie

Tout d'abord, nous allons créer notre géométrie simple. Pour cela, nous utiliserons l'atelier ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").

- Créez un nouveau document et accédez à l'atelier ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
- Appuyez sur ![](/images/Sketcher_NewSketch.svg) [Nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") pour créer une nouvelle esquisse sur le plan YZ.
- Créez un ![](/images/Sketcher_CreateRectangle_Center.svg) [rectangle centré](/Sketcher_CreateRectangle_Center/fr "Sketcher CreateRectangle Center/fr") autour du point d'origine.
  - En utilisant la commande ![](/images/Sketcher_Dimension.svg) [Contrainte de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr"), définissez la dimension verticale à **20 mm** et la dimension horizontale à **10 mm**
- Quittez le mode esquisse.
- En ayant sélectionné notre esquisse nouvellement créée appliquez une ![](/images/PartDesign_Pad.svg) [protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") avec une longueur de **1000 mm**.
- Notre géométrie est maintenant prête. Dans cet exemple, nous avons réduit la hauteur (h) et la largeur (b) de la poutre par rapport à sa longueur (L) afin de nous concentrer sur la façon dont elle se plie. Ce faisant, nous pouvons nous assurer que la poutre se comporte comme un objet long et fin typique où la flexion est l'effet principal lorsqu'une force est appliquée. Cette configuration facilite également la comparaison de nos résultats avec des formules simples que nous pouvons calculer à la main.

![](/images/FreeCAD_FEM_BeamGeometry.png)

### Création de l'analyse

- Nous sommes maintenant prêts à commencer une analyse FEM. Passons à l’[atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr").
- Appuyez sur le bouton ![](/images/FEM_Analysis.svg) [Conteneur d'analyse](/FEM_Analysis/fr "FEM Analysis/fr")
- Une nouvelle analyse sera créée et un panneau de configuration sera ouvert. Le bouton **Créer une analyse** met en place le cadre d'exécution d'une analyse par éléments finis. Il crée un conteneur d'analyse qui organise les éléments clés tels que le maillage, les propriétés des matériaux, les contraintes (par exemple, les points fixes), les charges appliquées et le solveur. Ce bouton prépare essentiellement tout ce qui est nécessaire à la simulation, ce qui permet de passer à d'autres étapes comme le maillage et l'exécution du solveur pour analyser le comportement de l'objet dans les conditions définies.

- Nous allons commencer par créer le **maillage**. Pour cela, après avoir sélectionné notre corps, appuyez sur le bouton ![](/images/FEM_MeshNetgenFromShape.svg) [Mailler avec le mailleur Netgen](/FEM_MeshNetgenFromShape/fr "FEM MeshNetgenFromShape/fr") . Cette option utilise le maillage de Netgen, un outil open-source utilisé pour créer des maillages tétraédriques de haute qualité, particulièrement adaptés aux géométries complexes dans l'analyse par éléments finis.
- Dans la fenêtre des paramètres du mailleur, nous allons rester simples et ne modifier que la taille maximale des cellules. L'option **Taille maximum** définit la plus grande taille autorisée pour les éléments de maillage individuels. Elle contrôle la grosseur ou la finesse du maillage. Une taille maximale plus grande entraînera un maillage plus grossier avec moins d'éléments, ce qui peut accélérer les calculs mais peut réduire la précision. Une taille maximale plus petite crée un maillage plus fin avec plus d'éléments, ce qui augmente la précision mais nécessite également plus de ressources de calcul. Réglez cette valeur sur **10** et appuyez sur **appliquer**.

![](/images/FreeCAD_FEM_MesherParameters.png)

- Notre maillage est prêt.

![](/images/FreeCAD_FEM_Mesh.png)

- Nous pouvons maintenant définir le matériau à appliquer à notre maillage en appuyant sur l'option ![](/images/FEM_MaterialSolid.svg) [Nouveau matériau](/FEM_MaterialSolid/fr "FEM MaterialSolid/fr"). Le choix du matériau est crucial dans toute analyse, car différents matériaux aux propriétés variées se comporteront différemment dans les mêmes conditions. Des facteurs tels que la résistance, l'élasticité et la densité jouent un rôle important dans la manière dont un matériau réagit aux forces, aux pressions ou aux températures. La sélection du matériau approprié garantit des résultats de simulation précis, reflétant la manière dont l'objet réagirait dans des scénarios réels.
- Un panneau de tâches s'ouvre pour nous permettre de choisir un matériau. Dans la liste déroulante Matériau, choisissez le matériau **Steel-1C22** et appuyez sur **OK**.

![](/images/FreeCAD_FEM_material.png)

- L'étape finale consiste à appliquer des forces et des contraintes, traduisant les conditions physiques dans l'analyse FEM. Dans ce cas simple, nous avons une poutre qui est fixée d'un côté (représentant la fixation à un mur), tandis que l'autre côté est libre de se déplacer. Une force répartie est appliquée sur toute la longueur de la poutre, simulant la charge qu'elle subit dans des conditions réelles. Commençons par spécifier la face fixée au mur et qui ne peut donc pas bouger. Appuyez sur le bouton ![](/images/FEM_ConstraintFixed.svg) [Condition de limite fixe](/FEM_ConstraintFixed/fr "FEM ConstraintFixed/fr") .
- Appuyez sur le bouton **Ajouter** et sélectionnez la face gauche de notre poutre (celle à l'origine). Cliquez sur **Appliquer**. Cette face est maintenant désignée comme inamovible :

![](/images/FreeCAD_FEM_Beam_FC.png)

- Nous allons maintenant ajouter une charge répartie sur la face supérieure, qui pourrait représenter, par exemple, un poids massif placé sur la poutre. Pour cela, nous utiliserons une pression sur l'option ![](/images/FEM_ConstraintForce.svg) [Charge d'effort](/FEM_ConstraintForce/fr "FEM ConstraintForce/fr").
- Cliquez sur la face supérieure de la poutre, réglez la force sur **1000 N** et cliquez sur l'option **Inverser la direction**. Appuyez ensuite sur le bouton **OK**. Notre force est maintenant appliquée :

![](/images/FreeCAD_FEM_Beam_force.png)

- Nous sommes maintenant prêts à commencer le calcul. Sélectionnez le ![](/images/FEM_SolverCalculixCxxtools.svg) [solveur Calculix](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr").
- Sélectionnez l'analyse **Statique** et cliquez sur **Générer le fichier .inp** pour créer le fichier d'entrée pour CalculiX. Cliquez ensuite sur **Lancer CalculiX**. La simulation va maintenant s'exécuter.

![](/images/FreeCAD_FEM_Calculix.png)

- Nous pouvons maintenant regarder les résultats. Cliquez sur l'option ![](/images/FEM_ResultShow.svg) [Afficher les resultats](/FEM_ResultShow/fr "FEM ResultShow/fr").
- Cochez l'option **Déplacement en Z**, qui est la coordonnée verticale pour notre cas.
- Vous pouvez voir les valeurs minimales et maximales du déplacement vertical. D'après l'analyse, le déplacement vertical maximal est de **-356,30 mm**. Cela correspond bien à notre solution analytique de **-357.14 mm**.
- Vous pouvez déplacer le curseur à côté. Vous pourrez voir la déformation augmenter au fur et à mesure que vous appliquerez une force plus importante :

![](/images/FreeCAD_FEM_Results.png)

Les résultats affichés par l'atelier FEM ne sont évidemment pas suffisantes pour prendre des décisions dans la vie réelle sur le dimensionnement des structures et les matériaux. Ils peuvent par contre donner déjà des informations intéressantes sur la façon dont les forces s'appliquent sur une structure et quelles sont les zones faibles qui seront le plus stressées.

**Lire plus d'informations**

- [L'atelier FEM](/FEM_Workbench/fr "FEM Workbench/fr")
- [Installation des composants requis pour l'atelier FEM](/FEM_Install/fr "FEM Install/fr")
- [CalculiX](http://www.calculix.de)
- [NetGen](https://sourceforge.net/projects/netgen-mesher)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Creating_FEM_analyses/fr&oldid=1541869>"
