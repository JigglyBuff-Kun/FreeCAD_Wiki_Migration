---
title: Başlangıç
---
## Önsöz

FreeCad, bir 3D CAD/CAE [parametrik modelleme uygulamasıdır.](/About_FreeCAD/tr "About FreeCAD/tr") Öncelikle mekanik tasarım için üretilmiş olup, aynı zamanda hassasiyet isteyen 3D modelleme ile model kayıtları üzerinde ayarlama gerektiren tüm alanlarda kullanılabilir.

FreeCAD geliştirme süreci devam etmekte olup, şu anda bir çok [özellik](/Feature_list/tr "Feature list/tr") barındırmaktadır. Özellikle ücretli emsalleriyle karşılaştırıldığında halen yeterli araçlara sahip olmamasına karşın, hobi alanında ve küçük atölyelerde ihtiyaçları karşılayabilecek yetenektedir. Hızla büyüyen, gönüllü kullanıcıların bulunduğu [FreeCAD forum](http://forum.freecadweb.org/index.php)'a katılarak, FreeCAD'le hazırlanmış [birçok kaliteli projeyi](https://forum.freecadweb.org/viewforum.php?f=24) inceleyebilirsiniz.

Tüm açık kaynak kodlu projelerde olduğu gibi, FreeCAD projesi de geliştiriciler tarafından size sunulan tek yönlü bir çalışma değildir. Gelişmesi, yeni özellikler kazanması ve kararlı(hataların düzeltilmesi) hale gelmesi kullanıcı topluluğuna bağlıdır. FreeCAD kullanırken unutmayın; eğer FreeCAD kullanmak hoşunuza gittiyse, sizde FreeCAD'in geliştirilmesine katkı sağlayabilir ve [FreeCAD'e yardım](/Help_FreeCAD "Help FreeCAD")  edebilirsiniz!

See also:

* [Migrating to FreeCAD from Fusion360](/Migrating_to_FreeCAD_from_Fusion360 "Migrating to FreeCAD from Fusion360")
* [Which workbench should I choose?](/Which_workbench_should_I_choose "Which workbench should I choose")
* [Tutorials](/Tutorials "Tutorials")
* [Video tutorials](/Video_tutorials "Video tutorials")

## Yükleme

Her şeyden önce, FreeCAD'i indirin ve kurun. Güncel sürüm ve güncellemeler hakkında bilgi almak için [İndirme](/Download "Download") sayfasını ve Yükleme talimatları için [Yükleme](/Installing "Installing") sayfasını ziyaret ediniz.Windows(.msi), Debian ve Ubuntu(.deb), openSUSE(.rpm) ve Mac OSX işletim sistemlerine yönelik Yükleme dosyaları mevcuttur. FreeCAD, diğer birçok Linux dağıtımında paket yöneticilerinden ulaşılabilir. Ayrıca güncel 64-bit Linux sistemlerde tek başına çalıştırılabilir [AppImage](https://appimage.org/) da bulunmaktadır. FreeCAD açık kaynak kodlu olduğu için, kaynak kodunu indirip, kendiniz de [derleyebilirsiniz.](/Compiling "Compiling")

## FreeCAD'i Keşfedin

![](/images/FreeCAD_interface_base_divisions.svg)

![](/images/FreeCAD_interface.png)

1. 3D görünüm alanı, belge içeriğini gösterir.
2. Ağaç görünüm alanı, belge içeriğindeki tüm nesnelerin hiyerarşisini ve yapım aşamalarını gösterir.
3. [Özellik editörü](/Property_editor "Property editor"), seçilen nesnenin özellikleri görüntülenebilir veya değişiklikler yapılabilir.
4. Rapor görünüm alanı (veya çıktı penceresi), FreeCAD'e ait mesajlar,uyarılar ve hata mesajları görüntülenir.
5. Python konsolu(komut satırı), FreeCAD tarafından çalıştırılan tüm komutlar görüntülenir ve Python kodu yazılabilir.
6. [Tezgah seçici](/Workbenches "Workbenches"), aktif tezgahın seçildiği yer.

