# PmFormSave

## Uso básico

  
```json  
{
	"name": "pmFormSave",
	"component": "PmFormSave",
	"headerProps": {
		"title": "Adicionar Operador"
	},
	"events": {
		"onMounted": "{{PmFormSaveController.onMountedPmFormSave}}",
	},
	"children": [
		{
			"name": "ID",
			"component": "ZdTextInput",
			"label": "ID",
			"grid": {
				"cols": 6
			}
		},
		{
			"name": "NAME",
			"component": "ZdTextInput",
			"label": "Nome",
			"grid": {
				"cols": 6
			}
		},
	]
}
```

## Propriedades
<PmFormSavePropriedades/>

## Eventos
<PmFormSaveEventos/>

## IHeader
<PmFormSaveIHeader/>

## IFooter
<PmFormSaveIFooter/>

## IButtonPmFormSave
<PmFormSaveIButtonPmFormSave/>

