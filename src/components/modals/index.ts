import { ButtonProps } from '../buttons/index';

export * from './basic-modal';

export type ModalProps = {
  title: string;

  content: string;

  isOpen: boolean;

  handleClose: () => void;

  primaryAction: ButtonProps;
  
  secondaryAction?: ButtonProps;
}

