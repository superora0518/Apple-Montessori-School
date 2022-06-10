import type { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';
import { useState } from 'react';

import styles from './checkbox.module.css';

export enum CheckboxTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

type OnClickHandler = (event: any, status: boolean) => void;

interface ComponentGroup {
  className?: string;
  type?: CheckboxTypes;
  width?: number;
  height?: number;
  round?: number;
  status?: boolean;
  style?: CSSProperties;
  onClick?: OnClickHandler;
  children?: ReactNode;
}

const Button: FC<ComponentGroup> = ({
  className = '',
  type = CheckboxTypes.DEFAULT,
  width = 32,
  height = 32,
  round = 8,
  style,
  onClick = () => {},
  ...props
}) => {
  const [status, setStatus] = useState(props.status || false);
  const clickHandler: MouseEventHandler<HTMLSpanElement> = (event) => {
    onClick(event, !status);
    setStatus(!status);
  };

  return (
    <span
      className={`flex justify-center items-center ${styles['checkbox-item']} ${
        styles[type]
      } ${status ? styles.active : ''} ${className}`}
      onClick={clickHandler}
      style={{ width, height, borderRadius: round, ...style }}
    >
      <span style={{ width: (width * 5) / 9, height: (height * 5) / 9 }} />
    </span>
  );
};

export default Button;
