@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));

  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));

  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));

  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));

  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --font-sans: var(--app-font-sans);
  --font-mono: var(--app-font-mono);

  --radius-sm: var(--radius);
  --radius-md: var(--radius);
  --radius-lg: var(--radius);
  --radius-xl: var(--radius);
}

:root {
  --background: 37 33% 94%;
  --foreground: 0 0% 0%;
  --border: 0 0% 0%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 0%;
  --card-border: 0 0% 0%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 0%;
  --popover-border: 0 0% 0%;
  --primary: 50 100% 71%;
  --primary-foreground: 0 0% 0%;
  --secondary: 0 0% 100%;
  --secondary-foreground: 0 0% 0%;
  --muted: 37 10% 85%;
  --muted-foreground: 0 0% 25%;
  --accent: 176 56% 55%;
  --accent-foreground: 0 0% 0%;
  --destructive: 360 100% 71%;
  --destructive-foreground: 0 0% 0%;
  --input: 0 0% 0%;
  --ring: 0 0% 0%;

  --app-font-sans: 'Space Grotesk', sans-serif;
  --app-font-mono: 'JetBrains Mono', monospace;
  --radius: 0px;
}

.dark {
  --background: 37 33% 94%;
  --foreground: 0 0% 0%;
  --border: 0 0% 0%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 0%;
  --card-border: 0 0% 0%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 0%;
  --popover-border: 0 0% 0%;
  --primary: 50 100% 71%;
  --primary-foreground: 0 0% 0%;
  --secondary: 0 0% 100%;
  --secondary-foreground: 0 0% 0%;
  --muted: 37 10% 85%;
  --muted-foreground: 0 0% 25%;
  --accent: 176 56% 55%;
  --accent-foreground: 0 0% 0%;
  --destructive: 360 100% 71%;
  --destructive-foreground: 0 0% 0%;
  --input: 0 0% 0%;
  --ring: 0 0% 0%;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}

@layer utilities {
  .brutalist-border {
    border: 3px solid #000;
    border-radius: 0;
  }
  .brutalist-shadow {
    box-shadow: 5px 5px 0px 0px #000;
  }
  .brutalist-hover {
    transition: none;
  }
  .brutalist-hover:hover {
    transform: translate(3px, 3px);
    box-shadow: 2px 2px 0px 0px #000;
  }

  .brutalist-card {
    border: 3px solid #000;
    border-radius: 0;
    box-shadow: 5px 5px 0px 0px #000;
    transition: none;
    display: block;
  }
  .brutalist-card:hover {
    transform: translate(3px, 3px);
    box-shadow: 2px 2px 0px 0px #000;
  }

  .brutalist-button {
    border: 3px solid #000;
    border-radius: 0;
    box-shadow: 5px 5px 0px 0px #000;
    transition: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    cursor: pointer;
  }
  .brutalist-button:hover {
    transform: translate(3px, 3px);
    box-shadow: 2px 2px 0px 0px #000;
  }
}
