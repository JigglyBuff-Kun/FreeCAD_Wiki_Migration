---
title: CAM Décaler l'origine
---
:::caution
Cette documentation n'est pas terminée. Merci de nous aider et de contribuer à la documentation.Modèle GuiCommandexplique comment les commandes doivent être documentées. ParcourezCategory:UnfinishedDocupour voir d'autres pages incomplètes comme celle-ci. VoirCategory:Command\_Referencepour toutes les commandes.VoirÉcrire une page Wikipour apprendre à éditer les pages du wiki, et aller àContribuer à FreeCADpour apprendre d'autres façons de contribuer.
:::

|  |
| --- |
| CAM Décaler l'origine |
| Emplacement du menu |
| CAM → Autres commandes → Décaler l'origine |
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

L'outil ![](/images/CAM_Fixture.svg) Décaler l'origine définit la position décalée du système de coordonnées de travail du contrôleur CNC de la machine-outil.

Les coordonnées de décalage du travail cible incluent généralement : les codes G53 à G59. Le G-code est simplement l'indication du code (G53, G54, etc ...). Les systèmes de décalage de l'origine sont :

* G53 → système de coordonnées absolues de la machine.
* G54 → système de coordonnées de l'origine de la pièce.
* G55 à G59.9 → dispositifs de coordonnées permettant d'effectuer des décalages de travail, par rapport aux capteurs de position d'origine situés sur la machine CNC, à utiliser.

La commande G59 de décalage d'origine est utilisée pour étendre les décalages disponibles. Le degré d'extension mis en œuvre est spécifique à la machine CNC, et cette commande permet de réaliser des extensions de G59.1 à G59.9.

## Utilisation

1. Pressez le bouton ![](/images/CAM_Fixture.svg) Décaler l'origine ou utilisez le raccourci clavier P puis F.
2. Sélectionnez le dispositif de décalage de travail souhaité dans le menu déroulant.

## Propriétés

* Données**Fixture** : définit le point de décalage courant.
* Données**Active** : définit si cette commande est active ou non lors de l'ajout dans un composé.

## Remarques

## Limitations

## Script

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Fixture/fr&oldid=1491747>"