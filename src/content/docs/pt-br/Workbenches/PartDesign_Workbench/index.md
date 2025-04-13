---
title: Bancada de trabalho PartDesign
---

![](/images/Workbench_PartDesign.svg)

ícone da bancada de trabalho PartDesign

## Introdução

A ![](/images/Workbench_PartDesign.svg) **Bancada PartDesign** oferece ferramentas para modelar componentes sólidos. É principalmente voltada para a criação de componentes mecânicos que podem ser fabricados e montados em um produto finalizado. No entanto, os sólidos criados podem ser usados para outras finalidades, como [modelagem BIM](/BIM_Workbench/pt-br "BIM Workbench/pt-br"), [análise por elementos finitos](/FEM_Workbench/pt-br "FEM Workbench/pt-br") ou [usinagem e impressão 3D](/CAM_Workbench/pt-br "CAM Workbench/pt-br").

A Bancada PartDesign usa uma abordagem que constrói os objetos passo a passo. Cada peça é representada por um contêiner chamado "Corpo" (Body), que organiza as operações realizadas e define um sistema de coordenadas local para a peça.

Dentro do Corpo, você cria "recursos" que dão forma ao objeto final. Esses recursos podem ser \*\*aditivos\*\* (adicionam material) ou \*\*subtrativos\*\* (removem material). Por exemplo:

- A ferramenta [Pad](/PartDesign_Pad/pt-br "PartDesign Pad/pt-br") pega um desenho 2D (esboço) e o transforma em um sólido 3D, como se "esticasse" o desenho.
- A ferramenta [Pocket](/PartDesign_Pocket/pt-br "PartDesign Pocket/pt-br") faz o contrário, criando um buraco ao "cavar" o sólido usando um desenho 2D.

Cada etapa se acumula sobre a anterior, formando o objeto completo como um processo de "camadas". Além disso, você pode usar formas básicas prontas, como [Cilindros](/PartDesign_AdditiveCylinder/pt-br "PartDesign AdditiveCylinder/pt-br") e [Esferas](/PartDesign_AdditiveSphere/pt-br "PartDesign AdditiveSphere/pt-br"), ou até sólidos criados fora do Corpo, para complementar o modelo.

Consulte a página [Edição de recursos](/Feature_editing/pt-br "Feature editing/pt-br") para uma explicação mais detalhada desse processo. Em seguida, veja [Criando um componente simples com PartDesign](/Creating_a_simple_part_with_PartDesign/pt-br "Creating a simple part with PartDesign/pt-br") para começar a criar sólidos.

A ![](/images/Workbench_Part.svg) [Bancada Part](/Part_Workbench/pt-br "Part Workbench/pt-br") é uma alternativa para criar formas usando uma abordagem chamada \*\*geometria sólida construtiva\*\* (CSG). Esse método permite combinar formas simples, como cubos e cilindros, para criar objetos mais complexos.

Se você quiser entender melhor as diferenças entre a Bancada Part e a Bancada PartDesign, confira a página [Part e PartDesign](/Part_and_PartDesign/pt-br "Part and PartDesign/pt-br").

![](/images/PartDesign_Workbench_Example.jpg)

## Ferramentas

As ferramentas da Bancada PartDesign, também chamadas de ferramentas de Projeto da Peça, estão todas reunidas no menu **Part Design** e na barra de ferramentas PartDesign. Esses recursos aparecem automaticamente assim que você carrega a Bancada PartDesign, facilitando o acesso às funções necessárias para modelagem.

### Ferramentas Auxiliares de Design de Peças

- ![](/images/PartDesign_Body.svg) [Criar corpo](/PartDesign_Body/pt-br "PartDesign Body/pt-br"): cria um objeto [Corpo](/Body/pt-br "Body/pt-br") no documento ativo e o torna ativo.

