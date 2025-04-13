---
title: PartDesign Asistent pentru Arbore
---
|  |
| --- |
| PartDesign WizardShaft |
| Menu location |
| Part Design → Shaft design wizard... |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench"), Complete |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

## Introducere

Acest instrument vă permite să creați un arbore dintr-o tabelă de valori și să analizați forțele și momentele. Puteți porni asistentul din meniul Part Design sau tastând

## Usage

You can start the wizard from the Part Design menu **Part Design → ![](/images/PartDesign_WizardShaft.svg) Shaft design wizard...**.

în consola Python a FreeCAD. Vrăjitorul-Asistent va porni și va afișa o masă implicită, partea corespunzătoare a arborelui și graficul forță / moment.

![](/images/WizardShaft_Part.jpg)

Partea superioară a ferestrei este preluată din tabel. Este organizată în coloane numerotate care corespund segmentelor arborelui. Un segment de ax este caracterizat prin faptul că are o anumită lungime și un diametru. Fereastra principală prezintă două tab-uri. Una este piesa în sine (o funcție de revoluție), prezentată în imaginea de mai sus. Al doilea tab arată graficele forțelor de forfecare și momentelor create de sarcinile definite în tabel.

![](/images/Shaftwizard1.jpg)

## Prerequisites

## Condiții preliminare

Asistent pentru proiectarea arborelui depinde de biblioteca [matplotlib](http://matplotlib.org/) pentru a crea și afișa graficele forței de forfecare și momentului de încovoiere. Sub sistemele Debian / Ubuntu, acesta este disponibil prin pachetul python-matplotlib.

## Parametri

Pentru fiecare segment de ax, pot fi definiți următorii parametri

* Lungimea segmentului
* Diametrul segmentului
* Tip de încărcare. Rețineți că trebuie să faceți clic pe intrarea dorită din meniu după derularea acesteia, altfel nu va fi selectată!
  + Nimic: Fără sarcină
  + Fixat: capătul arborelui este fixat (de exemplu sudat pe altă parte). Acest tip de încărcare poate fi definit numai pentru primul sau ultimul segment.
  + Static: există o sarcină statică pe acest segment de ax
* Încărcați pe segmentul arborelui
* Locația unde se aplică sarcina pe segment. Poziția este contorizată de la marginea din stânga a segmentului

(Există și alte rânduri și tipuri de încărcare, dar nu a fost implementată nici o funcționalitate)

## Parameters

For each shaft segment, the following parameters can be defined

* Length of the segment
* Diameter of the segment
* Load type. Note that you have to click on the desired entry in the menu after scrolling to it, otherwise it will not be selected!
  + None: No load
  + Fixed: The end of the shaft is fixed (e.g. welded to another part). This load type can only be defined for the first or last segment.
  + Static: There is a static load on this shaft segment
* Load on the shaft segment
* Location where the load is applied to the segment. The location is counted from the left-hand edge of the segment

(Other rows and load types exist but no functionality has been implemented yet)

## Menus

## Meniuri

Pentru a adăuga un nou segment de arbore, faceți clic dreapta în spațiul gol din partea dreaptă a tabelului și alegeți "Add column".

## Limitations

## Limitări

* Nu este posibil să aveți segmente adiacente ale arborelui cu același diametru.

## Planned functionality

## Funcționalitate Planificată

* Valori tabelare pentru șanfren și muchiile rotunjite pe marginea arborelui
* Recunoașteți o parte a asistentului arbore creat anterior și inițializați valorile tabelului din acesta
* Calculul tensiunii arborelui
* Vizualizarea sarcinilor pe ax (poate folosi aceeasi functionalitate ca si pentru modulul FEM)
* Definirea încărcărilor ca obiect Document (poate folosi aceeași funcționalitate ca și pentru modulul FEM)
* Baza de date material
* Permite încărcări cu forțe pe direcția Z și în direcția Y (necesită definirea încărcărilor ca Document Object, altfel tabelul va deveni foarte lung)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_WizardShaft/ro&oldid=1461404>"