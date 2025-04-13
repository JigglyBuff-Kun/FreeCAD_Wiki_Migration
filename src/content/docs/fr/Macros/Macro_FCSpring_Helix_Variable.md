---
title: FCSpring Helix Variable
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCSpring Helix Variable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Cette macro crée un ressort personnalisable. Chaque tour peut modifier la configuration du ressort qui peut être enregistrée dans un fichier avec l'extension **.FCSpring** ou les coordonnées **.FCSpringCoor**. Sont détectés : surface (direction de la face), Cylindre (rayon), Ellipse (rayon mineur), Sphère (rayon), Toroïde (rayon 1), Plan (direction), Ligne (suit la direction), Point (position du sommet XYZ). Si aucun objet n'est détecté (pas de sélection), le ressort est créé au point XYZ 0., 0., 0. Voir des [exemples](https://www.freecadweb.org/wiki/Macro_FCSpring_Helix_Variable/fr#Exemples) Le fichier .zip [des icônes](https://forum.freecadweb.org/download/file.php?id=80844) Version macro : 01.19 Date dernière modification : 2024/07/11 Version FreeCAD : 0.19 and bigger Téléchargement : [Icône de la barre d'outils](https://wiki.freecad.org/images/6/69/FCSpring_Helix_Variable.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://wiki.freecad.org/images/6/69/FCSpring_Helix_Variable.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 01.19                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2024/07/11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 0.19 and bigger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Description

Cette macro crée un ressort hautement personnalisable. Toute modification modifiant la configuration du ressort peut être enregistrée dans un fichier avec l'extension .FCSpring ou coordonnées .FCSpringCoor  
 Sont détectées : Surface (Direction de la face), Cylindre (Rayon), Ellipse (MinorRadius), Sphère (Rayon), Toroïde (Rayon1), Plan (direction), ligne (suivre la direction), point (position du sommet XYZ)  
 Si aucun objet n'est détecté (pas de sélection) le ressort est créé au point XYZ 0., 0., 0.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/68c81c32a0727a693d3a/raw/91cbf54580d8af331f9b371f4951a40b9ef506f3/Macro_FCSpring_Helix_Variable.FCMacro>">raw code</a>

![](/images/TruncateSpring00.png)

FCSpring Helix Variable

## Utilisation

Cette section est utilisée pour configurer le ressort.

Détail schématique de la définition du ressort

![](/images/Macro_TruncateSpring_01.png)

#### Interface graphique

![](/images/Macro_FCSpring_Helix_Variable_01.png)

#### Configuration

- 10 coils ![](/images/SpinBox.svg) **Number of coil** : nombre total de spires du ressort. Par défaut = 10
- 20,000 mm ![](/images/SpinBox.svg) **Radius of spring** : rayon du ressort. Par défaut = 20.0
- 15,000 mm ![](/images/SpinBox.svg) **Pitch of spring** : pas du ressort. Par défaut = 15.0
- 5 ( 72 points ) ![](/images/SpinBox.svg) **Precision of turn** : précision par tour. Cela correspond au nombre de points par tour. Le nombre de points est calculé comme suit : precision (nombre de points) = (pitch / (360/precision)). Par défaut = 5 (72 points)
- 20,000 mm ![](/images/SpinBox.svg) : rayon du grand cercle du cône (![](/images/CheckBoxTrue.svg) Spring conical doit être coché)

* ![](/images/CheckBoxFalse.svg) Spring conical : grand diamètre du cône. Cette dimension sera toujours supérieure au rayon
* ![](/images/CheckBoxFalse.svg) Angles : case à cocher pour activer la fonction Begin et End des angles des spires.  
  Si la fonction est activée, le réglage 1 ( 360 points ) ![](/images/SpinBox.svg) se règle automatiquement à 1 (360 points par tour, 1 point = 1 degré)

- 0 deg ![](/images/SpinBox.svg) **Begin** : angle de départ ou commence la première spire.
- 360 deg ![](/images/SpinBox.svg) **End** : angle de fin ou se termine la dernière spire.

![](/images/Macro_FCSpring_Helix_Variable_02.png)

#### Type de ligne

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_BSpline.svg) Bspline **BSpline** : type de ligne est une B-spline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Wire.svg) Wire **Wire** : type de ligne est filaire.
- ![](/images/CheckBoxFalse.svg) ![](/images/Draft_Point.svg) Points **Points** : si la case est cochée, un point est créé sur chaque point.
- ![](/images/CheckBoxFalse.svg) Reverse **Reverse** : mode inverse. Si la case est cochée, le ressort change de direction (sens horaire).

