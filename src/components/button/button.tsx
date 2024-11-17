import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
	variant: 'Default' | 'Secondary' | 'Accent Cool' | 'Accent Warm';
};

export const Button = ({ variant = 'Default', ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, {
				[styles.secondary]: variant === 'Secondary',
				[styles.AccentCool]: variant === 'Accent Cool',
				[styles.AccentWarm]: variant === 'Accent Warm',
			})}
			{...props}
		/>
	);
};


