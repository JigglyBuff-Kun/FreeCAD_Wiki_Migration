---
title: Taslak API
---
Bu işlevler Taslak modülünün bir parçasıdır ve Taslak modülü alındıktan sonra komut dosyalarında ve makrolarda veya python yorumlayıcısında kullanılabilir.

These functions are part of the [Draft Workbench](/Draft_Workbench "Draft Workbench") and can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console once the `Draft` module has been imported.

Örnek:

```
import FreeCAD, Draft

myrect = Draft.makeRectangle(4, 3)
mydistance = FreeCAD.Vector(2, 2, 0)
Draft.move(myrect, mydistance)

```

![](/images/Method.png)  **cut (** *FreeCAD.Object, FreeCAD.Object* **)**

**Description**: Verilen 2 nesnenin farkından yapılan bir kesim nesnesi döndürür. Orijinal nesneler gizlenir.

**Returns**: Yeni oluşturulan nesne

![](/images/Method.png)  **extrude (** *FreeCAD.Object, Vector* **)**

**Description**: Verilen nesneyi vektör tarafından verilen yönde çıkarır. Orijinal nesne gizlenir.

**Returns**: Yeni oluşturulan nesne

![](/images/Method.png)  **formatObject (** *FreeCAD.Object, [FreeCAD.Object]* **)**

**Description**: Bu işlev, Taslak araç çubuğundaki geçerli özellikleri verilen hedef nesneye uygular (çizgi rengi ve çizgi genişliği) veya verilirse ikinci bir nesnenin özelliklerini kopyalar. Ayrıca inşaat düğmesine basıldığında nesneyi inşaat grubuna yerleştirir.

**Returns**: Nothing

![](/images/Method.png)  **fuse (** *FreeCAD.Object, FreeCAD.Object* **)**

**Description**: Verilen 2 nesnenin birleşiminden yapılan nesneyi döndürür. Nesneler düzlemsel ise, özel bir Taslak Teli kullanılır, aksi takdirde nihai nesne standart bir Kısım sigortasıdır.

**Returns**: Yeni oluşturulan nesne

![](/images/Method.png)  **getDraftPath (** *[string]* **)**

**Description**: Taslak modülünün bulunduğu kullanıcıyı veya sistem yolunu döndürür den çalışıyor. Bir alt yol veya bir dosya adı verilirse, Taslak modülündeki alt yolun tam yolu döndürülür.

**Returns**: Bir dosya yolu

![](/images/Method.png)  **getGroupContents (** *list* **)**

**Description**: Gruplar için verilen listeyi tekrar tekrar tarar. Gruplarla karşılaşılırsa, içerikleri listeye eklenir.

**Returns**: FreeCAD Nesnelerinin bir listesi

![](/images/Method.png)  **getRealName (** *string* **)**

**Description**: Bir takip eden sayıları bir nesne adından soyar.

**Returns**: Soyulmuş nesne adı

![](/images/Method.png)  **getSelection (****)**

**Description**: Geçerli FreeCAD seçimini döndürür.

**Returns**: Geçerli FreeCAD seçimidir.

![](/images/Method.png)  **makeCircle (** *radius, [yerleşim], [facemode], [startangle], [endangle]* **)**

**Description**: Verilen yarıçapı olan bir daire nesnesi oluşturur. Yerleşim verilirse kullanılır. Yüz modu Yanlış ise, daire bir tel kafes olarak gösterilir, aksi halde yüz olarak gösterilir. Startangle ve endangle verilirse (derece cinsinden) kullanılırlar ve nesne bir yay gibi görünür.

**Returns**: Yeni oluşturulan nesne.

![](/images/Method.png)  **makeDimension (** *Vector, Vector, [Vector] veya FreeCAD.Object, int, int, [Vector]* **)**

