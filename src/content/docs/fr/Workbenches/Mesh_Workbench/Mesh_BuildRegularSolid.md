---
title: Mesh Solide régulier
---
|  |
| --- |
| Mesh Solide régulier |
| Emplacement du menu |
| Maillages → Solide régulier... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Solide régulier** crée un solide paramétrique, maillé régulier.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_BuildRegularSolid.svg) Solide régulier...
   * Sélectionnez l'option **Maillages → ![](/images/Mesh_BuildRegularSolid.svg) Solide régulier...** du menu.
2. La boîte de dialogue **Solide régulier** s'ouvre.
3. Sélectionnez d'abord un type d'objet maillé dans la liste déroulante :
   * **![](/images/Mesh_Cube.svg) Cube**
   * **![](/images/Mesh_Cylinder.svg) Cylindre**
   * **![](/images/Mesh_Cone.svg) Cône**
   * **![](/images/Mesh_Sphere.svg) Sphère**
   * **![](/images/Mesh_Ellipsoid.svg) Ellipsoïde**
   * **![](/images/Mesh_Torus.svg) Tore**
4. Spécifiez les paramètres requis. Les paramètres disponibles dépendent du type d'objet maillé. Voir [Propriétés](#Properties).
5. Pour les maillages avec des surfaces courbes: une valeur **Numérisation** plus élevée donne un maillage plus fin.
6. Appuyez sur le bouton Créer pour créer l'objet maillage.
7. Créez éventuellement plus d'objets maillés.
8. Appuyez sur le bouton Fermer pour fermer la boîte de dialogue et terminer la commande.

## Remarques

* Les objets maillés créés avec cette commande sont paramétriques. A chaque fois qu'ils sont recalculés, par exemple après avoir changé l'un de leurs paramètres, leur maillage est reconstruit. Cela signifie que les manipuler avec des commandes telles que [Mesh Remailler avec Gmsh](/Mesh_RemeshGmsh/fr "Mesh RemeshGmsh/fr"), [Mesh Echelle](/Mesh_Scale/fr "Mesh Scale/fr") etc... n'a généralement pas de sens.

## Propriétés

Les objets maillés créés avec cette commande héritent de toutes les propriétés [Mesh Feature](/Mesh_Feature/fr "Mesh Feature/fr"). De plus, chaque type d'objet maillé a un certain nombre de propriétés pour contrôler son comportement paramétrique :

### Cube

#### Données

Cube

* Données**Height** (`FloatConstraint`) : hauteur du cube.
* Données**Length** (`FloatConstraint`) : longueur du cube.
* Données**Width** (`FloatConstraint`) : largeur du cube.

### Cylindre

#### Données

Base

* Données**Closed** (`Bool`) : si à `false`, les extrémités planes du cylindre sont laissées ouvertes.
* Données**Edge Length** (`FloatConstraint`) : longueur des arêtes des faces du maillage.
* Données**Length** (`FloatConstraint`) : longueur du cylindre.
* Données**Radius** (`FloatConstraint`) : rayon du cylindre.
* Données**Sampling** (`IntegerConstraint`) : nombre de faces le long de la surface courbe.

### Cône

#### Données

Base

* Données**Closed** (`Bool`) : si la valeur `false` est attribuée, la ou les extrémités planes du cône sont laissées ouvertes.
* Données**Edge Length** (`FloatConstraint`) : longueur des arêtes des faces du maillage.
* Données**Length** (`FloatConstraint`) : longueur du cône.
* Données**Radius 1** (`FloatConstraint`) : premier rayon du cône. Peut être `0`.
* Données**Radius 2** (`FloatConstraint`) : deuxième rayon du cône. Peut être `0`.
* Données**Sampling** (`IntegerConstraint`) : nombre de faces le long de la surface courbe.

### Sphère

#### Données

Base

* Données**Radius** (`FloatConstraint`) : rayon de la sphère.
* Données**Sampling** (`IntegerConstraint`) : nombre de faces dans les deux directions de la surface courbe.

### Ellipsoïde

#### Données

Base

* Données**Radius 1** (`FloatConstraint`) : premier rayon de l'ellipsoïde.
* Données**Radius 2** (`FloatConstraint`) : deuxième rayon de l'ellipsoïde.
* Données**Sampling** (`IntegerConstraint`) : nombre de faces dans les deux directions de la surface courbe.

### Tore

#### Données

Base

* Données**Radius 1** (`FloatConstraint`) : premier rayon (principal) du tore.
* Données**Radius 2** (`FloatConstraint`) : deuxième rayon du tore.
* Données**Sampling** (`IntegerConstraint`) : nombre de faces dans les deux directions de la surface courbe.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_BuildRegularSolid/fr&oldid=1333722>"