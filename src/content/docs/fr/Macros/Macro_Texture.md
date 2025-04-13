---
title: Texture
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Texture                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Créer une image 3D à partir d'une image BMP 8 bits (256 couleurs). En d'autres termes, elle permet de construire très facilement un projet 3D à partir d'une image bitmap utilisant les niveaux de gris (256 nuances de gris). Si une image BMP 32 bits est sélectionnée, l'image est représentée en points. La macro **FCCreaLoft Macro Loft** est utilisée pour automatiser l'opération de multi lissage. Version macro : 0.15 Date dernière modification : 2025/01/04 Version FreeCAD : 0.18 et ultérieur Téléchargement : [Icône de la barre d'outils](https://www.freecad.org/wiki/images/9/90/FCTexture.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Icône de la barre d'outils](https://www.freecad.org/wiki/images/9/90/FCTexture.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                   |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2025/01/04                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.18 et ultérieur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [FCCreaLoft](/File:FCCreaLoft.png "FCCreaLoft") [Macro Loft](/Macro_Loft/fr "Macro Loft/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Description

Cette petite macro permet de construire très facilement un projet 3D à partir d'une image bitmap avec 256 nuances de gris.

J'espère que cette macro va changer notre façon de penser lors de la modélisation avec la CAO et la conversion CNC en objets 3D avec peu ou pas d'intervention.

Tout devient possible quelle que soit la complexité de l'image!

La ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/fr "Macro Loft/fr") est utilisé pour automatiser les opérations de multi lissage.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/262317bc7d8555885b0e/raw/f18613c8bfd142e644ba79fc8dd34a5f72282f18/Macro%2520FCTexture.FCMacro>">raw code</a>

![](/images/Texture_004_Honda.png)

Texture 004 Honda

## Utilisation

Cette macro nécessite une image en 256 nuances de gris (0-255). Par conséquent, avant d'exécuter la macro, convertissez votre image en niveaux de gris (noir et blanc). Lors de l'exécution de la macro, le nombre de couleurs est détecté automatiquement. Note : si l'image a plus de 256 couleurs, une autre fonction est attendue (en cours). Chaque couleur (niveau de gris) est considérée comme une profondeur, le blanc (255) le niveau haut et le noir (0) le niveau le plus bas (profond).

La configuration se fait avant l'ouverture du fichier, les valeurs par défaut sont les réglages prévu pour obtenir un projet de dimensions :

- largeur de l'image en points dans la coordonnée **X**,
- hauteur de l'image en points dans la coordonnée **Y**,
- profondeur ou épaisseur du projet filtré sur 10 mm (en mode Brut, sur 256 mm) dans la coordonnée **Z**.

Le fichier image se déroule à la manière d'un scanner x1 x2 x3 .... par incrément de 1 mm dans FreeCAD de même pour la valeur y de 1 mm à la fois. La valeur de z est donnée par la valeur de la couleur. Ces valeurs sont paramétrables dans la macro.

Remarque importante : selon la taille de l'image, le projet peut devenir très volumineux! Par exemple, une simple image de (100px x 100px) largeur/hauteur sera : **100 x 100 = 10000 points**. Chacun des 10 000 points correspond à une coordonnée, ce qui signifie donc 10000 coordonnées X, 10000 Y et 10000 Z dans la réalité.

### Interface

![Texture 002](/images/Texture_002.png)

Texture 002

#### Coordonnées

- Coordinate X ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : position des coordonnées **X** de l'objet (par défaut: 0).
- Coordinate Y ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : position de la coordonnée **Y** de l'objet (par défaut: 0).
- Coordinate Z ![](/images/Std_CoordinateSystem.svg) 0,00 mm ![](/images/SpinBox.svg) : position de la coordonnée **Z** de l'objet (par défaut: 0).

#### Étirement

- Stretching X 0,00 mm ![](/images/SpinBox.svg) : rétrécissement ou agrandissement du **X** (longueur) de l'objet (par défaut : 0)
- Stretching Y 0,00 mm ![](/images/SpinBox.svg) : rétrécissement ou agrandissement du **Y** (hauteur) de l'objet (par défaut : 0)
- Stretching Z 0,00 mm ![](/images/SpinBox.svg) : rétrécissement ou agrandissement du **Z** (profondeur) de l'objet (par défaut : 0).

#### Inversion

- ![](/images/CheckBoxFalse.svg) Axis X : inverse les coordonnées _X_ de l'image.
- ![](/images/CheckBoxFalse.svg) Axis Y : inverse les coordonnées _Y_ de l'image.
- ![](/images/CheckBoxFalse.svg) Axis Z : inverse les coordonnées _Z_ de l'image.

