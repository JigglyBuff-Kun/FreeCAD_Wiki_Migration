---
title: Documentation pour utilisateurs expérimentés
---
![](/images/Power_user_hub.png)

---

C'est l'endroit à venir si vous êtes un utilisateur expérimenté et que vous voulez en savoir plus sur la personnalisation et l'extension de FreeCAD.

FreeCAD est extensible par du code [Python](/Python/fr "Python/fr") qui est exécuté directement dans la [console Python](/Python_console/fr "Python console/fr") ou chargé à partir de modules au démarrage. Cela signifie que vous pouvez modifier FreeCAD sans avoir besoin de recompiler le programme. Par exemple, vous pouvez :

* **Créer et modifier la géométrie** : vous pouvez créer un nouveau type d'objet, soit à partir de zéro, soit en adaptant un type existant.
* **Créer des outils et des commandes personnalisés** : ajoutez votre propre ensemble d'outils qui exécutent votre code.
* **Modifier l'interface** : créer des barres d'outils pour y placer vos outils, créer des fenêtres, des panneaux ou des interfaces spéciales pour interagir avec vos outils.
* **Modifier la représentation scénographique** : FreeCAD a des processus séparés pour construire la géométrie et afficher cette géométrie à l'écran. Vous avez un accès complet à la façon dont le contenu de la scène est affiché à l'écran, vous pouvez donc modifier cette représentation, interagir avec elle ou lui ajouter un comportement personnalisé. Vous pouvez également ajouter des widgets d'écran personnalisés, comme des informations, des glisseurs, des ancres ou des entités temporaires.

Si vous souhaitez contribuer au contenu de ces pages, demandez un compte wiki avec les droits d'éditeur [dans le forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830) et lisez les [Pages Wiki](/WikiPages/fr "WikiPages/fr") pour les directives générales que vous devez suivre. Pour d'autres façons de contribuer au projet, consultez la page [Contribuer à FreeCAD](/Help_FreeCAD/fr "Help FreeCAD/fr").

## Personnaliser FreeCAD

