---
title: Rysunek Roboczy Zaokrąglenie
---
|  |
| --- |
| Rysunek Roboczy: Zaokrąglenie |
| Lokalizacja w menu |
| Kreślenie → Zaokrąglenie Kreślenie 2D → Zaokrąglenie |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| F I |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Linia](/Draft_Line/pl "Draft Line/pl"), [Polilinia](/Draft_Wire/pl "Draft Wire/pl") |
|  |

## Opis

Polecenie ![](/images/Draft_Fillet.svg) **Zaokrąglenie** tworzy zaokrąglenie, zaokrąglony narożnik lub sfazowanie, prostą krawędź między dwiema wskazanymi krawędziami.

W wersja 0.21 i poniżej to polecenie działa poprawnie tylko jeśli obie wskazane krawędzie są proste.

W wersja 1.0 i poniżej jeśli wskazane obiekty mają wiele krawędzi, użyta zostanie ich pierwsza krawędź. Może to nie być krawędź, która została wskazana w [widoku 3D](/index.php?title=3D_view/po&action=edit&redlink=1 "3D view/po (page does not exist)").

![](/images/Draft_Fillet_example.png)

Kilka zaokrągleń i sfazowań utworzonych między dwiema liniami

## Użycie

1. Wybierz dwie krawędzie, które spotykają się w jednym punkcie.
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Draft_Fillet.svg) **Zaokrąglenie**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Kreślenie → ![](/images/Draft_Fillet.svg) Zaokrąglenie**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Kreślenie 2D → ![](/images/Draft_Fillet.svg) Zaokrąglenie** z menu.
   * Użyj skrótu klawiaturowego: F, a następnie I.
3. Wpisz **Promień zaokrąglenia**. Należy pamiętać, że polecenie nie powiedzie się, jeśli promień jest zbyt duży dla wybranych krawędzi.
4. Opcjonalnie zaznacz opcję **Usuń oryginalne obiekty**.
5. Opcjonalnie zaznacz opcję **Utwórz sfazowanie**.
6. Jeśli wybrano jedną z dwóch poprzednich opcji: Kliknij w polu wprowadzania **Promień zaokrąglenia**.
7. Naciśnij Enter.

## Opcje

* Naciśnij przycisk Esc lub przycisk Zamknij aby przerwać wykonywanie polecenia.

## Uwagi

* Zaokrąglenie nie może być edytowane, ani nie jest powiązane z krawędziami, które zostały użyte do jego utworzenia.
* [Polilinia](/Draft_Wire/pl "Draft Wire/pl"), która ma co najmniej trzy punkty, może zostać zaokrąglona lub sfazowana poprzez zmianę odpowiednio właściwości DANE**Promień** lub DANE**Rozmiar sfazowania**. Ponieważ [linia](/Draft_Line/pl "Draft Line/pl") i [polilinia](/Draft_Wire/pl "Draft Wire/pl") mogą być łączone za pomocą komendy [polilinia](/Draft_Wire/pl "Draft Wire/pl"), komendy [Połącz](/Draft_Join/pl "Draft Join/pl") lub komendy [Ulepsz kształt](/Draft_Upgrade/pl "Draft Upgrade/pl"), zapewnia to alternatywną metodę tworzenia zaokrągleń i sfazowań.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Zaokrąglenie wywodzi się z obiektu [Część: Part2DObject](/Part_Part2DObject/pl "Part Part2DObject/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Rysunek Roboczy

* DANE**Koniec** (`VectorDistance`): *(tylko do odczytu)* określa punkt końcowy zaokrąglenia.
* DANE**Promień zaokrąglenia** (`Length`): *(tylko do odczytu)* promień, do utworzenia zaokrąglenie.
* DANE**Długość** (`Length`): *(tylko do odczytu)* określa całkowitą długość zaokrąglenia.
* DANE**Start** (`VectorDistance`): *(tylko do odczytu)* określa punkt początkowy zaokrąglenia.

### Widok

Rysunek Roboczy

* WIDOK**Rozmiar strzałki** (`Length`): określa rozmiar symbolu wyświetlanego na końcu zaokrąglenia.
* WIDOK**Styl strzałki** (`Enumeration`): określa typ symbolu wyświetlanego na końcu zaokrąglenia, którym może być `Kropka`, `Okrąg`, `Strzałka`, `Grot` lub `Grot-2`.
* WIDOK**Zakończenie strzałki** (`Bool`): określa, czy na końcu zaokrąglenia ma być wyświetlany symbol, aby można go było użyć jako linii adnotacji.
* WIDOK**Wzór** (`Enumeration`): nie używane.
* WIDOK**Wzór Size** (`Float`): nie używane.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Aby utworzyć zaokrąglenie, użyj metody `make_fillet` modułu Rysunek Roboczy.

```
fillet = make_fillet([edge1, edge2], radius=100, chamfer=False, delete=False)

```

* Tworzy obiekt `Fillet` pomiędzy krawędziami `edge1` i `edge2`, używając `radius` dla krzywizny.
* Jeśli `chamfer` ma wartość `True`, utworzy prostą krawędź zamiast zaokrąglonej.
* Jeśli `delete` jest `True`, usunie podane `edge1` i `edge2` i pozostawi tylko nowy obiekt.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1000, 1000, 0)
p3 = App.Vector(2000, 0, 0)

edge1 = Draft.make_line(p1, p2)
edge2 = Draft.make_line(p2, p3)

doc.recompute()

fillet = Draft.make_fillet([edge1, edge2], radius=500)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Fillet/pl&oldid=1510923>"