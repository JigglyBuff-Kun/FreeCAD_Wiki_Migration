---
title: Download Classifications
---

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Generic macro icon](/File:Text-x-python.png "Generic macro icon") Download Classifications                                                                                                                                      |
| Description                                                                                                                                                                                                                      |
| Télécharge un ensemble de systèmes de classification BIM à utiliser dans FreeCAD Version macro : 1.0 Date dernière modification : 2024-12-13 Version FreeCAD : Toutes Auteur: yorik                                              |
| Auteur                                                                                                                                                                                                                           |
| [yorik](/User:Yorik "User:Yorik")                                                                                                                                                                                                |
| Téléchargement                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                            |
| 2024-12-13                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                               |
| Toutes                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                  |

## Description

Cette macro télécharge une série de systèmes de classification BIM à partir de <https://github.com/Moult/IfcClassification> et les place dans le dossier approprié de votre ordinateur afin qu'ils soient trouvés par l'outil [BIM Classification](/BIM_Classification/fr "BIM Classification/fr").

## Utilisation

Lancez la macro. Une fois qu'elle a été exécutée avec succès, les nouveaux systèmes de classification seront disponibles dans l'outil [BIM Classification](/BIM_Classification/fr "BIM Classification/fr"). Une fois la macro exécutée et les systèmes de classification installés, vous pouvez supprimer la macro en toute sécurité.

## Installation

Par le biais du [gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Code

**Macro_Download_Classifications.FCMacro**

```
import os
import FreeCAD
import requests
import json

target = os.path.join(FreeCAD.getUserAppDataDir(), "BIM", "Classification")
apireq = "https://api.github.com/repos/Moult/IfcClassification/contents/xml"

r = requests.get(apireq)
if r.ok:
    j = json.loads(r.content)
    print("Installing to", target", ...")
    for f in j:
        df = requests.get(f["download_url"])
        with open(os.path.join(target, f["name"]), 'wb') as tf:
            tf.write(df.content)
            print("Downloaded", f["name"])
else:
    print("error getting repo contents")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Download_Classifications/fr&oldid=1519859>"
