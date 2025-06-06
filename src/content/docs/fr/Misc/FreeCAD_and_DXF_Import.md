---
title: FreeCAD et importation DXF
---
## Contexte

DXF est un format de données CAO propriétaire pour les dessins 2D créés avec AutoCAD. Plus de détails peuvent être trouvés sur la page wiki [DXF](/DXF/fr "DXF/fr").

## Introduction

Depuis la version 0.18 de FreeCAD, il existe un nouvel importateur en C++ de DXF, et depuis la version 0.19 également un nouvel exportateur en C++ de DXF. Ces nouveaux composants sont installés avec FreeCAD.

Pour utiliser l'ancien importateur et exportateur DXF, vous devez installer plusieurs fichiers. Ces fichiers ne peuvent pas être inclus avec FreeCAD car ils utilisent des bibliothèques publiées sous une licence qui n'est pas compatible avec FreeCAD.

## Comment installer l'ancien importateur et exportateur de DXF

### Automatiquement

Si les fichiers ne sont pas déjà installés, allez dans le menu **Édition → Préférences → Importer/Exporter → DXF** et activez l'option **Permettre à FreeCAD de télécharger automatiquement les bibliothèques DXF** pour que FreeCAD les télécharge et les installe automatiquement.

Pour FreeCAD version 0.14 ou antérieure, vous devez les installer manuellement.

### Manuellement

1. Allez sur le compte [Github de Yorik](https://github.com/yorikvanhavre/Draft-dxf-importer) et téléchargez ces fichiers (à droite, choisissez "download as ZIP").
2. Placez les fichiers dans votre dossier de macros.
3. Si vous ne savez pas où se trouve ce dossier, allez dans **Edition → Python → Général → Macro** et vérifiez le champ nommé **Macro Path**.

* Sous Ubuntu, votre dossier de macros est normalement (le dossier est caché, vous devrez peut-être l'afficher) :

```
/home/your_user_name/.FreeCAD 

```

* Sous Windows, votre dossier de macros est normalement :

C:\Users\your\_user\_name\AppData\Roaming\FreeCAD

## Trucs et astuces

Parfois, les fichiers DXF ne semblent pas vouloir s'importer, bien qu'ils s'ouvrent dans les programmes 2D-DXF-CAD sans problèmes.

Vous pouvez essayer :

1. Allez dans **Édition → Préférences → Import-Export → DXF** et décochez l'option **Joindre la géométrie** et réessayez.
2. N'oubliez pas que vous n'aurez peut-être plus de points de terminaison coïncidents. Vous pouvez les faire coïncider avec [Sketcher Valider une esquisse](/Sketcher_ValidateSketch/fr "Sketcher ValidateSketch/fr")

Vous pouvez également essayer:

1. Allez dans **Edition → Préférences → Draft → Paramètres généraux** et ajustez la valeur de **Tolérance** (par défaut : 0,05) et réessayez.

Pour un aperçu de toutes les préférences liées à DXF, voir les [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DXF "Import Export Preferences/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_DXF_Import/fr&oldid=1493370>"