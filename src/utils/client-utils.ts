import 'client-only';

export const clientSideFunc = () => {
  console.log(`
    use window object
    use localStorage
  `);
  return 'client result';
};
