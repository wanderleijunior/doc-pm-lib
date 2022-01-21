# PmLibHttp

### $get
<hr>

```ts
async $get(url: string): Promisse<any>
```

- Paramêtros
    - `url` - `Path da rota do backend`
<pm-brs :qtd="2"/>
- Retorno
    - `Promisse<any>`
<pm-brs :qtd="2"/>
- Uso

Faz requisição http do método `GET`. Já encapsulado com `try/catch` e `loading` enquanto a requisição estiver sendo feita. Caso ocorra erro uma mensagem será mostrada através da função `PmLibDialogService.showErrorBackend(e)` e a execução do código é parada. Se não houver erros, é retornado a resposta da reuisição. 
```ts
const response = await PmLibHttp.$get('/operador');
```

### $post
<hr>

```ts
async $post(url: string, data?: IRequestConfig, config?: IRequestConfig): Promisse<any>
```

- Paramêtros
    - `url` - `Path da rota do backend`
    - `data` - `Corpo da requisição contendo os dados. É opcional.`
    - `config` - `Axios Request Config. É opcional.` [IRequestConfig](https://github.com/axios/axios#request-config)`
<pm-brs :qtd="2"/>
- Retorno
    - `Promisse<any>`
<pm-brs :qtd="2"/>
- Uso

Faz requisição http do método `POST`. Já encapsulado com `try/catch` e `loading` enquanto a requisição estiver sendo feita. Caso ocorra erro uma mensagem será mostrada através da função `PmLibDialogService.showErrorBackend(e)` e a execução do código é parada. Se não houver erros, é retornado a resposta da reuisição. 
```ts
const response = await PmLibHttp.$post('/operador', data);
```

### $put
<hr>

```ts
async $put(url: string, data?: any, config?: IRequestConfig): Promisse<any>
```

- Paramêtros
    - `url` - `Path da rota do backend`
    - `data` - `Corpo da requisição contendo os dados. É opcional.`
    - `config` - `Axios Request Config. É opcional.` [IRequestConfig](https://github.com/axios/axios#request-config)`
<pm-brs :qtd="2"/>
- Retorno
    - `Promisse<any>`
<pm-brs :qtd="2"/>
- Uso

Faz requisição http do método `PUT`. Já encapsulado com `try/catch` e `loading` enquanto a requisição estiver sendo feita. Caso ocorra erro uma mensagem será mostrada através da função `PmLibDialogService.showErrorBackend(e)` e a execução do código é parada. Se não houver erros, é retornado a resposta da reuisição. 
```ts
const response = await PmLibHttp.$post('/operador', data);
```

### $delete
<hr>

```ts
async $delete(url: string, data?: IRequestConfig): Promisse<any>
```

- Paramêtros
    - `url` - `Path da rota do backend`
    - `data` - `Axios Request Config. É opcional.` [IRequestConfig](https://github.com/axios/axios#request-config)`
<pm-brs :qtd="2"/>
- Retorno
    - `Promisse<any>`
<pm-brs :qtd="2"/>
- Uso

Faz requisição http do método `PUT`. Já encapsulado com `try/catch` e `loading` enquanto a requisição estiver sendo feita. Caso ocorra erro uma mensagem será mostrada através da função `PmLibDialogService.showErrorBackend(e)` e a execução do código é parada. Se não houver erros, é retornado a resposta da reuisição. 
```ts
const response = await PmLibHttp.$post('/operador', data);
```
