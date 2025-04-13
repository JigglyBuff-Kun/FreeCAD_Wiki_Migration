---
title: Half-Hull Model
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Half-Hull Model                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Cette macro génère des modèles tridimensionnels de demi-coque et de coque complète à partir d'une série de dessins au trait en 2D. Cette macro réalise des modèles simples de coques de bateaux et de navires. Elle est destinée à aider les personnes qui modélisent ou conçoivent des coques en fournissant la surface de la coque d'une manière directe et opportune afin qu'elles puissent éviter le processus complet qui prend du temps. Version macro : 1.0 Date dernière modification : 2016-01-25 Version FreeCAD : <= 0.16 Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/44/Macro_Half_Hull_Model.png) Auteur: Piffpoof |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Piffpoof](/User:Piffpoof "User:Piffpoof")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/44/Macro_Half_Hull_Model.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2016-01-25                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <= 0.16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Description

Cette macro crée des modèles simples de coques de bateaux et de navires. Elle a pour but d'aider les personnes qui modélisent ou conçoivent des coques en leur fournissant la surface de la coque de manière directe et rapide afin qu'elles puissent éviter le processus complet qui prend du temps.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](http://pastebin.com/raw/tZMpUi6F)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "http://pastebin.com/raw/tZMpUi6F" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("http://pastebin.com/raw/tZMpUi6F")

```

<class="rawcodeurl"><a href="<http://pastebin.com/raw/tZMpUi6F>">raw code</a>

![](/images/Macro_Half-Hull_ModelScreenBoatInABottle.jpg)

## Contexte

Depuis l'Antiquité, les constructeurs de bateaux ont dû concevoir des bateaux puis les réaliser dans un environnement tridimensionnel où très peu de lignes sont droites, très peu de surfaces plates et où aucun angle n'est constant. Les modèles de coque ont été utilisés pour créer des modèles à l'échelle qui pourraient ensuite être utilisés pour revoir la conception ou communiquer les concepts à d'autres personnes. Les lois de l'hydrodynamique exigent que tout navire traversant un liquide ait une section symétrique s'il veut suivre (se déplacer en ligne droite) avec précision. Par conséquent, il ne suffisait que de construire un côté de la coque dans le modèle. Si la demi-coque était parfaite, son image en miroir le serait également. Au cours des dernières années, les demi-coques ont été utilisées à des fins symboliques telles que les plaques et l'art nautique.

Ce code est issu d'un projet de construction d'un modèle de bateau à voile de 12,5 mètres sous FreeCAD. Les constructeurs n'avaient plus de dessins et le fils du propriétaire initial doutait qu'il y ait jamais eu de dessins complets. Par conséquent, les dimensions de la coque ont dû être mesurées, puis un modèle construit dans le logiciel. Les progiciels modernes tels que FreeCAD offrent de nombreuses fonctionnalités avantageuses telles que les contraintes de symétrie, mais lorsque la mesure finale est un modèle "facile à regarder". Ce code a été écrit pour aider à automatiser ce processus.

Le but initial de ce code était de fournir une coque symétrique qui était malléable afin de pouvoir être adaptée au modèle 3D en cours de construction. Au fur et à mesure que le logiciel progressait, il a été généralisé, donc j'espère qu'il serait utile aux personnes:

- concepteurs de bateaux produisant des schémas de bateaux qui peuvent être construits à partir de
- constructeurs de bateaux qui tentent de modéliser ce qui est décrit sur leurs schémas
- constructeurs de coques modèles.

Certes, les concepteurs de bateaux commerciaux ont toutes sortes de logiciels haut de gamme pour faciliter leur travail, cela n'est pas censé remplacer cela. C'est plutôt pour l'amateur ou le constructeur de maisons de bricoler.

Les plans nautiques ont une histoire distincte en ce qui concerne les bâtiments et sont donc quelque peu différents dans leur présentation. Voici un exemple de voilier vieux de plus d'un siècle:

![](/images/Macro_Half-Hull_ModelImage0.jpg)

L'un des objectifs finaux de ce logiciel est d'utiliser l'atelier Draft pour générer certains de ces diagrammes en utilisant le modèle pour générer les lignes.

**Remarque sur les unités dans FreeCAD:**

À l'heure actuelle, il n'y a pas vraiment de système de gestion des unités au sein de FreeCAD, mais évidemment, un constructeur de bateaux ou un modélisateur aura besoin d'un système de dimensionnement précis. Pour utiliser cette macro, décidez de définir la taille de la grille FreeCAD sur ce qui est toujours approprié pour votre travail (par exemple mm, cm, pouces, pied). FreeCAD est cohérent, une unité FreeCAD sera constamment égale à une unité FreeCAD. Et si vous avez décidé d'avoir une unité FreeCAD égale à une longueur physique spécifique, vos dessins resteront dimensionnés de manière cohérente. Actuellement, des travaux sont en cours sur un système d'unités pour FreeCAD, de sorte que cette situation pourrait bientôt changer.

## Description

Pour cette macro, les formes de coques sont définies par un minimum de 3 esquisses FreeCAD : une dans le plan YZ, une ou plusieurs dans le plan XZ, une dans le plan XY. Voici la coque minimale supportée par cette macro, elle n'a que 3 esquisses :

![](/images/Macro_Half-Hull_ModelImage1.jpg)

**Remarque** : dans le diagramme ci-dessus, nous regardons directement la poupe, la proue pointant à l'opposé du point de vue.

De l'avant vers l'arrière (de l'arc à la poupe), les 3 croquis sont:

|                    |         |                             |
| ------------------ | ------- | --------------------------- |
| ligne d'étrave     | plan YZ | ligne rouge dans le croquis |
| coupe transversale | plan XZ | ligne verte dans le croquis |
| tableau arrière    | plan XY | ligne bleue dans le croquis |

Il est peut-être plus facile de voir les choses avec 7 esquisses (une dans le plan YZ, une dans le plan XY et 5 dans le plan XZ) :

![](/images/Macro_Half-Hull_ModelImage2.jpg)

Avec 5 esquisses dans le plan XZ, il devient plus facile de percevoir la forme de la coque. Les deux images suivantes montrent les lignes de l'esquisse superposées au modèle construit par FreeCAD,

![](/images/Macro_Half-Hull_ModelImage3.jpg)

le second est le même modèle tourné de 90 degrés de sorte que la proue soit au premier plan :

![](/images/Macro_Half-Hull_ModelImage3a.jpg)

Quelques points à prendre en compte :

- Les esquisses ne concernent que :
  - la ligne d'étrave (ou ligne de proue) dans le plan YZ (en rouge dans le schéma ci-dessus) ;
  - la partie supérieure du tableau arrière dans le plan XY (en bleu dans le schéma ci-dessus) ;
  - plusieurs coupes transversales de la coque dans le plan XZ (en vert dans le schéma ci-dessus)
- seul le côté tribord de la coque est dessiné dans les esquisses, le côté bâbord sera généré comme une image miroir
- chaque ligne à segments multiples doit se trouver dans une esquisse distincte
- chaque esquisse doit avoir le même nombre de segments de ligne (soit 3 dans les exemples précédents)
- Plus il y a de segments de ligne dans chaque esquisse, plus le modèle généré par FreeCAD se rapprochera d'une coque courbée.
- Il n'y a pas de limite au nombre de segments de ligne dans chaque esquisse, n'importe quel nombre à partir de un.
- Il n'y a pas de limite au nombre d'esquisses dans le plan XZ (c'est-à-dire les coupes transversales).

Avec suffisamment d'esquisses, le modèle généré peut même s'approcher :

![](/images/Macro_Half-Hull_ModelImage4.jpg)

La macro HalfHull génère 4 modèles :

- demi-coque tribord
- demi-coque bâbord
- coque complète
- cloisons pour la coque complète, soit avec un pont affleurant, soit avec un rouf

Ces modèles sont tous édités dans l'espace de localisation unifié de FreeCAD afin qu'ils puissent être assemblés, par exemple les cloisons peuvent être insérées dans la coque complète de manière transparente. Voici une image de cloisons dans un modèle de bateau en cours de construction :

![](/images/Macro_Half-Hull_ModelImage5.jpg)

Ainsi que les cloisons générées par la macro (notez que ces cloisons sont destinées à une remise plutôt qu'à un pont affleurant) :

![](/images/Macro_Half-Hull_ModelImage6.jpg)

L'image composite ci-dessous montre les principales sorties de ce logiciel (la demi-coque bâbord n'est en fait pas montrée mais c'est le miroir de la demi-coque tribord qui est montré). Les sorties sont dans l'ordre des aiguilles d'une montre à partir du coin supérieur gauche :

- demi-coque tribord
- coque complète
- cloisons (pour un pont affleurant, les cloisons de l'image précédente étaient pour un pont de remise)
- la coque complète avec les cloisons insérées

![](/images/Macro_Half-Hull_ModelImage7.jpg)

En guise de nouveauté, la macro produira également, en option, des plaques pour les demi-coques, voire une bouteille pour la coque complète :

![](/images/Macro_Half-Hull_ModelImage8.jpg)

![](/images/Macro_Half-Hull_ModelImage9.jpg)

## Installation

Tout le code de halfHullModel.FCMacro se trouve dans une macro. L'installation consiste donc à copier le code dans le répertoire Macro approprié et à invoquer l'utilitaire de construction à partir du menu Macro, de la console Python ou d'un bouton de la barre d'outils (la méthode préférée).

- Voir [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") pour des informations sur la manière d'installer ce code de macro
- voir [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") pour des informations sur l'installation en tant que bouton sur une barre d'outils.

## Utilisation

Les opérations FreeCAD impliquées dans la génération du modèle de la coque sont assez complexes et nombreuses. Des éléments tels que la direction dans laquelle une ligne est tracée peuvent faire en sorte que la construction FreeCAD de la coque soit interrompue ou qu'elle se déroule de la même manière :

![](/images/Macro_Half-Hull_ModelUsage1.jpg)

Par conséquent, les étapes ci-dessous doivent être suivies de près. La macro autorise certaines incohérences dans les données, mais en général, si les données (c'est-à-dire les esquisses) sont incorrectes, la sortie ressemblera à une râpe à fromage ou la macro échouera en affichant une erreur.

Les instructions suivantes se réfèrent aux quadrants du graphique XY, c'est-à-dire aux quatre quarts du graphique XY, qui sont étiquetés comme suit :

![](/images/Macro_Half-Hull_ModelUsage2.jpg)

**Créer un nouveau document'**

La première chose à faire est de créer un nouveau document dans FreeCAD ![](/images/Document-new.svg). Ce document contiendra toutes les esquisses qui composent la définition de votre coque.

### Créer la ligne de l'étrave

La première étape consiste à créer des données à partir desquelles le modèle de coque sera réalisé. Les données sont fournies sous forme d'esquisses dans FreeCAD. Une fois le modèle de coque généré, si des modifications doivent être apportées, il suffit d'éditer les esquisses, et la deuxième étape consiste à exécuter la macro de manière répétée.

1. créez une nouvelle esquisse ![](/images/Sketcher_NewSketch.svg), dans le plan YZ
2. commencez à l'origine (0,0) et dessinez vers le haut dans le quadrant I  
   ![](/images/Macro_Half-Hull_ModelUsage3.jpg)
3. l'extrémité inférieure de la ligne de l'étrave se trouve à l'origine (0,0). C'est à partir de ce point que seront placées toutes les sections transversales et le tableau.
4. le nombre de segments de ligne dans cette esquisse détermine le nombre qui sera nécessaire dans chaque autre esquisse
5. sauvegardez l'esquisse ![](/images/Sketcher_LeaveSketch.svg)
6. pour faciliter l'identification, il est probablement utile de nommer l'esquisse quelque chose comme « stemline sketch » (esquisse de ligne de flottaison)

### Créer les esquisses des coupes transversales

1. créez une nouvelle esquisse ![](/images/Sketcher_NewSketch.svg), dans le plan XZ
2. la fenêtre de dialogue suivante apparaît :  
   ![](/images/Macro_Half-Hull_ModelScreenSnapshot1.jpg)  
   La fenêtre de dialogue demande à quelle distance de l'origine l'esquisse doit être placée. Il s'agit de la distance entre la section transversale et le bas de la ligne d'arbre (qui a été placée à (0,0)). Les sections transversales peuvent être espacées de manière égale, mais ce n'est pas obligatoire. La section transversale la plus en avant sera à Y=0 (c'est-à-dire l'origine où le fond de la ligne d'étrave se termine) ou à Y<=0. Les sections transversales seront à des valeurs Y de plus en plus négatives jusqu'à ce que le tableau soit à la valeur Y la plus négative. Dans l'exemple ci-dessus, l'esquisse de la section transversale sera placée à 50 unités FreeCAD de l'origine sur l'axe Y négatif.
3. Commencez sur l'axe Y et dessiner vers le haut dans le quadrant I

- la première section transversale (c'est-à-dire celle qui est la plus en avant) doit commencer à l'origine (0,0) (sinon elle aura un aspect bizarre car la ligne de tige se termine à 0,0), mais les autres sections transversales ne doivent commencer que sur l'axe Y.  
  ![](/images/Macro_Half-Hull_ModelUsage3.jpg)

1. utilisez le même nombre de segments de ligne que dans l'esquisse de la ligne de base
2. enregistrez l'esquisse ![](/images/Sketcher_LeaveSketch.svg)
3. répétez cette étape si nécessaire, il peut être plus rapide de copier cette esquisse et d'espacer les copies sur l'axe Y, des modifications peuvent être apportées aux esquisses individuelles selon les besoins.
4. our la dénomination, il sera plus facile de donner une sorte d'ordre aux sections transversales, en commençant par la proue (c'est-à-dire la ligne d'étrave) et en augmentant vers la poupe (c'est-à-dire le tableau arrière).

### Créer l'esquisse du tableau arrière dans le plan XY

1. créez une nouvelle esquisse ![](/images/Sketcher_NewSketch.svg), dans le plan XY
2. démarrez sur l'axe Y entre les quadrants III et IV, et dessinez vers le haut dans le quadrant IV de façon à ce que le point final coïncide avec le point le plus à droite de la section transversale la plus basse Esquisse dans le plan YZ  
   ![](/images/Macro_Half-Hull_ModelUsage4.jpg)
3. utilisez le même nombre de segments de ligne que pour l'esquisse de la ligne d'étrave
4. enregistrez l'esquisse ![](/images/Sketcher_LeaveSketch.svg)
5. pour faciliter l'identification, il est probablement utile de nommer l'esquisse quelque chose comme « esquisse de tableau arrière »

**Enregistrer le nouveau document'**

Enregistrez maintenant le document ![](/images/Document-save.svg) qui contient les esquisses qui définiront la forme de la coque, en lui donnant un nom descriptif.

Une fois les esquisses créées et positionnées, le document doit ressembler à ceci en vue de dessus ![](/images/View-top.svg) :

![](/images/Macro_Half-Hull_ModelUsage5.jpg)

Les principales limites de la construction du modèle sont les suivantes :

- le fond de la ligne de l'étrave doit se terminer à (0,0)
- l'extrémité inférieure la plus centrale de chaque section transversale doit se terminer sur l'axe Y, à noter qu'elle peut avoir n'importe quelle valeur Z.

Ceci conclut la première étape qui consiste à créer les données que la macro utilisera pour créer les demi-coques et les coques complètes. La deuxième étape est décrite dans la section suivante, intitulée Interface utilisateur.

## Interface utilisateur

Au cours de cette étape, la macro recueille certaines informations auprès de l'utilisateur, puis traite les esquisses en entrée pour générer les modèles de coque souhaités. Il s'agit de la seule image de l'interface graphique de la macro et elle concerne principalement les détails de configuration pour la production des modèles de coque à partir des esquisses :

![](/images/Macro_Half-Hull_ModelScreenSnapshot2.jpg)

Les choix de la fenêtre graphique sont les suivants :

- Starboard half-hull : si cette option est cochée, la macro produira un modèle de demi-coque tribord.
  - Mounting plaque : si cette option est cochée, la macro montera la demi-coque sur une plaque.
  - Allow space for keel : si cette option est cochée, la demi-coque sera montée plus haut sur la plaque que la position centrale, afin qu'une quille générée séparément puisse être placée sous la coque.
- Port half-hull : si cette case est cochée, la macro produira un modèle de demi-coque bâbord.
  - Mounting plaque : si cette option est cochée, la macro montera la demi-coque sur une plaque.
  - Allow space for keel : si cette option est cochée, la demi-coque sera montée plus haut sur la plaque que la position centrale, afin qu'une quille générée séparément puisse être placée sous la coque.
- Complete hull : si cette option est cochée, la macro produira un modèle complet.
  - Bottle for complete hull : si cette option est cochée, la macro placera la coque complète à l'intérieur d'une bouteille transparente (avec bouchon).
  - Allow space for keel : si cette option est cochée, la demi-coque sera placée plus haut dans la bouteille que la position centrale, afin qu'une quille générée séparément puisse être placée sous la coque.
- Bulkheads for flush deck : si cette option est cochée, la macro produira des cloisons dont le sommet est au même niveau que le sommet de la coque, les cloisons ne seront pas générées pour les 2 sections transversales les plus à l'avant ou les 2 sections transversales les plus à l'arrière.
- Bulkheads for coachhouse : en cochant cette case, la macro produira des cloisons dont les sommets sont éventuellement au-dessus du sommet de la coque.
  - Les cloisons à ignorer à l'avant déterminent le nombre de sections transversales qui seront laissées sans cloison à l'avant.
  - Les cloisons à ignorer à l'arrière déterminent combien de sections transversales ne comporteront pas de cloison à l'arrière.
- Les dimensions de la partie supérieure des cloisons seront configurées selon le diagramme suivant :  
  ![](/images/Macro_Half-Hull_ModelUi1.jpg)
- Bouton Cancel : l'exécution est interrompue et la fenêtre se ferme.
- Bouton Re-Use Last File : l'exécution utilise le fichier de données ET LES PARAMÈTRES de la dernière exécution, toute modification des paramètres est ignorée.
- Bouton Select File : la fenêtre standard Open File s'ouvre et l'utilisateur peut soit sélectionner un fichier, soit annuler et quitter.

Lorsque la macro s'exécute, elle prend en compte les données de configuration de l'utilisateur et lit ensuite les esquisses de Sketcher dans le fichier de saisie sélectionné.

**Remarque** : au fur et à mesure que la macro parcourt les esquisses, elle imprime toutes les exceptions ainsi que certains jalons dans l'affichage du rapport. Si vous obtenez des résultats inattendus ou si certaines pièces sont manquantes, c'est probablement le premier point à vérifier.

## Options

Il existe différents types de proue et de poupe pour les bateaux, la poupe étant beaucoup plus variée que la proue. Voici des exemples d'étraves et de proues tirés de la réalité, ainsi que des macros similaires :

**Tableau droit**

Il s'agit probablement du tableau le plus courant, typique de toutes les tailles de navires, des navires commerciaux aux bateaux à rames.

|     |     |
| --- | --- |
|     |     |

- le tableau arrière XY doit être aussi proche que possible de la section la plus à l'arrière.

**Jupe arrière**

Le plus souvent présent sur un voilier, il est le fruit d'une conception visant à maximiser la longueur de la ligne de flottaison afin de bénéficier des règles de classe pour les courses à la voile.

|     |     |
| --- | --- |
|     |     |

- placer les deux sections transversales les plus à l'arrière aussi près que possible, puis faire pivoter la plus à l'arrière des deux jusqu'à un angle de 45 degrés (ou tout autre angle requis) autour de l'axe X.

**Arrière canoë**

On les trouve sur toutes les tailles de bateaux, à moteur ou à voile, de plaisance ou commerciaux.

|     |     |
| --- | --- |
|     |     |

- placer les deux sections transversales les plus à l'arrière aussi près que possible, puis faire pivoter la plus à l'arrière des deux sections transversales jusqu'à un angle de 45 degrés autour de l'axe X

**Proue normale**

Il y a beaucoup moins de variété dans les formes d'étraves que dans les tableaux :

|     |     |
| --- | --- |
|     |     |

**Proue de trière**

Bien qu'il n'ait pas été très fréquent au cours des deux derniers millénaires, c'était autrefois le profil définitif de l'étrave des navires de guerre :

|     |     |
| --- | --- |
|     |     |

- Pour que la proue soit correcte, la polyligne de la ligne de l'étrave doit être tracée de bas en haut, ce qui signifie de droite à gauche dans l'outil d'esquisse.

## Exemples de fichiers

Ces fichiers sont des échantillons de données d'esquisse à utiliser avec la macro, principalement les modèles pour les captures d'écran dans la section Options ci-dessus. Les fichiers fonctionnent avec la macro et peuvent donc être téléchargés et utilisés pour s'adapter à vos besoins spécifiques. Le préfixe 5x3 (par exemple) signifie que le modèle comporte 5 sections transversales et 3 segments de ligne par section transversale (c.-à-d. esquisse).

Pour utiliser l'un des fichiers exemple, cliquez avec le bouton droit de la souris sur le lien du fichier et sélectionnez Enregistrer le fichier sous... dans le menu. Le nom du fichier sera spécifié, choisissez le dossier/répertoire souhaité pour contenir le fichier d'exemple.

- [Coque 3x1](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/3x1.FCStd?raw=true%7C) avec le nombre minimum d'esquisses (ligne d'étrave, une section transversale, tableau arrière) avec 1 segment de ligne par esquisse. Ne fonctionne pas actuellement.
- [5x3 avec étrave normale](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x3%20bowNormal.FCStd?raw=true%7C)
- [5x3 avec une étrave de trière](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x3%20bowTrireme.FCStd?raw=true%7C)
- [5x3 avec poupe de canoë](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x3%20sternCanoeStern.FCStd?raw=true%7C)
- [5x3 avec poupe à tableau](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x3%20sternSheerTransom.FCStd?raw=true%7C)
- [5x3 avec jupe arrière](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x3%20sternSugarScoop.FCStd?raw=true%7C)
- [5x5 bateau de travail](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/5x5%20workboat.FCStd?raw=true%7C)
- [7x5 bateau pirate](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/7x5%20pirate.FCStd?raw=true%7C)
- [12x3 voilier](https://github.com/FreeCAD/Examples/raw/master/Half_Hull_Macro_ExampleFiles/12x3%20halfHullS.FCStd?raw=true%7C)

## Remarques

- presque tous les exemples sur cette page sont générés avec seulement 3 segments de ligne définissant le côté de la coque ce qui donne un aspect très facetté, augmenter le nombre de segments dans chaque esquisse génèrerait une surface beaucoup plus lisse ce qui augmenterait le réalisme.
- ne fait pas de quilles, de dérives ou de gouvernails, en d'autres termes, il ne fait rien de la zone humide
- ne prend pas en compte les étraves carrées comme celles des bateaux-poussoirs ou des barges remorquées
- ne fait pas les sous-marins (bien qu'il puisse faire la moitié inférieure d'un sous-marin)

## Problèmes connus

La fonction « Surface lissée » de FreeCAD est utilisée pour générer les sections de la coque à partir des esquisses. Elle peut parfois générer un résultat erroné et afficher une surface ressemblant à une râpe au lieu d'une surface plane et lisse. Cela se produit généralement lorsque les esquisses sont tournées, par exemple lorsque la poupe d'une jupe arrière est modélisée. L'inclinaison de la poupe d'un tableau peut également être à l'origine de ce problème. Si cela se produit, c'est généralement dans les modèles de demi-coque ou de coque complète - cela ne semble jamais se produire dans les trois modèles pour la même coque. En outre, le problème ne se pose généralement qu'à l'extrémité de la proue ou de la poupe. S'il se produit au milieu du bateau, il est probable que l'une des esquisses a été dessinée dans le mauvais sens (c'est-à-dire dans une séquence aléatoire ou de haut en bas, alors que toutes les lignes devraient être dessinées de bas en haut).

Il peut généralement être supprimé en suivant les étapes suivantes :

- dans l'onglet Modèle de la vue combinée, cliquez sur le segment défectueux pour le sélectionner, le segment défectueux apparaîtra en surbrillance sur l'écran
- sélectionnez l'onglet Données dans la moitié inférieure de la vue combinée. La partie inférieure de la fenêtre comporte une étiquette « Surface lissée » avec un seul paramètre « Orientation ».
- il y a un menu contextuel à droite qui a les valeurs « Automatique », « Avant », « Inversé », il sera initialement réglé sur « Automatique ».
- essayez l'un des autres paramètres (en vous rappelant que le segment défectueux doit toujours être sélectionné dans la partie supérieure de la vue combinée), ce qui corrigera généralement le problème.

La capture d'écran suivante montre la partie concernée de l'écran :

![](/images/Macro_Half-Hull_ModelKnownProblems1.jpg)

## Possibilités futures

- remplacer les segments de lignes des coupes transversales par des lignes courbes : ce n'est qu'une idée, mais cela donnerait une surface beaucoup plus lisse dans la dimension verticale, alors que la surface horizontale serait toujours facettée comme elle l'est actuellement.
- intégration à l'atelier Draft pour produire des dessins à partir de modèles : un objectif initial, mais la faisabilité n'a pas été étudiée
- gérer les quilles, les dérives et les gouvernails : une solution pour les quilles avec le système actuel est de modéliser la quille comme une demi-coque à part entière et de l'assembler ensuite sur le fond de la coque principale ; cela ne ferait cependant rien pour les gouvernails et les dérives.

## Glossaire

Comme pour tout commerce ancien et pratiqué, un vocabulaire riche et parfois déroutant s'est développé autour des navires, des bateaux et des pratiques nautiques. Il est à la fois difficile et inefficace de décrire ce macro processus sans utiliser les termes corrects et précis. Le problème évident est que le profane moyen n'est pas familiarisé avec cette terminologie, d'où ce vocabulaire :

|                 |                                                                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| poupe           | l'aspect arrière de tout ce qui se trouve sur un bateau                                                                                         |
|                 |                                                                                                                                                 |
| bouchain        | une facette plane d'une coque, peut être utilisée pour approximation d'une surface courbe ou comme technique de construction finie.             |
|                 |                                                                                                                                                 |
| cabine          | la partie du pont central qui est surélevée par rapport au niveau du pont, généralement pour augmenter la hauteur libre à l'intérieur du bateau |
|                 |                                                                                                                                                 |
| pont affleurant | un pont qui s'étend doucement du haut d'un côté de la coque à l'autre, à l'inverse d'un pont de cabines                                         |
|                 |                                                                                                                                                 |
| avant           | également « avant », l'aspect avant de tout ce qui se trouve sur un bateau                                                                      |
|                 |                                                                                                                                                 |
| bâbord          | côté gauche regardant vers l'avant                                                                                                              |
|                 |                                                                                                                                                 |
| tribord         | côté droit regardant vers l'avant                                                                                                               |
|                 |                                                                                                                                                 |
| ligne d'étrave  | le bord vertical incliné qui constitue la proue d'une coque                                                                                     |
|                 |                                                                                                                                                 |
| tableau arrière | le bord supérieur incurvé de la face arrière, qui peut être plat ou incurvé                                                                     |

## Liens

- [Half Hull Model Ship](http://en.wikipedia.org/wiki/Half_hull_model_ship) (Wikipedia)
- [Why Half Hulls](http://www.halfhullshipmodels.com/smf/discussions-of-half-hulls-and-ship-models/understanding-and-practising-half-hull-boat-modelling/?PHPSESSID=56fedd9f6fa2db453a77347f10d57b7f) (site web sur les modèles de navires à demi-coque et l'art nautique)
- [Traditional Model Yacht Design](http://pages.swcp.com/usvmyg/design/design.htm) (US Vintage Model Yacht Group)

## Script

Icône de la barre d'outils ![](/images/Macro_Half_Hull_Model.png)

**Macro_Half_Hull_Model.FCMacro**

Ce script fonctionne sans bug. Mais en raison du grand nombre d'entrées possibles, il se peut qu'il échoue pour certaines entrées. Si c'est le cas, veuillez le signaler.

Le script est trop long pour que le Wiki puisse l'afficher, il doit donc être copié ou téléchargé à partir de [script non abrégé sur pastebin.com](http://pastebin.com/raw.php?i=tZMpUi6F).

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Half-Hull_Model/fr&oldid=1539499>"
