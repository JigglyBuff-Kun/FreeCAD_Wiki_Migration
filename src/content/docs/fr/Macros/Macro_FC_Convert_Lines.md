---
title: FC Convert Lines
---

|                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FC Convert Lines                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                    |
| Cette macro convertit un objet ligne, fil en une ligne de Tirets ou Tiret-Points ou Tiret-Point-Points avec les dimensions données. Version macro : 00.07b Date dernière modification : 2020-11-09 Version FreeCAD : Toute Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/e/e2/Macro_FCConvertLines.png) Auteur: mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                         |
| [mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                        |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                 |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/e/e2/Macro_FCConvertLines.png)                                                                                                                                                                                                                                                             |
| Liens                                                                                                                                                                                                                                                                                                                                                          |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                               |
| Version Macro                                                                                                                                                                                                                                                                                                                                                  |
| 00.07b                                                                                                                                                                                                                                                                                                                                                         |
| Dernière modification                                                                                                                                                                                                                                                                                                                                          |
| 2020-11-09                                                                                                                                                                                                                                                                                                                                                     |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                             |
| Toute                                                                                                                                                                                                                                                                                                                                                          |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                         |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                     |
| _None_                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                                |

## Description

Cette macro convertit un objet ligne, fil en une ligne de Tirets ou Tiret-Points ou Tiret-Point-Points, Zig-Zag ou dessinée à la main avec des dimensions voulues.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/3d719574089a5f9044ec/raw/812769b6b296a1da2e9c8cd8153ad7266fe80f8d/Macro_FCConvertLines.FCMacro>">raw code</a>

![](/images/Macro_FCConvertLines_00.png)

Lignes converties en Tiret, Tiret-Point, Tiret-Point-Point

## Utilisation

Copiez la macro dans votre répertoire de macros et lancez l'interface graphique de la macro FCConvertLines.

![FCConvertLines Gui](/images/Macro_FCConvertLines_01.png)

FCConvertLines Gui

Première section :

Cut line (Cochée par défaut)

![FCConvertLines](/images/Macro_FCConvertLines_02.png)

FCConvertLines

- Selectionnez une ou plusieurs lignes dans la vue 3D
- **SpinBox** : cette boîte de dialogue sert a entrer le nombre de coupure du ou des lignes sélectionnées ou coupure avec une longueur déterminée ... (Par défaut nombre de coupures ici suffixe affiché "x Cut")
- **Create L.** : si cette case a cocher est cochée les lignes sont créées
- **Dimension** : si cette case a cocher est cochée le nombre entré est considéré comme une longueur le suffixe change alors en "x.000 Dim" et accepte 3 décimales
- **Bicolor** : si cette case a cocher est cochée la couleur des lignes change alternativement en rouge puis blanche. Si cette case n'est pas cochée la couleur des lignes dépendra de la couleur choisie avec le bouton Color
- **Points** : si cette case a cocher est cochée un point est créé en suivant les spécifications entrées dans la boîte de dialogue de coupure ou dimension la couleur est définie par la case à cocher bicolor ou les options déterminées "Options lines"
- les options **Options lines** sont disponibles

Seconde section :

Type de ligne : Dash

![FCConvertLines](/images/Macro_FCConvertLines_03.png)

FCConvertLines

- L'écran affichant les images dans le bas de la macro change en ligne Dash
- Sélectionnez une ou plusieurs couleurs dans la vue 3D
- **Line A** : dimension du trait (voir **A** dans l'écran)
- **Space B** : dimension de l'espace (voir **B** dans l'écran)
- Les lignes sont créées suivant la configuration spécifiée dans le menu **Options lines**

Troisième section :

Type de ligne : DashDot

![FCConvertLines](/images/Macro_FCConvertLines_04.png)

FCConvertLines

