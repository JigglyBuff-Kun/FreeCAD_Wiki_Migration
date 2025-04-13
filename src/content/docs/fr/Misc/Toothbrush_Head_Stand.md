---
title: Tutoriel pour créer un support pour tête de brosse à dents
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
| [EmmanuelG](/User:EmmanuelG "User:EmmanuelG") |
| Version de FreeCAD |
| 0.16 ou ultérieure |
| Fichiers exemples |
| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| Voir aussi |
| *None* |
|  |

## Un problème de la vie courante

Les brosses à dents électriques viennent rarement avec une tête, tandis que dans une famille, vous verrez souvent plusieurs têtes utilisées avec un seul moteur. Beaucoup de personnes confrontées à un problème commun nous conduisent à une variété de solutions, comme vous pouvez le voir sur Thingiverse (200 à 800 projets sont liés à cela). Voici la première réponse et comment la concevoir.

Ce tutoriel vous guidera à travers les étapes nécessaires pour modéliser la partie montrée dans l'image ci-dessous en utilisant les outils de base de l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") (beaucoup d'outils et de capacités ne sont pas couverts).

![](/images/TBHS-model.png)

## Première idée : un plateau

* A partir de la page d'accueil, sélectionnez ![](/images/Workbench_PartDesign.svg) "PartDesign" ou créez un nouveau document et sélectionnez l'atelier "PartDesign".

![](/images/TBHS-0.png)

### Créer une esquisse

