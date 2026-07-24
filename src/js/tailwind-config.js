// Configuración de Tailwind (extiende la paleta y tipografías del sitio).
// Debe cargarse DESPUÉS de <script src="https://cdn.tailwindcss.com"></script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink:      '#131313',
        panel:    '#1B1B1A',
        panel2:   '#212120',
        paper:    '#F3EFE0',
        mustard:  '#E5A93C',
        tacos:    '#E65B2B',
        rojo:     '#D8432E',
        nopal:    '#3E8360',
        electric: '#4C5FE8',
        magenta:  '#D6217A',
      },
      fontFamily: {
        display: ['"Mexcellent"', '"Anton"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        metro: ['"MetroDF"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
};
