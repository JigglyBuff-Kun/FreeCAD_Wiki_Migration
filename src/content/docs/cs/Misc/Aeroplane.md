---
title: Letadlo
---
|  |
| --- |
| Tutorial |
| Topic |
| Part Workbench |
| Level |
| Beginner |
| Time to complete |
| 10 minutes |
| Authors |
|  |
| FreeCAD version |
|  |
| Example files |
|  |
| See also |
| *None* |
|  |

## First Steps

## První kroky

Budeme pracovat v [pracovní ploše Díl](/Part_Workbench/cs "Part Workbench/cs") - vyberte ji z menu Pohled->Pracovní plocha->Díl nebo ze selektoru pracovních ploch.

* Vytvořte nový prázdný dokument.
* Přepněte do axonometrického pohledu.
* Přepněte osový kříž na ON (zapnuto) (v menu Pohled).
* Ujistěte se, že je zobrazen Combo pohled (přes Pohled->Pohledy).

* Vytvořte válec kliknutím na tlačítko ![](/images/Part_Cylinder.png) [Válec](/Part_Cylinder/cs "Part Cylinder/cs").
* Vyberet ho kliknutím na Válec v okně projektu.
* Klikněte na záložku Data v dolní části okna projektu.

Změňte výšku na 20mm. Poloměr ponechte na 2mm.

Klikněte na [umístění](/Tasks_Placement/cs "Tasks Placement/cs") (všimněte si malého [+]) a zobrazí se tlačítko se třemi tečkami. Klikněte na ně. (Taky můžete vybrat: Menu->Edit->Umístění.) Zobrazí se okno úloh.

![](/images/HTCaeroplane01.png)

Pokud nejste obeznámeni s prací s osami XYZ pak si pohrajte s čísly v poli Posunů. Když s hraním skončíte klikněte na tlečítko Reset.

## Další kroky

![](/images/HTCaeroplane02.png)

Nyní otočíme válec tak aby ležel v ose X. K tomu je potřeba aby se otočil kolem osy Y. Okénko pro otáčení by mělo obsahovat 'Otáčení os podle úhlu', změňte osu na Y a zvyšte úhel na 90. Klikněte na OK.

Musím přiznat, že si často rád hraji s otáčením pohledu. Taky byste mohli najít 'šev' cylindru na spodni straně.

![](/images/HTCaeroplane03.png)

Teď budeme přidávat a upravovat desku a tak klikneme na tlačítko ![](/images/Part_Box.png) [Box](/Part_Box/cs "Part Box/cs"). Vybereme je kliknutím na Box v okně projektu.
Změníme výšku na 1mm, délku na 5mm a šířku na 20mm.

Klikneme na [Umístění a tři tečky](/Tasks_Placement/cs "Tasks Placement/cs") abychom se dostali do okna úloh. V poli pro posun zadáme Y: -10 a Z: -1. Klikneme na OK.

Teď sloučíme tyto dva tvary dohromady pomocí boolean (logické) operace. Klikneme na tlačítko ![](/images/Part_Booleans.png) [Boolean](/Part_Boolean/cs "Part Boolean/cs") a okno úloh zobrazí selektor pro výběr boolovské operace.

Ujistěte se, že je vybrána oprace Union (sloučení) a že jsou v seznamu tvarů zakliknuty jak válec, tak i deska. Klikněte na Použít. Klikněte na Zavřít. Nyní z nich máme jeden objekt nazvaný Fusion.

Přidejme ještě jednu desku pro dokončení modelu. Vytvořte desku, vyberte ji a změňte výšku na 5mm, délku na 3mm a šířku na 1mm. Změňte umístění Y: -0.5.

Teď potřebujeme sloučit Fusion s Box001, uděláme to rychlým způsobem. Kliknete na Fusion v okně projektu a se stisknutou klávesou CTRL kliknete na Box001. Tím vyberete současně obě části. Teď kliknete na tlačítko ![](/images/Part_Union.png) [Sloučit](/Part_Union/cs "Part Union/cs") a dostanete sloučený Fusion001.

Nyní byste měli mít jednoduchý model letadla, Pravým kliknutím na Fusion001 je přejmenujete na 'Aeroplane'.

![](/images/HTCaeroplane04.png)

Myslím, že křídlo by mělo být posunuto dopředu, ale když vyberu Aeroplane a zkusim změnit umístění posunem X, posune se celý model. Ale já jsem chtěl posunout jenom křídlo, takže změnu umístění zruším.

Zvětšíme Aeroplane (kliknutím na [+] vedle něj) a zvětšíme Fusion.

Klikneme na Box a dostaneme jeho [Umístění do Úloh](/Tasks_Placement/cs "Tasks Placement/cs"). Všimněte si, že v poli posunů už má Y: -10 a Z: -1. Změňte posun X na 3 a klikněte na Použít. Už je to lepší. Klikněte na OK.

## Otáčení

