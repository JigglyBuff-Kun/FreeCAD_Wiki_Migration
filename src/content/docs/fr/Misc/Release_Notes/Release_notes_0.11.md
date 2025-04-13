---
title: Release notes 0.11/fr
---
# Notes de version 0.11

Ceci est un sommaire des plus importants changements et nouvelles fonctionnalités disponibles dans la version 0.11 de FreeCAD. La liste complète est disponible [ici](http://www.freecadweb.org/tracker/changelog_page.php).

![](/images/FreeCAD011.png)

Une capture d'écran de la version 0.11

### Général

* Le [Projet de traduction FreeCAD](http://crowdin.net/project/freecad) a reçu une aide précieuse de beaucoup de volontaires de par le monde et FreeCAD est désormais livré en pas moins de 15 langues : anglais, allemand, français, italien, suédois, espagnol, portugais, russe, ukrainien, norvégien, afrikaans, finnois, chinois simplifié, croate et néerlandais. Plusieurs autres langues sont en cours d'élaboration pour les prochaines versions.

![](/images/Release011-translation.jpg)

* Plusieurs améliorations ont été apportées à FreeCAD, par exemple l'arbre hiérarchique permet désormais des groupements en piles complexes d'objets, afin de rendre l'historique de géométries facilement accessible et modifiable. Des améliorations à l'API Python permettent aussi aux objets de mieux interagir avec l'arbre, définir leur comportement, leurs icônes, etc.

![](/images/Release011-dependency.jpg)

* Le copier/coller a été amélioré, afin de copier aisément des objets entre des documents.
* L'[atelier Pièce](/Part_Workbench/fr "Part Workbench/fr") comporte de nouveau outils tels que la mise en miroir et les congés et chanfreins d'arêtes.

### Esquisse et conception de pièces

* Le solveur de contraintes de l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") a été totalement récrit et même s'il est toujours incomplet, l'Esquisseur dispose d'un bon éventail d'outils tels que des lignes, rectangles et cercles, et des contraintes telles que coïncidence de points, parallélisme, longueur fixe ou contraintes horizontales et verticales.

* En plus de l'Esquisseur, un nouvel atelier Conception de pièces permet maintenant de construire rapidement des solides à partir d'esquisses. Dorénavant dans FreeCAD, tout est paramétrique, en tout temps vous pouvez retourner en arrière et changer votre esquisse, et toute géométrie basée sur l'esquisse s'adaptera automatiquement.

![](/images/Release011-sketcher.jpg)

![](/images/Movie.png) Exemples: [Démo de l'Esquisseur](http://www.youtube.com/watch?v=hvXupH5bA0E) • [Démo de Conception de pièces](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

### Simulation de robot

* L'[atelier Robot](/Robot_Workbench/fr "Robot Workbench/fr") dispose de plus d'outils en interface graphique et est maintenant assez fonctionnel pour vous permettre de simuler des mouvements de robots industriels.

![](/images/Release011-robot.jpg)

### Planche à dessin

* L'accrochage a été grandement optimisé et fonctionne maintenant très rapidement, même sur des objets complexes.
* L'outil "Trimex" permet maintenant d'extruder des faces simples, offrant ainsi un raccourci pratique à l'outil Extrusion de l'atelier Pièce.
* La méthodologie de la planche à dessin vers la mise en plan a aussi été optimisée : tous les objets créés avec l'atelier Planche à dessin peuvent être maintenant placées dans une mise en plan, et ils offrent tous les mêmes possibilités de modification que les objets pièces standards, offrant la possibilité de changer leur position sur la feuille, les faire pivoter et redimensionner à la volée. Ils offrent aussi quelques fonctionnalités supplémentaires, comme le remplissage par hachures.

![](/images/Release011-draft-drawing.jpg)

* La Planche à dessin offre aussi de nouveaux outils tel que les polygones réguliers et les BSplines
* Un nouvel outil d'édition permet de modifier la géométrie de la plupart des objets de la planche à dessin.

![](/images/Release011-draft.jpg)

* Le texte des cotes peut maintenant être édité ou déplacé, et les fils (wires) peuvent se terminer avec une flèche, ce qui permet de les utiliser pour les annotations
* Plusieurs commandes telles que déplacer, pivoter ou coter permettent de créer des copies multiples sans quitter l'outil
* L'atelier Planche à dessin s'est aussi dotée d'une [API](/Draft_API/fr "Draft API/fr") Python.
* L'importation DXF supporte maintenant les attributs de blocs

![](/images/Movie.png) Exemples : [Démo de la Planche à dessin](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

### Images

* L'atelier image dispose maintenant d'un objet plan image (ImagePlane) afin d'afficher une image dans la scène 3D, ce qui peut être utile pour construire des géométries à partir de plans numérisés

### Documentation

* Plusieurs traductions du [manuel FreeCAD](/Online_Help_Toc/fr "Online Help Toc/fr") sont maintenant très avancées. Consultez la page principale !

Traductions disponibles de cette page : [![](/images/Flag-en.jpg)](/Release_notes_0.11 "Release notes 0.11 ") [![](/images/b/b7/Flag-de.jpg)](/Release_notes_0.11/de "Release notes 0.11/de") [![](/images/Flag-es.jpg)](/Release_notes_0.11/es "Release notes 0.11/es ") [![](/images/8/80/Flag-it.jpg)](/Release_notes_0.11/it "Release notes 0.11/it") [![](/images/Flag-pl.jpg)](/Release_notes_0.11/pl "Release notes 0.11/pl ") [![](/images/5/57/Flag-ru.jpg)](/Release_notes_0.11/ru "Release notes 0.11/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.11/fr&oldid=1015973>"