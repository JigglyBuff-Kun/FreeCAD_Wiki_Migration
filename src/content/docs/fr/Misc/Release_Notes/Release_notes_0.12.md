---
title: Release notes 0.12/fr
---
# Notes de version 0.12

Ceci est un sommaire des changements les plus intéressants dans la plus récente version stable de FreeCAD. Voir [ici](http://www.freecadweb.org/tracker/changelog_page.php) pour une liste complète des changements.

Versions antérieures : [0.11](/Release_notes_0.11 "Release notes 0.11")

### Bienvenue !

* Lorsque vous démarrez FreeCAD pour la première fois, vous êtes maintenant accueilli par le nouveau Start Center, qui rassemble les actions les plus courantes que vous voudriez faire, telles qu'ouvrir un atelier en particulier, ouvrir l'un des fichiers récents sur lesquels vous travailliez, lire les dernières nouvelles sur le développement de FreeCAD, ou regarder un des nombreux nouveaux tutoriels vidéo que l'héroïque communauté FreeCAD a récemment produits.

![](/images/FreeCAD_start_center.jpg)

### Sketcher & PartDesign

![](/images/Rim_bling.png)

* L'atelier [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") a bénéficié d'un énorme travail depuis la dernière version, et est maintenant basé sur un nouveau solveur conçu à partir de zéro pour cette tâche. Le sketcher peut maintenant accomplir presque toutes les opérations de dessin 2D de la [Planche à dessin](/Draft_Workbench/fr "Draft Workbench/fr"), et permet de placer un large éventail de contraintes sur des éléments d'esquisse.

* En outre, l'[atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") a aussi beaucoup évolué, et offre plusieurs outils communs (et totalement paramétriques) pour construire des modèles 3D à partir d'esquisses, tels que protrusion, lissage et révolution.

### Architecture

* Un nouveau [module Architectural](/Arch_Workbench/fr "Arch Workbench/fr") fait maintenant partie de FreeCAD. Il est encore dans un état de développement embryonnaire, mais il propose déjà quelques objets utiles, tels que des murs et éléments structuraux (colonnes et poutres). Ceux-ci peuvent être construits à partir de géométries 2D existantes, telles que des lignes, fils et esquisses, en spécifiant l'épaisseur et la hauteur ou, dans le cas d'éléments structuraux, à partir de profils 2D. Ils peuvent aussi être basés sur des solides, ou même inclure d'autres formes solides, comme additions ou même soustractions, permettant pratiquement n'importe quelle géométrie possible.

![](/images/Arch_screenshot.jpg)

* Le module Arch comporte également un module d'importation [IFC](http://en.wikipedia.org/wiki/fr:Industry_Foundation_Classes "wikipedia:fr:Industry Foundation Classes"), un module d'importation et d'exportation [DAE (collada)](http://en.wikipedia.org/wiki/fr:Collaborative_Design_Activity "wikipedia:fr:Collaborative Design Activity"), ainsi qu'un module d'exportation [OBJ](http://en.wikipedia.org/wiki/fr:Objet_3D_(format_de_fichier) "wikipedia:fr:Objet 3D (format de fichier)") spécial, plus adapté aux modèles architecturaux que le module d'exportation régulier.

* Également dans le module Arch, une collection grandissante d'outils facilitant le travail sur des objets de maillage provenant d'applications externes telles que [Blender](http://www.blender.org). Les objets de maillage, s'ils sont bien modélisés, peuvent être facilement et automatiquement convertis en formes propres, puis en objets Arch paramétriques.

### Planche à dessin (2D Draft)

![](/images/Draft_taskview.jpg)

* Récupérez votre espace de travail ! L'atelier [Planche à dessin (Draft)](/Draft_Workbench/fr "Draft Workbench/fr") comporte maintenant une nouvelle interface qui utilise le panneau de tâches de FreeCAD, qui rassemble toutes les interactions avec l'utilisateur en un seul endroit, tout en récupérant l'espace précieux utilisé par la barre d'outils Draft. Pour activer ce mode, allez dans les préférences Draft et sélectionnez le mode « Vue Tâches ».

* L'outil Draft Trimex (pour ajuster/prolonger les éléments) peut maintenant extruder les faces simples d'objets existants.

* Plusieurs nouveaux modes d'[accrochage](/Draft_Snap/fr "Draft Snap/fr") ont été ajoutés, permettant d'accrocher perpendiculairement ou parallèlement à des lignes existantes, et à des positions alignées avec d'autres segments de ligne.

* L'atelier Draft comprend aussi un nouvel outil produisant, dans un même document, une vue projetée sur un plan de n'importe quelle forme 3D.

* Les objets Draft peuvent désormais être dessinés directement sur des faces existantes. Si vous n'aviez pas spécifié un plan de travail, il s'adaptera temporairement à la face sous-jacente.

* L'atelier Draft peut maintenant importer des courbes de Bézier depuis des fichiers SVG.

Traductions disponibles de cette page : [![](/images/Flag-en.jpg)](/Release_notes_0.12 "Release notes 0.12 ") [![](/images/9/98/Flag-es.jpg)](/Release_notes_0.12/es "Release notes 0.12/es") [![](/images/Flag-it.jpg)](/Release_notes_0.12/it "Release notes 0.12/it ") [![](/images/0/0e/Flag-pl.jpg)](/Release_notes_0.12/pl "Release notes 0.12/pl") [![](/images/Flag-ru.jpg)](/Release_notes_0.12/ru  "Release notes 0.12/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.12/fr&oldid=1020547>"