import { BeagleJSX, Actions, FC } from '@zup-it/beagle-backend-core'
import { StyledDefaultComponent, WithStyle } from '../style/styled'
import { WithAccessibility, WithTheme } from '../types'

interface ButtonProps extends WithAccessibility, WithTheme, WithStyle {
  text: string,
  onPress?: Actions,
  enabled?: boolean,
}

export const Button: FC<ButtonProps> = ({ id, style, ...props }) => (
  <StyledDefaultComponent name="button" id={id} style={style} properties={props} />
)
