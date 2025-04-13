---
title: Środowisko pracy Projekt Części
---

![](/images/Workbench_PartDesign.svg)

Ikonka FreeCAD dla środowiska pracy Projekt Części

## Wprowadzenie

Środowisko pracy ![](/images/Workbench_PartDesign.svg) **Projekt Części** zapewnia zaawansowane narzędzia do modelowania komponentów bryłowych. Koncentruje się głównie na tworzeniu komponentów mechanicznych, które mogą być wytwarzane i składane w gotowy produkt. Niemniej jednak, utworzone bryły mogą być wykorzystywane do innych celów, takich jak: [projekt BIM](/BIM_Workbench/pl "BIM Workbench/pl"), [analiza MES](/FEM_Workbench/pl "FEM Workbench/pl") lub [obróbka CNC i druk 3D](/Path_Workbench/pl "Path Workbench/pl").

Środowisko pracy Projekt Części korzysta z podejścia opartego o cechy. Komponent jest reprezentowany przez kontener Zawartość. Definiuje on lokalny układ współrzędnych i zawiera kumulatywne cechy, które definiują komponent. Cechy są w większości oparte o parametryczne szkice i mogą być addytywne (dodające materiał) lub subtraktywne (odejmujące materiał). Przykładowo narzędzie [Wyciągnij](/PartDesign_Pad/pl "PartDesign Pad/pl") dodaje wyciągany szkic do tworzonej bryły zaś narzędzie [Kieszeń](/PartDesign_Pocket/pl "PartDesign Pocket/pl") odejmuje wyciągany szkic. Każda cecha jest kumulatywna i budowana na wyniku poprzednich cech. Możliwe jest też używanie prymitywów ([Walec](/PartDesign_AdditiveCylinder/pl "PartDesign AdditiveCylinder/pl"), [Sfera](/PartDesign_AdditiveSphere/pl "PartDesign AdditiveSphere/pl") itd.) jak i brył tworzonych poza Zawartością jako cechy.

Zobacz stronę [Edycja cech](/Feature_editing/pl "Feature editing/pl") aby znaleźć bardziej kompletne wyjaśnienie tego procesu a następnie zobacz stronę [Projekt Części: tworzenie podstawowych brył](/Creating_a_simple_part_with_PartDesign/pl "Creating a simple part with PartDesign/pl") aby rozpocząć pracę z tworzeniem brył.

Środowisko pracy ![](/images/Workbench_Part.svg) [Część](/Part_Workbench/pl "Part Workbench/pl") zapewnia alternatywne podejście oparte o metologię [constructive solid geometry](/Constructive_solid_geometry/pl "Constructive solid geometry/pl") (CSG) do tworzenia kształtów. Szczegółowe porównanie środowisk pracy Część i Projekt Części można znaleźć na stronie [Część i Projekt Części](/Part_and_PartDesign/pl "Part and PartDesign/pl").

![](/images/PartDesign_Workbench_Example.jpg)

## Przybory

Narzędzia Part Design znajdują się w menu **Part Design** oraz na pasku narzędzi _PartDesign_, który pojawia się po załadowaniu Środowiska pracy Part Design.

### Narzędzia pomocnicze

- ![](/images/PartDesign_Body.svg) [Stwórz nową zawartość ...](/PartDesign_Body/pl "PartDesign Body/pl"): Tworzy obiekt [Body](/Body "Body") w aktywnym dokumencie i czyni go aktywnym.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz szkic:

