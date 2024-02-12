export type BaseLink = {
  href: string;
  text: string;
};

export interface NextPageProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}

export interface NextLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}
