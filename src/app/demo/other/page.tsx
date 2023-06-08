import ScrollableWrapper from '../ScrollableWrapper';

const pageTitle = 'RSC Demo - other page';
export const metadata = {
  title: pageTitle,
};

const slowly = async (duration: number = 500): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
      setTimeout(() => {
          resolve(true);
      }, duration);
  });
};


export default async function DemoOtherPage() {
  await slowly(2500);
  return (
    <ScrollableWrapper>
      <>
        <h1 className="text-4xl">{pageTitle}</h1>
        <p className="mt-5">
          This is the other page...
        </p>
      </>
    </ScrollableWrapper>
  );
}

