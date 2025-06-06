---
title: PartDesign Tutoriel pour créer une pièce simple
---
|  |
| --- |
| Tutoriel |
| Thème |
| Modélisation |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 1 heure |
| Auteurs |
| GlouGlou |
| Version de FreeCAD |
| 0.17 ou ultérieure |
| Fichiers exemples |
|  |
| Voir aussi |
| [Créer une simple pièce avec l'atelier Part](/Creating_a_simple_part_with_Part_WB/fr "Creating a simple part with Part WB/fr"), [Créer une simple pièce avec les ateliers Draft et Part](/Creating_a_simple_part_with_Draft_and_Part_WB/fr "Creating a simple part with Draft and Part WB/fr") |
|  |

![](/images/GGTuto1_Vue.PNG)

Ce tutoriel a pour but d'expliquer aux débutants découvrant Freecad, quelques fonctions de base à travers un exemple.
Après avoir découvert quelques notions de base dans la [Documentation pour utilisateurs](/User_hub/fr "User hub/fr"), vous pouvez maintenant dessiner pas à pas une première pièce.

**Nous allons voir dans ce tutoriel notamment :**

* Utiliser l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), tracer l'esquisse.
* Utiliser les fonctions Protrusion et Poche.
* Changer couleur et transparence.
* Déplacer manuellement la pièce.
* Afficher des cotes indicatives dans l'esquisse.
* Faire varier une ou plusieurs dimensions.
* Utiliser la fonction géométrie extérieure et utiliser un plan repère pour centrer le trou.

### Utiliser l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), tracer l'esquisse

Créez un nouveau document et basculez vers l'![](/images/Workbench_PartDesign.svg) **atelier PartDesign** à l'aide du [sélecteur d'atelier](/Getting_started/fr#Explorer_FreeCAD "Getting started/fr") (identifié 10 dans l'image liée) ou via le menu *Affichage → Atelier*. FreeCAD doit démarrer avec les icônes au dessus, la vue combinée à gauche et la vue 3D à droite.

**Créer un corps :**

Cliquez sur ![](/images/PartDesign_Body.svg) [Créer un corps](/PartDesign_Body/fr "PartDesign Body/fr"). ***Remarque:** ne confondez pas le Corps (Body), dont l'icône est bleue, avec le conteneur Pièce (Part), dont l'icône est jaune.* Dans l'onglet Modèle sous le panneau latéral de la vue combinée, un nouvel objet intitulé "Body" apparaît sous l'étiquette du document, qui est actuellement "Sans nom" car nous n'avons pas encore enregistré notre document. Le corps est un conteneur où sont rangées de façon séquentielle les fonctions de PartDesign pour former un solide unique. Il contient ses propres axes et plans de référence. Il sera surligné en bleu clair dans l’arborescence du modèle, ce qui signifie qu’il est actif, c’est-à-dire que nous pouvons modifier les éléments qu’il contient et y ajouter de nouveaux éléments. S'il n'est pas mis en surbrillance, double-cliquez dessus ou cliquez avec le bouton droit de la souris et sélectionnez *Activer/désactiver le corps* dans le menu contextuel. Devant l'étiquette Body, vous trouverez une icône bleue identique à celle ci-dessus et une flèche ou un signe plus, selon votre système d'exploitation. En cliquant sur la flèche ou le signe plus devant Body, son contenu se développe. À ce stade, il ne contient qu'un élément intitulé *Origin*. Devant cette *origine* se trouve également une flèche ou un signe plus. Cliquez dessus pour développer son contenu. Il révèle les axes et les plans de référence susmentionnés, comme indiqué dans l'image ci-dessous :

![](/images/PartDesign_Body_tree_Unnamed.png)

*Le corps actif nouvellement créé avec son contenu développé.*

