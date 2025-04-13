---
title: Ship Hydrostatiques
---
|  |
| --- |
| Ship Hydrostatiques |
| Emplacement du menu |
| Ship design → Hydrostatics |
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

Trace l'hydrostatique du bateau.

![](/images/FreeCAD-Ship-HydrostaticsCurves.png)

Exemple de courbes hydrostatiques

Le calcul hydrostatique est une étape critique de la conception d'un bateau, il permet de comprendre les principaux paramètres de stabilité sous-jacents de la coque.

Il s'agit en effet de données obligatoires pour que le bateau soit certifié par les sociétés de classification. Combinées aux informations sur les conditions de charge, elles fournissent les informations les plus fondamentales sur la stabilité du bateau.

L'atelier Ship trace l'hydrostatique en 3 groupes principaux. Dans tous ces groupes, la courbe Δ(T) (rapport entre le déplacement et le tirant d'eau) est représentée. Bien que de nombreuses autres hydrostatiques puissent être envisagées, elles peuvent être dérivées de celles déjà fournies, qui sont documentées ci-dessous.

### Hydrostatique basée sur le volume

Il y a 3 hydrostatiques (malgré Δ(T)) inclus dans cette catégorie :

* Surface mouillée (WSA).
* Moment d'inclinaison du bateau de 1 cm (MCT).
* Position longitudinale du centre de bouyance (XCB).

En tant que quantité de surface en contact avec l'eau, la WSA est fortement liée à la dynamique du bateau, y compris la résistance du bateau et la tenue à la mer. De plus, la WSA fait partie du facteur de renormalisation de nombreux coefficients non dimensionnels du bateau, comme le coefficient de traînée :

c

d
=

F

d

1
2
ρ

u

2
S
,
{\displaystyle c\_{\mathrm {d} }={\dfrac {F\_{\mathrm {d} }}{{\dfrac {1}{2}}\rho u^{2}S}},}

![{\displaystyle c_{\mathrm {d} }={\dfrac {F_{\mathrm {d} }}{{\dfrac {1}{2}}\rho u^{2}S}},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/878897a4dc79cd6c40e1e9860bfb8e11098f45be)

avec 

F

d
{\displaystyle F\_{\mathrm {d} }}
![{\displaystyle F_{\mathrm {d} }}](https://wikimedia.org/api/rest_v1/media/math/render/svg/94c70082e398a95e8d658918edea80a198a2351d) la force de traînée, 

ρ
{\displaystyle \rho }
![{\displaystyle \rho }](https://wikimedia.org/api/rest_v1/media/math/render/svg/1f7d439671d1289b6a816e6af7a304be40608d64) la densité de l'eau, 

u
{\displaystyle u}
![{\displaystyle u}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c3e6bb763d22c20916ed4f0bb6bd49d7470cffd8) la vitesse du bateau et 

S
{\displaystyle S}
![{\displaystyle S}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4611d85173cd3b508e67077d4a1252c9c05abca2) le WSA.

Le MCT joue un rôle majeur dans la planification des conditions de charge, car il donne des informations sur l'effet du déplacement de toute charge le long du bateau. Le MCT réel est calculé en fonction de la distance transversale entre le centre de gravité et le métacentre, GML, ce qui nécessite évidemment la position du centre de gravité. Toutefois, comme il s'agit d'une pratique courante en architecture navale, la distance entre ce métacentre et le centre de flottabilité, BML, est considérée comme similaire à cette GML (

G
M
L

/
B
M
L
≃
1
{\displaystyle GML/BML\simeq 1}
![{\displaystyle GML/BML\simeq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/79cfdc2f5a24796f4c083c42aef667f9a7eb8478)). Veuillez noter que cela n'est valable que pour la direction longitudinale (

G
M
T

/
B
M
T
≠
1
{\displaystyle GMT/BMT\neq 1}
![{\displaystyle GMT/BMT\neq 1}](https://wikimedia.org/api/rest_v1/media/math/render/svg/3d517ac2f89d3347f8070d8b9051c342387ee0eb)).

Parfois, le BML est préféré au MCT. Si c'est votre cas, il vous suffit d'en faire la demande.

B
M
L
=

100

L

M
C
T
Δ
,
{\displaystyle BML={\dfrac {100\,\,L\,\,MCT}{\Delta }},}

![{\displaystyle BML={\dfrac {100\,\,L\,\,MCT}{\Delta }},}](https://wikimedia.org/api/rest_v1/media/math/render/svg/2c6a2ca8c5328926f289b6b1685d2fee080a5166)

avec 

L
{\displaystyle L}
![{\displaystyle L}](https://wikimedia.org/api/rest_v1/media/math/render/svg/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) la longueur en mètres et 

Δ
{\displaystyle \Delta }
![{\displaystyle \Delta }](https://wikimedia.org/api/rest_v1/media/math/render/svg/32769037c408874e1890f77554c65f39c523ebe2) le déplacement.

Le XCB indique de toute évidence l'angle d'inclinaison qui devrait permettre au bateau d'avancer en fonction de la répartition du poids.

### Hydrostatique de la stabilité

Ces hydrostatiques sont davantage liées à la stabilité transversale du bateau. Les hydrostatiques suivantes sont fournies par l'atelier des bateaux :

* Surface de flottaison/aire de flottaison (WP).
* Distance entre la quille et le centre de bouée (KB).
* Distance entre le centre de bouée et le métacentre (BMT)

La surface de flottaison est largement liée à ce que l'on appelle la rigidité hydrostatique, ou en d'autres termes la résistance présentée par le bateau à toute perturbation.

D'autre part, le KB et le BMT sont des paramètres critiques pour déterminer la stabilité transversale du bateau pour les petits angles. En effet, lorsque le centre de gravité est défini (cela peut être fait avec les outils [Ship Poids](/Ship_Weight/fr "Ship Weight/fr"), [Ship Réservoir](/Ship_Tank/fr "Ship Tank/fr") et [Ship Charge](/Ship_LoadCondition/fr "Ship LoadCondition/fr")), le principal paramètre de stabilité pour les petits angles peut être facilement calculé,

G
M
T
=
K
B
+
B
M
T
−
K
G
.
{\displaystyle GMT=KB+BMT-KG.}

![{\displaystyle GMT=KB+BMT-KG.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bc35a5ce9c1852e82405bdb246eda166ebd956f)

Ce paramètre doit en effet avoir une valeur minimale qui dépend du type et de la taille du bateau, et sera donc interrogé par les sociétés de classification.

### Coefficients

Certains coefficients sont généralement pris en compte dès les premières étapes de la conception d'un bateau pour évaluer la qualité de la surface du bateau, ou en d'autres termes, son comportement hydrodynamique.

* Coefficient de blocage (Cb).
* Coefficient de flottement (Cf).
* Coefficient de trame principale (Cm).

Cb est le rapport entre le volume de la partie immergée du bateau et le volume de sa boîte englobante, c'est-à-dire la plus petite boîte pouvant contenir le bateau. Cm et Cf sont ses équivalents en 2D, devenant le rapport Cm entre la surface de la structure principale du bateau et sa boîte de délimitation, et Cf le rapport entre la surface du plan d'eau et sa boîte de délimitation.

Alors que de grandes valeurs de Cb entraîneront inexorablement des bateaux inefficaces, avec des valeurs de Cb plus modérées, il est nécessaire de combiner les informations avec Cm et Cf. De grandes valeurs de Cf indiquent une grande empreinte à la surface de l'eau, ce qui indique généralement une grande résistance du bateau due à la génération de vagues. Au contraire, plus Cm est grand, plus le volume du corps du bateau est concentré sur la partie centrale, et donc des formes fines peuvent être attendues à l'avant et à l'arrière, ce qui est généralement bon pour l'hydrodynamique.

## Utilisation

Pour calculer la courbe des aires transversales, sélectionnez une **instance de bateau** (voir [Ship CreateShip](/Ship_CreateShip/fr "Ship CreateShip/fr")), et lancez **Ship design → ![](/images/Ship_Hydrostatics.svg) Hydrostatics**.

Le panneau des tâches s'affiche. Vous devez sélectionner l'angle d'assiette ainsi que la plage de tirants d'eau à prendre en compte. Vous pouvez également sélectionner le nombre d'échantillons à prélever entre le tirant d'eau minimum et maximum. Plus le nombre d'échantillons est important, plus le calcul sera long.

Appuyez sur le bouton Accept lorsque vous êtes prêt, afin que le module bateau commence le calcul. Pendant le calcul, FreeCAD devient presque sans réponse. Il trace cependant les informations en temps réel, ainsi qu'une barre de progression du processus. Vous pouvez passer à un autre onglet de tracé, ou arrêter le calcul en appuyant sur le bouton Cancel. Soyez patient car ces actions seront exécutées juste après la fin du calcul de l'échantillon suivant.

## Tutoriels

* [Tutoriel Construction navale S60](/FreeCAD-Ship_s60_tutorial/fr "FreeCAD-Ship s60 tutorial/fr")
* [Tutoriel Construction navale S60 (II)](/FreeCAD-Ship_s60_tutorial_(II)/fr "FreeCAD-Ship s60 tutorial (II)/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Ship_Hydrostatics/fr&oldid=1483365>"