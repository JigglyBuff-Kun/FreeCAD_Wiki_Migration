---
title: Bancada de trabalho OpenSCAD
---

![](/images/Workbench_OpenSCAD.svg)

OpenSCAD workbench icon

## Introdução

A ![](/images/Workbench_OpenSCAD.svg) Bancada de trabalho OpenSCAD tem como objetivo oferecer interoperabilidade com o software de código aberto [OpenSCAD](http://www.openscad.org/). Esse programa não é distribuído como parte do FreeCAD, mas deve ser instalado para fazer uso total desta bancada de trabalho. O OpenSCAD não deve ser confundido com o [OpenCASCADE](/OpenCASCADE/pt-br "OpenCASCADE/pt-br"), que é o núcleo geométrico que o FreeCAD utiliza para construir a geometria na tela. As bibliotecas do OpenCASCADE são sempre necessárias para usar o FreeCAD, enquanto o executável do OpenSCAD é totalmente opcional.

Ela contém um importador [CSG](/OpenSCAD_CSG "OpenSCAD CSG") para abrir arquivos CSG do OpenSCAD e um exportador para a saída de um CSG baseado em árvore. A geometria que não está baseada em operações CSG serão exportadas como uma malha.

Esta bancada de trabalho contém funções para modificar o recurso de árvore CSG e reparar modelos. Também contém ferramentas de propósitos gerais que não necessitam de instalação do OpenSCAD; elas também podem ser utilizadas em conjunto com outras bancadas de trabalho.

![](/images/OpenSCADexamaple1.png)

## Dependências

In FreeCAD 0.19, the Ply (Python-Lex-Yacc) module, which is used to import CSG files, was removed from the FreeCAD source code, as it is a third party library not developed by FreeCAD. As a result, you now need to install Ply before using the OpenSCAD Workbench. When using a pre-packaged, stable version of FreeCAD this dependency should be installed automatically in all platforms; in other cases, for example, when [compiling](/Compiling "Compiling") from source, you may have to install it from an online repository.

In openSUSE this is done by:

```
sudo zypper install python3-ply

```

In Debian/Ubuntu based systems this is done like the following:

```
sudo apt install python3-ply

```

The general installation in all platforms can be done from the Python package index.

```
pip3 install --user ply

```

## A linguagem OpenSCAD e formato de arquivo

A linguagem OpenSCAD permite o uso de variáveis e laços de repetição. Permite que você especifique submódulos para reutilizar geometria e código. Este alto grau de flexibilidade torna a análise muito complexa. Atualmente a bancada OpenSCAD não pode manipular a linguagem OpenSCAD nativamente. Em vez disso, se o OpenSCAD estiver instalado, pode ser usado para converter a entrada em formato CSG, o qual é um subconjunto da linguagem OpenSCAD e pode ser utilizada como entrada para o OpenSCAD para processamento adicional.

## Ferramentas

- ![](/images/OpenSCAD_ColorCodeShape.svg) [Cor da Forma](/index.php?title=OpenSCAD_ColorCodeShape/pt-br&action=edit&redlink=1 "OpenSCAD ColorCodeShape/pt-br (page does not exist)"): Modifica a cor de todas as formas selecionadas baseado na validade delas.
- ![](/images/OpenSCAD_ReplaceObject.svg) [Substituir Objeto](/index.php?title=OpenSCAD_ReplaceObject/pt-br&action=edit&redlink=1 "OpenSCAD ReplaceObject/pt-br (page does not exist)"): Substitui um objeto no recurso de árvore.
- ![](/images/OpenSCAD_RemoveSubtree.svg) [Remover Subárvore](/index.php?title=OpenSCAD_RemoveSubtree/pt-br&action=edit&redlink=1 "OpenSCAD RemoveSubtree/pt-br (page does not exist)"): Remove os objetos selecionados e todos os filhos que não são referenciados de outros objetos.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Função Refinar Formas](/index.php?title=OpenSCAD_RefineShapeFeature/pt-br&action=edit&redlink=1 "OpenSCAD RefineShapeFeature/pt-br (page does not exist)"): Cria um recurso de refino de forma.
- ![](/images/OpenSCAD_RefineShapeFeature.svg) [Característica de refinar a forma](/index.php?title=OpenSCAD_RefineShapeFeature/pt-br&action=edit&redlink=1 "OpenSCAD RefineShapeFeature/pt-br (page does not exist)"): Criar característica de refinar a forma.
- ![](/images/OpenSCAD_MirrorMeshFeature.svg) [Simétrica](/index.php?title=OpenSCAD_MirrorMeshFeature/pt-br&action=edit&redlink=1 "OpenSCAD MirrorMeshFeature/pt-br (page does not exist)"): Crie simetria na Malha.
- ![](/images/OpenSCAD_ScaleMeshFeature.svg) [Escala](/index.php?title=OpenSCAD_ScaleMeshFeature/pt-br&action=edit&redlink=1 "OpenSCAD ScaleMeshFeature/pt-br (page does not exist)"): Escala uma característica de malha.
- ![](/images/OpenSCAD_ResizeMeshFeature.svg) [Redimensionar](/index.php?title=OpenSCAD_ResizeMeshFeature/pt-br&action=edit&redlink=1 "OpenSCAD ResizeMeshFeature/pt-br (page does not exist)"): Redimensionar uma malha.
- ![](/images/OpenSCAD_IncreaseToleranceFeature.svg) [Função Aumentar Tolerância](/index.php?title=OpenSCAD_IncreaseToleranceFeature/pt-br&action=edit&redlink=1 "OpenSCAD IncreaseToleranceFeature/pt-br (page does not exist)"): Aumenta a tolerância das arestas/faces/vértices de objetos selecionados.
- ![](/images/OpenSCAD_Edgestofaces.svg) [Converter Arestas em Faces](/index.php?title=OpenSCAD_Edgestofaces/pt-br&action=edit&redlink=1 "OpenSCAD Edgestofaces/pt-br (page does not exist)"): Converte arestas em faces. É útil para preparar geometria importada DXF para extrusão.
- ![](/images/OpenSCAD_ExpandPlacements.svg) [Expandir Posicionamento](/index.php?title=OpenSCAD_ExpandPlacements/pt-br&action=edit&redlink=1 "OpenSCAD ExpandPlacements/pt-br (page does not exist)"): Expanda todas as veiculações para baixo no FeatureTree.
- ![](/images/OpenSCAD_ExplodeGroup.svg) [Explodir Grupo](/index.php?title=OpenSCAD_ExplodeGroup/pt-br&action=edit&redlink=1 "OpenSCAD ExplodeGroup/pt-br (page does not exist)"): Explode peças fundidas primitivas.
- ![](/images/OpenSCAD_AddOpenSCADElement.svg) [Adicionar elemento OpenSCAD](/index.php?title=OpenSCAD_AddOpenSCADElement/pt-br&action=edit&redlink=1 "OpenSCAD AddOpenSCADElement/pt-br (page does not exist)"): Adiciona um elemento OpenSCAD ao inserir um código OpenSCAD no painel de tarefas.
- ![](/images/OpenSCAD_MeshBoolean.svg) [Booleano Malha](/index.php?title=OpenSCAD_MeshBoolean/pt-br&action=edit&redlink=1 "OpenSCAD MeshBoolean/pt-br (page does not exist)"): Cria um novo objeto de malha através de operação booleana de formas.
- ![](/images/OpenSCAD_Hull.svg) [Casco](/index.php?title=OpenSCAD_Hull/pt-br&action=edit&redlink=1 "OpenSCAD Hull/pt-br (page does not exist)"): Aplica um casco às formas selecionadas.
- ![](/images/OpenSCAD_Minkowski.svg) [Minkowski](/index.php?title=OpenSCAD_Minkowski/pt-br&action=edit&redlink=1 "OpenSCAD Minkowski/pt-br (page does not exist)"): Aplica uma soma minkowski às formas selecionadas.