- ![](/images/PartDesign_NewSketch.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create Sketch:

: \- ![](/images/PartDesign_NewSketch.svg) [Criar esboço](/PartDesign_NewSketch/pt-br "PartDesign NewSketch/pt-br"): cria um novo esboço em uma face ou plano selecionado. Se nenhuma face for selecionada ao executar esta ferramenta, o usuário será solicitado a selecionar um plano no painel de Tarefas. A interface então muda para a [Área de Trabalho do Esboço](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") no modo de edição de esboço.

: \- ![](/images/Sketcher_MapSketch.svg) [Anexar esboço](/Sketcher_MapSketch/pt-br "Sketcher MapSketch/pt-br"): anexa um esboço à geometria selecionada do corpo ativo.

- ![](/images/Sketcher_EditSketch.svg) [Editar esboço](/Sketcher_EditSketch/pt-br "Sketcher EditSketch/pt-br"): edita o esboço selecionado.

- ![](/images/Sketcher_ValidateSketch.svg) [Validar esboço](/Sketcher_ValidateSketch/pt-br "Sketcher ValidateSketch/pt-br"): verifica a tolerância de diferentes pontos e ajusta-os.

- ![](/images/Part_CheckGeometry.svg) [Verificar geometria](/Part_CheckGeometry/pt-br "Part CheckGeometry/pt-br"): Verifica a geometria dos objetos selecionados em busca de erros.

- ![](/images/PartDesign_ShapeBinder.svg) [Criar um vinculo de forma](/PartDesign_ShapeBinder/pt-br "PartDesign ShapeBinder/pt-br"): cria um vinculo de forma referenciando a geometria de um único objeto pai.

- ![](/images/PartDesign_SubShapeBinder.svg) [Criar um vinculo de forma de sub-objeto(s)](/PartDesign_SubShapeBinder/pt-br "PartDesign SubShapeBinder/pt-br"): cria um vinculo de forma referenciando a geometria de um ou mais objetos pais.

- ![](/images/PartDesign_Clone.svg) [Criar um clone](/PartDesign_Clone/pt-br "PartDesign Clone/pt-br"): cria um clone do objeto selecionado.

- ![](/images/PartDesign_Plane.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg)Criar um plano de referência:

- ![](/images/PartDesign_Plane.svg) [Criar um plano de referência](/PartDesign_Plane/pt-br "PartDesign Plane/pt-br"): cria um plano de referência no objeto ativo.

: \- ![](/images/PartDesign_Line.svg) [Criar uma linha de referência](/PartDesign_Line/pt-br "PartDesign Line/pt-br"): cria uma linha de referência no objeto ativo.

: \- ![](/images/PartDesign_Point.svg) [Criar um ponto de referência](/PartDesign_Point/pt-br "PartDesign Point/pt-br"): cria um ponto de referência no objeto ativo.

: \- ![](/images/PartDesign_CoordinateSystem.svg) [Criar um sistema de coordenadas local](/PartDesign_CoordinateSystem/pt-br "PartDesign CoordinateSystem/pt-br"): cria um sistema de coordenadas local vinculado a uma geometria de referência no corpo ativo.

: [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): these tools have been replaced by new [datum tools](/Std_Base#Part_Datums "Std Base").

### Ferramentas de Modelagem do Part Design

#### Ferramentas de Adições

Essas são ferramentas para criar características básicas ou adicionar material a um corpo existente.

- ![](/images/PartDesign_Pad.svg) [Pad](/PartDesign_Pad/pt-br "PartDesign Pad/pt-br"): extruda (ou empurra) uma peça sólida a partir de um esboço selecionado, ou seja, cria um volume sólido estendendo o contorno do esboço para uma terceira dimensão.

- ![](/images/PartDesign_Revolution.svg) [Revolução](/PartDesign_Revolution/pt-br "PartDesign Revolution/pt-br"): cria uma peça sólida ao girar um esboço em torno de um eixo. O esboço deve formar um perfil fechado.

- ![](/images/PartDesign_AdditiveLoft.svg) [Loft aditivo](/PartDesign_AdditiveLoft/pt-br "PartDesign AdditiveLoft/pt-br"): cria um sólido, fazendo uma transição entre dois ou mais esboços.

- ![](/images/PartDesign_AdditivePipe.svg) [Aditivo de varredura](/PartDesign_AdditivePipe/pt-br "PartDesign AdditivePipe/pt-br"): cria um sólido ao varrer um ou mais esboços ao longo de um caminho aberto ou fechado.

- ![](/images/PartDesign_AdditiveHelix.svg) [Hélice aditiva](/PartDesign_AdditiveHelix/pt-br "PartDesign AdditiveHelix/pt-br"): cria um sólido ao varrer um esboço ao longo de uma hélice.

- ![](/images/PartDesign_AdditiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create an additive primitive:

: \- ![](/images/PartDesign_AdditiveBox.svg) [Cubo aditivo](/PartDesign_AdditiveBox/pt-br "PartDesign AdditiveBox/pt-br"): cria um cubo aditivo.

: \- ![](/images/PartDesign_AdditiveCylinder.svg) [Cilindro aditivo](/PartDesign_AdditiveCylinder/pt-br "PartDesign AdditiveCylinder/pt-br"): cria um cilindro aditivo.

: \- ![](/images/PartDesign_AdditiveSphere.svg) [Esfera aditiva](/PartDesign_AdditiveSphere/pt-br "PartDesign AdditiveSphere/pt-br"): cria uma esfera aditiva.

: \- ![](/images/PartDesign_AdditiveCone.svg) [Cone aditivo](/PartDesign_AdditiveCone/pt-br "PartDesign AdditiveCone/pt-br"): cria um cone aditivo.

: \- ![](/images/PartDesign_AdditiveEllipsoid.svg) [Elipsóide aditiva](/PartDesign_AdditiveEllipsoid/pt-br "PartDesign AdditiveEllipsoid/pt-br"): cria uma elipsóide aditiva.

: \- ![](/images/PartDesign_AdditiveTorus.svg) [Toro aditivo](/PartDesign_AdditiveTorus/pt-br "PartDesign AdditiveTorus/pt-br"): cria um toro aditivo.

: \- ![](/images/PartDesign_AdditivePrism.svg) [Prisma aditivo](/PartDesign_AdditivePrism/pt-br "PartDesign AdditivePrism/pt-br"): cria um prisma aditivo.

: \- ![](/images/PartDesign_AdditiveWedge.svg) [Cunha aditiva](/PartDesign_AdditiveWedge/pt-br "PartDesign AdditiveWedge/pt-br"): cria uma cunha aditiva.

#### Ferramentas subtrativas

Estas são ferramentas para subtrair material de um corpo existente.

- ![](/images/PartDesign_Pocket.svg) [Cavidade](/PartDesign_Pocket/pt-br "PartDesign Pocket/pt-br"): cria uma cavidade a partir do esboço selecionado.

- ![](/images/PartDesign_Hole.svg) [Perfuração](/PartDesign_Hole/pt-br "PartDesign Hole/pt-br"): cria uma função de perfuração a partir do esboço selecionado. O esboço deve conter um ou mais círculos.

- ![](/images/PartDesign_Groove.svg) [Sulco](/PartDesign_Groove/pt-br "PartDesign Groove/pt-br"): cria uma ranhura ao girar um esboço em torno de um eixo.

- ![](/images/PartDesign_SubtractiveLoft.svg) [Loft subtrativo](/PartDesign_SubtractiveLoft/pt-br "PartDesign SubtractiveLoft/pt-br"): cria um sólido, fazendo uma transição entre pelo menos dois esboços e depois o subtrai do corpo ativo.

- ![](/images/PartDesign_SubtractivePipe.svg) [Escaneamento subtrativo](/PartDesign_SubtractivePipe/pt-br "PartDesign SubtractivePipe/pt-br"): cria uma forma sólida ao varrer um ou mais esboços ao longo de um caminho aberto ou fechado e o subtrai do corpo ativo.

![](/images/PartDesign_SubtractiveHelix.svg) [Hélice subtrativa](/PartDesign_SubtractiveHelix/pt-br "PartDesign SubtractiveHelix/pt-br"): cria uma forma sólida ao deslocar um esboço ao longo de uma hélice e subtrai essa forma do corpo ativo.

- ![](/images/PartDesign_SubtractiveBox.svg)![](/images/Toolbar_flyout_arrow_blue_background.svg) Create a subtractive primitive:

: \- ![](/images/PartDesign_SubtractiveBox.svg) [Cubo subtrativa](/PartDesign_SubtractiveBox/pt-br "PartDesign SubtractiveBox/pt-br"): adiciona um cubo subtrativa ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveCylinder.svg) [Cilindro subtrativo](/PartDesign_SubtractiveCylinder/pt-br "PartDesign SubtractiveCylinder/pt-br"): adiciona um cilindro subtrativo ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveSphere.svg) [Esfera subtrativa](/PartDesign_SubtractiveSphere/pt-br "PartDesign SubtractiveSphere/pt-br"): adiciona uma esfera subtrativa ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveCone.svg) [Cone subtrativo](/PartDesign_SubtractiveCone/pt-br "PartDesign SubtractiveCone/pt-br"): adiciona um cone subtrativo ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveEllipsoid.svg) [Elipsóide subtrativa](/PartDesign_SubtractiveEllipsoid/pt-br "PartDesign SubtractiveEllipsoid/pt-br"): adiciona uma elipsóide subtrativa ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveTorus.svg) [Toro subtrativo](/PartDesign_SubtractiveTorus/pt-br "PartDesign SubtractiveTorus/pt-br"): adiciona um toro subtrativo ao corpo ativo.

