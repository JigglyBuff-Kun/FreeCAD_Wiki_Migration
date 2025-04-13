---
title: Assembly3 Tracé du déplacement d'une pièce
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| Assembly3 Tracé du déplacement d'une pièce |
| Emplacement du menu |
| Assembly3 → Trace part move |
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

La commande ![](/images/Assembly_Trace.svg) Tracé du déplacement d'une pièce trace un seul point d'un assemblage cinématique, lorsqu'un des objets assemblés est déplacé avec l'outil ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart/fr "Assembly3 MovePart/fr") ou l'outil ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove/fr "Assembly3 AxialMove/fr").

## Utilisation

1. Sélectionnez un objet filaire :
   * Un point pour se tracer lui-même.
   * Une arête ou une face pour tracer le point central de sa forme.
2. Activez la commande ![](/images/Assembly_Trace.svg) **Trace part move** en utilisant l'une des méthodes suivantes :
   * Le bouton ![](/images/Assembly_Trace.svg) Trace part move.
   * L'option de menu **Assembly3 → ![](/images/Assembly_Trace.svg) Trace part move**.
3. Sélectionnez un objet de l'assemblage et déplacez-le en utilisant l'une des méthodes suivantes :
   * L'outil ![](/images/Assembly_Move.svg) [Move part](/Assembly3_MovePart/fr "Assembly3 MovePart/fr").
   * L'outil ![](/images/Assembly_AxialMove.svg) [Axial move](/Assembly3_AxialMove/fr "Assembly3 AxialMove/fr").
4. Appuyez sur la touche Echap ou sur le bouton OK (déplacement axial uniquement) pour terminer le traçage.
5. Trouvez un objet AsmTrace dans la [Vue en arborescence](/Tree_view/fr "Tree view/fr").

## Remarques

* Si vous ne sélectionnez aucune forme dans la première étape, vous tracerez la forme qui a été sélectionnée dans la troisième étape.
* Pour changer l'élément à tracer, vous devez désactiver cet outil avant de sélectionner un nouvel élément et de le réactiver.
* Si vous contrôlez le mouvement avec un autre outil tel que ce [contrôleur cinématique](/Tutorial_KinematicController/fr "Tutorial KinematicController/fr") qui permet d'utiliser un outil de déplacement en parallèle, vous pouvez utiliser cet outil pour modifier l'assemblage étape par étape et utiliser l'outil de déplacement pour ajouter un point et une ligne de connexion à chaque étape. Il est possible d'utiliser l'outil de déplacement comme déclencheur en prenant et en faisant glisser l'une des flèches - juste un tout petit peu jusqu'à ce que le point et la ligne suivants apparaissent (utilisez la transparence si nécessaire).

:   (J'espère qu'il y aura une méthode plus élégante à l'avenir).

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly3_TracePartMove/fr&oldid=1168503>"