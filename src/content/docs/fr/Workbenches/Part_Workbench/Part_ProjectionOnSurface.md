---
title: Part Projeter sur une surface
---

|                                                |
| ---------------------------------------------- |
| Part Projeter sur une surface                  |
| Emplacement du menu                            |
| Part → Projeter sur une surface...             |
| Ateliers                                       |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut                           |
| _Aucun_                                        |
| Introduit dans la version                      |
| 0.19                                           |
| Voir aussi                                     |
| _Aucun_                                        |
|                                                |

## Description

![](/images/Part_ProjectionOnSurface.svg) Projeter sur une surface est utilisé pour projeter une [forme](/Shape/fr "Shape/fr") au-dessus d'une surface depuis une autre [forme](/Shape/fr "Shape/fr"). Cela peut être utilisé pour projeter un logo ou un objet texte (voir ![](/images/Draft_ShapeString.svg) [Draft Forme à partir d'un texte](/Draft_ShapeString/fr "Draft ShapeString/fr")) sur des surfaces courbes pour créer des effets intéressants.

À partir d'une [forme](/Shape/fr "Shape/fr"), cet outil peut projeter des arêtes, des polylignes (arêtes fermées) ou des faces entières à partir de celle-ci. Le résultat peut être de nouvelles arêtes, de nouvelles polylignes, de nouvelles faces ou même de nouveaux solides extrudés qui peuvent être utilisés dans des ![](/images/Part_Boolean.svg) [opérations booléennes](/Part_Boolean/fr "Part Boolean/fr") pour des effets tels que la gravure ou l'estampage.

![](/images/Part_ProjectionOnSurface1.png) ![](/images/Part_ProjectionOnSurface2.png)

Projection d'un logo sur une surface courbe

## Utilisation

1. Assurez-vous d'avoir au moins deux objets dans votre document; l'objet "source" que vous souhaitez projeter et l'objet "cible" où la projection sera faite.
2. Cliquez sur ![](/images/Part_ProjectionOnSurface.svg) Projeter sur une surface... pour lancer un [panneau des tâches](/Task_Panel/fr "Task Panel/fr") avec différentes options.
3. Cliquez sur Sélectionner la surface de projection, puis cliquez sur la surface "cible" où la projection sera créée.
4. Cliquez ensuite sur le bouton spécifique pour choisir le type de sous-élément que vous souhaitez ajouter à votre objet de projection.
   - Ajouter une face : sélectionnez une face source.
   - Ajouter une polyligne : sélectionnez une arête source. L'outil extraira la polyligne entière auquel appartient l'arête. Par exemple, en choisissant une seule arête d'un polygone, il projettera le polygone entier.
   - Ajouter une arête: sélectionnez un bord source. L'outil projettera uniquement l'arête sélectionnée.
   - Une fois qu'un bouton est enfoncé, choisissez un sous-élément dans la [vue 3D](/3D_view/fr "3D view/fr"). Si vous souhaitez le désélectionner, choisissez à nouveau le même élément.
   - Lorsque vous êtes satisfait de votre sélection, appuyez sur le même bouton Ajouter... pour quitter le mode de sélection.
5. Cliquez ensuite sur le bouton radio spécifique pour choisir le type de forme de projection à créer.
   - ![](/images/RadioButtonTrue.svg) Tout afficher : cela affichera tous les types de polylignes fermées et d'arêtes sur la surface cible. Si un sous-élément "face" a été sélectionné à l'étape précédente, un aperçu d'un objet solide extrudé à partir de la projection sera affiché, en fonction de la valeur de **Hauteur de l'extrusion**.
   - ![](/images/RadioButtonTrue.svg) Afficher les faces : cela affichera un aperçu d'une face remplie sur la surface cible. Cela ne fonctionnera que si vous avez sélectionné un sous-élément "face" à l'étape précédente; si vous avez sélectionné une "polyligne" fermée, seules les arêtes (pas de face) seront créées comme projection. Si vous avez sélectionné "arêtes", seules ces arêtes seront créées comme projection.
   - ![](/images/RadioButtonTrue.svg) Afficher les arêtes: cela affichera un aperçu des arêtes sur la surface cible. Cela fonctionnera si vous avez ajouté un sous-élément "face", "polyligne" ou "arête" à l'étape précédente. Même si vous avez ajouté une "face" remplie, seules les arêtes seront créées en tant que projection.
6. Appuyez sur le OK pour terminer l'opération et produire le nouvel objet de projection.

Remarques :

- La direction de projection est automatiquement prise à partir de la direction de la caméra dans la [vue 3D](/3D_view/fr "3D view/fr") au moment où l'outil est lancé.
- Pour changer la direction, déplacez la caméra et appuyez sur Obtenir la nouvelle direction de la caméra.
- Vous pouvez également appuyer sur les boutons X :, Y : ou Z : pour définir la direction de projection vers les principaux axes globaux, +X, -X, +Y, -Y, +Z, ou -Z.
- Cependant, notez que changer la direction de projection ne mettra pas automatiquement à jour l'aperçu de projection. Pour ce faire, vous devez re-sélectionner la géométrie en appuyant sur les boutons Ajouter... et en sélectionnant à nouveau les sous-éléments.

## Options

- **Hauteur de l'extrusion** : hauteur de la forme solide qui est créée en extrudant la face projetée à partir de la surface cible et le long du négatif de la direction de projection. Par exemple, si la direction de projection est le long de +Y `(0, 1, 0)`, l'extrusion sera créée dans la direction -Y `(0, -1, 0)`. Cette extrusion solide ne sera créée que si le sous-élément sélectionné était une face fermée, en appuyant sur le bouton Ajouter une face et en choisissant l'option ![](/images/RadioButtonTrue.svg) Tout afficher.
- **Profondeur** : distance à laquelle l'objet de projection est déplacé le long de la direction de projection. Les valeurs négatives déplaceront l'objet dans la direction opposée. Cela permet de créer une projection décalée de la surface cible.

## Limitations

L'algorithme de projection n'est parfois pas en mesure de créer une face de projection valide. Si cela se produit, une extrusion solide ne pourra pas non plus être créée.

Si ça arrive :

- Vérifiez si votre face source est valide. Lancer l'outil ![](/images/Part_CheckGeometry.svg) [Part Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") pour obtenir des indices.
- Vérifiez si la direction de projection est valide. La face source peut-elle être projetée de manière réaliste sur la surface cible ? Une projection droite toucherait-elle la surface? Ajustez la caméra de sorte que la face source soit devant la surface cible et réessayez.
- Essayez d'utiliser l'option ![](/images/RadioButtonTrue.svg) Afficher les bords. Les arêtes sont-elles correctement projetées ? Essayez de créer à la main une face avec des arêtes.

La projection effectuée dans l'atelier Part n'est pas paramétrique. Si vous avez besoin d'un flux de travail paramétrique, veuillez consulter la [classe `Projection`](https://gist.github.com/CsatiZoltan/f4fd10bf20923143ba0e0678ea1d3d61), qui est un objet scripté en Python, destiné à une utilisation programmatique.

## Liens

- Fil de discussion du forum : [Project faces onto bent surface](https://forum.freecadweb.org/viewtopic.php?f=9&t=33700)

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_ProjectionOnSurface/fr&oldid=1518107>"
