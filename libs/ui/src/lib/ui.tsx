import styles from './ui.module.scss';

interface Data {
  key: string;
  content: string;
}

export interface UiProps {
  data: Array<Data>;
}

export function Ui(props: UiProps) {
  return (
    <ul className={styles['container']}>
      {props.data.map(d => (
          <li key={d.key}>
            {d.content}
          </li>
        ))}
    </ul>
  );
}

export default Ui;
