# Configurações e Uso

## Services

Para usar algum serviço da Pm-Lib basta importalo em seu arquivo `typescript` e usa-lo.

Ex.:
```ts
import { PmLibAlertService, PmLibUtil } from '@zeedhi/pm-lib';

public mounted() {
	PmLibAlertService.showSuccess('message')
	const name = PmLibUtil.getNameDynamic('name');
}
```

## Componentes

É necessário importar e registrar os componentes.  
Isso será feito no aquivo de configuração `zeedhi.ts` que fica dentro da pasta `plugin`.  

```ts  
import PmLibComponents from '@zeedhi/pm-lib';  
  
Vue.use(PmLibComponents);  
```  

## Instâncias de componentes

Quando instanciamos um componentes informamos o tipo do componente que estamos instanciando através do método `getInstance`.
No exemplo abaixo, instanciamos o componente de nome 'pmFormSave' do tipo `PmFormSave`.

As classes do pacote `common` são fornecidas pelo módulo `@zeedhi/pm-lib` assim como as classes de Serviços

Ex.:
```ts
import { PmFormSave } from '@zeedhi/pm-lib';

public saveForm() {
	const pmFormSave = Metadata.getInstance<PmFormSave>('pmFormSave');
}
```

## Nota

As classes com prefixo `PmLib` são classes do tipo `service`, `controller`, `utilities`, entre outros.
Já as classes que tenham apenas `Pm` sem o `Lib` são classes modelos de componentes.