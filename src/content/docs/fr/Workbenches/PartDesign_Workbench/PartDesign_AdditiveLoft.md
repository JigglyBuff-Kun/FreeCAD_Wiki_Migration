---
title: PartDesign Lissage additif
---
|  |
| --- |
| PartDesign Lissage additif |
| Emplacement du menu |
| PartDesign → Créer une fonction additive → Lissage additif |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Balayage additif](/PartDesign_AdditivePipe/fr "PartDesign AdditivePipe/fr"), [PartDesign Lissage soustractif](/PartDesign_SubtractiveLoft/fr "PartDesign SubtractiveLoft/fr") |
|  |

## Description

Le **Lissage additif** crée un solide dans le Corps actif en faisant une transition entre deux ou plusieurs esquisses (également appelées sections transversales). Si le corps contient déjà des éléments, le lissage additif sera fusionné avec eux.

![](/images/PartDesign_AddLoft_example.png)

À gauche, les sections (A), (B) et (C). À droite, le résultat du lissage additif.

## Utilisation

### Processus de travail basé sur la fenêtre de dialogue

1. Cliquez sur le bouton ![](/images/PartDesign_AdditiveLoft.svg) Lissage additif.
2. Dans la boîte de dialogue **Sélectionner une fonction**, sélectionnez une esquisse à utiliser comme objet de profil de base et cliquez sur OK.
   * Vous pouvez également sélectionner une seule esquisse ou la face d'un objet 3D ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")) avant d'appuyer sur le bouton Lissage additif.
3. Dans **Paramètres de lissage**, cliquez sur Ajouter une section.
4. Sélectionnez l'esquisse suivante dans la [vue 3D](/3D_view/fr "3D view/fr"). Répétez la sélection pour les autres esquisses dans l’ordre dans lequel vous souhaitez qu’elles soient lissées. (Vous pouvez modifier l'ordre des sections à tout moment ultérieurement dans la boîte de dialogue de lissage en faisant glisser les sections de la liste vers la position souhaitée.)
5. Définissez des options si nécessaire puis cliquez sur OK.

### Processus de travail basé sur la sélection

1. Sélectionnez plusieurs esquisses. L'ordre dans lequel vous les sélectionnez est important :
   * L'esquisse sélectionnée au départ deviendra l'objet de profil de base à l'étape suivante
   * Les esquisses sélectionnées après la première deviendront les sections du lissage. Ici aussi, l'ordre de sélection est important : la deuxième esquisse sélectionnée deviendra la première section de lissage, celle sélectionnée comme troisième deviendra la deuxième section et ainsi de suite. (Vous pouvez modifier l'ordre des sections à tout moment ultérieurement dans la fenêtre de dialogue de lissage en faisant glisser les sections de la liste vers la position souhaitée.)
   * La première ou la dernière sélection peut aussi être une face d'un objet 3D ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")).
2. Appuyez sur le bouton ![](/images/PartDesign_AdditiveLoft.svg) Lissage additif.
3. Définissez les options si nécessaire et cliquez sur OK.

## Options

* **Surface réglée** : effectue des transitions droites entre les sections. Ne s'applique pas à un lissage avec deux sections transversales. Si cette case n'est pas cochée, les transitions seront lisses.
* **Fermé** : effectue une transition de la dernière section à la première, en créant une boucle. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## Propriétés

* Données**Label** : nom donné à l'opération, ce nom peut être changé à la convenance.
* Données**Sections** : liste les sections utilisées.
* Données**Ruled** : voir [Options](#Options).
* Données**Closed** : voir [Options](#Options).
* Données**Refine** : true ou false. Si la valeur est true, nettoie le solide des arêtes résiduelles laissées par les fonctions. Voir [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") pour plus de détails.
* Données**Profile** : l'objet de profil de base voir du lissage.
* Données**Midplane** : non applicable.
* Données**Inversé** : non applicable.
* Données**Up To Face** : non applicable.
* Données**Allow Multi Face** : non applicable.

## Remarques

* Pour mieux contrôler la forme du lissage, il est recommandé que toutes les sections transversales aient le même nombre de segments. Par exemple, pour un lissage entre un rectangle et un cercle, le cercle doit être décomposé en 4 arcs connectés.
* Vous pouvez effectuer un lissage depuis ou vers un seul [vertex (point ou sommet)](/Glossary/fr#V "Glossary/fr") d'une esquisse ou du corps. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Les [Vertices](/Glossary/fr#V "Glossary/fr") ne peuvent être que le début ou la fin d'un lissage. Sinon, le corps du lissage serait constitué de deux solides reliés en un seul point. Cela violerait la définition d'un objet 3D du noyau de CAO.
* Une section transversale ne peut pas se trouver sur le même plan que celle qui la précède immédiatement.
* Si l'esquisse a une géométrie interne, c'est-à-dire que le lissage est censé avoir des trous, l'ordre dans lequel la géométrie de l'esquisse est créée doit être le même pour toutes les sections : Soit vous commencez toutes les sections par la géométrie intérieure, soit vous les commencez toutes par la géométrie extérieure. Sinon, un lissage invalide peut être créé là où les parois intérieurs et extérieurs se croisent.
* Il n'est pas possible de lisser des boucles disjointes ou croisées.
* Certains dysfonctionnements rendent la pièce noire.

## Liens

* [Part Détails techniques du lissage](/Part_Loft_Technical_Details/fr "Part Loft Technical Details/fr") explique comment un [Part Lissage](/Part_Loft/fr "Part Loft/fr") est créé, une grande partie de son contenu est pertinente pour le Lissage additif de PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/fr&oldid=1514568>"