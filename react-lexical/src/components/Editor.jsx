import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {ContentEditable } from "@lexical/react/LexicalContentEditable";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";


const initialConfig = {
	namespace:"Editor-1",
	theme:{},
	nodes:[],
	onError:()=>{}
}
function Editor(){
	return (
		<div className="editor-container">
			<LexicalComposer initialConfig={initialConfig}>
				<RichTextPlugin
					contentEditable = {<ContentEditable/>}
					placeholder={<h2>Write you post here</h2>}
					ErrorBoundary={LexicalErrorBoundary}
				/>
			</LexicalComposer>
		</div>
	)

}
export default Editor;