: \- ![](/images/PartDesign_SubtractivePrism.svg) [Prisma subtrativo](/PartDesign_SubtractivePrism/pt-br "PartDesign SubtractivePrism/pt-br"): adiciona um prisma subtrativo ao corpo ativo.

: \- ![](/images/PartDesign_SubtractiveWedge.svg) ‎[Cunha subtrativa](/PartDesign_SubtractiveWedge/pt-br "PartDesign SubtractiveWedge/pt-br"): adiciona uma cunha subtrativa ao corpo ativo.

#### Booleano

- ![](/images/PartDesign_Boolean.svg) [Operação booleana](/PartDesign_Boolean/pt-br "PartDesign Boolean/pt-br"): importa um ou mais Corpos ou Clones PartDesign para o corpo ativo e aplica uma operação booleana.

### Ferramentas de Acabamento

- ![](/images/PartDesign_Revolution.svg) [Revolução](/PartDesign_Revolution "PartDesign Revolution"): cria uma peça sólida ao girar um esboço em torno de um eixo. O esboço deve formar um perfil fechado.

- ![](/images/PartDesign_Fillet.svg) [Filete](/PartDesign_Fillet/pt-br "PartDesign Fillet/pt-br"): filetes (redondos) bordas do corpo ativo.

- ![](/images/PartDesign_Chamfer.svg) [Chanfro](/PartDesign_Chamfer/pt-br "PartDesign Chamfer/pt-br"): chanfraduras das bordas do corpo ativo.

