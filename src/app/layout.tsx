import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Enhance Fengshui｜东方命理 × 现代 AI 专业服务矩阵";
const description = "一站式聚合紫微易名、AI 风水命理大师、八字专业排盘、流日运势、家居风水与事业求财。东方古籍智慧赋能现代高维决策。";

export const metadata: Metadata = {
  metadataBase: new URL("https://enhancefengshui.com"),
  title,
  description,
  alternates: { canonical: "/services" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "zh_CN",
    url: "/services",
    siteName: "Enhance Fengshui Astrology Matrix",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06090E",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
