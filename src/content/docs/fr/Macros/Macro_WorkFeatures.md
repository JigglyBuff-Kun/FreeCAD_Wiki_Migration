---
title: WorkFeatures
---

|                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Macro WorkFeatures                                                                                                                                                                                                                                                                                            |
| Description                                                                                                                                                                                                                                                                                                   |
| Utilitaire de création de Points, d'Axes de Cercles et de Plans et beaucoup d'autres fonctions. Version macro : 2019-05 Date dernière modification : 2019-05-01 Version FreeCAD : All Téléchargement : [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png) Auteur: rentlau_64 |
| Auteur                                                                                                                                                                                                                                                                                                        |
| [rentlau_64](/index.php?title=User:Rentlau_64&action=edit&redlink=1 "User:Rentlau 64 (page does not exist)")                                                                                                                                                                                                  |
| Téléchargement                                                                                                                                                                                                                                                                                                |
| [Icône de la barre d'outils](https://www.freecadweb.org/wiki/images/9/9d/WF_wf.png)                                                                                                                                                                                                                           |
| Liens                                                                                                                                                                                                                                                                                                         |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                              |
| Version Macro                                                                                                                                                                                                                                                                                                 |
| 2019-05                                                                                                                                                                                                                                                                                                       |
| Dernière modification                                                                                                                                                                                                                                                                                         |
| 2019-05-01                                                                                                                                                                                                                                                                                                    |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                            |
| All                                                                                                                                                                                                                                                                                                           |
| Raccourci clavier                                                                                                                                                                                                                                                                                             |
| _None_                                                                                                                                                                                                                                                                                                        |
| Voir aussi                                                                                                                                                                                                                                                                                                    |
| _None_                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                               |

## Description

Outil utilitaire pour créer :

- Des points (points milieu, centre d'un cercle, centre d'un ou plusieurs objets...),
- Des axes (à partir de 2 points, normale d'un plan...),
- Plans (à partir de 3 points, d'un axe et d'un point...).
- Et bien d'autres fonctionnalités utiles pour faciliter la création de votre projet. Cet utilitaire est dans la vue combinée sous l'onglet "Work Features".

![](/images/WF.png)

WorkFeatures

## Utilisation

**Work Features**

- ![Après l'activation de Work Features, l'outil créé un nouvel onglet dans la vue combinée.](/images/Macro_WorkFeatures_01.png)

  Après l'activation de Work Features, l'outil créé un nouvel onglet dans la vue combinée.

- ![La création de work features ajoute des éléments correspondants dans l'arborescence Modèle, classés sous un groupe « WorkFeatures ». Les axes, point et plans d'origine sont automatiquement cachés.](/images/Macro_WorkFeatures_07.png)

  La création de work features ajoute des éléments correspondants dans l'arborescence Modèle, classés sous un groupe « WorkFeatures ». Les axes, point et plans d'origine sont automatiquement cachés.

- [![Les commandes usuelles permettent de basculer la visibilité des fonctions créées. Par ex. sélectionnez votre objet et appuyez sur Space ou faites un clic droit et choisissez "Afficher la sélection" ou "Masquer la sélection".](/images/Macro_WorkFeatures_08.png)](/File:Macro_WorkFeatures_08.png 'Les commandes usuelles permettent de basculer la visibilité des fonctions créées. Par ex. sélectionnez votre objet et appuyez sur Space ou faites un clic droit et choisissez "Afficher la sélection" ou "Masquer la sélection ".')

  Les commandes usuelles permettent de basculer la visibilité des fonctions créées.  
  Par ex. sélectionnez votre objet et appuyez sur **Space** ou faites un clic droit et choisissez "**Afficher la sélection**" ou "**Masquer la sélection**".

**Onglet Origin**

|     |                                                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Origin** _ Origin : Créer à l'origine : un point et l'axe X, Y ou Z ou les plans XZ, XY et YZ. Les axes, point et plans d'origine sont automatiquement cachés. |

**Onglet Points**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     | _ **Onglet Points** _ Object(s) Center : Créé un point au centre des objets sélectionnés. _ Lines(s) Center : Créé un point au milieu de chaque ligne sélectionnée. _ Line(s) Extrema : Créé un point aux extrémités de chaque ligne sélectionnée. _ Circle(s) Center : Crée un point au centre du cercle(s) ou d'arc(s) sélectionné(s). _ Point along Line : Créé un point sur la ligne à une certaine distance du point d'extrémité sélectionné. _ **Case de saisie** : saisir une valeur de déplacement. _ Face(s) Center : Créé un point au centre de chacune des faces sélectionnées. _ Point (Line,Face) : Créé un point à l'intersection de la ligne et du plan sélectionnés. _ Point (Line,Point) : Crée une projection d'un point sur un point ou un point symétrique. _ Point (Point,Face) : Projeter un point sur une face. _ Object(s) Base Point : Créer un point de base sur tous les objets sélectionnés. |

**Onglet Axis**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Axis** _ Object(s) X, Y, Z Axes : Créé 3 axes au centre de tous les objets sélectionnés. _ Two Points Axis : Créé un axe traversant deux points. _ **Case de saisie** : saisir la valeur de déplacement. _ Cylinder(s) Axis : Créé un axe au centre d'un cylindre. _ Axis (Line,Line) : Créé un axe entre deux axes. _ Plane(s) Axes : Créé deux axes perpendiculaires au centre d'un plan. _ Axis (Point,Axis) : Créé un axe parallèle à un autre axe et croisant un point. _ Axis (Axis,Point) : Créé un axe perpendiculaire à un autre axe et croisant un point. _ **Case de saisie** : saisir la valeur de déplacement. _ Axis (Plane,Axis) : Projette un axe sur un plan. _ Axis (Plane,Plane) : Créé un axe à l'intersection de deux plans. \* Object(s) Base Axis : Créé 3 axes à l'emplacement de base des objets sélectionnés. |

**Onglet Plane**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Plane** _ Three Points Plane : Créé un plan croisant 3 points. _ Plane (Point, Axis) : Créé un plan croisant une ligne et un point. Le point ne doit PAS appartenir à la ligne ! _ Plane (Point, \_Axis) : Créé un plan perpendiculaire à une ligne et croisant un point. _ Plane (Point, Plane) : Créé un plan croisant un point et parallèle à un plan. _ **Case de saisie** : saisir la valeur de déplacement. _ Plane (Plane, Axis) : Créé un plan croisant une ligne et perpendiculaire à un plan. _ **Case de saisie** : saisir la valeur de déplacement. \* Object(s) Center Planes : Créé 3 plans (XY, XZ et YZ) au centre des objets sélectionnés. |

**Onglet Objects**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Objects** _ Bounding Box(es) : Créé des boîtes englobantes autour de chacun des objets sélectionnés. _ Bounding Box : Créé une boîte englobante autour de chacun des objets sélectionnés. _ Cylinder : Sélectionnez d'abord un axe et un point. Définissez le diamètre et la longueur si nécessaire. Cliquez ensuite sur le bouton ... Il va créer un cylindre aligné sur l'axe sélectionné, avec une des extrémités au point sélectionné. \* Cube : Sélectionnez d'abord un axe et un point. Définissez les dimensions si nécessaire. Cliquez ensuite sur le bouton ... Il va créer un Cube aligné sur l'axe sélectionné. avec l'une des extrémités au point sélectionné. |

**Onglet Views**

|     |                                                                                                                                                                                                                                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Views** _ Align to ... : Définit la vue en cours perpendiculairement à la face sélectionnée ou alignée sur l'axe sélectionné, ou alignée sur deux points. Cliquez de nouveau sur la même sélection inversera la direction. |

**Onglet Modif.**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Modif. Cutting** _ Select Object : Après avoir sélectionné votre objet et tout d'abord un objet à couper, cliquez sur le bouton 'Select Object', + Le nom de l'objet sélectionné est affiché _ Select Cut Line : Deuxièmement, une ligne de coupe et cliquez sur le bouton 'Select Cut Line', + Le nom de la ligne sélectionnée est affiché _ Select Ref. Plane : Enfin, un plan de référence et cliquez sur 'Select Ref. Plane'! + Le nom du plan sélectionné est affiché _ **Angle** : Angle de coupe (Defaut: 0.0) _ **Thickness** : Épaisseur de la coupe (Defaut : 0.0) _ Reset : Réinitialiser les valeurs _ Apply : Appliquer les valeurs |

**Onglet Check.**

|     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | _ **Onglet Check.** _ are Parallel ? : Vérifie si deux faces ou deux arêtes sont parallèles: + - _ Sélectionnez les 2 faces/plans ou 2 arêtes/lignes et cliquez sur ce bouton _ are Perpendicular ? : Vérifie si deux faces ou deux arêtes sont perpendiculaires: + Sélectionnez les 2 faces/plans ou 2 arêtes/lignes et cliquez sur ce bouton _ are Coplanar ? : Vérifie si deux faces ou deux arêtes sont coplanaires: + Sélectionnez les 2 faces/plans ou 2 arêtes/lignes et cliquez sur ce bouton _ Distance Clearance ? : Vérifie la distance de dégagement de deux objets: + Mesures rapides entre des faces parallèles et des objets placés de manière similaire Sélectionnez les 2 objets et cliquez sur ce bouton _ Angle ? : Calcule l'angle à partir de 2 objets: + Mesure d'angle entre deux bords ou deux plans + Sélectionnez les 2 bords et cliquez sur ce bouton + ou: Sélectionnez les 2 plans et cliquez sur ce bouton + ou: Sélectionnez un bord et un plan et cliquez sur ce bouton _ Distance ? : Vérifie la distance de deux points: + Mesure des distances et valeurs Delta (sur les axes principaux) entre deux points + Sélectionnez les 2 points et cliquez sur ce bouton _ Length ? : Vérifie la longueur de la ligne: + Mesure de longueur et valeurs Delta (sur les axes principaux) pour une ligne + Sélectionnez la ligne et cliquez sur ce bouton _ Area ? : Vérifie la surface: + Mesure de surface pour un avion ou un ensemble d'avions. + Sélectionnez un ou plusieurs avions et cliquez sur ce bouton \* View : Détecte la position de la caméra. La valeur renvoyée est la valeur fournie par la fonction getCameraOrientation(). |

## Script

Après téléchargement du fichier compressé ici

Icône de la barre d'outils ![](/images/WF_wf.png)

**[Téléchargez la dernière version sur GitHub](https://github.com/Rentlau/WorkFeature)** ,
Vous devez décompresser l'archive zip et copier tous les fichiers dans votre répertoire Macro.

**PS : cette macro est toujours en développement vérifiez de temps en temps pour vous assurer d'avoir la dernière version.**

![Téléchargez dans GitHub cliquez sur le bouton Télécharger ZIP](/images/Macro_Work_Features_GitHub_00.png)

Téléchargez dans GitHub cliquez sur le bouton Télécharger ZIP

Utilisez le ![](/images/AddonManager.svg) [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr"), **Menu → Outils → Gestionnaire des extensions** pour installer facilement WorkFeatures et d'autres macros intéressantes.

Ici le tutoriel [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr").

## Exemples

### Outils de coupe

**Réglage des outils de coupe:** sélectionnez un objet à couper, une ligne de coupe et un plan de référence.
L'angle est un angle entre le plan de coupe et le plan de référence.
L'épaisseur est la largeur du plan de coupe.

- ![Ici, nous avons sélectionné un cylindre.](/images/CuttingSettings.jpg)

  Ici, nous avons sélectionné un cylindre.

- ![Le résultat sera: le cylindre est alors coupé en deux parties!](/images/CuttingResult.jpg)

  Le résultat sera: le cylindre est alors coupé en deux parties!

**Exemple de pratique**

- ![Sélectionnez l'onglet Plane.](/images/Macro_Work_Features_Cutting_01.png)

  Sélectionnez l'onglet **Plane**.

- [![Et cliquez sur le bouton Plane button (vous pouvez modifier les dimensions du plan (Default: 10 x 10)).](/images/Macro_Work_Features_Cutting_02.png)](/File:Macro_Work_Features_Cutting_02.png  "Et cliquez sur le bouton Plane button (vous pouvez modifier les dimensions du plan (Default: 10 x 10)).")

  Et cliquez sur le bouton Plane button  
   (vous pouvez modifier les dimensions du plan (**Default: 10 x 10**)).

- [![Cliquez sur votre objet de travail. Le plan est créé tangent à l'objet (ici un cylindre).](/images/Macro_Work_Features_Cutting_03.png)](/File:Macro_Work_Features_Cutting_03.png  "Cliquez sur votre objet de travail. Le plan est créé tangent à l'objet (ici un cylindre).")

  Cliquez sur votre objet de travail. Le plan est créé tangent à l'objet (ici un cylindre).

- [![Cliquez sur l'onglet Modif et 1: cliquez sur votre objet pour le couper. 2:cliquez sur le bouton Select object (ici le cylindre puis le nom sont affichés).](/images/Macro_Work_Features_Cutting_04.png)](/File:Macro_Work_Features_Cutting_04.png  "Cliquez sur l'onglet Modif et 1: cliquez sur votre objet pour le couper. 2:cliquez sur le bouton Select object (ici le cylindre puis le nom sont affichés).")

  Cliquez sur l'onglet Modif et  
  **1:** cliquez sur votre objet pour le couper.  
  **2:**cliquez sur le bouton Select object (ici le cylindre puis le nom sont affichés).

- [![3: Cliquez sur votre ligne pour couper votre cylindre. 4: Cliquez sur Select Cut Line (puis le nom est affiché).](/images/Macro_Work_Features_Cutting_05.png)](/File:Macro_Work_Features_Cutting_05.png  "3: Cliquez sur votre ligne pour couper votre cylindre. 4: Cliquez sur Select Cut Line (puis le nom est affiché).")

  **3:** Cliquez sur votre ligne pour couper votre cylindre.  
  **4:** Cliquez sur Select Cut Line (puis le nom est affiché).

- [![5: Cliquez sur le plan de travail. 6: Cliquez sur le bouton Select Ref. Plan (puis le nom est affiché).](/images/Macro_Work_Features_Cutting_06.png)](/File:Macro_Work_Features_Cutting_06.png  "5: Cliquez sur le plan de travail. 6: Cliquez sur le bouton Select Ref. Plan (puis le nom est affiché).")

  **5:** Cliquez sur le plan de travail.  
  **6:** Cliquez sur le bouton Select Ref. Plan (puis le nom est affiché).

- ![Cliquez sur le bouton Apply.](/images/Macro_Work_Features_Cutting_07.png)

  Cliquez sur le bouton Apply.

- ![L'opération est terminée et toutes les opérations sont conservées.](/images/Macro_Work_Features_Cutting_08.png)

  L'opération est terminée et toutes les opérations sont conservées.

- ![Vous pouvez également indiquer l'angle et l'épaisseur de votre coupe.](/images/Macro_Work_Features_Cutting_09.png)

  Vous pouvez également indiquer l'angle et l'épaisseur de votre coupe.

### Contrainte concentrique entre deux parties non cylindriques

- ![](/images/Concentric_Constraint_Between_two_non_cylindrical_parts.gif)

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Comment contraindre deux parties non cylindriques. **1:** L'objet d'origine à modifier. **2:** L'objectif est de centrer deux tubes carrés. **3:** Sélectionnez le premier objet et dans le menu **Axe 1/2** cliquez sur les "Objet(s)" Axes X, Y, Z. **4:** Même procédure pour le deuxième objet. **5:** Cliquez sur le bouton **Style de représentation** et sur "Wireframe", **6:** Pour clarifier la vue. **7:** Sélectionnez l'objet à centrer et son axe créé. **8:** Cliquez sur le bouton **Draft Déplace...** **9:** Et sélectionnez le premier axe à déplacer sur le deuxième axe. **10:**Restaurer la vue normale avec le bouton **Style de représentation** et sur **Comme actuellement**. **11:**Cliquez sur le premier objet déplacé et corrigez la position avec "Vue combinée> Données> Placement". **12:**Sélectionnez l'objet créé par WorkFeature (axe du conteneur) et supprimez-le. **13:**L'objet est déplacé. **14:**Le résultat. |

### Rotation d'objet

- ![Click the image for see the animation.](/images/WorkFeature_Rotation_Object.gif)

  Click the image for see the animation.

### Plan tangent sur une face au point cliqué

- ![Click the image for see the animation. Click the object, click the Face tangent button, click the point on face for create the plane.](/images/Macro_Work_Features_PlaneFaceTangent.gif)

  Click the image for see the animation.  
  Click the object, click the Face tangent button, click the point on face for create the plane.

## Liens

La discussion sur le forum (en anglais) [MACRO:Work Feature 2014_12](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)

## Ateliers externes

Les ateliers FreeCAD sont faciles à programmer en [Python](/Python/fr "Python/fr"), il y a beaucoup de gens qui développent des ateliers supplémentaires en dehors des développeurs principaux de FreeCAD.

La page [ateliers externes](/External_workbenches/fr "External workbenches/fr") contient des informations et des tutoriels sur certains d’entre eux et le projet [FreeCAD Addons](https://github.com/FreeCAD/FreeCAD-addons/) vise à les rassembler et à les rendre facilement installables depuis FreeCAD.

De nouveaux ateliers sont en développement, tenez vous au courant!

## Dernière version

**Icônes:**

![](/images/WF_wf.png)

![](/images/WF_centerObjectsPlanes.png)

**Sources:**

Sur github: [/github.com/Rentlau/WorkFeature-WB.git](https://github.com/Rentlau/WorkFeature-WB.git)

Date 2019-05-01 (YYYY-MM-DD)

20/01/2019

08/03/2015 : [WF_2015_03_08](http://github.com/Rentlau/WorkFeature.git)

- Coupe circulaire ajoutée
- Sont parallèles, perpendiculaires, coplanaires ajoutés

17/02/2015 : [WF_2015_02_17](https://github.com/Rentlau/WorkFeature.git)

- Onglet Cercle et Ellipse ajoutés
- Onglet de coupe ajouté

25/01/2015 : [WF_2015_01_25.zip](http://forum.freecadweb.org/download/file.php?id=10937&sid=b770dec5362ae499adb4173547ef445f) Ajout objet cube cylindre

18/01/2015 : [WF_2015_01_18.tar.gz](http://forum.freecadweb.org/download/file.php?id=10799) Ajout plan et face pour voir

28/12/2014 : [WorkFeatures_2014_12_28.zip](http://forum.freecadweb.org/download/file.php?id=10347)

27/12/2014 : [WF_2014_12_27.zip](http://forum.freecadweb.org/download/file.php?id=10325)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_WorkFeatures/fr&oldid=1210991>"
