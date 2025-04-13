---
title: Tworzenie interfejsu
---
## Wprowadzenie

Zaawansowani użytkownicy mają możliwość tworzenia interfejsu, aby pomóc wytwarzać złożone narzędzia dla ich niestandardowych [dodatków](/Addon/pl "Addon/pl"), takie jak [makrodefinicje](/Macros/pl "Macros/pl") lub pełne [środowiska pracy](/Workbenches/pl "Workbenches/pl").

Interfejs jest tworzony przy użyciu biblioteki [PySide](/PySide/pl "PySide/pl"), która umożliwia korzystanie z Qt w środowisku [Python](/Python/pl "Python/pl").

![](/images/FreeCAD_creating_interfaces.svg)

Dwie ogólne metody tworzenia interfejsów, poprzez włączenie interfejsu do pliku Python lub poprzez użycie plików `.ui`.

## Opis

Istnieją zazwyczaj dwa sposoby tworzenia interfejsu za pomocą PySide.

### Interfejs w pliku .ui

W tej metodzie interfejs jest zdefiniowany w pliku `.ui` (dokument XML, który definiuje strukturę interfejsu), który jest następnie importowany do kodu [Python](/Python/pl "Python/pl"), który go używa. Jest to zalecane podejście.

* Pozwala programiście pracować z interfejsem graficznym oddzielnie od logiki, która będzie z niego korzystać.
* Pozwala to każdemu spojrzeć na sam interfejs, czyli plik `.ui`, bez konieczności uruchamiania kodu Python.
* Plik `.ui` może być zaprojektowany przez każdego bez wiedzy programistycznej.
* Interfejs `.ui` może być używany w samodzielnym oknie *(modalnym)* lub w oknie osadzonym *(niemodalnym)*, dlatego ta metoda jest idealna do tworzenia niestandardowych [paneli zadań](/Task_panel/pl "Task panel/pl").
* Ponieważ plik `.ui` opisuje tylko "wygląd" interfejsu, nie musi być powiązany z konkretnym językiem programowania; może być używany zarówno w [Python](/Python/pl "Python/pl"), jak i w kodzie C++.

### Interfejs w całości w kodzie Python

W tej metodzie cały interfejs jest definiowany przez kilka wywołań środowiska Python.

* Jest to starszy sposób pracy z interfejsem.
* Metoda ta tworzy bardzo rozwlekły kod, ponieważ wiele szczegółów interfejsu musi zostać określonych ręcznie.
* Nie jest łatwo oddzielić interfejs od logiki, która używa tego kodu, co oznacza, że użytkownik musiałby uruchomić plik [Python](/Python/pl "Python/pl") w odpowiednim kontekście, aby zobaczyć, jak wyglądałby interfejs.
* Ta metoda ma tę zaletę, że kilka interfejsów może być zawartych w jednym dokumencie, kosztem tego, że plik jest bardzo duży.
* Ta metoda jest zalecana tylko dla małych interfejsów, które nie definiują więcej niż kilka widżetów, na przykład w [makrodefinicjach](/Macros/pl "Macros/pl").

Przykłady tej metody można znaleźć w [Tworzenie interfejsu całkowicie w kodzie Python](#Interface_completely_in_Python_code).

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface_creation/pl&oldid=1317382>"