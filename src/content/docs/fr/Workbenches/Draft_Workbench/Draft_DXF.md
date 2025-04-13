---
title: Draft DXF
---
## Description

Draft DXF est un module utilisé par ![](/images/Std_Open.svg) [Std Ouvrir](/Std_Open/fr "Std Open/fr"), ![](/images/Std_Import.svg) [Std Importer](/Std_Import/fr "Std Import/fr") et ![](/images/Std_Export.svg) [Std Exporter](/Std_Export/fr "Std Export/fr") pour gérer le format de fichiers DXF.

![](/images/Screenshot_qcad.jpg)

Dessin de Qcad exporté au format DXF puis ouvert dans FreeCAD

## Importer

Deux importateurs sont disponibles, celui qui est utilisé peut être spécifié sous **Édition → Préférences... → Importer/Exporter → DXF**. L'un est intégré, basé sur C++ et rapide, l'autre est hérité, codé en Python, plus lent et nécessite l'installation d'un module complémentaire, mais peut mieux gérer certaines entités et créer des objets FreeCAD plus précis. Les deux prennent en charge toutes les versions DXF à partir de R12.

Les solides 3D à l'intérieur d'un fichier DXF sont stockés sous un blob binaire ACIS/SAT, qui ne peut actuellement pas être lu par FreeCAD.

### L'importateur C++

Cet importateur peut importer les objets DXF suivants :

* lignes
* polylignes (et lwpolylines)
* arcs
* cercles
* ellipses
* splines
* points
* textes et mtextes
* dimensions
* lignes de référence
* blocs (seuls la géométrie, les textes, les dimensions et les attributs à l'intérieur des blocs sont ignorés)
* calques
* objets espace-papier

### L'importateur historique

Cet importateur peut importer les objets DXF suivants :

* lignes
* polylignes (et lwpolylines)
* arcs
* cercles
* ellipses
* splines
* Visages 3D
* textes et mtextes
* lignes de repère
* calques

## Exporter

Il existe également deux exportateurs. L'exportateur traditionnel exporte au format R12 DXF, l'exportateur C++ au format R14 DXF. Les deux formats peuvent être traités par de nombreuses applications.

### L'exportateur C++

Voici quelques-unes des caractéristiques et des limites de cet exportateur :

* Toute la géométrie 2D de FreeCAD est exportée, sauf [Draft Courbe de Bézier cubique](/Draft_CubicBezCurve/fr "Draft CubicBezCurve/fr"), [Draft Courbe de Bézier](/Draft_BezCurve/fr "Draft BezCurve/fr") et [Draft Points](/Draft_Point/fr "Draft Point/fr").
* Les arêtes droites des faces des objets 3D sont exportées, mais les arêtes courbes uniquement si elles se trouvent sur un plan parallèle au plan XY du système de coordonnées global. Notez qu'un DXF créé à partir d'objets 3D contiendra des lignes dupliquées.
* Les textes et les dimensions ne sont pas exportés.
* Les couleurs sont ignorées.
* Les calques sont mappés à partir des noms d'objets.

### L'exportateur historique

Voici quelques-unes des caractéristiques et des limites de cet exportateur :

* Toute la géométrie 2D de FreeCAD est exportée, sauf [Draft Points](/Draft_Point/fr "Draft Point/fr"), mais les ellipses, les B-splines et les courbes de Bézier ne sont pas exportées correctement.
* Les objets 3D sont exportés sous forme de vues 2D aplaties.
* Les objets composés sont exportés sous forme de blocs.
* Les textes et les dimensions sont exportés.
* Les couleurs dans le DXF sont basées sur la couleur des lignes des objets. Le noir est mappé sur "ByBlock", les autres couleurs sont mappées en utilisant les couleurs ACI (AutoCAD Color Index).
* Les calques sont mappées à partir des noms de calques et de groupes. Lorsque les groupes sont imbriqués, le groupe le plus profond donne le nom du calque.

## Installation

Pour des raisons de licence, les bibliothèques d'importation/exportation [DXF](/DXF/fr "DXF/fr") requises par la version héritée de l'importateur ne font pas partie du code source de FreeCAD.
Pour plus d'informations, voir : [FreeCAD et l'importation de DXF](/FreeCAD_and_DXF_Import/fr "FreeCAD and DXF Import/fr").

## Préférences

Voir : [Préférences Importer/Exporter](/Import_Export_Preferences/fr "Import Export Preferences/fr").

## DWG

Le format DWG étant un format propriétaire, fermé et non documenté, il est difficile pour les projets open-source comme FreeCAD de le prendre en charge. C'est pourquoi FreeCAD s'appuie sur des convertisseurs externes pour lire et écrire des fichiers DWG. Pour importer un fichier DWG, un convertisseur est utilisé pour créer d'abord un DXF, qui peut ensuite être traité par l'importateur DXF de FreeCAD. Lors de l'exportation vers DWG, la conversion inverse se produit : le DXF créé par l'exportateur FreeCAD DXF est transformé en DWG.

Remarquez que le format DXF permet une conversion 1:1 du format DWG. Toutes les applications qui peuvent lire et écrire des fichiers DWG peuvent faire de même avec des fichiers DXF, sans perte de données. Par conséquent, demander des fichiers DXF au lieu de fichiers DWG et fournir des fichiers DXF en retour ne devrait pas poser de problème.

Il existe un support intégré pour les convertisseurs DWG suivants :

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, manque de support pour certaines entités DWG).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (gratuit).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commercial).

Voir [Préférences Importer/Exporter](/Import_Export_Preferences/fr#DWG "Import Export Preferences/fr") et [FreeCAD et l'importation DWG](/FreeCAD_and_DWG_Import/fr "FreeCAD and DWG Import/fr") pour plus d'informations.

## Script

Voir aussi: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour exporter des objets au format DXF, utilisez la méthode `export` du module importDXF.

```
importDXF.export(objectslist, filename, nospline=False, lwPoly=False)

```

* Pour le système d'exploitation Windows : utilisez un / (barre oblique) comme séparateur de chemin dans `filename`.

Exemple :

```
import FreeCAD as App
import Draft
import importDXF

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=500)
polygon2 = Draft.make_polygon(5, radius=1500)

doc.recompute()

objects = [polygon1, polygon2]
importDXF.export(objects, "/home/user/Pictures/myfile.dxf")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_DXF/fr&oldid=1513956>"