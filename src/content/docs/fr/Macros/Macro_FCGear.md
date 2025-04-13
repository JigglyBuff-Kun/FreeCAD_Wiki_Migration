---
title: FCGear
---

:::caution
Cette macro a été convertie en atelier appeléatelier FCGear. Veuillez utiliser l'atelier au lieu de cette macro car il est maintenu.
:::

|                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro FCGear                                                                                                                                                                                                                     |
| Description                                                                                                                                                                                                                      |
| Atelier additionnel pour créer des engrenages de différents types. Version macro : 1.0 Date dernière modification : 2015-10-27 Auteur: looooo                                                                                    |
| Auteur                                                                                                                                                                                                                           |
| [looooo](/index.php?title=User:Looooo&action=edit&redlink=1 "User:Looooo (page does not exist)")                                                                                                                                 |
| Téléchargement                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                            |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr") |
| Version Macro                                                                                                                                                                                                                    |
| 1.0                                                                                                                                                                                                                              |
| Dernière modification                                                                                                                                                                                                            |
| 2015-10-27                                                                                                                                                                                                                       |
| Version(s) FreeCAD                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                           |
| Voir aussi                                                                                                                                                                                                                       |
| _None_                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                  |

## Description

Atelier additionnel pour créer des engrenages de différents types.
Les types suivants sont créés, engrenages développants, crémaillère a taille droite, engrenages cycloïde, engrenages coniques.

![FCGear](/images/FCGear_00.png)

FCGear

## Installation

- git clone <https://github.com/looooo/freecad.gears.git>
- créez un lien ou copiez le dossier freecad.gears dans /.FreeCAD/Mod (sudo ln -s (path_to_FCGear)/gear (path_to_freecad)/Mod)

Note:

- dézippez le fichier FCGear.zip, et
- copiez le répertoire **gear** complet dans /FreeCAD/Mod
  - Avec Windows vous devez rendre les fichiers visibles
  - Sous Linux en général chemin est usr/lib/FreeCAD/Mod.

```
Vous devez ouvrir .Mod en mode administrateur et vous devez donner les droits d'accès à tous les fichiers de "gear"

```

- Pour que FCGear fonctionne, il faut que "numpy" soit installé, numpy est installé d'office depuis la version 0.15.4671 de FreeCAD, FCGear ne fonctionnera pas sur les anciennes versions de FreeCAD

## Création d'un engrenage

- sélectionnez l'atelier gear
- cliquez sur le symbole gear
- adaptez les parametres à vos besoins

![Involutegear](/images/Involutegear.png)![FCGear_involutegear_par](/images/FCGear_involutegear_par.png)
![Involuterack](/images/Involuterack.png)![FCGear_involuterack_par](/images/FCGear_involuterack_par.png)

![Cycloidegear](/images/Cycloidegear.png)![FCGear_cycloide_par](/images/FCGear_cycloide_par.png)
![Bevelgear](/images/Bevelgear.png)![FCGear_bevel_par](/images/FCGear_bevel_par.png)

## Liens

- [FCGear](https://github.com/looooo/FCGear)
- [Forum topic](http://forum.freecadweb.org/viewtopic.php?f=3&t=12878&start=20)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_FCGear/fr&oldid=693084>"
