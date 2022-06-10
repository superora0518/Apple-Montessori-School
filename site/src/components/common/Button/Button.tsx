import type { CSSProperties, FC, MouseEventHandler, ReactNode } from 'react';

import styles from './button.module.css';

export enum JUSTIFYCONTENT {
  START = 'justify-start',
  END = 'justify-end',
  CENTER = 'justify-center',
  BETWEEN = 'justify-between',
  AROUND = 'justify-around',
  EVENLY = 'justify-evenly',
}

export enum ALIGNITEMS {
  START = 'items-start',
  END = 'items-end',
  CENTER = 'items-center',
  STRETCH = 'items-stretch',
}

export enum ButtonTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
}

interface ComponentGroup {
  className?: string;
  type?: ButtonTypes;
  round?: boolean;
  style?: CSSProperties;
  flex?: boolean;
  justifyContent?: JUSTIFYCONTENT;
  alignItems?: ALIGNITEMS;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
}

const Button: FC<ComponentGroup> = ({
  className = '',
  type = ButtonTypes.DEFAULT,
  round = false,
  style,
  onClick = () => {},
  flex = true,
  justifyContent = JUSTIFYCONTENT.BETWEEN,
  alignItems = ALIGNITEMS.START,
  ...props
}) => {
  return (
    <div
      className={`${flex ? `flex ${justifyContent} ${alignItems}` : ''} ${
        styles[type]
      } ${styles['button-item']} ${className} ${round ? styles.round : ''}`}
      onClick={onClick}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Button;
