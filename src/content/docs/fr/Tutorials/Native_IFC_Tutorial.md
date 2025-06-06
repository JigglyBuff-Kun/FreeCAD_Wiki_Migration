---
title: Tutoriel IFC natifs
---
|  |
| --- |
| Tutoriel |
| Thème |
| Tutoriel IFC natifs |
| Niveau |
| Intermediaire/avancé |
| Temps d'exécution estimé |
| 60 minutes |
| Auteurs |
| yorik |
| Version de FreeCAD |
| 1.0 |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

## Tutoriel FreeCAD et IFC natifs

![](/images/Nativeifc-tutorial-01.jpg)

[FreeCAD](https://freecad.org), une plateforme de modélisation CAO 3D libre et gratuite (FOSS), offre des outils [BIM](https://fr.wikipedia.org/wiki/Building_information_modeling) depuis de nombreuses années avec l'atelier Arch. À partir de la version 1.0, publiée en novembre 2024, les outils Arch ont été étendus et renommés pour devenir l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"), et complétés par un nouveau système IFC natif. Ce tutoriel vous guidera à travers les différents concepts utilisés dans le système IFC natif, et comment les appliquer en travaillant sur un modèle d'exemple.

### Le format IFC

On ne peut commencer à parler de l'IFC native sans parler d'abord du modèle de données [Industry Foundation Classes](https://fr.wikipedia.org/wiki/Industry_Foundation_Classes), mieux connues sous le nom d'IFC. L'IFC est un format de fichier, mais aussi et plus fondamentalement un format de données. C'est une norme (c'est une norme ISO enregistrée) qui spécifie comment les différents composants d'un bâtiment doivent être représentés numériquement, quelles propriétés chacun d'entre eux doit avoir, quelles relations ils peuvent ou doivent avoir avec d'autres éléments, etc. En bref, il s'agit d'une recette pour décrire un bâtiment numériquement.

Le format IFC présente de nombreuses caractéristiques intéressantes. Tout d'abord, il est ouvert et public (il est maintenu par un consortium, comme le format HTML). Il dérive du format STEP, un format de géométrie 3D bien connu et solide comme le roc, largement utilisé dans l'industrie mécanique. Il est lisible par l'homme (vous pouvez l'ouvrir avec un éditeur de texte), et les données peuvent être écrites non seulement dans un, mais dans plusieurs formats de fichiers, et même être utilisées comme base de données.

Ces caractéristiques font de ce format un format géométriquement fiable, grâce à son (grand-)père STEP, mais aussi un choix très judicieux pour confier vos données, car dans 50 ans, vous pourrez toujours ouvrir les fichiers IFC et récupérer les données, même si votre application BIM a disparu. Les fichiers IFC deviennent également de plus en plus le format de fichier préféré demandé par les autorités lors de la délivrance des permis de construire.

Jusqu'à présent, cependant, le format IFC a surtout été utilisé comme format « d'exportation ». Les concepteurs continuaient à enregistrer leurs projets en utilisant le format de fichier natif de leur application BIM et exportaient des fichiers IFC lorsque cela était nécessaire. C'est assez bien pour montrer votre travail, mais c'est assez mauvais si d'autres personnes ont besoin de travailler avec ce modèle, car il y a beaucoup de pertes de données et les données sont entièrement réécrites à chaque exportation, de sorte que l'utilisation d'une nouvelle version du modèle est souvent un casse-tête pour d'autres personnes.

Avec l'IFC native, nous voulons changer cela.

### Le concept d'IFC natif

L'idée vient d'un [papier de Bruno Postle](https://github.com/brunopostle/ifcmerge/blob/main/docs/whitepaper.rst) qui décrit comment le format IFC pourrait être utilisé non seulement comme format d'exportation, mais aussi comme fichier principal du projet, au lieu des formats (généralement propriétaires) utilisés par les applications BIM. Pour y parvenir, il est essentiel que les applications BIM traitent le format IFC de manière native, c'est-à-dire qu'au lieu de convertir à chaque fois leur propre contenu de leur format interne en IFC, elles devraient manipuler directement les données IFC.

![](/images/Nativeifc-tutorial-02.jpg)

image de l'article de Bruno Postle

Concrètement, dans FreeCAD, vous pouvez ouvrir ou créer des modèles IFC, les explorer, modifier leur contenu, et chaque changement sera clairement enregistré, localisable, identifiable, annulable. Les modifications effectuées par d'autres personnes pendant que vous travailliez peuvent être fusionnées, même si elles travaillent avec d'autres applications (natives IFC).

![](/images/Nativeifc-tutorial-03.jpg)

L'image ci-dessus montre une modification compacte et limitée d'un dossier lors de l'ajout d'un nouveau mur

Le travail sur l'IFC natif dans FreeCAD n'est pas terminé, mais il est déjà totalement utilisable « pour une tâche réelle ». Si vous connaissez déjà les outils BIM de FreeCAD, il y a très peu à apprendre, car la plupart du flux de travail utilise les mêmes outils.

### Est-ce que j'ai besoin de l'IFC ?

La décision vous appartient. L'IFC est un format strict, où chaque élément (un mur, un étage, une fenêtre) a des attributs et des caractéristiques très stricts, qui ne peuvent pas être modifiés. Cette normalisation garantit sa compatibilité et sa fiabilité. Cela signifie également que l'on ne peut pas faire ce que l'on veut avec l'IFC. Vous devez respecter ce que le format définit. Ce respect est bienvenu et excellent lorsque vous travaillez avec d'autres, car c'est exactement ce que nous demandons à un « standard ». Il y a des garanties sur ce que vous trouverez en ouvrant un fichier IFC, mais cela peut aussi évidemment limiter la créativité.

L'un des axiomes de l'atelier BIM de FreeCAD est de ne pas limiter la créativité. Tout est possible, toute forme géométrique est possible, toute relation paramétrique est possible. Lorsque vous travaillez avec l'atelier BIM sans IFC natif, cette liberté est au bout de vos doigts. En activant l'IFC natif, cette liberté est restreinte. Est-ce une bonne ou une mauvaise chose pour votre projet ? Cela dépend.

Personnellement, je recommanderais de travailler sans IFC lorsque vous travaillez seul et que vous développez encore des concepts, afin de bénéficier d'une liberté maximale. Lorsque votre projet s'est stabilisé et que d'autres personnes sont impliquées, c'est peut-être le moment de passer au format IFC natif, afin de bénéficier de la standardisation. N'oubliez pas que vous pouvez passer à l'IFC natif à tout moment, ou même exporter votre projet IFC non natif vers l'IFC à tout moment. Il est rarement nécessaire de passer immédiatement au format IFC natif.

## Ouvrir et créer des modèles IFC

### Trouver et visualiser les modèles IFC

Si vous n'avez jamais travaillé avec le format IFC, vous pouvez commencer par jeter un coup d'œil à quelques modèles. Comme il s'agit d'un format ouvert, il est heureusement très facile de trouver des exemples sur l'internet. Une simple recherche de « modèles IFC d'exemple » vous mènera loin. Je suggérerais par exemple cet [exemple canonique de maison](https://github.com/buildingSMART/Sample-Test-Files/tree/main/PCERT-Sample-Scene/IFC%204.0.2.1%20(IFC%204)) conservé par le consortium IFC, mais plusieurs sites web ont rassemblé des collections de fichiers d'exemple, comme [celui-ci sur BIMPlot](https://bimplot.com/free-ifc-project-samples-for-architects-and-bim-enthusists/).

![](/images/Nativeifc-tutorial-04.jpg)

Il existe de nombreuses applications pour visualiser les fichiers IFC. Certaines sont gratuites, d'autres sont même libres et gratuites (FOSS). Parmi les visionneurs IFC propriétaires mais gratuits, on peut citer [BIMVision](https://bimvision.eu/) ou [ODA IFC viewer](https://openifcviewer.com/) (qui fonctionne sur Windows/Mac/Linux). Parmi les visionneurs FOSS, j'utilise beaucoup le simple visionneur [IFC++](http://www.ifcquery.com/), inclus dans les dépôts Debian/Ubuntu. [FreeCAD](https://freecad.org) et [Bonsai](https://bonsaibim.org) sont également de bons visionneurs rapides d'IFC.

La possibilité d'ouvrir et de visualiser vos fichiers IFC dans une autre application est fondamentale lorsque vous travaillez avec des fichiers IFC, car elle vous permet de vérifier que ce que vous envoyez à vos collègues ou à vos clients contient tout ce qu'il faut.

### Qu'est-ce qui fait un bon modèle IFC

Le format IFC est complexe et les applications BIM, même les plus coûteuses, sont notoirement mauvaises, voire très mauvaises, pour traiter les fichiers IFC. Les fichiers IFC que vous rencontrez peuvent donc être de très mauvaise qualité et remplis de déchets, parfois au point d'être à peine utilisables. Les défenseurs des applications BIM propriétaires ont souvent utilisé ce fait pour discréditer le format IFC et tenter de démontrer son inefficacité.

Il n'est pourtant pas difficile de créer des modèles IFC de qualité. Mais il faut une application qui traite le format avec sérieux et qui laisse à l'utilisateur le contrôle de ce qui est exporté et de la manière dont il l'est.

Les choses à savoir sont peu nombreuses :

* Comme le format STEP, un fichier IFC est **un fichier texte**, où chaque ligne représente un élément, et commence par un numéro d'identification. Par exemple :

  ```
  #66=IFCWALL('3JmWkr',$,'MyWall',$,$,(#71),$,$,$,.SOLIDWALL.);
  ```

  La ligne ci-dessus définit un élément de la classe **IfcWall**, avec l'ID 66. Les éléments entre parenthèses sont ses attributs. Nous reviendrons plus loin sur les attributs.

  L'élément important est la **classe** (comme dans 'Industry Foundation Classes'). Chaque élément a une classe, qui définit le type d'élément : un mur, une fenêtre, mais aussi un sol, un espace, ou même une ligne, un cercle, un point dans l'espace 3D ou même des concepts tels qu'un moment dans le temps ou une tâche à accomplir. La plupart des classes IFC utiles pour les éléments de construction sont dérivées de la classe [IfcBuildingElement](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifcproductextension/lexical/ifcbuildingelement.htm).
* Les modèles IFC suivent généralement une *structure stricte* : dans chaque fichier, il doit y avoir un et un seul *IfcProject*. L'[IfcProject](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/IfcProject.htm) est la racine de tous les objets d'un modèle IFC. Sous le projet IfcProject, il y a généralement au moins un **IfcSite**, qui peut contenir un ou plusieurs **IfcBuildings**, qui sont à leur tour divisés en **IfcBuildingStoreys**. Ces derniers peuvent être divisés en **IfcZones** et **IfcSpaces**.
* Les éléments de construction, tels que les **IfcWalls** ou les **IfcWindows**, sont alors **liés** à l'une des structures ci-dessus, généralement un IfcBuildingStorey, mais ils peuvent également être liés à un autre élément de construction, de sorte qu'un élément peut être composé de plusieurs autres. Ces relations sont toujours explicitement mentionnées dans les fichiers IFC, elles ne sont jamais automatiques ou implicites.
* Les éléments IFC, qu'il s'agisse d'éléments de construction tels que les murs ou les fenêtres, ou d'éléments de structure tels que les sites et les étages, ou de l'une des nombreuses autres [classes d'éléments](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/annex-b1.html) proposées par le format IFC, disposent tous d'un ensemble prédéfini d'« attributs ». Les attributs sont des éléments tels que le nom, la position dans l'espace ou le numéro d'identification unique, qui sont définis dans le format. Toutes les entités de la même classe doivent avoir les mêmes attributs. Les éléments peuvent également avoir des **propriétés**. Contrairement aux attributs, les propriétés ne sont pas définies par le format IFC et peuvent être définies librement par l'utilisateur (ou l'application BIM). Il s'agit en quelque sorte d'attributs personnalisés. Le format IFC propose également des ensembles de propriétés par défaut pour de nombreuses classes d'éléments. Par exemple, pour les poutres, il existe un ensemble appelé [BimCommon](https://ifc43-docs.standards.buildingsmart.org/IFC/RELEASE/IFC4x3/HTML/lexical/Pset_BeamCommon.htm) qui contient une série de propriétés typiques pour les poutres.
* La **géométrie** des éléments IFC est définie dans des éléments séparés, qui sont attachés à chaque mur, fenêtre, porte, etc. Elle peut également être partagée par plusieurs éléments. Il existe de très nombreuses façons de définir la géométrie, et c'est là que les problèmes commencent. Les éléments de construction peuvent avoir une géométrie 3D et une géométrie 2D (par exemple une vue en plan ou une empreinte), ainsi qu'une géométrie linéaire (utile pour les études de stabilité). Une bonne géométrie est généralement bien définie et construite de manière judicieuse. Par exemple, la géométrie d'un mur simple est définie par un rectangle au sol, avec une largeur et une longueur, qui est ensuite extrudé verticalement d'une hauteur donnée pour produire la forme du mur. Cela représente trois lignes dans le fichier IFC : le rectangle, l'extrusion et la position de l'objet final. Il est reconnaissable par d'autres applications BIM et les paramètres peuvent être modifiés, par exemple la largeur du rectangle de base.
* Dans certains fichiers IFC que vous pouvez recevoir, cette information logique peut être complètement perdue, et la géométrie du mur définie comme un ensemble de facettes triangulaires. C'est souvent le cas des fichiers qui ont été convertis en IFC à partir d'un autre format. Il peut y avoir d'autres problèmes tels que des relations incomplètes, etc. Il suffit de dire que le format IFC permet de définir la géométrie de multiples façons, des plus « stupides » (facettes triangulaires) aux plus « intelligentes » (objets basés sur NURBS), en mettant l'accent sur les solides bien définis (tels que notre rectangle extrudé). Heureusement pour nous, c'est la spécialité de FreeCAD.

### Ouvrir, créer et convertir des modèles IFC

Dans FreeCAD, l'ouverture d'un fichier IFC se fait comme n'importe quel autre fichier, via le menu **Fichier → Ouvrir**. Par défaut, les fichiers IFC se chargent avec un seul élément apparaissant dans l'arborescence. C'est la façon la plus rapide d'importer, et vous pouvez généralement importer un modèle de 100 Mo en quelques secondes.

![](/images/Nativeifc-tutorial-05.jpg)

Vous pouvez modifier les préférences d'importation IFC natif sous **Edition → Préférences → BIM → IFC natifs**. Vous pouvez par exemple faire en sorte que toute la structure du bâtiment soit révélée lors de l'importation, ou qu'elle soit demandée à chaque fois.

La création d'un nouveau modèle IFC commence simplement par la création d'un nouveau projet IFC dans le menu **3D/BIM**.

La conversion d'un modèle FreeCAD non IFC en IFC natif peut se faire simplement en l'exportant en IFC, en utilisant le menu **Fichier → Exporter** ou en utilisant le bouton de verrouillage (plus d'informations à ce sujet ci-dessous).

## Explorer le modèle

### Développer le contenu du modèle

Par défaut, l'ouverture des fichiers IFC n'affiche que le premier élément extérieur du fichier. Il s'agit généralement de l'IfcSite. Pour voir le contenu de cet élément, et des suivants, vous devez le **développer**. Le développement se fait en **double-cliquant sur l'élément dans l'arborescence** ou bien via l'option de menu **Utilitaires → Développer l'IFC**. Cette commande peut être [personnalisée](/Interface_Customization/fr "Interface Customization/fr") et se voir attribuer un raccourci clavier, de sorte qu'il est possible de naviguer dans l'arborescence à l'aide des touches fléchées et de développer votre modèle là où c'est nécessaire, entièrement à l'aide du clavier.

![](/images/Nativeifc-tutorial-06.jpg)

Un double-clic sur un élément de l'arborescence permet, la première fois, de faire apparaître ses enfants et, la seconde fois, ou s'il n'y a plus d'enfants à faire apparaître, de **charger toutes ses propriétés, son matériau et sa forme**.

Cela permet de charger un modèle aussi rapidement que possible et de développer/définir les éléments en fonction des besoins. Vous pouvez modifier ce comportement sous **Édition → Préférences → BIM → IFC natifs**.

### Verrouiller et déverrouiller

Lorsqu'un modèle IFC est chargé dans FreeCAD, il peut être verrouillé ou déverrouillé. Par défaut, l'ouverture des fichiers IFC les verrouille, tandis que leur insertion (en utilisant **Fichier → Importer**) les laisse déverrouillés.

Le verrouillage ou le déverrouillage s'effectue simplement à l'aide du bouton de verrouillage dans la barre d'état de FreeCAD :

![](/images/Nativeifc-tutorial-07.jpg)

* Le **mode verrouillé** signifie que le document FreeCAD EST le fichier IFC. Vous ne voyez pas l'IfcProject (c'est le document FreeCAD lui-même dans l'arborescence), et tout ce que vous faites dans ce document est automatiquement, de manière transparente et immédiate, fait dans les données IFC elles-mêmes. L'ajout d'un mur modifiera le fichier IFC, de même que l'ajout d'une ligne ou d'une dimension, tout est fait dans l'IFC. Il ne peut y avoir aucun élément FreeCAD dans le document qui ne fasse pas partie du fichier IFC. Vous pouvez convertir n'importe quel modèle FreeCAD (BIM ou non) en IFC en cliquant sur le bouton de verrouillage.
* Le **mode déverrouillé**, également appelé mode hybride, signifie que le projet IFC réside à l'intérieur d'un objet *projet*. Vous pouvez toujours avoir des objets FreeCAD normaux, non IFC, en plus des éléments IFC. Pour ajouter un élément au projet IFC, vous devez l'ajouter vous-même en le faisant glisser sur le projet ou sur l'un des sous-éléments du projet. Vous pouvez créer un nouveau projet IFC vierge en utilisant le menu **3D/BIM → Projet**.
* **Travailler sans projet IFC** : rappelez-vous qu'il n'est pas nécessaire de créer un projet IFC pour démarrer un projet BIM (vous pouvez le faire plus tard si nécessaire). Vous pouvez simplement commencer à construire des murs, à ajouter des sols et des toits, sans définir de structure IFC ni même vous préoccuper de l'IFC.

Le mode verrouillé est un mode prudent : lorsque vous ouvrez un fichier créé par quelqu'un d'autre, vous ne voulez rien casser, vous voulez explorer le fichier, et peut-être corriger quelque chose ou faire quelques changements localisés. Vous voulez vous assurer que les modifications que vous avez apportées sont strictement localisées et traçables.

Dans tous les autres cas, il n'est pas vraiment nécessaire ou avantageux de verrouiller votre modèle. En fait, vous pouvez modifier le comportement par défaut pour ouvrir les modèles IFC en tant que modèles non verrouillés si vous le souhaitez, sous **Édition → Préférences → BIM → IFC natifs**.

Lorsque vous passez à un modèle IFC, vous souhaitez souvent vérifier **ce que vous avez changé dans les données IFC** depuis la dernière sauvegarde. Cela se fait en utilisant **Utilitaires → Comparer deux documents IFC**. Les modifications sont présentées dans le format [format diff](https://fr.wikipedia.org/wiki/Diff), avec les sections surlignées en rouge et en vert. Ce format est également compréhensible par des systèmes informatiques tels que Git, qui sont capables de suivre de grands ensembles de modifications, et font donc de vos fichiers IFC reconnaissables dans ces systèmes.

![](/images/Nativeifc-tutorial-08.jpg)

### Structure du modèle

Comme nous l'avons vu plus haut, la plupart des fichiers IFC utilisent une structure standard **Site → Bâtiment → Étage**. Cette structure est si courante qu'elle est souvent considérée comme obligatoire, bien qu'elle ne soit pas expressément mentionnée dans la norme IFC. Vous pourriez très bien avoir tous vos éléments directement liés au IfcProject. Cependant, comme la standardisation fonctionne lorsque tout le monde décide d'utiliser le même système, il est conseillé d'avoir au moins un site, un bâtiment et un étage (appelé *Niveau* dans FreeCAD) dans votre modèle.

![](/images/Nativeifc-tutorial-09.jpg)

Dans FreeCAD, il est possible d'utiliser des **groupes** pour organiser vos objets sous un étage. Par exemple, à l'intérieur de votre premier niveau, vous pouvez créer un groupe « Murs » pour ajouter tous vos murs, un groupe « Charpente » pour ajouter vos poutres en bois, etc. Les groupes sont pris en charge par l'IFC, mais il n'est pas standard de placer des groupes à l'intérieur d'un élément de structure de bâtiment tel qu'un étage. Pour cette raison, les groupes sont écrits par défaut comme **IfcBuildingElementAssemblies** au lieu de IfcGroups. Chez FreeCAD, nous pensons qu'un tel comportement est utile et devrait être autorisé. Il existe donc une option de préférence pour l'autoriser. La plupart des applications BIM ouvriront volontiers des fichiers avec des groupes à l'intérieur d'autres éléments. Cette option de préférence est là pour aider à diffuser notre vision et éventuellement convaincre les gens.

Commençons à casser notre modèle...

## Ajouter et modifier des éléments

### Modifier des attributs et des propriétés

Une fois que nous avons ouvert un modèle, nous pouvons commencer à modifier son contenu. Attention, à l'heure où j'écris ce tutoriel, il n'y a pas **d'éditeur graphique de géométrie** pour les éléments IFC (c'est sur la feuille de route et cela devrait arriver bientôt). La façon de modifier la géométrie des éléments est de modifier leurs **propriétés géométriques**.

Lorsque les éléments IFC sont chargés à partir du fichier, leurs attributs apparaissent dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") sous le groupe **IFC**. Vous pouvez y modifier des éléments tels que le nom, la description ou même la classe des éléments.

Lorsque vous double-cliquez sur un élément dans l'arborescence, vous faites apparaître d'abord les éléments enfants de cet élément. En double-cliquant une deuxième fois, vous chargez des données supplémentaires telles que des **jeux de propriétés**, des **propriétés personnalisées**, des **matériaux** et des **données de forme**. Il créera en outre un jeu de **propriétés géométriques** qui vous permettra de modifier la géométrie de cet élément. Ces propriétés géométriques constituent également les fondements du futur éditeur graphique.

![](/images/Nativeifc-tutorial-10.jpg)

Toutes ces propriétés supplémentaires peuvent être modifiées directement et de nouvelles propriétés personnalisables peuvent être ajoutées à l'aide des deux boutons situés sous l'éditeur de propriétés.

### Modifier une géométrie

Vous pouvez modifier la position de n'importe quel élément en changeant sa propriété **Placement** (ou en utilisant les outils [Déplacer](/Draft_Move/fr "Draft Move/fr") ou [Pivoter](/Draft_Rotate/fr "Draft Rotate/fr")).

Pour modifier la géométrie, par exemple la largeur d'un mur, vous devez d'abord double-cliquer deux fois pour faire apparaître ses **propriétés géométriques**. Si ce mur a été construit de manière standard, sous la forme d'un rectangle extrudé, vous verrez la largeur et la longueur du rectangle, ainsi que la hauteur d'extrusion, parmi ces propriétés.

Bien entendu, tout dépend de la manière dont le mur a été défini dans le fichier IFC. Il se peut qu'il ne s'agisse pas d'un rectangle extrudé. Dans ce cas, moins de propriétés géométriques ou d'autres propriétés géométriques peuvent être disponibles.

### Ajouter de nouveaux objets BIM

La façon dont vous ajoutez de nouveaux objets dépend du mode en cours : verrouillé ou déverrouillé. En mode verrouillé, tout ce que vous dessinez, comme un mur ou une colonne, est automatiquement créé dans le fichier IFC lui-même. Il se peut que vous deviez le placer sous le bon niveau ou le bon bâtiment après sa création, ce qui se fait simplement en faisant glisser le nouveau mur sous le bon niveau dans l'arborescence.

En mode déverrouillé, votre nouveau mur ne sera pas encore un élément IFC. Vous devez toujours faire glisser le mur vous-même au bon endroit après sa création.

### Types

En IFC, tout élément peut être défini par un [type](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifctypeproduct.htm). Un type (ex. IfcWallType, IfcWindowType) est un élément IFC qui peut contenir des caractéristiques, des propriétés ou même une géométrie communes, qui seront automatiquement utilisées par tous les objets de ce type. Dans certaines applications BIM, on parle parfois de familles.

Dans FreeCAD, dans les projets BIM non IFC, nous avions l'habitude de le faire en utilisant le clonage. En IFC natif, les types sont entièrement pris en charge. Pour définir un type, le plus simple est de construire un objet de la classe souhaitée, par exemple un mur, puis de faire un clic droit dans l'arborescence et de choisir **IFC → convertir en type**.

Lorsqu'un objet est converti en type, il est déplacé dans un groupe spécial *Types* sous le projet. Il peut alors être référencé par n'importe quel autre mur du projet.

![](/images/Nativeifc-tutorial-11.jpg)

L'image ci-dessus montre notre mur qui utilise maintenant le « Mon type de mur » comme type

.

### Ajouter des contenus téléchargeables

Dans un projet BIM, il est souvent nécessaire d'ajouter des contenus téléchargeables, tels que des meubles, des appareils ou des éléments tels que des cadres de fenêtres préfabriqués. Ces éléments sont généralement téléchargés à partir des sites web des fabricants ou des bibliothèques BIM.

Dans tous ces cas, la qualité et le format des éléments que vous téléchargez sont importants. Vous devez veiller (dans l'ordre) à utiliser un format de fichier bien supporté par FreeCAD, à obtenir des modèles de bonne qualité géométrique, et suffisamment de métadonnées (couleur, matériaux, informations sur le fabricant, etc...). Voici quelques bonnes idées :

* Fichiers STEP de [GrabCAD](https://grabcad.com/library?page=1&time=this_month&sort=popular&softwares=step-slash-iges) : les fichiers STEP sont très bien pris en charge par FreeCAD et contiennent généralement toujours une géométrie de haute qualité, car il s'agit d'un format d'ingénierie favori. Ils se convertissent généralement très bien en IFC.
* Fichiers IFC provenant de bibliothèques de modèles comme [BIMObject](https://bimobject.com) : bien que l'utilisation du format IFC puisse sembler intéressante, les fichiers IFC mis à disposition par ces sites web sont souvent convertis automatiquement à partir d'autres formats (propriétaires), et la qualité peut être très faible.
* Exporter des modèles à partir d'applications BIM propriétaires telles que Revit ou ArchiCAD au format SAT, et les ouvrir dans FreeCAD à l'aide de l'extension [Inventor Loader](https://github.com/jmplonka/InventorLoader) (installable à partir du [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr")). Bien que ces applications permettent d'exporter des pièces et des éléments en IFC, elles dégradent souvent la géométrie. L'exportation de types et de familles vers le format SAT donne souvent une qualité similaire à celle des fichiers STEP. Le chargeur Inventor, cependant, est un travail en cours et peut ne pas fonctionner avec tous les fichiers.

### Enregistrer et manipuler des fichiers

Un fichier FreeCAD contenant un projet IFC natif, qu'il soit verrouillé ou déverrouillé, aura toujours un fichier IFC attaché, où les données IFC sont stockées. Lorsque vous créez un nouveau projet et que vous n'avez pas encore enregistré le fichier, le contenu IFC reste en mémoire. Dès que vous enregistrez le fichier, un fichier IFC compagnon est créé et désormais attaché au fichier FreeCAD.

En **mode verrouillé**, le document FreeCAD contient dans sa propriété *IFC File Path* le chemin d'accès vers le fichier IFC compagnon. Puisque tout ce qui se passe dans FreeCAD se passe directement dans le fichier IFC, il n'y a plus besoin du fichier FreeCAD. Les entrées « Enregistrer » et « Enregistrer sous » du menu du fichier FreeCAD sont remplacées par « Enregistrer le fichier IFC » et « Enregistrer le fichier IFC sous... ». Lorsque vous enregistrez le fichier, vous enregistrez le fichier IFC et aucun fichier FreeCAD n'est écrit. Littéralement, vous ne travaillez qu'avec le fichier IFC.

En **mode déverrouillé**, un objet *projet* existe dans le document FreeCAD, qui a également une propriété *IFC file Path* qui pointe vers son fichier IFC compagnon. Si vous distribuez votre fichier à quelqu'un d'autre, vous devrez également lui donner le fichier IFC. Si vous déplacez le fichier IFC, vous devrez corriger la propriété *IFC File Path* de l'objet du projet.

Il est cependant possible de distribuer le fichier FreeCAD sans le fichier IFC : réglez la propriété *Shape Mode* de tous les objets sur *Shape*. Le fichier FreeCAD conservera ainsi la forme de tous les objets et s'ouvrira correctement même si le fichier IFC n'est pas présent. Toutefois, les objets ne seront pas modifiables dans ce cas.

## Créer des résultats

### Créer des vues et du contenu 2D

Les vues 2D, à placer sur des [pages TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") peuvent toujours être créées de la [même manière qu'auparavant](/BIM_Workbench/fr "BIM Workbench/fr") : ajouter des [plans de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr"), créer des [vues 2D](/BIM_Shape2DView/fr "BIM Shape2DView/fr"), remplir avec des annotations, puis les [placer](/BIM_TDView/fr "BIM TDView/fr") sur des [pages TechDraw](/BIM_TDPage/fr "BIM TDPage/fr"). Le processus est exactement le même pour les modèles BIM non IFC que pour les modèles IFC natifs.

Par défaut, les objets IFC natifs sont chargés sans leur forme (leur propriété *Shape Mode* est définie sur *Coin*). Cela permet de gagner beaucoup de temps lors du chargement. Mais les algorithmes de découpe utilisés pour générer des vues 2D ont besoin de la forme complète, donc lors de l'inclusion d'objets IFC natifs dans un plan de coupe, leur mode de forme sera automatiquement défini sur « Shape ».

Alors que la feuille finale elle-même ne peut pas être enregistrée dans le fichier IFC, les vues 2D, les plans de coupe et leurs annotations peuvent l'être. Lors de l'ajout (par glisser-déposer en mode déverrouillé, ou automatiquement en mode verrouillé) d'un plan de coupe à un projet, un groupe sera automatiquement créé sous le projet. Ce groupe représente une vue 2D (sa propriété *Object Type* est définie sur *DRAWING*), et tout ce que vous ajoutez à ce groupe fera partie de cette vue 2D.

![Capture d'écran d'une vue 2D créée à partir d'un projet IFC](/images/Nativeifc-tutorial-12.jpg)

### Créer des feuilles

Actuellement, les feuilles ne sont pas sauvegardées dans le fichier IFC. Ainsi, en cas de fichiers verrouillés, les feuilles devront être recréées.

### Créer des nomenclatures

Les nomenclatures et toutes sortes de requêtes peuvent être créées de la même manière pour les projets IFC natifs que pour les projets non-IFC, en utilisant l'[outil nomenclature](/Arch_Schedule/fr "Arch Schedule/fr"). Les nomenclatures peuvent également être ajoutés à un projet IFC natif. Dans ce cas, la feuille de calcul qui les accompagne n'est pas enregistrée dans le fichier IFC et doit être recréée à l'ouverture du fichier.

## Script Python

### IfcOpenShell

[IfcOpenShell](https://ifcopenshell.org/) est le composant logiciel utilisé dans toutes les opérations liées à l'IFC dans FreeCAD. L'atelier BIM peut fonctionner sans lui, mais dans ce cas, toutes les opérations IFC sont désactivées. IfcOpenShell est responsable de la création et de la modification des fichiers IFC et des objets IFC, ainsi que de la production de la géométrie BREP pour les objets FreeCAD qui représentent les éléments IFC. FreeCAD utilise actuellement IfcOpenShell uniquement via son interface Python.

IfcOpenShell propose une [large documentation](https://docs.ifcopenshell.org/) qui explique en détail comment l'utiliser.

Vous pouvez également utiliser IfcOpenShell et ifc\_tools pour manipuler directement les données IFC. Vous trouverez ci-dessous un court exemple d'utilisation d'IfcOpenShell pour ouvrir un fichier IFC et analyser son contenu :

```
import ifcopenshell
my_ifc_file = ifcopenshell.open("/path/to/some/file.ifc")
walls = my_ifc_file.by_type("IfcWall") # get a list of all IfcWalls
some_specific_object = my_ifc_file[66] # get an object by its ID
some_specific_object = my_ifc_file.by_id(66) # alternative way
print(some_specific_object.Name) # you can access attributes that way

```

IfcOpenShell lui-même n'a pas (encore) de fonctionnalité FreeCAD spécifique, vous l'utiliserez donc essentiellement pour effectuer des opérations non-FreeCAD sur des objets, par exemple récupérer ou modifier des objets et des attributs, modifier des attributs, ou même ajouter directement des objets. N'hésitez pas à consulter la [IfcOpenShell documentation en Python](https://docs.ifcopenshell.org/ifcopenshell-python.html) pour en savoir plus.

Dans FreeCAD, lorsque vous chargez un fichier IFC, un objet fichier IfcOpenShell est créé et attaché au projet (l'objet projet pour les fichiers non verrouillés ou le document FreeCAD lui-même pour les projets verrouillés). Tout ce que vous faites dans FreeCAD manipule cet objet. Vous pouvez facilement accéder à l'objet fichier IfcOpenShell d'un projet IFC natif FreeCAD et le manipuler. Par exemple, en mode verrouillé, vous faites :

```
import FreeCAD
my_doc = FreeCAD.loadFile("/path/to/some/file.ifc")
my_ifc_file = my_doc.Proxy.ifcfile

```

En mode déverrouillé, chaque objet de projet possède également un membre `Proxy.ifcfile`.

### Le module ifc\_tools

Le module [ifc\_tools](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/nativeifc/ifc_tools.py) est l'outil principal pour utiliser IfcOpenShell dans l'atelier BIM de FreeCAD. Il contient de nombreux outils et fonctions pour faire tout ce que FreeCAD doit faire avec les fichiers et objets IFC, tels que la création de nouveaux fichiers, l'ouverture de fichiers, la création d'éléments, la modification d'attributs, etc.

Lorsque vous travaillez avec des objets FreeCAD, l'utilisation d'ifc\_tools est beaucoup plus pratique car il gère pour vous toutes les relations entre l'objet FreeCAD et l'objet IFC qu'il représente. Par exemple, l'utilisation d'ifc\_tools est plus pratique :

```
from nativeifc import ifc_tools
selection = FreeCADGui.Selection.getSelection()
my_obj = selection[0] # just get the first selected object
project = ifc_tools.get_project(my_obj)
ifcfile = ifc_tools.get_ifcfile(project)
ifc_elem = ifc_tools.get_ifc_element(my_obj)
my_obj.LongName = "Changed long name" # this updates the IFC data too
print(ifc_elem.LongName)

```

Il y a beaucoup plus dans ifc\_tools, comme des utilitaires pour créer et modifier des objets FreeCAD (et leurs éléments IFC sous-jacents). Vous trouverez ci-dessous quelques exemples simples pour vous aider à démarrer :

#### Charger la forme des objets sélectionnés

Par défaut, l'ouverture d'un fichier IFC ne charge qu'une représentation 3D légère de chaque élément. Pour travailler plus sérieusement avec eux, nous pourrions avoir besoin de charger leur forme complète :

```
for obj in FreeCADGui.Selection.getSelection():
    obj.ShapeMode = "Shape"
FreeCAD.ActiveDocument.recompute()

```

#### Charger les jeux de propriétés des objets sélectionnés

Les jeux de propriétés et leurs propriétés incluses sont restitués comme des propriétés d'objets dans FreeCAD. Une fois qu'ils sont chargés, vous pouvez simplement manipuler les valeurs via l'éditeur de propriétés dans FreeCAD (ou via Python) :

```
from nativeifc import ifc_psets
for obj in FreeCADGui.Selection.getSelection():
    ifc_psets.show_psets(obj)
my_object.FireResistanceClass = "1B" # manipulate properties once loaded

```

#### Enregistrer un fichier IFC

```
ifc_tools.save(project)

```

#### Ajouter un nouveau document IFC

Utilisez l'outil **Projet** de l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr") pour produire un objet de projet IFC natif. Il n'est pas obligatoire d'enregistrer immédiatement votre nouveau projet IFC, mais c'est une bonne pratique. Si vous oubliez de le faire, vous en serez averti et pourrez le faire lors de l'enregistrement du document FreeCAD.

```
doc = FreeCAD.ActiveDocument
new_project = ifc_tools.create_document(doc)
ifc_tools.save(new_project, "/path/for/our/new/file.ifc")

```

#### Modifier la classe IFC d'un objet

Changer de classe est très facile, il suffit d'en sélectionner une autre dans la propriété **class** de l'objet. Attention, cela peut également modifier les attributs prédéfinis de l'objet, et certains attributs peuvent donc disparaître.

```
my_object.Class = "IfcWall"

```

#### Agréger (et convertir) n'importe quel objet FreeCAD en un projet IFC

Supposons que nous ayons construit un nouveau mur et que nous devions l'ajouter à un projet IFC. Nous pouvons le faire graphiquement en le faisant glisser et en le déposant sur le projet dans l'arborescence, mais c'est tout aussi facile en Python :

```
import Arch
my_new_wall = Arch.makeWall(None, 200, 20, 300)
ifc_tools.aggregate(my_new_wall, project)

```

#### Ajouter un nouveau modèle de structure

Lors de la création d'un nouveau projet, vous pouvez également faire en sorte qu'une structure de base soit automatiquement créée pour vous en répondant « oui » à la fenêtre de dialogue qui s'affiche. Mais vous pouvez aussi facilement le faire en Python :

```
import Arch
doc = FreeCAD.ActiveDocument
project = ifc_tools.create_document(doc)
site = Arch.makeSite()
site = ifc_tools.aggregate(site, project)
building = Arch.makeBuilding()
building = ifc_tools.aggregate(building, site)
level = Arch.makeFloor()
level = ifc_tools.aggregate(floor, building)

```

#### Modifier le schéma d'un document IFC

Il suffit de modifier la propriété « Schema » du projet. Attention, cette opération peut avoir des conséquences importantes (certains types d'objets peuvent avoir été modifiés dans la nouvelle version du schéma), il convient donc de l'utiliser avec précaution et de vérifier vos données par la suite.

```
project.Schema = "IFC4"

```

Il y a beaucoup plus à explorer, car plus de fonctionnalités sont disponibles avec les différents [sous-modules IFC natifs](https://github.com/FreeCAD/FreeCAD/tree/main/src/Mod/BIM/nativeifc), chacun fournissant des outils pour traiter un certain aspect de l'IFC (jeux de propriétés, géométrie, calques...). Ne manquez pas de les explorer si nécessaire !

J'espère que vous avez maintenant une bonne idée de l'endroit où commencer et de ce qui peut être fait avec l'IFC natif dans FreeCAD. N'hésitez pas à vous rendre à la [section BIM du forum de FreeCAD](https://forum.freecad.org/viewforum.php?f=23) si vous avez besoin d'aide !

Retrieved from "<http://wiki.freecad.org/index.php?title=Native_IFC_Tutorial/fr&oldid=1545947>"