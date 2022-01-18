import { BeagleJSX, Component, FC } from '@zup-it/beagle-backend-core'
import { Container, Text } from '.'

interface FragmentProps {
  children?: string | Component | Component[],
}

export const Fragment: FC<FragmentProps> = ({ children }) => {
  if (typeof children === 'string') return <Container><Text>{children}</Text></Container>
  return <Container>{children ?? []}</Container>
}