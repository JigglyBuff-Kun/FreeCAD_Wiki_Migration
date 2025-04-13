---
title: Copier des objets
---
## Présentation

Comme beaucoup d'autres programmes informatiques, FreeCAD a la possibilité de couper, copier et coller des objets. Les objets [Documents](/Document_structure/fr "Document structure/fr") peuvent être librement copiés dans un document ou entre documents en utilisant les fonctions ![](/images/Std_Copy.svg) [Std Copier](/Std_Copy/fr "Std Copy/fr"), ![](/images/Std_Paste.svg) [Std Coller](/Std_Paste/fr "Std Paste/fr") et [Std Dupliquer une sélection](/Std_DuplicateSelection/fr "Std DuplicateSelection/fr").

![](/images/Copy_past_duplicate.png)

Veuillez considérer que les objets copiés-collés ne dépendent pas de l'original. Si vous voulez des clones dépendants, veuillez utiliser ![](/images/Draft_Clone.svg) [Draft Cloner](/Draft_Clone/fr "Draft Clone/fr") ou ![](/images/PartDesign_Clone.svg) [PartDesign Clone](/PartDesign_Clone/fr "PartDesign Clone/fr"). Si vous n'avez besoin ni d'un clone dépendant ni d'une réplique paramétrique, vous pouvez également utiliser ![](/images/Part_SimpleCopy.svg) [Part Copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr"). Pour les clones à motifs, veuillez regarder dans [Autres méthodes](#Autres_m.C3.A9thodes) de cette page.

## Copier des objets liés

* Si un objet à copier a des liens avec des objets qui ne sont pas dans la sélection, FreeCAD demandera si les objets non sélectionnés doivent être inclus dans l'opération de copie.

## Trouver et positionner un ou des objets collés

Après une opération de copier-coller, l'emplacement des nouveaux objets dans la [vue 3D](/3D_view/fr "3D view/fr") peut ne pas être évident. Cela est dû au fait que les nouveaux objets ont la même propriété de [Placement](/Placement/fr "Placement/fr") que leurs originaux. Basculez la propriété Visibility (Barre d'espace) pour masquer les originaux, puis déplacez les copies à leur emplacement correct, par exemple en utilisant ![](/images/Std_TransformManip.svg) [Std Transformer](/Std_TransformManip/fr "Std TransformManip/fr") ou ![](/images/Std_Placement.svg) [Std Positionner](/Std_Placement/fr "Std Placement/fr").

## Autres méthodes

Comme la plupart des choses dans FreeCAD, il y a plusieurs façons de faire une copie. Pour plus d'idées, consultez :

* PartDesign : [Symétrie](/PartDesign_Mirrored/fr "PartDesign Mirrored/fr"), [Répétition linéaire](/PartDesign_LinearPattern/fr "PartDesign LinearPattern/fr"), [Répétition circulaire](/PartDesign_PolarPattern/fr "PartDesign PolarPattern/fr"), [Transformations multiples](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr")
* Part : [Objet en miroir](/Part_Mirror/fr "Part Mirror/fr"), [Copie simple](/Part_SimpleCopy "Part SimpleCopy")
* Draft : [Décaler](/Draft_Offset/fr "Draft Offset/fr"), [Échelle](/Draft_Scale/fr "Draft Scale/fr"), [Réseau orthogonal](/Draft_OrthoArray/fr "Draft OrthoArray/fr"), [Réseau selon une courbe](/Draft_PathArray/fr "Draft PathArray/fr"), [Cloner](/Draft_Clone/fr "Draft Clone/fr"), [Miroir](/Draft_Mirror/fr "Draft Mirror/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/fr&oldid=1445183>"