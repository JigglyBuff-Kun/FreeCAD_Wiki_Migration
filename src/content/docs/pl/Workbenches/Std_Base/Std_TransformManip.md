---
title: Std Przemieszczenie
---
|  |
| --- |
| Std: Przemieszczenie |
| Lokalizacja w menu |
| Edycja → Przemieszczenie |
| Środowisko pracy |
| Wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Tryb edycji użytkownika](/Std_UserEditMode/pl "Std UserEditMode/pl") |
|  |

## Opis

Narzędzie **Przemieszczenie** pozwala zastosować przyrosty obrotów i przesunięć do wybranego obiektu. Można tego dokonać albo przesuwając interaktywny manipulator w widoku 3D lub [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") poprzez wprowadzenie precyzyjnych wartości w panelu zadań, w układzie współrzędnych manipulatora (lokalnych) lub w globalnym układzie współrzędnych.

![](/images/Std_Transform_Manip_Example_1.1.png)

## Użycie

1. Wybierz obiekt z właściwością DANE**Umiejscowienie**. Zobacz [Uwagi](#Uwagi).
2. Istnieje kilka sposobów wywołania polecenia:
   * Wybierz opcję z menu **Edycja → ![](/images/Std_TransformManip.svg) Przemieszczenie**.
   * Wybierz opcję **![](/images/Std_TransformManip.svg) Przemieszczenie** z menu podręcznego [Widoku drzewa](/Tree_view/pl "Tree view/pl").
   * Jeśli [tryb edycji](/Std_UserEditMode/pl "Std UserEditMode/pl") jest ustawiony na **![](/images/Std_UserEditModeTransform.svg) Przemieszczenie** można również kliknąć dwukrotnie obiekt w widoku drzewa.
3. Otworzy się panel zadań **Transform**.
4. Opcjonalnie dostosuj parametry przyciągania. Są to wartości do przyciągania do przyrostów podczas przeciągania w widoku 3D, dla obrotów lub przesunięć.
5. Wykonaj jedną lub więcej z poniższych czynności:
   * Naciśnij i przytrzymaj lewy przycisk myszy na strzałce osi i przeciągnij, aby przesunąć obiekt wzdłuż tej osi.
   * Naciśnij i przytrzymaj lewy przycisk myszy na płaszczyźnie i przeciągnij, aby przesunąć obiekt wzdłuż tej płaszczyzny.
   * Naciśnij i przytrzymaj lewy przycisk myszy na kuli i przeciągnij, aby obrócić obiekt wokół tej osi.
6. Opcjonalnie dostosuj położenie [manipulatora](#Manipulator), [układ współrzędnych](#Układ_współrzędnych), wprowadź precyzyjne przyrosty delta (lokalne) lub bezwzględne (globalne) bądź [przemieść obiekt do obiektu docelowego](#Narzędzia). [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"). Zobacz sekcję [Opcje](#Opcje) poniżej aby uzyskać więcej informacji.
7. Wykonaj jedną z następujących czynności:
   * Naciśnij przycisk OK, aby potwierdzić i zakończyć polecenie.
   * Naciśnij przycisk Anuluj, aby przywrócić zastosowane przekształcenia i zakończyć polecenie. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

## Opcje

Dostępne są nowe opcje [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl") dla tego narzędzia. Domyślnie są one ustawione tak, by działać analogicznie jak w wersja 1.0 i poniżej.

![](/images/Std_Transform_Manip_relnotes_1.1.gif)

Możesz dostosować następujące opcje:

### Manipulator

Ta sekcja kontroluje położenie i orientację interaktywnego manipulatora (uchwytów osi) i jego zachowanie w widoku 3D. Obiekt jest zawsze przemieszczany wokół bieżącego początku manipulatora, który zawsze jest nieruchomy względem przemieszczanego obiektu.

#### Tryb

Pozwala dostosować położenie i orientację manipulatora, a więc początek przemieszczania.

* **Początek obiektu** (domyślne): Umieszcza manipulatora w początku obiektu, który ma być przemieszczany.
* **Środek masy / centroid**: Umieszcza manipulatora w centroidzie (środku geometrycznym) obiektu, który ma być przemieszczany, co odpowiada środkowi masy gdy materiał jest identyczny i równomiernie rozłożony lub nie uwzględniany.
* **Użytkownika**: Manipulator może być zamocowany do dowolnego elementu w dokumencie, nie tylko tego podlegającego przemieszczeniu (ściany, krawędzie, wierzchołki, geometrie pomocnicze). Po wybraniu *Użytkownika*, narzędzie czeka na wybór elementu aby umieścić manipulator w położeniu użytkownika. Przesuwanie kursora nad elementami w dokumencie generuje podgląd położenia i orientacji manipulatora, kliknięcie na wybranym elemencie przyczepia do niego manipulator.
  + **Odniesienie** (widoczne tylko w trybie *Użytkownika* mode): Wyświetla element, do którego przyczepiony jest manipulator (początek przemieszczania). Wyświetla tekst *Wybierz ścianę, krawędź lub wierzchołek...* jeśli narzędzie czeka na dokonanie wyboru przez użytkownika.
  + Wybierz odniesienie / Anuluj (widoczne tylko w trybie *Użytkownika*): Jeśli ustawiona jest lokalizacja użytkownika dla manipulatora, przycisk Wybierz odniesienie pozwala użytkownikowi zmienić położenie manipulatora i przyczepić go do innego elementu w dokumencie. Obiekt może być przemieszczany, położenie manipulatora może być zmienione i można dokonać kolejnego przemieszczenia - wszystko w jednym aktywnym panelu zadań. Przycisk Anuluj jest wyświetlany gdy narzędzie do przemieszczania spodziewa się dokonania wyboru nowego położenia manipulatora w widoku 3D przez użytkownika i anuluje umieszczanie manipulatora w lokalizacji użytkownika.

#### Przyciąganie

Przyrosty przyciągania to wartości do sterowania samym interaktywnym przeciąganiem w widoku 3D. Obiekt podlegający przemieszczaniu jest przyciągany do następujących przyrostów:

* **Przesunięcie**: Wartość długości - przyrost przyciągania dla przesunięcia obiektu w widoku 3D, w jednej osi lub na płaszczyźnie.
* **Obrót**: Wartość kąta - przyrost przyciągania dla obrotu obiektu w widoku 3D wokół dowolnej osi.

Jeśli jako przyrost przyciągania ustawione jest 0, przyciąganie jest wyłączone przy przeciąganiu w widoku 3D.

### Układ współrzędnych

Ta lista rozwijana ustawia układ współrzędnych do ręcznego wprowadzania wartości w panelu zadań. Układ współrzędnych nie ma wpływu na przemieszczanie obiektu poprzez samo przeciąganie w widoku 3D (poza sytuacją gdy wybrany jest układ *globalny* i zaznaczona jest opcja *Wyrównaj obrót manipulatora z wybranym układem współrzędnych*.)

Etykiety osi są również wyświetlane na manipulatorze w widoku 3D, podczas gdy **U,V,W** to lokalny układ współrzędnych w bieżącym położeniu manipulatora a **X,Y,Z** to globalny układ współrzędnych dokumentu (odpowiadający wartości umiejscowienia w edytorze właściwości jeśli manipulator jest w początku obiektu).

* **Lokalny** (domyślnie): bieżące położenie i orientacja manipulatora definiuje początek przemieszczania dla wartości wprowadzanych w panelu zadań w polach **U,V,W**. Wprowadzane wartości są równe delcie w stosunku do bieżącego położenia manipulatora w jego osiach.
* **Globalny**: panel zadań pokazuje wartości globalnego położenia i obrotu w układzie współrzędnych dokumentu **X,Y,Z** i pozwala zmieniać te wartości. Jeśli tryb manipulatora to *Początek obiektu*, wartości są takie same jak we właściwości umiejscowienia obiektu mającego podlegać przemieszczaniu.
  + **Wyrównaj położenie manipulatora z wybranym układem współrzędnych** (domyślnie *FAŁSZ*, dostępne tylko jeśli układ współrzędnych nie jest lokalny): zmienia orientację manipulatora aby dopasować go do globalnych osi **X,Y,Z**. Położenie manipulatora nie jest zmieniane przez to pole, tylko obrót osi manipulatora. To pozwala przeciągać obiekt w kierunkach globalnych osi (X,Y,Z), nawet jeśli początek obiektu jest w innej orientacji.

### Przesunięcie

Wprowadzenie długości do zmiany przesunięcia obiektu wokół bieżącego położenia manipulatora (początku przemieszczania).

* **U, V, W** (domyślnie, w *lokalnym* układzie współrzędnych): Umożliwia wprowadzanie – lub wyświetla, podczas przeciągania w widoku 3D – przesunięcie względem poprzedniego położenia manipulatora w lokalnym układzie współrzędnych (= położenie manipulatora). Wartości przesunięcia w U, V, W są kumulowane, dopóki obrót manipulatora (orientacja osi) nie zostanie zmieniony (przez przeciąganie w widoku 3D lub wprowadzanie wartości obrotu w panelu zadań), manipulator nie zostanie wyrównany do innego położenia użytkownika lub nie zostanie użyta funkcja *Przenieś do innego obiektu*. W takich przypadkach wartości są zerowane w interfejsie użytkownika panelu zadań, bez zmiany rzeczywistego przesunięcia obiektu.
* **X, Y, Z** (w *globalnym* układzie współrzędnych): Umożliwia wprowadzanie – lub wyświetla, podczas przeciągania w widoku 3D – globalne wartości bieżącego położenia manipulatora w układzie współrzędnych dokumentu X, Y, Z. Gdy tryb manipulatora jest ustawiony na *początek obiektu*, wartości odpowiadają wartościom umiejscowienia obiektu mającego podlegać przemieszczaniu wyświetlanym też w widoku właściwości.

### Obrót

Wprowadzenie kątów do zmiany obrotu obiektu wokół bieżącego położenia manipulatora (początku transformacji).

* **U, V, W** (domyślnie, w *lokalnym* układzie współrzędnych): Umożliwia wprowadzanie – lub wyświetla, podczas przeciągania w widoku 3D – zmianę orientacji względem poprzedniej orientacji manipulatora w lokalnym układzie współrzędnych (= orientacja manipulatora). Wartości rotacji w U, V, W są kumulowane, dopóki położenie manipulatora (pozycja osi) nie zostanie zmienione (przez przeciąganie w widoku 3D lub wprowadzanie wartości przesunięcia w panelu zadań), manipulator nie zostanie wyrównany do innego położenia użytkownika lub nie zostanie użyta funkcja *Przenieś do innego obiektu*. W takich przypadkach wartości obrotu są zerowane w interfejsie użytkownika panelu zadań, bez zmiany rzeczywistego obrotu obiektu.
* **X, Y, Z** (w *globalnym* układzie współrzędnych): Umożliwia wprowadzanie – lub wyświetla, podczas przeciągania w widoku 3D – globalne wartości położenia bieżącej orientacji manipulatora w układzie współrzędnych dokumentu w kątach Eulera wokół X, Y, Z. Gdy tryb manipulatora jest ustawiony na *początek obiektu*, wartości odpowiadają wartościom obrotu umiejscowienia obiektu mającego podlegać przemieszczaniu.

### Narzędzia

Szybkie akcje do przemieszczania wybranego obiektu.

* Przenieś do innego obiektu: Umożliwia interaktywne wybranie docelowego położenia w widoku 3D (dowolnego elementu w dokumencie), w którym obiekt do przemieszczenia zostanie ustawiony (przesunięcie i obrót), w bieżącym położeniu manipulatora. Przycisk zmienia się na Anuluj, jeśli narzędzie oczekuje na dokonanie wyboru w widoku 3D przez użytkownika. **Anuluj** przerywa wtedy wybór celu, ale nie zamyka narzędzia przemieszczania.
* Odwróć: Odwraca orientację obiektu do przemieszczenia o 180 stopni wokół osi X i Z. Jest to przydatne, jeśli po użyciu funkcji *Przenieś do innego obiektu* obiekt do przemieszczenia przecina się z obiektem docelowym, ponieważ współrzędne docelowego położenia są odwrócone o 180 stopni.

## Uwagi

* Gdy tylko obrócisz/przesuniesz obiekt w oknie [widoku 3D](/3D_view/pl "3D view/pl"), zmiany zostaną zastosowane.
* Niektóre obiekty z właściwością DANE**Umiejscowienie**, takie jak szkice, nie mogą być manipulowane, podobnie jak obiekty dołączone do innych obiektów.
* W wersja 0.21 i poniżej nie ma przycisku Anuluj, w tych wersjach można nacisnąć przycisk OK i użyć ![](/images/Std_Undo.svg) [Cofnij](/Std_Undo/pl "Std Undo/pl"), aby cofnąć zmiany.

## Przykłady

### Wybierz manipulator użytkownika

Jeśli manipulator nie jest w widoku lub w niepożądanej lokalizacji, można go ustawić na środek masy lub dowolny element w dokumencie (nie tylko należący do obiektu podlegającego transformacji):

1. Wywołaj narzędzie **Przemieszczenie**
2. Wybierz **Tryb** → **Użytkownika**
3. Wybierz dowolny element w widoku 3D
4. Dokonaj przemieszczenia wokół początku manipulatora poprzez przeciąganie w widoku 3D lub zmianę wartości w panelu zadań.

Demonstracja (kliknij na obrazku jeśli animacja się nie uruchamia):

![](/images/Std_Transform_Manip_Pick_Custom_Dragger_1.1.gif)

### Przesuń cechę do globalnego początku

To pozwala pozycjonować obiekty Zawartości i zaimportowane pliki STEP w stosunku do specjalnych cech (np. otworów) w dokumencie:

1. Wywołaj narzędzie **Przemieszczenie**
2. Wybierz **Tryb** → **Użytkownika**
3. Wybierz element w widoku 3D, który ma być spozycjonowany
4. Zmień **Układ współrzędnych** na **Globalny**
5. Wprowadź nowe położenie, np. 0,0,0 aby wyśrodkować obiekt, który ma być przemieszczony w położeniu manipulatora do globalnego początku układu dokumentu

Demonstracja (kliknij na obrazku jeśli animacja się nie uruchamia):

![](/images/Std_Transform_Manip_Move_Feature_to_Global_Origin_1.1.gif)

### Wyrównaj do obiektu docelowego

Jeśli obiekt powinien zostać przemieszczony aby znalazł się w położeniu docelowym (odniesienie):

1. Wywołaj narzędzie **Przemieszczenie**
2. Wybierz **Tryb** → **Użytkownika**
3. Wybierz element odniesienia w widoku 3D
4. Kliknij **Narzędzia** → **Przesuń do innego obiektu**
5. Wybierz położenie docelowe (położenie, z którym obiekt do przemieszczenia jest wyrównany w bieżącej pozycji manipulatora)
6. Opcjonalnie: kliknij **Odwróć** aby zmienić orientację jeśli obiekty się przenikają.

Demonstracja (kliknij na obrazku jeśli animacja się nie uruchamia):

![](/images/Std_Transform_Manip_Align_to_Target_Object_1.1.gif)

### Przeciągnij w układzie X,Y,Z dokumentu jeśli obiekt nie jest wyrównany

Jeśli obiekt (zaimportowany lub przemieszczony) nie jest wyrównany z globalnym układem współrzędnych dokumentu X, Y, Z, ale musi zostać przeciągnięty (obrót lub przesunięcie) wzdłuż globalnych osi dokumentu:

1. Wywołaj narzędzie **Przemieszczenie**
2. Opcjonalnie: Zmień **Tryb** położenia manipulatora
3. Wybierz element odniesienia w widoku 3D
4. Zmień **Układ współrzędnych** na **Globalny**
5. Zaznacz opcję **Wyrównaj obrót manipulatora z wybranym układem współrzędnych**
6. Etykiety na manipulatorze zmienią się z U,V,W na X,Y,Z i będą wyrównane z globalnym układem współrzędnych dokumentu

Demonstracja (kliknij na obrazku jeśli animacja się nie uruchamia):

![](/images/Std_Transform_Manip_Drag_in_Document_CS_1.1.gif)

### Przesuń elementy BIM w dowolnych kierunkach

Przykładowo, aby przesunąć drzwi BIM wzdłuż pochylonego elementu ściany:

1. Wywołaj narzędzie **Przemieszczenie**
2. Wybierz **Manipulator → Tryb → Użytkownika**
3. Wybierz element, który jest zorientowany w docelowym kierunku
4. Przemieść względem tego początku manipulatora poprzez przeciągnięcie w widoku 3D lub zmianę wartości w panelu zadań.

Demonstracja (kliknij na obrazku jeśli animacja się nie uruchamia):

![](/images/Std_Transform_Manip_BIM_Door_1.1.gif)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_TransformManip/pl&oldid=1534523>"