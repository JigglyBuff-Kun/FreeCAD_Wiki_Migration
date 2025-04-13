---
title: Std Nowy
---
|  |
| --- |
| Std New |
| Menu location |
| Plik → Nowy |
| Workbenches |
| Wszystkie |
| Default shortcut |
| Ctrl+N |
| Introduced in version |
| - |
| See also |
| [Otwórz](/Std_Open/pl "Std Open/pl"), [Importuj](/Std_Import/pl "Std Import/pl") |
|  |

## Opis

Polecenie **Std Nowy** tworzy nowy pusty dokument i ustawia go jako dokument aktywny.

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Std_New.svg) Nowy.
   * Wybierz z menu opcję **Plik → ![](/images/Std_New.svg) Nowy**.
   * Użyj skrótu klawiaturowego: Ctrl+N.

## Ustawienia

Zapoznaj się z informacjami na stronie: [Edytor preferencji](/Preferences_Editor/pl "Preferences Editor/pl").

* Domyślnie FreeCAD uruchamia się bez nowego dokumentu. Sprawdź opcję **Edycja → Preferencje ... → Ogólne → Dokument → Utwórz nowy dokument w trakcie uruchamiania**, aby zmienić to zachowanie.
* Niektóre właściwości dokumentu: nazwa autora, nazwa firmy i informacje o licencji, mogą być wstępnie ustawione: **Edycja → Preferencje ... → Ogólne → Dokument → Prawa autorskie i licencja**.

## Właściwości

Zobacz również: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Większość właściwości można również zmienić w oknie dialogowym polecenia [Informacja o projekcie](/Std_ProjectInfo/pl "Std ProjectInfo/pl").

### Dane

Baza

* DANE**Komentarz** (`String`): Wszelkie uwagi, które mogą mieć zastosowanie.
* DANE**Firma** (`String`): Nazwa firmy. *Możliwość wstępnego ustawienia*.
* DANE**Utworzony przez** (`String`): Imię i nazwisko autora. *Możliwość wstępnego ustawienia*.
* DANE**Data utworzenia** (`String`): Automatyczny datownik. *(tylko do odczytu)*
* DANE**Nazwa pliku** (`String`): Pełna ścieżka dostępu do pliku. Jeżeli dokument nie został zapisany, wartość jest pusta *(tylko do odczytu)*.
* DANE**Id** (`String`): Jeszcze nie wdrożono.
* DANE**Etykieta** (`String`): Nazwa, która będzie wyświetlana w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Zastąpiona nazwą dokumentu po ponownym otwarciu.
* DANE**Ostatnio zmodyfikowany przez** (`String`): Imię i nazwisko autora. *Możliwość wstępnego ustawienia*.
* DANE**Data ostatniej modyfikacji** (`String`): Automatyczny datownik. *(tylko do odczytu)*
* DANE**Licencja** (`String`): Rodzaj licencji projektu. *Możliwość wstępnego ustawienia*.
* DANE**URL licencji** (`String`): Adres URL licencji. *Możliwość wstępnego ustawienia*.
* DANE (Ukryte)**Materiał** (`Map`): Mapa z właściwościami materiału.
* DANE (Hidden)**Meta** (`Map`): Mapa z dodatkowymi informacjami meta.
* DANE**Pokaż ukryte** (`Bool`): Jeśli wartość ta wynosi `Prawda`, elementy, które zostały ukryte w [Widoku drzewa](/Tree_view/pl "Tree view/pl") i tak zostaną wyświetlone. Ukrywanie elementów w drzewie może być przydatne podczas pracy na większych modelach.
* DANE**Czubek** (`Link`): Jeszcze nie zaimplementowane.
* DANE**Nazwa czubka** (`String`): Jeszcze nie zaimplementowane.
* DANE**Katalog przejściowy** (`String`): Katalog przejściowy używany do odzyskiwania danych *(tylko do odczytu)*.
* DANE (Hidden)**Uid** (`UUID`): UUID dokumentu (tylko do odczytu).
* DANE**UkładJednostek** (`Enumeration`): System jednostek dokumentu. Wartość początkowa zależy od [Domyślny układ jednostek](/Preferences_Editor/pl#Ogólne "Preferences Editor/pl"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć nowy dokument, należy użyć metody `newDocument([nazwa], [hidden=False])` aplikacji FreeCAD. Nazwa dokumentu musi być unikalna, co jest sprawdzane automatycznie. Jeśli nie zostanie podana żadna nazwa, dokument zostanie nazwany "Bez tytułu". Jeśli użyto metody `hidden=True`, nowy dokument nie będzie wyświetlany w GUI i nie pojawi się dla niego żadna zakładka.

```
import FreeCAD
from pathlib import Path

# The folder and filename we will use:
fld = 'D:/testfiles/'
fnm = fld + 'test.FCStd'

# Make sure fld exists:
Path(fld).mkdir(parents=True, exist_ok=True)

doc = FreeCAD.newDocument()
doc.saveAs(fnm)

FreeCAD.closeDocument(doc.Name)

doc = FreeCAD.open(fnm)
doc.save()

FreeCAD.closeDocument(doc.Name)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_New/pl&oldid=1462165>"