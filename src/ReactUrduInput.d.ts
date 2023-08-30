import React from 'react';

export interface ReactUrduInputProps {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  value?: string | undefined;
}

declare const ReactUrduInput: React.SFC<ReactUrduInputProps>

export default ReactUrduInput
