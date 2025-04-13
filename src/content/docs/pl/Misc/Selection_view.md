---
title: Widok wyboru
---
## Wprowadzenie

Widok wyboru jest panelem [interfejsu](/Interface/pl "Interface/pl") domyślnie znajdującym się poniżej widoku złożonego. Podobnie jak [edytor właściwości](/Property_editor/pl "Property editor/pl"), pokazuje on więcej informacji o aktualnie wybranych obiektach.

Wyboru można dokonać poprzez zaznaczenie obiektu w [Widoku 3D](/3D_view/pl "3D view/pl") lub w [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Wiele obiektów można zaznaczyć przytrzymując Ctrl.

![](/images/FreeCAD_interface_base_divisions.svg)

Widok wyboru oznaczony cyfrą 5, w standardowym [Interfejsie użytkownika](/Interface/pl "Interface/pl").

## Zaznaczanie obiektów

Widok drzewa tego przykładu zawiera dwie [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części, z kilkoma cechami każda, oraz prosty [Stożek](/Part_Cone/pl "Part Cone/pl") środowiska Część. Drzewo wygląda następująco.

![](/images/FreeCAD_Selection_Tree_view.png)

Widok wyboru jest pusty, jeśli żaden obiekt nie jest zaznaczony w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub [widoku drzewa](/Tree_view/pl "Tree view/pl").

![](/images/FreeCAD_Selection_view_empty.png) ![](/images/FreeCAD_Selection_view_empty_3D.png)

Po wybraniu obiektu pojawi się on na liście obiektów wraz z dokumentem, do którego należy. Wyświetlony zostanie zarówno wewnętrzny kod tylko do odczytu `Name`, jak i zmienny kod użytkownika `Label`.

`Name` może zawierać tylko podstawowe znaki alfanumeryczne `[_0-9a-zA-Z]`, podczas gdy `Label` może zawierać dowolny symbol, w tym spacje i znaki akcentowane.

```
Document#Name (Label)

```

![](/images/FreeCAD_Selection_view_one_object.png) ![](/images/FreeCAD_Selection_view_one_object_3D.png)

Po wybraniu różnych obiektów zostaną one wyświetlone w widoku. Jeśli obiekty te znajdują się wewnątrz typu kontenera, na przykład [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl"), środowiska Projekt Części wyświetlana nazwa zostanie podana w sposób hierarchiczny, czyli `Document#Parent.Child`. W takim przypadku nie tylko element podrzędny, ale cały element nadrzędny zostanie podświetlony w widoku 3D.

```
Document#Body.Feature. (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects.png) ![](/images/FreeCAD_Selection_view_many_objects_3D.png)

Poszczególne elementy zawartości, tj. wierzchołki, krawędzie i ściany, mogą być zaznaczane i będą również wyświetlane w sposób hierarchiczny.

```
Document#Body.Feature.Vertex (Feature_label)
Document#Body.Feature.Edge (Feature_label)
Document#Body.Feature.Face (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects_subelements.png) ![](/images/FreeCAD_Selection_view_many_objects_subelements_3D.png)

## Pasek wyszukiwania

Jeśli masz wiele obiektów w dokumencie i nie możesz wybrać tego, który chcesz z [widoku 3D](/3D_view/pl "3D view/pl") lub z [widok drzewa](/Tree_view/pl "Tree view/pl"), możesz wpisać częściową nazwę obiektu w polu wyszukiwania. Zostaną przeszukane wszystkie nazwy w dokumencie i wyświetlona zostanie lista tych, które częściowo pasują do wpisanego tekstu. Po znalezieniu szukanego obiektu można go kliknąć, aby go zaznaczyć.

## Działania

Kliknięcie prawym przyciskiem myszy elementu na liście powoduje wyświetlenie różnych poleceń.

* **Wybierz tylko**: odznacza wszystko i zaznacza tylko obiekt nadrzędny, który zawiera dany element.
* **Odznacz**: całkowicie usuwa zaznaczenie wszystkich obiektów.
* **Powiększenie do dopasowania**: odznacza wszystko i zaznacza tylko obiekt nadrzędny, który zawiera dany element. Ponadto [Widok 3D](/3D_view/pl "3D view/pl") jest przesuwany i powiększany tak, aby obiekt nadrzędny był wyśrodkowany na ekranie. Jest to przydatne podczas wybierania jednego obiektu w widoku drzewa, a następnie szybkiego ustawiania na nim ostrości kamery w widoku 3D.
* **Przejdź do wyboru**: odznacza wszystko i zaznacza tylko obiekt nadrzędny, który zawiera wybrany element. W tym przypadku [widok drzewa](/Tree_view/pl "Tree view/pl") jest dostosowywany i rozszerzany, aby pokazać dokładnie, gdzie wybrany obiekt znajduje się w drzewie. Jest to przydatne, gdy obiekty w widoku 3D znajdują się wewnątrz wielu obiektów kontenera w widoku drzewa, na przykład [Część](/Std_Part/pl "Std Part/pl"), [Grupa](/Std_Group/pl "Std Group/pl"), [Zawartość](/PartDesign_Body/pl "PartDesign Body/pl") środowiska Projekt Części, [Budowla](/Arch_BuildingPart/pl "Arch BuildingPart/pl") środowiska Architektura i podobnych. Gdy masz setki brył, łatwiej jest wybrać obiekt w widoku 3D, a następnie wybrać **Widok drzewa**, aby natychmiast zlokalizować obiekt w widoku drzewa, a następnie przejść do edycji jego właściwości w [Edytor właściwości](/Property_editor/pl "Property editor/pl").
* **Zaznacz do przeliczenia**: zaznacza wybrany obiekt jako "Dotknięty", co oznacza, że jego właściwości zostaną zaktualizowane następnym razem, gdy dokument zostanie [przeliczony](/Std_Refresh/pl "Std Refresh/pl").
* **Do konsoli Python**: tworzy zmienną `obj`, która przechowuje odniesienie do obiektu nadrzędnego. Jest to przydatne podczas pisania skryptów i testowania poleceń w [konsoli Python](/Python_console/pl "Python console/pl"). Zamiast używać pełnej nazwy obiektu, łatwiej jest użyć krótszej i bardziej kompaktowej nazwy `obj`.

## Wskazany obiekt

Począwszy od wersji 0.19, dostępne jest pole wyboru **lista obiektów wskazanych**. Jeśli jest ono zaznaczone, pojawi się dodatkowa lista pokazująca wszystkie elementy podrzędne *(wierzchołki, krawędzie i ściany)*, które można wybrać jednym kliknięciem, nawet te, które znajdują się za *(ukryte przez)* innymi obiektami.

![](/images/FreeCAD_Selection_view_pick_hidden.png) ![](/images/FreeCAD_Selection_view_pick_hidden_3D.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_view/pl&oldid=1334273>"