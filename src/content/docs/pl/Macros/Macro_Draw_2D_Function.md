---
title: Makrodefinicja Draw 2D Function
---

|                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Draw 2D Function                                                                                                                                                                                                                                                                 |
| Opis                                                                                                                                                                                                                                                                             |
| Użyj go do narysowania funkcji opisanej _równaniem [z=F(x)] (płaszczyzna Z-X)_ Macro version: 1.0 Last modified: 2011-08-01 FreeCAD version: Wszystkie Download: [ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png) Autor: nieznany |
| Autor                                                                                                                                                                                                                                                                            |
| [nieznany](/index.php?title=User:Nieznany&action=edit&redlink=1 "User:Nieznany (page does not exist)")                                                                                                                                                                           |
| Do pobrania                                                                                                                                                                                                                                                                      |
| [ikonka paska narzędzi](https://www.freecadweb.org/wiki/images/3/36/Macro_Draw_2D_Function.png)                                                                                                                                                                                  |
| Odnośniki                                                                                                                                                                                                                                                                        |
| [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl") [Jak zainstalować makrodefinicje](/How_to_install_macros/pl "How to install macros/pl") [Dostosowanie pasków narzędzi](/Customize_Toolbars/pl "Customize Toolbars/pl")                                      |
| Wersja Makrodefinicji                                                                                                                                                                                                                                                            |
| 1.0                                                                                                                                                                                                                                                                              |
| Data zmian                                                                                                                                                                                                                                                                       |
| 2011-08-01                                                                                                                                                                                                                                                                       |
| Wersja FreeCAD                                                                                                                                                                                                                                                                   |
| Wszystkie                                                                                                                                                                                                                                                                        |
| Domyślny skrót                                                                                                                                                                                                                                                                   |
| _Brak_                                                                                                                                                                                                                                                                           |
| Zobacz również                                                                                                                                                                                                                                                                   |
| _-_                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                  |

## Opis

Użyj jej do narysowania funkcji opisanej _równaniem [z=F(x)]_ (płaszczyzna Z-X). Przykład wykonany tutaj generuje parabolę.
Nie ma okna dialogowego. Wymaga zdefiniowania:

: F = zmienna używana w funkcji,

X = wartość początkowa x,

: Nb = liczba kroków,
: Z = funkcja wyrażona przez x
: ZZ = funkcja wyrażona przez xx

## Tworzenie skryptów

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Draw_2D_Function/pl&oldid=897360>"