* [Personnaliser l'interface](/Interface_Customization/fr "Interface Customization/fr") : Les fondamentaux : les barres d'outils et les raccourcis claviers.
* [Travailler avec les macros](/Macros/fr "Macros/fr") : Enregistrer facilement les actions répétitives ou du code Python
* [Liste de macros](/Macros_recipes/fr "Macros recipes/fr")
* [Personnaliser la barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")
* [Installer plus d'ateliers](/Installing_more_workbenches/fr "Installing more workbenches/fr")

## Scripts dans FreeCAD

### Général

* [Exemples de scripts et macros](/Scripting_and_macros/fr "Scripting and macros/fr") - Une liste de pages du wiki pertinentes.
* [Introduction à Python](/Introduction_to_Python/fr "Introduction to Python/fr") : Allez voir aussi les autres tutoriels pour Python en liens en bas de cette page.
* [Tutoriel sur les scripts Python](/Python_scripting_tutorial/fr "Python scripting tutorial/fr") : Une vue générale des scripts Python dans FreeCAD.
* [Scripts de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr") : Les bases des scripts en Python...
* [Interface et commandes](/Gui_Command/fr "Gui Command/fr") : Ajouter des commandes personnalisées dans l'interface de FreeCAD.
* [Manuel : petite introduction à Python](/Manual:A_gentle_introduction/fr "Manual:A gentle introduction/fr") : Introduction en plusieurs chapitres aux scripts Python dans FreeCAD.
* Utiliser des [Unités](/Units/fr "Units/fr") variées dans FreeCAD.
* [Profilage](/Profiling/fr "Profiling/fr") du code Python.
* [Débogage](/Debugging/fr#D.C3.A9bogage_Python "Debugging/fr") du code Python.
* [Environnement de développement pour Python](/Python_Development_Environment/fr "Python Development Environment/fr") - Un développement simplifié pour Python dans FreeCAD

### Modules

Le fonctionnement de FreeCAD est séparé en modules qui traitent de types de données et d'applications spéciales. FreeCAD a intégré des modules et des modules d'extension (plug-ins). Une fois que les modules de plug-in sont installés, ils deviennent disponibles aussi facilement que les modules intégrés. Les modules décrits ci-dessous sont les modules par défaut, inclus dans chaque installation FreeCAD.

* Les [modules intégrés](/Builtin_modules/fr "Builtin modules/fr") sont les principaux modules de FreeCAD. Ils contiennent les outils pour manipuler les configurations générales de FreeCAD, les documents et leur contenu.
* [Création d'Ateliers](/Workbench_creation/fr "Workbench creation/fr") vous montre comment créer votre propre atelier.

#### Travailler avec les maillages

* [Mesh Scripts](/Mesh_Scripting/fr "Mesh Scripting/fr"): comment interagir avec l'[atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr")

#### Travailler avec les objets Parts

* [Atelier Part](/Part_Workbench "Part Workbench") : comment les outils et la structure de [Open CASCADE Technology](https://fr.wikipedia.org/wiki/Open_CASCADE_Technology) sont utilisés dans FreeCAD.
* Les [Scripts pour création topologique](/Topological_data_scripting/fr "Topological data scripting/fr") : interaction avec l'atelier Part.
* [PythonOCC](/PythonOCC/fr "PythonOCC/fr") :comment utiliser toute la puissance du moteur Open CASCADE.
* [Conversion objet Mesh en Part](/Mesh_to_Part/fr "Mesh to Part/fr") : conversion entre les types d'objets.

#### Accéder aux graphes de scène de Coin

* [Graphe de scène](/Scenegraph/fr "Scenegraph/fr") : Comment fonctionne la représentation de la scène FreeCAD.
* [Pivy](/Pivy/fr "Pivy/fr") : Comment accéder et modifier le graphe de scène

### Contrôler l'interface avec Qt

* [PySide](/PySide/fr "PySide/fr") : comment accéder à l'interface et modifier son contenu.
* [Utilisez les modules graphiques FreeCAD](/Embedding_FreeCADGui/fr "Embedding FreeCADGui/fr") : dans d'autres applications Qt avec l'aide de PyQt.

### Travailler avec des objets paramétriques

* [Objets créés par script](/Scripted_objects/fr "Scripted objects/fr") : comment créer des objets créés par script à 100% en Python.
  + [Objets créés par script avec pièce jointe](/Scripted_objects_with_attachment/fr "Scripted objects with attachment/fr") : comment rendre les objets créés par script attachables à d'autres objets.
  + [Sauvegarde des attributs des objets scripts](/Scripted_objects_saving_attributes/fr "Scripted objects saving attributes/fr") : comment sauvegarder et restaurer les attributs de la classe proxy avec `dumps` et `loads`.
  + [Migration d'objets créés par script](/Scripted_objects_migration/fr "Scripted objects migration/fr") : comment migrer d'anciens objets créés par script vers une nouvelle classe.

### Exemples

* [Code snippets](/Code_snippets/fr "Code snippets/fr") : une collection de morceaux de code Python de FreeCAD, pour servir d'ingrédients dans vos scripts...
* [Fonction - tracer une ligne](/Line_drawing_function/fr "Line drawing function/fr") : comment construire un outil simple pour dessiner des lignes.
* [Création d'une fenêtre de dialogue](/Dialog_creation/fr "Dialog creation/fr") : comment construire des fenêtres de dialogues avec Qt designer et les utiliser dans FreeCAD.
* [Intégrer FreeCAD](/Embedding_FreeCAD/fr "Embedding FreeCAD/fr") : comment importer FreeCAD en tant que module Python dans d'autres applications.
* L'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") ajoute des fonctions de dessin 2D de base à FreeCAD. Il est entièrement écrit en Python, donc il peut être un bon exemple si vous voulez écrire vos propres modules.
* [Bibliothèque mathématique vectorielle de FreeCAD](/FreeCAD_vector_math_library/fr "FreeCAD vector math library/fr") : quelques fonctions pratiques pour manipuler les vecteurs FreeCAD. Cette bibliothèque est également incluse dans le module Draft.

## Fonctions API

La documentation complète de l'API de FreeCAD se trouve à l'adresse <http://www.freecadweb.org/api/>. Elle contient à la fois les APIs C++ et Python, et n'est pas encore parfaitement formatée, ce qui peut être déroutant si vous recherchez du code uniquement Python. Une version plus facile à parcourir peut être trouvée [ici](/Category:API/fr "Category:API/fr"). Notez qu'elle peut être incomplète, car elle est mise à jour manuellement. Pour des informations plus précises, parcourez les modules directement depuis la console Python de FreeCAD.

En rapport : [Exposing C++ to Python](/Exposing_C%2B%2B_to_Python "Exposing C++ to Python")

## Modifications avancées

* [Démarrage et configuration](/Start_up_and_Configuration/fr "Start up and Configuration/fr"): démarrage et options en ligne de commande
* [Installation sous Windows](/Installing_on_Windows/fr "Installing on Windows/fr"): utilisation de l'installeur Windows
* [Compilation de FreeCAD sous Windows](/Compile_on_Windows/fr "Compile on Windows/fr") et [Compiler sous Linux/Unix](/Compile_on_Linux/fr "Compile on Linux/fr")
* [Identification à la marque FreeCAD](/Branding/fr "Branding/fr"): les modifications simples à effectuer sur le code source de FreeCAD pour construire votre propre application
* [Extension des modules Python](/Extra_python_modules/fr "Extra python modules/fr"): l’interpréteur Python de FreeCAD est facilement extensible par l'ajout de nombreux modules !

## Tutoriels pour Python

Voici une compilation de très bons tutoriels, pas forcement liés à FreeCAD, mais très intéressants si vous êtes totalement débutants en Python.

**Python**

* [Official python tutorial](https://docs.python.org/3/tutorial/index.html) - Un tutoriel très complet pour découvrir Python
* [Non-programmer tutorial for python](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - un excellent livre au format Wiki
* [Python for newbies](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - un grand tutoriel couvrant tous les grands principes de base.

**PySide** - Comment créer et gérer l'UI Qt de FreeCAD à partir de Python

* [tutorial](http://zetcode.com/gui/pysidetutorial/PySide) - Un tutoriel de plate-forme montrant l'utilisation de PySide avec des exemples
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/) - Un tutoriel facile à lire qui couvre PySide et PyQt avec des exemples
* [documentation PySide](http://qt-project.org/wiki/PySideDocumentation) du projet Qt (les personnes qui ont tout écrit)
* [Using QtCreator in PySide](http://qt-project.org/wiki/QtCreator_and_PySide) : Aussi depuis le Projet Qt
* [PySide reference](http://srinikom.github.io/pyside-docs/index.html) : détails inépuisables sur la minutie de PySide et Qt, une source de référence fiable
* [PySide code snippets](http://nullege.com/codes/search?cq=PySide) : une base de données interrogeable d'extraits de code PySide

Les deux références suivantes sont spécifique à PyQt (pas PySide) mais peuvent offrir des informations d'utilisation :

* [PyQt tutoriel](http://www.cs.usfca.edu/~afedosov/qttut/Basic) : Un tutoriel simple et court basé sur Linux qui vous expliquera comment travailler avec PyQt et Qt Designer
* [Programming Qt applications in python](http://vizzzion.org/?id=pyqt): Un tutoriel plus approfondi couvrant l'ensemble des processus de travail avec Qt et python.

**Pivy** - Comment interagir avec les scènes 3D de FreeCAD

* [Pivy - Incorporation d'un langage de script dynamique dans une bibliothèque de graphes de scènes](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf): Thèse qui explique Pivy en détail
* [Programmation graphique 3D de haut niveau en Python](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/): exemple Pivy de Pycon 2004
* [Introducing Pivy into studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [(Mirror)](https://www.researchgate.net/publication/228737136_Integrating_Pivy_into_Studierstube_42) : Un article qui n'est pas vraiment un tutoriel mais qui illustre bien le fonctionnement de Pivy (nécessite un compte académique)

## Projets communautaires

Sur le [Portail communautaire FreeCAD](/FreeCAD_Community_Portal/fr "FreeCAD Community Portal/fr"), vous pouvez rechercher d'autres projets basés sur FreeCAD et gérés par la communauté. Si vous avez commencé un nouveau projet FreeCAD, assurez vous de le signaler sur le [Community portal (page en anglais)](/FreeCAD_Community_Portal "FreeCAD Community Portal") ! Si vous souhaitez participer au développement de FreeCAD vous pouvez visiter la page [Aider FreeCAD](/Help_FreeCAD/fr "Help FreeCAD/fr") et voir ce que vous pouvez faire.

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/fr&oldid=1565425>"