Klikněte na Aeroplane a dostanete jeho [Umístění do Úloh](/Tasks_Placement/cs "Tasks Placement/cs") (Další vysvětlení je v [Umístění](/Placement/cs "Placement/cs")). V části Otáčení změňte výběr 'Otáčení os podle úhlu' na 'Eulerovy úhly', protože ty jsou pro práci mnohem snadnější.

* [![Yaw je otáčení podle osy Z, tj. otáčení zleva doprava. (Úhel odchylky (yaw) je Psi ψ).](/images/Tache_Placement_Lacet_fr_Mini.gif)](/File:Tache_Placement_Lacet_fr_Mini.gif  "Yaw je otáčení podle osy Z, tj. otáčení zleva doprava. (Úhel odchylky (yaw) je Psi ψ).")

  **Yaw** je otáčení podle  **osy Z**, tj. otáčení zleva doprava. (Úhel odchylky (yaw) je **Psi ψ**).
* ![Pitch je otáčení podle osy Y, tj. předkem nahoru nebo dolu.](/images/Tache_Placement_Tangage_fr_Mini.gif)

  **Pitch** je otáčení podle  **osy Y**, tj. předkem nahoru nebo dolu.
* ![Roll je otáčení podle osy X, tj. křidlem nahoru nebo dolu.](/images/Tache_Placement_Roulis_fr_Mini.gif)

  **Roll** je otáčení podle  **osy X**, tj. křidlem nahoru nebo dolu.

Nicméně, zde je potřeba mít na paměti několik důležitých věcí:

* Pozitivní otáčení je ve směru hodinových ručiček při pohledu z počátku směrem ven podle pozitivní osy. Nebo jinak řečeno: Pozitivní rotace je proti směru hodinových ručiček když se podíváte z pozitivní osy směrem k počátku.

* Ačkoliv tři označení jsou Yaw, Pitch a Roll není to přesně to co to znamená (česky nám to stejně může být jedno). Yaw, Pitch a Roll jsou reference vzhledem k *souřadnicím soustavy* objektu ve 3D prostoru. Správně by označení mělo být Heading, Elevation a Bank nebo přímo Azimuth, Inclination a Bank, protože ve skutečnosti odkazují na *prostorové souřadnice* ve 3D systému. Jsou to **Tait-Bryanovy úhly**. Chcete-li o tom více informací pak zkuste [Eulerovy úhly](http://en.wikipedia.org/wiki/Euler_angles#Tait-Bryan_angles).

* U Aeroplane v jeho aktuální pozici jsou použita jednoduchá pravidla. Yaw je rotace kolem osy Z, tj. doleva a doprava. Pitch je rotace kolem osy Y, tj. předkem nahoru a dolu. Roll je rotace kolem osy X, tj. křídlo nahoru a dolu. To je dostatečné pro začátek, ale později to nebude až tak pravda!

Pohrejme si se třemi čísly YPR (Yaw, Pitch, Roll). Stačí něco pouze změnit o pár stupňů abyste pochopili jak to funguje. Až skončíte, tak dejte Reset.

Nyní se podíváme proč označení Yaw-Pitch-Roll nejsou až tak moc vhodné. Změňte Roll na 90°. Yaw by mělo posunout předek letadla nahoru a dolu a Pitch by je mělo posunout ze strany na stranu "při pohledu zvenku letadla", což je kde jsme my. Funguje to tak? Ne, nefunguje! Pitch mění yaw a Yaw mění pitch. OK, Reset.

Takže lepší představa o otáčení je, že Yaw mění po délce, Pitch mění podle šířky a Roll mění směr (NSEW) kterým hledíte. Nebo byste se taky mohli podívat na [Osové konvence](http://en.wikipedia.org/wiki/Axes_conventions) pro další informace.

Dobrá a teď zpět do práce. Změňte Yaw na 45° a Pitch na -30°. Klikněte na OK pro zobrazení dokončené operace. Nyní se vraťte do [Umístění úloh](/Tasks_Placement/cs "Tasks Placement/cs") a podívejte se na pole Otáčení. Vrátilo se do 'Otáčení os podle úhlů' a má nějaká podivná čísla v polích os a úhlu. U mne měly osy: (0.219493,-0.529904,0.819161) a úhel: 53.65°. Ty tři čísla v závorce jsou komponenty XYZ jednotkového vektoru ve 3D prostou. Je to osa, kolem které bylo původní letadlo otáčeno do cílové pozice. A úhel říká o kolik bylo otočeno. Chytré, že, ale ne moc přehledné! Byl to Euler kdo předvedl, že můžete sérii XYZ rotací zkombinovat do jedné rotace kolem jedné osy.

Tady je ještě několik nápadů jak si můžete s letadlem pohrát:

* Změňte umístění Z (a Použít) potom změňte čísla YPR a podívejte se jaký to mělo efekt. Potom zkuste změnit umístění X a Y a otáčení.
* Změňte střed X (a Použít) potom změňte čísla YPR a podívejte se jaký to mělo efekt. Potom zkuste změnit středy Y a Z otáčení.

Doufám, že Vám tento výukový program pomohl orientovat se v otáčení objektů.

Retrieved from "<http://wiki.freecad.org/index.php?title=Aeroplane/cs&oldid=1251522>"