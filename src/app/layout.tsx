import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Enhance Fengshui Astrology｜风水命理服务聚合平台";
const description = "聚合风水、八字、每日运势、择日、家居风水、事业财运、感情与姓名号码服务，快速找到适合你的专业入口。";

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
    siteName: "Enhance Fengshui Astrology",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070B10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