- L'écran affichant les images dans le bas de la macro change en ligne DashDot
- Sélectionnez une ou plusieurs lignes dan la vue 3D
- **Line A** : dimension du premier tiret (voir **A** dans l'écran)
- **Space B** : dimension du premier espace (voir **B** dans l'écran) (peut être différent de D)
- **Line 2 C** : dimension du deuxième tiret (voir **C** dans l'écran)
- **Space 2 D** : dimension du deuxième espace (voir **D** dans l'écran) (peut être différent de B)
- Les lignes sont créées suivant la configuration spécifiée dans le menu Options lines

Quatrième section :

Type de ligne : DashDotDot

![FCConvertLines](/images/Macro_FCConvertLines_05.png)

FCConvertLines

- L'écran affichant les images dans le bas de la macro change en ligne DashDotDot
- Sélectionnez une ou plusieurs lignes dan la vue 3D
- **Line A** : dimension du premier tiret (voir **A** dans l'écran)
- **Space B** : dimension du premier tiret (voir **B** dans l'écran)
- **Line 2 C** : dimension du deuxième tiret (voir **C** dans l'écran)
- **Space 2 D** : dimension du deuxième espace (voir **D** dans l'écran)
- Les lignes sont créées suivant la configuration spécifiée dans le menu Options lines

Cinquième section :

Type de ligne ligne : ZigZag

![FCConvertLines](/images/Macro_FCConvertLines_06.png)

FCConvertLines

L'écran affichant les images dans le bas de la macro change en ligne ZigZag

- Cette option crée une ligne
- **Number heads** : nombre de têtes totales sur la ligne
- **\_\_\_\_\_140.0\_\_\_\_\_** : La longueur totale de la ligne est calculée et affichée dans cet écran en temps réel
- **Begin A** : dimension du début de la ligne jusque le début de la première tête, même chose pour la fin de la ligne (voir **A** dans l'écran)
- **Dimension B** : dimension entre la fin et le début de deux têtes (voir **B** dans l'écran)
- **Gap C** : dimension de la largeur de la tête (voir **C** dans l'écran)
- **Height D** : hauteur de la tête (voir **D** dans l'écran)
- **Number E** : nombre de têtes contiguës (voir **E** dans l'écran)
- Les lignes sont créées suivant la configuration spécifiée dans le menu "Options lines" et "Plan"

Sixième section :

Type de ligne : Hand

![FCConvertLines](/images/Macro_FCConvertLines_07.png)

FCConvertLines

- Une ligne est créée
- **Length A** : La longueur totale de la ligne (voir **A** dans l'écran)
- **Height B** : Hauteur de la ligne (voir **B** dans l'écran)
- **Wave** : Compression ou décompression de la vague (voir **Wave** dans l'écran)
- Les lignes sont créées suivant la configuration spécifiée dans le menu "Options lines" et "Plan"

Septième section :

Options line :

![FCConvertLines](/images/Macro_FCConvertLines_08.png)

FCConvertLines

Cette option est disponible pour tous les types de lignes

- \_\_2,00 Width\_\_ : dimension de l'épaisseur de(s) ligne(s)
- \_\_2,00 Point S\_\_ : dimension de la grosseur des points de(s) ligne(s)
- Color : couleur de(s) ligne(s) ce bouton prends la couleur sélectionnée (si le checkbox "Bicolor" du menu "Cut line" est coché cette option ne fonctionnera pas)

Huitième section :

Option Plane

Cette option est uniquement disponible pour les types de lignes **"ZigZag"** et **"Hand"**

![FCConvertLines](/images/Macro_FCConvertLines_09.png)

FCConvertLines

- **XY** : Plan XY
- **YZ** : Plan YZ
- **XZ** : Plan XZ

Neuvième section :

Les Boutons

![FCConvertLines](/images/Macro_FCConvertLines_10.png)

FCConvertLines

- Save type : une configuration de ligne peut être sauvée dans un fichier (un fichier par configuration de ligne). Un entête est automatiquement prédéterminé suivant l'option de type de ligne choisi (exemple : le type Dash est sauvé, dans la boîte de dialogue de sauvegarde du fichier s'affiche "Dash\_.FCConvertL" vous pouvez par exemple modifier en "Dash_my_config_10.FCConvertL" ou ce que vous voulez... cette méthode permet de lister dans l'ordre les configurations de même type)
- Load type : charge une configuration et règle tous les paramètres sauvés pendant la sauvegarde
- Name type line\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ : nom donné à la configuration ce nom est sauvé dans le fichier
- Reset : règle tous les paramètre à leur état d'origine
- Create Comp : ce bouton crée un composé de tous les objets traités (dix lignes créées = un composé)
- Create : ce bouton crée les lignes individuelles (dix lignes traitées = dix lignes créées)
- Quit : quitte la macro

## Les fichiers à copier dans votre répertoire avec la macro (10 fichiers images)

**L'icône de la barre d'outils**

![Macro_FCConvertLines](/images/Macro_FCConvertLines.png)

Macro_FCConvertLines

**Title**

![ConvertLines_Title](/images/Macro_FCConvertLines_Title.png)

ConvertLines_Title

**Line Dash** :

![ConvertLines_Dash](/images/Macro_FCConvertLines_Dash.png)

ConvertLines_Dash

**Line DashDot** :

![ConvertLines Dash dot](/images/Macro_FCConvertLines_DashDot.png)

ConvertLines Dash dot

**Line DashDotDot** :

![ConvertLines Dash dot dot](/images/Macro_FCConvertLines_DashDotDot.png)

ConvertLines Dash dot dot

**Line Zigzag** :

![ConvertLines_Zigzag](/images/Macro_FCConvertLines_Zigzag.png)

ConvertLines_Zigzag

**Line Hand** :

![ConvertLines_Hand](/images/Macro_FCConvertLines_Hand.png)

ConvertLines_Hand

**View** :

![ConvrtLines_View-front](/images/Macro_FCConvrtLines_View-front.png) ![ConvrtLines_View-right](/images/Macro_FCConvrtLines_View-right.png) ![ConvrtLines_View-right](/images/Macro_FCConvrtLines_View-top.png)

## Script

Copiez la macro **Macro_FCConvertLines.FCMacro** dans votre répertoire de macros.

Le script sur Gist [Macro_FCConvertLines.FCMacro](https://gist.github.com/mario52a/3d719574089a5f9044ec)

Icône de la barre d'outils ![](/images/Macro_FCConvertLines.png)

**Macro_FCConvertLines.FCMacro**

## Exemples

Exemple point, tiret point, tiret point, tiret point, tiret point point

![](/images/Macro_FCConvertLines_11b.png)

Exemple A la main, Zig-Zag

![](/images/Macro_FCConvertLines_11.png)

Exemple A la main

![](/images/Macro_FCConvertLines_012.png)

Toutes les lignes ont créé les spécifications de configuration définies dans cette option lignes

Exemple A la main peut créer un belle sinusoïde ou une ligne totalement anarchique

![](/images/Macro_FCConvertLines_013.png)

Exemple de conversion d'un objet ShapeString en objet Sketch (la conversion de courbes n'est pas (encore) possible) d'un Shape en Sketch

![](/images/ShapeString_To_Sketch.gif)

## Version

ver 00.07b 09/11/2020 correct bug # (ajoute recompute() pour corriger)# Cannot compute Inventor representation for the shape of Shape. Et Line avec Label

ver 00.07 13/05/2017 correction du bug après un changement de dimension cause création "Alternate ...." la dimension des lignes ne change pas et reste sur les dimensions calculées pour une création alternative et ne correspond plus aux dimensions voulues.

ver 00.06 20/02/2017 correction sur la précision restituée dans une coupure (remplacé "numberOfPoints = longueur" par "numberOfPoints = (longueur + 1)")

ver 00.05 11/01/2017 remplacé la méthode de recherche sur le chemin des macros (maintenant directement dans les préférences)

ver 00.04 05/09/2016 setPointSize(8.0)

ver 00.02 18/02/2016

ver 00.01 19/01/2016

ver 00.00 19/01/2016

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FC_Convert_Lines/fr&oldid=1184227>"
