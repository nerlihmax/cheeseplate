import { UseCaseContext } from './context'

export type UseCaseResult = {
  message: string
}

export type UseCase<Input> = (
  ctx: UseCaseContext<Input>,
) => Promise<UseCaseResult | undefined | null | void | never>