- ![](/images/PartDesign_Draft.svg) [Rascunho](/PartDesign_Draft/pt-br "PartDesign Draft/pt-br"): aplica um esboço angular a rostos selecionados do corpo ativo.

- ![](/images/PartDesign_Thickness.svg) [Espessura](/PartDesign_Thickness "PartDesign Thickness"): cria uma casca espessa a partir do corpo ativo e abre a face selecionada.

### Ferramentas de Transformação

Estas são ferramentas para transformar características existentes.

- ![](/images/PartDesign_Mirrored.svg) [Espelhado](/PartDesign_Mirrored "PartDesign Mirrored"): espelha uma ou mais características.

- ![](/images/PartDesign_LinearPattern.svg) [Padrão Linear](/PartDesign_LinearPattern "PartDesign LinearPattern"): cria um padrão linear de uma ou mais características.

- ![](/images/PartDesign_PolarPattern.svg) [Padrão Polar](/PartDesign_PolarPattern "PartDesign PolarPattern"): cria um padrão de repetição circular de uma ou mais características ao redor de um ponto central.

- ![](/images/PartDesign_MultiTransform.svg) [Criar MultiTransformação](/PartDesign_MultiTransform "PartDesign MultiTransform"): cria um padrão combinando qualquer uma das transformações mencionadas acima, além da transformação [Escalonada](/PartDesign_Scaled "PartDesign Scaled").
  - ![](/images/PartDesign_Scaled.svg) [Escalonada](/PartDesign_Scaled "PartDesign Scaled"): escala uma ou mais características. Esta transformação não está disponível como uma ferramenta separada.

#### Extras

Algumas funcionalidades adicionais encontradas no menu Design da peça:

- ![](/images/PartDesign_Sprocket.svg) [Roda dentada](/PartDesign_Sprocket/pt-br "PartDesign Sprocket/pt-br"): cria o perfil de uma roda dentada, que pode ser extrudado (transformado em uma peça 3D com espessura). A roda dentada é um componente usado para transmitir movimento rotacional, geralmente em sistemas de corrente.

- ![](/images/PartDesign_InvoluteGear.svg) [Engrenagem involuta](/PartDesign_InvoluteGear/pt-br "PartDesign InvoluteGear/pt-br"): cria o perfil de uma engrenagem com formato involuto, que pode ser extrudado (transformado em um objeto 3D com espessura) para criar uma peça sólida. O formato involuto é um tipo de curvatura comumente usado em engrenagens, proporcionando um movimento de transmissão mais suave e eficiente.

- ![](/images/PartDesign_WizardShaft.svg) [Assistente de projeto do eixo](/PartDesign_WizardShaft/pt-br "PartDesign WizardShaft/pt-br"): Gera um eixo a partir de uma tabela de valores e permite analisar forças e momentos. O eixo é feito com um esboço giratório que pode ser editado.

