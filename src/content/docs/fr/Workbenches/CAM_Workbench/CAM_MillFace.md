---
title: CAM Surfaçage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Surfaçage |
| Emplacement du menu |
| CAM → Surfacer |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_MillFace.svg) Surfaçage crée une trajectoire pour effectuer une opération de surfaçage sur une surface horizontale. Cette opération est généralement utilisée :

* pour lisser la surface d'un brut,
* pour fraiser une ou plusieurs faces sélectionnées à la profondeur souhaitée en vue d'effectuer des opérations de dégagement ultérieures dans les limites des régions concernées par cette opération,
* ou pour appliquer une surface de finition sur la ou les faces sélectionnées.

Cette opération contient une propriété Données**BoundaryShape** qui permet de modifier la zone de sélection en fonction de la ou des faces sélectionnées.

![Exemple de surfaçage utilisée pour préparer la surface du brut pour une opération de dégagement ultérieure.](/images/MillFace_Sample.png)

Exemple de surfaçage utilisée pour préparer la surface du brut pour une opération de dégagement ultérieure.

## Utilisation

1. Sélectionnez une ou plusieurs faces à surfacer. **Remarque :** si les faces sélectionnées ont des hauteurs différentes, elles seront toutes fraisées à la profondeur finale.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_MillFace.svg) Surfacer.
   * Sélectionnez l'option **CAM → ![](/images/CAM_MillFace.svg) Surfacer** du menu.
3. Sélectionnez le bon paramètre Données**BoundaryShape** pour modifier la zone de fraisage en fonction de la ou des faces sélectionnées comme **Géométrie de base**.
4. Ajustez les autres propriétés selon vos besoins. Elles sont énumérées ci-dessous.

## Avertissements

* L'utilisation de cette fonction sur un plan incliné peut produire des résultats inattendus : elle génèrera toujours un parcours pour couper une surface horizontale. L'étendue de la coupe sera la projection verticale du plan incliné, effectuée à une hauteur correspondante au point le plus bas de ce plan.

* Étant donné que les outils de CAM fonctionnent uniquement sur la géométrie des arêtes/faces sélectionnées et ne se rapportent pas au reste du modèle 3D, les parcours ne dépasseront pas les limites du plan choisi, même s'il est entouré de brut inutilisé ou d'air. Cela laissera des coins non usinés. Ceux-ci peuvent parfois être supprimés avec l'un des outils de rectification disponibles dans le menu *CAM*.

## Surfaçage de face verticale

* Cet outil ne fonctionnera pas sur un **plan vertical** ou une surface verticale non plane. Les opérations verticales peuvent être réalisées en utilisant l'outil [Profilage des faces](/CAM_Profile/fr "CAM Profile/fr") ou l'outil [Profilage des arêtes](/CAM_Profile/fr "CAM Profile/fr"). Ceux-ci nécessiteront la sélection d'une face ou d'une boucle fermée d'arêtes *incluant le bord supérieur ou inférieur de la surface verticale souhaitée*. L'extension du parcours peut alors être réduite à l'aide de l'outil [Limitation de zones](/CAM_DressupPathBoundary/fr "CAM DressupPathBoundary/fr") qui se trouve dans le menu *CAM*. Avec l'outil de finition, sélectionnez l'option *Créer une boîte* et réduisez la taille pour limiter la portée du parcours du contour. Ces réglages ne permettent toutefois pas de déplacer l'origine de la zone de contour. Cela doit être fait en ajustant les paramètres de placement dans la [vue en arborescence](/Tree_view/fr "Tree view/fr").
* Cela fonctionnera sur des surfaces composées telles que plusieurs plans verticaux ou surfaces cylindriques assemblées reliées entre elles, à condition qu'elles forment une surface continue.

## Options

Vide

## Propriétés

***Remarque*** : les noms de certaines propriétés de cette liste diffèrent un peu des mêmes paramètres que ceux utilisés dans l'éditeur de fenêtre de tâche.

