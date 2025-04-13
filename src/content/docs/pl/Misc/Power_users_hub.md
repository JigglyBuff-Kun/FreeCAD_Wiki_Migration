---
title: Centrum Power użytkowników
---
![](/images/Power_user_hub.png)

---

To jest miejsce, do którego możesz przyjść, jeśli jesteś doświadczonym użytkownikiem i chcesz dowiedzieć się więcej o dostosowywaniu i rozszerzaniu funkcjonalności programu FreeCAD.

FreeCAD jest rozszerzalny o kod [Python](/Python "Python"), który jest uruchamiany bezpośrednio w [konsoli Python](/Python_console "Python console"), lub który jest ładowany z modułów podczas uruchamiania. Oznacza to, że możesz modyfikować FreeCAD bez konieczności rekompilacji programu. Na przykład, możesz:

* **Tworzyć i modyfikować geometrie**: można utworzyć nowy typ obiektu, od podstaw lub poprzez dostosowanie istniejącego typu.
* **Tworzyć własne narzędzia i polecenia**: Dodaj swój własny zestaw narzędzi pozwalających uruchamiać kod.
* **Modyfikacja interfejsu**: tworzyć paski narzędzi do umieszczania swoich narzędzi, tworzyć specjalne okna, panele lub interfejsy do interakcji z narzędziami.
* **Modyfikuj reprezentację sceny**: FreeCAD posiada oddzielne procesy do budowania geometrii i wyświetlania jej na ekranie. Masz pełny dostęp do sposobu wyświetlania zawartości sceny na ekranie, dzięki czemu możesz modyfikować tę reprezentację, wchodzić z nią w interakcję lub dodawać do niej własne zachowania. Możesz również dodać niestandardowe widżety ekranu, takie jak informacje, narzędzia do przeciągania, kotwice lub obiekty tymczasowe.

Jeśli chcesz dodać treść do tych stron, poproś o konto Wiki z uprawnieniami edytora [na forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), i przeczytaj [WikiPages](/WikiPages "WikiPages"), aby uzyskać ogólne wytyczne, których powinieneś przestrzegać. Aby dowiedzieć się więcej o innych sposobach pomocy w projekcie, zobacz stronę [Pomóż w rozwoju FreeCAD](/Help_FreeCAD/pl "Help FreeCAD/pl").

## Dostosowanie FreeCAD

* [Dostosowywanie interfejsu](/Interface_Customization "Interface Customization"): zaczynając od początku: Paski narzędzi i skróty,
* [Praca z makrami](/Macros "Macros"): łatwe nagrywanie często powtarzanych zadań lub kodu Pythona,
* [Receptury makr](/Macros_recipes "Macros recipes"),
* [Dostosuj paski narzędzi](/Customize_Toolbars "Customize Toolbars"),
* [Instalowanie większej liczby Środowisk pracy](/Installing_more_workbenches "Installing more workbenches"),

## Tworzenie skryptów dla FreeCAD

### Informacje ogólne

