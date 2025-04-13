---
title: Draw 2D Function
---

|                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draw 2D Function                                                                                                                                                                                                                                                                                         |
| Description                                                                                                                                                                                                                                                                                              |
| Trace une fonction décrite par une équation [z=F(x)] (Z-X plan) Version macro : 1.0 Date dernière modification : 2011-08-01 Version FreeCAD : Toutes versions Téléchargement : [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Auteur: unknown |
| Auteur                                                                                                                                                                                                                                                                                                   |
| [unknown](/index.php?title=User:Unknown&action=edit&redlink=1 "User:Unknown (page does not exist)")                                                                                                                                                                                                      |
| Téléchargement                                                                                                                                                                                                                                                                                           |
| [Icône pour votre barre d'outils](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                                |
| Liens                                                                                                                                                                                                                                                                                                    |
| [Page des macros](/Macros_recipes/fr "Macros recipes/fr") [Comment installer une macro](/How_to_install_macros/fr "How to install macros/fr") [Comment créer une barre d'outils](/Customize_Toolbars/fr "Customize Toolbars/fr")                                                                         |
| Version Macro                                                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                                                      |
| Dernière modification                                                                                                                                                                                                                                                                                    |
| 2011-08-01                                                                                                                                                                                                                                                                                               |
| Version(s) FreeCAD                                                                                                                                                                                                                                                                                       |
| Toutes versions                                                                                                                                                                                                                                                                                          |
| Raccourci clavier                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                   |
| Voir aussi                                                                                                                                                                                                                                                                                               |
| _None_                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                          |

## Description

Utilisez ce script pour tracer une fonction décrite par une équation [z=F(x)] (Z-X plane) L'exemple donné ici génère une parabole.

Éléments à définir :

: F = variable utilisée dans la fonction,

: X = valeur initiale de x,

: Nb = Nombre d'étapes,

: Z = fonction express avec x

: ZZ = fonction express avec xx

## Script

ToolBar Icon ![](/images/Macro_Draw_2D_Function.png)

**Macro_Draw_2D_Function.FCMacro**

```
# F = variable used in the function,
# X = initial value of x,
# Nb = Number of step,
# Z = function express with x
# ZZ = function express with xx

import FreeCAD, FreeCADGui, Part
import math
F=800
X=-500
Nb=10
Step=1000/Nb
Y=0
for I in range(Nb):
	XX=X+Step
 	Z=X*X/(4*F)
 	ZZ=XX*XX/(4*F)
 	if I==0:
 		print( "Le test est vrai !")
 		nomme=Part.makeLine((X,Y,Z),(XX,Y,ZZ))
 		WWire=Part.Wire([nomme])
 	else :
 		print( "Le test est 2 !")
 		nomme=Part.makeLine((X,Y,Z),(XX,Y,ZZ))
 		WWire=Part.Wire([WWire,nomme])
 	X=XX

Part.show(WWire)
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/fr&oldid=692162>"
