---
title: Rysunek Techniczny Wstaw adnotację w formie dymka
---
|  |
| --- |
| Rysunek Techniczny: Wstaw adnotację w formie dymka |
| Lokalizacja w menu |
| Rysunek Techniczny → Adnotacje → Wstaw adnotację w formie dymka |
| Środowisko pracy |
| [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Wstaw adnotację](/TechDraw_Annotation/pl "TechDraw Annotation/pl") |
|  |

## Opis

Narzędzie **Wstaw adnotację w formie dymka** może dodawać do rysunku dymki z linią odniesienia.

![](/images/Techdraw_balloon.png)

## Użycie

1. Wybierz jedną z poniższych opcji:
   * Widok *(na stronie lub w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"))*.
   * Wierzchołek w widoku.
   * Krawędź w widoku.
   * Zamknięty region w widoku.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnięcie przycisku ![](/images/TechDraw_Balloon.svg) **Wstaw adnotację w formie dymka**.
   * Wybierz **Rysunek Techniczny → Adnotacje → ![](/images/TechDraw_Balloon.svg) Wstaw adnotację w formie dymka** z menu.
3. Jeśli wybrano widok lub obszar:
   1. Kursor zmienia się w ikonę dymka.
   2. Kliknij punkt na stronie, który będzie początkiem dymka.

Aby przesunąć bańkę dymka, naciśnij i przytrzymaj lewy przycisk myszy na jego środku i przeciągnij kursor myszki.

Aby zmienić właściwości dymka, kliknij go dwukrotnie na stronie lub w oknie [widoku Drzewa](/Tree_view/pl "Tree view/pl"). Spowoduje to otwarcie panelu zadań Dymek.

**Uwaga:** Położenie dymka odnosi się do jego widoku źródłowego i wykorzystuje ten sam współczynnik skali.

## Używanie separatorów

W przypadku korzystania z kształtu prostokąta, separatory można dodawać za pomocą znaku "|" w tekście.
Na przykład "AAA|TEST|111" daje:

![](/images/Balloon_separator.png)

## Właściwości

### Dane

* DANE**Tekst**: Tekst do wyświetlenia.
* DANE**Widok źródłowy**: Widok źródłowy balonu.
* DANE**Odniesienie położenia X**: Pozycja x początku dymka względem widoku.
* DANE**Odniesienie położenia Y**: Pozycja y początku dymka względem widoku.
* DANE**Typ zakończenia**: Symbol końca linii balonu. Opcje: ![](/images/Arrowfilled.svg) Wypełniona strzałka, ![](/images/Arrowopen.svg) Otwarta strzałka, ![](/images/Arrowtick.svg) Grot, ![](/images/Arrowdot.svg) Kropka, ![](/images/Arrowopendot.svg) Otwarte koło, ![](/images/Arrowfork.svg) Widelec, ![](/images/Arrowpyramid.svg) Wypełniony trójkąt, ![](/images/Arrownone.svg) Brak.
* DANE**Skala typu zakończenia**: Współczynnik skali dla **Typu zakończenia**.
* DANE**Kształt dymka**: Kształt bańki dymka. Opcje: ![](/images/Circular.svg) Okrągły, Żaden, ![](/images/Triangle.svg) Trójkąt, ![](/images/Inspection.svg) Inspekcja, ![](/images/Hexagon.svg) Sześciokąt, ![](/images/TechDraw_Square.svg) Kwadrat, ![](/images/Rectangle.svg) Prostokąt.
* DANE**Skala kształtu**: Współczynnik skali dla **Kształtu**.
* DANE**Zawijanie tekstu**: Długość zawijania tekstu; -1 oznacza, że tekst nigdy nie zostanie zawinięty, a wynikiem będzie w każdym przypadku pojedyncza linia.
* DANE**Długość załamania**: Odległość od **kształtu** do załamania linii prowadzącej.
* DANE**X**: Poziome położenie dymku względem widoku.
* DANE**Y**: Pionowe położenie bańki balonu względem widoku.

### Widok

* WIDOK**Kolor**: Kolor tekstu w dymku.
* WIDOK**Czcionka**: Nazwa czcionki używanej w dymku.
* WIDOK**Rozmiar czcionki**: Rozmiar tekstu w mm.
* WIDOK**Linia widoczna**: Czy linia dymka jest widoczna.
* WIDOK**Szerokość linii**: Szerokość linii dymka.

## Tworzenie skryptów

Zobacz również stronę: [Dokumentacja API generowana automatycznie](https://freecad.github.io/SourceDoc/) oraz [Podstawy pisania skryptów dla FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

Narzędzie **Wstaw adnotację w formie dymka** może być używane w [makrodefinicjach](/Macros/pl "Macros/pl") i z konsoli [Python](/Python/pl "Python/pl") za pomocą następujących funkcji:

```
bal1 = FreeCAD.ActiveDocument.addObject('TechDraw::DrawViewBalloon','Balloon')
rc = page.addView(bal1)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_Balloon/pl&oldid=1486408>"