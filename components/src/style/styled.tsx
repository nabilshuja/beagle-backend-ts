import { BeagleJSX, FC, coreNamespace, WithContext, WithChildren } from '@zup-it/beagle-backend-core'
import { validateColor } from '../validations'
import { fromSimpleStyle } from './converter'
import { SimpleStyle } from './simple-styles'

export interface WithStyle {
  style?: SimpleStyle,
}

interface StyledComponentProps extends WithContext, WithChildren {
  name: string,
  namespace?: string,
  properties?: Record<string, any>,
  style: WithStyle['style'],
}

export const StyledComponent: FC<StyledComponentProps> = ({
  name,
  style,
  children,
  context,
  id,
  namespace,
  properties,
}) => {
  validateColor(style?.backgroundColor)
  validateColor(style?.borderColor)
  // @ts-ignore todo: actually implement jsx and check these errors. This Error is shown only when compiling.
  return (
    <component
      name={name}
      context={context}
      id={id}
      namespace={namespace}
      properties={{ ...fromSimpleStyle(style), ...properties }}
    >
      {children}
    </component>
  )
}

export const StyledDefaultComponent: FC<Omit<StyledComponentProps, 'namespace'>> = ({ children, ...props }) => (
  <StyledComponent {...props} namespace={coreNamespace}>{children}</StyledComponent>
)
