---
title: CAM Activer une opération
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Activer une opération |
| Emplacement du menu |
| CAM → Activer/désactiver l'état actif de l'opération |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| P X |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_OpActiveToggle.svg) Activer une opération dans l'[atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr") est utilisé pour activer/désactiver l'état actif d'une opération d'un parcours existante.

Cet outil ne peut être utilisé que si votre ![](/images/CAM_Job.svg) [tâche](/CAM_Job/fr "CAM Job/fr") a au moins une opération de parcours.

## Utilisation

1. Sélectionnez une opération dans le groupe **Opérations** appartenant à une tâche. Une opération désactivée est reconnaissable à son étiquette et à son icône grisées.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_OpActiveToggle.svg) Activer/désactiver l'état actif de l'opération.
   * Sélectionnez le bouton **CAM → ![](/images/CAM_OpActiveToggle.svg) Activer/désactiver l'état actif de l'opération** du menu.
   * Utilisez le raccourci clavier : P puis X.
3. Le résultat dépend de l'opération sélectionnée :
   * Si vous avez sélectionné une opération active, la commande la désactive :
     + L'icône de l'opération est remplacée par l'icône de la commande : ![](/images/CAM_OpActiveToggle.svg).
     + L'icône de l'opération et le libellé sont grisés.
     + Les chemins générés par l'opération disparaissent de la [vue 3D](/3D_view/fr "3D view/fr").
     + Lorsque vous utilisez l'outil ![](/images/CAM_Inspect.svg) [CAM Inspecter des commandes](/CAM_Inspect/fr "CAM Inspect/fr") ou de la commande ![](/images/CAM_Post.svg) [CAM Post-traitement](/CAM_Post/fr "CAM Post/fr"), le code G de l'opération n'est pas fourni.
   * Si vous avez sélectionné une opération désactivée, la commande l'active :
     + L'icône de l'opération est remplacée par celle appartenant à l'opération.
     + L'icône et le libellé de l'opération ne sont plus grisés.
     + Les trajectoires générées par l'opération sont recalculées et affichées dans la [vue 3D](/3D_view/fr "3D view/fr").
     + Lorsque vous utilisez l'outil ![](/images/CAM_Inspect.svg) [CAM Inspecter des commandes](/CAM_Inspect/fr "CAM Inspect/fr") ou de la commande ![](/images/CAM_Post.svg) [CAM Post-traitement](/CAM_Post/fr "CAM Post/fr"), le G-code de l'opération est fourni.

## Options

Vide

## Propriétés

Vide

## Script

*Voir aussi:* [FreeCAD Script de base](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Exemple :

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_OpActiveToggle/fr&oldid=1487422>"