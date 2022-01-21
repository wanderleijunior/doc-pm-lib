# PmLibAlertService

### showSuccess
<hr>

```ts
showSuccess(msg: string): void
```

- Paramêtros
    - `msg` - `Mensagem a ser mostrada na tela`
<pm-brs :qtd="2"/>
- Retorno
    - `void`
<pm-brs :qtd="2"/>
- Uso

Dispara o `AlertService.show()` do zeedhi sempre com o type <pm-badge text="success"/> 
```ts
PmLibAlertService.showSuccess('Dados salvos com sucesso!');
```

### showError(msg)
<hr>

```ts
showSuccess(msg: string): void
```

- Paramêtros
    - `{ string } msg` - `Mensagem a ser mostrada na tela`
<pm-brs :qtd="2"/>
- Retorno
    - `void`
<pm-brs :qtd="2"/>
- Uso

Dispara o `AlertService.show()` do zeedhi sempre com o type <pm-badge text="error" type="danger"/>.
```ts
PmLibAlertService.showError('Erro ao salvar os dados!');
```