* Cliquez sur le bouton ![](/images/Sketcher_NewSketch.svg) [**Nouvelle esquisse**](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr"). Soit à partir du menu de tâches contextuelles à gauche, soit de la barre d'outils ci-dessus ou du menu PartDesign en haut.

![](/images/TBHS-1.JPG)

Une boîte de dialogue vous invite à choisir l'orientation de l'esquisse et à fournir un décalage.

* Nous allons choisir le plan XY comme indiqué dans l'image ci-dessus (cette orientation correspond à la plaque de construction commune de la plupart des imprimantes 3D), puis cliquez sur OK.

![](/images/TBHS-2.JPG)

Vous êtes maintenant face au plan XY vu d'en haut, et avez accès aux outils de dessin.

* Cliquez sur ![](/images/Sketcher_CreateRectangle.svg) [**Rectangle**](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr").
* Cliquez pour placer un premier point.
* Cliquez pour placer le coin opposé.
* Appuyez sur Echap ou cliquez sur le bouton droit de la souris pour arrêter d'utiliser l'outil.

![](/images/TBHS-3.JPG)

Vous avez maintenant un rectangle mobile de dimensions non spécifiées.

* Cliquez sur une ligne du rectangle, vous avez maintenant accès aux outils de contrainte à droite de la barre d'outils (selon la taille de votre écran, vous devrez peut-être les faire glisser vers la gauche pour les voir tous).
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte dimensionnelle**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 80mm, cliquez sur OK.
* Répétez l'opération avec l'autre côté du rectangle, également 80mm.

![](/images/TBHS-4.JPG)

Maintenant vous avez un carré mobile.

* Cliquez sur le point en bas à gauche du carré.
* Cliquez sur l'origine du plan XY (à l'intersection des deux lignes épaisses).
* Cliquez sur le bouton ![](/images/Constraint_PointOnPoint.svg) [**Contrainte de coïncidence**](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr").

![](/images/TBHS-5.JPG)

Vous avez maintenant une esquisse totalement contrainte, comme vous l'indique le solveur à gauche et le changement de couleur. C'est une bonne pratique de toujours avoir une esquisse totalement contrainte.

Une esquisse sous-contrainte peut laisser la place à des changements non souhaités, si vous modifiez quelque chose par la suite.

À l'inverse, une esquisse surcontrainte n'est pas bonne non plus. Dans ce cas, le solveur vous avertit des contraintes redondantes et vous devez en supprimer certaines.

* Pour quitter l'esquisse, cliquez soit sur le bouton "Fermer" à gauche, soit sur l'icône ![](/images/Sketcher_LeaveSketch.png) dans la barre d'outils, ou appuyez sur Echap.

![](/images/TBHS-6.JPG)

Vous ne voyez plus que le carré, et le menu contextuel des tâches sur la gauche vous montre plus d'options qu'auparavant.

### Créer une protrusion

* Cliquez sur le bouton ![](/images/View-axometric.svg) **Axonométrique** parmi les vues standard, pour mieux voir ce qui va se passer.
* Cliquez sur le bouton ![](/images/PartDesign_Pad.svg) **Protrusion**.
* Entrez 4mm et cliquez sur OK.

![](/images/TBHS-7.JPG)

Votre carré est désormais un volume !

### Créer une esquisse dessus

* Sélectionnez la face supérieure

![](/images/TBHS-8.JPG)

La couleur de la face change (seulement la face doit changer de couleur, pas tous le volume) et vous avez plus d'options dans le menu contextuel

* Cliquez sur le bouton ![](/images/Sketcher_NewSketch.svg) **Nouvelle esquisse**. Comme une face a été sélectionnée, il ne vous demandera pas de choisir un plan.

![](/images/TBHS-9.JPG)

* Cliquez sur le bouton ![](/images/Sketcher_Circle.svg) [**Cercle**](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr"), cliquez pour placer le centre, déplacez le pointeur et cliquez pour définir le rayon.
* Dessinez 4 cercles sur la face (de n'importe quelle taille)
* Appuyez sur Echap ou cliquez sur le bouton droit de la souris pour arrêter d'utiliser l'outil (cercle).

![](/images/TBHS-10.JPG)

* Sélectionnez les cercles
* Cliquez sur le bouton ![](/images/Sketcher_ConstrainEqual.png) [**Contrainte d'égalité**](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr")

![](/images/TBHS-11.JPG)

Maintenant les cercles ont le même rayons

* Cliquez sur le bouton ![](/images/Sketcher_External.svg) [**Géométrie externe**](/Sketcher_External/fr "Sketcher External/fr").
* Cliquez sur les quatre côtés du carré, les arêtes deviendront couleur magenta.

![](/images/TBHS-12.JPG)

Ces lignes seront les références pour positionner les cercles

* Cliquez sur l'outil ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte de distance**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Cliquez sur le centre d'un cercle
* Cliquez sur une ligne magenta du bord
* Définissez 20mm (pour chaque cercle, vers les deux bords les plus proches)

![](/images/TBHS-13.JPG)

* Cliquez sur un cercle
* Cliquez sur ![](/images/Sketcher_ConstrainRadius.svg) [**Contrainte rayon**](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr") et mettez la valeur à 1,5 mm.

![](/images/TBHS-14.JPG)

* Pour quitter le sketch, cliquer "Fermer" ![](/images/Sketcher_LeaveSketch.png) , ou presser ESC ou clic droit de la souris.

![](/images/TBHS-15.JPG)

### Créer une protrusion

* Cliquez sur le bouton ![](/images/View-axometric.svg) **Axonometrique** en vue standard, pour mieux voir ce qui se passe devant vos yeux ébahis.
* Cliquez sur le bouton ![](/images/PartDesign_Pad.svg) **Protrusion**.
* Entrez 25mm et cliquez OK.

![](/images/TBHS-16.JPG)

Vous avez la forme de base, il ne manque que les touches finales.

### Arrondir les coins

* En maintenant CTRL, cliquer sur le bord vertical de chaque coin pour en sélectionner les quatre.

N'hésitez pas à vous aider en changeant le mode d'affichage (juste à gauche de la Vue Axonométrique) entre ![](/images/DrawStyleWireFrame.svg) **Filaire** et ![](/images/DrawStyleFlatLines.svg) **Filaire et ombre**.

![](/images/TBHS-17.JPG)

* Cliquez sur le bouton ![](/images/PartDesign_Fillet.svg) [**Congé**](/PartDesign_Fillet/fr "PartDesign Fillet/fr").
* Mettez le rayon à 20mm.

![](/images/TBHS-18.JPG)

C'est mieux.

### Rendre plus robuste

```
Nous devons ajouter de la matière à la base des cylindres pour qu'ils soient moins enclins à se casser. En raison de l'orientation de l'impression, ces petites surfaces seront fragiles à la jonction avec la base.

```

* Sélectionnez les cercles à la base des cylindres.

![](/images/TBHS-19.JPG)

* Cliquez sur le bouton ![](/images/PartDesign_Chamfer.svg) [**Chanfrein**](/PartDesign_Chamfer/fr "PartDesign Chamfer/fr").
* Mettez la valeur à 2 mm.

![](/images/TBHS-20.JPG)

### Chanfreiner les bords

* Sélectionnez la face sous la base, ajoutez un ![](/images/PartDesign_Chamfer.svg) **Chanfrein** de 0,5mm.

La première couche de plastique est souvent écrasée un peu trop, ceci compensera cela et vous fera gagner du temps dans le nettoyage du modèle. Si la première couche est correcte, cela ne fera que l'améliorer

![](/images/TBHS-21.JPG)

* Sélectionnez les angles de la face supérieure (Enfoncer la touche CTRL).

![](/images/TBHS-23.JPG)

* Ajoutez un dernier ![](/images/PartDesign_Chamfer.svg) **chanfrein** de 1mm. Juste pour l’esthétique.

![](/images/TBHS-22.JPG)

Et voilà!

## Exporter en .STL

* Dans la vue combinée de gauche, sélectionnez la vue arborescente au lieu du menu contextuel des tâches, cliquez sur la dernière caractéristique (le chanfrein).

![](/images/TBHS-24.JPG)

* Maintenant vous pouvez sélectionner "Exporter..." dans le menu Fichier en haut à gauche, et sélectionner le format de fichier .STL.
* Imprimez-le simplement :-)

## Inspiration

Le modèle ci-dessus constitue un bon point de départ pour utiliser FreeCAD, mais comme un support de tête de brosse à dents, il a ses défauts : à cause de l'orientation de l'impression et de la petite surface, les bâtons sont susceptibles de se casser.

Inspirés par la variété des solutions proposées par d'autres personnes, nous allons réaliser cette deuxième version qui sera bien meilleure.

![](/images/TBHS-v2.jpg)

Ne vous inquiétez pas, il est souvent nécessaire de passer par plusieurs révisions pour une idée (par exemple : une fois le prototype de la photo utilisé, nous avons ajouté plus d'espace entre les têtes pour qu'elles ne se touchent pas).

Dans cette deuxième partie, vous apprendrez également à utiliser d'autres outils, comme la puissante *Répétition linéaire*.

## Deuxième idée : un groupe

* Créez un nouveau document et sélectionnez l'atelier ![](/images/Workbench_PartDesign.svg) *PartDesign*.

### Créer une esquisse

* Créez une ![](/images/Sketcher_NewSketch.svg) **Nouvelle esquisse** dans le plan XY.

![](/images/TBHS-1.JPG)

* Dessinez un oblong ![](/images/Sketcher_CreateSlot.svg) [**Contour oblong**](/Sketcher_CreateSlot/fr "Sketcher CreateSlot/fr")
  + Cliquez pour placer le premier centre
  + Bougez la souris pour donner de la longueur et un rayon
  + Cliquez pour donner le second centre.

![](/images/TBHS2-1.JPG)

Maintenant nous avons un contour oblong mobile et sans dimensions spécifiées

* Cliquez sur l'une des lignes horizontales du contour oblong
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte de distance**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 75mm, cliquez sur OK.
  + Pour un support à 3 têtes, comptez 25mm pour chacune, si vous en voulez plus

![](/images/TBHS2-2.JPG)

* Cliquez sur un point de la ligne horizontale
* Cliquez sur un point de l'autre ligne horizontale
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte de distance**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 29mm, cliquez sur OK.

![](/images/TBHS2-3.JPG)

* Dessinez un ![](/images/Sketcher_CreateSlot.svg) [**Contour oblong**](/Sketcher_CreateSlot/fr "Sketcher CreateSlot/fr") autour du premier emplacement.

![](/images/TBHS2-4.JPG)

* Faites coïncider les centres du deuxième emplacement avec les centres du premier emplacement avec ![](/images/Constraint_PointOnPoint.svg) [**Contrainte de coïncidence**](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr").

![](/images/TBHS2-5.JPG)

* Cliquez sur un point de la ligne horizontale du premier emplacement.
* Cliquez sur un point de la ligne horizontale la plus proche du deuxième emplacement.
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte dimensionnelle**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 3mm, cliquez sur OK.

![](/images/TBHS2-6.JPG)

* Pour rendre l'esquisse entièrement contrainte
  + Cliquez sur le point inférieur gauche de le deuxième contour oblong
  + Cliquez sur l'origine du plan XY
  + Cliquez sur ![](/images/Constraint_PointOnPoint.svg) [**Contrainte de coïncidence**](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr")

![](/images/TBHS2-7.JPG)

* Pour quitter l'esquisse, cliquez soit sur le bouton "Fermer" à gauche, soit sur l'icône ![](/images/Sketcher_LeaveSketch.png) dans la barre d'outils, ou appuyez sur Echap.

![](/images/TBHS2-8.JPG)

### Créer une protrusion

* Cliquez sur ![](/images/View-axometric.svg) **Axonometrique** parmi les vues standards, pour mieux voir ce qui va se passer.
* Cliquez sur ![](/images/PartDesign_Pad.svg) **Protrusion**.
* Entrez 30mm et cliquez sur OK.

![](/images/TBHS2-9.JPG)

### Créer une esquisse dessus

* Sélectionnez la face supérieure

![](/images/TBHS2-10.JPG)

* Créez une ![](/images/Sketcher_NewSketch.svg) **Nouvelle esquisse**. Comme une face a été sélectionnée, il ne vous sera pas demandé de choisir un plan.

![](/images/TBHS2-11.JPG)

* Dessinez un ![](/images/Sketcher_CreateHexagon.svg) [**Hexagone**](/Sketcher_CreateHexagon/fr "Sketcher CreateHexagon/fr")
  + Cliquez pour placer le centre
  + Déplacez pour définir le rayon
  + Cliquez pour définir

![](/images/TBHS2-12.JPG)

* Cliquez sur un des coté de l' hexagone, le plus prés de l'horizontal
* Cliquez sur le bouton ![](/images/Constraint_Horizontal.svg) [**Contrainte horizontale**](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr")

![](/images/TBHS2-13.JPG)

* Cliquez sur le centre de l'hexagone
* Cliquez sur la ligne horizontale du plan XY
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte de distance**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 15 mm, cliquez sur OK.

![](/images/TBHS2-14.JPG)

* Cliquez sur le centre de l' hexagone
* Cliquez sur la vertical du plan XY
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte de distance**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 10 mm, cliquez sur OK.

![](/images/TBHS2-15.JPG)

* Cliquez sur le cercle bleu de l'hexagone
* Cliquez sur ![](/images/Sketcher_ConstrainRadius.svg) [**Contrainte rayon**](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 8mm, cliquez sur OK.

![](/images/TBHS2-16.JPG)

* Pour quitter l'esquisse, cliquez soit sur le bouton "Fermer" à gauche, soit sur l'icône ![](/images/Sketcher_LeaveSketch.png) dans la barre d'outils, ou appuyez sur Echap.

![](/images/TBHS2-17.JPG)

### Créer un trou

* Cliquez sur ![](/images/View-axometric.svg) **Axonométrique** parmi les vues standards, pour mieux voir ce qui va se passer.
* Cliquez sur ![](/images/PartDesign_Pocket.svg) [**Cavité**](/PartDesign_Pocket/fr "PartDesign Pocket/fr").
* Sélectionnez *au premier* dans le menu déroulant et cliquez sur OK.

![](/images/TBHS2-18.JPG)

### Répétition linéaire

* Dans la vue combinée de gauche, sélectionnez la vue arborescente au lieu du menu contextuel des tâches, cliquez sur la fonction pocket.
* Cliquez sur ![](/images/PartDesign_LinearPattern.svg) [**Répétition linéaire**](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr").
* Définissez la longueur à 55mm et les occurrences à 3, puis cliquez sur OK.

![](/images/TBHS2-19.JPG)

### Créer une esquisse dessus

* Sélectionner la face interne

![](/images/TBHS2-20.JPG)

* Créez une ![](/images/Sketcher_NewSketch.svg) **Nouvelle esquisse**. Comme une face a été sélectionnée, il ne vous sera pas demandé de choisir un plan.

![](/images/TBHS2-21.JPG)

* Cliquez sur ![](/images/Sketcher_Circle.svg) [**Cercle**](/Sketcher_CreateCircle/fr "Sketcher CreateCircle/fr"), cliquez pour placer le centre, déplacez le pointeur et cliquez pour définir le rayon.

![](/images/TBHS2-22.JPG)

* Cliquez sur le centre du cercle
* Cliquez sur la ligne horizontale du plan XY
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte dimensionnelle**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 15mm, cliquez sur OK.

![](/images/TBHS2-23.JPG)

* Cliquez sur le centre du cercle
* Cliquez sur la ligne horizontale du plan XY
* Cliquez sur ![](/images/Sketcher_ConstrainDistance.png) [**Contrainte dimensionnelle**](/Sketcher_ConstrainDistance/fr "Sketcher ConstrainDistance/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 10mm, cliquez sur OK.

![](/images/TBHS2-24.JPG)

* Cliquez sur le centre du cercle
* Cliquez sur ![](/images/Sketcher_ConstrainRadius.svg) [**Contrainte rayon**](/Sketcher_ConstrainRadius/fr "Sketcher ConstrainRadius/fr")
* Une boîte de dialogue vous invite à définir une dimension. Entrez 3.5mm, cliquez sur OK.

![](/images/TBHS2-25.JPG)

* Pour quitter l'esquisse, cliquez soit sur le bouton "Fermer" à gauche, soit sur l'icône ![](/images/Sketcher_LeaveSketch.png) dans la barre d'outils, ou appuyez sur Echap.

![](/images/TBHS2-26.JPG)

### Créer une protrusion

* Cliquez sur ![](/images/View-axometric.svg) **Axonométrique** parmi les vues standards, pour mieux voir ce qui va se passer.
* Cliquez sur ![](/images/PartDesign_Pad.svg) **Protrusion**.
* Entrez 4mm et cliquez sur OK.

![](/images/TBHS2-27.JPG)

### Répétition linéaire

* Dans la vue combinée de gauche, sélectionnez la vue arborescente au lieu du menu contextuel des tâches, cliquez sur la fonction pad.
* Cliquez sur ![](/images/PartDesign_LinearPattern.svg) [**Répétition linéaire**](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr").
* Définissez la longueur à 55mm et les occurrences à 3, puis cliquez sur OK.

![](/images/TBHS2-28.JPG)

### Dépouille

* Sélectionnez le côté de chaque protrusion arrondie

![](/images/TBHS2-29.JPG)

* Cliquez sur ![](/images/PartDesign_Draft.svg) [**Dépouille**](/PartDesign_Draft/fr "PartDesign Draft/fr").
* Réglez l'angle de dépouille à 40°.
* Cliquez sur "Plan neutre" et sélectionnez la face sur laquelle l'esquisse est dessinée.
* Cochez "Inverser le sens de la dépouille".

![](/images/TBHS2-30.JPG)

Nous aurions pu utiliser un chanfrein pour faire quelque chose de similaire, mais la dépouille est plus appropriée dans ce cas.

Chanfrein = gauche / Ébauche = droite

![](/images/TBHS2-30-chamfer.JPG)![](/images/TBHS2-30-draft.JPG)

### Finitions

* En maintenant CTRL, vous sélectionnez les faces inférieure et supérieure.

![](/images/TBHS2-31-bottom.JPG)![](/images/TBHS2-31-top.JPG)

* + Ajoutez un ![](/images/PartDesign_Chamfer.svg) **Chanfrein** de 0,5mm.

![](/images/TBHS2-31.JPG)

Parfait !

## Exporter en .STL

* Dans la vue combinée de gauche, sélectionnez la vue arborescente au lieu du menu contextuel des tâches, cliquez sur la dernière caractéristique (le chanfrein).

![](/images/TBHS2-32.JPG)

* Vous pouvez maintenant sélectionner "Exporter..." dans le menu Fichier en haut à gauche, et choisir le format de fichier .STL.
* Imprimez-la à la place de la première version ou pour la remplacer si elle finit par se casser ;-)

Retrieved from "<http://wiki.freecad.org/index.php?title=Toothbrush_Head_Stand/fr&oldid=1359805>"