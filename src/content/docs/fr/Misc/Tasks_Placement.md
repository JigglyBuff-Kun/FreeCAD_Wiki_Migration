---
title: Opération de positionnement
---
## Description

Commande pour modifier le **positionnement**. Ces options ne concernent que la position et l'orientation de l'objet dans l'espace, elles n'affectent pas les autres attributs de la forme. Le positionnement est enregistré en interne sous forme de position et une rotation (autour d'un axe ou d'un angle, transformé en un [quaternion](https://fr.wikipedia.org/wiki/Quaternions_et_rotation_dans_l'espace)). Alors qu'il existe plusieurs méthodes pour spécifier une rotation, par exemple autour d'un centre, cela n'affecte que les calculs de rotation et il n'y a pas d'enregistrement pour des opérations suivantes. De même, si un axe de rotation (1,1,1) est spécifié, il peut être normalisé lorsqu'il est enregistré dans le quaternion et apparaît comme (0.58, 0.58, 0.58) lorsque l'on navigue sur l'objet par la suite.

## Utilisation

La fonction **Placement** peut être accessible de plusieurs façons :

* via un [script](/Python_scripting_tutorial#Vecteurs_et_Positions/fr "Python scripting tutorial") Python dans la console et son [API](/Placement_API/fr "Placement API/fr").

:   ![Placement de script en y/p/r et Matrix](/images/PlacePyConv10.png)

* ou, dans la fenêtre **Vue combinée → Propriétés → Données → Placement → ...**,

:   ![Task Placement](/images/Tache_Placement_fr_01.png)

* ou par le menu **Edition → Placement...**.

### Activer Placement dans la vue combinée

* Cliquez sur une forme pour la sélectionner.
* Cliquez sur **Placement** (le titre, pas la petite flèche) et une ellipse ... apparaît : ![Tache Placement](/images/Tache_Placement_01_fr_00.png)
* Cliquez sur l'ellipse, la **Boîte de dialogue Positionnement** s'affiche :

:   ![](/images/Tache_Placement_en_02.png)

### Options

Translation

Translations:

* TASKS **X** [![Translation dans la direction X (Cliquez sur l'image pour l'agrandir)](/images/Tache_Placement_Translation_X_fr.gif)](/File:Tache_Placement_Translation_X_fr.gif  "Translation dans la direction X (Cliquez sur l'image pour l'agrandir)") Déplace le système de coordonnées de l'objet, dans la direction **X**, par rapport aux coordonnées d'axes d'origine 0, 0, 0.
* TASKS **Y** [![Translation dans la direction Y (Cliquez sur l'image pour l'agrandir)](/images/Tache_Placement_Translation_Y_fr.gif)](/File:Tache_Placement_Translation_Y_fr.gif  "Translation dans la direction Y (Cliquez sur l'image pour l'agrandir)") Déplace le système de coordonnées de l'objet, dans la direction **Y**, par rapport aux coordonnées d'axes d'origine 0, 0, 0.
* TASKS **Z** [![Translation dans la direction Z (Cliquez sur l'image pour l'agrandir)](/images/Tache_Placement_Translation_Z_fr.gif)](/File:Tache_Placement_Translation_Z_fr.gif  "Translation dans la direction Z (Cliquez sur l'image pour l'agrandir)") Déplace le système de coordonnées de l'objet, dans la direction **Z**, par rapport aux coordonnées d'axes d'origine 0, 0, 0.

Center

* TASKS **X** : déplace le centre de rotation, dans la direction **X**, par rapport aux coordonnées de l'objet sélectionné. (Défaut: 0,0,0).
* TASKS **Y** : déplace le centre de rotation, dans la direction **Y**, par rapport aux coordonnées de l'objet sélectionné. (Défaut: 0,0,0).
* TASKS **Z** : déplace le centre de rotation, dans la direction **Z**, par rapport aux coordonnées de l'objet sélectionné. (Défaut: 0,0,0).
* TASKS **Défini par l'utilisateur...** : permet de modifier les trois axes (**X, Y, Z**) en une seule opération ![définie par l'utilisateur](/images/Part_Revolve_fr_06.png).

Rotation

Pour ajuster nos **paramètres de rotation**, deux moyens sont possibles.

* Première option. Sélectionnez **Axe de rotation et angle** ![Option Axe de rotation et angle](/images/Tache_Placement_fr_05.png) (Par défaut)
  + TASKS **Axis: X** : la rotation se fera sur l'axe **X**.
  + TASKS **Axis: Y** : la rotation se fera sur l'axe **Y**.
  + TASKS **Axis: Z** : la rotation se fera sur l'axe **Z**. (Axe par défaut).
  + TASKS **Angle:** : angle de rotation en **degrés** de **-360.00°** à **360.00°**. (Par défaut : **0.00°**).

* Deuxième option. Sélectionnez **Angles d'Euler** ![Option Angles d'Euler](/images/Tache_Placement_fr_04.png).

Cette option peut être plus facile à travailler, toutefois, même dans ce mode, il y a des choses importantes à retenir : les rotations positives sont dans le sens **horaire**, en regardant **depuis** l'origine le long d'un axe positif. Ou pour le dire autrement, les rotations positives sont dans le sens **anti-horaire**, en regardant **vers** l'origine le long d'un axe positif.

:   * **[Lacet](https://fr.wikipedia.org/wiki/Lacet_(mouvement))** : le lacet est le mouvement de rotation horizontal d'un mobile autour d'un axe vertical.
    * **[Tangage](https://fr.wikipedia.org/wiki/Tangage)** : le tangage est défini comme étant un mouvement d'oscillation d'un bateau d'avant en arrière.
    * **[Roulis](https://fr.wikipedia.org/wiki/Roulis)** : le roulis est un mouvement de rotation d'un mobile autour de son axe longitudinal (axe de roulis).

Lacet, roulis et tangage se référent au **comportement** d'un objet dans l'espace 3D. Ces termes sont couramment utilisés dans l'aviation. Les angles sont les **angles Tait-Bryan.** Si vous voulez plus d'informations, lire [angles d'Euler](https://fr.wikipedia.org/wiki/Angles_d%27Euler).

![Options Angles d'Euler](/images/Tache_Placement_en_03.png)

![Lacet](/images/Tache_Placement_Lacet_fr_Mini.gif)

* TASKS **axe de lacet** **Le lacet est la rotation autour de l'axe Z**, c'est à dire une rotation de gauche à droite. (L'angle de lacet est le **Psi ψ**). Valeur **-180.00°** à **180.00°** (Par défaut **0.00°**).

![Tangage](/images/Tache_Placement_Tangage_fr_Mini.gif)

* TASKS **axe de tangage** **Le tangage est la rotation autour de l'axe Y**, c'est-à-dire le cabré et le piqué. (L'angle de tangage est le **Phi φ**). Valeur **-90.00°** à **90.00°** (Par défaut, **0.00°**).

![Roulis](/images/Tache_Placement_Roulis_fr_Mini.gif)

* TASKS **axe de roulis** **Le roulis est une rotation autour de l'axe X**, c'est à dire l'aile en haut et en bas. (L'angle de roulis est le **Thêta θ**). Valeur **-180.00°** à **180.00°**(Par défaut, **0.00°**).

* TASKS **Appliquer des modifications incrémentielles** au placement de l'objet : une fois sélectionnée, cette option met **virtuellement** tous les paramètres à zéro, pour vous permettre d'entrer vos valeurs sans avoir à calculer avec les paramètres originaux du formulaire. Une fois que vous aurez confirmé avec OK, les valeurs saisies seront ajoutées aux valeurs du formulaire.

* Réinitialiser ramène toutes les valeurs à **0,0,0**.

## Liens et un exemple

Un exemple pratique de l'utilisation de cette commande est dans le tutoriel [Avion](/Aeroplane/fr "Aeroplane/fr").

Autres explications sur le [Placement](/Placement/fr "Placement/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tasks_Placement/fr&oldid=1551886>"