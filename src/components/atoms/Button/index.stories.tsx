import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Component, { Props } from '.'

export default {
  title: 'components/atoms/Button',
  component: Component,
  argTypes: {
    colorTheme: {
      options: ['dark', 'light'],
      control: { type: 'select' },
      defaultValue: 'dark',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Component {...args} />

export const Dark = Template.bind({})
Dark.args = {
  buttonText: 'ハムストリングス',
  colorTheme: 'dark',
  linkTo: 'https://kaiseihp.jp/news/id_11936',
  border: false,
}

export const Light = Template.bind({})
Light.args = {
  buttonText: 'テイクオーバーゾーン',
  colorTheme: 'light',
  linkTo:
    'https://kotobank.jp/word/%E3%83%86%E3%83%BC%E3%82%AF%E3%82%AA%E3%83%BC%E3%83%90%E3%83%BC%E3%82%BE%E3%83%BC%E3%83%B3-672484',
  border: false,
}