![](/images/Macro_FCSpring_Helix_Variable_03.png)

#### Option

Cette section s'affiche dès qu'un objet est sélectionné. le type d'objet est renseigné dans l'éditeur de texte

L'objet peut être une ligne, 2 points, cercle, arête... Un axe de la longueur du ressort est automatiquement créé.

Détection : Cylindre (radius), Sphère (rayon), Tore (rayon) , Cône (petit rayon), Cercle (rayon), Arc (rayon), Ellipse (petit rayon)

- Normal : si un cercle est sélectionné **Normal**, ne modifie pas le rayon du cercle (Par défaut)
  - Adapt Rad. : si le bouton Normal est pressé, le texte Adapt Rad. est affiché, le rayon du ressort est adapté au rayon du cercle ou de l'objet sélectionné (Si un rayon est détecté)
- Point Mouse : si le clic de souris se fait sur une face, le point de la souris sera le point de départ de l'axe (Par défaut)
  - Center Face : si le bouton Point Mouse est pressé, le texte du bouton change et le ressort sera créé au centre de la face sélectionnée

* ![](/images/CheckBoxFalse.svg) Position : si deux objets sont sélectionnés (le premier l'axe et le second le ressort (ou tout autre objet)), cette case est activé et vous pouvez de modifier l'emplacement du ressort (le deuxième objet) le long de l'axe (premier objet). ![](/images/CheckBoxTrue.svg) Position doit être sélectionnée sur "Position" pour être active.

- Circle : si trois points sont sélectionnés, le bouton Circle est activé et un cercle pourra être créé, il pourra servir de base pour un ressort.

![](/images/Macro_FCSpring_Helix_Variable_02_1.png)

#### Position (0)(xx)

(0)(xx) : nombre de sélection(s), longueur de l'axe en mm x 10, est égal au nombres de points de déplacements disponibles sur la longueur de l'axe (pas de 0.1 mm)

- Begin/End : positionnement du ressort au début, au milieu ou à la fin de l'axe
- Reverse Spr. : inverse le ressort sur son axe
- 0,1 mm ![](/images/SpinBox.svg) : déplace le ressort de manière précise le long du ressort par pas de 0.1 mm le long de son axe
- Reverse Count. : inverse le compteur, par exemple: Begin 0 to 10.. ou End 0 to 10..
- **Slider** : positionne le ressort sur son axe

![](/images/Macro_FCSpring_Helix_Variable_02_2.png)

#### Dimensions particulières de la spire

- Num: 2 ![](/images/SpinBox.svg) **Numbering of coil** : numéro de la spire a modifier. (Defaut : 0)

* ![](/images/CheckBoxFalse.svg) Smoothing **Smoothing** : cette case à cocher découvre un spinBox pour déterminer le degré de lissage entre deux spires ou l'écartement est important, le degré maximum du lissage est la valeur de précision -1 (cette option est à l'état de prototype et le résultat peur être satisfaisant, invisible ou mauvais)

- 0,000 mm ![](/images/SpinBox.svg) **Pitch of coil** : dimension du pas de la spire a modifier. (Defaut : 0)
- 15.0 mm : si le bouton est cliqué, la valeur de "Pitch of string" est affectée à "Pitch of coil" (Cette valeur est automatiquement alignée à la valeur de Pitch of string)
- 0,000 mm ![](/images/SpinBox.svg) **Radius of coil** : rayon de la spire a modifier. (Defaut : 0)
- 20.0 mm : si le bouton est cliqué, la valeur de "Radius of string" est affectée à "Radius of coil" (Cette valeur est automatiquement alignée à la valeur de Radius of string)

