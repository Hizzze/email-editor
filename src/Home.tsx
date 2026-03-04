import { EmailEditor } from './components/email-editor/EmailEditor';
import { EmailList } from './components/email-list/EmailList';
import styles from './components/email-editor/EmailEditor.module.scss';

export function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr .6fr',
        padding: '1.5rem',
      }}>
      <EmailEditor />
      <EmailList />
    </div>
  );
}
