---
title: Atelier Part
---

![](/images/Workbench_Part.svg)

Icône de l'atelier Part

## Introduction

L'![](/images/Workbench_Part.svg) **atelier Part** fournit un flux de travail traditionnel de [géométrie de construction de solides](/Constructive_solid_geometry/fr "Constructive solid geometry/fr") (CSG en anglais). Dans ce processus, chaque objet est un solide indépendant. L'atelier Part peut les créer à partir d'[esquisses](/Sketcher_Workbench/fr "Sketcher Workbench/fr") paramétriques à l'aide d'outils tels que une [extrusion](/Part_Extrude/fr "Part Extrude/fr"), une [révolution](/Part_Revolve/fr "Part Revolve/fr"), un [lissage](/Part_Loft/fr "Part Loft/fr"), etc. En outre, des solides primitifs de base comme [cube](/Part_Box/fr "Part Box/fr"), un [cylindre](/Part_Cylinder/fr "Part Cylinder/fr"), etc. peuvent également être créés. Ces objets peuvent être combinés, par le biais d'opérations booléennes, pour créer des solides plus complexes.

L'atelier Part peut également créer des objets qui ne sont pas des solides, tels que des faces, des coques et des objets ne comportant que des arêtes ou des sommets. Il fournit également une variété d'outils d'usage général pour la manipulation et la validation de géométries, ainsi que pour la réalisation de copies.

L'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") utilise un autre flux de travail pour créer des solides. Pour une discussion détaillée sur l'atelier Part par rapport à l'atelier PartDesign, voir [Part et PartDesign](/Part_and_PartDesign/fr "Part and PartDesign/fr").

![](/images/Part_Workbench_Example.jpg)

## Les outils

### Barres d'outils des solides

- ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr") : dessine un cube.

