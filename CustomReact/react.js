function customrender(ReactElement, container){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)

    container.appendChild(domElement);
}


const ReactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me'
}

const maincontainer = document.querySelector('#root');

customrender(ReactElement, maincontainer)
