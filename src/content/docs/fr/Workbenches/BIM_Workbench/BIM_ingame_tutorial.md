---
title: BIM Tutoriel
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

![](/images/BIM_tutorial_screenshot.png)

**Tutorial steps**

Il s'agit du tutoriel de l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"). Il n'est pas destiné à être lu ici sur le wiki, mais plutôt à être démarré depuis FreeCAD. Après avoir [activé](/Std_Workbench/fr "Std Workbench/fr") l'atelier BIM, vous pouvez le trouver dans le menu sous **Aide → Tutoriel BIM**. Il comprend une série d'étapes à effectuer par l'utilisateur. Chaque étape se termine par une instance du modèle [{{BIMTutorialAction|descr|goal1|test1|goal2|test2}}](/Template:BIMTutorialAction "Template:BIMTutorialAction") qui informe de la condition qui doit être remplie. Les images doivent avoir une largeur de 300 pixels. Aucune image SVG ne doit être utilisée sur cette page car elles ne sont pas prises en charge par le widget QTextBrowser

### Bienvenue dans l'atelier BIM !

![](/images/BIM_Tutorial_title.jpg)

Ce tutoriel vous guidera à travers les différentes fonctionnalités de l'[atelier BIM](/BIM_Workbench "BIM Workbench") et vous aidera à vous mettre en piste en modélisant un bâtiment de pavillon très simple. Cela devrait prendre entre une et deux heures pour le terminer entièrement, selon votre expérience antérieure avec les applications 3D.

Vous pouvez interrompre le tutoriel à tout moment et le reprendre plus tard en sélectionnant à nouveau **Aide → Tutoriel de BIM**.

Certaines étapes de ce tutoriel requièrent des actions de votre part. Celles-ci seront indiquées sous cette zone de texte, avec une icône indiquant si la tâche a été accomplie ou non. Mais comme nous sommes de bonnes personnes ici à FreeCAD, il n'est pas obligatoire d'effectuer les actions pour avancer dans ces pages. Vous pouvez simplement parcourir le tutoriel et sauter les actions à votre convenance.

#### À propos des versions de FreeCAD

Ce tutoriel est écrit pour la [la version de développement la plus récente de FreeCAD disponible](/Download/fr "Download/fr") (actuellement la version 1.1.0dev). L'atelier BIM, cependant, est conçu pour être compatible avec n'importe quelle version de FreeCAD. Si vous utilisez une version de FreeCAD antérieure à celle indiquée ici, certains outils BIM peuvent avoir un aspect différent, fonctionner différemment ou même ne pas être disponibles. Reportez-vous à la [documentation](/BIM_Workbench/fr "BIM Workbench/fr") pour en savoir plus en cas de doute.

#### Remarque

