---
title: CirclePlus
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro CirclePlus                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Créer un cercle ou un arc en indiquant le rayon, le diamètre, la circonférence, la surface, l'angle de départ, l'angle final, l'arc, le centre de l'angle, la corde, la flèche, le centre (point), l'objet de placement au choix (par l'interface graphique). Version macro : 0.4 Date dernière modification : 2019/04/07 Version FreeCAD : Toutes Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/4c/Macro_CirclePlus.png). Auteur: mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/4/4c/Macro_CirclePlus.png).                                                                                                                                                                                                                                                                                                                                                                                     |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                    |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2019/04/07                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Toutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Description

Cette macro crée un cercle ou un arc et permet à l'utilisateur, à l'aide de l'option suivante (via une boîte de dialogue), de personnaliser : _rayon, diamètre, circonférence, surface, angle de départ, angle, arc, angle, centre, cordon, flèche, centre (point)_ et _placement de l'objet_.

Le cercle par défaut fera face à l'écran (il fait référence à la fonction getCameraOrientation pour obtenir son orientation). Il est possible de modifier manuellement cette fonction pour personnaliser l'emplacement de la forme.

### Légende

Dans la boîte de dialogue CirclePlus, certaines boîtes de sélection changeront de couleur. Le vert indique un spinbox modifié et prêt à être exécuté. Orange indiquera le spinbox optionnel que l'utilisateur peut utiliser s'il le juge nécessaire. Le rouge indique une valeur manquante ou inadéquate. Le bouton Ok sera également coloré en rouge et ne fonctionnera pas jusqu'à ce que les valeurs correctes soient utilisées.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7/raw/3f810ac142dd0d9245c5ccc964b8b2d7d750b276/Macro%2520CirclePlus.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7/raw/3f810ac142dd0d9245c5ccc964b8b2d7d750b276/Macro%2520CirclePlus.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7/raw/3f810ac142dd0d9245c5ccc964b8b2d7d750b276/Macro%2520CirclePlus.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7/raw/3f810ac142dd0d9245c5ccc964b8b2d7d750b276/Macro%2520CirclePlus.FCMacro>">raw code</a>

## Utilisation

Copiez le code et l'icône dans votre répertoire de macros

![Interface](/images/Macro_CirclePlus_00.png)

Interface

- **X Y Z** : coordonnées du cercle s'il n'y a pas de coordonnées, le cercle est créé aux coordonnées 0,0,0
- **Radius** : rayon du cercle
- **Diameter** : diamètre du cercle
- **Reset** : reset les valeurs des coordonnées
- **Equal** : copie la valeur X dans les champs Y et Z
- **CheckBox :**
- **Options** : autres options de création du cercle
- **Point** : si point est validé un point est créé au centre du cercle
- **Info** : si info est validé les informations du cercle sont affichées dans la vue rapport
- **Face** : si face est validé la face est créée sur le cercle ou secteur si possible
- **Sector** : si sector est validé un secteur est créé sur l'arc
- **Segment** : si segment est validé un segment est créé
- **SpinBox 1.0** : incrémente le rayon et le diamètre par pas de 0.5 (Default: 1.0 (pour modifier la valeur en entrée changez la valeur de la ligne 87 **"incrementDS = xx.xx"**))
- **SpinBox 8.0** : règle la hauteur des caractères des textes de la macro

- **Quit** : quitte la macro (ce bouton se colore en rouge si une erreur est détectée)
- **Ok** : crée le cercle

![](/images/Macro_CirclePlus_01.png)

- **Options disponibles**
- **Circumference** : circonférence du cercle
- **Area** : surface du cercle
- **Startangle** : début d'angle de l'arc à créer
- **Endangle** : fin d'angle de l'arc
- **Arc** et **Anglecenter** : longueur de l'arc arc en combinaison avec angle central
  - **Arc** = longueur de l'arc
  - **Anglecenter** = angle central à partir du centre du cercle jusqu'aux deux extrémités de l'arc (l'angle est donné en degrés)
- **Cord** et **Arrow** : longueur de la corde en combinaison avec la longueur de la flèche
  - **Cord** : longueur de la corde du cercle
  - **Arrow** : longueur de la flèche du cercle

## Script

Télécharger l'image en se positionnant sur l'icône ![](/images/Macro_CirclePlus.png) puis en faire glisser la souris, clic droit "save as" (ne pas changer le nom)

[![](/images/Nuvola_apps_download_manager.png)](https://gist.github.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7)

[Dernière version de Macro_CirclePlus  
l'icône se trouve en fin de page](https://gist.github.com/mario52a/0ed8129bacbe9124a41e3ae1d378d5b7)

## Memo sur le cercle

**Exemples de codes**

![examples 1, 2, 3](/images/Macro_Circle_01.png)

examples 1, 2, 3

![examples](/images/Macro_Circle_02.png)

examples

## Version

ver 04 , 07-04-2019 : remplacé setStyleSheet DoubleSpinBox par setStyleSheet Label cause : l'increment dans le Dspinbox ne fonctionne pas ??!

ver 03 , 06-04-2019 : supprimé tous les "(QtGui.QApplication.translate("MainWindow", "Diameter", None, QtGui.QApplication.UnicodeUTF8))" donne ue erreur dans 0.18.16093 (Git) Hash: 690774c0effe4fd7b8d2b5e2fb2b8c8d145e21ce. Python version: 3.6.6. Qt version: 5.6.2

ver 0.2 , 05-04-2019 : ajout incrémentation du pas de 1.0 à 0.1 (DoubleSpinbox)

ver 0.1 , 2018-07-14 : ajout création segment

ver 0.0 , 2018-07-10 :

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_CirclePlus/fr&oldid=1502009>"
