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

### Add Editor to `App.jsx`

```jsx
//App.jsx

import Editor from "./src/components/Editor";

function App(){
    return (
        <>
            <h1>Rich Text Editor</h1>
            <Editor />
        </>
    )
}
```

Since Editor is just has a wrapper we will see only the word "Rich Text Editor" on the page

## Upgrade the Editor

Let's add rich features like bold, italics, lists, lists, headings etc using the `RichTextPlugin` component from `@lexical/react/LexicalRichTextPlugin`

RichTextPlugin component takes in several props

- contentEditable: Creates a TextField field and takes in component `ContentEditable` import from "@lexical/react/LexicalContentEditable". 
This is what will create a text field for text input.

- placeholder: Placeholder text for the input field.

- ErrorBoundary: takes in a component `LexicalErrorBoundary` from "@lexical/react/LexicalErrorBoundary", on handles error that with the actual editor.

```jsx
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";

// everything else remains the same.

function Editor(){
    return (
        <>
            <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin 
                    contentEditable={<ContentEditable/>}
                    placeholder={<p>Write something here</p>}
                    ErrorBoundary={<LexicalErrorBoundary/>}
                />
            </LexicalComposer?
        </>
    )
}
export default Editor;
```

We have created a basic editor, now lets add features

### Toolbar

create a file `src/components/Toolbar.jsx`

The toolbar is going to be a container at the top of the editor with the different operations listed out. Similar to that of libre Office, microsoft word, google docs writer. 

```jsx
//src/components/Toolbar.jsx

function Toolbar(){
    return (
        <div>
            {/** heading **/}
            <select title="heading">
                <option>h1</option>
                <option>h2</option>
                <option>h3</option>
                <option>h4</option>
                <option>h5</option>
                <option>h6</option>
            </select>

            {/** bold **/}
            <button title="bold"><b>B</b></button>

            {/** italic **/}
            <button title="italic"><i>i</i></button>

            {/** underline **/}
            <button title="underline"><u>U</u></button>

            {/** strike through **/}
            <button title="strike through"><s>abc</s></button>

            {/** uppercase **/}
            <button title="uppercase">ABC</button>

            {/** lowercase **/}
            <button title="lowercase">abc</button>

            {/** Capitalize **/}
            <button title="Capitalize">Abc</button>

            {/** superscript **/}
            <button title="superscript">X<sup>2</sup></button>

            {/** subscript **/}
            <button title="subscript">X<sub>2</sub></button>

            {/** Center align **/}
            <button title="center align text">Center</button>

            {/** left align **/}
            <button title="left align text">left</button>

            {/** right align **/}
            <button title="right align text">right</button>

            {/** justify align **/}
            <button title="justify align text">justify</button>
        </div>
    )
}
export default Toolbar;
```

### Format commands

```jsx
// src/components/FormatCommands.jsx
import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {FORMAT_TEXT_COMMAND} from "lexical";

functiom FormatCommands(){
    const [editor] = useLexicalComposerContext();

    const dispatchFormat = (format, type)=>{
        return editor.dispatchCommand(format, type)
    }

    return {
        formatBold:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "bold"),
        formatUnderline:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "underline"),
        formatStrikeThrough:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "strikethrough"),
        formatItalic:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "italic"),
        formatSuperscript:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "superscript"),
        formatSubscript:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "subscript"),
        formatCapitalize:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "capitalize"),
        formatLowerCase:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "lowercase"),     
        formatUpperCase:()=>dispatchFormat(FORMAT_TEXT_COMMAND, "uppercase"),

    }
}
```