FreeCAD arayüzünün arkasındaki anlayış, onun çalışma tezgahlarına ayrılmasıdır.Bir çalışma tezgahı, [Mesh çizimi](/Mesh_Workbench "Mesh Workbench") veya [2D nesnelerin](/Draft_Workbench "Draft Workbench") çizimi veya [limitli taslaklar](/Sketcher_Workbench "Sketcher Workbench") gibi belirli işler için uygun araçlardan oluşan koleksiyondur.Aktif çalışma tezgahı, Tezgah seçiciden değiştirilebilir(6).Her tezgah içerisinde bulunan araçlar, diğer tezgahlardan ve [makro](/Macros "Macros") olarak adlandırılan kullanıcı tarafından oluşturulan araçlar da eklenerek [özelleştirilebilir](/Interface_Customization "Interface Customization"). [Parça dizaynı tezgahı](/PartDesign_Workbench "PartDesign Workbench") ve [Parça tezgahı](/Part_Workbench "Part Workbench"), yaygın olarak kullanılan, çalışma başlangıç noktalarıdır.

FreeCAD ilk çalıştırıldığında, karşılama ekranı olarak başlangıç merkezi açılır.Sürüm 0.16 'ya ait karşılama ekranı görüntüdeki gibidir.

![](/images/Start_center_0.19_screenshot.png)

Başlangıç Merkezi ile yaygın olarak kullanılan tezgahları kolayca seçebilir, son kullanılan dosyaları açabilir veya FreeCAD dünyasından en son haberleri görebilirsiniz. Varsayılan çalışma tezgahını [tercih ayarlarından](/Preferences_Editor "Preferences Editor") değiştirebilirsiniz.

## 3D alanında gezinme

FreeCAD'in, farenizi, 3D görünümdeki nesnelerle ve görünümün kendisi ile etkileşimde bulunma şeklini değiştiren çeşitli [gezinme yöntemi](/Mouse_Model "Mouse Model") vardır. Bunlardan biri özellikle fare orta tuşunun kullanılmadığı [dokunmatik](/Mouse_Model#Touchpad_Navigation "Mouse Model") yüzeyler için üretilmiştir. Aşağıdaki tabloda, CAD Gezinme adı verilen, varsayılan mod açıklanmaktadır (3D görünümün boş bir alanına sağ tıklayarak mevcut gezinme modunu hızlı bir şekilde değiştirebilirsiniz):

Ayrıca Görünüm menüsünde, Görünüm araç çubuğunda ve sayı kısayol tuşlarıyla (1, 2, vb...). kullanılabilen ön tanımlı(üstten görünüm, önden görünüm vb.) görünümleri kullanabilirsiniz.
Bir nesne üzerinde veya 3D görünümde boş alanda sağ tıklayarak, özel görünüm seçebilir veya Ağaç görünümünde bir nesnenin yerini bulma gibi bazı genel işlemlere hızlı bir şekilde ulaşabilirsiniz.

## FreeCAD'le İlk Adımlar

