---
title: Std Dokument tekstowy
---
|  |
| --- |
| Std: Dodaj dokument tekstowy |
| Lokalizacja w menu |
| Przybory → Dodaj dokument tekstowy |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl"), [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl") |
|  |

## Opis

Polecenie **Dodaj dokument testowy** tworzy obiekt zdolny do przechowywania dowolnego tekstu. Element ten może być użyty do zapisania ogólnych informacji lub specyfikacji modelu.

## Użycie

1. Wybierz z menu opcję **Przybory → Dodaj dokument tekstowy**.
2. Kliknij dwukrotnie nowo utworzony obiekt w [widoku drzewa](/Tree_view/pl "Tree view/pl"), aby otworzyć zakładkę, w której będziesz mógł napisać tekst.
3. Dodaj tekst.
4. Zamknij zakładkę i zapisz plik, gdy zostaniesz o to poproszony.

## Właściwości

### Widok

Edytor

* WIDOK**Nazwa czcionki** (`Font`): nazwa czcionki, na przykład, `Ubuntu Mono`.
* WIDOK**Rozmiar czcionki** (`Float`): rozmiar czcionki w punktach, na przykład, `11`.
* WIDOK**Tylko do odczytu** (`Bool`): domyślnie ustawia się na wartość `FAŁSZ`. Jeśli ustawimy wartość `PRAWDA`, tekst nie może być edytowany.
* WIDOK**Podświetlenie składni** (`Enumeration`): domyślnie ustawiona jest wartość `Brak`. Jeśli ustawimy wartość na `Python`, tekst będzie podświetlany jak w [konsoli Python](/Python_console/pl "Python console/pl").

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt `App::TextDocument` jest tworzony za pomocą metody `addObject()` dokumentu. Gdy obiekt TextDocument istnieje, jego informacje tekstowe są przechowywane w jego atrybucie `Text`. Atrybut ten może być użyty w innych obiektach, na przykład jako ciąg znaków dla funkcji ![](/images/Draft_ShapeString.svg) [Kształt z tekstu](/Draft_ShapeString/pl "Draft ShapeString/pl").

```
import FreeCAD as App
import Draft

doc = App.newDocument()
obj = doc.addObject("App::TextDocument", "Text_document")
obj.Text = "textual information"
doc.recompute()

obj2 = Draft.makeShapeString(obj.Text, "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 10)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TextDocument/pl&oldid=1468368>"