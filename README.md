# APIchuck

## Jefferson Eduardo Santos Lima 

Seu Nome Completo

## Descrição

Aplicação **Front-End** que consome a [Chuck Norris API](https://api.chucknorris.io/) para exibir piadas aleatórias sobre o lendário Chuck Norris.
O usuário pode **favoritar** suas piadas preferidas, armazenando-as no **LocalStorage**, e também gerenciar (remover) a lista de favoritos.

## Objetivo

* Praticar consumo de **API pública** utilizando **Fetch API**.
* Explorar persistência de dados com **LocalStorage**.
* Exercitar manipulação do DOM com **JavaScript**.

## Tecnologias

* **HTML5** – Estrutura da aplicação
* **CSS3** – Estilização da interface
* **JavaScript (ES6+)** – Lógica da aplicação
* **Fetch API** – Consumo da API externa
* **LocalStorage** – Persistência de dados no navegador

## Funcionalidades

* Buscar piada aleatória da Chuck Norris API
* Exibir piada com imagem do Chuck Norris
* Favoritar piadas e salvar no LocalStorage
* Listar piadas favoritas
* Remover piadas dos favoritos

## Rotas / Endpoints

| Página           | Tipo requisição | Endpoint / Recurso                                                                 |
| ---------------- | --------------- | ---------------------------------------------------------------------------------- |
| `index.html`     | **GET**         | [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random) |
| `favorites.html` | **GET**         | localStorage/favorites                                                             |
| `favorites.html` | **DELETE**      | localStorage/favorites                                                             |

## Referências & Recursos de Apoio

* API Oficial: [https://api.chucknorris.io](https://api.chucknorris.io)
* Documentação **Fetch API**: [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
* Documentação **LocalStorage**: [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
* Manipulação do DOM: [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
* Inspiração em APIs públicas: [public-apis GitHub](https://github.com/public-apis/public-apis)
