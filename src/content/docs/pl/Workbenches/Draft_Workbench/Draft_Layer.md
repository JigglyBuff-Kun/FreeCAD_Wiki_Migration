---
title: Rysunek Roboczy Nowa warstwa
---
|  |
| --- |
| Rysunek Roboczy: Nowa warstwa |
| Lokalizacja w menu |
| Narzędzia → Nowa warstwa |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl"), [Zarządzaj warstwami](/Draft_LayerManager/pl "Draft LayerManager/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Layer.svg) **Nowa warstwa** tworzy warstwę roboczą. Warstwa jest specjalnym rodzajem grupy z szeregiem [właściwości wizualnych](#Widok). Te właściwości i wszelkie ich zmiany są przenoszone na obiekty umieszczone wewnątrz warstwy. Same warstwy są umieszczane w innej specjalnej grupie: Draft LayerContainer.

## Użycie

1. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Draft_Layer.svg) **Nowa warstwa**.
   * Wybierz opcję **Narzędzia → ![](/images/Draft_Layer.svg) Nowa warstwa** z menu lub z menu kontekstowego [widoku drzewa](/Tree_view "Tree view") bądź [widoku 3D](/3D_view "3D view").
   * Jeśli kontener warstwy już istnieje: kliknij go prawym przyciskiem myszy w widoku drzewa i wybierz opcję **![](/images/Draft_NewLayer.svg) Dodaj nową warstwę** z menu kontekstowego.
