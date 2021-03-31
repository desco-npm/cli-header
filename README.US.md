<div align="right">
  <a href="README.md">
    <img alt="Ler em Portugês do Brasil" src="https://img.shields.io/static/v1?label=&message=Ler%2Bem%2BPortugu%C3%AAs%2Bdo%2BBrasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/rQP3kNb/cli-header.png"></td>
    <td>  
      <h1>@desco/cli-header</h1>
      NPM package that allows you to print a header for the command line program.
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 1.0.5" src="https://img.shields.io/static/v1?label=Version&message=1.0.5&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Ready to use! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## 📋 Table of Contents

- [✔️ Resources](#Resources)
- [🛠️ Technology](#Technology)
- [⚙️ Installation](#Installation)
- [📚 Documentation](#Documentation)

---

<a name="Technology"></a>

## 🛠️ Technology

The following technologies are used:

- [NodeJS](https://nodejs.org/en/);

---

<a name="Installation"></a>

## ⚙️ Installation

```bash
npm install --save @desco/cli-header
```

> Note that it will be necessary to have **NPM** installed for the command to work.

---

<a name="Import"></a>

### 📦 Import

```js
const cliHeader = require("@desco/cli-header");
```

<a name="How-To-Use"></a>

## 📚 How to use

```js
const cliHeader = require('@desco/cliHeader)

cliHeader({ title: 'AtlasJS v2.0.0'})
```

### Additional Parameters

It is possible to customize the header by passing additional parameters, see them:

| Name        | Type            | Standard          | Description                                                                                                |
| ----------- | --------------- | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| title       | String          | 'App Name v0.0.0' | Title to be written                                                                                        |
| size        | String / Number | '25% '            | Title size. If passed in string it is considered a percentage. If passed as an integer, number of columns. |
| align       | String          | 'center'          | Header alignment                                                                                           |
| line        | String          | '-'               | Character to be used to delimit the lines                                                                  |
| column      | String          | '\                | '                                                                                                          |
| leftTop     | String          | '/'               | Character to be used to mark the upper left corner                                                         |
| rightTop    | String          | '\\'              | Character to be used to mark the upper right corner                                                        |
| leftBottom  | String          | '\\'              | Character to be used to mark the bottom left corner                                                        |
| rightBottom | String          | '/'               | Character to be used to mark the bottom right corner                                                       |

---

## Author

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
