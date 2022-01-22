(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{448:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"configuracoes-e-uso"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuracoes-e-uso"}},[s._v("#")]),s._v(" Configurações e Uso")]),s._v(" "),a("h2",{attrs:{id:"services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services"}},[s._v("#")]),s._v(" Services")]),s._v(" "),a("p",[s._v("Para usar algum serviço da Pm-Lib basta importalo em seu arquivo "),a("code",[s._v("typescript")]),s._v(" e usa-lo.")]),s._v(" "),a("p",[s._v("Ex.:")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" PmLibAlertService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PmLibUtil "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@zeedhi/pm-lib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tPmLibAlertService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("showSuccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PmLibUtil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getNameDynamic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"componentes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentes"}},[s._v("#")]),s._v(" Componentes")]),s._v(" "),a("p",[s._v("É necessário importar e registrar os componentes."),a("br"),s._v("\nIsso será feito no aquivo de configuração "),a("code",[s._v("zeedhi.ts")]),s._v(" que fica dentro da pasta "),a("code",[s._v("plugin")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" PmLibComponents "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@zeedhi/pm-lib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n  \nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PmLibComponents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])])]),a("h2",{attrs:{id:"instancias-de-componentes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instancias-de-componentes"}},[s._v("#")]),s._v(" Instâncias de componentes")]),s._v(" "),a("p",[s._v("Quando instanciamos um componentes informamos o tipo do componente que estamos instanciando através do método "),a("code",[s._v("getInstance")]),s._v(".\nNo exemplo abaixo, instanciamos o componente de nome 'pmFormSave' do tipo "),a("code",[s._v("PmFormSave")]),s._v(".")]),s._v(" "),a("p",[s._v("As classes do pacote "),a("code",[s._v("common")]),s._v(" são fornecidas pelo módulo "),a("code",[s._v("@zeedhi/pm-lib")]),s._v(" assim como as classes de Serviços")]),s._v(" "),a("p",[s._v("Ex.:")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" PmFormSave "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@zeedhi/pm-lib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("saveForm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pmFormSave "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-function"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PmFormSave"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pmFormSave'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"nota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nota"}},[s._v("#")]),s._v(" Nota")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Dica")]),s._v(" "),a("p",[s._v("As classes com prefixo "),a("code",[s._v("PmLib")]),s._v(" são classes do tipo "),a("code",[s._v("service")]),s._v(", "),a("code",[s._v("controller")]),s._v(", "),a("code",[s._v("utilities")]),s._v(", entre outros.\nJá as classes que tenham apenas "),a("code",[s._v("Pm")]),s._v(" sem o "),a("code",[s._v("Lib")]),s._v(" são classes modelos de componentes.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);