* [Skrypty i makrodefinicje](/Scripting_and_macros/pl "Scripting and macros/pl") - Lista istotnych stron Wiki,
* [Wprowadzenie do Python](/Introduction_to_Python/pl "Introduction to Python/pl") - Zobacz także inne samouczki dotyczące języka Python na dole tej strony,
* [FreeCAD poradnik tworzenia skryptów](/Python_scripting_tutorial/pl "Python scripting tutorial/pl") - Ogólne spojrzenie na pisanie skryptów Pythona w programie FreeCAD,
* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"): No cóż, podstawy.
* [FreeCAD Manual - Sekcja Skrypty w języku Python](/Manual:A_gentle_introduction "Manual:A gentle introduction"): Wielorozdziałowe wprowadzenie do skryptów środowiska Python w programie FreeCAD,
* [Polecenia Gui](/Gui_Command/pl "Gui Command/pl"): Dodawanie niestandardowych poleceń do GUI,
* Używanie mieszanych [jednostek](/Units/pl "Units/pl") we FreeCAD.
* [Tworzenie profili](/Profiling/pl "Profiling/pl") kod środowiska Python,
* [Debugowanie](/Debugging/pl#Debugowanie_w_Python "Debugging/pl") kod środowiska Python.

### Moduły

Funkcjonalność FreeCAD została rozdzielona w Modułach, które zajmują się specjalnymi typami danych i aplikacjami. FreeCAD posiada wbudowane moduły i moduły rozszerzeń *(plug-ins)*. Po zainstalowaniu pluginów, stają się one dostępne dla Ciebie tak samo łatwo jak moduły wbudowane. Moduły opisane poniżej są modułami domyślnymi, dołączanymi do każdej instalacji FreeCAD.

* [Moduły wbudowane](/Builtin_modules "Builtin modules") są głównymi modułami FreeCAD. Zawierają one narzędzia do manipulowania ogólnymi konfiguracjami FreeCAD, dokumentami i ich zawartością.
* [Tworzenie Środowiska pracy](/Workbench_creation "Workbench creation"), pokaże Ci jak stworzyć własne stanowisko pracy.

#### Praca z siatkami

* [Skrypty siatek](/Mesh_Scripting/pl "Mesh Scripting/pl"): Jak wchodzić w interakcje z [Modułem siatek](/Mesh_Workbench/pl "Mesh Workbench/pl").

#### Praca przy użyciu środowiska Część

* Środowisko pracy [Część](/Part_Workbench/pl "Part Workbench/pl"): Jak narzędzia i struktura [Open CASCADE Technology](http://en.wikipedia.org/wiki/Open_CASCADE) są używane w programie FreeCAD.
* [Tworzenie skryptów danych topologicznych](/Topological_data_scripting/pl "Topological data scripting/pl"): Jak korzystać z Modułu Part.
* [PythonOCC](/PythonOCC/pl "PythonOCC/pl"): Jak wyzwolić całą moc Open CASCADE.
* [Siatka na Część](/Mesh_to_Part/pl "Mesh to Part/pl"): Konwersja między typami obiektów.

#### Dostęp do scenografii Coin

* [Scenografia Coin/Inventor](/Scenegraph/pl "Scenegraph/pl"): Jak działa reprezentacja sceny FreeCAD.
* [Pivy](/Pivy/pl "Pivy/pl"): Jak uzyskać dostęp do scenografii i modyfikować ją.

### Sterowanie interfejsem Qt

* [PySide](/PySide/pl "PySide/pl") Jak uzyskać dostęp do interfejsu i zmodyfikować zawartość tego interfejsu.
* [Używanie GUI programu FreeCAD](/Embedding_FreeCADGui/pl "Embedding FreeCADGui/pl") w innej aplikacji Qt z PyQt.

### Praca z obiektami parametrycznymi

* [Obiekty skryptowe](/Scripted_objects "Scripted objects"): Jak zrobić w FreeCAD 100% obiektów napisanych w Pythonie.
  + [Obiekty utworzone skryptami z załącznikiem](/Scripted_objects_with_attachment "Scripted objects with attachment"): Jak sprawić, by obiekty utworzone skryptami mogły być dołączane do innych obiektów w programie FreeCAD.
  + [Atrybuty zapisu obiektów skryptowych](/Scripted_objects_saving_attributes "Scripted objects saving attributes"):jak zapisywać i przywracać atrybuty klasy proxy za pomocą `dumps` and `loads`.
  + [Przeniesienie obiektów skryptowych](/Scripted_objects_migration "Scripted objects migration"): jak migrować stare obiekty skryptów do nowej klasy.

### Przykłady

* [Wycinki kodu](/Code_snippets/pl "Code snippets/pl"): kolekcja kawałków kodu Python dla FreeCAD, które mają służyć jako składniki twoich skryptów...
* [Funkcja rysowania linii](/Line_drawing_function/pl "Line drawing function/pl"): kolekcja fragmentów kodu FreeCAD Pythona..: Jak zbudować proste narzędzie do rysowania linii
* [Tworzenie dialogu](/Dialog_creation/pl "Dialog creation/pl"): jak konstruować okna dialogowe z projektantem Qt, i używać ich we FreeCAD.
* [Osadzenie FreeCAD](/Embedding_FreeCAD/pl "Embedding FreeCAD/pl"): jak zaimportować FreeCAD jako moduł Pythona w innych aplikacjach.
* Środowisko pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): dodaje podstawowe funkcje rysunkowe 2D do FreeCAD. Jest on napisany w całości w Pythonie, więc może być dobrym przykładem, jeśli chcesz napisać swoje własne moduły.
* [Biblioteka matematyki wektorowej FreeCAD](/FreeCAD_vector_math_library/pl "FreeCAD vector math library/pl"): kilka przydatnych funkcji do manipulowania wektorami we FreeCAD. Biblioteka ta jest również dołączona do modułu Draft.

## Funkcje API

Pełna dokumentacja API FreeCAD znajduje się na stronie <http://www.freecadweb.org/api/> . Zawiera ona zarówno opis dla C++ jak i Python API, i nie jest jeszcze do końca dobrze sformatowana, co może być mylące przy szukaniu kodu tylko dla Pythona. Wersje łatwiejsze do przeglądania można znaleźć [tutaj](/Category:API "Category:API"). Zauważ, że może ona być niekompletna, ponieważ jest aktualizowana ręcznie. Aby uzyskać bardziej dokładne informacje, przeglądaj moduły bezpośrednio z konsoli Python we FreeCAD.

Temat powiązany: [Udostępnianie języka C++ Pythonowi](/Exposing_C%2B%2B_to_Python "Exposing C++ to Python")

## Zaawansowana modyfikacja

* [Uruchomienie i konfiguracja](/Start_up_and_Configuration "Start up and Configuration"): Uruchomienie i opcje wiersza poleceń.
* [Instalacja w systemie Windows](/Install_on_Windows "Install on Windows"): Użycie instalatora Windows.
* [Kompilacja FreeCAD w systemie Linux/Unix](/Compile_on_Linux/Unix/pl "Compile on Linux/Unix/pl") oraz [Kompilacja FreeCAD w systemie Windows](/Compile_on_Windows "Compile on Windows").
* [Kształtowanie marki](/Branding "Branding"): Proste modyfikacje, które możesz zrobić w kodzie źródłowym, aby zmienić niektóre cechy FreeCAD.
* [Dodatkowe moduły Python](/Extra_python_modules/pl "Extra python modules/pl"): Rozszerz interpreter FreeCAD Python o te potężne moduły!

## Poradniki Python

Są to dobre ogólne samouczki, nie specyficzne dla FreeCAD, które mogą cię zainteresować, jeśli jesteś zupełnie nowy w Pythonie.

**Python**

* [Oficjalny samouczek Pythona](https://docs.python.org/2.7/tutorial/index.html) - Niezwykle obszerny samouczek do odkrywania Pythona.
* [Samouczek Pythona dla osób nie będących programistami](https://en.wikibooks.org/wiki/Non-Programmer%27s_Tutorial_for_Python_3) - doskonały Wikibook.
* [Python dla nowicjuszy](http://npt.cc.rsu.ru/user/wanderer/ODP/Python_for_Newbies.htm) - jeden obszerny poradnik obejmujący wszystkie podstawy.

**PySide** - Jak tworzyć i zarządzać interfejsem Qt UI FreeCADa z poziomu konsoli Python.

* [Samouczek PySide](http://zetcode.com/gui/pysidetutorial/): Niezależny od platformy samouczek pokazujący użycie PySide z przykładami.
* [PySide/PyQt tutorial](http://www.pythoncentral.io/series/python-pyside-pyqt-tutorial/): Łatwy do zrozumienia poradnik, który obejmuje PySide i PyQt z przykładami.
* [dokumentacja PySide](http://qt-project.org/wiki/PySideDocumentation): z projektu Qt *(ludzie, którzy to wszystko napisali)*.
* [Korzystanie z QtCreator w PySide](http://qt-project.org/wiki/QtCreator_and_PySide): również z projektu Qt.
* [Odniesienie do PySide](http://srinikom.github.io/pyside-docs/index.html): niekończące się szczegóły na temat drobiazgów PySide i Qt, wiarygodnego źródła odniesienia.
* [fragmenty kodu PySide](http://nullege.com/codes/search?cq=PySide): przeszukiwalna baza danych fragmentów kodu PySide.

Poniższe dwa odnośniki są specyficzne dla PyQt *(nie PySide)*, ale mogą oferować pewne informacje użytkowe:

* [Basic PyQt tutorial](http://www.cs.usfca.edu/~afedosov/qttut/): Przyjazny i krótki, oparty na platformie Linux poradnik, który wyjaśni jak pracować z PyQt i Qt Designer.
* [Programowanie aplikacji Qt w Python](http://vizzzion.org/?id=pyqt): Bardziej szczegółowy poradnik obejmujący cały proces pracy ze środowiskiem Qt i Python.

**Pivy** - Jak wchodzić w interakcję ze scenami 3D w programie FreeCAD.

* [Pivy - Osadzanie dynamicznego języka skryptowego w bibliotece wykresów scenograficznych](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.108.947&rep=rep1&type=pdf) : Teza, która objaśnia Pivy w szczegółach.
* [Programowanie wysokiego poziomu, grafiki 3D w Pythonie](http://ftp.ntua.gr/mirror/python/pycon/dc2004/papers/47/) : Przykład Pivy z Pycon 2004.
* [Introducing Pivy into studierstube](https://www.semanticscholar.org/paper/Integrating-Pivy-into-Studierstube-4.2-Gruber/08c9a89c8326c87f81c2d83428029fbfb6c2ae64) [*(Mirror)*](https://www.researchgate.net/publication./228737136_Integrating_Pivy_into_Studierstube_42) : Artykuł, który tak naprawdę nie jest samouczkiem, ale dobrze ilustruje, jak działa Pivy *(wymaga konta akademickiego)*.

## Projekty społeczności

Na [Portalu Społeczności](/FreeCAD_Community_Portal "FreeCAD Community Portal") możesz znaleźć inne projekty oparte na FreeCAD prowadzone przez społeczność użytkowników FreeCAD. Jeśli rozpoczynasz nowy projekt FreeCAD, upewnij się, że możesz go tam wymienić! Mamy także stronę z rzeczami, które możesz zrobić, jeśli chciałbyś [Pomóc FreeCAD](/Help_FreeCAD "Help FreeCAD").

Retrieved from "<http://wiki.freecad.org/index.php?title=Power_users_hub/pl&oldid=1463665>"