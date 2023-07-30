/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        saira: "Saira Stencil One",
      },
      backgroundImage: {
        backHero: "url('/src/assets/HeroSection/Background.webp')",
        backToolkit: "url('/src/assets/ToolkitSection/BackToolkit.webp')",
        backHeroSmartphone:
          "url('/src/assets/HeroSection/BackgroundSmartphone.webp')",
        backEgypt: "url('/src/assets/DestinationSection/EgyptLandscape.webp')",
        backRoma: "url('/src/assets/DestinationSection/RomanLandscape.webp')",
        backMiddleage:
          "url('/src/assets/DestinationSection/MiddleageLandscape.webp')",
        backEpoque:
          "url('/src/assets/DestinationSection/EpoqueEnvironment.webp')",
        back1920: "url('/src/assets/DestinationSection/1920Landscape.webp')",
        backFuture:
          "url('/src/assets/DestinationSection/FutureLandscape.webp')",
      },
    },
  },
  plugins: [],
};
