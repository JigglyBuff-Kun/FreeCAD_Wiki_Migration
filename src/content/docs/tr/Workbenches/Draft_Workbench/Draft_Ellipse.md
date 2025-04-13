---
title: Taslak Elips
---
|  |
| --- |
| Elips |
| Menü konumu |
| Taslak → Elips |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| E L |
| Versiyonda tanıtıldı |
| 0.7 |
| Ayrıca bkz |
| [Çember](/Draft_Circle/tr "Draft Circle/tr"), [Yay](/Draft_Arc/tr "Draft Arc/tr") |
|  |

## Tanım

Elips aracı, elipsin sığacağı dikdörtgen bir kutunun köşesini tanımlayarak iki nokta girerek mevcut [Çalışma düzlemi](/Draft_SelectPlane/tr "Draft SelectPlane/tr") içinde bir elips oluşturur. [Taslak Tepsi](/index.php?title=Draft_Tray/tr&action=edit&redlink=1 "Draft Tray/tr (page does not exist)") Görevler sekmesinde önceden ayarlanmış olan [Çizgi stili](/Draft_Linestyle/tr "Draft Linestyle/tr") alır.

Bu araç, başlangıç ve bitiş açılarını belirleyerek eliptik yaylar oluşturmak için de kullanılabilir. Çember ve dairesel yaylar oluşturmak için [Çember](/Draft_Circle/tr "Draft Circle/tr") ve [Yay](/Draft_Arc/tr "Draft Arc/tr") araçlarını kullanın. [BSpline](/Draft_BSpline/tr "Draft BSpline/tr") ve [Bezier eğrisi](/Draft_BezCurve/tr "Draft BezCurve/tr") araçlarını kullanarak da bir eliptik veya dairesel yay yaklaştırabilirsiniz.

![](/images/Draft_ellipse_example.jpg)

Dikdörtgen köşeleri tarafından tanımlanan elips

## Usage

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Nasıl kullanılır

1. ![](/images/Draft_Ellipse.png) Elips düğmesine basın veya  E ardından  L tuşları.
2. 3d görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* **Göreceli**moduna geçmek için R tuşuna basın veya onay kutusunu tıklayın. Göreceli mod açıksa, ikinci noktanın koordinatları birincisine göredir; değilse, kesindir, kökenlerinden alınır (0,0,0).
* **Devam**moduna geçmek için T tuşuna basın veya onay kutusunu tıklayın. Devam modu açıksa, Elips aracı şekli tamamladıktan sonra yeniden başlatılır ve araç düğmesine tekrar basmadan bir tane daha çizmenize olanak sağlar.
* **Dolu**  moduna geçmek için L tuşuna basın veya onay kutusunu tıklayın. Dolu mod açıksa, elips dolu bir yüz oluşturur (VERİ**Make Face** `true`); değilse, elips bir yüz oluşturmaz (VERİ**Make Face** `false`).
* [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak, en yakın çeki konumuna yönlendirmek için çizim yaparken Ctrl tuşunu basılı tutun.
* İlk noktanıza göre ikinci noktanızı yatay veya dikey olarak [Kısıtlama](/Draft_Constrain/tr "Draft Constrain/tr") çizerken Shift tuşunu basılı tutun.
* Geçerli komutu iptal etmek için Esc veya Kapat düğmesine basınız.

## Notes

* A Draft Ellipse can be edited with the [Draft Edit](/Draft_Edit "Draft Edit") command.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* If the **Edit → Preferences... → Draft → General → Create Part primitives if possible** option is checked, the command will create a [Part Ellipse](/Part_Ellipse "Part Ellipse") instead of a Draft Ellipse.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Ellipse object is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject") and inherits all its properties. It also has the following additional properties:

### Data

Draft

### Veri

* VERİ**First Angle**: elipsin ilk noktasının açısını belirtir; normalde 0°.
* VERİ**Last Angle**: elipsin son noktasının açısını belirtir; normalde 0°.
* VERİ**Major Radius**: elipsin ana yarıçapını belirtir.
* VERİ**Minor Radius**: elipsin küçük yarıçapını belirtir.

:   Her iki yarıçap da aynı değere sahipse, elips bir [Taslak Çember](/Draft_Circle/tr "Draft Circle/tr") ile aynı görünür.

* VERİ**Make Face**: Elipsin bir yüz yapıp yapmayacağını belirtir. Eğer `true` ise bir yüz yaratılır, aksi takdirde sadece çevre nesnenin bir parçası olarak kabul edilir. Bu özellik, yalnızca şekil tam bir elips ise çalışır.

:   Tam bir elips olması için VERİ**First Angle** ve VERİ**Last Angle** aynı değere sahip olmalıdır; Aksi takdirde, eliptik bir yay görüntülenir. 0° ve 360° değerleri aynı olarak kabul edilir.

### View

Draft

### Görünüm

* GÖRÜNÜM**Desen**: şeklin yüzünü doldurmak için bir [Desen](/Draft_Pattern/tr "Draft Pattern/tr") belirtir. Bu özellik yalnızca VERİ**Yüz yapmak** `true` ise ve GÖRÜNÜM**Ekran modu** "Düz Çizgiler" ise çalışır.
* GÖRÜNÜM**Desen boyutu**: [Desen](/Draft_Pattern/tr "Draft Pattern/tr") 'inin boyutunu belirtir.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Elips aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
ellipse = make_ellipse(majradius, minradius, placement=None, face=True, support=None)

```

* Milimetre cinsinden verilen büyük (`majradius`) ve küçük (`minradius`) yarıçapı ile bir `Ellipse` nesnesi oluşturur.
  + Başka bir yerleşim yapılmazsa, büyük yarıçap (X ekseni) için daha büyük değer kullanılacaktır.
* Bir `placement` verilirse kullanılır; Aksi halde, şekil başlangıçta oluşturulur.
* Eğer `face` `True` ise, elips bir yüz yapacaktır, yani dolu görünecektir.

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

ellipse1 = Draft.make_ellipse(3000, 200)
ellipse2 = Draft.make_ellipse(700, 1000)

zaxis = App.Vector(0, 0, 1)
p3 = App.Vector(1000, 1000, 0)
place3 = App.Placement(p3, App.Rotation(zaxis, 90))

ellipse3 = Draft.make_ellipse(700, 1000, placement=place3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Ellipse/tr&oldid=1472937>"