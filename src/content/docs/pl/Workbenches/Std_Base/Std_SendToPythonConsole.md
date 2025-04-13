---
title: Std Wyślij do konsoli Python
---
|  |
| --- |
| Std: Wyślij do konsoli Python |
| Menu location |
| Edycja → Wyślij do konsoli Python |
| Workbenches |
| wszystkie |
| Default shortcut |
| Ctrl + Shift+P |
| Introduced in version |
| 0.19 |
| See also |
| *None* |
|  |

## Opis

Polecenie **Wyślij do konsoli Pyton** tworzy w [Konsoli Python](/Python_console/pl "Python console/pl") zmienne odnoszące się do wybranego obiektu i jego wybranych kształtów podrzędnych, wraz z kilkoma innymi użytecznymi odniesieniami. Zmienne i związany z nimi kod mogą być wykorzystane podczas tworzenia kodu środowiska Python.

W zależności od wybranego obiektu i jego wybranych kształtów podrzędnych, jeśli takie istnieją, tworzone są następujące zmienne:

| Nazwa zmiennej | Obiekty, do których się odwołano |
| --- | --- |
| `doc` | Dokument zawierający wybrany obiekt |
| `lnk` | Wybrany obiekt odnośnika *(tworzony tylko wtedy, gdy wybrany obiekt jest odnośnikiem)* |
| `obj` | W zależności od wybranego obiektu:  Sam zaznaczony obiekt *(jeśli zaznaczony obiekt nie jest odnośnikiem)*  Obiekt powiązany *(jeśli wybrany obiekt jest odnośnikiem)* |
| `shp` | W zależności od typu `obj`:  Właściwość `Shape` obiektu `obj` *(dla obiektów wywodzących się z klasy `Part::Feature`)*  Właściwość `Mesh` obiektu `obj` *(dla obiektów typu Mesh)*  Właściwość `Points` obiektu `obj` *(dla obiektów Points)* |
| `sub` | Pierwszy wybrany kształt podrzędny *(tworzony tylko wtedy, gdy wybrany jest co najmniej jeden kształt podrzędny)* |
| `subs` | Lista zawierająca wszystkie kształty podrzędne *(tworzona tylko w przypadku wybrania dwóch lub więcej kształtów podrzędnych)* |

```
>>> ### Begin command Std_SendToPythonConsole
>>> try:
>>>     del(doc,lnk,obj,shp,sub,subs)
>>> except Exception:
>>>     pass
>>> 
>>> doc = App.getDocument("Unnamed")
>>> lnk = doc.getObject("Link")
>>> obj = lnk.getLinkedObject()
>>> shp = obj.Shape
>>> sub = obj.getSubObject("Edge10")
>>> subs = [obj.getSubObject("Edge10"),obj.getSubObject("Face3"),obj.getSubObject("Vertex5"),]
>>> ### End command Std_SendToPythonConsole

```

Przykładowe dane wyjściowe: wybrano krawędź, ścianę i wierzchołek [łącza](/Std_LinkMake/pl "Std LinkMake/pl") do [sześcianu](/Part_Box/pl "Part Box/pl").

## Użycie

1. Wybierz pojedynczy obiekt albo jeden lub więcej kształtów podrzędnych należących do pojedynczego obiektu.
2. Polecenie można wywołać na kilka sposobów:
   * Wybierz opcję **Edycja → ![](/images/Std_SendToPythonConsole.svg) Wyślij do konsoli Python** z menu.
   * Wybierz opcję **![](/images/Std_SendToPythonConsole.svg) Wyślij do konsoli Python** z menu kontekstowego okna [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl").
   * Użyj skrótu klawiaturowego: Ctrl + Shift + P.
3. W razie potrzeby otwiera się [Konsola Pythona](/Python_console/pl "Python console/pl").
4. [Konsola Python](/Python_console/pl "Python console/pl") zostaje przekierowana na klawiaturę.

## Uwagi

* Wszystkie wcześniej utworzone zmienne są usuwane po każdym uruchomieniu polecenia.

* Jeśli zaznaczony obiekt jest Łączem *(`App::Link`)*, a Obiekt połączony pochodzi z klasy `Part::Feature`, zmienna `shp` będzie kształtem obiektu połączonego. Jeśli odnośnik został przekształcony lub przeskalowany i chcesz uzyskać dostęp do przeskalowanego/przekształconego kształtu, możesz to zrobić za pomocą tego kodu:

:   ```
    lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/pl&oldid=1448996>"