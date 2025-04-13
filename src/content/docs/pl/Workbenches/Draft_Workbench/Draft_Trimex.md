---
title: Rysunek Roboczy Przytnij
---
|  |
| --- |
| Rysunek Roboczy: Przytnij |
| Lokalizacja w menu |
| Modyfikacja → Przytnij |
| Środowisko pracy |
| [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"), [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| T R |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Part: Wyciągnij](/Part_Extrude "Part Extrude") |
|  |

## Opis

Polecenie ![](/images/Draft_Trimex.svg) **Przytnij / wydłuż** [przycina lub rozszerza](#Przytnij_lub_rozszerz) wybrany obiekt. Przecięcia z krawędzią innego obiektu mogą być użyte do określenia nowych punktów końcowych. Polecenie może być również użyte do [wyciągnięcia](#Wyciągnij) ściany, w którym to przypadku tworzy obiekt [wyciągnięcia](/Part_Extrude/pl "Part Extrude/pl").

![](/images/Draft_trimex_example.jpg)

Wyżej: Przedłużony odcinek linii, następnie przycięty odcinek linii. Niżej: Powierzchnia wyciągnięta w bryłę

## Przytnij lub rozszerz

## Użycie

1. Opcjonalnie wybierz jeden obiekt. Musi to być obiekt środowiska Rysunek Roboczy [Linia](/Draft_Line/pl "Draft Line/pl"), [Linia łamana](/Draft_Wire/pl "Draft Wire/pl"), [Łuk](/Draft_Arc/pl "Draft Arc/pl") lub [Okrąg](/Draft_Circle/pl "Draft Circle/pl") *(tylko te mogą być tylko przycinane)*. Jeśli wybrany obiekt jest zamknięty, musi mieć ustawioną właściwość DANE**Make Face** na wartość `false`.
2. Istnieje kilka sposobów na wywołanie polecenia:
   * Naciśnij przycisk ![](/images/Draft_Trimex.svg) **Przytnij / Wydłuż**.
   * [Środowisko pracy Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl"): Wybierz z menu opcję **Modyfikacja → ![](/images/Draft_Trimex.svg) Przytnij / Wydłuż**.
   * [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"): Wybierz opcję **Modyfikacja → ![](/images/Draft_Trimex.svg) Przytnij / Wydłuż** z menu.
   * Użyj skrótu klawiaturowego: T, a następnie R.
3. Jeśli nie wybrałeś jeszcze obiektu: wybierz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl").
4. Otworzy się panel zadań **Przytnij / wydłuż**. Zobacz akapit [Opcje](#Opcje), aby uzyskać więcej informacji.
5. Przesuń kursor w oknie [widoku 3D](/3D_view/pl "3D view/pl") tak, aby podgląd odpowiadał żądanemu rezultatowi. W razie potrzeby użyj klawiszy modyfikatorów, jak wyjaśniono w punkcie [Opcje](#Opcje).
6. Wykonaj jedną z następujących czynności:
   * Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl")
   * Wprowadź **Odległość** lub **Kąt**. Odległość jest odległością delta. Ta opcja nie działa, jeśli używane są klawisze modyfikatorów.
   * Przesuń kursor nad krawędź należącą do innego obiektu i kliknij, gdy ta krawędź zostanie podświetlona, aby przyciąć lub wydłużyć wybrany obiekt, używając przecięcia z podświetloną krawędzią jako nowego punktu końcowego. Podczas ucinania rzut punktu, w którym krawędź tnąca jest zaznaczona, na obiekt, który ma zostać ucięty, określa wynik domyślny. Zauważ, że [przyciąganie](/Draft_Snap/pl "Draft Snap/pl") może mieć tutaj niepożądany wpływ. W niektórych przypadkach może być konieczne tymczasowe wyłączenie tej funkcjonalności.

### Opcje

Skróty klawiaturowe jedno znakowe dostępne w panelu zadań można zmienić. Zobacz stronę [Preferencji](/Draft_Preferences/pl "Draft Preferences/pl"). Skróty wymienione tutaj są skrótami domyślnymi.

* Przytrzymaj Alt aby odwrócić domyślny kierunek polecenia.
* Przytrzymaj Shift by ograniczyć operację do bieżącego segmentu [linii łamanej](/Draft_Wire/pl "Draft Wire/pl").
* Naciśnij klawisz S, aby włączyć lub wyłączyć [przyciąganie](/Draft_Snap/pl "Draft Snap/pl").

Poniżej znajduje się przykład wyjaśniający działanie klawiszy modyfikatorów. Lewa lub dolna krawędź kształtu-U linii łamanej została wysunięta. Wszystkie rodzaje [przyciągania](/Draft_Snap/pl "Draft Snap/pl") zostały wyłączone.

![](/images/Draft_Trimex_example2.png)

1. Łuk został kliknięty w pobliżu lewego dolnego rogu linii. Jest to zachowanie domyślne.
2. Klawisz Alt został przytrzymany, gdy łuk został kliknięty w pobliżu lewego dolnego rogu linii.
3. Wciśnięto klawisz Y, a po najechaniu na lewą krawędź wciśnięto klawisz Shift i kliknięto na łuk. Naciśnięcie przycisku Y jest wymagane tylko w przypadku krawędzi, które są mniej więcej równoległe do osi Y.

## Wyciągnij

## Użycie

Zobacz także strony: [Rysunek Roboczy: Przyciąganie](/Draft_Snap/pl "Draft Snap/pl") i [Rysunek Roboczy: Wiązania](/Draft_Constrain/pl "Draft Constrain/pl").

1. Pomocna może być najpierw zmiana [Płaszczyzny roboczej rysunku](/Draft_SelectPlane/pl "Draft SelectPlane/pl") tak, by nie była współliniowa z powierzchnią, którą chcesz wyciągnąć.
2. Opcjonalnie wybierz pojedynczą ścianę lub obiekt z pojedynczą ścianą.
3. Istnieje kilka sposobów na wywołanie tego polecenia:
   * Naciśnij przycisk ![](/images/Draft_Trimex.svg) Przytnij / wydłuż.
   * Wybierz z menu opcję **Modifikacja → ![](/images/Draft_Trimex.svg) Przytnij / wydłuż**.
   * Użyj skrótu klawiaturowego: T, a następnie R.
4. Jeśli nie wybrałeś jeszcze obiektu lub ściany: wybierz obiekt z pojedynczą ścianą w oknie [widoku 3D](/3D_view/pl "3D view/pl").
5. Otworzy się panel zadań **Przytnij / wydłuż**. Zobacz [Opcje](#Opcje_2), aby uzyskać więcej informacji.
6. Aby zdefiniować kierunek i odległość wyciągania, wykonaj jedną z poniższych czynności:
   * Wybierz punkt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), który nie leży na tej samej płaszczyźnie co ściana.
   * Upewnij się, że kursor znajduje się po właściwej stronie ściany w [widoku 3D](/3D_view "3D view") i wprowadź **Odległość**.

### Opcje

Wspomniane tutaj klawisze modyfikatorów mogą zostać zmienione. Zobacz stronę [Rysunek Roboczy: Preferencje](/Draft_Preferences/pl "Draft Preferences/pl").

* Przytrzymaj klawisz Shift, by uzyskać wyciągnięcie w kierunku, który nie jest równoległy do wektora normalnego ściany.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Dla narzędzia Przytnij nie ma dostępnego interfejsu programistycznego. Do wyciągania obiektów służy metoda `extrude` modułu Rysunek Roboczy.

```
extrusion = extrude(obj, vector, solid=False)

```

* `obj` to obiekt, który ma zostać wyciągnięty.
* `vector` to kierunek i odległość wyciskania.
* Jeśli `solid` ma wartość `True`, to zamiast powłoki zostanie utworzona bryła.
* `extrusion` jest zwracana wraz z utworzonym obiektem.

Przykład:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(1500, 500)
doc.recompute()

vector = App.Vector(0, 0, 300)
solid = Draft.extrude(rectangle, vector, solid=True)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Trimex/pl&oldid=1473931>"