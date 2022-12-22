import React from 'react';
// import styles from './ui.module.scss';

interface Data {
  key: string;
  content: string;
}

export interface UiProps {
  data: Array<Data>;
}

export function Ui(props: UiProps) {
  return (
    <React.Suspense fallback={null}>
      This is a new UI
    <ul>
      {props.data.map(d => (
          <li key={d.key}>
            {d.content}
          </li>
        ))}
    </ul>
    </React.Suspense>
  );
}

export default Ui;
