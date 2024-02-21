import { cva } from 'class-variance-authority';

export { default as Button } from './Button.vue';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        'white-outline': 'bg-transparent border-2 hover:bg-primary-foreground hover:text-primary hover:box-shadow-light1-hover', // 設計稿按鈕樣式
        'white-blur': 'bg-transparent border-2 box-shadow-light2 hover:bg-primary-foreground hover:text-primary hover:box-shadow-light2-hover', // 設計稿按鈕樣式
        'tiffany-outline': 'border-2 border-tiffany text-tiffany hover:bg-tiffany hover:text-primary hover:box-shadow-tiffany-outline-hover',
        'tiffany-blur': 'border-2 border-tiffany text-tiffany box-shadow-light2 hover:bg-tiffany hover:text-primary hover:box-shadow-tiffany-blur-hover',
        'tiffany-fill': 'bg-tiffany text-primary',
        'pink-outline': 'border-2 border-pink text-pink hover:bg-pink hover:text-primary hover:box-shadow-pink-outline-hover',
        'pink-blur': 'border-2 border-pink text-pink box-shadow-pink-blur hover:bg-pink hover:text-primary hover:box-shadow-pink-blur-hover',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'side-bar': 'bg-white text-lg text-gray-400 w-full text-left justify-start rounded-none hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100',
        'side-bar-active':
          'text-lg text-gray-800 w-full text-left justify-start rounded-none bg-white border-e-4 border-indigo-500/100 hover:text-gray-800 hover:bg-white hover:border-e-4 hover:border-indigo-500/100',
        page: 'hidden sm:block border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        base: 'h-10 p-2 md:p-4 lg:p-6 rounded-btn1',
        btn1: 'p-6 rounded-btn2', // 設計稿按鈕樣式大小
        btn2: 'p-6 rounded-btn2', // 設計稿按鈕樣式大小
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        'side-bar': 'py-4 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
