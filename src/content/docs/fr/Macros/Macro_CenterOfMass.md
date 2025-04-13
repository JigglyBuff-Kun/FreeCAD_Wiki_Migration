---
title: CenterOfMass
---

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro CenterOfMass                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                      |
| Calculer et montrer le centre de masse de plusieurs solides. Version macro : 0.8.3 Date dernière modification : 2025-01-21 Version FreeCAD : 0.20 et supérieure Auteur: Schupins, SyProLei, s-quirin, farahats9                  |
| Auteur                                                                                                                                                                                                                           |
| [Schupins, SyProLei, s-quirin, farahats9](/index.php?title=User:Schupins,_SyProLei,_s-quirin,_farahats9&action=edit&redlink=1 "User:Schupins, SyProLei, s-quirin, farahats9 (page does not exist)")                              |
| Téléchargement                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                    |
| 0.8.3                                                                                                                                                                                                                            |
| Dernière modification                                                                                                                                                                                                            |
| 2025-01-21                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                               |
| 0.20 et supérieure                                                                                                                                                                                                               |
| Raccourci clavier                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                  |

## Description

Donne la masse totale et l'emplacement du centre de masse des objets sélectionnés. Différentes densités peuvent être choisies pour chaque objet.

Temporary code for external macro link. Do not use this code. This code is used exclusively by [Addon Manager](/Std_AddonMgr "Std AddonMgr"). _Link for optional manual installation: [Macro](https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro)_

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
    "https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro" + "\n"
    "\n"
    "Quit this window to access the download page")

diag.setWindowFlags(QtCore.Qt.WindowStaysOnTopHint)
diag.setWindowModality(QtCore.Qt.ApplicationModal)
diag.exec_()

import webbrowser
webbrowser.open("https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro")

