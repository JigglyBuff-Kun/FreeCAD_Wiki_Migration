---
title: Personnaliser la barre d'outils
---
|  |
| --- |
| Tutoriel |
| Thème |
| Personnalisation des barres d'outils |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 5 minutes |
| Auteurs |
| [Mario52](/User:Mario52 "User:Mario52") |
| Version de FreeCAD |
| Toutes |
| Fichiers exemples |
| *None* |
| Voir aussi |
| [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr") |
|  |

## Sommaire

Ce tutoriel montre comment ajouter un bouton pour une [macro](/index.php?title=Macro/fr&action=edit&redlink=1 "Macro/fr (page does not exist)") à une barre d'outils personnalisée.

Pour des informations plus générales, voir [Personnalisation de l'interface](/Interface_Customization/fr "Interface Customization/fr").

## Utilisation

**1.** Trouver le Menu Personnaliser

* Cliquez sur **Menu Principal → Outils → Personnaliser**,

![Personnaliser](/images/CustomizeToolBar_01.png)

Personnaliser

* ou faites un clic droit sur n'importe quelle barre d'outils

![Cliquez sur le bouton droit de la souris](/images/CustomizeToolBar_02.png)

Cliquez sur le bouton droit de la souris

* la fenêtre "Personnaliser" s'affiche

![La fenêtre "Personnaliser" s'affiche](/images/CustomizeToolBar_03.png)

La fenêtre "Personnaliser" s'affiche

**2.**Transformer une Macro en Macro-Outil

* Sélectionnez l'onglet "Macro"

* Cliquez sur le bouton ...  pour ajouter une icône pour votre macro.

![Sélectionner une barre d'outils](/images/CustomizeToolBar_04.png)

Sélectionner une barre d'outils

* Cherchez une icône appropriée parmi les icônes FreeCAD existantes,

[ou ajoutez votre propre icône en cliquant sur  Ajouter des icônes ...].   (développez un exemple)

![Ajouter une icône](/images/CustomizeToolBar_05.png)

Ajouter une icône

& nbsp; & nbsp; & nbsp; [Vous obtiendrez une fenêtre de sélection de fichier. Sélectionnez votre fichier image personnalisé (format PNG, 64x64 pixels)]

![Rechercher un fichier](/images/CustomizeToolBar_06.png)

Rechercher un fichier

* Sélectionnez votre icône et cliquez sur le bouton OK

![Sélectionnez votre icône](/images/CustomizeToolBar_07.png)

Sélectionnez votre icône

* L'icône sélectionnée est maintenant affichée, cliquez sur le bouton libellé ....

![Votre icône est affichée](/images/CustomizeToolBar_08.png)

Votre icône est affichée

* Sélectionnez la macro fournie dans la ligne  *'Macro:'*  et spécifiez un  *'Texte menu'* : (qui apparaîtra comme l'étiquette texte dans le menu); remplissez également le  *'infobulle':*  (qui est le texte qui apparaîtra lorsqu'une souris est sur le bouton de la barre d'outils); D'autres lignes sont facultatives.

* Cliquez sur le bouton Ajouter

![Cliquez sur le bouton](/images/CustomizeToolBar_09.png)

Cliquez sur le bouton

* Le bouton de la macro-outil est maintenant créé.

![Votre bouton est créé](/images/CustomizeToolBar_10.png)

Votre bouton est créé

**3.** Créez une barre d'outils en dehors de l'atelier **Macro** qui contient le **Macro-outil** créé.

* Sélectionnez l'onglet "Barre d'outils" et choisissez l'atelier (pour lequel la barre d'outils est fournie) dans le menu déroulant à droite (**Part** dans cet exemple).

     [Depuis la version 0.15, il y a une barre d'outils ![](/images/Freecad.svg) Globale. Si celle-ci est sélectionnée, la barre d'outils fournie sera présente dans chaque atelier.]

![Onglet Barre d'outils](/images/CustomizeToolBar_11.png)

Onglet Barre d'outils

* Dans le menu déroulant de gauche, sélectionnez **Macros**.

![Macros](/images/CustomizeToolBar_12.png)

Macros

* La Macro-outil et son icône apparaît dans la liste.

![Votre icône est listée](/images/CustomizeToolBar_13.png)

Votre icône est listée

* Cliquez le bouton Nouveau...

![Cliquez le bouton Nouveau](/images/CustomizeToolBar_14.png)

Cliquez le bouton Nouveau

* Dans la fenêtre "Nouvelle barre d'outils" entrez le nom de la nouvelle barre d'outils supplémentaire pour l'atelier "Part" et cliquez le bouton OK

![Entrez le nom de la nouvelle barre d'outils](/images/CustomizeToolBar_15.png)

Entrez le nom de la nouvelle barre d'outils

* La barre d'outils est maintenant créée.

* Pour ajouter la macro-outil juste créée à cette barre d'outils, sélectionnez la dans la fenêtre de gauche puis cliquez sur le Bouton flèche bleue pointant à droite.

![Sélectionnez votre macro](/images/CustomizeToolBar_16.png)

Sélectionnez votre macro

* Vous venez maintenant de créer une barre d'outils appelée "Camera" (avec une macro-outil **Camera** à l'intérieur)

* Cliquez sur le bouton Fermer.

![Fermer](/images/CustomizeToolBar_17.png)

Fermer

* Votre nouvelle barre d'outils est maintenant affichés dans le menu contextuel de la barre d'outils. Ses icônes (dans notre exemple seulement la caméra) seront visible, si la barre d'outils est activée (coché bleu).

![Nouvelle barre d'outils](/images/CustomizeToolBar_18.png)

Nouvelle barre d'outils

Retrieved from "<http://wiki.freecad.org/index.php?title=Customize_Toolbars/fr&oldid=1467915>"