---
title: Kreślenie Widok
---
|  |
| --- |
| Kreślenie: Widok |
| Lokalizacja w menu |
| Kreślenie → Wstaw widok w rysunku |
| Środowisko pracy |
| [Kreślenie](/Drawing_Workbench/pl "Drawing Workbench/pl") |
| Domyślny skrót |
| brak |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Rysunek w formacie poziomym A3](/Drawing_Landscape_A3/pl "Drawing Landscape A3/pl") |
|  |

To narzędzie tworzy nowy widok wybranego obiektu w aktywnym arkuszu rysunkowym.

![Arkusz rysunkowy z trzema widokami: z przodu, z góry oraz izometryczny.](/images/Drawing_Views.png)

### Użycie

Zaznacz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub w drzewie projektu, a następnie kliknij narzędzie Widok rysunku. Domyślnie zostanie umieszczony widok z góry przeskalowany w skali 1:1 *(skala rzeczywista)* w lewym górnym rogu strony. Może on nie być widoczny, jeśli jest zbyt mały lub zbyt duży dla strony.

Obiekt **Widok** jest dodawany do obiektu **Strona** w drzewie projektu. Dla kolejnych widoków do nazwy zostanie dołączony trzycyfrowy numer. Kliknij na strzałkę przed obiektem Strona, aby go rozwinąć i wyświetlić widoki, które zawiera.

Jeśli tylko obiekt jest wybrany w drzewie projektu, widok jest dodawany do pierwszej strony projektu. Jeśli masz wiele stron w projekcie zaznacz obiekt oraz stronę, do której ma zostać dodany. Następnie kliknij na ikonę, aby dodać widok do wybranej strony.

### Modyfikacja istniejącego widoku

Rozwiń obiekt Strona w drzewie projektu i wybierz widok. Jego parametry można edytować w zakładce *Dane* Widoku właściwości.

![](/images/Drawing_View_Properties.png)

![](/images/Drawing_View_Iso.png)

Widok izometryczny z liniami wygładzonymi widoczność wyłączona

![](/images/Drawing_View_Iso_SmoothLines.png)

IWidok izometryczny z liniami wygładzonymi widoczność włączona

Podstawowe

* DANE**Etykieta**: zmienia tekst etykiety widoku w drzewie projektu. Możesz również kliknąć na widok w drzewie i kliknąć prawym przyciskiem myszy → Zmień nazwę, lub nacisnąć F2.

Widok rysunku

* DANE**Obrót**: obraca widok. Na przykład, widok izometryczny wymaga obrotu o 60 stopni *(patrz również parametr Kierunek poniżej)*.
* DANE**Scala**: ustawia skalę widoku.
* DANE**X**: ustawia poziomą pozycję widoku na stronie w milimetrach.
* DANE**Y**: ustawia pionową pozycję widoku na stronie w milimetrach. Należy pamiętać, że współrzędna *(0,0)* znajduje się w lewym górnym rogu strony, więc im wyższa liczba, tym niżej na stronie będzie znajdował się widok.

Widok kształtu

* DANE**Kierunek**: zmienia kierunek widoku. Jest on ustawiany przez wartości xyz, które definiują wektor normalny dla stron. Widok górny będzie miał wartość *(0,0,1)*, a izometryczny *(1,1,1)*. Wartości mogą być ujemne.
* DANE**Pokaż niewidoczne linie**: włącza lub wyłącza widoczność niewidocznych linii poprzez wybranie wartości `true` lub `false`.
* DANE**Pokaż linie gładkie**: włącza lub wyłącza widoczność linii gładkich wybierając `true` lub `false`. Gładkie linie są również nazywane krawędziami styczności. Krawędzie te wskazują zmiany powierzchni pomiędzy powierzchniami stycznymi.

### Inne

Jeśli szukasz przełączania persektywnego i ortogonalnego w widoku 3D, sprawdź strony [Std: Widok perspektywy](/Std_PerspectiveCamera/pl "Std PerspectiveCamera/pl") i [Std: Widok ortogonalny](/Std_OrthographicCamera/pl "Std OrthographicCamera/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/pl&oldid=1461813>"