* ![](/images/FCSpring_Helix_Variable_Icon_01.png) Accept the value modified : bouton d'acceptation pour valider les modifications de la spire a modifier.

- **Text edit** : cette fenêtre affiche les spires modifiées et validées.
- Clear : nettoie l'éditeur de texte
- Zoom : bouton "Zoom", agrandit la fenêtre text-edit

![](/images/Macro_FCSpring_Helix_Variable_04.png)

#### Commandes

- ![](/images/FCSpring_Helix_Variable_Icon_02.png) Load : le bouton Lead ouvre une boîte de dialogue pour lire un fichier sauvegardé, le fichier porte l'extension **.FCSpring**.
- ![](/images/FCSpring_Helix_Variable_Icon_03.png) Save : le bouton Save ouvre une boîte de dialogue pour sauver un fichier avec la configuration du ressort modifiée ou non, le fichier porte l'extension **.FCSpring**.
- ![](/images/FCSpring_Helix_Variable_Icon_02b.png) Load Coordinates : ouvre une boîte de dialogue pour charger un fichier **.FCSpringCoor** (toutes les coordonnées des points constituants le ressort).
- ![](/images/FCSpring_Helix_Variable_Icon_03b.png) Save Coordinates : ouvre une boîte de dialogue pour sauver un fichier **.FCSpringCoor** (toutes les coordonnées des points constituants le ressort).
- ![](/images/FCSpring_Helix_Variable_Icon_04.png) Quit : quitte la macro.
- ![](/images/FCSpring_Helix_Variable_Icon_05.png) Reset : réinitialise la macro à la configuration par défaut.
- ![](/images/FCSpring_Helix_Variable_Icon_06.png) Launch : lance la macro et crée le ressort dans sa configuration.

* Help : ce bouton affiche la page wiki dans la fenêtre web de FreeCAD

![](/images/Macro_FCSpring_Helix_Variable_05.png)

## Vue rapport

La fenêtre Vue rapport affiche les détails de la configuration du ressort.

![](/images/Macro_FCSpring_Helix_Variable_06.png)

## Exemple de ressort

Exemple de ressort modifié :

![](/images/Macro_FCSpring_Helix_Variable_07.png)

## Exemple de vue rapport

Dès que la macro est lancée, la liste de la configuration du ressort est affichée sous forme de tableau.

Ici les données du ressort affichées dans la vue rapport.
![](/images/Macro_FCSpring_Helix_Variable_08.png)

## Icônes

Téléchargez les icônes et copier les dans votre répertoire de macro.

Cliquez sur l'image, dans la nouvelle fenêtre positionnez votre souris sur l'icône, clique droit et faites "Save target as ..."

Bouton pour votre barre d'outils

![Bouton](/images/FCSpring_Helix_Variable.png)

Bouton

Icônes de la macro

![](/images/FCSpring_Helix_Variable_Icon_01.png) ![](/images/FCSpring_Helix_Variable_Icon_02.png) ![](/images/FCSpring_Helix_Variable_Icon_02b.png) ![](/images/FCSpring_Helix_Variable_Icon_03.png) ![](/images/FCSpring_Helix_Variable_Icon_03b.png) ![](/images/FCSpring_Helix_Variable_Icon_04.png) ![](/images/FCSpring_Helix_Variable_Icon_05.png) ![](/images/FCSpring_Helix_Variable_Icon_06.png)

## Script

**Macro_FCSpring_Helix_Variable.FCMacro**

