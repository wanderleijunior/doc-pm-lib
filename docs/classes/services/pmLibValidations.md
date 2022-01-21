# PmLibValidations

### validateCpf
<hr>

```ts
validateCpf(cpf: string): boolean
```

- Paramêtros
    - `name` - `Número do CPF.`
<pm-brs :qtd="2"/>
- Retorno
    - `boolean` - `Retorna true se for válido e false se for inválido`
<pm-brs :qtd="2"/>
- Uso

```ts
const cpfValidated = PmLibValidations.validateCpf('154.587.985-89');
// ou
const cpfValidated = PmLibValidations.validateCpf('15458798589');
```
