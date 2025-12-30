# react-lexical-editor

A rich Text Editor built using lexical library from facebook

Lexical is a powerful, extensible rich text editor framework by Meta (Facebook).

Designed to be lightweight, performant, and customizable.

Lexical uses a node-based system that is easier to extend (more about this later)

and does not rely on contentEditable hacks as much.

## Get started

- Create React project using vite

```sh
npm create vite@latest
```

- install lexical dependencies

```sh
npm i lexical @lexical/react

```

### Understand Lexical core concepts

- Editor: Is the core instance that manages the text & state.

- Nodes: These are everything in the Editor (text, paragraph, h1,h2,h3, links, bold,

super-script, sub-script etc) are nodes. Lexical comes with built in nodes e.g 

TextNode, ParagraphNode etc.

- Plugins: These add features e.g history plugin for redo, undo

- EditorState: A serializable Object (JSON-friendly) representing the content.
This is what is usually saved to the database.

- Composer: A react component that wraps around the Editor setup.


## Lets our hands into code

This is how my `App.jsx` looks like

```jsx
//App.jsx

function App(){
    return (
        <>
            <h1>Rich Text Editor</h1>

        </>
    )
}

export default App;
```
1. Create a file `Editor.jsx` inside `src/components`

Everything in lexical is wrapped within a `LexicalComposer` component

```jsx
import {LexicalComposer} from "@lexical/react/LexicalComposer";

function Editor(){
    return (
        <LexicalComposer>
            // Editor will live here        
        </LexicalComposer>
    )
}

```

LexicalComposer takes in a prop of `initialConfig`. That will be an `object`

with setup information for the editor.

`initialConfig` object will contain

- namespace: This helps prevent conflicts if multiple instances of the editor are running at the same time.
- theme object: Theme customization for the editor
- onError callback function: Will handle whatever errors that occur within the editor.
- nodes array: These will be all nodes that want available in our editor. If we want code high lighting we add its node `codeHighlightNode`, HeadingNode for h1, h2 etc

```jsx
// src/components/Editor.jsx
import {LexicalComposer} from "@lexical/react/LexicalComposer";

const initialConfig = {
    namespace: "Editor-1",
    theme: {}, // theme config empty for now
    nodes: [], //empty for now
    onError: ()=>{} // will handle errors
}

function Editor(){
    return (
        <LexicalComposer initialConfig={initialConfig}>
            // editor will live here
        </LexicalComposer>
    )
}

export default Editor;

```


