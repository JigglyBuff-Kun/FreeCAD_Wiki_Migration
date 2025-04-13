---
title: CAM Feuille de configuration
---
## Description

L'utilisation d'une feuille de configuration permet à l'utilisateur de personnaliser le mode de calcul des différentes valeurs de propriété pour les opérations. L'utilisateur a toujours la possibilité de remplacer les valeurs de SetupSheet par une valeur explicite ou de modifier le mode de calcul des valeurs de SetupSheet.

Etant donné que les Feuilles de configuration font partie des tâches de CAM, les valeurs ne modifient pas le comportement par défaut de CAM. Au contraire, elles ne changent que le comportement dans le contexte de la tâche en cours.

Les Feuilles de configuration sont particulièrement utiles lorsqu’elles sont enregistrées avec un [modèle de tâche](/CAM_ExportTemplate/fr "CAM ExportTemplate/fr").

## Propriétés

* Données**VertRapid**: définit le taux de rotation rapide vertical dans les nouveaux contrôleurs d'outil. (Utilisé dans les post-processeurs prenant en charge les taux rapides personnalisables).
* Données**HorizRapid**: définit le taux rapide horizontal dans les nouveaux contrôleurs d'outil. (Utilisé dans les post-processeurs prenant en charge les taux rapides personnalisables).
* Données**SafeHeightOffset**: l'utilisation de ce champ dépend de SafeHeightExpression (voir ci-dessous).
* Données**SafeHeightExpression**: le résultat de cette expression sera utilisé pour définir la hauteur de sécurité des opérations.
* Données**ClearanceHeightOffset**: l'utilisation de ce champ dépend de ClearanceHeightExpression (voir ci-dessous).
* Données**ClearanceHeightExpression**: le résultat de cette expression sera utilisé pour définir la hauteur de dégagement des opérations.
* Données**StartDepthExpression**: le résultat de cette expression sera utilisé pour définir la propriété StartDepth des opérations.
* Données**FinalDepthExpression**: le résultat de cette expression sera utilisé pour définir la propriété FinalDepth des opérations.
* Données**StepDownExpression**: le résultat de cette expression sera utilisé pour définir la propriété StepDown des opérations.

## Paramètres de l'opération

Les suivants sont tirés de:

* OpFinalDepth - La valeur de la propriété FinalDepth.
* OpStartDepth - La valeur de la propriété FinalDepth.
* OpToolDiameter - Valeur de la propriété Tool Diameter du contrôleur d'outil référencé par l'opération.

## Valeurs de la Feuille de configuration

Les autres valeurs de la Feuille de configuration peuvent être référencées directement:

* SetupSheet.ClearanceHeightOffset
* SetupSheet.SafeHeightOffset

* StartDepth
* SafeHeightOffset
* SafeHeightExpression
* ClearanceHeightOffset
* ClearanceHeightExpression
* StartDepthExpression
* FinalDepthExpression
* StepDownExpression

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_SetupSheet/fr&oldid=1389561>"