---
title: Tworzenie obiektów FeaturePython - część I
---
## Wprowadzenie

Obiekty FeaturePython *(zwane również [obiektami tworzonymi przez skrypty](/Scripted_objects/pl "Scripted objects/pl"))* zapewniają możliwość rozszerzenia FreeCAD o obiekty, które płynnie integrują się z frameworkiem FreeCAD.

Zachęca to do:

* Szybkie prototypowanie nowych obiektów i narzędzi za pomocą niestandardowych klas środowiska Pyton.
* Zapisywanie i przywracanie danych *(znane również jako serializacja)* za pomocą obiektów `App::Property`, bez osadzania jakiegokolwiek skryptu w pliku dokumentu FreeCAD.
* Swoboda twórcza umożliwiająca dostosowanie FreeCAD do dowolnego zadania.

Na tej stronie skonstruujemy działający przykład niestandardowej klasy FeaturePython, identyfikując wszystkie główne komponenty i rozumiejąc, jak wszystko działa.

## How does it work?

FreeCAD zawiera szereg domyślnych typów obiektów do zarządzania różnymi rodzajami geometrii. Niektóre z nich mają alternatywy "FeaturePython", które pozwalają na dostosowanie za pomocą zdefiniowanej przez użytkownika klasy Python.

Ta niestandardowa klasa Python pobiera odniesienie do jednego z tych obiektów i modyfikuje go. Na przykład, klasa Python może dodawać właściwości do obiektu lub łączyć go z innymi obiektami. Ponadto klasa Python może implementować pewne metody, aby umożliwić obiektowi reagowanie na zdarzenia dokumentu, umożliwiając przechwytywanie zmian właściwości obiektu i ponowne obliczanie dokumentu.

Podczas pracy z klasami niestandardowymi i obiektami FeaturePython ważne jest, aby wiedzieć, że klasa niestandardowa i jej stan nie są zapisywane w dokumencie, ponieważ wymagałoby to osadzenia skryptu w pliku dokumentu FreeCAD, co stanowiłoby poważne zagrożenie dla bezpieczeństwa. Zapisywany *(serializowany)* jest tylko sam obiekt FeaturePython. Ale ponieważ ścieżka modułu skryptu jest przechowywana w dokumencie, użytkownik musi tylko zainstalować niestandardowy kod klasy Python jako moduł do zaimportowania, zgodnie z tą samą strukturą folderów, aby odzyskać utraconą funkcjonalność.

