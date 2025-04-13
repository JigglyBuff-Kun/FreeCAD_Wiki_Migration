---
title: Navigation par la souris
---
## Présentation

La **navigation par la souris** dans FreeCAD consiste en des commandes utilisées pour naviguer visuellement dans l'espace 3D et interagir avec les objets affichés. FreeCAD supporte plusieurs styles de navigation à la souris. Le style de navigation par défaut est appelé [Style CAD](#Style_CAD). Il est très simple et pratique mais FreeCAD fournit également plusieurs autres styles de navigation. Le style sélectionné est utilisé pour tous les ateliers.

Pour plus d'informations sur la sélection d'objets, voir [Méthodes de sélection](/Selection_methods/fr "Selection methods/fr").

Pour plus d'informations sur la manipulation des objets, voir [Std Transformer](/Std_TransformManip/fr "Std TransformManip/fr").

## Sélection d'un style de navigation

1. Faites l'une des choses suivantes :
   * Appuyez sur le bouton ![](/images/NavigationCAD_dark.svg) de la [barre d'état](/Status_bar/fr "Status bar/fr").
   * Cliquez du bouton droit de la souris sur une zone vide dans la [vue 3D](/3D_view/fr "3D view/fr") et sélectionnez **Styles de navigation** dans le menu contextuel.
   * Utilisez les [réglages des préférences](/Preferences_Editor/fr#Navigation "Preferences Editor/fr"). Dans le menu, sélectionnez **Édition → Préférences** et ensuite **Affichage → Navigation → Navigation 3D**.
2. Sélectionnez un style dans la liste.
3. Vous pouvez modifier le **style d'orbite** : appuyez sur le bouton ![](/images/NavigationCAD_dark.svg) dans la [barre d'état](/Status_bar/fr "Status bar/fr") puis choisissez **Paramètres → Style d'orbite**. Voir [Réglages des préférences](/Preferences_Editor/fr#Navigation "Preferences Editor/fr").
4. Vous pouvez également modifier le **mode de rotation**. Voir [Réglages des préférences](/Preferences_Editor/fr#Navigation "Preferences Editor/fr").
5. Si le mode de navigation **CAD** est sélectionné, vous pouvez modifier le paramètre **Permettre l'animation**. Voir [Réglages des préférences](/Preferences_Editor/fr#Navigation "Preferences Editor/fr").

## Styles de navigation disponibles

Avec tous les styles de navigation, à moins de sélectionner des objets dans une esquisse en mode édition, vous devez maintenir Ctrl pour sélectionner plusieurs objets.

Les options de clavier suivantes sont disponibles pour tous les styles :

* Ctrl + ![](/images/Ascii_043.svg) et Ctrl + ![](/images/Ascii_022.svg) ou PgUp et PgDn pour respectivement zoomer et dézoomer.
* Les touches fléchées, ![](/images/Ascii_017.svg)![](/images/Ascii_016.svg)![](/images/Ascii_030.svg)![](/images/Ascii_031.svg), permettent les déplacements gauche/droite et haut/bas de la vue.
* Shift + ![](/images/Ascii_017.svg) et Maj + ![](/images/Ascii_016.svg) pour faire pivoter la vue de 90 degrés.

### Style Blender

Le style de navigation Blender s'inspire de [Blender](https://www.blender.org).

| Sélection | Zoom | Rotation de la vue | Panorama | |
| --- | --- | --- | --- | --- |
|  |  |  |  | |
|  |  |  | Maj+ |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. | Maintenez enfoncé Maj et le bouton central de la souris, puis déplacez le pointeur. Vous pouvez également maintenir enfoncé les boutons gauche et droit de la souris, et déplacer le pointeur. | |

### Style CAD

C'est le style de navigation par défaut. Il permet à l'utilisateur un contrôle simple de la vue et ne nécessite pas l'utilisation de touches du clavier, sauf pour effectuer des sélections multiples.

| Sélection | Zoom | Rotation 1ère méthode | Rotation Méthode alternative | Panorama |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. Cliquez sur le bouton central de la souris recentre la vue sur l'emplacement du curseur. | Maintenez enfoncé le bouton central de la souris, puis appuyez et maintenez le bouton gauche de la souris, puis déplacez le pointeur. Si les boutons sont relâchés avant que vous n'arrêtiez le mouvement de la souris, la vue continue de tourner, si cette option est activée. | Maintenez enfoncé le bouton central de la souris enfoncé, appuyez ensuite sur le bouton droit de la souris, puis déplacez le pointeur. Avec cette méthode, le bouton central de la souris peut être relâché si vous maintenez le bouton droit de la souris enfoncé.  Les utilisateurs qui utilisent la souris avec leur main droite peuvent trouver cette méthode plus facile que la première. | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. |
|  | Ctrl+Maj+ | Maj+ |  | Ctrl+ |
|  | Mode zoom : maintenez enfoncés Ctrl et Maj, appuyez une fois sur le bouton droit de la souris, puis déplacez le pointeur. | Mode rotation: maintenez enfoncé Maj, appuyez une fois sur le bouton droit de la souris, puis déplacez le pointeur. |  | Mode panoramique : maintenez enfoncé Ctrl, appuyez une fois sur le bouton droit de la souris, puis déplacez le pointeur. |

### Style Gesture

Ce style a été conçu pour être utilisé avec un écran tactile et un stylo. Néanmoins, il peut également être utilisé avec une souris et il est recommandé de l'utiliser avec un Mac doté d'un pavé tactile.

| Sélection | Zoom | Rotation de la vue | Panorama | | Basculement de la vue |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | |  |
|  |  |  |  | |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. | Maintenez enfoncé le bouton gauche de la souris, puis déplacez le pointeur. Dans [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr") et les autres modes d'édition, ce comportement est désactivé. Maintenez enfoncé Alt en appuyant sur le bouton de la souris pour passer en mode rotation.  Pour définir le point de focalisation de la caméra pour la rotation, cliquez sur un point avec le bouton central de la souris. Vous pouvez également pointer le curseur sur un point et appuyer sur H au clavier. | Maintenez enfoncé le bouton droit de la souris, puis déplacez le pointeur. | | Maintenez enfoncés les boutons gauche et droit de la souris, puis déplacez le pointeur latéralement. |
|  |  |  |  |  |  |
| Tapotez pour sélectionner. | Faites glisser deux doigts (pincement) pour les rapprocher ou les éloigner. | Glissez avec un doigt pour faire pivoter. Maintenez enfoncé Alt si vous êtes dans [Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). | Faites glisser avec deux doigts. Vous pouvez également tapoter et maintenir, puis glisser. Cela simule le panoramique avec le bouton droit de la souris. | | Faites pivoter la ligne imaginaire formée par deux points de contact. Cette méthode est désactivée par défaut. Pour l'activer, allez dans **Édition → Préférences → Affichage → Navigation** puis décochez la case "Désactiver l’inclinaison par geste de l’écran tactile". |

### Style MayaGesture

Dans le style de navigation MayaGesture, le panoramique, le zoom et la rotation de la vue nécessitent la touche Alt ainsi qu'un bouton de la souris : une souris à trois boutons est donc nécessaire. Il est également possible d'utiliser des gestes car ce style a été développé par rapport au [style Gesture](#Style_Gesture).

| Sélection | Zoom | | Rotation de la vue | Panorama | Basculement de la vue |
| --- | --- | --- | --- | --- | --- |
|  |  | |  |  |  |
|  |  | Alt+ | Alt+ | Alt+ | Alt+ |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. Vous pouvez également maintenir enfoncé Alt et le bouton droit de la souris, puis déplacer le pointeur. | | Maintenez enfoncé Alt et le bouton gauche de la souris, puis déplacez le pointeur. | Maintenez enfoncé Alt et le bouton central de la souris, puis déplacez le pointeur. | Maintenez enfoncé Alt et les deux boutons gauche et droit de la souris, puis déplacez le pointeur latéralement. |

### Style OpenCascade

Le style de navigation OpenCascade s'inspire d'[OpenCascade](https://www.opencascade.com/).

| Sélection | Zoom | | Rotation de la vue | | Panorama | |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | |  | |  | |
|  |  | Ctrl+ |  | Ctrl+ |  | Ctrl+ |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. Vous pouvez également maintenir enfoncé Ctrl et le bouton gauche de la souris, puis déplacer le pointeur. | | Maintenez enfoncé le bouton central de la souris, appuyez ensuite sur le bouton droit de la souris, puis déplacez le pointeur. Vous pouvez également maintenir enfoncé Ctrl et le bouton droit de la souris, puis déplacer le pointeur. | | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. Il est possible de maintenir Ctrl. | |

### Style OpenInventor

Le style de navigation OpenInventor (anciennement Inventor) s'inspire d'[Open Inventor](https://fr.wikipedia.org/wiki/Inventor_(bibliothèque_logicielle)). Pour sélectionner des objets, vous devez maintenir la touche Maj ou Ctrl enfoncée.

Ce style n'est pas basé sur Autodesk Inventor.

| Sélection | Zoom | | Rotation de la vue | Panorama |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
| Maj+ |  |  |  |  |
| Maintenez enfoncé Maj, puis appuyez sur le bouton gauche de la souris sur un objet que vous souhaitez sélectionner. Maintenez enfoncé Ctrl à la place pour sélectionner plusieurs objets. | Utilisez la molette de la souris pour zoomer et dézoomer. Vous pouvez également maintenir enfoncé le bouton central de la souris, puis maintenir le bouton gauche de la souris enfoncé et déplacer le pointeur. | | Maintenez enfoncé le bouton gauche de la souris, puis déplacez le pointeur. | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. |

### Style OpenSCAD

Le style de navigation OpenSCAD s'inspire d'[OpenSCAD](https://openscad.org/).

| Sélection | Zoom | | | Rotation de la vue | | Panorama |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | | |  | |  |
|  |  |  | Maj+ |  |  |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. version 0.21 et précédentes Maintenez enfoncés Ctrl et Maj lorsque vous appuyez sur le bouton de la souris pour faire glisser un objet dans une esquisse en mode édition. | Utilisez la molette de la souris pour zoomer et dézoomer. Vous pouvez également maintenir enfoncé le bouton central de la souris, puis déplacez le pointeur.  Ou maintenir enfoncé Maj et le bouton droit de la souris, puis déplacez le pointeur. | | | Maintenez enfoncé le bouton gauche de la souris, puis déplacez le pointeur. Sinon, lorsqu'une esquisse est en mode édition, maintenez enfoncé le bouton central de la souris, puis appuyez sur le bouton droit de la souris et maintenez-le enfoncé, puis déplacez le pointeur. | | Maintenez enfoncé le bouton droit de la souris, puis déplacez le pointeur. |

### Style Revit

Le style de navigation Revit s'inspire de [Revit](https://fr.wikipedia.org/wiki/Revit).

| Sélection | Zoom | Rotation de la vue | | Panorama | |
| --- | --- | --- | --- | --- | --- |
|  |  |  | |  | |
|  |  | Maj+ |  |  |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. | Maintenez enfoncé Maj et le bouton central de la souris, puis déplacez le pointeur. Vous pouvez également maintenir enfoncé le bouton central de la souris, puis maintenir enfoncé le bouton droit de la souris et déplacer le pointeur. | | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. Vous pouvez également maintenir enfoncé les boutons gauche et droit de la souris, et déplacer le pointeur. | |

### Style SolidWorks

[introduit dans la version 1.1](/Release_notes_1.1/fr "Release notes 1.1/fr")

Le style de navigation SolidWorks s'inspire de [SolidWorks](https://en.wikipedia.org/wiki/SolidWorks).

| Sélection | Zoom | | Rotation de la vue | Panorama |
| --- | --- | --- | --- | --- |
|  |  | |  |  |
|  |  | Maj+ |  | Ctrl+ |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. Vous pouvez également maintenir enfoncé Maj et le bouton central de la souris, puis déplacer le pointeur.  Cliquez sur le bouton central de la souris recentre la vue sur l'emplacement du curseur. | | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. | Maintenez enfoncé Ctrl et le bouton central de la souris, puis déplacez le pointeur. |

### Style TinkerCAD

Le style de navigation TinkerCAD s'inspire de [TinkerCAD](https://fr.wikipedia.org/wiki/Tinkercad).

| Sélection | Zoom | Rotation de la vue | Panorama |
| --- | --- | --- | --- |
|  |  |  |  |
|  |  |  |  |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Utilisez la molette de la souris pour zoomer et dézoomer. | Maintenez enfoncé le bouton droit de la souris, puis déplacez le pointeur. | Maintenez enfoncé le bouton central de la souris, puis déplacez le pointeur. |

### Style Touchpad

Avec le style de navigation Touchpad, le panoramique, le zoom et la rotation de la vue nécessitent une touche de modification ainsi que le pavé tactile. Ce style peut également être utilisé avec une souris.

| Sélection | Zoom | Rotation de la vue | | Panorama |
| --- | --- | --- | --- | --- |
|  |  |  | |  |
|  | Ctrl+Maj+ | Alt+ | Maj+ | Maj+ |
| Cliquez avec le bouton gauche de la souris sur l'objet que vous souhaitez sélectionner. | Maintenez enfoncés Ctrl et Maj, puis déplacez le pointeur. | Maintenez enfoncé Alt, puis déplacez le pointeur. Vous pouvez également maintenir enfoncé Maj et le bouton gauche de la souris, puis déplacer le pointeur. | | Maintenez enfoncé Maj, puis déplacez le pointeur. |

## Prise en charge du matériel

FreeCAD prend aussi en charge quelques [périphériques d'entrée 3D](/3D_input_devices/fr "3D input devices/fr").

## Style recommandé pour macOS

Sur les MacBooks équipés d'un pavé tactile, le style de navigation Gesture fonctionne très bien mais les gestes ont une signification particulière :

* Zoom : faites glisser avec deux doigts.
* Rotation : faites glisser avec trois doigts.
* Panoramique : Ctrl + trois doigts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mouse_navigation/fr&oldid=1552866>"