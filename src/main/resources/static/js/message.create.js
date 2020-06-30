const button = document.querySelector('#blank-div')
const garally = document.querySelector('.garally')
const btnCancel = document.querySelector('#btn-cancel')

const btnCreate = document.querySelector('#btn-create')
const btnBlank  = document.querySelector('#blank-div')
const collapseBtn = document.querySelector('#collapseBtn')




var flexMessageTemplate = 0;

button.addEventListener('click', event => {
    garally.setAttribute("style", "border: 3px solid green")
})

btnCancel.addEventListener('click', event => {
    garally.setAttribute("style", "border: none")
})

btnBlank.addEventListener('click', event => {
    flexMessageTemplate = 1;
})

class Container extends HTMLElement {
    constructor() {
        super()
        console.log( 'Constructed' )
    }
    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='collapse show' id='collapseExample'><div class='bubbleMessage-item'>Bubble message</div></div>"
    }
}

class Hierarchy extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }
    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='bubbleMessage drop-down-flex-message dropdown mega-menu' id='header'><div class='dropdown open mega-menu d-none d-md-block show'> <div id='header-button'><a class='btn text-muted dropdown-toggle mr-3' data-toggle='collapse' style='width:0%!important;height:40px!important;' href='#textHeader' role='button' aria-expanded='false' aria-controls='textHeader'></a>Header</div><div class='collapse show' id='textHeader'><li class='header-item'>Text</li></div></div></div>"
    }
}

class Hero extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<ul class='hero-list'><li class='hero-item'>Hero</li></ul>"

    }
}

class Body extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='bubbleMessage drop-down-flex-message dropdown mega-menu' id='body'><div class='dropdown open mega-menu d-none d-md-block show'><div id='body-button'><a class='btn text-muted dropdown-toggle mr-3' data-toggle='collapse' style='width:0%!important;height:40px!important;' href='#textBody' role='button' aria-expanded='false' aria-controls='textBody'></a>Body</div><div class='collapse show' id='textBody'><li class='body-item'>Text</li></div></div></div>"
    }
}

class Footer extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='bubbleMessage drop-down-flex-message dropdown mega-menu' id='footer'><div class='dropdown open mega-menu d-none d-md-block show'><div id='footer-button'><a class='btn text-muted dropdown-toggle mr-3' data-toggle='collapse' style='width:0%!important;height:40px!important;' href='#textFooter' role='button' aria-expanded='false' aria-controls='textFooter'></a>Footer</div><div class='collapse show' id='textFooter'><li class='footer-item'>Button</li></div></div></div>"
    }
}

class Direction extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div><p>Direction</p><div class='btn-group' role='group' aria-label='Basic example'><button type='button' class='btn btn-secondary btn-direction leftBtn' id='leftBtn'>Left to right</button><button type='button' class='btn btn-secondary btn-direction rightBtn' id='rightBtn'>Right to left</button></div></div>"
    }
}

class HeaderStyle extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='headerStyleMessage dropdown mega-menu'><div class='dropdown mega-menu d-none d-md-block show' id='dropdownDiv'></div><a class='btn text-muted dropdown-toggle mr-3' id='collapseBtn' data-toggle='collapse' href='#headerStyleCollape' role='button' aria-expanded='true' aria-controls='headerStyleModal'><span class='bubble-nav-menu'>Header Style</span></a><div class='collapse show' id='headerStyleCollape'><div class='headerStyle-item'><h6>Backgroud color</h6><input type='text'  id='backgroudColorInputHeader' placeholder='#0000'/><button id='backgroudColorHeader'>Enter</button></div></div></div>"

    }
}

class HeroStyle extends HTMLElement {
    constructor() {
        super()
        console.log('Constructed')
    }

    connectedCallback() {
        console.log('Callback')

        this.innerHTML = "<div class='heroStyleMessage dropdown mega-menu'><div class='dropdown mega-menu d-none d-md-block show' id='dropdownDiv'><a class='btn text-muted dropdown-toggle mr-3' id='collapseBtn' data-toggle='collapse' href='#heroStyleCollape' role='button' aria-expanded='true' aria-controls='heroStyleModal'><span class='bubble-nav-menu'>Hero Style</span></a><div class='collapse show' id='heroStyleCollape'><div class='heroStyle-item'><h6>Backgroud color</h6><input type='text' placeholder='#0000' id='backgroundColorInputHero'/><button id='backgroudColorHero'>Enter</button></div><div class='heroStyle-item'><h6>Separator<div><select class='option' id='separatorOption'><option value='false'>Defaulte</option><option value='true'>True</option><option value='false'>false</option></select></div></h6></div><div class='heroStyle-item'><h6>Separator color</h6><div><input type='text' placeholder='#0000' id='separatorColor'/><button id='separatorColorBtn'>Enter</button></div></div></div></di>"

    }
}

class BodyStyle extends HTMLElement {
    constructor() {
        super()
        console.log('Constructor')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "<div class='heroStyleMessage dropdown mega-menu'><div class='dropdown mega-menu d-none d-md-block show' id='dropdownDiv'><a class='btn text-muted dropdown-toggle mr-3' id='collapseBtn' data-toggle='collapse' href='#heroStyleCollape' role='button' aria-expanded='true' aria-controls='heroStyleModal'><span class='bubble-nav-menu'>Body Style</span></a><div class='collapse show' id='heroStyleCollape'><div class='heroStyle-item'><h6>Backgroud color</h6><input type='text' id='backgroundColorInput' placeholder='#0000'/><button id='backgroundColorBodyBtn'>Enter</button></div><div class='heroStyle-item'><h6>Separator<div><select class='option'><option value='false'>Defaulte</option><option value='true'>True</option><option value='false'>false</option></select></div></h6></div><div class='heroStyle-item'><h6>Separator color</h6><div><input type='text' placeholder='#0000'/></div></div></div></di>"
    }
}

class Preview extends HTMLElement {
    constructor() {
        super()
        console.log('Constructor')
    }

    connectedCallback() {
        console.log('Callback')
        this.innerHTML = "";
    }
}
var directionFlex = "ltr";
var headerBackgroudColor = "#FFFFFF";
var heroBackgroudColor = "#FFFFFF";
var separatorOptionBoolean = false;
var separatorColor = "#FFFFFF";
var bodyBackgroundColor = "#FFFFFF";
var headerLayout = "horizontal";
var headerSpacing = "none";

var headerMargin = "none"
var headerInputText = "Header";
var headerTextFlex = 0;
var headerTextSize = "xxs";
var headerTextColor = "#FFFFFF";
var headerTextWeight = "regular";
var headerStartBtn = "center";
var headerTopBtn = "top";
var marginvalueHeader = "xs";
var wrapHeaderValue = true;
var herImgUrlvalue = "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png";
var heroFlexvalue = 0;
var heroSizevalue = 0;
var heroAlign = "center";
var heroGravity = "center";
var heroAspectRatiovalue = "1:1"
var heroAspectModevalue = "fit"
var marginHerovalue = "none"
var backgroundHerovalue = "#FFFFFF"
var bodyLayoutvalue = "horizontal"
var bodyFlexvalue = 0
var bodySpacingvalue = "none"
var bodyMarginvalue = "none"
var bodyTextvalue  = "body"
var bodyTextflexvalue = 0
var bodyTextSizevalue = "xxs"
var bodyTextColorvalue = "#000000"
var bodyTextWeightvalue = "regular"
var bodyTextAlignvalue = "center"
var bodyTextGravityvalue = "center"
var bodyTextMarginvalue = "none"
var bodyTextWrapvalue = false
var footerLayoutvalue = "horizontal"
var footerFlexvalue = 0
var flex = 0;
var footerButtonUrlvalue = "https://linecorp.com"

