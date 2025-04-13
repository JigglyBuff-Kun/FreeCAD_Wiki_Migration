---
title: Drawing Ouvrir sur le navigateur interne
---
|  |
| --- |
| Drawing Ouvrir sur le navigateur interne |
| Emplacement du menu |
| Drawing → Ouvrir sur le navigateur interne |
| Ateliers |
| [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cette commande vous permet d'afficher une [Feuille A3 paysage](/Drawing_Landscape_A3/fr "Drawing Landscape A3/fr") sélectionnée l'aide du navigateur Web interne de FreeCAD. Le visionneur de page de dessin de FreeCAD est basée sur [de Qt intégré dans le moteur de rendu SVG](http://qt-project.org/doc/qt-5.0/qtsvg/svgrendering.html), qui ne prend en charge qu'un petit sous-ensemble de la spécification SVG. En conséquence, certaines fonctionnalités de SVG plus avancés, tels que le modèle remplit ou les textes multi-lignes ne sont pas pris en charge par cette visionneuse. Le navigateur web interne FreeCAD , cependant, est construit sur [webkit](http://en.wikipedia.org/wiki/WebKit), qui est l'un des meilleurs moteurs de rendu SVG disponibles, et saura rendre correctement votre page avec toutes ses fonctions.

## Utilisation

1. Créez un [Feuille A3 paysage](/Drawing_Landscape_A3 "Drawing Landscape A3")
2. Ajoutez quelques [vues](/Drawing_View/fr "Drawing View/fr") ou tout autre contenu à votre page
3. [Recalculez](/Std_Refresh/fr "Std Refresh/fr") la vue si une vue de Drawing n'a pas été ouverte
4. Appuyez sur le bouton![](/images/Drawing_Openbrowser.png) vue Web

## Limitations

* Une page ouverte dans le navigateur Web ne réactualise pas automatiquement les modifications. Vous devez utiliser le clique droit → recharger manuellement.

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_Openbrowser/fr&oldid=1504372>"