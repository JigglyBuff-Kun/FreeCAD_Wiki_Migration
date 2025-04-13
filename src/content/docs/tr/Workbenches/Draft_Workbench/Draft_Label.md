---
title: Taslak Etiket
---
|  |
| --- |
| Etiket |
| Menü konumu |
| Taslak → Etiket |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| D L |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Metin](/Draft_Text/tr "Draft Text/tr"), [Şekil dizesi](/Draft_ShapeString/tr "Draft ShapeString/tr") |
|  |

## Tanım

Etiket aracı, 2 segmentli bir lider satırı ve bir ok içeren çok satırlı bir metin kutusu ekler. Komutu başlatırken bir nesne veya bir alt eleman (yüz, kenar veya tepe) seçilirse, Etiket, konum, uzunluk, alan, hacim veya malzeme de dahil olmak üzere seçilen öğenin belirli bir niteliğini görüntülemek için yapılabilir.

If an object or a sub-element (face, edge or vertex) is selected when starting the command, the text can be made to display one or two attributes of the selected element, including position, length, area, volume and material. The text will then be linked to the attributes and will update if their values change.

Oksuz daha basit bir metin elemanı eklemek için [Metin](/Draft_Text/tr "Draft Text/tr") kullanın. Düz metin şekilleri oluşturmak için [Şekil dizesi](/Draft_ShapeString/tr "Draft ShapeString/tr") ile [Parça Çıkar](/Part_Extrude/tr "Part Extrude/tr") kullanın.

![](/images/Draft_Label_example.jpg)

Farklı yönelimleri, ipucu sembolleri ve bilgileri içeren çeşitli etiketler

## Nasıl Kullanılır

