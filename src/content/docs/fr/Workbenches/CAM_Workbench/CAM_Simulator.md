---
title: CAM Simulateur de parcours
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Simulateur de parcours |
| Emplacement du menu |
| CAM → Simuler le parcours |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| P M |
| Introduit dans la version |
| - |
| Voir aussi |
| [CAM Inspecter des commandes](/CAM_Inspect/fr "CAM Inspect/fr") |
|  |

## Description

L'outil ![](/images/CAM_Simulator.svg) Simulateur de parcours permet de simuler la tâche de CAM en balayant les modèles 3D des outils utilisés pour chaque opération, le long des parcours du G-code, en soustrayant le matériau du brut, là où le brut et l'outil se chevauchent, ce qui permet de visualiser la tâche. Cela permet de détecter et d'isoler les erreurs avant d'exécuter la tâche à la fraiseuse.

![](/images/Path-Simulation.gif)

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Simulator.svg) Simuler le parcours.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Simulator.svg) Simuler le parcours** du menu.
   * Utilisez le raccourci clavier : P puis M.
2. Désélectionnez toutes les **Opérations** qui ne doivent pas être simulées.
3. Réglez les paramètres de **Vitesse** et **Précision**.
4. Sélectionnez la tâche **Tâche** à simuler dans le menu déroulant.
5. Utilisez la barre d'outils **Simulateur de parcours** pour lancer les différentes actions :
   * Appuyez sur le bouton ![](/images/CAM_BPlay.svg) pour lire ou reproduire une animation des opérations.
   * Appuyez sur le bouton ![](/images/CAM_BFastForward.svg) pour augmenter sensiblement la vitesse (afin de revoir rapidement des chemins compliqués).
   * Appuyez sur le bouton ![](/images/CAM_BPause.svg) pour mettre l'animation en pause à des fins de dépannage.
   * Appuyez sur le bouton ![](/images/CAM_BStep.svg) pour ralentir l'animation, cette fonctionnalité permet de dépanner et de résoudre des coupes et/ou des mouvements spécifiques.
   * Appuyez sur le bouton ![](/images/CAM_BStop.svg) pour arrêter l'animation.
   * Appuyez sur le bouton Annuler pour supprimer le brut créé pour la simulation. Si vous appuyez sur OK, cet objet sera conservé dans votre travail.

## Propriétés

* Données**Playback Speed** : vitesse de lecture de la simulation, en lignes G-code/seconde
* Données**Accuracy** : précision de la simulation exprimée en pourcentage indiquant l'écart des simulations par rapport à la taĉhe. Pour la simulation interactive, réduire la précision à 0.3 fonctionne beaucoup plus rapidement.
* Données**Job** : taĉhe utilisée comme base de la simulation.
* Données**Operation List** : liste des opérations sélectionnées à inclure dans la simulation.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Simulator/fr&oldid=1487401>"