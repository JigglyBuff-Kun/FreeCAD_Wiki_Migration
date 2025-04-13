---
title: Schemat organizacyjny
---
## Wprowadzenie

FreeCAD jest projektem społecznościowym, stworzonym i utrzymywanym przez pojedyncze osoby motywowane głównie chęcią stworzenia potężnej, wolnej i otwartej platformy CAD. Obecnie nie istnieje żadne formalne stowarzyszenie ani organizacja stojąca za projektem FreeCAD. Decyzje są zazwyczaj podejmowane w drodze konsensusu, ale bardziej ogólnie, dzięki bardzo modułowej naturze programu FreeCAD, każdy może pracować w kierunku, który uważa za najlepszy. Każdy jest zawsze mile widziany, aby [przyłączyć się i pomóc projektowi](/Help_FreeCAD/pl "Help FreeCAD/pl") i uczestniczyć w społeczności, która gromadzi się na [forum](https://forum.freecadweb.org) pod warunkiem, że przestrzega [kodeksu postępowania](https://github.com/FreeCAD/FreeCAD/blob/master/CODE_OF_CONDUCT.md).

## Zarządzanie

Ogólne zarządzanie FreeCAD jest organizowane przez **administratorów FreeCAD**: jriegel, wmayer, yorik, kkremitzki, jmaustpc. Wkład w kod FreeCAD jest zarządzany przez administratorów oraz zespół *core developerów*: bernd, chrisb, sliptonic, abdullah, sgrogan, wandererfan, ickby, DeepSOIC. Każdy jest [mile widziany, aby pomóc w procesie recenzowania](https://forum.freecadweb.org/viewtopic.php?f=10&t=46574). [Moderatorzy](https://forum.freecadweb.org/memberlist.php?mode=team) zajmują się większością innych aspektów projektu i utrzymują społeczność w formie.

## Oprogramowanie FreeCAD

### Środowiska pracy

| Moduł | Opiekun |
| --- | --- |
| FreeCAD core | wmayer |
| Architektura | yorik |
| Rysunek Roboczy | yorik |
| MES | bernd |
| Obraz | wmayer |
| Siatka | wmayer |
| Część | wmayer |
| Projekt Części |  |
| Path | sliptonic |
| Szkicownik | abdullah |
| Rysunek Techniczny | wandererfan |

### Formaty plików

### Przygotowanie pakietów

Tworzenie pakietów w różnych repozytoriach odbywa się zazwyczaj na zasadzie wolontariatu. Tak więc niektóre nazwy w tym zestawieniu mogą nie być dokładne.

 ! scope="col"; style="width:30% |
 ! scope="col"; style="width:30% |
 ! scope="col"; style="width:30% |
 ! scope="col"; style="width:30% |

|  | 0.17 | 0.18 | 0.19 | 0.20\_pre |
| --- | --- | --- | --- | --- |
| **Linux** | | | | |
| Ununtu |  |  |  |  |
| Debian |  |  |  |  |
| Arch (AUR) | [gbs](https://aur.archlinux.org/account/gbs) ([AUR link](https://aur.archlinux.org/packages/freecad/)) |  |  |  |
| OpenSUSE |  |  |  |  |
| Fedora |  |  |  |  |
| Gentoo |  |  |  |  |
| **MacOS X** | | | | |
| Homebrew |  |  |  |  |
| Macports |  |  |  |  |
| **Windows** | | | | |
| Chocolatey |  |  |  |  |

### Tłumaczenie oprogramowania

---

Poniższa tabela pokazuje, kto co robi w świecie FreeCAD ...

**oprogramowanie FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Moduł | FreeCAD base | Część | Siatka | Szkicownik + Projekt Części | Rysunek Roboczy | *(Produkcja)* Kreślenie | Architektura |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [logari81](/index.php?title=User:Logari81&action=edit&redlink=1 "User:Logari81 (page does not exist)"), [mrlukeparry](/index.php?title=User:Mrlukeparry&action=edit&redlink=1 "User:Mrlukeparry (page does not exist)"), [wmayer](/User:Wmayer "User:Wmayer"), [jrheinlaender](/index.php?title=User:Jrheinlaender&action=edit&redlink=1 "User:Jrheinlaender (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [jriegel](/User:Jriegel "User:Jriegel") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |
|  | Symulacja Robota | Ekran startowy | CNC G-Code | Family-Design Table | Fold-Flat (Sheet-Metal) | Złożenie |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") |  | Jacques-Antoine Gaudin, Carlton Corbitt PE | [jriegel](/User:Jriegel "User:Jriegel"), [ickby](/index.php?title=User:Ickby&action=edit&redlink=1 "User:Ickby (page does not exist)") |
|  | Jednostki | Preferencje Materiału | Zestawienie materiałów | Oprzyrządowanie form | ANSI/ISO/DIN Part Library | FEM-FEA | Przycisk Cofnij |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |  |  |  |
| Formaty plików | FcStd | Obj | Step + Iges | Dxf | IFC | STL | PDF |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |  |
|  | SAT - ACIS | postscript |  |
|  | need vol |
| Kompilacja binarna | Linux Deb Ubuntu | Linux Fedora | Linux OpenSUSE | MS Windows | Apple Mac | BSD / Unix | Android |
|  | [wmayer](/User:Wmayer "User:Wmayer"),[normandc](/User:Normandc "User:Normandc") |  |  | [jriegel](/User:Jriegel "User:Jriegel") |  |  |  |

**Opiekunowie pakietów**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (stable) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | Florian Pritz '[bluewind](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12444)' ([repo](https://www.archlinux.org/packages/?sort=&q=freecad&maintainer=&flagged=)) |  |
| (experimental) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | drhooves ([repo](https://aur.archlinux.org/packages/freecad-git/)) | [PrzemoF](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=3666) ([repo](https://copr.fedorainfracloud.org/coprs/g/freecad/nightly/)) |  |

**tłumaczenie GUI FreeCAD**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Język | Chiński | Niderlandzki | Francuski | Niemiecki | Polski | Portugalski | Hiszpański | Arabski |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [normandc](/User:Normandc "User:Normandc") |  | [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |
|  | Croatian |
|  | Petar pperisin |

**Dokumentacja FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dokumentacja | Wiki | Forum | Lista dyskusyjna | YouTube | Autor poradnika | Instrukcja | Schemat organizacyjny |
|  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[normandc](/User:Normandc "User:Normandc"), [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") |  |  | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [Emagdalena](/User:Emagdalena "User:Emagdalena") | Carlton Corbitt PE |

**Publikacja FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Promocja | Twitter Laconica | Google+ | BlogSpot | Facebook | Webpage Development | Server & Domain | Donation Account |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [Emagdalena](/User:Emagdalena "User:Emagdalena") , [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[Emagdalena](/User:Emagdalena "User:Emagdalena") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | SF.net |  |

Ochotnicy do pomocy mogą pisać na na forum:[Org Chart Thread](http://forum.freecadweb.org/viewtopic.php?f=8&t=1891&start=30).

### Uwagi

* Opiekunem budującym pakiety na Fedorze jest [hobbes1069](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=725) aka Richard Shaw z <https://bugzilla.redhat.com/show_bug.cgi?id=1565611>

Retrieved from "<http://wiki.freecad.org/index.php?title=Organization_chart/pl&oldid=1238049>"