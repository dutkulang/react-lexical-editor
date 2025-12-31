import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable } from "@lexical/react/LexicalContentEditable";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {OnChangePlugin} from "@lexical/react/LexicalOnChangePlugin";
import { HeadingNode } from '@lexical/rich-text';
import Toolbar from "./Toolbar";

const initialConfig = {
	namespace:"Editor-1",
	theme:{
		heading:{
			h1:"text-green-500 font-bold",
			h2: "text-1xl font-bold"
		},
		text:{			
			bold: "font-bold text-lg",
			italic: "font-italic",
			underline: "underline",
			uppercase:"uppercase",
			lowercase:"lowercase",
			capitalize:"capitalize",
			subscript:"align-sub text-sm",
			superscript:"align-super text-sm",
			strikethrough:"line-through",
			code: "bg-gray-100",

		}
	},
	nodes:[HeadingNode],
	onError:()=>{}
}

const onchanges = (editorState)=>{
	console.log(editorState)
}
function Editor(){
	return (
		<div className="w-8/12 mx-auto">
			<LexicalComposer initialConfig={initialConfig}>
				<Toolbar />
				<div className="relative">
					<RichTextPlugin className="" 
						contentEditable={<ContentEditable className="
							my-3
							p-15
							z-30
							rounded
							hover:cursor-pointer
							bg-neutral-100
							 shadow-lg
							 my-10
							outline-none"/>}
						// placeholder={<p className="text-red absolute text-center top-0 z-0 p-5"> Write here ...</p>}
						ErrorBoundary={<LexicalErrorBoundary/>}
					/>
				</div>
				<HistoryPlugin/>
				<OnChangePlugin onChange={onchanges}/>
			</LexicalComposer>

			<div className="flex gap-2 justify-end">
				<button className="bg-green-400 p-3 rounded-xl text-white font-bold">Save</button>
				<button className="bg-red-500 p-3 rounded-xl text-white font-bold">Delete</button>
			</div>
			
		</div>
	)

}
export default Editor;
