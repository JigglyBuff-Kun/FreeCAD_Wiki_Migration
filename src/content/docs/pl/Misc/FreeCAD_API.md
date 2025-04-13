---
title: Skrypty FreeCAD
---
:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Jest to główny *(root)* moduł programu FreeCAD. Może być również wywołany przez "App" z interpretera FreeCAD. Zawiera wszystko, co jest potrzebne do manipulowania dokumentami i ich zawartością *(obiektami)*.

Przykład:

```
import FreeCAD
print FreeCAD.listDocuments()
mydoc = FreeCAD.activeDocument()

```

![](/images/Method.png) **ConfigDump(****)**

**Description**: Wydrukuje słownik z informacjami zawierający całą konfigurację środowiska FreeCAD

**Returns**: {{{4}}}

.

![](/images/Method.png) **ConfigGet(***[string]***)**

**Description**: Zwraca wartość podanego klucza. Jeśli nie podano klucza, zwracana jest pełna konfiguracja - ciąg znaków.

**Returns**: {{{4}}}

![](/images/Method.png) **ConfigSet(***string, string***)**

**Description**: Ustawia podany klucz (pierwszy ciąg) na podaną wartość (drugi ciąg).

**Returns**:

![](/images/Method.png) **Version(****)**

**Description**: Wydrukuje wersję FreeCAD.

**Returns**:

![](/images/Method.png) **activeDocument(****)**

**Description**: Zwraca aktywny dokument lub nic, jeśli nie ma aktywnego dokumentu.

**Returns**: Dokument FreeCAD.

![](/images/Method.png) **addExportType(***string, string***)**

**Description**: Dodaje nowy typ pliku eksportu do FreeCAD. Pierwszy ciąg znaków musi być sformatowany jak w tym przykładzie: "Dokument Word (\*.doc)". Drugi łańcuch to nazwa skryptu/modułu Pythona zawierającego funkcję export().

**Returns**:

![](/images/Method.png) **addImportType(***string, string***)**

**Description**: Dodaje nowy typ pliku importu do FreeCAD, działa tak samo jak addExportType, obsługujący moduł pythona musi zawierać funkcję open() i/lub import().

**Returns**:

![](/images/Method.png) **closeDocument(***Nazwa dokumentu***)**

**Description**: Zamyka podany dokument

**Returns**:

![](/images/Method.png) **getDocument(***Nazwa dokumentu***)**

**Description**: Zwraca dokument lub wywołuje wyjątek, jeśli nie ma dokumentu o podanej nazwie.

**Returns**:

![](/images/Method.png) **getExportType(***string***)**

**Description**: Przywraca nazwę modułu, który może eksportować określony typ pliku.

**Returns**: string.

![](/images/Method.png) **getImportType(***string***)**

**Description**: Przywraca nazwę modułu, który może importować określony typ pliku.

**Returns**: string.

![](/images/Method.png) **listDocuments(****)**

**Description**: Zwraca słownik nazw i wskaźników obiektów wszystkich dokumentów.

**Returns**: Słownik nazw i wskaźników obiektów.

![](/images/Method.png) **newDocument(***[string], [hidden=False]***)**

**Description**: Tworzy i zwraca nowy dokument o podanej nazwie. Nazwa dokumentu musi być unikalna, co jest sprawdzane automatycznie. Jeśli nie zostanie podana nazwa, dokument będzie miał nazwę "Bez tytułu". Jeśli parametr hidden=`Prawda` zostanie przekazane, to FreeCAD w trybie GUI nie wyświetli dokumentu i nie pokaże zakładki dla dokumentu. Pozwala to na wykonywanie automatycznych operacji na tymczasowym dokumencie *(lub utworzenie dokumentu i zapisanie go)* bez zakłócania interfejsu użytkownika.

**Returns**: Nowo utworzony dokument.

![](/images/Method.png) **open(***string***)**

**Description**: Patrz: openDocument

**Returns**:

![](/images/Method.png) **openDocument(***filepath, [hidden]***)**

**Description**: Tworzy i zwraca dokument oraz wczytuje do niego plik projektu. Argument łańcuchowy musi wskazywać na istniejący plik. Jeśli plik nie istnieje lub nie można go załadować, zostanie wyrzucony wyjątek wejścia/wyjścia. W tym przypadku utworzony dokument zostanie zachowany, ale będzie pusty. Jeśli parametr hidden=`Prawda` zostanie przekazane, to FreeCAD w trybie GUI nie wyświetli dokumentu i nie pokaże zakładki dla dokumentu. Pozwala to na wykonywanie automatycznych operacji na dokumencie i zamknięcie go bez zakłócania interfejsu użytkownika.

**Returns**: Otwarty dokument FreeCAD.

![](/images/Method.png) **setActiveDocument(***Nazwa dokumentu***)**

**Description**: Ustawia aktywny dokument po jego nazwie.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_API/pl&oldid=989792>"