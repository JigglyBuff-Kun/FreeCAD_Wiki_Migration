---
title: Mesh Coupes
---
|  |
| --- |
| Mesh Coupes |
| Emplacement du menu |
| Maillages → Couper → Coupes... |
| Ateliers |
| [Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Mesh Section](/Mesh_SectionByPlane/fr "Mesh SectionByPlane/fr") |
|  |

## Description

La commande **Coupes** crée plusieurs coupes transversales sur les objets maillés. Les coupes transversales sont prises parallèlement à l'un des principaux plans globaux (XY, XZ ou YZ). Pour chaque ensemble de sections transversales, une seule [Part Feature](/Part_Feature/fr "Part Feature/fr") est créée.

## Utilisation

1. Sélectionnez un ou plusieurs objets maillés.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Mesh_CrossSections.svg) Coupes
   * Sélectionnez l'option **Maillages → Couper → ![](/images/Mesh_CrossSections.svg) Coupes...** dans le menu.
3. Le panneau des tâches **Coupes** s'ouvre.
4. Les plans qui seront utilisés pour créer les coupes sont indiqués dans la [vue 3D](/3D_view/fr "3D view/fr") et seront mis à jour en fonction des entrées du panneau de tâches.
5. Sélectionnez le **Plan guide** :
   * **XY**
   * **XZ**
   * **YZ**
6. Spécifiez la **Position** du plan de guidage à partir de l'origine. La position par défaut est basée sur le centre de la boîte englobante des objets maillés sélectionnés. Choisir un autre **Plan guide** ou activer la case à cocher **Sections** réinitialisera **Positon** à cette valeur par défaut.
7. Cochez éventuellement la case **Sections** pour créer plusieurs sections transversales :
   * **Des deux côtés** : si coché, des coupes sont créées des deux côtés du plan de guidage.
   * **Nombre** : nombre de sections transversales.
   * **Distance** : distance entre les sections transversales. La valeur par défaut est basée sur les dimensions du cadre de sélection, sur l'option **Des deux côtés** et sur la valeur **Nombre**. La modification de la valeur **Nombre** réinitialisera **Distance** à cette valeur par défaut. Changer l'option **Des deux côtés** recalculera la **Distance** (`*2.0` ou `*0.5`). Notez que la zone de saisie peut être grisée mais la valeur peut en fait être modifiée.
   * Cochez éventuellement la case **Raccorder les arêtes si la distance est inférieure à** et spécifiez une valeur.
8. Appuyez sur le bouton Appliquer pour créer l'ensemble des sections transversales.
9. Modifiez un ou plusieurs paramètres et créez des ensembles supplémentaires de sections transversales.
10. Appuyez sur le bouton OK ou sur le bouton Annuler pour fermer le panneau des tâches et terminer la commande.

## Propriétés

Voir: [Part Feature](/Part_Feature/fr "Part Feature/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_CrossSections/fr&oldid=1333644>"