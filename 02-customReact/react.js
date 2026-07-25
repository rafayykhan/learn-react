//  method that adds the element to the root for rendering
// this is our own mini version of ReactDOM's render()
// reactElement -> the plain object describing what we want on screen

// mainContainer -> the real DOM node where it should be injected
function customRender(reactElement, mainContainer) {
    // create the actual tag in the browser from the "type" we described
    const domElement  = document.createElement(reactElement.type)
    // whatever text/markup sits inside the tag becomes its content
    domElement.innerHTML = reactElement.Children
    // props are copied onto the real element as html attributes
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // finally put the ready element inside the container so it shows up
    mainContainer.append(domElement)
}

function customRender_h1 (react_h1, Container) {
    const domElement = document.createElement (react_h1.type)

    domElement.innerHTML = react_h1.Children
    domElement.setAttribute('id', react_h1.props.id)
    
    mainContainer.append(domElement)
}

function renderPrismoi (reactElement_prismo, container) {
    const domElement = document.createElement(reactElement_prismo.type)
    domElement.innerHTML = reactElement_prismo.Children
    for( const prop in reactElement_prismo.props) {
        domElement.setAttribute (prop, reactElement_prismo.props[prop])
    }
    container.append(domElement)
}


// this object is what jsx actually turns into after babel compiles it
// react never sees <a href="...">, it only sees a plain object like this
const reactElement_prismo = {
    type: 'a', // types tells what kind if tag it is
    props: {
        // every attribute we write in jsx lands inside props
        href: 'https://prismovector.com',
        target: '_blank'
    },
    // whatever is written between the opening and closing tag
    Children : 'click here to vist my website'
}

const reactElement = {
    type: 'a', // types tells what kind if tag it is
    props: {
        // every attribute we write in jsx lands inside props
        href: 'https://google.com',
        target: '_blank'
    },
    // whatever is written between the opening and closing tag
    Children : 'click me to visit google'
}

const react_h1 = {
    type: 'h1',
    props: {
        id: 'heading-1'
    },
    Children: 'this is my custom made react element'
}

// grab the root node from index.html, same as document.getElementById('root')
const mainContainer = document.querySelector('#root')
// const Container = document.querySelector('#root')

// i want to render this 
// lets say i want to render an a tag then how can we do that 
// behind the scene 
// like how react see the return thing in a function like 
//  we have a function and we are returing something how react see thta
// calling our render kicks off the whole thing -> object in, real dom out
customRender(reactElement, mainContainer)
customRender_h1(react_h1, mainContainer)
renderPrismoi (reactElement_prismo, mainContainer)

// the commented code below is the jsx way of writing the same idea
// babel would convert this jsx into an object just like reactElement above
// function App() {
//     return (
//         <h1>
//             HEllo i am making custom React
//         </h1>
//     )
// }

// export default App
