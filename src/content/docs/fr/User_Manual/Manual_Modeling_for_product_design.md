---
title: Modélisation pour la conception de produits
---

L'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") dans FreeCAD est un outil polyvalent pour la création de modèles 3D paramétriques, particulièrement utile pour les conceptions de corps solides. Il vous permet de commencer par des esquisses en 2D, qui peuvent ensuite être transformés en objets 3D à l'aide d'opérations telles que des ![](/images/PartDesign_Pad.svg) [protrusions](/PartDesign_Pad/fr "PartDesign Pad/fr"), des ![](/images/PartDesign_Revolution.svg) [révolutions](/PartDesign_Revolution/fr "PartDesign Revolution/fr") et des ![](/images/PartDesign_Pocket.svg) [cavités](/PartDesign_Pocket/fr "PartDesign Pocket/fr"). Cet atelier est essentiel pour la conception de pièces nécessitant précision et contrôle paramétrique, car les modifications apportées aux esquisses ou aux fonctions mettent automatiquement à jour l'ensemble du modèle.

L'un des principaux avantages de l'atelier PartDesign est qu'il permet de créer des pièces pour l'impression 3D. Les imprimantes 3D ayant besoin de modèles solides et étanches, l'atelier PartDesign veille à ce que toutes les fonctions restent dans un seul corps cohérent. Cela permet d'éliminer les problèmes courants tels que les espaces ou le chevauchement des faces, qui peuvent poser des problèmes lors du découpage en tranches pour l'impression 3D. Une fois votre conception terminée, vous pouvez facilement exporter le modèle sous forme de fichier STL, un format largement pris en charge par les imprimantes 3D. L'atelier PartDesign est donc l'option idéale pour créer des objets imprimables de haute qualité, qu'il s'agisse de prototypage, de conception de pièces fonctionnelles ou de création de modèles complexes pour l'impression 3D.

