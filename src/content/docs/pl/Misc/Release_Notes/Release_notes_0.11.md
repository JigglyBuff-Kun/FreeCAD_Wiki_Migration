---
title: Release notes 0.11
---

To jest podsumowanie najważniejszych zmian i nowych funkcji dostępnych w wydaniu 0.11 FreeCAD. Pełną listę można znaleźć na stronie [dziennika zmian](http://www.freecadweb.org/tracker/changelog_page.php).

![](/images/FreeCAD011.png)

Widok ekranu z wersji 0.11.

### Informacje ogólne

- [Projekt tłumaczenia FreeCAD](http://crowdin.net/project/freecad) otrzymał ogromną pomoc od wielu ludzi z całego świata i FreeCAD jest teraz dostępny w nie mniej niż 15 językach: Angielski, niemiecki, francuski, włoski, szwedzki, hiszpański, portugalski, rosyjski, ukraiński, norweski, afrikaans, fiński, chiński uproszczony, chorwacki i holenderski. A wiele więcej języków jest w trakcie opracowywania dla następnych wydań.

![](/images/Release011-translation.jpg)

- Kilka ulepszeń zostało wprowadzonych dla całego FreeCAD, na przykład drzewo hierarchii pozwala teraz na złożone stosy obiektów, utrzymując całą historię geometrii w czystości, łatwo dostępną i modyfikowalną. Nowe ulepszenia Python API pozwalają również na lepszą interakcję obiektów z drzewem, definiując ich własne zachowanie, ikony, itp.

![](/images/Release011-dependency.jpg)

- Mechanizm kopiuj / wklej został również znacznie ulepszony, umożliwiając teraz łatwe kopiowanie / wklejanie obiektów pomiędzy dokumentami.
- W środowisku pracy [Część](/Part_Workbench/pl "Part Workbench/pl") pojawiły się nowe narzędzia, takie jak odbicie lustrzane oraz zaokrąglenia i sfazowania krawędzi.

### Szkicownik i Projekt Części

- Środowisko pracy do rozwiązywania wiązań [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") został całkowicie przerobiony i nawet jeśli Szkicownik nie jest jeszcze kompletny, posiada już dobry zestaw narzędzi, takich jak linie, prostokąty i wiązania, takie jak zbieżność punktów, równoległość, stała długość lub ograniczenia poziome i pionowe.

- Oprócz Szkicownika, nowy stół roboczy Projekt Części pozwala na szybkie budowanie brył na wierzchu szkiców. Zasadą w FreeCAD jest, że wszystko jest parametryczne, możesz wrócić w każdej chwili i zmienić swój szkic, a cała geometria, która od niego zależy zostanie automatycznie dostosowana.

![](/images/Release011-sketcher.jpg)

![](/images/Movie.png) Przykład: [demo Szkicownik](http://www.youtube.com/watch?v=hvXupH5bA0E) • [demo Projekt Części](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

### Robot simulation

- Środowisko pracy [Robot](/Robot_Workbench/pl "Robot Workbench/pl") zostało rozszerzone o wiele narzędzi GUI i jest obecnie dość funkcjonalne i pozwala na łatwe symulowanie ruchów robotów przemysłowych.

![](/images/Release011-robot.jpg)

### Kreślenie 2D

- Przyciąganie zostało znacznie zoptymalizowane i teraz działa całkiem szybko, nawet na złożonych obiektach.
- Narzędzie "Przytnij/wydłuż" można teraz nazwać " Przytnij/Wydłuż/Wyciągnij", ponieważ pozwala ono na szybkie wyciągnięcie pojedynczych powierzchni, oferując wygodny skrót do standardowego narzędzia Wyciągnięcie środowiska Część.
- Udoskonalono również przepływ pracy z arkuszem Draft-to-Drawing, wszystkie obiekty środowiska pracy Rysunek Roboczy można teraz umieścić na stronie rysunku i wszystkie oferują ten sam poziom komfortu, co standardowe obiekty środowiska Część, oferując możliwość zmiany ich pozycji, obracanie i skalowanie w locie. Oferują również dodatkowe funkcje, takie jak wypełnienia wzorem kreskowania

![](/images/Release011-draft-drawing.jpg)

- Środowisko pracy Rysunek Roboczy oferuje również nowe narzędzia, takie jak wielokąty foremne i linie złożone
- Dostępne jest również nowe narzędzie Edycja, pozwalające na edycję geometrii większości obiektów środowiska Rysunek Roboczy.

![](/images/Release011-draft.jpg)

- Wymiary mogą teraz mieć edytowany i przesuwany tekst, a linie mogą mieć strzałkę końcową, co pozwala na używanie ich jako linii odniesienia.
- Kilka poleceń, takich jak przesuń, obróć lub wymiarowanie, pozwala teraz na wykonanie kilku kopii bez opuszczania narzędzia.
- Środowisko pracy Rysunek Roboczy zyskało również [API](/Draft_API/pl "Draft API/pl") środowiska [Python](/Python/pl "Python/pl").
- Importer DXF obsługuje teraz atrybuty bloków

![](/images/Movie.png) Przykład: [Demo środowiska Rysunek Roboczy](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

### Obrazy

- Środowisko pracy [Obraz](/Image_Workbench/pl "Image Workbench/pl") posiada teraz obiekt ImagePlane, pozwalający na wyświetlenie pliku obrazu wewnątrz sceny 3D, który może być użyty na przykład do konstrukcji geometrii na podstawie zeskanowanych planów.

[Przewiń na górę strony](#top)

### Documentacja

- Podręcznik [FreeCAD](/Online_Help_Toc/pl "Online Help Toc/pl") posiada teraz kilka zaawansowanych tłumaczeń. Sprawdź stronę główną!

Dostępne języki: [![](/images/Flag-en.jpg)](/Release_notes_0.11 "Release notes 0.11 ") [![](/images/b/b7/Flag-de.jpg)](/Release_notes_0.11/de "Release notes 0.11/de") [![](/images/Flag-es.jpg)](/Release_notes_0.11/es "Release notes 0.11/es ") [![](/images/1/1f/Flag-fr.jpg)](/Release_notes_0.11/fr "Release notes 0.11/fr") [![](/images/Flag-it.jpg)](/Release_notes_0.11/it "Release notes 0.11/it ") [![](/images/5/57/Flag-ru.jpg)](/Release_notes_0.11/ru "Release notes 0.11/ru")

Retrieved from "<http://wiki.freecad.org/index.php?title=Release_notes_0.11/pl&oldid=1016236>"
