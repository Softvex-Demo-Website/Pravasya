/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                saffron: {
                    50: '#FFF5E6',
                    100: '#FFE4BF',
                    200: '#FFD199',
                    300: '#FFBE73',
                    400: '#FFAB4D',
                    500: '#FF9933',
                    600: '#E6802D',
                    700: '#CC6626',
                    800: '#B34D20',
                    900: '#993319'
                },
                deepGreen: {
                    50: '#E8F5EE',
                    100: '#C5E6D4',
                    200: '#9FD4B8',
                    300: '#79C29C',
                    400: '#53B080',
                    500: '#0F5132',
                    600: '#0D472C',
                    700: '#0B3D26',
                    800: '#093320',
                    900: '#07291A'
                },
                earthBrown: {
                    50: '#F5F0ED',
                    100: '#E6DBD4',
                    200: '#D4C4B8',
                    300: '#C2AD9C',
                    400: '#B09680',
                    500: '#5C4033',
                    600: '#52392E',
                    700: '#473229',
                    800: '#3D2B24',
                    900: '#33241F'
                }
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Poppins', 'sans-serif'],
                marathi: ['Rozha One', 'serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'bounce-subtle': 'bounceSubtle 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(50px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' }
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' }
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 153, 51, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 153, 51, 0.6)' }
                }
            },
            backgroundImage: {
                'gradient-saffron': 'linear-gradient(135deg, #FF9933 0%, #E6802D 100%)',
                'gradient-green': 'linear-gradient(135deg, #0F5132 0%, #0D472C 100%)',
                'gradient-hero': 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
                'warli-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF9933' fill-opacity='0.08'%3E%3Cpath d='M30 30l15-15v30H15V15l15 15zm0 0l-15 15V15h30v30L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            },
            boxShadow: {
                'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'card-hover': '0 8px 40px rgba(0, 0, 0, 0.12)',
                'button': '0 4px 15px rgba(255, 153, 51, 0.3)',
                'button-hover': '0 6px 25px rgba(255, 153, 51, 0.5)'
            }
        },
    },
    plugins: [],
}
