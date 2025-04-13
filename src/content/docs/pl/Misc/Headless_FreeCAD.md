---
title: FreeCAD bez GUI
---
## Wprowadzenie

Ta strona wiki dokumentuje różne aspekty uruchamiania FreeCAD w konsoli bez włączania GUI *(Graphical User Interface)* lub tak zwanego *headless*.

## Reprezentacja scenografii

Ponieważ nie jest możliwe utworzenie lub dostęp do [dostawcy widoku](/Viewprovider/pl "Viewprovider/pl") w trybie bez użycia GUI. Co jest możliwe, to załadowanie `FreeCADGui` w trybie bez GUI, ale nie ma możliwości dostępu do dokumentu GUI, ponieważ nie zostanie on utworzony i w konsekwencji nie będzie istniał żaden dostawca widoku.

Możliwe jest jednak stworzenie [Scenogramu](/Scenegraph/pl "Scenegraph/pl") reprezentacji obiektu:

```
import FreeCADGui as Gui
from pivy import coin

Gui.setupWithoutGUI()
doc = App.newDocument()
obj = doc.addObject("Part::Box","Box")
doc.recompute()
view = Gui.subgraphFromObject(obj)

```

Zobacz: [wątek na forum](https://forum.freecadweb.org/viewtopic.php?f=10&t=55794&p=481586#p481586).

## Przykłady

### Przeszukiwanie modułów FreeCAD

1. Otwórz terminal i wpisz:

   :   `$ /path/to/FreeCAD -c`

       :   lub
   :   `$ /ścieżka/do/FreeCADCmd`
2. Powłoka Python uruchomi się z promptem. Wpisz `help()`.
3. Zostanie wyświetlony tekst pomocy.
4. Wpisz `modules freecad`.

## Powiązane

* [Osadzanie FreeCAD](/Embedding_FreeCAD/pl#U.C5.BCywanie_FreeCAD_bez_GUI "Embedding FreeCAD/pl")
* [Uruchomienie i Konfiguracja](/Start_up_and_Configuration/pl#Uruchamianie_FreeCAD_bez_GUI "Start up and Configuration/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Headless_FreeCAD/pl&oldid=1079058>"