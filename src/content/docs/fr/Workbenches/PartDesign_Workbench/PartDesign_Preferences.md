---
title: PartDesign Préférences
---
## Introduction

L'![](/images/Workbench_PartDesign.svg) [atelier PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") et l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr") utilisent les mêmes préférences. Elles se trouvent dans l'[éditeur de préférences](/Preferences_Editor/fr "Preferences Editor/fr"). Dans le menu, sélectionnez **Édition → Préférences...** puis **![](/images/Preferences-part_design.svg) Part/PartDesign**.Ce groupe n'est disponible que si l'un des ateliers a été chargé dans la session FreeCAD en cours.

Certaines préférences avancées ne peuvent être modifiées que dans l'[éditeur de paramètres](/Std_DlgParameter/fr "Std DlgParameter/fr"). Voir [Réglage fin](/Fine-tuning/fr#Atelier_PartDesign "Fine-tuning/fr").

Cette page a été mise à jour pour la version 1.0.

## Préférences disponibles

Il y a trois pages : [Général](#Général), [Vue des formes](#Vue_des_formes) et [Apparence des formes](#Apparence_des_formes).

### Général

![](/images/Preferences_PartDesign_Page_General.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Vérifier les modèles automatiquement après une opération booléenne** | Si coché, le [B-Rep](https://fr.wikipedia.org/wiki/B-Rep) du modèle est [validé](/Part_CheckGeometry/fr "Part CheckGeometry/fr") après les [opérations booléennes](/Part_Boolean/fr "Part Boolean/fr"). |
| **Affiner les modèles automatiquement après une opération booléenne** | Si coché, le modèle est [affiné](/Part_RefineShape/fr "Part RefineShape/fr") après les [opérations booléennes](/Part_Boolean/fr "Part Boolean/fr"). |
| **Affiner automatiquement le modèle après une opération d'esquisse** | Si coché, le modèle est [affiné](/Part_RefineShape/fr "Part RefineShape/fr") après les modifications apportées aux esquisses sources des objets. |
| **Autoriser plusieurs solides dans un corps de PartDesign par défaut (expérimental)** | Si la case est cochée, les corps peuvent avoir plusieurs solides. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |

### Vue des formes

![](/images/Preferences_PartDesign_Page_Shape_view.png)

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **L'écart maximal suivant la boîte englobant le modèle** | La [déviation linéaire](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) maximale des objets [tesselés](#Tesselation) par rapport à leur surface. |
| **Déviation angulaire maximale** | La [déviation angulaire](https://www.opencascade.com/doc/occt-7.3.0/overview/html/occt_user_guides__modeling_algos.html#occt_modalg_11_2) maximale d'une section d'un objet [tesselé](#Tesselation) à la section suivante. |

### Apparence des formes

![](/images/Preferences_PartDesign_Page_Shape_appearance.png)

Une explication des couleurs peut être trouvée [ici](/Part_ColorPerFace/fr#Utilisation "Part ColorPerFace/fr").

Sur cette page, vous pouvez spécifier les éléments suivants :

| Nom | Description |
| --- | --- |
| **Couleur des formes** | La couleur diffuse pour les nouvelles formes. Si l'option **Aléatoire** est définie, une couleur aléatoire est utilisée à la place. |
| **Couleur ambiante des formes** | La couleur ambiante pour les nouvelles formes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Couleur émissive des formes** | La couleur émissive pour les nouvelles formes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Couleur spéculaire des formes** | La couleur spéculaire pour les nouvelles formes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Transparence des formes** | La transparence pour les nouvelles formes. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") |
| **Brillance des formes** | La brillance des nouvelles formes. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Couleur des traits** | La couleur des lignes pour les nouvelles formes. |
| **Largeur des lignes** | La largeur de ligne pour les nouvelles formes. |
| **Couleurs des sommets** | La couleur des nouveaux [sommets](/Glossary/fr#Vertex "Glossary/fr"). |
| **Taille des sommets** | La taille des nouveaux [sommets](/Glossary/fr#Vertex "Glossary/fr"). |
| **Couleur des boîtes englobantes** | La couleur des [boîtes englobantes](/Property_editor/fr#Vue "Property editor/fr") dans la vue 3D. |
| **Taille de la police des boîtes englobantes** | La taille de la police des [boîtes englobantes](/Property_editor/fr#Vue "Property editor/fr") dans la vue 3D. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") |
| **Rendu des deux côtés** | Si cette case cochée, la couleur du côté intérieur des faces sera la même que celle du côté extérieur. Si cette case n'est pas cochée, la [couleur du rétroéclairage](/Preferences_Editor/fr#Vue_3D "Preferences Editor/fr"), si elle est activée ou le noir sera utilisé à la place. |
| **Couleur du texte** | La couleur du texte pour les annotations du document. Actuellement, ces annotations ne peuvent être ajoutées qu'en utilisant la [console Python](/Python_console/fr "Python console/fr") :  `obj = App.ActiveDocument.addObject("App::Annotation", "Label")` |

## Tesselation

Afin d'afficher efficacement un objet, sa surface est [téssélée](https://en.wikipedia.org/wiki/Tessellation_(computer_graphics)), elle est affichée avec quelques petites déviations par rapport à sa surface réelle. Cela s'applique non seulement aux modèles PartDesign, mais aussi à d'autres objets dans FreeCAD.

La limite inférieure pour le tesselation est de 0,01%. Si vous voulez vraiment passer plus de temps, vous pouvez réduire encore la limite inférieure en ouvrant l'[éditeur de propriétés](/Std_DlgParameter/fr "Std DlgParameter/fr").

Dans l'éditeur de paramètres, naviguez vers **BaseApp → Preferences → Mod → Part**, faites un clic droit sur **MeshDeviation** et choisissez **Changer la valeur** dans le menu contextuel. Réglez la valeur sur la tessellation minimale de votre choix. N'oubliez pas que la valeur est en %, c'est-à-dire que pour une valeur de 0,005%, vous devez entrer `0.00005`. La plus petite valeur possible est `1e-7`. Notez que dans le [réglage des préférences](/Preferences_Editor/fr "Preferences Editor/fr"), vous verrez toujours 0,01% même si vous avez défini une valeur inférieure.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Preferences/fr&oldid=1571310>"