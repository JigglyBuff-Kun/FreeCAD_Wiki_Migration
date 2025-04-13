---
title: BIM Project
---

|                                       |
| ------------------------------------- |
| BIM ProjectManager                    |
| Menu location                         |
| Manage → Manage project...            |
| Workbenches                           |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| -                                     |
| See also                              |
| _None_                                |
|                                       |

## Descriere

Dialogul de configurare a proiectului este un dialog cu asistent/expert care vă permite să creați un set de bază de obiecte de ghidare în documentul curent sau într-un document nou, care vă va ajuta să începeți să modelați un proiect BIM.

![](/images/BIM_project_screenshot.png)

BIM Project Setup

## Usage

Dialogul de configurare a proiectului poate crea:

- O nouă [document](/Document_structure "Document structure"). Alternativ, celelalte obiecte vor fi create în documentul deschis în prezent.
- Un site [site](/Arch_Site "Arch Site"). Obiectul site-ului reprezintă o zonă de teren în care va fi amplasat proiectul. Puteți să-i dați un număr de proprietăți utile, cum ar fi adresa străzii și coordonatele pământului. La crearea, site-ul este doar un container gol pentru alte obiecte BIM, dar un obiect 3D reprezentând terenul real poate fi atașat ulterior la acesta.
- O [building](/Arch_Building "Arch Building"). Obiectul Clădire este un container pentru toate obiectele BIM care vor aparține aceleiași clădiri. Puteți defini un tip de clădire și să-i dați dimensiuni rectangulare brute, care vor fi reprezentate drept un dreptunghi desenat pe plan (X, Y).
- Un set de axuri [Axe arc](/Arch_Axis "Arch Axis"), prin definirea numărului și distanței lor. Axele sunt folosite ca linii directoare pentru alinierea obiectelor 2D și 3D. Aceste axe pot fi modificate sau se pot introduce noi axe mai târziu.
- Un set de [BuildingParts](/Arch_BuildingPart "Arch BuildingPart") pentru a reprezenta nivele. BuildingParts sunt obiecte generice de containere BIM care pot fi folosite pentru a grupa alte obiecte BIM într-un număr de moduri semnificative, cum ar fi componente repetate sau niveluri de clădiri.
- Un set de grupuri [groups](/Group "Group") implicite în fiecare nivel. Grupurile pot fi utilizate pentru a vă organiza obiectele BIM în categorii mai clare, cum ar fi "Pereți" sau "Coloane". Ele nu au nici un impact asupra modelului în sine, dar de multe ori ajută la a face structura modelului dvs. mai clară atunci când conține o mulțime de obiecte.

## Templates

După ce ați completat diferitele opțiuni, conținutul expertului de configurare a proiectului BIM poate fi salvat ca șablon. Aceste șabloane pot fi "restaurate" și adaptate ulterior. Șabloanele de proiect sunt stocate ca fișiere text în folderul de utilizatori FreeCAD.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_ProjectManager/ro&oldid=1481056>"
