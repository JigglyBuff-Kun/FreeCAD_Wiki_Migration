---
title: Organigramme
---
## Introduction

FreeCAD est un projet communautaire, créé et maintenu par des personnes motivées principalement par leur souhait de créer une plate-forme de CAO puissante, gratuite et open-source. Il n'y a actuellement aucune association ou organisation formelle derrière le projet FreeCAD. Les décisions sont généralement prises par consensus, mais plus généralement, grâce à la nature très modulaire de FreeCAD, chacun est libre de travailler dans la direction qu'il juge la meilleure. Tout le monde est toujours le bienvenu pour [Participer et aider le projet](/Help_FreeCAD/fr "Help FreeCAD/fr") et pour accompagner la communauté qui se rassemble sur le [forum](https://forum.freecadweb.org/viewforum.php?f=12) à condition de respecter le [code de conduite](https://github.com/FreeCAD/FreeCAD/blob/master/CODE_OF_CONDUCT.md).

## Gouvernance

La gestion générale de FreeCAD est organisée par les **administrateurs de FreeCAD** : jriegel, wmayer, yorik, kkremitzki, jmaustpc. Les contributions au code de FreeCAD sont gérées par les administrateurs et une équipe de **développeurs de base** : bernd, chrisb, sliptonic, abdullah, sgrogan, wandererfan, ickby, DeepSOIC. Tout le monde est [bienvenue pour aider le processus de révision](https://forum.freecadweb.org/viewtopic.php?f=10&t=46574). [Les modérateurs](https://forum.freecadweb.org/memberlist.php?mode=team) s'occupent de la plupart des autres aspects du projet pour maintenir la communauté en forme.

## Logiciel FreeCAD

### Modules

| Module | Maintenu par |
| --- | --- |
| FreeCAD core | wmayer |
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

### Formats de fichiers

### Création des paquets

La création de paquets dans les différents dépôts se fait généralement sur une base volontaire. Il est donc possible que certains noms figurant dans ce tableau ne soient pas exacts.

|  | 0.17 | 0.18 | 0.19 | 0.20\_pre |
| --- | --- | --- | --- | --- |
| **Linux** | | | | |
| Ubuntu |  |  |  |  |
| Debian |  |  |  |  |
| Arch (AUR) | [lien AppImage AUR](https://aur.archlinux.org/packages/freecad-appimage/) |  |  |  |
| OpenSUSE |  |  |  |  |
| Fedora |  |  |  |  |
| Gentoo |  |  |  |  |
| **Windows** | | | | |
| Chocolatey |  |  |  |  |
| **MacOS** | | | | |
| Homebrew |  |  |  |  |
| Macports |  |  |  |  |

### Traduction du logiciel

---

Le tableau suivant, montre qui fait quoi dans l'univers FreeCAD...

**Logiciel FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Modules | FreeCAD base | Part | Mesh | Sketcher + PartDesign | Draft | (Production) Drawing | Arch |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [logari81](/index.php?title=User:Logari81&action=edit&redlink=1 "User:Logari81 (page does not exist)"), [mrlukeparry](/index.php?title=User:Mrlukeparry&action=edit&redlink=1 "User:Mrlukeparry (page does not exist)"), [wmayer](/User:Wmayer "User:Wmayer"), [jrheinlaender](/index.php?title=User:Jrheinlaender&action=edit&redlink=1 "User:Jrheinlaender (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [jriegel](/User:Jriegel "User:Jriegel") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |
|  | Robot Simulation | Splash Start | CNC G-Code | Family-Design Table | Fold-Flat (Sheet-Metal) | Assembly |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") |  | Jacques-Antoine Gaudin, Carlton Corbitt PE | [jriegel](/User:Jriegel "User:Jriegel"), [ickby](/index.php?title=User:Ickby&action=edit&redlink=1 "User:Ickby (page does not exist)") |
|  | Units | Material Properties | Bill of Materials | Mold Tooling | ANSI/ISO/DIN Part Library | FEM-FEA | Undo Button |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |  |  |  |
| Format de fichiers | FcStd | Obj | Step + Iges | Dxf | IFC | STL | PDF |
|  | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [wmayer](/User:Wmayer "User:Wmayer") | [jriegel](/User:Jriegel "User:Jriegel"), [wmayer](/User:Wmayer "User:Wmayer") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [danielfalck](/index.php?title=User:Danielfalck&action=edit&redlink=1 "User:Danielfalck (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") |  |
|  | SAT - ACIS | postscript |  |
|  | need vol |
| Binaire Compilé | Linux Deb Ubuntu | Linux Fedora | Linux OpenSUSE | MS Windows | Apple Mac | BSD / Unix | Android |
|  | [wmayer](/User:Wmayer "User:Wmayer"),[normandc](/User:Normandc "User:Normandc") |  |  | [jriegel](/User:Jriegel "User:Jriegel") |  |  |  |

**Gestionnaires de paquets**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (stable) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | Florian Pritz '[bluewind](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=12444)' ([repo](https://www.archlinux.org/packages/?sort=&q=freecad&maintainer=&flagged=)) |  |
| (expérimental) | Debian | Ubuntu | OpenSUSE | Arch | Fedora | Gentoo |  |
|  |  |  |  | drhooves ([repo](https://aur.archlinux.org/packages/freecad-git/)) | [PrzemoF](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=3666) ([repo](https://copr.fedorainfracloud.org/coprs/g/freecad/nightly/)) |  |

**Traduction de FreeCAD**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Langues | Chinese | Dutch | French | German | Polish | Portuguese | Spanish | Arabic |
|  |  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [normandc](/User:Normandc "User:Normandc") |  | [kwahoo](/index.php?title=User:Kwahoo&action=edit&redlink=1 "User:Kwahoo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | [Emagdalena](/User:Emagdalena "User:Emagdalena") |  |
|  | Croatian |
|  | Petar pperisin |

**Documentation de FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Documentation | wiki | Forum | Mailing List | YouTube | Tutorial Writer | Manual | Organization Chart |
|  | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[normandc](/User:Normandc "User:Normandc"), [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") |  |  | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [Emagdalena](/User:Emagdalena "User:Emagdalena") | Carlton Corbitt PE |

**Publicité de FreeCAD**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Publicité | Twitter Laconica | Google+ | BlogSpot | Facebook | Webpage Development | Server & Domain | Donation Account |
|  | [Emagdalena](/User:Emagdalena "User:Emagdalena"), [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)"), [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"), [Emagdalena](/User:Emagdalena "User:Emagdalena") , [Jdurston](/User:Jdurston "User:Jdurston") | [kwahooo](/index.php?title=User:Kwahooo&action=edit&redlink=1 "User:Kwahooo (page does not exist)") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre"),[Emagdalena](/User:Emagdalena "User:Emagdalena") | [yorik](/User:Yorikvanhavre "User:Yorikvanhavre") | SF.net |  |

Les bénévoles qui peuvent aider peuvent publier sur le [Fil de l'organigramme](http://forum.freecadweb.org/viewtopic.php?f=8&t=1891&start=30) sur le forum.

### Remarques

* Le mainteneur des compilation des paquets sur Fedora est [hobbes1069](https://forum.freecadweb.org/memberlist.php?mode=viewprofile&u=725) aka Richard Shaw pour <https://bugzilla.redhat.com/show_bug.cgi?id=1565611>

Retrieved from "<http://wiki.freecad.org/index.php?title=Organization_chart/fr&oldid=1238127>"