---
title: TechDraw Page standard
---
|  |
| --- |
| TechDraw Page standard |
| Emplacement du menu |
| TechDraw → Page → Insérer une page standard |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [TechDraw Page à partir d'un modèle](/TechDraw_PageTemplate/fr "TechDraw PageTemplate/fr"), [TechDraw Modèles](/TechDraw_Templates/fr "TechDraw Templates/fr") |
|  |

## Description

L'outil **TechDraw Page standard** crée une page à l'aide du fichier modèle spécifié dans les [préférences](/TechDraw_Preferences/fr "TechDraw Preferences/fr").

![](/images/A4_LandscapeTD.svg)

Modèle par défaut fourni avec TechDraw : A4\_LandscapeTD.svg

## Utilisation

1. Un document actif doit exister.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_PageDefault.svg) Insérer une page standard.
   * Sélectionnez l'option **TechDraw → Page → ![](/images/TechDraw_PageDefault.svg) Insérer une page standard** du menu.

## Remarques

* Si une page est marquée comme "Ne pas garder à jour" soit par sa propriété Données**Keep Updated**, soit par l'option **Activer/désactiver la mise à jour** du menu contextuel, soit par le réglage dans les Préférences, elle ignorera les changements dans le modèle 3D. Il se peut que vous remarquiez des anomalies (géométrie manquante, valeurs de dimension manquantes, etc.) dans l'apparence de la page. Ces anomalies se corrigeront d'elles-mêmes lorsque la page sera mise à jour à l'aide de l'outil [Redessiner une page](/TechDraw_RedrawPage/fr "TechDraw RedrawPage/fr"). La page aura cette icône ![](/images/TechDraw_Tree_Page_Unsync.svg) dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") pendant que la mise à jour est suspendue. Ce paramètre affecte également le processus de démarrage. Si une page est marquée comme "Ne pas garder à jour", elle ne sera pas dessinée au démarrage du programme.

* Si le modèle par défaut n'est pas spécifié dans votre fichier de configuration utilisateur `user.cfg`, l'outil va essayer :

:   ```
    $INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

:   Où `$INSTALL_DIR` est le répertoire d'installation de FreeCAD, par exemple :

:   ```
    /usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## Propriétés

### Données

Base

* Données**Projection Type** : type de projection par défaut (premier ou troisième angle) pour cette page.

Page

* Données**KeepUpdated** : si la valeur est false, la page n'est pas mise à jour avec les modifications apportées au modèle 3D. Utile pour les dessins compliqués/lents. Voir [Remarques](#Remarques).
* Données**Template** : lien vers l'objet [Modèle](/TechDraw_Templates/fr "TechDraw Templates/fr") de cette page.
* Données**Views** : liste de liens vers les vues sur cette page.
* Données**Scale** : échelle par défaut pour les vues dans cette page.
* Données**Next Balloon Index** : numérotation automatique des infobulles.

### Vue

Grid

* Vue**Show Grid** : affiche une grille sur cette page.
* Vue**Grid Spacing** : distance entre les lignes de la grille en mm.

## Script

Voir [TechDraw Page à partir d'un modèle](/TechDraw_PageTemplate/fr#Script "TechDraw PageTemplate/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/fr&oldid=1549365>"