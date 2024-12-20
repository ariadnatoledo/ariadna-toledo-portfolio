import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "next-themes";  

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
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