L'élément *Origin* est grisé, ce qui indique que son contenu n'est pas visible dans la vue 3D. Vous pouvez rendre le contenu d'*Origin* visible dans la vue 3D en sélectionnant *Origin* et en appuyant sur la barre d'espace de votre clavier. *Origin* apparaîtra maintenant en caractères gras dans l'arborescence. Appuyez à nouveau sur la barre d'espace pour masquer son contenu dans la vue 3D. Cliquez à nouveau sur la flèche ou sur le signe plus situé devant *Origin* pour réduire son contenu dans l'arborescence Modèle.

Avant de continuer, profitons de l’occasion pour renommer le corps (Body).

**Renommer le corps :**

Dans l'arborescence, cliquez dessus avec le bouton droit. Sélectionnez Renommer et donnez un nom, par exemple "Body pièce1" puis valider.

**Créer une esquisse :**

Nous allons maintenant dessiner l'esquisse (ou sketch) qui possède la forme générale de la pièce. Une esquisse est un schéma qui décrit une forme à appliquer à une fonction afin de produire une forme. Soit une forme "positive" ou "additive": un bossage (ou pad) par exemple, ou une forme "négative" ou "soustractive": un creux (ou poche - pocket) par exemple.

Ici, comme la forme générale de la pièce est régulière suivant l'axe des Y, nous allons faire un Pad suivant cet axe, une extrusion d'une forme.