Ce tutoriel est toujours en cours d'écriture et est donc **incomplet** ! Si vous avez des suggestions ou des choses que vous trouvez floues, pourquoi ne pas nous aider à l'améliorer sur le [forum FreeCAD](https://forum.freecad.org/viewforum.php?f=23) !

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Configurer FreeCAD

FreeCAD a un système de préférences conséquent avec de nombreuses options à définir, situé dans le menu **Édition → Préférences**. Chaque atelier supplémentaire peut ajouter d'autres pages de préférences, ce qui le rend très complexe.

L'atelier BIM fournit une [fenêtre de configuration simplifiée](/BIM_Setup/fr "BIM Setup/fr"), qui permet de définir rapidement certaines des préférences les plus utiles pour le travail avec des BIM. Cette fenêtre de configuration se trouve sous le menu **Gestion → Configurer l'atelier BIM...** (vous pouvez également cliquer sur le bouton correspondant dans la barre d'outils Gestion) :

![](/images/BIM_Tutorial_01.jpg)

Ouvrez maintenant la fenêtre de configuration simplifiée et réglez les différentes options à votre convenance.

En cas de besoin, passez la souris sur une option ou un paramètre pour voir une description de son utilisation :

![](/images/BIM_Tutorial_02.jpg)

Dans ce tutoriel, nous travaillerons en centimètres. Par conséquent, nous vous recommandons de régler vos unités de travail préférées sur **centimètres** et la taille par défaut d'un carré de la grille sur **10 cm**. Ces paramètres peuvent être modifiés à tout moment à partir du bouton du plan de travail situé dans la barre d'outils principale et de l'indicateur d'unités situé dans la barre d'état (en bas à droite) :

![](/images/BIM_tutorial_14.jpg)

**Tutorial steps**

*Ouvrir la fenêtre de configuration de BIM*

True if hasattr(FreeCADGui,"BIMSetupDialog") else False

*Régler les unités de travail préférées sur les centimètres et la taille par défaut d'un carré de la grille sur 10 cm.*

True if ((FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Units").GetInt("UserSchema",0) == 4) and (FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Mod/Draft").GetString("gridSpacing") == '10.00 cm')) else False

### Créer un nouveau document

Si vous venez d'installer FreeCAD, vous consultez probablement actuellement la **page de démarrage de FreeCAD** :

![](/images/BIM_tutorial_13.jpg)

La page de démarrage répertorie les derniers documents avec lesquels vous avez travaillé et, sur ses différents onglets, explique comment obtenir de l'aide. Mais pour commencer à travailler, nous devons créer un nouveau **document** vide. Si vous ne l'avez pas encore fait, créez maintenant un nouveau document en utilisant l'élément "Créer un nouveau ..." de la page de démarrage, ou en accédant au menu **Fichier → Nouveau** :

![](/images/BIM_tutorial_09.jpg)

Vous vous retrouverez alors dans l'espace 3D de FreeCAD, prêt à travailler :

![](/images/BIM_tutorial_10.jpg)

**Tutorial steps**

*Créer un nouveau document*

True if FreeCAD.ActiveDocument else False

### Naviguer dans la vue 3D

Il existe plusieurs façons d'interagir avec la souris dans FreeCAD. Ils sont appelés [styles de navigation](/Mouse_navigation/fr "Mouse navigation/fr"). Vous pouvez modifier le style de navigation actuel à tout moment en cliquant sur le bouton de style de navigation dans la barre d'état. Passer la souris sur ce bouton vous montrera également ce que fait chaque bouton de la souris. Plusieurs d'entre eux sont conçus pour correspondre à d'autres applications bien connues. Choisissez celui avec lequel vous êtes à l'aise.

![](/images/BIM_Tutorial_03.jpg)

Contrôler la façon dont vous regardez votre modèle dans la vue 3D peut se faire de plusieurs façons : à l'aide de la **souris** (selon le style de navigation que vous avez choisi), du **clavier** (explorez le contenu du menu **Affichage** pour en savoir plus), ou du [cube de navigation](/Navigation_Cube/fr "Navigation Cube/fr") (cliquez sur les différentes flèches et faces du cube pour aligner la vue).

![](/images/BIM_Tutorial_04.jpg)

**Tutorial steps**

*Choisissez un style de navigation*

True

*Choisissez Vue de dessus*

True if FreeCADGui.ActiveDocument.ActiveView.getViewDirection().getAngle(FreeCAD.Vector(0,0,-1)) < 0.01 else False

### Réorganiser l'interface

Tous les panneaux et barres d'outils de FreeCAD peuvent être déplacés et réorganisés. Des panneaux plus grands peuvent également être ajoutés en effectuant un glisser/déposer sur un autre panneau. Si votre écran est trop petit pour afficher toutes les barres d'outils et leur contenu (les barres d'outils tronquées apparaîtront avec un signe >>), il peut être judicieux de les déplacer vers une meilleure position.

![](/images/BIM_Tutorial_05.jpg)

Les barres d'outils et les panneaux peuvent également être activés et désactivés à partir du menu **Affichage**.

L'atelier BIM comporte également des boutons de commutation dans la barre d'état, qui active et désactive des panneaux supplémentaires tels que la vue de sélection, la vue de rapport et la console Python. Ces panneaux sont souvent utiles lorsque vous travaillez avec FreeCAD, mais ils utilisent un espace d'écran précieux. Vous pouvez généralement tout désactiver jusqu'à ce que vous en ayez besoin. N'oubliez pas que les messages d'erreur sont imprimés dans la fenêtre de rapport, donc en cas de problème, assurez-vous d'y jeter un œil.

![](/images/BIM_tutorial_17.jpg)

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Outils de l'atelier BIM

L'[atelier BIM](/BIM_Workbench "BIM Workbench") contient des outils empruntés à d'autres ateliers tels que [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ou [Part](/Part_Workbench/fr "Part Workbench/fr"), ainsi que ses propres outils. Ceux-ci sont organisés en plusieurs catégories. Chaque catégorie a un menu et une barre d'outils. Prenez un moment pour explorer le contenu des menus décrits ci-dessous.

#### Dessin 2D

Ces outils vous permettent de dessiner des objets plats, tels que des lignes, des polylignes, des rectangles, des arcs, etc... qui deviendront les bases de vos objets BIM. Par exemple, vous pouvez utiliser une polyligne pour définir la trace de base d'un mur ou un rectangle comme profil pour une poutre. Tous les objets 2D sont créés dans le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr").

![](/images/BIM_Tutorial_35.jpg)

#### 3D/BIM

Cette catégorie contient des outils pour créer des objets BIM tels que des [murs](/Arch_Wall/fr "Arch Wall/fr") ou des [fenêtres](/Arch_Window/fr "Arch Window/fr") et des objets 3D génériques non BIM tels que des [boîtes](/BIM_Box/fr "BIM Box/fr"), que vous pourrez convertir en objets BIM plus tard. Le résultat est différent si vous utilisez l'outil avec un objet sélectionné ou non. Si ce n'est pas le cas, une interface de création s'affiche. Si vous avez sélectionné un objet avant de lancer l'outil, un objet du type correspondant sera créé en utilisant l'objet sélectionné comme base.

![](/images/BIM_Tutorial_33.jpg)

Un exemple typique est d'appuyer sur le bouton [mur](/Arch_Wall/fr "Arch Wall/fr") avec une [ligne](/Draft_Line/fr "Draft Line/fr") ou [polyligne](/Draft_Wire/fr "Draft Wire/fr") sélectionnée. Un mur sera créé automatiquement en utilisant la ligne ou la polyligne comme ligne de base.

Les objets non BIM, y compris les objets créés dans d'autres ateliers, peuvent être transformés à tout moment en objets BIM en les sélectionnant et en appuyant sur l'un des boutons de l'outil BIM.

#### Annotation

Ces outils produisent des objets annotatifs tels que des cotes, des textes, des étiquettes ou des grilles, qui ne sont pas utilisés pour la modélisation mais pour annoter vos modèles et produire des dessins compréhensibles.

![](/images/BIM_Tutorial_34.jpg)

#### Aimantation

Ces outils activent/désactivent les positons [aimantées](/Draft_Snap/fr "Draft Snap/fr"). Comme dans la plupart des applications de BIM, chaque position d'aimantation supplémentaire ajoute du temps de calcul lorsque vous dessinez, il est donc préférable de ne garder que celles dont vous avez besoin activées.

#### Modifier

Ces outils modifient les objets existants. Ils contiennent des outils de transformation habituels tels que Déplacer ou Rotation, ainsi qu'une série d'autres qui ne fonctionnent que pour des types d'objets spécifiques.

#### Gérer

Cette catégorie contient des outils de gestion générale. La plupart d'entre eux vous permettent de modifier simultanément les propriétés BIM d'un grand groupe d'objets sans avoir à les sélectionner.

Chaque outil contenu dans ces menus possède sa propre page de documentation qui décrit en détail son fonctionnement et les options disponibles. Ils sont listés sur la page de l'[atelier BIM](/BIM_Workbench/fr "BIM Workbench/fr"), également accessible depuis le menu **Aide** ou en utilisant le menu **Aide → Qu'est-ce que c'est?** et en cliquant sur n'importe quel bouton de la barre d'outils.

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Préparer votre espace de travail

Il existe de nombreuses façons de créer des objets BIM dans FreeCAD. Vous pouvez utiliser les [outils BIM](/BIM_Workbench/fr "BIM Workbench/fr") natifs de cet atelier ou utiliser n'importe quel autre outil FreeCAD d'autres [ateliers](/Workbenches/fr "Workbenches/fr"). Les outils *Formes 2D* et les outils *3D/BIM* de cet atelier, contrairement à d'autres ateliers tels que PartDesign, utilisent largement les **plans de travail** et l'**aimantation**.

Le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") est l'endroit où vos prochains objets seront créés. Vous pouvez le définir sur l'un des plans orthogonaux de base (sol, avant, côté) ou utiliser n'importe quelle face sélectionnée pour définir le plan de travail courant. Vous pouvez également utiliser des [proxy comme plan de travail](/Draft_WorkingPlaneProxy/fr "Draft WorkingPlaneProxy/fr") depuis le menu **Utilitaires** pour stocker une position particulère du plan de travail dans votre modèle. Les [parties de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") contiennent également une position implicite du plan de travail. Le changement du plan de travail en cours se fait en appuyant sur le bouton du plan de travail dans la barre d'outils BIM. La **grille** reflète toujours l'emplacement du plan de travail.

Comme vous l'aurez remarqué, l'angle de vue et le plan de travail ne sont pas liés. Vous pouvez travailler sur votre plan de travail sous n'importe quel angle de vue.

Réglez maintenant le plan de travail en mode "Dessus" :

![](/images/BIM_Tutorial_06.jpg)

Les [outils d'aimantation](/Draft_Snap/fr "Draft Snap/fr") vous permettent de placer de nouveaux objets et points précisément en fonction de la géométrie existante. Cependant, l'activation de nombreux emplacements d'aimantation peut ralentir les opérations de dessin, il est donc judicieux de n'activer que les outils d'aimantation que vous souhaitez utiliser. Prenez un moment pour passer en revue ce que chacun d'eux fait, afin que, si nécessaire, vous saurez lequel peut être désactivé.

![](/images/BIM_Tutorial_07.jpg)

Faites particulièrement attention au dernier, l'outil **Aimantation du plan de travail** car il forcera tout point aimanté à se trouver sur le plan de travail, vous empêchant ainsi d'aimanter au-dessus ou en dessous du plan de travail. Vous devrez souvent l'activer ou le désactiver, en fonction de l'opération que vous effectuez.

**Tutorial steps**

*Réglez le plan de travail en mode "Dessus" (XY)*

True if ((FreeCAD.DraftWorkingPlane.axis.getAngle(FreeCAD.Vector(0,0,1)) < 0.01) and (FreeCAD.DraftWorkingPlane.weak == False)) else False

*Passez en revue les différents outils d'aimantation*

True

### Dessiner un premier mur

Commençons à construire notre pavillon en créant des murs. Les murs peuvent être faits soit directement avec l'outil [mur](/Arch_Wall/fr "Arch Wall/fr"), soit en dessinant d'abord des objets 2D tels que des [lignes](/Draft_Line/fr "Draft Line/fr"), des [polylignes](/Draft_Wire/fr "Draft Wire/fr") ou des [esquisses](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") qui définiront la ligne de base de nos murs. Lorsque vous avez sélectionné un tel objet de ligne de base, le fait d'appuyer sur l'outil Mur le convertira automatiquement en mur.

Commencez par effectuer un zoom arrière jusqu'à ce qu'une bonne partie ou la totalité de la grille soit visible. Cela permettra de voir beaucoup plus facilement ce que nous faisons :

![](/images/BIM_tutorial_15.jpg)

Ensuite, appuyez sur le bouton ![](/images/Arch_Wall.png) **Mur** dans la barre d'outils (ou choisissez l'élément de menu **3D/BIM → Mur**). Cliquez sur deux points de la grille, alignés verticalement, distants de **300 cm**. En appuyant sur la touche MAJ après avoir cliqué sur le premier point, vous pourrez maintenir votre mur à l'horizontale ou à la verticale. Le panneau latéral vous informe de la longueur du mur pendant que vous dessinez.

![](/images/BIM_tutorial_16.jpg)

Si vous avez créé un mauvais mur, pas de soucis ! Supprimez-le ou annulez-le simplement (menu **Édition → Annuler**) et réessayez.

**Tutorial steps**

*Créer un mur*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "MakeBlocks" in o.PropertiesList]) == 1)

