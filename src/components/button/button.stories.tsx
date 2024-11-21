import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
    args: {
		children: 'Button',
		category: 'Standard',
		mainColor: 'Default',
		size: 'Standard',
	},
	argTypes: {
		disabled: { 
			control: 'boolean',
		},
		mainColor: {
			control: 'select',
		},
		category: {
			control: 'select',
		}
	},
} satisfies Meta;

export default meta;

export const Default: Story = {
	args: {
		children: 'Button',
		mainColor: 'Default',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Button',
		mainColor: 'Secondary',
	},
};

export const AccentCool: Story = {
	args: {
		children: 'Button',
		mainColor: "Accent Cool",
	},
};

export const AccentWarm: Story = {
	args: {
		children: 'Button',
		mainColor: 'Accent Warm',
	},
};

export const Base: Story = {
	args: {
		children: 'Button',
			mainColor: 'Base',
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
			category: 'Outline',
	},
};

export const Unstyled: Story = {
	args: {
		children: 'Button',
			category: 'Unstyled',
	},
};

export const sizeBig: Story = {
	args: {
		children: 'Button',
			size: 'Big',
	},
};