```

<class="rawcodeurl"><a href="<https://raw.githubusercontent.com/FreeCAD/FreeCAD-macros/master/Information/CenterOfMass.FCMacro>">raw code</a>

![](/images/CenterOfMass_exemple.png)

## Utilisation

1. Sélectionner un ou plusieurs solides.
2. Lancez la macro.
3. Vous aurez une fenêtre listant les solides. Vous pouvez spécifier la densité de votre matériau dans différents systèmes d'unités ou choisir parmi les matériaux prédéfinis.

### Options disponibles

- Colorier les solides en fonction de leur densité.
- Afficher l'emplacement du centre de masse.
- Exporter et importer des _masses_, des _matériaux_ et des _densités_ (même s'il ne s'agit pas d'un fichier .csv de la macro, mais les colonnes doivent être nommées en conformité).
- Sauvegarder les densités dans le document (les supprimer à nouveau lorsque l'on règle le matériau àdefault ![](/images/ComboBox.svg)).
- Vous pouvez modifier certaines préférences dans **Outils → Modifier les paramètres → Préférences → Macros**.

## Script

Vous pouvez télécharger la macro depuis GitHub :
[Macro CenterOfMass.FCMacro](https://github.com/FreeCAD/FreeCAD-macros/blob/master/Information/CenterOfMass.FCMacro)

Vous pouvez utiliser ce fichier de l'icône comme une icône de la barre d'outils :
![](/images/Macro_CenterOfMass.svg)

## Lien

La discussion sur le forum : [Macro to compute center of mass](https://forum.freecad.org/viewtopic.php?f=24&t=31883)

## Version

Version / Date de merge

0.8.3 / 2025-01-23 :

- Correction : [Plusieurs corrections (PR#191)](https://github.com/FreeCAD/FreeCAD-macros/pull/191), FreeCAD 0.19 n'est plus supporté.

  0.8.0 / 2025-01-06 : merci à farahats9 pour sa contribution

- Nouveau : afficher le volume et la surface
- Nouveau : calcul des moments d'inertie
- Correction : la macro fonctionne maintenant avec l'exemple d'assemblage dans FreeCAD 1.0
- Correction : sélection automatique du matériau pour les solides s'il est déjà assigné par le nouveau système de matériaux.
- Modifications mineures de l'interface utilisateur

  0.7.6 / 2024-08-01 : préparation à la version majeure de FreeCAD

- Correction : faire fonctionner l'exemple d'assemblage 0.22.0dev.
- Correction : importation d'une nomenclature contenant un matériau personnalisé
- Correction : support des nouveaux jeux de paramètres de matériaux
- Correction : icônes modifiées ou manquantes, vérification des versions

  0.7.3 / 2023-09-11 :

- Nouveau : ajout de boutons pour copier dans le presse-papier
- Nouveau : icône de graphiques vectoriels évolutifs
- Correction : compatibilité avec les versions de FreeCAD et le web

  0.7.0 / 2023-02-13 :

- Nouveau : barre de recherche pour les solides
- Nouveau : fonction d'importation retravaillée pour améliorer l'importation de nomenclatures externes avec une meilleure tolérance d'entrée. La légende "poids" doit être changée en "masse" si vous voulez importer la masse d'un ancien fichier d'exportation de la macro.
- Nouveau : la masse peut être mise à zéro pour exclure le solide du calcul et de la visualisation.
- Correction : comportement de la rotation de la valeur par défaut et "Appliquer à tous"
- Correction : préservation de la couleur originale des solides lorsque le bouton "Nouveau" est pressé.

  0.6.0 / 2022-08-27 :

- Nouveau : les masses sont éditables (une fonctionnalité très demandée)
- Nouveauté : mise en évidence du solide sur lequel vous travaillez
- Nouveau : pas d'entrées dupliquées lorsque le conteneur et le contenu sont sélectionnés simultanément
- Nouveau : les camemberts affichent la relation de densité dans la boîte combo.
- Nouveau : lisibilité du texte sur les combo-boxes colorées avec la conformité WCAG21 1.4.6 Contrast (Enhanced).
- Correction : une partie utilisée comme conteneur pour des maillages (par exemple .stl) est reconnue correctement.
- Correction : corrections pour la gestion des erreurs et de la langue, l'édition des matériaux, l'ajustement de la taille des combo-boxes et de l'interface graphique.

  0.5.8 / 2022-05-31 :

- Réinsertion : boîte de délimitation
- Nouveau : réglage pour colorer les sphères
- Nouveau : paramètre pour changer les cartes de couleur
- GUI réorganisée : calcul de mise à jour ajouté, Densité totale ajoutée
- Correction : les boîtes de messages ne pouvaient pas être utilisées lorsque FreeCAD n'était pas exécuté sur l'écran principal dans une configuration multi-moniteur.
- Correction : plus d'une maille n'était pas calculée correctement

  0.5.0 / 2022-04-07 : réécriture complète par s-quirin (projet SyProLei à l'Université de la Sarre)

- Nouveau : base de code, Exigences augmentées à Qt5.12+ et Python3 (FreeCAD 0.19).
- Nouveau : affichage de la masse de chaque solide.
- Nouveau : fenêtre de démarrage ancrée ou flottante (peut être définie dans l'éditeur de paramètres).
- Nouveau : la sélection correspond à l'arborescence ou est triée par nom (peut être défini dans l'éditeur de paramètres).
- Nouveau : option pour sauvegarder les densités dans le document.
- Amélioré : l'aspect et la convivialité du Gui similaire à FreeCAD.
- Amélioration : palette de couleurs échelonnée (du vert au rouge) pour colorer les formes.
- Amélioration : visualisation du déplacement du centre de masse sur la géométrie.
- Amélioration : suivi interne des unités.
- Correction : gestion des groupes et des objets de groupe.
- Correction : gestion de App::Link.
- Correction : remplacement d'une classe Qt obsolète.

  0.4.1 / 2019-05-25 : dernière mise à jour avec les anciennes exigences et l'interface graphique disponible dans le dépôt officiel.

  0.1.2 / 2018-11-10 : version initiale de chupins fusionnée dans le dépôt officiel.

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_CenterOfMass/fr&oldid=1538300>"
