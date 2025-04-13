---
title: Obiekt widoku Api
---

:::caution
(Październik 2019)Nie edytuj tych stron. Informacje są niekompletne i nieaktualne. Najnowsze API można znaleźć wautomatycznie generowana dokumentacja API, lub wygenerować dokumentację samodzielnie, śledząc dokumentDokumentacja źródłowa.
:::

Kiedy GUI jest uruchomione, każdy obiekt w dokumencie FreeCAD ma powiązany obiekt widoku, który rezyduje w odpowiedniku dokumentu FreeCADGui. Obiekt widoku może zostać pobrany na dwa sposoby. Przykład:

```
myViewObj = FreeCAD.ActiveDocument.myObjectName.ViewObject
myViewObj = FreeCADGui.ActiveDocument.myObjectName
print myViewObj.IV

```

![](/images/Property.png) **Annotation**

**Returns**: węzeł anotacji obiektu ViewObject.

![](/images/Property.png) **BoundingBox**

**Returns**: ramka otaczająca.

![](/images/Property.png) **Content**

**Returns**: reprezentacja XML właściwości obiektu ViewObject.

![](/images/Property.png) **DisplayMode**

**Returns**: aktualny tryb wyświetlania.

![](/images/Property.png) **IV**

**Returns**: reprezentacja obiektu ViewObject w programie Inventor.

![](/images/Property.png) **Object**

**Returns**: powiązany obiekt dokumentu FreeCAD obiektu ViewObject.

![](/images/Property.png) **PropertiesList**

**Returns**: lista własciwości obiektu ViewObject.

![](/images/Property.png) **RootNode**

**Returns**: węzeł Inventor obiektu ViewObject _(obiekt pivy.coin)_.

![](/images/Property.png) **Selectable**

**Returns**: zwraca wartość `true` jeśli obiekt jest dostępny do wyboru.

![](/images/Property.png) **Type**

**Returns**: typ obiektu ViewObject.

![](/images/Property.png) **Visibility**

**Returns**: wraca wartość `true` jesli obiekt viewObject jest widzialny.

![](/images/Method.png) **getAllDerivedFrom(\*\***)\*\*

**Description**:

**Returns**: wszystkie wystąpienia tego obiektu.

![](/images/Method.png) **getDocumentationOfProperty(\*\***)\*\*

**Description**:

**Returns**: łańcuch dokumentacji właściwości tej klasy.

![](/images/Method.png) **getGroupOfProperty(\*\***)\*\*

**Description**:

**Returns**: nazwa grupy, do której należy dana właściwość w tej klasie. Właściwości posortowane w różnie nazwanych grupach dla wygody.

![](/images/Method.png) **getPropertyByName(\*\***)\*\*

**Description**:

**Returns**: wartość określonej właściwości.

![](/images/Method.png) **getTypeOfProperty(\*\***)\*\*

**Description**:

**Returns**: typ określonej właściwości. Może to być _(Hidden, ReadOnly, Output)_ lub dowolna kombinacja.

![](/images/Method.png) **hide(\*\***)\*\*

**Description**: Ukrywa obiekt.

**Returns**:

![](/images/Method.png) **isDerivedFrom(\***string**\*)**

**Description**: Sprawdza czy ten obiekt jest pochodną podanego typu obiektu

**Returns**: Zwraca wartość `true` jeśli podany typ jest ojcem

![](/images/Method.png) **isVisible(\*\***)\*\*

**Description**: Sprawdza, czy obiekt jest widzialny

**Returns**: boolean

![](/images/Method.png) **listDisplayModes(\*\***)\*\*

**Description**: Wyświetla listę wszystkich trybów wyświetlania

**Returns**: lista

![](/images/Method.png) **setTransformation(\***coin.SoTransform**\*)**

**Description**: Ustawia transformację na węźle Inventor.

**Returns**:

![](/images/Method.png) **show(\*\***)\*\*

**Description**: Pokazuje obiekt, jeśli jest ukryty.

**Returns**:

![](/images/Method.png) **toString(\*\***)\*\*

**Description**:

**Returns**: ciąg znaków reprezentujący węzeł Inventor.

![](/images/Method.png) **update(\*\***)\*\*

**Description**: Aktualizuje reprezentację obiektu w widoku.

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=ViewObject_API/pl&oldid=902207>"