Cliquez sur ![](/images/Sketcher_NewSketch.svg) [Nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"). La vue combinée bascule maintenant sur l'onglet **Tâches** et affiche le dialogue *Sélectionner une fonction*. Ce dialogue demande la sélection d'un plan sur lequel appliquer notre esquisse, et liste les plans disponibles. Choisissez *XZ\_Plane (Plan de base)* et appuyez sur OK. L'interface change alors, c'est à présent l'atelier "Sketcher" qui prend le relais. Nous nous retrouvons sur le plan XZ du corps (Body) pour tracer l'esquisse.

Pour faciliter le dessin, vérifiez à gauche dans "Modifier les contrôles" les options choisies :

* Afficher la grille : coché
* Taille de la grille :10 mm
* Contraintes auto : coché

Nous allons dessiner l'esquisse suivante :

![](/images/GGTuto1_0.PNG)

**Commençons les premiers segments :**

Choisissez l'outil ![](/images/Sketcher_Line.svg) [Ligne](/Sketcher_CreateLine/fr "Sketcher CreateLine/fr").
Cliquez sur le point d'origine (assurez-vous de voir apparaître un point rouge à droite du curseur) et faites le second clic sur l'axe des X à environ 10 cases vers la droite, soit environ 100 mm. Si le segment ne fait pas exactement 100 mm à ce stade, ce n'est pas grave, nous allons par la suite donner une cote fixe qui va contraindre cette longueur.

Faites de même pour les autres segments, essayez de viser les points que vous avez créés qui doivent s'éclairer en jaune. Ce qui signifie que ces points seront coïncidents. Vous devriez obtenir à peu près ceci :

![](/images/GGTuto1_1.PNG)

Remarquez les petites lignes rouges au dessus et à coté des segments que vous avez tracés : il s'agit de contraintes d'horizontalité et de verticalité. Vos lignes sont forcées à rester soit horizontales, soit verticales. Remarquez également le symbole en forme d'un petit arc à gauche : il signifie que le point est fixé sur l'axe des Z.

Saisissez maintenant différents segments avec le bouton gauche de la souris et tout en gardant le bouton gauche enfoncé, essayez de les déplacer : certains sont libres d'autres non.

**Appliquer des contraintes :**

En haut de la boite combinée, sous l'onglet Tâches, on peut lire le nombre de degrés de liberté des éléments déjà dessinés : il doit être d'environ 6, l'objectif des contraintes est d'arriver à 0.

Le segment incliné doit être libre actuellement de tourner : nous allons lui donner une contrainte d'angle pour le fixer.

Cliquez dessus, puis le segment du bas; une fois sélectionnés, ces segments doivent être verts; puis cliquez sur l’icône ![](/images/Constraint_InternalAngle.svg) [Contrainte angulaire](/Sketcher_ConstrainAngle/fr "Sketcher ConstrainAngle/fr").

![](/images/GGTuto1_2.PNG)

Entrez la valeur de 30°. Les deux segments ont un angle fixe désormais. La contrainte a été créée tout à gauche de l'esquisse ; à l'aide de la souris, déplacez cette contrainte à l'intérieur du profil.

Nous allons maintenant contraindre le segment du bas avec une cote : Cliquez dessus puis cliquez sur ![](/images/Constraint_HorizontalDistance.svg) [Distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr").

Donnez la valeur de 100mm. Le segment vertical à droite s'aligne exactement avec le quadrillage de 10 cases. Logique, puisque un carreau fait 10mm!

Donnons la hauteur générale à la pièce en sélectionnant le point le plus haut à gauche et l'origine. Cliquez sur ![](/images/Constraint_VerticalDistance.svg) [Distance verticale](/Sketcher_ConstrainDistanceY/fr "Sketcher ConstrainDistanceY/fr"), entrez 50 mm.

Procédez de même pour la longueur horizontale de la pente avec comme cote 50 mm également.

Déplacez les cotations à l’extérieur de la pièce pour une meilleure visibilité. Vous devriez arriver à quelque chose comme ça :

![](/images/GGTuto1_3.PNG)

Remarquez le nombre de degrés de liberté est passé à 2. Il s'agit des extrémités restées encore ouvertes.

**Dessiner l'arc de cercle :**

Cliquez sur ![](/images/Sketcher_Arc.svg) [Arc](/Sketcher_CreateArc/fr "Sketcher CreateArc/fr"), positionnez le centre à environ x=80 y=30. puis cliquez sur le premier point de départ de l'arc qui correspond à la fin du segment en haut puis la fin de l'arc avec l'autre segment (les points doivent s'éclairer en jaune).

Donnons lui une contrainte de rayon: cliquez dessus, puis sur ![](/images/Constraint_Radius.svg) [Contrainte radiale](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") ensuite donnez une valeur de 20 mm.

Indiquons maintenant que les départ de l'arc soient tangent avec les segments : cliquez sur l'arc, puis le segment du haut, puis ![](/images/Constraint_Tangent.svg) [Tangente](/Sketcher_ConstrainTangent/fr "Sketcher ConstrainTangent/fr"). Un message *Substitution de contrainte* s'affiche, validez.
Procédez de même pour la contrainte de tangence l'autre coté de l'arc.

Nous avons procédé en deux étapes pour réaliser l'esquisse, mais nous aurions pu aussi dessiner complètement l'esquisse avant de la contraindre entièrement.

**Esquisse complètement contrainte :**

Si vous avez bien travaillé, vous devriez obtenir ceci :

![](/images/GGTuto1_4.PNG)

L'esquisse est devenue verte, ce qui signifie qu'elle est entièrement contrainte. Il n'y a plus aucune ambiguïté, tout est parfaitement défini. Ceci est confirmé par le message du solveur en haut à gauche. Remarquez également que le centre de l'arc a légèrement bougé, en effet en donnant ces trois dernières contraintes, FreeCAD a calculé la vraie position du centre.

Si votre esquisse n'est pas encore verte, un ou plusieurs points ne sont pas coïncidents (2 points sont superposés mais non coïncidents). Faites une petite fenêtre (fenêtre de capture) autour d'un point, et cliquez sur ![](/images/Constraint_PointOnPoint.svg) [Contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr"). *Remarque : ne confondez pas la contrainte coïncidente avec le point d'esquisse ; alors que leurs icônes sont très similaires, ce dernier a une icône plus grande ; il ajoute un point dans l'esquisse.*

Procédez de la même manière avec tous les points.

Si votre esquisse n'est toujours pas verte, vérifiez que tous les segments (sauf le segment incliné) aient une contrainte soit ![](/images/Constraint_Horizontal.svg) [Horizontal](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr"), soit ![](/images/Constraint_Vertical.svg) [Vertical](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr"), rajoutez la éventuellement.

### Utiliser les fonctions Pad et Pocket

Cliquez sur Fermer dans l'onglet Tâches, en haut à gauche. Nous quittons alors l'atelier Sketcher automatiquement, et l'atelier PartDesign est de nouveau activé. La vue combinée bascule sur l'onglet Modèle. Si vous aviez laissé votre *Body pièce1* déroulé, vous verrez un nouvel élément **Sketch** sous *Origin*, et imbriqué sous le corps.

À ce point, il serait bon de sauvegarder notre document. Donnez-lui un nom (par ex. "tutoriel1", ou tout autre nom qui vous convienne). Il est recommandé de sauvegarder votre document souvent, par exemple après avoir terminé une esquisse ou ajouté une fonction.

Cliquez sur ![](/images/Std_ViewIsometric.svg) **Vue Isometrique** puis sur ![](/images/Std_ViewFitAll.svg) [Tout afficher](/Std_ViewFitAll/fr "Std ViewFitAll/fr"), ce qui donne une vue en 3D isométrique centrée.

Cliquez sur ![](/images/PartDesign_Pad.svg) [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr"), appliquez une longueur de 30 mm. Cliquez sur OK, la forme est réalisée. Dans l'arborescence Modèle, un élément **Pad** (que nous appellons fonction) prend la place de Sketch. En fait, il a englobé Sketch, puisqu'il est basé sur l'esquisse. Cliquez sur la flèche ou le signe plus devant *Pad* pour dérouler son contenu, et l'esquisse Sketch sera révélée au-dessous. Elle a aussi été automatiquement masquée (son étiquette est grisée).

Notez que la forme créée est un solide plein.

![](/images/GGTuto1_5.PNG)

**Création du trou :**

Cliquez sur la face supérieure (carrée) de la pièce et cliquez sur l’icône ![](/images/Sketcher_NewSketch.svg) créer un nouveau sketch. FreeCAD crée une nouvelle esquisse rattachée à cette face. Nous sommes donc sur un plan parallèle au plan absolu XY, mais décalé en hauteur de la hauteur de la pièce c'est à dire 50 mm.

Vous pouvez orienter la vue 3D en une vue Isometrique ![](/images/Std_ViewIsometric.svg) ou rester en vue de dessus ![](/images/Std_ViewTop.svg). À tout moment, vous pouvez revenir à une vue d'esquisse (orientée de face par rapport au plan d'esquisse) à l'aide de l'icône ![](/images/Sketcher_ViewSketch.svg) [Vue de l'esquisse](/Sketcher_ViewSketch/fr "Sketcher ViewSketch/fr").

Notez que les origines de cette nouvelle esquisse sont celles du body. Elles peuvent être différentes, mais ici, sont confondues avec les origines absolues.

Avec l'outil ![](/images/Sketcher_Circle.svg) [Cercle](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr") cliquez à peu près au centre de la face et faites un cercle de n'importe quel rayon.

Sélectionnez le cercle puis créez une ![](/images/Constraint_Radius.svg) [contrainte radiale](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr"), entrez une valeur de 5 mm.

Sélectionnez le centre du cercle puis créez une ![](/images/Sketcher_ConstrainLock.svg) [contrainte fixe](/Sketcher_ConstrainLock/fr "Sketcher ConstrainLock/fr"). Double-cliquez sur la cote horizontale entrez -65 mm (ici nous indiquons une position par rapport à l'origine de l'esquisse). Faites de même pour la cote verticale (15 mm). Le cercle prend sa bonne position et l'esquisse devient être verte, ce qui indique qu'elle est complètement contrainte :

![](/images/GGTuto1_6.PNG)

Fermez l'esquisse ; dans l'arborescence Modèle, un nouvel objet **Sketch001** est apparu sous Pad. Avec Sketch001 toujours sélectionné, cliquez sur ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr").

Cavité ("Pocket" en anglais) est une fonction dite "soustractive", elle enlève de la matière à notre pièce, ici sous forme de cylindre puisque l'esquisse est un cercle. Indiquez "à travers tout" pour traverser complètement la pièce puis appuyez sur OK pour valider. Dans l'arborescence Modèle, un nouvel élément nommé **Pocket** apparaît au bas de Body pièce1, et s'empare de Sketch001.

### Changer couleur et transparence

Il est possible de changer la couleur de la pièce, c'est souvent utile pour distinguer une pièce parmi d'autres. La transparence de la pièce peut être aussi modifiée, ce qui est pratique pour visualiser les formes internes.

Sélectionnez le corps **Body part1** ; assurez-vous que l'onglet Modèle de la vue combinée est sélectionné, et allez dans la partie inférieure de la vue combinée, cliquez sur l'onglet Vue ; localisez la propriété *Shape Color*; vous devrez peut-être utiliser la barre de défilement verticale vers la droite pour la trouver. *Vous pouvez également élargir la colonne Propriété : placez le pointeur de votre souris sur la ligne séparant les en-têtes* Property *et* Value*; lorsque le pointeur se transforme en une flèche à 2 sens, maintenez le bouton gauche de la souris enfoncé, faites glisser le curseur latéralement, puis relâchez-le.* Dans la colonne de droite, cliquez sur le carré gris, ce qui ouvre la boîte de dialogue **Sélectionner une couleur**. Choisissez une autre couleur, puis cliquez sur OK. Ensuite, toujours dans l'onglet Vue, définissez la valeur Transparency (transparence), par exemple sur 50, puis appuyez sur Entrée pour terminer (0 = totalement opaque, 100 = totalement transparent).

Le trou est désormais visible à l’intérieur de la pièce. C'est souvent utile pour voir les faces cachées ou internes du modèle.

Vous pouvez aussi faire varier "Line Color" et "Line Width" pour changer l'épaisseur des traits et leur couleur du contour de la pièce.

### Déplacer manuellement la pièce

Allez dans le menu *Affichage* et sélectionnez *Afficher les axes de coordonnées*. Il s'agit des axes absolus. Vous devriez voir dans la vue 3D, les 3 axes X, Y, Z respectivement en rouge, vert et bleu. Ce repère va nous aider à nous orienter dans l'espace. Ce repère est fixe et immuable, c'est soit la vue qui tourne, soit l'objet qui tourne dans cet espace.

Sélectionnez le Body, dans la partie inférieure de la vue combinée à gauche, vous pouvez voir ceci (l'onglet *Données* doit être à l'avant-plan, vous pourriez devoir cliquer sur l'onglet pour le rendre visible) :

![](/images/GGTuto1_10.PNG)

Cliquez sur les trois petits points, c'est-à-dire les points de suspension (s'ils n'apparaissent pas, cliquez sur la section Valeur du champ Placement) ; cela ouvre une nouvelle boite dans l'onglet Tâches. A l'aide des flèches vous pouvez faire varier la position et les angles de la pièce. C'est en fait la position du body (donc son origine) qui bouge dans l'espace, l'orientation de la vue 3D ne change pas.

Autre méthode : dans la vue combinée, sélectionnez le Body et cliquez sur le bouton droit de la souris: cliquez sur "transformer". Une vue comme celle ci apparaît :

![](/images/GGTuto1_11.PNG)

Maintenez et faites glisser les cônes le long des axes et les sphères pour bouger la pièce (le body) dans tous les sens.

Validez. Puis remettez angles et coordonnées à 0.

### Afficher des cotes indicatives dans l'esquisse

Il peut être utile de connaître des dimensions de certaines parties du sketch, issues du calcul interne de FreeCAD. On peut s'en servir juste pour contrôle, ou les utiliser par la suite pour paramétrer d'autres dimensions par exemple.

Dans l'arborescence Modèle, développez si nécessaire le corps *Body part1* puis *Pad* pour afficher la première esquisse (Sketch). Double-cliquez dessus (ou cliquez avec le bouton droit de la souris et sélectionnez *Modifier l'esquisse* dans le menu contextuel), puis cliquez sur ![](/images/Sketcher_ToggleConstraint.svg) [Basculer les contraintes pilotantes/pilotées](/Sketcher_ToggleDrivingConstraint/fr "Sketcher ToggleDrivingConstraint/fr"). (**Remarque :** En fonction de la résolution d'affichage de votre ordinateur, cette icône pourrait ne pas être visible. À l'extrémité droite de la barre d'outils Contraintes, vous pouvez trouver un bouton ». Cliquez dessus pour le développer et accéder aux icônes réduites.) À partir de maintenant, nous pouvons créer des cotes de référence plutôt que des contraintes dimensionnelles : elles seront bleues et n’auront aucune influence sur les géométries de l’esquisse, elles sont calculées automatiquement.

Vous pouvez afficher ces cotes par exemple :

![](/images/GGTuto1_7.PNG)

On constate que l'arrondi a bien une longueur de 20, car tangent avec les faces.

On peut voir également que FreeCAD calcule la face de gauche (50-50xTAN 30°), ainsi que la cote de distance de l'axe de l'arc avec l'origine.

### Faire varier une ou plusieurs dimensions

En cours de modélisation, on peut faire varier les cotes du modèle. C'est très simple, pour l'épaisseur de la pièce double cliquez sur Pad, puis entrez une nouvelle valeur, 40 mm par exemple. Dans la partie basse de la vue combo, on peut changer cette valeur également. Validez, la forme de l'objet a changé.

Faites de même pour la longueur totale de la pièce : double cliquez sur Sketch, puis double cliquez sur la cote de 100, donnez-lui 110 mm puis validez.

On constate que la pièce à grossi, mais le trou n'est plus centré au milieu de la face de dessus car il a été localisé dans le référentiel du corps actif (le body). Ce qui ne correspond pas forcement à ce que l'on voudrait, le trou devrait rester au centre, quel que soit la dimension de la face.

### Centrer le trou

**Première méthode à l'aide de la géométrie externe.**

Reprenez le sketch du trou, passez en vue 3D et effacez ses 2 contraintes dimensionnelles en X et Y.

Puis cliquez sur ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").

Nous allons maintenant créer deux segments dans le sketch, mais issus d'une forme (ou fonction) externe à celui ci et précédemment définie : celle du Pad.

Cliquez sur une arête sur le dessus de la pièce et qui est en travers. Par exemple coté pente.

Il doit apparaître maintenant un segment violet à la place de cette arrête. Faites de même pour l'autre arrête coté arrondi.

On peut maintenant se servir de ces segments (et surtout les points des extrémités) pour centrer le cercle, il faut cependant rajouter encore deux segments de construction : par exemple les diagonales.

Cliquez sur ![](/images/Sketcher_AlterConstruction.svg) [Basculer le mode de la géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr"), nous passons en mode lignes de construction: les segments seront en bleu et ne seront pas des arrêtes sur la pièce. Ils vont permettre d'accrocher le centre du cercle. Créez les diagonales de la même manière que vous avez dessiné les premiers segments. Assurez vous que tous les points soient coïncidents.

Sélectionnez ensuite le centre du cercle, puis les deux diagonales bleues et cliquez sur ![](/images/Constraint_PointOnObject.svg) [Contrainte point sur objet](/Sketcher_ConstrainPointOnObject/fr "Sketcher ConstrainPointOnObject/fr"), le cercle doit se centrer à l'intersection des diagonales, c'est dire au centre de la face. L'esquisse doit être verte, complètement contrainte (c'est indispensable). Remarquez qu'à part le rayon du cercle, il n'est donc plus nécessaire de donner une valeur numérique comme contrainte.

Veuillez noter qu'en plus de faire passer la barre d'outils en mode construction, le bouton ![](/images/Sketcher_AlterConstruction.svg) [Basculer le mode de la géométrie de construction](/Sketcher_ToggleConstruction/fr "Sketcher ToggleConstruction/fr") peut également basculer des éléments Sketcher individuels en mode construction s'ils ont été sélectionnés. Si vous basculez accidentellement un élément en mode construction, vous pouvez obtenir une erreur lorsque vous quittez l'esquisse.

![](/images/GGTuto1_8.PNG)

Quittez le sketch, on constate que le cercle s'est bien centré. (la fonction Pocket n'a pas été effacée, mais modifiée). Si vous changez à nouveau les dimensions de la pièce, l'épaisseur ou la longueur, le cercle restera centré sur la face.

**Se passer de lignes de construction :**

Il est souvent possible d'éviter de créer des lignes de construction. Vous pouvez reprendre le sketch, effacer les diagonales et utiliser la ![](/images/Constraint_Symmetric.svg) [contrainte symétrique](/Sketcher_ConstrainSymmetric/fr "Sketcher ConstrainSymmetric/fr") entre les deux sommets opposés des segments de géométrie externe et le centre du cercle (sélectionnez les points dans cet ordre) :

![](/images/GGTuto1_12.PNG)

Nous obtenons exactement le même résultat pour la position du trou. En fait, grâce aux contraintes disponibles dans l’atelier Sketcher, il existe de nombreuses méthodes possibles. Cet exemple montre qu'il est souvent préférable de choisir la méthode la plus simple, limitant ainsi le nombre d'objets créés ainsi que les erreurs qui pourraient en découler.

**Deuxième méthode à l'aide d'un plan de référence.**

Voici une autre méthode, plus rapide qui est possible depuis la version 0.17 : l'utilisation d'un plan de référence et son accrochage (ou dépendance).

Commencez par effacer le la fonction "Pocket" ainsi que le sketch du trou. Sélectionnez la face du dessus et cliquez sur ![](/images/PartDesign_Point.svg) [Point de référence](/PartDesign_Point/fr "PartDesign Point/fr") : crée un point de référence dans le corps actif. Le mode d'accrochage choisi doit être "centre de masse".

Comme la face est rectangulaire, son centre de masse correspond au centre de ses diagonales. Validez, un point de référence est créé.

Sélectionnez encore la face du dessus et tout en appuyant sur la touche CTRL, sélectionnez dans l'arborescence Modèle le point que vous venez de créer, relâchez CTRL et cliquez sur ![](/images/PartDesign_Plane.svg) [Plan de référence](/PartDesign_Plane/fr "PartDesign Plane/fr"). Un plan de référence est créé avec comme origine le point. Cliquez sur OK.

Il est désormais très facile de centrer le cercle ! Sélectionnez dans l'arborescence Modèle ou sur la vue 3D le plan que vous avez crée, et cliquez sur ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"), un sketch se crée avec comme origine, l'origine du plan. Il suffit alors de dessiner le cercle de 5 mm de rayon sur cette origine, puis validez (le sketch doit être vert impérativement).

Vous obtenez avec "Pocket", comme créé précédemment, le trou et il sera toujours centré.

![](/images/GGTuto1_9.PNG)

Ce tutoriel est terminé, enregistrez ce fichier, vous pouvez vous amuser à explorer diverses fonctions.
Changez d'autres cotes, faites d'autres formes, placez d'autre trous sur les autres faces, c'est en se trompant que l'on progresse !

Vous pouvez aussi continuer avec cet autre tutoriel d'une pièce un peu plus compliquée :

[Tutoriel d'introduction PartDesign](/Basic_Part_Design_Tutorial/fr "Basic Part Design Tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Creating_a_simple_part_with_PartDesign/fr&oldid=1359594>"