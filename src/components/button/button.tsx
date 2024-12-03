import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
	variant: 'Default' | 'Secondary' | 'Accent Cool' | 'Accent Warm';
	size: 'Standard' | 'Big';
};

export const Button = ({ variant = 'Default', size = 'Standard', className, ...props }: ButtonProps) => {
	return (
		<button
			className={clsx('usa-button', {
				// [styles.Default]: variant === 'Default', Not Needed?
				'usa-button--secondary': variant === 'Secondary',
				'usa-button--accent-cool': variant === 'Accent Cool',
				'usa-button--accent-warm': variant === 'Accent Warm',
				// [styles.sizeStandard]: size === 'Standard', Not needed?
				'usa-button--big': size === 'Big',
			})}
			{...props}
		/>
	);
};


// export const Button = ({ variant = 'Default', size = 'Standard', className, ...props }: ButtonProps) => {
// 	let classes = clsx(styles.button, styles[variant], styles[size], className);

// 	return <button {...props} className=[classes] />
// };

