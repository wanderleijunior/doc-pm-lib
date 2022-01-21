# PmLibDialogService

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

Dispara o `DialogService.show()` do zeedhi sempre com o type <pm-badge text="success"/>.
```ts
PmLibDialogService.showSuccess('Dados salvos com sucesso!');
```

### showError
<hr>

```ts
showError(msg: string): void
```

- Paramêtros
    - `msg` - `Mensagem a ser mostrada na tela`
<pm-brs :qtd="2"/>
- Retorno
    - `void`
<pm-brs :qtd="2"/>
- Uso

Dispara o `DialogService.show()` do zeedhi sempre com o type <pm-badge text="error" type="danger"/>.
```ts
PmLibDialogService.showError('ocorreu um erro inesperado!');
```

### showErrorBackend
<hr>

```ts
showErrorBackend(error: any): void
```

- Paramêtros
    - `error` - `Objeto de erro gerado através do `catch` de uma requisição para o backend`
<pm-brs :qtd="2"/>
- Retorno
    - `void`
<pm-brs :qtd="2"/>
- Uso

Procura por possivel erro que veio do backend no objeto de erro gerado através do `catch` e dispara o `DialogService.show()` do zeedhi com o type <pm-badge text="error" type="danger"/>. Caso não 
encontre retorna uma mensagem padrão.
```ts
} catch (error) {
	PmLibDialogService.showErrorBackend(error);
}
```

### confirmDialog
<pm-brs :qtd="1"/>
```ts
async confirmDialog(msg: string, type: string = 'warning'): Promise<boolean>
```

- Paramêtros

    - `msg` - `Mensagem a ser mostrada na tela`
    - `type` - `Tipo do do dialog. Padrão é 'warning'`
<pm-brs :qtd="2"/>
- Retorno
    - `Promise<boolean>`
<pm-brs :qtd="2"/>
- Uso

Emite um Dialog de confirmação e retorna uma `promise`. Assim que o usuário clica em uma das opções (`Sim` ou `Não`) retorna um valor do tipo `boolean` de acordo com a opção escolhida.
```ts
const confirm = await PmLibDialogService.confirmDialog('Deseja excluir esse registro?');
if (confirm) {
    this.delete();
}
```
