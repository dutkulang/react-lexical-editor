import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {$getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND,} from "lexical";

function FormatCommands(){
    const [editor] = useLexicalComposerContext(); // get the editor instance

    const dispatchFormat = (format, type)=>{
        editor.dispatchCommand(format, type)
    }
    return {
        formatBold : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "bold")},
        formatItalic: ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "italic");},
        formatUnderline: ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "underline")},
        formatStrikeThrough : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "strikethrough")},
        formatSuperscript : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "superscript")},
        formatSubscript : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "subscript")},
        formatUpperCase : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "uppercase")},
        formatLowerCase : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "lowercase")},
        formatCapitalize : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "capitalize")},
        formatCode : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "code")},
        formatHightLight : ()=>{dispatchFormat(FORMAT_TEXT_COMMAND, "highlight")},
        formatTextCenter: ()=>{dispatchFormat(FORMAT_ELEMENT_COMMAND, "center")},
        formatTextLeft: ()=>{dispatchFormat(FORMAT_ELEMENT_COMMAND, "left")},
        formatTextRight: ()=>{dispatchFormat(FORMAT_ELEMENT_COMMAND, "right")},
    }
}
export default FormatCommands;