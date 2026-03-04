import { TextareaHTMLAttributes, useRef, useState } from 'react';
import styles from './EmailEditor.module.scss';
import { Bold, Eraser, Italic, Underline } from 'lucide-react';

export function EmailEditor() {
  const [text, setText] = useState(
    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, animi eaque distinctio delectus voluptatibus reiciendis nemo accusantium exercitationem quibusdam architecto recusandae sunt maxime amet a sint perspiciatis in. Amet, obcaecati!',
  );

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const getSelectionText = () => {
    if (!textRef) return;
    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;
    let selectedText = text.substring(cursorStart, cursorEnd);

    if (!selectedText) return;

    console.log(selectedText);
  };
  return (
    <div>
      <h1>Email Editor</h1>
      <div className={styles.card}>
        <textarea
          ref={textRef}
          className={styles.editor}
          spellCheck="false"
          onClick={getSelectionText}
          value={text}
          onChange={(e) => setText(e.target.value)}></textarea>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}>
              <Eraser size={16} />
            </button>
            <button>
              <Bold size={16} />
            </button>
            <button>
              <Italic size={16} />
            </button>
            <button>
              <Underline size={16} />
            </button>
          </div>
          <button>Send Now</button>
        </div>
      </div>
    </div>
  );
}
