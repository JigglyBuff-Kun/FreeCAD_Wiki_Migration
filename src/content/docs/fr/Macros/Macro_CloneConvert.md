---
title: CloneConvert
---

|                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro CloneConvert                                                                                                                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| Crée un Clone/Copie/Composé de l'objet ou des objets, puis converti dans une position et une taille choisie (_inch, mm, m, µm_...) ou au choix. L'objet de base est reconnu en _mm_ (base FreeCAD). Version macro : 00.16 Date dernière modification : 2025-01-06 Version FreeCAD : ≥0.18 Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/0a/Macro_CloneConvert.png) Auteur: mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                        |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                       |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/0/0a/Macro_CloneConvert.png)                                                                                                                                                                                                                                                                                                                            |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                 |
| 00.16                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                         |
| 2025-01-06                                                                                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                            |
| ≥0.18                                                                                                                                                                                                                                                                                                                                                                                                         |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                               |

## Description

Crée un clone ou une copie de l'objet puis le convertit dans une position et une taille choisie (_inch, mm, m, µm_...) ou libre. L'objet de base est reconnu en _mm_ (base FreeCAD).

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/9f2f2f6144e1307a048f1840ef99300c/raw/fb76b3c728c1c7cd085e87f5d6d223d9f79bb574/Macro_CloneConvert.FCMacro)_

