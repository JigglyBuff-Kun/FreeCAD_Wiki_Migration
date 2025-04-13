---
title: Projekt Części Rowek
---
|  |
| --- |
| Projekt Części: Rowek |
| Lokalizacja w menu |
| Projekt Części → Utwórz cechę przez odjęcie → Rowek |
| Środowisko pracy |
| [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Wyciągnij przez obrót](/PartDesign_Revolution/pl "PartDesign Revolution/pl") |
|  |

## Opis

Narzędzie **Rowek** obraca wybrany szkic lub profil wokół danej osi, wycinając materiał z podpory.

![](/images/PartDesign_Groove_example.svg)

Powyżej: szkic *(A)* jest obracany wokół osi *(B)*. Wynikowy rowek na bryle *(C)* jest pokazany po prawej stronie.

## Użycie

1. Wybierz pojedynczy szkic lub jedną lub więcej powierzchni na istniejącej bryle.
2. Naciśnij przycisk ![](/images/PartDesign_Groove.svg) **Rowek**.
3. Ustaw parametry wyżłobienia, patrz sekcja [Opcje](#Opcje) poniżej.
4. Naciśnij przycisk OK.

## Opcje

Podczas tworzenia rowka lub po dwukrotnym kliknięciu istniejącego rowka w oknie [Widok drzewa](/Tree_view/pl "Tree view/pl") wyświetlany jest panel zadań **Parametry rowka**. Oferuje on następujące ustawienia:

|

![](/images/Partdesign_groove_parameters.png)

### Typ

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Typ oferuje pięć różnych sposobów określania kąta rowka:

#### Wymiar

Podaj wartość numeryczną dla **Kąta** rowka. W przypadku opcji **Symetryczne do płaszczyzny** rowek będzie rozszerzony o połowę podanego kąta na obie strony względem szkicu lub powierzchni.

#### Przez wszystkie

Rowek będzie rozciągał się do ostatniej powierzchni podpory, którą napotka w swoim kierunku. Z opcją **Symetrycznie do płaszczyzny** rowek będzie przecinał cały materiał w obu kierunkach.

#### Do pierwszego

Rowek będzie sięgać do pierwszej powierzchni podpory, którą napotka w swoim kierunku.

#### Do powierzchni

Rowek będzie rozciągał się aż do powierzchni. Naciśnij przycisk Ściana i wybierz powierzchnię lub [płaszczyzna odniesienia](/PartDesign_Plane/pl "PartDesign Plane/pl") z listy Zawartości.

#### Dwa wymiary

Umożliwia to wprowadzenie drugiego kąta, w którym rowek powinien rozciągać się w przeciwnym kierunku. Kierunki można przełączać, zaznaczając opcję **Odwrócony**.

### Oś

Określa oś rowka:

* **Pionowa oś szkicu**: wybiera pionową oś szkicu.
* **Pozioma oś szkicu**: wybiera poziomą oś szkicu.
* **Linia konstrukcyjna**: wybiera linię konstrukcyjną ze szkicu używanego przez rowek. Lista rozwijana będzie zawierać pozycję dla każdej linii konstrukcyjnej. Pierwsza linia konstrukcyjna będzie oznaczona jako *Linia konstrukcyjna 1*.
* **Oś bazowa (X/Y/Z)**: wybiera oś X, Y lub Z odniesienia położenia bryły.
* **Wybierz odniesienie ...**: umożliwia wybór prostej krawędzi lub [linii odniesienia](/PartDesign_Line/pl "PartDesign Line/pl") z obiektu Zawartości.

Należy pamiętać, że podczas zmiany osi opcja **Odwrócony** może zostać *(nie)*zaznaczona automatycznie.

### Kąt

Określa kąt rowka. Ta opcja jest dostępna tylko wtedy, gdy **Typ** to **Wymiar** lub **Dwa wymiary**. Kąty większe niż 360° nie są dostępne. Wartości ujemne również nie są dostępne, zamiast nich należy użyć opcji **Odwrócony**.

### Symetrycznie do płaszczyzny

Zaznacz tę opcję, aby rozszerzyć rowek o połowę podanego kąta po obu stronach szkicu lub powierzchni, jeśli **Typ** to **Wymiar**, lub **Przez wszystkie**, jeśli taki jest **Typ**.

### Odwrócony

Odwraca kierunek rowka.

### Drugi kąt

[dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

Określa kąt rowka w przeciwnym kierunku. Ta opcja jest dostępna tylko wtedy, gdy **Typ** to **Dwa wymiary**, a **Kąt** jest mniejszy niż 360°.

## Właściwości

### Dane

Rowek

* DANE**Typ** (`Enumeration`)
* DANE**Baza** (`Vector`): (read-only)
* DANE**Oś** (`Vector`): (read-only)
* DANE**Kąt** (`Angle`)
* DANE**Kąt2** (`Angle`)
* DANE**Do powierzchni** (`LinkSub`)
* DANE**Oś odniesienia** (`LinkSub`)

Projekt Części

* DANE**Ulepsz** (`Bool`)

Szkic bazowy

* DANE**Profil** (`LinkSub`)
* DANE**Płaszczyzna pośrednia** (`Bool`)
* DANE**Odwrócony** (`Bool`)
* DANE**Zezwalaj na wiele ścian** (`Bool`)

## Uwagi

* Narzędzie ![](/images/PartDesign_ShapeBinder.svg) [Łącznik kształtu](/PartDesign_ShapeBinder/pl "PartDesign ShapeBinder/pl") nie może być użyte dla profilu.
* Podczas korzystania z narzędzia ![](/images/PartDesign_SubShapeBinder.svg) [Łącznik kształtów podrzędnych](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl") dla profilu, wybranie spoiwa w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl") nie powiedzie się, zamiast tego powierzchnia wiążąca musi zostać wybrana w oknie [widoku 3D](/3D_view/pl "3D view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Groove/pl&oldid=1526876>"