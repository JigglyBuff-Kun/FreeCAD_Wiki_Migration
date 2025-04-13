---
title: Skrypty dla środowiska Rysunek Roboczy
---
:::caution
(listopad 2018 r.)Informacje te mogą być niekompletne i nieaktualne. Najnowsze API - patrzdokumentacja API generowana automatycznie.
:::

Funkcje te są częścią Środowiska pracy [Draft](/Draft_Workbench "Draft Workbench") i mogą być używane w [makrodefinicjach](/Macros "Macros") i z konsoli [Python](/Python "Python") po zaimportowaniu modułu `Draft`.

Przykład:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png) **cut(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Zwraca wycięty obiekt wykonany z różnicy dwóch danych obiektów. Oryginalne obiekty zostają ukryte.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **extrude(***FreeCAD.Object, Vector***)**

**Description**: Wyciągnie dany obiekt w kierunku podanym przez wektor. Oryginalny obiekt zostaje ukryty.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **formatObject(***FreeCAD.Object, [FreeCAD.Object]***)**

**Description**: Funkcja ta stosuje do danego obiektu docelowego bieżące właściwości ustawione na pasku narzędzi szkicu (kolor linii i szerokość linii) lub kopiuje właściwości drugiego obiektu, jeśli jest podany. Umieszcza również obiekt w grupie konstrukcyjnej, jeśli zostanie naciśnięty przycisk konstrukcyjny.

**Returns**: Nic

![](/images/Method.png) **fuse(***FreeCAD.Object, FreeCAD.Object***)**

**Description**: Zwraca obiekt wykonany ze złączenia 2 podanych obiektów. Jeśli obiekty są współpłaszczyznowe, używany jest specjalny ścieżka robocza, w przeciwnym razie obiektem końcowym jest standardowy Part fuse.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **getDraftPath(***[string]***)**

**Description**: Zwraca ścieżkę dostępu katalogu użytkownika lub systemu, z którego uruchamiany jest moduł Draft. Jeżeli podano podścieżkę lub nazwę pliku, zwracana jest pełna ścieżka do podścieżki wewnątrz modułu Draft.

**Returns**: Ścieżka dostępu do pliku.

![](/images/Method.png) **getGroupContents(***list***)**

**Description**: Skanuje cyklicznie podaną listę grup. Jeśli grupy zostały napotkane, ich zawartość jest dołączana do listy.

**Returns**: Lista obiektów *FreeCAD Objects*.

![](/images/Method.png) **getRealName(***string***)**

**Description**: Odcina numery końcowe z nazwy obiektu.

**Returns**: Nazwa *(skrócona)* obiektu.

![](/images/Method.png) **getSelection(****)**

**Description**: Zwraca bieżący wybór z FreeCAD.

**Returns**: Bieżący wybór z FreeCAD.

![](/images/Method.png) **makeCircle(***radius, [placement], [facemode], [startangle], [endangle]***)**

**Description**: Tworzy obiekt okręgu o zadanym promieniu. Jeśli podano położenie, to jest ono używane. Jeśli tryb ściany *(Facemode)* to False, okrąg jest pokazany jako szkielet druciany, w przeciwnym razie jako ściana. Jeśli podano kąt początkowy i końcowy *(w stopniach)*, są one używane i obiekt pojawia się jako łuk.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **makeDimension(***Vector, Vector, [Vector] or FreeCAD.Object, int, int, [Vector]***)**

**Description**: Tworzy obiekt wymiarowy mierzący odległość pomiędzy pierwszym i drugim wektorem, z oznaczeniem linii wymiarowej przez trzeci wektor, jeśli jest dostępny. Zostanie użyta aktualna szerokość i kolor linii z paska narzędzi Draft. Zamiast 2 wektorów, można również przekazać obiekt FreeCAD i dwie liczby całkowite *(i opcjonalnie wektor, przez który musi przejść linia wymiarowa)*. W takim przypadku wymiar będzie kojarzony z obiektem i będzie mierzył dwa jego wierzchołki, wskazane przez dwa podane numery indeksów.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **makeLine(***Vector, Vector***)**

**Description**: Tworzy linię pomiędzy dwoma danymi wektorami. Zostanie użyta aktualna szerokość i kolor linii z paska narzędzi Draft.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **makeRectangle(***length, width, [placement], [facemode]***)**

**Description**: Tworzy obiekt prostokąta o długości w kierunku X i wysokości w kierunku Y. Jeśli podano położenie, jest ono używane. Jeśli tryb Facemode to False, prostokąt jest pokazywany jako szkielet, w przeciwnym razie jako ściana. Zostanie użyta aktualna szerokość i kolor linii z paska narzędzi Draft.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **makeText(***string or list, [Vector], [screenmode]***)**

**Description**: Tworzy obiekt tekstowy, w danym punkcie, jeśli podano wektor, zawierający ciąg znaków lub ciągi znaków podane w liście, jeden ciąg na linię. Używany jest aktualny kolor z paska narzędzi Draft oraz wysokość tekstu i czcionka określona w preferencjach. Jeśli tryb ekranu *(screenmode)* to True, tekst zawsze jest zwrócony w kierunku widoku, w przeciwnym razie leży na płaszczyźnie XY.

**Returns**: Nowo utworzony obiekt.

![](/images/Method.png) **makeWire(***list or Part.Wire, [closed], [placement], [facemode]***)**

**Description**: Tworzy obiekt DWire z podanej listy wektorów lub z podanej ścieżki. Jeśli parametr zamknięty *(closed)* to True lub jeśli pierwszy i ostatni punkt są w tym samym położeniu, ścieżka jest zamykana. Jeśli tryb facemode to True *(i ścieżka jest zamknięta)*, ścieżka zostanie wyświetlana jako wypełniona. Zostanie użyta aktualna szerokość i kolor linii z paska narzędzi Draft.

**Returns**: Nowy obiekt Draft DWire *(nie mylić z Part Wire)*.

![](/images/Method.png) **move(***FreeCAD.Object or list, Vector, [copymode]***)**

**Description**: Przesuwa dany obiekt lub obiekty znajdujące się na liście, w kierunku i na odległość wskazaną przez dany wektor. Jeśli kopymode to True, to aktualne obiekty nie są przesuwane, lecz tworzone są ich kopie.

**Returns**: Obiekt(y) *(lub ich kopie, jeżeli parametr copymode to True)*.

![](/images/Method.png) **precision(****)**

**Description**: Zwraca wartość dokładności z ustawień użytkownika Draft.

**Returns**: Liczba całkowita.

![](/images/Method.png) **rotate(***FreeCAD.Object or list, angle, [center], [axis] ,[copymode]***)**

**Description**: Obraca dany obiekt lub obiekty znajdujące się na danej liście o zadany kąt wokół zadanego punktu środkowego, jeśli podano, z użyciem osi obrotu. Jeśli oś jest pominięta, obrót będzie się odbywał wokół pionowej osi Z. Jeśli parametr copymode to True, aktualne obiekty nie są przesuwane, lecz tworzone są ich kopie.

**Returns**: Obiekty (lub ich kopie).

![](/images/Method.png) **scale(***FreeCAD.Object or list, vector, [center], [copymode]***)**

**Description**: Skaluje dany obiekt lub obiekty znajdujące się na podanej liście za pomocą współczynników skali zdefiniowanych przez dany wektor *(w kierunkach X, Y i Z)* wokół podanego punktu środka, jeśli jest to możliwe. Jeśli tryb Copymode to True, rzeczywiste obiekty nie są przenoszone, ale zamiast tego tworzone są ich kopie.

**Returns**: Obiekty (lub ich kopie).

![](/images/Method.png) **select(***FreeCAD.Object***)**

**Description**: Odznacza wszystko i zaznacza tylko przekazywany obiekt.

**Returns**: Nic.

![](/images/Method.png) **shapify(***FreeCAD.Object***)**

**Description**: Przekształca obiekt o kształcie parametrycznym w nieparametryczny.

**Returns**: Nowy obiekt.

![](/images/Method.png) **draftify(***FreeCAD.Object or list***)**

**Description**: Zamienia dany obiekt lub każdy obiekt z danej listy w parametryczne ścieżki Draft

**Returns**: Nic.

![](/images/Method.png) **getSVG(***FreeCAD.Object, [linemodifier], [textmodifier], [(u,v)]***)**

**Description**: Tworzy reprezentację SVG danego obiektu. Atrybut linemodifier to współczynnik skali *(w procentach)* dla szerokości linii i modyfikator tekstu dla rozmiaru tekstu. Możesz także opcjonalnie podać zestaw wektorów w celu zdefiniowania płaszczyzny rzutowania, w przeciwnym razie geometria zostanie rzutowana na płaszczyznę XY.

**Returns**: Łańcuch zawierający reprezentację SVG danego obiektu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/pl&oldid=1055822>"