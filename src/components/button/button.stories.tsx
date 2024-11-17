import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
    args: {
		children: 'Button',
		variant: 'Default',
		size: 'Standard',
	},
	argTypes: {
		disabled: { 
			control: 'boolean',
		},
		variant: {
			control: 'select',
		}
	},
} satisfies Meta;

export default meta;

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'Default',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		variant: 'Secondary',
	},
};

export const AccentCool: Story = {
	args: {
		children: 'Button',
		variant: "Accent Cool",
	},
};

export const AccentWarm: Story = {
	args: {
		children: 'Button',
			variant: 'Accent Warm',
	},
};