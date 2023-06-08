import { Suspense } from 'react';
import teamData from './data.json';
import Pixel from './Pixel';
import ScrollableWrapper from '../ScrollableWrapper';
import TeamMemberInfo from './TeamMemberInfo';

const pageTitle = 'RSC Demo';
export const metadata = {
  title: pageTitle,
};






// Tokyo Night (https://github.com/enkia/tokyo-night-vscode-theme)
const colors = [
  '#f7768e',
  '#ff9e64',
  '#e0af68',
  '#9ece6a',
  '#73daca',
  '#b4f9f8',
  '#2ac3de',
  '#7dcfff',
  '#7aa2f7',
  '#bb9af7',
  '#c0caf5',
  '#a9b1d6',
  '#9aa5ce',
  '#cfc9c2',
  // '#565f89',
  '#414868',
  '#24283b',
  '#1a1b26',
];


// TeamMemberInfo API
const getTeamMemberInfo = async (duration: number = 500): Promise<TeamMemberInfo[]> => {
  return new Promise<TeamMemberInfo[]>((resolve) => {
    setTimeout(() => {
      const data = (teamData.data.map((i) => {
        return {
          img: i.img,
          name: 'Who am I?',
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.floor(Math.random() * 10000) + 500,
        }
      }) as TeamMemberInfo[]);
      resolve(data);
    }, duration);
  });
};
//






// GridLoading
function GridLoading() {
  return (
    <div>
      {
        [...Array(24).keys()].map(() => (
          <div className="m-1 w-56 h-36 inline-flex items-center justify-center rounded bg-[#565f89]">Grid Loading...</div>
        ))
      }
    </div>
  );
}
// Grid
async function Grid() {
  const teamMemberInfo = await getTeamMemberInfo(1000);

  return (
    <div className="mt-5">
      {
        teamMemberInfo
          .sort(() => 0.5 - Math.random())
          .map((i) => {
            return <Pixel teamMember={i} />
          })
      }
    </div>
  );
}
//






// DemoPage
export default async function DemoPage() {
  return (
    <ScrollableWrapper>
      <>
        <h1 className="text-4xl">{pageTitle}</h1>
        <Suspense fallback={<GridLoading />}>
          <Grid />
        </Suspense>
      </>
    </ScrollableWrapper>
  );
}

