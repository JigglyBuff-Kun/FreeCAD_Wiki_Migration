---
title: CAM Ébavurage
---
|  |
| --- |
| CAM Ébavurage |
| Emplacement du menu |
| CAM → Ébavurer |
| Ateliers |
| [CAM](/CAM_Workbench/fr "CAM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.18 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil ![](/images/CAM_Deburr.svg) Ébavurage sert principalement à ébavurer un bord.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/CAM_Deburr.svg) Ébavurer.
   * Sélectionnez l'option **CAM → ![](/images/CAM_Deburr.svg) Ébavurer** du menu.
2. Le panneau de tâches **Ébavurer** s'ouvre. Voir [Options](#Options).
3. Sélectionnez **Géométrie de base**.
4. Spécifiez les paramètres requis.
5. Appuyez sur le bouton OK.

## Options

Après avoir sélectionné la géométrie dans la section **Géométrie de base** du panneau de tâches, vous pouvez appuyer sur Appliquer pour voir le parcours de l'outil tel que défini par les options par défaut.

Ensuite, vous pouvez vérifier vos profondeurs et hauteurs, comme avec les autres commandes du parcours.

La dernière étape consiste à activer la section **Opération** où vous pouvez spécifier ce qui suit :

* **Commande d'outil** : sélectionnez l'outil à utiliser.
* **Mode de refroidissement** : sélectionnez `Aucun`, `Jet` ou `Brouillard`.
* **Directions** : sélectionnez `Sens horaire` (CW) ou `Sens anti-horaire` (CCW).
* **W** : dimension de votre arête.
* **h** : décalage par rapport au bas de l'outil. Il s'agit d'un dispositif de sécurité car si la pointe dépasse le bord, l'outil ne coupera plus.

:   ![Interface d'ébavurage avec les options](/images/Path_Deburr_Operations-tab.png)

## Propriétés

### Données

Base

* Données**Placement** :
* Données**Label** : nom d'utilisateur de l'objet (UTF-8)

Deburr

* Données**Direction** : `CCW` ou `CW`.
* Données**Entry Point** : point d'entrée de l'opération, s'il est défini à 2, il ira dans 2 coins par rapport à la valeur par défaut.
* Données**Extra depth** : profondeur supplémentaire (**h** dans le panneau de tâches).
* Données (Hidden)**Join** : comment joindre les segments de chanfrein, `Round` ou `Miter`.
* Données (Hidden)**Side** : le côté de l'opération, `Outside` ou `Inside`.
* Données**Width** : largeur du chanfrein (**W** dans le panneau des tâches).

Depth

* Données**Clearance Height** : hauteur nécessaire pour dégager les brides et les obstructions (définie par défaut à `OpStockZMax + SetupSheet.ClearanceHeightOffset`).
* Données**Safe Height** : hauteur au-dessus de laquelle les mouvements rapides sont autorisés. (définie à `OpStockZMax + SetupSheet.SafeHeightOffset`).
* Données**Start Depth** : profondeur de départ de l'outil, première profondeur de coupe en Z.
* Données**Step Down** : pas de descente incrémentale de l'outil

Op Values

* Données**Op Stock ZMax** : valeur Z maximale du brut.
* Données**Op Stock ZMin** : valeur Z minimale du brut.
* Données**Op Tool Diameter** : diamètre de l'outil.

Path

* Données**Active** : mis à `false`, pour empêcher l'opération de générer du code.
* Données**Base** : géométrie de base pour cette opération, des arêtes ou une face.
* Données**Comment** : commentaire facultatif pour cette opération.
* Données**Coolant Mode** : mode de refroidissement pour cette opération.
* Données**Cycle Time** : durée estimée du cycle pour cette opération.
* Données**Tool Controller** : contrôleur d'outil qui sera utilisé pour calculer le parcours.
* Données**User Label** : étiquette attribuée par l'utilisateur.

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Deburr/fr&oldid=1481317>"