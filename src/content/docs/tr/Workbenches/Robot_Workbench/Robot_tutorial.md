---
title: Robot Kılavuzu
---
|  |
| --- |
| Kılavuz |
| Konu |
| Robot Tezgahı |
| Seviye |
| Yeni başlayan |
| Tamamlanma süresi |
|  |
| Yazarlar |
| r-frank |
| FreeCAD Sürümü |
| 0.16.6703 |
| Örnek dosyalar |
|  |
| Ayrıca bakınız |
| *None* |
|  |

Bu eğitim, bir robot hücre kurulumunu simüle etmek için [Robot tezgahı](/Robot_Workbench/tr "Robot Workbench/tr") 'nın nasıl kullanılacağını öğretmek için buradadır.

![](/images/Robot_Tutorial_RobotSimulation.gif)

## Başlamadan önce

Bu eğitim, FreeCAD Sürüm 0.16.6703 veya daha üstü için yazılmıştır. Yani Bilgisayarınız da FreeCAD yoksa [İndir](/Download/tr "Download/tr") sayfasına gidin ve kurulumu yapın.

Bu eğitimde [endüstriyel robotlar](http://en.wikipedia.org/wiki/Industrial_robot) kullanımı hedeflenmiştir. Mobil veya servis robotları kullanılması hedeflenmemiştir ( [buraya bkz.](Http://en.wikipedia.org/wiki/Robot#Modern_robots)).

## Sahneyi ayarlama

1. [Robot Tezgahı](/Robot_Workbench/tr "Robot Workbench/tr") bölümüne geçin
2. Üst menüden Dosya →  Yeni Seçerek yeni bir belge oluşturun.
3. Üst menüden Robot → Robot Ekle →  Kuka IR500 Seçerek sahneye bir Kuka IR500 robotu yerleştirin.
4. ![](/images/View-axometric.png) üzerine tıklatarak aksonometrik görünüme geçin.
5. ![](/images/View-zoom-all.png) tıklayarak görünümü ekrana uydurun
6. Dosyanızı kaydedin ...

## Bir yörüngeyi ayarlama

1. [Robot Tezgahı](/Robot_Workbench/tr "Robot Workbench/tr") bölümüne geçin
2. Ağaç görünümünde model sekmesini tıklayın
3. ![](/images/Robot_CreateTrajectory.png) ile yeni bir yörünge oluşturun.
4. Ağaç görünümünden robotu seçin.
5. ![](/images/Robot_SetHomePos.png) Robot resmini tıklatarak robot için ev pozisyonunu seçin.
6. Görev paneline geçin
7. Sürgüleri kullanarak robot pozisyonunu değiştirin
8. Robot ve yörünge ağaç görünümünde seçiliyken ![](/images/Robot_InsertWaypoint.png) öğesine tıklamak, yörüngeye yol noktasını ekleyecektir.
9. Her yol noktası sarı bir çarpı ile gösterilir, yol noktaları turuncu çizgilerle bağlanır.
10. En az üç farklı yol noktası tanımlayın ve bunları yörüngeye yerleştirin.

## Robot hareketini simüle etme

1. Ağaç görünümünde robotu ve yörüngeyi seçin
2. ![](/images/Robot_Simulate.png) öğesine tıklayarak simülasyonu seçin
3. I> Oynat Düğmesine Tıklayın
4. Simülasyonu izleyin

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_tutorial/tr&oldid=1251465>"