```

# This code is copied instead of the original macro code
# to guide the user to the online download page.
# Use it if the code of the macro is larger than 64 KB and cannot be included in the wiki
# or if the RAW code URL is somewhere else in the wiki.

from PySide import QtGui, QtCore

diag = QtGui.QMessageBox(QtGui.QMessageBox.Information,
    "Information",
    "This macro must be downloaded from this link\n"
    "\n"
    "https://gist.githubusercontent.com/mario52a/9f2f2f6144e1307a048f1840ef99300c/raw/fb76b3c728c1c7cd085e87f5d6d223d9f79bb574/Macro_CloneConvert.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/9f2f2f6144e1307a048f1840ef99300c/raw/fb76b3c728c1c7cd085e87f5d6d223d9f79bb574/Macro_CloneConvert.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/9f2f2f6144e1307a048f1840ef99300c/raw/fb76b3c728c1c7cd085e87f5d6d223d9f79bb574/Macro_CloneConvert.FCMacro>">raw code</a>

## Utilisation

1. Exécuter la macro
2. Définissez les paramètres XYZ
3. Choisissez "Clone" ou "Copie".
4. Choisissez une unité de mesure
5. Sélectionnez votre objet
6. Cliquez sur Ok.

## Remarques

- Si aucune valeur n'est entrée une copie ou un clone sera créé sans modification.
- Si aucun objet n'est sélectionné le bouton Ok change de couleur et devient rouge si l'opération c'est bien déroulée le Ok devient vert.

La valeur de **BoundingBox**, **Volume** et **Surface** est affichée dans la [Vue Rapport](/Report_view/fr "Report view/fr") dans le cas de **Copier** plusieurs objets, l'affichage montrera BoundingBox 0.0.

La base est l'exemple du mm avec un cube de **1 mm** de côtés:

Sélectionnez dans la liste déroulante (combobox) l'unité **inch** (pouce), la valeur des champs **Scales free** s'ajustent automatiquement à **25,4** mm qui correspond à un pouce (ces champs peuvent être modifiés séparément). Cliquez sur le bouton Ok, le clone de l'objet ici le cube de **1 mm** de côtés aura comme dimensions **25,4 mm x 25,4 mm x 25,4 mm**.

**150%** = **1,50** dans les champs **"Scale free"**  
**104%** = **1,04** dans les champs **"Scale free"**

Opération inverse :

Si vous voulez réduire un objet par exemple le cube de 25,4 mm (1 pouce) en un cube de 1 mm de côtés, utilisez la formule suivante ,

**1 / 25,4 = 0,0393700** et entrez la valeur **0,0393700** (avec une virgule) dans les champs Scale free XY et Z.

Dans un cube de 5 mm, faites **5 / 25,4 = 0,1968503** et entrez la valeur **0,1968503** (avec une virgule) dans les champs Scale free XY et Z.

**50%** = **0,50** dans les champs **"Scale free"**  
 **4%** = **0,04** dans les champs **"Scale free"**

Les unités prédéfinies sont :
km, hm, dam, m, dm, cm, **mm**, µm, nm, inch, link, foot, yard, perch, chain, furlong, mile, league, nautique.

![CloneConvert](/images/Macro_CloneConvert_01.png)

CloneConvert

- **Mode**
- **Clone :** Crée un clone de ou des objet(s) sélectionné(s).
- **Copy  :** Crée une copie de ou des objet(s) sélectionné(s).
- **Comp  :** Crée un compound de ou des objet(s) sélectionné(s)
- **Increm. :** incrémente les coordonnées à la position (Placement, Rotation ... ) actuelle de la sélection  
  Si la case n'est pas activée le Placement commence aux coordonnées 0,0,0 de FreeCAD  
  Dans le cas d'un compound, le placement renseigné dans la vue combinée est [0,0,0], le placement commence à la position de l'objet  
  Dans ce cas le Placement ne commence pas à la position 0,0,0 utilisez le bouton ValueAt()  
  pour obtenir le Placement réel du sous objet sélectionné Face, Wire, Line ....
- **Unique  :** Si cette case est cochée et que plusieurs objets sont sélectionnés il sera créé un seul objet à l'échelle demandée, si non les objets créés sont indépendants.

- **Coordonnées**
- **... :** Ce bouton aligne les valeurs YZ à la valeur X pour obtenir le mêmes valeurs ​​XYZ (ou manuellement)  
  Deux clics sur le bouton mettent les coordonnées à 0.0
- **Coordinate X :** Déplace l'objet aux coordonnées de placement X (facultatif) (Base 0,0,0 si Increm. n'est pas activé)
- **Coordinate Y :** Déplace l'objet aux coordonnées de placement Y (facultatif) (Base 0,0,0 si Increm. n'est pas activé)
- **Coordinate Z :** Déplace l'objet aux coordonnées de placement Z (facultatif) (Base 0,0,0 si Increm. n'est pas activé)

- **Rotation**
- **... :** Ce bouton aligne les valeurs Pitch et Roll à la valeur Pitch pour obtenir le mêmes valeurs ​​XYZ (ou manuellement)  
  Deux clics sur le bouton mettent les coordonnées à 0.0
- **Yaw (Z )  :** Donne un angle de rotation dans l'axe Z (Yaw) (Début 0 si Increm. n'est pas validé)
- **Pitch ( Y ) :** Donne un angle de rotation dans l'axe Y (Pitch) (Début 0 si Increm. n'est pas validé)
- **Roll ( X )  :** Donne un angle de rotation dans l'axe X (Roll) (Début 0 si Increm. n'est pas validé)

- **Scale predefined**
- **Scale predefined :**Les unités d'échelle predefinies, km, hm, dam, m, dm, cm, **mm**, µm, nm, inch, link, foot, yard, perch, chain, furlong, mile, league, nautique ou choisissez une valeur libre dans les champs Scale free.

- **Number copy**
- **Number copy :** Nombre de copies désirées

- **Scale free**
- **... :** Ce bouton aligne les valeurs YZ à la valeur X pour obtenir le mêmes valeurs ​​XYZ (ou manuellement)  
  Deux clics sur le bouton mettent les coordonnées à 1.0
- **Scale X :** échelle libre, si la valeur entrée est négative ex: **( -10)** , l'objet sera mis à l'échelle de **10** fois et sera inversé dans l'axe **X**, pour réduire l'objet, il faut entrer une valeur décimale exemple **(0,5)** réduira l'objet de 1/2 dans l'axe X.
- **... :** Ce bouton aligne la valeur des axes YZ à la valeur de X si vous voulez que les trois valeurs XYZ soient égales.
- **Scale Y :** échelle libre, si la valeur entrée est négative ex: **( -10)** , l'objet sera mis à l'échelle de **10** fois et sera inversé dans l'axe **Y**, pour réduire l'objet, il faut entrer une valeur décimale exemple **(0,5)** réduira l'objet de 1/2 dans l'axe Y.
- **Scale Z :** échelle libre, si la valeur entrée est négative ex: **( -10)** , l'objet sera mis à l'échelle de **10** fois et sera inversé dans l'axe **Z**, pour réduire l'objet, il faut entrer une valeur décimale exemple **(0,5)** réduira l'objet de 1/2 dans l'axe Z.

- **ValueAt() :** Donne le vecteur valueAt() du sous objet sélectionné Face, Wire, Line ...  
  Cette option est intéressante lorsque les données de Placement renseignées sont [0,0,0] et que l'emplacement réel de l'objet est éloigné des coordonnées de base [0,0,0]  
  (ne donne pas de renseignement sur la rotation de l'object)
- **Ok :** Le bouton **OK** valide et lance la commande, si aucun objet n'est sélectionné le bouton Ok se colore en rouge.
- **Reset :** Le bouton **Reset** met toutes les variables à zéro
- **Quit :** Le bouton **Quit** quitte la macro.

## Script

L'icône de la macro ![](/images/Macro_CloneConvert.png) qui servira pour votre barre d'outils

**Macro_CloneConvert.FCMacro**

Téléchargez la macro sur Gist [**Macro_CloneConvert.FCMacro**](https://gist.github.com/mario52a/9f2f2f6144e1307a048f1840ef99300c)

## Révisions

06/01/2025 ver 00.16 remplace PySide2 to PySide augmente mini et maxi efface toutes les reference a PySide, PySide2 et QtWidgets et correction clone, compound

06/06/2020 ver 0.15 = icon

20/05/2020 ver 0.14 = grid layout PySide2 Qt5

ver 0.13 = 15/09/2019 remplacé le signe grec micro par "um" (trop de problèmes avec caractères ascii au dessus de 127) , remplacé tous les "\_translate("MainWindow", "mm", None)" par "mm" et commenté la ligne "text.encode('utf-8')" ne fonctionne pas avec la version 0.19 18.213

01/06/2019 ver 0.12 = adapté pour 0.19 et correction "Copy:legacy=True" et ShapeColor .....

30/03/2018 ver 0.11 = ajout checkBox, si multi sélection le clone est un objet unique ou des objets séparés

07/06/2017 ver 0.10 = replace Draft...Copy to Part..Shape cause section Copy : ne pas fait pas de copie mise à l'échelle de l'objet mais copie l'objet sans mise à l'échelle ??

14/06/2016 ver 0.9 = Ajout du choix du nombre de copies et optimisation des étiquettes

31/01/2016 ver 0.8 = modification des boutons reset des sections il faut cliquer deux fois sur le bouton pour mettre les valeurs à 0(indispensable en cas de modification des valeurs)

30/01/2016 ver 0.7 = réécriture du code avec Placement et Increment et ajout des boutons Compound, Increment, ValueAt(),

26/01/2016 ver 0.6 = correction placement avec plusieurs objets (copy)

26/07/2015 ver 0.5 = correction rotation avec plusieurs objets fonction Copy

25/07/2015 ver 0.4 = ajout rotation

11/08/2014 replace "AttributeError" to "Exception"

02/07/2014 ver. 0.3 = modification fonctionne avec PyQt4 et PySide

09/05/2014 ver. 0.2 = ajout de la fonction "Copy"

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_CloneConvert/fr&oldid=1528937>"
