# @desco/cli-header

Exibe um cabeçalho para o programa para a linha de comando.

Displays a header for the program for the command line.

## Instalação / Install

```
npm install --save @desco/cli-header
```

## Uso / Use

```
const cliHeader = require('@desco/cliHeader)

cliHeader({ title: 'AtlasJS v2.0.0'})
```

### Parâmetros Adicionais / Additional Parameters

É possível personalizar o cabeçalho passando parâmetros adicionais, veja eles:

You can customize the header by passing additional parameters, see them:

| Nome/Name | Tipo/Type | Padrão/Default | Descrição | Description
|---|---|---|---|---|
| title | String | 'App Name v0.0.0' | Título a ser escrito | Title to be written |
| size | String / Number | '25%' | Tamanho do título. Se passado em string é considerado percentual. Se passado como inteiro, número de colunas. | Title size. If passed in string it is considered a percentage. If passed as an integer, number of columns. |
| align | String | 'center' | Alinhamento do cabeçalho | Header alignment |
| line | String | '-' | Carácter a ser usado pra delimitar as linhas | Character to be used to delimit lines |
| column | String | '\|' | Carácter a ser usado pra delimitar as colunas | Character to be used to delimit columns |
leftTop | String | '/' | Carácter a ser usado para marcar o canto superior esquerdo | Character to be used to mark the upper left corner
rightTop | String | '\\' | Carácter a ser usado para marcar o canto superior direito | Character to be used to mark the upper right corner
leftBottom | String | '\\' | Carácter a ser usado para marcar o canto inferior esquerdo | Character to be used to mark the bottom left corner
rightBottom | String | '/' | Carácter a ser usado para marcar o canto inferior direito | Character to be used to mark the bottom right corner