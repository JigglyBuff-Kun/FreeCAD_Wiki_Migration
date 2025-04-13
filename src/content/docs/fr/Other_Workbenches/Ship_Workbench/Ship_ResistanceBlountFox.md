---
title: Ship Résistance Blount et Fox
---
|  |
| --- |
| Ship Résistance Blount et Fox |
| Emplacement du menu |
| Resistance → Resistance Amadeo predicion |
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

Calcule la résistance des navires par la méthode Blount et Fox. Cette méthode a été formulée par Donald L. Blount et David L. Fox en 1976 [1], et s'applique aux navires rapides en régime de pré-planage. Elle est basée sur une correction de Savitsky [2] à faible vitesse.

Trace la courbe de résistance, l'assiette d'équilibre, la prédiction de puissance et les coefficients de résistance. Exporte également les résultats vers une feuille de calcul.

* ![Graphe de résistance obtenu par la méthode de Blount et Fox.](/images/BlountFox_resistance_graph.png)

  Graphe de résistance obtenu par la méthode de Blount et Fox.
* ![Graphe de l'assiette d'équilibre obtenu par la méthode de Blount et Fox.](/images/BlountFox_trim_graph.png)

  Graphe de l'assiette d'équilibre obtenu par la méthode de Blount et Fox.
* ![Graphe de puissance obtenu par la méthode de Blount et Fox.](/images/BlountFox_power_graph.png)

  Graphe de puissance obtenu par la méthode de Blount et Fox.
* ![Graphe des coefficients de résistance obtenu par la méthode de Blount et Fox.](/images/BlountFox_coefficient_graph.png)

  Graphe des coefficients de résistance obtenu par la méthode de Blount et Fox.
* ![Feuille de calcul générée par la méthode de Blount et Fox.](/images/BlountFox_spreadsheet.png)

  Feuille de calcul générée par la méthode de Blount et Fox.

### Graphe de résistance

La résistance est représentée en kN, en fonction de la vitesse en nœuds. Elle comprend la résistance totale, la résistance totale et la résistance à la pression. La boîte de dialogue comprend une case à cocher permettant d'inclure les courbes de résistance de Blount et Fox et de Savitsky dans le graphique, ce qui permet à l'utilisateur de comparer plus facilement les deux méthodes de résistance.

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

Les limites de l'application de la méthode de correction de Blount et Fox sont les suivantes :

F

Δ
≥
1.0
{\displaystyle F\_{\Delta }\geq 1.0}
![{\displaystyle F_{\Delta }\geq 1.0}](https://wikimedia.org/api/rest_v1/media/math/render/svg/641ac8363a1c294994ccbff59abaa92ea95c30a0)

L
C
G

L

P
≤
0.46
{\displaystyle {\frac {LCG}{L\_{P}}}\leq 0.46}
![{\displaystyle {\frac {LCG}{L_{P}}}\leq 0.46}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ad1348ceb00ecfaf8bc7542bfdd16e3b424ae1bf)

où :

* F

  Δ
  {\displaystyle F\_{\Delta }}
  ![{\displaystyle F_{\Delta }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7d57e00a212303e63389cd343127ec10dd2081a0) est le nombre de Froude volumétrique, défini par l'expression suivante :  

  F

  Δ
  =

  V

  g

  ∇

  1
  3
  {\displaystyle F\_{\Delta }={\frac {V}{\sqrt {g\nabla ^{\frac {1}{3}}}}}}
  ![{\displaystyle F_{\Delta }={\frac {V}{\sqrt {g\nabla ^{\frac {1}{3}}}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/479bebf2f19772abd13c23ba5736150bfa4da71c)
* L
  C
  G
  {\displaystyle LCG}
  ![{\displaystyle LCG}](https://wikimedia.org/api/rest_v1/media/math/render/svg/33ce1caede792a451e0d26a72c83accdf27dd5c9) est le centre de gravité longitudinal du navire.
* L

  P
  {\displaystyle L\_{P}}
  ![{\displaystyle L_{P}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/b2579498b31fad37f12a5f29864f14be642ccdc0) est la longueur de quille projetée du navire.

Ces limites étendent l'application de la méthode Savitsky aux conditions de faible vitesse.

## Utilisation

Cet outil ne dépend pas strictement d'une **instance de navire** (voir [Ship Coque](/Ship_CreateShip "Ship CreateShip")), ce qui signifie qu'il est possible de l'utiliser en introduisant les valeurs de données nécessaires dans la fenêtre de dialogue.

### Utilisation de la géométrie du navire

Pour exécuter la méthode, sélectionnez une **instance de navire** et cliquez sur la commande **Resistance → ![](/images/Ship_ResistanceBlountFox.svg) Resistance Blount and Fox prediction**.

Les données du navire sont obtenues à partir du navire et l'utilisateur n'a plus qu'à saisir les conditions limites. Les données obtenues à partir du navire peuvent être éditées.

### Utiliser les données du navire

Pour introduire les données du navire manuellement, cliquez sur la commande **Resistance → ![](/images/Ship_ResistanceBlountFox.svg) Resistance Blount and Fox prediction** et remplissez les champs de la fenêtre de dialogue.

## Tutoriels

* [Tutoriel Construction navale S60](/FreeCAD-Ship_s60_tutorial/fr "FreeCAD-Ship s60 tutorial/fr")
* [Tutoriel Construction navale S60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/fr "FreeCAD-Ship s60 tutorial (II)/fr")

## Références

[1] [D. L.Blount and D. L.Fox, “Small-craft power prediction,” Marine Technology, Vol. 13, No. 1, Enero 1976.](https://www.researchgate.net/publication/285819636_Small-Craft_Power_Prediction)

[2] [D. Savitsky, “Hydrodynamic design of planing hulls,” Marine Technology, Octubre 1964.](https://www.boatdesign.net/attachments/hydrodynamic-design-of-planing-hulls-savitsky-1964-pdf.89527/)

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_ResistanceBlountFox/fr&oldid=1557246>"