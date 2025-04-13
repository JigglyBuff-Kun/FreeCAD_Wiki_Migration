---
title: App Właściwości Python
---

## Wprowadzenie

Obiekt ![](/images/Feature.svg) App: Właściwości Python, lub formalnie `App::FeaturePython`, jest prostą instancją [App: Obiekt dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") w środowisku [Python](/Python/pl "Python/pl").

Jest to prosty obiekt, który domyślnie nie ma wielu właściwości, na przykład nie ma [umiejscowienia](/Placement/pl "Placement/pl") lub [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl"). W zależności od przypisanych mu właściwości, może być używany do zarządzania różnymi typami danych.

![](/images/FreeCAD_core_objects.svg)

Uproszczony diagram zależności pomiędzy podstawowymi obiektami w programie FreeCAD.

## Użycie

App: Właściwości Python jest obiektem wewnętrznym, więc nie można go utworzyć z poziomu interfejsu graficznego. Jest on przeznaczony do tworzenia klas podrzędnych, które będą obsługiwać różne typy danych.

Na przykład obiekty [Adnotacja wieloliniowa](/Draft_Text/pl "Draft Text/pl"), [Wymiar](/Draft_Dimension/pl "Draft Dimension/pl") i [Pośrednia płaszczyzna robocza](/Draft_WorkingPlaneProxy/pl "Draft WorkingPlaneProxy/pl") w środowisku pracy [Rysunek Roboczy](/Draft_Workbench/pl "Draft Workbench/pl") są obiektami `App::FeaturePython` z niestandardową ikoną i dodatkowymi właściwościami. Przechowują one dane, ale nie rzeczywisty obiekt [kształtu topologicznego](/Part_TopoShape/pl "Part TopoShape/pl").

Jeśli pożądany obiekt ma mieć umiejscowienie, kształt, dołączenie lub inne złożone właściwości, lepiej jest utworzyć jedną z bardziej złożonych klas, na przykład [App: Cechy geometrii](/App_GeoFeature/pl "App GeoFeature/pl"), [Część: Cecha](/Part_Feature/pl "Part Feature/pl") lub [Część: Część na obiekt 2D](/Part_Part2DObject/pl "Part Part2DObject/pl").

## Właściwości

Zobacz stronę [Właściwości](/Property/pl "Property/pl") dla wszystkich typów właściwości, które mogą mieć obiekty tworzone skryptami.

Klasa App: Właściwości Python (`App::FeaturePython`) jest pochodną podstawowej klasy [App: Obiekt dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") _(`App::DocumentObject`)_ i dziedziczy wszystkie jej właściwości. Posiada również kilka dodatkowych właściwości.

Są to właściwości dostępne w [edytorze właściwości](/Property_editor/pl "Property editor/pl"). Ukryte właściwości można wyświetlić za pomocą polecenia **Pokaż ukryte** w menu kontekstowym [edytora właściwości](/Property_editor/pl "Property editor/pl").

### Dane

Podstawa

- DANE (ukryte)**Proxy** (`PythonObject`): niestandardowa klasa powiązana z tym obiektem.
- DANE**Label** (`String`): edytowalna przez użytkownika nazwa tego obiektu, jest to dowolny ciąg UTF8.
- DANE (ukryte)**Label2** (`String`): dłuższy, edytowalny przez użytkownika opis tego obiektu, jest to dowolny ciąg UTF8, który może zawierać nowe linie. Domyślnie jest to pusty ciąg `""`.
- DANE**ExpressionEngine** (`ukryte`): lista wyrażeń. Domyślnie jest pusta `[]`.
- DANE (ukryte)**Visibility** (`Bool`): czy obiekt ma być wyświetlany czy nie.

### Widok

Podstawa

- WIDOK (ukryte)**Proxy** (`PythonObject`): niestandardowa klasa [Dostawca widoku](/Viewprovider/pl "Viewprovider/pl") powiązana z tym obiektem.

Opcje wyświetlania

- WIDOK**Display Mode** (`Enumeration`): domyślnie jest puste.
- WIDOK**Show In Tree** (`Bool`): wartość domyślna to `PRAWDA`, w którym to przypadku obiekt pojawi się w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"). W przeciwnym razie obiekt zostanie ukryty w oknie drzewa. Gdy obiekt w drzewie jest niewidoczny, można go ponownie zobaczyć, otwierając menu kontekstowe nad nazwą dokumentu _(prawym przyciskiem myszki)_ i wybierając ![](/images/CheckBoxTrue.svg) Pokaż elementy ukryte w widoku drzewa. Następnie można wybrać ukryty element i przełączyć właściwość WIDOK**Pokaż w drzewie** z powrotem na wartość `PRAWDA`.
- WIDOK**Visibility** (`Bool`): wartość domyślna to `PRAWDA`, w którym to przypadku obiekt będzie widoczny w oknie [3D view](/3D_view/pl "3D view/pl"), jeśli posiada [kształt](/Part_TopoShape/pl "Part TopoShape/pl"), w przeciwnym razie będzie niewidoczny. Domyślnie właściwość ta może być włączana i wyłączana poprzez zaznaczenie obiektu i naciśnięcie przycisku Spacja.

Wybieranie

- WIDOK**On Top When Selected** (`Enumeration`): kontroluje sposób, w jaki zaznaczenie pojawia się w oknie [widoku 3D](/3D_view/pl "3D view/pl"), jeśli obiekt ma [kształt](/Part_TopoShape/pl "Part TopoShape/pl"), a istnieje wiele obiektów częściowo zakrytych przez inne. Domyślnie `Wyłączone`, co oznacza, że nie pojawi się żadne specjalne podświetlenie. `Włączone` oznacza, że obiekt pojawi się na wierzchu każdego innego obiektu po wybraniu. `Object` oznacza, że obiekt pojawi się na wierzchu tylko wtedy, gdy cały obiekt zostanie wybrany w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl"). `Element` oznacza, że obiekt pojawi się na wierzchu tylko wtedy, gdy element podrzędny _(wierzchołek, krawędź, ściana)_ zostanie wybrany w oknie [widoku 3D](/3D_view "3D view").
- WIDOK**Selection Style** (`Enumeration`): kontroluje sposób podświetlenia obiektu, jeśli ma on [kształt](/Part_TopoShape/pl "Part TopoShape/pl"). Jeśli jest to `kształt`, cały kształt _(wierzchołki, krawędzie i ściany)_ zostanie podświetlony w oknie [widoku 3D](/3D_view/pl "3D view/pl"); jeśli jest to `Ramka otaczająca`, pojawi się obwiednia otaczająca obiekt i zostanie podświetlona.

## Tworzenie skryptów

_Zobacz również:_ [Podstawy tworzenia skryptów FreeCAD](/FreeCAD_Scripting_Basics/pl "FreeCAD Scripting Basics/pl"), oraz [Obiekty skryptowe](/Scripted_objects/pl "Scripted objects/pl").

Ogólne informacje na temat dodawania obiektów do dokumentu można znaleźć na stronie [Część: właściwość](/Part_Feature/pl "Part Feature/pl").

Obiekt App: Właściwości Python jest tworzony za pomocą metody dokumentu `addObject()`.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::FeaturePython", "Name")
obj.Label = "Custom label"

```

Retrieved from "<http://wiki.freecad.org/index.php?title=App_FeaturePython/pl&oldid=1560951>"