- ![](/images/Part_Cylinder.svg) [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr") : dessine un cylindre.

- ![](/images/Part_Sphere.svg) [Sphère](/Part_Sphere/fr "Part Sphere/fr") : dessine une sphère.

- ![](/images/Part_Cone.svg) [Cône](/Part_Cone/fr "Part Cone/fr") : dessine un cône.

- ![](/images/Part_Torus.svg) [Tore](/Part_Torus/fr "Part Torus/fr") : dessine un tore.

- ![](/images/Part_Tube.svg) [Tube](/Part_Tube/fr "Part Tube/fr") : crée un tube.

- ![](/images/Part_Primitives.svg) [Créer des primitives...](/Part_Primitives/fr "Part Primitives/fr") : outil pour créer l'une des primitives suivantes :

- ![](/images/Part_Plane.svg) [Plan](/Part_Plane/fr "Part Plane/fr") : crée un plan.

- ![](/images/Part_Box.svg) [Cube](/Part_Box/fr "Part Box/fr") : crée une boîte. Cet objet peut également être créé avec l'outil [Cube](/Part_Box/fr "Part Box/fr").

- ![](/images/Part_Cylinder.svg) [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr") : crée un cylindre. Cet objet peut également être créé avec l'outil [Cylindre](/Part_Cylinder/fr "Part Cylinder/fr").

- ![](/images/Part_Cone.svg) [Cône](/Part_Cone/fr "Part Cone/fr") : crée un cône. Cet objet peut également être créé avec l'outil [Cône](/Part_Cone/fr "Part Cone/fr").

- ![](/images/Part_Sphere.svg) [Sphère](/Part_Sphere/fr "Part Sphere/fr") : crée une sphère. Cet objet peut également être créé avec l'outil [Sphère](/Part_Sphere/fr "Part Sphere/fr").

- ![](/images/Part_Ellipsoid.svg) [Ellipsoïde](/Part_Ellipsoid/fr "Part Ellipsoid/fr") : crée un ellipsoïde.

- ![](/images/Part_Torus.svg) [Tore](/Part_Torus/fr "Part Torus/fr") : crée un tore. Cet objet peut aussi être créé avec l'outil [Tore](/Part_Torus/fr "Part Torus/fr").

- ![](/images/Part_Prism.svg) [Prisme](/Part_Prism/fr "Part Prism/fr") : crée un prisme.

- ![](/images/Part_Wedge.svg) [Pyramide tronquée](/Part_Wedge/fr "Part Wedge/fr") : crée une pyramide tronquée.

- ![](/images/Part_Helix.svg) [Hélice](/Part_Helix/fr "Part Helix/fr") : crée une hélice.

- ![](/images/Part_Spiral.svg) [Spirale](/Part_Spiral/fr "Part Spiral/fr") : crée une spirale.

- ![](/images/Part_Circle.svg) [Cercle](/Part_Circle/fr "Part Circle/fr") : crée un arc de cercle.

- ![](/images/Part_Ellipse.svg) [Ellipse](/Part_Ellipse/fr "Part Ellipse/fr") : crée un arc elliptique.

- ![](/images/Part_Point.svg) [Point](/Part_Point/fr "Part Point/fr") : crée un point.

- ![](/images/Part_Line.svg) [Ligne](/Part_Line/fr "Part Line/fr") : crée une ligne.

- ![](/images/Part_RegularPolygon.svg) [Polygone régulier](/Part_RegularPolygon/fr "Part RegularPolygon/fr") : crée un polygone régulier.

- ![](/images/Part_Builder.svg) [Générateur de formes](/Part_Builder/fr "Part Builder/fr") : crée des formes à partir de diverses primitives.

### Barres d'outils des outils de Part

- ![](/images/Sketcher_NewSketch.svg) [Créer une esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr") : crée une nouvelle esquisse et ouvre la [fenêtre de dialogue](/Sketcher_Dialog/fr "Sketcher Dialog/fr") pour la modifier.

- ![](/images/Part_Extrude.svg) [Extrusion](/Part_Extrude/fr "Part Extrude/fr") : extrude les faces planes d'un objet.

- ![](/images/Part_Revolve.svg) [Révolution](/Part_Revolve/fr "Part Revolve/fr") : crée un solide en faisant tourner un autre objet (pas un solide) autour d'un axe.

- ![](/images/Part_Mirror.svg) [Objet en miroir](/Part_Mirror/fr "Part Mirror/fr") : reflète l'objet sélectionné sur un plan de miroir.

- ![](/images/Part_Scale.svg) [Échelle](/Part_Scale/fr "Part Scale/fr") : met à l'échelle une ou plusieurs formes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Part_Fillet.svg) [Congé](/Part_Fillet/fr "Part Fillet/fr") : congés (arrondi) d'arêtes d'un objet.

- ![](/images/Part_Chamfer.svg) [Chanfrein](/Part_Chamfer/fr "Part Chamfer/fr") : chanfreine les bords d'un objet.

- ![](/images/Part_MakeFace.svg) [Face à partir de polylignes](/Part_MakeFace/fr "Part MakeFace/fr") : génère une face à partir d'un ensemble de polylignes (contours).

- ![](/images/Part_RuledSurface.svg) [Surface réglée](/Part_RuledSurface/fr "Part RuledSurface/fr") : crée une surface réglée.

- ![](/images/Part_Loft.svg) [Lissage](/Part_Loft/fr "Part Loft/fr") : crée une forme lissée d'un profil à un autre.

- ![](/images/Part_Sweep.svg) [Balayage](/Part_Sweep/fr "Part Sweep/fr") : crée une forme en balayant un ou plusieurs profils le long d'un chemin.

- ![](/images/Part_Section.svg) [Section](/Part_Section/fr "Part Section/fr") : crée une section par intersection d'un objet avec un plan de coupe.

- ![](/images/Part_CrossSections.svg) [Coupes](/Part_CrossSections/fr "Part CrossSections/fr") : crée une ou plusieurs coupes transversales à travers une forme sélectionnée.

- ![](/images/Part_Offset.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Décalage:

- ![](/images/Part_Offset.svg) [Décaler en 3D](/Part_Offset/fr "Part Offset/fr") : construit une forme parallèle à une certaine distance de l'original.

- ![](/images/Part_Offset2D.svg) [Décaler en 2D](/Part_Offset2D/fr "Part Offset2D/fr") : construit une polyligne parallèle à une certaine distance de l'originale ou agrandit/réduit une face plane.

- ![](/images/Part_Thickness.svg) [Évider](/Part_Thickness/fr "Part Thickness/fr") : creuse un solide pour en faire comme une coque.

- ![](/images/Part_ProjectionOnSurface.svg) [Projeter sur une surface](/Part_ProjectionOnSurface/fr "Part ProjectionOnSurface/fr") : projette un logo, un texte ou une face, une polyligne ou une arête sur une surface.

- ![](/images/Part_FaceColors.svg) [Couleur par face](/Part_ColorPerFace/fr "Part ColorPerFace/fr") : attribue des couleurs aux faces des pièces.

### Barres d'outils des booléens

- ![](/images/Part_Compound.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Composé:

- ![](/images/Part_Compound.svg) [Créer un composé](/Part_Compound/fr "Part Compound/fr") : crée un composé à partir des objets sélectionnés.

- ![](/images/Part_ExplodeCompound.png) [Éclater le composé](/Part_ExplodeCompound/fr "Part ExplodeCompound/fr") : sépare les composés de formes.

- ![](/images/Part_CompoundFilter.svg) [Filtre de composé](/Part_CompoundFilter/fr "Part CompoundFilter/fr") : extrait les pièces composantes de composés.

- ![](/images/Part_Booleans.svg) [Opération booléenne](/Part_Boolean/fr "Part Boolean/fr") : effectue des opérations booléennes sur deux objets.

- ![](/images/Part_Cut.svg) [Soustraction](/Part_Cut/fr "Part Cut/fr") : soustrait un objet d'un autre.

- ![](/images/Part_Fuse.svg) [Union](/Part_Fuse/fr "Part Fuse/fr") : unit deux ou plus d'objets.

- ![](/images/Part_Common.svg) [Intersection](/Part_Common/fr "Part Common/fr") : extrait la partie commune de deux objets.

- ![](/images/Part_JoinConnect.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Joindre:

- ![](/images/Part_JoinConnect.svg) [Connecter](/Part_JoinConnect/fr "Part JoinConnect/fr") : relie les intérieurs d'objets fermés.

- ![](/images/Part_JoinEmbed.svg) [Intégrer](/Part_JoinEmbed/fr "Part JoinEmbed/fr") : intègre un objet à un autre objet.

- ![](/images/Part_JoinCutout.svg) [Découper](/Part_JoinCutout/fr "Part JoinCutout/fr") : crée une découpe dans un objet en fonction d'un autre objet.

- ![](/images/Part_BooleanFragments.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Scinder:

- ![](/images/Part_BooleanFragments.svg) [Fragments booléens](/Part_BooleanFragments/fr "Part BooleanFragments/fr") : crée toutes les pièces obtenues par des opérations booléennes.

- ![](/images/Part_SliceApart.png) [Séparer/exploser](/Part_SliceApart/fr "Part SliceApart/fr") : sépare et explose un objet par intersection avec d'autres objets.

- ![](/images/Part_Slice.svg) [Scinder](/Part_Slice/fr "Part Slice/fr") : scinde un objet en morceaux par intersection avec d'autres objets.

- ![](/images/Part_XOR.svg) [OU exclusif](/Part_XOR/fr "Part XOR/fr") : supprime l'espace partagé (commun) par un nombre pair d'objets.

- ![](/images/Part_CheckGeometry.svg) [Vérifier la géométrie](/Part_CheckGeometry/fr "Part CheckGeometry/fr") : vérifie la géométrie des objets sélectionnés pour en détecter les erreurs.

- ![](/images/Part_Defeaturing.svg) [Supprimer la fonction](/Part_Defeaturing/fr "Part Defeaturing/fr") : supprime des fonctions d'un objet.

### Autres outils

- ![](/images/Part_Import.svg) [Importation](/Part_Import/fr "Part Import/fr") : importe des fichiers \*.IGES, \*.STEP ou \*.BREP.

- ![](/images/Part_Export.svg) [Exportation](/Part_Export/fr "Part Export/fr") : exporte des fichiers \*.IGES, \*.STEP ou \*.BREP.

- ![](/images/Part_BoxSelection.svg) [Sélection par boîte](/Part_BoxSelection/fr "Part BoxSelection/fr") : sélectionne les faces dans une zone rectangulaire.

- ![](/images/Part_ShapeFromMesh.svg) [Forme à partir du maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr") : crée des formes à partir d'objets maillés.

- ![](/images/Part_PointsFromMesh.svg) [Points à partir de maillage](/Part_PointsFromMesh/fr "Part PointsFromMesh/fr") : crée des objets points à partir d'objets géométriques.

- ![](/images/Part_MakeSolid.svg) [Convertir en solide](/Part_MakeSolid/fr "Part MakeSolid/fr") : crée des solides à partir d'objets de forme.

- ![](/images/Part_ReverseShape.svg) [Inverser les formes](/Part_ReverseShape/fr "Part ReverseShape/fr") : crée des copies paramétriques avec des normales de face inversées à partir d'objets sélectionnés.

- Copie :

- ![](/images/Part_SimpleCopy.svg) [Copie simple](/Part_SimpleCopy/fr "Part SimpleCopy/fr") : crée des copies non paramétriques à partir d'objets.

- ![](/images/Part_TransformedCopy.svg) [Copie transformée](/Part_TransformedCopy/fr "Part TransformedCopy/fr") : crée des copies non paramétriques à partir d'objets. Elle est destinée aux objets imbriqués dans des conteneurs.

- ![](/images/Part_ElementCopy.svg) [Copie d'élément de la forme](/Part_ElementCopy/fr "Part ElementCopy/fr") : crée des copies non paramétriques de sous-éléments : sommets, arêtes et faces.

- ![](/images/Part_RefineShape.svg) [Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") : crée des copies paramétriques avec une forme affinée à partir des objets sélectionnés. Cette commande supprime les arêtes inutiles des faces planes et cylindriques.

- ![](/images/Part_EditAttachment.svg) [Ancrage](/Part_EditAttachment/fr "Part EditAttachment/fr") : rattache un objet à un ou plusieurs autres objets.

## Outils obsolètes

### Mesure

L'outil ![](/images/Std_Measure.svg) [Mesurer](/Std_Measure/fr "Std Measure/fr") remplace les outils listés ci-dessous. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

- ![](/images/Part_Measure_Linear.svg) [Mesure linéaire](/Part_Measure_Linear/fr "Part Measure Linear/fr") : crée une mesure linéaire. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Angular.svg) [Mesure angulaire](/Part_Measure_Angular/fr "Part Measure Angular/fr") : crée une mesure angulaire. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Refresh.svg) [Rafraîchir les mesures](/Part_Measure_Refresh/fr "Part Measure Refresh/fr") : met à jour les mesures. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Clear_All.svg) [Effacer toute mesure](/Part_Measure_Clear_All/fr "Part Measure Clear All/fr") et [Affichage Supprimer les mesures](/View_Measure_Clear_All/fr "View Measure Clear All/fr"): efface toutes les mesures. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Toggle_All.svg) [Tout basculer](/Part_Measure_Toggle_All/fr "Part Measure Toggle All/fr") et [Affichage Basculer les mesures](/View_Measure_Toggle_All/fr "View Measure Toggle All/fr") : affiche ou masque toutes les mesures. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Toggle_3D.svg) [Mesures dans la 3D](/Part_Measure_Toggle_3D/fr "Part Measure Toggle 3D/fr") : affiche ou masque les mesures dans la 3D. Non disponible dans version 1.0 et suivantes.

- ![](/images/Part_Measure_Toggle_Delta.svg) [Mesures selon le repère global](/Part_Measure_Toggle_Delta/fr "Part Measure Toggle Delta/fr") : affiche ou masque les mesures dans le repère global. Non disponible dans version 1.0 et suivantes.

## Préférences

- ![](/images/Preferences-part_design.svg) [Préférences](/PartDesign_Preferences/fr "PartDesign Preferences/fr") : préférences de l'atelier Part.
- ![](/images/Preferences-import-export.svg) [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr") : préférences pour l'importation et l'exportation vers différents formats de fichier.
- [Réglage fin](/Fine-tuning/fr#Atelier_Part/fr "Fine-tuning/fr") : quelques paramètres supplémentaires pour affiner le comportement de la partie.

## Script

Voir [Part Écrire un script](/Part_scripting/fr "Part scripting/fr")

## Tutoriels

- [Importer depuis STL ou OBJ](/Import_from_STL_or_OBJ/fr "Import from STL or OBJ/fr") : comment importer les fichiers STL/OBJ dans FreeCAD
- [Exportation de fichier STL ou OBJ](/Export_to_STL_or_OBJ/fr "Export to STL or OBJ/fr") : comment exporter les fichiers STL/OBJ avec FreeCAD
- [Tutoriel balle Whiffle](/Whiffle_Ball_tutorial/fr "Whiffle Ball tutorial/fr") : comment utiliser l'atelier Part

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Workbench/fr&oldid=1518254>"
