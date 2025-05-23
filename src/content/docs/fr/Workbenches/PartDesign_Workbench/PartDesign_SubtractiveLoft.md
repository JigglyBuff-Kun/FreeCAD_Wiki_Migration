---
title: PartDesign Lissage soustractif
---
|  |
| --- |
| PartDesign Lissage soustractif |
| Emplacement du menu |
| PartDesign → Créer une fonction soustractive → Enlèvement de matière par lissage |
| Ateliers |
| [PartDesign](/PartDesign_Workbench/fr "PartDesign Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [PartDesign Lissage additif](/PartDesign_AdditiveLoft/fr "PartDesign AdditiveLoft/fr"), [PartDesign Balayage soustractif](/PartDesign_SubtractivePipe/fr "PartDesign SubtractivePipe/fr") |
|  |

## Description

Le **Lissage soustractif** crée un solide soustractif dans le corps actif en effectuant une transition entre deux esquisses ou plus (également appelés coupes transversales). Sa forme est ensuite soustraite du solide existant.

## Utilisation

### Processus de travail basé sur la fenêtre de dialogue

1. Appuyez sur le bouton ![](/images/PartDesign_SubtractiveLoft.svg) Enlèvement de matière par lissage.
2. Dans la boîte de dialogue **Sélectionner une fonction**, sélectionnez une esquisse à utiliser comme objet de profil de base et cliquez sur OK.
   * Il est également possible de sélectionner une seule esquisse ou la face d'un objet 3D ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")) avant d'appuyer sur le bouton de lissage soustractif.
3. Dans **Paramètres de lissage**, appuyez sur le bouton Ajouter une section.
4. Sélectionnez l'esquisse suivante dans la [vue 3D](/3D_view/fr "3D view/fr"). Répétez pour sélectionner d'autres esquisses dans l'ordre dans lequel vous voulez qu'elles soient lissées. (Vous pouvez modifier l'ordre des sections à tout moment ultérieurement dans la boîte de dialogue de lissage en faisant glisser les sections de la liste vers la position souhaitée.)
5. Définissez les options si nécessaire et cliquez sur OK.

### Processus de travail basé sur la sélection

1. Sélectionnez plusieurs esquisses. L'ordre dans lequel vous les sélectionnez est important :
   * L'esquisse sélectionnée au départ deviendra l'objet de profil de base à l'étape suivante.
   * Les esquisses sélectionnées après la première deviendront les sections du lissage. Ici aussi, l'ordre de sélection est important : la deuxième esquisse sélectionnée deviendra la première section de lissage, celle sélectionnée comme troisième deviendra la deuxième section et ainsi de suite. (Vous pouvez modifier l'ordre des sections à tout moment ultérieurement dans la fenêtre de dialogue de lissage en faisant glisser les sections de la liste vers la position souhaitée.)
   * La première ou la dernière sélection peut aussi être une face d'un objet 3D ([introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr"))
2. Appuyez sur le bouton ![](/images/PartDesign_SubtractiveLoft.svg) Enlèvement de matière par lissage.
3. Définissez les options si nécessaire et cliquez sur OK.

## Options

* **Surface réglée** : effectue des transitions droites entre les sections. Ne s'applique pas à un lissage avec deux sections transversales. Si cette case n'est pas cochée, les transitions seront lisses.
* **Fermé** : effectue une transition de la dernière section à la première, en créant une boucle. [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr")

## Propriétés

* Données**Label** : nom donné à l'opération, ce nom peut être changé à la convenance.
* Données**Sections** : liste les sections utilisées.
* Données**Ruled** : voir [Options](#Options).
* Données**Closed** : voir [Options](#Options).
* Données**Midplane** : N/A
* Données**Reversed** : N/A
* Données**Refine** : vrai ou faux. Si la valeur est "true" (vrai), nettoie le solide des arêtes résiduelles laissées par les fonctions. Voir [Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") pour plus de détails.

## Remarques

* Pour mieux contrôler la forme du lissage, il est recommandé que toutes les sections transversales aient le même nombre de segments. Par exemple, pour un lissage entre un rectangle et un cercle, le cercle doit être décomposé en 4 arcs connectés.
* Vous pouvez effectuer un lissage depuis ou vers un seul [vertex (ou point)](/Glossary/fr#V "Glossary/fr") d'une esquisse ou du corps. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Dans la plupart des cas, les [points](/Glossary/fr#V "Glossary/fr") ne peuvent être que le début ou la fin d'un loft.
* Une section transversale ne peut pas se trouver sur le même plan que celle qui la précède immédiatement.
* Si l'esquisse a une géométrie interne, c'est-à-dire que le lissage est censé avoir des trous, l'ordre dans lequel la géométrie de l'esquisse est créée doit être le même pour toutes les sections : soit vous commencez toutes les sections par la géométrie intérieure, soit vous les commencez toutes par la géométrie extérieure. Sinon, un lissage invalide peut être créé là où les murs intérieurs et extérieurs se croisent.
* Il n'est pas possible de lotir des boucles disjointes ou croisées.

## Liens

* [Part Détails techniques du lissage](/Part_Loft_Technical_Details/fr "Part Loft Technical Details/fr") explique comment un [Part Lissage](/Part_Loft/fr "Part Loft/fr") est créé, une grande partie de son contenu est pertinente pour le Lissage soustractif de PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_SubtractiveLoft/fr&oldid=1514659>"