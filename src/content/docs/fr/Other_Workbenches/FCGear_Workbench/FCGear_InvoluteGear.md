---
title: FCGear Engrenage à développante
---
|  |
| --- |
| FCGear Engrenage à développante |
| Emplacement du menu |
| Gear → Involute Gear |
| Ateliers |
| [FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr") |
| Raccourci par défaut |
| Aucun |
| Introduit dans la version |
| v0.16 |
| Voir aussi |
| [FCGear Engrenage cycloïde](/FCGear_CycloideGear/fr "FCGear CycloideGear/fr") |
|  |

## Description

En raison du rapport d'engrènement favorable et de la production relativement simple, l'engrenage à développante est la forme de dent la plus courante en génie mécanique. Les roues dentées se trouvent partout où le mouvement et la force doivent être transférés d'une pièce à l'autre. Par exemple, ils peuvent être trouvés dans des machines, des voitures, des montres ou des appareils électroménagers. Le mouvement est souvent transféré directement d'une roue dentée à l'autre, mais parfois aussi via une chaîne. De plus, le sens de rotation peut être modifié. Il est également possible de changer un mouvement radial en un mouvement linéaire via un [FCGear Engrenage à crémaillère](/FCGear_InvoluteRack/fr "FCGear InvoluteRack/fr").

![](/images/Involute-Gear_example.png)

De gauche à droite: Engrenage droit, engrenage hélicoïdal, engrenage double hélicoïdal

## Utilisation

1. Passez à l'![](/images/FCGear_workbench_icon.svg) [atelier FCGear](/FCGear_Workbench/fr "FCGear Workbench/fr").
2. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur ![](/images/FCGear_InvoluteGear.svg) Involute Gear dans la barre d'outils.
   * Sélectionnez l'option **Gear → ![](/images/FCGear_InvoluteGear.svg) Involute Gear** dans le menu.
3. Modifiez le paramètre de l'engrenage en fonction des conditions requises (voir [Propriétés](#Propri.C3.A9t.C3.A9s)).

## Propriétés

Un objet FCGear InvoluteGear est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

accuracy

* Données**numpoints** (`Integer`) : valeur par défaut à `20`. Changement du profil de la développante. La modification de la valeur peut conduire à des résultats inattendus.
* Données**simple** (`Bool`) : valeur par défaut à `false`. `true` génère un affichage simplifié (sans dents et seulement un cylindre en diamètre primitif).

base

* Données**height** (`Length`) : valeur par défaut à `5 mm`. Valeur de la largeur de l'engrenage.
* Données**module** (`Length`) : valeur par défaut à `1 mm`. Module est le rapport du diamètre de référence de l'engrenage divisé par le nombre de dents (voir [Remarques](#Remarques)).
* Données**num\_teeth** (`Integer`) : valeur par défaut à `15`. Nombre de dents (voir [Remarques](#Remarques)).

computed

* Données**addendum\_diameter** (`Length`) : valeur par défaut à `17 mm`. Diamètre extérieur, mesuré au niveau de l'addendum (l'extrémité des dents).
* Données**angular\_backlash** (`Angle`) : (en lecture seule) angle selon lequel cet engrenage peut tourner sans déplacer l'engrenage correspondant.
* Données**pitch\_diameter** (`Length`) : valeur par défaut à `15 mm`. Le diamètre primitif.
* Données**root\_diameter** (`Length`) : (en lecture seule) diamètre de la racine, mesuré au pied des dents.
* Données**transverse\_pitch** (`Length`) : valeur par défaut à `3.14 mm`. Le pas transversal.
* Données**traverse\_module** (`Length`) : valeur par défaut à `1 mm`. Le module transversal de l'engrenage généré.

fillets

* Données**head\_fillet** (`Float`) : valeur par défaut à `0 mm`. Un congé pour la tête de la dent.
* Données**root\_fillet** (`Float`) : valeur par défaut à `0 mm`. Un congé pour la racine de la dent.
* Données**undercut** (`Bool`) : valeur par défaut à `false`. `true` modifie le profil de la racine de la dent (voir [Remarques](#Remarques)).

helical

* Données**double\_helix** (`Bool`) : valeur par défaut à `false`, `true` crée un engrenage à double hélice (voir [Remarques](#Remarques)).
* Données**helix\_angle** (`Angle`) : valeur par défaut à `0 °`. Avec l'angle d'hélice β, un engrenage hélicoïdal est créé - valeur positive → sens de rotation à droite, valeur négative → sens de rotation à gauche (voir [Remarques](#Remarques)).
* Données**properties\_from\_tool** (`Bool`) : valeur par défaut à `false`. Si `true` et que Données**helix\_angle** est différent de zéro, les paramètres de l'engrenage sont recalculés en interne pour l'engrenage tourné.

hole

* Données**Axle\_hole** (`Bool`) : valeur par défaut à `false`. `true` active un trou central pour un axe.
* Données**Axle\_holesize** (`Length`) : valeur par défaut à `10 mm`. Diamètre du trou pour un axe.
* Données**offset\_hole** (`Bool`) : valeur par défaut à `false`, `true` active un trou décalé.
* Données**offset\_holeoffset** (`Length`) : valeur par défaut à `10 mm`. Le décalage du trou de décalage.
* Données**offset\_holesize** (`Length`) : valeur par défaut à `10 mm`. Le diamètre du trou de décalage.

involute

* Données**pressure\_angle** (`Angle`) : valeur par défaut à `20 °` (voir [Remarques](#Remarques)).
* Données**shift** (`Float`) : valeur par défaut à `0`. Génère un décalage de profil positif et négatif (voir [Remarques](#Remarques)).

tolerance

* Données**backlash** (`Length`) : valeur par défaut à `0`. Le jeu, également appelé lash ou play, est la distance entre les dents d'une paire d'engrenages.
* Données**clearance** (`Float`) : valeur par défaut à `0.25` (voir [Remarques](#Remarques)).
* Données**head** (`Float`) : valeur par défaut à `0`. Cette valeur est utilisée pour modifier la hauteur de la dent.
* Données**reversed\_backlash** (`Bool`) : `true` diminution du jeu, `false` (valeur par défaut) augmentation du jeu. (voir [Remarques](#Remarques)).

version

* Données**version** (`String`) :

## Remarques

* *beta* : lorsque *beta* est modifié, le *diamètre primitif* change également. La formule suivante illustre l'interaction des paramètres: d = m \* Z / cos beta (Z = nombre de dents, d = diamètre primitif, m = module). Cela signifie pour l'engrenage droit: cos beta = 0 et pour l'engrenage hélicoïdal: cos beta> 0. Cependant un angle d'hélice inférieur à 10° n'a guère d'avantages par rapport aux dents droites.
* *clearance* : sur une paire d'engrenages, le jeu est la distance entre l'extrémité de la dent du premier engrenage et la racine de la dent du deuxième engrenage.
* *double\_gear* : pour utiliser le double engrenage hélicoïdal, l'angle d'hélice β (*beta*) pour l'engrenage hélicoïdal doit d'abord être entré.
* *module* : en utilisant les directives ISO (Organisation internationale de normalisation), la taille du module est désignée comme l'unité représentant la taille des dents des engrenages. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). Si vous multipliez Module par Pi, vous pouvez obtenir Pitch (p) (le pas). Le pas est la distance entre les points correspondants sur les dents adjacentes.
* *shift* : le décalage de profil n'est pas simplement utilisé pour empêcher la contre-dépouille. Il peut être utilisé pour régler la distance centrale entre deux vitesses. Si une correction positive est appliquée, de manière à éviter la contre-dépouille dans un pignon, l'épaisseur de la dent en haut est plus fine.
* *teeth* : si le nombre de dents est modifié, le diamètre primitif change également (*dw*).
* *undercut* : undercut est utilisé lorsque le nombre de dents d'un engrenage est trop petit. Dans le cas contraire, l'accouplement coupera dans la racine de la dent. La contre-dépouille affaiblit non seulement la dent avec une taille de guêpe, mais supprime également une partie de la développante utile adjacente au cercle de base.
* *pressure\_angle* : 20° est une valeur standard ici. L'angle de pression est défini comme l'angle entre la ligne d'action (tangente commune aux cercles de base) et une perpendiculaire à la ligne de centre. Ainsi, pour les engrenages standard, les engrenages à angle de pression de 14,5° ont des cercles de base beaucoup plus proches des racines des dents que les engrenages à 20°. C'est pour cette raison que les engrenages de 14,5° rencontrent des problèmes de sous-coupe plus importants que les engrenages de 20°. Important. l'angle de pression change avec un changement de profil. ne modifiez le paramètre que si une connaissance suffisante de la géométrie de l'engrenage est disponible.
* *reversed\_backlash* : s'il y a plusieurs vitesses, faites attention à la vitesse pour laquelle le paramètre est réglé.

## Limitations

Un profil de dent en 2D, obtenu en fixant la valeur de Données**height** à zéro, ne peut pas être utilisé avec des caractéristiques nécessitant une forme en 2D. Par exemple, les fonctions [PartDesign Protrusion](/PartDesign_Pad/fr "PartDesign Pad/fr") et [PartDesign Hélice additive](/PartDesign_AdditiveHelix/fr "PartDesign AdditiveHelix/fr") n'acceptent pas un tel profil comme base. Pour les détails techniques, veuillez vous reporter à la question connexe [issue on GitHub](https://github.com/looooo/freecad.gears/issues/97).

## Formules utiles

### Engrenages droits standards

Le terme "standard" désigne ici les engrenages droits sans coefficient de décalage de profil (

x
{\displaystyle x}
![{\displaystyle x}](https://wikimedia.org/api/rest_v1/media/math/render/svg/87f9e315fd7e2ba406057a97300593c4802b53e4)).

Formules de base communes aux engrenages cylindriques standard internes et externes

| Symbole | Terme | Formule | Paramètre FCGear |
| --- | --- | --- | --- |
| m {\displaystyle m} {\displaystyle m} | *Module* | - | module {\displaystyle {\texttt {module}}} {\displaystyle {\texttt {module}}} |
| z {\displaystyle z} {\displaystyle z} | *Nombre de dents* | - | teeth {\displaystyle {\texttt {teeth}}} {\displaystyle {\texttt {teeth}}} |
| α {\displaystyle \alpha } {\displaystyle \alpha } | *Angle de pression* | Typiquement,     α =  20  ∘ {\displaystyle \alpha =20^{\circ }} {\displaystyle \alpha =20^{\circ }} | pressure  \_   angle {\displaystyle {\texttt {pressure}}{\\_}{\texttt {angle}}} {\displaystyle {\texttt {pressure}}{\_}{\texttt {angle}}} |
| d {\displaystyle d} {\displaystyle d} | *Diamètre de référence* ou *Diamètre primitif*. | z ⋅ m {\displaystyle z\cdot m} {\displaystyle z\cdot m} | dw {\displaystyle {\texttt {dw}}} {\displaystyle {\texttt {dw}}} |
| h  a  ∗ {\displaystyle h\_{a}^{\*}} {\displaystyle h_{a}^{*}} | *Coefficient de l'addendum* | Typiquement,      h  a  ∗ = 1 {\displaystyle h\_{a}^{\*}=1} {\displaystyle h_{a}^{*}=1} | h  a  ∗ = 1 +   head {\displaystyle h\_{a}^{\*}=1+{\texttt {head}}} {\displaystyle h_{a}^{*}=1+{\texttt {head}}} |
| h  f  ∗ {\displaystyle h\_{f}^{\*}} {\displaystyle h_{f}^{*}} | *Coefficient du dedendum* | Typiquement,      h  f  ∗ = 1.25 {\displaystyle h\_{f}^{\*}=1.25} {\displaystyle h_{f}^{*}=1.25} | h  f  ∗ = 1 +   clearance {\displaystyle h\_{f}^{\*}=1+{\texttt {clearance}}} {\displaystyle h_{f}^{*}=1+{\texttt {clearance}}} |
| h  a {\displaystyle h\_{a}} {\displaystyle h_{a}} | *Addendum* | h  a =  h  a  ∗ ⋅ m {\displaystyle h\_{a}=h\_{a}^{\*}\cdot m} {\displaystyle h_{a}=h_{a}^{*}\cdot m} | - |
| h  f {\displaystyle h\_{f}} {\displaystyle h_{f}} | *Dedendum* | h  f =  h  f  ∗ ⋅ m {\displaystyle h\_{f}=h\_{f}^{\*}\cdot m} {\displaystyle h_{f}=h_{f}^{*}\cdot m} | - |
| h {\displaystyle h} {\displaystyle h} | *Hauteur des dents* or *Profondeur des dents* | h =  h  a +  h  f {\displaystyle h=h\_{a}+h\_{f}} {\displaystyle h=h_{a}+h_{f}}   Typically,     h = 2.25 ⋅ m {\displaystyle h=2.25\cdot m} {\displaystyle h=2.25\cdot m} | - |
| x {\displaystyle x} {\displaystyle x} | *Coefficient de décalage du profil* | Pour les engrenages standards,     x = 0 {\displaystyle x=0} {\displaystyle x=0} | shift {\displaystyle {\texttt {shift}}} {\displaystyle {\texttt {shift}}} |

Formules de base spécifiques aux engrenages cylindriques externes standard

| Symbole | Terme | Formule |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Diamètre de la tête* | d  a = d + 2 ⋅  h  a {\displaystyle d\_{a}=d+2\cdot h\_{a}} {\displaystyle d_{a}=d+2\cdot h_{a}}   Typiquement,      d  a = ( z + 2 ) ⋅ m {\displaystyle d\_{a}=(z+2)\cdot m} {\displaystyle d_{a}=(z+2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Diamètre de base* | d  f = d − 2 ⋅  h  f {\displaystyle d\_{f}=d-2\cdot h\_{f}} {\displaystyle d_{f}=d-2\cdot h_{f}}   Typiquement,      d  f = ( z − 2.5 ) ⋅ m {\displaystyle d\_{f}=(z-2.5)\cdot m} {\displaystyle d_{f}=(z-2.5)\cdot m} |

Formules de base spécifiques aux engrenages cylindriques standard internes

| Symbole | Terme | Formule |
| --- | --- | --- |
| d  a {\displaystyle d\_{a}} {\displaystyle d_{a}} | *Diamètre de la tête* | d  a = d − 2 ⋅  h  a {\displaystyle d\_{a}=d-2\cdot h\_{a}} {\displaystyle d_{a}=d-2\cdot h_{a}}   Typiquement,      d  a = ( z − 2 ) ⋅ m {\displaystyle d\_{a}=(z-2)\cdot m} {\displaystyle d_{a}=(z-2)\cdot m} |
| d  f {\displaystyle d\_{f}} {\displaystyle d_{f}} | *Diamètre de base* | d  f = d + 2 ⋅  h  f {\displaystyle d\_{f}=d+2\cdot h\_{f}} {\displaystyle d_{f}=d+2\cdot h_{f}}   Typiquement,      d  f = ( z + 2.5 ) ⋅ m {\displaystyle d\_{f}=(z+2.5)\cdot m} {\displaystyle d_{f}=(z+2.5)\cdot m} |

Formules de base spécifiques à une paire d'engrenages cylindriques standard externes

| Symbole | Terme | Formule |
| --- | --- | --- |
| a {\displaystyle a} {\displaystyle a} | *Distance entre centres* | a =     d  1 +  d  2 2 {\displaystyle a={\frac {d\_{1}+d\_{2}}{2}}} {\displaystyle a={\frac {d_{1}+d_{2}}{2}}} |
| c {\displaystyle c} {\displaystyle c} | *Dégagement de la tête et de la base* | c  1 =  h  f 2 −  h  a 1 {\displaystyle c\_{1}=h\_{f2}-h\_{a1}} {\displaystyle c_{1}=h_{f2}-h_{a1}}   c  2 =  h  f 1 −  h  a 2 {\displaystyle c\_{2}=h\_{f1}-h\_{a2}} {\displaystyle c_{2}=h_{f1}-h_{a2}}   Typiquement,     c = 0.25 ⋅ m {\displaystyle c=0.25\cdot m} {\displaystyle c=0.25\cdot m} |

* **Engrenage hélicoïdal et double hélice**
  + *pitch diameter (dw)* = *module* \* *teeth* : *cos beta*
  + *axle base* = *(pitch diameter (dw) 1 + pitch diameter (dw) 2)* : 2
  + *addendum diameter* = *pitch diameter (dw)* + 2 \* *module*
  + *module* = *pitch diameter (dw)* \* *cos beta* : *teeth*

## Script

Utilisez la puissance de Python pour automatiser la modélisation de votre engrenage:

```
import FreeCAD as App
import freecad.gears.commands
gear = freecad.gears.commands.CreateInvoluteGear.create()
gear.teeth = 20
gear.beta = 20
gear.height = 10
gear.double_helix = True
App.ActiveDocument.recompute()
Gui.SendMsgToActiveView("ViewFit")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_InvoluteGear/fr&oldid=1529288>"