2. Jeśli nie istnieje, najpierw tworzony jest kontener warstwy.
3. Warstwa jest tworzona i umieszczana w kontenerze warstw.
4. Opcjonalnie można zmienić [właściwości](#Właściwości) warstwy.
5. Opcjonalnie umieść obiekty w warstwie, przeciągając i upuszczając je na warstwie w [widoku drzewa](/Tree_view/pl "Tree view/pl"). Obiekty mogą być również umieszczane w warstwie poprzez edycję właściwości DANE**Grupa** warstwy.
6. Opcjonalnie [aktywuj](#Opcje_warstwy) warstwę.

## Menu podręczne

### Opcje kontenera warstw

W przypadku kontenera warstw te dodatkowe opcje są dostępne w menu kontekstowym [widoku drzewa](/Tree_view/pl "Tree view/pl"):

* **![](/images/Draft_NewLayer.svg): Dodaj nową warstwę**: dodaje nową warstwę do bieżącego dokumentu.
* **![](/images/Draft_SetStyle.svg) Ponownie przypisz właściwości wszystkich warstw**: usuwa [nadpisania](#Nadpisania) z obiektów we wszystkich warstwach poprzez ponowne przypisanie właściwości warstwy, w której się znajdują. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **![](/images/Draft_Layers.svg) Połącz duplikaty warstw**: łączy wszystkie warstwy z taką samą etykietą bazową.

:   Etykieta bazowa warstwy to jej właściwość DANE**Label** pozbawiona końcowych cyfr i spacji. Wszystkie warstwy z taką samą etykietą bazową są łączone w pojedynczą warstwę z właściwością DANE**Label** ustawioną na tą etykietę bazową.

### Opcje warstwy

W przypadku warstwy środowiska Rysunek Roboczy te dodatkowe opcje są dostępne w menu podręcznym [Widok drzewa](/Tree_view/pl "Tree view/pl"):

* **![](/images/Button_right.svg): [Aktywuj wybraną warstwę](/Draft_AutoGroup/pl "Draft AutoGroup/pl")**: aktywuje wybraną warstwę.
* **![](/images/Draft_SetStyle.svg) Ponownie przypisz właściwości warstwy**: usuwa [nadpisania](#Nadpisania) z obiektów w warstwie poprzez ponowne przypisanie właściwości warstwy. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
* **![](/images/Draft_SelectGroup.svg) [Wybierz zawartość warstwy](/Draft_SelectGroup/pl "Draft SelectGroup/pl")**: zaznacza obiekty wewnątrz wybranej warstwy.

## Zachowanie przeciągnij i upuść

[dostępne w wersji 0.21](/Release_notes_0.21/pl "Release notes 0.21/pl")

Jeśli upuścisz obiekt z [Std: Grupa](/Std_Group/pl "Std Group/pl"), lub obiekt podobny do grupy, taki jak [Architektura" Część budowli](/Arch_BuildingPart/pl "Arch BuildingPart/pl"), na warstwę w [widoku drzewa](/Tree_view/pl "Tree view/pl"), nie zostanie on usunięty z grupy i vice versa. Aby usunąć obiekt z warstwy, musi on zostać upuszczony na innej warstwie lub na węźle dokumentu. Nie ma potrzeby przytrzymywania klawisza Ctrl podczas przeciągania z lub upuszczania na warstwę.

## Nadpisania

[dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

Obiekty wewnątrz warstwy mogą mieć nadpisania. Jest tu stosowana następująca logika:

* Gdy obiekt jest umieszczany w warstwie, zawsze otrzymuje właściwości tej warstwy.
* Jeśli po tym nastąpi zmiana właściwości obiektu, będzie to traktowane jako nadpisanie.
* Jeśli po tym nastąpi taka zmiana właściwości warstwy lub obiektu w warstwie, że będą ponownie sobie odpowiadać, nie będzie już występowało nadpisanie a właściwość będzie znów zsynchronizowana.

Kontener warstw i wszystkie warstwy mają w [menu kontekstowym](#Context_menu/pl) opcję ponownego przypisania właściwości a zatem usunięcia nadpisań.

## Uwagi

* Nową warstwę można również utworzyć za pomocą polecenia [Grupowanie automatyczne](/Draft_AutoGroup/pl "Draft AutoGroup/pl") lub [Menedżera warstw](/Draft_LayerManager/pl "Draft LayerManager/pl").

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Warstwa środowiska pracy Rysunek Roboczy wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Etykieta

* DANE**Group** (`LinkList`): określa obiekty znajdujące się wewnątrz warstwy.

### Widok

Warstwa

Właściwości w tej sekcji są stosowane do obiektów umieszczonych wewnątrz warstwy. Wszelkie zmiany tych właściwości są do nich przenoszone. W przypadku dwóch właściwości, WIDOK**Kolor linii** i WIDOK**Kolor kształtu**, zachowanie to jest opcjonalne.

* WIDOK**Styl rysowania** (`Enumeration`): określa styl rysowania warstwy: `Ciągła`, `Przerywana`, `Kropkowana` lub `KreskaKropka`.
* WIDOK**Kolor linii** (`Color`): określa kolor linii warstwy.
* WIDOK**Szerokość linii** (`Float`): określa szerokość linii warstwy.
* WIDOK**Zastąp elementy potomne kolorem linii** (`Bool`): określa, czy zmiany w WIDOK**Kolorze linii** warstwy są przekazywane do obiektów wewnątrz warstwy.
* WIDOK**Zastąp elementy podrzędne kolorem kształtu** (`Bool`): określa, czy zmiany w WIDOK**Kolorze kształtu** warstwy są przekazywane do obiektów wewnątrz warstwy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* WIDOK**Wygląd kształtu** (`MaterialList`): określa wygląd kształtu warstwy. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
* WIDOK**Kolor kształtu** (`Color`): określa kolor kształtu warstwy.
* WIDOK**Przezroczystość** (`Percent`): określa przezroczystość warstwy.

Drukuj

* WIDOK**Kolor wydruku linii** (`Color`): określa kolor wydruku linii warstwy.
* WIDOK**Użyj koloru wydruku** (`Bool`): określa, czy WIDOK**Kolor wydruku linii** warstwy jest używany, gdy [TechDraw DraftView](/TechDraw_DraftView "TechDraw DraftView") jest tworzony z obiektów wewnątrz warstwy.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć warstwę środowiska Rysunek Roboczy, użyj metody `make_layer` modułu Rysunek Roboczy. Aby dodać lub usunąć obiekty z warstwy, zmień jej właściwość `Grupa`.

```
import FreeCAD as App
import Draft

doc = App.newDocument()

layer = Draft.make_layer(line_color=(1.0, 0.0, 0.0, 0.0),
                         shape_color=(1.0, 1.0, 0.0, 0.0))

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)
layer.Group = [polygon1, polygon2, polygon3]

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Layer/pl&oldid=1550579>"