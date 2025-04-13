---
title: Melhorias no SectionCut
---
|  |
| --- |
| Part SectionCut |
| Menu location |
| Exibir → Corte Seccional Persistente |
| Workbenches |
| Todas |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.20 |
| See also |
| [Alternar Plano de Corte](/index.php?title=Std_ToggleClipPlane/pt-br&action=edit&redlink=1 "Std ToggleClipPlane/pt-br (page does not exist)") |
|  |

## Descrição

A funcionalidade **Corte Seccional** está disponível para todas as bancadas, mas funciona apenas para objetos do Part e PartDesign e montagens desses tipos. Ela cria um corte persistente de objetos e montagens. Como o resultado do corte é um objeto ![](/images/Part_Cut.svg) [Corte de Peça](/Part_Cut/pt-br "Part Cut/pt-br") normal, ele pode ser modificado posteriormente ou, por exemplo, impresso em 3D. Veja abaixo possíveis aplicações.

![](/images/Part_SectionCut_example.png)

Uma montagem cortada. Algumas faces do corte foram coloridas manualmente. A peça amarela não foi cortada porque foi propositalmente movida um mícron para dentro de outra peça.

## Utilização

![](/images/Part_SectionCut_Dialog.png)

O diálogo de Corte Seccional.

O diálogo **Corte Seccional** é aberto através do menu **Exibir → ![](/images/Part_SectionCut.svg) Corte Seccional Persistente**. Ele é independente da bancada atual e do documento atualmente aberto. Pode ser destacado de sua posição inicial pressionando o botão no canto superior direito do diálogo.

A funcionalidade **Corte Seccional** considera todos os objetos Part atualmente visíveis no documento ativo. Portanto, é possível controlar o que será cortado tornando uma peça visível ou invisível. Ao selecionar uma das opções de **Corte** no diálogo, a funcionalidade é ativada. Você pode então inserir uma posição (em coordenadas do documento) ou usar os deslizadores para definir a posição do corte. Também é possível combinar cortes, por exemplo, para cortar nas direções X e Z. Os botões Inverter alternam o lado que será cortado.

Assim que uma opção de **Corte** é selecionada no diálogo, um objeto de corte aparece na [visualização de árvore](/Tree_view/pt-br "Tree view/pt-br"). O nome dele é, por exemplo, *SectionCutY* quando o corte é na direção Y.

A opção do diálogo **Manter apenas os cortes visíveis ao fechar** oculta tudo na visualização de árvore, exceto o objeto de corte, quando o botão Fechar é clicado para fechar o diálogo.

Para remover o objeto de corte, desmarque todas as opções de **Corte**.

Ao desmarcar todas as opções de **Corte**, o botão Atualizar visualização se torna ativo. Quando pressionado, ele captura uma espécie de "imagem" dos objetos Part atualmente visíveis. Isso será usado quando você selecionar novamente uma opção de **Corte**. A atualização é necessária quando você troca de documento. Ela também é útil para montagens, onde você pode querer ocultar algumas peças ou adicioná-las posteriormente ao corte. Nesse caso, a atualização recalcula os valores mínimo/máximo dos deslizadores e as posições de corte de acordo com as dimensões dos objetos atualmente visíveis.

Se a opção **Automático** na seção de faces de corte estiver marcada, a cor e a transparência dos objetos cortados serão aplicadas à face do corte. Isso só funciona se todos os objetos cortados tiverem a mesma cor ou transparência.

A opção **Cortar objetos que se intersectam** permite cortar também objetos que se intersectam entre si. Em montagens, as interseções podem ocorrer às vezes com objetos que foram projetados para apenas tocar-se, devido a problemas de precisão numérica. A desvantagem dessa opção é que todos os objetos visíveis receberão a mesma cor. Essa cor pode ser especificada como na seção de faces de corte do diálogo.  
Se você precisar do corte, por exemplo, para uma boa imagem com várias cores de face, pode alterar as cores das faces usando a ferramenta ![](/images/Part_ColorPerFace.svg) [Cor por face](/Part_ColorPerFace/pt-br "Part ColorPerFace/pt-br").

**Nota:** Para montagens, os deslizadores no diálogo são desativados (exceto o para a transparência). A razão é que o movimento de um deslizante resulta em várias operações de corte em um curto espaço de tempo. Para montagens, isso rapidamente consome toda a potência da CPU, e um movimento de deslizante instável não é útil.

Quando você seleciona um objeto de corte na visualização de árvore e, em seguida, abre o diálogo de Corte Seccional, as posições do corte serão lidas para o diálogo.

￼

## Aplicações

* Um caso de uso importante é que o Corte Seccional cria cortes preenchidos, não vazios, como a funcionalidade ![](/images/Std_ToggleClipPlane.svg) [Plano de Corte](/index.php?title=Std_ToggleClipPlane/pt-br&action=edit&redlink=1 "Std ToggleClipPlane/pt-br (page does not exist)").
* O Corte Seccional é útil para montagens, por exemplo, para visualizar o princípio de funcionamento de um dispositivo. Você pode querer colorir certas faces de corte usando a ferramenta ![](/images/Part_ColorPerFace.svg) [Cor por face](/Part_ColorPerFace/pt-br "Part ColorPerFace/pt-br"). Para usar a ferramenta, alterne para a bancada Part ou PartDesign, clique com o botão direito no objeto de corte na visualização de árvore e selecione no menu de contexto **Definir cores**.
* Sem a opção **Cortar objetos que se intersectam**, apenas as peças que não se intersectam com outras serão cortadas. Isso pode ser usado como um teste de colisão.
* A funcionalidade Corte Seccional pode ser usada para desenhos técnicos, a fim de destacar certas áreas ou para permitir a inclusão de dimensões. A imagem abaixo mostra um exemplo onde as funcionalidades [TechDraw](/TechDraw_Workbench/pt-br "TechDraw Workbench/pt-br") ![](/images/TechDraw_ActiveView.svg) [Vista Ativa](/index.php?title=TechDraw_ActiveView/pt-br&action=edit&redlink=1 "TechDraw ActiveView/pt-br (page does not exist)") e ![](/images/TechDraw_View.svg) [Vista](/index.php?title=TechDraw_View/pt-br&action=edit&redlink=1 "TechDraw View/pt-br (page does not exist)") são usadas.