### Dessiner un second mur

Faites un deuxième mur horizontal de 4 mètres (ou 400 centimètres) de long. Sélectionnez à nouveau l'outil ![](/images/Arch_Wall.png) **Mur**, effectuez un panoramique et un zoom arrière jusqu'à ce que vous voyiez une bonne zone de la grille, puis choisissez deux points dans la grille pour définir les points de départ et de fin du nouveau mur :

![](/images/BIM_tutorial_11.jpg)

Une fois qu'ils sont créés, sélectionnez les deux murs en appuyant sur CTRL et en cliquant dessus tous les deux dans la vue 3D ou dans la [vue arborescente](/Document_structure/fr "Document structure/fr"), ajustez leur propriété **height** (hauteur) à 2,5 mètres et leur **width** (largeur)à 20 centimètres (ou toute autre mesure avec laquelle vous êtes à l'aise, si vous travaillez dans une autre unité). Ils ressemblent à ceci (utilisez la souris pour faire pivoter la vue, en fonction du style de navigation que vous avez choisi) :

![](/images/BIM_tutorial_08.jpg)

Vous pouvez toujours corriger ou modifier les propriétés après la création d'un mur ou de tout autre objet BIM. En développant l'objet mur dans l'arborescence, puis en double-cliquant sur la ligne de base du mur, vous pouvez également modifier son objet 2D de base. La plupart des objets BIM de FreeCAD sont basés sur un autre objet, tel qu'une ligne de base ou un profil.

![](/images/BIM_tutorial_12.jpg)

#### Remarque importante

Vous remarquerez que certaines modifications de propriété, dans FreeCAD, ne se reflètent pas immédiatement sur l'objet dans la vue 3D. Au lieu de cela, l'objet est marqué d'une marque bleue "à recalculer" dans l'arborescence:

![](/images/BIM_Tutorial_20.jpg)

La raison en est qu'un document FreeCAD peut être une chaîne très complexe d'objets interdépendants. Une mise à jour peut déclencher une mise à jour sur beaucoup d'autres objets et donc prendre du temps. Pour éviter cela, certaines opérations marquent simplement l'objet à recalculer, et vous déclenchez le recalcul vous-même en utilisant le menu **Édition → Rafraîchir** ou en appuyant sur **Ctrl+R**.

**Tutorial steps**

*Créer deux objets mur orthogonaux*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "MakeBlocks" in o.PropertiesList]) == 2)

*Régler leur hauteur à 2,50 mètres et leur largeur à 20 centimètres*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "MakeBlocks" in o.PropertiesList and o.Height.Value == 2500 and o.Width.Value == 200]) == 2)

### N'oubliez pas de sauvegarder régulièrement le fichier !

Comme toute autre application informatique, FreeCAD est susceptible de malfonctionner ou de planter, surtout lorsque nous en avons peu d'expérience. Enregistrer souvent votre fichier est une très bonne habitude à prendre dans ces premiers instants. FreeCAD dispose également d'un mécanisme d'enregistrement automatique, que vous pouvez configurer dans le menu **Édition → Préférences → Général → Document**.

Enregistrer votre fichier maintenant en utilisant le menu **Fichier → Enregistrer**.

**Tutorial steps**

*Enregistrez votre fichier*

bool(FreeCAD.ActiveDocument.FileName)

### Dessiner une dalle de toit

Nous allons maintenant placer une dalle de toit sur nos murs. Au lieu de dessiner directement la dalle, comme nous l'avons fait avec les murs, nous allons d'abord dessiner un rectangle, puis transformer le rectangle en dalle. Nous allons maintenant explorer deux méthodes pour ce faire, les deux sont utiles à connaître, nous vous suggérons donc d'en essayer une d'abord, puis de l'annuler (ou de recharger le fichier) et essayer l'autre méthode.

#### Méthode 1 : dessiner la dalle au sol, puis déplacez-la en position