### Données

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle de la Tâche de CAM selon les besoins.

* Données**Placement** : placement global [position et rotation] de l'objet - par rapport à l'origine (ou l'origine du conteneur de l'objet parent)
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis
  + Données**Axis** : axe (un ou plusieurs) autour duquel l'objet doit tourner, défini dans les sous-propriétés : X, Y, Z.
    - Données**X** : valeur de l'axe X
    - Données**Y** : valeur de l'axe Y
    - Données**Z** : valeur de l'axe Z
  + Données**Position** : Position de l'objet, définie dans les sous-propriétés : X, Y, Z - par rapport à l'origine (ou l'origine du conteneur de l'objet parent)
    - Données**X** : valeur de la distance en X
    - Données**Y** : valeur de la distance en Y
    - Données**Z** : valeur de la distance en Z
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8)

Depth

* Données**Clearance Height** : hauteur nécessaire pour contourner les brides et les obstructions.
* Données**Final Depth** : profondeur finale de l'outil - valeur la plus basse de Z.
* Données**Finish Depth** : maximum de matériau retiré lors du passage final.
* Données**Safe Height** : seuil supérieur duquel les mouvements rapides sont autorisés.
* Données**Start Depth** : profondeur initiale de l'outil - première profondeur de coupe en Z.
* Données**Step Down** : abaissement incrémentiel de l'outil.

Face

* Données**BoundaryShape** : forme à utiliser pour le calcul de la limite
* Données**ClearEdges** : finir les bords de la surface (applicable uniquement à la boîte englobante)
* Données**ExcludeRaisedAreas** : exclure le fraisage des zones en relief à l'intérieur de la face.
* Données**Offset Pattern** : motif à utiliser. (sélectionnez de quelle manière les mouvements horizontaux doivent être effectués).

Path

* Données**Active** : mettre à False pour empêcher l'opération de générer du code.
* Données**Base** : géométrie de base pour cette opération.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**Coolant Mode** : mode de refroidissement pour cette opération.
* Données**Cycle Time** : estimation du temps de cycle pour cette opération.
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.

Pocket

* Données**Cut Mode** : direction dans laquelle le parcours doit contourner la pièce : sens horaire (ClockWise = CW) ou sens anti-horaire (CounterClockWise = CCW).
* Données**Extra Offset** : décalage supplémentaire à appliquer à l'opération. La direction dépend de l'opération.
* Données**StartAt** : commence la poche au centre ou à la limite
* Données**Step Over** : pourcentage du diamètre de l'outil à utiliser à chaque passage.
* Données**Zig Zag Angle** : angle du motif en zigzag.
* Données**Offset Pattern** : motif de détourage à utiliser.
* Données**Min Travel** : utiliser le tri des parcours en 3D.
* Données**Keep Tool Down** : tenter d'éviter les rétractions inutiles.

Rotation

* Données**Attempt Inverse Angle** : tenter automatiquement l'angle inverse si la rotation initiale est incorrecte.
* Données**Enable Rotation** : active la rotation pour accéder aux poches ou aux zones non normales à l'axe Z.
* Données**Inverse Angle** : inverse l'angle de la rotation.  ***Exemple :** changer une rotation de -22,5 à 22,5 degrés.*
* Données**Limit Depth To Face** : impose la profondeur Z de la face sélectionnée comme valeur minimale de la profondeur finale. Des valeurs utilisateur plus élevées pour la profondeur finale seront observées.
* Données**Reverse Direction** : inverse l'orientation de l'opération de 180 degrés.

Start Point

* Données**Start Point** : point de départ personnalisé pour le parcours de cette opération.
  + Données**X** : valeur de distance X.
  + Données**Y** : valeur de distance Y.
  + Données**Z** : valeur de distance Z.
* Données**Use Start Point** : mis à True, si vous spécifiez manuellement un point de départ. Définissez le point de départ dans le champ Start Point des propriétés de données.

### Vue

Vide

## Script

*Voir aussi :* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_MillFace/fr&oldid=1481307>"