const data = [
    {
        "name": "styleHeightCalc",
        "type": "string | number | undefined",
        "default": "undefined",
        "description": "Quantidade de pixel a ser subtraído do cálculo de altura do form. Ex.: `height: calc(100vh - ${styleHeightCalc})`. Se não informar a propriedade nenhum estilo será aplicado"
    },
    {
        "name": "headerProps",
        "type": "<a href=\"#iheader\" class=\"text-white\">IHeader</a>",
        "default": "",
        "description": "Propriedads do Header do Form"
    },
    {
        "name": "footerProps",
        "type": "<a href=\"#ifooter\" class=\"text-white\">IFooter</a>",
        "default": "",
        "description": "Propriedads do Footer do Form"
    }
];

export default data;