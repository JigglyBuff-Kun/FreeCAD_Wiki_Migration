---
title: Metody FeaturePython
---
## Wprowadzenie

Ta strona służy jako odniesienie do dostępnych nadpisywalnych metod w [Tworzenie obiektów FeaturePython - część I](/Create_a_FeaturePython_object_part_I/pl "Create a FeaturePython object part I/pl") lub [Obiekty tworzone skryptami](/Scripted_objects/pl "Scripted objects/pl").

## Podstawowe odniesienie

Poniższe metody stanowią około 99% przypadków użycia, jakie mogą mieć zaawansowani użytkownicy w przypadku klas proxy Pythona.

|  |  |  |
| --- | --- | --- |
| `execute(self, obj)` | Wywoływana podczas ponownego obliczania dokumentu | Nie wywołuj `recompute()` z tej metody *(lub jakiejkolwiek metody wywołanej z `execute()`)*, ponieważ spowoduje to zagnieżdżenie ponownego obliczenia. |
| `onBeforeChange(self, obj, prop)` | Wywoływana przed zmianą wartości właściwości | `prop` to nazwa właściwości, która ma być zmieniona, a nie obiekt właściwości sam w sobie. Zmiany właściwości nie mogą być anulowane. Poprzednie / następne wartości właściwości nie są jednocześnie dostępne do porównania. |
| `onChanged(self, obj, prop)` | Wywoływana po zmianie właściwości | `prop` to nazwa właściwości, która została zmieniona, a nie obiekt właściwości sam w sobie. |
| `onDocumentRestored(self, obj)` | Wywoływana po przywróceniu dokumentu lub skopiowaniu obiektu FeaturePython. | Czasami odwołania do obiektu FeaturePython z klasy lub klasy z obiektu FeaturePython mogą być utracone, ponieważ metoda `__init__()` klasy nie jest wywoływana podczas odtwarzania obiektu. Dodanie `self.Object = obj` lub `obj.Proxy = self` często rozwiązuje te problemy. |

Nie jest rzadkością, że w sytuacji, gdy wywołania zwrotne w Pythonie nie są wywoływane tak, jak powinny. Początkujący w tej dziedzinie mogą być pewni, że system wywołań zwrotnych FeaturePython nie jest łamliwy ani uszkodzony. Zazwyczaj gdy wywołania zwrotne nie są uruchamiane, dzieje się tak dlatego, że odwołanie jest utracone lub niezdefiniowane w kodzie źródłowym. Jeśli jednak wydaje się, że wywołania zwrotne przestają działać bez wyjaśnienia, przekazywanie odwołań do obiektów/proksów w wywołaniu `onDocumentRestored()` *(jak zaznaczono w pierwszej tabeli powyżej)* może złagodzić te problemy. Dopóki nie poczujesz się komfortowo z systemem wywołań zwrotnych, może być przydatne dodawanie instrukcji print w każdym wywołaniu zwrotnym, aby drukować komunikaty do konsoli podczas rozwoju.

## Dodatkowe metody

Poniższe metody są przeznaczone do **zaawansowanego** korzystania z klas proxy Pythona i przez większość czasu nie będą potrzebne.

* mustExecute
* getViewProviderName
* getSubObject
* getSubObjects
* getLinkedObject
* hasChildElement
* isElementVisible
* canLinkProperties
* allowDuplicateLabel
* redirectSubName
* canLoadPartial
* onBeforeChangeLabel

## Określanie dostępnych metod w środowisku Python

Wewnątrz [Klasy Szablonu FeaturePython](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L161-L351) istnieją różne wywołania `imp-><method name>()`.

Każdy z nich odpowiada dostępnej powiązanej metodzie Python.

Na przykład `imp->execute()` [linia 193](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L193) oznacza dostęponą metodę `execute`.

Uwaga, `getPyObject()` and `init()` są szczególnymi przypadkami i nie są zgodne z powyższą heurystyką.

## Zobacz również

* [FreeCAD GitHub: FeaturePython.h - public API](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L44-L86)
* [FreeCAD GitHub: FeaturePythonT template class](https://github.com/FreeCAD/FreeCAD/blob/76e74294894bbce46d006e149315c6274d206278/src/App/FeaturePython.h#L167)
* [FreeCAD Forum dyskusyjne: Pełne odniesienie do metod obiektów skryptowych](https://forum.freecadweb.org/viewtopic.php?f=22&t=49194)

Retrieved from "<http://wiki.freecad.org/index.php?title=FeaturePython_methods/pl&oldid=1385697>"