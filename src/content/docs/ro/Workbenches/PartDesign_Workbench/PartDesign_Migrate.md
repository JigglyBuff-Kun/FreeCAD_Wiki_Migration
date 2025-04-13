---
title: PartDesign Migrare
---
:::caution
This tool is obsolete, it is not available in1.0 and above.
:::

|  |
| --- |
| PartDesign Migrate |
| poziția meniului |
| Part Design → Migrate |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Atelierul PartDesign în FreeCAD v0.17 introduce noi instrumente și elemente care și elemente care nu sunt recunoscute de versiunile mai vechi ale FreeCAD (0.16 and older). Documentele FreeCAD create în versiuni mai vechi pot fi deschise și editate. Pentru a beneficia de noile caracteristici, acestea trebuie migrate prin intermediul meniului PartDesign → Migrate.

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

## Cum se folosește

1. Deschide un document FreeCAD (≤ 0.16).
2. Comutați pe atelierul PartDesign.
3. Mergeți la meniu **Part Design** → **Migrate** .
4. Dacă funcționează migrarea, a ![](/images/Std_Part.png) [Part container](/Std_Part "Std Part") va fi creat care va deține unul sau mai multe ![](/images/PartDesign_Body.png) [Bodies](/PartDesign_Body "PartDesign Body"), fiecare gazduind un lanț de caracteristici.

## Limite

* Înainte de a începe procesul de migrare, verificați dacă modelul a fost construit cu opțiunile de rafinare automată activate (in Edit → Preferences → Part design → General), și setați preferințele dvs. în consecință. Acest lucru poate fi ușor determinat prin trecerea succesivă a vizibilității entităților din arborescența modelului.Dacă nu mai există margini reziduale între funcții cum ar fi Pads and Pockets,opțiunile de rafinare automată au fost dezactivate.
* Dacă un document de migrare conține numai schițe și funcții PartDesign, procesul de migrare poate avea succes. Unele caracteristici, cum ar fi șanfrenul și rotunjirile, pot necesita reconstruire.
* În cazul în care documentul care urmează să fie migrat are un flux de lucru amestec de Part/Part Design/Draft work flow, conversia va eșua cel mai probabil sau, în cel mai bun caz, produce rezultate neașteptate și va trebui să migrați manual.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/ro&oldid=1458123>"