Il est souvent pratique de considérer le plan XY vu de dessus (le plan du sol) comme une sorte de "planche à dessin", où nous construirons nos objets, puis nous nous déplacerons à côté de leur position correcte. Il y a un avantage supplémentaire ici : notre plan de travail est déjà en mode "Dessus" donc nous n'avons pas besoin de le changer.

Placez-vous en vue de dessus, effectuez un zoom arrière jusqu'à ce que vous voyiez les deux murs et dessinez un rectangle les englobant tous les deux. Appuyez sur le bouton ![](/images/Draft_Rectangle.png) **Rectangle** de la barre d'outils (ou choisissez l'élément de menu **Formes 2D → Rectangle**) :

![](/images/BIM_Tutorial_18.jpg)

Faites pivoter votre vue pour inspecter les résultats. Par défaut, le rectangle est fait d'une face. Cela peut être changé en changeant la propriété **Make Face** de notre rectangle à False. Pour la dalle que nous allons construire, cela n'a aucun impact, pour d'autres types d'objets, cependant, le fait que l’objet de base soit étant une polyligne ou une face peut faire la différence.

![](/images/BIM_Tutorial_19.jpg)

L'étape suivante consiste à construire une dalle en *extrudant* celle-ci avec notre rectangle comme son *profil* de base. Dans FreeCAD, les objets structurels tels que les poteaux, les poutres ou les dalles sont tous fabriqués avec un même objet, appelé **Structure**. Après la création d'un objet structurel, il suffit de définir sa propriété **IFC Type** sur le type souhaité (colonne, dalle, etc.) pour changer son type.

Assurez-vous que notre rectangle est sélectionné, puis appuyez sur le bouton ![](/images/BIM_Slab.png) **Dalle** dans la barre d'outils (ou choisissez l'élément du menu **3D/BIM → Dalle**). Comme indiqué ci-dessus, cela peut également être fait avec les outils Colonne ou Poutre, car ils produisent tous le même type d'objet. Une fois notre objet créé, nous devons apporter les modifications suivantes à ses propriétés :

* Réglez **Height** à **20 cm**
* Vérifiez que **IFC Type** est défini sur **Slab**

Nous devons maintenant déplacer notre nouvelle dalle de toit à sa bonne position, c'est-à-dire au-dessus des murs. Il faut donc la déplacer vers le haut, dans la direction Z, d'une distance de 250 cm, la hauteur de nos murs. Nous pouvons simplement modifier la propriété **Placement** de notre dalle, étendre son attribut **Position** et définir la valeur de **z** à 250 cm. Notre dalle est maintenant bien en place :

![](/images/BIM_Tutorial_21.jpg)

Une autre façon de déplacer notre dalle à sa bonne position, est d'utiliser l'outil ![](/images/Draft_Move.png) **Déplacer** du menu **Modification**. Pour cela, nous devons d'abord définir notre plan de travail dans un plan vertical, en appuyant sur le bouton ![](/images/Draft_SelectPlane.png) **Plan de travail** (assurez-vous qu'aucune face n'est sélectionnée ), et le régler sur **XZ (face)**. En nous plaçant en vue de face (appuyez sur la touche **1**), nous pouvons maintenant sélectionner la dalle, appuyer sur le bouton ![](/images/Draft_Move.png) **Déplacer** et déplacer notre dalle en cliquant sur l'un de ses points de base puis en appuyant sur **MAJ** pour restreindre le mouvement verticalement, cliquez sur un point au-dessus des murs :

![](/images/BIM_Tutorial_23.jpg)

#### Méthode 2 : dessiner la dalle directement dans le bon plan

Une autre méthode utile consiste à travailler directement sur le plan prévu. Nous pouvons facilement placer le plan de travail sur la surface supérieure des murs, là où nous voulons notre dalle. En sélectionnant une face et en appuyant sur le bouton ![](/images/Draft_SelectPlane.png) **plan de travail**, le plan de travail coïncide avec la face sélectionnée. Sélectionnez la face supérieure du mur et définissez-la comme plan de travail courant. Le placement de la grille se déplace pour afficher le plan de travail actuel.

![](/images/BIM_Tutorial_22.jpg)

Tout ce que nous dessinerons à partir de maintenant se passera dans ce plan. Si vous le souhaitez, vous pouvez maintenant vous placer en vue de dessus, mais ce n'est pas nécessaire. Une fois votre plan de travail défini, et si l'option **aimantation au plan de travail** est activée, vous pouvez dessiner directement dans n'importe quel type de vue 3D.

Une fois notre *profil* rectangulaire dessiné, nous pouvons suivre la même méthode que dans la première méthode pour créer une dalle (sélectionnez-la, appuyez sur le bouton **Structure**, ajustez ses propriétés).

**Tutorial steps**

*Créer un rectangle*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "Rectangle" in o.Name]) == 1)

*Créer une dalle de 20 cm d'épaisseur*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "IfcType" in o.PropertiesList and o.IfcType == "Slab" and o.Height.Value == 200]) == 1)

### Créer une colonne métallique

Ajoutons une colonne métallique pour donner un meilleur support à notre dalle. Assurez-vous que le plan de travail est en mode *Dessus*. Commençons par nous mettre en vue de dessus (appuyez sur la touche **2**) et faites disparaitre la dalle pour mieux voir ce qui se trouve en dessous. Sélectionnez la dalle et appuyez sur la touche **Espace** pour désactiver son affichage.

Dans FreeCAD, il est très facile d'activer et de désactiver des objets ou des groupes. L'arborescence vous montre clairement ce qui est affiché et ce qui est caché. Assurez-vous de l'utiliser souvent !

L'outil **Colonne** (ainsi que l'outil Poutre) a des profils intégrés que nous allons utiliser maintenant. Assurez-vous que rien n'est sélectionné, puis appuyez sur le bouton Colonne. Dans les **Options de structure**, sélectionnez la catégorie **CHS** (pour "Circular Hollow Section"; RHS pour "Rectangular Hollow Section", HEA, HEB, etc. sont des variantes de section "H", etc.) :

![](/images/BIM_Tutorial_24.jpg)

Et cliquez sur un point pour placer votre colonne, plus ou moins à cette position. Assurez-vous que la nouvelle colonne a un type IFC de "Column" et donnez-lui une hauteur de 250 cm pour qu'elle soit à la même hauteur que nos murs.

![](/images/BIM_Tutorial_25.jpg)

Le préréglage CHS par défaut a un diamètre optionnel de 21,3 mm, ce qui est trop fin pour soutenir notre dalle de toit en béton. Heureusement, comme tout est paramétrique, il est facile de modifier le diamètre. Développez le nouvel objet structurel dans l'arborescence et vous trouverez son objet de profil, nommé CHS21.3x2.6\_. Modifiez son diamètre à 12 cm et son épaisseur à 8 mm. Nous avons maintenant une colonne suffisamment solide. Notez que vous pouvez spécifier les unités à la volée et passer de 0,8 cm à 8 mm sans problème. FreeCAD se charge de la conversion.

