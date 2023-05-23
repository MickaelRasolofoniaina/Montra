import React from "react";

import { ContainerProps } from "modules/shared/props/generic";

type RenderProps = ContainerProps & { when: boolean };

export const Render: React.FC<RenderProps> = ({ when, children }) => {
  if(when) {
    return <>{children}</>;
  }
  return <></>;
}