**Description**: İlk ve ikinci vektörler arasındaki mesafeyi ölçen bir Ölçümlendirme nesnesi oluşturur, eğer varsa boyut çizgisi üçüncü vektörden geçer. Taslak araç çubuğundan geçerli çizgi genişliği ve rengi kullanılacaktır. 2 vektör yerine, bir FreeCAD nesnesini ve iki tam sayıyı (ve isteğe bağlı olarak boyut çizgisinin geçmesi gereken bir vektör) geçirebilirsiniz. Bu durumda boyut, nesneyle ilişkilendirilir ve verilen iki indeks numarası ile gösterilen iki köşesini ölçer.

**Returns**: Yeni oluşturulan nesne.

![](/images/Method.png)  **makeLine (** *Vector, Vector* **)**

**Description**: Arasında bir çizgi oluşturur. verilen iki vektör. Taslak araç çubuğundan geçerli çizgi genişliği ve rengi kullanılacaktır.

**Returns**: Yeni oluşturulan nesne.

![](/images/Method.png)  **makeRectangle (** *uzunluk, genişlik, [yerleştirme], [facemode]* **)**

**Description**: X yönünde ve uzunluğunda bir Dikdörtgen nesnesi oluşturur. Y yönünde yükseklik. Yerleşim verilirse kullanılır. Yüz modu Yanlış ise, dikdörtgen bir tel kafes, aksi halde yüz olarak gösterilir. Taslak araç çubuğundan geçerli çizgi genişliği ve rengi kullanılacaktır.

**Returns**: Yeni oluşturulan nesne.

![](/images/Method.png)  **makeText (** *string veya list, [Vector], [screenmode]* **)**

**Description**: Belirtilen noktada bir Text nesnesi oluşturur dize veya listede verilen dizeleri, bir dizgiyi içeren bir vektör sağlanır. Taslak araç çubuğundan geçerli renk ve tercihlerde belirtilen metin yüksekliği ve yazı tipi kullanılır. Ekran modu True ise, metin her zaman görünüm yönüne bakar, aksi takdirde XY düzleminde kalır.

**Returns**: Yeni oluşturulan nesne.

![](/images/Method.png)  **makeWire (** *list veya Part.Wire, [kapalı], [yerleşim], [ facemode]* **)**

**Description**: Verilen vektör listesinden veya verilen Wire'dan bir DWire nesnesi oluşturur. Kapalı Doğru ise veya ilk ve son noktalar aynıysa, tel kapalıdır. Yüz modu Doğru ise (ve kablo kapalıysa), tel dolu görünecektir. Taslak araç çubuğundan geçerli çizgi genişliği ve rengi kullanılacaktır.

**Returns**: Yeni bir Taslak DWire (Parça Tel değil).

![](/images/Method.png)  **move (** *FreeCAD.Object veya list, Vector, [copymode]* **)**

**Description**: Verilen nesneyi taşır veya verilen listede yer alan ve belirtilen vektör tarafından belirtilen doğrultuda ve mesafedeki nesneler. Copymode True ise, gerçek nesneler taşınmaz, ancak kopyalar bunun yerine oluşturulur.

**Returns**: Nesneler (veya copymode True ise kopyaları).

![](/images/Method.png)  **precision (****)**

**Description**: Taslak kullanıcı ayarlarından hassas değeri döndürür.

**Returns**: Bir tamsayı.

![](/images/Method.png)  **rotate (** *FreeCAD.Object veya list, angle, [center], [axis], [copymode]* **)**

**Description**: Verilen nesneyi veya içerdiği nesneleri döndürür Verilen listede, verilen merkez etrafında verilen açı ile, ekseni dönme ekseni olarak kullanma. Eksen ihmal edilirse, dönüş dikey Z ekseni etrafında olacaktır. Copymode True ise, gerçek nesneler taşınmaz, ancak kopyalar bunun yerine oluşturulur.

**Returns**: Nesneler (veya kopyaları).

![](/images/Method.png)  **scale (** *FreeCAD.Object veya list, vector, [center], [copymode]* **)**

**Description**: Verilen nesneyi veya verilen listede yer alan nesneleri verilen vektör tarafından tanımlanan ölçek faktörleriyle ölçeklendirir (X, Y ve Z dizinlerinde)

**Returns**: {{{4}}}

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_API/tr&oldid=621887>"