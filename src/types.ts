declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'epilot-journey': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'journey-id': string;
          mode: 'inline' | 'full-screen';
          'top-bar'?: string;
          lang?: 'en' | 'de';
          'is-embedded': string;
        },
        HTMLElement
      >;
    }
  }
}
