---
title: Drawing Projection de forme
---
|  |
| --- |
| Drawing Projection de forme |
| Emplacement du menu |
| Drawing → Projeter la forme... |
| Ateliers |
| [Drawing](/Drawing_Workbench/fr "Drawing Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cet outil crée une projection de l'objet sélectionné (Source) dans la vue 3D.

![](/images/ProjectShape1_it.png)

## Utilisation

|  |  |
| --- | --- |
|  | 1. Sélectionnez un objet dans la vue 3D ou dans l'arbre de projet 2. Dans le menu Dessin, cliquez sur **Projeter la forme** 3. Définir les options souhaitées dans le dialogue de tâche 4. Clic OK   Une objet de projection (**objectname\_proj**) sera ajouté au projet. Pour les projections ultérieures du même objet source, l'objet de projection sera nommé **objectname\_projXXX**, où **xxx** est un nombre à trois chiffres. |

### Modifier une projection existante

|  |  |
| --- | --- |
|  | ``` Les paramètres de projection peuvent être modifiés dans l'éditeur de Propriété.  ```   Base   * Données**Label**: * Données**Placement**:   Projection   * Données**Direction**: définit la direction de la projection. C'est le vecteur normal du plan de projection. Par exemple, pour projeter l'objet sur le plan xy, utiliser (0,0,1). Pour inverser la projection, utilisez des valeurs négatives. * Données**HCompound**: * Données**Ligne Iso HCompound**: * Données**Ligne Iso VCompound**: * Données**Sortie ligne HCompound**: * Données**Sortie ligne VCompound**: * Données**Rg1 Ligne HCompound**: * Données**Rg1 Ligne VCompound**: * Données**Rg NLigne HCompound**: * Données**Rg NLigne VCompound**: * Données**Source**: l'objet en cours de projection * Données**VCompound**: |

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_ProjectShape/fr&oldid=1536794>"