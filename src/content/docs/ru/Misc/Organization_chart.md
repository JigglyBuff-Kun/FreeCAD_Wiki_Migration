---
title: Структура Сообщества
---
## Вступление

FreeCAD - это проект сообщества, созданный и поддерживаемый отдельными лицами, мотивированными главным образом собственным желанием создать мощную и бесплатную Систему Автоматизированного ПРоектирования (САПР) с открытым исходным кодом. В настоящее время за проектом FreeCAD нет официальной ассоциации или организации. Решения обычно принимаются общим согласием, но в целом, благодаря модульной структуре FreeCAD, любой может свободно принять участие в том направлении, которое он считает наилучшим для себя. Любой желающий может [принять участие в помощи проекту](/Help_FreeCAD "Help FreeCAD"), а также поучаствовать в сообществе, которое сконцентрированно на [форуе](https://forum.freecadweb.org), конечно при условии, что он соблюдает [кодекс поведения сообщества](https://github.com/FreeCAD/FreeCAD/blob/master/CODE_OF_CONDUCT.md).

## Управление

The general management of FreeCAD is organized by the **FreeCAD administrators**: jriegel, wmayer, yorik, kkremitzki, jmaustpc. Code contributions to FreeCAD are managed by the administrators plus a team of **core developers**: bernd, chrisb, sliptonic, abdullah, sgrogan, wandererfan, ickby, DeepSOIC. Anyone is [welcome to help the reviewing process](https://forum.freecadweb.org/viewtopic.php?f=10&t=46574). [Moderators](https://forum.freecadweb.org/memberlist.php?mode=team) take care of most other aspects of the project and maintain the community in shape.

## Программное обеспечение FreeCAD

### Modules

### Модули

| Модуль | Ведущий разработчик |
| --- | --- |
| Ядро FreeCAD | wmayer |
| Arch | yorik |
| Draft | yorik |
| FEM | bernd |
| Image | wmayer |
| Mesh | wmayer |
| Part | wmayer |
| PartDesign |  |
| Path | sliptonic |
| Sketcher | abdullah |
| TechDraw | wandererfan |

### Форматы файлов

### Packaging

Packaging on different repositories is usually on a volunteer basis. So some names in this chart may not be accurate.

|  | 0.17 | 0.18 | 0.19 | 0.20\_pre |
| --- | --- | --- | --- | --- |
| **Linux** | | | | |
| Ubuntu |  |  |  |  |
| Debian |  |  |  |  |
| Arch (AUR) | [AUR AppImage link](https://aur.archlinux.org/packages/freecad-appimage/) |  |  |  |
| OpenSUSE |  |  |  |  |
| Fedora |  |  |  |  |
| Gentoo |  |  |  |  |
| **Windows** | | | | |
| Chocolatey |  |  |  |  |
| **MacOS** | | | | |
| Homebrew |  |  |  |  |
| Macports |  |  |  |  |

### Перевод программного обеспечения

---

В следующей таблице показано, кто и что делает во "вселенной" FreeCAD...

**FreeCAD software**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Modules | FreeCAD base | Part | Mesh | Sketcher + PartDesign | Draft | (Production) Drawing | Arch |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [logari81](/index.php?title=User:Logari81&action=edit&redlink=1 "User:Logari81 (page does not exist)"), [mrlukeparry](/index.php?title=User:Mrlukeparry&action=edit&redlink=1 "User:Mrlukeparry (page does not exist)"), [wmayer](/User:Wmayer "User:Wmayer"), [jrheinlaender](/index.php?title=User:Jrheinlaender&action=edit&redlink=1 "User:Jrheinlaender (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [jriegel](/User:Jriegel "User:Jriegel") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |
|  | Robot Simulation | Splash Start | CNC G-Code | Family-Design Table | Fold-Flat (Sheet-Metal) | Assembly |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") |  | Jacques-Antoine Gaudin, Carlton Corbitt PE | [jriegel](/User:Jriegel "User:Jriegel"), [ickby](/index.php?title=User:Ickby&action=edit&redlink=1 "User:Ickby (page does not exist)") |
|  | Units | Material Properties | Bill of Materials | Mold Tooling | ANSI/ISO/DIN Part Library | FEM-FEA | Undo Button |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |  |  |  |
| File formats | FcStd | Obj | Step + Iges | Dxf | IFC | STL | PDF |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |  |
|  | SAT - ACIS | postscript |  |
|  | need vol |
| Compiled Binary | Linux Deb Ubuntu | Linux Fedora | Linux OpenSUSE | MS Windows | Apple Mac | BSD / Unix | Android |
|  | [wmayer](/User:Wmayer "User:Wmayer"),[normandc](/User:Normandc "User:Normandc") |  |  | [jriegel](/User:Jriegel "User:Jriegel") |  |  |  |

**Package Maintainers**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (stable) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | Florian Pritz '[bluewind](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12444)' ([repo](https://www.archlinux.org/packages/?sort=&q=freecad&maintainer=&flagged=)) |  |
| (experimental) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | drhooves ([repo](https://aur.archlinux.org/packages/freecad-git/)) | [PrzemoF](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=3666) ([repo](https://copr.fedorainfracloud.org/coprs/g/freecad/nightly/)) |  |

**FreeCAD Translation**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Language | Chinese | Dutch | French | German | Polish | Portuguese | Spanish | Arabic |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [normandc](/User:Normandc "User:Normandc") |  | [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |
|  | Croatian |
|  | Petar pperisin |

**FreeCAD Documentation**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Documentation | wiki | Forum | Mailing List | YouTube | Tutorial Writer | Manual | Organization Chart |
|  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[normandc](/User:Normandc "User:Normandc"), [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") |  |  | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [Emagdalena](/User:Emagdalena "User:Emagdalena") | Carlton Corbitt PE |

**FreeCAD Publicity**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Publicity | Twitter Laconica | Google+ | BlogSpot | Facebook | Webpage Development | Server & Domain | Donation Account |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [Emagdalena](/User:Emagdalena "User:Emagdalena") , [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[Emagdalena](/User:Emagdalena "User:Emagdalena") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | SF.net |  |

Добровольцы, желающие помочь, могут разместить предложения на форуме в [теме "организационная диаграмма"](http://forum.freecadweb.org/viewtopic.php?f=8&t=1891&start=30).

### Notes

### Примечания

* Сопровождающим разработчиком пакетов в Fedora является [hobbes1069](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=725) он же Ричард Шоу в <https://bugzilla.redhat.com/show_bug.cgi?id=1565611>

Retrieved from "<http://wiki.freecad.org/index.php?title=Organization_chart/ru&oldid=1237899>"