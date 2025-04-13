---
title: Documentation pour développeurs
---

![](/images/Crystal_Clear_app_tutorials.png)

---

C'est l'endroit où il faut venir si vous voulez contribuer au développement du logiciel FreeCAD.

Ces pages sont au début de leurs développements. Si vous ne trouvez pas l'information que vous recherchez, ou vous avez trouvé des informations utiles, et qui ne sont pas liées ici, alors s'il vous plaît laissez un commentaire sur le [forum de discussion](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) et quelqu'un s'en occupera, (ou, pourquoi ne pas modifier vous même directement cette page, ou la documentation de FreeCAD !).

## Documentation pour les développeurs

La documentation pour les développeurs comprend les sections suivantes :

### Compiler FreeCAD

- [Dépôt Github](https://github.com/FreeCAD/FreeCAD). Si vous êtes nouveau avec Git, lire [Gestion du code source](/Source_code_management/fr "Source code management/fr")
- [Compiler avec Docker](/Compile_on_Docker/fr "Compile on Docker/fr")
- [Compiler sous Windows](/Compile_on_Windows/fr "Compile on Windows/fr")
- [Compiler sous Linux](/Compile_on_Linux/fr "Compile on Linux/fr")
- [Compiler sous Mac OS](/Compile_on_MacOS/fr "Compile on MacOS/fr")
- [Détails de licence](/License/fr "License/fr") à propos des licences de FreeCAD
- [Bibliothèques tierces](/Third_Party_Libraries/fr "Third Party Libraries/fr")
- [Outils tierces](/Third_Party_Tools/fr "Third Party Tools/fr")
- [Configuration de démarrage](/Start_up_and_Configuration/fr "Start up and Configuration/fr")
- [Documentation du code source](/Source_documentation/fr "Source documentation/fr")
- Utilisez le [traqueur de bogue](/Tracker/fr "Tracker/fr") lorsque vous avez un problème ou pensez avoir trouvé un bogue

### Packaging

Le [Packaging](/Packaging/fr "Packaging/fr") consiste à prendre les fichiers binaires compilés et les fichiers sources Python de FreeCAD, puis à les distribuer pour les utiliser dans un système particulier.

- [Packaging sous Linux](/Linux_packaging/fr "Linux packaging/fr")
  - [Développement de Debian](/Debian_development/fr "Debian development/fr")
  - [Debian Unstable](/Debian_Unstable/fr "Debian Unstable/fr")
  - [Buildpackage sous Git](/Git_buildpackage/fr "Git buildpackage/fr")
- [Création de paquets Windows](/Windows_packaging/fr "Windows packaging/fr")
- [MacOS packaging](/MacOS_packaging "MacOS packaging")

### Outils de support à la compilation

- Les [outils de compilation de FreeCAD](/FreeCAD_Build_Tool/fr "FreeCAD Build Tool/fr")
  - [Création d'atelier](/Workbench_creation/fr "Workbench creation/fr") dans FreeCAD
- [Débugger](/Debugging/fr "Debugging/fr") FreeCAD
- [Tester](/Testing/fr "Testing/fr") FreeCAD
- [Compilation (accélération)](</Compiling_(Speeding_up)/fr> "Compiling (Speeding up)/fr") FreeCAD
- [Intégration continue](/Continuous_Integration/fr "Continuous Integration/fr")

### Modifier FreeCAD

- Compréhension du [code source de FreeCAD](/The_FreeCAD_source_code/fr "The FreeCAD source code/fr")
- [Soumettre des patchs](/Tracker#Submitting_patches "Tracker")
- Ajouter des [Fonctionnalités](/Gui_Command/fr "Gui Command/fr") à FreeCAD ou à un atelier
- [Image de marque](/Branding/fr "Branding/fr") ou _comment donner un look unique à FreeCAD_
- [Graphisme](/Artwork/fr "Artwork/fr") créé pour FreeCAD, que vous pouvez réutiliser librement
- [Recommandations pour la charte graphique](/Artwork_Guidelines/fr "Artwork Guidelines/fr"), normes pour les icônes
- [Traduire FreeCAD](/Localisation/fr "Localisation/fr")
- [Modules Python supplémentaires](/Extra_python_modules/fr "Extra python modules/fr") ou _comment étendre les fonctionnalités de FreeCAD avec Python_
- [Google Summer of Code 2020](/Google_Summer_of_Code_2020 "Google Summer of Code 2020") participer via les programmes étudiants de Google
- [Réglage fin](/Fine-tuning/fr "Fine-tuning/fr") affiche différentes options et commutateurs de paramètres permettant de résoudre les problèmes.
- [Encapsuler une classe C++ dans Python](/Wrapping_a_Cplusplus_class_in_Python/fr "Wrapping a Cplusplus class in Python/fr") montre comment créer le wrapper Python d'une classe C++.
- [Checklist for adding a Feature to a C++ workbench](/NewFeatureCheckList_C%2B%2B "NewFeatureCheckList C++") fournit une aide aux contributeurs.

- [Traduction et ateliers externes](/Translating_an_external_workbench/fr "Translating an external workbench/fr")

### Le guide du développeur de module

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) est un livre électronique en cours d'écriture sur github, veuillez soumettre votre requête pour contribuer.

Chapitres :

- Vue d'ensemble et architecture logicielle
- Structure du code source
- Modules Base et App
- Module Gui
- Encapsulation Python
- Conception modulaire
- Analyse du module Fem (mélange C++ et Python)
- Développement du module CFD (pure Python)
- Test et débogage de module
- Contribution au développement avec git

La dernière version pdf peut être téléchargée à partir de [pdf folder](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) de ce repo git

### Intégration

#### Documentation OpenCascade

OpenCascade est une plate-forme de développement logiciel pour la modélisation 3D de surfaces et de solides, l'échange de données CAO et la visualisation, principalement sous la forme de bibliothèques C++.

- [Tutoriels Roman Lygin's](http://opencascade.wikidot.com/romansarticles)
- [Documentation en ligne complète](https://dev.opencascade.org/doc/overview/html/index.html)
- [Manuel de référence](https://dev.opencascade.org/doc/refman/html/index.html)
- [Le wiki openCascade](http://opencascade.wikidot.com) (contiendrait actuellement ?? du spam Chinois...)

#### Formats de fichiers

[File Format FCStd](/File_Format_FCStd "File Format FCStd"). Les fichiers créés avec FreeCAD sont des fichiers `.zip` contenant la géométrie [BREP](https://fr.wikipedia.org/wiki/B-Rep) ainsi que des données XML décrivent le document.

#### Solveur Sketcher

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (fil de discussion), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) dans GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) dans le code source de FreeCAD ; Les fichiers importants sont [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) et [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192).

Le solveur Sketcher n’est pas parfait, car il existe des problèmes de précision numérique lors de l’utilisation de grandes valeurs. Voir [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

Le développement d'une nouvelle architecture de solveur pourrait améliorer la façon dont le solveur est utilisé à la fois dans [l'atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") et pour l'assemblage de corps 3D. [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Feuille de route

FreeCAD, bien qu'utilisable dans certains domaines, n'est qu'au début d'un long chemin vers le grand public de la CAO. Il y a encore beaucoup à faire pour atteindre un état où nous pourrons rivaliser avec les logiciels commerciaux.

[FreeCAD 1.0 Development Cycle](/FreeCAD_1.0_Development_Cycle "FreeCAD 1.0 Development Cycle")

## Communauté

- [Canal IRC](ircs://irc.libera.chat:6697/freecad) synchronisé avec [gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Forum de développement](https://forum.freecad.org/viewforum.php?f=6)

- [Feuille de route du développement](/Development_roadmap/fr "Development roadmap/fr")

## Crédits

[Contributeurs](/Contributors/fr "Contributors/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Developer_hub/fr&oldid=1393026>"