#### Mode 8 Bits

La valeur de début de l'opération s'adapte automatiquement à la fonction choisie : 0 si le réglage est sur noir (**Black**) ou sur 255 si le réglage est sur blanc (**White**) ou 19 si le réglage est sur noir (**Black**)

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Wire.svg) Wire : construit la ligne (les vecteurs) sous forme de Wire.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_BSpline.svg) Bspline : construit la ligne (les vecteurs) sous forme de Bspline.
- ![](/images/RadioButtonFalse.svg) ![](/images/Workbench_Points.svg) Cloud : construit les vecteurs de points dans un nuage de points.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Point.svg) Point : crée un point à chaque pixel (vecteur) (Note : cette procédure est gourmande en ressources CPU)
- ![](/images/CheckBoxFalse.svg) Nuance : si l'option ombre est cochée, la couleur du point est représentée sous forme d'image.

#### Mode 32 Bits

- ![](/images/RadioButtonTrue.svg) Photo : le mode photo est automatiquement activé lorsqu'une **image 32 bits** est détectée. (Note : cette procédure est gourmande en ressources CPU)
- ![](/images/RadioButtonFalse.svg) Plan : permet d'importer une **image 32 bits** et d'ignorer le fond du plan. Par défaut le fond de plan est noir à ignorer les couleurs sont ajustables avec la commande **Capping**. Si Blanc est coché, le fond a ignorer sera blanc. (Note : cette procédure est gourmande en ressources CPU)

#### Fichier

- ![](/images/CheckBoxFalse.svg) .pcd : si coché, un fichier (originalName.bmp.pcd) est enregistré dans le même répertoire que le fichier (pcd v0.7).
- ![](/images/CheckBoxFalse.svg) .asc : si coché, un fichier (originalName.bmp.asc) est enregistré dans le même répertoire que le fichier. Ce fichier peut être utilisé comme un nuage de points (format : X Y Z).

#### Ecrêtement (10 mm)

- Slider : entrer la hauteur du forme. La hauteur est affichée sur le cadre du titre.
- 0 height ![](/images/SpinBox.svg) : entrer la hauteur du forme. La hauteur est affichée dans le cadre titre.
- Mode brut ![](/images/CheckBoxFalse.svg) 20 : permet de régler le nombre de couleurs (profondeur). Le mode par défaut est de 0-20 (ce qui constitue un filtre et permet d'obtenir plus de détails selon la complexité de l'image). Une fois coché, le mode est de 0 à 255 (toute la gamme des couleurs).

* ![](/images/CheckBoxFalse.svg) : cette option permet d'accéder à la fenêtre de saisie des contours

- 0/2 Contour ![](/images/SpinBox.svg) : cette fenêtre de saisie donne la ligne de contour. ne pas utiliser (ex : 0 pour la base).
- Capping ![](/images/CheckBoxFalse.svg) White : cette fonction peut être réalisée sur le choix des couleurs, blanc (par défaut) ou noir. Les degrés de la règle de plafonnement 20 à 0 (ou 255 à 0) si la case est cochée sur **W** (non cochée) ou 0 à 20 (ou 0 à 255) si la case est cochée sur **B**. (non coché) ou 0 à 20 (ou 0 à 255) si la case est cochée sur **B**. (cochée).
- 20 Capping ![](/images/SpinBox.svg) : cette fenêtre de saisie donne les degrés d'ecrêtement.

#### Commande

- File and launch : ouvre le fichier image et lance la conversion.
- Help :

  - Affichez la page Wiki dans le navigateur FreeCAD
  - Pour modifier le paramètre disponible : allez dans **Outils → Editeur de paramètres...**
  - \_\_L'étape globale de la fenêtre de saisie :\_\_
  - Paramètre utilisateur : **BaseApp/Preferences/Macros/FCMmacros/FCTexture → SingleStep**
  - Ajustez la valeur souhaitée (1.0 par défaut)
  - \_\_Pour la recherche si la macro est mise à jour :\_\_
  - Paramètre utilisateur : **BaseApp/Preferences/Macros/FCMmacros/FCTexture → switchVesionMacroSearch**
  - Régler switchVesionMacroSearch sur `true` (`false` par défaut)

- Quit : sort de la fonction.

## Script

Les icônes .png ![](/images/FCTexture.png) et .svg![](/images/FCTexture.svg)

**Macro_Texture.FCMacro**

