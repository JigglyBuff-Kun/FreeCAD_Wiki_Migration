---
title: CAM Adaptatif
---
|  |
| --- |
| CAM Adaptatif |
| Emplacement du menu |
| CAM → Détourer/contourner de manière adaptative |
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

L'algorithme de l'opération ![](/images/CAM_Adaptive.svg) Adaptatif crée des parcours de détourage et de contournage. L'opération fait varier l'engagement de la fraise de manière à ce que l'enlèvement de matière ne dépasse jamais une valeur maximale.

## Utilisation

Les instructions d'utilisation pour l'opération Adaptatif sont présentés ici.

### Opération de base

1. Appuyez sur l'icône ![](/images/CAM_Adaptive.svg) Détourer/contourner de manière adaptative ou faites CAM → ![](/images/CAM_Adaptive.svg) Détourer/contourner de manière adaptative à partir du menu.
2. Sélectionnez le contrôleur d'outil pour l'opération dans la fenêtre contextuelle du contrôleur d'outil, si vous y êtes invité.
3. Ajustez les profondeurs d'opération selon vos besoins dans l'onglet Profondeurs : Profondeur de départ, Profondeur de fin, Pas de descente.
4. Faites les ajustements nécessaires dans l’onglet Hauteurs.
5. Configurez les paramètres dans l'onglet Opérations :
   1. (**Voir la section ci-dessous [Propriétés](#Propriétés) → Adaptive.**)
   2. Définissez la valeur de dépassement en tant que pourcentage du diamètre de l'outil.
6. Si vous souhaitez prévisualiser le résultat avant d'accepter les paramètres, cliquez sur Appliquer.
7. Cliquez sur le bouton OK pour confirmer et générer les trajectoires.

### Remarques préliminaires sur le détourage adaptatif

* En fonction de la taille et de la complexité de la zone pour l'opération, il peut être préférable de ne pas recalculer l'opération après chaque changement de propriété. Considérez plutôt :
  + Désactivez l'opération avec l'outil ![](/images/CAM_OpActiveToggle.svg) [Activer une opération](/CAM_OpActiveToggle/fr "CAM OpActiveToggle/fr"), apportez vos modifications aux propriétés de l'opération puis cliquez sur le ![](/images/CAM_OpActiveToggle.svg) [Activer une opération](/CAM_OpActiveToggle/fr "CAM OpActiveToggle/fr") à nouveau pour réactiver l'opération, ce qui déclenche un recalcul en interne.
* L'opération ![](/images/CAM_Adaptive.svg) Activer une opération peut contenir encore quelques bogues. Veuillez signaler les bogues et les problèmes sur le [FreeCAD CAM/CAM Forum](https://forum.freecadweb.org/viewforum.php?f=15).
* Toutes les formes d'outils peuvent ne pas être respectées avec cette opération. Consultez le forum FreeCAD pour plus de détails.
* Si vous choisissez d'exécuter le simulateur de parcours dans l'atelier CAM, il utilise uniquement la fraise de bout standard pour simuler des parcours. Par conséquent, vous ne verrez pas l’enlèvement de matière spécifique à une forme d’outil. L'enlèvement de matière est illustré à l'aide de la forme de la fraise.

## Propriétés

***Remarque*** : les noms de certaines propriétés de cette liste diffèrent un peu des mêmes paramètres que ceux utilisés dans l'éditeur de fenêtre de tâche.

Adaptive

* Données**Force Inside-Out** : force la pénétration dans le matériau à l'intérieur et le détourage vers les bords.
* Données**Helix Angle** : angle d'entrée de la rampe hélicoïdale (degrés).
* Données**Helix Cone Angle** : angle du cone hélicoïdal (degrés).
* Données**Helix Diameter Limit** : limite le diamètre d'entrée de l'hélicoïde, si la limite est supérieure au diamètre de l'outil ou à 0, le diamètre de l'outil est utilisé.
* Données**Keep Tool Down Ratio** : longueur maximale de la descente de l'outil par rapport à la distance directe entre les points.
* Données**Lift Distance** : distance de levage pour les mouvements rapides.
* Données**Operation Type** : type d'opération adaptative : détourage ou contournage.
* Données**Side** : côté des faces sélectionnées que l'outil doit couper : intérieur ou extérieur.
* Données**Step Over** : pourcentage du diamètre de la fraise à effectuer à chaque passage.
* Données**Stock to Leave** : quantité de matière à laisser (c'est-à-dire pour une opération de finition séparée).
* Données**Tolerance** : influence la précision et les performances.
* Données**Use Helix Arcs** : utilise les arcs (G2) pour la rampe hélicoïdale.

Base

Remarque : il est conseillé de ne pas modifier la propriété Placement des opérations de parcours. Il convient plutôt de déplacer ou de faire pivoter le modèle CAM Tâche selon les besoins.

* Données**Placement** : emplacement global [position et rotation] de l'objet, par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
  + Données**Angle** : angle en degrés appliqué à la rotation de l'objet autour de la valeur de la propriété Axis.
  + Données**Axis** : axe (un ou plusieurs) autour duquel faire pivoter l'objet, défini dans les sous-propriétés : X, Y, Z.
    - Données**X** : valeur de l'axe X.
    - Données**Y** : valeur de l'axe Y.
    - Données**Z** : valeur de l'axe Z.
  + Données**Position** : position de l'objet, définie dans les sous-propriétés : X, Y, Z - par rapport à l'origine (ou à l'origine du conteneur de l'objet parent).
    - Données**X** : valeur de distance X.
    - Données**Y** : valeur de distance Y.
    - Données**Z** : valeur de distance Z.
* Données**Label** : nom de l'objet fourni par l'utilisateur (UTF-8).

Depth

* Données**Clearance Height** : hauteur nécessaire pour éviter les brides et autres obstacles.
* Données**Final Depth** : profondeur finale de l'outil, valeur la plus basse en Z.
* Données**Finish Depth** : maximum de matériau a retirer lors de la passe final.
* Données**Safe Height** : seuil supérieur à partir duquel les mouvements rapides sont autorisés.
* Données**Start Depth** : profondeur initiale de l'outil, première profondeur de coupe en Z.
* Données**Step Down** : pas de descente incrémentale de l'outil.

Path

* Données**Active** : mis à False, pour empêcher l'opération de générer du code.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**Tool Controller** : définit le contrôleur d'outil utilisé dans l'opération.
* Données**User Label** : étiquette attribuée par l'utilisateur.

## Disposition de l'éditeur de la fenêtre des tâches

*Les descriptions des paramètres sont fournies dans la liste des propriétés ci-dessus.*

Cette section est simplement une représentation des paramètres de l’éditeur de fenêtres pour l’opération.

### Géométrie de base

* **Ajouter** : ajoute le(s) élément(s) sélectionné(s) qui doit(vent) être la(les) base(s) pour le(s) parcours.
* **Enlever** : supprime le ou les éléments sélectionnés dans la liste de la géométrie de base.
* **Réinitialiser** : efface tous les éléments de la liste de la géométrie de base.

### Profondeurs

* Données**Start Depth**
* Données**Final Depth**
* Données**Finish Depth**
* Données**Step Down**

### Hauteurs

* Données**Safe Height**
* Données**Clearance Height**

### Opération

* Données**Tool Controller**
* Données**Cut Region** (Côté)
* Données**Operation Type**
* Données**Step Over Percent**
* Données**Accuracy vs Performance** (Tolérance)
* Données**Helix Ramp Angle**
* Données**Helix Cone Angle**
* Données**Helix Max Diameter** (Limite du diamètre de l'hélice)
* Données**Lift Distance**
* Données**Keep Tool Down Ratio**
* Données**Stock to Leave**
* Données**Force Clearing Inside-Out**
* Données**Stop**

## Problèmes connus

Si CAM Adaptatif crée des parcours indésirables, essayez avec Données**Stock to Leave** réglée à `0.001 mm` ou plus. Vous pouvez réduire le diamètre de l'outil en doublant cette valeur pour conserver des parcours exactes.

Une proposition de correction de bogue est disponible (mais personne ne travaille à son intégration) :

<https://github.com/FreeCAD/FreeCAD/pull/5276>

## Ressources

* Page GitHub de l'auteur pour le projet d'origine : [kreso-t/FreeCAD\_Mod\_Adaptive\_Path](https://github.com/kreso-t/FreeCAD_Mod_Adaptive_Path).
* Sujet actif dans les forums FreeCAD pour l'opération Adaptive de parcours : [Adaptive Path/CAM Operation](https://forum.freecadweb.org/viewtopic.php?f=15&t=30127).

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Adaptive/fr&oldid=1478151>"