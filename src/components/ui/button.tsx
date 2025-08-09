import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', style, ...props }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            color: '#1E5BB8',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            position: 'relative' as const,
            overflow: 'hidden' as const,
            ...style
          }
        case 'secondary':
          return {
            backgroundColor: '#3D8AF7',
            color: 'white',
            ...style
          }
        case 'outline':
          return {
            border: '2px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            ...style
          }
        default:
          return style
      }
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-medium'
    }

    return (
      <button
        className={cn(
          'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 cursor-pointer group overflow-hidden',
          'hover:shadow-xl',
          'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
          'before:translate-x-[-200%] before:transition-transform before:duration-600',
          'hover:before:translate-x-[200%]',
          sizes[size],
          className
        )}
        style={getVariantStyles()}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)'
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 91, 184, 0.25)'
            e.currentTarget.style.transform = 'scale(1.02)'
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
            e.currentTarget.style.transform = 'scale(1)'
          }
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
