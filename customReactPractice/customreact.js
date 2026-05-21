function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // yaha repetative kaam ho raha hai and ye kaam jyada element ho toh aur bhi badh jayega 
    // aam jindgi
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target",reactElement.props.target)

    // mentos zindgi
    for (const prop in reactElement.props) {        
        if(prop === "children") continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

const mainContainer = document.querySelector('#root');

// customRender(kya,kaha) - inject karne ke liye
customRender(reactElement,mainContainer)


