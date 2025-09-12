import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Fonction utilitaire pour combiner et optimiser les classes CSS
 * Utilise clsx pour la logique conditionnelle et tailwind-merge pour optimiser les classes Tailwind
 * 
 * @param inputs - Classes CSS à combiner (peut être des chaînes, objets, tableaux, etc.)
 * @returns Chaîne de classes CSS optimisées
 * 
 * @example
 * cn('px-2 py-1', 'bg-red-500', { 'text-white': true, 'text-black': false })
 * // Retourne: "px-2 py-1 bg-red-500 text-white"
 * 
 * @example
 * cn('px-2', 'px-4') // tailwind-merge optimise px-2 et px-4
 * // Retourne: "px-4" (px-4 remplace px-2)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Alias pour la fonction cn (plus court à utiliser)
 */
export const classNames = cn;

/**
 * Fonction utilitaire pour créer des classes conditionnelles avec des variantes
 * 
 * @param base - Classes de base
 * @param variants - Objet de variantes avec leurs classes
 * @param className - Classes additionnelles
 * @returns Classes CSS combinées
 * 
 * @example
 * const buttonClasses = cva(
 *   'px-4 py-2 rounded font-medium transition-colors',
 *   {
 *     variants: {
 *       variant: {
 *         primary: 'bg-primary text-white hover:bg-primary-dark',
 *         outline: 'border border-primary text-primary hover:bg-primary hover:text-white'
 *       },
 *       size: {
 *         sm: 'text-sm',
 *         md: 'text-base',
 *         lg: 'text-lg px-6 py-3'
 *       }
 *     },
 *     defaultVariants: {
 *       variant: 'primary',
 *       size: 'md'
 *     }
 *   }
 * );
 */
export function cva(
  base: string,
  config: {
    variants?: Record<string, Record<string, string>>;
    defaultVariants?: Record<string, string>;
  } = {}
) {
  return function cvaFn(
    variantProps: Record<string, string | undefined> = {},
    className?: string
  ) {
    const { variants = {}, defaultVariants = {} } = config;
    
    // Combiner les variantes par défaut avec celles fournies
    const combinedVariants = { ...defaultVariants, ...variantProps };
    
    // Construire les classes de variantes
    const variantClasses = Object.entries(combinedVariants)
      .map(([key, value]) => value && variants[key]?.[value])
      .filter(Boolean)
      .join(' ');
    
    // Combiner avec les classes de base et additionnelles
    return cn(base, variantClasses, className);
  };
}
