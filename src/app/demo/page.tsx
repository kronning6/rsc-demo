import teamData from './data.json';
import Pixel from './Pixel';
import ScrollableWrapper from './ScrollableWrapper';

const pageTitle = 'RSC Demo';
export const metadata = {
  title: pageTitle,
};


// TeamMemberInfo API
interface TeamMemberInfo {
  name: string,
  img: string,
};

const getTeamMemberInfo = async (duration: number = 500): Promise<TeamMemberInfo[]> => {
    return new Promise<TeamMemberInfo[]>((resolve) => {
        setTimeout(() => {
            resolve(teamData.data as TeamMemberInfo[]);
        }, duration);
    })
};


// DemoPage
export default async function DemoPage() {
  const teamMemberInfo = await getTeamMemberInfo(1000);
  return (
    <ScrollableWrapper>
      <>
        <h1 className="text-4xl">{pageTitle}</h1>
        <div className="mt-5">
          {
            teamMemberInfo
              .sort((a, b) => 0.5 - Math.random())
              .map((i, index) => {
                return <img className="w-[150px] h-[100px] inline-flex" src={i.img} />
              })
          }
        </div>
      </>
    </ScrollableWrapper>
  );
}