var footerButtonLabelvalue = "Button"
var footerButtonFlexvalue = 0
var footerButtonMarginvalue = "none"
var footerButtonHeightvalue = "sm"
var footerButtonSizevalue = "link"
var footerButtonColorvalue = "#000000"
var footerButtonGravityvalue = "top";



var data = {
        "type": "bubble",
        "direction": directionFlex,
        "header": {
            "type": "box",
            "layout": headerLayout,
            flex,
            "spacing":headerSpacing,
            "margin":headerMargin,
            "contents": [
                {
                    "type": "text",
                    "text": headerInputText,
                    "flex": headerTextFlex,
                    "size": headerTextSize,
                    "align": headerStartBtn,
                    "weight": headerTextWeight,
                    "color": headerTextColor,
                    "gravity": headerTopBtn,
                    "margin":marginvalueHeader,
                    "wrap":wrapHeaderValue
                }
            ]
        },
        "hero": {
            "type": "image",
            "url": herImgUrlvalue,
            "margin":marginHerovalue,
            "flex":heroFlexvalue,
            "size": heroSizevalue,
            "align": heroAlign,
            "gravity":heroGravity,
            "aspectRatio": heroAspectRatiovalue,
            "aspectMode":heroAspectModevalue,
            "backgroundColor":backgroundHerovalue
        },
        "body": {
            "type": "box",
            "layout": bodyLayoutvalue,
            "flex":bodyFlexvalue,
            "spacing":bodySpacingvalue,
            "margin":bodyMarginvalue,
            "contents": [
                {
                    "type": "text",
                    "text": bodyTextvalue,
                    "flex":bodyTextflexvalue,
                    "size":bodyTextSizevalue,
                    "align": bodyTextAlignvalue,
                    "color":bodyTextColorvalue,
                    "weight": bodyTextWeightvalue,
                    "gravity":bodyTextGravityvalue,
                    "margin":bodyTextMarginvalue,
                    "wrap":bodyTextWrapvalue
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": footerLayoutvalue,
            "flex":footerFlexvalue,
            "contents": [
                {
                    "type": "button",
                    "flex":footerButtonFlexvalue,
                    "margin":footerButtonMarginvalue,
                    "height":footerButtonHeightvalue,
                    "style":footerButtonSizevalue,
                    "color":footerButtonColorvalue,
                    "gravity":footerButtonGravityvalue,
                    "action": {
                        "type": "uri",
                        "label": footerButtonLabelvalue,
                        "uri": footerButtonUrlvalue
                    }
                }
            ]
        }
};

var marginvalueHeader = "xs";
function changJson(backgrouColorHeader, direction, heroBackgroudColor, separatorOptionBooleanfunction,separatorColorFunction,bodyBackgroundColorFunction, headerLayoutFunction,FlexHeaderFunction,headerSpacingFunction,headerMarginFunction,iptTextHeaderFunction, FlexTextHeaderInputFunction,headerTextSizeFunction,colorTextHeaderFunction,headerTextWeightFunction,startBtnHeaderFunction,headerTopBtnHeaderFunction,marginvalueHeaderFunction,wrapHeaderInputFunction,herImgUrlFunction,heroFlexFunction,heroSizeFunction, heroAlignFunction, heroGravityFunction,heroAspectRatioFunction,heroAspectModeFunction,marginHeroFunction,backgroundHeroFunction,bodyLayoutFunction, bodyFlexFunction,bodySpacingFunction,bodyMarginFunction,bodyTextFunction,bodyTextflexFunction, bodyTextSizeFunction,bodyTextColorFunction,bodyTextWeightRegularFunction,bodyTextAlignFunction,bodyTextGravityFunction,bodyTextMarginFunction,bodyTextWrapFunction,footerLayoutFunction,footerFlexFunction,footerButtonLabelFunction,footerButtonUrlFunction,footerButtonFlexFunction,footerButtonMarginFunction,footerButtonHeightFunction,footerButtonSizeFunction,footerButtonColorFunction,footerButtonGravityFunction) {
    var separator = false;
    separatorColor = separatorColorFunction
    if(separatorOptionBooleanfunction == "true") {
        separator = true
    }else {
        separator = false
    }
    bodyBackgroundColor = bodyBackgroundColorFunction
    headerLayout = headerLayoutFunction;
    flex = Number(FlexHeaderFunction);

    headerSpacing = headerSpacingFunction;
    headerMargin = headerMarginFunction;
    headerInputText = iptTextHeaderFunction;
    headerTextFlex = Number(FlexTextHeaderInputFunction);
    headerTextSize = headerTextSizeFunction;
    headerTextColor = colorTextHeaderFunction;
    headerTextWeight = headerTextWeightFunction;
    headerStartBtn = startBtnHeaderFunction;
    headerTopBtn = headerTopBtnHeaderFunction;
    marginvalueHeader = marginvalueHeaderFunction;
    wrapHeaderValue = wrapHeaderInputFunction;
    herImgUrlvalue = herImgUrlFunction
    heroFlexvalue  = Number(heroFlexFunction)
    heroSizevalue = heroSizeFunction
    heroAlign = heroAlignFunction
    heroGravity = heroGravityFunction
    heroAspectRatiovalue = heroAspectRatioFunction
    heroAspectModevalue = heroAspectModeFunction
    marginHerovalue =  marginHeroFunction
    backgroundHerovalue = backgroundHeroFunction
    bodyLayoutvalue  = bodyLayoutFunction
    bodyFlexvalue = Number(bodyFlexFunction)
    bodySpacingvalue = bodySpacingFunction
    bodyMarginvalue  = bodyMarginFunction
    bodyTextvalue = bodyTextFunction
    bodyTextflexvalue = Number(bodyTextflexFunction)
    bodyTextSizevalue = bodyTextSizeFunction
    bodyTextColorvalue = bodyTextColorFunction
    bodyTextWeightvalue = bodyTextWeightRegularFunction
    bodyTextAlignvalue = bodyTextAlignFunction
    bodyTextGravityvalue = bodyTextGravityFunction
    bodyTextMarginvalue = bodyTextMarginFunction
    bodyTextWrapvalue = bodyTextWrapFunction
    footerLayoutvalue = footerLayoutFunction
    footerFlexvalue = footerFlexFunction
    footerButtonLabelvalue = footerButtonLabelFunction
    footerButtonUrlvalue = footerButtonUrlFunction
    footerButtonFlexvalue = Number(footerButtonFlexFunction)
    footerButtonMarginvalue = footerButtonMarginFunction
    footerButtonHeightvalue = footerButtonHeightFunction
    footerButtonSizevalue = footerButtonSizeFunction
    footerButtonColorvalue = footerButtonColorFunction
    footerButtonGravityvalue = footerButtonGravityFunction


    data = {
            "type": "bubble",
            "direction": direction,
            "header": {
                "type": "box",
                "layout": headerLayoutFunction,
                flex,
                "spacing": headerSpacing,
                "margin": headerMargin,
                "contents": [
                    {
                        "type": "text",
                        "text": headerInputText,
                        "flex": headerTextFlex,
                        "size": headerTextSize,
                        "align": headerStartBtn,
                        "weight": headerTextWeight,
                        "color": headerTextColor,
                        "gravity":headerTopBtn,
                        "margin":marginvalueHeader,
                        "wrap":wrapHeaderValue
                    }
                ]
            },
            "hero": {
                "type": "image",
                "url": herImgUrlvalue,
                "margin":marginHerovalue,
                "flex":heroFlexvalue,
                "size": heroSizevalue,
                "align": heroAlign,
                "gravity":heroGravity,
                "aspectRatio": heroAspectRatiovalue,
                "aspectMode": heroAspectModevalue,
                "backgroundColor":backgroundHerovalue
            },
            "body": {
                "type": "box",
                "layout": bodyLayoutvalue,
                "flex":bodyFlexvalue,
                "spacing":bodySpacingvalue,
                "margin":bodyMarginvalue,
                "contents": [
                    {
                        "type": "text",
                        "text": bodyTextvalue,
                        "flex": bodyTextflexvalue,
                        "size": bodyTextSizevalue,
                        "align": bodyTextAlignvalue,
                        "color":bodyTextColorvalue,
                        "weight": bodyTextWeightvalue,
                        "gravity": bodyTextGravityvalue,
                        "margin":bodyTextMarginvalue,
                        "wrap":bodyTextWrapvalue
                    }
                ]
            },
            "footer": {
                "type": "box",
                "layout": footerLayoutvalue,
                "flex":footerFlexvalue,
                "contents": [
                    {
                        "type": "button",
                        "flex":footerButtonFlexvalue,
                        "margin":footerButtonMarginvalue,
                        "height":footerButtonHeightvalue,
                        "style":footerButtonSizevalue,
                        "color":footerButtonColorvalue,
                        "gravity":footerButtonGravityvalue,
                        "action": {
                            "type": "uri",
                            "label": footerButtonLabelvalue,
                            "uri": footerButtonUrlvalue
                        }
                    }
                ]
            },
            "styles": {
                "header": {
                    "backgroundColor": backgrouColorHeader
                },
                "hero": {
                    "backgroundColor": heroBackgroudColor,
                    separator,
                    separatorColor
                },
                "body": {
                    "backgroundColor": bodyBackgroundColor
                }
            }
    };

    document.getElementById("messageJson").value = JSON.stringify(data);
    console.log(data);
    return data;
}
function creatMessageBody() {
    customElements.define('bubble-message', Container);
    customElements.define('hierarchy-message', Hierarchy);
    customElements.define('hero-message', Hero);
    customElements.define('body-message', Body);
    customElements.define('footer-message', Footer);
    customElements.define('direction-message', Direction);
    customElements.define('header-message',HeaderStyle);
    customElements.define('superman-message',HeroStyle);
    customElements.define('propertiesbody-message',BodyStyle);

    let container = new Container();
    let hierarchy = new Hierarchy();
    let hero = new Hero();
    let body = new Body();
    let footer= new Footer();
    let direction = new Direction();
    let headerStyle = new HeaderStyle();
    let heroStyle = new HeroStyle();
    let bodyStyle = new BodyStyle();

    document.getElementById("messageJson").value = JSON.stringify(data);

    document.querySelector("#collapseBtn").click();
    document.querySelector('#dropdownDiv').appendChild(container);
    document.querySelector('#hierarchyDiv').appendChild(hierarchy);
    document.querySelector('#hierarchyDiv').appendChild(hierarchy);
    document.querySelector("#header").appendChild(hero);
    document.querySelector("#header").appendChild(body);
    document.querySelector("#header").appendChild(footer);
    document.querySelector("#propertiesBody").appendChild(direction);
    document.querySelector("#propertiesBody").appendChild(headerStyle);
    document.querySelector("#propertiesBody").appendChild(heroStyle);
    document.querySelector("#propertiesBody").appendChild(bodyStyle);
    document.querySelector(".message-preview").setAttribute("style", "display:block;");

    $('pre').html(JSON.stringify(data, undefined, 2));
    var rightBtn = document.querySelector('#rightBtn')
    var leftBtn  = document.querySelector('#leftBtn')

    const backgrouColorHeader = document.querySelector('#backgroudColorHeader')
    backgrouColorHeader.addEventListener('click', event => {

        var inputBackgroudColor = document.querySelector("#backgroudColorInputHeader").value
        const messagePreviewHeader = document.querySelector(".message-preview-header")
        headerBackgroudColor = inputBackgroudColor;
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        messagePreviewHeader.setAttribute("style", "background-color:"+inputBackgroudColor+";")


    })

    const backgroudColorHero = document.querySelector('#backgroudColorHero')
    backgroudColorHero.addEventListener('click', event => {
        var inputBackgroudColorHero = document.querySelector("#backgroundColorInputHero").value
        const messagePreviewHero = document.querySelector(".message-preview-hero")
        heroBackgroudColor = inputBackgroudColorHero;
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor, separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        messagePreviewHero.setAttribute("style", "background-color:"+inputBackgroudColorHero+";")
    })

    const separatorOption = document.querySelector('#separatorOption')
    separatorOption.addEventListener('change',event => {
        const messagePreviewHero = document.querySelector(".message-preview-hero")
        var inputseparatorOption = document.querySelector("#separatorOption").value
        separatorOptionBoolean = inputseparatorOption
        if(separatorOptionBoolean == "true") {
            messagePreviewHero.setAttribute("style", "border-top:1px solid"+separatorColor+";")
        }else if(separatorOptionBoolean == "false"){
            messagePreviewHero.setAttribute("style", "border-top:none;")
        }
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,inputseparatorOption,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const separatorColorBtn = document.querySelector('#separatorColorBtn')
    separatorColorBtn.addEventListener('click', event => {
        var inputseparatorColor = document.querySelector("#separatorColor").value
        const messagePreviewHero = document.querySelector(".message-preview-hero")
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,inputseparatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        if(separatorOptionBoolean == "true") {
            messagePreviewHero.setAttribute("style", "border-top:1px solid"+separatorColor+";")
        }
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const backgroundColorBodyBtn = document.querySelector('#backgroundColorBodyBtn')
    backgroundColorBodyBtn.addEventListener('click', event => {
        var backgroundColorInput = document.querySelector('#backgroundColorInput').value
        const messagePreviewBody = document.querySelector(".message-preview-body")
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,backgroundColorInput,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        messagePreviewBody.setAttribute("style", "background-color:"+backgroundColorInput+";")
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const layOutHeader = document.querySelector("#layOutHeader")
    layOutHeader.addEventListener("change", event => {
        var headerLayoutInput = layOutHeader.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,backgroundColorInput,headerLayoutInput,flex,headerSpacing,headerMargin,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const FlexHeader = document.querySelector("#FlexHeader")
    FlexHeader.addEventListener("change", event => {
        var FlexHeaderInput = FlexHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,FlexHeaderInput,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

    })

    const SpacingHeader = document.querySelector("#SpacingHeader")
    SpacingHeader.addEventListener("change", event => {
        var SpacingHeaderInput = SpacingHeader.value;
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,SpacingHeaderInput,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const MarginHeader = document.querySelector("#MarginHeader")
    MarginHeader.addEventListener("change", event => {
        var MarginHeaderInput = MarginHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,MarginHeaderInput,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const iptTextHeader = document.querySelector("#iptTextHeader")
    iptTextHeader.addEventListener("input", event => {
        iptTextHeaderInput = iptTextHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,iptTextHeaderInput,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        var x = document.getElementById("header-text");
        x.innerHTML = iptTextHeaderInput

    })

    const FlexTextHeader = document.querySelector("#FlexTextHeader")
    FlexTextHeader.addEventListener("change", event => {
        FlexTextHeaderInput = FlexTextHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, FlexTextHeaderInput,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const sizeTextHeader = document.querySelector("#sizeTextHeader")
    sizeTextHeader.addEventListener("change", event => {
        sizeTextHeaderInput = sizeTextHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,sizeTextHeaderInput,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        const text = document.querySelector("#header-text")

        if(sizeTextHeaderInput == "xxs") {
            text.setAttribute("style", "font-size:xx-small;")
        } else if(sizeTextHeaderInput == "xs") {
            text.setAttribute("style", "font-size:x-small;")
        } else if(sizeTextHeaderInput == "sm"){
            text.setAttribute("style", "font-size:small;")
        }else if(sizeTextHeaderInput == "md") {
            text.setAttribute("style", "font-size:medium;")
        }else if(sizeTextHeaderInput == "lg") {
            text.setAttribute("style", "font-size:large;")
        }else if(sizeTextHeaderInput == "xl") {
            text.setAttribute("style", "font-size:x-large;")
        }else if(sizeTextHeaderInput == "xxl") {
            text.setAttribute("style", "font-size:xx-large;")
        }else if(sizeTextHeaderInput == "3xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }else if(sizeTextHeaderInput == "4xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }else if(sizeTextHeaderInput == "5xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }

    })

    const colorTextHeader = document.querySelector("#colorTextHeader")
    colorTextHeader.addEventListener("input", event => {
        var colorTextHeaderInput = colorTextHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,colorTextHeaderInput,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        const textHeader = document.querySelector("#header-text")


        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '#header-text {' +
            'color:' +colorTextHeaderInput+';'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#header-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const regularBtnHeader = document.querySelector("#regularBtnHeader")
    regularBtnHeader.addEventListener("click", event => {
        var headerTextWeightInput = "regular"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeightInput,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        const text = document.querySelector("#header-text")
        if(headerTextWeightInput == "regular"){
            text.setAttribute("style", "font-weight:normal;")
        }

    })

    const boldBtnHeader = document.querySelector("#boldBtnHeader")
    boldBtnHeader.addEventListener("click", event => {
        var headerTextWeightInput = "bold"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeightInput,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        const text = document.querySelector("#header-text")
        if(headerTextWeightInput == "bold"){
            text.setAttribute("style", "font-weight:bold;")
        }
    })



    const startBtnHeader = document.querySelector("#startBtnHeader")
    startBtnHeader.addEventListener("click", event => {
        var startBtnHeaderInput = "start"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,startBtnHeaderInput,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        // Create our stylesheet
        var styleStartBtnHeader = document.createElement('style');
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:left;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#header-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(styleStartBtnHeader, ref);

    })

    const centerBtnHeader = document.querySelector("#centerBtnHeader")
    centerBtnHeader.addEventListener("click", event => {
        var startBtnHeaderInput = "center"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,startBtnHeaderInput,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        // Create our stylesheet
        var styleStartBtnHeader = document.createElement('style');
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:center;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#header-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(styleStartBtnHeader, ref);
    })

    const endBtnHeader = document.querySelector("#endBtnHeader")
    endBtnHeader.addEventListener("click", event => {
        var startBtnHeaderInput = "end"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,startBtnHeaderInput,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        // Create our stylesheet
        var styleStartBtnHeader = document.createElement('style');
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:right;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#header-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(styleStartBtnHeader, ref);
    })

    const topBtnHeaderBtn = document.querySelector("#topBtnHeader")
    topBtnHeaderBtn.addEventListener("click", event => {
        var topBtnHeaderBtnInput = "top"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,topBtnHeaderBtnInput,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)

        $('pre').html(JSON.stringify(dataInner, undefined, 2));

    })

    const centerBtnGravity = document.querySelector("#centerBtnGravityHeader")
    centerBtnGravity.addEventListener("click", event => {
        var topBtnHeaderBtnInput = "center"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,topBtnHeaderBtnInput,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)

        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bottomBtnGravity = document.querySelector("#bottomBtnHeader")
    bottomBtnGravity.addEventListener("click", event => {
        var topBtnHeaderBtnInput = "bottom"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,topBtnHeaderBtnInput,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const marginHeader = document.querySelector("#marginHeader")
    marginHeader.addEventListener("change", evnet=> {
        var marginvalueInput = marginHeader.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueInput,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const wrapHeader = document.querySelector("#wrapHeader")
    wrapHeader.addEventListener("change", event => {
        wrapHeaderInput = false

        if(wrapHeader.value == "True") {
            wrapHeaderInput = true
        }

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderInput,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const heroImgUrl = document.querySelector("#heroImgUrl")
    heroImgUrl.addEventListener("input", event => {
        herImgUrlInput = heroImgUrl.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlInput,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)

        const imgHeroPreview  = document.querySelector("#imgHeroPreview")
        imgHeroPreview.src = herImgUrlInput;
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const heroFlex = document.querySelector("#heroFlex")
    heroFlex.addEventListener("change", event => {
        heroFlexInput = heroFlex.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexInput,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const heroSize = document.querySelector("#heroSize")
    heroSize.addEventListener("change", event => {
        heroSizeInput = heroSize.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue, heroSizeInput,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const leftHeroBtn = document.querySelector("#leftHeroBtn")
    leftHeroBtn.addEventListener("click", event => {
        leftHeroInput = "left"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,leftHeroInput,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const centerHeroBtn = document.querySelector("#centerHeroBtn")
    centerHeroBtn.addEventListener("click", event => {
        centerHeroInput = "center"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,centerHeroInput, heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const rightHeroBtn = document.querySelector("#rightHeroBtn")
    rightHeroBtn.addEventListener("click", event => {
        rightHeroInput = "right"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,rightHeroInput,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const topHeroBtn = document.querySelector("#topHeroBtn")
    topHeroBtn.addEventListener("click", event => {
        topHeroInput = "top"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,topHeroInput,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const centerGravityHeroBtn = document.querySelector("#centerGravityHeroBtn")
    centerGravityHeroBtn.addEventListener("click", event => {
        centerGravityHeroInput = "center"

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,centerGravityHeroInput,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bottomHeroBtn = document.querySelector("#bottomHeroBtn")
    bottomHeroBtn.addEventListener("click", event => {
        bottomHeroInput = "bottom"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,bottomHeroInput,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const heroAspectRatio = document.querySelector("#heroAspectRatio")
    heroAspectRatio.addEventListener("change", event => {
        heroAspectInput = heroAspectRatio.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectInput,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const heroAspectMode = document.querySelector("#heroAspectMode")
    heroAspectMode.addEventListener("change", event => {
        heroAspectModeInput = heroAspectMode.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModeInput,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const marginHero = document.querySelector("#marginHero")
    marginHero.addEventListener("change", event=> {
        marginHeroInput = marginHero.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHeroInput,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const backgroundHero = document.querySelector("#backgroundHero")
    backgroundHero.addEventListener("input",event => {
        backgroundHeroInput = backgroundHero.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHeroInput,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })
    const bodyLayout = document.querySelector("#bodyLayout")
    bodyLayout.addEventListener("change", event => {
        bodyLayoutInput = bodyLayout.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutInput,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bodyFlex = document.querySelector("#bodyFlex")
    bodyFlex.addEventListener("change", event => {
        bodyFlexInput = bodyFlex.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexInput,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bodySpacing = document.querySelector("#bodySpacing")
    bodySpacing.addEventListener("change", event => {
        bodySpacingInput = bodySpacing.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingInput,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bodyMargin = document.querySelector("#bodyMargin")
    bodyMargin.addEventListener("change", event => {
        bodyMarginInput = bodyMargin.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginInput,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bodyText = document.querySelector("#bodyText")
    bodyText.addEventListener("input", event => {
        bodyTextInput = bodyText.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextInput,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        var x = document.getElementById("body-text");
        x.innerHTML = bodyTextInput
    })

    const bodyTextflex = document.querySelector("#bodyTextflex")
    bodyTextflex.addEventListener("change" ,event => {
        bodyTextflexInput = bodyTextflex.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexInput,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

    })

    const bodyTextSize = document.querySelector("#bodyTextSize")
    bodyTextSize.addEventListener("change", event => {
        bodyTextSizeInput = bodyTextSize.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizeInput,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
        var text = document.getElementById("body-text");

        if(bodyTextSizeInput == "xxs") {
            text.setAttribute("style", "font-size:xx-small;")
        } else if(bodyTextSizeInput == "xs") {
            text.setAttribute("style", "font-size:x-small;")
        } else if(bodyTextSizeInput == "sm"){
            text.setAttribute("style", "font-size:small;")
        }else if(bodyTextSizeInput == "md") {
            text.setAttribute("style", "font-size:medium;")
        }else if(bodyTextSizeInput == "lg") {
            text.setAttribute("style", "font-size:large;")
        }else if(bodyTextSizeInput == "xl") {
            text.setAttribute("style", "font-size:x-large;")
        }else if(bodyTextSizeInput == "xxl") {
            text.setAttribute("style", "font-size:xx-large;")
        }else if(bodyTextSizeInput == "3xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }else if(bodyTextSizeInput == "4xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }else if(bodyTextSizeInput == "5xl") {
            text.setAttribute("style", "font-size:xxx-large;")
        }
    })

    const bodyTextColor = document.querySelector("#bodyTextColor")
    bodyTextColor.addEventListener("input", event => {
        bodyTextColorInput = bodyTextColor.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorInput,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '#body-text {' +
            'color:' +bodyTextColorInput+';'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#body-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })


    const bodyTextWeightRegular = document.querySelector("#bodyTextWeightRegular")
    bodyTextWeightRegular.addEventListener("click", event => {
        bodyTextWeightRegularInput = "regular"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightRegularInput,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));


        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '#body-text {' +
            'font-weight:normal;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#body-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const bodyTextWeightBold = document.querySelector("#bodyTextWeightBold")
    bodyTextWeightBold.addEventListener("click", event => {
        bodyTextWeightBoldInput = "bold"

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightBoldInput,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));


        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '#body-text {' +
            'font-weight:bold;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#body-text');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const bodyTextAlignleft = document.querySelector("#bodyTextAlignleft")
    bodyTextAlignleft.addEventListener("click", event => {
        var bodyTextAlignleftInput = "left"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignleftInput,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '.message-preview-body {' +
            'text-align:left;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('.message-preview-body');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const bodyTextAligncenter = document.querySelector("#bodyTextAligncenter")
    bodyTextAligncenter.addEventListener("click", event => {
        var bodyTextAligncenterInput = "center"

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAligncenterInput,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '.message-preview-body {' +
            'text-align:center;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('.message-preview-body');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const bodyTextAlignright = document.querySelector("#bodyTextAlignright")
    bodyTextAlignright.addEventListener("click", event => {
        var bodyTextAlignrightInput = "right"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignrightInput,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '.message-preview-body {' +
            'text-align:right;'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('.message-preview-body');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })



    const bodyTextMargin = document.querySelector("#bodyTextMargin")
    bodyTextMargin.addEventListener("change", event => {
        var bodyTextMarginInput = bodyTextMargin.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginInput,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const bodyTextWrap = document.querySelector("#bodyTextWrap")
    bodyTextWrap.addEventListener("change", event => {
        var bodyTextWrapInput = false
        if(bodyTextWrap.value == "True"){
            bodyTextWrapInput = true
        }

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapInput,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerLayout = document.querySelector("#footerLayout")
    footerLayout.addEventListener("change", event => {
        var footerLayoutInput = footerLayout.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutInput,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerFlex = document.querySelector("#footerFlex")
    footerFlex.addEventListener("change", event => {
        var footerFlexInput = footerFlex.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexInput,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonLabel = document.querySelector("#footerButtonLabel")
    footerButtonLabel.addEventListener("input", event => {
        var footerButtonLabelInput = footerButtonLabel.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelInput,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));


        var x = document.getElementById("footer-btn");
        x.innerHTML = footerButtonLabelInput
    })

    const footerButtonUrl = document.querySelector("#footerButtonUrl")
    footerButtonUrl.addEventListener("input", event => {
        var footerButtonUrlInput = footerButtonUrl.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlInput,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

    })

    const footerButtonFlex = document.querySelector("#footerButtonFlex")
    footerButtonFlex.addEventListener("change", event => {
        var footerButtonFlexInput = footerButtonFlex.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexInput,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonMargin = document.querySelector("#footerButtonMargin")
    footerButtonMargin.addEventListener("change", event => {
        var footerButtonMarginInput =footerButtonMargin.value

        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginInput,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonHeight = document.querySelector("#footerButtonHeight")
    footerButtonHeight.addEventListener("change", event => {
        var footerButtonHeightInput = footerButtonHeight.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightInput,footerButtonSizevalue,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonSize = document.querySelector("#footerButtonSize")
    footerButtonSize.addEventListener("change", event => {
        var footerButtonSizeInput = footerButtonSize.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizeInput,footerButtonColorvalue,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonColor = document.querySelector("#footerButtonColor")
    footerButtonColor.addEventListener("input", event => {
        var footerButtonColorInput = footerButtonColor.value
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorInput,footerButtonGravityvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));

        // Create our stylesheet
        var style = document.createElement('style');
        style.innerHTML =
            '#footer-btn {' +
            'color:' +footerButtonColorInput+';'+
            '}';

        // Get the first script tag
        var ref = document.querySelector('#footer-btn');

        // Insert our new styles before the first script tag
        ref.parentNode.insertBefore(style, ref);
    })

    const footerButtonTop = document.querySelector("#footerButtonTop")
    footerButtonTop.addEventListener("click", event => {
        var footerButtonTopInput = "top"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonTopInput)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonCenter = document.querySelector("#footerButtonCenter")
    footerButtonCenter.addEventListener("click", event => {
        var footerButtonCenterInput = "center"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonCenterInput)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const footerButtonBottom = document.querySelector("#footerButtonBottom")
    footerButtonBottom.addEventListener("click", event => {
        var footerButtonBottomInput = "bottom"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText, headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyMarginvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue,footerButtonBottomInput)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    const btnHeader = document.querySelector('#header-button')
    btnHeader.addEventListener('click', event => {
        btnHeader.setAttribute("style", "background-color:#00b900;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:block")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "display:none;")

        const headerItem = document.querySelector(".header-item")
        headerItem.setAttribute("style", "background-color:#eff2f5;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:#5a6172;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:#5a6172;")

        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")
        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")
    })

    const bubbleNavMenu = document.querySelector("bubble-message")
    bubbleNavMenu.addEventListener("click", event =>{
        btnHeader.setAttribute("style", "background-color:#eff2f5;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:block;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:block;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:block;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:block")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "display:none;")
        const headerItem = document.querySelector(".header-item")
        headerItem.setAttribute("style", "background-color:#eff2f5;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;")
        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")
        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")

        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:none;")
    })

    const headerItem = document.querySelector(".header-item")
    headerItem.addEventListener("click", event => {
        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "display:block;")
        headerItem.setAttribute("style", "background-color:#00b900;color:white;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:#5a6172;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:#5a6172;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")
        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")

    })

    const heroItem = document.querySelector(".hero-item")
    heroItem.addEventListener("click", event => {
        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#00b900;color:white;")
        heroList.setAttribute("style", "background-color:#00b900;color:white;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:block;")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "disply:none;")
        headerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")
        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;")
        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:none;")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")
        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")
    })

    const bodyButton = document.querySelector("#body-button")
    bodyButton.addEventListener("click", event => {
        bodyButton.setAttribute("style", "background-color:#00b900;color:white;")

        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:block;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:black;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "disply:none;")
        headerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")
        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")

    })

    const textBody = document.querySelector("#textBody")
    textBody.addEventListener("click", event =>{

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#00b900;color:white;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:block;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;color:black;")

        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:none;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:black;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "disply:none;")
        headerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")

        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")
    })

    const footerButton = document.querySelector("#footer-button")
    footerButton.addEventListener("click", event => {
        footerButton.setAttribute("style", "background-color:#00b900;color:white;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:block")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;color:black;")

        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:none;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:black;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "disply:none;")
        headerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")

        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#eff2f5;color:black;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:none;")
    })

    const textFooter = document.querySelector("#textFooter")
    textFooter.addEventListener("click", event => {
        const footerItem = document.querySelector(".footer-item")
        footerItem.setAttribute("style", "background-color:#00b900;color:white;")

        footerButton.setAttribute("style", "background-color:#eff2f5;color:black;")
        const footerProperties = document.querySelector(".footer-properties")
        footerProperties.setAttribute("style", "display:none")

        const bodyItem = document.querySelector(".body-item")
        bodyItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const textBodyProperties = document.querySelector(".text-body-properties")
        textBodyProperties.setAttribute("style", "display:none;")

        const bodyButton = document.querySelector("#body-button")
        bodyButton.setAttribute("style", "background-color:#eff2f5;color:black;")

        const bodyProperties = document.querySelector(".body-properties")
        bodyProperties.setAttribute("style", "display:none;")

        const heroItem = document.querySelector(".hero-item")
        const heroList = document.querySelector(".hero-list")
        heroItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        heroList.setAttribute("style", "background-color:#eff2f5;color:black;")
        const heroProperties = document.querySelector(".hero-properties")
        heroProperties.setAttribute("style", "display:none;")

        const textProperties = document.querySelector(".text-properties")
        textProperties.setAttribute("style", "disply:none;")
        headerItem.setAttribute("style", "background-color:#eff2f5;color:black;")
        const headerProperties = document.querySelector('.header-properties');
        headerProperties.setAttribute("style", "display:none")

        const directionMessage = document.querySelector("direction-message");
        directionMessage.setAttribute("style", "display:none;")
        const headerMessage = document.querySelector("header-message");
        headerMessage.setAttribute("style", "display:none;")
        const supermanMessage = document.querySelector("superman-message");
        supermanMessage.setAttribute("style","display:none;")
        const propertiesbodyMessage = document.querySelector("propertiesbody-message")
        propertiesbodyMessage.setAttribute("style","display:none")

        btnHeader.setAttribute("style", "background-color:#eff2f5;")

        const textFooterProperties = document.querySelector(".text-footer-properties")
        textFooterProperties.setAttribute("style", "display:block;")
    })
}

btnCreate.addEventListener('click', event => {
    if(flexMessageTemplate == 1)
        creatMessageBody();

    rightBtn.addEventListener('click', event => {

        directionFlex = "rtl"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })

    leftBtn.addEventListener('click', event => {
        directionFlex = "ltr"
        var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,flex,headerSpacing,headerMargin,headerInputText,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerStartBtn,headerTopBtn,marginvalueHeader,wrapHeaderValue,herImgUrlvalue,heroFlexvalue,heroSizevalue,heroAlign,heroGravity,heroAspectRatiovalue,heroAspectModevalue,marginHerovalue,backgroundHerovalue,bodyLayoutvalue,bodyFlexvalue,bodySpacingvalue,bodyTextvalue,bodyTextflexvalue,bodyTextSizevalue,bodyTextColorvalue,bodyTextWeightvalue,bodyTextAlignvalue,bodyTextGravityvalue,bodyTextMarginvalue,bodyTextWrapvalue,footerLayoutvalue,footerFlexvalue,footerButtonLabelvalue,footerButtonUrlvalue,footerButtonFlexvalue,footerButtonMarginvalue,footerButtonHeightvalue,footerButtonSizevalue,footerButtonColorvalue)
        $('pre').html(JSON.stringify(dataInner, undefined, 2));
    })
})

function checkBoxFunction() {
    var checkBox = document.querySelector("#actionInputAlign");
    var actionDetail = document.getElementById("actionDetail");

    if (checkBox.checked == true){
        actionDetail.setAttribute("style", "display:block;")
    } else {
        actionDetail.setAttribute("style", "display:none;")
    }
}

function checkBoxHeaderFunction() {
    var checkBox = document.querySelector("#actionInput")
    var actionDetailHeader = document.querySelector("#actionDetailHeader")

    if (checkBox.checked == true){
        actionDetailHeader.setAttribute("style", "display:block;")
    } else {
        actionDetailHeader.setAttribute("style", "display:none;")
    }

}

function checkBoxHeroFunction() {
    var checkBox = document.querySelector("#actionInputHero")
    var actionDetailHero = document.querySelector("#actionDetailHero")

    if(checkBox.checked == true){
        actionDetailHero.setAttribute("style", "display:block")
    }else {
        actionDetailHero.setAttribute("style", "display:none;")
    }
}

function checkBoxBodyFunction() {
    var checkBox = document.querySelector("#actionInputBody")
    var actionDetailBody = document.querySelector("#actionDetailBody")

    if(checkBox.checked == true){
        actionDetailBody.setAttribute("style", "display:block")
    }else {
        actionDetailBody.setAttribute("style", "display:none;")
    }
}

function checkBoxTextBodyFunction() {
    var checkBox = document.querySelector("#actionBodyTextInputAlign")
    var actionDetailTextBody = document.querySelector("#actionDetailTextBody")

    if(checkBox.checked == true){
        actionDetailTextBody.setAttribute("style","display:block")
    }else{
        actionDetailTextBody.setAttribute("style","display:none")
    }
}

function checkBoxFooterFunction() {
    var checkBox = document.querySelector("#actionInputFooter")
    var actionDetailFooter = document.querySelector("#actionDetailFooter")

    if(checkBox.checked == true){
        actionDetailFooter.setAttribute("style","display:block")
    }else{
        actionDetailFooter.setAttribute("style","display:none")
    }
}

$(document).ready(function () {
    //
    // $(document).delegate('#messageSubmit', 'click', function(event) {
    //
    //     //stop submit the form, we will post it manually.
    //     event.preventDefault();
    //
    //     // fire_ajax_submit();
    //     // document.getElementById("messageJson").value = data;
    //
    // });
});

function mydate() {
    //alert("");
    document.getElementById("dt").hidden = false;
    document.getElementById("send_date").hidden = true;
}

function mydate1() {
    d = new Date(document.getElementById("dt").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    document.getElementById("send_date").value = dt + "-" + mn + "-" + yy
    document.getElementById("send_date").hidden = false;
    document.getElementById("dt").hidden = true;``
}

function preview(rawMessageJson){
    var messageJson = JSON.parse(rawMessageJson)
    const messagePreviewHeader = document.querySelector(".message-preview-header")
    const messagePreviewHero = document.querySelector(".message-preview-hero")
    const imgHeroPreview  = document.querySelector("#imgHeroPreview")
    const messagePreviewBody = document.querySelector(".message-preview-body")

    const textHeader = document.querySelector("#header-text")
    const textBody = document.querySelector('#body-text');
    const footerButton = document.querySelector('#footer-btn');

    //flex
    var directionFlex = messageJson.flex;

    //header background color
    var headerBackgroudColor = messageJson.styles.header.backgroundColor;
    document.querySelector("#backgroudColorInputHeader").value = headerBackgroudColor;
    messagePreviewHeader.setAttribute("style", "background-color:"+headerBackgroudColor+";")

    //hero background color
    var heroBackgroudColor = messageJson.hero.backgroundColor;
    document.querySelector("#backgroundColorInputHero").value = heroBackgroudColor;
    messagePreviewHero.setAttribute("style", "background-color:"+heroBackgroudColor+";")

    //separator true, false
    var separatorOptionBoolean =  messageJson.styles.hero.separator;
    document.querySelector("#separatorOption").value = separatorOptionBoolean;
    if(separatorOptionBoolean == "true") {
        messagePreviewHero.setAttribute("style", "border-top:1px solid"+separatorColor+";")
    }else if(separatorOptionBoolean == "false"){
        messagePreviewHero.setAttribute("style", "border-top:none;")
    }

    //separator color
    var separatorColor = messageJson.styles.hero.separatorColor;
    document.querySelector("#separatorColor").value = separatorColor;
    if(separatorOptionBoolean == "true") {
        messagePreviewHero.setAttribute("style", "border-top:1px solid"+ separatorColor +";")
    }

    //body background color
    var bodyBackgroundColor = messageJson.styles.body.backgroundColor;
    document.querySelector('#backgroundColorInput').value = bodyBackgroundColor;
    messagePreviewBody.setAttribute("style", "background-color:"+ bodyBackgroundColor +";")

    //header layout
    var headerLayout = messageJson.header.layout;

    //header flex
    var FlexHeaderInput = messageJson.header.flex;

    //header spacing
    var headerSpacing = messageJson.header.spacing;

    //header margin
    var headerMargin = messageJson.header.margin;

    //header text
    var iptTextHeaderInput = messageJson.header.contents[0].text;
    textHeader.innerHTML = iptTextHeaderInput;
    document.querySelector("#iptTextHeader").value = iptTextHeaderInput;

    //header text flex
    var headerTextFlex = messageJson.header.contents[0].flex;

    //header text size
    var headerTextSize = messageJson.header.contents[0].size
    document.querySelector("#sizeTextHeader").value = headerTextSize;
    if(headerTextSize == "xxs") {
        textHeader.setAttribute("style", "font-size:xx-small;")
    } else if(headerTextSize == "xs") {
        textHeader.setAttribute("style", "font-size:x-small;")
    } else if(headerTextSize == "sm"){
        textHeader.setAttribute("style", "font-size:small;")
    }else if(headerTextSize == "md") {
        textHeader.setAttribute("style", "font-size:medium;")
    }else if(headerTextSize == "lg") {
        textHeader.setAttribute("style", "font-size:large;")
    }else if(headerTextSize == "xl") {
        textHeader.setAttribute("style", "font-size:x-large;")
    }else if(headerTextSize == "xxl") {
        textHeader.setAttribute("style", "font-size:xx-large;")
    }else if(headerTextSize == "3xl") {
        textHeader.setAttribute("style", "font-size:xxx-large;")
    }else if(headerTextSize == "4xl") {
        textHeader.setAttribute("style", "font-size:xxx-large;")
    }else if(headerTextSize == "5xl") {
        textHeader.setAttribute("style", "font-size:xxx-large;")
    }

    //header text color
    var headerTextColor = messageJson.header.contents[0].color;
    document.querySelector("#colorTextHeader").value = headerTextColor;

    var style = document.createElement('style');
    style.innerHTML =
        '#header-text {' +
        'color:' +headerTextColor+';'+
        '}';
    messagePreviewHeader.parentNode.insertBefore(style, messagePreviewHeader);

    //header text weight
    var headerTextWeight = messageJson.header.contents[0].weight;
    if(headerTextWeight == "regular")
        messagePreviewHeader.setAttribute("style", "font-weight:normal;")
    else if(headerTextWeight == "bold")
        messagePreviewHeader.setAttribute("style", "font-weight:bold;")

    //header text align
    var headerTextAlign = messageJson.header.contents[0].align;
    var styleStartBtnHeader = document.createElement('style');
    if(headerTextAlign == "start") {
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:left;' +
            '}';
    }
    else if(headerTextAlign == "start") {
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:center;' +
            '}';
    }
    else if(headerTextAlign == "start") {
        styleStartBtnHeader.innerHTML =
            '.message-preview-header {' +
            'text-align:right;' +
            '}';
    }
    messagePreviewHeader.parentNode.insertBefore(styleStartBtnHeader, messagePreviewHeader);

    //header text gravity
    var headerTextGravity = messageJson.header.contents[0].gravity;

    //header text margin
    var headerTextMargin = messageJson.header.contents[0].margin;

    //header text wrap
    var headerTextWrap = messageJson.header.contents[0].wrap;

    //hero image url
    var heroImgUrl = messageJson.hero.url;
    imgHeroPreview.src = heroImgUrl;

    //hero flex
    var hereoFlex = messageJson.hero.flex;

    //hero size
    var hereoFlex = messageJson.hero.size;

    //hero align
    var heroAlign = messageJson.hero.align;

    //hero gravity
    var heroGravity = messageJson.hero.gravity;

    //hero ratio
    var heroRatio = messageJson.hero.aspectRatio;

    //hero mode
    var heroMode = messageJson.hero.aspectMode;

    //hero margin
    var heroMargin = messageJson.hero.margin;

    //hero background color
    var heroBackgroundColor = messageJson.hero.backgroundColor;

    //body layout
    var bodyLayout = messageJson.body.layout;

    //body flex
    var bodyFlex = messageJson.body.flex;

    //body spacing
    var bodySpacing = messageJson.body.spacing;

    //body margin
    var bodyMargin = messageJson.body.spacing;

    //body text
    var bodyText = messageJson.body.contents[0].text;
    document.getElementById("body-text").innerHTML = bodyText;

    //body text flex
    var bodyTextFlex = messageJson.body.contents[0].flex;

    //body text size
    var bodyTextSize = messageJson.body.contents[0].size;
    var bodySizeText = document.getElementById("body-text");
    document.querySelector("#bodyTextSize").value = bodyTextSize;

    if(bodyTextSize == "xxs") {
        bodySizeText.setAttribute("style", "font-size:xx-small;")
    } else if(bodyTextSize == "xs") {
        bodySizeText.setAttribute("style", "font-size:x-small;")
    } else if(bodyTextSize == "sm"){
        bodySizeText.setAttribute("style", "font-size:small;")
    }else if(bodyTextSize == "md") {
        bodySizeText.setAttribute("style", "font-size:medium;")
    }else if(bodyTextSize == "lg") {
        bodySizeText.setAttribute("style", "font-size:large;")
    }else if(bodyTextSize == "xl") {
        bodySizeText.setAttribute("style", "font-size:x-large;")
    }else if(bodyTextSize == "xxl") {
        bodySizeText.setAttribute("style", "font-size:xx-large;")
    }else if(bodyTextSize == "3xl") {
        bodySizeText.setAttribute("style", "font-size:xxx-large;")
    }else if(bodyTextSize == "4xl") {
        bodySizeText.setAttribute("style", "font-size:xxx-large;")
    }else if(bodyTextSize == "5xl") {
        bodySizeText.setAttribute("style", "font-size:xxx-large;")
    }

    //body text color
    var bodyTextColor = messageJson.body.contents[0].color;
    document.querySelector("#bodyTextColor").value = bodyTextColor;

    var bodyStyle = document.createElement('style');
    bodyStyle.innerHTML =
        '#body-text {' +
        'color:' +bodyTextColor+';'+
        '}';

    // Get the first script tag
    var ref = document.querySelector('#body-text');
    messagePreviewBody.parentNode.insertBefore(bodyStyle, messagePreviewBody);

    //body text weight
    var bodyTextWeight = messageJson.body.contents[0].weight;
    var boduStyle = document.createElement('style');
    if(bodyTextWeight == "regular") {
        boduStyle.innerHTML =
            '#body-text {' +
            'font-weight:normal;' +
            '}';
    }
    else if(bodyTextWeight == "bold") {
        boduStyle.innerHTML =
            '#body-text {' +
            'font-weight:bold;' +
            '}';
    }
    messagePreviewBody.parentNode.insertBefore(boduStyle, messagePreviewBody);

    //body text align
    var bodyTextAlign = messageJson.body.contents[0].align;
    var styleBody = document.createElement('style');
    if(bodyTextAlign == "left"){
        styleBody.innerHTML =
        '.message-preview-body {' +
        'text-align:left;'+
        '}';
    }
    else if(bodyTextAlign == "center"){
        styleBody.innerHTML =
            '.message-preview-body {' +
            'text-align:center;'+
            '}';
    }
    else if(bodyTextAlign == "right"){
        styleBody.innerHTML =
            '.message-preview-body {' +
            'text-align:right;'+
            '}';
    }
    messagePreviewBody.parentNode.insertBefore(styleBody, messagePreviewBody);

    //body text gravity
    var bodyTextGravity = messageJson.body.contents[0].gravity;

    //body text margin
    var bodyTextMargin = messageJson.body.contents[0].margin;

    //body text wrap
    var bodyTextWrap = messageJson.body.contents[0].wrap;

    //footer layout
    var footerLayout = messageJson.footer.layout;

    //
    var footerFlex = messageJson.footer.flex;

    //footer button label
    var footerButtonLabel = messageJson.footer.contents[0].action.label;
    document.getElementById("footer-btn").innerHTML = footerButtonLabel;

    //footer button url
    var footerButtonUrl = messageJson.footer.contents[0].action.uri;
     document.querySelector("#footerButtonUrl").value = footerButtonUrl;

    //footer button flex
    var footerButtonFlex = messageJson.footer.contents[0].flex;

    //footer button margin
    var footerButtonMargin = messageJson.footer.contents[0].margin;

    //footer button height
    var footerButtonHeight = messageJson.footer.contents[0].height;

    //footer button size
    var footerButtonSize = messageJson.footer.contents[0].size;

    //footer button color
    var footerButtonColor = messageJson.footer.contents[0].color;
    var footerStyle = document.createElement('style');
    document.querySelector("#footerButtonColor").value = footerButtonColor;
    footerStyle.innerHTML =
        '#footer-btn {' +
        'color:' +footerButtonColor+';'+
        '}';
    footerButton.parentNode.insertBefore(footerStyle, footerButton);

    //footer button gravity
    var footerButtonGravity = messageJson.footer.contents[0].gravity;

    var dataInner = changJson(headerBackgroudColor, directionFlex, heroBackgroudColor,separatorOptionBoolean,separatorColor,bodyBackgroundColor,headerLayout,FlexHeaderInput,headerSpacing,headerMargin,
        iptTextHeaderInput,headerTextFlex,headerTextSize,headerTextColor,headerTextWeight,headerTextAlign,headerTextGravity,headerTextMargin,headerTextWrap,
        heroImgUrl,hereoFlex,hereoFlex,heroAlign, heroGravity,heroRatio,heroMode,heroMargin,heroBackgroundColor,
        bodyLayout,bodyFlex,bodySpacing,bodyMargin,bodyText,bodyTextFlex,bodyTextSize, bodyTextColor,bodyTextWeight,bodyTextAlign,bodyTextGravity,bodyTextMargin,bodyTextWrap,
        footerLayout,footerFlex,footerButtonLabel,footerButtonUrl,footerButtonFlex,
        footerButtonMargin,footerButtonHeight,footerButtonSize,footerButtonColor,footerButtonGravity)


    $('pre').html(JSON.stringify(dataInner, undefined, 2));

}

$(document).ready(function() {
    $(window).on("keydown", function(event){
        // Check to see if ENTER was pressed and the submit button was active or not
        if(event.keyCode === 13 && event.target === document.getElementById("btnSubmit")) {
            // It was, so submit the form
            document.querySelector("form").submit();

        } else if(event.keyCode === 13 && event.target !== document.getElementById("btnSubmit") ){
            // ENTER was pressed, but not while the submit button was active
            // alert();

            // Cancel form's submit event
            event.preventDefault();

            //  Invoke click event of target so that non-form submit behaviors will work
            event.target.click();

            // Tell JQuery to cancel the event
            return false;
        }
    });

    $(window).on("click", function(event){
        // Check to see if ENTER was pressed and the submit button was active or not
        if(event.target === document.getElementById("btnSubmit")) {
            // It was, so submit the form
            document.querySelector("form").submit();

        } else if(event.target !== document.getElementById("btnSubmit") && event.target !== document.getElementById("dt") && event.target !== document.getElementById("DraftRadio") && event.target !== document.getElementById("Draft") && event.target !== document.getElementById("SendNowRadio") && event.target !== document.getElementById("SendNow")  && event.target !== document.getElementById("DateRadio") && event.target !== document.getElementById("DateSpan") ){
            // ENTER was pressed, but not while the submit button was active
            // alert();

            //Cancel form's submit event
            event.preventDefault();
            console.log("test")
            //  Invoke click event of target so that non-form submit behaviors will work
            event.target.click();

           // Tell JQuery to cancel the event
            return false;
        }
    });

    // // Non-submit button event handling
    // $("#btnOther").on("click", function(){
    //     alert("Other button clicked!");
    // });

    // Set up your "regular" button to act as a "submit" button when it is clicked
    // $("#btnSubmit").on("click", function(){
    //     // Submit the form
    //     document.querySelector("form").submit();
    // });


});

