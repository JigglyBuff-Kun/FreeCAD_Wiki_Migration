---
title: Part Primitives
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| Part Primitives                                                                                            |
| Emplacement du menu                                                                                        |
| Part → Créer des primitives...                                                                             |
| Ateliers                                                                                                   |
| [Part](/Part_Workbench/fr "Part Workbench/fr"), [OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") |
| Raccourci par défaut                                                                                       |
| _Aucun_                                                                                                    |
| Introduit dans la version                                                                                  |
| -                                                                                                          |
| Voir aussi                                                                                                 |
| [Part Générateur de formes](/Part_Builder/fr "Part Builder/fr")                                            |
|                                                                                                            |

## Description

La commande ![](/images/Part_Primitives.svg) **Part Primitives** ouvre un dialogue pour créer une ou plusieurs primitives paramétriques. 16 types de primitives sont disponibles.

![](/images/Part_Primitives_example.png)

Les primitives qui peuvent être créées avec la commande

## Utilisation

### Créer

1. Il existe plusieurs façons de lancer la commande :
   - Appuyez sur le bouton ![](/images/Part_Primitives.svg) Créer des primitives....
   - Sélectionnez l'option **Part → ![](/images/Part_Primitives.svg) Créer des primitives...** du menu.
2. Le panneau de tâches **Primitives géométriques** s'ouvre.
3. Sélectionnez un type de primitive dans la liste déroulante.
4. Spécifiez les propriétés.
5. Appuyez sur le bouton Créer.
6. L'objet est créé.
7. Notez que le panneau de tâches reste ouvert.
8. Vous pouvez créer des primitives supplémentaires.
9. Appuyez sur le bouton Fermer pour fermer le panneau des tâches et terminer la commande.

### Éditer

1. Double-cliquez sur l'objet primitif dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
2. Le panneau de tâches **Primitives géométriques** s'ouvre.
3. Modifiez une ou plusieurs propriétés.
4. L'objet est mis à jour de manière dynamique dans la [vue 3D](/3D_view/fr "3D view/fr").
5. Appuyez sur le bouton OK.

Les propriétés d'une Part Primitive peuvent également être modifiées dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr"), et ses Données**Placement** peuvent également être modifiées avec la commande ![](/images/Std_TransformManip.svg) [Std Transformer](/Std_TransformManip/fr "Std TransformManip/fr").

## Primitives géométriques

Les primitives suivantes peuvent être créées :

- ![](/images/Part_Plane.svg) [Plan](/Part_Plane/fr "Part Plane/fr") : crée un plan.
- ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr") : crée une boîte. Cet objet peut également être créé avec l'outil [Cube](/Part_Box/fr "Part Box/fr").
- ![](/images/Part_Cylinder.svg) [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr") : crée un cylindre. Cet objet peut également être créé avec l'outil [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr").
- ![](/images/Part_Cone.svg) [Cône](/Part_Cone/fr "Part Cone/fr") : crée un cône. Cet objet peut également être créé avec l'outil [Cône](/Part_Cone/fr "Part Cone/fr").
- ![](/images/Part_Sphere.svg) [Sphère](/Part_Sphere/fr "Part Sphere/fr") : crée une sphère. Cet objet peut également être créé avec l'outil [Sphère](/Part_Sphere/fr "Part Sphere/fr").
- ![](/images/Part_Ellipsoid.svg) [Ellipsoïde](/Part_Ellipsoid/fr "Part Ellipsoid/fr") : crée un ellipsoïde.
- ![](/images/Part_Torus.svg) [Tore](/Part_Torus/fr "Part Torus/fr") : crée un tore. Cet objet peut également être créé avec l'outil [Tore](/Part_Torus/fr "Part Torus/fr").
- ![](/images/Part_Prism.svg) [Prisme](/Part_Prism/fr "Part Prism/fr") : crée un prisme.
- ![](/images/Part_Wedge.svg) [Pyramide tronquée](/Part_Wedge/fr "Part Wedge/fr") : crée une pyramide tronquée.
- ![](/images/Part_Helix.svg) [Hélice](/Part_Helix/fr "Part Helix/fr") : crée une hélice.
- ![](/images/Part_Spiral.svg) [Spirale](/Part_Spiral/fr "Part Spiral/fr") : crée une spirale.
- ![](/images/Part_Circle.svg) [Cercle](/Part_Circle/fr "Part Circle/fr") : crée un arc de cercle.
- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse/fr "Part Ellipse/fr") : crée un arc elliptique.
- ![](/images/Part_Point.svg) [Point](/Part_Point "Part Point") : crée un point.
- ![](/images/Part_Line.svg) [Ligne](/Part_Line/fr "Part Line/fr"): Crée une ligne.
- ![](/images/Part_RegularPolygon.svg) [Polygone régulier](/Part_RegularPolygon/fr "Part RegularPolygon/fr"): Crée un polygone régulier.

## Remarques

- La commande Part Primitives ne peut pas créer un ![](/images/Part_Tube.svg) [Part Tube](/Part_Tube/fr "Part Tube/fr").

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/), [Part Ecrire un script](/Part_scripting/fr "Part scripting/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Il existe un script Python pour tester la création des primitives. Il peut être exécuté à partir de la [console Python](/Python_console/fr "Python console/fr") :

```
import parttests.part_test_objects as pto
pto.create_test_file("example_file")

```

Ce script se trouve dans le répertoire d'installation du programme et peut être examiné pour voir comment les primitives de base sont construites :

```
$INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Il peut également être utilisé comme entrée pour le programme :

```
freecad $INSTALL_DIR/Mod/Part/parttests/part_test_objects.py

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Primitives/fr&oldid=1495642>"
