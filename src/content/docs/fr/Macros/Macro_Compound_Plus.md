---
title: Compound Plus
---

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro Compound Plus                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Commande Draft définie dans une petite macro pour l'exemple de fil 2D: travailler avec les fichiers DXF. La macro détecte: Ligne, Arc, Cercle, Ellipse, BSplineCurve et reproduit le fil DXF dans un objet Draft. Le texte est converti en ShapeString. Version macro : 00.05 Date dernière modification : 2024-11-11 Version FreeCAD : 0.21.2 et plus Téléchargement : [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png) Auteur: Mario52 |
| Auteur                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Mario52](/User:Mario52 "User:Mario52")                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Téléchargement                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/f/fd/Macro_Compound_Plus.png)                                                                                                                                                                                                                                                                                                                                                                                         |
| Liens                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                                                                                                                                                                                            |
| Version Macro                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 00.05                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2024-11-11                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.21.2 et plus                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Raccourci clavier                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Voir aussi                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| _None_                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Description

Commande Draft définie dans une petite macro pour l'exemple de fil 2D: travaille avec les fichiers DXF. La macro détecte: Ligne, Arc, Cercle, Ellipse, BSplineCurve et reproduit le fil DXF dans un objet Draft. Le texte est converti en ShapeString.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro)_

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
    "https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro")

```

<class="rawcodeurl"><a href="<https://gist.githubusercontent.com/mario52a/7be361a8c489deec918f664fdcfc4394/raw/2d12268123cbd38a3fba10fff1c7f35837cd3325/Macro_Compound_Plus.FCMacro>">raw code</a>

## Utilisation

![Macro_Compound_Plus_00](/images/Macro_Compound_Plus_00.png)

### Choix

- ![](/images/Part_Compound.svg) Compound I Type I [1 + 1 = 1] : créez un composé unique de tous les objets sélectionnés sans historique.
- ![](/images/Part_Compound.svg) Compound II Type II [1 + 1 = A (1 + 1)] : Créez un composé de tous les objets sélectionnés avec l'historique de tous les objets. Idem "**Menu → Part → Make compound**".

### Couleur de l'option

S'il ![](/images/CheckBoxFalse.svg) est vérifiée, la couleur de l'objet à travailler sont colorées (bord, sommet)

- ![](/images/Workbench_Image.svg) Color  : Donne une couleur à l'objet. (Rouge par défaut 255, 0, 0)

### Outils

- LineEdit: affiche (Index de police/nombre de police) le chemin et le nom de la police.

* ![](/images/Draft_Text.svg) Convert Text (A) : convertir le texte ![](/images/Draft_Text.svg) en une chaîne de forme ![](/images/Draft_ShapeString.svg) (La hauteur du texte converti est respectée mais le résultat visuel peut ne pas être respecté, voir la propriété Vue combinée pour confirmer). (A) est la hauteur de la valeur automatique du texte.

  - 0,00 Auto ![](/images/SpinBox.svg) : Si spinbox est égal à 0.0, la hauteur de la VALEUR du texte est respectée. Si différent de 0.0, le ![](/images/Draft_Text.svg) Convert Text (A) se change en mode manuel ![](/images/Draft_Text.svg) Convert Text (M).

* ![](/images/Draft_Line.svg) Convert Wire (A) : Cette commande convertit le fil en une ligne avec des coordonnées. (ex: un composé rétrogradé n'a pas de coordonnées, cette fonction crée une ligne avec les coordonnées comme ligne de dépouille et reproduit le fil DXF dans un objet dépouille sont détectées: ligne, arc, cercle, ellipse, BSplineCurve.
  - 0,00 Auto ![](/images/SpinBox.svg) : Donne une épaisseur du fil. Si spinbox est égal à 0.0, la hauteur de la VALEUR du texte est respectée, si différent de 0.0, le ![](/images/Draft_Line.svg) Convert Wire (A) se change en mode manuel Convert Wire (M).
* ![](/images/CheckBoxFalse.svg) ![](/images/Draft_BezCurve.svg) BezierCurve : Par défaut, le BezierCurve détecté est ![](/images/Draft_BezCurve.svg), s'il est coché, le BezierCurve est cubique ![](/images/Draft_CubicBezCurve.svg) et le bouton change ![](/images/CheckBoxTrue.svg) ![](/images/Draft_CubicBezCurve.svg) Cubic BezierCurve

* ![](/images/RadioButtonTrue.svg) ![](/images/Std_DrawStyleFlatLines.svg) FlatLines : les objets créés sont des FlatLines.
* ![](/images/RadioButtonFalse.svg) ![](/images/Std_DrawStyleWireFrame.svg) Wireframe : Les objets créés sont Wireframe.
* ![](/images/RadioButtonFalse.svg) ![](/images/Std_DrawStylePoints.svg) Points : Les objets créés sont des Points.
* ![](/images/Draft_Upgrade.svg) UpGrade : UpGrade
* ![](/images/Draft_Downgrade.svg) DownGrade : DownGrade

### Pour le composé I et le bord de conversion

Cette section fonctionne uniquement avec les outils ![](/images/Part_Compound.svg) Compound I, ![](/images/Draft_Text.svg) Convert Text (A) et ![](/images/Draft_Line.svg) Convert Wire (A)

- ![](/images/RadioButtonTrue.svg) None : Tous les objets d'origine restent tels quels.
- ![](/images/RadioButtonFalse.svg) Hidden original objest(s) : Masque les objets originaux.
- ![](/images/RadioButtonFalse.svg) Delete original objest(s) : supprime les objets originaux.

### Forcer sur une forme: Ligne

Si l'objet ligne, arc ou cercle n'est pas reconnu (comme forme dans un objet 3D de volume), cette section force la création d'une ligne, d'un arc ou d'un cercle.

aucune vérification n'est effectuée, cette section plateau permet de créer une forme 2D demandée (Draft) en fonction des données fournies

- ![](/images/RadioButtonTrue.svg) ![](/images/Draft_Line.svg) Lines : pour créer une ligne.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Arc.svg) Arc : pour créer un arc.
- ![](/images/RadioButtonFalse.svg) ![](/images/Draft_Circle.svg) Circle : pour créer un cercle
- ![](/images/Draft_Line.svg) Force on : Line : Bouton Force

### Commande

- Barre de progression
- Reset : réinitialiser la macro
- Quit : Quittez la macro, bye
- Help :afficher la page wiki dans le navigateur FreeCAD

## Script

L' icône pour votre barre d'outils ![](/images/Macro_Compound_Plus.png) a copier dans votre répertoire de macros.

[Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr"), [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr")

Le script sur github [Macro_Compound_Plus.FCMacro](https://gist.github.com/mario52a/7be361a8c489deec918f664fdcfc4394)

## Liens

Mes macros sur [Github](https://gist.github.com/mario52a)

## Version

- 11/11/2024 ver 0.05  : retour à **PySide** et remplacé **WebGui**par **webbrowser**
- 15/08/2020 ver 0.04: ajout de la section "Forcer la forme" si non détectée, créer Ligne, Arc et Cercle sur forcé
- 14/05/2020 ver 00.03: mise à niveau pySide2 et Qt5 et (police matPlotLib) et convertir Cercle, Arc, Ellipse, BezierCurve
- 24/01/2018 ver 00.02: sup "import PyQt4"
- 21/11/2016 ver 00.01:

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Compound_Plus/fr&oldid=1505498>"