[na początek strony](#top)

### Konfiguracja

Klasy obiektów FeaturePython muszą działać jako moduły importowalne w FreeCAD. Oznacza to, że należy umieścić je w ścieżce, która istnieje w środowisku Python *(lub dodać ją specjalnie)*. Na potrzeby tego samouczka użyjemy folderu Macro użytkownika FreeCAD. Ale jeśli masz inny pomysł, możesz go użyć zamiast tego.

Jeśli nie wiesz, gdzie znajduje się folder FreeCAD Macro, w [konsoli Python](/Python_console/pl "Python console/pl") programu FreeCAD wpisz polecenie `FreeCAD.getUserMacroDir(True)` :

* W systemie Linux jest to zazwyczaj /home/<nazwa użytkownika>/.local/share/FreeCAD/Macro/ *(wersja 0.20 i powyżej)* lub /home/<username>/.FreeCAD/Macro/ *(wersja 0.19 i poniżej)*.
* Na macOS jest to zazwyczaj /Users/<username>/Library/Application Support/FreeCAD/Macro/.
* W systemie Windows jest to %APPDATA%\FreeCAD\Macro\, który zwykle jest C:\Users\<username>\Appdata\Roaming\FreeCAD\Macro\.

Teraz musimy utworzyć kilka folderów i plików:

* W folderze Macro utwórz nowy folder o nazwie fpo.
* W folderze fpo utwórz pusty plik: \_\_init\_\_.py.
* W folderze fpo utwórz nowy folder o nazwie box.
* W folderze box utwórz dwa pliki: \_\_init\_\_.py i box.py *(na razie pozostaw oba puste)*.

Struktura folderów powinna wyglądać następująco:

```
Macro/
    |--> fpo/
        |--> __init__.py
        |--> box/
            |--> __init__.py
            |--> box.py

```

Folder fpo zapewnia przyjemne miejsce do zabawy z nowymi obiektami FeaturePython, a folder box jest modułem, w którym będziemy pracować. \_\_init\_\_.py informuje środowisko Python, że w folderze znajduje się możliwy do zaimportowania moduł, a box.py będzie plikiem klasy dla naszego nowego obiektu FeaturePython.

Po utworzeniu ścieżek modułów i plików, upewnijmy się, że FreeCAD jest poprawnie skonfigurowany:

* Uruchom FreeCAD *(jeśli jeszcze tego nie zrobiłeś)*.
* Włącz [Widok raportu](/Report_view/pl "Report view/pl") *(**Widok → Panele → Widok raportu**)*.
* Włącz [konsole Python](/Python_console/pl "Python console/pl") *(**Widok → Panele → Konsola Python**)* zapoznaj sie z informacjami na stronie [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Na koniec przejdź do folderu Macro/fpo/box i otwórz box.py w swoim ulubionym edytorze kodu. Będziemy edytować tylko ten plik.

[na początek strony](#top)

## Obiekt FeaturePython

Zacznijmy od napisania naszej klasy i jej konstruktora:

```
class box():

    def __init__(self, obj):
        """
        Default constructor
        """

        self.Type = 'box'

        obj.Proxy = self

```

**Podział metody `__init__()`:**

|  |  |
| --- | --- |
| `def __init__(self, obj):` | Parametry odnoszą się do samej klasy Python i obiektu FeaturePython, do którego jest ona dołączona. |
| `self.Type = 'box'` | Definicja niestandardowego typu Python w postaci ciągu znaków. |
| `obj.Proxy = self` | Przechowuje odniesienie do instancji Python w obiekcie FeaturePython. |

Dodaj następujący kod na początku pliku:

```
import FreeCAD as App

def create(obj_name):
    """
    Object creation method
    """

    obj = App.ActiveDocument.addObject('App::FeaturePython', obj_name)

    box(obj)

    return obj

```

**Podział metody `create()`:**

|  |  |
| --- | --- |
| `import FreeCAD as App` | Standardowy import dla większości skryptów Python, alias App nie jest wymagany. |
| `obj = ... addObject(...)` | Tworzy nowy obiekt FreeCAD FeaturePython o nazwie przekazanej do metody. Jeśli nie ma kolizji nazw, będzie to etykieta i nazwa utworzonego obiektu. W przeciwnym razie zostanie utworzona unikalna nazwa i etykieta na podstawie "obj\_name". |
| `box(obj)` | Tworzy instancję naszej niestandardowej klasy. |
| `return obj` | Zwraca obiekt FeaturePython. |

Metoda `create()` nie jest wymagana, ale zapewnia przyjemny sposób enkapsulacji kodu tworzenia obiektu.

[na początek strony](#top)

### Testowanie kodu

Teraz możemy przetestować nasz nowy obiekt. Zapisz kod i wróć do FreeCAD. Upewnij się, że otworzyłeś nowy dokument, możesz to zrobić naciskając Ctrl + N lub wybierając **Plik → Nowy**.

W konsoli Python wpisz następujące polecenie:

```
from fpo.box import box

```

Teraz musimy stworzyć nasz obiekt:

```
mybox = box.create('my_box')

```

![](/images/Fpo_treeview.png)

W [widoku drzewa](/Tree_view/pl "Tree view/pl") powinien pojawić się nowy obiekt oznaczony jako "my\_box".

Zauważ, że ikona jest szara. FreeCAD mówi nam, że obiekt nie jest w stanie wyświetlić niczego w [widoku 3D](/3D_view/pl "3D view/pl"). Kliknij na obiekt i spójrz na jego właściwości w [Edytorze właściwości](/Property_editor/pl "Property editor/pl"). Nie ma tam zbyt wiele, tylko nazwa obiektu.

Zwróć też uwagę, że obok obiektu FeaturePython w widoku drzewa znajduje się mały niebieski znacznik wyboru. Dzieje się tak, ponieważ gdy obiekt jest tworzony lub zmieniany, jest "dotykany" i musi zostać ponownie przeliczony. Naciśnięcie przycisku ![](/images/Std_Refresh.svg) [Odśwież](/Std_Refresh/pl "Std Refresh/pl") pozwoli to osiągnąć. Później dodamy trochę kodu, aby to zautomatyzować.

Przyjrzyjmy się atrybutom naszego obiektu:

```
dir(mybox)

```

To zwróci:

```
['Content', 'Document', 'ExpressionEngine', 'FullName', 'ID', 'InList',
...
'setPropertyStatus', 'supportedProperties', 'touch']

```

Istnieje wiele atrybutów, ponieważ uzyskujemy dostęp do natywnego obiektu FreeCAD FeaturePyton utworzonego w pierwszej linii naszej metody `create()`. Jest tam również właściwość `Proxy`, którą dodaliśmy w naszej metodzie `__init__()`.

Sprawdźmy to za pomocą metody `dir()`:

```
dir(mybox.Proxy)

```

To zwróci:

```
['Type', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__',
...
'__str__', '__subclasshook__', '__weakref__']

```

Możemy zobaczyć naszą właściwość `Type`. Sprawdźmy ją:

```
mybox.Proxy.Type

```

To zwróci:

```
'box'

```

Jest to rzeczywiście przypisana wartość, więc wiemy, że uzyskujemy dostęp do klasy niestandardowej za pośrednictwem obiektu FeaturePython.

Zobaczmy teraz, czy możemy uczynić naszą klasę nieco bardziej interesującą, a może także bardziej użyteczną.

[na początek strony](#top)

### Dodanie właściwości

Właściwości są siłą napędową klasy FeaturePython. Na szczęście FreeCAD obsługuje [wiele typów właściwości](/FeaturePython_Custom_Properties/pl "FeaturePython Custom Properties/pl") dla klas FeaturePython. Właściwości te są dołączane bezpośrednio do obiektu FeaturePython i są w pełni serializowane podczas zapisywania pliku. Aby uniknąć konieczności samodzielnej serializacji danych, zaleca się używanie tylko tych typów właściwości.

Dodawanie właściwości odbywa się za pomocą metody `add_property()`. Składnia tej metody to:

```
add_property(type, name, section, description)

```

Listę obsługiwanych właściwości można wyświetlić, wpisując:

```
mybox.supportedProperties()

```

Spróbujmy dodać właściwość do naszej klasy box. Przełącz się do edytora kodu, przejdź do metody `__init__()` i na końcu metody dodaj:

```
obj.addProperty('App::PropertyString', 'Description', 'Base', 'Box description').Description = ""

```

Zauważ, że używamy odniesienia do *(serializowalnego)* obiektu FeaturePython `obj`, a nie *(nieserializowalnej)* instancji klasy Python `self`.

Po zakończeniu zapisz zmiany i przełącz się z powrotem do FreeCAD. Zanim będziemy mogli zaobserwować zmiany wprowadzone w naszym kodzie, musimy ponownie załadować moduł. Można to osiągnąć poprzez ponowne uruchomienie FreeCAD, ale ponowne uruchamianie FreeCAD za każdym razem, gdy edytujemy kod, byłoby niewygodne. Aby to ułatwić, wpisz następujące polecenie w konsoli Python:

```
from importlib import reload
reload(box)

```

Po przeładowaniu modułu zobaczmy, co otrzymamy po utworzeniu obiektu:

```
box.create('box_property_test')

```

W widoku drzewa powinien pojawić się nowy obiekt box:

* Wybierz go i spójrz na edytor właściwości. Tam powinieneś zobaczyć właściwość *Description*.
* Najedź kursorem na nazwę właściwości po lewej stronie, a pojawi się podpowiedź z opisem, który podałeś.
* Wybierz pole i wpisz dowolny tekst. Zauważysz, że polecenia aktualizacji Pythona są wykonywane i wyświetlane w konsoli podczas wpisywania liter i zmian właściwości.

[na początek strony](#top)

Dodajmy jeszcze kilka właściwości. Wróć do kodu źródłowego i dodaj następujące właściwości do metody `__init__()`:

```
obj.addProperty('App::PropertyLength', 'Length', 'Dimensions', 'Box length').Length = 10.0
obj.addProperty('App::PropertyLength', 'Width', 'Dimensions', 'Box width').Width = '10 mm'
obj.addProperty('App::PropertyLength', 'Height', 'Dimensions', 'Box height').Height = '1 cm'

```

Dodajmy też trochę kodu, aby automatycznie przekompilować dokument. Dodajmy następującą linię nad instrukcją `return()` w metodzie `create()`:

```
App.ActiveDocument.recompute()

```

**Uważaj, gdzie rekompilujesz obiekt FeaturePython. Ponowne obliczanie powinno być obsługiwane przez metodę zewnętrzną w stosunku do jego klasy.**

![](/images/Fpo_box_properties.png)

Teraz przetestuj zmiany w następujący sposób:

* Zapisz zmiany i przeładuj moduł.
* Usuń wszystkie obiekty w widoku drzewa.
* Utwórz nowy obiekt box z konsoli Python, wywołując `box.create('myBox')`.

Po utworzeniu pola i sprawdzeniu, czy zostało ono ponownie obliczone, wybierz obiekt i sprawdź jego właściwości. Powinieneś zauważyć dwie rzeczy:

* Nową grupę właściwości: *Dimensions*.
* Trzy nowe właściwości: *Height*, *Length* and *Width*.

Zauważ również, że właściwości mają jednostki. Dokładniej mówiąc, przyjęły one jednostki liniowe ustawione w preferencjach użytkownika (**Edycja → Preferencje ... → Ogólne → Jednostki**).

Bez wątpienia zauważyłeś, że wprowadzono trzy różne wartości dla wymiarów: wartość zmiennoprzecinkową (`10.0`) i dwa różne ciągi znaków (`'10 mm'` i `'1 cm'`). Typ `App::PropertyLength` zakłada, że wartości zmiennoprzecinkowe są w milimetrach, wartości łańcuchowe są analizowane zgodnie z określonymi jednostkami, a w GUI wszystkie wartości są konwertowane na jednostki określone w preferencjach użytkownika *(`mm` na obrazku)*. To wbudowane zachowanie sprawia, że typ `App::PropertyLength` jest idealny dla wymiarów.

[na początek strony](#top)

### Zdarzenia związane z łapaniem

Ostatnim elementem wymaganym dla podstawowego obiektu FeaturePython jest przechwytywanie zdarzeń. Obiekt FeaturePython może reagować na zdarzenia za pomocą funkcji zwrotnych. W naszym przypadku chcemy, aby obiekt reagował za każdym razem, gdy zostanie ponownie przeliczony. Innymi słowy, chcemy przechwytywać ponowne obliczenia. Aby to osiągnąć, musimy dodać do klasy obiektu funkcję o określonej nazwie `execute()`. Istnieje kilka innych zdarzeń, które można przechwycić, zarówno w samym obiekcie FeaturePython, jak i w [Dostawcay widoku](/Viewprovider/pl "Viewprovider/pl"), które omówimy w poradniku [Tworzenie obiektów FeaturePython - część II](/Create_a_FeaturePython_object_part_II/pl "Create a FeaturePython object part II/pl").

Aby uzyskać pełną listę metod dostępnych do zaimplementowania w klasach FeautrePython, zapoznaj sie z informacjami na stronie [Metody FeaturePython](/FeaturePython_methods/pl "FeaturePython methods/pl").

Dodaj następujące elementy po funkcji `__init__()`:

```
def execute(self, obj):
    """
    Called on document recompute
    """

    print('Recomputing {0:s} ({1:s})'.format(obj.Name, self.Type))

```

Przetestuj kod, ponownie wykonując następujące kroki:

* Zapisz i ponownie załaduj moduł.
* Usuń wszystkie obiekty.
* Utwórz nowy obiekt box.

Powinieneś zobaczyć wyniki drukowania w konsoli Python, dzięki wywołaniu `recompute()`, które dodaliśmy do metody `create()`. Oczywiście metoda `execute()` nie robi tutaj nic poza poinformowaniem nas, że została wywołana, ale jest ona kluczem do magii obiektów FeaturePython.

To wszystko, wiesz już jak zbudować podstawowy, funkcjonalny obiekt FeaturePython!

[na początek strony](#top)

### Kompletny kod

```
import FreeCAD as App

def create(obj_name):
    """
    Object creation method
    """

    obj = App.ActiveDocument.addObject('App::FeaturePython', obj_name)

    box(obj)

    App.ActiveDocument.recompute()

    return obj

class box():

    def __init__(self, obj):
        """
        Default constructor
        """

        self.Type = 'box'

        obj.Proxy = self

        obj.addProperty('App::PropertyString', 'Description', 'Base', 'Box description').Description = ""
        obj.addProperty('App::PropertyLength', 'Length', 'Dimensions', 'Box length').Length = 10.0
        obj.addProperty('App::PropertyLength', 'Width', 'Dimensions', 'Box width').Width = '10 mm'
        obj.addProperty('App::PropertyLength', 'Height', 'Dimensions', 'Box height').Height = '1 cm'

    def execute(self, obj):
        """
        Called on document recompute
        """

        print('Recomputing {0:s} ({1:s})'.format(obj.Name, self.Type))

```

[na początek strony](#top)

Retrieved from "<http://wiki.freecad.org/index.php?title=Create_a_FeaturePython_object_part_I/pl&oldid=1417937>"