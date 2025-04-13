---
title: Tutoriel d'introduction à PartDesign
---
|  |
| --- |
| Tutoriel |
| Thème |
| Modélisation |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| Moins d'une heure |
| Auteurs |
| Mark Stephen ([Quick61](/User:Quick61 "User:Quick61")) et HarryGeier ([HarryGeier](/index.php?title=User:HarryGeier&action=edit&redlink=1 "User:HarryGeier (page does not exist)")) |
| Version de FreeCAD |
| 0.17 ou plus |
| Fichiers exemples |
| [Basic Part Design for v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) |
| Voir aussi |
| [Tutoriel d'introduction à PartDesign 0.19](/Basic_Part_Design_Tutorial_019/fr "Basic Part Design Tutorial 019/fr") |
|  |

Ce tutoriel introduit au nouvel utilisateur certains des outils et techniques utilisés dans l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"). Ce tutoriel n'est pas un guide complet et exhaustif de l'atelier PartDesign et de nombreux outils et fonctionnalités ne sont pas couverts. Ce tutoriel guidera l'utilisateur à travers les étapes nécessaires pour modéliser la pièce montrée dans l'image ci-dessous à l'aide de dessins.

![](/images/Tut17_final_refined.png)

Une vidéo de l'ensemble de la construction est ici : <https://youtu.be/geIrH1cOCzc>

(chaque section a son propre extrait vidéo ci-dessous)

## Avant de commencer

## La tâche

Dans ce tutoriel, vous allez utiliser l'atelier PartDesign pour créer un modèle solide 3D de la pièce illustrée dans le [dessin](/TechDraw_Workbench/fr "TechDraw Workbench/fr") ci-dessous. Toutes les dimensions nécessaires pour accomplir cette tâche sont données. Vous allez commencer par créer une forme de base à partir d'une esquisse de base, puis construire sur cette forme, en ajoutant ce que l'on appelle les fonctions. Ces fonctions ajouteront ou retireront de la matière du solide en utilisant des esquisses supplémentaires et des des fonctions supplémentaires. Ce tutoriel n'utilisera pas toutes les fonctionnalités et tous les outils disponibles dans l'atelier PartDesign, mais devrait en montrer suffisamment pour donner à l'utilisateur de ce tutoriel une ressource de base sur laquelle fonder ses connaissances et compétences.

## La pièce

![](/images/Tutorial_Drawing_Sheet.png)

## Construire la pièce

### Démarrer

Commencez par vérifier que vous êtes dans l'atelier PartDesign. Une fois là, vous créerez un nouveau document si vous ne l'avez pas déjà fait. C'est une bonne habitude de sauvegarder votre travail souvent, donc avant toute chose, enregistrez le nouveau document, en lui donnant un nom qui vous convient.

Tout travail dans PartDesign commence par un [Corps (Body)](/Glossary/fr#Body "Glossary/fr"). Puis nous construirons un solide dans le Corps à partir d'une [Esquisse (Sketch)](/Glossary/fr#Sketch "Glossary/fr").

1. Cliquez sur ![](/images/PartDesign_Body.svg) [Créer un corps](/PartDesign_Body/fr "PartDesign Body/fr") pour créer et activer un nouveau conteneur corps. *Remarque: cette étape peut être omise. Lors de la création d'une esquisse, si aucun corps n'est trouvé, un nouveau corps sera créé et activé automatiquement.*
2. Cliquer sur ![](/images/PartDesign_NewSketch.svg) [Créer une nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr"). Ceci créera l'esquisse dans le corps que vous venez de créer.
3. Nous devons définir où l'esquisse sera appliquée. Nous l'attacherons sur un plan de l'[Origine](/Glossary/fr#Origin "Glossary/fr") du corps.
4. Sous l'[onglet Tâches](/Task_panel/fr "Task panel/fr") onglet Tâches de la [vue combinée](/Combo_view/fr "Combo view/fr"), sélectionnez **YZ\_Plane** dans la liste puis appuyez sur OK:

![](/images/Tut17_sketchplanes.png)

*N.B.: il est possible que le bouton OK ne soit pas visible dans le panneau latéral si ce dernier n'est pas assez large. Vous pouvez l'élargir en déplaçant sa bordure de droite. Placez votre souris au dessus de la bordure ; quand le pointeur change pour une flèche à deux sens, pressez et gardez le bouton gauche de la souris enfoncé et glissez.*

Une fois que vous avez cliqué sur OK, FreeCAD passe automatiquement à l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") et ouvre l'esquisse en mode d'édition :

![](/images/Tut17_sketcherempty.png)

### Créer l'esquisse

Ensuite, vous utiliserez l'outil ![](/images/Sketcher_CreatePolyline.svg) [Polyligne](/Sketcher_CreatePolyline/fr "Sketcher CreatePolyline/fr") pour tracer une forme à peu près comme dans l'image suivante. Elle n'a pas besoin d'être parfaite car la forme finale sera définie par des contraintes. Une fois que vous avez la forme de base, nous commençons à appliquer les contraintes. Si les contraintes automatiques étaient activées, certaines de ces contraintes seraient appliquées automatiquement. Si ce n'est pas le cas, procédez comme suit. Mais assurez-vous d’abord que vous avez quitté l’outil Polyligne en cliquant avec le bouton droit de la souris ou en appuyant deux fois sur Echap. Le curseur de la souris devrait repasser du réticule au curseur fléché standard. N'appuyez pas sur Echap une troisième fois, sinon vous quitterez le mode d'édition; si cela se produit, cliquez sur l'onglet Modèle, puis double-cliquez sur l'élément Sketch dans la vue en arboresence, ou cliquez avec le bouton droit de la souris et sélectionnez *Modifierl'esquisse* dans le menu contextuel. Pour éviter de quitter le mode d'édition en appuyant trop souvent sur Echap, modifiez la préférence **Echap peut quitter le mode d'édition de l'esquisse** ([introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")), voir les [Sketcher Préférences](/Sketcher_Preferences/fr#G.C3.A9n.C3.A9ral "Sketcher Preferences/fr").

*NOTE : Depuis que ce tutoriel a été écrit, des améliorations ont été apportées au solveur de l'esquisseur. S'il détecte une contrainte redondante, l'esquisse devient orange, et avant d'ajouter d'autres contraintes, la contrainte redondante doit être supprimée (la contrainte redondante est affichée dans la vue Tâche, cliquez sur la référence bleue et appuyez sur supprimer).*

1. Sélectionnez les deux lignes horizontales avec votre souris en cliquant dessus, et une fois sélectionnées, cliquez sur la ![](/images/Sketcher_ConstrainHorizontal.svg) [contrainte horizontale](/Sketcher_ConstrainHorizontal/fr "Sketcher ConstrainHorizontal/fr").
2. Sélectionnez la ligne verticale sur la droite puis cliquez sur la ![](/images/Sketcher_ConstrainVertical.svg) [contrainte verticale](/Sketcher_ConstrainVertical/fr "Sketcher ConstrainVertical/fr").
3. Sélectionnez les points de début et de fin de votre polyligne et cliquez sur la ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") pour fermer la polyligne.
4. Sélectionnez la ligne horizontale inférieure et la ligne verticale droite et appliquez la ![](/images/Sketcher_ConstrainEqual.svg) [contrainte d'égalité](/Sketcher_ConstrainEqual/fr "Sketcher ConstrainEqual/fr").
5. Sélectionnez la ligne horizontale ou verticale et appliquez une ![](/images/Sketcher_ConstrainDistanceX.svg) [contrainte de distance horizontale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") ou ![](/images/Sketcher_ConstrainDistanceY.svg) [contrainte de distance verticale](/Sketcher_ConstrainDistanceX/fr "Sketcher ConstrainDistanceX/fr") et donnez-lui une valeur de 26 mm.
6. Sélectionnez la ligne horizontale supérieure, appliquez la contrainte de distance horizontale et donnez-lui une valeur de 5 mm.
7. Sélectionnez le point (sommet) inférieur droit de la ligne horizontale Origine, puis le point central de la grille et appliquez la ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr") pour figer votre forme.

À ce stade, vous devriez avoir une esquisse entièrement contrainte comme indiqué par le changement de couleur et le message affiché dans la vue combinée. Il devrait maintenant ressembler à l'image ci-dessous.

![](/images/Tut17B_profile.png)

Maintenant, dans le [Panneau des tâches](/Task_panel/fr "Task panel/fr"), cliquez sur le bouton Fermer pour quitter le mode d'édition d'esquisse et sélectionnez ![](/images/PartDesign_Pad.svg) [Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") dans la barre d'outils ou dans le menu PartDesign. Cela vous donnera une boîte de dialogue Paramètres de protrusion dans le Panneau des tâches. À l'aide de cette boîte de dialogue, en utilisant d'abord le menu déroulant Type, sélectionnez Deux dimensions. Le dessin présenté au début de ce tutoriel indique que la pièce mesure 53 mm de long. Nous le faisons en remplissant notre esquisse des deux côtés à partir du plan central pour obtenir cette distance, c'est-à-dire rendre le pavé symétrique par rapport au plan d'esquisse. La raison en est vue plus tard lors de la création de fonctionnalités. Pour l'instant, étant donné que nous voulons qu'il soit de 53 mm au total, nous allons entrer 26.5 pour la première longueur et 26.5 pour la deuxième longueur. Vous pouvez également fournir une longueur unique de 53 mm et cliquer sur la case à cocher Symétrique par rapport au plan. Une fois cela fait, nous avons maintenant notre base solide sur laquelle nous allons ajouter des fonctionnalités supplémentaires pour construire notre pièce.

Une vidéo des étapes utilisées dans cette partie du tutoriel est ici:
<https://youtu.be/cUyPnCMeTgg>

### Fonction poche et géométrie externe

À l'aide de la souris ou des icônes de vue, tournez le modèle pour voir son dos. Une fois le dos de la pièce visible, sélectionnez la face arrière en cliquant dessus comme sur l'image suivante.

![](/images/PD_WB_Tutorial003.png)

Une fois la face sélectionnée, cliquez sur l'icône Nouvelle esquisse dans la barre d'outils ou dans le menu PartDesign, afin de mapper (déposer) notre esquisse suivante sur la face arrière de la pièce. Sélectionnez maintenant l'outil ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr") et placez un rectangle sur la face arrière de la pièce de la même manière que ci-dessous. Maintenant, en suivant les étapes répertoriées, contraignez l'esquisse.

1. Sélectionnez l'une des lignes horizontales en appliquant une contrainte de distance horizontale et une valeur de 5 mm.
2. Sélectionnez l'une des lignes verticales et donnez-lui une contrainte de distance verticale et une valeur de 11 mm.
3. Utilisez l'outil ![](/images/Sketcher_External.svg) [géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
4. Sélectionnez le sommet supérieur droit de la face et cliquez dessus pour obtenir un point de la géométrie externe auquel lier notre esquisse.

![](/images/Tut17_slot_unconstrained.png)

1. Cliquez droit pour terminer le mode géométrie externe.
2. Sélectionnez le point que vous venez de mettre à disposition avec l'outil de géométrie externe, puis sélectionnez le sommet supérieur droit du rectangle et cliquez sur la ![](/images/Sketcher_ConstrainCoincident.svg) [contrainte de coïncidence](/Sketcher_ConstrainCoincident/fr "Sketcher ConstrainCoincident/fr"). À ce stade, l'esquisse doit être entièrement contrainte et ressembler à l'image suivante.

![](/images/Tut17_slote_constrained.png)

Une fois cela fait, cliquez sur le bouton Fermer en haut de l'onglet Tâches dans la fenêtre Vue Combo, puis sélectionnez l'outil ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") dans la barre d'outils ou le menu PartDesign. L'utilisation de cet outil est l'opposé de l'outil Protrusion. Comme l'outil Protrusion ajoute de la matière à la pièce, l'outil Cavité supprime de la matière de la pièce. Les deux opérations sont appelées des fonctions. Dans cette opération de cavité, nous allons sélectionner À travers tout dans le menu déroulant de type, puis cliquer sur le bouton OK.

Pour l'opération suivante, assurez-vous que "Pocket" est sélectionné dans l'arborescence du modèle et une fois terminé, cliquez sur la fonction ![](/images/PartDesign_Mirrored.svg) [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr") dans la barre d'outils ou dans le menu PartDesign. Dans la boîte de dialogue Symétrie de la vue combinée, sélectionnez Axe d'esquisse horizontal dans le menu déroulant Plan. Puis cliquez sur OK. La fonction Symétrie fonctionne de cette manière car la fonction de base de notre modèle a été réalisée des deux côtés du plan horizontal lors de la première opération avec l'esquisse de base. Si tout s'est bien passé, vous devriez maintenant avoir une pièce qui ressemble à l'image ci-dessous après avoir réorienté la vue de la pièce vers l'avant.

![](/images/Tut17_profilewithslots.png)

Une vidéo des étapes utilisées dans cette partie du tutoriel est ici:
<https://youtu.be/wiGXV9G7mrM>

### Fonction de protrusion avec géométrie externe

Après avoir jeté un coup d'œil, revenez sur la face arrière de la pièce puis sélectionnez-la pour y appliquer la prochaine esquisse.

![](/images/Tut17_profilewithslotsrearplane.png)

Sélectionnez Nouvelle esquisse et tracez un nouveau rectangle d'une manière similaire à ce qui est affiché dans l'image suivante. Ensuite, ajoutez des contraintes dimensionnelles au rectangle.

1. Sélectionnez une ligne horizontale et appliquer une contrainte de distance horizontale d'une valeur de 16,7.
2. Sélectionnez une ligne verticale et appliquer une contrainte de distance verticale de 7 mm.
3. À l'aide de l'outil de géométrie externe, sélectionnez le sommet supérieur gauche de la face de la pièce.

![](/images/Tut17_sidblockunconstrained.png)

Maintenant en sélectionnant le sommet supérieur gauche du rectangle et le point de géométrie externe, cliquez sur la contrainte de coïncidence pour contraindre totalement l'esquisse.

![](/images/Tut17_sideblockconstraind.png)

Fermer Sketcher

Ensuite, nous allons cliquer sur la fonction Protrusion et dans les paramètres de Protrusion nous saisissons une longueur de 26 mm, en laissant le type Dimension et en cochant la case *Inversé*. L'utilisation de la case Inversé forcera la Protrusion à rentrer dans la pièce au lieu de sortir de la pièce. Cette opération donne le résultat suivant.

![](/images/Tut17_sideblock.png)

Utilisez à nouveau la fonction Symétrie pour obtenir la deuxième protrusion. Assurez-vous d'abord que Pad est sélectionné dans l'arborescence, puis cliquez sur Symétrie dans la barre d'outils de la sélection dans le menu PartDesign. Nous allons répéter l'opération que nous avons effectuée pour Poche ci-dessus et sélectionnez l'axe d'esquisse horizontal dans le menu déroulant Plan.

![](/images/Tut17_profilewithsideblocks.png)

Une vidéo des étapes utilisées dans cette partie du tutoriel est ici:
<https://youtu.be/Ido1owp8ubc>

### Fonction cavité avec géométrie externe

À ce stade en faisant pivoter la pièce vers l'avant, nous pouvons voir que celle-ci commence maintenant à ressembler à la pièce dans le dessin coté au début de ce tutoriel. Une fois que vous avez la vue avant, cliquez sur la face en pente avec votre souris pour sélectionner la face que nous allons utiliser pour la prochaine esquisse.

![](/images/Tut17_innerplane.png)

Ici, nous allons utiliser l'outil Rectangle et en tracer un dans notre esquisse et une fois cela fait, appliquer les contraintes suivantes.

1. Sélectionnez une ligne horizontale et une ligne verticale, et après que les deux sont sélectionnés, cliquez sur la contrainte d'égalité.
2. Sélectionnez une ligne horizontale ou verticale et appliquer une contrainte correspondante de distance horizontale ou verticale avec une valeur de 17 mm.
3. À l'aide de l'outil de géométrie externe, sélectionnez le sommet supérieur droit comme affiché dans l'image ci-dessous.

![](/images/Tut17_rechtangleholeunconstrained.png)

Maintenant, en utilisant les dimensions du dessin, appliquer les contraintes suivantes.

1. Sélectionnez le point de la géométrie externe et le sommet supérieur droit de l'esquisse désormais carrée et appliquer une contrainte de distance horizontale de 7 mm.
2. Sélectionnez le point de la géométrie externe et le sommet en haut à droite de l'esquisse désormais carrée et appliquer une contrainte de distance verticale de 11 mm.

Le résultat devrait être comme suit.

![](/images/Tut17_rectangleholeconstrained.png)

À ce stade, si nous devions simplement faire une poche sur cette esquisse, le trou qui en résulterait serait perpendiculaire à la face inclinée à laquelle elle est appliquée, et ce n'est pas ce que nous voulons.

![](/images/Tut17_wrongplaneforpocket.png)

Nous voulons que le trou soit perpendiculaire à la face arrière, mais ses dimensions projetées ne sont pas les dimensions de 17 mm x 17 mm qui sont données dans le dessin. Maintenant, nous pouvons faire le calcul et calculer les dimensions nécessaires, ou nous pouvons utiliser les outils fournis dans FreeCAD pour faire cette projection pour nous.

Une vidéo des étapes utilisées dans cette partie du tutoriel est ici: <https://youtu.be/x4d5nZPWCLQ>

Pour créer une cavité qui a le rectangle incliné comme sortie, nous dessinons un nouveau rectangle sur le côté arrière, en utilisant la projection du rectangle incliné comme référence externe.
Orientez le solide pour voir à nouveau la face arrière de la pièce et sélectionnez la face arrière pour appliquer l'esquisse finale.

![](/images/Tut17_profilewithsideblocksrearplane.png)

Sélectionnez ![](/images/PartDesign_NewSketch.svg) [Nouvelle esquisse](/PartDesign_NewSketch/fr "PartDesign NewSketch/fr") dans la barre d'outils ou dans le menu PartDesign. Maintenant, en mode d'édition d'esquisse, nous ne voyons pas le rectangle esquissé sur la pente. Pour le rendre sélectionnable, nous basculons la vue combinée dans l'onglet modèle et sélectionnons la dernière esquisse réalisée (Sketch003) sur le plan incliné. Ensuite, en utilisant la barre d'espace, rendez-la visible. Ensuite, sélectionnez la fonction miroir ci-dessus (mirrored001) et à nouveau à l'aide de la barre d'espace, masquez-le. Ensuite, vous devriez voir le rectangle incliné à l'intérieur de la vue 3D. Vous pouvez continuer à travailler avec l'onglet du modèle visible ou revenir à l'onglet des tâches. À l'aide de l'outil ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr"), sélectionnez les bords horizontaux supérieur et inférieur du rectangle incliné. Ensuite, ajoutez un nouveau rectangle à l'esquisse à l'aide de l'outil ![](/images/Sketcher_CreateRectangle.svg) [Rectangle](/Sketcher_CreateRectangle/fr "Sketcher CreateRectangle/fr").

![](/images/Tut17_rectangleunconstrained.png)

1. Sélectionnez le sommet supérieur gauche du nouveau rectangle et le point supérieur gauche de la géométrie externe et cliquez sur la contrainte de coïncidence.
2. Cliquez sur le sommet inférieur droit du nouveau rectangle et le point inférieur droit de la géométrie externe et cliquez sur la contrainte de coïncidence.

Et nous devrions finir avec ça.

![](/images/Tut17_rectangleconstrained.png)

Pour la dernière étape de ce tutoriel, fermez la fenêtre d'esquisse par "fermer" ou "fin de modification" dans le menu contextuel de sketch004, puis sélectionnez la fonction ![](/images/PartDesign_Pocket.svg) [Cavité](/PartDesign_Pocket/fr "PartDesign Pocket/fr") dans la barre d'outils ou dans le menu PartDesign. Dans le menu déroulant "Type", sélectionnez **A travers tout** et cliquez sur le bouton OK.

![](/images/Tut17_final.png)

À ce stade, vous verrez des lignes qui proviennent d'intersections. Dans ce cas, le *bloc latéral* croise avec le *profil de base* en le laissant apparaître comme un bloc triangulaire au-dessus du profil (c'est-à-dire, il y a une ligne supplémentaire visible dans l'image ci-dessus sur la face droite du modèle) . Pour supprimer ces lignes, vous pouvez soit activer *affiner la forme* dans vos paramètres de conception de pièce, soit, pour économiser une certaine vitesse de traitement et conserver ces lignes lors de la construction, l'activer individuellement à chaque fonction. Le réglage au niveau de la fonctionnalité peut être effectué dans l'onglet "données" de la fonctionnalité. Définissez [***refine* property**](/Property_editor/fr#Données "Property editor/fr") sur TRUE pour que la fonction de cavité Pocket001 lance l'affinage.

![](/images/Tut17_refine.png)

![](/images/Tut17_final_refined.png)

Une vidéo de ces étapes du tutoriel est ici:
<https://youtu.be/UYI0gvxCYeI>

Ce tutoriel ainsi que votre modèle sont terminés.

## Ressources Additionelles

* Fichier FreeCAD pour comparaison (fait avec 0.17) [Télécharger](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd)

Retrieved from "<http://wiki.freecad.org/index.php?title=Basic_Part_Design_Tutorial/fr&oldid=1514661>"