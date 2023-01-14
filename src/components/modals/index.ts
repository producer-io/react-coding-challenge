import { ButtonProps } from '../buttons/index';

export * from './basic-modal';

export type ModalProps = {
  title: string;

  content: string;

  isOpen: boolean;

  primaryAction: ButtonProps;
  
  secondaryAction?: ButtonProps;
}

