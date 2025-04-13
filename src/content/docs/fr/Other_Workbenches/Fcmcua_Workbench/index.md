---
title: Atelier Fcmcua
---
![](/images/Fcmcua_wb.svg)

Icône de l'atelier Fcmcua

## Introduction

Fcmcua est un [atelier externe](/External_workbenches/fr "External workbenches/fr") qui est utilisé pour contrôler un assemblage créé dans l'[atelier Assembly4](/Assembly4_Workbench/fr "Assembly4 Workbench/fr") depuis un serveur [OPC UA](http://en.wikipedia.org/wiki/OPC_Unified_Architecture "wikipedia:OPC Unified Architecture"). Cela permet de simuler des machines contrôlées par des contrôleurs numériques tels que des [[ou Automates programmables industriels (PLCs en anglais)](https://fr.wikipedia.org/wiki/Automate_programmable_industriel%7CAPIs)], pour autant que le contrôleur supporte OPC UA. L'atelier utilise les valeurs fournies par le serveur OPC UA pour manipuler le décalage d'attachement du système de coordonnées local (LCS) de chaque pièce.

## Installation

Fcmcua peut être installé à partir du [Gestionnaire des extensions](/Std_AddonMgr/fr "Std AddonMgr/fr").

## Utilisation

Fcmcua fournit deux types de mécanismes pour simuler le mouvement dans un modèle : **Axis** et **Actuator**.

Un **axe** est contrôlé par des valeurs en [flottante](https://fr.wikipedia.org/wiki/Virgule_flottante%7Cvirgule) qui représentent soit la position de l'axe, soit la vitesse du moteur qui l'entraîne.

Un **actionneur** est n'importe quel mouvement déclenché par un signal binaire. Dans ce cas, Fcmcua simule lui-même le mouvement en calculant les valeurs des positions nécessaires à la simulation.

Pour de plus amples instructions d'utilisation, voir le [dépôt de Fcmcua](https://github.com/heissgetraenk/fcmcua).

### Connexion

![](/images/Fcmcua_wb.svg)

Une URL vers le serveur OPC UA doit être spécifiée sous la forme `opc.tcp://127.0.0.1:4840`.

La définition du taux d'interrogation peut être utilisée pour limiter le temps entre les mises à jour de l'assemblage FreeCAD.

L'état de la connexion est affiché sur le panneau de connexion.

### Paramètres de l'axe

![](/images/Fcmcua_axes.svg)

Un nœud d'axe sur le serveur OPC UA représente un changement unidimensionnel dans le décalage d'attachement d'une pièce dans l'assemblage. Pour configurer cette assignation, les informations suivantes doivent être spécifiées :

* **Node Id :**  adresse du noeud du serveur.
* **Document Name :** nom du document de la pièce.
* **LCS :** étiquette du système de coordonnées local de la pièce (Local Coordinate System).
* **Offset :** composante vectorielle du décalage de l'attachement que la valeur du noeud va mettre à jour.
* **Type :** axe de vitesse ou axe de positionne.

La valeur provenant du serveur peut également être inversée ou mise à l'échelle en fournissant un signe et/ou un facteur mathématique.

### Paramètres de l'actionneur

![](/images/Fcmcua_actuator.svg)

Un nœud d'actionneur sur le serveur OPC UA agit comme un déclencheur pour *ouvrir* ou *fermer* l'actionneur. Pour configurer l'actionneur, les informations suivantes doivent être spécifiées :

* **Type :** décrit combien de signaux sont utilisés pour ouvrir ou fermer l'actionneur.
* **Conditional Block :** un actionneur peut avoir un arrêt dans sa course, activé par un autre signal binaire. Cette fonction est optionnelle.
* **Node Ids :** selon la configuration : les adresses des nœuds qui déclenchent l'ouverture/fermeture ou le blocage de l'actionneur.
* **Positions :** selon la configuration : les valeurs de décalage d'attachement dans le modèle qui représentent la position d'ouverture, de fermeture ou de blocage de l'actionneur.
* **Durations :** temps avec lequel l'actionneur s'ouvre ou se ferme.

## Liens

* [Dépôt de Fcmcua](https://github.com/heissgetraenk/fcmcua)
* [atelier externe](/External_workbenches/fr "External workbenches/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Fcmcua_Workbench/fr&oldid=1223200>"