import { dalleUseCase, DALLE_COMMAND } from '@/libs/neuro/application'
import { PriorityBuilder } from '@/libs/shared/workflow'

import { createNeuroContainer } from './neuro.container'
import { CheeseBot } from '@/libs/shared/bot'

export type NeuroControllerDeps = {
  cheeseBot: CheeseBot
  botBuilder: PriorityBuilder
}

export const configureNeuro =
  ({ cheeseBot, botBuilder }: NeuroControllerDeps) =>
  () => {
    const container = createNeuroContainer()

    botBuilder.add(() =>
      cheeseBot.useGeneratorCommand(
        DALLE_COMMAND,
        container.cradle.dalleUseCase,
        ({ strippedMessage }) => ({ prompt: strippedMessage }),
        {
          maxInProgress: 3,
        },
      ),
    )
  }
