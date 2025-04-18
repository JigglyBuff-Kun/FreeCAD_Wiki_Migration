---
title: Expressions
---
## Présentation

Il est possible de définir des propriétés à l'aide d'expressions mathématiques. Dans l'interface graphique, les boîtes de dialogue ou les champs de saisie liés aux propriétés affichent une icône bleue ![](/images/Bound-expression.svg) lorsqu'ils sont activés. Cliquer sur l'icône ou taper le signe égal = ouvre l'éditeur d'expression pour cette propriété particulière. Si le champ de saisie affiche un bouton ... au lieu d'une icône, l'éditeur d'expression peut être ouvert en cliquant avec le bouton droit de la souris sur la propriété et en sélectionnant **Expression...** dans le menu contextuel.

Une expression FreeCAD est une expression mathématique utilisant les [opérateurs](#Opérateurs_pris_en_charge) mathématiques standard, les [fonctions](#Fonctions_supportées) et [constantes prédéfinies](#Constantes_prises_en_charge) comme décrit ci-dessous. En outre, une expression peut faire référence à des propriétés d'objet et utiliser des [conditions](#Expressions_conditionnelles). Les nombres d'une expression peuvent être éventuellement associés à une [unité](#Unités).

Les nombres peuvent utiliser une virgule `,` ou un point décimal `.` pour séparer les chiffres entiers des décimales. Lorsque le séparateur décimal est utilisé, il *doit* être suivi d'au moins un chiffre. Ainsi, les expressions `1. + 2.` et `1, + 2,` ne sont pas valides, mais `1.0 + 2.0` et `1,0 + 2,0` le sont.

Les opérateurs et fonctions reconnaissent les unités de mesure et nécessitent des combinaisons valides si elles sont fournies. Par exemple, `2mm + 4mm` est une expression valide, tandis que `2mm + 4` ne l'est pas. Cela s'applique également aux références aux propriétés d'objets qui ont des unités, telles que les propriétés de longueur. Ainsi, `Pad001.Length + 1` n'est pas valide car cela additionne un nombre pur à une propriété avec des unités de longueur, il faut `Pad001.Length + 1mm`.

Certaines erreurs liées à l'unité peuvent sembler peu intuitives, les expressions étant rejetées ou produisant des résultats qui ne correspondent pas aux unités de la propriété définie. En voici quelques exemples :

`1/2mm` n'est pas interprété comme un demi-millimètre mais comme `1/(2mm)`, ce qui donne : `0,5 mm^-1`.

`sqrt(2)mm` n'est pas valide car l'appel de la fonction n'est pas un nombre. Il doit être saisi sous la forme `sqrt(2) * 1mm`.

### Arguments de la fonction

Lorsqu'une fonction prend plusieurs arguments, ceux-ci peuvent être séparés par un point-virgule `;` ou une virgule *suivie par un espace* `,` . Dans ce derniers cas, la virgule est convertie en point-virgule après la saisie. Quand on utilise un point-virgule, il n'est pas nécessaire de finir la ligne par un espace.

Les arguments peuvent inclure des références à des cellules dans une feuille de calcul. Une référence de cellule se compose de la lettre en majuscule de la ligne de la cellule suivie de son numéro de colonne, par exemple `A1`. Une cellule peut également être référencée en utilisant l'alias de la cellule, par exemple `Spreadsheet.MyPartWidth`.

### Référencement d'objets

Comme indiqué ci-dessus, vous pouvez référencer un objet par sa Données**Name**. Mais vous pouvez également utiliser sa Données**Label**. Dans le cas d'une Données**Label**, vous devez l'entourer de double symboles `<<` et `>>`, comme ceci `<<Label>>`.

Vous pouvez référencer n'importe quelle propriété numérique d'un objet. Par exemple, pour référencer la hauteur d'un cylindre, vous pouvez utiliser `Cylinder.Height` ou `<<Label_of_cylinder>>.Height`.

Il est possible d'ajouter des [propriétés personnalisées](/Property_editor/fr#Menu_contextuel "Property editor/fr") aux objets et de les utiliser dans les expressions. Pour référencer les contraintes dans les esquisses, il est conseillé de les [nommer](/Sketcher_Workbench/fr#Modifier_les_contraintes "Sketcher Workbench/fr").

Pour plus d'informations sur le référencement des objets, voir [Référence aux données CAO](#R.C3.A9f.C3.A9rence_aux_donn.C3.A9es_CAO).

[En haut](#top)

## Constantes prises en charge

Les constantes suivantes sont prises en charge :

| Constante | Description |
| --- | --- |
| **e** | [nombre d'Euler](https://fr.wikipedia.org/wiki/E_(nombre)) |
| **pi** | [Pi](https://fr.wikipedia.org/wiki/Pi) |

[En haut](#top)

## Opérateurs pris en charge

Les opérateurs suivants sont pris en charge :

| Opération | Description |
| --- | --- |
| **+** | [Addition](https://fr.wikipedia.org/wiki/Addition) |
| **-** | [Soustraction](https://fr.wikipedia.org/wiki/Soustraction) |
| **\*** | [Multiplication](https://fr.wikipedia.org/wiki/Multiplication) |
| **/** | [Division](https://fr.wikipedia.org/wiki/Division) en virgule flottante |
| **%** | [Reste](https://fr.wikipedia.org/wiki/Reste) |
| **^** | [Exponentiation](https://fr.wikipedia.org/wiki/Exponentiation) |

[En haut](#top)

## Fonctions supportées

### Fonctions mathématiques générales

Les fonctions mathématiques suivantes sont prises en charge :

#### Fonctions trigonométriques

[Les fonctions trigonométriques](https://fr.wikipedia.org/wiki/Fonction_trigonom%C3%A9trique) utilisent le degré comme unité par défaut. Pour les radians, ajoutez `rad` après la *première* valeur dans une expression. Ainsi, par exemple, `cos(45)` est identique à `cos(pi rad / 4)`. Les expressions en degrés peuvent utiliser soit `deg` soit `°`, par exemple `360deg - atan2(3 ; 4)` ou `360° - atan2(3 ; 4)`. Si une expression est sans unité et doit être convertie en degrés ou en radians pour des raisons de compatibilité, multipliez-la par `1deg`, `1°` ou `1rad` selon le cas, par exemple `(360 - X) * 1deg`; `(360 - X) * 1°`; `(0.5 + pi / 2) * 1rad`.

| Fonction | Description | Plage de saisie |
| --- | --- | --- |
| `acos(x)` | [Arc cosinus](https://fr.wikipedia.org/wiki/Arc_cosinus) | -1 <= x <= 1 |
| `asin(x)` | [Arc sinus](https://fr.wikipedia.org/wiki/Arc_sinus) | -1 <= x <= 1 |
| `atan(x)` | [Arc tangente](https://fr.wikipedia.org/wiki/Arc_tangente), retourne la valeur dans la plage -90° < valeur < 90° | tout |
| `atan2(y; x)` | [atan2](https://fr.wikipedia.org/wiki/Atan2) de la comptabilité *y/x* pour le quadrant, retour de la valeur dans la plage -180° < valeur <= 180° | tout, l'entrée invalide x = y = 0 renvoie 0 |
| `cos(x)` | [Cosinus](https://fr.wikipedia.org/wiki/Cosinus) | tout |
| `cosh(x)` | [Cosinus hyperbolique](https://fr.wikipedia.org/wiki/Cosinus_hyperbolique) | tout |
| `sin(x)` | [Sinus](https://fr.wikipedia.org/wiki/Sinus_(math%C3%A9matiques)) | tout |
| `sinh(x)` | [Sinus hyperbolique](https://fr.wikipedia.org/wiki/Sinus_hyperbolique) | tout |
| `tan(x)` | [Tangente](https://fr.wikipedia.org/wiki/Tangente_(trigonom%C3%A9trie)) | tout, sauf x = n\*90 avec n = entier impair |
| `tanh(x)` | [Tangente hyperbolique](https://fr.wikipedia.org/wiki/Tangente_hyperbolique) | tout |
| `hypot(x; y)` | [Somme pythagoricienne](https://fr.wikipedia.org/wiki/Somme_pythagoricienne) (**hypot**énuse), par ex. hypot(4; 3) = 5. | x et y >= 0 |
| `cath(x; y)` | Étant donné l'hypoténuse, et un côté, donne l'autre côté du triangle, par ex. cath(5; 3) = 4. | x >= y >= 0 |

#### Fonctions exponentielles et logarithmiques

| Fonction | Description | Plage de saisie |
| --- | --- | --- |
| `exp(x)` | [Fonction exponentielle](https://fr.wikipedia.org/wiki/Fonction_exponentielle) | tout |
| `log(x)` | [Logarithme népérien](https://fr.wikipedia.org/wiki/Logarithme_naturel) | x > 0 |
| `log10(x)` | [Logarithme décimal](https://fr.wikipedia.org/wiki/Logarithme_d%C3%A9cimal) | x > 0 |
| `pow(x; y)` | [Les puissances](https://fr.wikipedia.org/wiki/Exposant_(math%C3%A9matiques)) | tout |
| `sqrt(x)` | [Racine carrée](https://fr.wikipedia.org/wiki/Racine_carr%C3%A9e) | x >= 0 |
| `cbrt(x)` [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") | [Racine cubique](https://fr.wikipedia.org/wiki/Racine_cubique) | tout |

#### Fonctions d'arrondi, de troncature et de reste

| Fonction | Description | Plage de saisie |
| --- | --- | --- |
| `abs(x)` | [Valeur absolue](https://fr.wikipedia.org/wiki/Valeur_absolue) | tout |
| `ceil(x)` | [Partie entière par excès](https://fr.wikipedia.org/wiki/Partie_enti%C3%A8re_et_partie_fractionnaire#Fonction_partie_enti%C3%A8re), la plus petite valeur entière supérieure ou égale à x | tout |
| `floor(x)` | [Partie entière](https://fr.wikipedia.org/wiki/Partie_enti%C3%A8re_et_partie_fractionnaire#Fonction_partie_enti%C3%A8re), la plus grande valeur entière inférieure ou égale à x | tout |
| `mod(x; y)` | [Reste](https://fr.wikipedia.org/wiki/Reste) après la division de *x* par *y*, le signe du résultat est celui du dividende. | tout sauf y = 0 |
| `round(x)` | [Arrondi](https://fr.wikipedia.org/wiki/Arrondi_(math%C3%A9matiques)) au nombre entier le plus proche | tout |
| `trunc(x)` | [Troncature](https://fr.wikipedia.org/wiki/Troncature) au nombre entier le plus proche en direction de zéro | tout |

[En haut](#top)

### Statistiques et fonctions d'agrégation

[Les fonctions d'agrégation](https://fr.wikipedia.org/wiki/Fonction_d%27agr%C3%A9gation) prennent un ou plusieurs arguments.

Les arguments individuels pour agréger les fonctions peuvent être constitués de plages de cellules. Une plage de cellules est exprimée sous la forme de deux références de cellule séparées par deux points `:`, par exemple `average(B1:B8)` ou `sum(A1:A4; B1:B4)`.
Les références de cellule peuvent également utiliser des alias de cellule, par exemple `average(StartTemp:EndTemp)`.

Les fonctions d'agrégation suivantes sont prises en charge :

| Fonction | Description | Plage de saisie |
| --- | --- | --- |
| `average(a; b; c; ...)` | Valeur [Moyenne](https://fr.wikipedia.org/wiki/Moyenne_arithm%C3%A9tique) des arguments, identique à sum(a; b; c; ...) / count(a; b; c; ...) | tout |
| `count(a; b; c; ...)` | [Comptage](https://fr.wikipedia.org/wiki/D%C3%A9nombrement) des arguments, généralement utilisé pour les plages de cellules | tout |
| `max(a; b; c; ...)` | Valeur [Maximum](https://fr.wikipedia.org/wiki/Extremum) des arguments | tout |
| `min(a; b; c; ...)` | Valeur [Minimum](https://fr.wikipedia.org/wiki/Extremum) des arguments | tout |
| `stddev(a; b; c; ...)` | [Écart type](https://fr.wikipedia.org/wiki/%C3%89cart_type) des valeurs des arguments | tout |
| `sum(a; b; c; ...)` | [Somme](https://fr.wikipedia.org/wiki/Somme_(arithm%C3%A9tique)) des valeurs des arguments, généralement utilisé pour les plages de cellules | tout |

[En haut](#top)

### Manipulation de chaînes de caractères

#### Identification de chaînes de caractères

Les chaînes de caractères sont identifiées dans les expressions en les entourant de doubles chevrons ouvrants/fermants (comme les étiquettes).

Dans l'exemple suivant, "TEXT" est reconnu comme une chaîne de caractères : `<<TEXT>>`.

#### Concaténation de chaînes de caractères

Les chaînes de caractères peuvent être concaténées à l'aide du signe '+'.

L'exemple suivant `<<MY>> + <<TEXT>>` sera concaténé en "MYTEXT".

#### Conversion de chaînes de caractères

Les valeurs numériques peuvent être converties en chaînes de caractères avec la fonction `str` :

`str(Box.Length.Value)`

#### Formatage des chaînes de caractères

Le formatage des chaînes de caractères est pris en charge en utilisant le (vieux) style % de Python.

Tous les spécificateurs % tels que définis dans la [documentation Python](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting).

Par exemple, supposons que vous ayez un cube par défaut de 10mm de côté nommé "Box" (nomination par défaut de FreeCAD), l'expression suivante `<<Cube length : %s>> % Box.Length` se développera en "Cube length : 10.0 mm"

Au dessus d'un spécificateur de %, utilisez la syntaxe suivante : `<<Cube length is %s and width is %s>> % tuple(Box.Length; Box.Width)`. Ou utilisez la concaténation : `<<Cube length is %s>> % Box.Length + << and width is %s>> % Box.Width`. Les deux se développeront en "Cube length is 10.0 mm and width is 10.0 mm".

Un exemple de fichier FreeCAD utilisant le formatage des chaînes de caractères est disponible [dans le forum](https://forum.freecadweb.org/viewtopic.php?f=8&t=58657).

[En haut](#top)

### Fonctions de création d'objets

Les objets suivants peuvent être créés dans des expressions à l'aide des fonctions suivantes :

| Type | Fonction | Description |
| --- | --- | --- |
| `Tuple` | `tuple(a; b; ...)` | Exemple : `tuple(2; 1; 2)` |
| `List` | `list(a; b; ...)` | Exemple : `list(2; 1; 2)` |
| [`Vector`](/Vector_API "Vector API") | `vector(x; y; z)` | Crée un vecteur en utilisant trois valeurs unitaires sans unité ou valeurs unitaires `Length`. Exemple : `vector(2; 1; 3)` |
| `create(<<vector>>; x; y; z)` |
| [`Matrix`](/Matrix_API "Matrix API") | ``` matrix(   a11; a12; a13; a14;   a21; a22; a23; a24;   a31; a32; a33; a34;   a41; a42; a43; a44 )  ``` | Crée une matrice 4x4 dans l'[ordre rangée-majeur (en)](https://en.wikipedia.org/wiki/Row-_and_column-major_order) : [     a  11   a  12   a  13   a  14    a  21   a  22   a  23   a  24    a  31   a  32   a  33   a  34    a  41   a  42   a  43   a  44 ] {\displaystyle {\begin{bmatrix}a\_{11}&a\_{12}&a\_{13}&a\_{14}\\a\_{21}&a\_{22}&a\_{23}&a\_{24}\\a\_{31}&a\_{32}&a\_{33}&a\_{34}\\a\_{41}&a\_{42}&a\_{43}&a\_{44}\\\end{bmatrix}}} {\displaystyle {\begin{bmatrix}a_{11}&a_{12}&a_{13}&a_{14}\\a_{21}&a_{22}&a_{23}&a_{24}\\a_{31}&a_{32}&a_{33}&a_{34}\\a_{41}&a_{42}&a_{43}&a_{44}\\\end{bmatrix}}}  Un minimum d'un argument peut être fourni, comme `matrix(1)` qui crée une matrice identité.  Exemple : `matrix(1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12; 13; 14; 15; 16)` |
| `create(<<matrix>>; a11; a12; ...; a44)` |
| `Rotation` | `rotation(axis; angle)` | Crée une `Rotation` en spécifiant ses `axis` (`Vector`) et unité d'`angle` (`Angle` ou pas d'unité) ou trois angles d'Euler `α`, `β`, `γ`. Exemples :   * `rotation(vector(0; 1; 0); 45)` * `create(<<rotation>>; 30; 30; 30)` |
| `rotation(α; β; γ)` |
| `create(<<rotation>>; axis; angle)` |
| `create(<<rotation>>; α; β; γ)` |
| [`Placement`](/Placement_API "Placement API") | `placement(base; rotation)` | Crée un `Placement` avec différents paramètres, notamment :  * `base` : emplacement de la base (`Vecteur`) * `center` : emplacement du centre (`Vecteur`) * `rotation` : `Rotation` * `axis` : axe de rotation (`Vecteur`) * `angle` : angle de rotation (sans unité ou valeur unitaire d'`Angle`) * `matrix` : `Matrice`   Exemples :   * `placement(vector(2; 1; 3); rotation(vector(0; 0; 1); 45))` * `create(<<placement>>; create(<<vector>>; 2; 1; 2); create(<<rotation>>; create(<<vector>>; 0; 1; 0); 45))` |
| `placement(base; rotation; center)` |
| `placement(base; axis; angle)` |
| `placement(matrix)` |
| `create(<<placement>>; ...)` |

[En haut](#top)

### Fonctions vectorielles

Fonctions : [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr").

| Fonction / Opérateur | Description |
| --- | --- |
| `v1 + v2` | Ajouter deux vecteurs. |
| `v1 - v2` | Soustraire deux vecteurs. |
| `v * s` | Échelle uniforme d'un vecteur par `s`. |
| `vangle(v1; v2)` | Angle en degrés entre deux vecteurs. |
| `vcross(v1; v2)` | Produit vectoriel de deux vecteurs      v  1 ×  v  2 {\displaystyle v\_{1}\times v\_{2}} {\displaystyle v_{1}\times v_{2}}. |
| `v1 * v2` | Produit scalaire de deux vecteurs      v  1 ⋅  v  2 {\displaystyle v\_{1}\cdot v\_{2}} {\displaystyle v_{1}\cdot v_{2}}. |
| `vdot(v1; v2)` |
| `vlinedist(v1; v2; v3)` | Distance entre le vecteur `v1` et une ligne passant par `v2` dans la direction `v3`. |
| `vlinesegdist(v1; v2; v3)` | Distance entre le vecteur `v1` et le point le plus proche d'un segment de droite allant de `v2` à `v3`. |
| `vlineproj(v1; v2; v3)` | Projeter le vecteur `v1` sur une droite passant par `v2` dans le sens `v3`. |
| `vnormalize(v)` | Normaliser un vecteur en un vecteur unitaire. |
| `vplanedist(v1)` | Distance entre le vecteur `v1` et un plan défini par un point `v2` et une normale `v3`. |
| `vplaneproj(v1)` | Projeter le vecteur `v1` sur un plan défini par un point `v2` et une normale `v3`. |
| `vscale(v; sx; sy; sz)` | Mettre à l'échelle de façon non uniforme un vecteur de `sx` dans la direction X, `sy` dans la direction Y et `sz` dans la direction Z. |
| `vscalex(v; sx)` |
| `vscaley(v; sy)` |
| `vscalez(v; sz)` |

[En haut](#top)

### Fonctions matricielles

`Rotation` et `Placement` peuvent être représentés par une `Matrix`. Les fonctions suivantes dans le tableau ci-dessous, `Matrix`, `Rotation` ou `Placement`, prennent toutes comme premier paramètre `m`. Le type de l'objet renvoyé est le même que l'objet fourni en premier argument, sauf si l'on utilise `mtranslate` sur une `Rotation`, auquel cas c'est un `Placement` qui sera renvoyé.

| Fonction | Description |
| --- | --- |
| `minvert(m)` | Calcule la [matrice inversée](https://fr.wikipedia.org/wiki/Matrice_inversible). |
| `mrotate(m; rotation)` | [Rotation](https://fr.wikipedia.org/wiki/Matrice_de_rotation) soit :  * une `Rotation` * un (`Vector`) d'axe et un angle (`Angle` avec ou sans unité) * trois angles d'Euler `α`, `β`, `γ` |
| `mrotate(m; axis; angle)` |
| `mrotate(m; α; β; γ)` |
| `mrotatex(m; angle)` | [Rotation](https://fr.wikipedia.org/wiki/Matrice_de_rotation) autour de l'axe X. |
| `mrotatey(m; angle)` | [Rotation](https://fr.wikipedia.org/wiki/Matrice_de_rotation) autour de l'axe Y. |
| `mrotatez(m; angle)` | [Rotation](https://fr.wikipedia.org/wiki/Matrice_de_rotation) autour de l'axe Z. |
| `mtranslate(m; vector)` | [Translation](https://fr.wikipedia.org/wiki/Translation#Coordonn%C3%A9es_homog%C3%A8nes) par un `vector` (`Vector`) ou des valeurs X, Y, Z. Si une `Rotation` est translatée, l'objet retourné est un `Placement`. |
| `mtranslate(m; x; y; z)` |
| `mscale(m; vector)` | [Mise à l'échelle](https://en.wikipedia.org/wiki/Scaling_(geometry)#Matrix_representation) par un `vector` (`Vector`) ou des valeurs X, Y, Z. |
| `mscale(m; x; y; z)` |

[En haut](#top)

## Expressions conditionnelles

Les expressions conditionnelles sont de la forme `condition ? resultTrue : resultFalse`. La condition est définie comme une expression dont la valeur est soit `0` (faux) ou non nulle (vrai).

Remarquez que pour utiliser une propriété booléenne comme condition, il faut utiliser la syntaxe suivante : `VarSet.MyBool == 1 ? 10 mm : 15 mm`.

Les [opérateurs relationnels](https://en.wikipedia.org/wiki/Relational_operator#Standard_relational_operators) suivants sont définis:

| Unité | Description |
| --- | --- |
| **==** | égal à |
| **!=** | différent de |
| **>** | strictement plus grand que |
| **<** | strictement plus petit que |
| **>=** | plus grand ou égal à |
| **<=** | plus petit ou égal à |

[En haut](#top)

## Unités

Les unités peuvent être directement utilisées dans des expressions. L'analyseur les connecte à la valeur précédente. Donc `2mm` ou `2 mm` sont valides tandis que `mm` est invalide car il n'y a pas de valeur.

Toutes les valeurs doivent avoir une unité. Par conséquent, vous devez généralement utiliser une unité pour les valeurs dans les feuilles de calcul.  
Dans certains cas, cela fonctionne même sans unité, par exemple si vous avez dans la cellule B1 du calculateur, juste le nombre `1.5` et qu'il se reporte à la hauteur du pavé. Cela ne fonctionne que parce que la hauteur du pad prédéfinit l'unité `mm` utilisée si aucune unité n'est donnée. Il échouera néanmoins si vous utilisez pour la hauteur du pad, par exemple `Sketch1.Constraints.Width - Spreadsheet.B1` car `Sketch1.Constraints.Width` a une unité et `Spreadsheet.B1` n'en a pas.

Les unités avec des exposants peuvent être directement entrées. Donc, par exemple `mm^3` sera reconnu comme mm³ et `m^3` sera reconnu comme m³.

Si vous avez une variable dont le nom est celui d'une unité, vous devez mettre la variable entre `<< >>` pour éviter qu'elle ne soit reconnue comme une unité. Par exemple, si vous avez la dimension `Sketch.Constraints.A`, elle serait reconnue comme l'unité Ampère. Par conséquent, vous devez l'écrire dans l'expression sous la forme `Sketch.Constraints.<<A>>`.

Les unités suivantes sont reconnues par l’analyseur d’expression:

### Quantité de substance

| Unité | Description |
| --- | --- |
| mmol | Milli[mole](https://fr.wikipedia.org/wiki/Mole_(unit%C3%A9)) |
| mol | [Mole](https://fr.wikipedia.org/wiki/Mole_(unit%C3%A9)) |

### Angle

| Unité | Description |
| --- | --- |
| ° | [Degré](https://fr.wikipedia.org/wiki/Degree_(angle)); alternative à l'unité deg |
| deg | [Degré](https://fr.wikipedia.org/wiki/Degree_(angle)); alternative à l'unité ° |
| rad | [Radian](https://fr.wikipedia.org/wiki/Radian) |
| gon | [Gradian](https://fr.wikipedia.org/wiki/Gon_(unit)) |
| M | [Minute d'arc](https://fr.wikipedia.org/wiki/Sous-unit%C3%A9s_du_degr%C3%A9); alternative à l'unité ′ |
| ′ | [Minute d'arc](https://fr.wikipedia.org/wiki/Sous-unit%C3%A9s_du_degr%C3%A9); c'est le symbole prime (U+2032); alternative à l'unité M |
| S | [Seconde d'arc](https://fr.wikipedia.org/wiki/Sous-unit%C3%A9s_du_degr%C3%A9); **NE FONCTIONNE PAS**; alternative à l'unité ″ |
| ″ | [Seconde d'arc](https://fr.wikipedia.org/wiki/Sous-unit%C3%A9s_du_degr%C3%A9); c'est le symbole du double prime (U+2033); alternative à l'unité S |

### Courant

| Unité | Description |
| --- | --- |
| mA | Milli[ampère](https://fr.wikipedia.org/wiki/Amp%C3%A8re) |
| A | [Ampère](https://fr.wikipedia.org/wiki/Amp%C3%A8re) |
| kA | Kilo[ampère](https://fr.wikipedia.org/wiki/Amp%C3%A8re) |
| MA | Méga[ampère](https://fr.wikipedia.org/wiki/Amp%C3%A8re) |

### Capacité électrique

| Unité | Description |
| --- | --- |
| pF | Pico[farad](https://fr.wikipedia.org/wiki/Farad) |
| nF | Nano[farad](https://fr.wikipedia.org/wiki/Farad) |
| uF | Micro[farad](https://fr.wikipedia.org/wiki/Farad); alternative à l'unité *µF* |
| µF | Micro[farad](https://fr.wikipedia.org/wiki/Farad); alternative à l'unité *uF* |
| mF | Milli[farad](https://fr.wikipedia.org/wiki/Farad) |
| F | [Farad](https://fr.wikipedia.org/wiki/Farad); 1 F = 1 s^4·A^2/m^2/kg |

### Charge électrique

| Unité | Description |
| --- | --- |
| C | [Coulomb](https://fr.wikipedia.org/wiki/Coulomb); 1 C = 1 A\*s |

### Conductivité électrique

| Unité | Description |
| --- | --- |
| uS | Micro[siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)); alternative à l'unité µS |
| µS | Micro[siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)); alternative à l'unité µS |
| mS | Milli[siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)) |
| S | [Siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)); 1 S = 1 s^3·A^2/kg/m^2 |
| kS | Kilo[Siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)) |
| MS | Mega[Siemens](https://fr.wikipedia.org/wiki/Siemens_(unit%C3%A9)) |

### Inductance électrique

| Unité | Description |
| --- | --- |
| nH | Nano[henry](https://fr.wikipedia.org/wiki/Henry_(unit%C3%A9)) |
| uH | Micro[henry](https://fr.wikipedia.org/wiki/Henry_(unit%C3%A9)); alternative à l'unité *µH* |
| µH | Micro[henry](https://fr.wikipedia.org/wiki/Henry_(unit%C3%A9)); alternative à l'unité *uH* |
| mH | Milli[henry](https://fr.wikipedia.org/wiki/Henry_(unit%C3%A9)) |
| H | [Henry](https://fr.wikipedia.org/wiki/Henry_(unit%C3%A9)); 1 H = 1 kg·m^2/s^2/A^2 |

### Potentiel électrique

| Unité | Description |
| --- | --- |
| mV | Milli[volt](https://fr.wikipedia.org/wiki/Volt) |
| V | [Volt](https://fr.wikipedia.org/wiki/Volt) |
| kV | Kilo[volt](https://fr.wikipedia.org/wiki/Volt) |

### Résistance électrique

| Unité | Description |
| --- | --- |
| Ohm | [Ohm](https://fr.wikipedia.org/wiki/Ohm_(unit%C3%A9)); 1 Ohm = 1 kg·m^2/s^3/A^2 |
| kOhm | Kilo[ohm](https://fr.wikipedia.org/wiki/Ohm_(unit%C3%A9)) |
| MOhm | Méga[ohm](https://fr.wikipedia.org/wiki/Ohm_(unit%C3%A9)) |

### Énergie/travail

| Unité | Description |
| --- | --- |
| mJ | Milli[joule](https://fr.wikipedia.org/wiki/Joule) |
| J | [Joule](https://fr.wikipedia.org/wiki/Joule) |
| kJ | Kilo[joule](https://fr.wikipedia.org/wiki/Joule) |
| eV | [Électronvolt](https://fr.wikipedia.org/wiki/%C3%89lectronvolt); 1 eV = 1.602176634e-19 J |
| keV | Kilo[électronvolt](https://fr.wikipedia.org/wiki/%C3%89lectronvolt) |
| MeV | Méga[électronvolt](https://fr.wikipedia.org/wiki/%C3%89lectronvolt) |
| kWh | [Kilowatt-heure](https://fr.wikipedia.org/wiki/Kilowatt-heure); 1 kWh = 3.6e6 J |
| Ws | [Watt-seconde](https://fr.wikipedia.org/wiki/Joule#%C3%89quivalences); alternative à l'unité Joule |
| VAs | [Volt ampère seconde](https://fr.wikipedia.org/wiki/Joule); alternative à l'unité Joule |
| CV | [Coulomb-volt](https://fr.wikipedia.org/wiki/Joule); alternative à l'unité Joule |
| cal | [Calorie](https://fr.wikipedia.org/wiki/Calorie); 1 cal = 4.184 J |
| kcal | Kilo[calorie](https://fr.wikipedia.org/wiki/Calorie) |

### Force

| Unité | Description |
| --- | --- |
| mN | [millinewton](https://fr.wikipedia.org/wiki/Newton_(unit%C3%A9)) |
| N | [Newton](https://fr.wikipedia.org/wiki/Newton_(unit%C3%A9)) |
| kN | [kilonewton](https://fr.wikipedia.org/wiki/Newton_(unit%C3%A9)) |
| MN | [méganewton](https://fr.wikipedia.org/wiki/Newton_(unit%C3%A9)) |
| lbf | [Livre-force](https://fr.wikipedia.org/wiki/Livre-force) |

### Longueur

| Unité | Description |
| --- | --- |
| nm | [nanomètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| um | [micromètre](https://fr.wikipedia.org/wiki/M%C3%A8tre); alternative à l'unité µm |
| µm | [micromètre](https://fr.wikipedia.org/wiki/M%C3%A8tre); alternative à l'unité um |
| mm | [millimètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| cm | [centimètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| m | [mètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| dm | [décimètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| km | [kilomètre](https://fr.wikipedia.org/wiki/M%C3%A8tre) |
| mil | [millième de pouce](https://en.wikipedia.org/wiki/Thousandth_of_an_inch); alternative à l'unité thou |
| thou | [millième de pouce](https://en.wikipedia.org/wiki/Thousandth_of_an_inch); alternative à l'unité mil |
| in | [pouce](https://fr.wikipedia.org/wiki/Pouce_(unit%C3%A9)); alternative à l'unité " |
| " | [pouce](https://fr.wikipedia.org/wiki/Pouce_(unit%C3%A9)); alternative à l'unité in |
| ft | [pied](https://fr.wikipedia.org/wiki/Pied_(unit%C3%A9)); alternative à l'unité ' |
| ' | [pied](https://fr.wikipedia.org/wiki/Pied_(unit%C3%A9)); alternative à l'unité ft |
| yd | [yard ou verge](https://fr.wikipedia.org/wiki/Verge_(unit%C3%A9)) |
| mi | [mille](https://fr.wikipedia.org/wiki/Mille_(unit%C3%A9)) |

### Intensité lumineuse

| Unité" | Description |
| --- | --- |
| cd | [Candela](https://fr.wikipedia.org/wiki/Candela) |

### Flux magnétique

Flux d'induction magnétique

| Unité | Description |
| --- | --- |
| Wb | [Weber](https://fr.wikipedia.org/wiki/Weber_(unit%C3%A9)); 1 Wb = 1 kg\*m^2/s^2/A |

### Densité de flux magnétique

Densité de flux magnétique :

| Unité | Description |
| --- | --- |
| G | [Gauss](https://fr.wikipedia.org/wiki/Gauss_(unit%C3%A9)); 1 G = 1 e-4 T |
| T | [Tesla](https://fr.wikipedia.org/wiki/Tesla_(unit%C3%A9)); 1 T = 1 kg/s^2/A |

### Poids

| Unité | Description |
| --- | --- |
| ug | [microgramme](https://fr.wikipedia.org/wiki/Gramme); alternative à l'unité µg |
| µg | [microgramme](https://fr.wikipedia.org/wiki/Gramme); alternative à l'unité ug |
| mg | [milligramme](https://fr.wikipedia.org/wiki/Gramme) |
| g | [gramme](https://fr.wikipedia.org/wiki/Gramme) |
| kg | [kilogramme](https://fr.wikipedia.org/wiki/Gramme) |
| t | [Tonne](https://fr.wikipedia.org/wiki/Tonne) |
| oz | [Once](https://fr.wikipedia.org/wiki/Once_(unit%C3%A9)) |
| lb | [livre](https://fr.wikipedia.org/wiki/Livre_(unit%C3%A9_de_masse)); alternative à l'unité lbm |
| lbm | [Pound](https://fr.wikipedia.org/wiki/Livre_(unit%C3%A9_de_masse)); alternative à l'unité lb |
| st | [Stone](https://fr.wikipedia.org/wiki/Stone_(unit%C3%A9)) |
| cwt | [Hundredweight](https://en.wikipedia.org/wiki/Hundredweight) |

### Puissance

| Unité | Description |
| --- | --- |
| W | [Watt](https://fr.wikipedia.org/wiki/Watt) |
| kW | Kilo[watt](https://fr.wikipedia.org/wiki/Watt) |

### Pression

| Unité | Description |
| --- | --- |
| Pa | [pascal](https://fr.wikipedia.org/wiki/Pascal_(unit%C3%A9)) |
| kPa | Kilo[pascal](https://fr.wikipedia.org/wiki/Pascal_(unit%C3%A9)) |
| MPa | Méga[pascal](https://fr.wikipedia.org/wiki/Pascal_(unit%C3%A9)) |
| GPa | Giga[pascal](https://fr.wikipedia.org/wiki/Pascal_(unit%C3%A9)) |
| uTorr | Micro[torr](https://fr.wikipedia.org/wiki/Torr); alternative à l'unité µTorr |
| µTorr | Micro[torr](https://fr.wikipedia.org/wiki/Torr); alternative à l'unité uTorr |
| mTorr | Milli[torr](https://fr.wikipedia.org/wiki/Torr) |
| Torr | [Torr](https://fr.wikipedia.org/wiki/Torr); 1 Torr = 133.32 Pa |
| psi | [Livre-force par pouce carré](https://fr.wikipedia.org/wiki/Livre-force_par_pouce_carr%C3%A9); 1 psi = 6.895 kPa |
| ksi | Kilo[livre-force par pouce carré](https://fr.wikipedia.org/wiki/Livre-force_par_pouce_carr%C3%A9) |

### Température

| Unité | Description |
| --- | --- |
| uK | [microkelvin](https://fr.wikipedia.org/wiki/Kelvin); alternative à l'unité µK |
| µK | [microkelvin](https://fr.wikipedia.org/wiki/Kelvin); alternative à l'unité uK |
| mK | [millikelvin](https://fr.wikipedia.org/wiki/Kelvin) |
| K | [Kelvin](https://fr.wikipedia.org/wiki/Kelvin) |

### Temps

| Unité | Description |
| --- | --- |
| s | [Seconde](https://fr.wikipedia.org/wiki/Seconde_(temps)) |
| min | [Minute](https://fr.wikipedia.org/wiki/Minute_(temps)) |
| h | [Heure](https://fr.wikipedia.org/wiki/Heure) |
| Hz (1/s) | [Hertz](https://fr.wikipedia.org/wiki/Hertz) |
| kHz | Kilo[hertz](https://fr.wikipedia.org/wiki/Hertz), |
| MHz | Méga[hertz](https://fr.wikipedia.org/wiki/Hertz) |
| GHz | Giga[hertz](https://fr.wikipedia.org/wiki/Hertz) |
| THz | Téra[hertz](https://fr.wikipedia.org/wiki/Hertz) |

### Volume

| Unité | Description |
| --- | --- |
| ml | Milli[litre](https://fr.wikipedia.org/wiki/Litre) |
| l | [Litre](https://fr.wikipedia.org/wiki/Litre) |
| cft | [Pied cubique](https://fr.wikipedia.org/wiki/Pied_(unit%C3%A9)) |

### Unités impériales spéciales

| Unité | Description |
| --- | --- |
| mph | [Mille par heure](https://fr.wikipedia.org/wiki/Mille_par_heure) |
| sqft | [Pied carré](https://fr.wikipedia.org/wiki/Pied_carr%C3%A9) |

### Unités non supportées

Les unités suivantes, couramment utilisées, ne sont pas encore prises en charge ; pour certaines, une alternative est proposée :

| Unité | Description | Alternative |
| --- | --- | --- |
| °C | [Celsius](https://en.wikipedia.org/wiki/Celsius) | [°C] + 273.15 K |
| °F | [Fahrenheit](https://en.wikipedia.org/wiki/Fahrenheit); | ([°F] + 459.67) × ​5/9 |
| u | [Unité de masse atomique unifiée](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_masse_atomique_unifi%C3%A9e); alternative à l'unité Da | 1.66053906660e-27 kg |
| Da | [Dalton](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_masse_atomique_unifi%C3%A9e); alternative à l'unité u | 1.66053906660e-27 kg |
| sr | [Steradian](https://fr.wikipedia.org/wiki/Steradian) | Pas directement |
| lm | [Lumen](https://fr.wikipedia.org/wiki/Lumen_(unit%C3%A9)) | Pas directement |
| lx | [Lux](https://fr.wikipedia.org/wiki/Lux_(unit%C3%A9)) | Pas directement |
| px | [Pixel](https://fr.wikipedia.org/wiki/Pixel) | Pas directement |

[En haut](#top)

## Caractères et noms non valides

La fonction expression est très puissante mais pour atteindre cette puissance, elle présente certaines limitations concernant certains caractères. Pour surmonter cela, FreeCAD propose d'utiliser des étiquettes et de les référencer à la place des noms d'objets. Dans les étiquettes, vous pouvez utiliser presque tous les caractères spéciaux.

Dans les cas où vous ne pouvez pas utiliser une étiquette, telle que le nom des contraintes d'une esquisse, vous devez savoir quels caractères ne sont pas autorisés.

### Étiquettes

Pour les [étiquettes](/Object_name/fr#Label_.28Etiquette.29 "Object name/fr"), il n'y a pas de caractères non valides, cependant certains caractères doivent être évités:

| Caractères | Description |
| --- | --- |
| `'`, `\`, `"` | Doivent être évités en ajoutant `\` devant eux. |

Par exemple, l'étiquette `Sketch\002` doit être référencée comme `<<Sketch\\002>>`.

### Noms

Les [Noms](/Object_name/fr#Name_.28Nom.29 "Object name/fr") des objets tels que des dimensions, des esquisses, etc. ne doivent pas avoir les caractères ou les séquences de caractères répertoriés ci-dessous, sinon le nom n'est pas valide:

| Caractères / Séquences de caractères | Description |
| --- | --- |
| **+**, **-**, **\***, **/**, **^**, **\_**, **<**, **>**, **(**, **)**, **{**, **}**, **[**, **]**, **.**, **,**, **=** | Caractères qui sont des opérateurs mathématiques ou qui font partie de constructions mathématiques |
| **A**, **kA**, **mA**, **MA**, **C**, **G**, **F**, **uF**, **µF**, **J**, **K**,  **'** ,  **ft** , **°** et bien d'autres! | Caractères et séquences de caractères qui sont des unités (voir le paragraphe [unités](/index.php?title=Unit.C3.A9s&action=edit&redlink=1 "Unit.C3.A9s (page does not exist)")) |
| **#**, **!**, **?**, **§**, **$**, **%**, **&**, **:**, **;**, **\**, **|**, **~**, **∆**, **¿**, and many more! | Caractères utilisés comme espace réservé ou pour déclencher des opérations spéciales |
| **pi**, **e** | Constantes mathématiques |
| **´**, **`**,  **'** , **"** | Caractères utilisés pour les accents |
| espace | Un espace définit la fin d'un nom et ne peut donc pas être utilisé |

Par exemple, le nom suivant est valide: `<<Sketch>>.Constraints.T2üßµ@`, alors que ces noms sont non valables: `<<Sketch>>.Constraints.test\result_2` (\r signifie "retour chariot") ou `<<Sketch>>.Constraints.mol` (mol est une unité).

**Remarque:** puisque des noms plus courts (surtout s'ils n'ont qu'un ou deux caractères) peuvent facilement entraîner des noms invalides, envisagez d'utiliser des noms plus longs et/ou d'établir une convention de dénomination appropriée.

### Alias de cellules

Voir [Spreadsheet Alias](/Spreadsheet_SetAlias/fr#Utilisation "Spreadsheet SetAlias/fr").

[En haut](#top)

## Référence aux données CAO

Il est possible d'utiliser des données du modèle lui-même dans une expression. Pour référencer une propriété, utilisez `object_name.property` ou `<<object_label>>.property`, les étiquettes doivent être incluses dans `<<` et `>>`. Si vous souhaitez utiliser des étiquettes, elles doivent être uniques.

Tous les exemples suivants font référence à l'objet par son nom, mais dans tous les cas, l'étiquette de l'objet peut également être utilisée.

Si la propriété est un composé de champs, chaque champs est accessible sous la forme `object_name.property.field`.

Pour référencer les objets de la liste, utilisez `object_name.list[list_index]`. Si vous souhaitez référencer une contrainte dans une esquisse, utilisez `Sketch.Constraints[16]`. Si vous êtes dans la même esquisse, vous pouvez omettre son nom et utiliser simplement `Constraints[16]`. Notez que l'index commence à 0, et que la contrainte 17 doit donc être référencée par `Constraints[16]`.

Pour référencer l'objet lui-même, utilisez la pseudo-propriété `_self` : `object_name._self`.

Le tableau suivant montre plus davantage d'exemples :

| Données CAO | Appel dans l'expression | Résultat |
| --- | --- | --- |
| Longueur d'un [Part Cube](/Part_Box/fr "Part Box/fr") | `Box.Length` | Longueur avec unités (mm) |
| Volume du Cube | `Box.Shape.Volume` | Volume en mm&sup3 ; sans unités |
| Type de forme du Cube | `Box.Shape.ShapeType` | String : Solide |
| Etiquette du Cube | `Box.Label` | String : Label |
| Coordonnée X du centre de masse du Cube | `Box.Shape.CenterOfMass.x` | Coordonnée X en mm sans unité |
| Coordonnée X de l'emplacement du Cube | `Box.Placement.Base.x` | Coordonnée X avec unités (mm) |
| Composante X de l'axe de rotation du placement du Cube | `Box.Placement.Rotation.Axis.x` | Composante X du vecteur unitaire en mm sans unités |
| Angle de rotation du placement du Cube | `Box.Placement.Rotation.Angle` | Angle de rotation avec unités (deg) |
| Objet Cube complet | `Box._self` | Objet de type <Part::PartFeature>>. |
| Valeur de la contrainte dans une esquisse | `Constraints.Width` | Valeur numérique de la contrainte nommée `Width` dans l'esquisse, si l'expression est utilisée dans l'esquisse elle-même. |
| Valeur de la contrainte dans une esquisse | `MonSketch.Constraints.Width` | Valeur numérique de la contrainte nommée `Width` dans l'esquisse, si l'expression est utilisée en dehors de l'esquisse. |
| Valeur d'un alias de feuille de calcul | `Spreadsheet.Depth` | Valeur de l'alias `Depth` dans la feuille de calcul `Spreadsheet`. |
| Valeur d'une propriété locale | `Length` | Valeur de la propriété Données**Length** dans, par exemple, un objet Pad, si l'expression est utilisée dans, par exemple, Données**Length2** dans le même objet. |

### Dépendances cycliques

FreeCAD vérifie les dépendances en se basant sur la relation entre les objets du document, et non sur les propriétés. Cela signifie que vous ne pouvez pas fournir des données à un objet et interroger ce même objet pour obtenir des résultats. Par exemple, même s'il n'y a pas de dépendances cycliques lorsque les propriétés elles-mêmes sont prises en compte, vous ne pouvez pas avoir un objet qui obtient ses dimensions à partir d'une feuille de calcul et ensuite afficher le volume de cet objet dans la même feuille de calcul. Vous devez utiliser deux feuilles de calcul, l'une pour piloter votre modèle et l'autre pour les rapports.

En guise de solution de contournement, il est possible d'afficher une plage de cellules de la deuxième feuille de calcul dans la première (ou vice versa) en créant une [liaison entre cellules](/Spreadsheet_Workbench/fr#Liaison_entre_cellules "Spreadsheet Workbench/fr") avec l'option **Masquer la dépendance de la liaison**.

Une autre façon de contourner les dépendances cycliques consiste à masquer la référence en utilisant la fonction `href` ou `hiddenref` pour chaque expression, par exemple : `href(Box.Length)`.

Remarquez que les deux solutions mentionnées doivent être utilisées avec prudence, et qu'elles ne fonctionnent pas si les propriétés qui sont rapportées dépendent de dimensions qui sont pilotées à partir de la même feuille de calcul.

[En haut](#top)

## Variables globales

Pour le moment il n'y a pas de notion de variables globales dans FreeCAD. Mais des variables arbitraires peuvent être définies comme des cellules dans une feuille de calcul en utilisant [l'atelier Spreadsheet](/Spreadsheet_Workbench/fr "Spreadsheet Workbench/fr"), auquelles on aura donné un nom en utilisant l'alias de la propriété pour la cellule utilisée (clic-droit dans la cellule). Ainsi, elles peuvent être accessibles à partir de toute expression comme toute autre propriété de l'objet.

[En haut](#top)

## Liaison entre documents

Il est possible (avec limitations) de définir une propriété d'un objet dans votre document actuel (fichier ".FCstd") en utilisant une expression pour référencer une propriété d'un objet contenu dans un autre document (fichier ".FCstd"). Par exemple, une cellule dans une feuille de calcul ou la Données**Length** d'un cube de pièce, etc. dans un document peut être définie par une expression faisant référence à la valeur de placement X ou à une autre propriété d'un objet contenu dans un autre document.

Note importante : Imaginez que vous utilisiez le nom d'un document pour le référencer depuis d'autres documents. Lorsque vous sauverez ce document pour la première fois, vous allez certainement lui choisir un nom différent de "Unnamed1" (ou sa version traduite), et là, quand vous allez le ré-ouvrir, les liens seront perdus. Il est donc recommandé de créer en premier le document "maître", puis d'y créer immédiatement la feuille de calcul, de sauver le document maître avec un nom had-hoc et de le fermer. Après l'avoir ouvert à nouveau, son nom sera fixé en interne dans FreeCAD. Ensuite vous pourrez toujours faire des modification mais il ne faudra pas le renommer.

Une fois que le document maître avec la feuille de calcul est créé et enregistré (nommé), vous pouvez créer des documents dépendants en toute sécurité. Par exemple, si vous nommez le document maître `master`, la feuille de calcul `modelConstants` et attribuez à une cellule un nom d'alias `Length`, vous pouvez ensuite accéder à la valeur comme suit:

`master#modelConstants.Length`

Remarquez que le document maître doit être chargé pour que les valeurs de ce dernier soient disponibles pour le document dépendant.

Bien sûr, vous pouvez charger les documents correspondants à tout moment pour y faire les modifications que vous voudrez.

[En haut](#top)

## Problèmes connus / tâches restantes

* FreeCAD ne dispose pas encore d'un gestionnaire d'expressions intégré où toutes les expressions d'un document sont listées et peuvent être créées, supprimées, interrogées etc... Une extension est disponible : [fcxref expression manager](https://github.com/gbroques/fcxref).
* les bogues et tickets ouverts pour les expressions sont référencés sur [GitHub](https://github.com/FreeCAD/FreeCAD/labels/Topic%3A%20Expressions).

[En haut](#top)

## Script

```
import FreeCAD as App

doc = App.ActiveDocument
box = doc.addObject("Part::Box", "Box")
cyl = doc.addObject("Part::Cylinder", "Cylinder")
cyl_name = cyl.Name

box.setExpression("Height", f"{cyl_name}.Height / 2")
box.setExpression("Length", f"{cyl_name}.Radius * 2")
box.setExpression("Width", "Length")

doc.recompute()

# Expressions are stored in the ExpressionEngine property:
for prop, exp in box.ExpressionEngine:
    val = getattr(box, prop)
    print(f"Property: '{prop}' -- Expression: '{exp}' -- Current value: {val}")

```

[En haut](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Expressions/fr&oldid=1549843>"