Téléchargez la macro sur Gist [Macro FCTexture.FCMacro](https://gist.github.com/mario52a/262317bc7d8555885b0e)

## Exemples

Les images ont été inclinées pour accentuer l'effet 3D.

- ![Honda](/images/FCTexture_008.png)

  Honda

- ![Un exemple de réalisation avec l'option contour](/images/Macro_FCTexture_008b.png)

  Un exemple de réalisation avec l'option contour

- ![Ici un exemple d'une image .bmp convertie en points et restaure l'image dans FreeCAD. La largeur de l'image est de 6.5 nm Merci à Yorik pour avoir donné son autorisation pour l'utilisation de son logo](/images/Texture_Nano_Photo.png)

  Ici un exemple d'une image .bmp convertie en points et restaure l'image dans FreeCAD. La largeur de l'image est de 6.5 nm  
  [Merci à Yorik pour avoir donné son autorisation pour l'utilisation de son logo](http://forum.freecadweb.org/viewtopic.php?f=24&t=5893#p47075)

- ![Ici un exemple d'une image bmp convertie en objet 3D de 6.7 nm de large. Merci à Yorik pour avoir donné son autorisation pour l'utilisation de son logo](/images/Texture_NanoDesign.png)

  Ici un exemple d'une image bmp convertie en objet 3D de 6.7 nm de large.  
  [Merci à Yorik pour avoir donné son autorisation pour l'utilisation de son logo](https://forum.freecad.org/viewtopic.php?f=24&t=5893#p47075)

- ![Le logo de FreCAD.](/images/Texture_001_Logo.png)

  Le logo de FreCAD.

- [![Une partie du fond décran de FreeCAD (Le fichier sur le forum).](/images/Texture_002_Fe_FC.png)](/File:Texture_002_Fe_FC.png  "Une partie du fond décran de FreeCAD (Le fichier sur le forum).")

  Une partie du fond décran de FreeCAD (Le [fichier](https://forum.freecad.org/viewtopic.php?f=3&t=4708&start=10#p46353) sur le forum).

- ![Une portion d'une nappe de table.](/images/Texture_003_napperon.png)

  Une portion d'une nappe de table.

- ![Une tôle larmée.](/images/Texture_005_larme.png)

  Une tôle larmée.

- ![Mode Plan: Dans l'image de gauche le fond blanc a été ignoré et toutes les autres couleurs sont affichées, dans l'image de droite la couleur noire a été ignorée et toutes les autres couleurs sont affichées (le niveau peut être modifié avec l'option "Capping")(un exemple sur le forum).](/images/FCTexture_006.png)(un exemple sur le forum).")

  Mode Plan: Dans l'image de gauche le fond blanc a été ignoré et toutes les autres couleurs sont affichées, dans l'image de droite la couleur noire a été ignorée et toutes les autres couleurs sont affichées (le niveau peut être modifié avec l'option "Capping")(un [exemple](https://forum.freecad.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024) sur le forum).

- ![Exemple avec une image représentant la topographie d'un terril chaque gradin correspond à un degrés de couleur différent.](/images/Texture_Topographie.png)

  Exemple avec une image représentant la topographie d'un terril chaque gradin correspond à un degrés de couleur différent.

- [![Exemple d'image convertie en caractères ASCII (pas encore implémenté).](/images/FCTexture_007_FreeCAD_ASCII_00.png)](/File:FCTexture_007_FreeCAD_ASCII_00.png  "Exemple d'image convertie en caractères ASCII (pas encore implémenté).")

  Exemple d'image convertie en caractères ASCII (pas encore implémenté).

- [![Procédure pour créer un solide: 1: Créer les lofts avec l'outil ou avec la Macro Loft 2: Sélectionnez l'ensemble et faites une opération d'extrusion avec l'outil 3A: Pour Linux téléchargez GMSHMesh (auteur psicofil) Macro GMSH Wiki page 3B: Pour Windows téléchargez GmshMesh2.zip dézippez le fichier et installez le dans votre répertoire Mod (author ulrich1a) 4: Créez votre objet Mesh et utilisez le.](/images/FCTexture_Example.gif)](/File:FCTexture_Example.gif  "Procédure pour créer un solide: 1: Créer les lofts avec l'outil ou avec la Macro Loft 2: Sélectionnez l'ensemble et faites une opération d'extrusion avec l'outil 3A: Pour Linux téléchargez GMSHMesh (auteur psicofil) Macro GMSH Wiki page 3B: Pour Windows téléchargez GmshMesh2.zip dézippez le fichier et installez le dans votre répertoire Mod (author ulrich1a) 4: Créez votre objet Mesh et utilisez le.")

  Procédure pour créer un solide:  
   **1:** Créer les lofts avec l'outil ![](/images/Part_RuledSurface.svg)ou avec la ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/fr "Macro Loft/fr")  
   **2:** Sélectionnez l'ensemble et faites une opération d'extrusion avec l'outil ![](/images/Part_Extrude.svg)  
   **3A:** Pour Linux téléchargez [GMSHMesh](https://github.com/psicofil/Macros_FreeCAD) (auteur psicofil) [Macro GMSH Wiki page](/Macro_GMSH "Macro GMSH")  
   **3B:** Pour Windows téléchargez [GmshMesh2.zip](https://forum.freecad.org/download/file.php?id=15220) dézippez le fichier et installez le dans votre répertoire Mod (author ulrich1a)  
   **4:** Créez votre objet Mesh et utilisez le.

- ![Votre objet converti en objet mesh avec GmshMesh.](/images/FCTexture_Example_Mesh.png)

  Votre objet converti en objet mesh avec [GmshMesh.](/Macro_GMSH "Macro GMSH")

## Liens

La discussion sur [le forum](https://forum.freecad.org/viewtopic.php?f=24&t=5893) pour donner vos impressions.

La macro ![FCCreaLoft](/images/FCCreaLoft.png) [Macro Loft](/Macro_Loft/fr "Macro Loft/fr") pour automatiser le multi loft.

[apply hair cell texture](https://forum.freecad.org/viewtopic.php?f=3&t=4708&start=10#p46353)

[How to handle pdf import properly and feasibly?](https://forum.freecad.org/viewtopic.php?f=3&t=6123&hilit=teobo&start=10#p49024)

## Revision

- ver 0.15 2025/01/04 suppression de toutes les références à PySide et QtWidgets , chrono par chrisb

- Ver 0.14c : 15-01-2021 inclusion de **Gui.SendMsgToActiveView("ViewFit")**

- Ver 0.14b : 15-01-2021 Creation de Tab Coordinate et Tab Stretching pour diminuer la hauteur pour écrans 15"

- ver 0.14 : 06/01/2021 modifie la procédure de chemin de recherche et ajoute une option de préférence: rechercher la nouvelle macro mise à jour

```
####new2
                pathFile      = os.path.dirname(SaveName) + "/"  #= C:/Provisoire400/
                formatFichier = os.path.splitext(SaveName)[1]    #= .png
                SaveName      = os.path.splitext(SaveName)[0]    #= /home/kubuntu/.FreeCAD/Macro/Texture_007_H #= C:/Provisoire400/image3D
                SaveNameformatFichier = SaveName + formatFichier #= C:/Provisoire400/image3D.png
                ####new2
                FreeCAD.ParamGet("User parameter:BaseApp/Preferences/Macros/FCMmacros/FCTexture").SetString("Path",pathFile)
                ####new

```

- ver 0.13b: 30/12/2020 ajout **time.clock()** et **time.process_time()** for Python 3xyz...
- ver 0.13 : 17/04/2020 Layout et PySide2 Qt5
- ver 0.12 : 04/08/2019 ajout d'un bouton pour height
- ver 0.11 :03/07/2019 adapte à Python 3
- ver 0.10 : 28/12/2016 ajout sauve les coordonnées des points en .pcd, .asc affichage en mode points cloud, auteur de la forme, contour
- ver 0.9 : 12/12/2016 ajout d'une fonction de sauvegarde de fichier ascii .asc pour le point cloud
- ver 0.8 : 16/03/2016 ajout d'une progressBar
- ver 0.7 : 03/09/2014 supprime "**translate**" oubliés et correction des erreurs de dysfonctionnement causés par le passage de PyQt vers Pyside !
- ver 0.6 : 26/08/2014 supprime tous les "**\_translate**"
- ver 0.5 : 25/08/2014 supprime "**\_translate (" MainWindow ",**" Stretching X "**, None)**" qui empêchaient l'affichage des tooltip avec PySide (Windows Vista)

- ver 0.4 : 08/08/2014 PyQt4 PySide

ver 0.3 : 28/03/2014 :commenté la ligne "**# self.checkBox_5.setAccessibleName(\_fromUtf8(""))**" qui a causé une erreur d'exécution à partir de la version FreeCAD : Version: 0.14.3343 (Git), Python version: 2.7.6, Qt version: 4.8.5

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Texture/fr&oldid=1528555>"
