---
title: Draft Motif
---
## Description

Les objets [Draft](/Draft_Workbench/fr "Draft Workbench/fr") ayant une propriété Données**Make Face** peuvent afficher un motif SVG au lieu d'une couleur de surface unie.

![](/images/DraftPatternSample.png)

Une ellipse et un polygone avec un motif SVG

## Utilisation

1. Assurez-vous que les objets sont fermés et planaires, et qu'ils ne s'auto-intersectent pas.
2. Pour fermer une [Draft Polyligne](/Draft_Wire/fr "Draft Wire/fr"), une [Draft B-spline](/Draft_BSpline/fr "Draft BSpline/fr"), une [Draft Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr") ou une [Draft Courbe de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr"), définissez leur propriété Données**Closed** à `true`.
3. Pour fermer un [Draft Cercle](/Draft_Circle/fr "Draft Circle/fr") ou une [Draft Ellipse](/Draft_Ellipse/fr "Draft Ellipse/fr"), attribuez la même valeur aux propriétés Données**First Angle** et Données**Last Angle**.
4. Sélectionnez les objets.
5. Passez à l'onglet **Visualisation** de l'[Éditeur de propriétés](/Property_editor/fr "Property editor/fr").
6. La propriété Vue**Display Mode** doit être définie à `Flat Lines`.
7. Sélectionnez un Vue**Pattern**.
8. Changez éventuellement la Vue**Pattern Size**. Notez qu'une valeur plus élevée donne un motif plus dense.
9. Le motif n'est pas affiché lorsque les objets sont sélectionnés. Désélectionnez-les pour vérifier le résultat.
10. Vous pouvez éventuellement resélectionner les objets pour modifier les propriétés du motif.

## Motifs disponibles

* ![aluminium](/images/Aluminium.svg)

  aluminium
* ![brick01](/images/Brick01.svg)

  brick01
* ![concrete](/images/Concrete.svg)

  concrete
* ![cross](/images/Cross.svg)

  cross
* ![cuprous](/images/Cuprous.svg)

  cuprous
* ![diagonal1](/images/Diagonal1.svg)

  diagonal1
* ![diagonal2](/images/Diagonal2.svg)

  diagonal2
* ![earth](/images/Earth.svg)

  earth
* ![general_steel](/images/General_steel.svg)

  general\_steel
* ![glass](/images/Glass.svg)

  glass
* ![hatch45L](/images/Hatch45L.svg)

  hatch45L
* ![hatch45R](/images/Hatch45R.svg)

  hatch45R
* ![hbone](/images/Hbone.svg)

  hbone
* ![line](/images/Line.svg)

  line
* ![plastic](/images/Plastic.svg)

  plastic
* ![plus](/images/Plus.svg)

  plus
* ![simple](/images/Simple.svg)

  simple
* ![solid](/images/Solid.svg)

  solid
* ![square](/images/Square.svg)

  square
* ![steel](/images/Steel.svg)

  steel
* ![titanium](/images/Titanium.svg)

  titanium
* ![wood](/images/Wood.svg)

  wood
* ![woodgrain](/images/Woodgrain.svg)

  woodgrain
* ![zinc](/images/Zinc.svg)

  zinc

## Remarques

* Les modèles SVG sont stockés dans des fichiers .SVG. Il est possible d'utiliser vos propres motifs personnalisés. Voir [Préférences](#Pr.C3.A9f.C3.A9rences).
* Les motifs eux-mêmes ne sont pas enregistrés dans le document FreeCAD. Les objets dont le motif Vue**Pattern** ne peut être trouvé sont affichés avec une couleur de surface solide à la place.

## Préférences

Voir aussi : [Réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr") et [Draft Préférences](/Draft_Preferences/fr "Draft Preferences/fr").

* Pour changer Vue**Pattern Size** utilisée pour les nouveaux objets : **Édition → Préférences... → Draft → Paramètres visuels → Taille des motifs SVG**.
* Pour spécifier un répertoire contenant des motifs SVG supplémentaires : **Édition → Préférences... → Draft → Paramètres visuels → Emplacement des motifs SVG supplémentaires**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Pattern/fr&oldid=1339116>"