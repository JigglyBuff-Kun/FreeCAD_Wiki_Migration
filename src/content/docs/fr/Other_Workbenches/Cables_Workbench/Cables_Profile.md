---
title: Cables Profil
---
|  |
| --- |
| Cables Profil |
| Emplacement du menu |
| Cable Wires → Cable Profile |
| Ateliers |
| [Cables](/Cables_Workbench/fr "Cables Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 1.0 |
| Voir aussi |
| [Cables Câble](/Cables_Cable/fr "Cables Cable/fr") |
|  |

## Description

![](/images/Cables_Profile.svg) Cable Profile crée un objet ![](/images/Sketcher_Sketch.svg) [Esquisse](/Sketch/fr "Sketch/fr") qui représente le profil de base (section transversale) d'un câble. Le profil est entièrement paramétrique et est créé en choisissant différentes propriétés du câble dans une boîte de dialogue (voir [Utilisation](#Utilisation)). Le profil contient toutes les informations relatives aux sections transversales nécessaires pour créer un ![](/images/Cables_Cable.svg) [câble](/Cables_Cable/fr "Cables Cable/fr").

Il existe quelques types de profil de câble prédéfinis, par exemple YDYp (câble d'alimentation plat), YDY (câble d'alimentation rond). Des types de profils personnalisés supplémentaires peuvent être définis par l'utilisateur (voir [Ajouter des profils personnalisés](#Ajouter_des_profils_personnalisés)).

Il est également possible de créer manuellement un profil complet dans ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). Cependant, certaines règles doivent être suivies pour l'utiliser avec succès comme un profil de câble approprié (voir [Créer un profil](#Créer_un_profil)).

## Utilisation

1. Créez un profil de câble par l'une des méthodes suivantes :
   * Appuyez sur le bouton ![](/images/Cables_Profile.svg) Cable Profile.
   * Sélectionnez l'option **Cables → ![](/images/Cables_Profile.svg) Cable Profile** du menu.
   * Cliquez avec le bouton droit de la souris dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") ou la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez l'option **Cables → ![](/images/Cables_Profile.svg) Cable Profile** dans le menu contextuel.
2. Le panneau de tâches **Add a new cable profile** s'ouvre.
3. Vous pouvez sélectionner le **Type de profil**.
4. Sélectionnez le **Number of wires** (Nombre de fils).
5. Sélectionnez le **Standard gauge [mm2]** (Diamètre standard) dans la liste ou laissez **personnalisé**.
6. Vous pouvez saisir la valeur du **Custom gauge [mm2]** (Diamètre personnalisé) si la sélection précédente était **custom**.
7. Appuyez sur le bouton OK.

Une fois créé, le profil est placé à la position [0,0,0] dans l'espace 3D. Il est recommandé de ne pas le déplacer ou le faire pivoter. Il peut être utilisé ultérieurement pour créer un [câble](/Cables_Cable/fr "Cables Cable/fr") sans changer la position du profil. Lorsque le câble est créé, la paire de clones de profil est créée et chaque clone a sa position et sa rotation correctes par rapport au câble.

Un profil peut être utilisé pour plusieurs câbles, il n'est pas nécessaire de créer un autre profil si un autre câble aura la même section.

## Remarques

Pour certains **Types de profil**, le **Nombre de fils** doit être > 1 (par ex. YDYp). Une sélection incorrecte entraînera une erreur et le profil ne sera pas créé.

## Ajouter des profils personnalisés

Un fichier CSV supplémentaire peut être créé par l'utilisateur contenant des définitions des profils personnalisés. Il doit être nommé `profiles.csv` et placé dans

```
$FREECAD_USER_DIR/Cables/

```

`$FREECAD_USER_DIR` peut être obtenu à partir de la [console Python](/Python_console/fr "Python console/fr") :

```
FreeCAD.getUserAppDataDir()

```

Le contenu du fichier personnalisé `profiles.csv` doit être modelé sur les mêmes règles que le fichier [profiles.csv](https://github.com/sargo-devel/Cables/blob/master/Resources/presets/profiles.csv) du code source de l'**atelier Cables**.

## Créer un profil

Le profil de câble peut être créé manuellement dans ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). L'ordre correct de dessin des polylignes fermées doit être respecté pour une création correcte du câble par la commande [Cable](/Cables_Cable/fr "Cables Cable/fr").

1. La première polyligne dessinée et fermée sera interprétée comme une **gaine de câble** (w0 dans l'exemple ci-dessous).
2. La série suivante de polylignes fermées doit être dessinée à l'intérieur de la première polyligne et ne doit pas se toucher ou se croiser. Elles seront interprétés comme des **isolations** de chaque polyligne (w1, w2, w3 dans l'exemple ci-dessous).
3. Ensuite, la série suivante de polylignes doit être dessinée à l'intérieur de la série d'isolations. Chaque polyligne isolante doit avoir ue polyligne intérieure. Ce seront les **fils conducteurs** (w4, w5, w6 dans l'exemple ci-dessous).
4. Enfin, la série de points doit être placée au centre de chaque **fil conducteur** (p1, p2, p3 dans l'exemple ci-dessous).

![](/images/Cables_Profile_Example1.png)

Exemple de profil triangulaire créé avec Sketcher

![](/images/Cables_Profile_Example2.png)

Câble créé à partir du profil triangulaire

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Profile/fr&oldid=1557659>"