## Preferências

- ![](/images/Std_DlgPreferences.svg) [Preferências](/index.php?title=OpenSCAD_Preferences/pt-br&action=edit&redlink=1 "OpenSCAD Preferences/pt-br (page does not exist)"): Preferências disponíveis para as ferramentas do OpenSCAD.

## Limitações

O OpenSCAD cria geometria sólida construtiva, além de importar arquivos de malha e extrudir a geometria 2D dos arquivos [DXF](/DXF "DXF"). O FreeCAD também permite que você crie CSG com primitivos. A geometria kernel (OCCT) do FreeCAD funciona usando um representação limite.Portanto, a conversão do CSG para o BREP deve, em teoria, ser possível, enquanto a conversão do BREP para o CSG não é, em geral, possível.

O OpenSCAD trabalha internamente nas malhas. Algumas operações que são úteis em malhas não são significativas em um modelo BREP e não podem ser totalmente suportadas. Entre estes estão o casco convexo, soma minkowski, glide e subdiv. Atualmente executamos o binário OpenSCAD para realizar operações de casco e minkwoski e importar o resultado. Isso significa que a geometria envolvida será triangulada. No OpenSCAD, o escalonamento não uniforme é frequentemente usado, o que não impõe nenhum problema ao usar malhas. Em nossa geometria, as primitivas geométricas do kernel (linhas, seções circulares, etc) são convertidas para o BSpline antes de executar tais deformações. Esses BSplines são conhecidas por causar problemas em operações booleanas posteriores. Uma solução automática não está disponível no momento. Por favor, sinta-se livre para postar no fórum se você encontrar tais problemas. Muitas vezes, esses problemas podem ser resolvidos por pequenas peças de remodelação. Uma deformação de um cilindro pode ser substituída por uma extrusão de elipses.

## Importação de texto

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):

```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};

```

The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>;` statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Dicas

Ao importar [DXF](/DXF "DXF"), defina a precisão do rascunho para uma quantidade razoável, pois isso afetará a detecção das arestas conectadas.

Se o FreeCAD travar ao importar o CSG, é altamente recomendável que você ative a opção "verificar automaticamente o modelo após a operação booleana" em **Menu → Editar → Preferências → Desenho da Peça → Configuração do Modelo**.

## Tutoriais

- [Importar código OpenSCAD](/index.php?title=Import_OpenSCAD_code/pt-br&action=edit&redlink=1 "Import OpenSCAD code/pt-br (page does not exist)")

## Links

- Repositório de código fonte do OpenSCAD em [GitHub](https://github.com/openscad/openscad)
- [Open tickets tagged "Openscad" on the FreeCAD bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD)
- [Things tagged with "OpenSCAD" on Thingiverse](http://www.thingiverse.com/tag:openscad)

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_Workbench/pt-br&oldid=1515577>"
