---
title: Część Układ współrzędnych
---
|  |
| --- |
| Część: Układ współrzędnych |
| Lokalizacja w menu |
| *brak* |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl "Part DatumPlane/pl"), [Część: Linia odniesienia](/Part_DatumLine/pl "Part DatumLine/pl"), [Część: Punkt odniesienia](/Part_DatumPoint/pl "Part DatumPoint/pl") |
|  |

## Opis

Polecenie **Część: Układ współrzędnych** tworzy obiekt układu współrzędnych, który może być dołączony do innych obiektów. Układ współrzędnych jest jednym z kilku [obiektów odniesienia](/Std_Base/pl#Utwórz_geometrie_odniesienia "Std Base/pl"). Obiekt odniesienia jest zwykle używany do dołączania do niego wielu innych obiektów. Jeśli położenie lub orientacja obiektu odniesienia ulegnie zmianie, wszystkie obiekty do niego dołączone za nim podążą.

Obiekt odniesienia może też stanowić geometryczne odniesienie dla cechy lub operacji. W zależności od jego typu, może być np. użyty jako wektor kierunku, oś obrotu lub płaszczyzna odbicia lustrzanego.

## Użycie

1. Opcjonalnie aktywuj właściwy kontener, np. ![](/images/PartDesign_Body.svg) [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") lub ![](/images/Assembly_CreateAssembly.svg) [Złożenie](/Assembly_CreateAssembly/pl "Assembly CreateAssembly/pl"). Jeśli aktywnych jest wiele kontenerów, obiekt odniesienia zostanie dodany do aktywnego kontenera, który został utworzony jako pierwszy.
2. Opcjonalnie wybierz geometrię, do której obiekt odniesienia powinien być dołączony.
3. Wciśnij przycisk ![](/images/Part_CoordinateSystem.svg) Utwórz układ współrzędnych.
4. Otworzy się panel zadań **Dołączenie**.
5. Jeśli nie została wybrana geometria: opcjonalnie wciśnij przycisk OK aby zakończyć działanie polecenia bez dołączania obiektu odniesienia.
6. Dalsze kroki są opisane na stronie [Część: Dołączenie](/Part_EditAttachment/pl#Użycie "Part EditAttachment/pl"). Kontynuuj od kroku 7 na tamtej stronie jeśli geometria została wcześniej wybrana.

## Uwagi

* Obiekt odniesienia może być również umieszczony w kontenerze poprzez upuszczenie go na kontener w [Widoku drzewa](/Tree_view/pl "Tree view/pl").
* Dołączenie obiektu odniesienia można zmienić edytując jego właściwość DANE**Map Mode**. Zobacz [Część: Dołączenie](/Part_EditAttachment/pl#Użycie "Part EditAttachment/pl").
* Obiekty [Część: Płaszczyzna odniesienia](/Part_DatumPlane/pl "Part DatumPlane/pl") i [Część: Linia odniesienia](/Part_DatumLine/pl "Part DatumLine/pl") oraz płaszczyzny i osie obiektu Część: Układ współrzędnych są nieskończone.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Część: Układ odniesienia, formalnie obiekt `Part::LocalCoordinateSystem`, wywodzi się z obiektu `App::LocalCoordinateSystem`. Dziedziczy wszystkie jego właściwości oprócz tych wymienionych jako Dołączenie.

### Dane

Dołączenie

Obiekt ten ma takie same właściwości dołączania jak [Part: Part2DObject](/Part_Part2DObject/pl#Dane "Part Part2DObject/pl").

Podstawowe

* DANE (hidden)**Cechy początku** (`LinkList`): Osie, płaszczyzny i punkt początkowy kontrolowane przez układ współrzędnych.
* DANE**Umiejscowienie** (`Placement`): Zobacz [Część: Cecha](/Part_Feature/pl#Dane "Part Feature/pl").
* DANE**Etykieta** (`String`): To samo.
* DANE (hidden)**Etykieta2** (`String`): To samo.
* DANE (hidden)**Silnik wyrażeń** (`ExpressionEngine`): To samo.
* DANE (hidden)**Widoczność** (`Bool`): To samo.
* DANE**Grupa** (`LinkList`):
* DANE (hidden)**\_ Grupa dotknięta** (`Bool`):

### Widok

Opcje wyświetlania

* WIDOK**Tryb wyświetlania** (`Enumeration`): Zobacz [Część: Cecha](/Part_Feature/pl#Widok "Part Feature/pl").
* WIDOK**Pokaż w drzewie** (`Bool`): To samo.
* WIDOK**Widoczność** (`Bool`): To samo.

Wybór

* WIDOK**Na górze gdy wybrane** (`Enumeration`): Zobacz [Część: Cecha](/Part_Feature/pl#Widok "Part Feature/pl").
* WIDOK**Styl wybierania** (`Enumeration`): To samo.

## Tworzenie skryptów

```
import FreeCAD as App

doc = App.newDocument()

body = doc.addObject("PartDesign::Body", "Body")
lcs = doc.addObject("Part::LocalCoordinateSystem", "LCS")
lcs.Visibility = True
body.addObjects([lcs])

orig = body.Origin
plane = next(f for f in orig.OriginFeatures if f.Role == "XZ_Plane")
lcs.AttachmentSupport = [(orig, (plane.Name + ".", ))]
lcs.AttachmentOffset = App.Placement(App.Vector(), App.Vector(1, 0, 0), 45)
lcs.MapMode = "FlatFace"

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CoordinateSystem/pl&oldid=1538084>"