: \- ![](/images/Sketcher_NewSketch.svg) [Utwórz szkic](/PartDesign_NewSketch/pl "PartDesign NewSketch/pl"): tworzy nowy szkic na wybranej ścianie lub płaszczyźnie. Jeśli podczas uruchamiania tego narzędzia nie zostanie wybrana żadna ściana, użytkownik zostanie poproszony o wybranie płaszczyzny z panelu zadań. Następnie interfejs przełącza się na Środowisko pracy [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") w trybie edycji szkicu.

: \- ![](/images/Sketcher_MapSketch.svg) [Mapuj szkic na powierzchnię](/Sketcher_MapSketch/pl "Sketcher MapSketch/pl"): dołącza szkic do geometrii wybranej z aktywnej bryły.

: \- ![](/images/Sketcher_EditSketch.svg) [Edycja wybranego szkicu](/Sketcher_EditSketch/pl "Sketcher EditSketch/pl"): Otwiera wybrany szkic do edycji.

- ![](/images/Sketcher_ValidateSketch.svg) [Sprawdź poprawność szkicu](/Sketcher_ValidateSketch/pl "Sketcher ValidateSketch/pl"): Sprawdza odchylenia różnych punktów i dopasowuje je.

- ![](/images/Part_CheckGeometry.svg) [Sprawdź geometrię](/Part_CheckGeometry/pl "Part CheckGeometry/pl"): sprawdza geometrię wybranych obiektów pod kątem błędów.

- ![](/images/PartDesign_ShapeBinder.svg) [Utwórz łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl"): tworzy łącznik kształtu odwołujący się do geometrii z jednego obiektu nadrzędnego.

- ![](/images/PartDesign_SubShapeBinder.svg) [Utwórz łącznik kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl"): tworzy łącznik kształtu odwołujący się do geometrii z jednego lub więcej obiektów nadrzędnych.

- ![](/images/PartDesign_Clone.svg) [Stwórz nowego klona](/PartDesign_Clone "PartDesign Clone"): tworzy klon wybranej bryły.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz punkt odniesienia (wersja 1.0 i poniżej):

: \- ![](/images/PartDesign_Plane.svg) [Utwórz nową płaszczyznę odniesienia](/PartDesign_Plane "PartDesign Plane"): tworzy płaszczyznę odniesienia w aktywnej części bryły. (wersja 1.0 i poniżej)

: \- ![](/images/PartDesign_Line.svg) [Utwórz nowa linię odniesienia](/PartDesign_Line "PartDesign Line"): tworzy linię odniesienia w aktywnej części bryły. (wersja 1.0 i poniżej)

: \- ![](/images/PartDesign_Point.svg) [Utwórz nowy punkt odniesienia](/PartDesign_Point "PartDesign Point"): tworzy punkt odniesienia w aktywnej części bryły. (wersja 1.0 i poniżej)

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Utwórz lokalny system współrzędnych](/PartDesign_CoordinateSystem "PartDesign CoordinateSystem"): tworzy lokalny układ odniesienia połączony z geometrią punktu odniesienia w aktywnej bryle. (wersja 1.0 i poniżej)

: [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): te narzędzia zostały zastąpione nowymi [narzędziami do geometrii pomocniczych](/Std_Base/pl#Part_Datums "Std Base/pl").

### Narzędzia modelujące

#### Narzędzia dodawania nowych elementów

Są to narzędzia do tworzenia elementów bazowych lub dodawania materiałów do istniejącej bryły.

- ![](/images/PartDesign_Pad.png) [Wyciągnij wybrany szkic](/PartDesign_Pad "PartDesign Pad"): wybrany szkic wyciąga do bryły.

- ![](/images/PartDesign_Revolution.svg) [Wyciągnij przez obrót ...](/PartDesign_Revolution "PartDesign Revolution"): tworzy bryłę, obracając szkic wokół osi. Szkic musi tworzyć profil zamknięty.

- ![](/images/PartDesign_AdditiveLoft.svg) [Lofuj wybrany profil ...](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"): tworzy bryłę, dokonując połączenia między dwoma lub więcej szkicami.

- ![](/images/PartDesign_AdditivePipe.svg) [Rozciągnij wybrany rysunek wzdłuż ścieżki ...](/PartDesign_AdditivePipe "PartDesign AdditivePipe"): tworzy bryłę poprzez przeciągnięcie jednego lub więcej szkiców wzdłuż otwartej lub zamkniętej ścieżki.

- ![](/images/PartDesign_AdditiveHelix.svg) [Addytywna helisa](/PartDesign_AdditiveHelix/pl "PartDesign AdditiveHelix/pl"): tworzy bryłę poprzez przeciągnięcie szkicu wzdłuż helisy.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz bryłę pierwotną do dodania:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Addytywny sześcian](/PartDesign_AdditiveBox "PartDesign AdditiveBox"): dodaje do aktywnej bryły dodatek w postaci kostki.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Addytywny walec](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"): dodaje do aktywnej bryły dodatek w postaci walca.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Addytywna sfera](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"): dodaje do aktywnej bryły dodatek w postaci sfery.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Addytywny stożek](/PartDesign_AdditiveCone "PartDesign AdditiveCone"): dodaje do aktywnej bryły dodatek w postaci stożka.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Addytywna elipsoida](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"): dodaje do aktywnej bryły dodatek w postaci elipsoidy obrotowej.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Addytywny torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"): dodaje do aktywnej bryły dodatek w postaci torusa.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Addtytwny graniastosłup](/PartDesign_AdditivePrism "PartDesign AdditivePrism"): dodaje do aktywnej bryły dodatek w postaci graniastosłupa.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Addytywny klin](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge"): dodaje do aktywnej bryły dodatek w postaci klina.

#### Narzędzia do usuwania kształtów

Są to narzędzia do odejmowania materiału z istniejącej bryły.

- ![](/images/PartDesign_Pocket.svg) [Utwórz kieszeń ...](/PartDesign_Pocket "PartDesign Pocket"): tworzy kieszeń z wybranego szkicu.

- ![](/images/PartDesign_Hole.svg) [Utwórz otwór ...](/PartDesign_Hole "PartDesign Hole"): tworzy element otworu z wybranego szkicu. Szkic musi zawierać jeden lub kilka okręgów.

- ![](/images/PartDesign_Groove.svg) [Wytnij rowek](/PartDesign_Groove "PartDesign Groove"): tworzy rowek, obracając szkic wokół osi.

- ![](/images/PartDesign_Subtractive_Loft.svg) [Odejmij wybrany profil...](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"): tworzy bryłę poprzez przejście pomiędzy dwoma lub więcej szkicami i odejmuje ją od aktywnego kształtu.

- ![](/images/PartDesign_SubtractivePipe.svg) [Rozciągnij wybrany szkic ... i usuń z zawartości](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe"): tworzy bryłę poprzez przesuwanie jednego lub więcej szkiców wzdłuż otwartej lub zamkniętej ścieżki i odejmuje je od aktywowanego kształtu.

- ![](/images/PartDesign_SubtractiveHelix.svg) [Subtraktywna helisa](/PartDesign_SubtractiveHelix/pl "PartDesign SubtractiveHelix/pl"): tworzy bryłę przez przeciągnięcie szkicu wzdłuż helisy i odejmuje ją od aktywnej bryły.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Utwórz bryłę pierwotną do odjęcia:

: \- ![](/images/PartDesign_Subtractive_Box.svg) [Subtraktywny sześcian](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"): dodaje do aktywnej bryły ubytek w kształcie kostki.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Subtraktywny walec](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"): dodaje do aktywnej bryły ubytek w kształcie walca.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Subtraktywna sfera](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"): dodaje do aktywnej bryły ubytek w kształcie sfery.

: \- ![](/images/PartDesign_Subtractive_Cone.svg) [Subtraktywny stożek](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"): dodaje do aktywnej bryły ubytek w kształcie stożka.

: \- ![](/images/PartDesign_Subtractive_Ellipsoid.svg) [Subtraktywna ellipsoida](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"): dodaje do aktywnej bryły ubytek w kształcie elipsoidy.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Subtraktywny torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"): dodaje do aktywnej bryły ubytek w kształcie torusa.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Subtraktywny graniastosłup](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"): dodaje do aktywnej bryły ubytek w kształcie graniastosłupa.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Subtraktywny klin](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge"): dodaje do aktywnej bryły ubytek w kształcie klina.

#### Narzędzia do przeprowadzania operacji logicznych

- ![](/images/PartDesign_Boolean.svg) [Operacje logiczne](/PartDesign_Boolean "PartDesign Boolean"): importuje jedną lub więcej brył lub klonów PartDesign do aktywnego elementu i przeprowadza operację logiczną.

### Narzędzia do wykańczania

Narzędzia te umożliwiają wykonanie określonej modyfikacji krawędzi lub powierzchni.

\_\*![](/images/PartDesign_Fillet.svg) [Utwórz zaokrąglenie na krawędzi](/PartDesign_Fillet "PartDesign Fillet"): tworzy zaokrąglenia na określonych krawędziach wybranego kształtu.

- ![](/images/PartDesign_Chamfer.svg) [Fazuj wybrane krawędzie ...](/PartDesign_Chamfer "PartDesign Chamfer"): tworzy fazy na wybranych krawędziach aktywnej bryły.

- ![](/images/PartDesign_Draft.svg) [Utwórz szkic na obszarze](/PartDesign_Draft "PartDesign Draft"): na wybrane powierzchnie aktywnej bryły stosuje szkic pod odpowiednim kątem.

- ![](/images/PartDesign_Thickness.svg) [Utwórz bryłę narzędziem grubość](/PartDesign_Thickness "PartDesign Thickness"): tworzy grubą powłokę z aktywnej bryły i powoduje otwarcie wybranych ścian.

### Narzędzia do przekształcania

Są to narzędzia służące do przekształcania istniejących właściwości.

- ![](/images/PartDesign_Mirrored.svg) [Utwórz kopie lustrzaną](/PartDesign_Mirrored "PartDesign Mirrored"): jest lustrzanym odbiciem jednej lub kilku cech.

- ![](/images/PartDesign_LinearPattern.svg) [Utwórz szyk liniowy](/PartDesign_LinearPattern "PartDesign LinearPattern"): tworzy wzór liniowy oparty na jednej lub kilku właściwościach.

- ![](/images/PartDesign_PolarPattern.svg) [Utwórz szyk kołowy](/PartDesign_PolarPattern "PartDesign PolarPattern"): tworzy układ kołowy złożony z jednej lub więcej właściwości.

- ![](/images/PartDesign_MultiTransform.svg) [Utwórz szyk kołowy](/PartDesign_MultiTransform "PartDesign MultiTransform"): tworzy układ kołowy złożony z jednej lub więcej właściwości, wspomniane powyżej, a także przekształcenie [Skali](/PartDesign_Scaled/pl "PartDesign Scaled/pl").
  - ![](/images/PartDesign_Scaled.svg) [Skaluj](/PartDesign_Scaled/pl "PartDesign Scaled/pl"): skaluje jedną lub więcej funkcji. Funkcja nie jest dostępna jako osobne narzędzie do transformacji.

#### Dodatki

Kilka dodatkowych funkcji, które można znaleźć w menu Part Design:

- ![](/images/PartDesign_Sprocket.svg) [Kreator projektowania kół łańcuchowych](/PartDesign_Sprocket/pl "PartDesign Sprocket/pl"): tworzy profil koła zębatego, który może być użyty do wyciągnięcia.

- ![](/images/PartDesign_InvoluteGear.svg) [Koło zębate ewolwentowe](/PartDesign_InvoluteGear/pl "PartDesign InvoluteGear/pl"): tworzy profil koła zębatego, który może być użyty do wyciągnięcia.

- ![](/images/PartDesign_WizardShaft.svg) [Twórca wałów](/PartDesign_WizardShaft "PartDesign WizardShaft"): tworzy wał z tabeli wartości i pozwala na analizę sił i momentów. Wał jest tworzony za pomocą szkicu obrotowego, który można edytować.

### Pozycje w menu kontekstowym

- [Wygaszony](/index.php?title=PartDesign_Suppressed/pl&action=edit&redlink=1 "PartDesign Suppressed/pl (page does not exist)"): pole, którego zaznaczenie wyłącza daną cechę bez usuwania jej. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

- ![](/images/PartDesign_MoveTip.svg) [Ustaw czubek](/PartDesign_MoveTip "PartDesign MoveTip"): pozwala na przedefiniowanie czubka, który jest elementem eksponowanym na zewnątrz korpusu.

- ![](/images/PartDesign_MoveFeature.svg) [Przenieś obiekt do innej zawartości](/PartDesign_MoveFeature "PartDesign MoveFeature"): przenosi wybrany szkic, geometrię odniesienia lub element do innej zawartości

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Przenieś obiekt za innym obiektem](/PartDesign_MoveFeatureInTree "PartDesign MoveFeatureInTree"): umożliwia zmianę kolejności obiektów drzewa zawartości poprzez przeniesienie wybranego szkicu, geometrii odniesienia lub elementu w inne miejsce na liście elementów.

#### Pozycje współdzielone ze Środowiskiem pracy Part

- ![](/images/Std_SetAppearance.svg) [Wygląd zewnętrzny](/Std_SetAppearance "Std SetAppearance"): określa wygląd całej części _(przezroczystość kolor itp.)_.

- ![](/images/Part_ColorPerFace.svg) [Ustaw kolor ściany](/Part_ColorPerFace "Part ColorPerFace"): Przypisuje kolory do poszczególnych powierzchni obiektów.

### Narzędzia przestarzałe

- ![](/images/PartDesign_Migrate.svg) [Przenieś ze starszej wersji](/PartDesign_Migrate/pl "PartDesign Migrate/pl"): przenosi pliki z wersji programu FreeCAD poniżej 0.17 do wersji 0.17. To narzędzie nie jest dostępne w wersja 1.0 i powyżej.

## Ustawienia

- ![](/images/Preferences-part_design.svg) [Ustawienia](/PartDesign_Preferences/pl "PartDesign Preferences/pl"): opcje dostępne w Narzędziach PartDesign.
- [Dostrajanie parametrów](/Fine-tuning/pl "Fine-tuning/pl"): kilka dodatkowych parametrów, aby dopracować zachowanie PartDesign.

## Poradniki

- [How to use FreeCAD](http://help-freecad-jpg87.fr/), strona internetowa opisująca przebieg pracy w zakresie projektowania mechanicznego.
- [Projekt części: tworzenie podstawowych brył](/Creating_a_simple_part_with_PartDesign/pl "Creating a simple part with PartDesign/pl").
- [Podstawy dla Środowiska pracy Projekt Części 019](/Basic_Part_Design_Tutorial_019/pl "Basic Part Design Tutorial 019/pl").
- [Poradnik: Projekt części uchwyt łożyska I](/PartDesign_Bearingholder_Tutorial_I/pl "PartDesign Bearingholder Tutorial I/pl") _(wymaga aktualizacji)_.
- [Poradnik: Projekt części uchwyt łożyska II](/PartDesign_Bearingholder_Tutorial_II/pl "PartDesign Bearingholder Tutorial II/pl") _(wymaga aktualizacji)_.

## Przykłady

Aby uzyskać kilka pomysłów na to, co można osiągnąć za pomocą narzędzi środowiska Projekt Części, zajrzyj do: [przykładów](/PartDesign_Examples/pl "PartDesign Examples/pl").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/pl&oldid=1529381>"
