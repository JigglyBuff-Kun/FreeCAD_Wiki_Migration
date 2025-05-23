---
title: Struktura dokumentu
---
![](/images/Screenshot_treeview.jpg)

Dokument FreeCADu obsahuje všechny objekty Vaší úlohy. Může obsahovat skupiny a objekty vytvořené na jakékoliv pracovní ploše. Proto můžete přepínat mezi pracovními plochami a pořád pracujete na stejném dokumentu. Dokument je to se zapisuje na disk, když ukládáte svou práci. Ve FreeCADu můžete také zároveň otevřít několik dokumentů a také otevřít několik pohledů stejného dokumentu.

Uvnitř dokumentu mohou být objekty přesunovány do skupin a mít unikátní jméno. Řízení skupin, objektů a jmen objektů se dělá především z Pohledu stromu. Také může být samozřejmě prováděno, jako všechno ve FreeCADu, pomocí interpreteru Pythonu. V Pohledu stromu můžete vytvářet skupiny, přesunovat objekty do skupin, mazat objekty nebo skupiny, pomocí kliknutí pravého tlačítka myši v pohledu stromu nebo na objekt, přejmenovávat objekty dvojklikem na jejich jméno nebo jsou i další možnosti v závislosti na právě používané pracovní ploše.

Objekty uvnitř dokumentu FreeCADu mohou být různých typů. Každá pracovní plocha může vytvářet své vlastní typy objektů např. [Pracovní plocha sít](/Mesh_Workbench/cs "Mesh Workbench/cs") vytváří síťové objekty, [Pracovní plocha Díl](/Part_Workbench/cs "Part Workbench/cs") vytváří objekty Díl, [Pracovní plocha kreslení](/Draft_Workbench/cs "Draft Workbench/cs") také vytváří objekty Díl, atd.

Jestliže je ve FreeCADu otevřen alespoň jeden dokument, potom je vždy jeden a pouze jeden aktivní dokument. Je to dokument, který je aktuálně zobrazen ve 3D pohledu, dokument na kterém právě pracujete.

## Aplikace a uživatelské prostředí

Jako téměř všechno ve FreeCADu je uživatelské prostředí (GUI) odděleno od základní aplikační části (App). Platí to i pro dokumenty. Dokumenty se také skládají ze dvou částí: Aplikační dokument, který obsahuje naše objekty a Pohledový dokument, který obsahuje reprezentaci našich objektů na obrazovce.

Představte si to jako dva prostory, které definují dané objekty. Jejich konstrukční parametry (je to kostka?, kužel?, jaké má rozměry?) jsou uloženy v Aplikačním dokumentu, zatímco jejich grafická reprezentace (je kreslený černou čarou?, modrou plochou?) je uložena v Pohledovém dokumentu. Proč se tomu tak? Protože FreeCAD může být a také je BEZ grafického rozhraní, např. uvnitř jiných programů musí být možnost pracovat s našimi objekty i když se na obrazovce nic nekreslí.

Další věc která je obsažena uvnitř Pohledového dokumentu jsou 3D pohledy. Jeden dokument může mít otevřeno několik pohledů, můžete zároveň prohlížet dokument z několika úhlů pohledu. Chtěli byste se na svou práci podívat zároveň shora a zepředu? Pak musíte mít vytvořeny dva pohledy na Váš dokument a oba uloženy v Pohledovém dokumentu. Vytvoření nového pohledu nebo zavření pohledu může být provedeno z Pohledového menu nebo kliknutím pravého tlačítka myši na záložku pohledu.

## Skriptování

Dokumenty mohou být snadno vytvářeny, zpřístupňovány a upravovány z konzoly Pythonu. Například:

```
FreeCAD.ActiveDocument

```

Vrátí aktuální (aktivní) dokument

```
FreeCAD.ActiveDocument.Blob

```

Zpřístupní objekt nazvaný "Blob" uvnitř Vašeho dokumentu

```
FreeCADGui.ActiveDocument

```

Vrátí pohledový dokument přidružený k aktuálnímu dokumentu

```
FreeCADGui.ActiveDocument.Blob

```

Zpřístupní grafickou reprezentaci (pohled) vašeho objektu Blob

```
FreeCADGui.ActiveDocument.ActiveView

```

Vrátí aktuální pohled

Retrieved from "<http://wiki.freecad.org/index.php?title=Document_structure/cs&oldid=1536746>"