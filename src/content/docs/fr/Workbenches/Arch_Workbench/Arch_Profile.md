---
title: Arch Profilé
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Profilé |
| Emplacement du menu |
| 3D/BIM → Outils 3D génériques → Profilé |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Profilé** crée un objet de profil 2D paramétrique. Cet objet peut ensuite être utilisé comme base dans différents autres outils qui effectuent des extrusions tels que [Arch Ossature](/Arch_Frame/fr "Arch Frame/fr"), [Arch Mur-rideau](/Arch_CurtainWall/fr "Arch CurtainWall/fr") ou [Part Extrusion](/Part_Extrude/fr "Part Extrude/fr").

Voir la [liste des préréglages disponibles](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv).

L'outil Profilé est également intégré à l'outil [Arch Structure](/Arch_Structure/fr "Arch Structure/fr"), tous les profilés prédéfinis y sont également disponibles.

## Utilisation

1. Appuyez sur le bouton ![](/images/Arch_Profile.svg) Profilé
2. Sélectionnez un préréglage dans le panneau des tâches de l'outil
3. Cliquez sur un point de la vue 3D pour placer le profilé

## Propriétés

### Données

* Données**Height** : hauteur globale du profilé
* Données**Width** : largeur globale du profilé
* Données**Diameter** : diamètre du profilé (profilés circulaires uniquement)
* Données**Thickness** : épaisseur de la paroi du tube (profilés creux circulaires et rectangulaires uniquement)
* Données**Web Thickness** : épaisseur de l'âme du profilé (profilés H et I uniquement)
* Données**Flange Thickness** : épaisseur de la semelle du profilé (profilés H et I uniquement)

## Ajouter des profilés personnalisés

Un fichier CSV supplémentaire peut être créé par l'utilisateur contenant des définitions des profilés personnalisés. Il doit être nommé `profiles.csv` et placé dans

```
$FREECAD_USER_DIR/BIM/

```

Le `$FREECAD_USER_DIR` peut être obtenu à partir de la [console Python](/Python_console/fr "Python console/fr") :

```
FreeCAD.getUserAppDataDir()

```

Le contenu de votre fichier personnalisé `profiles.csv` doit être calqué sur les mêmes règles que les profils intégrés [profiles.csv](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv) dans le code source :

Le fichier CSV doit contenir une ligne par profilé disponible est formaté comme suit :

* Pour les profilés C : catégorie, nom, classe de profil, diamètre, épaisseur
* Pour les profilés H, U et T : catégorie, nom, classe de profil, largeur, hauteur, épaisseur de l'âme, épaisseur de la semelle
* Pour les profilés L : catégorie, nom, classe, classe de profil, largeur, hauteur, épaisseur
* Pour les profilés R : catégorie, nom, classe, classe de profil, largeur, hauteur
* Pour les profilés RH : catégorie, nom, classe, classe de profil, largeur, hauteur, épaisseur

Toutes les mesures doivent être en millimètres. Les classes possibles de profilés sont :

* C : tube circulaire
* H : profil [H ou I](https://fr.wikipedia.org/wiki/Poutrelle_en_I)
* R : rectangulaire
* RH : creux rectangulaire
* U : profil en U
* L : profil en L
* T : profil en T

Des types de profils supplémentaires peuvent être créés, mais une classe correspondante doit d'abord être définie dans [ArchProfile.py](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/ArchProfile.py).

## Script

L'outil Profilé peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
profile = makeProfile(profile_list)

```

Où `profile_list` contient les différents éléments d'une liste dans le fichier CSV.

Exemple :

```
import Arch
Arch.makeProfile([0, 'REC', 'REC100x100', 'R', 100, 100])

```

Lorsque le premier élément de la liste est un numéro ordonné pas encore utilisé.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Profile/fr&oldid=1481339>"