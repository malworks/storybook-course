import { ComponentProps } from 'react';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
	category: 'Standard' | 'Outline' | 'Unstyled';
	mainColor: 'Default' | 'Secondary' | 'Accent Cool' | 'Accent Warm' | 'Base';
	size: 'Standard' | 'Big';
};

export const Button = ({ category = 'Standard', mainColor = 'Default', size = 'Standard', className, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx('usa-button', {
				'usa-button--secondary': mainColor === 'Secondary',
				'usa-button--accent-cool': mainColor === 'Accent Cool',
				'usa-button--accent-warm': mainColor === 'Accent Warm',
				'usa-button--base': mainColor === 'Base',
				'usa-button--big': size === 'Big',
				'usa-button--outline': category === 'Outline',
				'usa-button--unstyled': category === 'Unstyled',
			})}
			{...props}
		/>
	);
};