#### Ajouter une plaque de support

Nous avons besoin d'un moyen de fixer notre colonne métallique à la dalle de béton. Ajoutons donc une plaque à son sommet, qui peut être boulonnée à la dalle de béton. Cela illustrera comment vous pouvez facilement modifier les objets BIM et créer ceux très précis dont vous avez besoin.

Commençons par changer la hauteur de notre colonne de 250 cm à 249 cm, pour lui donner un espace pour une plaque de 1 cm d'épaisseur. Dessinez ensuite un rectangle de 20 cm x 20 cm, soit sur le plan du sol, soit en définissant le haut de la colonne comme plan de travail courant, comme nous l'avons appris à l'étape précédente. Utilisez l'outil **Déplacer**, avec les aimantations au milieu et au centre activés, si nécessaire, pour centrer le rectangle sur le centre de la colonne.

En utilisant à nouveau l'outil Dalle, créez un objet structurel à partir du rectangle, donnez-lui une hauteur de 1 cm et déplacez-le à une hauteur de 249 cm :

![](/images/BIM_Tutorial_26.jpg)

Ajoutons maintenant notre plaque à la colonne. Les objets BIM dans FreeCAD ont deux propriétés nommées **Additions** et **Subtractions** qui peuvent recevoir des objets qui doivent être réunis ou soustraits à/à partir d'eux. Pour ajouter la plaque à notre colonne, sélectionnez la plaque, puis, en appuyant sur **Ctrl**, sélectionnez la colonne et utilisez l'outil ![](/images/Arch_Add.png) **Ajouter** du menu **Modifier**. Notre plaque fait désormais partie de la colonne :

![](/images/BIM_Tutorial_27.jpg)

En partant de formes simples comme des "profils" et en ajoutant ou en soustrayant des objets, nous pouvons créer rapidement des objets BIM très complexes. Notez que les ajouts et soustractions d'un objet BIM donné peuvent facilement être modifiés en double-cliquant dessus dans l'arborescence et en utilisant les boutons Ajouter et Supprimer. Le même objet peut également être utilisé comme addition ou soustraction à plusieurs autres objets.

![](/images/BIM_Tutorial_28.jpg)

**Tutorial steps**

*Créer une colonne tubulaire CHS*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "CHS" in o.Label]) == 1)

*Ajouter une plaque de 20 cm x 20 cm à la colonne*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "Shape" in o.PropertiesList and (FreeCAD.Units.Quantity("300 cm^3") < o.Shape.Volume < FreeCAD.Units.Quantity("500 cm^3"))]) == 1)

### Ajouter une porte

Comme les colonnes et les poutres, les portes et les fenêtres sont créées à partir du même objet [Fenêtre](/Arch_Window/fr "Arch Window/fr") dans FreeCAD. Seul leur type IFC change. Ils peuvent être indépendants ou, si un objet est sélectionné lors de l'exécution de l'outil, insérés dans un autre objet BIM, auquel cas ils créeront automatiquement un trou à travers celui-ci.

Insérons une porte en verre de 80 cm x 210 cm dans l'un de nos murs. Commencez par placer le plan de travail sur une face d'un mur, ce qui facilitera le positionnement précis de notre porte :

![](/images/BIM_Tutorial_29.jpg)

Ensuite, avec le mur sélectionné, sélectionnez **Porte** dans le menu **BIM**. Sélectionnez le préréglage **Glass door** et réglez la **Largeur** à 80 cm et la **Hauteur** à 210 cm. Vous pouvez mettre d'autres valeurs :

![](/images/BIM_Tutorial_30.jpg)

Cliquez sur un point de la base du mur où vous souhaitez placer la fenêtre. Cela peut être difficile, car les lignes de la grille ne correspondent pas nécessairement aux arêtes du mur. Appuyez sur la touche **Q** pendant que vous avez une aimantation active à une intersection de la grille, puis appuyez à nouveau avec une aimantation active sur le bas du mur. FreeCAD créera un nouveau point d'aimantation à l'intersection de leur axe horizontal/vertical. Utilisez ceci pour trouver un point approprié :

![](/images/BIM_Tutorial_31.jpg)

Si votre porte n'a pas été placée correctement, essayez l'outil **Déplacer** pour la déplacer dans sa position correcte. Sinon, utilisez l'annulation ou supprimez-le de l'arborescence du modèle et réessayez.

Lorsque tout est fait, vous devriez obtenir une porte correctement insérée dans son mur :

![](/images/BIM_Tutorial_32.jpg)

**Tutorial steps**

*Créer une porte vitrée*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "Window" in o.Name]) == 1)

### Organiser votre modèle

Nous avons maintenant dans notre modèle une collection croissante d'objets BIM. Il est temps de ranger les choses. La création de modèles bien organisés, facilement compréhensibles par les autres, est une partie très importante de la construction de modèles BIM de qualité.

Une première habitude très simple et très bonne à prendre est de donner des **noms** corrects et significatifs à nos objets, afin que nous puissions les identifier facilement dans l'arborescence par la suite. Pour renommer un objet, cliquez dessus avec le bouton droit de la souris dans l'arborescence et choisissez **Renommer**. Un modèle où les composants sont facilement identifiables par les autres est une grande partie de ce qui fait un bon modèle BIM.

Une autre opération intéressante à faire est le **regroupement**. Les groupes vous permettent d'organiser vos objets dans l'arborescence, comme des fichiers et des dossiers. Un objet ne peut appartenir qu'à un seul groupe. Les groupes sont créés en cliquant avec le bouton droit de la souris sur la racine du document ou sur tout autre groupe dans l'arborescence et en sélectionnant **Create group**. Vous pouvez ensuite faire glisser des objets dans et hors des groupes dans l'arborescence.

Une troisième façon d'organiser les choses consiste à utiliser des **calques**. Les calques sont indépendantes des groupes, vous pouvez utiliser les deux systèmes en même temps si vous le souhaitez. Comme les groupes, les calques vous permettent d'activer/désactiver facilement une série d'objets, mais contrairement aux groupes, ils ne peuvent pas être empilés les uns dans les autres. Ils vous permettent également de remplacer les paramètres visuels tels que la couleur et la largeur de ligne de leurs objets enfants. Les calques sont créés et gérés à l'aide de l'outil de gestion des calques qui se trouve dans le menu **Gestion → Gérer les calques**. Les objets sont ajoutés ou supprimés en les faisant glisser dans les calques de l'arborescence. Le **sélecteur de calques** de la barre d'outils principale vous permet de définir un calque courant. Ensuite, tout nouvel objet 2D ou BIM sera automatiquement placé dans ce calque.

