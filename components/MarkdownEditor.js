import {Editor, EditorState, RichUtils, convertFromRaw} from 'draft-js';
import { useState } from 'react';
import 'draft-js/dist/Draft.css';

const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: '',
        key: 'foo',
        type: 'unstyled',
        entityRanges: [],
      },
    ],
  });

const initialState = EditorState.createWithContent(emptyContentState);

export default function MarkdownEditor(){
    const [editorState, setEditorState] = useState(initialState);

    const handleKeyCommand = (command)=>{
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
          setEditorState(newState)
          return 'handled';
        }
    
        return 'not-handled';
    }

    const onBoldClick = ()=>{
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
    }

    const onItalicClick = ()=>{
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }

    return (
        <div className="w-full border border-yellow-300 mb-10">
            <h1 className="text-xl font-bold text-center my-2">Markdown Editor</h1>
            <div className="border border-black p-3">
                <button onClick={onBoldClick} className="toggle-style-btn"><strong>B</strong></button>
                <button onClick={onItalicClick} className="toggle-style-btn"><em>I</em></button>
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    placeholder="Click here to activate input"
                />
            </div>
        </div>
    );
}

//React's controlled component API
//The top-level component can maintain control over the input state via this value state property.

//RichUtils has information about the core key commands available to web editors, such as Cmd+B (bold), Cmd+I (italic), and so on.
//We can observe and handle key commands via the handleKeyCommand prop, and hook these into RichUtils to apply or remove the desired style.

//We encountered a bug
//fixed: https://github.com/facebook/draft-js/issues/1199#issuecomment-331677160