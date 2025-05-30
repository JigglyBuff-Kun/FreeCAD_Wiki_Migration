---
title: CircularText
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCCircularText                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Cette macro utilise l'outil [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr") pour créer une ligne de texte placée dans différentes orientations circulaires, y compris circonférentielle et hélicoïdale (à la manière d'une colonne Trajane). Elle peut également être utilisée pour créer un cadran d'horloge avec des chiffres arabes _1, 2, 3_ etc., ou des chiffres romains _I, II, III_, etc. Version macro : 0.22e Date dernière modification : 2024/07/11 Version FreeCAD : 0.19 et au-dessus Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/c/c1/FCCircularTextButtom.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/c/c1/FCCircularTextButtom.png)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.22e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2024/07/11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.19 et au-dessus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

Cette macro utilise l'outil ![](/images/Draft_ShapeString.svg) [Draft Formes à partir texte](/Draft_ShapeString/fr "Draft ShapeString/fr") pour créer une ligne de texte placée dans différentes orientations circulaires, notamment circonférentielle et hélicoïdale comme par ex la [colonne Trajane](https://fr.wikipedia.org/wiki/Colonne_Trajane). Elle peut également être utilisée pour créer un cadran d'horloge avec des chiffres arabes _1, 2, 3..._ ou des chiffres romains _I, II, III..._ . Cette dernière utilisation a été inspirée par le fil du Forum [Macro pour créer un cadran d'horloge](http://forum.freecadweb.org/viewtopic.php?f=22&t=5013&hilit=Clock) par un membre de la communauté FreeCAD, cblt2l.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/b80bc84eb1f39084a20564cf02c48764906fd6b8/Macro_FCCircularText.FCMacro>">raw code</a>

: ![Orientation à 360 degrés](/images/FCCircularText_01.png)

Exemple de la macro affichant le texte avec une orientation à 360 degrés

## Utilisation

La création d'un texte génère un dossier **FcString**, la création d'une horloge génère un dossier **FcClock**.

Tous les caractères restent indépendants. Si vous créez une extrusion, rien n'est effacé. Si vous créez un Compound avec le bouton Run Comp, il sera créé dans l'arbre principal de votre projet.

Ces options sont grisées par défaut et activées en cochant ![](/images/CheckBoxTrue.svg) le bouton :

- ![](/images/CheckBoxFalse.svg) Extrude Char.
- ![](/images/CheckBoxFalse.svg) Placement.
- ![](/images/CheckBoxFalse.svg) SP. inclination.

A l'exception d'une boîte de placement Clock **Z** est activée et déplace le texte dans la direction **Z** pour placer le texte sur la surface de support.

## Remarques

- Cette macro met en grisé (désactivation) les options qui ne sont pas pertinentes pour une fonction sélectionnée.

## Interface

Présentation générale

![GUI](/images/FCCircularText_06.png)

### Première section

![](/images/FCCircularText_07.png)

- La fenêtre de TextEdit vous permet de copier le texte a créer (cliquez sur le bouton Reset vous permet de connaître la longueur de la chaîne entrée qui est affichée dans le titre de la fenêtre)
- Le bouton Reverse inverse le texte

* ![](/images/CheckBoxFalse.svg) Word coché, cette option considère le texte comme un mot, le texte est coupé dans l'espace et écrit le texte mot par mot (à la place caractère par caractère en usage normal)

- Le bouton Help affiche la page wiki dans le navigateur FreeCAD
- LineEdit: affiche le chemin et le nom de la police du fichier
- Other bouton pour rechercher des polices de characteres dans des répertoires non découverts
- ComboView pour choisir la police
- Origin retourne à l'origine system ex: "C:/Windows/Fonts/"
  - Par défaut la police ARIAL.TTF est imposée

#### Options disponibles

Après la première utilisation, vous devez modifier les paramètres suivants:

**User parameter:BaseApp/Preferences/Macros/FCMmacros/FCCircularText**

**switchModeTextList**

- 0 = mode texte normal (et noir) coupe la switchFontComBox
- 1 = permet de passer à la SwitchFontComBox 1

**switchFontComBox**

- 0 = (et switchModeTextList= 1) mode texte (en couleur) dans la liste ComboBox, plus rapide
- 1 = (et switchModeTextList= 1) fontFamily plus lent mais ComboBoxst plus beau!

**setSystemFonts**

- 0 = matplotlib.font_manager.findSystemFonts("C:/", "ttf")
- faire toutes les polices (dans tous les dossiers et sous-dossiers du DD) à temps !
- 1 = fontman.findSystemFonts(self.pathFont)
- faire toutes les polices du répertoire (et de tous les sous-dossiers)

**seTtextAlignement**

- 0 = AlignLeft (défaut)
- 1 = AlignCenter
- 2 = AlignRight

setFontByDefault

- Police par défaut

**switchResetFALSE**

- 0 = réinitialisation (par défaut)
- 1 = pas de réinitialisation (non recommandé) certains switches peuvent rester ouverts ou se fermer de manière inattendue!

**Exemple**

![](/images/FCCirculatText_Config_0000A0.png)

1. switchModeTextList= `false`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 0

![](/images/FCCirculatText_Config_1000A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 0

![](/images/FCCirculatText_Config_1001A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `false`
3. setSystemFonts = `false`
4. seTtextAlignement = 1 _(0=Gauche, 1=Centré, 2=Droite)_

![](/images/FCCirculatText_Config_1101A0.png)

1. switchModeTextList= `true`
2. switchFontComBox = `true`
3. setSystemFonts = `false`
4. seTtextAlignement = 1

### Seconde section

Configurer des caractères dans FCCircularText

![](/images/FCCircularText_08.png)

#### Première zone

Votre choix :

![](/images/FCCircularText_09.png)

- ![Outdoor](/images/FCCircularText_20.png)

  **Outdoor**

- ![Indoor](/images/FCCircularText_21.png)

  **Indoor**

- ![Helix](/images/FCCircularText_22.png)

  **Helix**

- ![Clock](/images/FCCircularText_23.png)

  **Clock**
  ![](/images/FCCircularText_24.png)

- Mode Stand or Mode Flat : Le texte peut être créé debout ou à plat (comme l'horloge) options **Outdoor** et **Indoor** le texte des boutons est inversé.

- [![Mode Stand Outdoor Le texte est écrit debout (direction Z lecture externe).](/images/FCCircularText_01.png)](/File:FCCircularText_01.png "Mode Stand Outdoor Le texte est écrit debout (direction Z lecture externe).")

  **Mode Stand** **Outdoor** Le texte est écrit debout (direction Z lecture externe).

- [![Mode Flat Outdoor Le texte est écrit à plat (lecture externe).](/images/FCCircularText_40.png)](/File:FCCircularText_40.png "Mode Flat Outdoor Le texte est écrit à plat (lecture externe).")

  **Mode Flat** **Outdoor** Le texte est écrit à plat (lecture externe).

- [![Mode Flat Indoor Le texte est placé à plat lecture interne (comme clock).](/images/FCCircularText_39.png)](/File:FCCircularText_39.png "Mode Flat Indoor Le texte est placé à plat lecture interne (comme clock).")

  **Mode Flat** **Indoor** Le texte est placé à plat lecture interne (comme clock).

- ![Mode Stand Indoor Le texte est écrit debout avec lecture interne.](/images/FCCircularText_03.png)

  **Mode Stand** **Indoor** Le texte est écrit debout avec lecture interne.

#### Deuxième zone

Cette section vous permet de configurer le comportement global des caractères dans tous les choix disponibles, mais avec quelques variations. Si une fonction n'est pas utilisée de façon standard dans l'option choisie, cette fonction sera grisée.

![](/images/FCCircularText_10.png)

- 10.0 mm ![](/images/SpinBox.svg) **Radius of circle**: rayon du cercle. (Défaut 10)
- 2.0 mm ![](/images/SpinBox.svg) **Size character**: hauteur des caractères. (Défaut 2)
- 0 deg ![](/images/SpinBox.svg) **Begin angle**: angle de départ du premier caractère du sur le cercle. (Default 0°)
- 360 deg ![](/images/SpinBox.svg) **End angle**: angle de fin du dernier caractère du texte. (Défaut 360)
- 10.0 deg ![](/images/SpinBox.svg) **Correction angle**: angle de correction du texte pour le faire correspondre à la tangente du cercle. (Défaut 10 °)
- 0.15 mm ![](/images/SpinBox.svg) **Correction radius**: correction du rayon (optionnel en rapport avec "Correction angle"). (Défaut 0.15)

* ![](/images/CheckBoxFalse.svg) **Extrude Char**: caractères d'extrusion de la case à cocher. (Par défaut inactif)
* ![](/images/CheckBoxFalse.svg) **Placement**: placement du texte dans la vue 3D. (Par défaut inactif)
* ![](/images/CheckBoxFalse.svg) **Sp. inclination**: inclinaison des caractères sur trois axes X, Y et Z (exemple pour couvrir un tel cône). (Par défaut inactif)

##### Outdoor

Mode par défaut. Le texte est écrit sur la surface extérieur du cylindre.

- ![Outdoor](/images/FCCircularText_20.png)

  **Outdoor**

* ![](/images/FCCircularText_25.png)
* ![](/images/FCCircularText_30.png)

##### Indoor

Le texte est écrit sur la surface interne d'un tube ou courbe.

- ![Indoor](/images/FCCircularText_21.png)

  **Indoor**

* ![](/images/FCCircularText_03.png)
* ![](/images/FCCircularText_27.png)

##### Helix

Le texte écrit suit le tracé d'une hélice.

- ![Helix](/images/FCCircularText_22.png)

  **Helix**

* ![](/images/FCCircularText_33.png)
* ![](/images/FCCircularText_34.png)
  ![](/images/FCCircularText_11.png)

- La section helix est cachée par défaut. La fenêtre est visible si le bouton radio ![](/images/RadioButtonTrue.svg) Helix est coché.

![](/images/FCCircularText_14.png)

- Toute les options de configurations des caractères sont actives.
- **Step of helix** Step correspond au pas de la spire de l'hélice : 2 (correspond à la hauteur du caractère) par défaut.
- **Char. per turn** Nombre de caractères par tour ici 10 par défaut, qui correspond à 10 caractères par tour d'hélice.

![](/images/FCCircularText_15.png)

- Si **Step of helix** (pas de l'hélice) est égal à zero, les Spinboxes **Base Helix** et **End Helix** sont activés.
- **Base Helix** détermine le début (base) de placement des caractère dans l'élice (direction Placement Z). Si **Placement Z** est différent de zero, le départ est ajouté au Placement Z déjà déterminé plud haut.
- **End Helix** Fin de l'hélice, le pas de l'hélice calculé est proportionnel à la hauteur et au nombre de caractères par tour d'hélice.

##### Clock

Les chiffres font partie d'un cercle avec des chiffres arabes ou romains.

- ![Clock](/images/FCCircularText_23.png)

  **Clock**

- ![Axial](/images/FCCircularText_35.png)

  **Axial**

- ![Redress](/images/FCCircularText_36.png)

  **Redress**

- Par défaut la section est cachée. La fenêtre est visible si le bouton radio ![](/images/RadioButtonTrue.svg) Clock est coché

![](/images/FCCircularText_16.png)

- Quand la section est activée, les fonctions suivantes sont dégrisées et disponibles:
  1. Begin angle.
  2. End angle.
  3. Correction angle.
  4. Correction radius.
  5. Les boutons Mode Stand ou Mode Flat.
- La section **Clock** est active.

![](/images/FCCircularText_19.png)

- **Radius of support** : Si une valeur est entrée, un support sera créé (defaut 0).
- Si **Support number face** est différent de zéro un support est créé. (Si **Extrude support** = zéro une face est créée).
  - 1 = Un cercle est créé (le cercle apparaît).
  - 2 = Un rectangle est créé (longueur = (Radius \* 2) hauteur = Radius (rayon) du support) (le rectangle apparaît).
  - 3 = Un triangle (circonscrit) est créé (Le triangle apparaît).
  - 4 = Un carré est créé (Radius du support) (Le carré apparaît).
  - 5 = Un polygone avec le nombre de faces affiché est créé (circonscrit) (le polygone apparaît).
- Si **Extrude support** est différent de zéro la fonction est activée et une dimension d'extrusion est demandée. La fonction Placement direction **Z** se dégrise pour permettre de déplacer ou non les caractères sur la surface du support (dans la cas ou l'on désire créer un relief plutôt qu'une cavité) .

![](/images/FCCircularText_18.png)

![](/images/FCCircularText_38.png)

![](/images/FCCircularText_17.png)

![](/images/FCCircularText_37.png)

- Si **Support number face** est égal à zéro aucun support n'est créé.
- Mode Roman : Crée une horloge avec chiffres Romains **I II III IIII V VI VII VIII IX X XI XII**
- Axial  : Les chiffres sont écrits axialement.

### Section de la trajectoire

![](/images/FCCircularText_06_Path.png)

La section de titre change et affiche la longueur du fil sélectionné.

Si vous sélectionnez un fil, un arc, un cercle, une ligne et une arête, le chemin de la section est coloré en vert et la commande inutilisée est colorée en rouge

1. ![](/images/RadioButtonFalse.svg) Orthogonal le caractère est orthogonal à la vue
2. ![](/images/RadioButtonFalse.svg) Tangent le caractère est tangent au chemin du point sur le fil

3. ![](/images/RadioButtonFalse.svg) BB Base la base de point du caractère est de pointer le chemin sur le fil
4. ![](/images/RadioButtonFalse.svg) BB Center le centre bounBox du caractère est de pointer le chemin sur le fil
5. ![](/images/RadioButtonFalse.svg) BB Top le haut boundBox du caractère est de pointer le chemin sur le fil

le dernier bouton radio utilisé est enregistré dans le paramètre de FreeCAD

### Section des commandes

![](/images/FCCircularText_13.png)

- Exit : quitte la macro.
- Reset : réinitialise toutes les valeurs et affiche le nombre de caractères affichés dans la fenêtre.
- Run Comp : lance la macro et crée un objet composé de tous les caractères.
- Run : lance la macro.

### Paramètres disponibles

Certains paramètres sont disponibles dans les paramètres de FreeCAD voir: **Menu → Outils → Modifier les paramètres...**

- Paramètre utilisateur: BaseApp/Preferences/Macros/FCMmacros/FCCircularText

- - `switchModeTextList` :
    - `false` le mode texte normal (et noir) désactive switchFontComBox
    - `true` autorise switchFontComBox 1 (par défaut)
  - `switchFontComBox` :
    - `false` (et switchModeTextList = 1) mode texte (en couleur) dans la liste Faster ComboBox (par défaut)
    - `true` (et switchModeTextList = 1) famille de polices dans la liste ComboBox plus lente mais plus belle!
  - `setSystemFonts` :
    - `false` matplotlib.font_manager.findSystemFonts ("C: /", "ttf") font toutes les polices (dans tous les dossiers et sous-dossiers du HD) temps!!
    - `true` fontman.findSystemFonts (self.pathFont)  
      crée toutes les polices dans le répertoire (et dans tous les sous-dossiers) (par défaut)
  - `seTtextAlignement` : 0 = AlignLeft (par défaut) 1 = AlignCenter 2 = AlignRight
  - `setFontByDefault` : Police par défaut (la dernière utilisée)
  - `switchResetFALSE` : `false` reset (par défaut), `true` pas de réinitialisation (non recommandé) certains commutateurs peuvent rester ouverts ou se fermer de manière inattendue!
  - `setPathOrthogonal` : `true` `false`
  - `setPathTangent` : `true` `false`
  - `setPositionBase` : `true` `false`
  - `setPositionCenter` : `true` `false`
  - `setPositionTop` : `true` `false`
  - `switchVersionSearch` : `true` `false`
  - `Version` : version de FCCircularText

En lançant la macro un un dossier **FcString** est créé pour les caractères et un dossier **FcClock** est créé pour l'horloge. Dans le cas d'un compount, il sera créé en plus sur la racine de l'arbre.

## Script

L'icône pour votre barre à outils:

- in .PNG ![](/images/FCCircularTextButtom.png)

- in .SVG ![](/images/FCCircularTextButtom.svg)

(Voir comment [Créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr"))

### Script

**Macro_Circular_Text.FCMacro**

ou bien téléchargez le script :

- sur github [Macro_FCCircularText.FCMacro](https://gist.github.com/mario52a/a25e802498bae6959335)

- sur le forum [Extrude from curved surface of cylinder](http://forum.freecadweb.org/viewtopic.php?f=3&t=7384&p=87642#p87642)

## Exemple

- [![Texte début à 180 degrés (Begin angle) fin d'angle 360 degrés (End angle) courbe externe.](/images/FCCircularText_02.png)](/File:FCCircularText_02.png "Texte début à 180 degrés (Begin angle) fin d'angle 360 degrés (End angle) courbe externe.")

  Texte début à 180 degrés (**Begin angle**) fin d'angle 360 degrés (**End angle**) courbe externe.

- ![Texte sur une courbe externe.](/images/FCCircularText_03.png)

  Texte sur une courbe externe.

- ![Texte circulaire sur courbe interne et externe.](/images/FCCircularText_04.png)

  Texte circulaire sur courbe interne et externe.

- ![Texte circulaire sur un objet plat.](/images/FCCircularText_05.png)

  Texte circulaire sur un objet plat.

- [![Configuration supérieure. (Cliquez pour agrandir)](/images/FCCircularText_IndoorFlat_01.png)](/File:FCCircularText_IndoorFlat_01.png "Configuration supérieure. (Cliquez pour agrandir)")

  Configuration supérieure. (Cliquez pour agrandir)

- [![Configuration inférieure. (Cliquez pour agrandir)](/images/FCCircularText_IndoorFlat_02.png)](/File:FCCircularText_IndoorFlat_02.png "Configuration inférieure. (Cliquez pour agrandir)")

  Configuration inférieure. (Cliquez pour agrandir)

- ![Courbe externe.](/images/FCCircularText_26.png)

  Courbe externe.

- ![Courbe interne.](/images/FCCircularText_28.png)

  Courbe interne.

- ![Courbe interne avec extrusion et soustraction booléenne.](/images/FCCircularText_29.png)

  Courbe interne avec extrusion et soustraction booléenne.

- ![Courbe externe.](/images/FCCircularText_31.png)

  Courbe externe.

- ![Courbe interne et soustraction.](/images/FCCircularText_32.png)

  Courbe interne et soustraction.

- ![Extrusion sur un cône avec comme paramètres Sp. Inclination 45° axe Z.](/images/FCCircularText_41.png)

  Extrusion sur un cône avec comme paramètres **Sp. Inclination** 45° axe Z.

- ![Anneau avec courbe interne et soustraction.](/images/FCCircularText_42.png)

  Anneau avec courbe interne et soustraction.

- ![Pivot character 0°, 90°, ....](/images/FCCircularText_61.png)

  Pivot character 0°, 90°, ....

- ![Word Le texte est coupé à chaque caractère espace.](/images/FCCircularText_Path_00_002_000.png)

  ![](/images/CheckBoxTrue.svg) Word Le texte est coupé à chaque caractère **espace**.

## Exemple sur une ellipse

- ![Créer votre ellipse ici 100x50.](/images/FCCircularText_43.png)

  Créer votre ellipse ici 100x50.

- ![Exrtusion sur 50 mm.](/images/FCCircularText_44.png)

  Exrtusion sur 50 mm.

- [![Discretiser le périmètre et créez des point repères avec la macro Work Features. Tab Point > Point 2/3 > Points=Cut (Wire)](/images/FCCircularText_45.png)](/File:FCCircularText_45.png "Discretiser le périmètre et créez des point repères avec la macro Work Features. Tab Point > Point 2/3 > Points=Cut (Wire)")

  Discretiser le périmètre et créez des point repères avec la macro [Work Features](/Macro_WorkFeatures/fr "Macro WorkFeatures/fr").  
  Tab Point > Point 2/3 > Points=Cut (Wire)

- [![Créez uns cercle sur 3 points avec la macro Work Features. Tab Circle Circle=(3 Points)](/images/FCCircularText_46.png)](/File:FCCircularText_46.png "Créez uns cercle sur 3 points avec la macro Work Features. Tab Circle Circle=(3 Points)")

  Créez uns cercle sur 3 points avec la macro [Work Features](/Macro_WorkFeatures "Macro WorkFeatures").  
  Tab Circle Circle=(3 Points)

- [![Créez un point au centre du cercle avec la macro Work Features. Tab Point > Point 1/3 > Circle(s) center.](/images/FCCircularText_47.png)](/File:FCCircularText_47.png "Créez un point au centre du cercle avec la macro Work Features. Tab Point > Point 1/3 > Circle(s) center.")

  Créez un point au centre du cercle avec la macro [Work Features](/Macro_WorkFeatures "Macro WorkFeatures").  
  Tab Point > Point 1/3 > Circle(s) center.

- ![Créez des lignes repères pour déterminer les angles et configurez FCCircularText.](/images/FCCircularText_48.png)

  Créez des lignes repères pour déterminer les angles et configurez FCCircularText.

- ![Créez votre texte en cliquant sur le bouton Run Comp.](/images/FCCircularText_49.png)

  Créez votre texte en cliquant sur le bouton Run Comp.

- ![Sélectionnez Ellipse Extrude, Shape et cliquez sur le bouton Part Cut.](/images/FCCircularText_50.png)

  Sélectionnez Ellipse Extrude, Shape et cliquez sur le bouton ![](/images/Part_Cut.png) **Part Cut**.

- ![Effacez le cercle, les points et lignes.](/images/FCCircularText_51.png)

  Effacez le cercle, les points et lignes.

- ![Ellipses.](/images/FCCircularText_52.png)

  Ellipses.

Mode relief:

- ![Créez une nouvelle ellipse plus grande que l' ellipse de base.](/images/FCCircularText_53.png)

- ![Créez une nouvelle ellipse plus grande que l' ellipse de base. ](/images/Draft_Ellipse.png)

- ![Créez un rectangle au delà de tout .](/images/FCCircularText_54.png)

- ![Créez un rectangle au delà de tout . ](/images/Draft_Rectangle.png)

- ![Sélectionnez le rectangle , l'ellipse et créez un compound Activez Part module, puis Menu Pièces > Créer un composé.](/images/FCCircularText_55.png)

  Sélectionnez le rectangle , l'ellipse et créez un compound  
  Activez Part module, puis Menu Pièces > Créer un composé.

- ![Extrudez le composé en cochant "Créer un solide".](/images/FCCircularText_56.png)

  Extrudez le composé en cochant "Créer un solide".

- ![Selectionnez Shape (texte) , le compound et Cut .](/images/FCCircularText_57.png)

  Selectionnez Shape (texte) , le compound et Cut ![](/images/Part_Cut.png).

- ![The text is cut in the shape of the ellipse.](/images/FCCircularText_58.png)

  The text is cut in the shape of the ellipse.

- ![Sélectionnez Ellipse extruded , Cut (text) fusionnez .](/images/FCCircularText_59.png)

  Sélectionnez Ellipse extruded , Cut (text) fusionnez ![](/images/Part_Fuse.png).

## Example section path

- ![Texte placé BoundBox Base (normal)](/images/FCCircularText_Path_00_Orth_Base_000.png)

  Texte placé BoundBox Base (normal)

- ![Texte placé BoundBox Centre du caractere](/images/FCCircularText_Path_00_Orth_Center_000.png)

  Texte placé BoundBox Centre du caractere

- ![Texte en haut de la boîte de délimitation](/images/FCCircularText_Path_00_Orth_Top_000.png)

  Texte en haut de la boîte de délimitation

- ![Texte sur la ligne sélectionnée : 1 : orthogonal 2 : tangent](/images/FCCircularText_Path_00_001_000_000.png)

  Texte sur la ligne sélectionnée :  
  1 : orthogonal  
  2 : tangent

- ![Exemple d'utilisation (Texte incurvé sur une surface plane ?)](/images/YamahaDrumBadge00.gif)

  Exemple d'utilisation ([Texte incurvé sur une surface plane ?](https://forum.freecad.org/viewtopic.php?t=82577))

## Limitations

_Remarque_ il est possible qu'une erreur se produise entre les versions. Veuillez publier le problème sur le forum et attendre le correctif mis à jour ou revenir à une version précédente de la macro. Je vous remercie.

Il est possible que deux caractères se chevauchent. Si cela se produit, voici une solution de contournement disponible à l'aide de la [Rotate-To-Point Macro](https://www.freecadweb.org/wiki/Macro_Rotate_To_Point).

- ![Character overlap issue and the workaround](/images/FCCircularText_Correction.gif)

  Character overlap issue and the workaround

(pas totalement développé)

En projet:

Écriture du texte sur l'objet sélectionné

Écriture sur un chemin.

## Journal des modifications

- ver 0.22e 2024/07/11 : supprime **"ss.support = None"**

- ver 0.22d 2024/07/11 : supprime l'erreur de cause **"import WebGui"** dans FC 0.22xxx et est remplacé par **"import webbrowser"**

- ver 0.22c 2023/11/17 : adding restore selection after delete the last object , by TheMarkster , thanks

see [Curved text on a flat surface?](https://forum.freecad.org/viewtopic.php?p=719353#p719353)

```
sel = Gui.Selection.getCompleteSelection()
#delete objects
#restore previous selection
Gui.Selection.clearSelection()
for s in sel:
    Gui.Selection.addSelection(s.Object,s.SubElementNames)

```

- ver 0.22b 2023/11/15 : upgrade correction **stylesheet** and **FreeCAD.activeDocument().recompute(None,True,True)**

- ver 0.22 2022/06/06 : ajout QScrollArea cause : [Unable to run FCCircularText [Problem with screen size]](https://forum.freecadweb.org/viewtopic.php?f=3&t=69206)

- ver 0.21 2022/05/31 : ajout bouton recherche dans les répertoires, et bouton retour à l'origine système

- ver 0.2021/04/05 : ajout d'un icone dans la macro, Tab pour diminuer la hauteur de la macro, suppression de toutes les dimensions des widgets maintenant entièrement compatibles avec la feuille de style, révision de la version de recherche pour compatibilité et autres petits changements.

- ver 1.19 2021/03/15 : ajout du bouton Delette du dernier objet créé et du code `FreeCAD.ActiveDocument.openTransaction("FCCTc")` pour le système Undo/Redo.

- - Ajout d'une boîte à cocher ![](/images/CheckBoxFalse.svg) Reset pour commuter/activer (_demandé par les utilisateurs_) la réinitialisation automatique après avoir poussé le bouton Run et Run comp. Cette utilisation de la boîte à cocher est not advised, si vous constatez un dysfonctionnement appuyez sur le bouton Reset ou quittez FCCircularText et recommencez.

- ver 0.18 2021/01/19 : correction de bugs, voir [FCCircularText Macro issues](https://forum.freecadweb.org/viewtopic.php?f=22&t=54524&p=468687#p468687)

- ver 0.17b 2020/09/28: correction d'un petit bug (pl ai lieu de plm dans la section trajectoire) et arrangement de la fenêtre (dimension) Clock, Helix, Path

- ver 0.17 2020/09/26: ajout de créer un texte circulaire sur le fil (courbe, arc, spline, ligne...) sélectionné, mode mot

ver 16d 2020/09/15 : voir le message de [MasterCATZ commented Sep 14, 2020 message](https://gist.github.com/mario52a/a25e802498bae6959335)

effacé la partie de test de la version 0.18:

```
#### Test FreeCAD.Version simple ############################################################################################################
if int(FreeCAD.Version()[1]) < 18:      # Version de FreeCAD
    FreeCAD.Console.PrintMessage("This version " + __Title__ + " rmu  work with the FreeCAD 0.18 or higher." + "\n\n")
    FreeCAD.Console.PrintMessage("For the precedent version see the page " + "\n\n")
    FreeCAD.Console.PrintMessage("https://gist.githubusercontent.com/mario52a/a25e802498bae6959335/raw/db47f78f2b20a35137ac213b8d1a62d30f525dcb/Macro_FCCircularText.FCMacro" + "\n\n")
#### Test FreeCAD.Version simple ############################################################################################################

```

- ver 0.16c 2020/07/24 : text modifié proposé par by Kunda1 [Please review FCVerticalText Macro](https://forum.freecadweb.org/viewtopic.php?f=22&t=48902#p418776)

- ver 0.16b 2020/07/24 : correction de **\_\_title\_\_** to **\_\_Title\_\_** dans la version test 0.18 FC (voir [Please review FCVerticalText Macro](https://forum.freecadweb.org/viewtopic.php?f=22&t=48902))

- ver 0.16 2020/06/07 : petit bug dans Linux (cause plusieurs sous répertoires dans fonts) avec le chemin sauvé dans les options la recherche restait uniquement dans le dernier répertoire et n'affichait rien (), imposé **PolicePath = "/usr/share/fonts/"** (stay on path /xx/xx/xx/xx/xx/xx/ on entry) à chaque démarrage et la recherche se fait dans tous les sous répertoires.

- ver 0.15 2020/06/01 : Pour PySide2 Qt5 ajoutant des polices matplotlib dans comboView, configuration des paramètres.

- ver 0.14-4 2020/04/25 : correction avec "**DisplayMode = u"Flat Lines**" :

- ver 0.14-3 2020/04/25 : adapté pour :

```
OS: Windows 10 (10.0)
Word size of OS: 64-bit
Word size of FreeCAD: 64-bit
Version: 0.19.20655 (Git)
Build type: Release
Branch: master
Hash: e8e67e8c5ebbc9f9ed9ea67aba5b891969595ece
Python version: 3.6.8
Qt version: 5.12.1
Coin version: 4.0.0a
OCC version: 7.3.0

```

- ver 0.14-2 2019/07/22 replace chr(176) (donne une erreur <FC 0.18) et remplacé par le code de wmayer, voir [Fehler in Version 0.19 pre ??](https://forum.freecadweb.org/viewtopic.php?f=13&t=36380&p=308476#p308357)

```
       carDegrees = b' \xc2\xb0'.decode("utf-8")    #thanks wmayer	https://forum.freecadweb.org/viewtopic.php?f=13&t=36380&p=308476#p308357
       self.DS_InclinaisonX.setSuffix(carDegrees)
       self.DS_InclinaisonY.setSuffix(carDegrees)
       self.DS_InclinaisonZ.setSuffix(carDegrees)

```

- ver 0.14-1 2019/06/11 replace "°" to chr(176)

- ver 0.14 2019/04/27 compatible avec Python 3.6.6 et Qt 5.6.2 (cause: unicode() )

```
latest testing:

#OS: Windows 10
#Word size of OS: 64-bit
#Word size of FreeCAD: 64-bit
#Version: 0.19.16523 (Git)
#Build type: Release
#Branch: master
#Hash: 9b3ec233c8b21e0df66fada487cd10f471d60cac
#Python version: 3.6.6
#Qt version: 5.6.2
#Coin version: 4.0.0a
#OCC version: 7.3.0

```

- ver 0.13 30/01/2018 ajout d'une fonction de rotation du caractère sur lui même

- ver 0.13 09/08/2016 remplacé le bouton "New font" par la fonction "fontComboBox" cause , avec Windows 10 la fenêtre "Font" reste vide les fichiers sont cachés

- ver 0.12 03/07/2016 optimisation du code de la boucle pour accepter les décimales pour plus de précision de la répartition des angles.

remplacer la ligne:

```
for angleTr in range(debut,rotation,((rotation-debut)/nombre)):

```

par

```
for angleTrFloat in range((debut*10000),(rotation*10000),int((round(((float(rotation)-float(debut))/float(nombre)),4)*10000)) ):    # pour 4 decimales
                angleTr = (float(angleTrFloat)/10000)

```

- ver 0.10 17/05/2015 adding lines 1365, 1366 only created more clock face ?? ()

```
supp.MakeFace = True
            App.activeDocument().recompute()

```

- ver 0.9 11/05/2015 merci à NormandC pour les tests.

replace

```
self.DS_InclinaisonX.setSuffix(" X°")
        self.DS_InclinaisonY.setSuffix(" Y°")
        self.DS_InclinaisonZ.setSuffix(" Z°")

```

to

```
self.DS_InclinaisonX.setSuffix(unicode(" X°"))
        self.DS_InclinaisonY.setSuffix(unicode(" Y°"))
        self.DS_InclinaisonZ.setSuffix(unicode(" Z°"))

```

- ver 0.8 10/05/2015 replace "**String=texte[ii2]**" to "**String=unicode(texte[ii2])**" line 1290. cause "**TypeError: Property 'FontFile': type must be str or unicode, not QString**"

```
# ver 0.8 10/05/2015 /_ # testing with OS :
##################################################################################################
# OS: Ubuntu 14.04.1 LTS                          # OS: Ubuntu 14.04.2 LTS
# Platform: 32-bit                                # Word size of OS: 32-bit
# Version: 0.14.2935 (Git)                        # Word size of FreeCAD: 32-bit
# Branch: master                                  # Version: 0.16.4928 (Git)
# Hash: eab159b6ee675012bf79de838c206a311e911d85  # Branch: master
# Python version: 2.7.6                           # Hash: d8f63bcfd10301f3d1e141cced4370f0782238d0
# Qt version: 4.8.6                               # Python version: 2.7.6
# Coin version: 4.0.0a                            # Qt version: 4.8.6
# SoQt version: 1.6.0a                            # Coin version: 4.0.0a
# OCC version: 6.7.0                              # OCC version: 6.8.0.oce-0.17
##################################################################################################
# OS: Windows Vista                               # OS: Windows Vista
# Word size of OS: 32-bit                         # Word size of OS: 32-bit
# Word size of FreeCAD: 32-bit                    # Word size of FreeCAD: 32-bit
# Version: 0.15.4527 (Git)                        # Version: 0.15.4671 (Git)
# Branch: master                                  # Branch: releases/FreeCAD-0-15
# Hash: 0da2e4c45a9a259c26abd54c2a35393e1c15696f  # Hash: 244b3aef360841646cbfe80a1b225c8b39c8380c
# Python version: 2.7.8                           # Python version: 2.7.8
# Qt version: 4.8.6                               # Qt version: 4.8.6
# Coin version: 4.0.0a                            # Coin version: 4.0.0a
# OCC version: 6.7.1                              # OCC version: 6.8.0.oce-0.17
##################################################################################################

```

- ver 0.7 02/02/2015 suppression 2 str **App.Console.PrintMessage(str(PolicePath)+"\n")** to **App.Console.PrintMessage((PolicePath)+"\n")** that caused an error with the characters above 128 in the police path.
- ver 0.6 23/11/2014 corrected "texte = unicode(self.textEdit.toPlainText())" now accept "'éèà@..."
- ver 0.5 19/11/2014 Gui
- ver 0.4 10/10/2014 add variable "rotation" in the loop (**for i in range(0,rotation,(rotation/nombre)): # 360 a parametrer**)
- ver 0.4 27/08/2014 correction error of de radius (exterieur=0, debout=1)
- ver 0.3 26/08/2014 add creation text of flat curve
- ver 0.2 26/08/2014 add creation text of internal curve
- ver 0.1

(2537)

### Liens

La page dédiée sur le forum pour tout commentaires et signalisation d'éventuelles erreurs [Extrude from curved surface of cylinder](http://forum.freecadweb.org/viewtopic.php?f=3&t=7384)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCCircularText/fr&oldid=1452952>"