Enfin, les applications BIM permettent généralement de regrouper des objets en **niveaux** (ou étages) et **bâtiments**. FreeCAD propose également ces outils dans le menu **3D/BIM**. Comme les poutres et les poteaux, les niveaux et les bâtiments utilisent le même type d'objet appelé [Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") avec un type IFC différent. Ils fonctionnent de la même manière que les groupes, une fois créés, vous pouvez faire glisser et déposer n'importe quel objet à l'intérieur et à l'extérieur. Les éléments de construction sont compatibles avec les groupes, vous pouvez donc y placer des groupes.

![](/images/BIM_Tutorial_36.jpg)

Les parties de bâtiment ont de nombreuses autres utilisations, reportez-vous à leur [documentation](/Arch_BuildingPart/fr "Arch BuildingPart/fr") pour en savoir plus.

Créez une partie de bâtiment maintenant en sélectionnant **Niveau** dans le menu **3D/BIM**. Assurez-vous que son type IFC est défini sur **Building Storey** et faites glisser tous nos autres objets racine BIM (pas besoin de le faire avec les objets inclus comme la porte ou la plaque de la colonne) dedans, c'est-à-dire nos deux murs, la dalle de toit et la colonne métallique.

Notez que, comme les parties de bâtiment sont des éléments de construction génériques, vous n'êtes pas obligé d'organiser votre modèle par niveaux dans FreeCAD. Vous pouvez choisir de grouper vos éléments différemment. Mais le format IFC prévoit que les éléments soient regroupés par niveau, donc si vous prévoyez d'utiliser ce format, il est préférable de considérer vos éléments de construction comme des niveaux.

**Tutorial steps**

*Créer un niveau*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "BuildingPart" in o.Name]) == 1)

*Ajoutez-y les quatre autres objets BIM racine*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "BuildingPart" in o.Name and (len(o.Group) == 4)]) == 1)

### Ajouter des plans de coupe

L'une des opérations les plus courantes effectuées sur un modèle BIM consiste à en extraire des dessins 2D, tels que des plans ou des élévations. Il existe plusieurs façons de procéder dans FreeCAD, en fonction du résultat que vous souhaitez obtenir. En fait, vous avez deux possibilités :

* Produire le résultat 2D à l'intérieur de l'espace 3D. Ceci est utile si vous souhaitez le retravailler, le construire ou mieux contrôler la façon dont il est exporté vers des formats tels que [DXF](/Draft_DXF/fr "Draft DXF/fr") ou [DWG](/FreeCAD_and_DWG_Import/fr "FreeCAD and DWG Import/fr").
* Créer des vues 2D sur une [TechDraw feuille](/TechDraw_Workbench/fr "TechDraw Workbench/fr") qui conviennent mieux à l'impression ou à l'exportation au format PDF.

Dans les deux cas, cela commence par le placement d'un [plan de coupe](/Arch_SectionPlane/fr "Arch SectionPlane/fr") dans votre modèle :

![](/images/BIM_Tutorial_37.jpg)

1. Sélectionnez l'objet Level qui contient vos objets créés à la dernière étape
2. Ajoutez un plan de coupe à partir du menu **Annotation → Plan de coupe**

Les plans de coupe ne traversent pas tout le modèle, mais seulement les objets dans leur propriété **Objects**. Vous pouvez sélectionner le plan de coupe pour vérifier et modifier le contenu de cette propriété à tout moment.

Par défaut, le nouveau plan de coupe sera placé au milieu de l'objet sélectionné ou de son contenu, et regardera vers le bas, comme pour créer une vue de plan d'étage. Mais le plan de coupe est un objet comme un autre et peut être déplacé et tourné pour faire ce dont vous avez besoin. Placez-le horizontalement pour créer une vue en plan, verticalement à l'intérieur de votre modèle pour créer une coupe ou à l'extérieur du modèle pour créer une élévation.

**Tutorial steps**

*Sélectionner le principal Building Part*

bool(len([o for o in FreeCADGui.Selection.getSelection() if "BuildingPart" in o.Name]) == 1)

*Créer un plan de coupe*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "Section" in o.Name and (len(o.Objects) == 1) and ("BuildingPart" in o.Objects[0].Name)]) == 1)

### Extraire des vues 2D sous forme de géométrie

Une fois votre plan de coupe en place, nous pouvons créer une géométrie 2D à partir de ce qu'il voit à l'aide de l'outil [Projection 2D](/BIM_Shape2DView/fr "BIM Shape2DView/fr") :

![](/images/BIM_Tutorial_38.jpg)

1. Sélectionnez le plan de coupe
2. Créez une vue de forme 2D en utilisant **Annotation → Vue basée sur la forme**
3. Notre objet vue est caché sous les murs. Masquez le niveau et le plan de coupe en les sélectionnant tous deux dans l'arborescence et en appuyant sur la barre d'espacement, afin que nous puissions mieux voir notre résultat :

![](/images/BIM_Tutorial_39.jpg)

La vue 2D que nous avons créée est un objet 2D tout-en-un et sera située sur le plan du sol (0,0) dans le modèle. Il peut être déplacé et sera recalculé si le modèle change.

Pour créer des lignes plus épaisses pour les zones coupées, vous pouvez créer une autre vue Shape 2D, et définir sa propriété **Projection Mode** à "Cutlines" ou "Cutfaces", et sa propriété **In Place** à "False". Vous aurez alors deux objets, un pour les lignes vues et un pour les lignes coupées, pour lesquels vous pouvez donner des épaisseurs de lignes différentes.

**Tutorial steps**

*Sélectionner le pla de section*

bool(len([o for o in FreeCADGui.Selection.getSelection() if "Section" in o.Name]) == 1)

*Créer une vue Forme 2D*

bool(len([o for o in FreeCAD.ActiveDocument.Objects if "Shape2DView" in o.Name]) == 1)

### Annoter et exporter aux formats CAO 2D

Vous pouvez placer des [textes](/Draft_Text/fr "Draft Text/fr"), des [étiquettes](/Draft_Label/fr "Draft Label/fr") (texte avec ligne et flèche), des [dimensions](/Draft_Dimension/fr "Draft Dimension/fr") tout ce qui se trouve dans l'espace de modélisation : soit directement sur le modèle 3D soit sur la vue 2D que nous avons créée à l'étape ci-dessus. Le choix vous appartient, en fonction de ce que vous souhaitez réaliser. Si vous laissez la vue 2D exactement sous le modèle 3D, vous souhaiterez peut-être également effectuer les deux en une seule fois.

![](/images/BIM_Tutorial_34.jpg)

