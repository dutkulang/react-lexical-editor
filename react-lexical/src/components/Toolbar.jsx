import FormatCommands from "./FormatCommands";

function Toolbar(){
	const {
		formatBold,
		formatItalic,
		formatUnderline,
		formatStrikeThrough,
		formatSuperscript,
		formatSubscript,
		formatUpperCase,
		formatLowerCase,
		formatCapitalize,
		formatTextCenter,
		formatTextRight,
		formatTextLeft
		// formatCode,
		// formatHightLight
	} = FormatCommands();

	return (
		<>
		<div className="flex gap-3">
			<select className="p-2 rounded bg-stone-300 uppercase" name="heading" id="">
				<option value=""></option>
				<option value="h1">h1</option>
				<option value="h1">h2</option>
				<option value="h1">h3</option>
				<option value="h1">h4</option>
				<option value="h1">h5</option>
				<option value="h1">h6</option>
				
			</select>
			<button title="Align Center" className="px-3 rounded bg-slate-200 cursor-pointer" onClick={formatTextCenter}>Center</button>
			<button title="Align Right" className="px-3 rounded bg-slate-200 cursor-pointer" onClick={formatTextRight}>Right</button>
			<button title="Align Left" className="px-3 rounded bg-slate-200 cursor-pointer" onClick={formatTextLeft}>Left</button>
			<button title="Bold" className="px-3 rounded bg-slate-200 cursor-pointer" onClick={formatBold}>B</button>
			<button title="Italic" className="px-3 rounded bg-slate-200 cursor-pointer" onClick={formatItalic}>I</button>
			<button title="Underline" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatUnderline} ><u>U</u></button>
			<button title="Strike through" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatStrikeThrough} ><s>abc</s></button>
			<button title="Uppercase" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatUpperCase} >ABC</button>
			<button title="Lowercase" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatLowerCase} >abc</button>
			<button title="Capitalize" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatCapitalize} >Abc</button>
			<button title="Subscript" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatSubscript} >X<sub>2</sub></button>			
			<button title="Superscript" className="p-3 rounded bg-slate-200 cursor-pointer" onClick={formatSuperscript}>X<sup>2</sup></button>
		</div>
		
		</>
	)
}
export default Toolbar;