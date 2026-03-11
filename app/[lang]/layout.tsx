export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
 
export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  return (
    <html lang={(await params).lang}>
      <body>{children}</body>
    </html>
  )
}