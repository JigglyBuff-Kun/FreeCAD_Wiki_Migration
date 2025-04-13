---
title: Std Basculer en mode navigation
---
|  |
| --- |
| Std Basculer en mode navigation |
| Emplacement du menu |
| Affichage → Basculer entre le mode navigation et le mode édition |
| Ateliers |
| Tous |
| Raccourci par défaut |
| Echap |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande **Std Basculer en mode navigation** est destinée à certaines opérations d'inspection et à certaines opérations d'édition de maillage interactif. Ces opérations sont assez "coûteuses" et reposent donc sur un mode d'édition au cours duquel la plupart des options de navigation sont désactivées. Avec cette commande, il est possible de passer temporairement du mode édition au mode navigation et après avoir changé la [vue 3D](/3D_view/fr "3D view/fr") de revenir en mode édition.

Ne pas confondre cette commande avec la commande [Std Mode édition](/Std_Edit/fr "Std Edit/fr").

## Utilisation

*Un exemple pour illustrer la commande :*

1. Basculez vers l'![](/images/Workbench_Mesh.svg) [atelier Mesh](/Mesh_Workbench/fr "Mesh Workbench/fr").
2. Appuyez sur le bouton ![](/images/Mesh_BuildRegularSolid.svg) [Solide régulier...](/Mesh_BuildRegularSolid/fr "Mesh BuildRegularSolid/fr").
3. La fenêtre de dialogue **Solide régulier** s'ouvre.
4. Choisissez **Ellipsoïde** dans la liste déroulante.
5. Appuyez sur le bouton Créer.
6. Appuyez sur le bouton Fermer pour fermer la fenêtre de dialogue.
7. Sélectionnez l'objet maillé.
8. Appuyez sur le bouton ![](/images/Mesh_PolyCut.svg) [Couper le maillage](/Mesh_PolyCut/fr "Mesh PolyCut/fr").
9. Sélectionnez des points dans la vue 3D pour définir un polygone qui chevauche la moitié du maillage.
10. Faites un clic droit et choisissez **Intérieur** dans le menu contextuel.
11. Le résultat est un maillage ouvert avec une frontière.
12. Assurez-vous que le maillage est toujours sélectionné.
13. Appuyez sur le bouton ![](/images/Mesh_AddFacet.svg) [Ajouter un triangle](/Mesh_AddFacet/fr "Mesh AddFacet/fr") pour lancer la commande [Mesh Ajouter un triangle](/Mesh_AddFacet/fr "Mesh AddFacet/fr").
14. Si vous survolez un point limite, un marqueur jaune apparaît et un clic gauche le sélectionne.
15. Sélectionnez éventuellement deux autres points et ajoutez un triangle au maillage.
16. Vous êtes maintenant en mode édition et il est impossible de faire pivoter ou de déplacer la vue 3D, bien que le zoom fonctionne toujours.
17. Lancez la commande **Std Bascule en mode navigation** pour passer en mode navigation :
    * Sélectionnez l'option **Affichage → ![](/images/Std_ToggleNavigation.svg) Basculer entre le mode navigation et le mode édition** du menu.
    * Ou utilisez le raccourci clavier : Échap.
18. Vous pouvez maintenant faire pivoter et déplacer la vue 3D, mais vous ne pouvez pas choisir de points pour ajouter des triangles.
19. Lancez la commande **Std Bascule de mode navigation** pour revenir en mode édition :
    * Sélectionnez l'option **Affichage → ![](/images/Std_ToggleNavigation.svg) Basculer entre le mode navigation et le mode édition** du menu.
    * Ou utilisez le raccourci clavier : Échap.
20. Vous pouvez à nouveau sélectionner des points et ajouter des triangles.
21. Cliquez avec le bouton droit dans la vue 3D et choisissez **Terminer** dans le menu contextuel pour terminer la commande [Mesh Ajouter un triangle](/Mesh_AddFacet/fr "Mesh AddFacet/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_ToggleNavigation/fr&oldid=1496074>"