Pour illustrer comment fonctionne l’atelier PartDesign, créons ce morceau bien connu de [Lego](https://fr.wikipedia.org/wiki/Lego). Vous pouvez également vous référer à [PartDesign Tutoriel d'introduction V0.19](/Basic_Part_Design_Tutorial_019/fr "Basic Part Design Tutorial 019/fr") si vous souhaitez essayer un autre objet.

![](/images/FreeCAD_Exercise1_RedBrick.png)

Nous allons maintenant utiliser exclusivement les outils des ateliers ([Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr")) et [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Étant donné que tous les outils de l’atelier Sketcher sont également inclus dans l’atelier PartDesign, nous pouvons rester dans PartDesign et nous n'aurons pas à basculer entre les deux.

Dans l'atelier PartDesign de FreeCAD, les objets sont principalement construits à partir d'esquisses, qui sont des profils 2D composés de segments linéaires tels que des lignes, des arcs ou des ellipses, ainsi que d'une série de contraintes. Ces contraintes dictent des règles géométriques spécifiques pour l'esquisse et peuvent être appliquées aux segments eux-mêmes et à leurs points clés, tels que les points d'extrémité ou les points centraux. Par exemple, vous pouvez utiliser une contrainte verticale sur une ligne pour la maintenir parfaitement verticale, ou une contrainte de position (verrouillage) pour fixer un point d'extrémité et l'empêcher de bouger.

Une esquisse est considérée comme entièrement contrainte lorsque chaque point est verrouillé en position par le nombre approprié de contraintes, ce qui signifie qu'aucune partie de l'esquisse ne peut être déplacée librement. L'idéal est d'obtenir une esquisse entièrement contrainte, car cela garantit que la conception est bien définie et stable, ce qui permet d'apporter des modifications prévisibles à un stade ultérieur du processus de conception. D'un autre côté, si l'on ajoute plus de contraintes que nécessaire (on parle alors d'esquisse surcontrainte), cela peut entraîner des conflits dans la géométrie. FreeCAD vous signalera toute contrainte redondante ou conflictuelle, car une contrainte excessive peut entraîner des problèmes lors d'opérations ultérieures telles que des extrusions ou des coupes.

L'ajout des bonnes contraintes est essentiel pour créer un modèle paramétrique stable. En équilibrant soigneusement les contraintes, vous pouvez facilement modifier ou ajuster les esquisses sans casser la géométrie. Ce contrôle fait de l'atelier PartDesign un outil puissant pour une modélisation paramétrique précise, en particulier pour des tâches telles que l'impression 3D, où le maintien de relations géométriques correctes est essentiel pour produire des pièces précises et fonctionnelles.

Les esquisses disposent d’un mode d'édition, où leur géométrie et leurs contraintes peuvent être modifiées. Quand vous avez terminé l'édition, et quittez le mode d'édition, les esquisses se comportent comme n'importe quel autre objet FreeCAD, et peuvent être utilisées comme éléments de construction pour tous les outils de conception de pièces, mais aussi dans d'autres ateliers, tels que l'[atelier Part](/Part_Workbench/fr "Part Workbench/fr") ou l'[atelier Arch](/Arch_Workbench/fr "Arch Workbench/fr"). L’[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") dispose également d'un outil qui convertit les éléments Draft en esquisses, et vice versa.

- Passez à l'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
- Cliquez sur le bouton ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") et choisissez le plan **XY**, qui est le plan de base. L'esquisse sera créée et passera immédiatement en mode édition, et la vue sera tournée pour regarder votre esquisse de manière orthogonale.
- Dessinez un rectangle en sélectionnant l'outil ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") et en cliquant sur deux points d'angle. Vous pouvez placer les deux points n'importe où, mais ne cliquez pas sur l'un des axes. L'emplacement correct des points sera défini dans l'une des étapes suivantes.
- Vous remarquerez que quelques contraintes ont été automatiquement ajoutées à notre rectangle : les segments verticaux ont reçu une contrainte verticale, les segments horizontaux une contrainte horizontale, et chaque coin une contrainte point sur point qui colle les segments ensemble. Vous pouvez essayer de déplacer le rectangle en faisant glisser ses lignes avec la souris, toute la géométrie continuera d'obéir aux contraintes.
- Pour l'instant, notre esquisse est sous-contrainte, car il lui manque quatre contraintes : sa longueur, sa largeur et ses positions X et Y. Cette absence de contraintes vous permet d'agir librement sur la géométrie. Cette absence de contraintes vous permet de déplacer librement l'esquisse le long des axes X et Y. Tant que ces contraintes ne sont pas définies, la géométrie n'est pas totalement verrouillée, ce qui signifie que la taille et la position de l'esquisse restent ajustables. Pour définir complètement l'esquisse, nous devons appliquer des contraintes qui spécifient

![](/images/FreeCAD_Exercise1_re_UC.png)

- Maintenant, ajoutons trois autres contraintes:
  - Activez l'outil ![](/images/Sketcher_Dimension.svg) [Contrainte de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr"), sélectionnez l'un des segments verticaux et réglez sa longueur à 23,7 mm.
  - L'outil étant toujours actif, sélectionnez l'un des segments horizontaux et réglez sa longueur à 47,7 mm.
  - Activez l'outil ![](/images/Sketcher_ConstrainSymmetric.svg) [contrainte de symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr"), sélectionnez le point d'angle supérieur gauche du rectangle, puis le point d'angle inférieur droit, et enfin le point d'origine (le point où les axes rouge et vert se croisent). Cela permet de s'assurer que le rectangle reste centré sur le point d'origine, ce qui limite son amplitude de mouvement et assure une symétrie entre les deux axes.
- Vous remarquerez maintenant que notre rectangle est devenu vert, ce qui indique qu'il est entièrement contraint. Cela signifie que chaque aspect de l'esquisse, y compris sa position, sa taille et sa forme, est maintenant entièrement défini et verrouillé. Il est généralement conseillé de s'assurer que les esquisses sont entièrement contraintes, car cela permet de garder le contrôle de la conception et d'éviter les modifications involontaires au cours des opérations ultérieures.

![](/images/FreeCAD_Exercise1_re.png)

- Notre esquisse de base est maintenant prête, nous pouvons quitter le mode d'édition en appuyant sur le bouton **Fermer** en haut du panneau de tâches, ou simplement en appuyant sur la touche **Échap**. Si nécessaire, plus tard, nous pouvons réactiver le mode d'édition à tout moment en double-cliquant sur le nom de l'esquisse dans l’arbre de construction ou en cliquant avec le bouton droit de la souris et en appuyant sur l'option éditer l'esquisse.
- Extrudons l’esquisse en utilisant l'outil Protrusion (![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr")) et donnons-lui une dimension de 14,4 mm. Les autres options peuvent être laissées à leurs valeurs par défaut:

![](/images/FreeCAD_Exercise1_padding.png)

- L'outil **Protrusion** est similaire à l'outil ![](/images/Part_Extrude.svg) [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr") de l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") mais avec une différence essentielle : une extrusion est toujours liée à son esquisse et ne peut pas être déplacée de manière indépendante. Pour repositionner l'extrusion, vous devez déplacer l'esquisse de base, en veillant à ce que l'extrusion reste solidement attachée. L'extrusion fera toujours partie du même corps, préservant ainsi la continuité de votre conception, ce qui est particulièrement utile pour les pièces complexes dont les fonctions doivent être construites progressivement et alignées les unes avec les autres. Cela ajoute de la stabilité à votre conception, en particulier lorsque vous voulez vous assurer que tout reste correctement aligné et fixé en place.

- Créons les huit cylindres sur la face supérieure du bloc. Tout d'abord, sélectionnez la face supérieure du bloc, puis cliquez sur l'option ![](/images/Std_AlignToSelection.svg) [Aligner sur la sélection](/Std_AlignToSelection/fr "Std AlignToSelection/fr") pour aligner la vue sur cette face. Vous obtiendrez ainsi une vue claire et directe, ce qui facilitera le placement précis des cylindres.
- Cliquez sur le bouton ![](/images/PartDesign_NewSketch.svg). [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). La nouvelle esquisse sera créée directement sur la face supérieure.
- Créez deux ![](/images/Sketcher_Circle.svg) [cercles](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") à l'endroit de votre choix.
- Choisissez le centre des deux cercles et l'axe des x (ligne rouge). Puis appuyez sur le bouton ![](/images/Sketcher_ConstrainSymmetric.svg) [contrainte de symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr").
- Choisissez les deux cercles et appliquez une ![](/images/Sketcher_ConstrainEqual.svg) [contrainte d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
- En utilisant l'outil ![](/images/Sketcher_Dimension.svg) [Contrainte de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr"), définissez le diamètre d'un cercle à 7,2 mm. Comme nous avons déjà contraint les deux cercles à avoir le même diamètre, il n'est pas nécessaire de définir le diamètre du deuxième cercle : il s'ajustera automatiquement au premier.
- Nous devons maintenant positionner les cercles par rapport aux arêtes de la face. Cependant, vous remarquerez peut-être que nous ne pouvons pas sélectionner directement des points ou des arêtes. Pour résoudre ce problème, nous pouvons utiliser l'outil ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr") pour référencer les arêtes de la face, ce qui nous permet de contraindre avec précision les cercles par rapport à la face. Appuyez sur le bouton et sélectionnez l'arête gauche de la face. Cette arête sera maintenant surlignée en rouge et vous pourrez créer des points de référence à partir de celle-ci, ce qui vous permettra d'appliquer des contraintes pour positionner précisément les cercles par rapport aux limites de la face.
- Vous pouvez maintenant régler les distances X et Y de l'un des cercles sur 6 mm. Comme les cercles sont contraints l'un à l'autre, le deuxième cercle s'ajustera en conséquence.

![](/images/FreeCAD_Exercise1_TopFaceSketch.png)

- Notez comment, une fois de plus, lorsque vous verrouillez la position et la dimension de tous les éléments de votre esquisse, celle-ci devient complètement contrainte. Cela vous assure du résultat pour la suite. Vous pourriez modifier la première esquisse maintenant, tout ce que nous avons fait ensuite serait conservé.
- Quittez le mode d'édition, sélectionnez cette nouvelle esquisse et créez une protrusion (![](/images/PartDesign_Pad.svg) [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr")) de 2.7mm :

![](/images/FreeCAD_Exercise1_topCylPad.png)

- Comme nous avons utilisé la face supérieure de notre bloc de base comme base de cette nouvelle esquisse, toute opération de conception de pièce qui lui est appliquée sera correctement construite sur la forme de base. Les deux cercles ne sont pas des objets indépendants ; ils seront extrudés directement à partir du bloc existant. Il s'agit là du principal avantage du travail dans l'atelier PartDesign : tant que vous vous assurez que chaque étape est construite sur la précédente, vous construisez effectivement un objet solide unique et cohésif.
- Nous pouvons maintenant dupliquer nos deux points quatre fois. Sélectionnez la dernière protrusion que nous venons de créer.
- Appuyez sur la touche ![](/images/PartDesign_LinearPattern.svg) [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr").
- Donnez-lui une longueur de 36 mm (qui est la longueur totale dans laquelle nous voulons que nos copies tiennent), dans la direction de l'« axe horizontal de l'esquisse », et faites-en 4 occurrences :

![](/images/FreeCAD_Exercise1_topPattern.png)

- Nous allons maintenant sculpter l'intérieur du bloc, en utilisant l'outil ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr"), qui est la version PartDesign de [Part Soustraction](/Part_Cut/fr "Part Cut/fr"). Pour créer une cavité, nous allons créer une esquisse sur la face inférieure de notre bloc, qui sera utilisée pour enlever une partie du bloc.
- La face inférieure étant sélectionnée, appuyez sur la touche ![](/images/PartDesign_NewSketch.svg) [Créer une esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr").
- Dessinez un ![](/images/Sketcher_CreateRectangle.svg) [rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") sur la face.
- Appliquez une ![](/images/Sketcher_ConstrainSymmetric.svg) [contrainte de symétrie](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") en sélectionnant le point d'angle supérieur gauche du rectangle, puis le point d'origine (le point où les axes rouge et vert se croisent), et le point d'angle inférieur droit.
- En utilisant la [Image:Sketcher\_External.svg|16px]] [géométrie externe](/Sketcher_External/fr "Sketcher External/fr"), choisissez l'arête gauche de la face inférieure. Notez à nouveau qu'elle sera surlignée en rouge.
- Définissez la distance horizontale et verticale du rectangle par rapport au point supérieur droit à 1,8 en utilisant la ![](/images/Sketcher_Dimension.svg) [contrainte de dimension](/Sketcher_Dimension/fr "Sketcher Dimension/fr").

![](/images/FreeCAD_Exercise1_BottomRec.png)

- Créez trois ![](/images/Sketcher_Circle.svg) [cercles](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") en s'assurant que leur centre est situé sur l'axe X (ligne rouge).
- En choisissant les trois cercles, appliquez une ![](/images/Sketcher_ConstrainEqual.svg) [contrainte d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
- Définissez le diamètre d'un cercle à 9,765 mm.
- Définissez la distance centrale du cercle gauche par rapport à l'arête inférieure du rectangle que nous avons créé précédemment à 10,2 mm.
- Réglez la distance entre les cercles de gauche et du milieu à 12 mm. Répétez cette étape pour définir la même distance de 12 mm entre les cercles du milieu et de droite.

![](/images/FreeCAD_Exercise1_BottomOuterCirc.png)

- Nous avons presque terminé.
- Créer trois autres ![](/images/Sketcher_Circle.svg) [cercles](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") en veillant à ce que chaque nouveau cercle soit concentrique à l'un des cercles dessinés précédemment. Vous pouvez également placer les nouveaux cercles n'importe où dans l'esquisse et utiliser la fonction ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") pour aligner leurs centres sur les centres des cercles existants.
- En choisissant les trois cercles, appliquez une ![](/images/Sketcher_ConstrainEqual.svg) [contrainte d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
- Définissez le diamètre d'un cercle à 7,2 mm.
- Vous pouvez maintenant quitter l'esquisse.

![](/images/FreeCAD_Exercise1_bottomSketchCom.png)

- En choisissant le croquis terminé, utilisez l'outil ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") en réglant la longueur sur 12 mm.

![](/images/FreeCAD_Exercise1_BottomPad.png)

- Ça y est. Notre brique est prête. Si vous souhaitez changer sa couleur, vous pouvez le faire en allant dans l'onglet **Vue**.

![](/images/FreeCAD_Exercise1_redBrick2.png)

Vous remarquerez peut-être que l'historique de la modélisation dans l'arborescence est devenu très complet. Cette fonction est extrêmement précieuse, car elle nous permet de revoir et de modifier à tout moment n'importe quelle étape du processus de conception. Par exemple, adapter ce modèle pour créer une brique de 2x2 au lieu de 2x4 est un jeu d'enfant : quelques ajustements des dimensions et des occurrences du modèle suffisent. Cette même flexibilité nous permet de concevoir des pièces plus grandes et personnalisées qui ne font pas partie du jeu Lego original. La nature paramétrique de FreeCAD facilite la modification des modèles existants, ce qui nous permet d'adapter ou d'étendre la conception en fonction des besoins.

Mais nous pourrions aussi vouloir nous débarrasser de l’historique, par exemple si nous voulons modéliser un château avec cette brique, et ne voulons pas que cet historique soit répété 500 fois dans notre fichier.

Il existe deux façons simples de se débarrasser de l’historique, on utilise l'outil [Part Création de copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr") de l’[atelier Part](/Part_Workbench/fr "Part Workbench/fr"), qui créera une copie de notre pièce qui ne dépend plus de l'historique (vous pouvez supprimer l'historique complet après), l'autre façon est d'exporter la pièce dans un fichier STEP et de la réimporter.

**Téléchargements**

- Le modèle produit lors de cet exercice: <https://github.com/yorikvanhavre/FreeCADmanual/Blob/master/files/lego.FCStd>

**Lire plus d'informations**

- [L’atelier Sketcher](/Sketcher_Workbench "Sketcher Workbench")
- [L’atelier PartDesign](/PartDesign_Workbench "PartDesign Workbench")
- [L’atelier Assembly2](https://github.com/hamish2014/FreeCAD_assembly2)

Retrieved from "<http://wiki.freecad.org/index.php?title=Manual:Modeling_for_product_design/fr&oldid=1538778>"
