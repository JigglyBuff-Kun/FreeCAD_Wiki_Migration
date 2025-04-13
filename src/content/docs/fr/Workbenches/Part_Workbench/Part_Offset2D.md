---
title: Part Décaler en 2D
---
|  |
| --- |
| Part Décaler en 2D |
| Emplacement du menu |
| Part → Décaler en 2D... |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Part Décaler en 3D](/Part_Offset/fr "Part Offset/fr"), [Part Évider](/Part_Thickness/fr "Part Thickness/fr"), [Draft Décaler](/Draft_Offset/fr "Draft Offset/fr") |
|  |

## Description

L'outil ![](/images/Part_Offset2D.svg) **Part Décaler en 2D** génère une polyligne parallèle à la polyligne d'origine, à une distance définie de celle-ci. Il est également possible de d'agrandir/réduire une face plane de la même façon.

La polyligne/face doit être plan. Il peut y avoir plusieurs polylignes dans un même objet, pas nécessairement coplanaires.

![](/images/Part_Offset2D_Demo.png)

## Utilisation

1. Sélectionner un objet à décaler.
2. Appuyer sur le bouton ![](/images/Part_Offset2D.svg) Décaler en 2D.
3. Définir la valeur de décalage dans le [Panneau des tâches](/Task_panel/fr "Task panel/fr") puis valider.
4. Appuyer sur OK.

## Remarques

* Les objets [App Link](/App_Link/fr "App Link/fr") liés aux types d'objets appropriés et les conteneurs [App Part](/App_Part/fr "App Part/fr") contenant les objets visibles appropriés peuvent également être utilisés comme objets sources. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Problèmes connus

* La plupart des modes non par défaut ne fonctionnent qu'avec OCC 7.0.0 ou ultérieur.

* L'utilisation de l'outil peut bloquer FreeCAD (voir le point suivant). Sur Windows, ces accidents sont convertis en exceptions et ne provoquent généralement pas la fermeture de FreeCAD; Sur d'autres systèmes d'exploitation, ce n'est pas le cas. il est donc conseillé d'enregistrer un projet avant d'essayer d'utiliser l'outil. Les ellipses ne sont pas gérées.

* L'agrandissement des faces avec des trous circulaires d'une valeur suffisamment grande pour que les trous se referment, génère un crash (OCC 7.0.0). Le problème semble être spécifique aux cercles; D'autres formes semblent se terminer correctement.

* Lors du décalage de cercles dont le placement est non nul, le résultat est mal placé. (OCC 7.0.0)

* Lors du décalage de cercles, ils sont parfois décalés dans une direction inattendue (par exemple vers l'intérieur au lieu de l'extérieur). (OCC 7.0.0)

* Fill = "true" ne fonctionne pas avec décalage groupé de polylignes ouvertes en mode "Skin"

* le mode de jonction "Tangent" ne fonctionne pas. (OCC 7.0.0)

* Le décalage des polylignes constituées d'un seul segment de ligne n'est pas pris en charge (car le segment de ligne ne définit pas un plan). Les segments de ligne simples ne peuvent pas non plus participer à un décalage groupé.

## Propriétés

* Données**Source** : lien vers la forme d'origine

* Données**Value** : valeur d'agrandissement de la polyligne/face. Si négative, la dimension de la face ou de la polyligne est rétrécie à la place.

* Données**Mode** ("Pipe" ou "Skin") : définit le traitement des polylignes non fermées. Si "Pipe" est selectionné, la polyligne est décalée comme un contour fermé extrêmement petit. Si "Skin" est sélectionné, une polyligne ouverte est créée.

:   ![](/images/Part_Offset2D_Mode.png)

* Données**Join** ("Arc", "Tangent", "Intersection") : définit le traitement des coins. Avec "Arc", les segments décalés sont joints par des arcs de cercle dont le centre est le sommet d'origine. "Tangent" n'est pas supporté pour OCC7.0.0. "Intersection" : les segments décalés sont prolongés jusqu'à ce qu'ils se croisent.

:   ![](/images/Part_Offset2D_Join.png)

* Données**Intersection** ("false", "true") : définit si les polylignes multiples sont traitées collectivement ou indépendamment. Avec "false", les polylignes sont traitées indépendamment les unes des autres, les intersections entre les polylignes résultantes sont ignorées. Avec "true", les polylignes sont gérées de façon collective.

:   ![](/images/Part_Offset2D_Intersection.png)

:   Seuls les polylignes dans un composé sont couplées. Par exemple, si la structure est compound(wire1, wire2, compound (wire3, wire4)), wire1 et wire2 seront traités collectivement, mais indépendamment de wire3 et wire4. De même, wire3 et wire4 sont traités collectivement, mais indépendamment de wire1 + wire2.

:   De même, en mode groupé, les directions des polylignes sont importantes et influencent la direction du décalage. Ceci est étroitement lié à la façon dont les trous dans les faces sont traités.

:   Les polylignes traitées collectivement doivent être coplanaires. Les polylignes devant être décalées indépendamment n'ont pas besoin d'être coplanaires.

* Données**Fill** ("false", "true") : si "true", l'espace entre la polyligne/face d'origine et le décalage forme une face.

:   ![](/images/Part_Offset2D_Fill.png)

## Script

L'outil peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
f = App.ActiveDocument.addObject("Part::Offset2D", "Offset2D")
f.Source =  #some object
f.Value = 10.0

```

Décalage 2D est également disponible comme méthode de Part.Shape. Exemple:

```
import Part
circle = Part.Circle().toShape()
enlarged_circle = circle.makeOffset2D(10.0)
Part.show(circle)
Part.show(enlarged_circle)
# makeOffset2D(offset, join = 0, fill = False, openResult = false, intersection = false)
# 
# * offset: distance to expand the shape by. 
# 
# * join: method of offsetting non-tangent joints. 0 = arcs, 1 = tangent, 2 =
# intersection
# 
# * fill: if true, the output is a face filling the space covered by offset. If
# false, the output is a wire/face.
# 
# * openResult: True for "Skin" mode; False for Pipe mode. 
# 
# * intersection: collective offset
# 
# Returns: result of offsetting (wire or face or compound of those). Compounding
# structure follows that of source shape.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset2D/fr&oldid=1332813>"