---
title: Draft Définir le style
---
|  |
| --- |
| Draft Définir le style |
| Emplacement du menu |
| Utilitaires → Définir le style |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| Draft : S S |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [Draft Éditer le style des annotations](/Draft_AnnotationStyleEditor/fr "Draft AnnotationStyleEditor/fr"), [Draft Appliquer le style](/Draft_ApplyStyle/fr "Draft ApplyStyle/fr") |
|  |

## Description

La commande ![](/images/Draft_SetStyle.svg) **Draft Définir le style** définit le style par défaut des nouveaux objets.

![](/images/Draft_SetStyle_Taskpanel_Tab_Shape.png) ![](/images/Draft_SetStyle_Taskpanel_Tab_Annotation.png)

Les deux onglets du panneau de tâches des paramètres de style ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr"))

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_tray_button_style.png) de la [Draft Barre](/Draft_Tray/fr "Draft Tray/fr"). En fonction des paramètres de style en cours, ce bouton peut avoir un aspect différent.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr"): sélectionnez l'option **Utilitaires → ![](/images/Draft_SetStyle.svg) Définir le style** du menu ou dans le menu contextuel de la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou de la [vue 3D](/3D_view/fr "3D view/fr").
   * Draft : utilisez le raccourci clavier : S puis S.
2. Le panneau de tâches **Paramètres de style** s'ouvre. Voir [Options](#Options) pour plus d'informations.
3. Modifiez éventuellement un ou plusieurs paramètres.
4. Appuyez sur le bouton OK pour enregistrer les paramètres.
5. Le bouton de [Draft La barre](/Draft_Tray/fr "Draft Tray/fr") est mis à jour.

## Options

* Dans la liste déroulante située en haut du panneau des tâches, il est possible de sélectionner un préréglage de style existant.
* Cliquez sur le bouton ![](/images/Document-save.svg) pour enregistrer les paramètres de style en cours en tant que préréglage.
* Dans l'onglet **Forme**, les paramètres suivants peuvent être spécifiés :
  + **Apparence des formes**
    - **Couleur des formes**.
    - **Couleur autour des formes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Couleur émissive des formes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Couleur spéculaire des formes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Transparence des formes**.
    - **Brillance des formes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
  + **Autre**
    - **Couleur des lignes**.
    - **Largeur des lignes**.
    - **Couleur des points**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Taille des points**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Style de trait**.
    - **Mode d'affichage**.
* Les paramètres de l'onglet **Annotation** s'appliquent à [Draft Textes](/Draft_Text/fr "Draft Text/fr"), [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr") et [Draft Étiquettes](/Draft_Label/fr "Draft Label/fr"). Les paramètres suivants peuvent être spécifiés (voir [Draft Texte](/Draft_Text/fr#Vue "Draft Text/fr") et [Draft Dimension](/Draft_Dimension/fr#Vue "Draft Dimension/fr") pour plus de détails) :
  + **Textes**
    - **Nom de la police**.
    - **Taille de la police**. Il s'agit en fait de la hauteur de ligne par défaut, les lettres sont plus petites.
    - **Espace interlignes**. Non utilisé pour les dimensions.
    - **Multiplicateur d'échelle**. C'est l'inverse de l'échelle définie dans le [Widget d'échelle d'annotation](/Draft_annotation_scale_widget/fr "Draft annotation scale widget/fr"). Si l'échelle est `1:100`, le multiplicateur est `100`. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Couleur des textes**.
  + **Lignes et flèches**
    - **Largeur des lignes**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
    - **Type des flèches**.
    - **Taille des flèches**.
    - **Couleur des lignes et flèches**. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
  + **Dimensions**
    - **Afficher l'unité**.
    - **Substitution d’unité**.
    - **Dépassement des lignes de dimension**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
    - **Longueur des lignes d'extension**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
    - **Dépassement des lignes d'extension**. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")
    - **Espacement du texte**.
* Appuyez sur le bouton ![](/images/Draft_SetStyle.svg) Sélectionné pour appliquer les paramètres aux objets ou groupes sélectionnés. Les objets peuvent être sélectionnés lorsque le panneau des tâches est ouvert.
* Cliquez sur le bouton ![](/images/Draft_Text.svg) Annotations pour appliquer les paramètres aux [Draft Textes](/Draft_Text/fr "Draft Text/fr"), [Draft Dimensions](/Draft_Dimension/fr "Draft Dimension/fr") et [Draft Étiquettes](/Draft_Label/fr "Draft Label/fr") dans le document en cours. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Appuyez sur le bouton Annuler pour terminer la commande sans enregistrer les paramètres.

## Remarques

* Les paramètres de l'onglet **Forme**, à l'exception de **Style de trait** et **Mode d'affichage**, sont utilisés non seulement pour les objets Draft, mais aussi pour les objets créés avec d'autres ateliers.
* Tous les paramètres, à l'exception de **Style de trait** et **Mode d'affichage**, peuvent également être modifiés dans les préférences. Voir [PartDesign Préférences](/PartDesign_Preferences/fr#Aspect_de_la_forme "PartDesign Preferences/fr") et [raft Préférences](/Draft_Preferences/fr#Textes_et_dimensions "Draft Preferences/fr").
* Les styles sont enregistrés dans un fichier au nom fixe : StylePresets.json stocké dans le dossier utilisateur de FreeCAD Draft :
  + Sous Linux, il s'agit généralement de /home/<username>/.local/share/FreeCAD/Draft/.
  + Sous Windows, il s'agit du dossier %APPDATA%\FreeCAD\\Draft, qui est généralement sous C:\Users\<username>\Appdata\Roaming\FreeCAD\Draft.
  + Sous macOS, il s'agit généralement de /Users/<username>/Library/Preferences/FreeCAD/Draft/.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SetStyle/fr&oldid=1513962>"