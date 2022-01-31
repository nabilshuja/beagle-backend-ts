import { Actions, BeagleJSX, Expression, FC } from '@zup-it/beagle-backend-core'

interface Props {
  productId: Expression<number>,
  image: Expression<string>,
  title: Expression<string>,
  price: Expression<string>,
  onPress: Actions,
}

export const ProductItem: FC<Props> = ({ id, ...props }) => (
  <component name="productItem" id={id} properties={props} />
)
