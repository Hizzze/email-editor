import { TextareaHTMLAttributes, useRef, useState } from 'react';
import styles from './EmailEditor.module.scss';
import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import { applyStyle, TStyle } from './apply-style';
import parse from 'html-react-parser';

export function EmailEditor() {
  const [text, setText] = useState(
    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, animi eaque distinctio delectus voluptatibus reiciendis nemo accusantium exercitationem quibusdam architecto recusandae sunt maxime amet a sint perspiciatis in. Amet, obcaecati!',
  );

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const updateSelection = () => {
    if (!textRef.current) return;

    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormat = (type: TStyle) => {
    if (selectionStart === selectionEnd) {
      console.log('Ничего не выделено');
      return; // Ничего не выделено
    }

    const selectedText = text.substring(selectionStart, selectionEnd);
    const before = text.substring(0, selectionStart); // Текст ДО выделения
    const after = text.substring(selectionEnd); // Текст ПОСЛЕ выделения
    const formattedText = applyStyle(type, selectedText); // Форматированный текст

    const newText = before + formattedText + after;
    setText(newText);

    console.log('Применен стиль:', type);
    console.log('Было:', selectedText);
    console.log('Стало:', formattedText);
  };
  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onSelect={updateSelection}
          value={text}
          onChange={(e) => setText(e.target.value)}></textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}>
              <Eraser size={16} />
            </button>
            <button onClick={() => applyFormat('bold')}>
              <Bold size={16} />
            </button>
            <button onClick={() => applyFormat('italic')}>
              <Italic size={16} />
            </button>
            <button onClick={() => applyFormat('underline')}>
              <Underline size={16} />
            </button>
          </div>
          <button>Send Now</button>
        </div>
      </div>
    </div>
  );
}
