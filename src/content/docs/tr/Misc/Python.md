---
title: Python
---
## Tanım

[Python](https://www.python.org) genel amaçlı, büyük uygulamalarda komut dosyası veya [makro](/Macros/tr "Macros/tr") oluşturarak bazı görevleri otomatikleştirmek için yaygın olarak kullanılan yüksek seviye bir programlama dilidir.

FreeCAD'de, Python kodu, grafiksel kullanıcı arayüzüne tıklamak zorunda kalmadan programatik olarak çeşitli elemanlar oluşturmak için kullanılabilir. Ek olarak, FreeCAD'in birçok aracı ve tezgahı Python'da programlanmıştır.

Python programlama dili hakkında bilgi edinmek için [Python'a Giriş](/Introduction_to_Python/tr "Introduction to Python/tr") 'e, ardından da FreeCAD'de komut dosyasını başlatmak için [Python betik kılavuzu](/Python_scripting_tutorial/tr "Python scripting tutorial/tr") ve [FreeCAD betik kılavuzu](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr")' ne bakın.

## Readability

Python kodunu yazarken [Python Kodu için Stil Kılavuzu](https://www.python.org/dev/peps/pep-0008/PEP8:) 'nu takip etmeniz önerilir.

These documents present explanations in a more user-friendly way:

* [How to Write Beautiful Python Code With PEP 8](https://realpython.com/python-pep8/)
* [Documenting Python Code: A Complete Guide](https://realpython.com/documenting-python-code/).

## Kurallar

Bu belgede, Python örnekleri için bazı kurallara uyulmalıdır.

Bu tipik bir fonksiyon imzasıdır.

```
Wire = make_wire(pointslist, closed=False, placement=None, face=None, support=None)

```

* Anahtar / değer çiftlerine sahip bağımsız değişkenler, imzada belirtilen varsayılan değerlerle isteğe bağlıdır. Bu, aşağıdaki çağrıların eşdeğer olduğu anlamına gelir:

```
Wire = make_wire(pointslist, False, None, None, None)
Wire = make_wire(pointslist, False, None, None)
Wire = make_wire(pointslist, False, None)
Wire = make_wire(pointslist, False)
Wire = make_wire(pointslist)

```

:   Bu örnekte, ilk argüman varsayılan bir değere sahip değildir, bu yüzden her zaman dahil edilmelidir.

* Argümanlar açık anahtarla verildiğinde, isteğe bağlı argümanlar herhangi bir sırayla verilebilir. Bu, aşağıdaki çağrıların eşdeğer olduğu anlamına gelir:

```
Wire = make_wire(pointslist, closed=False, placement=None, face=None)
Wire = make_wire(pointslist, closed=False, face=None, placement=None)
Wire = make_wire(pointslist, placement=None, closed=False, face=None)
Wire = make_wire(pointslist, support=None, closed=False, placement=None, face=None)

```

* Python kuralları, kodun okunabilirliğini vurgulamaktadır; Özellikle parantezler hemen fonksiyon ismini takip etmeli ve boşluk virgül takip etmelidir.

```
p1 = Vector(0, 0, 0)
p2 = Vector(1, 1, 0)
p3 = Vector(2, 0, 0)
Wire = make_wire([p1, p2, p3], closed=True)

```

* Kodun birkaç satır üzerinden kesilmesi gerekiyorsa, bu parantez veya parantez içindeki virgül ile yapılmalıdır; ikinci satır öncekiyle aynı hizada olmalıdır.

```
a_list = [1, 2, 3,
          2, 4, 5]

Wire = make_wire(pointslist,
                False, None,
                None, None)

```

* İşlevler, başka bir çizim işlevinin temeli olarak kullanılabilecek bir nesneyi döndürebilir.

```
Wire = make_wire(pointslist, closed=True, face=True)
Window = make_window(Wire, name="Big window")

```

## İçe Aktarma

Python fonksiyonları, modül adı verilen dosyalarda saklanır. Bu modülde herhangi bir işlevi kullanmadan önce, modül  `import` talimatı ile belgeye dahil edilmelidir.

Bu, önceden eklenmiş işlevler yaratır, yani, `module.function ()`. Bu sistem, aynı adlı ancak farklı modüllerden gelen işlevlerle ad çakışmalarını önler. Örneğin,  `Arch.makeWindow ()` ve  `myModule.makeWindow ()` iki işlevi sorunsuz bir şekilde bir arada bulunabilir.

Tam örnekler, gerekli içe aktarmaları ve önceden belirlenmiş fonksiyonları içermelidir.

```
import FreeCAD as App
import Draft

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1, 1, 0)
p3 = App.Vector(2, 0, 0)
Wire = Draft.make_wire([p1, p2, p3], closed=True)

```

```
import FreeCAD as App
import Draft
import Arch

p1 = App.Vector(0, 0, 0)
p2 = App.Vector(1, 0, 0)
p3 = App.Vector(1, 1, 0)
p4 = App.Vector(0, 2, 0)
pointslist = [p1, p2, p3, p4]

Wire = Draft.make_wire(pointslist, closed=True, face=True)
Structure = Arch.make_structure(Wire, name="Big pillar")

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Python/tr&oldid=1461227>"