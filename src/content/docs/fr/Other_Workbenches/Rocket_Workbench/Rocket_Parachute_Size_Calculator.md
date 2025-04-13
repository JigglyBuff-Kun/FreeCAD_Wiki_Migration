---
title: Rocket Calcul taille parachute
---
|  |
| --- |
| Rocket Calcul taille parachute |
| Emplacement du menu |
| Rocket → Calculators → Parachute Size Calculator |
| Ateliers |
| [Rocket](/Rocket_Workbench/fr "Rocket Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

## Description

Ce calculateur détermine la taille du parachute nécessaire pour atteindre le taux de descente souhaité en fonction des paramètres du parachute.

Le taux de descente souhaité dépend de vos besoins. En règle générale, le parachute principal devrait ralentir la fusée à environ 

6.1

m

/
s

(
20

f

/
s
)
{\displaystyle 6.1\,m/s\,(20\,f/s)}
![{\displaystyle 6.1\,m/s\,(20\,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/40a24a4b012989ec1c993dbce69b4b6f9649732c) tandis que le drone devrait permettre au parachute de descendre beaucoup plus rapidement

18.3

m

/
s

(
60

f

/
s
)
{\displaystyle 18.3\,m/s\,(60\,f/s)}
![{\displaystyle 18.3\,m/s\,(60\,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/e052eb7c74813aaf68659fd7e673ad248d5c5f41) - 

21.3

m

/
s

(
70

f

/
s
)
{\displaystyle 21.3\,m/s\,(70\,f/s)}
![{\displaystyle 21.3\,m/s\,(70\,f/s)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/4c202b737c2036897ff356a0d444c7bdf1ed6997). L'éditeur dispose de préréglages pour ceux-ci, la valeur pour le parachute de freinage se situant au milieu de la plage. Vous pouvez définir un taux de descente personnalisé en fonction de vos besoins.

Une valeur clé pour déterminer le taux de descente est le coefficient de traînée (

C

D
{\displaystyle C\_{D}}
![{\displaystyle C_{D}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b0d15598a7c5085c97643aeaa00dcaa98a23975)). La valeur exacte de celui-ci dépendra de divers facteurs, notamment de la forme du parachute. Des préréglages sont fournis pour des parachutes découpés dans un morceau de matériau plat (rond, carré, hexagonal) comme ceux fournis par de nombreux kits, et pour une véritable forme de dôme. Votre fabricant de parachutes peut fournir une meilleure valeur pour ce coefficient.

## Utilisation

![](/images/Calc_parachute_size.png)

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le ![](/images/Rocket_Calculator.svg) Parachute Size Calculator.
   * Sélectionnez l'option **Rocket → Calculators → ![](/images/Rocket_Calculator.svg) Parachute Size Calculator** dans le menu.
2. Saisissez le poids de votre fusée et les paramètres de votre parachute.

## Calculs

La taille du parachute est déterminée par la masse de la fusée, le taux de descente souhaité et les caractéristiques de traînée du parachute. Le calcul se fait en deux étapes. On calcule d'abord la surface du parachute :

:   :   A
        =

        2
        m
        g

        ρ

        v

        T

        2

        C

        D
        {\displaystyle A={2mg \over {\rho v\_{T}^{2}C\_{D}}}}
        ![{\displaystyle A={2mg \over {\rho v_{T}^{2}C_{D}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5425c768ead50d38096d9252cd62f42efc90f09e)

où

:   :   m
        =
        {\displaystyle m=}
        ![{\displaystyle m=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/42ca1e8909ec6751b821936017e812bde5a375c3) la masse de la fusée
    :   v

        T
        =
        {\displaystyle v\_{T}=}
        ![{\displaystyle v_{T}=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/69b0574d291faa1cd99bbe4f4b4dd42f98b87f4e)vitesse terminale souhaitée
    :   C

        D
        =
        {\displaystyle C\_{D}=}
        ![{\displaystyle C_{D}=}](https://wikimedia.org/api/rest_v1/media/math/render/svg/958bc6b82a036c45c0d61b0685973ab12c284ae3)coefficient de traînée du parachute
    :   ρ
        =
        1.22
        {\displaystyle \rho =1.22}
        ![{\displaystyle \rho =1.22}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d89a28e344dc3d108fbfcc69067717932597e58b) densité de l'air, moyenne au niveau de la mer en 

        k
        g

        /

        m

        3
        {\displaystyle kg/m^{3}}
        ![{\displaystyle kg/m^{3}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d7a55ebb7f5ff4471037d34b671b2563fc63662b) à 

        15
        C
        {\displaystyle 15C}
        ![{\displaystyle 15C}](https://wikimedia.org/api/rest_v1/media/math/render/svg/344a22c8a2f9d0758b2fdacca3269bfc81be81dc).
    :   g
        =
        9.807
        {\displaystyle g=9.807}
        ![{\displaystyle g=9.807}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1bf912a68d3f40f5ef38ca30b5dec517c770f399) accélération due à la gravité en 

        m

        /

        s

        2
        {\displaystyle m/s^{2}}
        ![{\displaystyle m/s^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87bdaef754cd6687de90271126d73c95efa580e7).

Le diamètre est ensuite calculé à partir de la surface en fonction de la forme.

Pour les parachutes hexagonaux :

:   :   D
        =

        2
        A

        s
        q
        r
        t

        3
        {\displaystyle D={\sqrt {2A \over sqrt{3}}}}
        ![{\displaystyle D={\sqrt {2A \over sqrt{3}}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/009ae9f03d370ee044c6ac168d22a199813c1eaa)

Pour les parachutes carrés, le diamètre est la longueur de chaque côté.

:   :   D
        =

        A
        {\displaystyle D={\sqrt {A}}}
        ![{\displaystyle D={\sqrt {A}}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c010f6c3808217a3e4e10737eb45606a9fdf2c1e)

Pour tous les autres parachutes, la forme est supposée être circulaire.

:   :   D
        =

        4
        A
        π
        {\displaystyle D={\sqrt {4A \over \pi }}}
        ![{\displaystyle D={\sqrt {4A \over \pi }}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/38f9c24328f8491ba3915dd12806306c3686fdeb)

### Unités

Les calculs sont effectués en unités métriques, mais s'affichent dans les unités de votre choix. Les valeurs peuvent également être saisies dans n'importe quelle unité en incluant les unités dans la valeur (*ex* 5 oz, ou 23,2 g).

## Références

1. <http://www.rocketmime.com/rockets/descent.html>
2. <https://descentratecalculator.onlinetesting.net/>
3. <https://www.math.net/area-of-a-hexagon>

Retrieved from "<http://wiki.freecad.org/index.php?title=Rocket_Parachute_Size_Calculator/fr&oldid=868556>"