![](/images/Part_SectionCut_TD-example.png)

Um desenho técnico onde o resultado de um Corte Seccional é utilizado. (Clique na imagem para visualizar em tamanho completo.)

## Posições de corte especiais

![](/images/Part_SectionCut_slant-cut.png)

Um corte inclinado de uma montagem.

* Por exemplo, na primeira imagem desta página, apenas um quarto da montagem é cortado. Isso foi feito criando um corte na direção X. Em seguida, no objeto de corte resultante **SectionCutX**, o [posicionamento](/index.php?title=Placement/pt-br&action=edit&redlink=1 "Placement/pt-br (page does not exist)") do subobjeto **SectionCutBoxX** foi alterado.
* Para obter um corte em qualquer direção, você pode fazer o seguinte:

1. Crie um novo contêiner [Std Parte](/Std_Part/pt-br "Std Part/pt-br").
2. Selecione todos os objetos que deseja cortar na visualização de árvore e mova-os para o contêiner.
3. Agora, defina o posicionamento do contêiner para uma rotação de sua escolha. Para a imagem à esquerda, o contêiner foi rotacionado em 45° ao redor dos eixos X e Z, e o corte seccional foi realizado na direção X.

## Limitações

![](/images/Part_SectionCut_Color-artifact.png)

Uma montagem onde duas peças se intersectam e, portanto, não são cortadas. Observe os artefatos de cor na face do corte.

* **Importante:** A funcionalidade Corte Seccional funciona de forma inadequada com [OpenCASCADE](/OpenCASCADE/pt-br "OpenCASCADE/pt-br") 7.4 e versões anteriores devido a erros. Portanto, é recomendável usar o OpenCASCADE 7.5 ou versões mais recentes (todas as versões do FreeCAD 0.20 and above garantem isso).
* 1.0 and above: A opção **Cortar objetos que se intersectam** colorirá todas as peças visíveis da mesma forma. Isso tecnicamente não pode ser evitado. No entanto, se for necessário o corte persistente para, por exemplo, uma apresentação, veja o método descrito acima sobre como redefinir a cor manualmente.
* 0.20 and below: Em montagens, **peças que se intersectam não podem ser cortadas**. Normalmente, objetos que se intersectam não serão cortados enquanto os outros serão. No entanto, às vezes o corte pode produzir resultados estranhos, o que é um erro nas bibliotecas do OpenCASCADE.  
   Para obter uma visualização de corte também para objetos que se intersectam, você pode usar a macro [Corte Seccional](/index.php?title=Macro_cross_section/pt-br&action=edit&redlink=1 "Macro cross section/pt-br (page does not exist)").
* 0.20 and below: Especialmente ao usar a [bancada A2plus](/A2plus_Workbench/pt-br "A2plus Workbench/pt-br"), algumas peças montadas podem se sobrepor por apenas um micron devido a erros internos de arredondamento. Para corrigir isso, adicione um micron de espaço nas configurações de restrição.
* Podem ocorrer artefatos de cor no resultado do corte. Se e como isso ocorre depende da biblioteca OpenCASCADE e também da posição da visualização. Em muitos casos, os artefatos de cor desaparecem quando a visualização 3D é ligeiramente rotacionada.
* Quando se tem objetos cortados com cores diferentes, não é possível aplicar automaticamente a cor desses objetos nas faces de corte correspondentes. Todas as faces de corte terão a mesma cor selecionada no diálogo.
* Ao usar a [bancada A2plus](/A2plus_Workbench/pt-br "A2plus Workbench/pt-br"), não é possível aplicar automaticamente a cor das peças montadas nas faces de corte correspondentes. Todas as faces de corte terão a mesma cor selecionada no diálogo. O motivo é que o A2plus não insere as peças [como link](/App_Link/pt-br "App Link/pt-br"), mas as carrega como arquivo.

## Informações de Fundo

**Corte Seccional** é inspirado pela macro [Corte Seccional](/index.php?title=Macro_cross_section/pt-br&action=edit&redlink=1 "Macro cross section/pt-br (page does not exist)") e funciona tecnicamente da seguinte maneira:

Todos os objetos visíveis são colocados em um contêiner ![](/images/Part_Compound.svg) [Part Compound](/Part_Compound/pt-br "Part Compound/pt-br"). Para a opção **Cortar objetos que se intersectam**, é utilizado um contêiner ![](/images/Part_BooleanFragments.svg) [Fragmentos Booleanos](/Part_BooleanFragments/pt-br "Part BooleanFragments/pt-br"). O composto é cortado usando um objeto ![](/images/Part_Box.svg) [Part Box](/Part_Box/pt-br "Part Box/pt-br"). A caixa deve ser grande o suficiente para cobrir todo o volume de todos os objetos visíveis. Para conseguir isso, a caixa delimitadora dos objetos é adquirida. Ao mudar a visualização, adicionando/removendo objetos ou alterando o documento, a caixa delimitadora precisa ser atualizada. Isso é feito quando o botão Atualizar visualização é clicado.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_SectionCut/pt-br&oldid=1552325>"