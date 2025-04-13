---
title: Ship Résistance Savitsky
---
|  |
| --- |
| Ship Résistance Savitsky |
| Emplacement du menu |
| Resistance → Resistance Savitsky predicion |
| Ateliers |
| [Ship](/Ship_Workbench/fr "Ship Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Calcule la résistance des navires par la méthode Savitsky. Cette méthode a été formulée par Daniel Savitsky en 1964 [1], et s'applique aux navires rapides en régime de déjaugeage.

Trace la courbe de résistance, l'assiette d'équilibre, la prédiction de puissance et les coefficients de résistance. Exporte également les résultats vers une feuille de calcul.

* ![Graphe de résistance obtenu par la méthode de Savitsky.](/images/Savitsky_resistance_graph.png)

  Graphe de résistance obtenu par la méthode de Savitsky.
* ![Graphe de l'assiette d'équilibre obtenu par la méthode de Savitsky.](/images/Savitsky_trim_graph.png)

  Graphe de l'assiette d'équilibre obtenu par la méthode de Savitsky.
* ![Graphe de puissance obtenu par la méthode de Savitsky.](/images/Savitsky_power_graph.png)

  Graphe de puissance obtenu par la méthode de Savitsky.
* ![Graphe des coefficients de résistance obtenu par la méthode de Savitsky.](/images/Savitsky_coefficient_graph.png)

  Graphe des coefficients de résistance obtenu par la méthode de Savitsky.
* ![Feuille de calcul générée par la méthode Savitsky.](/images/Savitsky_spreadsheet.png)

  Feuille de calcul générée par la méthode Savitsky.

### Graphe de résistance

La résistance est représentée en kN, en fonction de la vitesse en nœuds. Elle comprend la résistance totale, la résistance totale et la résistance à la pression.

### Graphe de l'assiette

L'assiette d'équilibre est représentée en degrés, en fonction de la vitesse en nœuds.

### Graphe de puissance

La puissance est représentée en kW, en fonction de la vitesse en nœuds. Elle comprend la puissance effective et la puissance de rupture.

### Graphe des coefficients

Les coefficients de résistance sont adimensionnels, ils sont représentés en fonction de la vitesse en nœuds. Ils comprennent la puissance effective et la puissance de rupture.

### Données exportées d'une feuille de calcul

La feuille de calcul contient les valeurs des différentes variables pour chaque vitesse évaluée, séparées par des colonnes.

| Variable | Unité |
| --- | --- |
| **Vitesse** | kn |
| **Assiette** | ° |
| **Résistance totale** | kN |
| **Résistance de friction** | kN |
| **Résistance de pression** | kN |
| **CF ×10³** | - |
| **CP ×10³** | - |
| **CT ×10³** | - |
| **EKW (Puissance effective)** | kW |
| **BKW (Puissance de rupture)** | kW |

## Limites de l'application

Il faut tenir compte du fait que les résultats obtenus représentés dans les graphiques doivent se situer à l'intérieur des limites d'application de la méthode.

Les limites d'application de la méthode Savitsky sont les suivantes :

1.0
≤

C

V
≤
13.0
{\displaystyle 1.0\leq C\_{V}\leq 13.0}
![{\displaystyle 1.0\leq C_{V}\leq 13.0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d507983a686276888942c347a953d271944ee470)

2.0

∘
≤
τ
≤

15.0

∘
{\displaystyle 2.0^{\circ }\leq \tau \leq 15.0^{\circ }}
![{\displaystyle 2.0^{\circ }\leq \tau \leq 15.0^{\circ }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f7e62e7aff269fff2f1bdcbbf047019aeafcba07)

λ
≤
4.0
{\displaystyle \lambda \leq 4.0}
![{\displaystyle \lambda \leq 4.0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/525c759856a6bbe03316c8f5513063976ca35205)

Où :

* C

  V
  {\displaystyle C\_{V}}
  ![{\displaystyle C_{V}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/00c18988639f2937d3fe4dc00dfa0b0bd7e0bec1) est le coefficient de vitesse, défini par l'expression suivante :  

  C

  V
  =

  V

  g
  B
  {\displaystyle C\_{V}={\frac {V}{\sqrt {gB}}}}
  ![{\displaystyle C_{V}={\frac {V}{\sqrt {gB}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/15ba4c429c6af794c0b91addfb9bfb96297b3360)
* τ
  {\displaystyle \tau }
  ![{\displaystyle \tau }](https://wikimedia.org/api/rest_v1/media/math/render/svg/38a7dcde9730ef0853809fefc18d88771f95206c) est l'angle d'assiette du navire.
* λ
  {\displaystyle \lambda }
  ![{\displaystyle \lambda }](https://wikimedia.org/api/rest_v1/media/math/render/svg/b43d0ea3c9c025af1be9128e62a18fa74bedda2a) est le rapport dynamique entre la longueur et la poutre, défini par l'expression suivante :  

  λ
  =

  L

  K
  +

  L

  C

  2
  B
  {\displaystyle \displaystyle \lambda ={\frac {L\_{K}+L\_{C}}{2B}}}
  ![{\displaystyle \displaystyle \lambda ={\frac {L_{K}+L_{C}}{2B}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fe3f8351c8ecae7d538788706b4abed9fa60c7b1)

## Utilisation

Cet outil ne dépend pas strictement d'une **instance de navire** (voir [Ship Coque](/Ship_CreateShip "Ship CreateShip")), ce qui signifie qu'il est possible de l'utiliser en introduisant les valeurs de données nécessaires dans la fenêtre de dialogue.

### Utilisation de la géométrie du navire

Pour exécuter la méthode, sélectionnez une **instance de navire** et cliquez sur la commande **Resistance → ![](/images/Ship_ResistanceSavitsky.svg) Resistance Savitsky prediction**.

Les données du navire sont obtenues à partir du navire et l'utilisateur n'a plus qu'à saisir les conditions limites. Les données obtenues à partir du navire peuvent être éditées.

### Utiliser les données du navire

Pour introduire les données du navire manuellement, cliquez sur la commande **Resistance → ![](/images/Ship_ResistanceSavitsky.svg) Resistance Savitsky prediction** et remplissez les champs de la fenêtre de dialogue.

## Tutoriels

* [Tutoriel Construction navale S60](/FreeCAD-Ship_s60_tutorial/fr "FreeCAD-Ship s60 tutorial/fr")
* [Tutoriel Construction navale S60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/fr "FreeCAD-Ship s60 tutorial (II)/fr")

## Références

[1] [D. Savitsky, “Hydrodynamic design of planing hulls,” Marine Technology, Octubre 1964.](https://www.boatdesign.net/attachments/hydrodynamic-design-of-planing-hulls-savitsky-1964-pdf.89527/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_ResistanceSavitsky/fr&oldid=1557249>"