Les annotations (textes, étiquettes, dimensions) seront placées sur le **plan de travail** courant. Assurez-vous de placer votre plan de travail là où vous voulez vos annotations. Vous pouvez ainsi placer des annotations dans n'importe quel plan de l'espace 3D : horizontalement ou verticalement. Vous pouvez également les déplacer ou les faire pivoter après leur création.

Plaçons une cote horizontale entre les extrémités de nos deux murs :

![](/images/BIM_Tutorial_40.jpg)

1. Réglez le **plan de travail** sur la position **Dessus**
2. Orientez votre vue pour pouvoir voir la base des deux murs
3. Choisissez le menu **Annotations** → ![](/images/Draft_Dimension.png) [Dimension](/Draft_Dimension/fr "Draft Dimension/fr")
4. Cliquez sur un premier point à l'extrémité du mur gauche
5. Appuyez sur **Maj** pour contraindre la cote verticalement ou horizontalement
6. Cliquez sur un deuxième point à l'extrémité du mur droit
7. Cliquez sur un troisième point pour indiquer où placer la ligne de cote

Les [dimensions](/Draft_Dimension/fr "Draft Dimension/fr") disposent de nombreux paramètres pour modifier leur aspect ainsi que la taille et le type du texte et de la flèche. Vous pouvez définir vos paramètres par défaut préférés dans le menu **Édition → Préférences → Draft → Textes et dimensions**.

Ajoutons maintenant un texte :

![](/images/BIM_Tutorial_41.jpg)

1. Choisissez le menu **Annotation** → ![](/images/Draft_Text.png) [Texte](/Draft_Text/fr "Draft Text/fr")
2. Cliquez sur un emplacement dans la vue 3D pour placer le texte
3. Écrivez le texte que vous souhaitez, par exemple **Pavillon** puis cliquez sur le bouton **Créer un texte** ou appuyez deux fois sur Entrée.

Une bonne idée est de créer des **Groupes** pour les différents ensembles d'annotations (plan, coupe, différentes échelles, etc...) :

1. Créez un groupe en faisant un clic droit sur la racine du document et sélectionnez **Créer un groupe**, renommez-le en "Annotations"
2. Sélectionnez les annotations que nous avons créées ci-dessus dans l'arborescence et faites un glisser/déposer dans le groupe

#### Exporter en DXF

Les objets 2D tels que les lignes, les cercles ou les vues 2D comme nous l'avons créé ci-dessus ou les annotations sont très adaptés pour être exportés vers des formats de CAO 2D traditionnels tels que [DXF ou DWG](/Draft_DXF/fr "Draft DXF/fr"). Le format DWG nécessite l'installation d'un logiciel supplémentaire sur votre système, vérifiez les [instructions](/Draft_DXF/fr "Draft DXF/fr") pour le faire si nécessaire.

Essayons d'exporter notre travail 2D en DXF :

1. Sélectionnez la vue 2D, la cote et le texte
2. Sélectionnez le menu **Fichier → Exporter**, choisissez le format **Autodesk DXF**, un nom de fichier et appuyez sur **Exporter**

Si vous n'utilisez aucun programme de CAO 2D, il existe plusieurs applications gratuites et open-source qui peuvent ouvrir des fichiers DXF (en dehors de FreeCAD lui-même, bien sûr !), par exemple [LibreCAD](https://librecad.org/) et [QCAD CE](https://qcad.org/).

![](/images/BIM_Tutorial_42.jpg)

**Tutorial steps**

*Créer une dimension*

bool(len([obj for obj in FreeCAD.ActiveDocument.Objects if "Dimension" in obj.Name]))

*Créer un texte*

bool(len([obj for obj in FreeCAD.ActiveDocument.Objects if "Text" in obj.Name]))

### Créer une géométrie 2D sur une feuille imprimable

Les feuilles imprimables sont créées et gérées avec l'[atelier TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr"). Créons une nouvelle feuille et plaçons-y une vue de notre modèle :

1. Basculez vers l'**atelier TechDraw**
2. Créez une nouvelle feuille vide en utilisant le modèle par défaut dans le menu **TechDraw → Feuille → Insérer une page standard**
3. Sélectionnez le plan de coupe et créez une vue sur la page en utilisant **TechDraw → Vues des autres ateliers → Insérer un objet de l'atelier BIM**
4. Modifiez la propriété **Scale** de votre vue Arch.

...et ainsi de suite

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Exporter un fichier IFC

L'[IFC, ou Industry Foundation Classes](https://fr.wikipedia.org/wiki/Industry_Foundation_Classes), est un protocole et un format de fichier pour l'échange de modèles BIM entre applications. En enregistrant votre modèle en tant que fichier IFC, vous pourrez l'ouvrir dans la plupart ou toutes les autres applications BIM open source ou propriétaires.

Les opérations d'importation/exportation de fichiers IFC dans FreeCAD sont effectuées par un logiciel externe appelé [IfcOpenShell](http://www.ifcopenshell.org/). Lisez la page [Arch IFC](/Arch_IFC/fr "Arch IFC/fr") pour en savoir plus sur la façon de l'installer.

Une fois IfcOpenShell installé, exporter votre modèle sous forme de fichier IFC est aussi simple que de sélectionner les objets que vous souhaitez exporter, ou simplement le conteneur supérieur (groupe ou partie de construction) qui contient tous les autres objets que vous souhaitez exporter, et utilisez le menu **Fichier → Exporter** et choisissez le format de fichier IFC.

Enfin, une fois que vous avez exporté un fichier IFC, c'est toujours une bonne idée de l'inspecter avant de l'envoyer à d'autres personnes, pour vous assurer que le modèle est beau et qu'aucun objet ne manque. Il existe de nombreuses applications de visualisation IFC gratuites disponibles sur Internet pour de nombreuses plates-formes. Un bon visualiseur open-source qui fonctionne sur toutes les plates-formes est [IFC++](http://ifcquery.com/). Si vous souhaitez utiliser le fichier IFC pour des modifications ultérieures, [Bonsai](https://bonsaibim.org) peut vous être utile.

Pour tester la structure et la validité de votre modèle pour l'exportation IFC, utilisez l'outil **Gestion → Contrôler en amont...**. Nous y reviendrons dans la section suivante.

**Tutorial steps**

*Ouvrez l'outil de contrôle en amont BIM et exécutez tous les tests*

True if (hasattr(FreeCADGui,"BIMPreflightDone") and (FreeCADGui.BIMPreflightDone == True)) else False

### Gérer les propriétés BIM

Une grande partie de ce qui fait un bon modèle BIM sont les propriétés non géométriques que vous pouvez donner à vos objets, telles que le type, le matériau ou les propriétés spécifiques à un certain type. Par exemple, un mur peut être marqué comme porteur ou non, ou comme extérieur ou intérieur. L'[format IFC](https://fr.wikipedia.org/wiki/Industry_Foundation_Classes) est très riche à cet égard. La quantité de spécifications et de propriétés que vous souhaitez donner à vos objets dépend principalement de vos besoins et de la manière dont vous travaillez avec les autres et de ce qu'ils attendent de votre modèle BIM.