Téléchargez la macro sur Gist [Macro_FCSpring_Helix_Variable](https://gist.github.com/mario52a/68c81c32a0727a693d3a)

## Installation

Le fichier ci-dessus est une macro sous la forme de code GitHub. Téléchargez le fichier Zip depuis GitHub, puis suivez les instructions d'installation des macros pour débutants indiquées à l'adresse [installing FreeCAD macros in Ubuntu](https://wiki.opensourceecology.org/wiki/Installing_Macros_in_FreeCAD)

## Exemples

- ![Valves Assembly IN EX avec la permission de et créée par r.tec voir Inlet & Exhaust Valves Assembly et Spiralfeder merci r.tec](/images/Valves_Assembly_IN_EX.png)

  Valves Assembly IN EX avec la permission de et créée par r.tec voir [Inlet & Exhaust Valves Assembly](http://forum.freecadweb.org/viewtopic.php?f=24&t=14183) et [Spiralfeder](http://forum.freecadweb.org/viewtopic.php?f=13&t=14143) merci r.tec

* ![](/images/Macro_FCSpring_Helix_Variable_12.png)
* ![](/images/Macro_FCSpring_Helix_Variable_13.png)

* ![](/images/Macro_FCSpring_Helix_Variable_14.png)
* ![](/images/Macro_FCSpring_Helix_Variable_15.png)

* ![](/images/Macro_FCSpring_Helix_Variable_16.png)
* ![](/images/Macro_FCSpring_Helix_Variable_17.png)

* ![](/images/Macro_FCSpring_Helix_Variable_18.png)

- ![Example polygonal Spiral by 3 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral00.png)

  Example polygonal Spiral by 3 points

- ![Example polygonal Spiral by 4 points](/images/Macro_FCSpring_Helix_Variable_polygonalSpiral01.png)

  Example polygonal Spiral by 4 points

- [![Différence entre le ressort lissé (ici 71 avec précision 5 (72 points)) et le ressort sans lissage](/images/Macro_FCSpring_Helix_Variable_19.png)](/File:Macro_FCSpring_Helix_Variable_19.png  "Différence entre le ressort lissé (ici 71 avec précision 5 (72 points)) et le ressort sans lissage")

  Différence entre le ressort lissé (ici 71 avec précision 5 (72 points)) et le ressort sans lissage

- ![Exemple](/images/Macro_FCSpring_Helix_Variable.gif)

  Exemple

- ![Exemple pour créeer un ressort conique](/images/Macro_FCSpringHelixVariable_Example_02.gif)

  Exemple pour créeer un ressort conique

- ![Exemple pour créer un ressort sur un cercle](/images/Macro_FCSpringHelixVariable_Spring_On_Circle.gif)

  Exemple pour créer un ressort sur un cercle

- ![Déplacement le long de l'axe](/images/Macro_FCSpringHelixVarable_Spring_Along_Axis.gif)

  Déplacement le long de l'axe

## Liens

Discussion sur le forum [Try to do a Spring](http://forum.freecadweb.org/viewtopic.php?f=3&t=8313&p=68161#p68161)

## Projet

Ressort tronqué

Lissage des spires aux changements des spires : fait

Modification du diamètre à chaque spire au choix : fait

## Versions

11/07/2024 version 01.19 delete **"import WebGui"** replaced by **"import webbrowser"** and optimise filter for **OS Linux Mint**

2023/09/01 Version 0.18c adding **FreeCAD.activeDocument().recompute(None,True,True)\***Texte en italique\* "bug" fixed by **Syres** thanks
[How to draw polygonal spirals in Freecad?](https://forum.freecad.org/viewtopic.php?p=703568#p703568)

2023/09/01 Version 0.18b correct (adapt) the code :

```
self.PB_Adapt_Radius.setStyleSheet("background-color: QPalette.Base")

```

to

```
self.PB_Adapt_Radius.setStyleSheet("QPushButton {background-color: QPalette.Base}")

```

2022/03/16 Version 0.18 : ajout scrollBar, possibilité docking Gauche or Droite, restauration du chrono _(time.time())_, mémorise le dernier FilePath

```
####chrono################
import time
global depart ; depart  = 0.0
global arrivee; arrivee = 0.0
def chrono(switch):    # 0=depart autre=stop
#time.strftime('%X %x %Z')#'15:44:07 12/14/19 Paris, Madrid'
    global depart
    global arrivee
    try:
        if switch == 0:
            depart = time.time()#time.clock()
            App.Console.PrintMessage("Chrono begin   : "+str(time.strftime('%X'))+"\n")
        else:
            arrivee = time.time()#time.clock()
            App.Console.PrintMessage("Chrono end     : "+str(time.strftime('%X'))+"\n")
            parcouru = ((arrivee - depart)/60.0)
            App.Console.PrintError("Time execution : "+str("%.3f" % parcouru)+" min"+"\n\n")
        return parcouru
        FreeCADGui.updateGui()
    except Exception: None
####chrono################

```

2020/11/12 Version=01.17 : suppression du timer chrono !!

2020/10/18 Ver 00.16b : suppression du test FC 18 line 56, et suppression de timer chrono j'attends...

2020/05/01 Ver 00.16: fichier d'erreur de correction (sauvegarde et chargement) cause la suppression de "label_11_Name" ...

2020/04/11 Ver 01.15: layout et présentation

2019/05/03 Ver 01.14: compatible FreeCAD 0.19.16523 (Git)

2019/04/08 Ver 01.13: compatible FreeCAD 0.18.16093 (Git) /Python version: 3.6.6 /Qt version: 5.6.2

03/04/2017: ver 01.12: correction bug ligne 2314 add "global ui"

11/12/2016: ver 01.11: Ajout de position du ressort sur un objet sélectionné

10/09/2016: ver 01.10: Ajout du Bouton "Zoom" pour agrandit la fenêtre textedit

04/09/2016: ver 01.09: ajout de la fonction lissage et sauvegarde/chargement des coordonnées du ressort

16/03/2016: ver 01.08 : correction et ajout "int()" à debutAngle et finAngle (dans la section lecture du fichier)

02/03/2016: ver 01.07 : ajout d'une option reverse spring (sens horaire)

08/02/2016: ver 01.06 : correction du bug angle cause "modifyAngle = int(file.readline().rstrip('\n\r')) # 9" modifyAngle est int() pas char

07/01/2015: ver 01.05 : ajout de "Try ...Except" (données cône) pour assurer la compatibilité avec les versions précédentes.

07/01/2015: ver 01.04 : ajout de fabrication de ressort conique et modification du chemin (path) sur "UserAppData".

07/12/2014 : ver 01.03 : nouvelle version avec rayon de chaque spire modifiable.

17/11/2014: ver 1.02 : nouvelle version avec interface graphique, modification de chaque pas et rayon, sauvegarde et chargement des données sur disque.

10/11/2014 : (23h20) correction de la modification.

```
ligne.Placement = App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

10/11/2014 : modification de la ligne 44 :

```
a = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

en

```
ligne = FreeCAD.ActiveDocument.Line.Placement=App.Placement(App.Vector(0.0,0.0,0.0), App.Rotation(App.Vector(0,0,1),angleTr), App.Vector(0,0,0))

```

6/11/2014 : ajout de "makeBSpline" et configuration.

## Limitations

Durant les tests de balayage, certaines erreurs ont été obtenues !

- ![Pour l'instant, la macro n'est pas adaptée au carré, au rectangle... Seul le cercle fonctionne bien](/images/Macro_FCSpring_Helix_Variable_20.png)

  Pour l'instant, la macro n'est pas adaptée au carré, au rectangle...  
  Seul le cercle fonctionne bien

- ![VIOLATION D'ACCÈS](/images/Macro_FCSpring_Helix_Variable_09.png)

  VIOLATION D'ACCÈS

- ![TCollection_IndexedDataMap](/images/Macro_FCSpring_Helix_Variable_10.png)

  TCollection_IndexedDataMap

- ![Utilisation incorrecte des sections ponctuelles](/images/Macro_FCSpring_Helix_Variable_11.png)

  Utilisation incorrecte des sections ponctuelles

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCSpring_Helix_Variable/fr&oldid=1450792>"
