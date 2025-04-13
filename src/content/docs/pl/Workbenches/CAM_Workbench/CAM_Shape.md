---
title: CAM Z kształtu
---
:::caution
Aby używać tej funkcji eksperymentalnej, należywłączyć funkcje eksperymentalne
:::
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| CAM: Z Kształtu |
| Lokalizacja w menu |
| CAM → Polecenia dodatkowe → Z Kształtu |
| Środowisko pracy |
| [CAM](/CAM_Workbench/pl "CAM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/CAM_Shape.svg) Z Kształtu nie pasuje do obecnego toku pracy w środowisku CAM. Z tego powodu zostało przeniesione do funkcji eksperymentalnych.

To narzędzie generuje ścieżki narzędzi z krawędzi obiektów CAM.

Ścieżki narzędzi są kompensowane dla promienia narzędzia. Nie ma kontrolera narzędzia powiązanego z wygenerowanymi ścieżkami narzędzi.

![](/images/FromShape_image_0.png)

## Użycie

Wszystkie krawędzie związane z wyborem modelu 3D zostaną uwzględnione.

1. Wybierz krawędzie, zaznaczając cały obiekt z poziomu [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl"), albo wybierając poszczególne krawędzie lub ściany w [widoku 3D](/3D_view/pl "3D view/pl").
2. Naciśnij przycisk ![](/images/CAM_Shape.svg) Z Kształtu.

Wyjściowa ścieżka narzędzia jest dodawana poza zadaniem CAM.

## Opcje

Wszystkie opcje są dostępne tylko z widoku FromShape.Property.Data i zawierają:

* **Retraction Axis**
* **Retraction Height**
* **Resume Height**
* **Feed Rate**
* **Feed Rate Vertical**

## Właściwości

### Dane

Pusto

### Widok

Pusto

## Tworzenie skryptów

*Zobacz również:* [FreeCAD podstawy tworzenia skryptów](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl").

#### DocString Info

Zwraca obiekt ścieżki z listy kształtów.

* shapes: lista wejściowa kształtów.

* start (Vector()): pozycja początku posuwu i wskazówka wejścia ścieżki.

* return\_end (False): jeśli True, zwraca krotkę (path, endPosition).

* arc\_plane(1): 0=None, 1=Auto, 2=XY, 3=ZX, 4=YZ, 5=Variable. Płaszczyzna rysowania łuku, odpowiadająca G17, G18 i G19.
  + Jeśli ustawienie nie jest 'None', wyjściowe linie zostaną przekształcone, aby dopasować się do wybranej płaszczyzny, a odpowiedni G-code zostanie wstawiony.
  + 'Auto' oznacza, że płaszczyzna jest określana przez pierwszą napotkaną płaszczyznę łuku. Jeśli znaleziona płaszczyzna nie odpowiada żadnej płaszczyźnie G-code, używana jest płaszczyzna XY.
  + 'Variable' oznacza, że płaszczyzna łuku może być zmieniana podczas operacji, aby dopasować się do napotkanego łuku.

* sort\_mode(1): 0=None, 1=2D5, 2=3D, 3=Greedy. Tryb sortowania linii, mający na celu optymalizację pokonywanej odległości.
  + '2D5' dzieli kształty na linie i grupuje je według płaszczyzny. Pozycja "start" wybiera pierwszą płaszczyznę do rozpoczęcia. Algorytm sortuje w obrębie płaszczyzny, a następnie przechodzi do najbliższej płaszczyzny.
  + '3D' nie zakłada płaskości. Sortowanie odbywa się w przestrzeni trójwymiarowej.
  + 'Greedy' działa jak '2D5', ale stara się minimalizować pokonywaną odległość, szukając najbliższej ścieżki poniżej bieżącej warstwy frezowania. Ścieżka w niższej warstwie jest wybierana tylko wtedy, gdy odległość przemieszczania mieści się w wartości podanej w 'threshold' (próg).

* min\_dist(0.0): minimalna odległość dla wygenerowanych nowych linii. Linie mogą być uszkodzone jeśli algorytm widzi dopasowania. Ustaw na zero aby wyłączyć przerywanie linii.

* abscissa(3.0): Kontroluje próbkowanie wierzchołków na liniach dla wyszukiwania najbliższego punktu. Próbkowanie odbywa się przy pomocy algorytmu OCC GCPnts\_UniformAbscissa.

* nearest\_k(3): Najbliższe k wierzchołków próbkowania jest rozważanych podczas sortowania.

* orientation(0): 0=Normal, 1=Reversed. Wymuszenie orientacji pętli:
  + 'Normal' oznacza, że patrząc w kierunku przeciwnym do osi dodatniej, zewnętrzne linie są przeciwnie do ruchu wskazówek zegara (CCW), a wewnętrzne zgodnie z ruchem wskazówek zegara (CW).
  + 'Reversed' oznacza odwrotną orientację.

* direction(0): 0=None,1=XPositive,2=XNegative,3=YPositive,4=YNegative,5=ZPositive,6=ZNegative. Wymuszenie kierunku otwartej ścieżki.

* threshold(0.0): Jeśli punkty końcowe dwóch linii są oddalone w tym zakresie odległości, są traktowane jako połączone. Możesz chcieć to ustawić do średnicy narzędzia aby utrzymać narzędzie na dole.

* retract\_axis(2): 0=X,1=Y,2=Z. Oś wycofywania narzędzia.

* retraction(0.0): Bezwzględna współrzędna wycofywania narzędzia wzdłuż osi wycofywania.

* resume\_height(0.0): Po powrocie z ostatniego wycofania narzędzia, to daje wysokość pauzy względną do wartości Z następnego ruchu.

* segmentation(0.0): Przerwij długie krzywe na segmenty tej długości. Jednym z zastosowań jest autopoziomowanie PCB, tak że można wstawić więcej punktów korekcji.

* feedrate(0.0): Szybkość posuwu ruchu normalnego.

* feedrate\_v(0.0): Szybkość posuwu ruchu tylko pionowego (kroku w dół).

* verbose(true): Jeśli true, każdy G-code z ruchem będzie zawierał pełne współrzędne i szybkość posuwu.

* abs\_center(false): Używaj trybu bezwzględnego środka łuku (G90.1).

* preamble(true): Emituj preambuły.

* deflection(0.01): Ugięcie dla dyskretyzacji krzywej innej niż kołowa. Jest też używane do dyskretyzacji okręgów gdy kształt jest rozbijany ('Explode') do operacji na liniach

Przykład:

```
shapes = [Box.Shape]
Path.fromShapes(shapes, start=Vector(), return_end=False, arc_plane=1, sort_mode=1, min_dist=0.0, abscissa=3.0, nearest_k=3, orientation=0, direction=0, threshold=0.0, retract_axis=2, retraction=0.0, resume_height=0.0, segmentation=0.0, feedrate=0.0, feedrate_v=0.0, verbose=True, abs_center=False, preamble=True, deflection=0.01)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Shape/pl&oldid=1482006>"