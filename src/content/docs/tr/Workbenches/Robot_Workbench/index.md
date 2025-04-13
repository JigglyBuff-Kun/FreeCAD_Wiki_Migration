---
title: Robot Tezgahı
---

:::caution
The Robot Workbench is unmaintained. If you have experience with the topic and are interested in maintaining it, please state your intention in the developer's section of theFreeCAD forum.The reason this workbench is still in the master source code is because this workbench is programmed in C++. If this workbench could be programmed in Python, then it could be made anexternal workbenchand it could be moved to a separate repository.
:::

## Giriş

![](/images/Workbench_Robot.svg)

Robot workbench icon

Robot Tezgahı, [Kuka](http://kuka.com/) gibi bir standart [6 eksenli endüstriyel robot](/Robot_6-Axis "Robot 6-Axis") 'u simüle etmek için kullanılan bir araçtır.

Aşağıdaki görevleri yapabilirsiniz:

- Bir robot ve iş parçaları ile bir simülasyon ortamı kurun.
- Hareket yörüngelerini oluşturun ve doldurun.
- Bir CAD parçasının özelliklerini bir yörüngeye ayırın.
- Robot hareketini simüle edin ve mesafeye ulaşın.
- Yörüngeyi bir robot program dosyasına aktarın.

Başlamak için [Robot klavuzunu](/Robot_tutorial/tr "Robot tutorial/tr") deneyin ve [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py) örneğindeki programlama arayüzünü görün.

![](/images/Robot_Workbench_example.jpg)

## Araçlar

Burada bir robot kurulumu oluşturmak için kullanabileceğiniz temel komutlar.

### Robotlar

6 Eksenli robotları oluşturma ve yönetme araçları

- ![](/images/Robot_CreateRobot.png) [Robot Oluştur](/Robot_CreateRobot/tr "Robot CreateRobot/tr"): Sahneye yeni bir robot yerleştirin
- ![](/images/Robot_Simulate.png) [Robot Simülasyon](/Robot_Simulate/tr "Robot Simulate/tr") : Simülasyon iletişim kutusunu açar ve simüle etmenizi sağlar
- ![](/images/Robot_Export.png) [Robot Dışa aktar](/Robot_Export/tr "Robot Export/tr"): Bir robot program dosyasını dışa aktarın
- ![](/images/Robot_SetHomePos.png) [Ana konum ayarla](/Robot_SetHomePos/tr "Robot SetHomePos/tr"): Bir robotun ana konumunu ayarlayın
- ![](/images/Robot_RestoreHomePos.png) [Ana konuma dön](/Robot_RestoreHomePos "Robot RestoreHomePos"): robotu ana konumuna getirir.

### Yörüngeler

Yörüngeleri oluşturmak ve değiştirmek için araçlar. Parametrik ve parametrik olmayan iki tür vardır.

#### Parametrik olmayan yörüngeler

- ![](/images/Robot_CreateTrajectory.png) [Yörünge oluştur](/Robot_CreateTrajectory/tr "Robot CreateTrajectory/tr"): Sahneye yeni bir boş yörünge nesnesi ekler
- ![](/images/Robot_SetDefaultOrientation.png) [Varsayılan yönlendirmeyi ayarla](/Robot_SetDefaultOrientation/tr "Robot SetDefaultOrientation/tr"): Oryantasyon yol noktalarını varsayılan olarak oluşturulacak şekilde ayarlayın
- ![](/images/Robot_SetDefaultValues.png) [Varsayılan değerleri ayarla](/Robot_SetDefaultValues/tr "Robot SetDefaultValues/tr") Yol noktası oluşturma için varsayılan değerleri ayarlayın.
- ![](/images/Robot_InsertWaypoint.png) [Bir yol noktası ekleyin](/index.php?title=Robot_InsertWaypoint/tr&action=edit&redlink=1 "Robot InsertWaypoint/tr (page does not exist)"): Geçerli robot konumundan bir yörüngeye bir yol noktası ekleyin
- ![](/images/Robot_InsertWaypointPre.png) [Bir yol noktası ekle](/index.php?title=Robot_InsertWaypointPre/tr&action=edit&redlink=1 "Robot InsertWaypointPre/tr (page does not exist)"): Geçerli fare konumundan bir yörüngeye bir yol noktası ekleyin

#### Parametrik yörüngeler

- ![](/images/Robot_Edge2Trac.png) [Kenarlardan bir yörünge oluşturun](/Robot_Edge2Trac "Robot Edge2Trac"): Kenarları yörüngeye çeviren yeni bir nesne yerleştirin
- ![](/images/Robot_TrajectoryDressUp.png) [Bir yörüngeyi giydir](/Robot_TrajectoryDressUp "Robot TrajectoryDressUp"): Yörüngenin bir veya daha fazla özelliğini geçersiz kılmanıza izin verir
- ![](/images/Robot_TrajectoryCompound.png) [Trajectory ...](/Robot_TrajectoryCompound "Robot TrajectoryCompound"): Bazı tek yörüngelerin dışında bir bileşik oluşturun

## Betik

Robot yer değiştirmelerini modellemek için kullanılan işlevlerin açıklaması için [Robot API örneği](/index.php?title=Robot_API_example/tr&action=edit&redlink=1 "Robot API example/tr (page does not exist)") bölümüne bakınız.

## Kılavuzlar

- [Robot 6 Eksen](/Robot_6-Axis/tr "Robot 6-Axis/tr")
- [Robot Simülasyonu için VRML Hazırlığı](/index.php?title=VRML_Preparation_for_Robot_Simulation/tr&action=edit&redlink=1 "VRML Preparation for Robot Simulation/tr (page does not exist)")

Retrieved from "<http://wiki.freecad.org/index.php?title=Robot_Workbench/tr&oldid=999720>"
