---
title: Özellik listesi
---

FreeCAD'in uyguladığı özelliklerin kapsamlı bir listesidir, dolayısıyla tam değildir. Gelecek dönemler için [Geliştirme yol haritasına](/Development_roadmap "Development roadmap") bakın veya hızlı bir şekilde göz gezdirmek için [Ekran görüntülerine](/Screenshots "Screenshots") bir göz atın.

## Sürüm Notları

- [Sürüm 0.11](/Release_notes_0.11 "Release notes 0.11") - Mart 2011
- [Sürüm 0.12](/Release_notes_0.12 "Release notes 0.12") - Aralık 2011
- [Sürüm 0.13](/Release_notes_0.13 "Release notes 0.13") - Ocak 2013
- [Sürüm 0.14](/Release_notes_0.14 "Release notes 0.14") - Mart 2014
- [Sürüm 0.15](/Release_notes_0.15 "Release notes 0.15") - Mart 2015
- [Sürüm 0.16](/Release_notes_0.16 "Release notes 0.16") - Nisan 2016
- [Sürüm 0.17](/Release_notes_0.17 "Release notes 0.17") - Nisan 2018

## Genel Özellikler

### Temel Uygulama

- ![](/images/Feature1.jpg)

  [Open CASCADE Technology](http://en.wikipedia.org/wiki/Open_CASCADE)-tabanlı **geometri çekirdeği**, karmaşık şekiller üzerinde, brep , eğriler ve yüzeyler, çeşitli geometrik şekiller, boolean işlemler ve dolgular, yerel destekli STEP ve IGES formatları gibi çeşitli yerel konseptlerle, karmaşık 3D işlemler yapmanıza olanak tanır.

- ![](/images/Feature3.jpg)

  **Tam parametrik bir model**. Tüm FreeCAD objeleri doğal olarak parametriktir, yani şekilleri [özelliklere dayal](/Property "Property")ı olabilir veya hatta diğer nesnelere bağlı olabilir, tüm değişiklikler talep üzerine yeniden hesaplanır ve geri al/yenile yığınıyla kaydedilir. [Tamamıyla Python'da kodlanan](/Scripted_objects "Scripted objects") yeni nesne türleri kolayca eklenebilir.

- ![](/images/Feature4.jpg)

  **Modüler mimari** eklentiler (modüller) sayesinde ana uygulamaya işlevsellik ekler. Bu uzantılar C ++ 'da programlanan tüm yeni uygulamalar kadar karmaşık veya [Python betikleri](/Power_users_hub "Power users hub") veya kendi kendine kaydedilen [makrolar](/Macros "Macros") kadar basit olabilir. **Python** yerleşik yorumlayıcısından; [geometri oluşturma ve dönüştürme](/Topological_data_scripting "Topological data scripting"),bu geometrinin 2D veya 3D gösterimi([sahne grafiği](/Scenegraph "Scenegraph")) hatta [FreeCAD arayüzüne](/PySide "PySide") , makrolar veya harici komut dosyalarından FreeCAD'in hemen hemen tüm kısımlarına erişebilirsiniz.

- ![](/images/Feature5.jpg)

  FreeCAD'in [Fcstd dosya formatına](/Fcstd_file_format "Fcstd file format") ek olarak [STEP](http://en.wikipedia.org/wiki/ISO_10303), [IGES](http://en.wikipedia.org/wiki/IGES), [OBJ](http://en.wikipedia.org/wiki/Obj), [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [DXF](http://en.wikipedia.org/wiki/Dxf), [SVG](http://en.wikipedia.org/wiki/Svg), [STL](<http://en.wikipedia.org/wiki/STL_(file_format)>), [DAE](http://en.wikipedia.org/wiki/COLLADA), [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) veya [OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html), [NASTRAN](http://en.wikipedia.org/wiki/NASTRAN), [VRML](http://en.wikipedia.org/wiki/VRML) gibi dosya formatları da desteklenmektedir ve Dosya al/Dosya ver ile kullanılabilmektedir. FreeCAD ve verilen bir dosya formatı arasındaki uyumluluk seviyesi, onu uygulayan modüle bağlı olduğu için değişebilir.

- ![](/images/Feature7.jpg)

  Geometri kısıtlı 2D şekillerin çizilmesine izin veren kısıtlayıcı-çözücülü bir [Eskiz](/Sketcher_Workbench "Sketcher Workbench") . Eskiz, şu anda birkaç tip sınırlı geometri oluşturmanıza ve bunları FreeCAD boyunca başka nesneler oluşturmak için bir temel olarak kullanmanıza izin vermektedir.

- ![](/images/Feature9.jpg)

  [Robot simülasyon](/Robot_Workbench "Robot Workbench") modülü Robot hareketlerini incelemek için kullanılır. Robot modülünde, yalnızca GUI iş akışına izin veren genişletilmiş bir grafik arabirim vardır.

- ![](/images/Feature8.jpg)

  [Teknik resim modülü](/TechDraw_Workbench "TechDraw Workbench") Ayrıntı görünümü, kesitler, boyutlandırma ve benzeri seçeneklerle geleneksel çizim sayfaları oluşturmak için 3 boyutlu modellerin 2D görünümlerini bir sayfaya koymanıza olanak veren yeni ve kolay bir modül. Bu modülle SVG veya PDF şeklinde kaydedilebilecek sayfalar üretilir.Eski [Çizim modülü](/Drawing_Workbench "Drawing Workbench") Arayüzde çok az araç bulundurur ancak Pythonla işlevselliği yüksektir.

- ![](/images/Feature-raytracing.jpg)

  [Rendering](/Raytracing_Workbench "Raytracing Workbench") modülü,başka render uygulamalarında kullanılmak üzere 3D nesneleri farklı formatlarda dosyalara kaydedebiliyorsunuz. Şu anda sadece [povray](http://en.wikipedia.org/wiki/POV-Ray) ve [LuxRender](http://en.wikipedia.org/wiki/LuxRender) uygulamalrını desteklemektedir. Ancak gelecekte daha fazla renderer uygulamasını destekleyeceğini umuyoruz.

- ![](/images/Feature-arch.jpg)

  [Mimari(yapı)](/Arch_Workbench "Arch Workbench") modülü, [BIM](http://en.wikipedia.org/wiki/Building_Information_Modeling) benzeri iş akışı ve [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) uyumluluğuna sahiptir..

- ![](/images/Feature-CAM.jpg)

  [Path modülü](/Path_Workbench "Path Workbench") Frezeleme gibi (CAM) mekanik işlemler içindir ve [G code](http://en.wikipedia.org/wiki/G-code) çıktısını alabilir, gösterebilir ve ayarlayabilir ..

- ![](/images/Feature_spreadsheet.png)

  [Entegre Elektronik Tablo](/Spreadsheet_Workbench "Spreadsheet Workbench") ve [ifade ayrıştırıcı](/Expressions "Expressions") Formül tabanlı modelleri oluşturmak veya modellerden veri almak için kullanılırlar.

## Genel Özellikler:

- **FreeCAD, multi-platform bir uygulamadır**. Windows,Linux ve macOS platformlarında da aynı şekilde çalışır ve davranır.

- **FreeCAD tam bir GUI uygulamasıdır**. FreeCAD, ünlü [Qt](http://www.qtsoftware.com/) framework'e dayanan, tam bir Grafiksel Kullanıcı Arayüzüne sahiptir ve 3D görüntüleyici [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor) ile 3D sahnelerin hızlı bir şekilde oluşturulmasını ve erişilebilir bir sahne grafiği sunumunu sağlar.

- **FreeCAD ayrıca bir komut satırı uygulaması olarak da çalışır**. Bellek kullanımı çok azdır.Komut satırı modunda, FreeCAD arayüzü olmadan ancak tüm geometri araçları ile çalışır. Örneğin, diğer uygulamalara içerik üretmek için sunucu olarak kullanılabilir.

- **FreeCAD, [Python modülü](/Embedding_FreeCAD "Embedding FreeCAD") olarak** , Python komut dosyalarını çalıştırabilen diğer uygulamaların içine veya bir Python konsoluna alınabilir. Konsol kipinde olduğu gibi, FreeCAD'in arayüz kısmı kullanılamaz, ancak tüm geometri araçlarına erişilebilir.

- **Tezgah konsepti**: FreeCAD arayüzünde, aletler [tezgahlar](/Workbenches "Workbenches") şeklinde gruplanır . Bu, çalışma alanını düzenli,işlevsel ve uygulamayı hızlı bir şekilde yükleyerek, yalnızca belirli bir görevi gerçekleştirmek için kullanılan araçları görüntülemenizi sağlar.

- **Özelliklerin/veri türlerinin sonradan yüklenebilmesi için Eklenti/Modül framework'ü**. FreeCAD, yalnızca ihtiyaç duyulduğunda yüklenen çekirdek bir uygulamaya ve modüllere ayrılmıştır. Hemen hemen tüm aletler ve geometri türleri modüllerde depolanır. Modüller eklentiler gibi davranır ve mevcut bir FreeCAD kurulumuna eklenebilir veya kaldırılabilir.

- **Parametrik ilişkisel belge nesneleri**: Bir FreeCAD belgesindeki tüm nesneler parametrelerle tanımlanabilir. Bu parametreler anında değiştirilebilir ve her zaman yeniden hesaplanabilir. Nesneler arasındaki ilişki de depolanır, dolayısıyla bir nesneyi değiştirmek aynı zamanda bağımlı nesnelerini de değiştirir.

- **Parametrik ilkel oluşturma** (kutu, küre, silindir vb.)

- 3D alanın herhangi bir düzleminde çeviri, döndürme, ölçekleme, yansıtma, ofset (önemsiz veya [Jung/Shin/Choi](https://www.researchgate.net/publication/240754626_Self-intersection_Removal_in_Triangular_Mesh_Offsetting) sonrası ) veya şekil dönüştürme gibi grafiksel **modifikasyon işlemleri**

- **[Boole işlemleri](http://en.wikipedia.org/wiki/Constructive_solid_geometry)**(birleşme, fark , kesişme)

- 3D uzayın herhangi bir düzleminde çizgiler, teller, dikdörtgenler, b-splinelar, dairesel veya eliptik yaylar gibi **düzlemsel geometrik** şekillerin grafiksel olarak oluşturulması

- Düz veya devirli **ekstrüzyon** , **kesit** ve **dolgu** modellemesi.

- **Köşeler , kenarlar, teller ve düzlemler** gibi topolojik bileşenler (ayrıca Python komut dosyası aracılığıyla).

- Kafesler için **test ve tamir araçları**: katı testi, iki manifoldlu olmayan test, kendinden kesişim testi, delik doldurma ve düzgün yönlendirme.

- Metin veya boyut gibi **ek açıklamalar**

- **Geri Al/Yinele framework'u**: geri alma yığın erişimi ile her şey geri alınabilir/yinelenebilir, bu nedenle bir kerede birden fazla adım geri alınabilir.

- **İşlem yönetimi**: Geri alma/yinele yığını, her bir aracın tam olarak ne yapılması gerektiğini veya yeniden yapılması gerektiğini tanımlamasına olanak tanıyan tek işlemleri değil, belge işlemlerini saklar.

- **Yerleşik [betik](/Scripting "Scripting") framework'u** : FreeCAD, yerleşik bir [Python](http://www.python.org/) yorumlayıcısı ve uygulamanın hemen hemen her bölümünü, arayüzü, geometriyi ve bu geometrinin 3D görüntüleyicideki temsilini kapsayan bir API'ye sahiptir. Yorumlayıcı, karmaşık komut dosyalarına kadar tek bir komut çalıştırabilir, hatta tüm modüller Python'da bile tamamen programlanabilir.

- **Yerleşik Python konsolu** söz dizim vurgulaması, otomatik tamamlama ve sınıf tarayıcısına sahip: Python komutları doğrudan FreeCAD'e verilebilir ve anında sonuç döndürür, anında kod yazarlarının işlevselliği test etmesine, modüllerin içeriğini keşfetmesine ve FreeCAD içindekileri kolayca öğrenmesine izin verir.

- **Konsolda kullanıcı etkileşimi yansıtma**: Kullanıcının FreeCAD arayüzünde yaptığı her şey, konsolda basılabilen ve makrolara kaydedilebilen Python kodunu çalıştırır.

- **Tam makro kayıt ve düzenleme** : Kullanıcı, arayüzü kullandığında, verilen Python komutları daha sonra kaydedilebilir, gerekirse düzenlenebilir ve daha sonra yeniden üretilmek üzere kaydedilebilir.

- **Bileşik (ZIP tabanlı) belge kaydetme formatı** : FreeCAD belgeleri [fcstd](/Fcstd_file_format "Fcstd file format") uzantısı ile kaydedilir ve içeriğinde geometri, komut dosyaları veya küçük resim simgeleri gibi birçok farklı türde bilgi bulunabilir. .Fcstd dosyasının kendisi bir zip konteyneridir, bu nedenle kaydedilmiş bir FreeCAD dosyası zaten sıkıştırılmıştır.

- **Tamamen özelleştirilebilir/betik Grafik Kullanıcı Arayüzü** . [Qt](http://www.qtsoftware.com) tabanlı FreeCAD arayüzü, Python yorumlayıcısı aracılığıyla tamamen erişilebilir. FreeCAD'in çalışma tezgahlarına sağladığı basit fonksiyonların yanı sıra, tüm Qt framework' te erişilebilir, böylece GUI üzerinde widget'lar ve araç çubukları oluşturma, ekleme, yerleştirme, değiştirme veya kaldırma gibi herhangi bir işlem yapılabilir.

- **Simge**(şu anda yalnızca Linux sistemleri): FreeCAD belge simgeleri, Gnome's Nautilus gibi çoğu dosya yöneticisi uygulamasında dosyanın içeriğini gösterir.

- **Modüler bir MSI kurulum programı**, Windows sistemlerinde esnek kurulumlara izin verir. Ubuntu sistemleri için paketler de yapılmaktadır.

## Extra Workbenches

## Ekstra Tezgahlar

Uzman kullanıcılar, çeşitli özel [dış tezgahlar](/External_workbenches "External workbenches") oluşturuyorlar.

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_list/tr&oldid=1456935>"
