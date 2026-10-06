import styles from './SectionDivider.module.css';

export function SectionDivider({ variant = 'solid', spacing = 'medium' }) {
  const spacingClass = {
    small: styles.spacingSmall,
    medium: styles.spacingMedium,
    large: styles.spacingLarge
  }[spacing];

  const dividerClass = `${styles.divider} ${styles[variant]} ${spacingClass}`;

  return <hr className={dividerClass} />;
}
