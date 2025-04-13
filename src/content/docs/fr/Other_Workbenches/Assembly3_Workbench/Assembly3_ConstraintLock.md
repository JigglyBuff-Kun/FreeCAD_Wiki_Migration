---
title: Assembly3 Contrainte de verrouillage
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Contrainte de verrouillage |
| Emplacement du menu |
| *Aucun* |
| Ateliers |
| [Assembly3](/Assembly3_Workbench/fr "Assembly3 Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cet outil relie un objet au système de coordonnées global (GCS = global coordinate system) de l'assemblage en utilisant le système de coordonnées implicite (ICS) d'un élément sélectionné.

:   - Si un sommet est sélectionné, les coordonnées de son ICS sont fixées par rapport au GCS.

    :   L'objet peut toujours tourner autour du sommet.
:   - Si une arête (droite) est sélectionnée, les coordonnées de son ICS et la direction de son axe z sont fixées par rapport au GCS.

L'objet peut toujours tourner autour de l'arête.

:   - Si une face est sélectionnée, les coordonnées et l'orientation de son ICS sont fixées par rapport au GCS.

    :   L'objet est complètement fixé par rapport au GCS.

IL peut être utilisé pour définir l'ensemble fixe dans un assemblage statique ainsi que dans un système cinématique.

## Utilisation

1. Placez un objet dans un assemblage.
2. Sélectionnez un élément de l'objet.
3. Appuyez sur le bouton ![](/images/Assembly_ConstraintLock.svg) Locked.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_ConstraintLock/fr&oldid=1536639>"