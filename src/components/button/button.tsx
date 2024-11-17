import { ComponentProps } from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'> & {
	variant: 'primary' | 'secondary' | 'destructive';
};

// export const Button = ({variant, className,...props}: ButtonProps) => { // what does {variant, ...props} do?
// 	let classes = styles.button;
// 	if (variant === 'secondary') className += ` ${styles.secondary}`;
// 	if (variant === 'destructive') className += ` ${styles.destructive}`;

// 	return <button className={classes} {...props} />;
// 	// return <button {...props} className={classes} /> 
// };

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, {
				[styles.secondary]: variant === 'secondary',
				[styles.destructive]: variant === 'destructive',
			})}
			{...props}
		/>
	);
};


