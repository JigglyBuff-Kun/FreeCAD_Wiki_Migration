---
title: Std AnPythonKonsoleSenden
---

|                                       |
| ------------------------------------- |
| Std AnPythonKonsoleSenden             |
| Menüeintrag                           |
| Bearbeiten → An Python-Konsole senden |
| Arbeitsbereich                        |
| Alle                                  |
| Standardtastenkürzel                  |
| Ctrl+Shift+P                          |
| Eingeführt in Version                 |
| 0.19                                  |
| Siehe auch                            |
| _Keiner_                              |
|                                       |

## Beschreibung

Der Befehl **Std AnPythonKonsoleSenden** erstellt Variablen in der [Python-Konsole](/Python_console/de "Python console/de"), die auf ein ausgewähltes Objekt und auf seine ausgewählten Teilformen verweisen, zusammen mit ein paar nützlichen anderen Referenzen. Die Variablen und der dazugehörige Kode können zur Entwicklung von Python-Skripten verwendet werden.

Abhängig von dem ausgewählten Objekt und seiner ausgewählten Teilformen, falls vorhanden, werden die folgenden Variablen erstellt:

| Variable name | Referenced object(s)                                                                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `doc`         | The document containing the selected object                                                                                                                                                                            |
| `lnk`         | The selected Link object (only created if the selected object is a Link)                                                                                                                                               |
| `obj`         | Depending on the selected object: The selected object itself (if the selected object is not a Link) The Linked object (if the selected object is a Link)                                                               |
| `shp`         | Depending on the type of `obj`: The `Shape` property of `obj` (for objects derived from the `Part::Feature` class) The `Mesh` property of `obj` (for Mesh objects) The `Points` property of `obj` (for Points objects) |
| `sub`         | The first selected subshape (only created if at least one subshape is selected)                                                                                                                                        |
| `subs`        | A list containing all subshapes (only created if two or more subshapes are selected)                                                                                                                                   |

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

Beispielausgabe: eine Kante, eine Fläche und ein Eckpunkt eines [Part Würfels](/Part_Box/de "Part Box/de") wurden ausgewählt

## Anwendung

1. Ein einzelnes Objekt oder eine bzw. mehrere Teilformen, die zu einem einzelnen Objekt gehören, auswählen.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Den Menüeintrag **Bearbeiten → ![](/images/Std_SendToPythonConsole.svg) An Python-Konsole senden** auswählen.
   - Den Menüeintrag **![](/images/Std_SendToPythonConsole.svg) An Python-Konsole senden** aus dem Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder dem Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   - Das Tastaturkürzel Strg+Shift+P.
3. Falls erforderlich öffnet sich die [Python-Konsole](/Python_console/de "Python console/de").
4. Die [Python-Konsole](/Python_console/de "Python console/de") erhält den Fokus der Tastatur.

## Hinweise

- Jedes Mal, wenn der Befehl ausgeführt wird, werden alle vorher erzeugten Variablen gelöscht.

- If the selected object is a Link (`App::Link`) and the Linked object is derived from the `Part::Feature` class, the `shp` variable will be the shape of the Linked object. If the Link has been transformed or scaled and you want to access the scaled/transformed shape, you can do so with this code:

: ```
lnk_shp = Part.getShape(lnk)

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_SendToPythonConsole/de&oldid=1448993>"