See also: [Draft Tray](/Draft_Tray "Draft Tray"), [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. ![](/images/Draft_Label.png) Etiket düğmesine basın veya  D ardından  L tuşlarına basın.
2. 3D görünümde bir ilk noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. Bu nokta hedefi gösterir (ok başı). Bu herhangi bir yerde olabilir, bir unsur olması gerekmez.
3. 3D görünümünde ikinci bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. Bu nokta yatay veya dikey bir liderin başlangıcını gösterir.
4. 3D görünümünde üçüncü bir noktaya tıklayın veya bir koordinat yazın ve  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basın. Bu nokta metnin temel noktasını gösterir.

## Seçenekler

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

* "Özel", "Ad", "Etiket", "Konum", "Uzunluk", "Alan", "hacim" dahil "Görüntülenecek bilgi türünü seçmek için  Label type tıklayın. "başlık" ve "Malzeme" olarak etiketleyin.
* Koordinatları manuel olarak girmek için sayıları girin, ardından her bir X, Y ve Z bileşeni arasında  Enter tuşuna basın. Noktayı yerleştirmek istediğiniz değerleri aldığınızda  ![](/images/Draft_AddPoint.svg) Nokta ekle düğmesine basabilirsiniz.
* Etiketi yerleştirirken,  [Yakalama](/Draft_Snap/tr "Draft Snap/tr") noktanızı mesafeden bağımsız olarak en yakın çıtçıt konumuna zorlamak için  Ctrl tuşunu basılı tutun.
* Geçerli komutu iptal etmek için  Esc veya  Close tuşuna basınız.

## Etiket türleri

The following label types are available:

* *Custom:*, Veri **Custom Text** içeriğini görüntüler.
* *Name:* hedef nesnenin dahili adını görüntüler; iç ad, yaratılış zamanında nesneye atanır ve nesnenin varlığı boyunca sabit kalır.
* *Label:* hedef nesnenin etiketini görüntüler; Nesnenin etiketi kullanıcı tarafından herhangi bir zamanda değiştirilebilir.
* *Position:*, hedef nesnenin taban noktasının, hedef köşenin veya varsa, hedef alt öğenin kütle merkezinin koordinatlarını görüntüler.
* *Length:*, varsa, hedef alt öğenin uzunluğunu gösterir.
* *Area:*, eğer varsa, hedef alt öğenin alanını gösterir.
* *Volume:*, eğer varsa, hedef nesnenin hacmini gösterir.
* *Tag:*, örneğin [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") ile oluşturulan nesneler gibi bir özelliğe sahipse, hedef nesnenin  `Tag` özniteliğini görüntüler.
* *Material:*, hedef nesnenin böyle bir özelliği varsa, hedef nesnenin malzemesinin etiketini görüntüler.

## Notes

*Not:* yatay düz parçanın yönü, sağa veya sola doğru, metni otomatik olarak ters yöne hizalar. Lider dikey olarak yukarı çıkarsa, metin sola hizalanır; dikey olarak aşağı inerse, sağa hizalanır.

## Özellikler

See also: [Property editor](/Property_editor "Property editor").

A Draft Label object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. The following properties are additional unless otherwise stated:

### Data

Label

### Veri

* Veri **Label Type**: bu etiket tarafından gösterilen bilgilerin türünü belirtir (aşağıya bakın).
* Veri **Custom Text**: Veri **Label Type** "Özel" olarak ayarlandığında veya etiket parametrik olmadığında görüntülenecek metin bloğunu belirtir. Metin dizelerin bir listesi olarak verilmiştir; listedeki her öğe, virgülle ayrılmış olarak, yeni bir metin satırı belirtir.
* Veri **Text**: (salt okunur), Veri **Label Type** 'e bağlı olarak etiket tarafından görüntülenen gerçek metni gösterir.
* Veri **Target Point**: liderin ipucunun konumunu belirtir.
* Veri **Straight Direction**: Liderin düz segmentinin yönünü yatay veya dikey olarak belirtir.
* Veri **Straight Distance**: metnin taban noktasından başlayarak satırın düz bölümünün uzunluğunu belirtir. Mesafe pozitifse, lider metnin sağ tarafından başlar ve metin sağa hizalanır; Aksi takdirde, lider metnin solundan başlar ve metin sola hizalanır.
* Veri **Position**: metin bloğunun ilk satırının taban noktasını belirtir; aynı zamanda liderin nasıl çizildiğini de etkiler.
* Veri **Angle**: metin bloğunun ilk satırının taban çizgisinin dönüşünü belirtir; ayrıca liderin nasıl çizileceğini de etkiler, çünkü artık yatay veya dikey olmayacaktır.
* Veri **Axis**: döndürme için kullanılacak ekseni belirtir.

Leader

* Veri**Points** (`VectorList`): specifies the points of the leader.
* Veri**Straight Direction** (`Enumeration`): specifies the direction of the first leader segment: `Custom`, `Horizontal` or `Vertical`.
* Veri**Straight Distance** (`Distance`): specifies the length of the first leader segment. Only used if Veri**Straight Direction** is `Horizontal` or `Vertical`. If the distance is positive, the leader starts from the right side of the text and the text aligns to the right. Otherwise the leader starts from the left side of the text and the text aligns to the left.

Target

* Veri**Target** (`LinkSub`): specifies the object and optional subelement the label is linked to.
* Veri**Target Point** (`Vector`): specifies the position of the tip of the leader, which is where the arrow is attached.

### View

Annotation

* Görünüm**Annotation Style** (`Enumeration`): specifies the annotation style applied to the label. See [Draft AnnotationStyleEditor](/Draft_AnnotationStyleEditor "Draft AnnotationStyleEditor").
* Görünüm**Scale Multiplier** (`Float`): specifies the general scaling factor applied to the label.

Display Options

* Görünüm**Display Mode** (`Enumeration`): specifies how the text is displayed. If it is `World` the text will be displayed on a plane defined by the Veri**Placement** of the label. If it is `Screen` the text will always face the screen. This is an inherited property. The mentioned options are the renamed options ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")).

Graphics

### Görünüm

* Görünüm **Metin Yazı Tipi**: metni çizmek için kullanılacak yazı tipini belirtir. "Arial" gibi bir font adı, "sans", "serif" veya "mono" gibi bir varsayılan stil, "Arial, Helvetica, sans" gibi bir aile veya "gibi bir stil içeren bir ad olabilir. Arial: "Kalın. Belirtilen font sistemde bulunmuyorsa, bunun yerine genel olan kullanılır.
* Görünüm **Text Size**: metnin boyutunu belirtir. Etiket nesnesi ağaç görünümünde oluşturulmuşsa ancak 3D görünümünde hiçbir metin görünmüyorsa, metnin boyutunu görünene kadar artırın.
* Görünüm **Text Alignment**: metnin taban çizgisinin öncüye göre dikey olarak hizalanmasını belirtir. Üst, orta veya alt olabilir.
* Görünüm **Text Color**: Bir RGB demetindeki metnin rengini belirtir (R, G, B).
* Görünüm **Line Width**: liderin genişliğini belirtir.
* Görünüm **Çizgi Rengi**: liderin rengini belirtir.
* Görünüm **Arrow Size**: liderin ucunda görüntülenen sembolün boyutunu belirtir.
* Görünüm **Arrow Type**: liderin ucunda görüntülenen, nokta, daire, ok veya kene olabilecek sembolün türünü belirtir.
* Görünüm **Frame**: "Dikdörtgen" ise, metnin etrafına bir çerçeve çizer.
* Görünüm **Line**: `true` ise, lider satır görüntülenecektir; Aksi halde, sadece baştaki metin ve sembol gösterilecektir.
* Görünüm **Display Mode**: "3B metin" ise, metin başlangıçta XY düzleminde olacak şekilde sahne eksenlerine hizalanır; "2B metin" ise, metin her zaman kameraya dönük olacaktır.

Text

* Görünüm**Font Name** (`Font`): specifies the font used to draw the text. It can be a font name, such as `Arial`, a default style such as `sans`, `serif` or `mono`, a family such as `Arial,Helvetica,sans`, or a name with a style such as `Arial:Bold`. If the given font is not found on the system, a default font is used instead. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Görünüm**Font Size** (`Length`): specifies the size of the letters. The text can be invisible in the [3D view](/3D_view "3D view") if this value is very small. [introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")
* Görünüm**Justification** (`Enumeration`): specifies the horizontal alignment of the text: `Left`, `Center` or `Right`. Only used if Veri**Straight Direction** is `Custom`. Otherwise the horizontal alignment is based on the sign (positive or negative) of Veri**Straight Distance**.
* Görünüm**Line Spacing** (`Float`): specifies the factor applied to the default line height of the text.
* Görünüm**Max Chars** (`Integer`): specifies the maximum number of characters on each line of the text.
* Görünüm**Text Alignment** (`Enumeration`): specifies the vertical alignment of the text: `Top`, `Middle` or `Bottom`.
* Görünüm**Text Color** (`Color`): specifies the color of the text.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Etiket aracı, aşağıdaki işlevi kullanarak [makrolar](/Macros/tr "Macros/tr") ve [Python](/Python/tr "Python/tr") konsolundan kullanılabilir:

```
label = make_label(target_point=App.Vector(0, 0, 0),
                   placement=App.Vector(30, 30, 0),
                   target_object=None, subelements=None,
                   label_type="Custom", custom_text="Label",
                   direction="Horizontal", distance=-10,
                   points=None)

```

Örnek:

```
import FreeCAD as App
import Draft

doc = App.newDocument()

rectangle = Draft.make_rectangle(4000, 1000)
doc.recompute()

p1 = App.Vector(-200, 1000, 0)
place1 = App.Placement(App.Vector(-1000, 1300, 0), App.Rotation())

label1 = Draft.make_label(p1, place1, target_object=rectangle, distance=500, label_type="Label")
label1.ViewObject.FontSize= 200

p2 = App.Vector(-200, 0, 0)
place2 = App.Placement(App.Vector(-1000, -300, 0), App.Rotation())

label2 = Draft.make_label(p2, place2, target_object=rectangle, distance=500, label_type="Custom",
                          custom_text="Beware of the sharp edges")
label2.ViewObject.FontSize= 200

p3 = App.Vector(1000, 1200, 0)
place3 = App.Placement(App.Vector(2000, 1800, 0), App.Rotation())

label3 = Draft.make_label(p3, place3, target_object=rectangle, distance=-500, label_type="Area")
label3.ViewObject.FontSize= 200

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Label/tr&oldid=1395260>"