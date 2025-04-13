---
title: CAM Exporter un modèle
---
|  |
| --- |
| CAM Exporter un modèle |
| Emplacement du menu |
| CAM → Exporter comme modèle |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Feuille de configuration](/CAM_SetupSheet/fr "CAM SetupSheet/fr") |
|  |

## Description

L'outil ![](/images/CAM_ExportTemplate.svg) Exporter un modèle fournit un mécanisme pratique pour sauvegarder les définitions de tâches couramment utilisées à partir d'une tâche existante. Cela facilite la mise en place de futurs tâches, qui sont en grande partie similaires, en permettant l'importation de modèles de tâches pendant le processus de création de tâches.

**Édition → Préférences... → CAM → Préférences des tâches → Valeurs par défaut → Modèle** définit le modèle par défaut.

## Utilisation

1. Sélectionnez l'option **CAM → ![](/images/CAM_ExportTemplate.svg) Exporter comme modèle** du menu.
2. Sélectionnez les éléments à inclure dans la fenêtre de dialogue de configuration **Exporter comme modèle**.
3. Le modèle doit être enregistré dans le répertoire Macro ou le répertoire CAM, tel que configuré dans les [CAM Préférences](/CAM_Preferences/fr "CAM Preferences/fr").
4. Le nom du modèle doit suivre le modèle job\_<template name>.json. Lorsqu'il est affiché dans la liste déroulante de la sélection, le préfixe job\_ et l'extension sont omis.
5. Appuyez sur le bouton OK et enregistrez le modèle.

## Options

## Post-traitement

* Sélection du post-processeur
* Paramètres du post-processeur
* Nom du fichier de sortie

## Brut

* Marge : dimensions du brut
* Position : position du brut

## Feuille de réglage

* Profondeur d'usinage
* Profondeurs de passe
* Vitesses de déplacement de l'outil

## Contrôleurs d'outils

* Contrôleurs d'outils sélectionnés.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ExportTemplate/fr&oldid=1495992>"