---
title: Surface Courbe sur maillage
---
|  |
| --- |
| Surface Courbe sur maillage |
| Emplacement du menu |
| Surface → Courbe sur un maillage... |
| Ateliers |
| [Surface](/Surface_Workbench/fr "Surface Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| *Aucun* |
|  |

## Description

![](/images/Surface_CurveOnMesh.svg) Surface Courbe sur maillage crée des segments de spline approximatifs par dessus un [maillage](/Mesh_Workbench/fr "Mesh Workbench/fr") sélectionné.

Si l'objet n'est pas un [maillage](/Mesh/fr "Mesh/fr"), mais une [Forme](/Shape/fr "Shape/fr") ou une surface paramétrique, il doit d'abord être converti en un maillage à l'aide de ![](/images/Mesh_FromPartShape.svg) [Mesh Créer un maillage](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr").

Ces arêtes créées par dessus le maillage peuvent être utilisées pour recréer la surface de manière paramétrique en utilisant des outils tels que ![](/images/Surface_GeomFillSurface.svg) [Remplir entre les courbes limites](/Surface_GeomFillSurface/fr "Surface GeomFillSurface/fr") et ![](/images/Surface_Sections.svg) [Sections](/Surface_Sections/fr "Surface Sections/fr").

![](/images/Surface_CurveOnMesh_mesh_example.png) ![](/images/Surface_CurveOnMesh_example.png)

![](/images/Surface_CurveOnMesh_surface_example.png)

En haut à gauche : objet maillé avec des points sélectionnés sur la surface.  
En haut à droite : splines créées en sélectionnant plusieurs points sur le maillage.  
En bas à gauche : une surface paramétrique reconstruite à partir des splines approximées en utilisant [Surface Sections](/Surface_Sections/fr "Surface Sections/fr").

## Utilisation

1. Assurez-vous d'avoir un [objet maillé](/Mesh/fr "Mesh/fr"). Cela peut être créé par l'![](/images/Workbench_Mesh.svg) [atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") ou en important un type de fichier de maillage, comme STL, [OBJ](/Arch_OBJ/fr "Arch OBJ/fr") ou [DAE](/Arch_DAE/fr "Arch DAE/fr"). Si un objet solide ou un type de fichier solide (STEP) est utilisé, il peut être converti en un maillage à l'aide de ![](/images/Mesh_FromPartShape.svg) [Mesh Créer un maillage](/Mesh_FromPartShape/fr "Mesh FromPartShape/fr").
2. Appuyez sur ![](/images/Surface_CurveOnMesh.svg) Courbe sur un maillage.
3. Appuyez sur Démarrer.
4. À l'aide du pointeur de la souris, choisissez des points sur la surface du maillage dans la [vue 3D](/3D_view/fr "3D view/fr"). Choisissez autant de points que nécessaire pour dessiner une ligne d'aperçu lisse.
5. Quand suffisamment de points ont été ajoutés, faites un clic droit sur la [vue 3D](/3D_view/fr "3D view/fr") pour ouvrir le menu contextuel et sélectionnez **Créer**. En fonction de la fluidité du maillage d'origine, une spline ou plusieurs splines seront créées dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
6. Répétez la séquence Démarrer → Choisir → **Créer**, pour ajouter d'autres splines approchées.
7. La nouvelle spline sera créée et apparaîtra dans la [vue en arborescence](/Tree_view/fr "Tree view/fr") immédiatement après avoir choisi **Créer**. Le [panneau des tâches](/Task_panel/fr "Task panel/fr") restera actif.
8. Appuyez sur Fermer pour fermer le [panneau des tâches](/Task_panel/fr "Task panel/fr") et terminer complètement la commande.

Après avoir appuyé sur Créer, le menu contextuel (clic droit) dans la [vue 3D](/3D_view/fr "3D view/fr") affiche diverses options à côté de **Créer**.

* **Fermer une polyligne** : si au moins trois points ont été choisis, cette option sera disponible pour joindre le dernier point au premier point par une ligne.
* **Effacer** : cela effacera les points provisoires qui ont été choisis sur le maillage, et vous permettra d'en choisir de nouveaux.
* **Annuler** : cela effacera les points provisoires qui ont été choisis, et arrêtera l'opération de prélèvement. Appuyez à nouveau sur Démarrer pour sélectionner à nouveau des points.

## Options

*(Éditeur : ces informations doivent être vérifiées)*

Section **Polyligne** :

* **Tolérances d'aimantation aux sommets** : par défaut `10 px`. Indique la distance minimale entre un point et un autre lors du prélèvement avec le pointeur.
* **Seuil de séparation** : par défaut `45 deg`. Indique l'écart angulaire d'un point du maillage à un autre point nécessaire pour créer une nouvelle spline au lieu d'étendre la spline précédente.

**Approximation de spline**, si ![](/images/CheckBoxTrue.svg) coché, cela créera des objets de type spline sinon créera de simples objets de type ligne droite (polyligne).

* **Tolérance pour mailler** : par défaut `0.2`. C'est un paramètre qui prend en compte les imperfections du maillage. Plus ce nombre est petit, plus il considérera le maillage avec précision, surtout s'il s'agit d'un maillage très fin.
* **Continuité** : par défaut `C2`. Détermine la continuité de la spline. Il peut s'agir de `C0` (contact), `C1` (tangente), `C2` (courbure) et `C3` (courbure d'accélération).
* **Angle de courbure maximal** : par défaut `5`. Détermine le degré maximum de la spline pour se rapprocher de la surface. Il peut s'agir d'une valeur comprise entre `1` et `8`.

## Propriétés

Si ![](/images/CheckBoxFalse.svg) Spline approximation n'est pas cochée, l'outil Courbe sur maillage crée une [Part Feature](/Part_Feature/fr "Part Feature/fr") de base.

Si ![](/images/CheckBoxTrue.svg) Spline approximation est coché, l'outil Courbe sur maillage crée une ![](/images/Part_Spline.svg) [Part Spline](/index.php?title=Part_Spline/fr&action=edit&redlink=1 "Part Spline/fr (page does not exist)") (classe `Part::Spline`) qui est dérivée de la classe de base [Part Feature](/Part_Feature/fr "Part Feature/fr") (classe `Part::Feature`). Elle partage donc toutes les propriétés de cette dernière.

Outre les propriétés décrites dans [Part Feature](/Part_Feature/fr "Part Feature/fr"), Part Spline a les propriétés suivantes dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

### Vue

Base

* Vue**Control Points** (`Bool`) : par défaut `false`. Mis à `true`, elle affichera une superposition avec les points de contrôle de la surface.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_CurveOnMesh/fr&oldid=1493120>"