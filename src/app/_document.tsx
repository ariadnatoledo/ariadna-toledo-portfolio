import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "next-themes";  

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <body>
          <ThemeProvider attribute="class">
            <Main />
            <NextScript />
          </ThemeProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