### Itens do menu de contexto

- [Suprimido](/index.php?title=PartDesign_Suppressed/pt-br&action=edit&redlink=1 "PartDesign Suppressed/pt-br (page does not exist)"): caixa de seleção para desativar um recurso específico sem excluí-lo. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/PartDesign_MoveTip.svg) [Definir ponta](/PartDesign_MoveTip/pt-br "PartDesign MoveTip/pt-br"): redefine a ponta, que é o recurso exposto fora do Corpo.

- ![](/images/PartDesign_MoveFeature.svg) [Mover objeto para outro corpo](/PartDesign_MoveFeature/pt-br "PartDesign MoveFeature/pt-br"): move o esboço, geometria de referência ou recurso selecionado para outro Corpo.

- ![](/images/PartDesign_MoveFeatureInTree.svg) [Mover objeto após outro objeto](/PartDesign_MoveFeatureInTree/pt-br "PartDesign MoveFeatureInTree/pt-br"): permite reordenar a árvore do Corpo movendo o esboço, geometria de referência ou recurso selecionado para outra posição na lista de recursos. Isso ajuda a controlar a ordem de criação dos recursos no modelo, o que pode influenciar como as operações são aplicadas, já que a ordem dos recursos na árvore afeta o resultado final do modelo. Por exemplo, ao mover um esboço ou recurso para uma posição diferente, você pode alterar a sequência de operações, o que pode modificar a geometria do modelo.

#### Itens compartilhados com a Bancada Part

- ![](/images/Std_SetAppearance.svg) [Aparência](/Std_SetAppearance/pt-br "Std SetAppearance/pt-br"): determina a aparência de toda a peça (cor, transparência, etc.).

- ![](/images/Part_ColorPerFace.svg) [Cor por face](/Part_ColorPerFace/pt-br "Part ColorPerFace/pt-br"): Permite atribuir cores diferentes para as faces individuais dos objetos. Isso significa que, em vez de aplicar uma única cor a todo o objeto, você pode personalizar cada face do objeto com uma cor específica, o que pode ser útil para destacar ou diferenciar partes de um modelo 3D.

### Ferramentas Obsoletas

- ![](/images/PartDesign_Migrate.svg) [Migrar](/PartDesign_Migrate/pt-br "PartDesign Migrate/pt-br"): migra arquivos de versões do FreeCAD anteriores à 0.17 para a versão 0.17. Esta ferramenta não está disponível na 1.0 and above.

### Preferências

- ![](/images/Preferences-part_design.svg) [Preferências](/PartDesign_Preferences/pt-br "PartDesign Preferences/pt-br"): preferências disponíveis para as ferramentas do PartDesign.
- [Ajustes finos](/Fine-tuning/pt-br "Fine-tuning/pt-br"): alguns parâmetros extras para ajustar o comportamento do PartDesign.

## Tutoriais

- [Como usar o FreeCAD](http://help-freecad-jpg87.fr/), um site que descreve o fluxo de trabalho para o design mecânico.
- [Criando uma peça simples com o PartDesign](/Creating_a_simple_part_with_PartDesign/pt-br "Creating a simple part with PartDesign/pt-br")
- [Tutorial Básico de Design de Peças 019](/index.php?title=Basic_Part_Design_Tutorial_019/pt-br&action=edit&redlink=1 "Basic Part Design Tutorial 019/pt-br (page does not exist)")
- [Tutorial PartDesign Suporte de Rolamento I](/PartDesign_Bearingholder_Tutorial_I/pt-br "PartDesign Bearingholder Tutorial I/pt-br") (precisa de atualização)
- [Tutorial PartDesign Suporte de Rolamento II](/PartDesign_Bearingholder_Tutorial_II/pt-br "PartDesign Bearingholder Tutorial II/pt-br") (precisa de atualização)

## Exemplos

Para algumas ideias do que pode ser alcançado com as ferramentas do PartDesign, confira: [Exemplos do PartDesign](/index.php?title=PartDesign_Examples/pt-br&action=edit&redlink=1 "PartDesign Examples/pt-br (page does not exist)").

![](/images/PartDesign_ExampleSphere-02.png)
![](/images/PartDesign_ExampleTorus-01.png)
![](/images/PartDesign_ExamplePad-09.png)
![](/images/PartDesign_ExampleSweep-02.png)
![](/images/PartDesign_ExampleSweep-05.png)
![](/images/PartDesign_ExampleSpring-04.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Workbench/pt-br&oldid=1529326>"
