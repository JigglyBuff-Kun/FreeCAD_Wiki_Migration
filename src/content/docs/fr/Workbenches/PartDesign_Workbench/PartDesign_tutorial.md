---
title: PartDesign Tutoriel
---
|  |
| --- |
| Tutoriel |
| Thème |
| Sketcher |
| Niveau |
| Débutant |
| Temps d'exécution estimé |
| 15 minutes |
| Auteurs |
| [Drei](http://freecadweb.org/wiki/index.php?title=User:Drei) |
| Version de FreeCAD |
| 0.16 ou plus |
| Fichiers exemples |
|  |
| Voir aussi |
| *None* |
|  |

### Introduction

Ce tutoriel a pour but d'initier le lecteur à utilisation de l' [Atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr").
Le lecteur verra comment créer des objets 3D basés sur des esquisses, effectuer des opérations de soustraction et comment répliquer des entités spécifiques dans un modèle.

![](/images/Sketcher_tutorial_result.png)

### Prérequis

* FreeCAD version 0.17 ou supérieure
* Le lecteur a terminé le [tutoriel sur les esquisses](/Basic_Sketcher_Tutorial/fr "Basic Sketcher Tutorial/fr")

### Procédure

#### Créer une forme géométrique 3D

L'objectif de l'**atelier PartDesign** est de permettre à l'utilisateur de créer des formes géométriques dans un espace 3D, pour répondre à un certain besoin. Ainsi , sont mis à disposition des outils pour faire des esquisses et les convertir en objets 3D.

Il existe deux outils de base pour y parvenir: ![](/images/PartDesign_Pad.svg) [protusion](/PartDesign_Pad/fr "PartDesign Pad/fr") et ![](/images/PartDesign_Revolution.svg) [Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr"). À coté de leur équivalent de substitution (![](/images/PartDesign_Pocket.svg) [Poche](/PartDesign_Pocket/fr "PartDesign Pocket/fr") et ![](/images/PartDesign_Groove.svg) [Rainure](/PartDesign_Groove/fr "PartDesign Groove/fr")) Ils permettent de faire la plupart des actions usuelles utilisées dans cet atelier.

1. Aller sur l'atelier PartDesign
2. L'esquisse étant sélectionnée dans l'[arborescence](/Tree_view/fr "Tree view/fr"), appuyez sur ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body/fr "PartDesign Body/fr"), choisissez le plan XY par défaut et appuyez sur OK. L'esquisse doit maintenant apparaître à l'intérieur du corps.
3. Sélectionner ![](/images/PartDesign_Pad.svg) [Protusion](/PartDesign_Pad/fr "PartDesign Pad/fr")
4. Renseigner une distance de 5mm
5. Sélectionnez **Ok**

Une autre manière de créer des formes géométriques 3D est avec l'outil ![](/images/PartDesign_Revolution.svg) [éevolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr") .

![](/images/PartDesign_revolution_exercise.png)

1. Créez un nouveau corps ![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body/fr "PartDesign Body/fr"), puis une esquisse basée sur l'image ci-dessus.
2. L'esquisse peut être sur n'importe quel plan, mais doit coïncider avec l'axe horizontal.
3. Sélectionner ![](/images/PartDesign_Revolution.svg) [Révolution](/PartDesign_Revolution/fr "PartDesign Revolution/fr")
4. Définissez "Axe" sur "Axe d'esquisse horizontal"
5. Renseigner un angle de 360°

#### Outils d'enlèvement de matière

Commencer par créer une esquisse avec la forme à enlever.

1. Sélectionner la face supérieure du **pad**
2. Sélectionner ![](/images/Sketcher_NewSketch.svg) [Nouvelle esquisse](/Sketcher_NewSketch/fr "Sketcher NewSketch/fr")
3. Sélectionner ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr")
4. Approcher le bord du pad, un arc devrait apparaître en surbrillance
5. Sélectionner l'arc. Un arc de couleur différente devrait apparaître dans l'esquisse
6. Créer un cercle centré sur le même point que l'arc, et renseigner un rayon de 5 mm

**External Geometry**

Lorsqu'un élément 3D a été créé, il est possible de créer des références à l'intérieur d'une esquisse.

1. Sélectionner ![](/images/Sketcher_External.svg) [Géométrie externe](/Sketcher_External/fr "Sketcher External/fr").
2. Approcher l'élément à référencer, le bord d'un **Pad** par exemple.
3. Cliquer dessus
4. De nouveaux éléments d'une couleur différente doivent apparaître sur l'esquisse à l'emplacement de la fonction à référencer.

![](/images/PartDesign_pocket_exercise.png)

Après cela, nous allons utiliser l'outil **cavité**.

1. Sélectionner l'esquisse
2. Sélectionner ![](/images/PartDesign_Pocket.svg) [Poche](/PartDesign_Pocket/fr "PartDesign Pocket/fr")
3. Régler la distance sur **À travers tout**

#### Caractéristiques du motif

Rappeler le profil extrudé créé au début du tutoriel.

1. Sélectionner la face supérieure de l'objet
2. Créer un nouveau sketch
3. Créer une géométrie de référence liée au bras de la face
4. Créer un cercle contraint au centre de l'arc de référence
5. Renseigner le rayon à 3 mm
6. Faire traverser le sketch à travers la pièce encoure

Au lieu de créer un cercle pour chaque trou dans l'esquisse, Utiliser le concept de  *'Reprodution du motif'* . Ces outils fonctionnent en reproduisant une caractéristique de la pièce déjà créée à reproduire dans un arrangement linéaire ou circulaire.
Utiliser une combinaison de fonctions de motif  *'Linear' 'et'*  Polar  *pour simuler la pièce finale.*

1. Sélectionner la cavité (Pocket) qui vient juste d'être crée dans la **Vue en arborescence**
2. Sélectionner ![](/images/PartDesign_MultiTransform.svg) [Transformation multiple](/PartDesign_MultiTransform/fr "PartDesign MultiTransform/fr")

Dans le Combo View, les  Transformations  *désirées sont présentées.*

Noter que dans le menu  *'MultiTransform parameters'* , FreeCAD a identifié le Pocket comme  *'Original'*  et une deuxième case demande de  *'Cliquer avec le bouton droit'*  pour introduire les caractéristiques du motif.

1. Faire un clic droit sur la case
2. Sélectionner  *'Ajouter un motif linéaire'*
3. Régler la  *'Direction'*  sur  *'Vertical Sketch Axis'*
4. Définir la longueur à 10 mm
5. Laisser les occurrences à 2
6. Cliquer sur OK
7. Cliquer avec le bouton droit de la souris sur la boîte pour ajouter un  *'Motif Polaire'* . Notez que la vue 3D a maintenant ajouté le motif linéaire.
8. Définir les occurrences sur 5
9. Cliquer deux fois sur OK

Après avoir terminé cette tâche, le résultat suivant apparait.

![](/images/PartDesign_multitransform_exercise.png)

Sinon, rééditer l'opération MultiTransform en double-cliquant dessus dans l'arborescence.

Vérifier les deux fonctions de motif pour détecter les modifications nécessaires, telles que l'axe  et si la  *'Direction'*  doit être inversée.

C'est maintenant terminé la routine de base pour le [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_tutorial/fr&oldid=1471518>"