FreeCAD'in odak noktası, yüksek hassasiyete sahip 3D modeller yapmanız, bu modellerin üzerinde sıkı bir kontrole sahip olmanız (modelleme geçmişine geri dönebilme ve parametreleri değiştirebilme) ve sonuç olarak bu modelleri (3D baskı alma, CNC ile işleme ve hatta inşaat şantiyesinde kullanım) yapmanızdır. Bu nedenle, animasyon filmi veya oyun gibi başka amaçlar için yapılmış diğer 3D uygulamalardan çok farklıdır. İlk defa 3D modelleme yapmaya başlıyorsanız, programı kullanmayı öğrenmek biraz karmaşık gelebilir. Kafanız karıştığında veya zorlandığınızda, unutmayın, zaman kaybetmeden dostça karşılanacağınız kullanıcı topluluğundan oluşan [FreeCAD forum'dan](http://forum.freecadweb.org/index.php) yardım isteyebilirsiniz.

FreeCAD'de kullanmaya başlayacağınız çalışma tezgahı, yapacağınız işin türüne bağlıdır: Eğer mekanik modeller veya daha genel olarak küçük ölçekli nesneler üzerinde çalışacaksanız, muhtemelen [Parça Dizaynı(PartDesign)](/PartDesign_Workbench "PartDesign Workbench") çalışma tezgahını kullanmayı tercih edeceksiniz. 2D'de çalışacaksanız, kısıtlamalara ihtiyacınız varsa , [Ön Taslak Tezgahına](/Draft_Workbench "Draft Workbench") veya [Taslak(Eskiz) tezgahına](/Sketcher_Workbench "Sketcher Workbench") geçin. Eğer BIM(Building information modelling -Yapı Bilgi Modelleme) yapacaksanız [Yapı Tezgahını](/Arch_Workbench "Arch Workbench") kullanabilirsiniz.Eğer gemi tasarımıyla uğraşıyorsanız,bu işe özel olarak [Gemi tezgahı](/Ship_Workbench "Ship Workbench") bulunmaktadır. Eğer OpenSCAD kullanıcı iseniz [OpenSCAD tezgahın](/OpenSCAD_Workbench "OpenSCAD Workbench")ı kullanabilirsiniz. There are also many community-developed [external workbenches](/External_workbenches "External workbenches") available.

Çalışma tezgahlarını istediğiniz zaman değiştirebilir ve diğer çalışma tezgahlarından araç eklemek için favori çalışma tablasını da [özelleştirebilirsiniz](/Interface_Customization "Interface Customization").

## Parça Dizaynı ve Eskiz tezgahlarıyla çalışma

[Parça Dizayn Tezgahı](/PartDesign_Workbench "PartDesign Workbench"), yapmak istediğiniz nesneyi elde edene kadar, basit şekillerden başlayarak, bu şekillere eklemeler veya çıkarımlar yaparak(biz buna özellikler diyoruz) özellikle kompleks nesneler elde etmek için tasarlandı.Modelleme işlemi sırasında uyguladığınız tüm özellikler , belgenizdeki diğer nesneleri de içeren [Ağaç Görünümü](/Document_structure "Document structure") olarak adlandırılan ayrı bir görünümde kaydedilir. Parça Dizayn nesnesini, her biri bir öncekinin sonucuna uygulanan, büyük bir zincir oluşturan, birbirini takip eden işlemler olarak düşünebilirsiniz. Ağaç görünümünde, nesnenin son halini görürsünüz, ancak onu genişletebilir ve önceki tüm durumlara erişebilir ve son nesneyi otomatik olarak güncelleyen, herhangi bir parametreyi değiştirebilirsiniz.

Parça Dizayn Tezgahı,diğer bir tezgahı,[Eskiz Tezgahın](/Sketcher_Workbench "Sketcher Workbench")ı çok sık kullanır. Eskiz,2D çizilen şekilleri, ölçülendirilmiş 2D şekile çevirmenizi sağlar. Örneğin,bir dikdörtgen çizebilir ve kenarlardan birine uzunluk ölçüsü vererek diğer tarafın boyutunu ayarlayabilirsiniz. Ayarlanan tarafın ölçüsü (yapılan ayar değiştirilmedikçe) değiştirilemez.

Eskiz ile yapılan bu 2D şekiller, Parça Dizayn tezgahında çok fazla kullanılır, örneğin 3D nesne oluşturmak veya nesnenizin gövdesinden oyulacak alanların yüzeylerini çizmek gibi. Tipik bir Parça Dizayn tezgah iş akışı aşağıdaki gibidir:

1. Yeni bir eskiz oluşturun
2. Kapalı bir şekil çizin(tüm noktaların birleştirildiğinden emin olun)
3. Eskizi kapatın
4. Kalınlık ver aracıyla 3D katıya dönüştürün.
5. Katı üzerinde bir yüz seçin
6. İkinci bir eskiz oluşturun(Eskiz seçilen yüz üzerinde çizilmelidir)
7. Kapalı bir şekil çizin
8. Eskizi kapatın
9. İlk nesne üzerinde, ikinci eskizden bir cep oluşturun.(Eskize derinlik vererek nesne üzerinde, eskiz kadar kısmı nesneden çıkarmış oluyoruz)

Yapılan işlemler sonucunda elde edilen nesne şuna benzer:

![](/images/Partdesign_example.jpg)

İstediğiniz zaman, özgün eskizi seçerek ve yeniden şekillendirerek, kalınlık veya cep işlem parametrelerini değiştirerek, istenen nesneyi elde edilebilirsiniz.

## Taslak ve Yapı tezgahlarıyla çalışma

[Taslak Tezgahı](/Draft_Workbench "Draft Workbench") ve [Yapı Tezgahı](/Arch_Workbench "Arch Workbench") , FreeCAD'de aynı temel kurallar çerçevesinde işlese de yukarıdaki tezgahlardan biraz farklıdırlar. Kısacası, Eskiz ve Parça Dizayn öncelikli olarak tek parça oluşturmak için kullanılırken; Taslak ve Yapı, işleri kolaylaştırmak için birçok basit nesneyle çalışmak için kullanılır.

[Taslak tezgahı](/Draft_Workbench "Draft Workbench"), [AutoCAD](https://en.wikipedia.org/wiki/AutoCAD) gibi 2D CAD uygulamalarında bulunan geleneksel 2D çizim araçlarına benzerdir. 2D çizim FreeCAD'in kapsama alanında olmadığından, bu alana özel uygulamaların sunduğu araçların tamamını bulmayı beklemeyin. Taslak araçlarının çoğu sadece 2D düzlemde değil, aynı zamanda 3D alanında ve  [Work planes (Çalışma Yüzeyleri)](/Draft_SelectPlane "Draft SelectPlane") ile [Nesne Yakalamada](/Draft_Snap "Draft Snap") kullanılmaktadır.

[Yapı Tezgahı](/Arch_Workbench "Arch Workbench"),FreeCAD'e eklediği [BIM(Yapı bilgi modelleme)](http://en.wikipedia.org/wiki/Building_Information_Modeling) araçlarla, parametreli nesnelerden oluşan mimari modeller yapmanızı sağlar. Yapı tezgahı, Taslak ve Eskiz gibi tezgahlarla birlikte sık kullanılır. Tüm Taslak araçları ayrıca Yapı tezgahında bulunur ve çoğu Yapı aracı Taslak yardımcı sistemlerini kullanır.

Tipik bir Yapı ve Taslak tezgahı iş akışı şu şekildedir:

1. Taslak çizgi aracıyla birkaç çizgi çizin
2. Çizgi seçerek ve Duvar aracına tıklayarak, her çizgiyi duvara çevirin
3. Duvar seçerek ve Yapı araçlarını kullanarak düzenlemeye geçin
4. Bir zemin nesnesi oluşturun ve Ağaç görünümünde duvarınızı onun içine taşıyın
5. Bir bina nesnesi oluşturun ve Ağaç görünümünde zemininizi onun içine taşıyın
6. Pencere aracını tıklayarak bir pencere oluşturun, panelinde ön ayarları seçin ve duvar yüzüne tıklayın
7. Eğer gerekiyorsa ilk önce çalışma düzlemini ayarlayın ve Taslak ölçü aracıyla ölçülendirin

Buna benzer bir şekil elde edeceksiniz:

![](/images/Arch_workflow_example.jpg)

Daha fazlası için [Kullanım Kılavuzu](/Tutorials/tr "Tutorials/tr") sayfasına bakınız.

## Betik

Any user can develop their own new features for FreeCAD and make them available to the FreeCAD community as an [addon](/Addon "Addon").

There are three types of addons:

* [Macros](/Macros "Macros"): short snippet of [Python](/Python "Python") code that provides a new tool or functionality in a single file ending with `.FCMacro`.
* [Workbenches](/External_workbenches "External workbenches"): collections of Python files that provide related [Gui Commands](/Gui_Command "Gui Command") (tools) centered around a particular topic.
* [Preference Packs](/Preference_Packs "Preference Packs"): distributable collections of user preferences.

## Scripting

Son olarak, FreeCAD'in en güçlü özelliklerinden biri [betik](/Power_users_hub/tr "Power users hub/tr") ortamıdır.Entegre python konsolundan (veya diğer herhangi bir harici Python betiğinden), FreeCAD'in hemen her bölümüne erişebilir, geometri oluşturabilir veya değiştirebilir, 3D sahnede bu nesnelerin temsilini değiştirebilir veya FreeCAD arayüzüne erişebilir ve değiştirebilirsiniz. Python komut dosyası, özel komutlar oluşturmak için kolay bir yöntem sağlayan makrolarda da kullanılabilir .

## Yenilikler

* [Sürüm 0.17 Sürüm Notları](/Release_notes_0.17 "Release notes 0.17") : FreeCAD'in 0.17 sürümündeki yenilikler nelerdir?
* [Sürüm 0.16 Sürüm Notları](/Release_notes_0.16 "Release notes 0.16") : FreeCAD'in 0.16 sürümündeki yenilikler nelerdir?
* [Sürüm 0.15 Sürüm Notları](/Release_notes_0.15 "Release notes 0.15") : FreeCAD'in 0.15 sürümündeki yenilikler nelerdir?
* [Sürüm 0.14 Sürüm Notları](/Release_notes_0.14 "Release notes 0.14") : FreeCAD'in 0.14 sürümündeki yenilikler nelerdir?
* [Sürüm 0.13 Sürüm Notları](/Release_notes_0.13 "Release notes 0.13") : FreeCAD'in 0.13 sürümündeki yenilikler nelerdir?
* [Sürüm 0.12 Sürüm Notları](/Release_notes_0.12 "Release notes 0.12") : FreeCAD'in 0.12 sürümündeki yenilikler nelerdir?
* [Sürüm 0.11 Sürüm Notları](/Release_notes_0.11 "Release notes 0.11") : FreeCAD'in 0.11 sürümündeki yenilikler nelerdir?

Retrieved from "<http://wiki.freecad.org/index.php?title=Getting_started/tr&oldid=1459817>"