Une chose est importante à garder à l'esprit: tous les objets BIM/Arch dans FreeCAD prennent en charge l'ensemble complet des propriétés IFC. D'autres objets FreeCAD, tels que ceux modélisés avec d'autres ateliers, seront également exportés vers IFC, mais vous ne pouvez modifier aucune de leurs propriétés IFC. Vous pouvez cependant convertir n'importe quel objet FreeCAD en objet BIM en sélectionnant l'objet et en utilisant **3D/BIM → Créer un composant**.

Les principales informations que vous pouvez donner à vos objets sont :

#### Nom et description

Cela semble évident, mais le moyen le plus simple de rendre votre modèle plus compréhensible pour les autres est de nommer correctement chacun de vos objets et, le cas échéant, d'ajouter une description. Cela se fait simplement en sélectionnant un objet et en appuyant sur **F2** ou en changeant sa propriété **Label** pour le renommer. La description se trouvera parmi les propriétés de l'objet.

#### Le type BIM/IFC

C'est l'information la plus fondamentale. Dans FreeCAD, un objet créé avec l'outil de mur aura son type IFC défini sur "Wall" par défaut. Mais vous pouvez changer cela à tout moment. Vous pouvez donc utiliser l'outil de mur pour modéliser une poutre par exemple. Il vous suffit de changer son type IFC après l'avoir créé. Pour modifier le type IFC d'un objet, sélectionnez-le, recherchez son **IFC Type** dans ses propriétés et passez à un autre type dans la liste déroulante.

Vous pouvez également gérer en bloc les noms, les types et les matériaux de plusieurs objets à la fois en utilisant le gestionnaire d'éléments IFC qui se trouve sous le menu **Gestion → Gérer les éléments IFC...**.

#### Matériaux

Chaque objet d'une construction a un matériau. Il est donc logique de donner à chaque objet de votre modèle un matériau approprié, tel que du béton ou du bois. Pour attribuer un matériau à un objet, sélectionnez l'objet, et utilisez le [gestionnaire de matériaux](/Arch_SetMaterial/fr "Arch SetMaterial/fr") du menu **Gestion → Gérer les matériaux**.

#### Propriétés

Chaque objet BIM peut également recevoir des propriétés supplémentaires, par exemple pour indiquer qu'un mur est porteur ou non. IFC vous permet d'ajouter des propriétés personnalisées à n'importe quoi, mais la plupart des types tels que Wall ou Beam ont également des ensembles de propriétés spéciaux et prédéfinis, généralement appelés Pset\_WallCommon ou Pset\_BeamCommon. Vous pouvez choisir d'ajouter ces ensembles à vos objets, modifier la valeur des propriétés contenues dans l'ensemble ou ajouter vos propriétés personnalisées. La gestion des propriétés IFC d'un objet sélectionné ou la modification en bloc des propriétés de plusieurs objets à la fois se fait à l'aide du gestionnaire de propriétés sous le menu **Gestion → Gérer les propriétés IFC...**.

#### Quantités

Les quantités telles que la longueur ou la largeur ou la hauteur d'un mur peuvent également être spécifiquement écrites dans un fichier IFC. Elles ne sont pas liés à la géométrie de l'objet, donc lorsque vous rencontrez de telles quantités dans un fichier IFC, il n'y a aucune garantie qu'elles reflètent la géométrie réelle de l'objet. Cependant, ces grandeurs permettent aux applications qui ne sont pas capables de traiter la géométrie, comme les tableurs, de connaître les principales dimensions des objets. Vous pouvez vérifier quelles quantités seront exportées vers IFC en utilisant le gestionnaire de quantités situé dans le menu **Gestion → Gérer les quantités IFC...**.

#### Outil de contrôle en amont de BIM

Le format IFC a de nombreuses particularités et parfois l'application avec laquelle vous ouvrirez votre fichier IFC ou la personne qui recevra votre fichier IFC aura des exigences supplémentaires. Devenir un modélisateur BIM courant signifie souvent se familiariser avec toutes ces particularités et ce qui doit être ajouté ou spécifié à votre modèle BIM. L'atelier BIM de FreeCAD fournit un outil [BIM Contrôle en amont](/BIM_Preflight/fr "BIM Preflight/fr") qui vous permet de vérifier votre modèle pour plusieurs de ces particularités et exigences les plus courantes, et vous aide à décider ce qu'il faut inclure ou non dans votre modèle.

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Explorer d'autres outils BIM et d'autres ateliers

Prenez un moment pour explorer les autres outils BIM disponibles. N'oubliez pas que certains ne sont toujours pas finalisés et qu'ils ne feront peut-être pas tout ce que vous attendez d'eux. Utilisez le bouton "Qu'est-ce que c'est?" du menu **Aide** pour ouvrir la page d'aide de n'importe quel outil. Le [forum FreeCAD](https://forum.freecadweb.org) est également toujours un bon endroit pour rechercher ou demander lorsque vous rencontrez un problème que vous ne savez pas résoudre.

FreeCAD est une grande famille d'ateliers et les outils d'autres ateliers sont souvent utiles. Comme nous l'avons vu ci-dessus, presque tous les objets créés à partir d'autres ateliers peuvent être transformés en un objet BIM valide, en utilisant simplement l'outil **3D/BIM → Outils 3D génériques → Composant** et en leurs donnant le type IFC correct.

Davantages de tutoriels sur BIM et les autres ateliers dans la section [Tutoriels](/Tutorials/fr "Tutorials/fr") de la [documentation FreeCAD](https://wiki.freecadweb.org) et une série vidéo complète de [tutoriels BIM](https://www.youtube.com/playlist?list=PLmKdGVtV5Vnt2cj4IZIv9FM39QHaE1ZaU) sur youtube.

**Tutorial steps**

Aucune action à effectuer pour cette étape

### Aider FreeCAD à devenir un meilleur outil !

FreeCAD est un logiciel libre développé par une communauté enthousiaste d'utilisateurs, dont certains développent le code, et beaucoup d'autres qui contribuent d'une manière ou d'une autre à améliorer le logiciel en écrivant de la documentation, en trouvant et en signalant des bogues, en soumettant des idées, en écrivant des tutoriels, et bien d'autres choses encore. Plus nous sommes nombreux et actifs, plus le logiciel est développé rapidement. Pourquoi ne pas nous rejoindre ? Un bon point de départ est la [section BIM sur le forum FreeCAD](https://forum.freecad.org/viewforum.php?f=23). Au plaisir de vous y retrouver !

**Tutorial steps**

Aucune action à effectuer pour cette étape

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_ingame_tutorial/fr&oldid=1551878>"