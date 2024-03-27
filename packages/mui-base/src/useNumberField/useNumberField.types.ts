import type { ScrubHandle } from './useScrub.types';

export interface UseNumberFieldReturnValue {
  getGroupProps: (props?: React.ComponentPropsWithRef<'div'>) => React.ComponentPropsWithRef<'div'>;
  getInputProps: (
    props?: React.ComponentPropsWithRef<'input'>,
  ) => React.ComponentPropsWithRef<'input'>;
  getIncrementButtonProps: (
    props?: React.ComponentPropsWithRef<'button'>,
  ) => React.ComponentPropsWithRef<'button'>;
  getDecrementButtonProps: (
    props?: React.ComponentPropsWithRef<'button'>,
  ) => React.ComponentPropsWithRef<'button'>;
  getScrubAreaProps: (
    props?: React.ComponentPropsWithRef<'span'>,
  ) => React.ComponentPropsWithRef<'span'>;
  inputValue: string;
  value: number | null;
  inputRef: React.RefObject<HTMLInputElement>;
  scrubAreaRef: React.RefObject<HTMLSpanElement>;
  scrubHandleRef: React.RefObject<ScrubHandle | null>;
  virtualCursorRef: React.RefObject<HTMLSpanElement>;
  isScrubbing: boolean;
  cursorStyles: React.CSSProperties;
}
