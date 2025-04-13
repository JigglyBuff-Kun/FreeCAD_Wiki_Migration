---
title: Atelier CAM
---

![](/images/Workbench_CAM.svg)

Icône de l'atelier CAM

## Introduction

L'![](/images/Workbench_CAM.svg) atelier CAM est utilisé pour produire les instructions machine pour les [machines à commande numérique (CNC)](https://fr.wikipedia.org/wiki/Programmation_de_commande_numérique) à partir d'un modèle 3D FreeCAD. Celui-ci produit des objets 3D réels sur des machines CNC telles que des fraiseuses, des tours, des découpeuses laser ou similaires. Généralement, les instructions sont en langage [G-code](https://fr.wikipedia.org/wiki/Programmation_de_commande_num%C3%A9rique#Fonctions_pr%C3%A9paratoires_G). Un [exemple général de simulation de séquence de parcours d'outils CNC](https://www.ange-softs.com/SIMULCNCHTML/index.html) est présenté ici.

![](/images/Pathwb.png)

Le flux de travail de l'atelier CAM de FreeCAD crée ces instructions machine comme suit :

- Un modèle 3D est l'objet de base, généralement créé à l'aide d'un ou plusieurs des ateliers ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr"), ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/fr "Part Workbench/fr") ou ![](/images/Workbench_Draft.svg) [Draft](/Draft_Workbench/fr "Draft Workbench/fr").
- Une [CAM Tâche](/CAM_Job/fr "CAM Job/fr") est créée dans l'atelier CAM. Celle-ci contient toutes les informations nécessaires pour générer le G-code nécessaire pour traiter l'usinage sur une fraiseuse CNC : il y a le brut de matière (ou stock), le [gestionnaire d'outils](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") et elle suit certaines commandes contrôlant la vitesse et les mouvements (généralement en G-code).
- Les [CAM Outils](/CAM_Tools/fr "CAM Tools/fr") sont sélectionnés comme requis par les opérations d'usinage.
- Les parcours de l'outil de fraisage sont créés en utilisant par ex. des opérations de [Profilage](/CAM_Profile/fr "CAM Profile/fr") et [Poche](/CAM_Pocket_3D/fr "CAM Pocket 3D/fr"). Ces objets CAM utilisent le langage G-code interne à FreeCAD, indépendant de la machine CNC.
- Le travail est exporté en G-code, correspondant à votre machine. Cette étape s'appelle _post-traitement_. Il y a différents post-processeurs disponibles.

## Concepts généraux

L'atelier CAM génère un G-Code définissant les parcours pour usiner le projet représenté par le modèle 3D sur la fraiseuse cible au [format G-code interne de FreeCAD](/CAM_scripting/fr#Le_Format_G-code_interne_de_FreeCAD "CAM scripting/fr"), qui est ensuite traduit dans le langage approprié pour le contrôleur CNC cible en sélectionnant le post-processeur approprié.

Le G-code est généré à partir des directives et des opérations contenues dans une tâche de CAM. Le flux des tâches les répertorie dans l'ordre desquelles elles seront exécutées. La liste est complétée en ajoutant des opérations, des habillages des parcours, des commandes supplémentaires et des modifications à partir du menu CAM ou par les boutons de l'interface graphique.

L'atelier CAM fournit un gestionnaire d'outils (bibliothèque, table d'outils), un outil d'inspection du G-code et de simulation. Il relie le post-processeur et permet d'importer et d'exporter des modèles de tâches.

L'atelier CAM possède des dépendances externes, notamment :

1. Les unités du modèle 3D FreeCAD sont définies dans les paramètres **Édition → Préférences → Général → Système d'unités par défaut**. La configuration du post-processeur définit les unités G-code finales.
2. Le chemin du fichier Macro et les tolérances géométriques sont définis dans l'onglet **Édition → Préférences → CAM → Préférences des tâches**.
3. Les couleurs sont définies dans l'onglet **Édition → Préférences → CAM → Couleurs de parcours**.
4. Les paramètres des éléments de maintien sont définis dans l'onglet **Édition → Préférences → CAM → Finitions**.
5. Pour que la qualité du modèle 3D de base respecte les exigences de l'atelier CAM, utilisez Vérifier la géométrie.

## Limitations

Certaines limitations actuelles dont vous devez être conscient :

- La plupart des outils de CAM ne sont pas de véritables outils 3D mais uniquement compatibles 2.5D. Cela signifie qu'ils prennent une forme 2D fixe et peuvent la découper à une profondeur donnée. Cependant, il existe deux outils qui produisent de véritables parcours 3D : ![](/images/CAM_3DPocket.svg) [Évidement 3D](/CAM_Pocket_3D/fr "CAM Pocket 3D/fr") et ![](/images/CAM_Surface.svg) [Surfaçage 3D](/CAM_Surface/fr "CAM Surface/fr") (qui est toujours une [fonction expérimentale](/CAM_experimental/fr "CAM experimental/fr") en novembre 2020).
- La plupart des ateliers CAM sont conçus pour une fraiseuse/routeur CNC standard à 3 axes (xyz) simple, mais les outils de tour sont en cours de développement dans la version 0.19_pre.
- La plupart des opérations dans l'atelier CAM renverront des parcours basés sur un outil/un trépan de fraise standard uniquement, quel que soit le type d'outil/trépan affecté dans un contrôleur d'outil donné, à l'exception de ![](/images/CAM_Engrave.svg) [Gravure](/CAM_Engrave/fr "CAM Engrave/fr") et ![](/images/CAM_Surface.svg) [Surfaçage 3D](/CAM_Surface/fr "CAM Surface/fr").
- Les opérations effectuées dans l'atelier CAM ne connaissent pas les mécanismes de serrage utilisés pour fixer le modèle à votre machine. Par conséquent, veuillez vérifier et simuler les parcours que vous générez avant d'envoyer le code à votre machine. Si nécessaire, modélisez vos serrages dans FreeCAD afin de mieux inspecter les parcours générés. Recherchez les éventuelles collisions avec les fixations ou autres obstacles sur les parcours.

## Unités

La gestion des unités dans CAM peut prêter à confusion. Il y a plusieurs points à comprendre :

1. Les unités de base FreeCAD pour la longueur et le temps sont respectivement "mm" et "s". La vélocité est donc "mm/s". C'est ce que FreeCAD stocke en interne indépendamment de toute autre chose
2. Le schéma d'unité par défaut utilise les unités par défaut. Si vous utilisez le schéma par défaut et que vous entrez un taux d'avance sans chaîne d'unité, il sera saisi en tant que "mm/s"
3. La plupart des machines à commande numérique attendent un débit d'alimentation sous forme de "mm/min" ou "in/min". La plupart des post-processeurs convertissent automatiquement l'unité lors de la génération de gcode.

Schémas :

1. Changer le schéma dans les préférences change la chaîne d'unité par défaut pour les champs d'entrée. Si vous êtes un utilisateur CAM et que vous préférez concevoir en métrique, il est fortement recommandé d'utiliser le schéma "Metric Small Parts & CNC". Si vous concevez en unités américaines, Imperial Decimal et Building US fonctionneront.
2. Changer le schéma de votre unité préférée n'aura aucun effet sur la sortie, mais aidera à éviter les erreurs de saisie.

Sortie :

1. La génération de l'unité correcte en sortie relève de la responsabilité du post-processeur et n'est effectuée qu'à ce moment-là.
2. L'unité de sortie de la machine n'a aucun rapport avec le schéma d'unités que vous avez choisi.
3. Les post-processeurs produisent une sortie métrique (G21), une sortie impériale (G20) ou sont configurables.
4. Les post-processeurs configurables produisent par défaut une sortie métrique (G21).
5. Si vous souhaitez que votre post-processeur configurable produise du G-code impérial (G20), définissez l'argument correct dans la configuration de sortie de votre tâche (par exemple --inches pour linuxcnc). Ceci peut être stocké dans un modèle de tâche et défini comme modèle par défaut pour le rendre automatique pour tous les tâches futures.

CAM Inspection :

1. Si vous utilisez l'outil CAM Inspection pour inspecter le G-code, vous le verrez en "mm/s" car il n'est pas post-traité.

## Hauteurs et profondeurs

De nombreuses commandes ont différentes hauteurs et profondeurs :

![](/images/Path-DepthsAndHeights.gif)

Référence visuelle pour les propriétés de profondeur (paramètres)

## Commandes

Certaines commandes sont expérimentales et ne sont pas disponibles par défaut. Pour les activer, voir [CAM Fonctions expérimentales](/CAM_experimental/fr "CAM experimental/fr").

### Commandes du projet

- ![](/images/CAM_Job.svg) [Tâche](/CAM_Job/fr "CAM Job/fr") : crée une nouvelle tâche CNC.

- ![](/images/CAM_Post.svg) [Post-traitement](/CAM_Post/fr "CAM Post/fr") : exporte un projet en G-code.

- ![](/images/CAM_Sanity.svg) [Chercher des erreurs](/CAM_Sanity/fr "CAM Sanity/fr") : vérifie les valeurs manquantes dans la tâche sélectionnée.

- ![](/images/CAM_ExportTemplate.svg) [Exporter un modèle](/CAM_ExportTemplate/fr "CAM ExportTemplate/fr") : exporte la tâche en cours en tant que modèle.

### Commandes d'outils

- ![](/images/CAM_Inspect.svg) [Inspecter des commandes](/CAM_Inspect/fr "CAM Inspect/fr") : affiche le G-code pour vérification.

- ![](/images/CAM_Simulator.svg) [Simulateur de parcours](/CAM_Simulator/fr "CAM Simulator/fr") : montre l'opération d'usinage comme le ferait la machine.

- ![](/images/CAM_SimulatorGL.svg) [Simulateur GL](/CAM_SimulatorGL/fr "CAM SimulatorGL/fr") : active le nouveau simulateur de CAM. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/CAM_SelectLoop.svg) [Sélectionner une boucle](/CAM_SelectLoop/fr "CAM SelectLoop/fr") : permet de sélectionner une boucle d'arêtes.

- ![](/images/CAM_OpActiveToggle.svg) [Activer une opération](/CAM_OpActiveToggle/fr "CAM OpActiveToggle/fr") : utilisé pour activer ou désactiver une opération d'usinage.

- ![](/images/CAM_ToolBitLibraryOpen.svg) [Gestionnaire des outils coupants](/CAM_ToolBitLibraryOpen/fr "CAM ToolBitLibraryOpen/fr") : ouvre un éditeur pour gérer les bibliothèques des outils coupants.

- ![](/images/CAM_ToolBitDock.svg) [Sélecteur d'outils coupants](/CAM_ToolBitDock/fr "CAM ToolBitDock/fr") : active le menu du sélecteur des outils coupants.

### Opérations de base

- ![](/images/CAM_Profile.svg) [Profilage](/CAM_Profile/fr "CAM Profile/fr") : crée une opération de profilage de l'ensemble du modèle ou à partir d'une ou plusieurs faces ou arêtes sélectionnées.

- ![](/images/CAM_Pocket_Shape.svg) [Poche](/CAM_Pocket_Shape/fr "CAM Pocket Shape/fr") : crée une opération de poche à partir d'une ou de plusieurs poches sélectionnées.

- ![](/images/CAM_Drilling.svg) [Perçage](/CAM_Drilling/fr "CAM Drilling/fr") : effectue un cycle de perçage.

- ![](/images/CAM_MillFace.svg) [Surfaçage](/CAM_MillFace/fr "CAM MillFace/fr") : crée un parcours de surfaçage.

- ![](/images/CAM_Helix.svg) [Parcours hélicoïdal](/CAM_Helix/fr "CAM Helix/fr") : crée un parcours hélicoïdal.

- ![](/images/CAM_Adaptive.svg) [Adaptatif](/CAM_Adaptive/fr "CAM Adaptive/fr") : crée une opération adaptative de détourage et de contournage.

- ![](/images/CAM_Slot.svg) [Rainure](/CAM_Slot/fr "CAM Slot/fr") : crée une opération de rainurage à partir d'entités sélectionnées ou de points personnalisés. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

- ![](/images/CAM_Engrave.svg) [Gravure](/CAM_Engrave/fr "CAM Engrave/fr") : crée un parcours de gravure.

- ![](/images/CAM_Deburr.svg) [Ebavurage](/CAM_Deburr/fr "CAM Deburr/fr") : crée un parcours d'ébavurage.

- ![](/images/CAM_Vcarve.svg) [Gravure en V](/CAM_Vcarve/fr "CAM Vcarve/fr") : crée un parcours d'usinage en utilisant une forme d'outil en V.

### Opérations 3D

- ![](/images/CAM_Pocket_3D.svg) [Évidement 3D](/CAM_Pocket_3D/fr "CAM Pocket 3D/fr") : crée un parcours d'usinage pour une poche 3D.

- ![](/images/CAM_Surface.svg) [Surfaçage 3D](/CAM_Surface/fr "CAM Surface/fr") : crée un parcours d'usinage pour une surface 3D. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

- ![](/images/CAM_Waterline.svg) [Contour par lignes de niveau](/CAM_Waterline/fr "CAM Waterline/fr") : crée un tracé défini par lignes de niveau pour une surface 3D. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

### Finitions du parcours

- ![](/images/CAM_DressupAxisMap.svg) [Assigner un axe](/CAM_DressupAxisMap/fr "CAM DressupAxisMap/fr"): assigne un axe par un autre.

- ![](/images/CAM_DressupPathBoundary.svg) [Limitation d'une zone](/CAM_DressupPathBoundary/fr "CAM DressupPathBoundary/fr") : ajoute une limite à un parcours d'usinage sélectionné.

- ![](/images/CAM_DressupDogbone.svg) [Dégagement des angles](/CAM_DressupDogbone/fr "CAM DressupDogbone/fr") : ajoute une finition pour l'usinage des coins à un parcours d'usinage sélectionné.

- ![](/images/CAM_DressupDragKnife.svg) [Lame rotative](/CAM_DressupDragKnife/fr "CAM DressupDragKnife/fr") : ajoute une finition pour lame rotative à un parcours d'usinage sélectionné.

- ![](/images/CAM_DressupLeadInOut.svg) [Entrée/sortie](/CAM_DressupLeadInOut/fr "CAM DressupLeadInOut/fr") : ajoute un point d'entrée et/ou de sortie à un parcours d'usinage sélectionné.

- ![](/images/CAM_DressupRampEntry.svg) [Rampe d'entrée](/CAM_DressupRampEntry/fr "CAM DressupRampEntry/fr") : ajoute une finition de rampe d'entrée d'usinage à un parcours d'usinage sélectionné.

- ![](/images/CAM_DressupTag.svg) [Attache](/CAM_DressupTag/fr "CAM DressupTag/fr") : ajoute une modification à la finition de l'attache de maintien d'un parcours sélectionné.

- ![](/images/CAM_DressupZCorrect.svg) [Correction en Z](/CAM_DressupZCorrect/fr "CAM DressupZCorrect/fr"): corrige la profondeur en Z à l'aide d'une sonde.

### Commandes supplémentaires

- ![](/images/CAM_Fixture.svg) [Décaler l'origine](/CAM_Fixture/fr "CAM Fixture/fr") : change la position de l'origine.

- ![](/images/CAM_Comment.svg) [Commentaire](/CAM_Comment/fr "CAM Comment/fr") : insère un commentaire dans le G-code d'un parcours d'outil.

- ![](/images/CAM_Stop.svg) [Arrêter](/CAM_Stop/fr "CAM Stop/fr") : insère un arrêt complet de la machine.

- ![](/images/CAM_Custom.svg) [Personnaliser](/CAM_Custom/fr "CAM Custom/fr") : insère un G-code personnalisé.

- ![](/images/CAM_Probe.svg) [Sonde](/CAM_Probe/fr "CAM Probe/fr") : crée une grille de sondage à partir d'un brut.

- ![](/images/CAM_Shape.svg) [Parcours à partir de formes](/CAM_Shape/fr "CAM Shape/fr") : crée un objet parcours d'usinage à partir d'un objet Part sélectionné. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr"). [introduit dans la version 0.19](/Release_notes_0.19/fr "Release notes 0.19/fr")

### Modifications du parcours

- ![](/images/CAM_Copy.svg) [Copie opération](/CAM_Copy/fr "CAM Copy/fr") : crée une copie paramétrique d'un objet parcours sélectionné.

- ![](/images/CAM_Array.svg) [Réseau](/CAM_Array/fr "CAM Array/fr") : crée une copie en réseau en dupliquant un parcours sélectionné.

- ![](/images/CAM_SimpleCopy.svg) [Copie simple](/CAM_SimpleCopy/fr "CAM SimpleCopy/fr") : crée une copie non paramétrique d'un objet parcours sélectionné.

### Opérations spécialisées

- ![](/images/CAM_ThreadMilling.svg) [Fraisage de filets](/CAM_ThreadMilling/fr "CAM ThreadMilling/fr"): crée une opération de fraisage de filets à partir des fonctions d'un objet de base. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

### Divers

- ![](/images/CAM_Area.svg) [Surface](/CAM_Area/fr "CAM Area/fr") : crée une zone d'usinage à partir d'objets sélectionnés. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

- ![](/images/CAM_Area_Workplane.svg) [Zone du plan de travail](/CAM_Area_Workplane/fr "CAM Area Workplane/fr") : crée une zone plane d'usinage. [_Fonctions expérimentales_](/CAM_experimental/fr "CAM experimental/fr").

## Architecture des outils coupants

Gestion des outils, des forets et de la bibliothèque d'outils. Basé sur l'architecture des outils coupants.

- [CAM Outils](/CAM_Tools/fr "CAM Tools/fr")
- [CAM Forme de l'outil](/CAM_ToolShape/fr "CAM ToolShape/fr")
- [CAM Outil coupant](/CAM_ToolBit/fr "CAM ToolBit/fr")
- [CAM Bibliothèque des outils coupants](/CAM_ToolBit_Library/fr "CAM ToolBit Library/fr")
- [CAM Contrôleur d'outil](/CAM_ToolController/fr "CAM ToolController/fr")

## Autre

- [CAM FAQ](/CAM_FAQ/fr "CAM FAQ/fr") : l'atelier CAM partage de nombreux concepts avec d'autres logiciels de FAO mais possède ses propres particularités. Si quelque chose ne va pas, c'est un bon point de départ.
- [CAM Feuille de configuration](/CAM_SetupSheet/fr "CAM SetupSheet/fr") : vous pouvez utiliser une Feuille de configuration pour personnaliser la façon dont les diverses valeurs de propriété pour les opérations sont calculées.
- [CAM Personnaliser le post-processeur](/CAM_Postprocessor_Customization/fr "CAM Postprocessor Customization/fr") : si vous avez une machine spéciale qui ne peut pas utiliser l'un des post-processeurs disponibles, vous pouvez avoir besoin d'écrire votre propre post-processeur.
- [CAM Quatrième axe](/CAM_fourth_axis/fr "CAM fourth axis/fr") : fraisage expérimental sur quatre axes.

## Préférences

- ![](/images/Preferences-path.svg) [Préférences...](/CAM_Preferences/fr "CAM Preferences/fr") : préférences disponibles dans l'atelier CAM.

## Script

Voir la page [CAM Ecrire un script](/CAM_scripting/fr "CAM scripting/fr").

## Tutoriels

- [Tutoriel CAM, pas à pas pour l'impatient](/CAM_Walkthrough_for_the_Impatient/fr "CAM Walkthrough for the Impatient/fr") : un tutoriel rapide pour se familiariser avec CAM.

## Vidéos

- [FreeCAD Path : Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL) : une playlist avec une série de 5 vidéos en anglais par sliptonic. Cette série montre comment travailler avec l'atelier Path.
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC) : une playlist avec une série de 7 vidéos en anglais par CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ) : une playlist avec une série de 8 vidéos en anglais par CAD CAM Lessons.
- Voir aussi la section [Fabrication assistée par ordinateur (FAO)](</Video_tutorials/fr#Fabrication_assistée_par_ordinateur_(FAO)> "Video tutorials/fr") de la page wiki [Tutoriels vidéo](/Video_tutorials/fr "Video tutorials/fr").

## Feuille de route

- [CAM Plan de développement](/CAM_Development_Roadmap "CAM Development Roadmap") : lisez ceci si vous êtes un développeur et que vous souhaitez contribuer à CAM.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Workbench/fr&oldid=1494643>"
